const fs = require('fs')
const ejs = require('ejs')
const MarkdownIt = require('markdown-it')
const dotenv = require('dotenv')
const genNewRGAA = require('./scripts/genNewRGAA.js')
const lib = require('./scripts/common.js')
const news = require('./scripts/news.js')

dotenv.config()

const config = require('./conf.json')
const axeRgaa = require('./AxeRGAAmsg.json')
const production = lib.isProd()
const outputPath = './src/html'
const baseURL = production?'https://accessibilite.public.lu':'http://localhost:8080'
const deprecationMessage = '<strong>Cette page est obsolète : </strong> veuillez consulter la page équivalente du <a href="../raweb1/index.html">RAWeb1</a>. <br />Pour plus d\'informations, nous vous invitons à prendre connaissance des <a href="../raweb1/notes-revision.html">notes de révision</a>.'

console.log('prod', production)
lib.genRawFile('./src/tpl/robots.ejs', {prod: lib.isProd()}, outputPath+'/robots.txt')

let data

// RGAA 4.0 (deprecated): generate criteria page 
const criteres = JSON.parse(fs.readFileSync('./content/fr/rgaa4/criteres.json'))
const niveaux = require('./content/fr/rgaa4.1/niveaux.json')
data = {topics: criteres.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}
lib.genFile('./src/tpl/criteria.ejs', data, "RGAA 4: Critères et tests", outputPath+"/fr/rgaa4/criteres.html", "rgaa4/criteres", "../../..", false, deprecationMessage)

// RGAA 4.1 (deprecated): generate criteria page 
const criteres41 = JSON.parse(fs.readFileSync('./content/fr/rgaa4.1/criteres.json'))
data = {topics: criteres41.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}
lib.genFile('./src/tpl/criteria.ejs', data, "RGAA 4.1: Critères et tests", outputPath+"/fr/rgaa4.1/criteres.html", "rgaa4.1/criteres", "../../..", false, deprecationMessage)

// RGAA 4.1.2 (deprecated): generate criteria page
const criteres412 = genNewRGAA.generateCriteria('./content/fr/rgaa4.1.2')
data = {topics: criteres412.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormFromWCAG, shortList: [], message:'', autoTests: {}, levels: niveaux, normVersion: "EN 301 549 V2.1.2 (2018-08)"}
lib.genFileWithSummary('./src/tpl/criteria-new.ejs', data, "RGAA 4.1.2: Critères et tests", outputPath+"/fr/rgaa4.1.2/criteres.html", "rgaa4.1.2/criteres", "../../..", 'ol', 'Thématiques', deprecationMessage)


// RAWeb 1: generate criteria page
const criteresRAWeb1 = genNewRGAA.generateCriteria('./content/fr/raweb1')
const niveauxRAWeb1 = require('./content/fr/raweb1/niveaux.json')
data = {topics: criteresRAWeb1.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}
lib.genFileWithSummary('./src/tpl/criteria-new.ejs', data, "RAWeb 1: Critères et tests", outputPath+"/fr/raweb1/criteres.html", "raweb1/criteres", "../../..", 'ol', 'Thématiques')

//generate checklist for simplified tests
const criteresMonit = genNewRGAA.generateCriteria('./content/fr/raweb1', '../../../html/fr/raweb1/')
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Attention&nbsp;:</strong> cette liste de critères est à utiliser uniquement dans le cadre de la <a href="../../../html/fr/monitoring/controle-simplifie.html">méthode de contrôle simplifié</a>.<br />Si des règles de tests automatisés peuvent contribuer à tester un critère, celles-ci sont mentionnées dans les tables de correspondance disponibles en fin de critère.'
data = {topics: criteresMonit.topics, md: lib.mdCriteres('../raweb1/'), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: shortList, message: message, autoTests: axeRgaa, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}
lib.genFileWithSummary('./src/tpl/criteria-new.ejs', data, "Critères pour le contrôle simplifié", outputPath+"/fr/monitoring/audit-simpl.html", "monitoring/audit-simpl", "../../..", 'ol', 'Thématiques')

// generate glossary in FR

// RGAA 4.0 (deprecated): generate glossary page 
const glossary = JSON.parse(fs.readFileSync('./content/fr/rgaa4/glossaire.json'))
data = {glossary: glossary, slugify: lib.slugify, md: lib.mdGlossary}
lib.genFile('./src/tpl/glossary.ejs', data, "RGAA 4: Glossaire", outputPath+"/fr/rgaa4/glossaire.html", "rgaa4/glossaire", "../../..", false, deprecationMessage)


// RGAA 4.1 (deprecated): generate glossary page 
const glossary41 = JSON.parse(fs.readFileSync('./content/fr/rgaa4.1/glossaire.json'))
data = {glossary: glossary41, slugify: lib.slugify, md: lib.mdGlossary}
lib.genFile('./src/tpl/glossary.ejs', data, "RGAA 4.1: Glossaire", outputPath+"/fr/rgaa4.1/glossaire.html", "rgaa4.1/glossaire", "../../..", false, deprecationMessage)

// RGAA 4.1.2 (deprecated): generate glossary page 
const glossary412 = genNewRGAA.generateGlossary('./content/fr/rgaa4.1.2')
data = {glossary: glossary412, slugify: lib.slugify, md: lib.mdGlossary}
lib.genFileWithSummary('./src/tpl/glossary-new.ejs', data, "RGAA 4.1.2: Glossaire", outputPath+"/fr/rgaa4.1.2/glossaire.html", "rgaa4.1.2/glossaire", "../../..", 'ul', 'Index', deprecationMessage)

// RAWeb 1: generate glossary page 
const glossaryRAWeb1 = genNewRGAA.generateGlossary('./content/fr/raweb1')
data = {glossary: glossaryRAWeb1, slugify: lib.slugify, md: lib.mdGlossary}
lib.genFileWithSummary('./src/tpl/glossary-new.ejs', data, "RAWeb 1: Glossaire", outputPath+"/fr/raweb1/glossaire.html", "raweb1/glossaire", "../../..", 'ul', 'Index')

// generate from all Markdown files

const level1 = config.mainMenu.concat(config.footer).concat(config.hidden).filter(e => e.md !== undefined)
const level2 = config.mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)
let md = level1.concat(level2)
const home = md.find(x => {return x.name == 'index'})
md = md.filter(x => {return x.name != 'index'})

const deprecated = config.deprecated.filter(e => (e.children !== undefined)).flatMap(e => e.children).filter(e => e.md !== undefined)

md.forEach(e => { 
    lib.renderWithSummary(lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle)          
})

deprecated.forEach(e => { 
    lib.renderWithSummary(lib.genericMarkdownIt(e).render(fs.readFileSync(e.md).toString()), e.title, outputPath+'/fr/'+e.name+'.html', e.name, e.prefix, e.genSummary, e.summaryTitle, deprecationMessage)          
})

// generate all articles
const articles = news.genNews(outputPath, baseURL)

// generate the home page
lib.renderHome(home, articles.slice(0, 3), outputPath)

// generate site outline
lib.genFile('./src/tpl/outline.ejs',{config: config}, "Plan du site", outputPath+"/fr/plan-site.html", "plan-site", '../..')

// generate declaration form
let declaPayload = {lang: config.declaLangs, prefix: "../../..", tpl: []};
config.declaLangs.forEach(e => {
    declaPayload["tpl"][e.code] = fs.readFileSync('./src/tpl/decla_'+e.code+'.ejs')
});
lib.genFile('./src/tpl/decla-form.ejs',declaPayload, "Créez votre déclaration", outputPath+"/fr/tools/decla.html", "tools/decla", "../../..")
