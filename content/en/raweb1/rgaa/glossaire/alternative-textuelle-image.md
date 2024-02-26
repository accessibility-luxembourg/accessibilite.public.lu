---
title: Text alternative (image)
---

“Accessible name” rendered by assistive technologies for graphic elements such as:

- Image (`<img>` tag or opening tag with a WAI-ARIA `role="img"` attribute);
- Responsive image area (`<area>` tag);
- Image type button (tag `<input>` with attribute `type="image"`);
- Image object (tag `<object type="image/…">`);
- Vector image (tag `<svg>`);
- Bitmap image (tag `<canvas>`);
- Embedded image (`<embed>` tag).

In the case of a graphic element, the “accessible name” is obtained in the following order:

- Passage of associated text via the WAI-ARIA `aria-labelledby` attribute for tags:
  - `<img>`;
  - `<input type="image">`;
  - `<svg>`;
  - `<object type="image/…">`;
  - `<embed type="image/…">`;
  - `<canvas>`;
  - tags with a WAI-ARIA `role="img"` attribute.
- Otherwise, contents of the WAI-ARIA `aria-label` attribute for elements:
  - `<img>`;
  - `<area>`;
  - `<input type="image">`;
  - `<svg>`;
  - `<object type="image/…">`;
  - `<embed type="image/…">`;
  - `<canvas>`;
  - opening tags with a WAI-ARIA `role="img"` attribute.
- Otherwise, content of the `alt` attribute for tags:
  - `<img>`;
  - `<area>`;
  - `<input type="image">`.
- Otherwise, content of the `title` attribute for tags:
  - `<img>`;
  - `<input type="image">`;
  - `<object type="image/…">`;
  - `<embed type="image/…">`.

This order should be used to determine what constitutes the textual alternative.

However, in the event of partial support for the “accessible name” calculation algorithm, it is the value actually rendered by the assistive technologies used in the test environment (or “reference base”) that it will have to be considered as a textual alternative.

For example :

- In the event of the joint presence of a WAI-ARIA `aria-label` attribute and a WAI-ARIA `aria-labelledby` attribute on a `<img>` tag, this is the passage of text referenced by the 'WAI-ARIA attribute `aria-labelledby` which should be considered as a text alternative if the content of the text passage is actually rendered by the assistive technologies used in the test environment;
- In case of joint presence of a WAI-ARIA `aria-label` attribute and an `alt` attribute on a `<img>` tag, this is the content of the WAI-ARIA `aria-label` attribute label` which should be considered as a textual alternative if the content of the WAI-ARIA `aria-label` attribute is actually rendered by the assistive technologies used in the test environment.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span >.

RAWeb considers three types of textual alternatives linked to the nature of the image:

- For an image carrying information, the textual alternative provides the information necessary to understand the content it conveys;
- For a decorative image, no textual alternative must be rendered;
- For a [CAPTCHA](#captcha) image or a [test-image](#test-image), the textual alternative only describes the nature and function of the image. Indeed, the textual alternative cannot provide the information conveyed by the image without rendering the associated function ineffective.

Note 1: for an image [CAPTCHA](#captcha) the alternative can be, for example: "Anti-spam security code" or "code to verify that you are a human" or any other alternative allowing the user to understand the nature and function of the image.

Note 2: for a group of images, for example a voting system made up of several star images, it is strongly recommended to use either the first image in the group to give a coherent alternative to the image group (see the [WCAG2.1 G196 technique](https://www.w3.org/WAI/WCAG21/Techniques/general/G196)), i.e. a container tag with a WAI-ARIA `img` role and an alternative textual. In the first case, the other images in the group are considered decoration images. In the second case, all images in the group are considered decoration images.

Note 3: for image links, the alternative must make it possible to understand the function and destination of the link; this case is covered in the links theme.

Note 4: for vector images (`<svg>` tag) the textual alternative could also be present in a `<title>` tag or in a `<text>` tag whether or not the latter tag is visible, even if this is not the role assigned to this element in SVG.

Note 5: the use of the `alt` attribute being the only technique fully supported by technical aids, it is recommended to favor this solution when implementing an alternative to a `<img>` tag, ` <area>` and `<input type="image">`.

Note 6: although the `title` attribute is considered a possibility of textual alternative to an image, its use can pose problems, in particular because an image with an absent or empty `alt` attribute is considered as an image with a `role="presentation"` by WAI-ARIA: <https://www.w3.org/TR/html-aam-1.0/#details-id-54>. It is necessary to ensure that the technical assistance present in the chosen test environment correctly renders the alternative proposed by the `title` attribute.
