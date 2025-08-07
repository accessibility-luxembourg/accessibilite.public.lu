const ejs = require('ejs')
const MarkdownIt = require('markdown-it') 
const fs = require('fs')          
const cheerio = require('cheerio')
const en301549 = require('en301549-links')
const postprocessing = require('./postprocessing')
const wcagTrad = {
    "fr": require('../locales/WCAG-SC-Translations-fr.json'),
    "en": require('../locales/WCAG-SC-Translations-en.json')
}
const dotenv = require('dotenv')



dotenv.config()

/**
 * Check if running in production environment
 * @returns {boolean} True if NODE_ENV is 'production'
 */
function isProd() {
    return (process.env.NODE_ENV === 'production')
}

/**
 * Generate URL paths for pages
 * @param {Object} config - Site configuration object
 * @param {string} lang - Target language (fr/en)
 * @param {string} name - Page name
 * @param {string} file - Source file path
 * @returns {string} Generated URL path or 404 if page doesn't exist
 */
function genURL(config, lang, name, file) {
    const path = '/'+lang+'/'+name+'.html'

    // Check if page exists in the configuration
    if (config[lang].names.includes(name)) {
        return path
    } else if (file.match(/^\/(de|en|fr)\/news\//)) {
        // Handle news articles
        return file.replace(/^\/(de|en|fr)/, '/' + lang)
    } else {
        // Return 404 for non-existent pages
        return '/'+lang+'/404.html'
    }
}

/**
 * Includes pre-rendered data into the main template, applies postprocessing to it and saves it to a file.
 * @param {Object} config - Site configuration
 * @param {string} data - pre-rendered data (content of the page) to be included into the main template
 * @param {string} title - Page title
 * @param {string} lang - Language code
 * @param {string} file - Output file path
 * @param {string} name - Page name
 * @param {string} prefix - URL prefix
 * @param {Function} __ - Translation function
 * @param {boolean} withSummary - Whether to include summary
 * @param {string} error - Error message if any
 * @param {boolean} withoutTitle - Skip title rendering
 * @param {boolean|string} ogDesc - Open Graph description
 * @param {boolean|string} imgTwitter - Twitter card image
 * @param {boolean|string} imgLinkedin - LinkedIn card image
 * @param {boolean} full_width - Use full width layout
 */
function renderToFile(config, data, title, lang, file, name, prefix, __, withSummary = false, error = '', withoutTitle = false, ogDesc = false, imgTwitter = false, imgLinkedin = false, full_width = false) {
    // Render the main template with all provided data
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, lang: lang, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prod: isProd(), prefix: prefix, error: error, withSummary: withSummary, withoutTitle: withoutTitle, ogDesc: ogDesc, imgTwitter: imgTwitter, imgLinkedin: imgLinkedin, full_width: full_width, genURL: genURL, '__': __}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        // Apply post-processing transformations
        str = postprocessing.main(str, name, __)
        // Write the final HTML to file
        fs.writeFileSync(file, str)
    });
}

/**
 * postprocessing function after markdown rendering, and save the result to a file
 * @param {Object} config - Site configuration
 * @param {string} data - HTML content data
 * @param {string} title - Page title
 * @param {string} lang - Language code
 * @param {string} file - Output file path
 * @param {string} name - Page name
 * @param {string} prefix - URL prefix
 * @param {string} summary - Summary type configuration
 * @param {string} summaryTitle - Title for the summary section
 * @param {Function} __ - Translation function
 * @param {string} error - Error message if any
 */
