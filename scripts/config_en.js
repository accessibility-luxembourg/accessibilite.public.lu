const genNewRGAA = require('./genNewRGAA.js')
const lib = require('./common.js')
const axeRgaa = require('./AxeRGAAmsg.json')
const fs = require('fs')

const criteresRAWeb1 = genNewRGAA.generateCriteria('./content/en/raweb1')
const niveauxRAWeb1 = require('../content/en/raweb1/niveaux.json')
const dataRAWeb1 = {topics: criteresRAWeb1.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}
const glossaryRAWeb1 = {glossary: genNewRGAA.generateGlossary('./content/en/raweb1', 'criterion'), slugify: lib.slugify, md: lib.mdGlossary}

const criteresMonit = genNewRGAA.generateCriteria('./content/en/raweb1', '../../../html/en/raweb1/')
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Warning:</strong> this list of criteria is to be used only within the framework of the <a href="../../../html/en/monitoring/controle-simplifie.html">simplified control method</a>.<br />If automated test rules can contribute to testing a criterion, these are mentioned in the correlation tables available at the end of the criterion.'
const dataAuditSimpl = {topics: criteresMonit.topics, md: lib.mdCriteres('../raweb1/'), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: shortList, message: message, autoTests: axeRgaa, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}

const config = {
    "declaLangs": [
        {"name": "french", "code": "fr"},
        {"name": "german", "code": "de"},
        {"name": "english", "code": "en"},
        {"name": "luxembourgish", "code": "lb"}
    ],
    "mainMenu": [
        {
            "title": "Home",
            "menu": "<span class='hide-element'>Home</span>",
            "name": "index",
            "md": "./content/en/welcome.md", 
            "html": true,
            "prefix": "../.."
        },
        {
            "title": "News",
            "menu": "News",
            "name": "news",
            "children": [ 
                {
                    "title": "News",
                    "menu": "Articles",
                    "name": "news/index"
                },
                {
                    "title": "Newsletter",
                    "menu": "Newsletter",
                    "name": "newsletter",
                    "md": "./content/en/newsletter.md", 
                    "html": true,
                    "prefix": "../.."
                }
            ]
        },
        {
            "title": "Missions",
            "menu": "Missions",
            "name": "monitoring",
            "children": [ 
                {
                    "title": "Digital accessibility requirements",
                    "menu": "Requirements",
                    "name": "obligations",
                    "md": "./content/en/raweb1/obligations.md", 
                    "html": true,
                    "prefix": "../..",
                    "genSummary": "ol", 
                    "summaryTitle": "Summary"
                },
                {
                    "title": "Digital accessibility control mission",
                    "menu": "Control mission",
                    "name": "monitoring/mission",
                    "md": "./content/en/mission.md",
                    "prefix": "../../.." 
                },
                {
                    "title": "Open data",
                    "menu": "Open data",
                    "name": "monitoring/open-data",
                    "md": "./content/en/opendata.md", 
                    "html": true,
                    "prefix": "../../.."
                }     
            ]
        },       
        {
            "title": "Tools",
            "menu": "Tools",
            "name": "tools",
            "children": [
                {
                    "title": "Integrating Accessibility from the ground up",
                    "menu": "Specifications",
                    "name": "tools/cahier-des-charges",
                    "md": "./content/en/cahier-des-charges.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "Accessibility auditing kit",
                    "menu": "Auditing kit",
                    "name": "tools/kit",
                    "html": true,
                    "md": "./content/en/raweb1/kit-audit.md", 
                    "prefix": "../../.."
                },
                {
                    "title": "Create your statement",
                    "menu": "Your statement",
                    "name": "tools/decla"
                },
                {
                    "title": "Complaints procedure",
                    "menu": "Complaints",
                    "name": "tools/reclamations",
                    "md": "./content/en/reclamation.md", 
                    "prefix": "../../.."
                }    
            ]
        },         
        {
            "title": "Web framework",
            "menu": "Web <span class='mobile-only'>framework</span>",
            "name": "raweb1",
            "children": [
                {
                    "title": "Web Accessibility Assessment Framework (RAWeb 1): Introduction",
                    "menu": "Introduction",
                    "name": "raweb1/index",
                    "html": true,
                    "md": "./content/en/raweb1/introduction.md",
                    "prefix": "../../.."
                },        
                {
                    "title": "RAWeb 1: Criteria and tests",
                    "menu": "Criteria and tests",
                    "name": "raweb1/criteres", 
                    "type": "criteres",
                    "template": "criteria-new.ejs", 
                    "data": dataRAWeb1,
                    "prefix": "../../..",
                    "genSummary": "ol",
                    "summaryTitle": "Themes"
                },
                {
                    "title": "RAWeb 1: Glossary",
                    "menu": "Glossary",
                    "name": "raweb1/glossaire",
                    "type": "glossaire",
                    "template": "glossary-new.ejs", 
                    "data": glossaryRAWeb1,
                    "prefix": "../../..",
                    "genSummary": "ul",
                    "summaryTitle": "Index"
                }, 
                {
                    "title": "RAWeb 1: Testing methodology",
                    "menu": "Testing methodology",
                    "name": "raweb1/methodo-test",
                    "md": "./content/en/raweb1/methodologie-de-test.md",
                    "html": true,
                    "prefix": "../../.." 
                },                
                {
                    "title": "RAWeb 1: Testing environment",
                    "menu": "Testing environment",
                    "name": "raweb1/environnement",
                    "md": "./content/en/raweb1/environnement-de-test.md",
                    "html": true,
                    "prefix": "../../.."
                },                        
                {
                    "title": "RAWeb 1: References",
                    "menu": "References",
                    "name": "raweb1/references",
                    "md": "./content/en/raweb1/references.md", 
                    "html": true,                    
                    "prefix": "../../.."
                },
                {
                    "title": "RAWeb 1: Review notes",
                    "menu": "Review notes",
                    "name": "raweb1/notes-revision",
                    "html": true,
                    "md": "./content/en/raweb1/notes-de-revision.md", 
                    "prefix": "../../.."
                },
                {
                    "title": "Simplified accessibility control method v1.2.1",
                    "menu": "Simplified control method",
                    "name": "monitoring/controle-simplifie",
                    "md": "./content/en/controle-simplifie.md", 
                    "html": true,
                    "prefix": "../../.."
                },
                {
                    "title": "Criteria for simplified control",
                    "menu": "Criteria for simplified control",
                    "name": "monitoring/audit-simpl", 
                    "type": "criteres", 
                    "template": "criteria-new.ejs", 
                    "data": dataAuditSimpl,
                    "prefix": "../../..",
                    "genSummary": "ol",
                    "summaryTitle": "Themes"
                }
            ]
        },
        {
            "title": "Mobile framework",
            "menu": "Mobile <span class='mobile-only'>framework</span>",
            "name": "raam1",
            "children": [ 
                {
                    "title": "Mobile App Accessibility Assessment Framework (RAAM 1): Introduction",
                    "menu": "Introduction",
                    "name": "raam1/index",
                    "md": "./content/en/raam1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAAM 1: Criteria and tests",
                    "menu": "Criteria and tests",
                    "name": "raam1/referentiel-technique",
                    "md": "./content/en/raam1/referentiel-technique.md",
                    "prefix": "../../..", 
                    "html": true, 
                    "slugify": "slugifyA42",
                    "genSummary": "ol", 
                    "summaryTitle": "Themes"
                }, 
                {
                    "title": "RAAM 1: Glossary",
                    "menu": "Glossary",
                    "name": "raam1/glossaire",
                    "md": "./content/en/raam1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAAM 1: Testing methodology",
                    "menu": "Testing methodology",
                    "name": "raam1/methodologie",
                    "md": "./content/en/raam1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAAM 1: Testing environment",
                    "menu": "Testing environment",
                    "name": "raam1/environnement",
                    "md": "./content/en/raam1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAAM 1: References",
                    "menu": "References",
                    "name": "raam1/references",
                    "md": "./content/en/raam1/references.md",
                    "prefix": "../../.." 
                }
            ]
        },
        {
            "title": "PDF framework",
            "menu": "PDF <span class='mobile-only'>framework</span>",
            "name": "rapdf1",
            "children": [ 
                {
                    "title": "PDF Accessibility Assessment Framework (RAPDF 1): Introduction",
                    "menu": "Introduction",
                    "name": "rapdf1/index",
                    "md": "./content/en/rapdf1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAPDF 1: Criteria and tests",
                    "menu": "Criteria and tests",
                    "name": "rapdf1/referentiel-technique",
                    "md": "./content/en/rapdf1/referentiel-technique.md",
                    "prefix": "../../..", 
                    "html": true, 
                    "slugify": "slugifyA42",
                    "genSummary": "ol", 
                    "summaryTitle": "Themes"
                }, 
                {
                    "title": "RAPDF 1: Glossary",
                    "menu": "Glossary",
                    "name": "rapdf1/glossaire",
                    "md": "./content/en/rapdf1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAPDF 1: Testing methodology",
                    "menu": "Testing methodology",
                    "name": "rapdf1/methodologie",
                    "md": "./content/en/rapdf1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAPDF 1: Testing environment",
                    "menu": "Testing environment",
                    "name": "rapdf1/environnement",
                    "md": "./content/en/rapdf1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAPDF 1: References",
                    "menu": "References",
                    "name": "rapdf1/references",
                    "md": "./content/en/rapdf1/references.md",
                    "prefix": "../../.." 
                }
            ]
        }
    ],
    "footer": [
        {
            "title": "License",
            "menu": "License",
            "name": "licence",
            "md": "./content/en/licence.md",
            "html": true,
            "prefix": "../.."
        }, 
        {
            "title": "Accessibility statement",
            "menu": "Accessibility statement",
            "name": "support/accessibilite",
            "md": "./content/en/accessibilite.md", 
            "html": true, 
            "prefix": "../../.."
        }, 
        {
            "title": "Legal aspects",
            "menu": "Legal aspects",
            "name": "aspects-legaux",
            "md": "./content/en/mentions-legales.md",
            "prefix": "../.."
        },        
        {
            "title": "Site map",
            "menu": "Site map",
            "name": "plan-site"
        },
        {
            "title": "Contact us", 
            "menu": "Contact",
            "name": "contact",
            "md": "./content/en/contact.md", 
            "html": true,
            "prefix": "../.."
        }                
    ], 
    "hidden": [
        {
            "title": "404 error",
            "name": "404",
            "md": "./content/en/404.md",
            "prefix": "../.."
        }, 
        {
            "title": "Successful registration!",
            "name": "nl-success",
            "md": "./content/en/nl-success.md",
            "html": true,
            "prefix": "../.."
        }           
    ]
}

const level1 = config.mainMenu.concat(config.footer).concat(config.hidden).map(e => e.name)
const level2 = config.mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).map(e => e.name)
config.names = level1.concat(level2)

module.exports = {config}