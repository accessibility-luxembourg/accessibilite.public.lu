---
title: RAWeb 1 Revision Notes
---

RAWeb 1 is the first Luxembourg accessibility framework which covers all the requirements of the European standard EN 301 549 v3.2.1 currently in force.

For all WCAG compatible criteria, RAWeb 1 is based on RGAA 4.1.2. The RGAA is published by DINUM on the site [accessibilite.numerique.gouv.fr](https://accessibilite.numerique.gouv.fr/) and the sources are available on this <a href="https://github .com/DISIC/accessibilite.numerique.gouv.fr/" rel="noreferrer noopener">GitHub repository</a>.
RGAA 4.1.2 has its own [revision notes](../../fr/rgaa4.1.2/notes-revision.html).

All other criteria are new and transcribe in the form of operational tests the criteria from the European standard EN 301 549 v3.2.1 which are not based on WCAG.
These are the following criteria and themes:
- [Criterion 4.14: For each time-based media that has a synchronized caption track or audio description, are the control features of these alternatives presented at the same level as the main features?](criteres.html#crit-4-14)
- [Criterion 4.15: For each feature that transmits, converts or records pre-recorded synchronized time-based media that has a caption track, at the end of the process, are the captions properly preserved?](criteres.html#crit-4-15)
- [Criterion 4.16: For each feature that transmits, converts or records pre-recorded time-based media with synchronized audio description, at the end of the process, is the audio description correctly preserved?](criteres.html#crit-4 -16)
- [Criterion 4.17: For each pre-recorded time-based media, is the presentation of subtitles controllable by the user (except in special cases)?](criteres.html#crit-4-17)
- [Criterion 4.18: For each pre-recorded synchronized time-based media that has synchronized translation subtitles, can these be vocalized (except in special cases)?](criteres.html#crit-4-18)
- [Criterion 13.13: For each conversion functionality of a document, is the accessibility information available in the source document preserved in the destination document (except in special cases)?](criteres.html#crit- 13-13)
- [Criterion 13.14: Does each identification or control functionality that relies on the use of biological characteristics of the user have an alternative method?](criteres.html#crit-13-14)
- [Theme 14: Documentation and accessibility features](criteres.html#topic-14)
- [Theme 15: Editing tools](criteres.html#topic-15)
- [Theme 16: Support services](criteres.html#topic-16)
- [Theme 17: Real-time communication](criteres.html#topic-17)

Glossary entries matching these new criteria have been added:
- [Help in creating accessible content](glossaire.html#help-a-la-creation-de-contenus-accessibles)
- [Bidirectional oral communication web application](glossaire.html#bidirectional-oral-communication-web-application)
- [Biological characteristic](glossaire.html#biological-characteristic)
- [Essential characteristics of subtitles](glossaire.html#essential-characteristics-of-subtitles)
- [Written communication in real time](glossaire.html#written-communication-in-real-time)
- [Documentation](glossaire.html#documentation)
- [Accessibility feature](glossaire.html#accessibility-feature)
- [Main functionalities (of a temporal media)](glossaire.html#main functionalities-of-a-temporal-media)
- [Voice features](glossaire.html#voice-features)
- [Template](glossaire.html#template)
- [Time stamp (<em lang="en">time stamp</em>)](glossaire.html#horodatage-time-stamp)
- [Accessibility information](glossaire.html#accessibility-information)
- [Mechanism that allows you to activate an accessibility feature](glossaire.html#mechanism-that-allows-you-to-activate-an-accessibility-feature)
- [Editing tool](glossaire.html#editing-tool)
- [QVGA](glossaire.html#qvga)
- [Digital accessibility rules](glossaire.html#digital-accessibility-rules)
- [Helpdesk](glossaire.html#helpdesk)
- [Relay service](glossaire.html#relay-service)
- [Translation subtitles](glossaire.html#translation-subtitles)
- [Transformation](glossaire.html#transformation)
- [Input unit](glossaire.html#input-unit)

### Developments in content from RGAA 4.1.2

This update is also accompanied by changes to the content resulting from RGAA 4.1.2.

#### Introduction of the principle of non-interference

A new section [&ldquo;Principle of non-interference&rdquo;&raquo;](../obligations.html#principle-of-non-interference) has been introduced in the &ldquo;Obligations&nbsp;&raquo; in order to fully comply with the EN 301 549 standard.

In addition, each criterion included in the principle of non-interference is identified in the technical reference system by the words &ldquo;This criterion is subject to the principle of non-interference&rdquo;.

#### Changing the sample description for a website audit

The section [&laquo;&nbsp;Sample for the audit of a website&nbsp;&raquo;](../obligations.html#Sample-for-the-audit-of-a-website) of the page &laquo ;&nbsp;Bonds&nbsp;&raquo; has been modified to take into account developments in the RAWeb criteria, in particular by introducing the obligation to evaluate the documentation of the website or help desk.

#### Details regarding the compliance rate and general methodology

In the [&laquo;Test of pages or screens&raquo;](../obligations.html#test-of-pages-or-screens) section of the &ldquo;Obligations&nbsp;&raquo; page, a note is added on the possible methods of managing content common to several pages of a sample:

<blockquote>
Certain criteria or themes are applicable to the entire site and not to a particular page, so it is not necessary to evaluate them on all the pages in the sample. In this case, they can for example be evaluated on a single page of the sample and be considered not applicable on all other pages. This methodology for reporting the results of the evaluation of these criteria is of course optional. Regardless of the methodology chosen, there will be no impact on the overall compliance rate of the site. This is particularly the case for the following criteria and themes:

- Criterion 12.3 “Is the “site map” page relevant? »
- The theme “14. Documentation and accessibility features”
- The theme “16. Support services”
</blockquote>

In the section [&laquo;Rate of compliance with the standard&raquo;](../obligations.html#rate-of-compliance-with-the-standard) of the page &ldquo;Obligations&nbsp;&raquo;, any reference to the &ldquo;average rate&rdquo; is deleted to refer only to the &ldquo;global rate&rdquo; as a reference rate, in particular for establishing the accessibility declaration.

#### Changing the Computer test environment

The [Computer test environment](environment.html) has been modified in order to comply with the evolution of browsers:
- Internet Explorer has been removed, its support is no longer provided by Microsoft since 2022.
- Chrome and Edge have been added. Edge now replaces Internet Explorer on Microsoft Windows; what's more, it has the same engine as Chrome.

These choices are also supported by usage data, in particular:
- the [WebAIM 2023](https://webaim.org/projects/screenreadersurvey9/#browsercombos) survey which identifies Chrome and Edge as the browsers most used by blind or visually impaired people;
- the 2023 evaluation of [browser market shares in Luxembourg by Statcounter GlobalStats](https://gs.statcounter.com/browser-market-share/all/luxembourg/2023).

Thus, there is only one Computer test environment with 3 combinations.

#### Removal of WCAG criterion from syntactic analysis

The WCAG Working Group released an <a href="https://www.w3.org/TR/WCAG21/#parsing">update to WCAG 2.1 on September 21, 2023</a> stating that the <a href="https://www.w3.org/TR/WCAG21/#parsing">success criterion 4.1.1 <em lng="en">Parsing</em></a> should henceforth always be considered as compliant.

As RAWeb is a transposition of WCAG 2.1, this choice is applied to the corresponding criteria in RAWeb. Thus, the RAWeb criteria [8.1](criteres.html#crit-8-1) and [8.2](criteres.html#crit-8-2) are no longer to be tested and must always be considered compliant.

The criteria are kept in the repository (to preserve the numbering of the criteria for the theme “Mandatory elements”) and are accompanied by a note.

#### Removed references to the `longdesc` attribute

The `longdesc` attribute as a compliant method for criteria 1.6 and 1.7 is removed. Indeed, the `longdesc` attribute has been declared obsolete in the HTML5 specification. In addition, the support for the attribute is insufficient with regard to the test environment; we note in particular an absence of support in a mobile environment (Safari/iOS and Chrome/Talkback).

In test [1.6.1](criteres.html#test-1-6-1), the following condition is removed: <q>There is a `longdesc` attribute which gives the address (URL) of a page or a location in the page containing the [detailed description](glossaire.html#description-detailee-image)</q>. The test methodology is adapted accordingly.

In the technical note for criterion [1.6](criteres.html#crit-1-6), the passage concerning the `longdesc` attribute is deleted:
<blockquote>
The <code>longdesc</code> attribute which constitutes one of the conditions of test 1.6.1 (and whose relevance is checked with test 1.7.1) is now considered obsolete by the current HTML specification. Verification of this attribute will therefore only be required for versions of the HTML specification prior to HTML 5.
</blockquote>

In test [1.7.1](criteres.html#test-1-7-1), the following condition is removed: <q>The [detailed description](glossaire.html#description-detailee-image) via the address referenced in the `longdesc` attribute is relevant</q>. The test methodology is adapted accordingly.

In the glossary, the entry &laquo;&nbsp;[Detailed description (image)](glossaire.html#detail-description-image)&raquo; is modified. The item <q>A `longdesc` attribute which contains the address of a page or a location in the page containing the detailed description</q> is deleted.

#### Modification of test 4.4.1

The test [4.4.1](criteres.html#test-4-4-1) has been rewritten to clarify the test elements, considered too implicit.

Test 4.4.1 in RGAA 4.1.2:

<blockquote>Test 4.4.1: For each pre-recorded synchronized time-based media that has synchronized subtitles, are those subtitles relevant?</blockquote>

It was rewritten in RAWeb 1 to introduce 3 test conditions to check:

<blockquote>

- Subtitles are in the language of the video;
- Subtitles are relevant;
- Subtitles are correctly synchronized.

</blockquote>

### Removed references to obsolete technologies

In the criteria, glossary and methodologies, references to Flash, Silverlight and Java are deleted due to the disappearance of these technologies.

The impacted repository elements are as follows:

- The methodology of criterion [4.7](criteres.html#crit-4-7): removal of the test <q>the passage of text is located outside the multimedia content player if the latter uses Flash technology </q>.
- The glossary entry &ldquo;Controlled environment&rdquo; : references to Flash and Silverlight are deleted in the second list item <q>Supported technologies, their version and their activation (JavaScript, WAI-ARIA, Flash, Silverlight, etc.)</q>.
- The glossary entry &ldquo;Non-temporal media&rdquo; : all references to Flash, Java and Silverlight as well as their properties are removed.
- The glossary entry &ldquo;Time-based media (sound, video and synchronized type)&rdquo; : all references to Flash and its properties are removed. Note 1 is deleted: note 2 becomes note 1, and note 3 becomes note 2.

#### Added new bindings to WCAG techniques and failures

New WCAG techniques and failures are added in accordance with certain RAWeb criteria.

- Criterion [3.1](criteres.html#crit-3-1): [F13](https://www.w3.org/WAI/WCAG21/Techniques/failures/F13)
- Criterion [3.2](criteres.html#crit-3-2): [F83](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- Criterion [3.3](criteres.html#crit-3-3): [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136), [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209)
- Criterion [6.1](criteres.html#crit-6-1): [C7](https://www.w3.org/WAI/WCAG21/Techniques/css/C7), [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211), [H33](https://www.w3.org/WAI/WCAG21/Techniques/html/H33), [H77](https://www.w3.org/WAI/WCAG21/Techniques/html/H77)
- Criterion [7.1](criteres.html#crit-7-1): [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criterion [7.5](criteres.html#crit-7-5): [F103](https://www.w3.org/WAI/WCAG21/Techniques/failures/F103)
- Criterion [8.6](criteres.html#crit-8-6): [F25](https://www.w3.org/WAI/WCAG21/Techniques/failures/F25)
- Criterion [9.2](criteres.html#crit-9-2): [H97](https://www.w3.org/WAI/WCAG21/Techniques/html/H97), [H101](https://www.w3.org/WAI/WCAG21/Techniques/html/H101)
- Criterion [10.4](criteres.html#crit-10-4): [F94](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94), [G142](https://www.w3.org/WAI/WCAG21/Techniques/general/G142), [G178](https://www.w3.org/WAI/WCAG21/Techniques/general/G178)
- Criterion [10.7](criteres.html#crit-10-7): [C40](https://www.w3.org/WAI/WCAG21/Techniques/css/C40).
- Criterion [10.11](criteres.html#crit-10-11): [C31](https://www.w3.org/WAI/WCAG21/Techniques/css/C31), [C32](https://www.w3.org/WAI/WCAG21/Techniques/css/C32), [C33](https://www.w3.org/WAI/WCAG21/Techniques/css/C33), [C38](https://www.w3.org/WAI/WCAG21/Techniques/css/C38), [F102](https://www.w3.org/WAI/WCAG21/Techniques/failures/F102), [G206](https://www.w3.org/WAI/WCAG21/Techniques/general/G206)
- Criterion [10.12](criteres.html#crit-10-12): [F104](https://www.w3.org/WAI/WCAG21/Techniques/failures/F104)
- Criterion [10.13](criteres.html#crit-10-13): [SCR39](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR39)
- Criterion [11.1](criteres.html#crit-11-1): [G167](https://www.w3.org/WAI/WCAG21/Techniques/general/G167)
- Criterion [11.2](criteres.html#crit-11-2): [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criterion [11.9](criteres.html#crit-11-9): [F96](https://www.w3.org/WAI/WCAG21/Techniques/failures/F96), [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211)
- Criterion [11.10](criteres.html#crit-11-10): [G139](https://www.w3.org/WAI/WCAG21/Techniques/general/G139)
- Criterion [11.13](criteres.html#crit-11-13): [F107](https://www.w3.org/WAI/WCAG21/Techniques/failures/F107)
- Criterion [12.1](criteres.html#crit-12-1): [G185](https://www.w3.org/WAI/WCAG21/Techniques/general/G185)
- Criterion [13.9](criteres.html#crit-13-9): [F97](https://www.w3.org/WAI/WCAG21/Techniques/failures/F97), [F100](https://www.w3.org/WAI/WCAG21/Techniques/failures/F100), [G214](https://www.w3.org/WAI/WCAG21/Techniques/general/G214)
- Criterion [13.10](criteres.html#crit-13-10): [F105](https://www.w3.org/WAI/WCAG21/Techniques/failures/F105)
- Criterion [13.11](criteres.html#crit-13-11): [F101](https://www.w3.org/WAI/WCAG21/Techniques/failures/F101), [G210](https://www.w3.org/WAI/WCAG21/Techniques/general/G210), [G212](https://www.w3.org/WAI/WCAG21/Techniques/general/G212)
- Criterion [13.12](criteres.html#crit-13-12): [F106](https://www.w3.org/WAI/WCAG21/Techniques/failures/F106), [G213](https://www.w3.org/WAI/WCAG21/Techniques/general/G213)

Other techniques and failures have been removed.
- Criterion [1.2](criteres.html#crit-1-2): removal of the link [ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10).
- Criterion [1.6](criteres.html#crit-1-6): removal of the link [H45](https://www.w3.org/WAI/WCAG21/Techniques/html/H45).
- Criterion [4.8](criteres.html#crit-4-8): removal of the link [H35](https://www.w3.org/WAI/WCAG21/Techniques/html/H35).
- Criterion [8.1](criteres.html#crit-8-1): removal of links [G134](https://www.w3.org/WAI/WCAG21/Techniques/general/G134), [G192](https://www.w3.org/WAI/WCAG21/Techniques/general/G192).
- Criterion [8.2](criteres.html#crit-8-2): removal of links [F70](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70), [F77](https://www.w3.org/WAI/WCAG21/Techniques/failures/F77), [H74](https://www.w3.org/WAI/WCAG21/Techniques/html/H74), [H93](https://www.w3.org/WAI/WCAG21/Techniques/html/H93), [H94](https://www.w3.org/WAI/WCAG21/Techniques/html/H94).
