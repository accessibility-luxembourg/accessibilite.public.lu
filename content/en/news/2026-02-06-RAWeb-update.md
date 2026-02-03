---
teaser: 2026-02-RAWeb-RAPDF-teaser.jpg
auteur: Dominique Nauroy
---

<hgroup>
	<h1>Accessibility frameworks: spring cleaning before the big facelift</h1>
	<p>2026 will be a pivotal year for our accessibility assessment frameworks. The revision at the beginning of this year paves the way for a more extensive update, which will incorporate the update to the European standard.</p>
</hgroup>
<hr>
<figure role="group" aria-label="Screenshot of the GitHub repository ReferentielAccessibiliteWeb" class="pic">
    <img src="../../fr/news/img/2026-02-RAWeb-RAPDF.jpg" alt="Screenshot of the GitHub repository ReferentielAccessibiliteWeb">
    <figcaption>Screenshot of the GitHub repository ReferentielAccessibiliteWeb</figcaption>
</figure>

The web and PDF accessibility frameworks, [RAWeb](https://accessibilite.public.lu/en/raweb1.1/criteres.html) and [RAPDF](https://accessibilite.public.lu/en/rapdf1.1/referentiel-technique.html), are both moving to version 1.1. This update is necessary following their introduction in 2024 and 2023 respectively.

The primary objective was to incorporate the numerous comments received from the community, which remains very active. The main purpose of these comments is to make the criteria, tests and methodologies more consistent where ambiguity may remain, but also to remove references to technologies that are no longer in use.

Together, this revamp, reviewed by the community, has led to the following advances:

## On the RAWeb side

- Support for the European Accessibility Act (EAA)
- Simplification and clarification of ambiguities
- Updating of obsolete techniques (e.g. Internet Explorer)
- Updating of WCAG correspondences

The work covered a total of **33 criteria** and **26 glossary entries** (not including work related to mapping).

All changes are documented in the RAWeb 1.1 [changelog](https://accessibilite.public.lu/en/raweb1.1/notes-revision.html).

The support of the EAA, particularly for criteria dedicated to videos, allows this framework to be used outside the strict frame of Luxembourg public domain websites.

In addition, certain criteria, tests, methodological elements and glossary items have been rewritten in order to be summarised following the removal of certain requirements (test 1.2.4, for example), or enriched to clarify the meaning ([methodologies for criterion 3.1](https://accessibilite.public.lu/en/raweb1.1/criteres.html#test-3-1-1) in particular). New glossary items have been added, such as [Document](https://accessibilite.public.lu/en/raweb1.1/glossaire.html#document), [Cryptic Content](https://accessibilite.public.lu/en/raweb1.1/glossaire.html#cryptic-content) and [Computed Role](https://accessibilite.public.lu/en/raweb1.1/glossaire.html#computed-role).

## On the RAPDF side

- Simplification and clarification of ambiguities
- Removal of screen reader-based tests
- Addition of PDF/UA-2 correspondences

The work covered a total of **9 criteria** and **4 glossary entries** (not including work related to mapping).

All changes are documented in the RAPDF 1.1 [changelog](https://accessibilite.public.lu/en/rapdf1.1/notes-revision.html).

The testing methodology has been streamlined so that a screen reader is no longer required for evaluation, with tests now based on two tools: Acrobat Reader and PDF Accessibility Checker (PAC).

The technical framework is therefore slightly more concise, even though it now includes PDF/UA-2 mapping for each criterion.

## Waiting for the main course: EN 301 549, and therefore WCAG 2.2

These updates allow us to accommodate changes to the European standard, EN 301 549, which is due to be upgraded to version 4.1.1 at the end of spring. This version of the standard incorporates, among other things, version 2.2 of WCAG. It also offers a much broader scope, allowing for the evaluation of a [wide range of goods and services](https://accessibilite.public.lu/fr/news/2023-02-27-european_accessibility_act.html) (bank counters, transport ticket machines, e-books, etc.), a task dedicated to [OSAPS](https://accessibilite-produits-services.public.lu/en.html) in Luxembourg.

<aside class="contextbox">
<h2>WCAG 2.2, why wait?</h2>
<p>WCAG 2.2 was published on 5 October 2023. Much water has passed under the bridge since then, so why wait another year before seeing it transposed into our frameworks? In Luxembourg, as in all EU Member States, the web accessibility directive, which governs the accessibility of public websites, is based on European standard EN 301 549. The version of the standard currently in force is version 3.2.1, published in March 2021, which still refers to WCAG 2.1, as WCAG 2.2 had not yet been published at that time. EN 301 549 v3.2.1 is a harmonised standard, all Member States have agreed to apply it, and this version has been published in the Official Journal of the EU. Having the same level of requirements across Europe makes it possible to create a single market for companies active in the fields of the web, mobile technology and accessibility. Going beyond the requirements of the current standard by implementing the new features of WCAG 2.2 would be contrary to the objective of a single European market. We must therefore wait for the new version of the European standard to be published in the Official Journal of the EU before considering the new features of WCAG 2.2. This publication is <a href="https://portal.etsi.org/eWPM/index.html#/schedule?WKI_ID=64282">scheduled for October</a>.</p>
</aside>

However, the SIP's mission will continue to be limited to accessibility assessment tools for the web, mobile applications and PDF documents. Our three frameworks - RAWeb, RAAM and RAPDF - will therefore undergo a major overhaul this autumn. RAWeb 2 and RAAM 2 are scheduled for publication in early January 2027.

In addition, we remain attentive to the community and are keen to include your suggestions for improving these frameworks on a regular basis.

<aside class="more">
    <h2>Let's interact</h2>
    <p>Our GitHub repositories are the easiest way to share your feedback on the accessibility evaluation frameworks with us. Here are the three addresses:</p>
    <ul>
        <li><a href="https://github.com/accessibility-luxembourg/ReferentielAccessibiliteWeb/issues">Problèmes recensés : ReferentielAccessibiliteWeb (RAWeb)</a></li>
        <li><a href="https://github.com/accessibility-luxembourg/ReferentielAccessibiliteMobile/issues">Problèmes recensés : ReferentielAccessibiliteMobile (RAAM)</a></li>
        <li><a href="https://github.com/accessibility-luxembourg/ReferentielAccessibilitePDF/issues">Problèmes recensés : ReferentielAccessibilitePDF (RAPDF)</a></li>
    </ul>
</aside>