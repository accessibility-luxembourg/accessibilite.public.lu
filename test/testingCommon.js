const dotenv = require('dotenv')
dotenv.config()

const configFr = require('../scripts/config_fr.js').config
const configEn = require('../scripts/config_en.js').config
const news = require('../scripts/news.js')

const urlBase = 'http://127.0.0.1:8080'

function getAllPages() {
    const pages = []
    const langs = ['fr']
    if (process.env.DISABLE_EN !== 'true') {
        langs.push('en')
    }

    // Build full config object like in gen.js
    const fullConfig = {}
    fullConfig['fr'] = configFr
    fullConfig['en'] = configEn

    langs.forEach(lang => {
        const config = fullConfig[lang]
        if (!config) {
            console.error(`Config is undefined for language: ${lang}`)
            return
        }
        
        // Get all regular pages from config
        const level1 = config.mainMenu.concat(config.footer).concat(config.hidden)
        const level2 = config.mainMenu.filter(e => e.children !== undefined).flatMap(e => e.children)
        const regularPages = level1.concat(level2)
            .filter(e => e.children === undefined && e.name !== undefined)
            .map(e => ({
                name: `${lang}_${e.name}`,
                url: `${urlBase}/${lang}/${e.name}.html`,
                title: e.title,
                lang: lang
            }))

        // Get deprecated pages if they exist
        if (config.deprecated && config.deprecated.length > 0) {
            const deprecatedLevel1 = config.deprecated
            const deprecatedLevel2 = config.deprecated.filter(e => e.children !== undefined).flatMap(e => e.children)
            const deprecatedPages = deprecatedLevel1.concat(deprecatedLevel2)
                .filter(e => e.children === undefined && e.name !== undefined)
                .map(e => ({
                    name: `${lang}_${e.name}`,
                    url: `${urlBase}/${lang}/${e.name}.html`,
                    title: e.title,
                    lang: lang,
                    deprecated: true
                }))
            regularPages.push(...deprecatedPages)
        }

        // Get news pages using full config like gen.js does
        let newsPages = []
        try {
            const articles = news.genNews(fullConfig, lang, './dist', urlBase, (key) => key)
            newsPages = articles
                .filter(article => article.meta.slug && article.meta.slug !== 'undefined')
                .map(article => ({
                    name: `${lang}_news_${article.meta.slug}`,
                    url: `${urlBase}/${lang}/news/${article.meta.slug}.html`,
                    title: article.meta.title,
                    lang: lang
                }))
        } catch (error) {
            console.warn(`Warning: Could not load news articles for ${lang}:`, error.message)
        }

        pages.push(...regularPages, ...newsPages)
    })

    return pages
}

function getPages() {
    // Legacy function for backwards compatibility
    const allPages = getAllPages()
    if (process.argv[2] !== undefined) {
        console.log('Checking '+ process.argv[2]+ '...')
        return [process.argv[2]]
    } else {
        console.log('Checking all pages...')
        return allPages.map(page => page.url)
    }
}

function getPuppeteerBrowserConfig() {
    return {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
}

async function runBatchTests(pages, testFunction, batchSize = 3, batchDelay = 1000) {
    const results = []
    
    for (let i = 0; i < pages.length; i += batchSize) {
        const batch = pages.slice(i, i + batchSize)
        console.log(`\nTesting batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(pages.length/batchSize)}...`)
        
        const batchPromises = batch.map(page => {
            console.log(`  Checking: ${page.name || page}`)
            return testFunction(page)
        })
        
        const batchResults = await Promise.all(batchPromises)
        results.push(...batchResults)
        
        // Small delay between batches
        if (i + batchSize < pages.length) {
            await new Promise(resolve => setTimeout(resolve, batchDelay))
        }
    }
    
    return results
}

async function checkPages(pages, check, analyse) {
    let nrErrors = 0;
    for (const p of pages) {
        let result = await check(p)
        nrErrors += analyse(p, result)
    }
    return nrErrors;
}

function runTests(check, analyse) {
    const pages = getPages()
    checkPages(pages, check, analyse).then(nrErrors => {
        console.log('nr of errors: ', nrErrors)
        process.exit(nrErrors)
    }).catch(error => { 
        console.error('error', error.message)
        process.exit(1)
     });
}

exports = module.exports = runTests;
exports.default = runTests;
exports.getAllPages = getAllPages;
exports.getPages = getPages;
exports.getPuppeteerBrowserConfig = getPuppeteerBrowserConfig;
exports.runBatchTests = runBatchTests;