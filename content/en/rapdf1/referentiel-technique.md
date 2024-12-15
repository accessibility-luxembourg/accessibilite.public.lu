### Introduction {class="no-summary"}

This framework is designed to check that PDF documents produced by office suites have basic accessibility. The aim is to enable people with disabilities to access and understand content and to use navigation functions.
It does not take into account certain types of complex content or structures specific to the PDF format. These can only be edited using Acrobat Pro or similar software.

These types of content include
- headers and footers,
- quotations,
- footnotes,
- references to additional sources such as bibliographic references.

Specific structures include
- the language of the document,
- indications of the language of a text passage,
- indications of changes in reading direction,
- declarations of decorative elements specific to the PDF format,
- the association of a tooltip with links.

Form content is covered in an additional theme and reduced to its essential elements.

Evaluating and adapting these elements requires the intervention of specialists and the use of technical software (screen readers, page layout software compatible with the PDF format or the Acrobat Pro work environment).

The same applies when the PDF document is produced using specialised software, in particular Desktop Publishing software or a specialised publishing channel, in which case direct reference should be made to standard [EN 301 549 v.3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) for Section 10 Non-web documents.

### Non-compliant content types {class="no-summary"}

The following types of content will be considered non-compliant, as they may not be used satisfactorily by all people with disabilities:
- multimedia, video or audio content
- sudden changes in brightness or blinking effects (multimedia content or animated graphic elements).

Their presence renders the whole document non compliant with accessibility and requires the provision of an alternative version of the document in which all the information conveyed by this content is present in text form.

