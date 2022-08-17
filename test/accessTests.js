const axeRgaa = require('./aXeRGAA.json')
const AxeBuilder = require('axe-webdriverjs')
const axeFrStrings = require('axe-core/locales/fr.json')
const runTests = require('./testingCommon')
const {Builder, By, Key, until} = require('selenium-webdriver')


async function checkPage(page) {
  let driver = await new Builder().forBrowser('firefox').usingServer('http://localhost:4444').build()
  let res;
  try {
    await driver.get(page)
    // the twitter widget is an external content, thus out of scope
    await AxeBuilder(driver).configure({locale: axeFrStrings}).withRules(Object.keys(axeRgaa)).exclude('#twitter-widget-0').analyze(function(err, results) {
        if (err) {
            console.error(err)
        }
        res = results
    })

  } finally {
    await driver.quit()
  }
  return res;
}

function mapRgaa(results) {
    return results.map(e => { e.rgaa = axeRgaa[e.id]; return e} )
}

function analyse(page, result) {
    if ((result.violations.length + result.incomplete.length) > 0) {
        console.log('❌', page)
        console.log('violations:', mapRgaa(result.violations))
        console.log('needs review:', mapRgaa(result.incomplete))
    } else {
        console.log('✅', page)
    }
    return result.violations.length + result.incomplete.length
}


runTests(checkPage, analyse)
