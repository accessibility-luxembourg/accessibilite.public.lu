const fs = require('fs')
const dotenv = require('dotenv')
const lib = require('./scripts/common.js')
const news = require('./scripts/news.js')

dotenv.config()

const langs = ['fr', 'en']
const config = {}
config['fr'] = require('./scripts/config_fr.js').config
config['en'] = require('./scripts/config_en.js').config

const production = lib.isProd()
const outputPath = './src/html'
const baseURL = production?'https://accessibilite.public.lu':'http://localhost:8080'
const deprecationMessage = '<strong>Cette page est obsolète : </strong> veuillez consulter la page équivalente du <a href="../raweb1/index.html">RAWeb1</a>. <br />Pour plus d\'informations, nous vous invitons à prendre connaissance des <a href="../raweb1/notes-revision.html">notes de révision</a>.'

console.log('prod', production)
lib.genRawFile('./src/tpl/robots.ejs', {prod: lib.isProd()}, outputPath+'/robots.txt')

langs.forEach(lang => {
    // generate from all Markdown files

    const level1 = config[lang].mainMenu.concat(config[lang].footer).concat(config[lang].hidden).filter(e => e.md !== undefined)
    const level2 = config[lang].mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)
    let md = level1.concat(level2)
    const home = md.find(x => {return x.name == 'index'})
    md = md.filter(x => {return x.name != 'index'})

    md.forEach(e => { 
        // console.log(e.title)
        lib.renderWithSummary(config, lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle)          
    })

    const rawDeprecated = config[lang].deprecated !== undefined ? config[lang].deprecated : []
    if (rawDeprecated.length !== 0) {
        const deprecated = rawDeprecated.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)

        deprecated.forEach(e => { 
            lib.renderWithSummary(config, lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, deprecationMessage)          
        })
    } 

    // generate criteria and glossary
    const critLevel1 = config[lang].mainMenu.concat(rawDeprecated).filter(e => ["criteres", "glossaire"].includes(e.type) )
    const critLevel2 = config[lang].mainMenu.concat(rawDeprecated).filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => ["criteres", "glossaire"].includes(e.type) )
    let crit = critLevel1.concat(critLevel2)

    crit.forEach(e => {
        if (e.genSummary !== undefined) {
            lib.genFileWithSummary(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, (e.deprecation !== undefined)?e.deprecation:'') 
        } else {
            lib.genFile(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, false, (e.deprecation !== undefined)?e.deprecation:'') 
        }
    })

    // generate all articles
    const articles = news.genNews(config, lang, outputPath, baseURL)

    // generate the home page
    lib.renderHome(config, lang, home, articles.slice(0, 3), outputPath)

    // generate site outline
    lib.genFile(config, './src/tpl/outline.ejs',{config: config, lang: lang}, "Plan du site", lang, outputPath+"/"+lang+"/plan-site.html", "plan-site", '../..')

    // generate declaration form
    let declaPayload = {lang: config[lang].declaLangs, prefix: "../../..", tpl: []};
    config[lang].declaLangs.forEach(e => {
        declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
    });
    lib.genFile(config, './src/tpl/decla-form.ejs',declaPayload, "Créez votre déclaration", lang, outputPath+"/"+lang+"/tools/decla.html", "tools/decla", "../../..")

})
