const fs = require('fs')
const ejs = require('ejs')
const yaml = require('yaml')
const MarkdownIt = require('markdown-it')
const uglify = require("uglify-js")
const cheerio = require('cheerio')
const dotenv = require('dotenv')
const crypto = require('crypto')
const hmacPwd = 'a11ylu'
dotenv.config()

const config = require('./conf.json')
const axeRgaa = require('./AxeRGAAmsg.json')
const wcagTrad = require('./WCAG-SC-Translations.json')
const production = (process.env.NODE_ENV === 'production')

const outputPath = './src/html'

const deprecationMessage = '<strong>Cette page est obsolète : </strong> veuillez consulter la page équivalente du <a href="../rgaa4.1/index.html">RGAA 4.1</a>.'

console.log('prod', production)
ejs.renderFile('./src/tpl/robots.ejs', {prod: production}, function(err, str){
    if (err !== null) {
        console.log(err)
    }
    fs.writeFileSync(outputPath+'/robots.txt', str)
});


function renderToFile(data, title, file, name, prefix, withSummary = false, error = '', withoutTitle = false) {
    ejs.renderFile('./src/tpl/main.ejs', {data: data, title: title, file: file.replace(/\.\/src\/html/, ''), config: config, name: name, prod: production, prefix: prefix, error: error, withSummary, withoutTitle}, function(err, str){
        if (err !== null) {
            console.log(err)
        }
        fs.writeFileSync(file, str)
    });
}

function renderWithSummary(data, title, file, name, prefix, summary, error = '') {
    if (summary !== undefined) {
        const $ = cheerio.load(data)
        const topics = []
        $('h3').each(function(i, elem) {
            if (!$(this).next().is('h3')) {
                let text = $(this).text().split(':').pop().trim()
                topics.push({"id": $(this).attr('id'), "text": text }) 
            }
        })
        ejs.renderFile('./src/tpl/criteria_for_md.ejs', {topics: topics, data: data, list_type: summary}, function(err, str) {
            if (err !== null) {
                console.log(err)
            }
            renderToFile(str, title, file, name, prefix, true)
        })
    } else {
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
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\(\),]/g, '').replace(/«\s|\s»|\s:/g, '').replace(/[\s']/g, '-')
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

function langOnEUNorm(str) {
    return str.replace(/^(.\..\..\..{1,2}\s?\/\s.\..\..{1,2}\s)(.*)(\s\(.*\))$/, "$1<span lang='en'>$2</span>$3")
}


// generate criteria in FR
const mdCriteres = MarkdownIt({
    replaceLink: function (link, env) {
        if (!link.match(/^#test-|#crit-|https?:\/\//)) {
            return 'glossaire.html'+link
        }
        return link
    }
}).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))

const mdCriteres41 = MarkdownIt({
    replaceLink: function (link, env) {
        if (!link.match(/^#test-|#crit-|https?:\/\//)) {
            return '../rgaa4.1/glossaire.html'+link
        }
        return link
    }
}).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs'))

let prefix;

const criteres = JSON.parse(fs.readFileSync('./content/rgaa4/criteres.json'))
const niveaux = require('./content/rgaa4.1/niveaux.json')
prefix = "../../.."
ejs.renderFile('./src/tpl/criteria.ejs',{topics: criteres.topics, md: mdCriteres, prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveaux}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4: Critères et tests", outputPath+"/fr/rgaa4/criteres.html", "rgaa4/criteres", prefix, false, deprecationMessage)
})

const criteres41 = JSON.parse(fs.readFileSync('./content/rgaa4.1/criteres.json'))

prefix = "../../.."
ejs.renderFile('./src/tpl/criteria.ejs',{topics: criteres41.topics, md: mdCriteres, prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveaux}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4.1: Critères et tests", outputPath+"/fr/rgaa4.1/criteres.html", "rgaa4.1/criteres", prefix)
})

