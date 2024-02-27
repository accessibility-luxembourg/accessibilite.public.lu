const genNewRGAA = require('./genNewRGAA.js')
const lib = require('./common.js')
const axeRgaa = require('./AxeRGAAmsg.json')
const fs = require('fs')

const criteresRAWeb1 = genNewRGAA.generateCriteria('./content/en/raweb1')
const niveauxRAWeb1 = require('../content/en/raweb1/niveaux.json')
const dataRAWeb1 = {topics: criteresRAWeb1.topics, md: lib.mdCriteres(), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: [], message:'', autoTests: {}, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}
const glossaryRAWeb1 = {glossary: genNewRGAA.generateGlossary('./content/en/raweb1'), slugify: lib.slugify, md: lib.mdGlossary}

const criteresMonit = genNewRGAA.generateCriteria('./content/en/raweb1', '../../../html/en/raweb1/')
const shortList = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.1", "3.1", "3.2", "4.1", "4.2", "4.3", "4.4", "4.8", "4.9", "4.10", "4.11", "5.6", "5.7", "6.1", "6.2","7.3", "8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8", "9.1", "9.2", "10.7", "10.8", "10.9", "10.10", "10.14", "11.1", "11.2", "11.5", "11.6", "11.7", "11.9", "11.10", "12.6", "12.7", "12.8", "12.9", "12.11", "13.1", "13.7", "13.8"]
const message = '<strong>Attention&nbsp;:</strong> cette liste de critères est à utiliser uniquement dans le cadre de la <a href="../../../html/en/monitoring/controle-simplifie.html">méthode de contrôle simplifié</a>.<br />Si des règles de tests automatisés peuvent contribuer à tester un critère, celles-ci sont mentionnées dans les tables de correspondance disponibles en fin de critère.'
const dataAuditSimpl = {topics: criteresMonit.topics, md: lib.mdCriteres('../raweb1/'), slugify: lib.slugifySC, tech2URL: lib.tech2URL, langOnWCAG: lib.langOnWCAG, langOnEUNorm: lib.langOnEUNorm, shortList: shortList, message: message, autoTests: axeRgaa, levels: niveauxRAWeb1, normVersion: "EN 301 549 V3.2.1 (2021-03)"}

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
            "md": "./content/en/welcome.md", 
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
                    "title": "Obligations d’accessibilité numérique",
                    "menu": "Les obligations",
                    "name": "obligations",
                    "md": "./content/en/raweb1/obligations.md", 
                    "html": true,
                    "prefix": "../..",
                    "genSummary": "ol", 
                    "summaryTitle": "Sommaire"
                },
                {
                    "title": "Mission de contrôle de l'accessibilité numérique",
                    "menu": "La mission de contrôle",
                    "name": "monitoring/mission",
                    "md": "./content/en/mission.md",
                    "prefix": "../../.." 
                },
                {
                    "title": "Données ouvertes",
                    "menu": "Les données ouvertes",
                    "name": "monitoring/open-data",
                    "md": "./content/en/opendata.md", 
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
                    "md": "./content/en/cahier-des-charges.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "Kit d'audit d'accessibilité",
                    "menu": "Kit d'audit",
                    "name": "tools/kit",
                    "html": true,
                    "md": "./content/en/raweb1/kit-audit.md", 
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
                    "md": "./content/en/reclamation.md", 
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
                    "md": "./content/en/raweb1/introduction.md",
                    "prefix": "../../.."
                },        
                {
                    "title": "RAWeb 1: Critères et tests",
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
                    "title": "RAWeb 1: Glossaire",
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
                    "title": "RAWeb 1: Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "raweb1/methodo-test",
                    "md": "./content/en/raweb1/methodologie-de-test.md",
                    "html": true,
                    "prefix": "../../.." 
                },                
                {
                    "title": "RAWeb 1: Environnement de test",
                    "menu": "Environnement de test",
                    "name": "raweb1/environment",
                    "md": "./content/en/raweb1/environnement-de-test.md",
                    "html": true,
                    "prefix": "../../.."
                },                        
                {
                    "title": "RAWeb 1: Références",
                    "menu": "Références",
                    "name": "raweb1/references",
                    "md": "./content/en/raweb1/references.md", 
                    "html": true,                    
                    "prefix": "../../.."
                },
                {
                    "title": "RAWeb 1: Notes de révision",
                    "menu": "Notes de révision",
                    "name": "raweb1/notes-revision",
                    "html": true,
                    "md": "./content/en/raweb1/notes-de-revision.md", 
                    "prefix": "../../.."
                },
                {
                    "title": "Méthode de contrôle simplifié de l'accessibilité v1.2.1",
                    "menu": "La méthode de contrôle simplifié",
                    "name": "monitoring/controle-simplifie",
                    "md": "./content/en/controle-simplifie.md", 
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
                    "md": "./content/en/raam1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAAM 1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "raam1/referentiel-technique",
                    "md": "./content/en/raam1/referentiel-technique.md",
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
                    "md": "./content/en/raam1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAAM 1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "raam1/methodology",
                    "md": "./content/en/raam1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAAM 1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "raam1/environment",
                    "md": "./content/en/raam1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAAM 1 : Références",
                    "menu": "Références",
                    "name": "raam1/references",
                    "md": "./content/en/raam1/references.md",
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
                    "md": "./content/en/rapdf1/introduction.md", 
                    "html": true,
                    "prefix": "../../.."
                },                
                {
                    "title": "RAPDF 1 : Critères et tests",
                    "menu": "Critères et tests",
                    "name": "rapdf1/referentiel-technique",
                    "md": "./content/en/rapdf1/referentiel-technique.md",
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
                    "md": "./content/en/rapdf1/glossaire.md",
                    "prefix": "../../..", 
                    "html": true,                    
                    "slugify": "slugifyA42", 
                    "genSummary": "ul", 
                    "summaryTitle": "Index"
                },                          
                {
                    "title": "RAPDF 1 : Méthodologie de test",
                    "menu": "Méthodologie de test",
                    "name": "rapdf1/methodology",
                    "md": "./content/en/rapdf1/methodologie.md",
                    "html": true, 
                    "prefix": "../../..", 
                    "slugify": "slugifyA42"
                },
                {
                    "title": "RAPDF 1 : Environnement de test",
                    "menu": "Environnement de test",
                    "name": "rapdf1/environment",
                    "md": "./content/en/rapdf1/environnement.md",
                    "html": true,
                    "prefix": "../../.."
                },  
                {
                    "title": "RAPDF 1 : Références",
                    "menu": "Références",
                    "name": "rapdf1/references",
                    "md": "./content/en/rapdf1/references.md",
                    "prefix": "../../.." 
                }
            ]
        }
    ],
    "footer": [
        {
            "title": "Licence",
            "menu": "Licence",
            "name": "license",
            "md": "./content/en/licence.md",
            "html": true,
            "prefix": "../.."
        }, 
        {
            "title": "Déclaration d'accessibilité",
            "menu": "Déclaration d'accessibilité",
            "name": "support/accessibilite",
            "md": "./content/en/accessibilite.md", 
            "html": true, 
            "prefix": "../../.."
        }, 
        {
            "title": "Aspects légaux",
            "menu": "Aspects légaux",
            "name": "aspects-legaux",
            "md": "./content/en/mentions-legales.md",
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
            "md": "./content/en/contact.md", 
            "html": true,
            "prefix": "../.."
        }                
    ], 
    "hidden": [
        {
            "title": "Erreur 404",
            "name": "404",
            "md": "./content/en/404.md",
            "prefix": "../.."
        }, 
        {
            "title": "Inscription réussie !",
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