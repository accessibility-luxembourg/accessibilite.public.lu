---
title: Composite link
---

In HTML, [link](#link) containing both text and one or more image children:

- Image (`<img>` tag or opening tag having the WAI-ARIA `role="img"` attribute);
- Clickable area (`<area>` tag) with an `href` attribute;
- Image object (tag `<object>`);
- Bitmap image (tag `<canvas>`);
- Vector image (`<svg>` tag).

Important note: Please note that the use of two adjacent and identical links (image link and text link) constitutes significant inconvenience for the user. Although this does not constitute non-compliance, this use should be avoided. One way to deal with this type of link is to include the image in the text link so as to constitute a composite link, which will avoid redundancy.

On this subject, you can consult the technique <span lang="en">[H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2 )</span>.
