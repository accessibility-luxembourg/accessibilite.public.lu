/* 
 * The RGAA source format is markdown since RGAA 4.1.1
 * this module reads the source files and transform it into JSON data which then can be used by our templates
 * Derived from https://github.com/DISIC/accessibilite.numerique.gouv.fr/tree/main/scripts 
 */

const fs = require('fs')
const MarkdownIt = require('markdown-it')
const yaml = require('yaml')
const cheerio = require('cheerio')

function parse(file, rgaaPath) {
    let meta = {}
	const data = fs.readFileSync(file, "utf-8")
    const content = mdCriteres((fm) => {meta = {... meta, ...fm}}, rgaaPath).render(data)

	return {'meta': meta, 'content': content}    
}

function parseTitle(file, rgaaPath) {
	return parse(file, rgaaPath).meta.title
}

function parseReferences(file, rgaaPath) {
    const data = parse(file, rgaaPath)
    let wcag = []
    if (Array.isArray(data.meta.WCAG)) {
        wcag = data.meta.WCAG.map((w) => {
            return `${w.successCriterion} ${w.title} (${w.level})`;
        });
    } 

    let norm = []
    if (data.meta.Norm !== undefined) {
        if (Array.isArray(data.meta.Norm)) {
            norm = data.meta.Norm.map((w) => {
                if (w.criterion === undefined) {
                    console.log(`EN criterion not found: ${w.criterion} ${file}`)
                }
                return `${w.criterion} ${w.title}`;
            });
        } else {
            norm = data.meta.Norm
        }
    } 

    result = {'refs': [{ wcag }, { techniques: data.meta.Techniques }, { norm }], 'notes': shiftHeadingHierarchy(data.content, 1) }
	return result
}

function parseTests(folderPath, rgaaPath) {
	const tests = {}
    const metho = {}

	const folders = fs.readdirSync(folderPath).filter(e => {return e.endsWith('.md')})
    //console.log(folders)
	folders.forEach((f, i) => {
        const data = parse(`${folderPath}/${i + 1}.md`, rgaaPath)
        if (data.meta.title === undefined) {
            console.error('Missing title in', `${folderPath}/${i + 1}.md`)
        }
        tests[i + 1] = data.meta.steps
            ? [data.meta.title, ...data.meta.steps]
            : [data.meta.title]
        metho[i + 1] = data.content.trim()
	});

	return {'tests':tests, 'metho': metho};
}

