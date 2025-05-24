const fs = require('fs')
const dotenv = require('dotenv')
const lib = require('./scripts/common.js')
const news = require('./scripts/news.js')
const y18n = require('y18n')

dotenv.config()

const langs = ['fr']
if (process.env.DISABLE_EN !== 'true') {
    langs.push('en')
}
const config = {}
config['fr'] = require('./scripts/config_fr.js').config
config['en'] = require('./scripts/config_en.js').config

const production = lib.isProd()
const outputPath = './src/html'
const baseURL = production?'https://accessibilite.public.lu':'http://localhost:8080'

console.log('prod', production)
lib.genRawFile('./src/tpl/robots.ejs', {prod: lib.isProd()}, outputPath+'/robots.txt')

langs.forEach(lang => {
    // generate from all Markdown files

    const __ = y18n({locale: lang, directory: './locales'}).__;
    let deprecation = config[lang].deprecation
    for (const pattern in deprecation) {
        const currentFramework = deprecation[pattern][0]
        const changelogURL = deprecation[pattern][1]
        deprecation[pattern] = __`<strong>This page is obsolete: </strong> please consult the equivalent page of ${currentFramework}. <br />For more information, we invite you to read <a href=\"${changelogURL}\">changelog</a>.`
    }
    
    const level1 = config[lang].mainMenu.concat(config[lang].footer).concat(config[lang].hidden).filter(e => e.md !== undefined)
    const level2 = config[lang].mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)
    let md = level1.concat(level2)
    const home = md.find(x => {return x.name == 'index'})
    md = md.filter(x => {return x.name != 'index'})

    md.forEach(e => { 
        lib.renderWithSummary(config, lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, __)          
    })

    const rawDeprecated = config[lang].deprecated !== undefined ? config[lang].deprecated : []
    if (rawDeprecated.length !== 0) {
        const deprecated = rawDeprecated.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)

        deprecated.forEach(e => { 
            const deprecationMessage = lib.getDeprecationMessage(deprecation, e.name)
            lib.renderWithSummary(config, lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, __, deprecationMessage)          
        })
    } 

    // generate criteria and glossary
    const critLevel1 = config[lang].mainMenu.filter(e => ["criteres", "glossaire"].includes(e.type) )
    const critLevel2 = config[lang].mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => ["criteres", "glossaire"].includes(e.type) )
    let crit = critLevel1.concat(critLevel2)

    crit.forEach(e => {
        if (e.genSummary !== undefined) {
            lib.genFileWithSummary(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, __) 
        } else {
            lib.genFile(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, __, false) 
        }
    })

    // generate deprecated criteria and glossary
    const dCritLevel1 = rawDeprecated.filter(e => ["criteres", "glossaire"].includes(e.type) )
    const dCritLevel2 = rawDeprecated.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => ["criteres", "glossaire"].includes(e.type) )
    let dCrit = dCritLevel1.concat(dCritLevel2)

    dCrit.forEach(e => {
        const deprecationMessage = lib.getDeprecationMessage(deprecation, e.name)
        if (e.genSummary !== undefined) {
            lib.genFileWithSummary(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, __, deprecationMessage) 
        } else {
            lib.genFile(config, './src/tpl/'+e.template, e.data, e.title, lang, outputPath+'/'+lang+'/'+e.name+'.html', e.name, e.prefix, __, false, deprecationMessage) 
        }
    })

    // generate all articles
    const articles = news.genNews(config, lang, outputPath, baseURL, __)

    // generate the home page
    lib.renderHome(config, lang, home, articles.slice(0, 3), outputPath, __)

    // generate site outline
    lib.genFile(config, './src/tpl/outline.ejs',{config: config, lang: lang}, __("Sitemap"), lang, outputPath+"/"+lang+"/plan-site.html", "plan-site", '../..', __)

    // generate declaration form
    let declaPayload = {langs: config[lang].declaLangs, prefix: "../../..", tpl: []};
    config[lang].declaLangs.forEach(e => {
        declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
    });
    lib.genFile(config, './src/tpl/decla-form.ejs',declaPayload, __("Create your statement"), lang, outputPath+"/"+lang+"/tools/decla.html", "tools/decla", "../../..", __)

})
