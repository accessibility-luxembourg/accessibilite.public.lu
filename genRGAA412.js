/* 
 * The RGAA source format is markdown since RGAA 4.1.1
 * this module reads the source files and transform it into JSON data which then can be used by our templates
 * Derived from https://github.com/DISIC/accessibilite.numerique.gouv.fr/tree/main/scripts 
 */

const fs = require('fs')
const MarkdownIt = require('markdown-it')
const yaml = require('yaml')
const cheerio = require('cheerio')

const themes = require("./content/rgaa4.1.2/themes.json");
const CRITERIA_SOURCE = "./content/rgaa4.1.2/rgaa/criteres";
const GLOSSARY_SOURCE = "./content/rgaa4.1.2/rgaa/glossaire";

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

	const wcag = data.meta.WCAG.map((w) => {
		return `${w.successCriterion} ${w.title} (${w.level})`;
	});

	return {'refs': [{ wcag }, { techniques: data.meta.Techniques }], 'notes': shiftHeadingHierarchy(data.content, 1) }
}

function parseTests(folderPath, rgaaPath) {
	const tests = {}
    const metho = {}

	const folders = fs.readdirSync(folderPath)
	folders.forEach((f, i) => {
		if (f.endsWith(".md")) {
            const data = parse(`${folderPath}/${i + 1}.md`, rgaaPath)

			tests[i + 1] = data.meta.steps
				? [data.meta.title, ...data.meta.steps]
				: [data.meta.title]
            metho[i + 1] = data.content.trim()
		}
	});

	return {'tests':tests, 'metho': metho};
}

function mdCriteres(cbFM, rgaaPath) {
    return MarkdownIt({
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

function generateCriteria(rgaaPath = '') {
    // Init JSON data
    let jsonData = { wcag: { version: 2.1 }, topics: [] };
    const criteria = [];

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
        const refData = parseReferences(`${CRITERIA_SOURCE}/${folder}/annexe.md`, rgaaPath)

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
    const topics = Object.entries(themes).map((t) => {
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

function generateGlossary() {
    let index = ''
    let meta = {}
    function cbfm(fm) {
        meta = {... meta, ...fm}
    }

      // Init JSON data
      let jsonData = {}
  
      // Loop over files
      const files = fs.readdirSync(GLOSSARY_SOURCE);
      for (const file of files) {
        if (file.endsWith(".md")) {
          const data = fs.readFileSync(`${GLOSSARY_SOURCE}/${file}`, "utf-8");
          const content = mdGlossary(cbfm).render(data)
          const title = meta.title

          const firstLetter = title.trim()[0]
          if (firstLetter !== index) { 
              index = firstLetter
              jsonData[index] = []
          }
  
          // Push to JSON data
          jsonData[index].push({ title: title, body: content })
        }
      }
  return jsonData
}

exports.generateCriteria = generateCriteria
exports.generateGlossary = generateGlossary