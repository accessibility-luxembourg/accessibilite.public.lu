---
title: Changelog from RAWeb 1 to RAWeb 1.1
---

[RAWeb 1.1](/en/raweb1.1/) is the Luxembourg accessibility framework that covers all the requirements of European standard [EN 301 549 v3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) currently in force throughout Europe.
This is an update of [RAWeb 1.0](/en/raweb1/), itself derived from [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/) published by DINUM in France.
RAWeb 1.0 has its own [changelog](/en/raweb1/notes-revision.html).

All the changes made between versions 1.1 and 1.0 of RAWeb are detailed below.

### Summary of changes with a major impact

In this section, we identify the changes that cause backward compatibility issues with RAWeb 1. Indeed, some implementations that were considered compliant in RAWeb 1 are no longer compliant in RAWeb 1.1. It is therefore important to identify them correctly for future accessibility audits and acceptance tests.

* Criterion 1.2 has been modified to reduce the use of `role="presentation"` and `role="none"`.
* Criterion 13.5 has been modified and no longer considers the use of the `<abbr>` tag and the `title` attribute as a compliant method for providing an alternative to cryptic content.

### Criteria

#### 1.2

##### Change in title

The title of [criterion 1.2](/en/raweb1.1/criteres#crit-1-2) has been modified to include the notion of "without a caption", as is already the case in the test title.

###### In RAWeb 1

<blockquote>Is every decorative image correctly ignored by assistive technologies?</blockquote>

###### In RAWeb 1.1

<blockquote>Is every decorative image, without a caption, correctly ignored by assistive technologies?</blockquote>

##### Technical note

Addition of a clarification concerning images for which the `aria-hidden="true"` attribute is set on a parent element and not on the image itself.

<blockquote>If an image is nested within a tag with an `aria-hidden="true"` attribute, it will be considered hidden by assistive technologies.</blockquote>

Removal of the note on the difference in support between `role="presentation"` and `role="none"`. In the testing environment, support is equivalent. The tests now cover both possible values.

<blockquote>

A WAI-ARIA `role="presentation"` attribute can be used on decorative images and decorative non-clickable areas. The `"none"` role introduced in ARIA 1.1 and synonymous with the `"presentation"` role can also be used. However, it is still preferable to use the `"presentation"` role while waiting for satisfactory support for the `"none"` role.

</blockquote>

##### Restriction on the use of `role="presentation"` and introduction of `role="none"` for `<img>` or `<area>` elements

In [tests 1.2.1](/en/raweb1.1/criteres#test-1-2-1) and [1.2.2](/en/raweb1.1/criteres#test-1-2-2), RAWeb 1 stipulated that it was possible to hide an image (`<img>` or `<area>`) with `role="presentation"`, without any other conditions. 

Recent tests on the testing environment have shown that an image with `role="presentation"` and a `title` attribute or ARIA naming property was not ignored. The tests are being rewritten to take these particularities into account.

As `role="none"` has similar effects for hiding images, it is being introduced into the tests.

The testing methodologies are being modified accordingly.

<b>Please note:</b> There is a case of **backward incompatibility with RAWeb 1** here. Images hidden with `role="presentation"` but with a `title`, `aria-label` or `aria-labelledby` attribute may have been considered compliant. They will be considered non-compliant with this new version of the test. 

###### In RAWeb 1

<blockquote>

Test 1.2.1 Does each decorative image (`<img>` tag), without image caption, meet one of these conditions?

- The `<img>` tag has an empty `alt` attribute (`alt=""`) and no other attribute to provide a text alternative.
- The `<img>` tag has a WAI-ARIA attribute `aria-hidden="true"` or `role="presentation"`.

Test 1.2.2 Does each non-clickable decoration area (`<area>` tag without an `href` attribute), meet one of these conditions?

- The `<area>` tag has an empty `alt` attribute (`alt=""`) and no other attribute to provide a text alternative.
- The `<area>` tag has a WAI-ARIA `aria-hidden="true"` or `role="presentation"` attribute.

</blockquote>

###### In RAWeb 1.1

<blockquote>Test 1.2.1 Does each decorative image (`<img>` tag), without image caption, meet one of these conditions?

- The `<img>` tag has an empty `alt` attribute (`alt=""`) and no other attribute to provide a text alternative.
- The `<img>` tag has a WAI-ARIA `aria-hidden="true"` attribute.
- The `<img>` tag has a `role="presentation"` or a `role="none"` attribute and does not have the `title`, `aria-label`, or `aria-labelledby` attributes.

Test 1.2.2 Does each non-clickable decoration area (`<area>` tag without `href` attribute), meet one of these conditions?

- The `<area>` tag has an empty `alt` attribute (`alt=""`) and no other attribute to provide a text alternative.
- The `<area>` tag has a WAI-ARIA `aria-hidden="true"`.
- The `<area>` tag has a `role="presentation"` or a `role="none"` attribute and does not have the `title`, `aria-label`, or `aria-labelledby` attributes.

</blockquote>

##### Removal of test conditions on element naming properties

In [test 1.2.4](/en/raweb1.1/criteres#test-1-2-4), RAWeb 1 required testing for the absence of a naming method for the element `<svg>` even in the presence of an `aria-hidden="true"` property. Recent tests on the testing environment have shown that, even in the presence of a naming method, the mere presence of the `aria-hidden="true"` property is sufficient for the image to be ignored. It is no longer necessary to check for the absence of a naming method.

The methodology has been modified accordingly.

###### In RAWeb 1

<blockquote>

Does each decorative vector image (`<svg>` tag), without image caption, meet these conditions?

- The `<svg>` tag has a WAI-ARIA `aria-hidden="true"` attribute.
- The `<svg>` tag and its children have no text alternative.
- The `<title>` and `<desc>` tags are missing or empty.
- The `<svg>` tag and its children have no `title` attribute.

</blockquote>

###### In RAWeb 1.1

<blockquote>

Each decorative vector image (`<svg>` tag), without image caption, has a WAI-ARIA `aria-hidden="true"` attribute. Is this rule respected?

</blockquote>

#### 1.6

The technical note for [criterion 1.6](/en/raweb1.1/criteres#crit-1-6) has been modified to take into account: 
- the inclusion of the `<title>` element in the computation of the accessible name of an `<SVG>` element (see the change to the glossary entry [Text alternative (image)](glossaire.html#alternative-textuelle-image));
- the evolution of [criterion 1.9](/en/raweb1.1/criteres#crit-1-9) and the removal of requirements related to the presence of a `role` and `aria-label` attribute.

##### In RAWeb1

<blockquote>

In the case of SVG, the lack of support for the `<title>` and `<desc>` elements by assistive technologies creates a difficulty in implementing the text alternative of the image and its detailed description. In this case, it is recommended to use the WAI-ARIA `aria-label` attribute to implement both the short text alternative and the reference to the adjacent detailed description or the WAI-ARIA `aria-labelledby` attribute to associate the passage of texts acting as short alternative and detailed descriptio.

The use of the WAI-ARIA `aria-describedby` attribute is not recommended for linking an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its detailed description, due to a lack of support for assistive technologies. However, when it is used, the attribute must necessarily refer to the `id` of the zone containing the detailed description.

The adjacent detailed description may be implemented via a `<figcaption>` tag, in which case criterion 1.9 must be checked (use of `<figure>` and the WAI-ARIA `role="figure"` and `aria-label` attributes, in particular).

</blockquote>

##### In RAWeb1.1

<blockquote>

In the case of SVG, the lack of support for the `<desc>` element means that it cannot be used to implement a detailed description.

The use of the WAI-ARIA `aria-describedby` attribute is not recommended for linking an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its detailed description, due to a lack of support for assistive technologies. However, when it is used, the attribute must necessarily refer to the `id` of the zone containing the detailed description.

The adjacent detailed description may be implemented via a `<figcaption>` tag, in which case [criterion 1.9](#crit-1-9) must be checked.

</blockquote>

#### 1.9 

In RAWeb 1, the tests for [criterion 1.9](/en/raweb1.1/criteres#crit-1-9) required always checking for the presence of a `role="group"` or `role="figure"` and a WAI-ARIA `aria-label` attribute on the `<figure>` tag. 

Recent tests on the testing environment have shown that captioned images are correctly identified and presented to users with the simple implementation of `<figure>` and `<figcaption>`. 

The conditions relating to the presence of the `role` and `aria-label` attributes have been removed from the five tests: 

<blockquote>

- The `<figure>` tag has a WAI-ARIA attribute `role="figure"` or `role="group"`.
- The `<figure>` tag has a WAI-ARIA `aria-label` attribute whose content is identical to the content of the legend.

</blockquote>

The methodologies have been modified accordingly.

The technical note has also been modified to take these changes into account.

##### Technical note

###### In RAWeb1

<blockquote>

The implementation of a WAI-ARIA `role="group"` or `role="figure"` attribute on the `<figure>` parent element is intended to compensate for the current lack of support for `<figure>` elements by assistive technologies. The use of a `<figcaption>` element to associate an [image caption](#image-caption) with an image requires at least the use of a WAI-ARIA `aria-label` attribute on the `<figure>` parent element, the content of which will be identical to the content of the `<figcaption>` element. To ensure optimal support, an explicit association can also be made between the content of the image's [text alternative](#text-alternative-image) and the content of the `<figcaption>` element, for example:

`<img src="image.png" alt="Sunset photo" /><figcaption>Photo: credit xxx</figcaption>`

The WAI-ARIA `aria-labelledby` and `aria-describedby` attributes cannot currently be used due to a lack of support by assistive technologies.

Note: captioned images must also comply with criteria 1.1 and 1.3 relating to images conveying information.

</blockquote>

###### In RAWeb1.1

<blockquote>

Captioned images must also comply with criteria 1.1 and 1.3 relating to images conveying information.

</blockquote>

#### 3.1

The testing methodologies for [criterion 3.1](/en/raweb1.1/criteres#crit-3-1) were incomplete and have been modified to better reflect what is actually expected in terms of graphics and code implementation. For each of the six tests, the second step has been modified.

##### In RAWeb1

<blockquote>

2. For each of these pieces of information, check that there is another way of retrieving this information (presence of a title attribute, an icon or a graphic effect in terms of shape or position, a typographic effect, etc.).

</blockquote>

##### In RAWeb1.1

<blockquote>

2. For each of these pieces of information, check for the presence of:
- additional information in the code (`title`, `aria-label`, visually hidden text, `aria-current`, etc.);
- and additional visual information to complement the colour (icon, graphic effect in terms of shape or position, typographical effect, etc.).

</blockquote>

#### 4.1 

The specific case referred to in [criterion 4.1](/en/raweb1.1/criteres#crit-4-1) has been amended to take into account the entry into force of the [Act of 8 March 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) in order to make the exemption of temporary media published before 23 September 2020 conditional only on public sector bodies subject to the [law of 28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### In RAWeb1

<blockquote>

- Time-based media was published before 23 September 2020 (in accordance with the [law of 28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)).

</blockquote>

##### In RAWeb1.1

<blockquote>

- Time-based media was published before 23 September 2020 on a website belonging to a public sector organisation subject to the [law of 28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

</blockquote>

#### 4.3 

[Criterion 4.3](/en/raweb1.1/criteres#crit-4-3) is amended to take into account the entry into force of the [law of 8 March 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo), which does not grant exemptions for live multimedia content. 

- The criterion has been reworded to remove the notion of "pre-recorded". 
- [Test 4.3.3](/en/raweb1.1/criteres#test-4-3-3) is created with its testing methodology.
- A special case is added to take into account exemptions from the law of 28 May 2019.

##### Criterion 

###### In RAWeb1

<blockquote>

Does each pre-recorded synchronised time-based media have, if necessary, synchronised captions (excluding special cases)?

</blockquote>

###### In RAWeb1.1

<blockquote>

Does each synchronised time-based media have,if necessary, synchronised captions (excluding special cases)?

</blockquote>

##### Special case 

Addition of the exemption from the [law of 28 May 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

<blockquote>

Live synchronised time-based media broadcast via a website subject to the law of 28 May 2019 are exempt.

</blockquote>

#### 4.4

[Criterion 4.4](/en/raweb1.1/criteres#crit-4-4) is amended to take into account the entry into force of the [Act of 8 March 2023](https://legilux.public.lu/eli/etat/leg), which does not grant exemptions for live multimedia content. 

- The criterion has been reworded to remove the notion of "pre-recorded". 
- [Test 4.4.2](/en/raweb1.1/criteres#test-4-4-2) has been created with its testing methodology.
- A special case has been added to take into account the exemptions in the law of 28 May 2019.

##### Criterion 

###### In RAWeb1

<blockquote>

For each pre-recorded synchronised time-based media with synchronised captions, are these captions relevant?

</blockquote>

###### In RAWeb1.1

<blockquote>

For each synchronised time-based media with synchronised captions, are these captions relevant (excluding special cases)?

</blockquote>

##### Special case 

Addition of the exemption from the [law of 28 May 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

<blockquote>

Live synchronised media broadcast via a website subject to the [Act of 28 May 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo) are exempt.

</blockquote>

#### 5.1

The testing methodology of [test 5.1.1](/en/raweb1.1/criteres#test-5-1-1) has been modified to remove the reference to the `summary` attribute. This attribute is obsolete.

For the record, the methodology condition referencing the attribute in RAWeb1: 

<blockquote>

- or in the `summary` attribute of the `<table>` element (in versions of HTML and XHTML prior to HTML 5);

</blockquote>

#### 5.7

[Test 5.7.6](/en/raweb1.1/criteres#test-5-7-6) (and its methodology) has been created to support column groups and row groups as table headers.

#### 6.1

[Test 6.1.6](/en/raweb1.1/criteres#test-6-1-6) is created following the modification of the glossary note [Accessible name of a link](#accessible-name-of-a-link): one of the five notes removed, transformed into a test.

#### 6.2

The title of [test 6.2.1](/en/raweb1.1/criteres#test-6-2-1) has been modified, as has its methodology, to limit it to searching for links without accessible names.

This change accompanies the change to the glossary note [Accessible name of a link](glossaire.html#accessible-name-of-a-link), which no longer requires criteria 6.2 and 10.2 to be invalidated in cases where a link has no content between the tags. [Criterion 6.2](/en/raweb1.1/criteres#crit-6-2) now only concerns the presence of an accessible name.

##### In RAWeb1

<blockquote>

On each web page, does each link have an accessible name between `<a>` and `</a>`? 

</blockquote>

##### In RAWeb1.1

<blockquote>

On each web page, does each link have an accessible name?

</blockquote>

#### 7.1

The testing methodology of [test 7.1.3](/en/raweb1.1/criteres#test-7-1-3) has been modified. It referred to the accessible name and the visible text as two names for the same element.

##### In RAWeb1

<blockquote>

1. For each user interface component that has passed test 7.1.1, check that the user interface component has
- a relevant name (visible label);
- a relevant role.

</blockquote>

##### In RAWeb1.1

<blockquote>

1. For each user interface component that has passed the 7.1.1 test, check that the user interface component has
- a relevant name;
- a relevant role.

</blockquote>

#### 7.3

The testing methodology of [test 7.3.1](/en/raweb1.1/criteres#test-7-3-1) has been modified in accordance with the modification of the glossary entry [Accessible and operable by keyboard and any pointing device](glossaire.html##accessible-and-operable-by-keyboard-and-any-pointing-device), so as not to restrict keyboard activation to the <KBD>Enter</KBD> key alone.

##### In RAWeb1

<blockquote>

If the element manages a simple action, it can be activated from the keyboard using the enter key.

</blockquote>

##### In RAWeb1.1

<blockquote>

If the element manages a simple action, it can be activated using the keyboard with the default keys in the user agents (e.g. <kbd>Enter</kbd>, <kbd>Space</kbd>).

</blockquote>

#### 9.1

The testing methodology of [test 9.1.3](/en/raweb1.1/criteres#test-9-1-3) has been modified.

##### In RAWeb1

<blockquote>

For each heading identified in test 9.1.1, check that

</blockquote>

##### In RAWeb1.1

<blockquote>

For each passage of text making up a heading, check that

</blockquote>

#### 9.2

[Criterion 9.2](/en/raweb1.1/criteres#crit-9-2) has been modified to take into account the evolution of support by assistive technologies for HTML tags used to structure large areas of the page. It is no longer mandatory to use both an HTML5 tag and an equivalent ARIA `role`. [Criterion 12.6](/en/raweb1.1/criteres#crit-12-6) has also been modified accordingly.

- The concept of [computed role](glossaire.html#computed-role) has been added to the glossary for this purpose.
- [Test 9.2.1](/en/raweb1.1/criteres#test-9-2-1) has been modified, as has its methodology.
- Tests [9.2.2](/en/raweb1.1/criteres#test-9-2-2), [9.2.3](/en/raweb1.1/criteres#test-9-2-3) and [9.2.4](/en/raweb1.1/criteres#test-9-2-4) have been created, along with their testing methodologies. 
- The special case relating to DOCTYPE is removed.
- The technical note is removed.

##### Special case

###### In RAWeb1

For the record, the deleted special case:

<blockquote>

When the doctype declared in the page is not the HTML5 doctype, this criterion is not applicable.

</blockquote>

##### Technical note

For the record, the technical note in RAWeb1

<blockquote>

The `<main>` tag can be used several times in the same HTML document. However, there can only ever be one visible and readable tag by assistive technologies, and the others must have a `hidden` attribute or a style that allows them to be hidden from assistive technologies. However, it should be noted that using only one style will not be sufficient to ensure the uniqueness of a `<main>` tag that is visible if the style sheets are deactivated.

</blockquote>

##### 9.2.1

###### In RAWeb1

<blockquote>

On each web page, does the document structure meet these conditions (excluding special cases)?
- The page header region is structured using a `<header>` tag.
- The main and secondary navigation regions are implemented using a `<nav>` tag.
- The `<nav>` tag is reserved for structuring the main and secondary navigation regions.
- The main content region is structured using a `<main>` tag.
- The document structure uses a single visible `<main>` tag.
- The footer region is structured using a `<footer>` tag.

</blockquote>

###### In RAWeb1.1

<blockquote>
On each web page, do the key regions of the page that make up the document structure meet these conditions? 
- The element containing the page header region has a computed role of `banner`.
- The elements containing the primary and secondary navigation regions have a computed role of `navigation`.
- The element containing the search engine region has a computed role of `search`.
- The element containing the main content region has a computed role of `main`.
- The element containing the footer region has a computed role of`contentinfo`.
</blockquote>

#### 10.1

The testing methodology of [test 10.1.2](/en/raweb1.1/criteres#test-10-1-2) is modified to add the `<iframe>`, `<source>` elements and `<svg>` children elements, with the exception of the use of the `width` and `height` attributes. The first condition of the testing methodology is modified.

##### In RAWeb1

<blockquote>

1. Check that these presentation attributes are not present: `align`, `alink`, `background`, `bgcolour`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `colour`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size` (with the exception of the `<select>` element), `width` (with the exception of the `<img>`, `<object>`, `<embed>`, `<canvas>` and `<svg>` elements), `height` (with the exception of the `<img>`, `<object>`, `<embed>`, `<canvas>` and `<svg>` elements).

</blockquote>

##### In RAWeb1.1

<blockquote>

1. Check that these presentation attributes are not present: `align`, `alink`, `background`, `bgcolour`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `colour`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size` (with the exception of the `<select>` element)
2. Check that the `width` or `height` attributes, if used, are only present on the `<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<object>`, `<source>`, `<svg>` elements  (or the children of the `<svg>` elements).

</blockquote>

#### 10.2

[Criterion 10.2](/en/raweb1.1/criteres#crit-10-2) and [test 10.2.1](/en/raweb1.1/criteres#test-10-2-1) have been reworded to improve understanding of the requirement and the scope of evaluation. The testing methodology for test 10.2.1 has also been updated.

This change accompanies the modification of the glossary note [Visible content](glossaire.html#visible-content).

##### Criterion 

###### In RAWeb1

<blockquote>

On each web page, is the visible content conveying information still present when the style sheets are deactivated?

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, is the visible content conveying information accessible to assistive technologies? 

</blockquote>

##### 10.2.1 

###### In RAWeb1

<blockquote>

On each web page, does the information remain present when the style sheets are deactivated?

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, is the visible content conveying information accessible to assistive technologies?

</blockquote>

#### 10.4

The testing methodologies [test 10.4.1](/en/raweb1.1/criteres#test-10-4-1) and [test 10.4.2](/en/raweb1.1/criteres#test-10-4-2) have been modified to clarify that only one of the conditions needs to be met. 

##### In RAWeb1

<blockquote>

- The browser's text zoom is set to 200%.
- The browser's graphical zoom is set to 200%.
- The personalised zoom functions offered by the document are used.

</blockquote>

##### In RAWeb1.1

<blockquote>

- When the browser's text zoom is set to 200%.
- Or when the browser's graphical zoom is set to 200%.
- Or when the personalised zoom functions offered by the document are used.

</blockquote>

#### 10.7

[Criterion 10.7](/en/raweb1.1/criteres#crit-10-7) and [test 10.7.1](/en/raweb1.1/criteres#test-10-7-1) are modified to clarify that this refers only to keyboard focus and not mouse focus.

The methodology has also been modified accordingly.

##### Criterion 

###### In RAWeb1

<blockquote>

On each web page, for each element receiving focus, is the focus visible?

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, for each element receiving keyboard focus, is the focus visible?

</blockquote>

##### 10.7.1

###### In RAWeb1

<blockquote>

For each element receiving focus, does the focus meet one of these conditions? 

</blockquote>

###### In RAWeb1.1

<blockquote>

For each element receiving keyboard focus, does the focus meet one of these conditions?

</blockquote>

#### 10.12 

The conditions in [test 10.12.1](/en/raweb1.1/criteres#test-10-12-1) have been reworded to better reflect what is expected: "increased to" has been replaced by "set to at least".

##### In RAWeb1

<blockquote>

- The spacing between lines (`line-height`) is increased up to 1.5 times the font size.
- The spacing between paragraphs (`<p>` tag) is increased to 2 times the font size.
- Letter spacing (`letter-spacing`) is increased to 0.12 times the font size.
- Word spacing (`word-spacing`) is increased to 0.16 times the font size.

</blockquote>

##### In RAWeb1.1

<blockquote>

- The spacing between lines (`line-height`) is set to at least 1.5 times the font size.
- The spacing after paragraphs (`<p>` tag) is set to at least 2 times the font size.
- Letter spacing (`letter-spacing`) is set to at least 0.12 times the font size.
- Word spacing (`word-spacing`) is set to at least 0.16 times the font size.

</blockquote>

#### 11.10 

The tests for [criterion 11.10](/en/raweb1.1/criteres#crit-11-10) are modified: 
- to introduce optional fields in the tests (previously referenced only in specific cases); 
- to extend the possibilities for identifying mandatory fields (test 11.10.2);
- to extend the requirement to indicate input formats to all fields whose format is checked, and not only to mandatory fields (test 11.10.4);
- to change "prior to form validation" to "before entry" (tests 11.10.1, 11.10.2 and 11.10.5) in order to be able to handle cases where error management takes place when exiting a field.

The methodologies have been modified accordingly.

Special cases have been modified to reflect these changes. A special case for identifying mandatory fields has been added in order to exclude cases where usage allows the mandatory nature of fields to be inferred (e.g. login forms).

The technical note has been modified to reflect these changes.

The glossary note [Mandatory field indication](glossaire.html#indication-of-mandatory-or-optional-fields) has been renamed "Indication of mandatory or optional fields" and modified to accompany this change.

##### 11.10.1

###### In RAWeb1

<blockquote>

Do the mandatory field indications meet one of these conditions (excluding special cases)?

- A mandatory field indication is visible and allows the field concerned to be identified before the form is validated.
- The mandatory field has the `aria-required="true"` or `required` attribute before the form is validated.

</blockquote>

###### In RAWeb1.1

<blockquote>

Do the indications of mandatory or optional field entries meet one of these conditions (excluding special cases)?

- A mandatory field indication is visible and allows the relevant field to be identified by name before entering data.
- The mandatory field has the `aria-required="true"` or `required` attribute before entering data.
- An optional field indication is visible and allows the relevant field to be identified by name before entering data.

</blockquote>

##### 11.10.2

###### In RAWeb1

<blockquote>

Do required fields with the `aria-required="true"` or `required` attribute meet one of these conditions?

- A mandatory field indication is visible and located in the label associated with the field prior to form validation.
- A mandatory field indication is visible and located in the passage of text associated with the field prior to validation of the form.

</blockquote>

###### In RAWeb1.1

<blockquote>

Do mandatory fields with the `aria-required="true"` or `required` attribute meet one of these conditions?

- A mandatory field indication is visible and allows the relevant field to be identified by name before data is entered.
- A mandatory field indication is visible and located in the label associated with the field before data is entered.
- A mandatory field indication is visible and located in the passage of text associated with the field before data is entered.
- A mandatory field indication is visible and located in the legend associated with the group of fields before data is entered.

</blockquote>

##### 11.10.4

###### In RAWeb1

<blockquote>

Do required fields with the `aria-invalid="true"` attribute meet any of these conditions?

</blockquote>

###### In RAWeb1.1

<blockquote>

Do fields with the `aria-invalid="true"` attribute meet any of these conditions?

</blockquote>

##### 11.10.5

###### In RAWeb1

<blockquote>

Do the mandatory instructions and indications of data type and/or format meet any of these conditions?
- An instruction or indication of mandatory data type and/or format is visible and enables the field concerned to be identified before the form is validated.
- An instruction or indication of data type and/or mandatory format is visible in the label or passage of text associated with the field prior to validation of the form.

</blockquote>

###### In RAWeb1.1

<blockquote>

Do the mandatory instructions and indications of data type and/or format meet any of these conditions?
- An instruction or indication of mandatory data type and/or format is visible and enables the relevant field to be identified by name before entering data.
- An instruction or indication of mandatory data type and/or format is visible in the label or passage of text associated with the field before entering data.

</blockquote>

##### Special cases

###### In RAWeb1

<blockquote>

Test 11.10.1 and Test 11.10.2 will be considered not applicable when the form contains a single form input field or indicates optional fields

- Visible;
- In the `<label>` tag or in the legend associated with the field.

If all the fields in a form are mandatory, tests 11.10.1 and 11.10.2 still apply.

</blockquote>

###### In RAWeb1.1

<blockquote>

Test 11.10.1 and Test 11.10.2 will be considered not applicable when:

- the form contains only one form field;
- the form contains only a username field and a password field (in the case of a login form).

If all the fields in a form are mandatory, tests 11.10.1 and 11.10.2 still apply.

</blockquote>

##### Technical notes

###### In RAWeb1

<blockquote>

In a long form where the majority of fields are mandatory, you may find that it is the few remaining optional fields that are explicitly marked as such. In this case, you should ensure that

- A visual message at the top of the form states that "all fields are mandatory except those indicated as optional";
- The word "optional" is visually present in the label of optional fields or in the legend for a group of optional fields;
- A `required` or `aria-required="true"` attribute remains associated with each field that is not affected by this optional character.

</blockquote>

###### In RAWeb1.1

<blockquote>

Test 11.10.1 and test 11.10.2 address fields independently; however, it must be ensured that the method chosen to alert users (mandatory fields or optional fields) is consistent throughout the form.

</blockquote>

#### 12.6

[Criterion 12.6](/en/raweb1.1/criteres#crit-12-6) has been modified to take into account changes in the requirements for implementing landmarks (see the [evolution of criterion 9.2](#9.2)): it is no longer mandatory to use both an HTML5 tag and an equivalent ARIA `role`. 

Criterion 12.6 has therefore been modified to apply only to regions other than the main areas already identified in [criterion 9.2](/en/raweb1.1/criteres#crit-9-2).

[The definition of Landmarks is modified](#landmarks) to reflect these changes.

The methodology is amended accordingly.

##### In RAWeb1

<blockquote>

Criterion 12.6: Can content grouping regions present in several web pages (header, main navigation, main content, footer and search engine) be reached or avoided?

Test 12.6.1: On each web page where they are present, do the header, main navigation, main content, footer and search engine regions comply with at least one of these conditions?

</blockquote>

##### In RAWeb1.1

<blockquote>

Criterion 12.6: Can content grouping zones present on several web pages (with the exception of the main regions composing the document structure) be reached or avoided, if necessary?

Test 12.6.1: Do the content grouping zones present on several web pages (with the exception of the main regions composing the document structure) meet at least one of these conditions, if necessary?

</blockquote>

#### 13.1

The testing methodology for [test 13.1.2](/en/raweb1.1/criteres#test-13-1-2) has been modified for greater clarity.

##### In RAWeb1

<blockquote>

1. In the document, find an automatic redirect initiated by a `<meta http-equiv="refresh" content="0;URL='[targeted URL]'" />` element.
2. Check that the redirect is immediate.
3. If this is the case, **the test is validated**.

</blockquote>

##### In RAWeb1.1

<blockquote>

1. In the document, find an automatic redirect initiated by a `<meta http-equiv="refresh" />` element.
2. If a redirection process exists, check:
   - either that the redirection is immediate (the `content` property must have the value 0, for example `content="0; URL='https://url.com'"`)
   - or that the time limit before redirection is at least twenty hours (the `content` property then has a value greater than or equal to 72000, for example `content="80000; URL='https://url.com'"`).
3. If this is the case, **the test is validated**.

</blockquote>

#### 13.2

The testing methodology of [test 13.2.1](/en/raweb1.1/criteres#test-13-2-1) has been modified for greater precision.

##### In RAWeb1

<blockquote>

1. Check that no new window (pop-up or pop-under, for example) is opened when the document is opened.
2. If this is the case, **the test is validated**.

</blockquote>

##### In RAWeb1.1

<blockquote>

1. When viewing a page, ensure that no new windows (browser windows or new tabs) are opened without user action.
2. If this is the case, **the test is validated**.

</blockquote>

#### 13.3

The specific case referred to in [criterion 13.3](/en/raweb1.1/criteres#crit-13-3) has been modified to take into account the entry into force of the [law of 8 March 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) in order to make the exemption of office files published before 23 September 2020 conditional only on public sector bodies subject to the [law of 28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### In RAWeb1

<blockquote>

Special cases can be managed:

- If the office files (e.g. PDF, Microsoft Office or LibreOffice documents, etc.) were published before 23 September 2018 (unless this content is necessary for the needs of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation, according to the law of [28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)

</blockquote>

##### In RAWeb1.1

<blockquote>

Special cases can be managed:

- If the office files (e.g. PDF, Microsoft Office or LibreOffice documents, etc.) were published before 23 September 2018 on a website of a public sector body subject to the law of [28 May 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo) (unless this content is necessary for the needs of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation.

</blockquote>

#### 13.5 

[Criterion 13.5](/en/raweb1.1/criteres#crit-13-5) is amended to better define the scope of the criterion (the definition [Cryptic Content](glossaire.html#cryptic-content) has also been created) and the cases of implementations deemed compatible with accessibility.

[Test 13.5.1](/en/raweb1.1/criteres#test-13-5-1) has been modified: the `title` attribute is no longer referenced as a valid method. It is necessary to ensure an implementation that is compatible with accessibility and supported on the testing environment. 

[Test 13.5.2](/en/raweb1.1/criteres#test-13-5-2) has been added to check that cryptic content is ignored by assistive technologies and that only the definition remains available.

The methodologies have been modified accordingly and a technical note has been added. 

<b>Warning:</b> There is a case of **backward incompatibility with RAWeb1** here. The use of the `<abbr>` tag and the `title` attribute is no longer considered a compliant method for providing alternative content for cryptic content.

##### Criterion

###### In RAWeb1

<blockquote>

Is there an alternative to every cryptic content (ASCII art, emoticon, cryptic syntax) on every web page? 

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, is each cryptic content correctly identified? 

</blockquote>

##### 13.5.1

###### In RAWeb1

<blockquote>

On each web page, does each cryptic content (ASCII art, emoticon, cryptic syntax) meet one of these conditions? 

- A `title` attribute is available.
- A definition is given by the adjacent context.

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, does each cryptic piece of content carrying information meet one of these conditions?

- The meaning of the content is provided in the adjacent context.
- The meaning of the content is provided by a method that is compatible with accessibility.

</blockquote>

##### Technical note

New technical note in RAWeb1.1

<blockquote>

If cryptic content conveying information is nested within a tag with a WAI-ARIA `role="img"` attribute, it will be evaluated against criteria 1.1 and 1.3, and criterion 13.5 will be considered not applicable.

If cryptic decorative content is nested within a tag with a WAI-ARIA `aria-hidden="true"` attribute, regardless of the level of nesting, it will be considered hidden from assistive technologies.

Due to the limited support for the `<abbr>` tag and the `title` attribute, providing the meaning of cryptic content with this implementation does not make the criterion compliant.

</blockquote>

#### 13.6 

[Criterion 13.6](/en/raweb1.1/criteres#crit-13-6) is modified to take into account the changes made to [criterion 13.5](/en/raweb1.1/criteres#crit-13-5).

##### Criterion

###### In RAWeb1

<blockquote>

On each web page, for each cryptic content (ASCII art, emoticon, cryptic syntax) having an alternative, is this alternative relevant?

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, for each cryptic content having an alternative, is this alternative relevant?

</blockquote>

##### 13.6.1

###### In RAWeb1

<blockquote>

On each web page, does each cryptic content (ASCII art, emoticon, cryptic syntax) meet one of these conditions?

- The value of the `title` attribute is relevant.
- The definition given by the adjacent context is relevant.

</blockquote>

###### In RAWeb1.1

<blockquote>

On each web page, does each cryptic content meet one of these conditions?

- The meaning given in the adjacent context is relevant.
- The meaning provided by a method compatible with accessibility is relevant.

</blockquote>

#### 13.7

The first condition of the three tests in [criterion 13.7](/en/raweb1.1/criteres#crit-13-7) has been modified, as it was more restrictive than the standard ("less than" instead of "less than or equal to").

The methodologies have also been modified accordingly.

##### In RAWeb1

<blockquote>

The frequency of the effect is less than 3 per second. 

</blockquote>

##### In RAWeb1.1

<blockquote>

The frequency of the effect is less than or equal to 3 per second.

</blockquote>

#### 13.8

A special case is added to [criterion 13.8](/en/raweb1.1/criteres#crit-13-8) (the words "(excluding special cases)" are added to the criterion and tests). This special case is taken from note 3 of the glossary definition <I>Control (moving or blinking content)</I>, which is deleted.

<blockquote>

When movement, blinking or scrolling is essential to the proper functioning or understanding of a feature, the criterion does not apply.

In some cases, movement is an integral part of the component and it is not possible to give the user control over it, for example a progress bar (or a loader) whose function is to indicate the progress of an event such as a download by means of movement. In this case, the criterion is not applicable.

</blockquote>

#### 14.1

A condition is added to [criterion 14.1](/en/raweb1.1/criteres#crit-14-1) and the methodology is modified accordingly.

<blockquote>

A list of non-compliances or a description of non-compliant items. 

</blockquote>

#### 15.1

[Test 15.1.4](/en/raweb1.1/criteres#test-15-1-4) is created to cover mobile content delivery technologies. The testing methodology is created accordingly.

<blockquote>

Does each editing tool that creates content distributed in a mobile application allow you to define the accessibility information needed to create content that complies with the RAAM?

</blockquote>

#### 15.3

The testing methodology of [test 15.3.1](/en/raweb1.1/criteres#test-15-3-1) has been modified to cover mobile content delivery technologies. 

<blockquote>

7. For each content published in a mobile application, check
   - that the information necessary for it to comply with RAAM (e.g., image alternatives, heading levels) is preserved in the generated content.
   - that the information, if restructured, remains compatible with assistive technologies (for example, if the author enters a table and after saving, the tool linearises the table, the restructured information must be understandable to users of assistive technologies, as it would have been in its original form).

</blockquote>

#### 15.5

[Test 15.5.4](/en/raweb1.1/criteres#test-15-5-4) has been created to cover mobile content delivery technologies. The testing methodology has been created accordingly.

#### 16.2

[Criterion 16.2](/en/raweb1.1/criteres#crit-16-2) and [test 16.2.1](/en/raweb1.1/criteres#test-16-2-1) are modified to cover the possibility of having multiple support services. The methodology is modified accordingly.

##### In RAWeb1

<blockquote>

16.2: The support service meets the communication needs of people with disabilities directly or through a relay service. Is this rule respected?

Test 16.2.1: The support service meets the communication needs of people with disabilities directly or through a relay service. Is this rule respected?

</blockquote>

##### In RAWeb1.1

<blockquote>

16.2: Each support service meets the communication needs of people with disabilities directly or through a relay service. Is this rule respected? 

Test 16.2.1: Each support service meets the communication needs of people with disabilities directly or through a relay service. Is this rule respected?

</blockquote>

### Additions and deletions of new links to WCAG criteria, techniques and failures

New links to WCAG criteria, techniques and failures are added in correspondence with certain RAWeb criteria: 

- Criteria [4.1](criteres#crit-4-1), [4.2](criteres#crit-4-2), [4.5](criteres#crit-4-5) and [4.6](criteres#crit-4-6): [G226](https://www.w3.org/WAI/WCAG21/Techniques/general/G226)
- Criteria [4.3](criteres#crit-4-3) and [4.4](criteres#crit-4-4): [1.2.4 Subtitles (live)](https://www.w3.org/Translations/WCAG21-fr/#captions-live)
- Criterion [4.3](criteres#crit-4-3) and [4.4](criteres#crit-4-3): [G9](https://www.w3.org/WAI/WCAG21/Techniques/general/G9)
- Criteria [4.5](criteres#crit-4-5) and [4.6](criteres#crit-4-6): [F113](https://www.w3.org/WAI/WCAG21/Techniques/failures/F113)
- Criteria [5.1](criteres#crit-5-1) and [5.2](criteres#crit-5-2): [H39](https://www.w3.org/WAI/WCAG21/Techniques/html/H39).
- Criterion [9.2](criteres#crit-9-2): [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
- Criterion [10.7](criteres#crit-10-7): [C45](https://www.w3.org/WAI/WCAG21/Techniques/css/C45)
- Criteria [6.1](criteres#crit-6-1), [7.1](criteres#crit-7-1), [11.2](criteres#crit-11-2), [11.9](criteres#crit-11-9): [F111](https://www.w3.org/WAI/WCAG21/Techniques/failures/F111).
- Criterion [10.11](criteres#crit-10-11): [G224](https://www.w3.org/WAI/WCAG21/Techniques/general/G224), [G225](https://www.w3.org/WAI/WCAG21/Techniques/general/G225)
- Criterion [11.3](criteres#crit-11-3): [G197](https://www.w3.org/WAI/WCAG21/Techniques/general/G197)
- Criterion [12.8](criteres#crit-12-8): [H102](https://www.w3.org/WAI/WCAG21/Techniques/html/H102)
- Criterion [13.8](criteres#crit-13-8): [F112](https://www.w3.org/WAI/WCAG21/Techniques/failures/F112)

Other techniques and failures have been removed: 

- Criteria [4.8](criteres#crit-4-8) and [4.9](criteres#crit-4-9): removal of link [H46](https://www.w3.org/WAI/WCAG21/Techniques/html/H46). This technique has been classified as obsolete by the AG working group.
- Criteria [5.1](criteres#crit-5-1) and [5.2](criteres#crit-5-2): removal of link [H73](https://www.w3.org/WAI/WCAG21/Techniques/html/H73). This technique has been classified as obsolete by the AG working group.
- Criterion [7.1](criteres#crit-7-1): removal of link [SCR21](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR21). This technique has been abandoned by the AG working group because it has no impact on accessibility.
- Criterion [7.4](criteres#crit-7-4): 
  - Removal of links [F9](https://www.w3.org/WAI/WCAG21/Techniques/failures/F9) and [F22](https://www.w3.org/WAI/WCAG21/Techniques/failures/F22). These failures are related to triple A criterion [3.2.5 Change on demand](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
  - Removal of the link [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76). This technique is related to the triple A criteria [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions) and [3.2.5 Change on demand](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
- Criterion [9.3](criteres#crit-9-3): 
  - Removal of link [G153](https://www.w3.org/WAI/WCAG21/Techniques/general/G153). This technique is related to triple A criterion [3.1.5 Reading Level](https://www.w3.org/Translations/WCAG22-fr/#reading-level).
  - Removal of link [H40](https://www.w3.org/WAI/WCAG21/Techniques/html/H40). This technique is related to triple A criterion [3.1.3 Rare words](https://www.w3.org/Translations/WCAG22-fr/#unusual-words).
- Criterion [10.2](criteres#crit-10-2): removal of link [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87). The failure has been classified as obsolete by the AG working group.
- Criterion [12.8](criteres#crit-12-8): removal of links [SCR37](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37) and [H4](https://www.w3.org/WAI/WCAG21/Techniques/html/H4). These techniques have been classified as obsolete by the AG working group.
- Criterion [13.1](criteres#crit-13-1): 
  - Removal of links [F61](https://www.w3.org/WAI/WCAG21/Techniques/failures/F61), [G110](https://www.w3.org/WAI/WCAG21/Techniques/general/G110), [H76](https://www.w3.org/WAI/WCAG21/Techniques/html/H76) and [SVR1](https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR1). These techniques and failures are related to the triple A criterion [3.2.5 Change on demand](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
  - Removal of the link [G75](https://www.w3.org/WAI/WCAG21/Techniques/general/G75). This technique is related to the triple A criterion [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions).
  - Removal of link [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76). This technique is related to triple A criteria [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions) and [3.2.5 Change on Demand](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
- Criterion [13.8](criteres#crit-13-8): removal of links [G187](https://www.w3.org/WAI/WCAG21/Techniques/general/G187), [F4](https://www.w3.org/WAI/WCAG21/Techniques/failures/F4), [F47](https://www.w3.org/WAI/WCAG21/Techniques/failures/F47). Failures have been classified as obsolete by the AG working group.

### Glossary

#### Accessible and operable by keyboard and any pointing device

The glossary entry [Accessible and operable by keyboard and any pointing device](glossaire.html#accessible-and-operable-by-keyboard-and-any-pointing-device) has been modified so that keyboard use is not restricted to the <KBD>Enter</KBD> key. 

##### In RAWeb1

<blockquote>

A user interface component (link, button, etc.) can be activated from the keyboard and by any pointing device when the user can initiate the action provided for by the interface component by pressing either the pointer or the enter key on the keyboard.

</blockquote>

##### In RAWeb1.1

<blockquote>

A user interface component (link, button, etc.) can be activated from the keyboard and by any pointing device when the user can  trigger the action intended by the interface component by pressing either the pointer or the default key(s) in the user agents (e.g. <kbd>Enter</kbd>, <kbd>Space</kbd>);

</blockquote>

#### Accessible name (of a link) 

The glossary entry [Accessible name (of a link)](glossaire.html#accessible-name-of-a-link) has been modified. The 5 notes have been removed.

Note 1 has been deleted, as it is already covered by [test 6.1.5](/en/raweb1.1/criteres#test-6-1-5).

For the record, note 1 in RAWeb1: 

<blockquote>

Note 1: the accessible name of a link will be considered as non-explicit if it does not include the [visible label](glossaire.html#visible-label) of the link.

</blockquote>

Note 2 has been removed, as restitution tests on the testing environment show that the case described therein is no longer valid today. Except in very specific configuration cases, the content of `title` is never restituted in place of the accessible name. Thus, a `title` that does not include the accessible name can no longer constitute non-compliance with RAWeb.

For the record, note 2 in RAWeb1: 

<blockquote>

Note 2: due to the possible configuration of assistive technologies allowing the "accessible name" derived from the value of the `title` attribute to be forced to the detriment of the "accessible name" derived from the content of the link. The accessible name of a link will be considered as non-explicit if the link has a `title` attribute whose value does not include at least the "accessible name" taken from the content of the link.

</blockquote>

Note 3 has been deleted and incorporated as a new test: [test 6.1.6](/en/raweb1.1/criteres#test-6-1-6).

For the record, note 3 in RAWeb1: 

<blockquote>

Note 3: In the case of several links with different destinations whose "accessible name" is identical. The accessible name of a link alone will be considered non-explicit if the link context does not allow them to be differentiated.

</blockquote>

Note 4 has been removed, as the absence of content in a link is not a valid reason for non-compliance. 
Criterion 6.2 requires the presence of an accessible name. Invalidating criterion 10.2 on the basis of a lack of content in a link is not based on any WCAG technique.

For the record, note 4 in RAWeb1: 

<blockquote>

Note 4: when a link contains no content, it will be non-compliant with regard to criterion 10.2 and criterion 6.2.

</blockquote>

Note 5 has been deleted because WCAG failure [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87) has been rendered obsolete. 

For the record, note 5 in RAWeb1: 

<blockquote>

Note 5: Although the calculation of the accessible name of a link takes into account text content generated in CSS via the `::before` and `::after` pseudo-elements, this practice must not be used, as it constitutes non-compliance with WCAG 2.1 criterion 1.3.1 (see F87).

</blockquote>

#### Accessible version (for a downloadable document)

The glossary entry [Accessible version (for a downloadable document)](glossaire.html#accessible-version-for-a-downloadable-document) has been modified to replace the reference to Open Office Org (ODF) with LibreOffice.

#### Column or row header

The glossary entry [Column or row header](glossaire.html#column-or-row-header) has been modified to take into account the [change in criterion 5.7](/en/raweb1.1/criteres#crit-5-7) regarding the support of column groups and row groups.

In RAWeb1.1, the concept of a group has been added to the sentence:

<blockquote>

Content of a cell in a data table (usually the first cell in a column or row) which serves as the heading for all or some of the cells in the column **(or group of columns)** or row **(or group of rows)**. 

</blockquote>

#### Computed role - creation

Creation of the glossary entry [computed role](glossaire.html#computed-role) to support the [modification of criterion 9.2](#9.2) and the [modification of criterion 12.6](#12.6). 

####  Complex data table

The glossary entry [Complex data table](glossaire.html#complex-data-table) has been modified to better define what a complex table is. In the old definition, if a header row was not positioned as the first row of the table, the table was considered complex, even though it was still a simple table. The definition has been revised to better reflect what a complex table is.

##### In RAWeb1

The following sentence has been modified: 

<blockquote>

When a data table contains headers that are not distributed solely over the first row and/or column of the grid, or whose scope does not apply to the entire column or row, it is referred to as a complex data table.

</blockquote>

##### In RAWeb1.1 

<blockquote>

When a data table contains headers that span multiple rows and/or columns of the grid, or whose scope is not valid for the entire column or row, it is referred to as a complex data table.

</blockquote>

#### Control (moving or blinking content)

The glossary entry [Control (moving or blinking content)](glossaire.html#control-moving-or-blinking-content) has been modified to:
- move note 3 as a special case of [criterion 13.8](/en/raweb1.1/criteres#crit-13-8);
- revise note 2 describing a example of non-compliance to make it more explicit.

##### In RAWeb1

<blockquote>

Note 2: The control (moving or blinking content) method must allow the user to interact with the rest of the page. Consequently, stopping or pausing via an event triggered only when focused does not validate the criterion.

</blockquote>

##### In RAWeb1.1

<blockquote>

The method used to control moving or blinking content must allow the user to interact with the rest of the page.

Therefore, the fact that the animation stops when the user moves the mouse pointer or the keyboard focus to the underlying component (and resumes as soon as the user moves the mouse pointer or the keyboard focus elsewhere on the page) would not be considered a ‘mechanism for controlling moving or flashing content’, as the page would become unusable during that time.

Consequently, stopping or pausing via an event triggered only on focus or mouseover does not satisfy the criterion.

</blockquote>

##### Note 3

For the record, note 3 in RAWeb1

<blockquote>

Note 3: In some cases, movement is an integral part of the component and it is not possible to give the user control of it, for example a progress bar whose function is to indicate the progress of an event such as a download by movement. In this case the criterion is Not Applicable.

</blockquote>

#### Cryptic content - creation

Creation of the glossary entry [Cryptic content](glossaire.html#cryptic-content).

#### Data type and format - deletion

The glossary entry *Data type and format* has been deleted, as it did not provide any additional information compared to the entry [Indication of data type and/or format](glossaire.html#indication-of-data-type-and/or-format) and was not referenced in the technical framework. The information has been merged into the entry [Indication of data type and/or format](glossaire.html#indication-of-data-type-and/or-format).

For the record, in RAWeb1: 

<blockquote>

Indication of the data type and format expected when entering a form input field. For example

Date (dd/mm/yyyy);
Amount in euros;
Postcode (5 digits: e.g. 75001).

Important note: when the type of form input field offers an input mask, for example the `date` or `time` fields, the format indication is not necessary.

</blockquote>

#### Detailed description (image)

Note 2 has been deleted as it is obsolete.

For the record, note 2 in RAWeb1: 

<blockquote>

Note 2: To ensure maximum compatibility with user agents, particularly Internet Explorer 11, it is recommended to implement a `tabindex="-1"` on tags which contain a passage of text and which are not interactive elements (buttons, links, form elements, etc.).

</blockquote>

#### Document - creation

Creation of the glossary entry [Document](glossaire.html#document).

#### Form

The glossary entry [Form](glossaire.html#form) has been modified so that the evaluation of certain criteria in the Forms theme is not restricted to `<form>` tags or tags with a WAI-ARIA `role="form"` attribute.

##### In RAWeb1 

<blockquote>

 `<form>` tag or tag with a WAI-ARIA `role="form"` attribute.

</blockquote>

##### In RAWeb1.1 

<blockquote>

A form does not necessarily have to be wrapped in a `<form>` tag or a tag with a WAI-ARIA `role="form"` attribute.

</blockquote>

#### Form field label

The glossary entry [Form field label](glossaire.html#form-field-label) is modified to remove the obsolete note concerning Internet Explorer.

<blockquote>

To ensure maximum compatibility with user agents, in particular Internet Explorer 11, we recommend implementing a tabindex="-1" on passages of text that are not interactive elements (buttons, links, form elements, etc.).

</blockquote>

#### Hidden content

The `inert` property has been added to the list of properties that hide content from assistive technologies in the glossary note [Hidden content](glossaire.html#hidden-content).

#### Identical link - creation

Creation of the glossary entry [Identical link](glossaire.html#identical-link) to provide documentation for the new [test 6.1.6](/en/raweb1.1/criteres#test-6-1-6).

#### Indication of data type and/or format

The glossary entry [Indication of data type and/or format](glossaire.html#indication-of-data-type-and/or-format) has been modified: 
- to merge elements present in a redundant glossary entry *Data type and format*, which has therefore been deleted;
- to remove the reference to mandatory fields only, since input formats may be expected on fields that are not mandatory.

##### In RAWeb1 

<blockquote>

Text indication enabling the user to know what type of data and/or input format is required for a mandatory field, before filling it in.

Examples

- Email (format: you@domain.com);
- Postcode (format: 00000);
- Date (format: DD/MM/YYYY).

</blockquote>

##### In RAWeb1.1 

<blockquote>

Text indication enabling the user to know what type of data and/or input format is required.

Examples

- Email (format: you@domain.com);
- Postcode (format: 00000);
- Date (format: DD/MM/YYYY).
- Amount in euros.

Important note: when the type of form input field offers an input mask, for example the `date` or `time` fields, the format indication is not necessary.

</blockquote>

#### Landmarks

The glossary entry [Landmarks](#landmarks) has been modified to take into account [the modification of criterion 9.2](#9.2) and [the modification of criterion 12.6](#12.6).

##### In RAWeb1 

<blockquote>

WAI-ARIA provides roles for indicating the main areas (regions) of the document. These roles are very useful for screen reader users in particular, but also for keyboard navigation users who can benefit from quick navigation functions in the document structure.

The roles must be defined in the document according to the nature of the zone:

- The header region must have a WAI-ARIA `role="banner"` attribute;
- The main navigation menu must have a WAI-ARIA `role="navigation"` attribute;
- The main content region must have a WAI-ARIA `role="main"` attribute;
- The footer region must have a WAI-ARIA `role="contentinfo"` attribute;
- The search engine area on the website must have a WAI-ARIA `role="search"` attribute.

Note 1: While most screen readers provide these functions, browsers have yet to offer a dedicated navigation function for users who cannot use the mouse. The implementation of skip links therefore remains to be favored over landmarks.

Note 2: The WAI-ARIA `banner`, `main` and `contentinfo` roles must be unique in the page. The WAI-ARIA `navigation` role is reserved for main and secondary navigation zones. When there are several WAI-ARIA `navigation` roles, it may be useful to differentiate them by specifying a name for each of the zones using the WAI-ARIA `aria-label` or `aria-labelledby` attribute.

</blockquote>

##### In RAWeb1.1 

<blockquote>

WAI-ARIA provides roles that enable navigation landmarks to be identified. These roles are very useful for screen reader users in particular, but also for keyboard navigation users who can benefit from quick navigation functions.

Roles must be defined in the document according to the nature of the region (using the WAI-ARIA `role` attribute or an HTML tag with an implicit role). WAI-ARIA designates eight landmarks.

Five landmarks are used in the document structure (criterion 9.2): 
- `banner`
- `contentinfo`
- `main`
- `navigation`
- `search`

Three landmarks are available to identify other regions: 
- `form` (`<form>` or `role="form"`)
- `complementary` (`<aside>` or `role="complementary"`)
- `region` (`role="region"`).

`form` and `region` landmarks are only identified as navigation landmarks if they have an accessible name.

See the Landmark Roles section in the documentation.

Note 1: Given the variable support for the `form`, `complementary` and `region` landmarks, if they are used on the page as navigation landmarks, they must be tested for navigation and rendering in the test environment.

Note 2: It is not mandatory to identify navigation landmarks other than those required by criterion 9.2 if the context does not require it. For example, it is not mandatory to identify all forms with a `form` element, but only if a more or less complex navigation context (e.g. application) would require more navigation landmarks than already required by criterion 9.2.

</blockquote>

#### Link whose nature is not obvious 

The example in the glossary entry [Link whose nature is not obvious](glossaire.html#link-whose-nature-is-not-obvious) has been modified.

##### In RAWeb1 

<blockquote>

For example, in this text "New strike at SNCF", if the word "strike" is a link indicated by colour only, its nature may be ignored by non-colour-perceptive users accessing the activated CSS content.

</blockquote>

##### In RAWeb1.1 

<blockquote>

For example, in this text "New summer timetable", if the word "timetable" is a link indicated by colour only, its nature may be ignored by users who cannot perceive colour and are accessing the content with CSS enabled.

</blockquote>

#### Mandatory field indication

The glossary entry [Mandatory field indication](glossaire.html#mandatory-or-optional-field-indication) has been renamed and modified to accompany the introduction of optional fields in the tests for [criterion 11.10](/en/raweb1.1/criteres#crit-11-10). 

##### In RAWeb1 

<blockquote>

Mandatory field indication

Textual or graphic indication (icon) letting the user know that a field is mandatory before entering it.

Note: If this indication is not made explicitly in text (icon, "*", "!", etc.), the explanation of the meaning of this indication must be located, visually and in the order of the source code, before the indication is used for the first

</blockquote>

##### In RAWeb1.1 

<blockquote>

Indication of mandatory or optional fields

Text or graphic indication (icon) letting the user know whether a field is mandatory or optional before entering data.

Note: If this indication is not made explicitly in text (icon, "*", "!", etc.), the explanation of the meaning of this indication must be located, visually and in the order of the source code, before the indication is used for the first time.

</blockquote>

#### Passage of text linked by `aria-labelledby` or `aria-describedby`

The glossary entry [Passage of text linked by `aria-labelledby` or `aria-describedby`](glossaire.html#passage-of-text-linked-by-aria-labelledby-or-aria-describedby) has been modified to remove the obsolete note concerning Internet Explorer.

<blockquote>

Note 1: to ensure maximum compatibility with user agents, in particular Internet Explorer 11, we recommend implementing a `tabindex="-1"` on passages of text which are not interactive elements (buttons, links, form elements, etc.).

</blockquote>

#### Presentation of information

The glossary entry [Presentation of information](glossaire.html#presentation-of-information) has been modified to provide documentation for exceptions to the prohibition of `width` attributes for `<iframe>`, `<source>` and `<svg>` children.

##### In RAWeb1 

<blockquote>

The `width` and `height` attributes used on elements other than the `<img>`, `<object>`, `<embed>`, `<canvas>` and `<svg>` elements are also prohibited;

</blockquote>

##### In RAWeb1.1 

<blockquote>

The `width` and `height` attributes are prohibited except on `<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<object>`, `<source>` elements, as well as `<svg>` and its children;

</blockquote>

#### Synchronised audio description (time-based media)

Note 2 of the glossary entry [Synchronised audio description (time-based media)](glossaire.html#synchronised-audio-description-time-based-media) has been modified to remove the reference to the glossary entry "extended audio description", which does not exist in RAWeb (definition associated with a triple A level criterion not present in the RAWeb).

Note 2 in the RAWeb1:

<blockquote>

 Note 2: In standard audio description, narration is added during pauses in the dialogue (see also extended audio description). 

</blockquote>

Note 2 in RAWeb1.1: 

<blockquote>

 Note 2: In standard audio description, narration is added during pauses in the dialogue.

</blockquote>

#### Text alternative (image)

The glossary entry [Text alternative (image)](glossaire.html#text-alternative-image) has been modified to: 
- take into account the evolution of support for the `<title>` element for the `<svg>` element in the computation of the accessible name; 
- take into account the support of accessible name computation by assistive technologies.

##### 1 

The `<title>` element is added to the end of the list of elements taken into account for the accessible name. 

<blockquote>

Otherwise, the value of the `<title>` element for the `<svg>` element.

</blockquote>

##### 2

Note 4 is modified to remove the reference to the `<title>` element.

Note 4 in RAWeb1:

<blockquote>

Note 4: for vector images (`<svg>` tag) the text alternative could also be present in a `<title>` or in a `<text>` tag whether or not the latter tag is visible, even if this is not the role assigned to this element in SVG.

</blockquote>

Note 4 in RAWeb1.1: 

<blockquote>

Note 4: for vector images (`<svg>` tag) the text alternative could also be present in a `<text>` tag, whether or not this tag is visible, even if this is not the role assigned to this element in SVG.

</blockquote>

##### 3

Note 5 is deleted (and note 6 becomes note 5)

Note 5 in RAWeb1:

<blockquote>

Note 5: As the use of the `alt` attribute is the only technique fully supported by assistive technologies, it is recommended that this solution be preferred when implementing an alternative to an `<img>`, `<area>` and `<input type="image">` tag.

</blockquote>

#### Time-based media (audio, video and synchronised)

The glossary entry [Time-based media (audio, video and synchronised)](glossaire.html#time-based-media-audio-video-and-synchronised) has been modified to remove the obsolete note concerning Internet Explorer.

<blockquote>

Note 2: The `<bgsound>` element is specific to Internet Explorer and should not be used.

</blockquote>

#### Visible content

The glossary entry [Visible content](glossaire.html#visible-content) has been modified to accompany the revision of [criterion 10.2](/en/raweb1.1/criteres#crit-10-2), carried out to facilitate understanding of the scope of the criterion.

##### In RAWeb1

<blockquote>

For [test 10.2.1](/en/raweb1.1/criteres#test-10-2-1): "Present content" means that visible content remains present when CSS is deactivated. For example, an image conveying information as a CSS background property invalidates this test because the information is no longer "present" when CSS is deactivated. On the other hand, an image conveying information as a CSS background property but accompanied by hidden text validates this test because the information is indeed "present" when CSS is deactivated.

Note: the practice of managing images as background properties of elements via CSS is formally not recommended, even if accompanied by hidden text.

</blockquote>

##### In RAWeb1.1

<blockquote>

Content is visible when it is shown on the web page, either when the page loads or after an interface component is activated (e.g., displaying a modal window or submenu).

Test 10.2.1 requires that visible content be accessible to assistive technologies. This means that any visible content that is implemented using a method that does not natively provide an alternative should be accompanied by a secondary method to provide that alternative. For example, an image conveying information in CSS background property on an element that contains visually hidden text passes this test because the information is accessible to assistive technologies. Without this hidden text, the test fails.

</blockquote>

#### When focused

The glossary entry [When focused](glossaire.html#when-focused) has been modified to: 
- remove the reference to `accesskey`; 
- explicitly specify that the associated criterion ([criterion 10.7](/en/raweb1.1/criteres#crit-10-7)) only concerns keyboard focus. 

Addition of a sentence:

<blockquote>

Criterion 10.7 only concerns keyboard focus (tabulation, shift + tabulation, keyboard shortcut).

</blockquote>