function mdCriteres(cbFM, rgaaPath) {
    return MarkdownIt({
        'html': true,
        'linkify': true,
        replaceLink: function (link, env) {
            if (!link.match(/^#test-|#crit-|https?:\/\/|\.\./)) {
                return `${rgaaPath}glossaire.html${link}`
            }
            return link
        }
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs')).use(require('markdown-it-front-matter'), function(fm) { cbFM(yaml.parse(fm))})
}

function mdGlossary(cbFM) {
    return MarkdownIt({
    'html': true,
    'linkify': false,
    replaceLink: function (link, env) {
            if (link.match(/^#test-|^#crit-/)) {
                return 'criteres.html'+link
            }
            return link
        }
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-attrs')).use(require('markdown-it-front-matter'), function(fm) { cbFM(yaml.parse(fm))})
}

function shiftHeadingHierarchy(html, shift) {
    const $ = cheerio.load(html)
    $('h1, h2, h3, h4, h5, h6').each((i,v) => {
        const newLevel = parseInt($(v).prop('tagName').substring(1)) + shift
        if (newLevel < 1 || newLevel > 6) {
            console.error(`shiftTitleHierarchy: inconsistent heading level: ${newLevel}`)
        }
        $(v).prop('tagName', `H${newLevel}`)
    })
    return $('body').html() 
}

function checkHeading(html) {
    if (html !== '') {
        const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        const $ = cheerio.load(html)
        const firstTag = $('body > *:first-child').prop('tagName').toLowerCase()
        if (! headings.includes(firstTag)) {
            console.error('Warning: note should start with a heading', firstTag)
        }
    }
}

function generateCriteria(path, rgaaPath = '') {
    // Init JSON data
    let jsonData = { wcag: { version: 2.1 }, topics: [] };
    const criteria = [];

    const CRITERIA_SOURCE = path+"/rgaa/criteres";

    const folders = fs.readdirSync(CRITERIA_SOURCE);

    // Order folders by topic + criterion number
    folders.sort((a, b) => {
        const [topicA, criteriumA] = a.split(".").map(Number);
        const [topicB, criteriumB] = b.split(".").map(Number);

        if (topicA == topicB) {
            return criteriumA - criteriumB;
        }

        return topicA - topicB;
    });

    // Clean unwanted files (`.DS_Store`...)
    const filteredFolders = folders.filter((f) => {
        return f.match(/\d\.\d/); // "X.X" where X are numbers
    });

    for (const folder of filteredFolders) {
        const testData = parseTests(`${CRITERIA_SOURCE}/${folder}/tests`, rgaaPath)
        //console.log(`${CRITERIA_SOURCE}/${folder}/annexe.md`)
        const refData = parseReferences(`${CRITERIA_SOURCE}/${folder}/annexe.md`, rgaaPath)
        //console.log('-------\n' + refData.notes)
        checkHeading(refData.notes)
        // Build all criterion properties
        const criterionObject = {
            criterium: {
                number: folder,
                title: parseTitle(`${CRITERIA_SOURCE}/${folder}/index.md`, rgaaPath),
                tests: testData.tests,
                metho: testData.metho,
                references: refData.refs,
                notes: refData.notes
            },
        };

        // Push to JSON data
        criteria.push(criterionObject);
    }

    // Organize criteria by topic
    const topics = Object.entries(require('../'+path+"/themes.json")).map((t) => {
        const topicNumber = t[0];
        return {
            topic: t[1].title,
            number: Number(topicNumber),
            criteria: criteria
                .filter((c) => {
                    return c.criterium.number.split(".")[0] === topicNumber;
                })
                .map((c) => {
                    return {
                        criterium: {
                            ...c.criterium,
                            number: Number(c.criterium.number.split(".")[1]),
                        },
                    };
                }),
        };
    });

    jsonData.topics = topics;

    return jsonData
}

function generateGlossary(path) {
    let index = ''
    let meta = {}
    function cbfm(fm) {
        meta = {... meta, ...fm}
    }

    const GLOSSARY_SOURCE = path+"/rgaa/glossaire";

      // Init JSON data
      let jsonData = {}
  
      // Loop over files
      const files = fs.readdirSync(GLOSSARY_SOURCE);
      for (const file of files) {
        if (file.endsWith(".md")) {
          // console.log(`${GLOSSARY_SOURCE}/${file}`)
          const data = fs.readFileSync(`${GLOSSARY_SOURCE}/${file}`, "utf-8");
          const content = mdGlossary(cbfm).render(data)

          const title = meta.title
          // cleaning title from HTML
          const $ = cheerio.load(title)
          const id = $.text()

          // Handle shortcodes
          const critRegex = /\{% crit (?<topic>\d{1,2}).(?<crit>\d{1,2}) %\}/g // {% crit 12.10 %}
          const testRegex = /\{% test '(?<topic>\d{1,2}).(?<crit>\d{1,2}).(?<test>\d{1,2})' %\}/g // {% test 2.10.3 %}
          const url = `criteres.html`
  
          const cleanedContent = content
            .replace(critRegex, `<a href="${url}#crit-$<topic>-$<crit>">critère $<topic>.$<crit></a>`)
            .replace(testRegex, `<a href="${url}#test-$<topic>-$<crit>-$<test>">test $<topic>.$<crit>.$<test></a>`)



          const firstLetter = id.trim()[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          if (firstLetter !== index) { 
              index = firstLetter
              jsonData[index] = []
          }
  
          // Push to JSON data
          jsonData[index].push({ id: id, title: title, body: cleanedContent })
        }
      }
  return jsonData
}

exports.generateCriteria = generateCriteria
exports.generateGlossary = generateGlossary