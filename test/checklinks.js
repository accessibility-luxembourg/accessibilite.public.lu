const nlc = require('node-linkchecker')
const runTests = require('./testingCommon')
const util = require('util')

function analyse(page, result) {
    result = JSON.parse(JSON.stringify(result))
    result.brokenLinks = result.brokenLinks.filter(e => (e.status === 404)).map(e => e.link)
    result.brokenFragments = result.brokenFragments.map(e => e.link)
    if (result.brokenLinks.length > 0 || result.brokenFragments.length > 0) {
        console.log('❌', page, result)
    } else {
        console.log('✅', page)
    }
    return result.brokenLinks.length + result.brokenFragments.length
}

runTests(nlc.check, analyse)


