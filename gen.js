const fs = require('fs')
const ejs = require('ejs')
const yaml = require('yaml')
const MarkdownIt = require('markdown-it')
const cheerio = require('cheerio')
const dotenv = require('dotenv')
const crypto = require('crypto')
const sharp = require('sharp');
const en301549 = require('en301549-links')
const genNewRGAA = require('./genNewRGAA.js')
const path = require('node:path')
const hmacPwd = 'a11ylu'
dotenv.config()

const config = require('./conf.json')
const axeRgaa = require('./AxeRGAAmsg.json')
const wcagTrad = require('./WCAG-SC-Translations.json')
const production = (process.env.NODE_ENV === 'production')

const outputPath = './src/html'

const baseURL = production?'https://accessibilite.public.lu':'http://localhost:8080'

const deprecationMessage = '<strong>Cette page est obsolète : </strong> veuillez consulter la page équivalente du <a href="../raweb1/index.html">RAWeb1</a>. <br />Pour plus d\'informations, nous vous invitons à prendre connaissance des <a href="../raweb1/notes-revision.html">notes de révision</a>.'

console.log('prod', production)
ejs.renderFile('./src/tpl/robots.ejs', {prod: production}, function(err, str){
    if (err !== null) {
        console.log(err)
    }
    fs.writeFileSync(outputPath+'/robots.txt', str)
});

function renderToFile(data, title, file, name, prefix, withSummary = false, error = '', withoutTitle = false, ogDesc = false, imgTwitter = false, imgLinkedin = false, full_width = false) {
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prod: production, prefix: prefix, error: error, withSummary: withSummary, withoutTitle: withoutTitle, ogDesc: ogDesc, imgTwitter: imgTwitter, imgLinkedin: imgLinkedin, full_width: full_width}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}

