
const lib = require('./common.js')
const cheerio = require('cheerio')
const crypto = require('crypto')
const sharp = require('sharp')
const path = require('node:path')
const hmacPwd = 'a11ylu'
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const yaml = require('yaml')


function newsMarkdownIt(cbFM) {
    return MarkdownIt({
        'html': true,
        replaceLink: function (link, env) {
            let res3 = link.match(/(.*)\.md#(.*)/)
            if (res3) {
                return res3[1]+'.html#'+res3[2]
            }
            let res4 = link.match(/(.*)\.md/)
            if (res4) {
                return res4[1]+'.html'
            }
            return link
        }
    }).use(require('markdown-it-replace-link')).use(require('markdown-it-anchor'), {slugify: lib.slugify, prefix: '../../..'}).use(require('markdown-it-front-matter'), function(fm) { cbFM(yaml.parse(fm))}).use(require('markdown-it-attrs'));
}


function genNews(config, lang, outputPath, baseURL, __) {
    const news = fs.readdirSync('./content/'+lang+'/news')

    let articles = news.filter(e => { return e.match(/\.md$/)}).map(e => {
        const data = {}
        data.meta = {}
    
        // add date and name to the meta from the file name
        data.meta.filename = e.replace(/\.md$/, '')
        data.meta.date = e.substring(0,10)
        data.date = new Date(data.meta.date)
    
        // get the html from the file, and get the metadata from the frontmatter
        function cbfm(fm) {
            data.meta = {...data.meta, ...fm}
        }
    
        data.html = newsMarkdownIt(cbfm).render(fs.readFileSync('./content/'+lang+'/news/'+e).toString())
        $ = cheerio.load(data.html)
        data.meta.lang = $('body').children().first().attr('lang')
        data.meta.title_html = $('h1').first().html()
        data.meta.title = $('h1').first().text()
        data.meta.subtitle_html = $('hgroup > p').first().html()
        data.meta.subtitle = $('hgroup > p').first().text()
        data.meta.intro_html = $('.intro > p').first().html()
        if (data.meta.intro_html) {
            data.meta.intro_html = data.meta.intro_html.replaceAll( /<\/?a.*?>/g, "")
        }
        data.meta.intro = $('.intro > p').first().text()
        data.meta.img = $('img').first().attr('src')
        if (data.meta.img !== undefined) {
            data.meta.imgName = data.meta.img.replace(/^.*\/img\/(.+)$/, '$1')
        } 
    
        if (data.meta.teaser) {
            data.meta.img = '../../../../content/fr/news/img/'+data.meta.teaser
            data.meta.imgName = data.meta.teaser
        }
    
        if (data.meta.imgName !== undefined) {
            data.meta.imgTwitter = path.basename(data.meta.imgName.replace(/\.jpg/, '-twitter.jpg'))
            data.meta.imgLinkedin = path.basename(data.meta.imgName.replace(/\.jpg/, '-linkedin.jpg'))
    
            // resize images
            sharp('./content/fr/news/img/'+data.meta.imgName).resize(1200,630).jpeg({ mozjpeg: true, quality:50}).toFile(outputPath+'/'+lang+'/news/og/'+data.meta.imgTwitter, (err, info) => { if (err) { console.error(err)} })
            sharp('./content/fr/news/img/'+data.meta.imgName).resize(1200,627).jpeg({ mozjpeg: true, quality: 50}).toFile(outputPath+'/'+lang+'/news/og/'+data.meta.imgLinkedin, (err, info) => { if (err) { console.error(err)} })
        } else {
            console.error('Teaser image not found in', data.meta.filename)
        }
    
        // add the date to the html code
        $('hgroup').first().after('<p class="date">'+data.date.toLocaleDateString((data.meta.lang !== undefined)?data.meta.lang:lang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })+'</p>')
    
        // copy the script elements to the body
        $('head script').each((e, a) => {
            $('body').prepend(a)
        })
    
        data.html = $('body').html()
    
    
        // sanitize the html code for the atom feed
        $('h2').remove()
        $('p.date').remove()
        $('script, style').remove()
        // urls for images and links should be absolute, because RSS readers usually sandbox the html content
        $('img').each((i,e) => {
            $(e).attr('src', $(e).attr('src').replace('../../../../content', baseURL))
        })
        $('a').each((i,e) => {
            $(e).attr('href', new URL($(e).attr('href'), baseURL+'/'+lang+'/news/').href)
        })
    
        data.body = $('body').html()
    
        // create hash
        data.hash = crypto.createHmac('md5', hmacPwd).update(JSON.stringify(data)).digest('hex')
        return data
    }).sort((a, b) => { return (b.date - a.date)})
    
    if (lib.isProd()) {
        articles = articles.filter(e => {return e.date <= new Date()})
    }
    
    let newsTitle = config[lang].mainMenu.find(el => el.name == "news");

    lib.genFile(config, './src/tpl/articles_list.ejs', {data: articles}, newsTitle.title, lang, outputPath+'/'+lang+'/news/index.html', 'news/index', '../../../', __, true)
    
    const globalHash = crypto.createHmac('md5', hmacPwd).update(JSON.stringify(articles)).digest('hex')
    
    lib.genRawFile('./src/tpl/atom_feed.ejs', {data: articles, lang: lang, __: __, date: (articles[0] !== undefined)?articles[0].date.toISOString():new Date().toISOString(), hash: globalHash }, outputPath+'/'+lang+'/news/feed.xml')
    
    articles.forEach((e, i, ar) => {
        lib.genFile(config, './src/tpl/article.ejs', {data: e.html, meta: e.meta, prefix: "../../../", previous: ar[i+1], next: ar[i-1]}, e.meta.title, lang, outputPath+'/'+lang+'/news/'+e.meta.filename+'.html', e.meta.filename, '../../../', __, false, '', true, e.meta.subtitle, e.meta.imgTwitter, e.meta.imgLinkedin, true)
    })
    return articles
}

module.exports = {genNews}