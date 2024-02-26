Unlike web content for which it is possible to inspect the source code to determine the presence of elements or attributes, it is difficult to do the same for documents in PDF format.
Indeed, the inspection of the code of a document in PDF format can only be done using the software <span lang="en">Acrobat Pro</span> which is a paid proprietary software whose use requires a training.

This is the reason why the chosen approach is to test the presence of certain elements through a dedicated tool (PAC 2021) or directly on the interface itself by means of voice reproduction tests via of a screen reader.

For example, when the interface contains a graphic element carrying information, the criterion requires verifying that an alternative is available and relevant without giving more details on the techniques to be used to provide an alternative to a graphic element. To help with the evaluation, each criterion has a practical methodology (**which is not normative**) outlining a possible method of evaluating the criterion.

### Example Resources

[Examples (zip file, 9.24 MB)](../files/ressources-rapdf1.zip) are available to illustrate the testing methodology. Each criterion is illustrated in particular by a screenshot from the PAC 2021 tool.


### Assessment tools

To evaluate the benchmark criteria, the tests are carried out using the dedicated PAC 2021 tool or directly in the <span lang="en">Acrobat Reader</span> interface with the exception of the complementary theme «10 - Interactive form» which requires the use of the NVDA screen reader.

The sections below describe the essential elements you need to know to install these tools.

#### CAP 2021
Installation procedure :

1. Download [PAC 2021 - The free PDF verifier](https://pdfua.foundation/fr/pac-2021-le-verifier-pdf-gratuit/).
2. The download consists of an archive in ZIP format that must be unarchived. Right-click and choose “Extract All”.
3. Then click on “PAC.exe” to launch the tool.

The handling of the tool to perform the tests is described in detail in the testing methodology associated with each criterion in the repository.

#### NVDA

The NVDA reader is essential for testing PDF forms. However, its use is reduced to just the tab key and none of the advanced features are necessary.

The procedure below gives additional details to ensure complete and sufficiently clear restitution, in particular for the choice of voice synthesis and restitution settings.

##### Facility

**Note**: the [NVDA French-speaking site](https://www.nvda-fr.org/)
always offers the latest stable version for download.

1. Download the [latest version of NVDA](https://www.nvda-fr.org/cat.php?id=2).
1. You have the choice to install NVDA on your computer,
    to make a portable version or to run the software without
    install it. If you want to get a portable version of
    NVDA, you just need to create a folder and indicate, when
    installation, where the portable version files should be
    copied, in particular on a USB medium to be able to execute it
    on any computer.
1. NVDA can be launched as soon as the installation is complete, no restart of the computer is necessary.

##### Configuring NVDA for Assessment

###### Welcome dialog

When you start NVDA for the first time, a dialog box
appears. It offers you:

1. Choose keyboard layout: desktop or
    portable.
2. Choose the NVDA key: the NVDA key is used to activate certain features. By default, this is the <kbd>Insert</kbd> key, but you can check "Use caps lock as NVDA key", if you want to use these two keys as "NVDA key".
3. Choose whether or not NVDA should start when Windows launches
    (only for installed version).
4. Decide to display this welcome dialog each time you launch
    NVDA.

**Note**: If you change your mind, you can find this dialogue from
welcome to “Help\>Welcome dialog”.

###### Vocal synthesis

If you are using Windows 10 and above, you can use the voices of the
Narrator, called *OneCore*{lang="en"} voices. If you do not have
the necessary voices, you must first of all [download the languages of
speech synthesis for
Windows](https://support.office.com/fr-fr/article/T%C3%A9l%C3%A9charger-les-langues-de-synth%C3%A8se-vocale-pour-Windows-10-d5a6b612 -b3ae-423f-afa5-4f6caf1ec5d3).

Once you have installed the extension that suits you, you
will be able to change speech synthesis by simultaneously pressing
[<kbd>NVDA</kbd> + <kbd>Control</kbd> + <kbd>S</kbd>]. Choose the desired synthesis using
<kbd>up arrow</kbd> and <kbd>down arrow</kbd> and validate with <kbd>Enter</kbd>.

To change the playback speed, voice language and quantity
information to pronounce, go to the NVDA menu by pressing
simultaneously on [<kbd>NVDA</kbd> + </kbd>N</kbd>], go to “Preferences”,
"Settings", then choose the "Speech" tab. Perform the
settings and confirm with “OK”.

It is possible to tell NVDA whether or not to pronounce each character typed
by pressing [<kbd>NVDA</kbd> + <kbd>2</kbd>] on the alphanumeric keyboard, to pronounce
or not each word typed by pressing [<kbd>NVDA</kbd> + <kbd>3</kbd>] on the keyboard
alphanumeric.

You can change voice settings, such as speed,
height, tongue, etc. as following :

- [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>right arrow</kbd> and <kbd>left arrow</kbd>] allows you to
    switch from one parameter to another.
- [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>up arrow</kbd> and <kbd>down arrow</kbd>], allows you to modify
    the parameter (faster, slower for example)

**Note**: this shortcut concerns the use of NVDA in version
office keyboard. For the portable keyboard version, add the key
<kbd>capital letter</kbd> to the combinations mentioned previously.

##### Set NVDA preferences for assessment

You access the NVDA settings by typing [<kbd>NVDA</kbd> + <kbd>n</kbd>] to open the
NVDA menu, then selecting “Preferences” and “Settings.” THE
parameters are classified in the form of tabs, for example,
“general”, “speech”, “braille”, etc.

Theoretically, there is no need to modify these settings which
correspond to the default configuration. However, check that the
following settings are enabled.

In **Speech**, check the “Automatic language change” boxes.
and “Automatic Dialect Switching.”

In **Presentation of objects**, check “Announce suggestions”,
"Announce tooltips", "Announce description of
subject”, “Announce dynamic content changes”.

Once all settings have been made,
confirm with “OK”.


