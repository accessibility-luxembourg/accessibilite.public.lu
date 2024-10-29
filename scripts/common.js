const ejs = require('ejs')
const MarkdownIt = require('markdown-it')
const fs = require('fs')
const cheerio = require('cheerio')
const en301549 = require('en301549-links')
const wcagTrad = {
    "fr": require('../locales/WCAG-SC-Translations-fr.json'),
    "en": require('../locales/WCAG-SC-Translations-en.json')
}
const dotenv = require('dotenv')



dotenv.config()

function isProd() {
    return (process.env.NODE_ENV === 'production')
}

function genURL(config, lang, name, file) {
    const path = '/'+lang+'/'+name+'.html'

    if (config[lang].names.includes(name)) {
        return path
    } else if (file.match(/^\/(de|en|fr)\/news\//)) {
        return file.replace(/^\/(de|en|fr)/, '/' + lang)
    } else {
        return '/'+lang+'/404.html'
    }
}

function renderToFile(config, data, title, lang, file, name, prefix, __, withSummary = false, error = '', withoutTitle = false, ogDesc = false, imgTwitter = false, imgLinkedin = false, full_width = false) {
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, lang: lang, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prod: isProd(), prefix: prefix, error: error, withSummary: withSummary, withoutTitle: withoutTitle, ogDesc: ogDesc, imgTwitter: imgTwitter, imgLinkedin: imgLinkedin, full_width: full_width, genURL: genURL, '__': __}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}

