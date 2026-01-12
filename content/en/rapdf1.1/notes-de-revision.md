### Addition of PDF/UA-2 mappings

Where possible, one or more mappings with elements of the PDF/UA-2 standard have been added for each criterion.

### Criteria

#### Modification of the methodology for criterion 5.1 

The testing methodologies for [criterion 5.1](/en/rapdf1.1/technical-reference.html#crit-5-1) have been modified. They have been merged into a single methodology based solely on the use of PAC.

##### In RAPDF 1

<blockquote>

Test 5.1.1 with PAC 2024

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the text passages that should be headings in the original document.
4. Check in PAC that the heading is presented using an Hx element where x is the heading level, for example H1.
5. If this is the case, the test is validated.

Test 5.1.2 with Acrobat Reader

1. Open the PDF file and consult the table of contents or display the list of headings ("bookmark" icon in the left-hand side panel).
2. Check that the tree structure is consistent (the proposed tree structure represents the levels of headings).
3. If this is the case, the test is validated.

Test 5.1.3 with Acrobat Reader

1. Open the PDF file and consult the table of contents or display the list of headings ("bookmark" icon in the left-hand side panel).
2. Check that each heading provides a satisfactory description of the content to which it refers to. 
3. If so, the test is validated.

</blockquote>

##### In RAPDF 1.1

<blockquote>

With PAC

1. Open the PDF file.
2. Open "Screen reader preview", the contents of the file are displayed as they will be rendered, with the element(s) used preceding each content.
3. Locate the text passages that should be headings in the original document and check in PAC that these headings are presented using an Hx element where x is the heading level, for example H1.
4. Locate all the headings identified in the document and check that the tree structure is consistent (the nesting of heading levels in relation to each other is consistent).
5. Check that each heading identified in the document adequately describes the content with which it is associated.
6. If this is the case, the test is validated.

</blockquote>

#### Creation of criterion 5.4: quotation block

Quotation blocks can be identified using paragraph styles in editing tools, which are rendered correctly (by assistive technologies). 

[Criterion 5.4](/en/rapdf1.1/referentiel-technique.html#crit-5-4) is therefore created to assess their correct identification in documents.

#### Removal of criterion 7.1

Criterion 7.1 had no equivalent in European standard EN 301 549. The criterion has been removed.

For the record, criterion 7.1 in RAPDF 1:

<blockquote>

Criterion 7.1 [AA] Does the document have a table of contents (excluding special cases)?

Test 7.1.1 Does the document have a table of contents (excluding special cases)?

</blockquote>

#### Forms: complete revision of methodologies

The methodologies for evaluating criteria [10.1](/en/rapdf1.1/technical-reference-document.html#crit-10-1), [10.2](/en/rapdf1.1/technical-reference-document.html#crit-10-2), [10.3](/en/rapdf1.1/technical-reference.html#crit-10-3), [10.5](/en/rapdf1.1/technical-reference.html#crit-10-5), [10.6](/en/rapdf1.1/technical-reference.html#crit-10-6), [10.7](/en/rapdf1.1/technical-reference.html#crit-10-7), [10.8](/en/rapdf1.1/technical-reference.html#crit-10-8), [10.9](/en/rapdf1.1/technical-reference.html#crit-10-9) and [10.10](/en-GB/rapdf1.1/technical-reference.html#crit-10-10), initially based on the use of NVDA, have been modified and are now based solely on an evaluation in Acrobat Reader.

The introductory text has been modified to reflect this methodological change. 

##### In RAPDF 1

<blockquote>

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

</blockquote>

##### In RAPDF 1.1

<blockquote>

This topic only covers interactive forms filled in with Acrobat Reader.

PDF forms can only be created using Adobe Acrobat Pro, Adobe InDesign or specialised PDF form editing software.

In addition to the assessments proposed in this section, testing by a person with a disability using their own assistive technology is recommended to check:
- that the PDF form is perfectly usable,
- that all the input fields can be filled in,
- and that the user has all the necessary information.

</blockquote>

#### 10.1

Modification of the conditions of criterion [10.1](/en/rapdf1.1/technical-reference.html#crit-10-1) to reflect the change in methodology.

##### In RAPDF 1

<blockquote>

 - the label is visible;
 - the label is correctly rendered by assistive technologies.

</blockquote>

##### In RAPDF 1.1

<blockquote>

 - the label is visible;
 - the label is accessible to assistive technologies.

</blockquote>

#### 10.2

Editorial change to criterion [10.2](/en/rapdf1.1/technical-reference-document.html#crit-10-2).

##### In RAPDF 1

<blockquote>

- the text of the label accessible to assistive technologies is relevant;
- the visible text of the label is contained in the text accessible to assistive technologies.

</blockquote>

##### In RAPDF 1.1

<blockquote>

- the label accessible to assistive technologies is relevant;
- the visible label is contained in the label accessible to assistive technologies.

</blockquote>

#### 10.5

Modification of criterion [10.5](/en/rapdf1.1/technical-reference.html#crit-10-5) to introduce optional fields directly into the tests instead of special cases.

The special case is modified and a technical note is added.

##### In RAPDF 1

<blockquote>

Criterion 10.5 Are mandatory form fields correctly identified (excluding special cases)?

Test 10.5.1 Does each mandatory form field meet these conditions?
- The required nature is visible and explicit.
- The required nature is accessible to assistive technologies.

**Special cases** 

In these situations, the criterion is not applicable:

- The form has only one field.
- Optional fields are indicated
    - visible and explicit;
    - in the field label.

</blockquote>

##### In RAPDF 1.1

<blockquote>

Criterion 10.5 Are mandatory or optional form fields correctly identified (excluding special cases)?

Test 10.5.1 Does each mandatory or optional form field meet these conditions?
- The required or optional nature is visible and explicit.
- The required or optional nature is accessible to assistive technologies.

**Special cases** 

When the form has only one field, the criterion is not applicable.

If all fields in a form are mandatory, the criterion remains applicable.

**Technical notes**

Test 10.5.1 addresses fields independently; however, it must be ensured that the method chosen to alert users (mandatory fields or optional fields) is consistent throughout the form.

</blockquote>

#### 10.6

Editorial modification of criterion [10.6](/en/rapdf1.1/technical-reference.html#crit-10-6) and addition of a condition on the display of information prior to validation.

##### In RAPDF 1

<blockquote>

Criterion 10.6 For each mandatory form field, is the expected data type and/or format available?

Test 10.6.1 Does each mandatory form field check these conditions?
- The data type and/or format is visible.
- The data type and/or format is accessible to assistive technologies.

</blockquote>

##### In RAPDF 1.1

<blockquote>

Criterion 10.6 Do the data type and/or format instructions meet these conditions?

Test 10.6.1 Do the instructions and indications of the mandatory data type and/or format meet these conditions?
- The data type and/or format is visible.
- The data type and/or format is indicated prior to form validation.
- The data type and/or format is accessible to assistive technologies.

</blockquote>

#### 10.8

Removal of the special case of criterion [10.8](/en/rapdf1.1/technical-reference.html#crit-10-8) related to script.

For the record, in RAPDF 1

<blockquote>

The personalisation of error messages requires the use of a script language.

</blockquote>

### Glossary

#### Error management

Addition of the words &quot;mandatory fields&quot; following the modification of criterion 10.5 and the inclusion of optional fields in the evaluation.

#### Heading hierarchy

Modification of the definition to remove the requirement to start with a level 1 title and the prohibition of hierarchical jumps.

##### In RAPDF 1

<blockquote>

In most office publishing software, the style library proposes a particular style for each heading level, generally up to 8 levels.

The headings hierarchy is coherent when
- All text passages intended to be a heading use a heading style.
- The first heading in the content is level 1.
- There is no break in the headings hierarchy (for example, you do not go directly from a level 2 heading to a level 4 heading).

</blockquote>

##### In RAPDF 1.1

<blockquote>

In most office publishing software, the style library proposes a specific style for each heading level, generally up to six levels.

The heading hierarchy is consistent when the nesting of heading levels is consistent (the nesting levels of headings reflect the level of dependency of the content on each other).

Note: the presence of hierarchical jumps (e.g. moving from a level 2 heading to a level 4 heading) does not invalidate the criterion, but is not recommended.

</blockquote>

#### Link whose nature is not obvious

Simplification of the glossary entry and modification of the example.

##### In RAPDF 1

<blockquote>

Link whose accessible name makes it impossible to understand its nature, which may lead visually impaired people to ignore it.

Example of a link whose nature is obvious: "The general conditions of use of our services have been updated, click to view them online"

If the text "Click to view them online" is a link, its nature is obvious.

Example of a link whose nature is not obvious: "The Web Content Accessibility Guidelines (WCAG) 2.1 define how to make web content more accessible to people with disabilities"

Although the text "Web Content Accessibility Guidelines (WCAG) 2.1" is a link, its accessible name is not sufficient to understand its nature.

**Important note**: only links that are inserted into blocks of text are concerned.

</blockquote>

##### In RAPDF 1.1

<blockquote>

A link that may be confused with normal text by some users who cannot perceive colours or have poor colour perception, for example when it is indicated only by colour. Thus, in this text ‘New summer timetable’, if the word ‘timetable’ is a link indicated only by colour, its nature may be ignored by users who cannot perceive colour and are accessing the content with CSS enabled.

Note: ‘indicated only by colour’ means that the link is not accompanied by any visual marker (icon, underlining, border, etc.). Consequently, a link that is the same colour as the surrounding text is subject to this criterion.

**Important note**: only links inserted in blocks of text are concerned.

</blockquote>

#### Table of contents - deletion

The glossary entry &quot;Table of contents&quot; has been deleted following the deletion of criterion 7.1. 

For the record, the glossary entry &quot;Table of contents&quot; in RAPDF 1: 

<blockquote>

List of content headings, presented at the beginning of the document, generally in the form of links providing direct access to the relevant sections. Each heading may be accompanied by the corresponding page number.
Depending on the software used to edit the content, the table of contents may be structured using TOC and TOCI elements or L and LI elements.

</blockquote>

### Modification of annex documents

The [Introduction](introduction.html), [Testing Methodology](methodology.html) and [Testing Environment](environment.html) pages have been modified to remove any reference to screen readers as an evaluation methodology, following their removal for the evaluation of the Forms topic.
