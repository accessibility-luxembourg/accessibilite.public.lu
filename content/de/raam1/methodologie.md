Unlike web content, where it is possible to inspect the source code to determine the presence of attribute elements, it is very difficult to do the same for mobile applications. On the one hand, because this would require a high level of technical expertise (you can access the software, but rarely its code, unlike a Website). Secondly, because unlike the web and technologies (HTML/CSS/JavaScript) there is a diversity of development environments which makes it difficult to define a list of tests based on code review.

This is why the chosen approach is to test for the presence of certain elements using specialised tools (interface inspectors, assistive technologies, external switches) or directly on the interface itself.

For example, when the interface contains an information-carrying graphic element, the criterion asks you to check that an alternative is available and relevant, without giving any further details on the techniques to be used to provide an alternative to a graphic element. To help with the assessment, each criterion has a practical methodology (**which is not prescriptive**) setting out a possible method of assessing the criterion.

We would also refer you to the documentation provided by language publishers and application creation software publishers, which sets out the features to be respected, the properties to be used and, in some cases, specialised tools for inspecting the interface or the code.

### Editor resources

#### Android
- [Android Accessibility Help](https://support.google.com/accessibility/android?hl=fr): description of the assistive technologies and accessibility features available on Android systems.
- [Test your app's accessibility](https://developer.android.com/guide/topics/ui/accessibility/testing){lang=en}: presentation of tools and methods for evaluating the accessibility of Android applications.
- [Make apps more accessible](https://developer.android.com/guide/topics/ui/accessibility/apps){lang=en}: general development principles for complying with certain accessibility rules.
- [Build more accessible apps](https://developer.android.com/guide/topics/ui/accessibility){lang=en}: a set of resources for designing and developing accessible Android applications.

#### iOS
- [iOS Accessibility](https://www.apple.com/fr/accessibility/): description of assistive technologies and accessibility features available on iOS systems.
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/introduction/){lang=en}: general accessibility principles for mobile application interfaces on iOS.
- [Videos and tutorials](https://developer.apple.com/videos/frameworks/accessibility/): a collection of videos demonstrating assistive technologies available on iOS or presenting technical development methods for taking accessibility into account.

### Evaluation tools

To assess the criteria in the framework, it will be useful to carry out tests using the parameters and assistive technologies of the platforms. 

This section does not attempt to provide exhaustive documentation or detailed explanations on how to use these elements. Nevertheless, the essential elements for an evaluation process are listed, with links to official documentation where possible, and with configuration or comprehension aids where necessary.

#### Screen reader

The screen reader is one of the tools that will be most widely used to evaluate the accessibility of applications. Screen readers are mainly used by blind or partially-sighted people to interact with an application.

Some criteria involve assessing the compatibility of components with assistive technologies (including the screen reader), but the screen reader is also used to assess criteria that also have an impact on other assistive technologies.

##### VoiceOver on iOS

VoiceOver is the screen reader integrated into iOS.

###### Documentation 

To get to grips with VoiceOver, we refer you to the official documentation, which explains the first steps for activating and using gestures.
- [Activate VoiceOver and practise using gestures on the iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e415f/ios).
- [Modifying VoiceOver settings on the iPhone](https://support.apple.com/fr-fr/guide/iphone/iphfa3d32c50/ios)
- [Learn VoiceOver gestures on iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e2281/ios): this page explains the gestures available for navigating interfaces with VoiceOver.
- [Controlling VoiceOver using the rotor on the iPhone](https://support.apple.com/fr-fr/guide/iphone/iph3e2e3a6d/ios): the rotor is a central element in VoiceOver navigation. It lets you select a type of element (link, button, header, etc.) as the target for quick navigation (drag up/down). It's important to know that it exists and how to use it. See also [the list of parameters that can be found in the rotor](https://support.apple.com/fr-fr/HT204783).

###### Voice output display

It's useful to be able to view the voice output. In iOS you can activate the legend panel, which displays VoiceOver announcements in text format at the bottom of the screen. To do this, go to *Settings &gt; Accessibility &gt; VoiceOver* and at the bottom of the settings screen activate the "Legend panel" setting.

##### TalkBack on Android

TalkBack is Android's built-in screen reader. To take advantage of more options, you may need to install a third-party application (developed by Android): [Android Accessibility Tools](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&amp;hl=fr&amp;gl=US).

###### Documentation 

To get to grips with TalkBack, we refer you to the official documentation, which details the first steps for activating and using gestures.
- [Activate or deactivate TalkBack](https://support.google.com/accessibility/android/answer/6007100?hl=fr&amp;ref_topic=10601570).
- [TalkBack settings](https://support.google.com/accessibility/android/answer/6006589?hl=fr&amp;ref_topic=10601570).
- [Using TalkBack gestures](https://support.google.com/accessibility/android/answer/6151827?hl=fr&amp;ref_topic=10601570).
- [Using the TalkBack menu and playback control](https://support.google.com/accessibility/android/answer/6007066?hl=fr): playback control (or playback controls) is a feature similar to VoiceOver's rotor, allowing you to select types of item (links, buttons, headings, etc.) for quick navigation (drag up/down).

###### Voice output display

It's useful to be able to view voice output. In TalkBack you can activate a parameter that displays TalkBack announcements in text format at the bottom of the screen. To do this, go to *Settings &gt; Accessibility &gt; TalkBack &gt; Settings &gt; Advanced settings &gt; Developer settings* and activate the "Display voice output" setting.

Depending on the version of Android you're using, the path to the TalkBack "Show voice output" setting may not be exactly the same.

#### External keyboard

Not all users with a motor disability will be able to use the touch interface, so they will need to interact via an external switch: keyboard or other external device.

In order to test the criteria relating to the use of applications with an external keyboard, it will be necessary to connect an external device to the terminal and set a number of parameters in the platforms.

##### iOS

To enable the terminal to be controlled by an external keyboard, the "Full keyboard access" option needs to be activated. To do this, go to *Settings &gt; Accessibility &gt; Keyboards &gt; Full keyboard access* and activate "Full keyboard access".

iOS allows you to specify a focus style for users using an external device (*Settings &gt; Accessibility &gt; Keyboard &gt; Full Keyboard Access*). The user can choose:
- hide it automatically after a configurable time ;
- increase the size of the when focused ;
- increase the contrast ;
- choose the colour.

##### Android

Using an external keyboard with Android requires a few additional settings to be effective. In order for the interfaces and functions to be fully accessible from the keyboard, you need to use the [Switch Access] application (https://support.google.com/accessibility/android/answer/6122836?hl=fr) with an external keyboard. 

A configuration guide allows you to configure your external keyboard step by step by defining switches. It is available in *Preferences &gt; Accessibility &gt; Switch Access &gt; Settings &gt; Open configuration guide*. You will associate two actions: 
- *Move to the next option*: press the key on the keyboard you wish to associate (we recommend <kbd>Tab</kbd> to retain the keys used when browsing on a computer).
- *Select*: press the key on the keyboard you wish to associate (we recommend <kbd>Enter</kbd> to retain the keys used when navigating on a computer).

Once you have completed the first configuration stage (using the configuration guide), you will need to set up other navigation keys: 
- *Switch Access*{lang=en} *&gt; Settings &gt; Assign search switches*: Associate the *Go to previous option* setting with a key or key combination (we recommend <kbd>Shift + Tab</kbd>)
- *Switch Access*{lang=en} *&gt; Parameters &gt; Assign switches to actions*: Associate the *Back* parameter with a key or key combination (we recommend <kbd>ESC</kbd>)

#### Test applications

##### iOS (macOS)

Some methodology elements will offer you several test methods, often as an alternative to assistive technologies for evaluating elements. With iOS, it is possible to connect the terminal to a computer with macOS and use the **Accessibility Inspector** application.

The **[Accessibility Inspector](https://developer.apple.com/library/archive/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html){lang=en}** is available from the [Xcode](https://apps.apple.com/fr/app/xcode/id497799835?mt=12) software used for developing mobile applications. This tool is useful for carrying out certain tests. To activate it, launch Xcode, then from Xcode, follow the path *Xcode &gt; Open Developer Tool &gt; Accessibility Inspector*.

##### Android

To carry out certain tests on Android applications, third-party applications are required or can help you with the evaluation.

- [Android Accessibility Tools**](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback&amp;hl=fr&amp;gl=US): Android application for adding options and gestures to the Talkback screen reader.
- [**Accessibility Scanner**](https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor&amp;hl=fr&amp;gl=US){lang=en} : Android application that enables automatic tests to be carried out for certain criteria. Once installed, access the application from *Settings &gt; Accessibility &gt; Installed Services &gt;* *Accessibility Scanner*{lang="en"}.

##### iOS and Android

- [Color Contrast Analyser (CCA)](https://www.tpgi.com/color-contrast-checker/){lang=en}: tool for evaluating contrasts from the computer, available on Mac and Windows.

#### Broadcast the screen of the mobile device

Broadcasting the screen of your mobile device on your computer will make it easier for you to carry out certain tests, such as contrast tests. It can also be used to record certain interactions and take screenshots when writing audit reports.

Broadcasting the mobile terminal is not an essential requirement for evaluating applications, but it is nevertheless useful because it can facilitate certain evaluation activities.

##### iOS

###### You have a computer with macOS 

1. Connect the iOS device to the macOS computer using the USB cable. 
1. Open the QuickTime software and in the *File* menu, select "New video recording".
1. A window will open showing an image from your computer's camera. Click to the right of the red record button to change the source and choose your device.
1. The screen of your mobile device will now be displayed on your computer.

###### If you have a computer running Windows 

There are a number of software applications (free or paid) that allow you to stream your iOS device to a Windows computer.

##### Android

There is an *open source*{lang=en} application that allows you to stream an Android application to **Windows and macOS**: [SCRCPY](https://github.com/Genymobile/scrcpy). 

Installing it on a macOS environment may require some technical knowledge. On Windows, it can be used like a standard application. However, it is not essential that you project your mobile device, you can do without this installation (another method is detailed later in the document).

###### If you have a computer running Windows 

Windows provides an integrated "Connect" function for broadcasting certain external sources. [See documentation](https://support.google.com/pixelphone/answer/2865484?hl=fr&amp;ref_topic=7084202).

#### Take screenshots

If it is not possible to broadcast from mobile devices onto the computer screen, a satisfactory alternative is to take screen captures from your mobile device and then import these captures, using the method of your choice, onto your computer.

- [Take a screenshot or record the screen of your Android device](https://support.google.com/android/answer/9075928?hl=fr).
- [Take a screenshot on an iPhone](https://support.apple.com/fr-fr/HT200289).

