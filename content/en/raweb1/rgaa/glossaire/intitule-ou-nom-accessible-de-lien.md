---
title: Title (or accessible name) of link
---

“Accessible name” rendered by assistive technologies.

In the case of an HTML link, the “accessible name” is obtained in the following order:

- passage of text associated with the WAI-ARIA attribute `aria-labelledby`;
- otherwise, contents of the WAI-ARIA `aria-label` attribute;
- otherwise, link content;
- otherwise, content of the `title` attribute.

This order should be used to determine what constitutes the link title. For example :

- in the case of the joint presence of a WAI-ARIA `aria-label` attribute and a WAI-ARIA `aria-labelledby` attribute, this is the passage of text referenced by the WAI-ARIA `aria- attribute labeledby` which should be considered as the label;
- in the event of the joint presence of a WAI-ARIA `aria-label` attribute and content in the link, it is the content of the WAI-ARIA `aria-label` attribute which must be considered as 'titled.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span >.

In the case where the “accessible name” is obtained from the content of the link, this will vary depending on the following cases:

Text link:

In HTML, the “accessible name” corresponds to text made from:

- text contained in the link;
- text contained in the child elements of the link.

Image link:

In HTML, the “accessible name” corresponds to the text made from the textual alternative of one or more images in the link of the type:

- Image (`<img>` element or opening tag having the WAI-ARIA `role="img"` attribute);
- Image object (element `<object>`);
- Bitmap image (element `<canvas>`);
- Vector image (`<svg>` element).

Composite link:

In HTML, the “accessible name” corresponds to the text made from the whole:

- text contained in the link;
- text contained in the child elements of the link;
- the content of the textual alternative of the image(s) included in the link.

In the case of an SVG link (version 1.1), the "accessible name" is obtained as follows:

- Passage of text associated with the WAI-ARIA attribute `aria-labelledby`;
- Otherwise, contents of the WAI-ARIA `aria-label` attribute;
- Otherwise, content of the `<title>` element, direct child of the link;
- Otherwise, content of the `xlink:title` attribute;
- Otherwise, text content of one or more `<text>` elements.

However, you must be careful because this calculation algorithm is not yet taken into account and effective within the different screen readers. To date, support is available with VoiceOver, but incomplete or patchy with JAWS and NVDA. So the lowest common denominator on which it is possible to rely to provide a title for the link is the `<text>` element.

Note 1: a link title will be considered non-explicit in the case where the “accessible name” does not include the [visible title](#visible-title) of the link.

Note 2: due to the possible configuration of technical aids allowing the restitution of the “accessible name” from the content of the `title` attribute to the detriment of the “accessible name” from the content of the link. A link title will be considered non-explicit in the case where the link has a `title` attribute whose value does not include at least the “accessible name” taken from the content of the link.

Note 3: in the case of the presence of several links with a different destination whose “accessible name” is identical. The link title alone will be considered non-explicit if the link context does not allow them to be differentiated.

Note 4: when a link does not contain any content, it will be non-compliant with regard to {% crit 10.2 %} and {% crit 6.2 %}.

Note 5: although the calculation of the accessible name of a link takes into account text content generated in CSS via the pseudo-elements `::before` and `::after`, this practice should not be used, because it constitutes non-compliance with criterion 1.3.1 of <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> 2.1 (see [F87](https://www.w3.org/WAI /WCAG21/Techniques/failures/F87)).
