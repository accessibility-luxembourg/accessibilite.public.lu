---
title: Test environment
layout:layouts/base.njk
description: The different desktop or mobile test environments
eleventyNavigation:
  title: Technical method
  parent: method
  order: 4
---

Some RAWeb criteria, notably those in the JavaScript area, include restitution tests to be carried out on assistive technologies associated with browsers and operating systems.

Testing using these combinations (assistive technology, operating system, browser) makes it possible to declare that an HTML/WAI-ARIA device is “accessibility compatible” as defined by <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr>.

The combinations were established from the list of assistive technologies whose use is sufficiently widespread, or in certain cases when it is provided natively and constitutes the preferred means of access to information and functionalities .

### Computer test environment (desktop)

The operating systems used are Windows and Mac OS X and the browsers Firefox, Chrome, Edge and Safari. It is up to the auditor to define, in consultation with those responsible for the audited site, the operating system and browser versions in line with the context of use of the site and the test environment used during the development of the site. . The versions of the assistive technologies to be used will be either the latest available on the operating system selected or the previous version.

When the site or application is intended for a public whose equipment is controlled, the tests must be carried out on a test environment adapted to the context of the controlled environment.

For an HTML / WAI-ARIA device or its alternative to be considered compatible with accessibility, it must be fully functional, in terms of rendering and functionalities, on all of the following configurations.

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Computer test environment (desktop)</caption>
        <thead>
        <tr>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>NVDA (latest version)</td>
            <td>Firefox or Chrome or Edge</td>
        </tr>
        <tr>
            <td>JAWS (previous version)</td>
            <td>Firefox or Chrome or Edge</td>
        </tr>
        <tr>
            <td>VoiceOver (latest version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>


### Mobile terminal test environment

The operating systems used are Android and iOS and the Chrome and Safari browsers. It is up to the auditor to define, in consultation with those responsible for the audited site, the operating system and browser versions in line with the context of use of the site and the test environment used during the development of the site. .

The versions of the assistive technologies to be used will be either the latest available on the operating system selected, or the previous version.

To test a website on a mobile terminal, the test environment must include one of the following two complementary combinations:

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Mobile Terminal Test Environment - Combination 1</caption>
        <thead>
        <tr>
            <th scope="col">Operating system</th>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Native Android</td>
            <td>TalkBack (latest version)</td>
            <td>Chrome</td>
        </tr>
        </tbody>
    </table>
</div>

<div class="fr-table fr-table--bordered">
    <table>
        <caption>Mobile Terminal Test Environment - Combination 2</caption>
        <thead>
        <tr>
            <th scope="col">Operating system</th>
            <th scope="col">Assistive technology</th>
            <th scope="col">Browser</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>iOS</td>
            <td>VoiceOver (latest version)</td>
            <td>Safari</td>
        </tr>
        </tbody>
    </table>
</div>

Note that in the case of a general public mobile website, it is strongly recommended to test in both environments.

### Other environments

Finally, depending on the context of the audited site, other complementary assistive technologies may be useful such as:

- ZoomText on Windows or Mac OSX;
- Dragon Naturally Speaking on Windows or Mac OSX.

### Controlled environment

When the website is intended to be distributed and used in a controlled environment, the test environment (reference base) must consist of the configurations (assistive technology, operating system, browser) actually used in the environment controlled.

For example, when the website is exclusively distributed in a GNU/Linux environment, the tests must be carried out only on the browsers and assistive technologies used by the agents on this platform. This test environment (reference base) replaces the test environment (reference base) used in an uncontrolled environment.
