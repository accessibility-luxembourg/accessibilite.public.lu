const config = require('../conf.json')
const urlBase = 'http://127.0.0.1:8080/fr/'

function getPages() {
    let pages = []
    if (process.argv[2] !== undefined) {
        console.log('Checking '+ process.argv[2]+ '...')
        pages.push(process.argv[2])
    } else {
        const level1 = config.mainMenu.concat(config.footer).concat(config.hidden)
        const level2 = config.mainMenu.filter(e => (e.children !== undefined)).flatMap(e => e.children)
        pages = level1.concat(level2).filter(e => e.children === undefined).filter(e => e.name !== undefined).map(e => urlBase + e.name + '.html')
        console.log('Checking all pages...')
    }
    return pages
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