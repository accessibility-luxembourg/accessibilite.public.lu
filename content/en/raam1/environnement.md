A certain part of the tests in the mobile application accessibility evaluation framework are carried out with the assistive technologies made available on the platforms.

### Test Environment

The operating systems selected are iOS and Android. These are the operating systems most represented in the uses of blind and visually impaired people in French-speaking countries (consult the international survey on the use of assistive technologies essential to people visually impaired](https://access42.net/enquete-internationale-usage-technologies-assistance-deficients-visuels)).

For each system, it is requested to test on the latest available version of the system.

The versions of the assistive technologies to be used will be the latest available on the operating system selected.

When the application is intended for an audience whose equipment is controlled, the tests must be carried out on a test environment adapted to the context of the controlled environment.

<table>
<caption>Mobile Terminal test environment</caption>
<tr>
<th scope="col">iOS (latest version)</th>
<th scope="col">Android (latest version)</th>
</tr>
<tr>
<td>VoiceOver (latest version)</td>
<td>TalkBack (latest version)</td>
</tr>
</table>

The [Methodology](methodology.md) section of this repository presents resources to help you install and configure the various testing tools.

#### Regarding Android

The Android system is unique in that it can receive additional application layers depending on the manufacturer operating the system. For example, an Android system on a brand impacted. Therefore it is not required to carry out the tests for the Android system on a particular model of terminal.

#### Controlled environment

When the application is intended to be distributed and used in a controlled environment, the test environment (reference base) must consist of the configurations (assistive technology, operating system) actually used in the controlled environment.

For example, when the application is exclusively distributed in an iOS environment, the tests must be carried out only with iOS terminals and the assistive technologies that depend on them, by the agents on this platform. This test environment (reference base) replaces the test environment (reference base) used in an uncontrolled environment.