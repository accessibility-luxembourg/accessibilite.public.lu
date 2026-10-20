/* 
 * The RGAA source format is markdown since RGAA 4.1.1
 * this module reads the source files and transform it into JSON data which then can be used by our templates
 * Derived from https://github.com/DISIC/accessibilite.numerique.gouv.fr/tree/main/scripts 
 */

const fs = require('fs')
const MarkdownIt = require('markdown-it')
const yaml = require('yaml')
const cheerio = require('cheerio')
const en301549 = require('en301549-links')

const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})

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
    if ('EN301549-V4' in data.meta || 'EN301549-V4' in data.meta) { // new references format
/*    example
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
RAWEB1.1: 1.2
Techniques:
  - C9
  - F38
  - F39
  - G196
  - H67
ACT: 1
*/

        let standard = ''
        if (data.meta['EN301549-V4'] !== undefined) {
            standard += data.meta['EN301549-V4']
        } else if (data.meta['EN301549-v4'] !== undefined) {
            standard += data.meta['EN301549-v4']
        } else {
            standard += data.meta['Norm']
        }
        result = {'refs': { wcag: data.meta.WCAG, techniques: data.meta.Techniques, standard: standard, previous: ''+data.meta['RAWEB1.1'], act: ''+data.meta['ACT']}, 'notes': shiftHeadingHierarchy(data.content, 1) }
    } else { // old references format
/* example 
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - C9
  - F38
  - F39
  - G196
  - H67
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
*/

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
    }
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
        //metho[i + 1] = data.content.substring(0, data.content.lastIndexOf('<hr>')).trim()
        metho[i + 1] = data.content.trim()
	});

	return {'tests':tests, 'metho': metho};
}

function mdCriteres(cbFM, rgaaPath) {
    return MarkdownIt({
        'html': true,
        'linkify': true,
        replaceLink: function (link, env) {
            if (!link.match(/^#test-\d|#crit-|https?:\/\/|\.\.|\./)) {
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
            if (link.match(/^#test-\d|^#crit-/)) {
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

function generateCriteria(path, rgaaPath = '', sortBy = 'raweb') {
    // Init JSON data
    let jsonData = { topics: [] };
    const criteria = [];

    const CRITERIA_SOURCE = path + "/rgaa/criteres";

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

    if (sortBy == 'raweb') {
        // Organize criteria by RAWeb topic
        const topics = Object.entries(require('../' + path + "/themes.json")).map((t) => {
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
    } else if (sortBy == 'EN') {
        // Organize criteria by topic from EN301549
        let enTopics = criteria.map(c => {
            if (c.criterium.references.standard !== undefined) {
                return parseInt(c.criterium.references.standard.split('.')[0]) // get the first number of the criterion id
            } else {
                console.log('EN301549 reference not found in '+c.criterium.number)
                return 1
            }
        }) 
        enTopics = [...new Set(enTopics)] // remove duplicates
        enTopics = enTopics.sort((a,b) =>  a-b).map(t => ''+t) // convert to string
        let topics = {}
        enTopics.forEach(t =>  {topics[t] = en301549.getTitle('4.1.1', t)})

        topics = Object.entries(topics).map((t) => {
            const topicNumber = t[0];
            return {
                topic: t[1].replace(/^\d{1,2} /, ''), // we remove the topic number from the title
                number: Number(topicNumber),
                criteria: criteria
                    .filter((c) => {
                        if (c.criterium.references.standard !== undefined) {
                            return c.criterium.references.standard.split('.')[0] === topicNumber
                        } else {
                            return 0
                        }
                    }).sort((a, b) => a.criterium.references.standard.localeCompare(
                        b.criterium.references.standard,
                        undefined,
                        { numeric: true }
                    ))
                    .map((c) => {
                        return {
                            criterium: {
                                ...c.criterium,
                                number: c.criterium.references.standard.replace(/^\d{1,2}./, ''),
                            },
                        };
                    }),
            };
        });
        jsonData.topics = topics;        

    } else {
        console.error('unknown sort option')
    }

    return jsonData
}

function generateGlossary(path, criterion_label) {
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
          const id = $.text().trim().normalize("NFD").replace(/[\u0300-\u036f“”"]/g, "")

          // Handle shortcodes
          const critRegex = /\{% crit (?<topic>\d{1,2}).(?<crit>\d{1,2}) %\}/g // {% crit 12.10 %}
          const testRegex = /\{% test '(?<topic>\d{1,2}).(?<crit>\d{1,2}).(?<test>\d{1,2})' %\}/g // {% test 2.10.3 %}
          const url = `criteres.html`
  
          const cleanedContent = content
            .replace(critRegex, `<a href="${url}#crit-$<topic>-$<crit>">${criterion_label} $<topic>.$<crit></a>`)
            .replace(testRegex, `<a href="${url}#test-$<topic>-$<crit>-$<test>">test $<topic>.$<crit>.$<test></a>`)

        
          index = id[0]

          // Push to JSON data
          //console.log(index, id, title)
          if (jsonData[index] == undefined) {
            jsonData[index] = []
          }
          jsonData[index].push({ id: id, title: title, body: cleanedContent })
        }
      }

  jsonData = sortObject(jsonData)
  Object.keys(jsonData).forEach(e => {
    jsonData[e] = jsonData[e].sort((a,b) => { return a.id.localeCompare(b.id)})
  })
  return jsonData
}

exports.generateCriteria = generateCriteria
exports.generateGlossary = generateGlossary