function renderWithSummary(config, data, title, lang, file, name, prefix, summary, summaryTitle, __, error = '') {
    if (summary !== undefined) {
        const $ = cheerio.load(data)
        const topics = []

        // Extract h3 headings for table of contents (excluding .no-summary)
        $('h3:not(.no-summary)').each(function(i, elem) {
            if (!$(this).next().is('h3')) {
                // Handle new RAWeb structure with theme names
                const maybeRawebTopic = $(this).find('.theme-name') 
                let text = ''
                if (maybeRawebTopic.length !== 0) {
                    text = maybeRawebTopic.text().trim()
                } else {
                    // Extract text after colon for standard headings
                    text = $(this).text().split(':').pop().trim()
                }

                // Clean up text by removing parenthetical content
                text = text.replace(/\s\(.+\)/, '')
                topics.push({"id": $(this).attr('id'), "text": text, 'class':  $(this).attr('class') }) 
            }
        })
        // Special processing for RAAM and RAPDF technical reference pages
        // Convert EN 301 549 criterion references to clickable links
        if (['raam1/referentiel-technique', 'raam1.1/referentiel-technique', 'rapdf1/referentiel-technique'].includes(name)) {
            $('h5.disclosure.mapping + ul>li').each(function(i, elem) {
                let text = $(this).text()
                if (text.match(/^EN\s301\s549/)) {
                    // Extract version number from EN 301 549 reference
                    const version = text.match(/V(\d\.\d\.\d)/)[1]
                    // Replace criterion numbers with linked versions
                    text = text.replace(/(\d{1,2}(\.\d{1,2}){0,4})\s([^\d]+)([,\.]{1})/g, (match, criterion, a, description, separator) => { 
                        let link = ''
                        try {
                            link = en301549.getLink(version, criterion, 'lang="en"')+separator
                        } catch(e) {
                            console.log(e, criterion, version)
                        }
                        return link
                    })
                    $(this).html(text)
                }
            })
        }
        // Special processing for RAWeb criteria pages
        // Convert EN 301 549 references to links in correspondence sections
        if (['raweb1/criteres'].includes(name)) {
            $('.rawebCorr ul>li, .rawebCorr div>p').each(function(i, elem) {
                let text = $(this).html()
                // Match EN 301 549 references in both paragraph and direct formats
                if (text.match(/^<p>EN\s301\s549/) || text.match(/^EN\s301\s549/)) {
                    const version = text.match(/V(\d\.\d\.\d)/)[1]
                    // Replace criterion references with links (avoiding version numbers)
                    text = text.replace(/[^V\.](\d{1,2}(\.\d{1,2}){0,4})\s([^\d]+)([,\.]{1})/g, (match, criterion, a, description, separator) => { 
                        let link = ''
                        try {
                            link = en301549.getLink(version, criterion, 'lang="en"')+separator
                        } catch(e) {
                            console.log(e, criterion, version)
                        }
                        return link
                    })
                    $(this).html(text)
                }
            })   
        }
        
        // Move script elements from head to body for proper execution order
        $('head script').each((e, a) => {
            $('body').prepend(a)
        })
        data = $('body').html()

        // Render summary template and combine with main template
        ejs.renderFile('./src/tpl/criteria_for_md.ejs', {topics: topics, data: data, list_type: summary, summaryTitle: summaryTitle, __}, function(err, str) {
            if (err !== null) {
                console.log(err)
            }    
            renderToFile(config, str, title, lang, file, name, prefix, __, true, error)
        })
    } else {
        const $ = cheerio.load(data)
        // Set language attribute for RAWeb master code elements
        $('.RAWebMaster code').each(function(i, elem) {
            $(elem).attr('lang', 'en')
        })
        // Move script elements from head to body for proper execution order
        $('head script').each((e, a) => {
            $('body').prepend(a)
        })
        data = $('body').html()
        renderToFile(config, data, title, lang, file, name, prefix, __, false, error)
    }
}

/**
 * Render homepage with latest news integration
 * @param {Object} config - Site configuration
 * @param {string} lang - Language code
 * @param {Object} page - Page configuration object
 * @param {Array} latestNews - Array of latest news articles
 * @param {string} outputPath - Output directory path
 * @param {Function} __ - Translation function
 */
