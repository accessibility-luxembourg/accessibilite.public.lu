---
title: Detailed description (image)
---

Content associated with an image in addition to its textual alternative in order to fully describe the information conveyed by the image. The detailed description can be associated with the image via:

- A reference to a detailed description adjacent to the image in the text alternative;
- An [adjacent link or button](#adjacent-link-or-button) which allows access to the detailed description in the page or in another page;
- One or more passages of text identified by an id and linked by a WAI-ARIA `aria-describedby` attribute on the model `aria-describedby="ID1 ID2 ID3…"`.

Note 1: If support for the `aria-describedby` attribute is lacking, it is possible to use one or more text passages identified by an `id` and linked by a WAI-ARIA `aria-labelledby` attribute to the continuation of the textual alternative.

Note 2: To ensure maximum compatibility with user agents, notably Internet Explorer 11, it is recommended to implement a `tabindex="-1"` on tags which contain a passage of text and which are not interactive elements (button, links, form elements, etc.).
