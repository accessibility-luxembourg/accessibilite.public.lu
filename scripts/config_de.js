const genNewRGAA = require('./genNewRGAA.js')
const lib = require('./common.js')
const axeRgaa = require('./AxeRGAAmsg.json')
const fs = require('fs')

const config = {
    "declaLangs": [
        {"name": "french", "code": "fr"},
        {"name": "german", "code": "de"},
        {"name": "english", "code": "en"},
        {"name": "luxembourgish", "code": "lb"}
    ],
    "deprecation": {
        "rgaa": ["<a href=\"../raweb1.1/index.html\">RAWeb 1.1</a>", "../raweb1.1/notes-revision.html"],
        "raweb": ["<a href=\"../raweb1.1/index.html\">RAWeb 1.1</a>", "../raweb1.1/notes-revision.html"],
        "raam": ["<a href=\"../raam1.1/index.html\">RAAM 1.1</a>", "../raam1.1/notes-revision.html"],
        "rapdf": ["<a href=\"../rapdf1.1/index.html\">RAPDF 1.1</a>", "../rapdf1.1/notes-revision.html"]
    },
    "mainMenu": [
        {
            "title": "Willkommen",
            "menu": "<span class='hide-element'>Startseite</span>",
            "name": "index",
            "md": "./content/de/welcome.md", 
            "prefix": ".."
        },
        {
            "title": "Nachrichten",
            "menu": "Nachrichten",
            "name": "news",
            "children": [ 
                {
                    "title": "Nachrichten",
                    "menu": "Nachrichten",
                    "name": "news/index"
                },
                {
                    "title": "Folgen Sie uns",
                    "menu": "Folgen Sie uns",
                    "name": "newsletter",
                    "md": "./content/de/newsletter.md", 
                    "prefix": ".."
                }
            ]
        },
        {
            "title": "Missionen",
            "menu": "Missionen",
            "name": "monitoring",
            "children": [ 
                {
                    "title": "Gesetzliche Anforderungen zur digitalen Barrierefreiheit",
                    "menu": "Gesetzliche Anforderungen",
                    "name": "obligations",
                    "md": "./content/de/obligations.md", 
                    "prefix": "..",
                    "genSummary": "ol", 
                    "summaryTitle": "Inhaltsverzeichnis"
                },
                {
                    "title": "Überwachung der digitalen Barrierefreiheit",
                    "menu": "Überwachung",
                    "name": "monitoring/mission",
                    "md": "./content/de/mission.md",
                    "prefix": "../.." 
                },
                {
                    "title": "Open data",
                    "menu": "Open data",
                    "name": "monitoring/open-data",
                    "md": "./content/de/opendata.md", 
                    "prefix": "../.."
                }     
            ]
        },       
        {
            "title": "Tools",
            "menu": "Tools",
            "name": "tools",
            "children": [
                {
                    "title": "Erstellen Sie Ihre Erklärung",
                    "menu": "Ihre Erklärung",
                    "name": "tools/decla"
                },
                {
                    "title": "Beschwerdeverfahren",
                    "menu": "Beschwerden",
                    "name": "tools/reclamations",
                    "md": "./content/de/reclamation.md", 
                    "prefix": "../.."
                }    
            ]
        }
    ],
    "footer": [
        {
            "title": "Lizenz",
            "menu": "Lizenz",
            "name": "licence",
            "md": "./content/de/licence.md",           
            "prefix": ".."
        }, 
        {
            "title": "Erklärung zur Barrierefreiheit",
            "menu": "Erklärung zur Barrierefreiheit",
            "name": "support/accessibilite",
            "md": "./content/de/accessibilite.md",            
            "prefix": "../.."
        }, 
        {
            "title": "Allgemeine rechtliche Hinweise",
            "menu": "Allgemeine rechtliche Hinweise",
            "name": "aspects-legaux",
            "md": "./content/de/mentions-legales.md",           
            "prefix": ".."
        },        
        {
            "title": "Sitemap",
            "menu": "Sitemap",
            "name": "plan-site"
        },
        {
            "title": "Kontaktieren Sie uns", 
            "menu": "Kontakt",
            "name": "contact",
            "md": "./content/de/contact.md", 
            "prefix": ".."
        }                
    ], 
    "hidden": [
        {
            "title": "404-Fehler",
            "name": "404",
            "md": "./content/de/404.md",
            "prefix": ".."
        },
        {
            "title": "Newsletter-Abonnement",
            "name": "nl-subscribe",
            "md": "./content/nl-subscribe.md",
            "html": true,
            "prefix": ".."
        }                  
    ]
}

const level1 = config.mainMenu.concat(config.footer).concat(config.hidden).map(e => e.name)
const level2 = config.mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children).map(e => e.name)
config.names = level1.concat(level2)

module.exports = {config}