function renderHome(config, lang, page, latestNews, outputPath, __) {
    // Fix image paths by removing relative path prefix
    latestNews = latestNews.map(x => {x.meta.img = x.meta.img.replace(/^\.\.\//, ''); return x})

    // Render latest news section
    ejs.renderFile('./src/tpl/latest_news.ejs', {latest_news: latestNews, __}, function(err, renderedNews) {
        if (err !== null) {
            console.log(err)
        }
        // Process markdown content and inject rendered news
        const data = genericMarkdownIt(page).render(fs.readFileSync(page.md).toString().replace('<!-- latest news -->', renderedNews))
        renderToFile(config, data, page.title, lang, outputPath+'/'+lang+'/'+page.name+'.html', page.name, page.prefix, __, false)        
    })
}

/**
 * Slugification functions are needed to generate the ids corresponding to headings.
 * These ids are used to be able to link to specific url fragments.
 * As we deal with various sources, where the links already exist, we need to compute various forms of ids.
 */

/**
 * Convert text to URL-friendly slug format
 * @param {string} str - Input string to slugify
 * @returns {string} slug
 */
function slugify(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\(\),]/g, '').replace(/«\s|\s»|\s:|`/g, '').replace(/[\s'’]/g, '-')
}

/**
 * DINUM-specific slugification 
 * @param {string} str - Input string to slugify
 * @returns {string} slug
 */
function slugifyDINUM(str) {
    // Manual character-by-character lowercase conversion
    var from = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var to   = "abcdefghijklmnopqrstuvwxyz"
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.replace(/[\u0300-\u036f]/g, "").replace(/[\(\)']/g, '').replace(/«\s|\s»/g, '').replace(/[\s]/g, '-')
}

/**
 * A42-specific slugification (extends standard slugify)
 * @param {string} str - Input string to slugify
 * @returns {string} slug
 */
function slugifyA42(str) {
    return slugify(str).replace(/'/g, '-')  // Replace apostrophes with hyphens
}

/**
 * Specialized slugification for WCAG Success Criteria
 * @param {string} str - WCAG criterion title
 * @returns {string} slug
 */
function slugifySC(str) {
    str = slugify(str.replace(/^[0-9\.]+\s/, "").replace(/\s[\(\)A]+$/, ""))
    // fix typos from RGAA
    str = str.replace(/^bypass-block$/, "bypass-blocks").replace("audio-description-and-media-alternative-prerecorded", "audio-description-or-media-alternative-prerecorded")

    return str
}

/**
 * Convert WCAG technique codes to official W3C documentation URLs
 * @param {string} str - WCAG technique code (e.g., "ARIA1", "G18")
 * @returns {string} Full URL to W3C technique documentation
 */
function tech2URL(str) {
    return str
                .replace(/^ARIA([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA$1")
                .replace(/^C([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/css/C$1")
                .replace(/^F([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/failures/F$1")
                .replace(/^G([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/general/G$1")
                .replace(/^H([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/html/H$1")
                .replace(/^SM([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM$1")
                .replace(/^SCR([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR$1")
                .replace(/^SVR([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR$1")        
}


/**
 * Apply language-specific WCAG Success Criteria translations
 * @param {string} str - WCAG criterion string with code
 * @param {string} lang - Target language code
 * @returns {string} Translated WCAG criterion
 */
function langOnWCAG(str, lang) {
    const scCode = str.replace(/\s.+$/, '')
    const scTrad = wcagTrad[lang][scCode]
    return `${scCode} ${scTrad}`
}


/**
 * Add language tags on EN 301 549 refs strings, from a deprecated source
 * @param {string} str - EN 301 549 criterion string
 */
function langOnEUNormDeprecated(str) {
    return str.replace(/^(.\..\..\..{1,2}\s?\/\s.\..\..{1,2}\s)(.*)(\s\(.*\))$/, "$1<span lang='en'>$2</span>$3")
}

/**
 * Add language tags on EN 301 549 refs strings, from a source based on WCAG refs
 * @param {string} str - WCAG criterion string
 */
function langOnEUNormFromWCAG(str) {
    return str.replace(/^(.\..\..{1,2}\s)(.*)(\s\(.*\))$/, "9.$1<span lang='en'>$2</span>")
}

/**
 * Add language tags on EN 301 549 refs strings,
 * @param {string} str - EN 301 549 criterion string
 */
function langOnEUNorm(str) {
    return str.replace(/^([0-9.]+\s)(.*)$/, "$1<span lang='en'>$2</span>")
}

/**
 * Returns a specific markdown engine for generating criteria pages
 * @param {string} filePath - path needed to reach the glossaire.html file
 */
function mdCriteres(filePath = '') {
    return MarkdownIt({
        'html': true,
        replaceLink: function (link, env) {
            if (!link.match(/^#test-\d|#crit-\d|https?:\/\/|\.\./)) {
                return filePath+'glossaire.html'+link
            }
            return link
        }
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))
}

/**
 * Returns a specific markdown engine for generating glossary pages
 */
const mdGlossary = MarkdownIt({
    'html': true,
    replaceLink: function (link, env) {
        if (link.match(/^#test-\d|^#crit-\d/)) {
            return 'criteres.html'+link
        }
        return link
    }
}).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))

/**
 * Create generic MarkdownIt instance with page-specific configuration
 * @param {Object} page - Page configuration object
 * @returns {MarkdownIt} Configured MarkdownIt instance with plugins
 */
function genericMarkdownIt(page) {
    // Choose slugification method based on page configuration
    let customSlug = (page.slugify == "slugifyA42")?slugifyA42:slugifyDINUM

    // the replaceLink configuration parameter permits to rewrite links that are found in a markdown file
    // we also use a serie of plugins to markdownit with the .use() method. The plugins are the following
    // - markdown-it-replace-link: rewrite links according to the configuration
    // - markdown-it-anchor: adds id attributes to headings
    // - markdown-it-front-matter: parses the front-matter if available in the markdown files
    // - markdown-it-attrs: parses attributes specified in the markdown file accordint to the following syntax {attr: value}, we use it mainly for specifying the language of parts
    return MarkdownIt({
                'html': true,
                replaceLink: function (link, env) {
                    let res = link.match(/^\/publications\/rgaa-accessibilite\/(.*)\/#(.*)/)
                    if (res) {
                        return res[1]+'.html#'+res[2]
                    }
                    let res2 = link.match(/^https:\/\/www\.numerique\.gouv\.fr\/publications\/rgaa-accessibilite\/methode\/(.*)\/#(.*)/)
                    if (res2) {
                        return res2[1]+'.html#'+res2[2]
                    }
                    let res3 = link.match(/(.*)\.md#(.*)/)
                    if (res3) {
                        return res3[1]+'.html#'+res3[2]
                    }
                    let res4 = link.match(/(.*)\.md/)
                    if (res4) {
                        return res4[1]+'.html'
                    }
                    return link
                }
            }).use(require('markdown-it-replace-link')).use(require('markdown-it-anchor'), {slugify: customSlug, prefix: page.prefix}).use(require('markdown-it-front-matter'), function(fm) {}).use(require('markdown-it-attrs'));
}

/**
 * Global function to render a template to a file.
 * @param {Object} config - Site configuration
 * @param {string} template - template to be rendered
 * @param {string} data - pre-rendered data (content of the page) to be included into the template
 * @param {string} title - Page title
 * @param {string} lang - Language code
 * @param {string} file - Output file path
 * @param {string} name - Page name
 * @param {string} prefix - URL prefix
 * @param {Function} __ - Translation function
 * @param {boolean} withSummary - Whether to include summary
 * @param {string} error - Error message if any
 * @param {boolean} withoutTitle - Skip title rendering
 * @param {boolean|string} ogDesc - Open Graph description
 * @param {boolean|string} imgTwitter - Twitter card image
 * @param {boolean|string} imgLinkedin - LinkedIn card image
 * @param {boolean} full_width - Use full width layout
 */
function genFile(config, template, data, title, lang, file, name, prefix, __, withSummary = false, error = '', withoutTitle = false, ogDesc = false, imgTwitter = false, imgLinkedin = false, full_width = false) {
    data.prefix = prefix
    data['__'] = __
    data['lang'] = lang
    ejs.renderFile(template, data, function(err, str) {
        if (err !== null) {
            console.log(err)
        }
        renderToFile(config, str, title, lang, file, name, prefix, __, withSummary, error, withoutTitle, ogDesc, imgTwitter, imgLinkedin, full_width)
    })
}
/**
 * Same as genFile, but with the renderWithSummary postprocessing
 * @param {Object} config - Site configuration
 * @param {string} template - template to be rendered
 * @param {string} data - pre-rendered data (content of the page) to be included into the template
 * @param {string} title - Page title
 * @param {string} lang - Language code
 * @param {string} file - Output file path
 * @param {string} name - Page name
 * @param {string} prefix - URL prefix
 * @param {string} summary - Summary type configuration
 * @param {string} summaryTitle - Title for the summary section
 * @param {Function} __ - Translation function
 * @param {string} error - Error message if any
 */
function genFileWithSummary(config, template, data, title, lang, file, name, prefix, summary, summaryTitle, __, error = '') {
    data.prefix = prefix
    data['__'] = __
    data['lang'] = lang
    ejs.renderFile(template, data, function(err, str) {
        if (err !== null) {
            console.log(err)
        }
        renderWithSummary(config, str, title, lang, file, name, prefix, summary, summaryTitle, __, error)
    })
}

/**
 * Generates a file without postprocessing
 * @param {string} template template to be applied
 * @param {string} data data needed to fill the template
 * @param {string} file file path
 */
function genRawFile(template, data, file) {
    ejs.renderFile(template, data, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}
/**
 * provides the right deprecation message according to the name of a deprecated page
 * @param {string} deprecation config object (mapping between patterns and messages)
 * @param {string} name name of the page
 * @returns {string} deprecation message
 */
function getDeprecationMessage(deprecation, name) {
    for (const pattern in deprecation) {
        if (name.match(new RegExp('^'+pattern+'.*'))) {
            return deprecation[pattern]
        }
    }
    return null
}

module.exports = {
    renderToFile,
    renderWithSummary,
    renderHome,
    slugify,
    slugifyDINUM,
    slugifyA42,
    slugifySC,
    tech2URL,
    langOnWCAG,
    langOnEUNormDeprecated,
    langOnEUNormFromWCAG,
    langOnEUNorm,
    mdCriteres,
    mdGlossary,
    genericMarkdownIt,
    isProd,
    genFile,
    genFileWithSummary,
    genRawFile,
    getDeprecationMessage
}