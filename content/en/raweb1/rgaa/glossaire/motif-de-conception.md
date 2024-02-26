---
title: Design pattern
---

A design pattern <span lang="en">(Design Pattern)</span> is a pattern defined in the document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www. w3.org/TR/wai-aria-practices/)</span> which describes the structure, roles and properties and keyboard behavior that a JavaScript component (widget) must respect.

It is recommended that components developed in JavaScript using WAI-ARIA attributes corresponding to a design pattern respect this pattern.
Please note, however, that not all design patterns are suitable for non-application use, in particular for sites offering display in a mobile context.

Note 1: Given the lack of support for certain WAI-ARIA properties and roles and the great variability of situations in which a JavaScript component can be offered, it is possible to adapt design patterns to contexts or applications. particular uses. In this case, the adapted design pattern must:

- Respect the general structure: for example a set of panels (WAI-ARIA role `tabpanel`) of a tab system is necessarily linked to a set of tabs (WAI-ARIA role `tablist`);
- Use, in replacement of a poorly supported WAI-ARIA role or property, an equivalent WAI-ARIA role or property, offering similar behavior and rendering.

Note 2: Enriching a design pattern with additional WAI-ARIA roles or properties whose compatibility with accessibility is checked by the rendering test on the test environment (or "baseline") does not constitute not an adaptation of a design pattern. For example, adding the WAI-ARIA `aria-hidden` attribute to the panels (WAI-ARIA `tabpanel` role) of a tab system does not define a suitable design pattern.
