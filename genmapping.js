const fs = require('fs')


out = ''


function cleanNorm(e) {
    return e.replace(/\/.*/, "")
}

function slugify(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[\(\),]/g, '').replace(/«\s|\s»|\s:/g, '').replace(/[\s']/g, '-')
}

// slugify but for WCAG SC
function slugifySC(str) {
    str = slugify(str.replace(/^[0-9\.]+\s/, "").replace(/\s[\(\)A]+$/, ""))
    // fix typos from RGAA
    str = str.replace(/^bypass-block$/, "bypass-blocks").replace("audio-description-and-media-alternative-prerecorded", "audio-description-or-media-alternative-prerecorded")

    return str
}

function cleanWCAG(e) {
    wcagFull = e.split('/')[1].trim()
    wcag = wcagFull.split(' ')[0]
    
    name = wcagFull.replace(/.*?\s/, '')
    name = slugifySC(name)
    return '<a href="https://www.w3.org/TR/WCAG21/#'+name+'">'+wcag+'</a>'

}

function translateTheme(t) {
    mapping = {
        'Images':'Images', 
        'Cadres': 'Frames', 
        'Couleurs': "Colors", 
        'Multimédia': 'Multimedia', 
        "Tableaux": "Tables", 
        "Liens": "Links", 
        'Scripts': 'Scripts', 
        'Éléments obligatoires': 'Mandatory elements',
        "Structuration de l\'information": 'Information structure',
        'Présentation de l\'information': "Presentation of information", 
        "Formulaires":"Forms",
        "Navigation":"Navigation",
        "Consultation": "Consultation"
    }
    return mapping[t]
}

// generate URL for WCAG techniques
function tech2URL(str) {
    return str
                .replace(/^ARIA([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA$1")
                .replace(/^C([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/css/C$1")
                .replace(/^F([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/failures/F$1")
                .replace(/^G([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/general/G$1")
                .replace(/^H([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/html/H$1")
                .replace(/^SM([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/smil/SM$1")
                .replace(/^SCR([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR$1")
                .replace(/^SVR([0-9]+)/, "https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR$1")        
}



function techniqueLink(t) {
    url = tech2URL(t)
    return '<a href="'+url+'">'+t+'</a>'
}

const criteres = JSON.parse(fs.readFileSync('./content/rgaa4.1/criteres.json'))
out += '<table><tr><th>RGAA 4.1 Topic</th><th>RGAA 4.1 Criterion</th><th>EN 301 549 Criteria</th><th>WCAG 2.1 Success Criteria</th><th>WCAG 2.1 Techniques</th></tr>'
criteres.topics.forEach(t => {
    t.criteria.forEach(c => {
        critId = t.number + '.' + c.criterium.number

        out += '<tr>'
        out += '<td><a href="https://accessibilite.public.lu/fr/rgaa4.1/criteres.html#topic-'+t.number+'">'+translateTheme(t.topic)+'</a></td>'
        out += '<td><a href="https://accessibilite.public.lu/fr/rgaa4.1/criteres.html#crit-'+critId.replace('.', '-')+'">'+critId+'</a></td>'
        out += '<td>'
        out += c.criterium.references[0].wcag.map(cleanNorm).join(', ')
        
        out += '</td>'
        out += '<td>'
        out += c.criterium.references[0].wcag.map(cleanWCAG).join(', ')
        
        out += '</td>'
        out += '<td>'+c.criterium.references[1].techniques.map(techniqueLink).join(', ')+'</td>'
        out += '</tr>'
    })
})
out += '</table>'

fs.writeFileSync('./mapping.html', out)