### Non-compliant document types {class="no-summary"}
Certain types of document may not be used satisfactorily by all people with disabilities:
- [untagged documents](glossaire.md#untagged-documents),
- [non-interactive forms](glossaire.md#non-interactive-form).
In these cases, there is no point in auditing the documents, which will have to be completely overhauled or a relevant alternative made available.

### Warning {class="no-summary"}

An assessment methodology is proposed for each criterion in the framework. However, it has no normative value. It is provided solely as an aid to understanding the framework and gives an example of a possible evaluation method. There may be others. Furthermore, the content of this methodology and its stages cannot be used as a basis in the event of a dispute. Finally, it is possible that errors will not be detected solely on the basis of this methodology.

Only the content of the criteria and tests has normative value.

### [Topic 1](#topic-1): Graphic elements {id="topic-1"}

#### [Criterion 1.1](#crit-1-1) [A] Is each [decorative image](glossaire.md#decoration) correctly ignored by assistive technologies? {id="crit-1-1"}
- **[Test 1.1.1](#test-1-1-1)** Does each [decorative image](glossaire.md#decoration) meet one of these conditions {id="test-1-1-1"}
    - The image has no alternative.
    - The image is [absent from rendering](glossaire.md#absent-from-rendering-decorative-image).

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the decorative images in the original document.
4. Check in PAC that each of them is absent from the rendered content (absence of the FIGURE element).
5. If this is not the case, check that each image has no alternative (empty ALT element).
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1);
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 1.2](#crit-1-2) [A] Does each image [conveying information](glossaire.md#conveying-information) have a [text alternative](glossaire.md#text-alternative)? {id="crit-1-2"}
- **[Test 1.2.1](#test-1-2-1)** Does each image [conveying information](glossaire.md#conveying-information) satisfy one of these conditions? {id="test-1-2-1"}
    - The image has a text alternative.
    - A link adjacent to the image provides access to a text alternative.

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the images conveying information in the original document.
4. Check in PAC that each image (FIGURE element) is accompanied by an alternative (ALT element).
5. If this is not the case, check that the image is immediately followed by a link to a text alternative (LINK element).
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 1.3](#crit-1-3) [A] For each image [conveying information](glossaire.md#conveying-information) with a [text alternative](glossaire.md#text-alternative), is this alternative relevant? {id="crit-1-3"}
- **[Test 1.3.1](#test-1-3-1)** For each image [conveying information](glossaire.md#conveying-information) with a [text alternative](glossaire.md#text-alternative), is this alternative relevant? {id="test-1-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the images conveying information in the original document.
4. Check in PAC that the alternatives (ALT element or content linked by an adjacent link) contain all the information needed to understand the content with which the image is associated.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 1.4](#crit-1-4) [A] Does each image [conveying information](glossaire.md#conveying-information) have, where necessary, a [detailed description](glossaire.md#detailed-description)? {id="crit-1-4"}
- **[Test 1.4.1](#test-1-4-1)** Does each image [conveying information](glossaire.md#conveying-information) that requires a [detailed description](glossaire.md#detailed-description) satisfy one of these conditions? {id="test-1-4-1"}
    - The [detailed description](glossaire.md#detailed-description) is adjacent to the image.
    - A link adjacent to the image will take you to the [detailed description](glossaire.md#detailed-description).

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify the images conveying information that require detailed description in the original document.
4. Check in PAC that each image (FIGURE element) is accompanied by an adjacent text that serves as a detailed description.
5. If this is not the case, check that each image is accompanied by an adjacent link providing access to the detailed description.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1);
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73);
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criteria 1.5](#crit-1-5) [A] For each image [conveying information](glossaire.md#conveying-information) with a [detailed description](glossaire.md#detailed-description), is this description relevant? {id="crit-1-5"}
- **[Test 1.5.1](#test-1-5-1)** Does each image [conveying information](glossaire.md#conveying-information) with a [detailed description](glossaire.md#detailed-description) satisfy one of these conditions? {id="test-1-5-1"}
    - The [detailed description](glossaire.md#detailed-description) adjacent to the image is relevant.
    - The [detailed description](glossaire.md#detailed-description) available via an adjacent link is relevant.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Locate the images conveying information associated with a detailed description.
4. Check that the detailed description adjacent to or accessible via an adjacent link includes all the information contained in the image.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1);
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73);
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 1.6](#crit-1-6) [A] Is each image [legend](glossaire.md#legend), if necessary, correctly linked to the corresponding image? {id="crit-1-6"}
- **[Test 1.6.1](#test-1-6-1)** Does each [legend](glossaire.md#legend) associated with an image satisfy these conditions? {id="test-1-6-1"}
    - The [legend](glossaire.md#legend) is adjacent to the image.
    - The alternative image contains an [explicit reference](glossaire.md#explicit-reference-to-an-image-caption-or-complex-shape) to the legend.

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate images associated with legends in the original document.
4. Check in PAC that the legend is adjacent to the image (there is no content between the legend and the image).
5. Check that the alternative image contains an explicit reference to the legend.
6. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 1.7](#crit-1-7) [AA] Each [image of text](glossaire.md#image-of-text) [conveying information](glossaire.md#conveying-information), in the absence of an [alternative text version](glossaire.md#alternative-text-version), must be replaced by styled text. Is this rule respected (excluding special cases)? {id="crit-1-7"}
- **[Test 1.7.1](#test-1-7-1)** Each [image of text](glossaire.md#image-of-text) [conveying information](glossaire.md#conveying-information), in the absence of a [text alternative version](glossaire.md#text-alternative), must be replaced by styled text. Is this rule respected (excluding special cases)? {id="test-1-7-1"}

##### Special cases 
In these situations, the criterion does not apply:
- The text is part of a logo or brand name of an organisation or company.
- The presentation of the text is considered essential to the information conveyed by the image, for example an image used to illustrate the graphic aspect of a font.

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
2. Locate all text that may be presented as an image in the original document.
3. Check in PAC that each text is actually presented in image form (FIGURE element).
3. Check that the image is accompanied by an anchor (LINK element) enabling an alternative text version to be consulted.
4. If this is not the case, check that the image is accompanied by a link (LINK element) enabling you to consult an alternative text version of the document in which the image of text is replaced.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.5 Images of text (AA)](https://www.w3.org/TR/WCAG21/#images-of-text):
    - [PDF7](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7);
    - [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140).
- EN 301 549 V3.2.1 (2021-03): *10.1.4.5 Images of text*.


### [Topic 2](#topic-2): Colours {id="topic-2"}
#### [Criterion 2.1](#crit-2-1) [A] Information must not be [provided by colour only](glossaire.md#information-provided-by-colour-only). Is this rule respected? {id="crit-2-1"}
- **[Test 2.1.1](#test-2-1-1)** For each word or set of words whose colouring carries information, the information must not be [provided by colour only](glossaire.md#information-provided-by-colour-only). Is this rule respected? {id="test-2-1-1"}
- **[Test 2.1.2](#test-2-1-2)** For each indication of colour given by text, the information must not be [provided by colour only](glossaire.md#information-provided-by-colour-only). Is this rule respected? {id="test-2-1-2"}
- **[Test 2.1.3](#test-2-1-3)** For each image conveying information, the information must not be [provided by colour only](glossaire.md#information-provided-by-colour-only). Is this rule respected? {id="test-2-1-3"}
- **[Test 2.1.4](#test-2-1-4)** For each layout where the colour conveys information, the information must not be [provided by colour only](glossaire.md#information-provided-by-colour-only). Is this rule respected? {id="test-2-1-4"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
3. Locate the information (provided by colour).
4. For each piece of information (word or set of words, text indication, information provided by colour in the images), check that colour is not the only means of retrieving the information. For example:
    - The word or set of words is accompanied by an icon with a relevant alternative.
    - The text indication refers to an explicit text or an icon with a relevant alternative.
    - The indication given by colour in an image is accompanied by a visual indication (legend, symbol, etc.).
    - The indication given by a layout is accompanied by an icon with a relevant alternative.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color):
    - [G14](https://www.w3.org/WAI/WCAG21/Techniques/general/G14);
    - [G182](https://www.w3.org/WAI/WCAG21/Techniques/general/G182);
    - [G111](https://www.w3.org/WAI/WCAG21/Techniques/general/G111);
    - [G138](https://www.w3.org/WAI/WCAG21/Techniques/general/G138).
- EN 301 549 V3.2.1 (2021-03):  *10.1.4.1 Use of color*.


#### [Criterion 2.2](#crit-2-2) [AA] Is the contrast between the colour of the text and the colour of its background sufficiently high (excluding special cases)? {id="crit-2-2"}
- **[Test 2.2.1](#test-2-2-1)** For [normal text size](glossaire.md#normal-text-size), does the contrast ratio between the text and its background meet one of these conditions (excluding special cases)?{id="test-2-2-1"}
    - The contrast ratio between the text and its background is at least 4.5:1.
    - A [replacement mechanism](glossaire.md#replacement-mechanism-enhanced-contrast) is used to display the text with a contrast ratio of at least 4.5:1.
- **[Test 2.2.2](#test-2-2-2)** For [enlarged text](glossaire.md#enlarged-text-size), does the contrast ratio between the text and its background meet one of these conditions (excluding special cases)?{id="test-2-2-2"}
    - The contrast ratio between the text and its background is at least 3:1.
    - A [replacement mechanism](glossaire.md#replacement-mechanism-enhanced-contrast) is used to display the text with a contrast ratio of at least 3:1.

##### Special cases 
In these situations, the criterion does not apply:
- The text is part of a logo or brand name of an organisation or company.
- The text is purely decorative.
- The text is part of an image conveying information, but the text itself does not provide any essential information.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and the Colour Contrast Analyser tool

1. Open the PDF file.
2. Using the Colour Contrast Analyser tool, check that
    - the default body text and image of text of equivalent size has a contrast ratio with the background colour of 4.5:1, at least;
    - the text and image of text in a significantly enlarged size have a contrast ratio with the background colour of at least 3:1.
3. If this is not the case, check that there is a way of obtaining a version of the document with sufficient contrast.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/TR/WCAG21/#contrast-minimum):
    - [G18](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html);
    - [G145](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.4.3 Contrast (minimum)*.

#### [Criterion 2.3](#crit-2-3) [AA] Are the colours used in the graphic elements conveying information sufficiently contrasting (excluding special cases)? {id="crit-2-3"}
- **[Test 2.3.1](#test-2-3-1)** Does the contrast ratio of each colour required to understand a graphic element with the [adjacent colours](glossaire.md#adjacent-colours), meet one of these conditions (excluding special cases)?{id="test-2-3-1"}
    - The contrast ratio is at least 3:1.
    - A [replacement mechanism](glossaire.md#replacement-mechanism-enhanced-contrast) allows graphic elements to be displayed with sufficient contrast.
- **[Test 2.3.2](#test-2-3-2)** Does the contrast ratio of each colour required to understand a graphic element with the background colour meet one of these conditions (excluding special cases)?{id="test-2-3-2"}
    - The contrast ratio is at least 3:1.
    - A [replacement mechanism](glossaire.md#replacement-mechanism-enhanced-contrast) allows graphic elements to be displayed with sufficient contrast.
- **[Test 2.3.3](#test-2-3-3)** Does the contrast ratio between the colours of a graphic element in its [different states](glossaire.md#different-states-of-a-graphic-element) meet one of these conditions (excluding special cases)?{id="test-2-3-3"}
    - The contrast ratio is at least 3:1.
    - A [replacement mechanism](glossaire.md#replacement-mechanism-enhanced-contrast) is used to display graphic elements with sufficient contrast.

##### Special cases 
In these situations, the criterion does not apply:
- graphic elements (or parts of graphic elements) that do not provide information or have an alternative, detailed description or identical information visible on the page;
- graphic element (or parts thereof) forming part of a logo or brand name of an organisation or company;
- graphic elements (or parts of graphic elements) whose presentation is essential to the information conveyed (flags, logos, photos of people or scenes, screen captures, medical diagrams, heat maps, etc.).

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and the Colour Contrast Analyser tool

1. Open the PDF file.
3. Identify the graphic elements that carry information.
4. Using the Colour Contrast Analyser tool, check that
    - the contrast ratio between each of the information-conveying colours and its adjacent colour(s) is at least 3:1;
    - the contrast ratio between each of the information-conveying colours and the background colour is at least 3:1;
    - the contrast ratio between each state of the same graphic element is at least 3:1;
    - the contrast ratio between each state of the same graphic element and the background colour is at least 3:1.
5. If this is not the case, check that there is a way of obtaining a version of the document with sufficient contrast.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.11 Non-text contrast (AA)](https://www.w3.org/TR/WCAG21/#non-text-contrast):
    - [G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207.html);
    - [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.4.11 Non-text contrast*.

### [Topic 3](#topic-3): Tables {id="topic-3"}

#### [Criterion 3.1](#crit-3-1) [A] Does each [complex data table](glossaire.md#complex-data-table) have an alternative? {id="crit-3-1"}
- **[Test 3.1.1](#test-3-1-1)** Does each [complex data table](glossaire.md#complex-data-table) satisfy one of these conditions? {id="test-3-1-1"}
    - An alternative is adjacent to the table;
    - An adjacent anchor provides access to an alternative;
    - A link provides access to a document containing an alternative.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader    

1. Open the PDF file.
2. Identify complex data tables.
4. Check that there is an anchor adjacent to the table that provides access to an alternative.
5. If not, check that there is an adjacent alternative.
5. If not, check that there is an adjacent link to a document containing an alternative to the complex data table.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3);
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.3.2 Meaningful sequence*.

#### [Criterion 3.2](#crit-3-2) [A] For each [complex data table](glossaire.md#complex-data-table) with an alternative, is the alternative relevant? {id="crit-3-2"}
- **[Test 3.2.1](#test-3-2-1)** For each [complex data table](glossaire.md#complex-data-table) with an alternative, is the alternative relevant? {id="test-3-2-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify the complex data tables associated with an alternative.
4. Check that the alternative provides the same information as the complex data table.
5. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3);
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.3.2 Meaningful sequence*.

#### [Criterion 3.3](#crit-3-3) [A] For each [data table](glossaire.md#data-table), are the [headers](glossaire.md#header-table) correctly declared? {id="crit-3-3"}
- **[Test 3.3.1](#test-3-3-1)** For each [data table](glossaire.md#data-table), does each [header](glossaire.md#header-table) use a TH element? {id="test-3-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the data tables in the original document.
4. Check in PAC that each cell used as a header is correctly structured (TH element).
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF6](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6);
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.1 Info and relationships*.

#### [Criterion 3.4](#crit-3-4) [A] For each [presentation table](glossaire.md#presentation-table), is the [linearised content](glossaire.md#linearised-content) still understandable? {id="crit-3-4"}
- **[Test 3.4.1](#test-3-4-1)** For each [presentation table](glossaire.md#presentation-table), is the [linearised content](glossaire.md#linearised-content) still understandable? {id="test-3-4-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the layout tables in the original document.
4. Check in PAC that when the cells are browsed in the order in which they are presented, the content remains understandable.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.2 Meaningful sequence*.

#### [Criterion 3.5](#crit-3-5) [A] Each [presentation table](glossaire.md#presentation-table) must not use elements specific to [data tables](glossaire.md#data-table), is this rule respected? {id="crit-3-5"}
- **[Test 3.5.1](#test-3-3-1)** Each [presentation table](glossaire.md#presentation-table) must not use elements specific to [data tables](glossaire.md#data-table) {id="test-3-5-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024    

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the presentation tables in the original document.
4. Check in PAC that the table has no TH elements.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.1 Info and relationships*.

### [Topic 4](#topic-4): Links {id="topic-4"}

#### [Criterion 4.1](#crit-4-1) [A] Is each [link](glossaire.md#link) explicit? {id="crit-4-1"}
- **[Test 4.1.1](#test-4-1-1)** Does each [link](glossaire.md#link) meet one of these conditions? {id="test-4-1-1"}
    - The [accessible name of a link](glossaire.md#accessible-name-of-a-link) alone is self-explanatory;
    - The [link context](glossaire.md#link-context) makes the link explicit.

- **[Test 4.1.2](#test-4-1-2)** Does each [identical link](glossaire.md#identical-accessible-names-of-links) have the same function and destination? {id="test-4-1-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### Test 4.1.1 with Acrobat Reader and PAC 2024

1. Open the PDF file with PAC.
2. Open "Screen reader preview", the content of the file is displayed as it will be rendered, with the element(s) used preceding each content.
3. Locate the links in the original document.
4. Check in PAC that the link has a self-explanatory accessible name:
    - text content of the LINK element;
    - text content of the ALT element of the image (FIGURE element) contained in the link;
    - or a combination of the two.
5. If this is not the case, check in PAC that the sentence containing the link makes it explicit.
6. If this is not the case, check in PAC that the heading immediately preceding the link (Hx element) makes it explicit.
7. If this is the case, the test is validated.

###### Test 4.1.2 with Acrobat Reader and PAC 2024

1. Open the PDF file with Acrobat Reader.
2. Look for identical links.
3. Click on the links and check that the associated resources are identical.
4. If they are, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.4.4 Link purpose (in context) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context):
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11);
    - [PDF13](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13).
- EN 301 549 V3.2.1 (2021-03): *10.2.4.4 Link purpose (in context)*.

#### [Criterion 4.2](#crit-4-2) [A] Does each [link](glossaire.md#link) have an accessible name? {id="crit-4-2"}
- **[Test 4.2.1](#test-4-2-1)** Does each [link](glossaire.md#link) image have an accessible name? {id="test-4-2-1"}
- **[Test 4.2.2](#test-4-2-2)** Does each [link](glossaire.md#link) using a complex shape have an accessible name? {id="test-4-2-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024    

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the image links in the original document.
4. Check in PAC that the image has an alternative content (ALT element contained in the LINK element).
5. Identify links built with a complex shape in the original document.
6. Check in PAC that the complex shape has a populated alternative (ALT element).
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1: [2.4.4 Link purpose (in context) (A)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context):
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11).
- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03): *10.2.4.4 Link purpose (in context)*, *10.1.1.1 Non-text content*.

### [Topic 5](#topic-5): Information structure {id="topic-5"}

#### [Criterion 5.1](#crit-5-1) [A] Is the information structured by the appropriate use of headings? {id="crit-5-1"}
- **[Test 5.1.1](#test-5-1-1)** Does each heading use a [heading style](glossaire.md#heading-style)? {id="test-5-1-1"}
- **[Test 5.1.2](#test-5-1-2)** Where [heading styles](glossaire.md#heading-style) allow, is the [headings hierarchy](glossaire.md#headings-hierarchy) consistent? {id="test-5-1-2"}
- **[Test 5.1.3](#test-5-1-3)** Is each heading relevant? {id="test-5-1-3"}

##### Evaluation methodology {class="disclosure methodo"}

###### Test 5.1.1 with PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the text passages that should be headings in the original document.
4. Check in PAC that the heading is presented using an Hx element where x is the heading level, for example H1.
5. If this is the case, the test is validated.

###### Test 5.1.2 with Acrobat Reader

1. Open the PDF file and consult the table of contents or display the list of headings ("bookmark" icon in the left-hand side panel).
2. Check that the tree structure is consistent (the proposed tree structure represents the levels of headings).
3. If this is the case, the test is validated.

###### Test 5.1.3 with Acrobat Reader

1. Open the PDF file and consult the table of contents or display the list of headings ("bookmark" icon in the left-hand side panel).
2. Check that each heading provides a satisfactory description of the content to which it relates.
3. If so, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF9](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9).
- WCAG 2.1 [2.4.6 Headings and labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels):
    - [G130](https://www.w3.org/WAI/WCAG21/Techniques/general/G130.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.3.1 Info and relationships*, *10.2.4.6 Headings and labels*.

#### [Criterion 5.2](#crit-5-2) [A] Does all content presented in the form of lists use a [list style](glossaire.md#list-style)? {id="crit-5-2"}
- **[Test 5.2.1](#test-5-1-1)** Does each piece of content presented as an unordered list use an appropriate [list style](glossaire.md#list-style)? {id="test-5-2-1"}
- **[Test 5.2.2](#test-5-2-2)** Where [list styles](glossaire.md#list-style) allow, does each piece of content presented as an ordered list use an appropriate [list style](glossaire.md#list-style)? {id="test-5-2-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### Test 5.2.1 with PAC 2024 

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify the content presented as an unordered and ordered list in the original document.
4. Check in PAC that
    - the list is presented using an L element;
    - each list item is presented using an LI element.
5. If this is the case, the test is validated.

###### Test 5.2.2 with Acrobat Reader

1. Open the PDF file.
2. For each list to be ordered, check that each list item is associated with an index. 
3. If this is the case, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF21](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF21).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.1 Info and relationships*.


#### [Criterion 5.3](#crit-5-3) [A] [Structure elements](glossaire.md#structure-elements) must not be used only for layout purposes, is this rule respected? {id="crit-5-3"}
- **[Test 5.3.1](#test-5-3-1)** [Structure elements](glossaire.md#structure-elements) must not be used only for layout purposes, does this rule apply? {id="test-5-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Check that all the content uses appropriate elements, and in particular that there are no
    - blocks of text associated with an Hx element (for example a block of text associated with an H1 element);
    - successive empty paragraphs;
    - blocks of text where each line is presented in the form of a paragraph (P element).
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.1 Info and relationships*.

### [Topic 6](#topic-6): Presentation of information {id="topic-6"}

#### [Criterion 6.1](#crit-6-1) [A] Is the [rendering order](glossaire.md#rendering-order) of the content consistent? {id="crit-6-1"}
- **[Test 6.1.1](#test-6-1-1)** Is the [rendering order](glossaire.md#rendering-order) of the content consistent? {id="test-6-1-1"}
- **[Test 6.1.2](#test-6-1-2)** Is the [navigation sequence](glossaire.md#navigation sequence) of the content consistent? {id="test-6-1-2"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and PAC 2024

###### Test 6.1.1 with Acrobat Reader and PAC 2024

1. Open the PDF file with PAC.
2. Open "Screen reader preview", the content of the file is displayed as it will be rendered, with the element(s) used preceding each content.
3. Locate content in PAC that appears
    - as a column in the original document;
    - in the form of independent text zones, whether or not associated with a block of text in the original document.
4. Check in PAC that this content is presented in a coherent order to make the document as a whole comprehensible.
5. Check that there is no other content in an inconsistent order.
6. If this is the case, the test is validated.

Note: in most cases, the text zone will be followed immediately in PAC by an empty FIGURE element. This FIGURE element can be ignored.

###### Test 6.1.2 with Acrobat Reader
1. Open the PDF file.
2. Use the tab key to scroll through the items that can be tabbed.
3. Check that the navigation sequence is consistent: the tab items are presented in a logical and consistent order.
4. If this is the case, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.2 Meaningful sequence (A)](https://www.w3.org/TR/WCAG21/#meaningful-sequence):
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- WCAG 2.1 [2.1.1 Keyboard (A)](https://www.w3.org/TR/WCAG21/#keyboard):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- WCAG 2.1 [2.4.3 Focus order (A)](https://www.w3.org/TR/WCAG21/#focus-order):
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3);
    - [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html).
- EN 301 549 V3.2.1 (2021-03): *10.1.3.2 Meaningful sequence*, *10.2.1.1 Keyboard*, *10.2.4.3 Focus order*.

#### [Criterion 6.2](#crit-6-2) [A] Information must not be conveyed solely by [shape, size or location](glossaire.md#indication-conveyed-only-by-shape-size-or-location). Is this rule respected? {id="crit-6-2"}
- **[Test 6.2.1](#test-6-2-1)** For each change to the character type or style that conveys information, the information must not be conveyed solely by the [shape, size or location](glossaire.md#indication-conveyed-only-by-shape-size-or-location). Is this rule respected? {id="test-6-2-1"}
- **[Test 6.2.2](#test-6-2-2)** For each visual indication conveyed by positioning or the presence of a special character conveying information, the information must not be conveyed solely by [shape, size or location](glossaire.md#indication-conveyed-only-by-shape-size-or-location). Is this rule respected? {id="test-6-2-2"}


##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and PAC 2024

###### Test 6.2.1 with Acrobat Reader and PAC 2024

1. Open the file with Acrobat Reader.
2. Locate the information in the text that uses a change in character type or style (bold, italic, font);
3. Check that the information transmitted using a typeface or character style is associated with an equivalent text indication. 
4. If this is the case, the test is validated.

###### Test 6.2.2 with Acrobat Reader and PAC 2024

1. Open the file with Acrobat Reader.
2. Locate information in the text that uses a visual indication by means of positioning or the presence of a special character (e.g. a mathematical or graphic symbol).
3. Check that the information conveyed by means of positioning or the presence of a special character is associated with an equivalent text indication. 
4. If this is the case, the test is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.3 Sensory characteristics (A)](https://www.w3.org/TR/WCAG21/#sensory-characteristics):
    - [G96](https://www.w3.org/WAI/WCAG21/Techniques/general/G96.html).
- EN 301 549 V3.2.1 (2021-03):  *10.1.3.3 Sensory characteristics*.

#### [Criterion 6.3](#crit-6-3) [A] Is every link, indicated solely by colour and whose [nature is not obvious](glossaire.md#link-whose-nature-is-not-obvious), visible in relation to the surrounding text? {id="crit-6-3"}
- **[Test 6.3.1](#test-6-3-1)** Does each link, indicated only by colour and whose [nature is not obvious](glossaire.md#link-whose-nature-is-not-obvious), have a contrast ratio greater than or equal to 3:1 with respect to the surrounding text? {id="test-6-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and the *Colour Contrast Analyser* tool

1. Open the PDF file.
2. Identify links inserted in blocks of text (paragraphs, headings, lists, etc.) and indicated only by colour.
3. Using the Colour Contrast Analyser tool, check that the contrast ratio between the font colour of the link and the font colour of the surrounding text is greater than or equal to 3:1.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color):
    - [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html).
- EN 301 549 V3.2.1 (2021-03):  *10.1.4.1 Use of color*.

### [Topic 7](#topic-7): Navigation {id="topic-7"}

#### [Criterion 7.1](#crit-7-1) [AA] Does the document have a [table of contents](glossaire.md#table-of-contents) (excluding special cases)? {id="crit-7-1"}
- **[Test 7.1.1](#test-7-1-1)** Does the document have a [table of contents](glossaire.md#table-of-contents) (excluding special cases)? {id="test-7-1-1"}

##### Special cases 
In these situations, the criterion is not applicable:
- The document consists of just a few pages.
- The content is not intended to be structured by a headings structure.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Check that the contents are preceded by a table of contents.
3. If not, check that there is a table of contents in the left-hand side panel ("bookmark" icon) of Acrobat Reader.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.4.5 Multiple ways (MA)](https://www.w3.org/TR/WCAG21/#multiple-ways):
    - [PDF2](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2);
    - [G64](https://www.w3.org/WAI/WCAG21/Techniques/general/G64.html).
- EN 301 549 V3.2.1 (2021-03): no related criteria.

### [Topic 8](#topic-8): Mandatory elements {id="topic-8"}

#### [Criterion 8.1](#crit-8-1) [A] Does the document have a [document title](glossaire.md#document-title)? {id="crit-8-1"}
- **[Test 8.1.1](#test-8-1-1)** Does the document have a [document title](glossaire.md#document-title)? {id="test-8-1-1"}

##### Special cases 
If the document is to be anonymised, using the functions for deleting document properties (author, date modified, etc.) in certain office software packages can also delete the document title without it being possible to fill it in independently.

In this case, the criterion is not applicable.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Consult the properties panel ("File" menu, then "Properties" option) and the "Description" tab.
3. Check that the "Title" field is filled in.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.4.2 Page titled (A)](https://www.w3.org/TR/WCAG21/#page-titled):
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03):  *10.2.4.2 Document titled*.

#### [Criterion 8.2](#crit-8-2) [A] Is the [document title](glossaire.md#document-title) relevant (except in special cases)? {id="crit-8-2"}
- **[Test 8.2.1](#test-8-2-1)** Is the [document title](glossaire.md#document-title) relevant (except in special cases)? {id="test-8-2-1"}

##### Special cases 
If the document is to be anonymised, using the functions for deleting document properties (author, date modified, etc.) in certain office software packages can also delete the document title without it being possible to fill it in independently.

In this case, the criterion is not applicable.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. View the properties panel ("File" menu, then "Properties" option) and the "Description" tab.
3. Check that the text entered in the "Title" field is relevant.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.4.2 Page titled (A)](https://www.w3.org/TR/WCAG21/#page-titled):
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03):  *10.2.4.2 Document titled*.

### [Topic 9](#topic-9): Consultation {id="topic-9"}

#### [Criterion 9.1](#crit-9-1) [A] Is each [complex](glossaire.md#complex-shape) [decorative](glossaire.md#decoration) shape correctly ignored by assistive technologies? {id="crit-9-1"}
- **[Test 9.1.1](#test-9-1-1)** Does each [complex](glossaire.md#complex-shape) [decorative](glossaire.md#decoration) shape satisfy one of these conditions?{id="test-9-1-1"}
    - The complex shape has no alternative.
    - The complex shape is [absent from rendering](glossaire.md#absent-from-rendering-decorative-image).

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify the complex decorative shapes in the original document.
4. Check in PAC that each of them is absent from the rendered content (absence of the FIGURE element).
5. If this is not the case, check that each of them has no alternative (empty ALT element).
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1);
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.2](#crit-9-2) [A] Does each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) have a [text alternative](glossaire.md#text-alternative)? {id="crit-9-2"}
- **[Test 9.2.1](#test-9-2-1)** Does each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) satisfy one of these conditions? {id="test-9-2-1"}
    - The complex shape has a text alternative.
    - A link adjacent to the complex shape provides access to a text alternative.

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify in the original document the complex shapes conveying information.
4. Check in PAC that each of them (FIGURE element) is accompanied by a populated alternative (ALT element).
5. If this is not the case, check that the complex shape is immediately followed by a link providing access to a text alternative (LINK element).
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.3](#crit-9-3) [A] For each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) with a [text alternative](glossaire.md#text-alternative), is this alternative relevant? {id="crit-9-3"}
- **[Test 9.3.1](#test-9-3-1)** For each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) with a [text alternative](glossaire.md#text-alternative), is this alternative relevant? {id="test-9-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify in the original document the complex shapes conveying information.
4. Check in PAC that the alternatives (ALT element or content linked by an adjacent link) contain all the information needed to understand the content with which the complex shape is associated.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.4](#crit-9-4) [A] Does each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) have, where necessary, a [detailed description](glossaire.md#detailed-description)? {id="crit-9-4"}
- **[Test 9.4.1](#test-9-4-1)** Does each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) that requires a [detailed description](glossaire.md#detailed-description) meet one of these conditions?{id="test-9-4-1"}
    - The [detailed description](glossaire.md#detailed-description) is adjacent to the complex shape.
    - A link adjacent to the complex shape provides access to the [detailed description](glossaire.md#detailed-description).

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify the complex shapes conveying information that require detailed description in the original document.
4. Check in PAC that each of them is accompanied by an adjacent text that serves as a detailed description.
5. If this is not the case, check that each one is accompanied by an adjacent link providing access to the detailed description.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.5](#crit-9-5) [A] For each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) with a [detailed description](glossaire.md#detailed-description), is this description relevant? {id="crit-9-5"}
- **[Test 9.5.1](#test-9-5-1)** Does each [complex shape](glossaire.md#complex-shape) [conveying information](glossaire.md#conveying-information) with a [detailed description](glossaire.md#detailed-description) meet one of these conditions?{id="test-9-5-1"}
    - The [detailed description](glossaire.md#detailed-description) adjacent to the complex shape is relevant.
    - The [detailed description](glossaire.md#detailed-description) available via an adjacent link is relevant.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Identify the complex shapes conveying information associated with a detailed description in the original document.
4. Check that the adjacent detailed description or the one that can be consulted via an adjacent link includes all the information contained in the complex shape.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content):
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.6](#crit-9-6) [A] Is each [legend](glossaire.md#legend) of [complex shape](glossaire.md#complex-shape), if necessary, correctly linked to the corresponding image? {id="crit-9-6"}
- **[Test 9.6.1](#test-9-6-1)** Does each [legend](glossaire.md#legend) associated with a [complex shape](glossaire.md#complex-shape) satisfy these conditions? {id="test-9-6-1"}
    - The [legend](glossaire.md#legend) is adjacent to the complex shape.
    - The alternative of the complex shape contains an [explicit reference](glossaire.md#explicit-reference-to-an-image-caption-or-complex-shape) to the [legend](glossaire.md#legend).

##### Evaluation methodology {class="disclosure methodo"}

###### With PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Identify the complex shapes associated with legends in the original document.
4. Check in PAC that the legend is adjacent to the complex shape (there is no content between the legend and the complex shape).
5. Check that the alternative for the complex shape contains an explicit reference to the legend.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.7](#crit-9-7) [A] Does each [cryptic content](glossaire.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) have an alternative? {id="crit-9-7"}
- **[Test 9.7.1](#test-9-7-1)** Does each [cryptic content](glossaire.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) have an alternative?{id="test-9-7-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
3. Identify cryptic content.
4. Check that a definition is available in the adjacent context (immediately before or after the cryptic content).
6. If so, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.8](#crit-9-8) [A] For each [cryptic content](glossaire.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) with an alternative, is this alternative relevant? {id="crit-9-8"}
- **[Test 9.8.1](#test-9-8-1)** For each [cryptic content](glossaire.md#cryptic-content) (ASCII art, emoticon, cryptic syntax) with an alternative, is this alternative relevant? {id="test-9-8-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
3. Identify cryptic content associated with an alternative.
4. Check that the proposed alternative provides the same information as the cryptic content.
6. If it does, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.1.1 Non-text content (A)](https://www.w3.org/TR/WCAG21/#non-text-content);
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03):  *10.1.1.1 Non-text content*.

#### [Criterion 9.9](#crit-9-8) [A] Each [blinking or moving content](glossaire.md#blinking-or-moving-content) must have an [activation time](glossaire.md#activation-time) of less than or equal to 5 seconds. Is this rule respected? {id="crit-9-9"}
- **[Test 9.9.1](#test-9-9-1)** Each [blinking or moving content](glossaire.md#blinking-or-moving-content) must have an [activation time](glossaire.md#activation-time) of less than or equal to 5 seconds. Is this rule respected? {id="test-9-9-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
3. Look for blinking or moving content.
4. Check that the duration of the blinking or movement is less than or equal to 5 seconds.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.2.2 Pause, stop, hide (A)](https://www.w3.org/TR/WCAG21/#pause-stop-hide):
    - [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4.html);
    - [G11](https://www.w3.org/WAI/WCAG21/Techniques/general/G11.html);
    - [G152](https://www.w3.org/WAI/WCAG21/Techniques/general/G152.html).
- EN 301 549 V3.2.1 (2021-03): *10.2.2 Pause, stop, hide*.

### [Topic 10](#topic-10): Interactive form (complementary topic){id="topic-10"} 
#### Introduction{class=no-summary}
This topic only covers interactive forms filled in with Acrobat Reader.
PDF forms can only be created using Acrobat Pro or specialised PDF form editing software.

In addition, the testing methodology requires the use of a screen reader.
For these reasons, this topic has been deliberately isolated to the last part of the framework.

The assessment methodology is based on the screen reader [NVDA](https://www.nvaccess.org/download/), which can be freely installed and used on a Windows computer.

The criteria for this theme aim to check that the form controls (input field, etc.) are correctly rendered to ensure basic accessibility.

However, a test by a person with a disability using his or her own assistive technology is preferable to check:
- that the PDF form is perfectly usable,
- that all the input fields can be filled in,
- and that the user has all the necessary information.

#### [Criterion 10.1](#crit-10-1) [A] Does each [form field](glossaire.md#form-field) have a [label](glossaire.md#label)? {id="crit-10-1"}
- **[Test 10.1.1](#test-10-1-1)** Does each [form field](glossaire.md#form-field) satisfy these conditions? {id="test-10-1-1"}
    - the [label](glossaire.md#label) is visible;
    - the [label](glossaire.md#label) is correctly rendered by assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each field and check that:
    - the label is visible;
    - a name is rendered vocally.
3. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
 - WCAG 2.1 [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value):
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12).
- EN 301 549 V3.2.1 (2021-03): *10.1.3.1 Info and relationships*, *10.4.1.2 Name, role, value*.

#### [Criterion 10.2](#crit-10-2) [A] Is each [label](glossaire.md#label) associated with a [form field](glossaire.md#form-field) relevant? {id="crit-10-2"}
- **[Test 10.2.1](#test-10-2-1)** Does each [label](glossaire.md#label) meet these conditions?{id="test-10-2-1"}
    - The text of the [label](glossaire.md#label) accessible to assistive technologies is relevant;
    - The visible text of the [label](glossaire.md#label) is contained in the text accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each field and check that the name is rendered vocally
    - indicates the exact function of the associated field;
    - and contains at least the visible label.
3. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.4.6 Headings and labels (AA)](https://www.w3.org/TR/WCAG21/#headings-and-labels):
    - [G131](https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html).
- WCAG 2.1 [2.5.3 Label in name (A)](https://www.w3.org/TR/WCAG21/#label-in-name):
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html);
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03): *10.2.4.6 Headings and labels*, *10.2.5.3 Label in name*, *10.3.3.2 Labels or instructions*.

#### [Criterion 10.3](#crit-10-3) [AA] Is every [label](glossaire.md#label) associated with a [form field](glossaire.md#form-field) having the same function and repeated several times in the same document [consistent](glossaire.md#consistent-labels)? {id="crit-10-3"}
- **[Test 10.3.1](#test-10-3-1)** Is every [label](glossaire.md#label) associated with a [form field](glossaire.md#form-field) having the same function and repeated several times in the same document [consistent](glossaire.md#consistent-labels){id="test-10-3-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. Locate in the document the form fields with the same functions.
3. With NVDA, use the tab key to activate each field and check that the names rendered vocally are consistent with each other.
4. Check that the visible labels are also consistent.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.2.4 Consistent identification (AA)](https://www.w3.org/TR/WCAG21/#consistent-identification):
    - [G197](https://www.w3.org/WAI/WCAG21/Techniques/general/G197.html).
- EN 301 549 V3.2.1 (2021-03): no related criteria.

#### [Criterion 10.4](#crit-10-4) [A] Are each [label](glossaire.md#label) and its associated field [located next to each other](glossaire.md#label-and-field-located-next-to-each-other)? {id="crit-10-4"}
- **[Test 10.4.1](#test-10-4-1)** Are each [label](glossaire.md#label) and its associated field [located next to each other](glossaire.md#label-and-field-located-next-to-each-other)?{id="test-10-4-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Check that the visible labels are attached to the fields with which they are associated.
3. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html);
    - [G162](https://www.w3.org/WAI/WCAG21/Techniques/general/G162).
- EN 301 549 V3.2.1 (2021-03):  *10.3.3.2 Labels or instructions*.

#### [Criterion 10.5](#crit-10-5) [A] Are the mandatory [form fields](glossaire.md#form-field) correctly identified (excluding special cases)? {id="crit-10-5"}
- **[Test 10.5.1](#test-10-5-1)** Does each mandatory [form field](glossaire.md#form-field) meet these conditions? {id="test-10-5-1"}
    - The required nature is visible and explicit.
    - The required nature is accessible to assistive technologies.

##### Special cases 
In these situations, the criterion is not applicable:

- The form has only one field.
- Optional fields are indicated
    - visible and explicit;
    - in the field label.

If all the fields on a form are mandatory, the criterion remains applicable.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. Locate the mandatory fields in the document.
3. Check that the visual indication is self-explanatory:
    - it is a text indication (e.g. "mandatory");
    - or it is a visual indication (e.g. "\*") defined before the form by a text indication (e.g. "Fields preceded by (\*) are mandatory").
4. With NVDA, use the tab key to activate each field and check that the mandatory nature of the input is rendered vocally.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [1.4.1 Use of color (A)](https://www.w3.org/TR/WCAG21/#use-of-color):
    - [G205](https://www.w3.org/WAI/WCAG21/Techniques/general/G205.html).
- WCAG 2.1 [3.3.1 Error identification (A)](https://www.w3.org/TR/WCAG21/#error-identification):
    - [PDF5](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5).
- WCAG 2.1 [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03):  *10.1.4.1 Use of color*, *10.3.3.1 Error identification*, *10.3.3.2 Labels or instructions*.

#### [Criteria 10.6](#crit-10-6) [A] For each mandatory [form field](glossaire.md#form-field), is the expected data type and/or format available? {id="crit-10-6"}
- **[Test 10.6.1](#test-10-6-1)** Does each mandatory [form field](glossaire.md#form-field) meet these conditions? {id="test-10-6-1"}
    - The data type and/or format is visible.
    - The data type and/or format is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. Locate the mandatory fields in the document.
3. With NVDA, use the tab key to activate each field.
4. Fill in the fields with values that are likely to cause input errors (an invalid format for an e-mail address, for example). 
5. Use the tab key to exit fields or, if the form allows it, to send the form.
6. For each error message displayed, check that the expected data type and/or format is
    - indicated by visible text near the field or via an information window;
    - spoken when the field is activated.
7. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.3.1 Error identification (A)](https://www.w3.org/TR/WCAG21/#error-identification):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- WCAG 2.1 [3.3.2 Labels or instructions (A)](https://www.w3.org/TR/WCAG21/#labels-or-instructions):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03):  *10.3.3.1 Error identification*, *10.3.3.2 Labels or instructions*.

#### [Criterion 10.7](#crit-10-7) [A] Is each input error message correctly rendered? {id="crit-10-7"}
- **[Test 10.7.1](#test-10-7-1)** Does each input error message meet these conditions? {id="test-10-7-1"}
    - The error message is visible.
    - The error message is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each field.
3. Fill in fields with values likely to cause input errors (an invalid format for an e-mail address, for example). 
4. Use the tab key to exit fields or, if the form allows it, to send the form.
5. For each error message displayed, check that it is
    - indicated by visible text near the field;
    - spoken when the field is activated.
6. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.3.1 Error identification (A)](https://www.w3.org/TR/WCAG21/#error-identification):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03):  *10.3.3.1 Error identification*.

#### [Criterion 10.8](#crit-10-8) [AA] Is the [error management](glossaire.md#error-management) accompanied, if necessary, by suggestions for expected data types, formats or values (excluding special cases)? {id="crit-10-8"}
- **[Test 10.8.1](#test-10-8-1)** Does the [error management](glossaire.md#error-management) meet these conditions? {id="test-10-8-1"}
    - The input check is accompanied, if necessary, by suggestions for the expected data types and formats.
    - The input check is accompanied, if necessary, by suggestions for expected values.

##### Special cases 
In these situations, the criterion is not applicable:

- The error message is generated automatically by the PDF editing software.
- The personalisation of error messages requires the use of a script language.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each field.
3. Fill in fields with values likely to cause input errors (an invalid format for an e-mail address, for example). 
4. Use the tab key to exit fields or, if the form allows it, to send the form.
5. For each error message relating to a data type, format or expected value, check 
    - that the error message includes an example of a real input (for an email address, check that a real address is indicated based on the "jean.dupont@sample.com" pattern);
    - that the real input example is played back vocally when the field is activated.
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.3.3 Error suggestion (AA)](https://www.w3.org/TR/WCAG21/#error-suggestion):
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03):  *10.3.3.3 Error suggestion*.


#### [Criterion 10.9](#crit-10-9) [A] Does each form button have a label? {id="crit-10-9"}
- **[Test 10.9.1](#test-10-9-1)** Does each form button have a label? {id="test-10-9-1"}

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each button.
3. Check that a label is rendered vocally.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}
- WCAG 2.1 [1.3.1 Info and relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships):
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- WCAG 2.1 [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value):
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html).
- EN 301 549 V3.2.1 (2021-03): *10.4.1.2 Name, role, value*.

#### [Criterion 10.10](#crit-10-10) [A] Is the label of each form button relevant? {id="crit-10-10"}
- **[Test 10.10.1](#test-10-10-1)** Does each form button meet these conditions? {id="test-10-10-1"}
    - The label of the button accessible to assistive technologies is relevant.
    - The visible text of the button is contained in the label accessible to assistive technologies.

##### Evaluation methodology {class="disclosure methodo"}

###### With Acrobat Reader and NVDA

1. Open the PDF file and activate NVDA.
2. With NVDA, use the tab key to activate each button.
3. Check that
    - the voice rendered label is relevant;
    - the visible text is contained in the voice voice rendered label.
4. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [2.5.3 Label in name (A)](https://www.w3.org/TR/WCAG21/#label-in-name):
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html);
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
 - WCAG 2.1: [4.1.2 Name, role, value (A)](https://www.w3.org/TR/WCAG21/#name-role-value):
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html);
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12.html).
- EN 301 549 V3.2.1 (2021-03): *10.2.5.3 Label in name*, *10.4.1.2 Name, role, value*.

#### [Criterion 10.11](#crit-10-11) [AA] For each form which modifies or deletes data, or which transmits answers to a test or examination, or whose validation has financial or legal consequences, can the data entered be modified, updated or recovered by the user? {id="crit-10-11"}
- **[Test 10.11.1](#test-10-11-1)** For each form which modifies or deletes data, or which transmits answers to a test or examination, or whose validation has financial or legal consequences, can the data entered be modified, updated or recovered by the user? {id="test-10-11-1"}

##### Assessment methodology {class="disclosure methodo"}

###### With Acrobat Reader

1. Open the PDF file.
2. Fill in the form.
3. For all data of a financial (e.g. an income statement), legal (e.g. an administrative act reference) or personal (e.g. a telephone number) nature, for each form that transmits answers to a test or examination, check that the user can: 
    - modify or cancel data and carried out actions on this data while it is being entered (for example, a field is not deactivated after a value has been entered);
    - explicitly confirm the sending of this data using a dedicated mechanism (e.g. by ticking a confirmation box).
4. For each mechanism (e.g. a button) used to modify or delete data entered, check that the user can
    - cancel the changes made;
    - recover deleted data;
    - or explicitly confirm the modification or deletion of this data using a dedicated mechanism (e.g. a checkbox).
5. If this is the case, the criterion is validated.

##### Mapping {class="disclosure mapping"}

- WCAG 2.1 [3.3.4 Error prevention (legal, financial, data) (AA)](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data):
    - [G99](https://www.w3.org/WAI/WCAG21/Techniques/general/G99);
    - [G155](https://www.w3.org/WAI/WCAG21/Techniques/general/G155).
- EN 301 549 V3.2.1 (2021-03): *10.3.3.4 Error prevention (legal, financial, data)*.


