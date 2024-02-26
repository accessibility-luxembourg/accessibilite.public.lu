---
title: SVG Link
---

Link contained in a `<svg>` element.

In the case of an SVG link (version 1.1), the "accessible name" is obtained as follows:

- Passage of text associated with the WAI-ARIA attribute `aria-labelledby`;
- Otherwise, contents of the WAI-ARIA `aria-label` attribute;
- Otherwise, content of the `<title>` element, direct child of the link;
- Otherwise, content of the `xlink:title` attribute;
- Otherwise, text content of one or more `<text>` elements.

However, you must be careful because this calculation algorithm is not yet taken into account and effective within the different screen readers. To date, support is available with VoiceOver, but incomplete or patchy with JAWS and NVDA. So the lowest common denominator on which it is possible to rely to provide a title for the link is the `<text>` element.
