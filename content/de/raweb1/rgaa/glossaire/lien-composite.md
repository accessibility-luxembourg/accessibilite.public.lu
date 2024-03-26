---
title: Composite link
---

In HTML, [link](#link) containing both text and one or more image children:

- Image (tag `<img>` or opening tag with WAI-ARIA attribute `role="img"`);
- Clickable area (tag `<area>`) with a `href` attribute;
- Object image (tag `<object>`);
- Bitmap image (tag `<canvas>`);
- Vector image (tag `<svg>`).

Important note: the use of two adjacent and identical links (image link and text link) is a major inconvenience for the user. Even if this does not constitute non-compliance, it should be avoided. One way of dealing with this type of link is to include the image in the text link to form a composite link, thus avoiding redundancy.

You can consult the technique <span lang="en">[H2: Combining adjacent image and text links for the same resource](https://www.w3.org/WAI/WCAG21/Techniques/html/H2)</span>.
