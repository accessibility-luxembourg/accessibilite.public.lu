### Introduction {class="no-summary"}

This repository is proposed to verify that PDF documents from office editing software have basic accessibility. The objective is to allow people with disabilities to access and understand content as well as to use navigation features.
It does not take into account certain types of complex content or specific structures in PDF format. Indeed, these can only be edited with the Acrobat Pro working environment or similar software.

Among these types of content, we can cite:
- headers and footers,
- the citations,
- footnotes,
- references to additional sources such as bibliographic references.

Among the specific structures, we can cite:
- the language indication of the document,
- the language indications of text passage,
- indications of change of reading direction,
- declarations of specific decorative elements in PDF format,
- the association of a tooltip with the links.

Furthermore, form-type content is addressed in an additional theme and is reduced to the essential elements.

The evaluation and adaptation of these elements require the intervention of specialists and the use of technical software (screen readers, layout software compatible with the PDF format or the Acrobat Pro working environment).

The same applies when the PDF document comes from specialized software, in particular DTP (Computer Aided Publication) software or a specialized publishing chain, in this case you must refer directly to the standard [EN 301 549 v .3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) for Section 10 Non-web documents.

### Non-compliant content type {class="no-summary"}

The following types of content will be considered non-compliant because they may not be used satisfactorily by all people with disabilities:
- multimedia, video or audio content;
- sudden changes in brightness or flash effects (multimedia content or animated graphic elements).

Their presence renders the entire document non-compliant with accessibility and requires the provision of an alternative version of the document in which all the information conveyed by this content is present in textual form.

