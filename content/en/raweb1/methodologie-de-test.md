---
title: Test methodology
layout:layouts/base.njk
description: Test methodology documenting the steps to verify whether a RAWeb criterion is compliant or not
eleventyNavigation:
  title: Resources
  parent:resources
  order: 3
---

This document was established as part of the resources supporting the handling of version 1 of the web accessibility evaluation framework (RAWeb).

It is intended for anyone interested in checking the conformity of web content with RAWeb. This is a testing methodology documenting the steps to verify whether a RAWeb criterion is compliant or not. This methodology is therefore to be used in addition to the RAWeb technical framework and cannot be used alone. It therefore does not exempt you from an in-depth reading of the technical reference system, nor from training in RAWeb.

For each of the tests of a criterion corresponds a test procedure. The implementation of this procedure may sometimes require the use of specific tools, otherwise a browser is sufficient to carry out the majority of the tests.
A list of tools is also offered to help carry out the tests. They were selected both because they are frequently used by experts in the field and because they facilitate the search for certain results.

<div class="fr-callout"><p class="fr-text--lg">
The test methodology is now available at the level of each test on the <a href="criteres.html">criteria and tests</a> page.</p>
</div>

### Tools

The most useful tool remains the code inspector that each browser offers. It makes it easy to find the elements and attributes required for review by an accessibility test. Now, development tools also offer features allowing access to the properties of the accessibility tree exposed by the browser. However, this information does not replace the need to seek technical assistance when a criterion or test requires it.

The technical aids listed in the selected test environment constitute a second set of essential tools (see the [Test environment](environment.html/#content) section). They are, in fact, required to ensure correct restitution of accessible content (alternatives to images, link titles, table titles, etc.) in particular in the case where examination of the code alone would not be enough.

Other tools are available to help search for content items. They often appear as browser extensions and allow you to explore one or more aspects of an accessibility test.

The following toolbars are browser extensions that will make it easier to visually locate certain elements in a document:

- [Web Developer Toolbar for Firefox](https://addons.mozilla.org/fr/firefox/addon/web-developer/): toolbar for developers that can help visually find certain elements in a document for control its accessibility;
- [Web Developer Toolbar for Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=fr): the same toolbar as before, for Chrome.

Beyond the simple toolbar, other tools provide a complete analysis of the document by visually flagging accessibility errors on the page or, conversely, elements that are beneficial to it. Filters often allow only certain of these aspects to be displayed. This is what Wave offers, a solution available both online (http://wave.webaim.org) and as a browser extension (https://wave.webaim.org/extension/).

Although it is no longer required to check the validity of the source code, it can be useful, for purposes of searching for anomalies, to use the HTML validator. Validating the source code of an HTML document uses the W3C online validator (https://validator.w3.org/nu/). Note that to validate the source code generated by the browser, you must use the "Text input" option from the selection list entitled "Check by" and copy the available HTML source into the multiline input area which is then offered. from the browser's Code Inspector.
Browser extensions are also available, but you must be careful, because the validation algorithms of these extensions are not necessarily up to date with the W3C validator and the results obtained may therefore be different.

Checking color contrasts benefits from different tools:

- [WCAG Contrast checker for Firefox](https://addons.mozilla.org/fr/firefox/addon/wcag-contrast-checker/): Firefox extension which allows automatic control of color contrasts of texts in a document ;
- [WCAG Contrast checker for Chrome](https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf): same extension as the previous one for Chrome;
- [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/): Windows or Mac application that allows you to control color contrasts.

Checking the document tree and heading hierarchy has a very useful extension:

- [HeadingsMap for Firefox](https://addons.mozilla.org/fr/firefox/addon/headingsmap/): Firefox extension which allows you to give an overview of the document plan and its tree structure;
- [HeadingsMap for Chrome](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi): same extension as the previous one for Chrome.

The analysis of office files can be carried out using different tools depending on the file format:

- [PAC (PDF Accessibility Checker) 2024 for Windows](https://pac.pdf-accessibility.org/en): software that allows you to check certain accessibility points of PDF documents;
- Recent versions of Microsoft office tools offer built-in accessibility validation functionality (see the article [Make your Word documents accessible to people with disabilities](https://support.microsoft.com/en -fr/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d) and associated articles);
- [Ace by DAISY App](https://inclusivepublishing.org/toolbox/ace-by-daisy-app/) is a utility to check the accessibility of an EPUB file.

Finally, an old but still useful software for evaluating the potential of certain web content to cause epileptic seizures: [PEAT (Photosensitive Epilepsy Analysis Tool) for Windows](https://trace.umd.edu/peat).