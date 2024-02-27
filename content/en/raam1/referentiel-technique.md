**Warning:** For each criterion of the framework, an evaluation methodology is proposed. However, this methodology has no normative value, that is to say it is only provided as an aid in getting started with the framework, by giving an example of a possible method evaluation but there may be other evaluation methods. Furthermore, the content of this methodology as well as these steps cannot constitute an enforceable basis in the event of a dispute. Finally, it is possible that errors are not detected based on this methodology alone. Only the content of the criterion and the tests have normative value.

**Note regarding [web views](glossary.md#web-views):** in applications, some screens (or all screens) are embedded web pages, also called [web views](glossary. md#web-views) or web views. If the content of these web views is the responsibility of the application publisher, then they must comply with this standard in the same way as the other screens of the application developed in a language specific to mobile applications. If these web views are not under the responsibility of the publisher, their content may be waived. However, depending on the importance of the content to users, an alternative or means of compensation may be required.

### [Theme 1](#topic-1): Graphic elements {id="topic-1"}

#### [Criterion 1.1](#crit-1-1) [A] Is each [decorative graphic element](glossary.md#decoration-graphic-element) [ignored by assistive technologies ](glossary.md#ignore-by-assistive-technologies)? {id="crit-1-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate the decorative graphic elements on the screen ([see the glossary note concerning the restitution particularities](glossaire.md#graphic-element)).
1. Check:
- that they cannot be reached with the screen reader;
- that their content is not otherwise rendered from another element on the screen.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.2](#crit-1-2) [A] Does each [information-carrying graphic element](glossary.md#information-carrying-graphic-element) have an alternative [accessible to assistive technologies](glossary.md#accessible-to-assistive-technologies)? {id="crit-1-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate on the screen the graphic elements carrying information ([see the glossary note concerning the particularities of restitution](glossaire.md#element-graphique)), for example, an image or an icon.
1. Check:
- that they can be reached with the screen reader;
- or that the information they convey is reproduced from another element on the screen.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.3](#crit-1-3) [A] For each [information-carrying graphic element](glossaire.md#information-carrying-graphic-element), the alternative [accessible to assistive technologies](glossary.md#accessible-to-assistive-technologies) relevant (except in special cases)? {id="crit-1-3"}

##### Special cases

The criterion is not applicable when the graphic element is used as [CAPTCHA](glossary.md#captcha) or as [test graphic element](glossary.md#test-graphic-element). In this situation, where it is not possible to provide a relevant alternative without destroying the purpose of the CAPTCHA or the test, the criterion is not applicable.

Note: the case of CAPTCHAs and test graphic elements is dealt with specifically by [criterion 1.4](#crit-1-4).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate the graphic elements carrying information on the screen ([see the glossary note concerning the particularities of restitution](glossaire.md#element-graphique)).
1. Check:
- that the alternative rendered by the screen reader is relevant;
- or that the information returned from another element on the screen is relevant.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.4](#crit-1-4) [A] For each [graphic element](glossaire.md#element-graphic) used as [CAPTCHA](glossaire.md#captcha) or as [element test graphic](glossary.md#test-graphic-element), does the alternative rendered by the assistive technologies make it possible to identify the nature and function of the graphic element? {id="crit-1-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate on the screen the graphic elements used as CAPTCHA ([see the glossary note concerning the particularities of restitution](glossaire.md#element-graphique)).
1. Check that the alternative rendered by the screen reader makes it possible to understand the function of the graphic element (for example “Secret code to enter”, “Security code”) .
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.5](#crit-1-5) [A] Does each [graphic element](glossaire.md#graphic-element) used as [CAPTCHA](glossaire.md#captcha) have an alternative? {id="crit-1-5"}

**[Test 1.5.1](#test-1-5-1)** Does each graphic element used as a CAPTCHA meet one of these conditions? {id="test-1-5-1"}
- There is another form of non-graphical CAPTCHA, at least;
- There is another solution for accessing the functionality secured by CAPTCHA.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the graphic elements used as CAPTCHA ([see the glossary note concerning the particularities of restitution](glossaire.md#element-graphique)).
1. Check:
- the presence of a non-graphic alternative (audio or logical CAPTCHA);
- or the presence of another solution for accessing the functionality secured by CAPTCHA (sending an SMS code, sending a confirmation email, etc.).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.6](#crit-1-6) [A] Does each [information-carrying graphic element](glossary.md#information-carrying-graphic-element) have, if necessary, a [detailed description](glossaire.md#description-detaillee)? {id="crit-1-6"}

**[Test 1.6.1](#test-1-6-1):** Does each graphic element carrying information that requires a detailed description satisfy one of these conditions? {id="test-1-6-1"}
- From the graphic element, the assistive technologies render or provide access to a detailed description;
- There is a clearly identifiable detailed description adjacent to the graphic element;
- There is a feature that allows access to a detailed description.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the graphic elements carrying information which require a detailed description ([see the glossary note concerning the particularities of restitution](glossary.md#graphic-element)). For example:
- graphic elements for which the alternative to provide is too long (more than one sentence for example) or requires structuring (titles, lists or table);
- graphic elements which combine several issues (information through color, text graphic element, contrasts, etc.) such as graphs or maps.
1. Check:
- the presence of a clearly identifiable detailed description adjacent to the graphic element;
- or the presence of a functionality (a button, a link) allowing access to a detailed description.
1. Otherwise, activate the **screen reader** and navigate to the graphic element.
1. Check that the screen reader renders a detailed description.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.7](#crit-1-7) [A] For each [information-carrying graphic element](glossary.md#information-carrying-graphic-element) having a [detailed description] (glossary.md#detail-description), is this relevant? {id="crit-1-7"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the graphic elements on the screen that have a detailed description.
1. Check that each detailed description is relevant. You must find all the information present in the graphic element and necessary for understanding the content.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 1.8](#crit-1-8) [AA] Each [graphic text element](glossary.md#element-graphic-text) carrying information, in the absence of a [mechanism replacement](glossary.md#replacement-mechanism), must, if possible, be replaced by [styled text](glossary.md#text-style). Is this rule respected (except in special cases)? {id="crit-1-8"}

##### Special cases

The criterion is not applicable for the following elements:
- When the text is part of a logo or an element associated with the graphic identity of an organization or company (a slogan, for example).
- When the text contained in the graphic element is used as [CAPTCHA](glossary.md#captcha) or as [test graphic element](glossary.md#test-graphic-element).
- When the text is part of an element whose graphic accuracy is considered essential to the proper transmission of the information conveyed by the graphic element.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the graphic text elements carrying information ([see the glossary note concerning the particularities of restitution](glossaire.md#element-graphique)):
- Activate the **screen reader**, browse the content and see if the rendered elements &ldquo;graphical element&rdquo; or &ldquo;image&rdquo; contain informative text.
1. Check:
- that there is a mechanism for replacing graphic text elements with editable text according to the user's display preferences (size, color, weight, etc.);
    - or that styles and effects cannot be reproduced via [styled text](glossary.md#style-text).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.5 Text as Image (AA)](https://www.w3.org/Translations/WCAG21-fr/#images-of-text)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.5.1 Images of text.

#### [Criterion 1.9](#crit-1-9) [AA] Is each [captioned graphic element](glossary.md#graphic-element-caption) correctly rendered by assistive technologies? {id="crit-1-9"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Navigate to the captioned graphic elements.
1. Check that the legend of the graphic element is rendered when the focus reaches the graphic element (the graphic element and the legend are contained in a single element accessible by the screen reader).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

### [Theme 2](#topic-2): Colors {id="topic-2"}

#### [Criterion 2.1](#crit-2-1) [A] In each screen, the [information must not be given only by color](glossary.md#information-given-by-the- color). Is this rule respected? {id="crit-2-1"}

**[Test 2.1.1](#test-2-1-1):** In each screen, does each element whose coloring carries information respect at least one of these conditions? ;? {id="test-2-1-1"}
- Information is not given only by color;
- A [replacement mechanism](glossary.md#replacement-mechanism) allows the user to display an alternative to the color.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Activate the **Differentiate without color** option (*Settings > Accessibility > Display and text size > Differentiate without color*).
1. Identify on the screen the words or sets of words, texts, graphic elements carrying information and temporal media whose coloring carries information.
1. Check that there is another visual means of retrieving this information: presence of an icon or a graphic effect of shape or position, a typographic effect, etc.
1. With the **screen reader**, access the information given by color.
1. Check that equivalent information is returned by the screen reader (for example the “selected” state of a green button).
1. If this is the case, the criterion is validated.

###### Android

1. Identify on the screen the words or sets of words, texts, graphic elements carrying information and temporal media whose coloring carries information.
1. Check that there is another visual means of retrieving this information: presence of an icon or a graphic effect of shape or position, a typographic effect, etc.).
1. With the **screen reader**, access the information given by color.
1. Check that equivalent information is returned by the screen reader (for example the “selected” state of a green button).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [1.4.1 Use of color (A) ](https://www.w3.org/TR/WCAG21/#use-of-color)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.1.4.1 Use of color.

#### [Criterion 2.2](#crit-2-2) [AA] In each screen, is the [contrast](glossary.md#contrast) between the color of the text and the color of its background sufficiently high (except in special cases)? {id="crit-2-2"}

**[Test 2.2.1](#test-2-2-1):** For each text, does the contrast between the color of the text and the color of its background respect one of these conditions? {id="test-2-2-1"}
- The contrast ratio between the text and its background is at least 4.5:1 for text in [normal size](glossaire.md#contraste-taille-des-textes) and at least 3:1 for [large text](glossary.md#contraste-taille-des-textes)&nbsp;;
- A [replacement mechanism](glossaire.md#replacement-mechanism) allows the user to display the text in [normal size](glossaire.md#contraste-taille-des-textes) with a ratio of contrast of at least 4.5:1 and [large text](glossaire.md#contraste-taille-des-textes) with a contrast ratio of at least 3:1.

##### Special cases

The criterion is not applicable for the following elements:
- The text is part of a logo or brand name of an organization or company.
- The text or text contained in the graphic element is purely decorative.
- The text is part of a graphic element carrying information, but the text itself does not provide any essential information.
- The text or text contained in the graphic element is part of an interface element on which no action is possible (for example, a disabled button).

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Activate the **Increase contrast** option (*Settings > Accessibility > Display and text size > Increase contrast*) or if present in the application, activate the replacement mechanism to display application with sufficient contrast ratio.
1. Identify texts on the screen, texts contained in graphic elements and texts embedded in videos which could cause contrast problems.
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Check:
- For normal sized texts, the contrast value is 4.5:1, at least;
- For large texts, the contrast value is 3:1 at least.
1. If this is the case, the criterion is validated.

Note: It is possible to use the application **[Accessibility Inspector](methodologie.md#applications-de-tests)** available on macOS to carry out a quick assessment of screen contrasts. The software has an “Audit” functionality. which allows automatic testing of certain text and graphic elements of the screens. This functionality does not detect all contrast defects; additional tests following the methodology described above will be necessary.

###### Android

1. If it exists in the application, activate the replacement mechanism to display the application with a sufficient contrast ratio.
1. Identify texts on the screen, texts contained in graphic elements and texts embedded in videos which could cause contrast problems.
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Check:
- For normal sized texts, the contrast value is 4.5:1, at least;
- For large texts, the contrast value is 3:1 at least.
1. If this is the case, the criterion is validated.

Note: It is possible to use the application **[Accessibility Scanner](methodologie.md#applications-de-tests)** to carry out a quick evaluation of screen contrasts. The application does not detect all contrast defects; additional tests following the methodology described above will be necessary.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.3 Contrast (Minimum), 11.7 User preferences.

#### [Criterion 2.3](#crit-2-3) [AA] In each screen, the colors used in the [interface components](glossary.md#interface-component) and the supporting graphic elements is the information sufficiently contrasted (apart from special cases)? {id="crit-2-3"}

- **[Test 2.3.1](#test-2-3-1):** In each screen, the contrast ratio between the colors of an [interface component](glossary.md#component -d-interface) in its different states and [adjacent colors](glossary.md#adjacent-color) does it satisfy one of these conditions (except in special cases)? {id="test-2-3-1"}
- The contrast ratio is 3:1, at least;
- A [replacement mechanism](glossary.md#replacement-mechanism) allows the interface component to be displayed with a contrast ratio of at least 3:1.
- **[Test 2.3.2](#test-2-3-2):** In each screen, the contrast ratio of each color necessary for understanding a graphic element and the [adjacent colors] (glossary.md#adjacent-color), does it satisfy one of these conditions (except in special cases)? {id="test-2-3-2"}
- The contrast ratio is 3:1, at least;
- A [replacement mechanism](glossary.md#replacement-mechanism) allows a contrast ratio of 3:1, at least.

##### Special cases

The criterion is not applicable for the following elements:
- Inactive interface component (for example, a disabled button) on which no action is possible.
- Interface component managed by the platform and for which there is no simple development method to modify it.
- Interface component whose color is not necessary to identify the component or its state (for example, link underlining which would have a contrast ratio less than 3:1 but whose text has a contrast ratio of 4.5 :1).
- [Graphic element](glossary.md#graphic-element) or parts of graphic element not carrying information or having an alternative, a detailed description, identical information visible on the screen).
- [Graphic element](glossary.md#graphic-element) or parts of a graphic element forming part of a logo or brand name of an organization or company.
- [Graphic element](glossary.md#graphic-element) or parts of a graphic element whose presentation is essential to the information conveyed (for example, flags, logos, photos of people or scenes, screenshots, medical diagrams, heat maps).
- [Graphic element](glossary.md#element-graphic) or parts of dynamic graphic element whose contrast may vary if other elements are hovered over (or receive focus), but whose hover or focus makes it sufficiently contrasted (for example, a pie chart composed of several sufficiently contrasted sections, but when the mouse hovers over a section of the pie chart, the other sections are no longer sufficiently contrasted, their opacity is reduced to highlight the hovered section).

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Activate the **Increase contrast** option (*Settings > Accessibility > Display and text size > Increase contrast*) or if present in the application, activate the replacement mechanism to display graphic elements with a sufficient contrast ratio.
1. Locate the graphic elements carrying information on the screen and for each:
- Identify which color(s) of the component are necessary to identify the location and/or the information conveyed (this can be the border, the color of an icon, the background color); ;
- Identify adjacent colors that have an impact on the visibility of the component color(s).
1. Locate the interactive components on the screen which can have several states (hovered, focused, activated, checked) and for each:
- Identify which color(s) of the component are necessary to identify the location and/or the information conveyed and the state (this can be the border, the color of an icon, the color background) for each of the states;
- Identify adjacent colors that have an impact on the visibility of the component color(s).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast ratio between the identified colors is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the application **[Accessibility Inspector](methodologie.md#applications-de-tests)** available on macOS to carry out a quick assessment of screen contrasts. The software has an “Audit” functionality. which allows automatic testing of certain text and graphic elements of the screens. This functionality does not detect all contrast defects; additional tests following the methodology described above will be necessary.

###### Android

1. If it exists in the application, activate the application's replacement mechanism to display graphic elements with a sufficient contrast ratio.
1. Locate the graphic elements carrying information on the screen and for each:
- Identify which color(s) of the component are necessary to identify the location and/or the information conveyed (this can be the border, the color of an icon, the background color); ;
- Identify adjacent colors that have an impact on the visibility of the component color(s).
1. Locate the interactive components on the screen which can have several states (hovered, focused, activated, checked) and for each:
- Identify which color(s) of the component are necessary to identify the location and/or the information conveyed and the state (this can be the border, the color of an icon, the color background) for each of the states;
- Identify adjacent colors that have an impact on the visibility of the component color(s).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Check that the contrast ratio between the identified colors is at least 3:1.
1. If this is the case, the criterion is validated.

Note: It is possible to use the application **[Accessibility Scanner](methodologie.md#applications-de-tests)** to carry out a quick evaluation of screen contrasts. The application does not detect all contrast defects; additional tests following the methodology described above will be necessary.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.11 Non-text Contrast (AA)](https://www.w3.org/Translations/WCAG21-fr/#non-text-contrast)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.11 Non-text Contrast, 11.7 User preference.

#### [Criterion 2.4](#crit-2-4) [AA] The contrast ratio of each [replacement mechanism that allows the screen to be displayed with a conforming contrast ratio](glossary.md#mechanism (of-the-application-which-allows-to-display-a-compliant-contrast-ratio) high enough? {id="crit-2-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Check that the **Increase contrast** option (*Settings > Accessibility > Display and text size > Increase contrast*) is deactivated.
1. Identify the presence of a replacement mechanism allowing the application to be displayed with a sufficient contrast ratio.
1. Check that it is not activated (i.e. the screen is broadcast with default contrasts).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. If the replacement mechanism is identified by text, capture the foreground and background colors and check:
- For normal sized texts, the contrast value is 4.5:1, at least;
- For texts in enlarged size, the contrast value is at least 3:1.
1. If the replacement mechanism is identified by a non-textual element only (an icon for example):
1. Identify which color(s) of the component are necessary to identify the location and/or information (this can be the border, the color of an icon, the background color); ;
1. Identify adjacent colors that impact color visibility;
1. Check that the contrast ratio between the identified colors is at least 3:1.
1. If this is the case, the criterion is validated.

###### Android

1. Identify the presence of a replacement mechanism allowing the application to be displayed with a sufficient contrast ratio.
1. Check that it is not activated (i.e. the screen is broadcast with default contrasts).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the foreground and background colors on the mobile terminal:
- By [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- By taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. If the replacement mechanism is identified by text, capture the foreground and background colors and check:
- For normal sized texts, the contrast value is 4.5:1, at least;
- For texts in enlarged size, the contrast value is at least 3:1.
1. If the replacement mechanism is identified by a non-textual element only (an icon for example):
1. Identify which color(s) of the component are necessary to identify the location and/or information (this can be the border, the color of an icon, the background color); ;
1. Identify adjacent colors that impact color visibility;
1. Check that the contrast ratio between the identified colors is at least 3:1.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.3 Contrast (minimum) (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum), [1.4.11 Contrast of non-textual content (AA)](https://www.w3.org/Translations/WCAG21-fr/#non-text-contrast)
- EN 301 549 V3.2.1 (2021-03): 5.2 Activation of accessibility features, 11.1.4.3 Contrast (Minimum), 11.1.4.11 Non-text Contrast.

### [Theme 3](#topic-3): Multimedia {id="topic-3"}

#### [Criterion 3.1](#crit-3-1) [A] Each [temporal media](glossary.md#temporal-media-type-sound-video-and-synchronize) pre-recorded audio only has- is there, if necessary, a [textual transcription](glossary.md#transcription-textual-media-temporal) [clearly identifiable adjacent](glossary.md#adjacent-clearly-identifiable) (except in special cases)? {id="crit-3-1"}

##### Special cases

The criterion is not applicable for the following elements:
- The temporal media is used for decorative purposes (i.e. it does not provide any information).
- The temporal media is itself an alternative to screen content (a video in sign language or the vocalization of a text, for example).
- Time media is used to access an enlarged version.
- The temporal media is used as a CAPTCHA.
- The temporal media is part of a test which would become useless if the textual transcription, synchronized subtitles or audio description were communicated.
- The temporal media was published before September 23, 2020 (according to the [law of May 28, 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373 /jo)).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate audio-only time-based media on the screen that require textual transcription.
1. Check:
- The presence of a textual transcription accessible via an adjacent component (a button or a link);
- Or the presence of a clearly identifiable adjacent textual transcription.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.1 Content only audio and only video (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video -only-prerecorded), [1.2.3 Audio description or replacement version for time-based (pre-recorded) media (A)](https://www.w3.org/Translations/WCAG21-fr/#audio- description-or-media-alternative-prerecorded).
- EN 301 549 V3.2.1 (2021-03): 11.1.2.1.1 Audio-only and Video-only (Pre-recorded), 11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded).

#### [Criterion 3.2](#crit-3-2) [A] For each [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) pre-recorded only audio having a [textual transcription](glossary.md#transcription-textual-media-temporal), is this relevant (except in special cases)? {id="crit-3-2"}

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the text transcriptions of audio-only time-based media on the screen.
1. Check that each textual transcription is relevant (all important audio or visual information is present, particularly dialogues and embedded texts).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.1 Content only audio and only video (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video -only-prerecorded)
- EN 301 549 V3.2.1 (2021-03): 11.1.2.1.1 Audio-only and Video-only (Pre-recorded).

#### [Criterion 3.3](#crit-3-3) [A] Each pre-recorded [temporal media](glossary.md#temporal-media-type-sound-video-and-synchronize) only video has- Is there, if necessary, an alternative (except in special cases)? {id="crit-3-3"}

**[Test 3.3.1](#test-3-3-1):** Does each pre-recorded video-only temporal media check, if necessary, one of these conditions (except in special cases )? {id="test-3-3-1"}
- There is a [alternative “audio only” version](glossaire.md#alternative-audio-only-version) [clearly identifiable adjacent](glossaire.md#adjacent-clearly-identifiable);
- There is a [textual transcription](glossary.md#transcription-textual-media-temporal) accessible [adjacent clearly identifiable](glossary.md#adjacent-clearly-identifiable)&nbsp;;
- There is a [synchronized audio description](glossary.md#audiodescription-synchronized-media-temporal)&nbsp;;
- There is an alternative version with a [synchronized audio description](glossaire.md#audiodescription-synchronisee-media-temporal) accessible via an adjacent component (a button or a link).

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate time-based video-only media on the screen that require textual transcription.
1. Check:
- the presence of an alternative audio version only accessible via an adjacent component (a button or a link);
- or the presence of an adjacent audio-only alternative version;
- or the presence of an adjacent textual transcription (a button or link);
- or the presence of a clearly identifiable adjacent textual transcription;
- or the presence of synchronized audio description;
- or the presence of an alternative version with synchronized audio description accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.1 Content only audio and only video (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video -only-prerecorded), [1.2.3 Audio description or replacement version for time-based (pre-recorded) media (A)](https://www.w3.org/Translations/WCAG21-fr/#audio- description-or-media-alternative-prerecorded).
- EN 301 549 V3.2.1 (2021-03): 11.1.2.1.1 Audio-only and Video-only (Pre-recorded), 11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded).

#### [Criterion 3.4](#crit-3-4) [A] For each [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) pre-recorded only video having an alternative, is it relevant (except in special cases)? {id="crit-3-4"}

**[Test 3.4.1](#test-3-4-1):** Does each pre-recorded video-only time-based media meet any of these conditions? {id="test-3-4-1"}
- The [textual transcription](glossary.md#transcription-textual-media-temporal) is relevant;
- The [synchronized audio description](glossaire.md#audiodescription-synchronisee-media-temporal) is relevant and correctly synchronized;
- The [alternative “audio only” version](glossary.md#version-alternative-audio-only) is relevant.

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the time-based video-only media on the screen with an alternative (textual transcription or an audio-only version).
1. If the verbatim transcription is present, check:
- that it is relevant (all the important audio or visual information is present, the dialogues and the embedded texts in particular).
1. If audio description is present, check:
- that it is relevant (all the important visual information is present);
- and that it is correctly synchronized (the audio description soundtrack correctly coincides with the video tape).
1. If an “audio only” version is present, check:
- that it is relevant (all the important audio or visual information is present, the dialogues and the embedded texts in particular).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.1 Content only audio and only video (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video -only-prerecorded), [1.2.3 Audio description or replacement version for time-based (pre-recorded) media (A)](https://www.w3.org/Translations/WCAG21-fr/#audio- description-or-media-alternative-prerecorded).
- EN 301 549 V3.2.1 (2021-03): 11.1.2.1.1 Audio-only and Video-only (Pre-recorded), 11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded).

#### [Criterion 3.5](#crit-3-5) [A] Each pre-recorded synchronized [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) has Is there, if necessary, an alternative (except in special cases)? {id="crit-3-5}

**[Test 3.5.1](#test-3-5-1):** Does each pre-recorded synchronized time media check, if necessary, one of these conditions (except in special cases) &nbsp;? {id="test-3-5-1"}
- There is a [textual transcription](glossary.md#transcription-textual-media-temporal) accessible [clearly identifiable adjacent](glossary.md#adjacent-clearly-identifiable)&nbsp;;
- There is a [synchronized audio description](glossary.md#audiodescription-synchronized-media-temporal)&nbsp;;
- There is an alternative version with a [synchronized audio description](glossaire.md#audiodescription-synchronisee-media-temporal) accessible via an adjacent component (a button or a link).

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate synchronized time-based media on the screen that require verbatim transcription.
1. Check:
- the presence of a clearly identifiable adjacent textual transcription;
- or the presence of a textual transcription accessible via an adjacent component (a button or a link);
- or the presence of synchronized audio description;
- or the presence of an alternative version with synchronized audio description accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.3 Audio description or replacement version for time-based (pre-recorded) media (A)](https://www.w3.org/Translations/WCAG21-fr/#audio- description-or-media-alternative-prerecorded).
- EN 301 549 V3.2.1 (2021-03): 11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded).

#### [Criterion 3.6](#crit-3-6) [A] For each pre-recorded synchronized [temporal media](glossaire.md#temporal-media-type-son-video-et-synchronise) having a alternative, is this relevant (except in special cases)? {id="crit-3-6"}

**[Test 3.6.1](#test-3-6-1):** Does each synchronized pre-recorded time-based media meet one of these conditions? {id="test-3-6-1"}
- The audio description is relevant and correctly synchronized;
- The verbatim transcription is relevant.

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the time-based media synchronized with an audio description or a textual transcription.
1. If audio description is present, check:
- that it is relevant (all the important visual information is present);
- and that it is correctly synchronized (the audio description soundtrack correctly coincides with the video tape).
1. If a verbatim transcription is present, check:
- that it is relevant (all the important audio or visual information is present, the dialogues and the embedded texts in particular).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.3 Audio description or replacement version for time-based (pre-recorded) media (A)](https://www.w3.org/Translations/WCAG21-fr/#audio- description-or-media-alternative-prerecorded).
- EN 301 549 V3.2.1 (2021-03): 7.2.2 Audio description synchronization, 11.1.2.3.1 Audio Description or Media Alternative (Pre-recorded).

#### [Criterion 3.7](#crit-3-7) [A] Each pre-recorded synchronized [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) has if necessary, [synchronized subtitles](glossary.md#sous-titles-synchronises-object-multimedia) (except in special cases)? {id="crit-3-7}

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify synchronized time-based media on the screen that require subtitles (i.e. whose soundtrack provides information, such as a person's speech).
1. Check:
- that there are synchronized subtitles;
- or that there is an alternative version with synchronized subtitles accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.2 Captions (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#captions-prerecorded)
- EN 301 549 V3.2.1 (2021-03): 11.1.2.2 Captions (Prerecorded).

#### [Criterion 3.8](#crit-3-8) [A] For each pre-recorded synchronized [temporal media](glossary.md#temporal-media-type-son-video-et-synchronise) having [synchronized subtitles](glossary.md#sous-titles-synchronises-object-multimedia), are these relevant? {id="crit-3-8}

**[Test 3.8.1](#test-3-8-1):** For each pre-recorded synchronized time-based media that has synchronized captions, do the captions meet these conditions? {id="test-3-8-1"}
- Subtitles are relevant;
- Subtitles are correctly synchronized.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate synchronized time-based media with subtitles on the screen.
1. Check that the subtitles are:
- relevant (all important sound information is present, including dialogues);
- and correctly synchronized. If you do not notice a delay between spoken speech and the appearance of subtitles, the subtitles are correctly synchronized. The reference standard specifies that subtitles should appear within 100ms of the [subtitle timestamp](glossary.md#horodatage-time-stamp).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.2 Captions (pre-recorded) (A)](https://www.w3.org/Translations/WCAG21-fr/#captions-prerecorded)
- EN 301 549 V3.2.1 (2021-03): 7.1.2 Captioning synchronization, 11.1.2.2 Captions (Prerecorded).

#### [Criterion 3.9](#crit-3-9) [AA] Each pre-recorded [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) (only video or synchronized) does it have, if necessary, a [synchronized audio description](glossary.md#audiodescription-synchronized-media-temporal) (except in special cases)? {id="crit-3-9"}

##### Special cases

[See the special cases of criterion 3.1](#crit-3-1)

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate pre-recorded video-only and synchronized time-based media on the screen that require audio description.
1. Check:
- the presence of synchronized audio description;
- or the presence of an alternative version with an adjacent synchronized audio description or accessible via an adjacent component (a button or a link).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.5 Audio description (pre-recorded) (AA)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-prerecorded)
- EN 301 549 V3.2.1 (2021-03): 11.1.2.5 Audio Description (Pre-recorded).

#### [Criterion 3.10](#crit-3-10) [AA] For each [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) pre-recorded (only video or synchronized) having a [synchronized audio description](glossary.md#audiodescription-synchronized-media-temporal), is this relevant? {id="crit-3-10"}

**[Test 3.10.1](#test-3-10-1):** For each pre-recorded video-only or synchronized time-based media with audio description, does it meet these conditions? {id="test-3-10-1"}
- The audio description is relevant;
- The audio description is correctly synchronized (the audio description soundtrack correctly matches the video tape).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate time-based media on the screen that are video only or synchronized with audio description.
1. Check that the audio description is:
- relevant (all important visual information is present);
- correctly synchronized:
- the sounds and words of the audio description do not overlap with those of the original soundtrack to cause problems of perception and understanding;
- the information conveyed in the audio description is given at the moment when the equivalent visual information appears.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.2.5 Audio description (pre-recorded) (AA)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-prerecorded)
- EN 301 549 V3.2.1 (2021-03): 7.2.2 Audio description synchronization, 11.1.2.5 Audio Description (Pre-recorded).

#### [Criterion 3.11](#crit-3-11) [A] For each pre-recorded [temporal media](glossary.md#temporal-media-type-son-video-et-synchronise), the content adjacent text allows the temporal media to be clearly identified (except in special cases)? {id="crit-3-11"}

##### Special cases

The criterion is not applicable when the temporal media is used for decorative purposes (i.e. it does not provide any information).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the pre-recorded video, audio or synchronized time-only media on the screen.
1. Check:
- that a passage of text (a title or a paragraph for example), allowing the temporal media to be identified, immediately precedes or follows it;
- that the text passage is located outside the multimedia content player.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content.

#### [Criterion 3.12](#crit-3-12) [A] Is each automatically triggered sound sequence [controllable](glossary.md#control-sound-triggered-automatically) by the user? {id="crit-3-12"}

**[Test 3.12.1](#test-3-12-1):** Does each automatically triggered sound sequence satisfy one of these conditions? {id="test-3-12-1"}
- The sound sequence has a duration less than or equal to 3 seconds;
- The sound sequence can be stopped by user action;
- The volume of the sound sequence can be controlled by the user independently of the system volume control.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. When the screen loads, if a sound is triggered automatically, check:
- that the sound sequence has a duration less than or equal to 3 seconds;
- or that a device (a button for example), on the element that triggered the sound, or in the screen, allows it to be stopped;
- or that the volume of the sequence can be controlled by the user, independently of the system volume control.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.2 Sound control (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-control)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.2 Audio Control.

#### [Criterion 3.13](#crit-3-13) [A] Does each [temporal media](glossary.md#media-temporal-type-son-video-et-synchronise) have, if necessary, the [functionalities for controlling its consultation](glossaire.md#controle-de-la-consultation-d-un-temporal-media)? {id="crit-3-13"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the pre-recorded time-based media on the screen.
1. Verify that at least the following features are present:
- a reading functionality;
- pause or stop functionality;
- if the media has a sound track, a functionality that allows you to activate and deactivate the sound;
1. If the media has audio description, check that there is a feature that allows you to activate and deactivate audio description.
1. If the media has synchronized subtitles:
- if they are subtitles embedded (open captions) as an image, check that they are displayed when you start playing the video;
- if they are non-encrusted subtitles (closed captions), check that there is a functionality that allows you to activate and deactivate these subtitles.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.1.1 Keyboard (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard)
- EN 301 549 V3.2.1 (2021-03): 7.1.1 Captioning playback, 7.2.1 Audio description playback, 11.2.1.1.1 Keyboard.

#### [Criterion 3.14](#crit-3-14) [AA] For each [temporal media](glossary.md#temporal-media-type-son-video-et-synchronise), the control functionalities of Are alternatives presented at the same level as other [primary control](glossary.md#primary-control-of-temporal-media) features? {id="crit-3-14"}

**[Test 3.14.1](#test-3-14-1):** For each temporal media, do the alternative control features meet these conditions? {id="test-3-14-1"}
- For each time-based media, the functionality to enable and disable subtitles is presented at the same level as other primary control features;
- For each time-based media, the functionality to enable and disable audio description is presented at the same level as other primary control functionalities.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate pre-recorded time-based media with an alternative (synchronized subtitles or audio description) on the screen.
1. If subtitles are present, check that the functionality which allows you to activate and deactivate the subtitles is presented at the same level as the other functionalities (such as the playback functionality for example), i.e. say that it is not necessary to perform more actions to trigger the subtitles than to trigger the other features. For example, if the play button can be activated from the interface with a simple tap gesture (without the need to activate a first component), the subtitles function should be available in an equivalent way, with a simple gesture of tap. If the subtitles function is available from a drop-down menu that must be activated (by a tap gesture for example), it will not be considered to be at the same level since there will be an additional step to complete.
1. If audio description is present, check that the functionality that allows you to activate and deactivate audio description is presented at the same level as the other functionalities.
1. If this is the case, the criterion is validated.

Note: Although volume and playback controls may be physical components of the terminals (volume buttons on a smartphone for example), it is not required that these terminals have physical controls dedicated to activating the subtitles and audio description or that these controls, if they exist, are located at the same level.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 7.3 User controls for captions and audio description.

#### [Criterion 3.15](#crit-3-15) [AA] For each feature that transmits, converts or records [temporal media](glossary.md#temporal-media-type-son-video-and- synchronize) pre-recorded synchronized that has a subtitle track, at the end of the process, are the subtitles correctly preserved? {id="crit-3-15"}

**[Test 3.15.1](#test-3-15-1):** For each feature that transmits, converts or records a video that has a subtitle track, at the end of the process, do the subtitles meet these conditions? {id="test-3-15-1"}
- Subtitles are present;
- Subtitles can be displayed;
- Subtitles are correctly synchronized;
- The [essential characteristics of subtitles](glossary.md#essential-characteristics-of-subtitles) are preserved.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the functionalities that allow you to transmit (send content to another terminal for example), convert or record temporal media.
1. Perform each functionality (transmit, convert and save).
1. For each of the media resulting from the functionality, evaluate:
- if the subtitles are still present;
- whether subtitles can be displayed;
- if the subtitles are correctly synchronized;
- if the essential characteristics of the subtitles are preserved (for example, if in the original media the subtitles were colored according to the speaker, this coloring must be found in the media which results from the functionality).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.4 Preservation of accessibility information during conversion, 7.1.3 Preservation of captioning.

#### [Criterion 3.16](#crit-3-16) [AA] For each functionality that transmits, converts or records [temporal media](glossary.md#temporal-media-type-son-video-and- synchronize) pre-recorded with a [synchronized audio description](glossaire.md#audiodescription-synchronisee-media-temporal), at the end of the process, is the audio description correctly preserved? {id="crit-3-16"}

**[Test 3.16.1](#test-3-16-1):** For each feature that transmits, converts or records pre-recorded time-based media with synchronized audio description, at the end of the process Does audio description comply with these conditions? {id="test-3-16-1"}
- Audio description is present;
- Audio description can be activated;
- The audio description is correctly synchronized.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the functionalities that allow you to transmit (send content to another terminal for example), convert or record temporal media.
1. Execute each functionality (transmit, convert and save).
1. For each of the media resulting from the functionality, evaluate:
- if audio description is present;
- if audio description can be activated;
- if the audio description is correctly synchronized:
- the sounds and words of the audio description do not overlap with those of the original soundtrack to cause problems with perception and understanding;
- the information conveyed in the audio description is given at the moment when the equivalent visual information appears.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.4 Preservation of accessibility information during conversion, 7.2.3 Preservation of audio description.

#### [Criterion 3.17](#crit-3-17) [AA] For each pre-recorded [temporal media](glossary.md#temporal-media-type-son-video-et-synchronise), the presentation can subtitles be controlled by the user (except in special cases)? {id="crit-3-17"}

##### Special cases

The criterion is not applicable for embedded subtitles (open captions).

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Locate pre-recorded time-based media on the screen that have subtitles.
1. Change subtitle presentation settings from the platform:
- Go to *Settings > Accessibility > Closed Subtitles and SM > Style*;
- Select **Create style** to define a personalized and recognizable subtitle style.
- Define one or more parameters among: the size of the subtitles, the color, the border style of the subtitles, the background color or the opacity of the background (check that the setting **Ignore custom settings** at the bottom of the screen is disabled).
1. Verify that the settings defined at the platform level are applied to the subtitles.
1. If this is not the case, check the media for the presence of a functionality allowing you to modify the subtitle presentation parameters.
1. Check that the settings defined above are applied to the subtitles.
1. If this is the case, the criterion is validated.

###### Android

1. Locate pre-recorded time-based media on the screen that have subtitles.
1. Change subtitle presentation settings from the platform:
- Go to *Settings > Accessibility > Subtitle Preference > Subtitle Style and Size*;
- Define one or more parameters among: the size of the subtitles, the color, the border style of the subtitles, the background color or even the opacity of the background.
1. Verify that platform-level settings are applied to subtitles.
1. If this is not the case, check the media for the presence of a functionality allowing you to modify the subtitle presentation parameters.
1. Check that the settings defined above are applied to the subtitles.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 7.1.4 Captions characteristics, 11.7 User preferences.

#### [Criterion 3.18](#crit-3-18) [AA] For each [pre-recorded synchronized temporal media](glossary.md#temporal-media-type-son-video-et-synchronise) which has [synchronized subtitles](glossaire.md#sous-titres-synchronises-objet-multimedia), can these be, if necessary, vocalized (except in special cases)? {id="crit-3-18"}

**[Test 3.18.1](#test-3-18-1):** Does each pre-recorded synchronized time-based media that has synchronized subtitles meet any of these conditions? {id="test-3-18-1"}
- Subtitles are in a standardized format;
- There is an additional audio track which contains the voiced subtitles.

##### Special cases

The criterion is not applicable in the following cases:
- Subtitles are embedded in the video.
- Video and subtitles use the same language. The criterion only concerns translation subtitles.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Locate pre-recorded synchronized time-based media on the screen that have translated subtitles.
1. Check that the subtitles are in a standardized format (for example, .srt format).
1. Otherwise, activate the **screen reader** and navigate to the media player.
1. [Activate rotor](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios).
1. Scroll through the rotor settings and find the “Multimedia Description” option.
1. If so, by swiping up, select the “Speaking” option.
1. Enable video subtitles and start the video.
1. Check that the subtitles displayed are reproduced by the screen reader.
1. If this is not the case, check the presence in the media player of an additional audio track which would be the vocalized version of the subtitles.
1. Activate the additional audio track and verify that the spoken subtitles match the displayed subtitles.
1. If this is the case, the criterion is validated.

Note: If the &ldquo;Multimedia description&rdquo; is not available in the rotor, move the focus of the screen reader to the video and use the rotor again. If the option still does not appear, the subtitles cannot be rendered by the screen reader, the criterion is non-compliant.

###### Android

1. Locate pre-recorded synchronized time-based media on the screen that have translated subtitles.
1. Check that the subtitles are in a standardized format (for example, .srt format).
1. Otherwise, check the presence in the media player of an additional sound track which would be the vocalized version of the subtitles.
1. Activate the additional audio track and verify that the spoken subtitles match the displayed subtitles.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 7.1.5 Spoken subtitles.

### [Theme 4](#topic-4): Tables {id="topic-4"}

#### [Criterion 4.1](#crit-4-1) [A] Does each [complex data table](glossary.md#complex-data-table) have a [summary](glossary .md#table-resume)? {id="crit-4-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate complex data tables on the screen.
1. Enable **screen reader**.
1. Check:
- that a summary is rendered when the screen reader reaches the table;
- or that a summary is available before the table, in the form of a text preceding the table.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information.

#### [Criterion 4.2](#crit-4-2) [A] For each [complex data table](glossary.md#complex-data-table) having a [summary](glossary.md# summary-de-table), is this one relevant? {id="crit-4-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Check that each table summary is relevant, that is to say that it allows you to understand the nature of the data and the construction of the table.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information.

#### [Criterion 4.3](#crit-4-3) [A] Does each [data table](glossary.md#data-table) have a [title](glossary.md# title-of-a-data-table)? {id="crit-4-3"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the data tables on the screen.
1. Enable **screen reader**.
1. Verify that a title is rendered when the screen reader reaches the table.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information.

#### [Criterion 4.4](#crit-4-4) [A] For each [data table](glossary.md#data-table) having a [title](glossary.md#title-d -a-data-table), is this one relevant? {id="crit-4-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Check that each data table title is relevant, that is to say that it allows you to identify the nature of the data presented in the table.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information.

#### [Criterion 4.5](#crit-4-5) [A] For each [data table](glossary.md#data-table), are the row and column headers correctly linked to data cells? {id="crit-4-5"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the data tables on the screen.
1. Activate the **screen reader** and browse the data cells.
1. Check that the headers are correctly rendered.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information, 11.5.2.6 Row, column, and headers.

### [Theme 5](#topic-5): Interactive components {id="topic-5"}

#### [Criterion 5.1](#crit-5-1) [A] Is each [interface component](glossary.md#interface-component), if necessary, [compatible with the technologies of 'assistance](glossary.md#compatible-with-assistive-technologies) (excluding special cases)? {id="crit-5-1"}

- **[Test 5.1.1](#test-5-1-1):** Does each interface component check, if necessary, one of these conditions? {id="test-5-1-1"}
- [The name, role, value, settings and state changes](glossary.md#role-name-value-setting-and-state-changes) are [accessible to assistive technologies] (glossary.md#accessible-to-assistive-technologies) via an accessibility API;
- An alternative [adjacent clearly identifiable](glossaire.md#adjacent-clearly-identifiable) compatible with an accessibility API allows access to the same functionalities.
- **[Test 5.1.2](#test-5-1-2):** Does each interface component check these conditions (except special cases)? {id="test-5-1-2"}
- The component has a relevant name;
- The accessible name of the component contains at least the visible title;
- The component has a relevant role;
- The component has a relevant value;
- The component has a relevant state.

##### Special cases

The criterion is not applicable for the following elements:
- The application is subject to strict security requirements that prevent other applications from interacting with its interface (such as assistive technology). Examples of systems subject to strict security requirements are systems dealing with intelligence activities, cryptology activities related to national security, command and control of military forces.
- Online maps and mapping services, provided that essential information is provided in an accessible digital form for maps intended for navigation.

There is special case management for [test 5.1.2](#test-5-1-2) when:
- Punctuation and capital letters are present in the text of the visible title: they can be ignored in the accessible name without causing any consequences.
- The text of the visible title serves as a symbol: the text should not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, “B” in a text editor will have the accessible name “Bold”, the sign “>” depending on the context will mean “Next” or “ Play video”). The case of mathematical symbols is, however, an exception (see the note below).

**Note:** if the visible label represents a mathematical expression, the mathematical symbols can be used literally to serve as a label for the accessible name (e.g.: “A>B”). It is left to the user to make the correspondence between the expression and what he must spell taking into account the knowledge he has of the operation of his voice input software (“A greater than B” or “A greater than B”).

##### Evaluation methodology {class="disclosure method"}

The most complete test is a restitution test with a screen reader. In fact, all the elements to be evaluated, if they are present, are rendered by the screen readers. Further testing with other assistive technologies may be necessary to ensure compatibility. Several more or less complete evaluation methods are described to you.

Several methods are available with iOS, but only the test with VoiceOver is the test which allows all of the elements requested by the criterion to be evaluated.

In addition, as with the web, there is no technical documentation to describe the operation and expected implementations (for example for modal windows or potentiometers). In the absence of such documentation, in order to evaluate this type of component as accurately as possible, it is still advisable to get closer to:
- as described in [the ARIA specification for design patterns](https://www.w3.org/TR/wai-aria-practices-1.1/);
- [documentation from platform editors dedicated to developers](methodologie.md#ressources-des-editeurs).

###### iOS with VoiceOver

1. Enable **screen reader**.
1. Locate the interactive components on the screen (for example, button, link).
1. Access each interactive component using screen reader gestures.
1. Check:
- that a role is returned (for example, button, modification zone, link);
- that the role rendered is relevant with regard to the associated functionality (for example, a component which triggers the opening of a modal window and which is rendered “modification zone” has an irrelevant role, it should be identified as a button);
- that a name is returned and that this name is relevant, that is to say that it allows us to understand the function of the element (for form fields, we will refer to the theme &laquo;&nbsp; Forms to evaluate them);
- if the component has a visible name (visible text), the title is returned;
- that if the component has a perceptible state (activated, deactivated, selected), this state is restored;
- that if the component can change state (for example toggle button, potentiometer), carry out the necessary actions to test the different states and check that each change of state is correctly restored (the transition to the selected state, l 'potentiometer increase);
- that if the component has a perceptible value (value of a potentiometer), this value is restored.
1. If this is the case, the criterion is validated.

###### iOS With **Accessibility Inspector**

1. Connect the iOS mobile terminal to the computer with macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile terminal as the source and stay on the “Inspection” tab. (buttons at top right).
1. Using the Accessibility Inspector arrows, access each element of the interface.
1. Check:
- that a role is available in the &laquo;Traits&nbsp;&raquo; (e.g. Button, Tab, Text Field)&nbsp;;
- that the role is relevant with regard to the associated functionality (for example, a component which triggers the opening of a modal window and which is presented as Static text has an irrelevant role, it should be identified as a button);
- that a name is available in the “Label” parameter; and that this name is relevant, that is to say that it allows us to understand the function of the element (for form fields, we will refer to the theme “Forms” to evaluate them )&nbsp;;
- if the component has a visible name (visible text), the title defined in the &laquo;&nbsp;Label&nbsp;&raquo; contains at least this title.
1. If the component has a perceptible state (enabled, disabled, selected), check that this state:
- is available in the “Traits” parameter;
- or is indicated in the &ldquo;Label&rdquo; parameter.
1. If the component can change state (e.g. toggle button, potentiometer), perform the necessary actions to test the different states and verify that each change of state (moving to the selected state, increasing the potentiometer):
- is available in the “Traits” parameter;
- or is indicated in the &ldquo;Label&rdquo; parameter.
1. If this is the case, the criterion is validated.

###### iOS With voice control

The voice control app allows users to navigate by voice.

Criterion 5.1 as a whole cannot be assessed with voice control, but a functionality of voice control (the display of labels) allows you to have a quick overview of the state of interactive components.

Voice control will make it possible to detect components that can be used by touch which are not interactive components detectable by assistive technologies, the presence of a title and its relevance, and the presence of the visible name in the accessible name.

1. Enable voice control: *Settings > Accessibility > Voice control*.
1. Show interactive component labels: from the Voice Control settings screen, navigate to the “Overlay” button. and enable it, then choose “Item Names”.
1. From now on, when voice control is activated, gray tooltips will appear above interactive elements that have labels. Note that if the screen has a very large number of interactive controls, the labels will be displayed in successive groups (one group of labels disappears and another appears).

What you need to know: only elements that have interactive roles recognized by the Accessibility API will have a label. This will make it possible to quickly identify which elements that can be used by touch are not recognized by voice control and are therefore not interactive elements (which constitutes non-compliance).

Procedure:

1. Locate all the interactive controls (activated by touch) on the screen.
1. Enable voice control and verify that all identified interactive controls have an associated label (gray tooltip).
1. If this is the case, check that:
- the associated label is relevant;
- and that the visible name (if it has one) is included in this label.
1. If this is the case, the conditions on the relevance of the title and the presence of the visible name in the accessible name are met.

###### Android

1. Enable **screen reader**.
1. Locate the interactive components on the screen (for example, button, link).
1. Access each interactive component with screen reader gestures.
1. Check:
- that a role is returned (for example, button, modification zone, link);
- that the role rendered is relevant with regard to the associated functionality (for example, a component which triggers the opening of a modal window and which is rendered “modification zone” has an irrelevant role, it should be identified as a button);
- that a name is returned and that this name is relevant, that is to say that it allows us to understand the function of the element (for form fields, we will refer to the theme [&laquo;&nbsp ;Forms&nbsp;&raquo;](#topic-9) to evaluate them);
- if the component has a visible name (visible text), the title is returned;
- that if the component has a perceptible state (activated, deactivated, selected), this state is restored;
- that if the component can change state (for example toggle button, potentiometer), carry out the necessary actions to test the different states and check that each change of state is correctly restored (the transition to the selected state, l 'potentiometer increase);
- that if the component has a perceptible value (value of a potentiometer), this value is restored.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context), [2.5.3 Label in name (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name), [4.1.2 Name, role and value (A)](https://www.w3 .org/Translations/WCAG21-fr/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): 5.6.1 Tactile or auditory status, 11.2.4.4 Link Purpose (in context), 11.2.5.3.1 Label in Name, 11.4.1.2.1 Name, role, value, 11.5.2.3 Use of accessibility services, 11.5.2.5 Object information, 11.5.2.7 Values, 11.5.2.8 Label relationships, 11.5.2.9 Parent-child relationships,  11.5.2.11 List of available actions, 11.5.2.12 Execution of available actions, 11.5.2.16 Modifications of states and properties, 11.6.2 No disruption of accessibility features.

#### [Criterion 5.2](#crit-5-2) [A] Is each [interface component](glossary.md#interface-component) [controllable by the keyboard and any pointing device ](glossary.md#accessible-and-activatable-by-the-keyboard-and-any-pointing-device) (except in special cases)? {id="crit-5-2"}

##### Special cases

The criterion is not applicable for the following elements:
- The functionality depends on the use of an event handler without universal equivalent; for example, a freehand drawing application cannot be made controllable by keyboard.
- The application is subject to strict security requirements that prevent other applications from interacting with its interface (such as assistive technology). Examples of systems subject to strict security requirements are systems dealing with intelligence activities, cryptology activities related to national security, command and control of military forces.
- Online maps and mapping services, provided that essential information is provided in an accessible digital form for maps intended for navigation.

##### Evaluation methodology {class="disclosure method"}

This is to ensure that the component can be used by the screen reader, voice control, an external keyboard or any other external switch. We can limit the tests to a few pointing devices since the necessary characteristics (on the interactive components) are similar.

It is nevertheless necessary to test at least with the screen reader and an external keyboard.

For the external keyboard, [certain settings are necessary for the device to be fully functional](methodology.md#external-keyboard).

###### iOS and Android

1. Enable **screen reader**.
1. Browse all interactive components.
1. Check:
- that it can be reached with the screen reader;
- that it can be activated with the screen reader.
1. If it is an editable component (input field, check box, potentiometer), check that it can be modified with the screen reader.
1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse all interactive components.
1. Check:
- that it can be reached with the keyboard keys;
- that it can be activated with the dedicated key on the keyboard.
1. If it is a modifiable component (input field, check box, potentiometer), check that it can be modified with the keyboard keys.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Info and Relationships (A)](https://www.w3.org/TR/WCAG21/#info-and-relationships), [2.1.1 Keyboard (A)]( https://www.w3.org/TR/WCAG21/#keyboard), [2.4.7 Focus visibility (AA)](https://www.w3.org/Translations/WCAG21-fr/#focus-visible )
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.2.1.1.1 Keyboard, 11.2.4.7 Focus Visible, 11.5.2.3 Use of accessibility services, 11.5.2.7 Values, 11.5.2.12 Execution of available actions, 11.5.2.13 Tracking of focus and selection attributes, 11.5.2.14 Modification of focus and selection attributes, 11.5.2.17 Modifications of values and text.

#### [Criterion 5.3](#crit-5-3) [A] Does each [context change](glossary.md#context-change) meet one of these conditions? {id="crit-5-3"}

**[Test 5.3.1](#test-5-3-1):** Does each context switch respect one of these conditions? {id="test-5-3-1"}
- The user is warned by a text of the type of change before it is triggered;
- The context switch is initiated by a user action on a component with an explicit name.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify on the screen all the events that initiate a context change, for example:
- dynamic updating of form fields;
- opening a new page on selection of a list entry;
- updating an essential part of the screen without user action;
- automatic launch of a video player when selecting a playlist;
- manipulation of the focus resulting in modifying the current position of the user on the screen.
1. Check:
- that the user is warned by a text of the type of change before it is triggered;
- or that the context switch is initiated by a button or an explicit link.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.2.1 On focus (A)](https://www.w3.org/Translations/WCAG21-fr/#on-focus), [3.2.2 On entry (A)] (https://www.w3.org/Translations/WCAG21-fr/#on-input)
- EN 301 549 V3.2.1 (2021-03): 11.3.2.1 On Focus, 11.3.2.2 On Input.

#### [Criterion 5.4](#crit-5-4) [AA] In each screen, are the [status messages](glossary.md#status-message) correctly rendered by the display technologies? support? {id="crit-5-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Carry out the actions necessary for a status message to appear, for example:
- correctly complete a form and validate it to display a message indicating successful submission;
- submit a form with mandatory fields without input to display a message indicating the presence of errors;
- display a screen that requires some loading time to display a progress message or loading progress indicator.
1. Check that when the status appears, the screen reader renders the information and that this information is understandable.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [4.1.3 Status Messages (AA)](https://www.w3.org/Translations/WCAG21-fr/#status-messages)
- EN 301 549 V3.2.1 (2021-03): 11.4.1.3.1 Status Messages, 11.5.2.3 Use of accessibility services, 11.5.2.15 Change notification.

#### [Criterion 5.5](#crit-5-5) [A] Is each state of a [toggle control](glossary.md#toggle-control) presented to the user perceptible&nbsp; ? {id="crit-5-5"}

**[Test 5.5.1](#test-5-5-1):** For each state of a toggle control presented to the user, are the following conditions met? {id="test-5-5-1"}
- The status of the feature is visible on the interface without changing the state of the control;
- Feature status can be determined by touch or sound without changing the control state.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the toggle controls on the screen (buttons with one or more states, for example, check boxes, radio button, switch).
1. Verify that it is possible to determine the state of the control based on its presentation in the interface (for example, a change in shape when the control transitions from one state to another).
1. Activate the **screen reader** and navigate to the control.
1. Verify that the state of the control is rendered by the screen reader without having to interact with the control.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.6.1 Tactile or auditory status, 5.6.2 Visual status.

### [Theme 6](#topic-6): Mandatory elements {id="topic-6"}

#### [Criterion 6.1](#crit-6-1) [A] In each screen, are the texts rendered by the assistive technologies in the main language of the screen? {id="crit-6-1"}

**Note:** It is not required that language changes in the screen be identified (for example, a foreign language term included in a paragraph) but that the screen be rendered at least correctly in the main screen language. However, in certain cases of applications where language changes would be essential to understanding the content (such as a translation application or a foreign language course application) it will be necessary to ensure that the texts in a foreign language are correctly rendered in the identified language.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Go to *Settings > Accessibility > VoiceOver > Speech* and enable the “Detect languages” setting.
1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the text is rendered in the main language of the screen.
1. If this is the case, the criterion is validated.

###### Android

1. Go to *Settings > Accessibility > TalkBack > Settings > Text-to-speech settings* (depending on the platform version, the path may be different):
- Check that the &ldquo;Preferred engine&rdquo; is “Google Text-to-Speech”;
- Activate the synthesis settings (button to the right of &ldquo;Preferred engine&rdquo;) and check that the &ldquo;Language detection&rdquo; is set to &ldquo;Forced&rdquo;.
1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the texts are rendered in the main language of the screen.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.1.1 Language of page (A)](https://www.w3.org/Translations/WCAG21-fr/#language-of-page)
- EN 301 549 V3.2.1 (2021-03): 11.3.1.1.1 Language of software.

#### [Criterion 6.2](#crit-6-2) [A] In each screen, interface elements must not be used [for presentation purposes only](glossary.md#only-a -for-presentation-purposes). Is this rule respected? {id="crit-6-2"}

##### Evaluation methodology {class="disclosure method"}

In this criterion, we only check elements that must not be interactive (text elements, tables for example).

###### iOS with VoiceOver

1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the role rendered by the screen reader corresponds to the nature of the element (for example, when the screen reader reaches what appears to be a paragraph and renders "Button") ;, this is an error, no role is given to the paragraphs).
1. If this is the case, the criterion is validated.

###### iOS With Accessibility Inspector

1. Connect the iOS mobile terminal to the computer with macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile terminal as the source and stay on the “Inspection” tab. (buttons at top right).
1. Using the Accessibility Inspector arrows, access each element of the interface.
1. Check that the role available in the &laquo;&nbsp;Traits&nbsp;&raquo; is relevant with regard to the nature of the associated element (for example, a simple text which has the role of a button would be considered non-compliant, it should be identified as a static text).
1. If this is the case, the criterion is validated.

###### Android

1. Activate the **screen reader** and browse all the elements on the screen.
1. Check that the role rendered by the screen reader corresponds to the nature of the element (for example, when the screen reader reaches what appears to be a paragraph and renders "Button") ;, this is an error, no role is given to the paragraphs).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships.

### [Theme 7](#topic-7): Structuring information {id="topic-7"}

#### [Criterion 7.1](#crit-7-1) [A] In each screen, is the information structured by the appropriate use of headings? {id="crit-7-1"}

**[Test 7.1.1](#test-7-1-1):** Does every screen check these conditions? {id="test-7-1-1"}
- The content of each title is relevant;
- Each passage of text constituting a title is identified as a title.

##### Evaluation methodology {class="disclosure method"}

###### iOS with VoiceOver

1. Enable **screen reader**.
1. Use the rotor and select “Headers”.
1. Browse the headings by sliding a finger up or down.
1. Check:
- that each text which structures the screen can be reached;
- that each header reached is relevant, that is to say:
- that the title is useful for structuring the screen;
- that the text contained in the title makes it possible to understand the content of the titled section.
1. If this is the case, the criterion is validated.

###### iOS with Accessibility Inspector

1. Connect the iOS mobile terminal to the computer with macOS.
1. Activate the **Accessibility Inspector** software.
1. Choose the mobile terminal as the source and stay on the “Inspection” tab. (buttons at top right).
1. Using the Accessibility Inspector arrows, access each element of the interface.
1. Check:
- that for each text which structures the screen, the parameter &laquo;Traits&nbsp;&raquo; contains the value &laquo;&nbsp;Headers&nbsp;&raquo;;
- that each text whose parameter &laquo;&nbsp;Traits&nbsp;&raquo; contains the value &laquo;&nbsp;Headers&nbsp;&raquo; is relevant, that is to say:
- that the title thus declared is useful for structuring the screen;
- that the text contained in the title makes it possible to understand the content of the section thus titled.
1. If this is the case, the criterion is validated.

###### Android

1. Enable **screen reader**.
1. Use the playback controls menu and select “Titles”.
1. Browse titles by sliding one finger up or down.
1. Check:
- that each text which structures the screen is reached in this way and is rendered as a title;
- that each title reached is relevant, that is to say:
- that the title is useful for structuring the screen;
- that the text contained in the title makes it possible to understand the content of the section thus titled.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relationships (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships), [2.4.6 Headers and labels (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels), [4.1.2 Name, role and value (A)](https://www. w3.org/Translations/WCAG21-en/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.2.4.6 Headings and Labels, 11.4.1.2 Name , Role, Value, 11.5.2.3 Use of accessibility services, 11.5.2.5 Object information, *11.5.2.9 Parent-child relationships*{lang =en}.

#### [Criterion 7.2](#crit-7-2) [A] In each screen, is each list correctly structured? {id="crit-7-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate the elements gathered in list form on the screen.
1. Check that the screen reader renders &ldquo;List&rdquo; when it reaches the group of elements.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1.1 Info and Relationships, 11.5.2.5 Object information, 11.5.2.9 Parent- child relationships.

### [Theme 8](#topic-8): Presentation of information {id="topic-8"}

#### [Criterion 8.1](#crit-8-1) [A] In each screen, is the visible content carrying information accessible to assistive technologies? {id="crit-8-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Browse all elements using screen reader gestures.
1. Check that all the information visible on the screen is reproduced by the screen reader.
1. If this is the case, the criterion is validated.

Note: In applications, it is possible to group elements. For example, in a product catalog, each item has a title, a price and a description. Instead of focusing with the screen reader on each of the 3 items, the application can be designed so that the screen reader only accesses the item in its entirety, thus the screen reader renders the all the information without the user having to carry out several gestures to reach the 3 items. This is compliant (even encouraged since it limits the actions to be carried out to browse the content), it is necessary to ensure that all the texts contained are correctly rendered by the screen reader.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content), [1.3.1 Information and relationships ( A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content, 11.1.3.1.1 Info and Relationships, 11.5.2.10 Text.

#### [Criterion 8.2](#crit-8-2) [AA] In each screen, can the user increase the character size by at least 200% (excluding special cases)? {id="crit-8-2"}

**[Test 8.2.1](#test-8-2-1):** Does every screen check these conditions? {id="test-8-2-1"}
- The user can enlarge the text size by 200% using the platform settings;
- All texts on the screen are enlarged;
- All enlarged texts remain readable and interactive components usable.

##### Special cases

The criterion is not applicable for the following elements:
- Text graphic elements;
- Video subtitles.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Access the platform's character size settings: *Settings > Accessibility > Display and text size > Larger font*.
1. Enable the “Larger font size” button. and increase the value of the font size (potentiometer at the bottom of the screen) until reaching a magnification of 200% (the maximum of the gauge allows you to achieve a zoom greater than 200%, the test can therefore be limit to increasing the zoom using the penultimate position of the potentiometer).
1. If necessary, restart the application to ensure that the setting is taken into account by the application.
1. Check:
- that all texts in the interface have been enlarged;
- that all texts in the interface remain readable and the functionalities usable;
- that content does not disappear;
- if texts have disappeared, that there is a method on the screen to display the texts on demand (for example with a long press on an icon).
1. If this is the case, the criterion is validated.

###### Android

1. Access the platform's character size settings: *Settings > Accessibility > Font size* (depending on the platform version, the path may be different);
1. Increase the font size value (potentiometer at the bottom of the screen) until you reach an enlargement of 200% (on some terminals, the potentiometer gauge may be different and offer values that allow you to achieve a zoom greater than 200%, it will then be necessary to check that the test is only carried out for a value of 200%).
1. If necessary, restart the application to ensure that the setting is taken into account by the application.
1. Check:
- that all texts in the interface have been enlarged;
- that all texts in the interface remain readable and the functionalities usable;
- that content does not disappear;
- if texts have disappeared, that there is a method on the screen to display the texts on demand (for example with a long press on an icon).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.4 Text resizing (AA)](https://www.w3.org/Translations/WCAG21-fr/#resize-text)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.4.1 Resize Text (AA), 11.5.2.3 Use of accessibility services, 11.7 User preferences.

#### [Criterion 8.3](#crit-8-3) [A] In each screen, each [component in text environment whose nature is not obvious](glossary.md#component-whose-the- nature-is-not-obvious) have a contrast ratio greater than or equal to 3:1 compared to the surrounding text? {id="crit-8-3"}

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Activate the **Differentiate without color** option (*Settings > Accessibility > Display and text size > Differentiate without color*).
1. Activate the **Increase contrast** option (*Settings > Accessibility > Display and text size > Increase contrast*) or if present in the application, activate the replacement mechanism to display application with sufficient contrast ratio.
1. Locate on the screen the interface components (links, buttons) with text integrated into a text environment (in a sentence for example), signified only by color (without other formatting which distinguishes them from the rest of the text in which they are integrated).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the colors of the surrounding text and the interactive component on the mobile terminal, i.e.:
- by [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- by taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Verify that the contrast between the component's font color and the surrounding text's font color is at least 3:1.
1. If this is the case, the criterion is validated.

###### Android

1. If it exists in the application, activate the replacement mechanism to display the application with a sufficient contrast ratio.
1. Locate on the screen the interface components (links, buttons) with text integrated into a text environment (in a sentence for example) signified only by color (without other formatting which distinguishes them from the rest of the text in which they are integrated).
1. Activate the **Colour Contrast Analyzer** software on the computer and capture the colors of the surrounding text and the interactive component on the mobile terminal, i.e.:
- by [broadcasting the screen of the mobile terminal to the computer](methodologie.md#broadcast-l-ecran-du-mobile-terminal)&nbsp;;
- by taking [screenshots](methodologie.md#realiser-des-captures-d-ecran) of the elements to be evaluated (and importing them onto the computer).
1. Verify that the contrast between the component's font color and the surrounding text's font color is at least 3:1.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.1 Use of Color.

#### [Criterion 8.4](#crit-8-4) [A] In each screen, for each [component in text environment whose nature is not obvious](glossary.md#component-of-which-the -nature-is-not-obvious), does an indication other than color indicate that the focus is being taken and the mouse is hovered over? {id="crit-8-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the interface components (links, buttons) with text integrated into a text environment (in a sentence for example), signified only by color (without other formatting which distinguishes them from the rest of the text in which they are integrated).
1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Verify that the focus visibility as defined at the system level is preserved on these elements.
1. Connect a **mouse**.
1. Check that hovering over interactive components in a text environment is indicated by a means other than color (bolding, underlining for example).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.1 Use of Color.

#### [Criterion 8.5](#crit-8-5) [A] In each screen, for each element receiving focus, is the [focus hold](glossary.md#focus-hold) visible? {id="crit-8-5"}

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Enable all [available focus style settings](methodology.md#external-keyboard).
1. Navigate the application and assess whether focus visibility as defined at the system level is preserved across all application elements.
1. If this is the case, the criterion is validated.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate the application and assess whether focus visibility as defined at the system level is preserved across all application elements.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.1 Use of color (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color), [2.4.7 Focus visibility (AA)](https://www.w3.org/Translations/WCAG21-fr/#focus-visible)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.1 Use of Color, 11.2.4.7 Focus Visible, *11.7 User preferences*{lang= in}.

#### [Criterion 8.6](#crit-8-6) [A] In each screen, the information must not be given only by [shape, size or position](glossary.md#indication-given- by-shape-size-or-position). Is this rule respected? {id="crit-8-6"}

This concerns words or sets of words, texts, graphic elements carrying information and temporal media.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate on the screen the information given by the shape, size or position in a text, a graphic element, a temporal or non-temporal media. It can be an icon positioned to the left of a component to indicate that it is active, or an instruction in the screen which asks you to activate a component positioned at a certain location on the screen.
1. Check that there is another way to retrieve this information from the screen (for example, a text readable by everyone which gives the same information).
1. If this is not the case, activate the **screen reader** and check that alternative information in shape, size or position is rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.3 Sensory characteristics (A)](https://www.w3.org/Translations/WCAG21-fr/#sensory-characteristics), [1.4.1 Use of color (A) ](https://www.w3.org/Translations/WCAG21-fr/#use-of-color).
- EN 301 549 V3.2.1 (2021-03): 11.1.3.3 Sensory Characteristics, 11.1.4.1 Use of Color.

#### [Criterion 8.7](#crit-8-7) [AA] In each screen, additional content appearing when focusing or hovering over an [interface component](glossary.md#component -d-interface) are they controllable by the user (except in special cases)? {id="crit-8-7"}

- **[Test 8.7.1](#test-8-7-1):** Can each additional content that becomes visible when focusing or hovering over an interface component be hidden by a user action without moving the focus or the mouse pointer (except in special cases)? {id="test-8-7-1"}
- **[Test 8.7.2](#test-8-7-2):** Can each additional content that appears when hovering over an interface component be hovered over by the mouse pointer without disappear (except in special cases)? {id="test-8-7-2"}
- **[Test 8.7.3](#test-8-7-3):** Does each additional content that appears when focusing or hovering over an interface component verify a of these conditions (except in special cases)? {id="test-8-7-3"}
- The additional content remains visible until the user removes the mouse pointer or the focus from the additional content and the interface component that triggered its appearance;
- The additional content remains visible until the user triggers an action hiding this content without moving the focus or the mouse pointer of the interface component that triggered its appearance;
- Additional content remains visible until it is no longer valid.

##### Special cases

The criterion is not applicable when the additional content is controlled by the platform (for example, `title` attribute in HTML) or corresponds to a modal window.

When the additional content does not mask or replace any content carrying information, [test 8.7.1](#test-8-7-1) is not applicable.


##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse the screen and identify additional content that appears when focusing on an interface component.
1. Check that the additional content can be hidden by a keyboard key (the <kbd>ESC</kbd> key for example).
1. Check that additional content remains visible:
- until the focus is moved away from the interface component and additional content;
- or as long as the focus is positioned on the interface component or in the additional content;
- or as long as the additional content is valid.
1. Connect a **mouse**.
1. Swipe the screen with the mouse and locate additional content that appears when hovering over an interface component.
1. Check that the additional content can be hovered over by the mouse.
1. Check that additional content remains visible:
- until the mouse pointer is moved outside the interface component and additional content;
- or as long as the mouse pointer hovers over the interface component or additional content;
- or as long as the additional content is valid.
1. If this is the case, the criterion is validated.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Browse the screen and identify additional content that appears when focusing on an interface component.
1. Check that the additional content can be hidden by a keyboard key (generally the key or key combination that will have been associated in Switch Access for the *Return* parameter)
1. Check that additional content remains visible:
- until the focus is moved away from the interface component and additional content;
- or as long as the focus is positioned on the interface component or in the additional content;
- or as long as the additional content is valid.
1. Connect a **mouse**.
1. Swipe the screen with the mouse and locate additional content that appears when hovering over an interface component.
1. Check that the additional content can be hovered over by the mouse.
1. Check that additional content remains visible:
- until the mouse pointer is moved outside the interface component and additional content;
- or as long as the mouse pointer hovers over the interface component or additional content;
- or as long as the additional content is valid.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.4.13 Content on hover or focus (AA)](https://www.w3.org/Translations/WCAG21-fr/#content-on-hover-or-focus)
- EN 301 549 V3.2.1 (2021-03): 11.1.4.13 Content on Hover or Focus.

### [Theme 9](#topic-9): Forms {id="topic-9"}

#### [Criterion 9.1](#crit-9-1) [A] Does each form field have a visible label? {id="crit-9-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the form fields on the screen (input field, radio button, check box).
1. Check for a visible adjacent label.
1. Activate the form field (for example, enter text).
1. Check that the label remains visible.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.6 Headings and Labels (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels)
- EN 301 549 V3.2.1 (2021-03): 11.2.4.6 Headings and Labels.

#### [Criterion 9.2](#crit-9-2) [A] Does each form field have a label accessible to assistive technologies? {id="crit-9-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS with VoiceOver

1. Enable **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Verify that a label is rendered when the screen reader focus is on the form field.
1. If this is the case, the criterion is validated.

###### iOS with voice control

1. Enable **voice control**.
1. Locate all the form fields on the screen.
1. Check that a label is detected by voice control (appearance of a gray tooltip above the field).
1. If this is the case, the criterion is validated.

###### Android

1. Enable **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Verify that a label is rendered when the screen reader focus is on the form field.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relationships (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships), [3.3.2 Labels or instructions ( A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions), [4.1.2 Name, role and value (A)](https://www.w3. org/Translations/WCAG21-en/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1 Info and Relationships (A), 11.3.3.2 Labels or Instructions (A),  11.4.1.2.1 Name, role, value (A), 11.5.2.3 Use of accessibility services, 11.5.2.5 Object information, 11.5 .2.8 Label relationships.

#### [Criterion 9.3](#crit-9-3) [A] Is each label associated with a form field relevant? {id="crit-9-3"}

**[Test 9.3.1](#test-9-3-1):** Does each label associated with a form field meet these conditions? {id="test-9-3-1"}
- The label accessible to assistive technologies is relevant;
- The visible label is contained in the label accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### iOS with VoiceOver

1. Enable **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check:
- that the label rendered by the screen reader is relevant (it allows us to understand the nature of the expected input);
- that the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

###### With voice control

1. Enable **voice control**.
1. Locate all the form fields on the screen.
1. Check:
- that the label detected by voice control (gray tooltip) is relevant (it allows you to understand the nature of the expected input);
- that the visible label is contained in the label detected by voice control (gray tooltip).
1. If this is the case, the criterion is validated.

###### Android

1. Enable **screen reader**.
1. Navigate to form elements using screen reader gestures.
1. Check:
- that the label rendered by the screen reader is relevant (it allows us to understand the nature of the expected input);
- that the visible label is contained in the label rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.6 Headings and Labels (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels), [2.5.3 Label in the name (A)](https://www.w3.org/Translations/WCAG21-en/#label-in-name), [3.3.2 Labels or instructions (A)](https://www.w3 .org/Translations/WCAG21-fr/#labels-or-instructions).
- EN 301 549 V3.2.1 (2021-03): 11.2.4.6 Headings and Labels, 11.2.5.3.1 Label in Name, 11.3.3.2 Labels or Instructions (A), 11.5.2.5 Object information.

#### [Criterion 9.4](#crit-9-4) [A] Are each field label and its associated field [adjoined](glossary.md#accoles-etiquette-et-field-accoles)&nbsp; ? {id="crit-9-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate all the form fields on the screen.
1. For each form field, check that the visible label is attached to the field to which it is linked.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions)
- EN 301 549 V3.2.1 (2021-03): 11.3.3.2 Labels or Instructions (A).

#### [Criterion 9.5](#crit-9-5) [A] In each form, is the title of each button relevant? {id="crit-9-5"}

**[Test 9.5.1](#test-9-5-1):** Does each form button meet these conditions? {id="test-9-5-1"}
- The title of the button accessible to assistive technologies is relevant;
- The visible title of the button is contained in the title accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

2 evaluation methods on iOS are offered. Both methods lead to the same results. Only one of these methods is needed to evaluate the criterion on iOS.

###### iOS with VoiceOver

1. Enable **screen reader**.
1. Navigate to form buttons using screen reader gestures.
1. Check:
- that the title rendered by the screen reader is relevant (it allows you to understand the action of the button);
- that the visible title is contained in the title rendered by the screen reader.
1. If this is the case, the criterion is validated.

###### iOS with voice control

1. Enable **voice control**.
1. Locate the form buttons on the screen.
1. Check:
- that the title detected by the voice control (gray tooltip) is relevant (it allows you to understand the action of the button);
- that the visible title is contained in the title detected by voice control (gray tooltip);
1. If this is the case, the criterion is validated.

###### Android

1. Enable **screen reader**.
1. Navigate to form buttons using screen reader gestures.
1. Check:
- that the title rendered by the screen reader is relevant (it allows you to understand the action of the button);
- that the visible title is contained in the title rendered by the screen reader.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.5.3 Label in name (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name), [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value)
- EN 301 549 V3.2.1 (2021-03): 11.2.5.3.1 Label in Name (A), 11.4.1.2.1 Name, role, value (A), 11.5.2.5 Object information, 11.5.2.8 Label relationships.

#### [Criterion 9.6](#crit-9-6) [A] In each form, are [fields of the same nature](glossaire.md#fields-of-meme-nature) identified, if necessary&nbsp ;? {id="crit-9-6"}

**[Test 9.6.1](#test-9-6-1):** Do fields of the same nature respect these conditions, if necessary? {id="test-9-6-1"}
- Fields are grouped into a common element;
- The grouping has a relevant title.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Locate on the screen the fields of the same nature which need to be grouped (for example, the entry fields for the different sequences of numbers of a credit card code).
1. Check:
- that information is returned when focusing on the first field, which makes it possible to identify the group to which the field belongs (although this is important for users, it is not required that the grouping information is returned to each of the form fields, but only at least to the first field in the grouping);
- that the information returned is relevant, that is to say that it allows us to understand the nature of the grouping.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.1 Information and relationships (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships), [3.3.2 Labels or instructions ( A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions).
- EN 301 549 V3.2.1 (2021-03): 11.1.3.1 Info and Relationships, 11.3.3.2 Labels or Instructions.

#### [Criterion 9.7](#crit-9-7) [A] Are the mandatory form fields correctly identified (except in special cases)? {id="crit-9-7"}

**[Test 9.7.1](#test-9-7-1):** Does every required form field check these conditions? {id="test-9-7-1"}
- The obligatory character is visible;
- The mandatory nature is accessible to assistive technologies.

##### Particular case

The criterion is not applicable when the form has a single form field or indicates optional fields in the following manner:
- visible;
- in the field label.

If all of the fields in a form are mandatory, the criterion remains applicable.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Validate the form without entering any data in order to identify the mandatory fields.
1. For each mandatory field, Check:
- that the information returned by the screen reader when focusing on the field contains the mention of the obligatory character;
- and a visible text near the field indicates the mandatory nature of the form field.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions).
- EN 301 549 V3.2.1 (2021-03): 11.3.3.2 Labels or Instructions (A).

#### [Criterion 9.8](#crit-9-8) [A] For each required form field, is the expected data type and/or format available? {id="crit-9-8"}

**[Test 9.8.1](#test-9-8-1):** Does each required form field meet these conditions? {id="test-9-8-1"}
- The data type and/or format is visible;
- The type of data and/or format is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Fill in the form fields with values likely to cause entry errors (entering a poorly formed e-mail address for example).
1. Validate the form.
1. For each required form field that has a format check (which will be presented with an error after validation), check:
- that the expected data type and/or format are rendered by the screen reader when focusing on the field;
- that visible text near the field indicates the type of data and/or the expected format.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.2 Labels or instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions).
- EN 301 549 V3.2.1 (2021-03): 11.3.3.2 Labels or Instructions (A).

#### [Criterion 9.9](#crit-9-9) [A] In each form, are entry errors accessible? {id="crit-9-9"}

**[Test 9.9.1](#test-9-9-1):** Does each input error meet these conditions? {id="test-9-9-1"}
- The entry error is visible;
- The entry error is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Fill form fields with values likely to cause entry errors (leaving a field empty, entering a poorly formed email address for example).
1. Validate the form.
1. For each field in error, check:
- that the error message is visible near the field;
- that the error message is returned by the screen reader when focusing on the field.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.1 Error identification (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification)
- EN 301 549 V3.2.1 (2021-03): 11.3.3.1.1 Error Identification (A).

#### [Criterion 9.10](#crit-9-10) [AA] In each form, is the [entry control](glossary.md#form-entry-control) accompanied, if necessary, any suggestions for expected types, data formats, or values? {id="crit-9-10"}

**[Test 9.10.1](#test-9-10-1):** In each form, does the input control check these conditions? {id="test-9-10-1"}
- The input check is accompanied, if necessary, by suggestions of the expected data types and formats;
- The input check is accompanied, if necessary, by suggestions of expected values.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Fill in the form fields with values likely to cause entry errors (entering a poorly formed email address for example).
1. Validate the form.
1. For each field in error that has a format check, check the presence of a real example of entry in the error message (for example, for an email address, check the mention of a real address on the model &laquo;jean.schmitt@accessibilite.lu&raquo;).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.3 Suggestion after an error (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-suggestion).
- EN 301 549 V3.2.1 (2021-03): 11.3.3.3 Error Suggestion (AA).

#### [Criterion 9.11](#crit-9-11) [AA] For each form which modifies or deletes data, or which transmits answers to a test or examination, or whose validation has financial consequences or legal, can the data entered be modified, updated or retrieved by the user? {id="crit-9-11"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Complete the form.
1. For each data of a financial nature (for example, an indication of income), legal (for example, a reference to an administrative act), personal (for example, a telephone number), for each form which transmits responses to a test or exam, verify that the user can:
- modify or cancel the data and the actions carried out on this data during entry (for example the entry of the field and the undo editing functionality of the browser are not deactivated);
    - or explicitly confirm the sending of this data via a dedicated mechanism (for example, a form field or an additional step).
1. For each form that modifies or deletes data (for example the deletion of a postal address), check that the user can:
    - recover data deleted during entry;
    - or explicitly confirm the deletion of this data via a dedicated mechanism (for example, a form field or an additional step).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [3.3.4 Error prevention (legal, financial, data) (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-prevention-legal-financial -data).
- EN 301 549 V3.2.1 (2021-03): 11.3.3.4 Error Prevention (Legal, Financial, Data) (AA).

#### [Criterion 9.12](#crit-9-12) [AA] For each field that expects [user personal data](glossary.md#user-personal-data), the Is entry made easier? {id="crit-9-12"}

**[Test 9.12.1](#test-9-12-1):** Does each field that expects personal data from the user respect these conditions? {id="test-9-12-1"}
- The [appropriate native platform controls](glossary.md#native-platform-controls) are presented to the user;
- The field is compatible with an automatic fill functionality.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Access each of the form fields (tap on the input field for example to activate the appearance of input controls).
1. For each field that expects personal data about the user, verify that the [adequate native platform controls](glossary.md#native-controls-of-the-platform) are presented to the user. For example:
- for a field requesting the entry of the user's e-mail address, the keyboard presented has the @ character without the user having to perform any keyboard manipulation (such as displaying the keyboard secondary)
- for a field requiring the entry of a telephone number, the numeric keypad is presented directly to the user;
- etc.
1. Check that the form is compatible with an automatic filling mechanism. For example, iOS allows automatic filling of fields based on the last values entered depending on their nature (postal address, city, last name, first name, e-mail address). Check that relevant values are suggested on these fields.
1. If this is the case, the criterion is validated.

###### Android

1. Access each of the form fields (tap on the input field for example to activate the appearance of input controls).
1. For each field that expects personal data about the user, verify that the [adequate native platform controls](glossary.md#native-controls-of-the-platform) are presented to the user. For example:
- for a field requesting the entry of the user's e-mail address, the keyboard presented has the @ character without the user having to perform any keyboard manipulation (such as displaying the keyboard secondary)
- for a field requiring the entry of a telephone number, the numeric keypad is presented directly to the user;
- etc.
1. Check that the form is compatible with an automatic filling mechanism. For example, Google provides an autofill system on Android. Go to *Settings > System > Languages and input > Advanced settings > Autofill service* (depending on the platform version, the path may be different) to activate and configure the data.
1. On the application form, check that the system offers you an option to automatically fill in with the data provided.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.5 Identify input purpose (AA)](https://www.w3.org/Translations/WCAG21-fr/#identify-input-purpose)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.5.1 Identify Input Purpose (AA).

### [Theme 10](#topic-10): Navigation {id="topic-10"}

#### [Criterion 10.1](#crit-10-1) [A] In each screen, is the [tab order](glossary.md#tab-order) on the keyboard [consistent]( glossary.md#coherent-order-of-reading)? {id="crit-10-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate through all the elements on the screen and check that the tab order remains consistent. It is not mandatory that the tabulation follows the natural reading order (left to right and top to bottom for example) as long as the elements are accessible in a consistent order.
1. Locate the components on the screen (button for example) which update content (display of hidden element, dynamic updating of content for example):
1. activate the component;
1. After displaying the updated content, verify that the tabulation remains consistent.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.4.3 Focus order (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order)
- EN 301 549 V3.2.1 (2021-03): 11.2.4.3 Focus Order (A).

#### [Criterion 10.2](#crit-10-2) [A] In each screen, is the order of restitution by the assistive technologies [consistent](glossary.md#coherent-order-of -reading)? {id="crit-10-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Enable **screen reader**.
1. Navigate all the elements of the screen with the screen reader gestures and check that the order of access to the elements of the screen (interactive components and texts) remains consistent. It is not obligatory that the order follow the natural reading order (from left to right and top to bottom for example) as long as the elements are accessible in a coherent order which does not pose comprehension problems.
1. Locate the components on the screen (button for example) which update content (display of hidden element, dynamic updating of content for example):
1. activate the component;
1. After displaying the updated content, verify that the screen reader path remains consistent.
1. If this is the case, the criterion is validated.

**Example of content whose implementation poses a comprehension problem:** an arrival time and a departure time are displayed on the screen in the form of two blocks of visual information (arrival time 5:00 p.m.; ; departure time 6:00 p.m.). The screen reader sequentially reaches &ldquo;arrival time&rdquo; then &ldquo;departure time&rdquo; then &ldquo;5 p.m.&rdquo; and finally &ldquo;6:00 p.m.&rdquo;. The reading order does not correspond to the visual order, and the reading order is problematic since it does not allow the information to be linked together.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.2 Logical sequential order (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence), [2.4.3 Focus traversal (A) ](https://www.w3.org/Translations/WCAG21-fr/#focus-order)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.2.1 Meaningful Sequence, 11.2.4.3 Focus Order (A), 11.5.2.10 Text.

#### [Criterion 10.3](#crit-10-3) [A] In each screen, the navigation must not contain [keyboard trap](glossary.md#keyboard-trap). Is this rule respected? {id="crit-10-3"}

**[Test 10.3.1](#test-10-3-1):** In each screen, does each element receiving focus satisfy one of these conditions? {id="test-10-3-1"}
- It is possible to navigate to the next or previous focusable element with the keyboard;
- The user is informed of a functional mechanism allowing the keyboard to reach the next or previous element that can receive the focus.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate all elements of the screen using the dedicated keyboard keys (by default in iOS, it is the <kbd>Tab</kbd> keys and the direction arrows that are used to navigate in the contents).
1. Check that:
- from the current position, the next or previous focusable element can be reached with the keyboard navigation keys;
- the element currently in focus offers a keyboard method (for example, a keyboard shortcut) to reach the next or previous element.
1. If this is the case, the criterion is validated.

**Note:** Certain complex elements, often managed by the platform, may require optimized navigations which generally use the direction arrows to move from one part of the component to another.
The test on the keyboard trap is then limited to verifying that the component can be reached and that it is possible to move on to the next component or return to the previous component. We do not check the actual use of the component in this criterion.

###### Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. Navigate through all the elements of the screen using the keyboard keys (the keys or the key combination which will have been associated in Switch Access for the parameters &laquo;&nbsp;Switch to next option&raquo; and &ldquo;Skip to previous option&rdquo;).
1. Check that:
- from the current position, the next or previous focusable element can be reached with the keyboard navigation key;
- the element currently in focus offers a keyboard method (for example, a keyboard shortcut) to reach the next or previous element.
1. If this is the case, the criterion is validated.

**Note:** Certain complex elements, often managed by the platform, may require optimized navigations which generally use the direction arrows to move from one part of the component to another.
The test on the keyboard trap is then limited to verifying that the component can be reached and that it is possible to move on to the next component or return to the previous component. We do not check the actual use of the component in this criterion.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.1.1 Keyboard (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard), [2.1.2 No keyboard trap (A)]( https://www.w3.org/Translations/WCAG21-fr/#no-keyboard-trap).
- EN 301 549 V3.2.1 (2021-03): 11.2.1.1.1 Keyboard (A), 11.2.1.2 No Keyboard Trap (A).

#### [Criterion 10.4](#crit-10-4) [A] In each screen, the [keyboard shortcuts](glossary.md#keyboard-shortcut) using only one key (lowercase or uppercase letter , punctuation, number or symbol) are they controllable by the user? {id="crit-10-4"}

**[Test 10.4.1](#test-10-4-1):** In each screen, each keyboard shortcut using only one key (lowercase or uppercase letter, punctuation, number or symbol) Does it satisfy any of these conditions? {id="test-10-4-1"}
- A mechanism is available to disable the keyboard shortcut;
- A mechanism is available to configure the keyboard shortcut key using modifier keys (<kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Shift</kbd>, etc.)&nbsp ;;
- In the case of an interface component, the keyboard shortcut associated with it can only be activated if the keyboard focus is on this component.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Connect an **external keyboard** (and [configure keyboard navigation](methodologie.md#external-keyboard)).
1. From the application, successively press each of the printable character keys (lowercase letters a-z, uppercase letters A-Z, numbers 0-9, all symbols like $,\*,%,! etc. from now on where they can be written on the screen).
1. If the keyboard shortcut is associated with a single isolated component of the screen, check that it can only be activated if the keyboard focus is inside this component.
1. Otherwise, if an action is triggered, check the presence in the application of a configuration element allowing:
- disable these single-key keyboard shortcuts;
- configure these keyboard shortcuts by adding a modifier key <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Shift</kbd>, etc.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.1.4 Keyboard shortcuts using characters (A)](https://www.w3.org/Translations/WCAG21-fr/#character-key-shortcuts).
- EN 301 549 V3.2.1 (2021-03): 11.2.1.4.1 Character Key Shortcuts (A).

### [Theme 11](#topic-11): Consultation {id="topic-11"}

#### [Criterion 11.1](#crit-11-1) [A] For each screen, does the user have control over each [time limit modifying content](glossary.md#procede- de-refresh) (except in special cases)? {id="crit-11-1"}

**[Test 11.1.1](#test-11-1-1):** Does each time limit meet one of these conditions? {id="test-11-1-1"}
- The user can stop or restart the refresh;
- The user can increase the time limit between two refreshes by ten times, at least;
- The user is warned of the impending refresh and has at least twenty seconds to increase the time limit before the next refresh;
- The time limit between two refreshes is twenty hours, at least.

##### Special cases

The criterion is not applicable when the time limit is essential, in particular when it could not be removed without fundamentally changing the content or the functionalities linked to the content.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the processes limiting the time of a session (for example after authentication).
1. Check:
- the presence of a mechanism allowing the user to remove the time limit (for example, a toggle button allowing the user to activate or deactivate the session time limit);
- or the presence of a mechanism allowing the user to increase the time limit (for example, a drop-down list with available connection time values);
- or the presence of a mechanism that alerts the user of the impending time limit and allows at least 20 seconds for the user to increase the time limit (for example, opening a modal with a button to increase the time limit);
- or that the time limit is twenty hours, at least.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing adjustment (A)](https://www.w3.org/Translations/WCAG21-fr/#timing-adjustable), [2.2.2 Pause, stop, hide (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide).
- EN 301 549 V3.2.1 (2021-03): 11.2.2.1 Timing adjustable (A), 11.2.2.2 Pause, Stop, Hide (A).

#### [Criterion 11.2](#crit-11-2) [A] For each screen, can each process limiting the time of a session be stopped or deleted (except in special cases)? {id="crit-11-2"}

**[Test 11.2.1](#test-11-2-1):** Does each process limiting the time of a session respect one of these conditions? {id="test-11-2-1"}
- User can remove time limit;
- User can increase the time limit;
- The time limit before the end of the session is at least twenty hours.

##### Special cases

The criterion is not applicable when the time limit is essential, in particular when it could not be removed without fundamentally changing the content or the functionalities linked to the content.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify session time limits (for example, logging out of a customer account).
1. Check:
- the presence of a mechanism allowing the user to remove the time limit (for example, a button with an explicit title);
- or the presence of a mechanism allowing the user to increase the time limit (for example, a setting available in the application to manage session times);
- or that the duration of the session is twenty hours, at least.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing Adjustment (A)](https://www.w3.org/Translations/WCAG21-fr/#timing-adjustable)
- EN 301 549 V3.2.1 (2021-03): 11.2.2.1 Timing adjustable.

#### [Criterion 11.3](#crit-11-3) [A] In each screen, does each office document for download have, if necessary, an [accessible version](glossary.md#accessible-version ) (excluding special cases)? {id="crit-11-3"}

**[Test 11.3.1](#test-11-3-1):** Does each office document meet one of these conditions? {id="test-11-3-1"}
- The document being downloaded is compatible with accessibility;
- There is an alternative version of the document for download compatible with accessibility;
- There is an alternative version of the document available for download in the application accessible to assistive technologies.

##### Special cases

The criterion is not applicable when office documents (e.g.: PDF, Microsoft or LibreOffice documents, etc.) were published before September 23, 2018 (unless this content is necessary for the needs of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation, according to the law of [May 28, 2019](http://legilux.public.lu/eli/etat/leg/loi/ 2019/05/28/a373/jo).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the components on the screen (a link, a form button or a download form for example) allowing you to download a file in office format (.doc, .docx, .pdf for example).
1. For each file offered for download, in an office format, check the presence of an alternative version presented as accessible.
1. If the alternative is offered in an office format (pdf, odt, doc, docx, EPUB/DAISY):
- download the file of the proposed alternative;
- if this file is in PDF format, check that it complies with the [reference for evaluating the accessibility of documents in PDF format (RAPDF 1)](../rapdf1/index.html).
- if this file is in another format, check that it complies with the criteria of [section 10 <span lang="en">Non-web documents</span>](https://www.etsi.org /deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of the European standard EN 301 549 v3.2.1.
1. If the alternative is offered in the application, check that the content complies with this standard.
1. Otherwise, for documents in office format (pdf, odt, doc, docx, EPUB/DAISY):
- download the file;
- if this file is in PDF format, check that it complies with the [reference for evaluating the accessibility of documents in PDF format (RAPDF 1)](../rapdf1/index.html).
- if this file is in another format, check that it complies with the criteria of [section 10 <span lang="en">Non-web documents</span>](https://www.etsi.org /deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of the European standard EN 301 549 v3.2.1.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content), [1.3.1 Information and relationships ( A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships), [1.3.2 Logical sequential order (A)](https://www.w3.org/ Translations/WCAG21-fr/#meaningful-sequence), [2.4.1 Bypassing blocks (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks), [2.4.3 Focus path (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order), [3.1.1 Page language (A)](https://www.w3 .org/Translations/WCAG21-fr/#language-of-page), [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name- role-value).
- EN 301 549 V3.2.1 (2021-03): all criteria in section 10 Non-web documents.

#### [Criterion 11.4](#crit-11-4) [A] For each office document having an [accessible version](glossaire.md#version-accessible), does this version offer the same information ( excluding special cases)? {id="crit-11-4"}

##### Special cases

The criterion is not applicable when office documents (e.g.: PDF, Microsoft or LibreOffice documents, etc.) were published before September 23, 2018 (unless this content is necessary for the needs of active administrative processes concerning tasks carried out by the public sector body concerned), they are exempt from the accessibility obligation, according to the law of [May 28, 2019](http://legilux.public.lu/eli/etat/leg/loi/ 2019/05/28/a373/jo).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. For each file offered for download in an office format which has an alternative version presented as accessible, check that the two documents (the original document and the version accessible in an office format or in the application) offer the same information .
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content), [1.3.1 Information and relationships ( A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships), [1.3.2 Logical sequential order (A)](https://www.w3.org/ Translations/WCAG21-fr/#meaningful-sequence), [2.4.1 Bypassing blocks (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks), [2.4.3 Focus path (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order), [3.1.1 Page language (A)](https://www.w3 .org/Translations/WCAG21-fr/#language-of-page), [4.1.2 Name, role and value (A)](https://www.w3.org/Translations/WCAG21-fr/#name- role-value).
- EN 301 549 V3.2.1 (2021-03): all criteria in section 10 Non-web documents.

#### [Criterion 11.5](#crit-11-5) [A] In each screen, does each cryptic content (ASCII art, emoticon, cryptic syntax) have an alternative? {id="crit-11-5"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate cryptic content on the screen (ascii art, emoticon, cryptic syntax).
1. Verify that a definition is available in the adjacent context (immediately before or after cryptic content, in adjacent text, or through activation of an interface component).
1. Otherwise, activate the **screen reader**.
1. Navigate to the cryptic content and verify that an alternative is rendered.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content).
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content (A).

#### [Criterion 11.6](#crit-11-6) [A] In each screen, for each cryptic content (ASCII art, emoticon, cryptic syntax) having an alternative, is this alternative relevant? {id="crit-11-6"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. For each cryptic content that has an alternative, check that the given alternative is relevant (it allows you to understand the content or function).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.1.1 Non-text content (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content).
- EN 301 549 V3.2.1 (2021-03): 11.1.1.1.1 Non-text Content (A).

#### [Criterion 11.7](#crit-11-7) [A] In each screen, [abrupt changes in brightness or flash effects](glossary.md#abrupt-change-of-brightness-or- (flash-effect) are they used correctly? {id="crit-11-7"}

**[Test 11.7.1](#test-11-7-1):** Do sudden brightness changes or flash effects satisfy any of these conditions? {id="test-11-7-1"}
- The frequency of the effect is less than 3 per second;
- The cumulative total surface area of the effects is less than or equal to 21,824 pixels.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify content on the screen that flashes or causes flash effects: animated graphic element, video or animation, formatting effect.
1. Check:
- that the frequency of the effect is less than 3 flashes per second;
- or that the cumulative area is less than 21824 pixels.
1. If this is the case, the criterion is validated.

Note: The [PEAT](https://trace.umd.edu/peat/) tool allows you to analyze videos in .avi format.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.3.1 No more than three flashes or below the critical threshold (A)](https://www.w3.org/Translations/WCAG21-fr/#three-flashes-or-below- threshold).
- EN 301 549 V3.2.1 (2021-03): 11.2.3.1 Three Flashes or Below Threshold (A).

#### [Criterion 11.8](#crit-11-8) [A] In each screen, is each moving or flashing content [controllable](glossary.md#control-content-in-movement-or- flashing) by the user? {id="crit-11-8"}

**[Test 11.8.1](#test-11-8-1):** Does every moving or flashing content meet one of these conditions? {id="test-11-8-1"}
- The duration of the movement or flashing is less than or equal to 5 seconds;
- User can stop and restart the movement or flashing;
- User can show and hide moving or flashing content;
- User can view the entire information without movement or flashing.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate moving or flashing content on the screen (a graphic element, a formatting effect, a carousel for example) automatically triggered when the screen loads or when content is displayed (see . note).
1. Check:
- that the total duration of the movement or flashing is less than 5 seconds;
- or the presence of a mechanism (a button for example) which allows the movement or flashing to be stopped and restarted;
- or the presence of a mechanism (a button for example) which allows moving or flashing content to be hidden and redisplayed;
- or the presence of a mechanism (a button for example) which allows the content to be displayed without movement or flashing.
1. If this is the case, the criterion is validated.

**Note:**
- stopping or pausing moving or flashing content via focus (the effect is only paused during focus but resumes once focus is lost) or by touching the content moving (the effect is paused only while pressure is applied to the contents, but resumes when pressure is released) are not considered compliant processes.
- in some cases the movement cannot be stopped, for example, a progress bar, in this case the criterion is not applicable.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.2.1 Timing adjustment (A)](https://www.w3.org/Translations/WCAG21-fr/#timing-adjustable), [2.2.2 Pause, stop, hide (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide)
- EN 301 549 V3.2.1 (2021-03): 11.2.2.1 Timing Adjustable (A), 11.2.2.2 Pause, Stop, Hide (A).

#### [Criterion 11.9](#crit-11-9) [AA] In each screen, is the proposed content viewable regardless of the orientation of the screen (portrait or landscape) (except in special cases) &nbsp;? {id="crit-11-9"}

**[Test 11.9.1](#test-11-9-1):** In each screen, does each content check these conditions? {id="test-11-9-1"}
- Consultation is possible regardless of the screen orientation mode;
- The content offered remains the same regardless of the orientation mode of the screen even if its presentation and the means of accessing it may differ.

##### Special cases

The criterion is not applicable when the orientation of the device is essential to the use of the application, for example: game interfaces, piano interfaces, etc.
If the interface is the only way to access the service offered, an alternative should be put in place.

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Open **Control Center**.
1. Check that the screen orientation is not locked in the platform settings ([see official documentation](https://support.apple.com/fr-fr/guide/iphone/iph3badf94ec/ ios)).
1. Display the application and switch the terminal alternately to landscape and portrait mode.
1. Check:
- that the application can be used in both orientations, that is to say that the elements of the application are repositioned to be readable;
- that the contents available in one orientation are always available in the other orientation (directly or by activating an additional component for example).
1. If this is the case, the criterion is validated.

###### Android

1. Open the **quick settings** panel.
1. Check that the &ldquo;Auto-rotate&rdquo; is activated ([see official documentation](https://support.google.com/android/answer/9083864?hl=fr)).
1. Display the application and switch the terminal alternately to landscape and portrait mode.
1. Check:
- that the application can be used in both orientations, that is to say that the elements of the application are repositioned to be readable;
- that the contents available in one orientation are always available in the other orientation (directly or by activating an additional component for example).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [1.3.4 Orientation (AA)](https://www.w3.org/Translations/WCAG21-fr/#orientation)
- EN 301 549 V3.2.1 (2021-03): 11.1.3.4 Orientation.

#### [Criterion 11.10](#crit-11-10) [A] In each screen, the functionalities that can be activated using a [complex gesture](glossary.md#complex-gestures-and-simple-gestures) can they be activated using a [simple gesture](glossaire.md#complex-gestures-and-simple-gestures) (except in special cases)? {id="crit-11-10"}

##### Special cases

The criterion is not applicable for the following elements:
- The gestures required by the platform.
- Functionalities for which performing a complex gesture is essential (drawing a signature, for example).

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the features on the screen that require complex gestures (identify the presence of instructions in the interface or in documentation associated with the application), for example:
- the simultaneous use of two or more fingers;
- creating a trajectory (like the swipe gesture).
1. Check that there is an alternative method to perform the associated action with a simple gesture, for example pressing a single key on the keyboard or a button.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.5.1 Gestures for pointer control (A)](https://www.w3.org/Translations/WCAG21-fr/#pointer-gestures).
- EN 301 549 V3.2.1 (2021-03): 5.5.1 Means of operation, 5.9 Simultaneous user actions, 11.2.5.1 Pointer Gestures.

#### [Criterion 11.11](#crit-11-11) [A] In each screen, are the functionalities that can be activated by performing simultaneous actions activated by means of a single action. Is this rule respected (except in special cases)? {id="crit-11-11"}

##### Special cases

The criterion is not applicable for actions required by the platform.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify on the screen the functionalities that require the performance of two simultaneous actions, for example:
- the simultaneous use of two or more keys on a keyboard;
- having to say a voice command and touch the screen at the same time to perform an action.
1. Check that there is an alternative method in the screen or application to perform the action associated with a single action, for example pressing a button.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.9 Simultaneous user actions.

#### [Criterion 11.12](#crit-11-12) [A] In each screen, can actions triggered by a pointing device on a single point on the screen be subject to 'a cancellation (except in special cases)? {id="crit-11-12"}

**[Test 11.12.1](#test-11-12-1):** In each screen, do actions triggered by a pointing device on a single point on the screen verify the one of these conditions (except in special cases)? {id="test-11-12-1"}
- The action is triggered when the pointing device is released or raised;
- The action is triggered when the pointing device is pressed or placed and then canceled when the pointing device is released or raised;
- The [action is complex](glossary.md#action-complex) and a mechanism is available to abort (before completion of the action) or cancel (after completion) the execution of the action.

##### Special cases

The criterion is not applicable when the functionality requires that the expected behavior be performed during a top-down event, for example, a keyboard emulator whose keys must activate when pressed like on a physical keyboard.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the interactive components on the screen (for example, button or link).
1. For each interactive component, simply press on it and maintain pressure.
1. Move your finger outside the interactive zone and note that the associated action is not triggered.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.5.2 Pointer action cancellation (A)](https://www.w3.org/Translations/WCAG21-fr/#pointer-cancellation)
- EN 301 549 V3.2.1 (2021-03): 11.2.5.2 Pointer Cancellation (A).

#### [Criterion 11.13](#crit-11-13) [A] In each screen, can the functionalities that involve movement from or to the device be satisfied in an alternative way (excluding special cases )? {id="crit-11-13"}

**[Test 11.13.1](#test-11-13-1):** Does every feature that involves movement from or to the device meet these requirements? {id="test-11-13-1"}
- The functionality can be triggered with an interface component;
- The user has the option to deactivate motion detection to avoid accidental triggering of the functionality.

##### Special cases

The criterion is not applicable when:
- Movement is essential to achieve functionality (e.g. pedometer).
- Motion detection is used to control functionality through an accessibility-compatible interface.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify on the screen the functionalities that are triggered by a movement of the device or a gesture towards the device (for example, identify the presence of instructions in the interface or in documentation associated with the device). application which describes this type of triggering).
1. Check:
- that the functionality can be triggered without movement, for example by activating a button or link;
- and that the app offers a method to disable motion detection (for example, a setting in the app).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: [2.5.4 Motion Actuation (A)](https://www.w3.org/Translations/WCAG21-fr/#motion-actuation)
- EN 301 549 V3.2.1 (2021-03): 5.5.1 Means of operation, 11.2.5.4 Motion Actuation (A).

#### [Criterion 11.14](#crit-11-14) [AA] For each conversion functionality of a document, the [accessibility information](glossary.md#accessibility-information) available in the source document are they preserved in the destination document (except in special cases)? {id="crit-11-14"}

All digital formats such as text, audio and video are affected.

##### Special cases

The criterion is not applicable when the conversion format does not have the elements necessary for the identification of accessibility information. For example, if the conversion is from an HTML format to a TXT format, then the criterion is not applicable.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the document conversion functionalities on the screen (for example export to PDF, .odt, HTML, etc.)
1. Locate in the original content the accessibility information present (for example, an alternative of a graphic element, heading levels, a table of contents).
1. Check that in the document resulting from the conversion, the accessibility information is still present (unless the chosen conversion format does not have support for the accessibility information of the source document).
1. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.4 Preservation of accessibility information during conversion.

#### [Criterion 11.15](#crit-11-15) [A] Each identification or control functionality of the application that relies on the use of [biological characteristic](glossary.md#biological-characteristic ) of the user, does it have an alternative method? {id="crit-11-15"}

**[Test 11.15.1](#test-11-15-1):** Each identification or control functionality of the application which is based on the use of biological characteristic of the user respects- one of these conditions? {id="test-11-15-1"}
- There is an alternative that does not rely on a biological characteristic of the user;
- There is an alternative which is based on a biological characteristic of the user which is sufficiently different.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify on the screen the identification (authentication) and control functionalities which are based on the use of biological characteristics (for example voice recognition, fingerprint, facial recognition).
1. Check that there is an alternative method to perform the action, for example:
- for an authentication feature that involves fingerprint recognition, a button is available on the login screen to access entering a password instead.
- for an authentication functionality that involves voice recognition, the application also offers fingerprint recognition (if the alternative method is also based on a biological characteristic, it is desirable that it does not involve a biological characteristic similar. For example, if the initial method involves voice, the alternative method should not involve voice.)
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.3 Biometrics.

#### [Criterion 11.16](#crit-11-16) [A] For each application that includes a [key repeat](glossary.md#key-repetition) functionality, is the repeat adjustable (excluding special cases)? {id="crit-11-16"}

**[Test 11.16.1](#test-11-16-1):** For each application that includes key repeat functionality, are the following conditions met? {id="test-11-16-1"}
- The trigger delay for the repeat function can be set to at least 2 seconds;
- The delay between two repetitions can be set to at least 2 seconds.

##### Special cases

The criterion is not applicable:
- For key repetitions managed at the platform level;
- For apps that have a method to disable key repeat functionality.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of a key repetition functionality in the application (for example, identify the presence of instructions in the interface or in documentation associated with the application).
1. Check that the snooze function trigger delay (the delay between the very first key press to snooze and the snooze function being implemented):
- is at least 2 seconds;
- or that there is a method allowing it to be set to at least 2 seconds (for example, an input field in the application user settings).
1. Check that the time between two repetitions:
- is at least 2 seconds;
- or that there is a method allowing it to be set to at least 2 seconds (for example, an input field in the application user settings).
1. If so, the test is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.7 Key repeat.

### [Theme 12](#topic-12): Documentation and accessibility features {id="topic-12"}

#### [Criterion 12.1](#crit-12-1) [AA] Does the application documentation describe the [accessibility features](glossary.md#accessibility-feature) of the application and their use? {id="crit-12-1"}

**[Test 12.1.1](#test-12-1-1):** Does the application documentation include at least the following? {id="test-12-1-1"}
- A description of the application's accessibility features;
- An explanation of how to use the application's accessibility features;
- Information regarding the accessibility of the platform and its compatibility with assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of documentation in the application, for example:
- a help screen;
- an [accessibility declaration](../obligations.html#accessibility-declaration);
- any other content that serves as documentation.
1. Identify the presence of accessibility features in the application.
1. Check the presence in the documentation:
- the description of the accessibility features of the application, for example:
- accessibility settings integrated into the application such as color management, font sizes, animation management;
- a personalized rotor on certain screens (the rotor is a feature of screen readers which allows rapid navigation between types of elements on a screen, certain platforms allow you to define quick navigation elements specific to an application in this rotor.[See a demo](https://developer.apple.com/videos/play/wwdc2020/10116/))&nbsp;;
- gestures or device movements that trigger features;
- special keyboard shortcuts available for certain assistive technologies.
- the description of the complex components for which specific management is implemented according to the assistance technologies;
- explanations on how to use these features (their location, methods for activating them);
- the description of elements that are non-compliant or not compatible with certain assistive technologies, and the presence of alternatives if applicable.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 12.1.1 Accessibility and compatibility features.

#### [Criterion 12.2](#crit-12-2) [A] For each [accessibility feature](glossary.md#accessibility-feature) described in the documentation, the entire path that allows enabling it meets the accessibility needs of users who need it. Is this rule respected (except in special cases)? {id="crit-12-2"}

##### Special cases

The criterion is not applicable for functionalities integrated into the platform.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the accessibility features described in the documentation in the application. For example:
- a functionality which allows access to a simplified language version of the application;
- a feature that allows you to lock the orientation of a screen.
1. Check that it is possible for users who need:
- to perceive the presence of this functionality in the interface;
- to activate this functionality, for example, a functionality is available which allows access to a simplified language version of the application, then all the components that make up the path to achieve the functionality must be in simplified language.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 5.2 Activation of accessibility features.

#### [Criterion 12.3](#crit-12-3) [A] The application does not disrupt the accessibility features of the platform. Is this rule respected? {id="crit-12-3"}

##### Evaluation methodology {class="disclosure method"}

###### iOS

1. Identify in the platform documentation the accessibility features made available to users (see the [documentation concerning the accessibility features provided by iOS](https://www.apple.com/fr/accessibility/? afid=p238%7CsfxtLHWp4-dc_mtid_2092576239937_pcrid_483515907294_pgrid_110868765821_&cid=wwa-fr-kwgo-features--slid---productid---Accessibility-Accessibility-)).
1. Check that the application does not prevent their use, for example:
- if the application implements interactions that trigger functionalities, these interactions do not prevent the proper functioning of the accessibility features of the platform such as the screen reader or other touch-based functionalities;
- if the application includes voice recognition, then the use of the voice command integrated into the platform is not disrupted;
- if the application implements keyboard shortcuts, these do not use key combinations already used by the platform for accessibility features ([VoiceOver can be used with a keyboard](https://support.apple .com/fr-fr/guide/iphone/iph6c494dc6/ios) for example, the shortcuts offered should not interfere);
- or any other functionality of the application.
1. If this is the case, the criterion is validated.

###### Android

1. Identify in the platform documentation the accessibility features made available to users (see the [documentation regarding accessibility features provided by Android](https://support.google.com/accessibility/android/answer /6006564?hl=fr)).
1. Check that the application does not prevent their use, for example:
- if the application implements interactions that trigger functionalities, these interactions do not prevent the proper functioning of the accessibility features of the platform such as the screen reader or other touch-based functionalities;
- if the application includes voice recognition, then the use of the voice command integrated into the platform is not disrupted;
- if the application implements keyboard shortcuts, these do not use key combinations already used by the platform for accessibility features ([TalkBack can be used with a keyboard](https://support.google .com/accessibility/android/answer/6110948?hl=fr&ref_topic=10602074) for example, the shortcuts offered should not interfere);
- or any other functionality of the application.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.6.2 No disruption of accessibility features.

#### [Criterion 12.4](#crit-12-4) [A] Is the application documentation accessible? {id="crit-12-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of documentation in the application, for example:
- a help screen;
- an [accessibility declaration](../obligations.html#accessibility-declaration);
- any other content that serves as documentation (this can be a PDF document, an external HTML page readable in a web browser).
1. If so, check for each item of documentation:
- if it is a web page, that it respects the [RAWeb1](../raweb1/criteres.html)&nbsp;;
- if it is an office document in PDF format, that it complies with the [reference for evaluating the accessibility of documents in PDF format (RAPDF 1)](../rapdf1/index.html) .
- if it is an office document in another format, that it complies with the criteria of [section 10 <span lang="en">Non-web documents</span>](https:// www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf#page=52) of the European standard EN 301 549 v3.2.1;
- if it is an application screen, that this standard is respected (the page **[Obligations](../obligations.html)** also details that the screens relating to the documentation must be included in the evaluation sample).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 12.1.2 Accessible documentation, 12.2.4 Accessible documentation.

### [Theme 13](#topic-13): Editing tools {id="topic-13"}

#### [Criterion 13.1](#crit-13-1) [A] Does the [editing tool](glossaire.md#edition-tool) allow you to define the [accessibility information] (glossary.md#accessibility-information) necessary to create compliant content? {id="crit-13-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the editing functionalities in the tool (for example, a text editor, but it can be a media library or any other interface that allows you to enter text or define properties).
1. Verify that it is possible to define the accessibility information necessary to make the content RAWeb compliant. For example:
- define the text alternative of an image from the text editor or a media library;
- define a link title;
- etc.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.2 Accessible content creation.

#### [Criterion 13.2](#crit-13-2) [A] Does the [editing tool](glossaire.md#outil-d-edition) provide support for content creation accessible? {id="crit-13-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify in the tool the presence of aids for creating accessible content. This can be:
- user documentation that explains how to set accessibility properties for each content element;
- automatic or semi-automatic tests available from the editing features;
- manual tests available from the editing features to guide authors in detecting errors.
1. Check that the aids for creating accessible content are relevant, that is to say, that they allow the creation of accessible content.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.2 Accessible content creation.

#### [Criterion 13.3](#crit-13-3) [A] Is the content generated by each [transformation](glossary.md#transformation) of content accessible (except in special cases)? {id="crit-13-3"}

##### Special cases

The criterion is not applicable when the destination format does not allow the accessibility information present in the input content to be preserved.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. From the editing functionalities (a text editor, but it can be a media library and any other interface that allows you to enter text or define properties), enter the types of content offered by the editor (title, list , table, image, etc.). Also use the different parameters allowing you to define accessibility information (enter the textual alternative of an image, add a description to a link, etc.)
1. Save entries.
1. View the generated content:
- in the editing functionality (for example, in the text editor);
- in the content publication interface (for example, the publication web page).
1. Check:
- that accessibility information (e.g. image alternative, heading levels) is preserved in the generated content;
- that the technology supports accessibility information for the restructured form of the information (check that the transformation of the information is compatible with the technology, in particular to ensure that this information can be used by assistive technologies ).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.3 Preservation of accessibility information in transformations.

#### [Criterion 13.4](#crit-13-4) [AA] For each accessibility error found by an automatic or semi-automatic accessibility test, does the editing tool provide suggestions for repair? {id="crit-13-4"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of automatic or semi-automatic testing functionalities in the tool.
1. Modify the values or contents in the edit boxes in order to create accessibility errors in the generated content (web and non-web).
1. Enable testing features.
1. Check:
- that the tool automatically repairs the error;
    - or that the tool provides the author with suggestions for repairs.
1. In the case of a semi-automatic test, check:
- the tool provides decision support and repair suggestions;
    - or that the tool provides the author with explanations enabling him to carry out the repair.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.4 Repair Assistance.

#### [Criterion 13.5](#crit-13-5) [A] For each set of [templates](glossary.md#template), at least one template makes it possible to meet the requirements of [RAWeb](.. /raweb1/criteres.html). Is this rule respected? {id="crit-13-5"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of templates made available by the editing tool.
1. Test compliance with the [RAWeb](../raweb1/criteres.html) criteria and check that at least one of the templates is fully compliant.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.5 Templates.

#### [Criterion 13.6](#crit-13-6) [A] Is each [template](glossary.md#template) that meets the RAWeb requirements clearly identifiable? {id="crit-13-6"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of templates that fully comply with [RAWeb](../raweb1/criteres.html) made available by the editing tool.
1. Check the presence of an explicit mention allowing them to be identified. For example, from the list of templates, compliant templates have a label “accessible template”.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 11.8.1 Content technology, 11.8.5 Templates.

### [Topic 14](#topic-14): Support Services {id="topic-14"}

#### [Criterion 14.1](#crit-14-1) [AA] Does each [helpdesk](glossary.md#helpdesk) provide information related to [accessibility features] (glossary.md#accessibility-feature) of the application described in the documentation? {id="crit-14-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Locate the provision of an assistance service from the application.
1. If this is the case, identify the presence of documentation in the application, for example:
- a help screen;
- an [accessibility declaration](../obligations.html#accessibility-declaration);
- any other content that serves as documentation.
1. Identify the presence in the documentation:
- the description of the accessibility features of the application, for example:
- accessibility settings integrated into the application such as color management, font sizes, animation management;
- a personalized rotor on certain screens (the rotor is a feature of screen readers which allows rapid navigation between types of elements on a screen, certain platforms allow you to define quick navigation elements specific to an application in this rotor.[See a demo](https://developer.apple.com/videos/play/wwdc2020/10116/))&nbsp;;
- gestures or device movements that trigger features;
- special keyboard shortcuts available for certain assistive technologies.
- the description of the complex components for which specific management is implemented according to the assistance technologies;
- explanations on how to use these features (their location, methods for activating them);
- the description of elements that are non-compliant or not compatible with certain assistive technologies, and the presence of alternatives if applicable.
1. Check that the support service offers information regarding these features.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 12.2.2 Information on accessibility and compatibility features.

#### [Criterion 14.2](#crit-14-2) [A] The [helpdesk](glossaire.md#assistance-service) meets the communication needs of people with disabilities directly or through [l 'intermediary of a relay service](glossary.md#relay-service). Is this rule respected? {id="crit-14-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the presence of a support service in the application.
1. If this is the case, check that the assistance service can be used by all people with disabilities. It may be helpful to search the application documentation to find this information. For example, if the support service is available from a telephone number, check that there are alternative means for users who cannot express themselves orally (people who are deaf or hard of hearing) or who cannot use verbal language (people with aphasia). For example:
- instant messaging which provides an equivalent service (real-time dialogue with a human operator);
- the provision of a simultaneous written or visual translation of oral or audio information, or the provision of a sign language interpreter (use of a relay service).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 12.2.3 Effective communication.

### [Theme 15](#topic-15): Real-time communication {id="topic-15"}

#### [Criterion 15.1](#crit-15-1) [A] For each [bidirectional oral communication application](glossary.md#bidirectional-oral-communication-application), is the application capable of encoding and decoding this communication with a frequency range whose upper limit is at least 7,000 Hz? {id="crit-15-1"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

The safest way to evaluate this criterion is to search either the interface or the application documentation to obtain this information. It is also recommended to ask the application publisher to provide this information.

An implementation of [ITU-T recommendation G.722](https://www.itu.int/rec/T-REC-G.722/fr) for example seems to be an optimal solution.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.1 Audio bandwidth for speech.

#### [Criterion 15.2](#crit-15-2) [A] Does each application that allows [bidirectional oral communication](glossary.md#bidirectional-oral-communication-application) have 'a functionality of [written communication in real time](glossary.md#communication-written-in-real-time)? {id="crit-15-2"}

**[Test 15.2.1](#test-15-2-1):** Does each application that allows two-way oral communication meet one of these conditions? {id="test-15-2-1"}
- The application has a built-in real-time written communication functionality;
- The application can be connected to a terminal that integrates real-time written communication functionality.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Verify that the application allows two-way oral communication.
1. If so, check for the presence of real-time written communication functionality (it may sometimes be necessary to enable a dedicated setting in the application to enable real-time written communication).
1. Otherwise, check if the application can connect to a terminal integrating real-time written communication functionality (this evaluation can be complex to carry out without the provision of a real-time communication terminal or if the network used by the terminal does not support real-time text protocols. A first step might be to search the documentation or ask the application publisher directly.)
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.1.1 RTT communication.

#### [Criterion 15.3](#crit-15-3) [A] For each application that allows [bidirectional oral communication](glossary.md#bidirectional-oral-communication-application) and [written in time real](glossary.md#communication-written-in-real-time), can the two modes be used simultaneously? {id="crit-15-3"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Verify that the application allows two-way oral communication.
1. If so, check for the presence of real-time written communication functionality.
1. If this is the case, check that it is possible to use both communication modes at the same time, that is to say that users can send written messages in real time at the same time as d other users speak for example.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.1.2 Concurrent voice and text.

#### [Criterion 15.4](#crit-15-4) [A] For each functionality of [written communication in real time](glossary.md#communication-written-in-real-time), messages can- be identified (except in special cases)? {id="crit-15-4"}

**[Test 15.4.1](#test-15-4-1):** For each real-time written communication feature, do messages meet these conditions? {id="test-15-4-1"}
- Received and sent messages are separated in the presentation;
- The presentation makes it possible to identify the nature of the message (received or sent);
- The presentation makes it possible to identify the authors of the messages;
- The nature of the message (received or sent) is accessible to assistive technologies;
- The identification of the author of the message is accessible to assistive technologies.

##### Special cases

The criterion is not applicable when the two-way oral communication functionality does not make it possible to identify the participants, it is then not required that the real-time written communication functionality identifies the authors of the messages.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Activate the application and the application's real-time written communication functionality on two terminals and connect them to the same session.
1. Send a written message from both terminals to obtain messages with different statuses (sent and received).
1. Check:
- that messages sent and received are visually separated (for example, messages sent are in one window and messages received in another, or there is a line break between each message received and sent if they are presented in one same window);
- that it is possible visually to distinguish messages sent and messages received (for example, spot the words “Sent” near a sent message or “Received” near a message 'a message received)&nbsp;;
- if the identification of the interlocutor is available for the oral mode of communication (for example, highlighting the avatar of the person speaking), that the authors of the written messages are also identified (for example, the presence of a name or identifier preceding the message).
1. Activate the **screen reader** and navigate through messages.
1. Check that the screen reader renders:
- information on the sent or received status of each message;
- identification of the author of the message.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.2.1 Visually distinguishable display, 6.2.2.2 Programmatically determinable send and receive direction, 6.2.2.3 Speaker identification.

#### [Criterion 15.5](#crit-15-5) [A] For each application of [two-way oral communication](glossary.md#application-of-oral-two-way-communication), a visual indicator of the oral activity present? {id="crit-15-5"}

- **[Test 15.5.1](#test-15-5-1):** For each real-time oral and written communication application, is a visual indicator of oral activity present? {id="test-15-5-1"}
- **[Test 15.5.2](#test-15-5-2):** For each two-way oral communication application that has real-time video, a visual indicator of oral activity is is he present? {id="test-15-5-2"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Verify that the application allows two-way oral communication and real-time written communication or real-time video streaming.
1. If this is the case, activate the application on two terminals and connect them to the same session.
1. Make a user speak from one of the terminals.
1. Check the interface for the appearance of a visual indicator to identify that a person is speaking. It is not necessary for this criterion to identify who is speaking, but simply to identify that there is a person who is speaking. For example, a halo around or an icon near the avatar of the person speaking.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.2.4 Visual indicator of Audio with RTT, 6.5.5 Visual indicator of audio with video.

#### [Criterion 15.6](#crit-15-6) [A] Each [real-time written communication](glossary.md#real-time-written-communication) application that can interact with Do other [real-time written communication](glossaire.md#real-time-written-communication) applications comply with the interoperability rules in force? {id="crit-15-6"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

No evaluation method is proposed for this criterion.

**Important note:** This criterion is very complex to evaluate and requires a certain mastery of all interoperability concepts and standards. If the application that you are evaluating or developing must cover this criterion, we refer you to the full reading of the 6.2.3 Interoperability criterion in the EN 301 549 standard.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.3 Interoperability.

#### [Criterion 15.7](#crit-15-7) [AA] For each application that allows [written communication in real time](glossary.md#communication-written-in-real-time), the delay transmission time of each [input unit](glossaire.md#input-unit) is 500ms or less. Is this rule respected? {id="crit-15-7"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Check that the application allows written communication in real time.
1. If this is the case, activate the application and the written communication functionality on two separate terminals and connect them to the same session.
1. Enter text on the first terminal and observe its appearance on the second terminal. The appearance on the second terminal must be instantaneous (less than half a second). Depending on how the feature works, each character is not sent individually. Indeed, if the real-time written communication functionality implements word prediction, it will be sent when the desired word is selected, not when the first characters are entered to trigger the suggestion display. A simple observation test may be sufficient to note the instantaneous appearance on the terminal which receives the written message.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.2.4 RTT Responsiveness.

#### [Criterion 15.8](#crit-15-8) [A] For each telecommunications application, is the identification of the interlocutor who initiates a call accessible? {id="crit-15-8"}

**[Test 15.8.1](#test-15-8-1):** For each telecommunications application that provides caller identification, does the identification meet these conditions? {id="test-15-8-1"}
- The identification of the interlocutor is presented in text form;
- The identification of the interlocutor is accessible to assistive technologies.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Activate the **screen reader** from a terminal.
1. From a second terminal, initiate a call to the first terminal.
1. When the incoming call appears, check:
- that the identification of the interlocutor is available in visible text format (for example, a name or telephone number);
- and that this identification is correctly rendered by **the screen reader**.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.3 Caller ID.

#### [Criterion 15.9](#crit-15-9) [A] For each [bidirectional oral communication](glossary.md#bidirectional-oral-communication-application) application that provides identification of the Questioner, is there a way to present this identification for sign language users? {id="crit-15-9"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Activate the application and start a video call between the two terminals.
1. Check the presence on the terminal receiving the call of a method allowing sign language users to identify the interlocutor.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.5.6 Speaker identification with video (sign language) communication.

#### [Criterion 15.10](#crit-15-10) [A] For each [two-way oral communication] application (glossary.md#two-way-oral-communication-application) that has [voice functionalities] (glossary.md#voice-functionalities), can these be used without the need to listen or speak? {id="crit-15-10"}

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

1. Identify the available functionalities (apart from the oral communication functionality) which are based on listening to information or speaking commands, for example:
- voicemail;
- an automatic telephone switchboard (for example, which requires you to say a number between 1 and 4 to be redirected to a service);
- or any other interactive voice server.
1. Check:
- that information is available without having to listen or speak;
- that the actions can be performed without having to listen or speak or that there is an alternative to the functionality that can be used without having to listen or speak.
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.4 Alternatives to voice-based services.

#### [Criterion 15.11](#crit-15-11) [AA] For each [bidirectional oral communication](glossary.md#bidirectional-oral-communication-application) application that has live video real time, is the video quality sufficient? {id="crit-15-11"}

**[Test 15.11.1](#test-15-11-1):** For each two-way oral communication application that has real-time video, are the following conditions met? {id="test-15-11-1"}
- The video resolution meets the [QVGA](glossary.md#qvga) standard at least;
- The frame rate is at least 20 frames per second;
- The delay between video and lyrics should not be more than 100ms.

##### Evaluation methodology {class="disclosure method"}

###### iOS and Android

For conditions regarding resolution and frame rate, the safest way to evaluate this criterion is to search either the interface or the application documentation to obtain this information. It is also recommended to ask the application publisher to provide these technical details.

For the last condition concerning the delay between video and audio, the test can be established on a simple observation:
1. Activate the application on two devices.
1. Establish a video call connection between the two terminals.
1. Check the synchronization between the lyrics and the video (lip sync, lip movement).
1. If this is the case, the criterion is validated.

##### Matches {class="disclosure mapping"}

- WCAG 2.1: N/A
- EN 301 549 V3.2.1 (2021-03): 6.5.2 Resolution, 6.5.3 Frame rate, 6.5.4 Synchronization between audio and video.