### Non-compliant document type {class="no-summary"}
Certain types of documents may not be used satisfactorily by all people with disabilities, these are:
- [untagged documents](glossaire.md#non-tagged-documents),
- [non-interactive forms](glossary.md#non-interactive-form).
In these cases, there is no point in auditing the documents which will have to be subject to a complete overhaul or the provision of a relevant alternative.

### Warning {class="no-summary"}

For each criterion of the framework, an evaluation methodology is proposed. However, it has no normative value. It is provided only as an aid to getting started with the framework and gives an example of a possible evaluation method. There may be others. Furthermore, the content of this methodology as well as its steps cannot constitute an enforceable basis in the event of a dispute. Finally, it is possible that errors are not detected based on this methodology alone.

Only the content of the criterion and the tests has normative value.

### [Theme 1](#topic-1): Graphic elements {id="topic-1"}

#### [Criterion 1.1](#crit-1-1) [A] Is each [decoration](glossary.md#de-decoration) image correctly ignored by assistive technologies? {id="crit-1-1"}
- **[Test 1.1.1](#test-1-1-1)** Does each [decoration](glossary.md#de-decoration) image satisfy one of these conditions?{id= "test-1-1-1"}
    - The image is devoid of alternatives.
    - The image is [absent from the restitution](glossaire.md#absente-de-la-restitution-image-de-decoration).

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the decoration images in the original document.
4. Check in PAC that each of them is absent from the rendered content (absence of the FIGURE element).
5. If this is not the case, check that each of them has no alternative (empty ALT element).
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.2](#crit-1-2) [A] Does each image [carrying information](glossary.md#carrying-information) have a [textual alternative](glossary .md#alternative-textual)? {id="crit-1-2"}
- **[Test 1.2.1](#test-1-2-1)** Does each image [information carrier](glossary.md#information-carrier) satisfy one of these conditions? ? {id="test-1-2-1"}
    - The image has a text alternative.
    - A link adjacent to the image provides access to a textual alternative.

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the images carrying information in the original document.
4. Check in PAC that each of them (FIGURE element) is accompanied by an alternative (ALT element) provided.
5. If this is not the case, check that the image is immediately followed by a link providing access to a textual alternative (LINK element).
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.3](#crit-1-3) [A] For each image [information carrier](glossaire.md#information-carrier) having a [textual alternative](glossaire.md# textual-alternative), is this alternative relevant? {id="crit-1-3"}
- **[Test 1.3.1](#test-1-3-1)** For each image [information carrier](glossary.md#information-carrier) having a [textual alternative](glossary. md#alternative-textual), is this alternative relevant? {id="test-1-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the images carrying information in the original document.
4. Check in PAC that the alternatives (ALT element or content linked by an adjacent link) contain all the information necessary to understand the content with which the image is associated.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.4](#crit-1-4) [A] Does each [information carrier](glossary.md#information-carrier) image have, if necessary, a [description detailed](glossary.md#detailed-description)? {id="crit-1-4"}
- **[Test 1.4.1](#test-1-4-1)** Each image [information carrier](glossary.md#information-carrier) which requires a [detailed description](glossary. md#detail-description) does it satisfy one of these conditions?{id="test-1-4-1"}
    - The [detailed description](glossaire.md#description-detaillee) is adjacent to the image.
    - A link adjacent to the image provides access to the [detailed description](glossaire.md#description-detaillee).

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify information-bearing images that require a detailed description in the original document.
4. Check in PAC that each of them (FIGURE element) is accompanied by adjacent text serving as a detailed description.
5. If this is not the case, check that each of them is accompanied by an adjacent link allowing access to the detailed description.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73)&nbsp;;
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.5](#crit-1-5) [A] For each image [information carrier](glossaire.md#information-bearer) having a [detailed description](glossaire.md# detailed-description), is this description relevant? {id="crit-1-5"}
- **[Test 1.5.1](#test-1-5-1)** Each image [information carrier](glossaire.md#information-carrier) having a [detailed description](glossaire.md #detail-description) does it satisfy one of these conditions?{id="test-1-5-1"}
    - The [detailed description](glossaire.md#description-detaillee) adjacent to the image is relevant.
    - The [detailed description](glossaire.md#description-detaillee) which can be consulted using an adjacent link is relevant.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify information-bearing images that are associated with a detailed description.
4. Check that the detailed description adjacent or viewable via an adjacent link includes all the information present in the image.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73)&nbsp;;
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.6](#crit-1-6) [A] Is each [caption](glossary.md#caption) image, if necessary, correctly linked to the corresponding image? {id="crit-1-6"}
- **[Test 1.6.1](#test-1-6-1)** Does each [caption](glossary.md#caption) associated with an image verify these conditions?{id="test -1-6-1"}
    - The [caption](glossary.md#caption) is adjacent to the image.
    - The image alternative contains an [explicit reference](glossaire.md#reference-explicite-a-une-legend-d-image-or-a-une-forme-complexe) to the caption.

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate images associated with captions in the original document.
4. Check in PAC that the caption is adjacent to the image (there is no content between the caption and the image).
5. Verify that the alternative image contains an explicit reference to the caption.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 1.7](#crit-1-7) [AA] Each [text image](glossary.md#text-image-or-text-in-image) [carrying information](glossary. md#porteuse-d-information), in the absence of an [alternative textual version](glossary.md#alternative-textual-version), must be replaced by styled text. Is this rule respected (except in special cases)? {id="crit-1-7"}
- **[Test 1.7.1](#test-1-7-1)** Each [text image](glossary.md#text-image-or-text-as-image) [carrying information]( glossary.md#porteuse-d-information), in the absence of an [alternative textual version](glossaire.md#alternative-textual-version), must be replaced by styled text. Is this rule respected (except in special cases)?{id="test-1-7-1"}

##### Special cases
In these situations, the criterion is not applicable:
- The text is part of a logo or brand name of an organization or company.
- The presentation of the text is considered essential to the information conveyed by the image, for example an image used to illustrate the graphic appearance of a font.

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
2. Identify the texts likely to be presented in image form in the original document.
3. Check in PAC that these texts are presented in image form (FIGURE element).
3. Check that the image is accompanied by an anchor (LINK element) allowing you to consult an alternative textual version.
4. If this is not the case, check that the image is accompanied by a link (LINK element) allowing you to consult an alternative textual version of the document in which the text image is replaced.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.5 Text as Image (AA)](https://www.w3.org/Translations/WCAG21-fr/#images-of-text):
    - [PDF7](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7)&nbsp;;
    - [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.5 Images of text.


### [Theme 2](#topic-2): Color {id="topic-2"}
#### [Criterion 2.1](#crit-2-1) [A] The information must not be [given only by color](glossary.md#information-given-only-by-color) . Is this rule respected? {id="crit-2-1"}
- **[Test 2.1.1](#test-2-1-1)** For each word or set of words whose coloring carries information, the information must not be [given only by color](glossary.md#information-given-only-by-color). Is this rule respected?{id="test-2-1-1"}
- **[Test 2.1.2](#test-2-1-2)** For each color indication given by a text, the information must not be [given only by color](glossary.md# information-given-only-by-color). Is this rule respected?{id="test-2-1-2"}
- **[Test 2.1.3](#test-2-1-3)** For each image conveying information, the information must not be [given only by color](glossaire.md#information-donnee -only-by-color). Is this rule respected?{id="test-2-1-3"}
- **[Test 2.1.4](#test-2-1-4)** For each formatting whose color conveys information, the information must not be [given only by the color] (glossary. md#information-given-only-by-color). Is this rule respected?{id="test-2-1-4"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
3. Identify the information given only, not the color.
4. For each of them (words or set of words, textual indication, information given by the color in the images), check that color is not the only way to retrieve the information. For example:
    - The word or set of words is accompanied by an icon with a relevant alternative.
    - Text indication refers to explicit text or an icon with a relevant alternative.
    - The indication given by the color in an image is accompanied by a visual indication (caption, symbol, etc.).
    - The indication given by formatting is accompanied by an icon with a relevant alternative.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color):
    - [G14](https://www.w3.org/WAI/WCAG21/Techniques/general/G14)&nbsp;;
    - [G182](https://www.w3.org/WAI/WCAG21/Techniques/general/G182)&nbsp;;
    - [G111](https://www.w3.org/WAI/WCAG21/Techniques/general/G111)&nbsp;;
    - [G138](https://www.w3.org/WAI/WCAG21/Techniques/general/G138).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.1 Use of color.


#### [Criterion 2.2](#crit-2-2) [AA] Is the contrast between the color of the text and the color of its background sufficiently high (except in special cases)? {id="crit-2-2"}
- **[Test 2.2.1](#test-2-2-1)** For [normal-size text](glossary.md#normal-size-text), the contrast ratio between the text and does its background satisfy one of these conditions (excluding special cases)?{id="test-2-2-1"}
    - The contrast ratio between the text and its background is 4.5:1, at least.
    - A [replacement mechanism](glossary.md#replacement-mechanism-contraste-reinforce) allows text to be displayed with a contrast ratio of at least 4.5:1.
- **[Test 2.2.2](#test-2-2-2)** For the [text in enlarged size](glossary.md#text-in-enlarged-size), the contrast ratio between the text and does its background satisfy one of these conditions (excluding special cases)?{id="test-2-2-2"}
    - The contrast ratio between the text and its background is 3:1, at least.
    - A [replacement mechanism](glossary.md#replacement-mechanism-contraste-reinforce) allows text to be displayed with a contrast ratio of 3:1, at least.

##### Special cases
In these situations, the criterion is not applicable.
- The text is part of a logo or brand name of an organization or company.
- The text is purely decorative.
- The text is part of an image conveying information, but the text itself does not provide any essential information.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and the Color Contrast Analyzer tool

1. Open the PDF file.
2. Check, with the Color Contrast Analyzer tool, that:
    - default body text and image text of equivalent size has a contrast ratio with the background color of at least 4.5:1;
    - text and image text of a significantly enlarged size have a contrast ratio with the background color of at least 3:1.
3. If this is not the case, check that there is a way to obtain a version of the document with sufficient contrasts.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum):
    - [G18](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html)&nbsp;;
    - [G145](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.3 Contrast (minimum).

#### [Criterion 2.3](#crit-2-3) [AA] Are the colors used in the graphic elements carrying information sufficiently contrasted (except in special cases)? {id="crit-2-3"}
- **[Test 2.3.1](#test-2-3-1)** The contrast ratio of each color necessary for understanding a graphic element with [adjacent colors](glossary.md#colors- adjacent), does it satisfy one of these conditions (except in special cases)?{id="test-2-3-1"}
    - The contrast ratio is 3:1, at least.
    - A [replacement mechanism](glossary.md#replacement-mechanism-contraste-reinforce) makes it possible to display graphic elements with sufficient contrast.
- **[Test 2.3.2](#test-2-3-2)** The contrast ratio of each color necessary for understanding a graphic element with the background color, check- one of these conditions (except in special cases)?{id="test-2-3-2"}
    - The contrast ratio is 3:1, at least.
    - A [replacement mechanism](glossary.md#replacement-mechanism-contraste-reinforce) makes it possible to display graphic elements with sufficient contrast.
- **[Test 2.3.3](#test-2-3-3)** The contrast ratio between the colors of a graphic element in its [different states](glossaire.md#differents-etats-d- does a-graphic-element) satisfy one of these conditions (except in special cases)?{id="test-2-3-3"}
    - The contrast ratio is 3:1, at least.
    - A [replacement mechanism](glossary.md#replacement-mechanism-contraste-reinforce) makes it possible to display graphic elements with sufficient contrast.

##### Special cases
In these situations, the criterion is not applicable:
- graphic element (or parts of graphic element) not carrying information or having an alternative, a detailed description, identical information visible on the page;
- graphic element (or parts of graphic element) forming part of a logo or brand name of an organization or company;
- graphic element (or parts of graphic element) whose presentation is essential to the information conveyed (flags, logos, photos of people or scenes, screenshots, medical diagrams, heat map, etc.).

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and the Color Contrast Analyzer tool

1. Open the PDF file.
3. Identify the graphic elements carrying information.
4. Check, with the Color Contrast Analyzer tool, that:
    - the contrast ratio between each of the information-carrying colors and its adjacent color(s) is 3:1, at least;
    - the contrast ratio between each of the information-carrying colors and the background color is at least 3:1;
    - the contrast ratio between each state of the same graphic element is 3:1, at least;
    - the contrast ratio of each state of the same graphic element and the background color is 3:1, at least.
5. If this is not the case, check that there is a way to obtain a version of the document with sufficient contrasts.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.11 Non-text contrast (AA)](https://www.w3.org/Translations/WCAG21-fr/#non-text-contrast):
    - [G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207.html)&nbsp;;
    - [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.11 Non-text contrast.

### [Theme 3](#topic-3): Tables {id="topic-3"}

#### [Criterion 3.1](#crit-3-1) [A] Does each [complex data table](glossary.md#complex-data-table) have an alternative? {id="crit-3-1"}
- **[Test 3.1.1](#test-3-1-1)** Does each [complex data table](glossary.md#complex-data-table) satisfy one of these conditions? ;? {id="test-3-1-1"}
    - An alternative is adjacent to the table;
    - An adjacent anchor provides access to an alternative;
    - A link provides access to a document containing an alternative.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify complex data tables.
4. Check that there is an anchor adjacent to the table that provides access to an alternative.
5. If not, check that there is an adjacent alternative.
5. If not, verify that there is an adjacent link to a document containing an alternative to the complex data table.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Logical sequential order (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.2 Meaningful sequence.

#### [Criterion 3.2](#crit-3-2) [A] For each [complex data table](glossary.md#complex-data-table) having an alternative, is this one relevant? {id="crit-3-2"}
- **[Test 3.2.1](#test-3-2-1)** For each [complex data table](glossary.md#complex-data-table) having an alternative, this one is Is it relevant? {id="test-3-2-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify complex data tables associated with an alternative.
4. Check that the alternative provides the same information as the complex data table.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Logical sequential order (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.2 Meaningful sequence.

#### [Criterion 3.3](#crit-3-3) [A] For each [data table](glossary.md#data-table) the [headers](glossary.md#en- head-table) are they correctly declared? {id="crit-3-3"}
- **[Test 3.3.1](#test-3-3-1)** For each [data table](glossary.md#data-table), each [header](glossary.md Does #table-header use a TH element? {id="test-3-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the data tables in the original document.
4. Check in PAC that each cell serving as header is correctly structured (TH element).
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF6](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6)&nbsp;;
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships.

#### [Criterion 3.4](#crit-3-4) [A] For each [presentation table](glossary.md#presentation-table), the [linearized content](glossary.md#content- linearize) remains understandable? {id="crit-3-4"}
- **[Test 3.4.1](#test-3-4-1)** For each [presentation table](glossary.md#presentation-table), the [linearized content](glossary.md# content-linearise) remains understandable? {id="test-3-4-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the formatting tables in the original document.
4. Check in PAC that when the cells are browsed in the order in which they are presented the contents remain understandable.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Logical sequential order (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.2 Meaningful sequence.

#### [Criterion 3.5](#crit-3-5) [A] Each [presentation table](glossary.md#presentation-table) must not use elements specific to [data tables] (glossary.md#data-table), is this rule respected? {id="crit-3-5"}
- **[Test 3.5.1](#test-3-3-1)** Each [presentation table](glossary.md#presentation-table) must not use elements specific to [presentation tables data](glossary.md#data-table), is this rule respected? {id="test-3-5-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the presentation tables in the original document.
4. Check in PAC that the table is free of TH elements.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships.

### [Theme 4](#topic-4): Links {id="topic-4"}

#### [Criterion 4.1](#crit-4-1) [A] Is each [link](glossary.md#link) explicit? {id="crit-4-1"}
- **[Test 4.1.1](#test-4-1-1)** Does each [link](glossary.md#link) satisfy one of these conditions? {id="test-4-1-1"}
    - The [title of the link](glossaire.md#title-of-the-link) alone is explicit;
    - The [link context](glossaire.md#link-context) makes it possible to explain the link.

- **[Test 4.1.2](#test-4-1-2)** Does each [identical link](glossary.md#identical-links) have the same functions and destination? {id="test-4-1-2"}

##### Evaluation methodology {class="disclosure method"}

###### Test 4.1.1 with Acrobat Reader and PAC 2021

1. Open the PDF file with PAC.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the links in the original document.
4. Check in PAC that the link has a single explicit title:
    - textual content of the LINK element;
    - textual content of the ALT element of the image (FIGURE element) contained in the link;
    - or the combination of the two.
5. If this is not the case, in PAC, check that the sentence in which the link is found makes it explicit.
6. If this is not the case, in PAC, check that the title immediately preceding the link (Hx element) makes it explicit.
7. If so, the test is validated.

###### Test 4.1.2 with Acrobat Reader and PAC 2021

1. Open the PDF file with Acrobat Reader.
2. Locate identical links.
3. Click on the links and verify that the associated resources are identical.
4. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.4 Link purpose (depending on context) (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context)&nbsp; :
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11)&nbsp;;
    - [PDF13](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13).
- EN 301 549 V3.2.1 (2021-03): 10.2.4.4 Link purpose (in context).

#### [Criterion 4.2](#crit-4-2) [A] Does each [link](glossary.md#link) have a title? {id="crit-4-2"}
- **[Test 4.2.1](#test-4-2-1)** Does each [link](glossary.md#link) image have a title? {id="test-4-2-1"}
- **[Test 4.2.2](#test-4-2-2)** Does each [link](glossary.md#link) using a complex form have a title? {id="test-4-2-2"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the image links in the original document.
4. Check in PAC that the image has an alternative provided (ALT element contained in the LINK element).
5. Identify links constructed with a complex form in the original document.
6. Check in PAC that the complex form has an alternative entered (ALT element).
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.4 Link purpose (depending on context) (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context)&nbsp; :
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11).
- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.2.4.4 Link purpose (in context), 10.1.1.1 Non-text content.

### [Theme 5](#topic-5): Structuring information {id="topic-5"}

#### [Criterion 5.1](#crit-5-1) [A] Is the information structured by the appropriate use of headings? {id="crit-5-1"}
- **[Test 5.1.1](#test-5-1-1)** Does each title use a [title style](glossary.md#title-style)? {id="test-5-1-1"}
- **[Test 5.1.2](#test-5-1-2)** When the [title styles](glossary.md#title-style) allow it, the [titling hierarchy](glossary .md#titration-hierarchy) is it consistent? {id="test-5-1-2"}
- **[Test 5.1.3](#test-5-1-3)** Is each title relevant? {id="test-5-1-3"}

##### Evaluation methodology {class="disclosure method"}

###### Test 5.1.1 with PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify passages of text that should be headings in the original document.
4. Check in PAC that the title is presented using an Hx element where x is the title level, for example H1.
5. If so, the test is validated.

###### Test 5.1.2 with Acrobat Reader

1. Open the PDF file and view the summary or display the list of titles (“bookmark” icon in the left side panel).
2. Check that the tree structure is coherent (the proposed tree structure represents the levels of titles).
3. If so, the test is validated.

###### Test 5.1.3 with Acrobat Reader

1. Open the PDF file and view the summary or display the list of titles (“bookmark” icon in the left side panel).
2. Verify that each title satisfactorily describes the content with which it is associated.
3. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF9](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9).
- WCAG 2.1: [2.4.6 Headings and Labels (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels):
    - [G130](https://www.w3.org/WAI/WCAG21/Techniques/general/G130.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships, 10.2.4.6 Headings and labels.

#### [Criterion 5.2](#crit-5-2) [A] Does each content presented in list form use a [list style](glossary.md#list-style)&nbsp; ? {id="crit-5-2"}
- **[Test 5.2.1](#test-5-1-1)** Does each content presented as an unordered list use a [list style](glossary.md#style-of- list) suitable? {id="test-5-2-1"}
- **[Test 5.2.2](#test-5-2-2)** When [list styles](glossary.md#list-style) allow it, each content presented in the form of an ordered list Does it use an appropriate [list style](glossary.md#list-style)? {id="test-5-2-2"}

##### Evaluation methodology {class="disclosure method"}

###### Test 5.2.1 with PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify the contents presented in the form of an unordered and ordered list in the original document.
4. Check in PAC that:
    - the list is presented using an L element;
    - each list item is presented by means of an LI element.
5. If so, the test is validated.

###### Test 5.2.2 with Acrobat Reader

1. Open the PDF file.
2. Check, for each list that must be ordered, that each list item is associated with an index.
3. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF21](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF21).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships.


#### [Criterion 5.3](#crit-5-3) [A] [Structural elements](glossaire.md#elements-de-structure) must not be used solely for presentation purposes, this rule is it respected? {id="crit-5-3"}
- **[Test 5.3.1](#test-5-3-1)** The [structural elements](glossaire.md#elements-de-structure) should not be used solely for presentation purposes, is this rule respected? {id="test-5-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Check that all content uses appropriate elements, particularly that there are no:
    - text blocks associated with an Hx element (for example a text block associated with an H1 element);
    - successive empty paragraphs;
    - blocks of text where each line is presented in the form of a paragraph (element P).
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships.

### [Theme 6](#topic-6): Presentation of information {id="topic-6"}

#### [Criterion 6.1](#crit-6-1) [A] Is the [order of restitution](glossary.md#order-of-restitution) of the contents consistent? {id="crit-6-1"}
- **[Test 6.1.1](#test-6-1-1)** Is the [order of restitution](glossary.md#order-of-restitution) of the contents consistent? {id="test-6-1-1"}
- **[Test 6.1.2](#test-6-1-2)** Is the [tab order](glossary.md#tab-order) of the contents consistent? {id="test-6-1-2"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and PAC 2021

###### Test 6.1.1 with Acrobat Reader and PAC 2021

1. Open the PDF file with PAC.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Locate the content that appears in PAC:
    - as a column in the original document;
    - in the form of independent text boxes, associated or not with a block of text in the original document.
4. Check in PAC that this content is presented in a coherent order to make the entire document understandable.
5. Check that there is no other content that appears in an inconsistent order.
6. If so, the test is validated.

Note: In most cases, the text box will be immediately followed in PAC by an empty FIGURE element. This FIGURE element can be ignored.

###### Test 6.1.2 with Acrobat Reader
1. Open the PDF file.
2. Use the tab key to navigate through the tabable elements.
3. Check that the tab path is consistent: the tabable elements are presented in a logical and coherent order.
4. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Logical sequential order (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence):
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- WCAG 2.1: [2.1.1 Keyboard (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- WCAG 2.1: [2.4.3 Focus order (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.2 Meaningful sequence, 10.2.1.1 Keyboard, 10.2.4.3 Focus order.

#### [Criterion 6.2](#crit-6-2) [A] The information must not be given solely by [shape, size or position](glossary.md#indication-given-only- by-shape-size-or-position). Is this rule respected? {id="crit-6-2"}
- **[Test 6.2.1](#test-6-2-1)** For each modification of the type or style of character, carrying information, the information must not be given only by the [shape, size or position](glossary.md#indication-given-only-by-shape-size-or-position). Is this rule respected?{id="test-6-2-1"}
- **[Test 6.2.2](#test-6-2-2)** For each visual indication given by means of positioning or the presence of a special character, carrying information, the information does not must not be given solely by [shape, size or position](glossary.md#indication-given-only-by-shape-size-or-position). Is this rule respected?{id="test-6-2-2"}


##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and PAC 2021

###### Test 6.2.1 with Acrobat Reader and PAC 2021

1. Open the file with Acrobat Reader.
2. Identify information in the text that uses a modification of the type or style of character (weight, italics, font);
3. Verify that information transmitted using a character type or style is associated with an equivalent textual indication.
4. If so, the test is validated.

###### Test 6.2.2 with Acrobat Reader and PAC 2021

1. Open the file with Acrobat Reader.
2. Identify information in the text that uses a visual indication by means of positioning or the presence of a special character (for example a mathematical or graphic symbol).
3. Check that the information transmitted by means of positioning or the presence of a special character is associated with an equivalent textual indication.
4. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.3 Sensory characteristics (A)](https://www.w3.org/Translations/WCAG21-fr/#sensory-characteristics):
    - [G96](https://www.w3.org/WAI/WCAG21/Techniques/general/G96.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.3 Sensory characteristics.

#### [Criterion 6.3](#crit-6-3) [A] Each link indicated only by color and whose [nature is not obvious](glossary.md#link-dont-la-nature- is-not-obvious) visible, in relation to the surrounding text? {id="crit-6-3"}
- **[Test 6.3.1](#test-6-3-1)** Each link indicated only by color and whose [nature is not obvious](glossaire.md#lien-dont-la- nature-is-not-obvious) have a contrast ratio greater than or equal to 3:1, compared to the surrounding text? {id="test-6-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and the Color Contrast Analyzer tool

1. Open the PDF file.
2. Identify links inserted in blocks of text (paragraph, title, list, etc.) and indicated only by color.
3. Verify with the Color Contrast Analyze tool that the contrast ratio between the link font color and the surrounding text font color is greater than or equal to 3:1.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color):
    - [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.1 Use of color.

### [Theme 7](#topic-7): Navigation {id="topic-7"}

#### [Criterion 7.1](#crit-7-1) [AA] Does the document have a [summary](glossary.md#summary) (excluding special cases)? {id="crit-7-1"}
- **[Test 7.1.1](#test-7-1-1)** Does the document have a [summary](glossary.md#summary) (except in special cases)? {id="test-7-1-1"}

##### Special cases
In these situations, the criterion is not applicable:
- The document only consists of a few pages.
- The content is not intended to be structured by a tree of titles.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Check that the content is preceded by a summary.
3. If this is not the case, check for the presence of a summary in the left side panel (“bookmark” icon) of Acrobat Reader.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.5 Multiple Access (AA)](https://www.w3.org/Translations/WCAG21-fr/#multiple-ways):
    - [PDF2](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2)&nbsp;;
    - [G64](https://www.w3.org/WAI/WCAG21/Techniques/general/G64.html).
- EN 301 549 V3.2.1 (2021-03): no linked criteria.

### [Theme 8](#topic-8): Mandatory elements {id="topic-8"}

#### [Criterion 8.1](#crit-8-1) [A] Does the document have a [document title](glossary.md#document-title)? {id="crit-8-1"}
- **[Test 8.1.1](#test-8-1-1)** Does the document have a [document title](glossary.md#document-title)? {id="test-8-1-1"}

##### Special cases
In the event that the document must be anonymized, using the functions to delete the document properties (author, modification date, etc.) of certain office editing software can also delete the title of the document without it being possible to inform it independently.

In this case, the criterion is not applicable.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Consult the properties panel (“File” menu then “Properties” option) and the “Description” tab.
3. Check that the “Title” field is informed.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.2 Page title (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled):
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03): 10.2.4.2 Document titled.

#### [Criterion 8.2](#crit-8-2) [A] Is the [document title](glossary.md#document-title) relevant (except in special cases)? {id="crit-8-2"}
- **[Test 8.2.1](#test-8-2-1)** Is the [document title](glossary.md#document-title) relevant (except in special cases)? {id="test-8-2-1"}

##### Special cases
In the event that the document must be anonymized, using the functions to delete the document properties (author, modification date, etc.) of certain office editing software can also delete the title of the document without it being possible to inform it independently.

In this case, the criterion is not applicable.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Consult the properties panel (“File” menu then “Properties” option) and the “Description” tab.
3. Check that the text entered in the “Title” field is relevant.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.2 Page title (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled):
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03): 10.2.4.2 Document titled.

### [Theme 9](#topic-9): Consultation {id="topic-9"}

#### [Criterion 9.1](#crit-9-1) [A] Is each [complex shape](glossary.md#complex-form) [decoration](glossary.md#de-decoration) correctly ignored by assistive technologies? {id="crit-9-1"}
- **[Test 9.1.1](#test-9-1-1)** Each [complex shape](glossary.md#complex-form) [decoration](glossary.md#de-decoration) checks- one of these conditions?{id="test-9-1-1"}
    - The complex form has no alternatives.
    - The complex form is [absent from the restitution](glossaire.md#absente-de-la-restitution-image-de-decoration).

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify complex forms of decoration in the original document.
4. Check in PAC that each of them is absent from the rendered content (absence of the FIGURE element).
5. If this is not the case, check that each of them has no alternative (empty ALT element).
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.2](#crit-9-2) [A] Each [complex form](glossary.md#complex-form) [information carrier](glossary.md#information-carrier) does it have a [textual alternative](glossary.md#textual-alternative)? {id="crit-9-2"}
- **[Test 9.2.1](#test-9-2-1)** Each [complex form](glossary.md#complex-form) [information carrier](glossary.md#carrier-d- information) does it satisfy one of these conditions? {id="test-9-2-1"}
    - The complex form has a textual alternative.
    - A link adjacent to the complex form provides access to a textual alternative.

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify the complex forms carrying information in the original document.
4. Check in PAC that each of them (FIGURE element) is accompanied by an alternative (ALT element) provided.
5. If this is not the case, check that the complex form is immediately followed by a link allowing access to a textual alternative (LINK element).
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.3](#crit-9-3) [A] For each [complex form](glossary.md#complex-form) [information carrier](glossary.md#information-carrier ) having a [textual alternative](glossary.md#textual-alternative), is this alternative relevant? {id="crit-9-3"}
- **[Test 9.3.1](#test-9-3-1)** For each [complex form](glossary.md#complex-form) [information carrier](glossary.md#carrier-d -information) having a [textual alternative](glossary.md#textual-alternative), is this alternative relevant? {id="test-9-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify the complex forms carrying information in the original document.
4. Check in PAC that the alternatives (ALT element or content linked by an adjacent link) contain all the information necessary to understand the content with which the complex form is associated.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.4](#crit-9-4) [A] Each [complex form](glossary.md#complex-form) [information carrier](glossary.md#information-carrier) does it have, if necessary, a [detailed description](glossaire.md#description-detaillee)? {id="crit-9-4"}
- **[Test 9.4.1](#test-9-4-1)** Each [complex form](glossary.md#complex-form) [information carrier](glossary.md#porteuse-d- information) which requires a [detailed description](glossaire.md#description-detaillee) does it satisfy one of these conditions?{id="test-9-4-1"}
    - The [detailed description](glossary.md#description-detaillee) is adjacent to the complex shape.
    - A link adjacent to the complex form provides access to the [detailed description](glossaire.md#detail-description).

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify complex forms carrying information which require a detailed description in the original document.
4. Check in PAC that each of them is accompanied by adjacent text serving as a detailed description.
5. If this is not the case, check that each of them is accompanied by an adjacent link allowing access to the detailed description.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.5](#crit-9-5) [A] For each [complex form](glossary.md#complex-form) [information carrier](glossary.md#information-carrier ) having a [detailed description](glossaire.md#description-detaillee), is this description relevant? {id="crit-9-5"}
- **[Test 9.5.1](#test-9-5-1)** Each [complex form](glossary.md#complex-form) [information carrier](glossary.md#porteuse-d- information) having a [detailed description](glossaire.md#detail-description) meets one of these conditions?{id="test-9-5-1"}
    - The [detailed description](glossaire.md#description-detaillee) adjacent to the complex shape is relevant.
    - The [detailed description](glossaire.md#description-detaillee) which can be consulted using an adjacent link is relevant.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify the complex forms carrying information which are associated with a detailed description in the original document.
4. Check that the detailed description adjacent or consultable via an adjacent link includes all the information present in the complex form.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.6](#crit-9-6) [A] Is each [legend](glossary.md#legend) of [complex form](glossary.md#complex-form) if necessary , correctly linked to the corresponding image? {id="crit-9-6"}
- **[Test 9.6.1](#test-9-6-1)** Each [legend](glossary.md#legend) associated with a [complex form](glossary.md#complex-form) verifies- Does it have these conditions?{id="test-9-6-1"}
    - The [legend](glossary.md#legend) is adjacent to the complex shape.
    - The complex form alternative contains an [explicit reference](glossary.md#reference-explicite-a-une-legende-d-image-or-a-une-forme-complexe) to the [legend](glossary .md#legend).

##### Evaluation methodology {class="disclosure method"}

###### With PAC 2021

1. Open the PDF file.
2. Open “Preview with screen reader”, the content of the file is exposed as it will be rendered, the element(s) used precede each content.
3. Identify complex shapes associated with captions in the original document.
4. Check in PAC that the legend is adjacent to the complex shape (there is no content between the legend and the complex shape).
5. Check that the complex form alternative contains an explicit reference to the legend.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.7](#crit-9-7) [A] Does each [cryptic content](glossary.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) have an alternative&nbsp; ? {id="crit-9-7"}
- **[Test 9.7.1](#test-9-7-1)** Does each [cryptic content](glossary.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) have a alternative?{id="test-9-7-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
3. Spot cryptic content.
4. Verify that a definition is available in the adjacent context (immediately before or after the cryptic content).
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.8](#crit-9-8) [A] For each [cryptic content](glossary.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) having an alternative, this alternative is Is it relevant? {id="crit-9-8"}
- **[Test 9.8.1](#test-9-8-1)** For each [cryptic content](glossary.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) having an alternative, this is the alternative relevant?{id="test-9-8-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
3. Identify cryptic content associated with an alternative.
4. Check that the proposed alternative provides the same information as the cryptic content.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): 10.1.1.1 Non-text content.

#### [Criterion 9.9](#crit-9-8) [A] Each [flashing or moving content](glossary.md#flashing-or-moving-content) must have an [activation duration ](glossary.md#activation-duration) less than or equal to 5 seconds. Is this rule respected? {id="crit-9-9"}
- **[Test 9.9.1](#test-9-9-1)** Each [flashing or moving content](glossary.md#flashing-or-moving-content) must have a [duration of 'activation](glossary.md#activation-duration) less than or equal to 5 seconds. Is this rule respected?{id="test-9-9-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
3. Identify flashing or moving content.
4. Check that the duration of flashing or movement is less than or equal to 5 seconds.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.2.2 Pause, stop, hide (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide):
    - [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4.html)&nbsp;;
    - [G11](https://www.w3.org/WAI/WCAG21/Techniques/general/G11.html)&nbsp;;
    - [G152](https://www.w3.org/WAI/WCAG21/Techniques/general/G152.html).
- EN 301 549 V3.2.1 (2021-03): 10.2.2.2 Pause, stop, hide.

### [Theme 10](#topic-10): Interactive form (complementary theme){id="topic-10"}
#### Introduction{class=no-summary}
This topic only concerns interactive forms completed with Acrobat Reader.
PDF forms can only be created using Acrobat Pro or software specialized in editing forms in PDF format.

Furthermore, the testing methodology requires the use of a screen reader.
These are the reasons why this theme was deliberately isolated in the last part of the framework.

The evaluation methodology is based on the [NVDA](https://www.nvda-fr.org/) screen reader which is freely installable and usable on a Windows computer.

The criteria in this theme aim to verify that form controls (input fields, etc.) are correctly rendered to ensure basic accessibility.

However, the use of a test by a person with a disability using their own assistive technology is preferred to verify:
- that the PDF form is perfectly usable,
- that all input fields can be filled in,
- and that the user has all the necessary information.

#### [Criterion 10.1](#crit-10-1) [A] Does each [form field](glossary.md#form-field) have a [label](glossary.md# label)? {id="crit-10-1"}
- **[Test 10.1.1](#test-10-1-1)** Does each [form field](glossary.md#form-field) check these conditions?{id= "test-10-1-1"}
    - the [label](glossary.md#etiquette) is visible;
    - the [label](glossary.md#etiquette) is correctly rendered by assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the tab key to activate each field and verify:
    - that the label is visible;
    - that a name is vocally restored.
3. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
 - WCAG 2.1: [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value):
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12).
- EN 301 549 V3.2.1 (2021-03): 10.1.3.1 Info and relationships, 10.4.1.2 Name, role, value.

#### [Criterion 10.2](#crit-10-2) [A] Each [label](glossary.md#label) associated with a [form field](glossary.md#form-field) is Is it relevant? {id="crit-10-2"}
- **[Test 10.2.1](#test-10-2-1)** Does each [label](glossary.md#etiquette) check these conditions?{id="test-10-2 -1"}
    - The title of the [label](glossary.md#etiquette) accessible to assistive technologies is relevant;
    - The visible title of the [label](glossaire.md#etiquette) is contained in the title accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the tab key to activate each field and verify that the name is voiced:
    - allows you to know the exact function of the associated field;
    - and contains at least the visible label.
3. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.6 Headings and Labels (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels):
    - [G131](https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html).
- WCAG 2.1: [2.5.3 Label in name (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name):
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)&nbsp;;
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03): 10.2.4.6 Headings and labels, 10.2.5.3 Label in name, 10.3.3.2 Labels or instructions.

#### [Criterion 10.3](#crit-10-3) [AA] Each [label](glossary.md#label) associated with a [form field](glossary.md#form-field) having is the same function and repeated several times in the same document [consistent](glossaire.md#etiquettes-coherentes)? {id="crit-10-3"}
- **[Test 10.3.1](#test-10-3-1)** Each [label](glossary.md#label) associated with a [form field](glossary.md#form-field ) having the same function and repeated several times in the same document is it [consistent](glossaire.md#etiquettes-coherentes)&nbsp;?{id="test-10-3-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. Locate the form fields with the same functions in the document.
3. With NVDA, use the tab key to activate each field and verify that the vocally rendered names are consistent with each other.
4. Check that the visible labels are also consistent with each other.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.2.4 Consistent Identification (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-identification):
    - [G197](https://www.w3.org/WAI/WCAG21/Techniques/general/G197.html).
- EN 301 549 V3.2.1 (2021-03): no linked criteria.

#### [Criterion 10.4](#crit-10-4) [A] Are each [label](glossaire.md#etiquette) and its associated field [adjoined](glossaire.md#accoles-etiquette-et -champ-accoles)? {id="crit-10-4"}
- **[Test 10.4.1](#test-10-4-1)** Are each [label](glossaire.md#etiquette) and its associated field [adjoined](glossaire.md#accoles-etiquette) -et-champ-accoles)?{id="test-10-4-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Check that the visible labels are attached to the fields with which they are associated.
3. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html);
    - [G162](https://www.w3.org/WAI/WCAG21/Techniques/general/G162).
- EN 301 549 V3.2.1 (2021-03): 10.3.3.2 Labels or instructions.

#### [Criterion 10.5](#crit-10-5) [A] Are the mandatory [form fields](glossary.md#form-field) correctly identified (except in special cases)? {id="crit-10-5"}
- **[Test 10.5.1](#test-10-5-1)** Does each mandatory [form field](glossary.md#form-field) check these conditions?{id ="test-10-5-1"}
    - The obligatory nature is visible and explicit.
    - The mandatory nature is accessible to assistive technologies.

##### Special cases
In these situations, the criterion is not applicable:

- The form only has one field.
- Optional fields are indicated as follows:
    - visible and explicit;
    - in the field label.

If all of the fields in a form are mandatory, the criterion remains applicable.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. Locate the fields indicated as mandatory in the document.
3. Check that the visual indication is explicit:
    - it is a textual indication (for example “obligatory”);
    - or it is a visual indication (for example “\*”) defined before the form by a textual mention (for example “Fields preceded by (\*) are mandatory”) .
4. With NVDA, use the tab key to activate each field and verify that the mandatory character of the entry is rendered vocally.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color):
    - [G205](https://www.w3.org/WAI/WCAG21/Techniques/general/G205.html).
- WCAG 2.1: [3.3.1 Error identification (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification):
    - [PDF5](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5).
- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03): 10.1.4.1 Use of color, 10.3.3.1 Error identification, 10.3.3.2 Labels or instructions.

#### [Criterion 10.6](#crit-10-6) [A] For each mandatory [form field](glossary.md#form-field), the expected data type and/or format is Is it available? {id="crit-10-6"}
- **[Test 10.6.1](#test-10-6-1)** Does each mandatory [form field](glossary.md#form-field) check these conditions?{id ="test-10-6-1"}
    - The data type and/or format is visible.
    - The type of data and/or format is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. Identify the mandatory fields in the document.
3. With NVDA, use the tab key to activate each field.
4. Fill in the fields with values likely to cause entry errors (an invalid format for an email address for example).
5. Use the tab key to exit fields or, if the form allows it, submit the form.
6. For each error message displayed, verify that the expected data type and/or format:
    - is indicated by means of visible text near the field or via an information window;
    - is vocally restored when the field is activated.
7. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.1 Error identification (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03): 10.3.3.1 Error identification, 10.3.3.2 Labels or instructions.

#### [Criterion 10.7](#crit-10-7) [A] Is each input error message correctly rendered? {id="crit-10-7"}
- **[Test 10.7.1](#test-10-7-1)** Does each input error message check these conditions?{id="test-10-7-1"}
    - The error message is visible.
    - The error message is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the tab key to activate each field.
3. Fill in the fields with values likely to cause entry errors (an invalid format for an email address for example).
4. Use the tab key to exit fields or, if the form allows it, submit the form.
5. For each error message displayed, check:
    - that it is indicated by means of visible text near the field;
    - that it is vocally restored when the field is activated.
6. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.1 Error identification (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03): 10.3.3.1 Error identification.

#### [Criterion 10.8](#crit-10-8) [AA] Is the [entry control](glossary.md#entry-control) accompanied, if necessary, by suggestions of types, formats expected data or values (excluding special cases)? {id="crit-10-8"}
- **[Test 10.8.1](#test-10-8-1)** Does the [input control](glossary.md#input-control) check these conditions?{id= "test-10-8-1"}
    - The entry check is accompanied, if necessary, by suggestions of the expected data types and formats.
    - The input check is accompanied, if necessary, by suggestions of expected values.

##### Special cases
In these situations, the criterion is not applicable:

- The error message is automatically generated by the PDF editing software.
- Customizing error messages requires the use of a scripting language.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the tab key to activate each field.
3. Fill in the fields with values likely to cause entry errors (an invalid format for an email address for example).
4. Use the tab key to exit fields or, if the form allows it, submit the form.
5. For each error message relating to a data type or format or an expected value, check:
    - that an example of real entry is present in the error message (for an e-mail address, check the mention of a real address on the model &ldquo;jean.dupont@sample.com&nbsp;&raquo;) &nbsp;;
    - that the actual input example is vocally rendered when the field is activated.
5. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.3 Error Suggestion (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-suggestion):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03): 10.3.3.3 Error suggestion.


#### [Criterion 10.9](#crit-10-9) [A] Does each form button have a label? {id="crit-10-9"}
- **[Test 10.9.1](#test-10-9-1)** Does each form button have a label?{id="test-10-9-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the Tab key to activate each button.
3. Check that a title is reproduced vocally.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}
- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- WCAG 2.1: [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value):
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html).
- EN 301 549 V3.2.1 (2021-03): 10.4.1.2 Name, role, value.

#### [Criterion 10.10](#crit-10-10) [A] Is the title of each form button relevant? {id="crit-10-10"}
- **[Test 10.10.1](#test-10-10-1)** Does each form button meet these conditions?{id="test-10-10-1"}
    - The title of the button accessible to assistive technologies is relevant.
    - The visible title of the button is contained in the title accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and enable NVDA.
2. With NVDA, use the Tab key to activate each button.
3. Check:
    - that the vocally rendered title is relevant;
    - that the visible title is contained in the vocally rendered title.
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.5.3 Label in name (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name):
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)&nbsp;;
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
 - WCAG 2.1: [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value):
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html)&nbsp;;
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12.html).
- EN 301 549 V3.2.1 (2021-03): 10.2.5.3 Label in name, 10.4.1.2 Name, role, value.

#### [Criterion 10.11](#crit-10-11) [AA] For each form which modifies or deletes data, or which transmits answers to a test or examination, or whose validation has financial consequences or legal, can the data entered be modified, updated or retrieved by the user? {id="crit-10-11"}
- **[Test 10.11.1](#test-10-11-1)** For each form that modifies or deletes data, or that transmits answers to a test or exam, or whose validation has financial or legal consequences, can the data entered be modified, updated or retrieved by the user?{id="test-10-11-1"}

##### Evaluation methodology {class="disclosure method"}

###### With Acrobat Reader

1. Open the PDF file.
2. Complete the form.
3. For each data of a financial nature (for example, an indication of income), legal (for example, a reference to an administrative act), personal (for example, a telephone number), for each form which transmits responses to a test or exam, verify that the user can:
    - modify or cancel the data and the actions performed on this data during entry (for example a field is not deactivated after a value is entered);
    - or confirm, explicitly, the sending of this data with a dedicated mechanism (for example by checking a confirmation box).
4. For each mechanism (for example a button) which allows you to modify or delete entered data, check that the user can:
    - cancel the changes made;
    - recover deleted data;
    - or confirm, explicitly, the modification or deletion of this data with a dedicated mechanism (for example a check box).
4. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.4 Error prevention (legal, financial, data) (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-prevention-legal-financial -data):
    - [G99](https://www.w3.org/WAI/WCAG21/Techniques/general/G99)&nbsp;;
    - [G155](https://www.w3.org/WAI/WCAG21/Techniques/general/G155).
- EN 301 549 V3.2.1 (2021-03): 10.3.3.4 Error prevention (legal, financial, data).


