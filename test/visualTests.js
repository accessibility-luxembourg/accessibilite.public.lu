const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const pixelmatch = require('pixelmatch').default
const { PNG } = require('pngjs')
const dotenv = require('dotenv')

dotenv.config()

const configFr = require('../scripts/config_fr.js').config
const configEn = require('../scripts/config_en.js').config
const news = require('../scripts/news.js')

const urlBase = 'http://127.0.0.1:8080'
const screenshotsDir = './test/screenshots'
const baselineDir = path.join(screenshotsDir, 'baseline')
const actualDir = path.join(screenshotsDir, 'actual')
const diffDir = path.join(screenshotsDir, 'diff')
const dirs = [screenshotsDir, baselineDir, actualDir, diffDir]

// Ensure directories exist
dirs.map(dir => {
    console.log(dir)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
})

function getAllPages() {
    const pages = []
    const langs = ['fr']
    if (process.env.DISABLE_EN !== 'true') {
        langs.push('en')
    }

    langs.forEach(lang => {
        const config = lang === 'fr' ? configFr : configEn
        
        // Get all regular pages from config
        const level1 = config.mainMenu.concat(config.footer).concat(config.hidden)
        const level2 = config.mainMenu.filter(e => e.children !== undefined).flatMap(e => e.children)
        const regularPages = level1.concat(level2)
            .filter(e => e.children === undefined && e.name !== undefined)
            .map(e => ({
                name: e.name,
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
                    name: e.name,
                    url: `${urlBase}/${lang}/${e.name}.html`,
                    title: e.title,
                    lang: lang,
                    deprecated: true
                }))
            regularPages.push(...deprecatedPages)
        }

        // Add news articles
        try {
            const articles = news.getAllArticles(lang)
            articles.forEach(article => {
                if (article.meta && article.meta.slug) {
                    pages.push({
                        name: `news/${article.meta.slug}`,
                        url: `${urlBase}/${lang}/news/${article.meta.slug}.html`,
                        title: article.meta.title,
                        lang: lang,
                        type: 'news'
                    })
                }
            })
        } catch (error) {
            console.warn(`Could not load news articles for ${lang}:`, error.message)
        }

        pages.push(...regularPages)
    })

    return pages
}

async function takeScreenshot(page, url, filename) {
    console.log(`Taking screenshot: ${filename}`)
    
    try {
        await page.emulateMediaFeatures([
            {name: 'prefers-reduced-motion', value: 'reduce'},
        ]);
        await page.goto(url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        })

        // Take full page screenshot
        const screenshot = await page.screenshot({ 
            fullPage: true,
            type: 'png'
        })

        fs.writeFileSync(filename, screenshot)
        return true
    } catch (error) {
        console.error(`Failed to take screenshot for ${url}:`, error.message)
        return false
    }
}

function compareImages(baseline, actual, diff) {
    if (!fs.existsSync(baseline)) {
        console.log(`No baseline found for ${path.basename(baseline)}, creating baseline`)
        fs.copyFileSync(actual, baseline)
        return { match: true, isNewBaseline: true }
    }

    const baselineImg = PNG.sync.read(fs.readFileSync(baseline))
    const actualImg = PNG.sync.read(fs.readFileSync(actual))

    // Handle dimension differences
    const width = Math.max(baselineImg.width, actualImg.width)
    const height = Math.max(baselineImg.height, actualImg.height)

    if (baselineImg.width !== actualImg.width || baselineImg.height !== actualImg.height) {
        console.warn(`Dimension mismatch for ${path.basename(baseline)}: ${baselineImg.width}x${baselineImg.height} vs ${actualImg.width}x${actualImg.height}`)
    }

    const diffImg = new PNG({ width, height })
    const pixelDiff = pixelmatch(
        baselineImg.data, 
        actualImg.data, 
        diffImg.data, 
        Math.min(baselineImg.width, actualImg.width),
        Math.min(baselineImg.height, actualImg.height),
        { 
            threshold: 0.1,
            includeAA: false,
            alpha: 0.2
        }
    )

    const totalPixels = width * height
    const diffPercentage = (pixelDiff / totalPixels) * 100

    if (pixelDiff > 0) {
        fs.writeFileSync(diff, PNG.sync.write(diffImg))
        return { 
            match: false, 
            pixelDiff, 
            diffPercentage: diffPercentage.toFixed(2),
            totalPixels 
        }
    }

    return { match: true, pixelDiff: 0 }
}

function sanitizeFilename(name) {
    return name.replace(/[^a-z0-9-_]/gi, '_').replace(/_+/g, '_')
}

async function runVisualTests(updateBaseline = false) {
    console.log('Starting visual regression tests...')
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const page = await browser.newPage()
    await page.setViewport({ width: 1200, height: 800 })
    
    // Disable animations and transitions for consistent screenshots
    await page.addStyleTag({
        content: `
            *, *::before, *::after {
                animation-duration: 0s !important;
                animation-delay: 0s !important;
                transition-duration: 0s !important;
                transition-delay: 0s !important;
            }
        `
    })

    const pages = getAllPages()
    const results = {
        total: pages.length,
        passed: 0,
        failed: 0,
        newBaselines: 0,
        failures: []
    }

    console.log(`Found ${pages.length} pages to test`)

    for (const pageInfo of pages) {
        const filename = `${pageInfo.lang}_${sanitizeFilename(pageInfo.name)}.png`
        const actualPath = path.join(actualDir, filename)
        const baselinePath = path.join(baselineDir, filename)
        const diffPath = path.join(diffDir, filename)

        const success = await takeScreenshot(page, pageInfo.url, actualPath)
        
        if (!success) {
            results.failed++
            results.failures.push({
                page: pageInfo.name,
                url: pageInfo.url,
                error: 'Failed to take screenshot'
            })
            continue
        }

        if (updateBaseline) {
            fs.copyFileSync(actualPath, baselinePath)
            console.log(`✅ Updated baseline for ${pageInfo.name}`)
            results.newBaselines++
        } else {
            const comparison = compareImages(baselinePath, actualPath, diffPath)
            
            if (comparison.match) {
                console.log(`✅ ${pageInfo.name}${comparison.isNewBaseline ? ' (new baseline)' : ''}`)
                results.passed++
                if (comparison.isNewBaseline) {
                    results.newBaselines++
                }
            } else {
                console.log(`❌ ${pageInfo.name} - ${comparison.pixelDiff} pixels different (${comparison.diffPercentage}%)`)
                results.failed++
                results.failures.push({
                    page: pageInfo.name,
                    url: pageInfo.url,
                    pixelDiff: comparison.pixelDiff,
                    diffPercentage: comparison.diffPercentage,
                    diffImage: diffPath
                })
            }
        }
    }

    await browser.close()

    console.log('\n=== Visual Regression Test Results ===')
    console.log(`Total pages tested: ${results.total}`)
    console.log(`Passed: ${results.passed}`)
    console.log(`Failed: ${results.failed}`)
    console.log(`New baselines: ${results.newBaselines}`)

    if (results.failures.length > 0) {
        console.log('\nFailures:')
        results.failures.forEach(failure => {
            console.log(`- ${failure.page}: ${failure.error || `${failure.pixelDiff} pixels (${failure.diffPercentage}%)`}`)
        })
    }

    return results.failed
}

// Handle command line arguments
const args = process.argv.slice(2)
const updateBaseline = args.includes('--update-baseline')

runVisualTests(updateBaseline).then(failures => {
    process.exit(failures)
}).catch(error => {
    console.error('Visual regression tests failed:', error)
    process.exit(1)
})