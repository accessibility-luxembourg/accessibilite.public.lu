### A

#### Accessibility feature

Example of accessibility feature:
- a device allowing a palette of more contrasting colors to be loaded for users;
- a character size enlargement device;
- a component allowing access to a simplified language version.

#### Accessibility information

Accessibility information is all the information (attributes, programmatic relationships, alternatives, etc.) necessary to make content accessible. For example: the alternative of a graphic element, the semantics of a passage of text, the title of an inline frame...

For example, in HTML, the `alt` attribute of an image is accessibility information.

An editing tool should have features that allow you to define all the information necessary to create accessible content:
- be able to define the alternative of an image or, on the contrary, be able to declare it decorative;
- be able to define section titles;
- be able to define labels for form fields.

All accessibility criteria relating to the targeted content technology are affected. For example, for an HTML page, all RAWeb level A and AA criteria must be respected. For an application, all the criteria of this standard must be able to be respected.

#### Accessible and activated by the keyboard and any pointing device

Pointing devices in a mobile environment may be, but are not limited to:
- touch;
- the mouse;
- eye tracking devices;
- [point analysis](https://support.apple.com/fr-fr/HT201370) devices on iOS (or [point search](https://support.google.com/accessibility/android /answer/6395627?hl=fr) on Android);
- voice control.

An interface component (link, button, form field, etc.) is accessible by any pointing device when the user:
- can focus on the component, regardless of the device;
- can trigger the action planned by the interface component by a manipulation specific to the device (a certain key on the keyboard, a gesture on the screen for example);

**Attention:** for certain interface components such as potentiometers (slider, rotary knob), several interactions are possible and therefore several manipulations specific to the device may be required to interact with the component. On the keyboard, for example for potentiometers, the direction arrows (right, left, up and down) allow you to interact and modify the component.

In this reference, the expression “controllable by the keyboard and any pointing device” also relates to this definition.

**Important note:** the use of certain technologies can make focus management too complex or too unstable to rely only on tab, arrow keys and the enter key. In this case, providing keyboard shortcuts may be the only solution to make the component usable. The criterion can only be considered compliant on the condition that the keyboard shortcuts used are correctly documented, that they are functional and that they respect [criterion 10.4](referential-technique.md#crit-10-4).

#### Accessible to assistive technologies

For information to be accessible to assistive technologies, it must be made available to them, through the software itself or through an accessibility API, the latter method being The most common.

This can be achieved through descriptive properties sometimes not visible on the interface but rendered by assistive technologies, or through API parameters defining for example states (selected, active, deactivated, etc.)

#### Accessible version

Documents for download whose format types are recognized as compatible with accessibility must be made accessible either directly or through an accessible version. The document formats whose compatibility is recognized are:
- Microsoft Office (Word 2003, OOXML);
- Open Office Org (ODF);
- Adobe PDF;
- ePub/Daisy.

PDF documents must comply with the [reference for evaluating the accessibility of documents in PDF format (RAPDF 1)](../rapdf1/index.html).
Other types of content must comply with the criteria of [section 10 <span lang="en">Non-web documents</span>](https://www.etsi.org/deliver/etsi_en/301500_301599/301549 /03.02.01_60/en_301549v030201p.pdf#page=52) of the European standard EN 301 549 v3.2.1.

**Note:** the TXT format cannot be used to produce an accessible version for a document for download.

#### Adjacent clearly identifiable

The element is made available adjacent to the object identified by the criterion in the graphic representation and in the order of keyboard navigation. If necessary, the element can be available elsewhere in the software and be accessible with a functionality (a button for example) adjacent to the object identified in the criterion, explicit and clearly identifiable (the title of the functionality is explicit).

#### Adjacent color

Color directly in contact with the colors of the component or graphic element, this can be the background color or any other color in direct connection.

**Example:** in a “no entry” sign the red of the panel is the color adjacent to the white line in the center of the panel.

It is important to understand that [criterion 2.3](referential-technique.md#crit-2-3) on the contrasts of interface components and graphic elements only evaluates **non-textual** elements. As soon as it comes to evaluating the contrast of a text, even if it is present in an interface component, it is [criterion 2.2](referential-technique.md#crit-2-2 ) which applies.

Not all colors of a graphic element or interface component are to be evaluated. It is essential to assess:
- **Colorings that carry information** (not all colorings carry information):
- For example, in an app's navigation panel, the navigation buttons have a gray background color, but the active screen button has a green background color. It is necessary to check that the green color in direct connection with the gray background color has a contrast ratio of at least 3:1.
- **Coloring to identify the location of an element or interactive areas**, for example:
- The border of a form field, if this is the only way to identify the location of the interaction, must have a color that has a contrast ratio of at least 3:1 with the adjacent color, generally the background color;
- The borders of check boxes and radio buttons, as well as their state (selected or not). It is essential here to evaluate the contrast ratio of the border of these components with adjacent colors (usually the background color) but also to evaluate the contrast ratio of these components when they are selected. It must be assessed whether the visual element used to signify the selection has a sufficient contrast ratio.
- **The colors of non-textual elements carrying information** (graphic elements):
- A chevron is positioned to the right of the item selected in a list of items, the contrast ratio between the color of the chevron and adjacent colors (generally the background color) must be at least 3:1.

The background color of a form submit button for example (&ldquo;&nbsp;Send&rdquo;) does not have to be contrasted with the background of the screen. Indeed, the location of the button is done by the text, which must already respect the text contrast constraints ([criterion 2.2](referential-technique.md#crit-2-2)). The size of the button and its edges are not considered information that meets this criterion.

**Note 1:** in the case of the presence of a gradient, it is the adjacent color with the least contrast of the gradient which will be considered as the adjacent color.

**Note 2:** in the case of the presence of several colors, all of the colors will be considered as adjacent colors.

#### Alternative “audio only” version

An “audio only” version is a sound version, in the form of a simple file in MP3 format for example, used as an alternative to a video only (video without sound information). The only users impacted by accessibility are blind people, who cannot see the video.

The “audio only” version must contain all the important visual information of the video.

Generally, it is simpler to produce an audio version than a textual version when the video is very descriptive (the textual transcription often requires significant editorial work). It is recalled, however, that only the textual transcription ensures universal access to the information broadcast by the video, in the event that a user is not able to start the video for example.

#### Application mechanism that displays a compliant contrast ratio

Interface component made available by the author of the application whose activation allows you to modify the appearance of the screen.

This can, for example, be a replacement mechanism allowing content to be displayed with a sufficient contrast ratio. The appearance of this interface component must comply with [criterion 2.2](referential-technique.md#crit-2-2) and [criterion 2.3](referential-technique.md#crit-2-3) without itself have recourse to a mechanism allowing it to display a compliant contrast ratio.

Another example is a replacement mechanism for replacing text graphics with styled text.

This mechanism must keep the contents and functionalities of the application or screen that it modifies identical.

### B

#### Biological characteristic

User identification or control methods based on usable biological characteristics may be:
- fingerprint recognition;
- facial recognition;
- voice recognition.

### C

#### CAPTCHA

A CAPTCHA is a test used to distinguish a human user from a computer. The test often uses graphic elements containing distorted text, mixed with other shapes or using altered color schemes, which the user is asked to retype. Other forms of CAPTCHA may be based on logic questions or sound bites.

The W3C provides complete documentation on the accessibility of this type of test: [Inaccessibility of CAPTCHA](https://www.w3.org/TR/turingtest/).

#### Captioned graphic element

When a text, adjacent to a graphic element, contains information on the graphic element (for example a copyright, a date, an author, etc.) or is intended to supplement the information provided by the graphic element (for example a text associated with an image in an image gallery), we speak of a captioned graphic element.

When a graphic element is captioned, it is necessary to associate the legend with the graphic element, so that assistive technologies can treat the graphic element and its caption as a single whole.

#### Compatible with assistive technologies

Content or functionality must be compatible with user assistive technologies as well as software accessibility features via an accessibility API.

This concerns, at the same time, the technology, its functionalities and its uses:
- The way the technology is used must be compatible with the users' assistive technologies. This means that the way the technology is used has been tested for interoperability with users of assistive technologies in the software content.
- The technology runs natively on the platform and uses the platform's accessibility API.

#### Complex action

A complex action is an action for which the downward and upward action of the pointer constitute inseparable events from the action, so that it is not possible for the user to cancel the descending action simply by moving his pointer outside the interactive area. These are, for example, drag/drop mechanisms (drag'n'drop) during which the downward action of the pointer allows you to select an item and the upward action of the pointer allows you to position the item.

#### Complex data table

When a data table contains headers that are not distributed only on the first row and/or first column of the grid or whose scope is not valid for the entire column or row , we are talking about a complex data table. It is then necessary to provide a “summary” allowing its nature and structure to be explained in order to facilitate consultation for users of assistive technologies, for example.

#### Complex gestures and simple gestures

A simple gesture with a screen involves touching a single point on the screen. It can be a single press or click, a double press or double click, a long press.

A complex gesture can be:
- a gesture involving several points of contact on the screen (example: a gesture with two fingers on the screen to zoom in or out of a map);
- a gesture based on following a trajectory on the screen (example: function allowing you to detect the movement of a finger to the left or right on a touch surface to trigger a move to the previous/next item 'a carousel).

#### Component whose nature is not obvious

Interactive component mixed with non-interactive elements (text for example) and which is not visually distinguishable from the non-interactive elements.

#### Consistent (reading order)

Comprehensible content is readable (the order of the elements is logical) and coherent (the reading sequence is coherent).

#### Context switch

Major changes in the content of a screen which, if made without the user's awareness, can disorient the user who cannot see the entire screen at the same time. Context switches include changes:
- application;
- user agent;
- restitution space;
- focus;
- content that modifies the meaning of the screen.

**Note:** a change in content is not always a change in context. A change in content such as expanding a tree, a dynamic menu, or a tab move does not necessarily change the context, unless it also changes one of the elements listed above (focus, for example). example).

**Example:** opening in another user agent, moving focus to a different component, or significantly rearranging screen content are all examples of a context switch.

#### Contrast

Marked contrast between the brightness of a foreground color and a background color. The contrast ratio is based on the relative luminance difference between the background and the foreground according to the rule: (L1 + 0.05) / (L2 + 0.05) where L1 is the highest relative luminance light and L2 the darkest relative luminance. Brightness is calculated using the following formula: L = 0.2126 * R + 0.7152 * G + 0.0722 * B. Where R, G and B are defined by:
- If RsRGB <= 0.03928 then R = RsRGB/12.92 otherwise R = ((RsRGB+0.055)/1.055) ^ 2.4;
- If GsRGB <= 0.03928 then G = GsRGB/12.92 otherwise G = ((GsRGB+0.055)/1.055) ^ 2.4;
- If BsRGB <= 0.03928 then B = BsRGB/12.92 otherwise B = ((BsRGB+0.055)/1.055) ^ 2.4.

and RsRGB, GsRGB and BsRGB are defined by:
- RsRGB = R8bit/255;
- GsRGB = G8bit/255;
- BsRGB = B8bit/255.

The character “^” is the power operator.

**Note:** Contrast measurement is for text, content in graphics, text and in-frame text in animations, subtitle text and embedded text in videos. The texts present in the elements of a graphic element or a video (for example a sign, a poster, etc.) are not affected.

**Source:** [WCAG Contrast Calculation Procedure](https://www.w3.org/WAI/WCAG21/Techniques/general/G18#procedure).

#### Contrast (text size)

The standard distinguishes between several text sizes to be evaluated, each size falling within a contrast threshold. These sizes are evaluated in pixels or points. The larger the text (greater than 18.5px with fat or 24px without fat) the lower the required ratio (3:1).

Given the difficulty in evaluating font sizes on mobile, all text should be considered normal size except for significantly very large text.

For example, one might consider a text &ldquo;significantly very large&rdquo; if the letters which compose it have a height and/or width at least equal to 1.5 cm.

#### Control (moving or flashing content)

Ability for the user to control the display or playback of moving or flashing content using all pointing devices (touch, keyboard, mouse, etc.).

All moving content, with the exception of temporal media supported by the [Multimedia] theme (referential-technique.html#topic-3), is concerned: animated graphic elements, moving content for example.

**Note 1:** When appropriate, the control method should be available as the first element of the interface.

**Note 2:** The method of controlling moving or flashing content must allow the user to interact with the rest of the application. Consequently, stopping or pausing via an event triggered only when the focus is taken does not validate the criterion.

**Note 3:** in some cases, the movement is an integral part of the component and it is not possible to give control to the user, for example a progress bar whose function is to indicate by a movement the progress of an event such as a download. In this case, the criterion is not applicable.

#### Control (sound triggered automatically)

Ability for the user to stop or restart an automatically triggered sound.

**Note:** The sound control method should be available as the first item on the screen.

#### Control of consultation (of a temporal media)

Possibility for the user to control the consultation of a temporal media by the keyboard and any pointing device, at least. The following points must be observed:

List of mandatory consultation control features:
- The multimedia object must always have the following functionalities, at a minimum: play, pause or stop;
- If the media object has sound, it must have sound on/off functionality;
- If the multimedia object has audio description, it must have functionality to control the activation and deactivation of audio description.
- If the multimedia object has subtitles, it must have functionality to control the activation and deactivation of subtitles.

Each functionality must be accessible by the keyboard and any pointing device (touch, screen reader, keyboard, mouse, etc.).

If the player does not support including a second audio track for audio description, a link (or button) to an alternative video with audio description is a good alternative feature. The same goes for subtitles: if the video does not have subtitles that can be activated or deactivated, the presence of an alternative video with subtitles (available from a link or a button) is a satisfactory alternative.

**Note:** if there is no sound on a time-based media, there is no point in putting a sound on/off feature. If this functionality is however present and it requires a textual alternative to be understood by certain users, then it must be given one since the user is likely to access it and want to activate it.

### D

#### Data table

Element for structuring information in rows and columns via data cells and header cells.

#### Decorative graphic element

[Graphic element](#graphic-element) having no function and conveying no particular information in relation to the content with which it is associated. Examples:
- A graphic element used to set the layout.
- A graphic element present next to a button title just serving as a graphic feature (an icon, a formatting).
- A graphic element providing no information necessary for understanding the text with which it is associated (a decorative image).

#### Detailed description

Content associated with a [graphic element](#graphic-element) in addition to its textual alternative in order to fully describe the information conveyed by the element.

### E

#### Editing tool

Application allowing you to create or modify content intended to be distributed for other users. An editing tool can be used by one or more users working collaboratively.

An editing tool can be:
- the tool as delivered by the publisher;
- the tool augmented with extensions not developed by the publisher;
- a set of tools.

Examples of editing tools:
- application allowing you to edit and control the content of websites or applications, for example, CMS (Content Management System), LMS (Learning Management System), LCMS (Learning Content Management System), content aggregator;
- multimedia editing tools;
- application allowing the creation of web applications;
- application allowing code editing;
- application allowing you to export to a web technology format (for example, software that allows you to save in HTML);
- application which generates content based on templates, scripts, command line etc.;
- application allowing you to edit portions of web pages or applications (typically, blog systems, wikis and forums);
- email application allowing you to send e-mails.

Examples of editing tools that are not included in scope:
- An application whose created content is not made available to other users (note-taking application without sharing functionality for example). In this case, the edited content is only available to the owner and is not made available to other users.
- Forms for users. For example, an order form for an e-commerce application. Although the forms allow content to be edited, this content is not made available to other users.
- Independent accessibility control tools: these tools do not modify the content they control.

#### Essential features of subtitles

It is possible to apply presentation effects to subtitles (text color, style, font) in order to convey information to users (for example identify the person speaking). These characteristics are essential for the understanding of subtitles by users and should be preserved during the transformation processes (sending or recording the video for example) if they are present.

### F 

#### Fields of the same nature

In a form, set of fields that can be grouped by the nature of the expected information. Grouping aims to identify fields that should be treated as a set.

Some examples:
- Three successive fields to enter a date (day/month/year);
- Successive fields for a telephone number;
- A block intended to enter the identity and address of the user, when the form contains several contact blocks;
- A set of radio buttons or checkboxes that relate to a question.

These fields should be grouped when the field labels are not sufficient to inform the user that the fields are part of a grouping.

When the form is made up of a single block of information of the same nature (the identity and address of the user, for example) or a single field (a search engine, for example), the grouping fields are not required.

#### Focus

Focus is the state returned by an element that receives attention following a user action. There are several ways to give focus to an element:
- by activating the element by a pointing device (by touch on the screen);
- by reaching the element using a key on an external keyboard (tab, direction arrow);
- by reaching the element using an external switch (switch, joystick).

Focusing on a mobile environment must be assessed with the assistive technologies and appropriate settings activated. Indeed, the simple fact of connecting an external contactor (keyboard, switch for example) is not sufficient for keyboard management to be fully functional. Therefore, the visibility of the focus should only be evaluated when these elements are activated and configured. The [**Methodology**](methodology.md) page describes the procedures necessary for [configuring an external keyboard](methodology.md#external-keyboard).

#### For presentation purposes only

Use of interface elements for a purpose different from that provided for in the specifications. For example, a misuse in an application could be the use of an interactive element (button for example) as simple text.

### G 

#### Graphic element

An element using a visual representation such as images, pictograms or graphics.

This element may be composed of one or more parts whose visibility is necessary for its understanding (for example each point on each line of a statistics graph).

The role &ldquo;Image&nbsp;&rdquo; is not reproduced uniformly across all environments.
- TalkBack (Android): the nature of graphic elements is not rendered when they are integrated into a native application, the screen reader will render the description if it is defined but will not announce "image" ;&raquo;. On the other hand, for images integrated into [web views](glossary.md#web-views), the screen reader renders “Graphical elements”.
- VoiceOver (iOS): whether in a native application or in a web view, VoiceOver renders &ldquo;Image&nbsp;&rdquo; for the images it can access.

Generally speaking, depending on the development method, it is also possible that the role is not rendered on TalkBack or VoiceOver. From then on, it is observation alone which will make it possible to determine the nature of the element.

It is not essential that the &ldquo;Image&rdquo; is returned in the majority of cases. Except in special cases where identification of the role is essential, the absence of a role returned cannot constitute non-compliance.

#### Graphic element carrying information

[Graphical element](#graphic-element) which conveys information necessary for understanding the content with which it is associated.

### H

#### Helpdesk

A help desk can be:
- help desk,
- a call center,
- technical support,
- a [relay service](#relay-service),
- a training service.

### I

#### Ignored by assistive technologies

The restitution of elements such as decorative graphic elements which do not provide relevant information can create complex consultation conditions by overloading the restitution by assistive technologies with unnecessary information.

It is therefore important to be able to prevent the restitution of these elements. Most accessibility APIs have properties or methods to prevent this type of element from being rendered.

#### Indication given by shape, size or position

This could be, for example:
- the presence of a visual marker, to indicate the active screen in a navigation menu (indication given by the position);
- a foreground to indicate an active tab (indication given by the shape);
- a modification of the font size in a tag cloud (indication given by the size).
- Or any other similar graphic effect.

#### Information given by color

Information transmitted visually through color. The indication that the fields in red are mandatory in a form, the active button in a list of buttons, the change of color of an article name to indicate its unavailability in a list of articles are all examples of indication given by color.

The indication given solely by color must be accompanied by another method intended for users who do not see and perceive colors or their associations poorly.

The indication given by the color must be provided:
- by formatting for users who have difficulty perceiving colors;
- and by descriptive information (not visible) present on the element so that screen readers render the information to users who cannot see.

#### Input control (form)

Set of processes that allow the user to be notified:
- obligatory fields,
- indications of expected type or format,
- entry errors in a form.

#### Input unit

For character-by-character input, the smallest text entry unit is the character.

For a system that has word prediction functionality, the smallest input unit is the word.

For some voice recognition systems, text is not transcribed until an entire word or sentence has been spoken. In this case, the smallest input unit is the word or phrase.

#### Interface component

An interface component is an element with which the user can interact, for example a button, a link, an input box. Some components can be more complex such as a menu, a dialog window, a tab system. Finally, an interface component can be based on native elements of the platform language or developed from scratch.

### K 

#### Key repeat

Functionality which consists of printing (on the screen, in an input zone for example) a character several times as long as the corresponding key on the keyboard (visual or physical) is activated.

#### Keyboard shortcut

A way to trigger an action associated with a user interface component by pressing one or more keys on a keyboard.

#### Keyboard trap

We speak of a keyboard trap when a user who navigates by keyboard, from a position on the screen (for example a form field, a button, a complex component), cannot reach the next or previous component.

There are special cases where it is necessary to capture keyboard focus and prevent the user from reaching items following or preceding the item currently being viewed. For example, in a modal window it is imperative that the user navigating with the keyboard cannot reach components outside the modal window as long as the latter is active.

### N

#### Name, role, value, settings and status changes

A component must have an appropriate role and name, its values, states and any parameters must also be accessible and correctly passed to the accessibility APIs.

The name can be the title of the component such as the title of a button for example.

The value is, for example, the selected item in a drop-down list or the current value of a slider.

The role corresponds to the type of element defined in the specification of the technology used. The role (button, link, input field for example) is generally rendered by assistive technologies.

The setting corresponds to the specific information of a component. For example a parameter which transmits to the APIs the information that the component controls this or that content.

State changes must also be made available. For example, using a property to signal to APIs that the component is “open” or “closed”. Note: a state can also be transmitted via the name, when the title is changed dynamically to correspond to the state of the controlled zone in particular.

These parameters are not required, but may be required if they are essential to make the component accessible. It is up to the auditor to consider the cases where these parameters are essential depending on the context linked to the use of the component.

The auditor should also verify that, where present, these parameters are used correctly.

### O

##### Other replacement mechanisms not provided by the platforms

When the platform does not offer a replacement mechanism for certain parameters, the application can offer one from its interface.

### P

#### Personal data of the user

Personal data concerning the user in a form can be:
- the name;
- the first name;
- the password;
- the email address;
- the postal address;
- the postal code;
- telephone number;
- credit card codes;
- the birthday date;
- the URL of a web page presenting the user or the organization that the person represents.

#### Platform native controls

The platforms have native controls, for example a native color picker for color selection, a specific calendar or field containing format control for date selection, etc. Form fields that expect specific formats (like a date, for example) should use the platform's native controls to ensure maximum compatibility with assistive technologies.

#### Primary control (of temporal media)

Primary control features are the basic functionalities of a media player: play, pause, stop, sound control.

### Q

#### QVGA

QVGA resolution (Quarter Video Graphics Array) is a display standard which corresponds to a size of 320 pixels X 240 pixels (or 76,800 pixels).

### R

#### Refresh process

Technique aimed at modifying the content of one or more screen elements. The user must be able to control each cooling process independently.

#### Relay service

Relay services allow users, regardless of their mode of communication (text, signs, speech) to interact remotely in real-time communication with other participants, providing conversion between modes of communication.

For example, there are relays allowing a user who communicates with sign language to communicate with an interlocutor who does not practice it, through a service which provides a live interpreting service.

#### Replacement mechanism

An override mechanism is a device that allows the user to access a version of the application with certain (usually display) settings changed (for example, font and background colors).

This mechanism can be provided by the platform itself or by the application. When the platform has a robust replacement mechanism, authors should favor its use over an application-specific replacement mechanism.

The platforms offer users several replacement mechanisms. The activation of these replacement mechanisms is detectable by applications which can in return serve particular information and presentations.

##### Replacement mechanisms available in iOS

- **Increase contrast**: The option is available from the path: *Settings > Accessibility > Display and text size > Increase contrast*. When activated, this option allows you to load different styles that would have been defined by the author for this specific option in order to offer a more contrasting version to users who need it. In addition, this option allows you to increase the contrast of native iOS components such as the switch buttons.
- **Differentiate without color**: The option is available from the path: *Settings > Accessibility > Display and text size > Differentiate without color*. When enabled, this option allows you to load additional visual information other than color (for example, shape or size) that would have been defined by the author for this specific option in order to highlight a graphic element whose placement in color carries information (an active button for example).

##### Replacement mechanisms available on Android

There is no replacement mechanism in Android that is equivalent to those in iOS, or that is sufficiently robust.

The replacement mechanism available on Android (“**High contrast text**”) is still experimental. Its use is not currently recommended.

### S

#### Side by side (label and field side by side)

 The label and its field must be visually close, so that the relationship between the two cannot cause confusion.

#### Status message

A status message informs the user of a change in content on the screen without interrupting their main activity (there is no change of context such as a repositioning of focus on the message).

A status message can inform about:
- The success or result of an action;
- The busy state of an application;
- The progress status of a process;
- The existence of error.

A status message is not necessarily visible on screen, but it should still be accessible to assistive technologies.

#### Stylish text

Text whose appearance is controlled by the platform's formatting technology (such as CSS for HTML pages).

#### Summary (of table)

A summary is a passage of text associated with a complex data table. It provides information on the nature and structure of the table in order to facilitate its use by users of assistive technologies, for example.

**Note:** if the users mainly impacted are people who use screen readers, other users may also benefit from these indications, such as for example certain people with visual or intellectual disabilities. In this case the summary, if hidden by default, would be made visible via a button for example.

#### Sudden change in brightness or flash effect

Alternation of relative brightness that can cause seizures in some people, if their size is large enough in a specific frequency range.

#### Synchronized audio description (temporal media)

Narration added (via a sound file) to a sound track to describe important visual details that cannot be understood from the main sound track alone. The audio description must be synchronized with the temporal media by an application device linked to the media player.

**Note 1:** Audio description of a video provides information about actions, characters, scene changes, on-screen text and other visual content.

**Note 2:** In standard audio description, narration is added during pauses that exist in the dialogue. (See also extended audio description.)

**Note 3:** when all the information in the video is already given in the audio track, no additional audio description is required.

#### Synchronized subtitles (media object)

Text of audio information (words of a character, important noise to understand the action, etc.) present in a temporal media and displayed synchronously with the flow of the multimedia object.

**Note 1:** to differentiate sound sources (different characters, voice-overs, etc.), it is recommended to use an appropriate mechanism (putting in brackets, italics, explicit announcement of the type "voice-over") ;: &hellip;&nbsp;&raquo;).

**Note 2:** Subtitling for translation and subtitling for the deaf and hard of hearing should not be confused. These two types of subtitling pursue different goals. Only the presence and relevance of subtitling for the deaf and hard of hearing allows compliance.

### T

#### Tab order

Order in which keyboard focus moves (to a next element or to a previous element).

**Attention:** when an element initiates a change in the screen (change of context, management of hidden areas, addition of content, management of form fields, etc.) it is necessary to activate the element which initiates change to test the consistency of the tab order.

#### Template

A template is a document format that has predefined parameters. It is used to insert content edited by the author. A template has presentation parameters, usage parameters or even technical parameters that are not perceptible.

A template can concern an entire page or an entire screen (home page template, etc.) or specific types of content (forms, videos, etc.)

A set of templates is a group of templates that allow different formatting of the same element. For example:
- templates for the application home screen;
- templates for screens containing interactive elements;
- templates for creating a PDF.

#### Test graphic element

[Graphical element](#graphic-element) used in a test, a CAPTCHA or a graphic element used as a test in a quiz or a game. Example: a series of graphic elements presents a detail from famous paintings, it is necessary recognize the title and painter of each painting. In this situation, it is not possible to give a relevant alternative (for example the name of the painting and/or the painter) without rendering the test unusable. The alternative must then be content to give the possibility of identifying the graphic element, for example “image 1 of the test”.

#### Text graphic element

[Graphical element](#graphic-element) displaying text.

It is not recommended to use graphic elements containing text. When it is possible to reproduce the same effects with the technology in which the interface is developed, [criterion 1.8](referential-technique.html#crit-1-8) requires that the text be reproduced in this format or that A replacement mechanism allows the user to replace these graphic elements with stylish text.

#### Text transcription (time-based media)

Text content associated with time-based media using the appropriate technique (text present in the interface or in a text file located on the same screen or viewable using a button). This content gives the user access (independently from viewing the multimedia object) to:
- The totality of what is expressed orally.
- All descriptive information necessary for an equivalent understanding of the action.

This textual information must be presented in the chronological order of its appearance in the temporal media.

#### Time-based media (sound, video and synchronized type)

- Temporal audio-only media: sound content (wave, MP3…).
- Time-based media only video: images or photos in motion or in sequence.
- Synchronized temporal media: audio or video stream synchronized with another format to present information and/or including interactive temporal components. Time-based media can be viewed in 2 different ways:
- downloadable file viewable with external software;
- content embedded in the software and viewable from the interface.

Time-based media can be broadcast in real time or offered for playback asynchronously (pre-recorded media).

#### Timestamp (time stamp)

The timestamp of a video (time stamp) is the time value declared in the subtitle file.

```
1
00:00:03,000 --> 00:00:06,999
The subtitle should appear when the video reaches 3 seconds.
````

#### Title of a (data) table

Table-related text that identifies the contents of a data table in a clear and concise manner.

#### Toggle control

A toggle control is a control that can have 2 or 3 states, and therefore the user-defined state is persistent until the next state. This could be a screen lock control (the screen is either on or off), a control to enable or disable notifications for an application.

Examples of toggle controls:
- a check box,
- a radio button,
- a button that can have an activated or deactivated state.

#### Transformation

Process managed automatically by the tool. There are two types of transformation:
- content restructuring: transformation during which the input technology (e.g. HTML, XML, etc.) is not modified in the output, the restructuring only modifies elements of the markup. For example: table linearization, cutting a document into several pages.
- content recoding: transformation during which the input technology is modified in the output (e.g. HTML to XHTML, HTML to PDF). This concerns in particular the editing zones which use a syntax different from that which will be used for public display.

#### Two-way oral communication application

Two-way oral communication applications are applications that allow 2 or more people to speak simultaneously. An example of this are videoconferencing applications that allow people to talk at the same time.

### V

#### Voice features

In an oral communication system (telephony for example), functionalities can be made available, for example:
- a voicemail (answering machine);
- an automatic telephone switchboard which requires you to say a number between 1 and 4 to be redirected to a service,
- or any other interactive voice server.

### W

#### Web views

We also speak of web view. These are web pages (created in HTML and CSS) embedded in a mobile application. Web views can be entire application screens or only parts of screens (for example, advertising inserts).

#### Written communication in real time

Real-time written communication (Real-time text, RTT) is a mode of written communication that allows interlocutors to read the text being written by the sender, without waiting for the 'valid sender (for example with the enter key).

Example of real-time written communication integrated into a platform: [Answer or make RTT or TTY calls from iPhone](https://support.apple.com/en-us/HT207033)