function renderWithSummary(data, title, file, name, prefix, summary, summaryTitle, error = '') {
    if (summary !== undefined) {
        const $ = cheerio.load(data)
        const topics = []
        $('h3:not(.no-summary)').each(function(i, elem) {
            if (!$(this).next().is('h3')) {
                let text = $(this).text().split(':').pop().trim()
                text = text.replace(/\s\(.+\)/, '')
                topics.push({"id": $(this).attr('id'), "text": text, 'class':  $(this).attr('class') }) 
            }
        })
        $('h5.disclosure.mapping + ul>li, .rawebCorr ul>li').each(function(i, elem) {
            let text = $(this).text()
            if (text.match(/^EN\s301\s549/)) {
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
        data = $('body').html()

        ejs.renderFile('./src/tpl/criteria_for_md.ejs', {topics: topics, data: data, list_type: summary, summaryTitle: summaryTitle}, function(err, str) {
            if (err !== null) {
                console.log(err)
            }
            renderToFile(str, title, file, name, prefix, true, error)
        })
    } else {
        const $ = cheerio.load(data)
        $('.rawebCorr ul>li').each(function(i, elem) {
            let text = $(this).text()
            if (text.match(/^EN\s301\s549/)) {
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
        data = $('body').html()
        renderToFile(data, title, file, name, prefix, false, error)
    }
}

function renderHome(page, latestNews) {
    // FIXME : image prefix...
    latestNews = latestNews.map(x => {x.meta.img = x.meta.img.replace(/^\.\.\//, ''); return x})

    ejs.renderFile('./src/tpl/latest_news.ejs', {latest_news: latestNews}, function(err, renderedNews) {
        if (err !== null) {
            console.log(err)
        }
        const data = genericMarkdownIt(page).render(fs.readFileSync(page.md).toString().replace('<!-- latest news -->', renderedNews))
        renderToFile(data, page.title, outputPath+'/fr/'+page.name+'.html', page.name, page.prefix, false)        
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


function langOnWCAG(str) {
    const scCode = str.replace(/\s.+$/, '')
    const scTrad = wcagTrad[scCode]
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
        replaceLink: function (link, env) {
            if (!link.match(/^#test-|#crit-|https?:\/\/|\.\./)) {
                return filePath+'glossaire.html'+link
            }
            return link
        }
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))
}

let prefix;

// RGAA 4.0 (deprecated): generate criteria page 
const criteres = JSON.parse(fs.readFileSync('./content/rgaa4/criteres.json'))
const niveaux = require('./content/rgaa4.1/niveaux.json')
prefix = "../../.."
ejs.renderFile('./src/tpl/criteria.ejs',{topics: criteres.topics, md: mdCriteres(), prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4: Critères et tests", outputPath+"/fr/rgaa4/criteres.html", "rgaa4/criteres", prefix, false, deprecationMessage)
})

// RGAA 4.1 (deprecated): generate criteria page 
const criteres41 = JSON.parse(fs.readFileSync('./content/rgaa4.1/criteres.json'))

prefix = "../../.."
ejs.renderFile('./src/tpl/criteria.ejs',{topics: criteres41.topics, md: mdCriteres(), prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4.1: Critères et tests", outputPath+"/fr/rgaa4.1/criteres.html", "rgaa4.1/criteres", prefix, false, deprecationMessage)
})

// RGAA 4.1.2 (deprecated): generate criteria page
const criteres412 = genNewRGAA.generateCriteria('./content/rgaa4.1.2')
//console.log(JSON.stringify(criteres412, null, 2))
prefix = "../../.."
ejs.renderFile('./src/tpl/criteria-new.ejs',{topics: criteres412.topics, md: mdCriteres(), prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNormFromWCAG, shortList: [], message:'', autoTests: {}, levels: niveaux, normVersion: "EN 301 549 V2.1.2 (2018-08)"}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderWithSummary(str, "RGAA 4.1.2: Critères et tests", outputPath+"/fr/rgaa4.1.2/criteres.html", "rgaa4.1.2/criteres", prefix, 'ol', 'Thématiques', deprecationMessage)
})

// RAWeb 1: generate criteria page
const criteresRAWeb1 = genNewRGAA.generateCriteria('./content/raweb1')
const niveauxRAWeb1 = require('./content/raweb1/niveaux.json')
prefix = "../../.."
ejs.renderFile('./src/tpl/criteria-new.ejs',{topics: criteresRAWeb1.topics, md: mdCriteres(), prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderWithSummary(str, "RAWeb 1: Critères et tests", outputPath+"/fr/raweb1/criteres.html", "raweb1/criteres", prefix, undefined, 'Thématiques')
})


//generate checklist for simplified tests
const criteresMonit = genNewRGAA.generateCriteria('./content/raweb1', '../../../html/fr/raweb1/')
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Attention&nbsp;:</strong> cette liste de critères est à utiliser uniquement dans le cadre de la <a href="../../../html/fr/monitoring/controle-simplifie.html">méthode de contrôle simplifié</a>.<br />Si des règles de tests automatisés peuvent contribuer à tester un critère, celles-ci sont mentionnées dans les tables de correspondance disponibles en fin de critère.'
ejs.renderFile('./src/tpl/criteria-new.ejs',{topics: criteresMonit.topics, md: mdCriteres('../raweb1/'), prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNorm, shortList: shortList, message: message, autoTests: axeRgaa, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderWithSummary(str, "Critères pour le contrôle simplifié", outputPath+"/fr/monitoring/audit-simpl.html", "monitoring/audit-simpl", prefix, 'ol', 'Thématiques')
})

// generate glossary in FR
const mdGlossary = MarkdownIt({
    'html': true,
    replaceLink: function (link, env) {
        if (link.match(/^#test-|^#crit-/)) {
            return 'criteres.html'+link
        }
        return link
    }
}).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))

// RGAA 4.0 (deprecated): generate glossary page 
const glossary = JSON.parse(fs.readFileSync('./content/rgaa4/glossaire.json'))
ejs.renderFile('./src/tpl/glossary.ejs',{glossary: glossary, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4: Glossaire", outputPath+"/fr/rgaa4/glossaire.html", "rgaa4/glossaire", prefix, false, deprecationMessage)
})

// RGAA 4.1 (deprecated): generate glossary page 
const glossary41 = JSON.parse(fs.readFileSync('./content/rgaa4.1/glossaire.json'))
ejs.renderFile('./src/tpl/glossary.ejs',{glossary: glossary41, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4.1: Glossaire", outputPath+"/fr/rgaa4.1/glossaire.html", "rgaa4.1/glossaire", prefix, false, deprecationMessage)
})

// RGAA 4.1.2 (deprecated): generate glossary page 
const glossary412 = genNewRGAA.generateGlossary('./content/rgaa4.1.2')
ejs.renderFile('./src/tpl/glossary-new.ejs',{glossary: glossary412, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderWithSummary(str, "RGAA 4.1.2: Glossaire", outputPath+"/fr/rgaa4.1.2/glossaire.html", "rgaa4.1.2/glossaire", prefix, 'ul', 'Index', deprecationMessage)
})

// RAWeb 1: generate glossary page 
const glossaryRAWeb1 = genNewRGAA.generateGlossary('./content/raweb1')
ejs.renderFile('./src/tpl/glossary-new.ejs',{glossary: glossaryRAWeb1, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderWithSummary(str, "RAWeb 1: Glossaire", outputPath+"/fr/raweb1/glossaire.html", "raweb1/glossaire", prefix, 'ul', 'Index')
})

// generate from all Markdown files

const level1 = config.mainMenu.concat(config.footer).concat(config.hidden).filter(e => e.md !== undefined)
const level2 = config.mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)
let md = level1.concat(level2)
const home = md.find(x => {return x.name == 'index'})
md = md.filter(x => {return x.name != 'index'})

const deprecated = config.deprecated.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)
const news = fs.readdirSync('./content/news')

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

function newsMarkdownIt(cbFM) {
    return MarkdownIt({
        'html': true,
        replaceLink: function (link, env) {
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
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-anchor'), {slugify: slugify, prefix: '../../..'}).use(require('markdown-it-front-matter'), function(fm) { cbFM(yaml.parse(fm))}).use(require('markdown-it-attrs'));
}

md.forEach(e => { 
    renderWithSummary(genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle)          
})

deprecated.forEach(e => { 
    renderWithSummary(genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, deprecationMessage)          
})

let articles = news.filter(e => { return e.match(/\.md$/)}).map(e => {
    const data = {}
    data.meta = {}

    // add date and name to the meta from the file name
    data.meta.filename = e.replace(/\.md$/, '')
    data.meta.date = e.substring(0,10)
    data.date = new Date(data.meta.date)

    // get the html from the file, and get the metadata from the frontmatter
    function cbfm(fm) {
        data.meta = {...data.meta, ...fm}
    }

    data.html = newsMarkdownIt(cbfm).render(fs.readFileSync('./content/news/'+e).toString())
    $ = cheerio.load(data.html)
    data.meta.lang = $('body').children().first().attr('lang')
    data.meta.title_html = $('h2').first().html()
    data.meta.title = $('h2').first().text()
    data.meta.subtitle_html = $('h3').first().html()
    data.meta.subtitle = $('h3').first().text()
    data.meta.intro_html = $('.intro > p').first().html()
    data.meta.intro = $('.intro > p').first().text()
    data.meta.img = $('img').first().attr('src')
    if (data.meta.img !== undefined) {
        data.meta.imgName = data.meta.img.replace(/^.*\/img\/(.+)$/, '$1')
    } 

    if (data.meta.teaser) {
        data.meta.img = '../../../../content/news/img/'+data.meta.teaser
        data.meta.imgName = data.meta.teaser
    }

    if (data.meta.imgName !== undefined) {
        data.meta.imgTwitter = path.basename(data.meta.imgName.replace(/\.jpg/, '-twitter.jpg'))
        data.meta.imgLinkedin = path.basename(data.meta.imgName.replace(/\.jpg/, '-linkedin.jpg'))

        // resize images
        sharp('./content/news/img/'+data.meta.imgName).resize(1200,630).jpeg({ mozjpeg: true, quality:50}).toFile(outputPath+'/fr/news/og/'+data.meta.imgTwitter, (err, info) => { if (err) { console.error(err)} })
        sharp('./content/news/img/'+data.meta.imgName).resize(1200,627).jpeg({ mozjpeg: true, quality: 50}).toFile(outputPath+'/fr/news/og/'+data.meta.imgLinkedin, (err, info) => { if (err) { console.error(err)} })
    } else {
        console.error('Teaser image not found in', data.meta.filename)
    }

    // add the date to the html code
    $('h3').first().after('<p class="date">'+data.date.toLocaleDateString((data.meta.lang !== undefined)?data.meta.lang:'fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })+'</p>')

    // copy the script elements to the body
    $('head script').each((e, a) => {
        $('body').prepend(a)
    })

    data.html = $('body').html()


    // sanitize the html code for the atom feed
    $('h2').remove()
    $('p.date').remove()
    $('script, style').remove()
    // urls for images and links should be absolute, because RSS readers usually sandbox the html content
    $('img').each((i,e) => {
        $(e).attr('src', $(e).attr('src').replace('../../../../content', baseURL+'/fr'))
    })
    $('a').each((i,e) => {
        $(e).attr('href', new URL($(e).attr('href'), baseURL+'/fr/news/').href)
    })

    data.body = $('body').html()

    // create hash
    data.hash = crypto.createHmac('md5', hmacPwd).update(JSON.stringify(data)).digest('hex')
    return data
}).sort((a, b) => { return (b.date - a.date)})

if (production) {
    articles = articles.filter(e => {return e.date <= new Date()})
}

ejs.renderFile('./src/tpl/articles_list.ejs', {data: articles}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, 'Actualités', outputPath+'/fr/news/index.html', 'news/index', '../../../', true)
})

const globalHash = crypto.createHmac('md5', hmacPwd).update(JSON.stringify(articles)).digest('hex')
ejs.renderFile('./src/tpl/atom_feed.ejs', {data: articles, date: (articles[0] !== undefined)?articles[0].date.toISOString():new Date().toISOString(), hash: globalHash }, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    fs.writeFileSync(outputPath+'/fr/news/feed.xml', str)
})

articles.forEach((e, i, ar) => {
    ejs.renderFile('./src/tpl/article.ejs', {data: e.html, meta: e.meta, prefix: "../../../", previous: ar[i+1], next: ar[i-1]}, function(err, str) {
        if (err !== null) {
            console.log(err)
        }
        renderToFile(str, e.meta.title, outputPath+'/fr/news/'+e.meta.filename+'.html', e.meta.filename, '../../../', false, '', true, e.meta.subtitle, e.meta.imgTwitter, e.meta.imgLinkedin, true)
    })
})

renderHome(home, articles.slice(0, 3))


// generate site outline
prefix = '../..'
ejs.renderFile('./src/tpl/outline.ejs',{config: config, prefix: prefix}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "Plan du site", outputPath+"/fr/plan-site.html", "plan-site", prefix)
})

// generate declaration form
prefix = '../../..'
let declaPayload = {lang: config.lang, prefix: prefix, tpl: []};
config.lang.forEach(e => {
    declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
});
ejs.renderFile('./src/tpl/decla-form.ejs',declaPayload, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "Créez votre déclaration", outputPath+"/fr/tools/decla.html", "tools/decla", prefix)
})
