Unlike web content, where it is possible to inspect the source code to determine the presence of elements or attributes, it is difficult to do the same for documents in PDF format.
Inspecting the code of a document in PDF format can only be done using <span lang="en">Acrobat Pro</span>, which is a proprietary software package that requires training. 

This is why the chosen approach is to test the presence of certain elements using a dedicated tool (PAC 2024) or directly on the interface itself by means of voice output tests using a screen reader.

For example, when the interface contains a graphic element conveying information, the criterion requires verification that an alternative is available and relevant, without giving any further details on the techniques to be used to provide an alternative to a graphic element. To help with the assessment, each criterion has a practical methodology (**which is non-normative**) setting out a possible method of assessing the criterion.

### Example resources

[Examples (zip file, 9.24 MB, in French)](/fr/files/ressources-rapdf1.zip) are available to illustrate the testing methodology. Each criterion is illustrated by a screen shot taken from the PAC 2024 tool.


### Assessment tools

To assess the criteria in the framework, the tests are carried out using the dedicated PAC 2024 tool or directly in the Acrobat Reader interface, with the exception of the complementary theme "10 - Interactive form", which requires the use of the NVDA screen reader.

The sections below describe the essential elements you need to know to install these tools.

#### PAC 2024
Installation procedure

1. Download [PAC 2024 - The free PDF checker](https://pac.pdf-accessibility.org/en/download).
2. The download consists of a ZIP archive that needs to be unarchived. Right-click and choose "Extract all".
3. Then click on "PAC.exe" to launch the tool.

How to use the tool to perform the tests is described in detail in the testing methodology associated with each criterion in the framework.

#### NVDA

The NVDA reader is essential for testing PDF forms. However, it can only be used with the tab key, and none of the advanced functions are required.

The procedure below provides additional details to ensure that the output is complete and sufficiently clear, including the choice of speech synthesis and output settings.

##### Installation

**Note**: the [NVDA website](https://www.nvaccess.org/download/)
always offers the latest stable version for download.

1.  Download the [latest version of NVDA](https://www.nvaccess.org/download/).
2.  You have the choice of installing NVDA on your computer,
    make a portable version or run the software without installing it. If you wish to obtain a portable version of NVDA, simply create a folder and specify during installation where the files for the portable version are to be copied, in particular to USB media so that it can run on any computer.
3.  NVDA can be launched as soon as the installation is complete, with no need to restart the computer.

##### Configuring NVDA for evaluation

###### Welcome dialog

When you start NVDA for the first time, a dialog box
dialog box appears. It asks you to

1.  Choose the keyboard layout: desktop or laptop.
2.  Choose the NVDA key: the NVDA key is used to activate certain functions. By default, it is the <kbd>Insert</kbd> key, but you can tick "Use Caps Lock as NVDA key" if you want to use these two keys as the "NVDA key".
3.  Choose whether or not NVDA should start when Windows is launched
    (only for the installed version).
4.  Decide whether to display this welcome dialog each time NVDA is launched.

**Note** If you change your mind, you can find this welcome dialog in "Help &gt; Welcome dialog".

###### Text-to-speech

If you're using Windows 10 and above, you can use the voices of the
Narrator voices, known as *OneCore* voices. If you don't have
the necessary voices, you first need to [download the text-to-speech languages for Windows](https://support.office.com/en-gb/article/T%C3%A9l%C3%A9charger-les-langues-de-synth%C3%A8se-vocale-pour-Windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3).

Once you have installed the extension that suits you best, you can change the text-to-speech language by pressing [<kbd>NVDA</kbd> + <kbd>Control</kbd> + <kbd>S</kbd>] at the same time. Select the desired synthesis using the
<kbd>up</kbd> and <kbd>down</kbd><kbd>arrows</kbd> and confirm by pressing <kbd>Enter</kbd>.

To change the playback speed, the voice language and the amount of information to be
information to be spoken, go to the NVDA menu by simultaneously pressing
simultaneously on [<kbd>NVDA</kbd> + </kbd>N</kbd>], go to "Preferences",
"Settings", then choose the "Speech" tab. Make the
settings and confirm with "OK".

You can tell NVDA to speak or not to speak each character you type
by pressing [<kbd>NVDA</kbd> + <kbd>2</kbd>] on the alphanumeric keypad, to speak or not to speak
words by pressing [<kbd>NVDA</kbd> + <kbd>3</kbd>] on the alphanumeric keypad.

You can change the voice parameters, such as speed, pitch, language, etc. as follows:

-   [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>right arrow</kbd> and <kbd>left arrow</kbd>] allows you to
    toggle between parameters.
-   [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>up arrow</kbd> and <kbd>down arrow</kbd>] allows you to modify the
    parameter (faster, slower, for example)

**Note**: this shortcut is for using NVDA with the desktop keyboard
desktop keyboard. For the portable keyboard version, add the <kbd>Shift</kbd> key to the above combinations.

##### Set NVDA preferences for evaluation

NVDA settings can be accessed by typing [<kbd>NVDA</kbd> + <kbd>n</kbd>] to open the NVDA menu, then selecting "Preferences" and "Settings". The settings are arranged in tabs, for example, "General", "Speech", "Braille", etc.

Theoretically, there is no need to modify these settings, which
correspond to the default configuration. However, check that the following
settings are activated.

In **Speech**, check the "Automatic language change" and "Automatic dialect change" boxes.

In **Presentation of objects**, check the box for "Announce suggestions", "Announce tooltips", "Announce object description", "Announce dynamic content changes".

Once you have made all the settings, confirm with "OK".


