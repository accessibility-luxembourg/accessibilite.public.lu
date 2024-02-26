---
title: <em lang="en">Landmarks</em>
---

WAI-ARIA offers roles to indicate the main areas (regions) of the document. These roles are very beneficial to screen reader users in particular, but also to keyboard navigation users who can thus benefit from rapid navigation functionalities in the [document structure](#document-structure).

The roles must be defined in the document depending on the nature of the zone:

- The [header] zone(#header-zone) must have a WAI-ARIA attribute `role="banner"`;
- The main [navigation menu](#menu-and-navigation-bar) must have a WAI-ARIA attribute `role="navigation"`;
- The [main content] area(#main-content-area) must have a WAI-ARIA attribute `role="main"`;
- The [footer] area(#footer-area) must have a WAI-ARIA attribute `role="contentinfo"`;
- The [search engine](#website-internal-search-engine) area on the site must have a WAI-ARIA `role="search"` attribute.

Note 1: While most screen readers provide these features, browsers have not yet offered dedicated navigation functionality for users who cannot use the mouse. The establishment of avoidance links therefore remains to be favored over <span lang="en">landmarks</span>.

Note 2: The WAI-ARIA roles `banner`, `main` and `contentinfo` must be unique on the page. The WAI-ARIA `navigation` role is reserved for primary and secondary navigation zones. When there are several WAI-ARIA `navigation` roles, it can be useful to differentiate them by specifying a name for each of the zones via the WAI-ARIA `aria-label` or `aria-labelledby` attribute.
