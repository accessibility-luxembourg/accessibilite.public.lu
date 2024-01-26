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

## License
This software is (c) [Information and press service](https://sip.gouvernement.lu/en.html) of the luxembourgish government and licensed under the MIT license.