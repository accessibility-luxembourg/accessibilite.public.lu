const genNewRGAA = require('./genNewRGAA.js')
const lib = require('./common.js')
const axeRgaa = require('./AxeRGAAmsg.json')
const fs = require('fs')

const deprecationMessage = '<strong>Cette page est obsolète : </strong> veuillez consulter la page équivalente du <a href="../raweb1/index.html">RAWeb1</a>. <br />Pour plus d\'informations, nous vous invitons à prendre connaissance des <a href="../raweb1/notes-revision.html">notes de révision</a>.'

const criteresRAWeb1 = genNewRGAA.generateCriteria('./content/fr/raweb1')
const niveauxRAWeb1 = require('../content/fr/raweb1/niveaux.json')
const dataRAWeb1 = {topics: criteresRAWeb1.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}
const glossaryRAWeb1 = {glossary: genNewRGAA.generateGlossary('./content/fr/raweb1', 'critère'), slugify: lib.slugify, md: lib.mdGlossary}

const criteresMonit = genNewRGAA.generateCriteria('./content/fr/raweb1', '../../../html/fr/raweb1/')
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Attention&nbsp;:</strong> cette liste de critères est à utiliser uniquement dans le cadre de la <a href="../../../html/fr/monitoring/controle-simplifie.html">méthode de contrôle simplifié</a>.<br />Si des règles de tests automatisés peuvent contribuer à tester un critère, celles-ci sont mentionnées dans les tables de correspondance disponibles en fin de critère.'
const dataAuditSimpl = {topics: criteresMonit.topics, md: lib.mdCriteres('../raweb1/'), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: shortList, message: message, autoTests: axeRgaa, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}

const criteres412 = genNewRGAA.generateCriteria('./content/fr/rgaa4.1.2')
const niveaux = require('../content/fr/rgaa4.1.2/niveaux.json')
const data412 = {topics: criteres412.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormFromWCAG, shortList: [], message:'', autoTests: {}, levels: niveaux, normVersion: "EN 301 549 V2.1.2 (2018-08)"}
const glossary412 = {glossary: genNewRGAA.generateGlossary('./content/fr/rgaa4.1.2', 'critère'), slugify: lib.slugify, md: lib.mdGlossary}

const criteres40 = JSON.parse(fs.readFileSync('./content/fr/rgaa4/criteres.json'))
const data40 = {topics: criteres40.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}
const glossary40 = JSON.parse(fs.readFileSync('./content/fr/rgaa4/glossaire.json'))
const dataGlossary40 = {glossary: glossary40, slugify: lib.slugify, md: lib.mdGlossary}

const criteres41 = JSON.parse(fs.readFileSync('./content/fr/rgaa4.1/criteres.json'))
const data41={topics: criteres41.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNormDeprecated, shortList: [], message:'', autoTests: {}, levels: niveaux}
const glossary41 = JSON.parse(fs.readFileSync('./content/fr/rgaa4.1/glossaire.json'))
const dataGlossary41 = {glossary: glossary41, slugify: lib.slugify, md: lib.mdGlossary}