function renderWithSummary(config, data, title, lang, file, name, prefix, summary, summaryTitle, __, error = '') {
    if (summary !== undefined) {
        const $ = cheerio.load(data)
        const topics = []

        $('h3:not(.no-summary)').each(function(i, elem) {
            if (!$(this).next().is('h3')) {
                // manage the new raweb structure
                const maybeRawebTopic = $(this).find('.theme-name') 
                let text = ''
                if (maybeRawebTopic.length !== 0) {
                    text = maybeRawebTopic.text().trim()
                } else {
                    text = $(this).text().split(':').pop().trim()
                }

                text = text.replace(/\s\(.+\)/, '')
                topics.push({"id": $(this).attr('id'), "text": text, 'class':  $(this).attr('class') }) 
            }
        })
        $('h5.disclosure.mapping + ul>li, .rawebCorr ul>li, .rawebCorr div>p').each(function(i, elem) {
            let text = $(this).html()
            if (text.match(/^<p>EN\s301\s549/) || text.match(/^EN\s301\s549/)) { // matches one of the two patterns
                const version = text.match(/V(\d\.\d\.\d)/)[1]
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
        // copy the script elements to the body
        $('head script').each((e, a) => {
            $('body').prepend(a)
        })
        data = $('body').html()

        ejs.renderFile('./src/tpl/criteria_for_md.ejs', {topics: topics, data: data, list_type: summary, summaryTitle: summaryTitle, __}, function(err, str) {
            if (err !== null) {
                console.log(err)
            }
            renderToFile(config, str, title, lang, file, name, prefix, __, true, error)
        })
    } else {
        const $ = cheerio.load(data)
        $('.rawebCorr ul>li, .rawebCorr ul>li, .rawebCorr div>p').each(function(i, elem) {
            let text = $(this).html()
            if (text.match(/^<p>EN\s301\s549/) || text.match(/^EN\s301\s549/)) { // matches one of the two patterns
                const version = text.match(/V(\d\.\d\.\d)/)[1]
                let p  =  $(this).find('p:last-child')
                let content =  p.text()
                
                content = content.replace(/[^V\.](\d{1,2}(\.\d{1,2}){0,4})\s([^\d]+)([,\.]{1})/g, (match, criterion, a, description, separator) => { 
                    let link = ''
                    try {
                        link = en301549.getLink(version, criterion, 'lang="en"')+separator
                    } catch(e) {
                        console.log(e, criterion, version)
                    }
                    return link
                })
                p.html(content)
            }
        })
        $('.RAWebMaster code').each(function(i, elem) {
            $(elem).attr('lang', 'en')
        })
        // copy the script elements to the body
        $('head script').each((e, a) => {
            $('body').prepend(a)
        })
        data = $('body').html()
        renderToFile(config, data, title, lang, file, name, prefix, __, false, error)
    }
}

function renderHome(config, lang, page, latestNews, outputPath, __) {
    // FIXME : image prefix...
    latestNews = latestNews.map(x => {x.meta.img = x.meta.img.replace(/^\.\.\//, ''); return x})

    ejs.renderFile('./src/tpl/latest_news.ejs', {latest_news: latestNews, __}, function(err, renderedNews) {
        if (err !== null) {
            console.log(err)
        }
        const data = genericMarkdownIt(page).render(fs.readFileSync(page.md).toString().replace('<!-- latest news -->', renderedNews))
        renderToFile(config, data, page.title, lang, outputPath+'/'+lang+'/'+page.name+'.html', page.name, page.prefix, __, false)        
    })
}

function slugify(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\(\),]/g, '').replace(/«\s|\s»|\s:|`/g, '').replace(/[\s'’]/g, '-')
}

function slugifyDINUM(str) {
    var from = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var to   = "abcdefghijklmnopqrstuvwxyz"
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.replace(/[\u0300-\u036f]/g, "").replace(/[\(\)']/g, '').replace(/«\s|\s»/g, '').replace(/[\s]/g, '-')
}

function slugifyA42(str) {
    return slugify(str).replace(/’/g, '-')
}

// slugify but for WCAG SC
function slugifySC(str) {
    str = slugify(str.replace(/^[0-9\.]+\s/, "").replace(/\s[\(\)A]+$/, ""))
    // fix typos from RGAA
    str = str.replace(/^bypass-block$/, "bypass-blocks").replace("audio-description-and-media-alternative-prerecorded", "audio-description-or-media-alternative-prerecorded")

    return str
}

// generate URL for WCAG techniques
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


function langOnWCAG(str, lang) {
    const scCode = str.replace(/\s.+$/, '')
    const scTrad = wcagTrad[lang][scCode]
    return `${scCode} ${scTrad}`
}

function langOnEUNormDeprecated(str) {
    return str.replace(/^(.\..\..\..{1,2}\s?\/\s.\..\..{1,2}\s)(.*)(\s\(.*\))$/, "$1<span lang='en'>$2</span>$3")
}

function langOnEUNormFromWCAG(str) {
    return str.replace(/^(.\..\..{1,2}\s)(.*)(\s\(.*\))$/, "9.$1<span lang='en'>$2</span>")
}

function langOnEUNorm(str) {
    return str.replace(/^([0-9.]+\s)(.*)$/, "$1<span lang='en'>$2</span>")
}

// generate criteria in FR
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

const mdGlossary = MarkdownIt({
    'html': true,
    replaceLink: function (link, env) {
        if (link.match(/^#test-\d|^#crit-\d/)) {
            return 'criteres.html'+link
        }
        return link
    }
}).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))

function genericMarkdownIt(page) {
    let html = false
    if (page.html !== undefined) {
        html = page.html
    }
    let customSlug = (page.slugify == "slugifyA42")?slugifyA42:slugifyDINUM

    return MarkdownIt({
                'html': html,
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

function genRawFile(template, data, file) {
    ejs.renderFile(template, data, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}


module.exports = {renderToFile, renderWithSummary, renderHome, slugify, slugifyDINUM, slugifyA42, slugifySC, tech2URL, langOnWCAG, langOnEUNormDeprecated, langOnEUNormFromWCAG, langOnEUNorm, mdCriteres, mdGlossary, genericMarkdownIt, isProd, genFile, genFileWithSummary, genRawFile}