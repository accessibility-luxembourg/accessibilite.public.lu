const puppeteer = require('puppeteer')
const { getAllPages, getPuppeteerBrowserConfig, runBatchTests } = require('./testingCommon')

async function checkPageResources(page) {
    const browser = await puppeteer.launch(getPuppeteerBrowserConfig())
    
    try {
        const browserPage = await browser.newPage()
        
        // Track failed resources
        const failedResources = []
        const jsErrors = []
        
        // Listen for failed resource requests
        browserPage.on('requestfailed', request => {
            failedResources.push({
                url: request.url(),
                failure: request.failure().errorText,
                resourceType: request.resourceType()
            })
        })
        
        // Listen for response errors (4xx, 5xx)
        browserPage.on('response', response => {
            if (response.status() >= 400) {
                failedResources.push({
                    url: response.url(),
                    failure: `HTTP ${response.status()} ${response.statusText()}`,
                    resourceType: response.request().resourceType()
                })
            }
        })
        
        // Listen for JavaScript errors
        browserPage.on('pageerror', error => {
            jsErrors.push({
                message: error.message,
                stack: error.stack
            })
        })
        
        // Listen for console errors
        browserPage.on('console', msg => {
            if (msg.type() === 'error') {
                jsErrors.push({
                    message: msg.text(),
                    location: msg.location()
                })
            }
        })
        
        // Navigate to page
        await browserPage.goto(page.url, { 
            waitUntil: 'networkidle2',
            timeout: 30000 
        })
        
        // Wait a bit more for any lazy-loaded resources
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Check for critical resources
        const criticalResources = await browserPage.evaluate(() => {
            const resources = {
                css: [],
                js: [],
                images: [],
                fonts: []
            }
            
            // Check CSS files
            const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
            stylesheets.forEach(link => {
                resources.css.push(link.href)
            })
            
            // Check JS files
            const scripts = document.querySelectorAll('script[src]')
            scripts.forEach(script => {
                resources.js.push(script.src)
            })
            
            // Check images
            const images = document.querySelectorAll('img[src]')
            images.forEach(img => {
                if (img.complete && img.naturalWidth === 0) {
                    resources.images.push({ src: img.src, failed: true })
                } else {
                    resources.images.push({ src: img.src, failed: false })
                }
            })
            
            // Check background images in CSS
            const elementsWithBg = document.querySelectorAll('*')
            elementsWithBg.forEach(el => {
                const style = window.getComputedStyle(el)
                const bgImage = style.backgroundImage
                if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
                    const url = bgImage.match(/url\(['"]?([^'"]+)['"]?\)/)?.[1]
                    if (url) {
                        resources.images.push({ src: url, failed: false })
                    }
                }
            })
            
            return resources
        })
        
        return {
            page: page,
            failedResources: failedResources,
            jsErrors: jsErrors,
            criticalResources: criticalResources,
            success: failedResources.length === 0 && jsErrors.length === 0
        }
        
    } finally {
        await browser.close()
    }
}

function analyzeResults(results) {
    let totalErrors = 0
    let totalPages = results.length
    let pagesWithErrors = 0
    
    console.log('\n=== RESOURCE LOADING TEST RESULTS ===\n')
    
    results.forEach(result => {
        const hasErrors = result.failedResources.length > 0 || result.jsErrors.length > 0
        
        if (hasErrors) {
            pagesWithErrors++
            console.log(`❌ ${result.page.name} (${result.page.url})`)
            
            if (result.failedResources.length > 0) {
                console.log('  Failed Resources:')
                result.failedResources.forEach(resource => {
                    console.log(`    - ${resource.resourceType}: ${resource.url}`)
                    console.log(`      Error: ${resource.failure}`)
                    totalErrors++
                })
            }
            
            if (result.jsErrors.length > 0) {
                console.log('  JavaScript Errors:')
                result.jsErrors.forEach(error => {
                    console.log(`    - ${error.message}`)
                    if (error.location) {
                        console.log(`      Location: ${JSON.stringify(error.location)}`)
                    }
                    totalErrors++
                })
            }
            console.log()
        } else {
            console.log(`✅ ${result.page.name}`)
        }
    })
    
    console.log('\n=== SUMMARY ===')
    console.log(`Total pages tested: ${totalPages}`)
    console.log(`Pages with errors: ${pagesWithErrors}`)
    console.log(`Pages without errors: ${totalPages - pagesWithErrors}`)
    console.log(`Total errors found: ${totalErrors}`)
    
    if (totalErrors === 0) {
        console.log('\n🎉 All pages passed resource loading tests!')
    } else {
        console.log(`\n💥 Found ${totalErrors} resource loading issues across ${pagesWithErrors} pages`)
    }
    
    return totalErrors
}

async function runResourceTests() {
    try {
        console.log('Starting resource loading tests...')
        
        const pages = getAllPages()
        console.log(`Testing ${pages.length} pages...`)
        
        const results = await runBatchTests(pages, checkPageResources, 5, 1000)
        
        const errorCount = analyzeResults(results)
        process.exit(errorCount)
        
    } catch (error) {
        console.error('Error running resource tests:', error.message)
        process.exit(1)
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runResourceTests()
}

module.exports = { runResourceTests, checkPageResources, getAllPages }