const config = {
    "declaLangs": [
        {"name": "français", "code": "fr"},
        {"name": "allemand", "code": "de"},
        {"name": "anglais", "code": "en"},
        {"name": "luxembourgeois", "code": "lb"}
    ],
    "mainMenu": [
        {
            "title": "Accueil",
            "menu": "<span class='hide-element'>Accueil</span>",
            "name": "index",
            "md": "./content/fr/welcome.md", 
            "html": true,
            "prefix": "../.."
        },
        {
            "title": "Actualités",
            "menu": "Actualités",
            "name": "news",
            "children": [ 
                {
                    "title": "Actualités",
                    "menu": "Articles",
                    "name": "news/index"
                },
                {
                    "title": "Suivre nos actualités",
                    "menu": "Suivre nos actualités",
                    "name": "newsletter",
                    "md": "./content/fr/newsletter.md", 
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
                    "title": "Obligations d’accessibilité numérique",
                    "menu": "Les obligations",
                    "name": "obligations",
                    "md": "./content/fr/raweb1/obligations.md", 
                    "html": true,
                    "prefix": "../..",
                    "genSummary": "ol", 
                    "summaryTitle": "Sommaire"
                },
                {
                    "title": "Mission de contrôle de l'accessibilité numérique",
                    "menu": "La mission de contrôle",
                    "name": "monitoring/mission",
                    "md": "./content/fr/mission.md",
                    "prefix": "../../.." 
                },
                {
                    "title": "Données ouvertes",
                    "menu": "Les données ouvertes",
                    "name": "monitoring/open-data",
                    "md": "./content/fr/opendata.md", 
                    "html": true,
                    "prefix": "../../.."
                }     
            ]
        },       
        {
            "title": "Outils",
            "menu": "Outils",
            "name": "tools",
            "children": [
                {
                    "title": "Prendre en compte l'accessibilité dès le cahier des charges",
                    "menu": "Cahier des charges",
                    "name": "tools/cahier-des-charges",
                    "md": "./content/fr/cahier-des-charges.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "Kit d'audit d'accessibilité",
                    "menu": "Kit d'audit",
                    "name": "tools/kit",
                    "html": true,
                    "md": "./content/fr/raweb1/kit-audit.md", 
                    "prefix": "../../.."
                },
                {
                    "title": "Créez votre déclaration",
                    "menu": "Votre déclaration",
                    "name": "tools/decla"
                },
                {
                    "title": "Procédure de réclamation",
                    "menu": "Réclamations",
                    "name": "tools/reclamations",
                    "md": "./content/fr/reclamation.md", 
                    "prefix": "../../.."
                }    
            ]
        },         
        {
            "title": "Référentiel Web",
            "menu": "<span class='mobile-only'>Référentiel</span> Web",
            "name": "raweb1",
            "children": [
                {
                    "title": "Référentiel d'Évaluation de l'Accessibilité Web (RAWeb 1) : Introduction",
                    "menu": "Introduction",
                    "name": "raweb1/index",
                    "html": true,
                    "md": "./content/fr/raweb1/introduction.md",
                    "prefix": "../../.."
                },        
                {
                    "title": "RAWeb 1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "raweb1/criteres", 
                    "type": "criteres",
                    "template": "criteria-new.ejs", 
                    "data": dataRAWeb1,
                    "prefix": "../../..",
                    "genSummary": "ol",
                    "summaryTitle": "Thématiques"
                },
                {
                    "title": "RAWeb 1 : Glossaire",
                    "menu": "Glossaire",
                    "name": "raweb1/glossaire",
                    "type": "glossaire",
                    "template": "glossary-new.ejs", 
                    "data": glossaryRAWeb1,
                    "prefix": "../../..",
                    "genSummary": "ul",
                    "summaryTitle": "Index"
                }, 
                {
                    "title": "RAWeb 1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "raweb1/methodo-test",
                    "md": "./content/fr/raweb1/methodologie-de-test.md",
                    "html": true,
                    "prefix": "../../.." 
                },                
                {
                    "title": "RAWeb 1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "raweb1/environnement",
                    "md": "./content/fr/raweb1/environnement-de-test.md",
                    "html": true,
                    "prefix": "../../.."
                },                        
                {
                    "title": "RAWeb 1 : Références",
                    "menu": "Références",
                    "name": "raweb1/references",
                    "md": "./content/fr/raweb1/references.md", 
                    "html": true,                    
                    "prefix": "../../.."
                },
                {
                    "title": "RAWeb 1 : Notes de révision",
                    "menu": "Notes de révision",
                    "name": "raweb1/notes-revision",
                    "html": true,
                    "md": "./content/fr/raweb1/notes-de-revision.md", 
                    "prefix": "../../.."
                },
                {
                    "title": "Méthode de contrôle simplifié de l'accessibilité v1.2.1",
                    "menu": "La méthode de contrôle simplifié",
                    "name": "monitoring/controle-simplifie",
                    "md": "./content/fr/controle-simplifie.md", 
                    "html": true,
                    "prefix": "../../.."
                },
                {
                    "title": "Critères pour le contrôle simplifié",
                    "menu": "Les critères pour le contrôle simplifié",
                    "name": "monitoring/audit-simpl", 
                    "type": "criteres", 
                    "template": "criteria-new.ejs", 
                    "data": dataAuditSimpl,
                    "prefix": "../../..",
                    "genSummary": "ol",
                    "summaryTitle": "Thématiques"
                }
            ]
        },
        {
            "title": "Référentiel mobile",
            "menu": "<span class='mobile-only'>Référentiel</span> mobile",
            "name": "raam1",
            "children": [ 
                {
                    "title": "Référentiel d'évaluation de l'accessibilité des applications mobiles (RAAM 1) : Introduction",
                    "menu": "Introduction",
                    "name": "raam1/index",
                    "md": "./content/fr/raam1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAAM 1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "raam1/referentiel-technique",
                    "md": "./content/fr/raam1/referentiel-technique.md",
                    "prefix": "../../..", 
                    "html": true, 
                    "slugify": "slugifyA42",
                    "genSummary": "ol", 
                    "summaryTitle": "Thématiques"
                }, 
                {
                    "title": "RAAM 1 : Glossaire",
                    "menu": "Glossaire",
                    "name": "raam1/glossaire",
                    "md": "./content/fr/raam1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAAM 1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "raam1/methodologie",
                    "md": "./content/fr/raam1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAAM 1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "raam1/environnement",
                    "md": "./content/fr/raam1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAAM 1 : Références",
                    "menu": "Références",
                    "name": "raam1/references",
                    "md": "./content/fr/raam1/references.md",
                    "prefix": "../../.." 
                }
            ]
        },
        {
            "title": "Référentiel PDF",
            "menu": "<span class='mobile-only'>Référentiel</span> PDF",
            "name": "rapdf1",
            "children": [ 
                {
                    "title": "Référentiel d'évaluation de l'accessibilité des documents au format PDF (RAPDF 1) : Introduction",
                    "menu": "Introduction",
                    "name": "rapdf1/index",
                    "md": "./content/fr/rapdf1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAPDF 1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "rapdf1/referentiel-technique",
                    "md": "./content/fr/rapdf1/referentiel-technique.md",
                    "prefix": "../../..", 
                    "html": true, 
                    "slugify": "slugifyA42",
                    "genSummary": "ol", 
                    "summaryTitle": "Thématiques"
                }, 
                {
                    "title": "RAPDF 1 : Glossaire",
                    "menu": "Glossaire",
                    "name": "rapdf1/glossaire",
                    "md": "./content/fr/rapdf1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAPDF 1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "rapdf1/methodologie",
                    "md": "./content/fr/rapdf1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAPDF 1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "rapdf1/environnement",
                    "md": "./content/fr/rapdf1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAPDF 1 : Références",
                    "menu": "Références",
                    "name": "rapdf1/references",
                    "md": "./content/fr/rapdf1/references.md",
                    "prefix": "../../.." 
                }
            ]
        }
    ],
    "footer": [
        {
            "title": "Licence",
            "menu": "Licence",
            "name": "licence",
            "md": "./content/fr/licence.md",
            "html": true,
            "prefix": "../.."
        }, 
        {
            "title": "Déclaration d'accessibilité",
            "menu": "Déclaration d'accessibilité",
            "name": "support/accessibilite",
            "md": "./content/fr/accessibilite.md", 
            "html": true, 
            "prefix": "../../.."
        }, 
        {
            "title": "Aspects légaux",
            "menu": "Aspects légaux",
            "name": "aspects-legaux",
            "md": "./content/fr/mentions-legales.md",
            "prefix": "../.."
        },        
        {
            "title": "Plan du site",
            "menu": "Plan du site",
            "name": "plan-site"
        },
        {
            "title": "Nous contacter", 
            "menu": "Contact",
            "name": "contact",
            "md": "./content/fr/contact.md", 
            "html": true,
            "prefix": "../.."
        }                
    ], 
    "hidden": [
        {
            "title": "Erreur 404",
            "name": "404",
            "md": "./content/fr/404.md",
            "prefix": "../.."
        }, 
        {
            "title": "Inscription réussie !",
            "name": "nl-success",
            "md": "./content/fr/nl-success.md",
            "html": true,
            "prefix": "../.."
        },
        {
            "title": "Inscription à la newsletter",
            "name": "nl-subscribe",
            "md": "./content/nl-subscribe.md",
            "html": true,
            "prefix": "../.."
        }            
    ],
    "deprecated": [
        {
            "title": "RGAA 4.1.2",
            "name": "rgaa4.1.2",
            "children": [
                {
                    "title": "Référentiel Général d'Amélioration de l'Accessibilité web (RGAA 4.1.2) : Introduction",
                    "menu": "Introduction",
                    "name": "rgaa4.1.2/index",
                    "html": true,
                    "md": "./content/fr/rgaa4.1.2/introduction.md",
                    "prefix": "../../.."
                },        
                {
                    "title": "RGAA 4.1.2 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "rgaa4.1.2/criteres", 
                    "type": "criteres",
                    "template": "criteria-new.ejs", 
                    "data": data412,
                    "prefix": "../../..",
                    "genSummary": "ol",
                    "summaryTitle": "Thématiques",
                    "deprecation": deprecationMessage
                },
                {
                    "title": "RGAA 4.1.2 : Glossaire",
                    "menu": "Glossaire",
                    "name": "rgaa4.1.2/glossaire",
                    "type": "glossaire",
                    "template": "glossary-new.ejs", 
                    "data": glossary412,
                    "prefix": "../../..",
                    "genSummary": "ul",
                    "summaryTitle": "Index",
                    "deprecation": deprecationMessage
                }, 
                {
                    "title": "RGAA 4.1.2 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "rgaa4.1.2/methodo-test",
                    "md": "./content/fr/rgaa4.1.2/methodologie-de-test.md",
                    "html": true,
                    "prefix": "../../.." 
                },                
                {
                    "title": "RGAA 4.1.2 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "rgaa4.1.2/environnement",
                    "md": "./content/fr/rgaa4.1.2/environnement-de-test.md",
                    "html": true,
                    "prefix": "../../.."
                },                        
                {
                    "title": "RGAA 4.1.2 : Références",
                    "menu": "Références",
                    "name": "rgaa4.1.2/references",
                    "md": "./content/fr/rgaa4.1.2/references.md", 
                    "html": true,                    
                    "prefix": "../../.."
                },
                {
                    "title": "RGAA 4.1.2 : Notes de révision",
                    "menu": "Notes de révision",
                    "name": "rgaa4.1.2/notes-revision",
                    "html": true,
                    "md": "./content/fr/rgaa4.1.2/notes-de-revision-4-1-2.md", 
                    "prefix": "../../.."
                }
            ]
        },
        {
            "title": "RGAA 4.0",
            "name": "rgaa4",
            "children": [
                {
                    "title": "Introduction au RGAA 4",
                    "menu": "Introduction",
                    "name": "rgaa4/index",
                    "md": "./content/fr/rgaa4/methode.md",
                    "prefix": "../../.."
                },       
                {
                    "title": "RGAA 4 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "rgaa4/criteres",
                    "type": "criteres",
                    "template": "criteria.ejs", 
                    "data": data40,
                    "prefix": "../../..",
                    "deprecation": deprecationMessage
                },
                {
                    "title": "RGAA 4 : Glossaire",
                    "menu": "Glossaire",
                    "name": "rgaa4/glossaire",
                    "type": "glossaire",
                    "template": "glossary.ejs", 
                    "data": dataGlossary40,
                    "prefix": "../../..",
                    "deprecation": deprecationMessage
                }, 
                {
                    "title": "RGAA 4 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "rgaa4/environnement",
                    "md": "./content/fr/rgaa4/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RGAA 4 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "rgaa4/methodo-test",
                    "md": "./content/fr/rgaa4/methodologie.md",
                    "html": true,
                    "prefix": "../../.." 
                },                                       
                {
                    "title": "RGAA 4 : Références",
                    "menu": "Références",
                    "name": "rgaa4/references",
                    "md": "./content/fr/rgaa4/references.md", 
                    "html": true,
                    "prefix": "../../.."
                },
                {
                    "title": "RGAA 4 : Notes de révision",
                    "menu": "Notes de révision",
                    "name": "rgaa4/notes-revision",
                    "md": "./content/fr/rgaa4/notes-revision.md", 
                    "prefix": "../../.."
                }
            ]
        },
        {
            "title": "RGAA 4.1",
            "name": "rgaa4.1",
            "children": [
                {
                    "title": "Référentiel Général d'Amélioration de l'Accessibilité web (RGAA 4.1) : Introduction",
                    "menu": "Introduction",
                    "name": "rgaa4.1/index",
                    "md": "./content/fr/rgaa4.1/introduction.md",
                    "prefix": "../../.."
                },        
                {
                    "title": "RGAA 4.1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "rgaa4.1/criteres",
                    "type": "criteres",
                    "template": "criteria.ejs", 
                    "data": data41,
                    "prefix": "../../..",
                    "deprecation": deprecationMessage
                },
                {
                    "title": "RGAA 4.1 : Glossaire",
                    "menu": "Glossaire",
                    "name": "rgaa4.1/glossaire",
                    "type": "glossaire",
                    "template": "glossary.ejs", 
                    "data": dataGlossary41,
                    "prefix": "../../..",
                    "deprecation": deprecationMessage
                }, 
                {
                    "title": "RGAA 4.1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "rgaa4.1/methodo-test",
                    "md": "./content/fr/rgaa4.1/methodologie.md",
                    "html": true,
                    "prefix": "../../.." 
                },                
                {
                    "title": "RGAA 4.1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "rgaa4.1/environnement",
                    "md": "./content/fr/rgaa4.1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },                        
                {
                    "title": "RGAA 4.1 : Références",
                    "menu": "Références",
                    "name": "rgaa4.1/references",
                    "md": "./content/fr/rgaa4.1/references.md", 
                    "html": true,                    
                    "prefix": "../../.."
                },
                {
                    "title": "RGAA 4.1 : Notes de révision",
                    "menu": "Notes de révision",
                    "name": "rgaa4.1/notes-revision",
                    "md": "./content/fr/rgaa4.1/notes-revision.md", 
                    "prefix": "../../.."
                }
            ]
        }
    ]
}

const level1 = config.mainMenu.concat(config.footer).concat(config.hidden).concat(config.deprecated).map(e => e.name)
const level2 = config.mainMenu.concat(config.deprecated).filter(e => (e.children !== undefined)).flatMap(e => e.children).map(e => e.name)
config.names = level1.concat(level2)

module.exports = {config}