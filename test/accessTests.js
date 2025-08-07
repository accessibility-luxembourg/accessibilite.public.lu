const AxePuppeteer = require('@axe-core/puppeteer').default
const puppeteer = require('puppeteer')
const { getAllPages, getPuppeteerBrowserConfig, runBatchTests } = require('./testingCommon')

async function checkPageAccessibility(page) {
    const browser = await puppeteer.launch(getPuppeteerBrowserConfig())
    
    try {
        const browserPage = await browser.newPage()
        
        // Navigate to page
        await browserPage.goto(page.url, { 
            waitUntil: 'domcontentloaded',
            timeout: 60000 
        })
        
        // Wait a bit for page to stabilize
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Run axe accessibility tests
        const axeResults = await new AxePuppeteer(browserPage)
            .configure({
                locale: page.lang === 'fr' ? 'fr' : 'en'
            })
            .analyze()
        
        return {
            page: page,
            results: axeResults,
            success: axeResults.violations.length === 0
        }
        
    } finally {
        await browser.close()
    }
}


function analyzeResults(results) {
    let totalViolations = 0
    let totalPages = results.length
    let pagesWithViolations = 0
    let impactStats = { critical: 0, serious: 0, moderate: 0, minor: 0 }
    
    console.log('\n=== ACCESSIBILITY TEST RESULTS ===\n')
    
    results.forEach(result => {
        const violations = result.results.violations.length
        const hasViolations = violations > 0
        
        if (hasViolations) {
            pagesWithViolations++
            console.log(`❌ ${result.page.name} (${result.page.url})`)
            
            console.log(`  Violations (${violations}):`)
            result.results.violations.forEach(violation => {
                console.log(`    - ${violation.id}: ${violation.description}`)
                console.log(`      Impact: ${violation.impact}`)
                console.log(`      Help: ${violation.helpUrl}`)
                console.log(`      Nodes: ${violation.nodes.length}`)
                violation.nodes.slice(0, 3).forEach(node => {
                    console.log(`        • ${node.target.join(', ')}`)
                    if (node.failureSummary) {
                        console.log(`          ${node.failureSummary}`)
                    }
                })
                if (violation.nodes.length > 3) {
                    console.log(`        ... and ${violation.nodes.length - 3} more`)
                }
                
                // Count by impact
                if (impactStats[violation.impact] !== undefined) {
                    impactStats[violation.impact]++
                }
            })
            totalViolations += violations
            console.log()
        } else {
            console.log(`✅ ${result.page.name}`)
        }
    })
    
    console.log('\n=== SUMMARY ===')
    console.log(`Total pages tested: ${totalPages}`)
    console.log(`Pages with violations: ${pagesWithViolations}`)
    console.log(`Pages without violations: ${totalPages - pagesWithViolations}`)
    console.log(`Total violations: ${totalViolations}`)
    
    if (totalViolations > 0) {
        console.log('\nViolations by impact:')
        if (impactStats.critical > 0) console.log(`  🔴 Critical: ${impactStats.critical}`)
        if (impactStats.serious > 0) console.log(`  🟠 Serious: ${impactStats.serious}`)
        if (impactStats.moderate > 0) console.log(`  🟡 Moderate: ${impactStats.moderate}`)
        if (impactStats.minor > 0) console.log(`  🔵 Minor: ${impactStats.minor}`)
    }
    
    if (totalViolations === 0) {
        console.log('\n🎉 All pages passed accessibility tests!')
    } else {
        console.log(`\n🚨 Found ${totalViolations} accessibility violations across ${pagesWithViolations} pages`)
    }
    
    return totalViolations
}

async function runAccessibilityTests() {
    try {
        console.log('Starting accessibility tests...')
        
        const pages = getAllPages()
        console.log(`Testing ${pages.length} pages...`)
        
        const results = await runBatchTests(pages, checkPageAccessibility, 3, 1000)
        
        const errorCount = analyzeResults(results)
        process.exit(errorCount > 0 ? 1 : 0)
        
    } catch (error) {
        console.error('Error running accessibility tests:', error.message)
        process.exit(1)
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runAccessibilityTests()
}

module.exports = { runAccessibilityTests, checkPageAccessibility, getAllPages }