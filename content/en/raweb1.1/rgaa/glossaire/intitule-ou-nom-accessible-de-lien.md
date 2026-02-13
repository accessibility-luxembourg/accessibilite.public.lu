---
title: Accessible name (of a link)
---

"Accessible name" rendered by assistive technologies.

In the case of an HTML link, the "accessible name" is obtained in the following order:

- passage of text associated with the WAI-ARIA `aria-labelledby` attribute;
- otherwise, value of the WAI-ARIA `aria-label` attribute;
- otherwise, content of the link;
- otherwise, value of the `title` attribute.

This order must be used to determine what constitutes the accessible name of a link. For example

- if a WAI-ARIA `aria-label` attribute and a WAI-ARIA `aria-labelledby` attribute are present together, the passage of text referenced by the WAI-ARIA `aria-labelledby` attribute must be considered as the heading;
- if there is both a WAI-ARIA `aria-label` attribute and content in the link, the value of the WAI-ARIA `aria-label` attribute must be considered as the heading.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

If the "accessible name" is obtained from the content of the link, this will vary according to the following cases:

Text link

In HTML, the "accessible name" corresponds to the text made up of

- the text contained in the link;
- the text contained in the link's child elements.

Image link

In HTML, the "accessible name" corresponds to the text made up from the text alternative of one or more images in the link of the type

- Image (element `<img>` or opening tag with WAI-ARIA `role="img"` attribute);
- Object image (element `<object>`);
- Bitmap image (element `<canvas>`);
- Vector image (element `<svg>`).

Composite link

In HTML, the "accessible name" corresponds to the text made up from the set

- the text contained in the link;
- the text contained in the child elements of the link;
- the content of the alternative text of the image(s) included in the link.

In the case of an SVG link (version 1.1), the "accessible name" is obtained as follows:

- Passage of text associated with the WAI-ARIA `aria-labelledby` attribute;
- Otherwise, value of the WAI-ARIA `aria-label` attribute;
- Otherwise, content of the `<title>` element, the direct child of the link;
- Otherwise, value of the `xlink:title` attribute;
- Otherwise, text content of one or more `<text>` elements.

However, care must be taken as this calculation algorithm is not yet taken into account and effective within the various screen readers. To date, support is available with VoiceOver, but incomplete with JAWS and NVDA. As a result, the lowest common denominator on which it is possible to rely to provide an accessible name for the link is the `<text>` element.