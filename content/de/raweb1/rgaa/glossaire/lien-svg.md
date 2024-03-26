---
title: SVG link
---

Link contained in a `<svg>` element.

In the case of an SVG link (version 1.1), the "accessible name" is obtained as follows:

- Passage of text associated with the WAI-ARIA `aria-labelledby` attribute;
- Otherwise, content of the WAI-ARIA attribute `aria-label`;
- Otherwise, the content of the `<title>` element, the direct child of the link;
- Otherwise, the content of the `xlink:title` attribute;
- Otherwise, the text content of one or more `<text>` elements.

However, care must be taken as this calculation algorithm is not yet taken into account and effective within the various screen readers. To date, support is available with VoiceOver, but incomplete or incomplete with JAWS and NVDA. As a result, the lowest common denominator on which it is possible to rely to provide a title for the link is the '<text>' element.
