# accessibilite.public.lu

This repository contains the code enabling to generate all the pages for [accessibilite.public.lu](https://accessibilite.public.lu)

## Project structure

- ./content: all content files in markdown
- ./dist: where the website files will be once the generation is done
- ./src: sources to generate the website
- ./src/files: downloadable files available on the site
- ./src/rapports: accessibility reports in html format
- ./test: link checker and accessiblity tests based on Axe

The markdown files from RGAA and RAAM are copied from there respective repositories, and so do the files from the accessibility statement generator:
- [RAAM](https://github.com/accessibility-luxembourg/ReferentielAccessibiliteMobile)
- [RGAA](https://github.com/accessibility-luxembourg/RGAA)
- [RAWeb](https://github.com/accessibility-luxembourg/ReferentielAccessibiliteWeb)
- [RAPDF](https://github.com/accessibility-luxembourg/ReferentielAccessibilitePDF)
- [accessibility statement generator](https://github.com/accessibility-luxembourg/a11yStatementGen)

In a future version, it could be integrated properly with git submodules or npm packages, ...

## Install

```
npm i
```

## Build

```
npm run build
```

Once the website is generated, you can see the result with `npm run serve`. For development purposes, you can use `npm run watch` to have the website generated in the background everytime a file changes and see the result in your browser.

## Essential Commands

### Build and Development
- `npm run build` - Main build command that generates the entire website
- `npm run watch` - Development mode with auto-rebuild and local server
- `npm run serve` - Serve built site on localhost:8080

### Testing
- `npm test` - Run all tests (links, accessibility, resources, visual regression)
- `npm run test:links` - Check for broken links with validation
- `npm run test:access` - Run accessibility tests using Axe
- `npm run test:resources` - Check resource loading and JavaScript errors
- `npm run test:visual` - Visual regression testing with Puppeteer
- `npm run visual:update` - Update visual regression baselines

### Testing variants (if the webserver is already started)
- `npm run checklinks` - Links validation without server
- `npm run checkaccess` - Accessibility tests without server
- `npm run checkresources` - Resource loading tests without server
- `npm run visual` - Visual tests without server


## Configuration

The configuration of the CMS is available in the scripts/config_en.js and scripts/config_fr.js. 
These files mainly contain a json structure, but as some parts are generated from the parsing of other files.
The config_*.js files can be used to setup the navigation of the website.

A page is represented by an object with the following attributes: 

- "title": the title of the page, will be used in the <title> element of the page and in the first heading
- "menu": a short label which will be shown in the navigation
- "name": the name of the page, will be used in the url, can contain subfolders, ex: rgaa4.1.2/criteres 
- "md": optional, path to a markdown file, which will be transformed to html. If not present, the content is coming from somewhere else (ex: the page with the list of articles, the site outline, etc.)
- "children": optional, can contain an array of other pages. If this attribute is present, the page will be virtual and have no content.
- "genSummary": optional, should we generate an outline of the page, based on the headings structure? The value associated to this attribute is the type of list needed for the outline : ol or ul
- "summaryTitle": the heading which will be given to the outline in the page.
- "prefix": path prefix (FIXME: remove this attribute and compute it automatically)

### Criteria and glossaries
For some specific pages like criteria and glossaries, some extra attributes are needed:
- "type": either "criteres" for criterias or "glossaire" for glossary
- "template": name of the template file to be used
- "data": data source to be used to generate the file






## License
This software is (c) [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.