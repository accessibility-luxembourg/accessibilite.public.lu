Unlike web content for which it is possible to inspect the source code to determine the presence of attribute elements, it is very difficult for mobile applications to proceed in the same way. On the one hand, because it would require high technical skills (you access the software, but rarely its code unlike a website). On the other hand, because unlike the web and technologies (HTML/CSS/JavaScript) there is a diversity of development environments which makes it difficult to define a list of tests based on code review.

This is why the chosen approach is to test the presence of certain elements through specialized tools (interface inspectors, assistive technologies, external switches) or directly on the interface itself.

For example, when the interface contains a graphic element carrying information, the criterion requires verifying that an alternative is available and relevant without giving more details on the techniques to be used to provide an alternative to a graphic element. To help with the evaluation, each criterion has a practical methodology (**which is not normative**) outlining a possible method of evaluating the criterion.

We also refer you to the documentation of language editors and application creation software in which you will find the devices to respect, the properties to use and, for some, specialized tools to inspect the interface or the code.

### Publisher Resources

#### Android
- [Android Accessibility Help](https://support.google.com/accessibility/android?hl=fr): description of assistive technologies and accessibility features found on Android systems.
- [Test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing)&nbsp;: presentation of tools and methods for evaluating the accessibility of Android apps.
- [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps): general development principles to respect certain accessibility rules.
- [Build more accessible apps](https://developer.android.com/guide/topics/ui/accessibility): set of resources for designing and developing accessible Android applications.

#### iOS
- [iOS Accessibility](https://www.apple.com/fr/accessibility/): description of assistive technologies and accessibility features present on iOS systems.
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/): General principles of accessibility for application interfaces mobile on iOS.
- [Videos and Tutorials](https://developer.apple.com/videos/frameworks/accessibility/): set of videos providing demonstrations of assistive technologies available on iOS or showing technical development methods to take take accessibility into account.

### Assessment tools

To evaluate the benchmark criteria, it will be useful to carry out tests by manipulating the parameters and assistive technologies of the platforms.

This section is not intended to provide exhaustive documentation or detailed explanations on how to handle these elements. Nevertheless, the essential elements for an evaluation process are listed, pointing to official documentation when possible and providing assistance with configuration or understanding if necessary.

#### Screen reader

The screen reader is one of the tools that will be most used for evaluating the accessibility of applications. Screen readers are used primarily by people who are blind or visually impaired to interact with an application.

Certain criteria require evaluating the compatibility of components with assistive technologies (including the screen reader), but the screen reader is also used to evaluate criteria that also impact other assistive technologies.

##### VoiceOver on iOS

VoiceOver is iOS's built-in screen reader.

###### Documentation

To get started with VoiceOver, we refer you to the official documentation which details the first steps for activating and using gestures.
- [Enable VoiceOver and practice using gestures on iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e415f/ios).
- [Change VoiceOver settings on iPhone](https://support.apple.com/fr-fr/guide/iphone/iphfa3d32c50/ios)
- [Learn VoiceOver gestures on iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e2281/ios): this page details the gestures available for navigating the interfaces with VoiceOver.
- [Control VoiceOver using the rotor on iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios): the rotor is a central element in navigation with VoiceOver. It allows you to select a type of element (link, button, header, etc.) as the target for quick navigation (swipe up/down). It is important to know about its existence and to know how to use it. Also consult [the list of parameters that can be found in the rotor](https://support.apple.com/fr-fr/HT204783).

###### Displaying voice output

It is useful to be able to view the voice output. In iOS you can activate the caption panel, which displays VoiceOver announcements in text format at the bottom of the screen. To do this, go to *Settings > Accessibility > VoiceOver* and at the bottom of the settings screen activate the “Caption Panel” setting.

##### TalkBack on Android

TalkBack is Android's built-in screen reader. In order to benefit from more options, it may be necessary to install a third-party application (developed by Android): [Android Accessibility Tools](https://play.google.com/store/apps/details ?id=com.google.android.marvin.talkback&hl=fr&gl=US).

###### Documentation

To get started with TalkBack, we refer you to the official documentation which details the first steps for activating and using gestures.
- [Activate or deactivate TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=fr&ref_topic=10601570).
- [TalkBack settings](https://support.google.com/accessibility/android/answer/6006589?hl=fr&ref_topic=10601570).
- [Use TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?hl=fr&ref_topic=10601570).
- [Use the TalkBack menu and playback control](https://support.google.com/accessibility/android/answer/6007066?hl=fr): playback control (or playback controls) is a feature similar to the VoiceOver rotor, it allows you to select element types (links, buttons, headers etc.) for quick navigation (swipe up/down).

###### Displaying voice output

It is useful to be able to view the voice output. In TalkBack you can activate a setting that displays TalkBack announcements in text format at the bottom of the screen. To do this, go to *Settings > Accessibility > TalkBack > Settings > Advanced settings > Developer settings* and activate the “Show voice output” setting.

Depending on the version of Android used, it is possible that the path to the &ldquo;Show voice output&rdquo; of TalkBack is not exactly the same.

#### External keyboard

Not all users with motor disabilities will be able to use the touchscreen interface; it will then be essential for them to interact using an external switch: keyboard or other external device.

In order to test the criteria relating to the use of applications with an external keyboard, it will be necessary to connect an external device to the terminal and configure a few elements in the platforms.

##### iOS

In order to allow control of the terminal by an external keyboard, it is necessary to activate the “Full keyboard access” option. To do this, go to *Settings > Accessibility > Keyboards > Full keyboard access* and activate &ldquo;Full keyboard access&rdquo;

iOS allows you to specify a focus style for users using an external device (*Settings > Accessibility > Keyboard > Full Keyboard Access*). The user can choose:
- hide it automatically after a configurable time;
- increase the size of the focus hold;
- to increase the contrast;
- to choose the color.

##### Android

Using an external keyboard with Android requires some additional settings to be effective. Indeed, for the interfaces and functionalities to be fully accessible to the keyboard, it is necessary to use the [Switch Access] application (https://support.google.com/accessibility/android/answer/6122836?hl=fr) with an external keyboard.

A configuration guide allows you to configure your external keyboard step by step by defining switches, it is available in *Preferences > Accessibility > Switch Access > Settings > Open configuration guide*. You will associate two actions:
- *Move to the next option*: Press the keyboard key you want to associate (we recommend <kbd>Tab</kbd> to keep the keys used when browsing on a computer).
- *Select*: Press the keyboard key you want to associate (we recommend <kbd>Enter</kbd> to keep the keys used when browsing on a computer).

Once the first configuration step is completed (with the configuration guide), it will be necessary to configure other navigation keys:
- *Switch Access > Settings > Assign switches for search*: Associate the *Switch to previous option* setting with a key or key combination (we recommend <kbd>Shift + Tab</kbd>)
- *Switch Access > Settings > Assign switches to actions*: Associate the *Return* setting with a key or key combination (we recommend <kbd>ESC</kbd>)

#### Testing applications

##### iOS (macOS)

Some methodology elements will offer you several testing methods, often as an alternative to assistive technologies for evaluating elements. With iOS, it is possible to plug the terminal into a computer with macOS and use the **Accessibility Inspector** application.

**[Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html)** is available from the software [Xcode](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) used for mobile application development. This tool is useful for carrying out certain tests. To activate it, launch Xcode, then from Xcode, follow the path *Xcode > Open Developer Tool > Accessibility Inspector*.

##### Android

To perform certain tests on Android applications, third-party applications are required or can help you in the evaluation.

- [**Android Accessibility Tools**](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&hl=fr&gl=US): Android application allowing you to add options and gestures to the Talkback screen reader.
- [**Accessibility Scanner**](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&hl=fr&gl=US): Android application allowing you to carry out automatic tests for certain criteria. Once installed, access the application from *Settings > Accessibility > Installed services > Accessibility Scanner*.

##### iOS and Android

- [Color Contrast Analyzer (CCA)](https://www.tpgi.com/color-contrast-checker/): tool for evaluating contrasts from the computer available on Mac and Windows .

#### Broadcast the mobile terminal screen

Broadcasting the screen of the mobile terminal to your computer will allow you to more easily carry out certain tests, such as contrast tests in particular. Additionally, this broadcast can allow you to record certain interactions and take screenshots when you need to write audit reports.

The distribution of the mobile terminal is not an essential requirement for the evaluation of applications, it is nevertheless useful since it can facilitate certain evaluation activities.

##### iOS

###### You have a computer with macOS

1. Connect the iOS terminal to the macOS computer using the USB cable.
1. Open the QuickTime software and in the *File* menu, select “New Video Recording”.
1. A window opens, if it broadcasts the image coming from your computer's camera, click to the right of the red recording button to modify the source to broadcast and choose your terminal.
1. The screen of your mobile terminal is now displayed on your computer.

###### You have a computer with Windows

There are a number of software (free or paid) to stream the iOS terminal to a Windows computer.

##### Android

There is an open source application that allows you to distribute an Android application on **Windows and macOS**: [SCRCPY](https://github.com/Genymobile/scrcpy).

On a macOS environment, its installation may require some technical knowledge. On Windows, it is used as a standard application. However, it is not essential that you project your mobile terminal, you can do without this installation (another method is detailed later in the document).

###### You have a computer with Windows

Windows provides a “Sign in” feature. integrated to broadcast certain external sources. [See documentation](https://support.google.com/pixelphone/answer/2865484?hl=fr&ref_topic=7084202).

#### Take screenshots

If broadcasting from mobile terminals to the computer screen is impossible, a satisfactory alternative is to take screenshots from your mobile terminal and then import these captures, using the method of your choice, onto your computer.

- [Take a screenshot or record the screen of your Android device](https://support.google.com/android/answer/9075928?hl=en).
- [Take a screenshot on an iPhone](https://support.apple.com/fr-fr/HT200289).