//generate checklist for simplified tests
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Attention&nbsp;:</strong> cette liste de critères est à utiliser uniquement dans le cadre de la <a href="../../../html/fr/monitoring/controle-simplifie.html">méthode de contrôle simplifié</a>.<br />Si des règles de tests automatisés peuvent contribuer à tester un critère, celles-ci sont mentionnées dans les tables de correspondance disponibles en fin de critère.'
ejs.renderFile('./src/tpl/criteria.ejs',{topics: criteres41.topics, md: mdCriteres41, prefix: prefix, slugify: slugifySC, tech2URL: tech2URL, langOnWCAG: langOnWCAG, langOnEUNorm: langOnEUNorm, shortList, message: message, autoTests: axeRgaa, levels: niveaux}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    // HOTFIX for broken links on the short list
    str = str.replace(/#crit-1-9/g, '../../../html/fr/rgaa4.1/criteres.html#crit-1-9')
    str = str.replace(/methodo-test.html#test-8.1.1/g, 'methodo-test.html#tests-8.1.1,-8.1.2-et-8.1.3')
    str = str.replace(/methodo-test.html#test-8.1.2/g, 'methodo-test.html#tests-8.1.1,-8.1.2-et-8.1.3')
    str = str.replace(/methodo-test.html#test-8.1.3/g, 'methodo-test.html#tests-8.1.1,-8.1.2-et-8.1.3')
    renderToFile(str, "Critères pour le contrôle simplifié", outputPath+"/fr/monitoring/audit-simpl.html", "monitoring/audit-simpl", prefix)
})

criteres.topics.forEach(topic => {
    topic.criteria.forEach(crit => {
        critCode = topic.number+'.'+crit.criterium.number
        if (!shortList.includes(critCode)) {
            criteres.topics
        }
    })
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

const glossary = JSON.parse(fs.readFileSync('./content/rgaa4/glossaire.json'))
ejs.renderFile('./src/tpl/glossary.ejs',{glossary: glossary, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4: Glossaire", outputPath+"/fr/rgaa4/glossaire.html", "rgaa4/glossaire", prefix, false, deprecationMessage)
})

const glossary41 = JSON.parse(fs.readFileSync('./content/rgaa4.1/glossaire.json'))
ejs.renderFile('./src/tpl/glossary.ejs',{glossary: glossary41, prefix: prefix, slugify: slugify, md: mdGlossary}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    renderToFile(str, "RGAA 4.1: Glossaire", outputPath+"/fr/rgaa4.1/glossaire.html", "rgaa4.1/glossaire", prefix)
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
    renderWithSummary(genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary)          
})

deprecated.forEach(e => { 
    renderWithSummary(genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary, deprecationMessage)          
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
        data.meta = fm
    }
    data.html = newsMarkdownIt(cbfm).render(fs.readFileSync('./content/news/'+e).toString())
    $ = cheerio.load(data.html)
    data.meta.title_html = $('h2').first().html()
    data.meta.title = $('h2').first().text()
    data.meta.subtitle_html = $('h3').first().html()
    data.meta.subtitle = $('h3').first().text()
    data.meta.intro_html = $('.intro').first().html()
    data.meta.intro = $('.intro').first().text()
    data.meta.img = $('img').first().attr('src')

    // add the date to the html code
    $('h3').first().after('<p class="date">'+data.date.toLocaleDateString('fr', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })+'</p>')
    data.html = $.html()
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
        renderToFile(str, e.meta.title, outputPath+'/fr/news/'+e.meta.filename+'.html', e.meta.filename, '../../../', false, '', true)
    })
})

renderHome(home, articles.slice(0, 3))

// generate JavaScript
const scampiJsPrefix = 'node_modules/@pidila/scampi/modules/'
const scampiJsSuffix = '/index.js'
const scampiJsModules = [ 'menu-simple', 'skip-link'];
const customScripts = ['disclosureMenu.js']

let payload = ''
scampiJsModules.forEach(module => {
    payload += fs.readFileSync(scampiJsPrefix+module+scampiJsSuffix) 
})
customScripts.forEach(script => {
    payload += fs.readFileSync('src/js/'+script)
})
payload += fs.readFileSync('./src/js/main.js')
ejs.renderFile('./src/tpl/mainjs.ejs',{payload: payload}, function(err, str) {
    if (err !== null) {
        console.log(err)
    }
    let res = uglify.minify(str)
    if (res.error !== undefined) {
        console.log('uglify', res.error)
    }
    fs.writeFileSync(outputPath+"/main.js", res.code)
})

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
