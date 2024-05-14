---
title: Text alternative (image)
---

"Accessible name" rendered by assistive technologies for graphic elements such as

- Image (`<img>` tag or opening tag with a WAI-ARIA attribute `role="img"`);
- Image map area (`<area>` tag);
- Image type button (`<input>` tag with the attribute `type="image"`);
- Object image (`<object type="image/…">` tag);
- Vector image (`<svg>` tag);
- Bitmap image (`<canvas>` tag);
- Embedded image (`<embed>` tag).

In the case of a graphic element, the "accessible name" is obtained in the following order:

- Passage of associated text via the WAI-ARIA attribute `aria-labelledby` for the tags
  - `<img>`;
  - `<input type="image"> `;
  - `<svg> `;
  - `<object type="image/…"> `;
  - `<embed type="image/…"> `;
  - `<canvas> `;
  - tags with a WAI-ARIA attribute `role="img"`.
- Otherwise, content of the WAI-ARIA attribute `aria-label` for elements
  - `<img>`;
  - `<area>`;
  - `<input type="image">`;
  - `<svg> `;
  - `<object type="image/…">`;
  - `<embed type="image/…">`;
  - `<canvas>`;
  - opening tags with a WAI-ARIA attribute `role="img"`.
- Otherwise, content of the `alt` attribute for tags
  - `<img>`;
  - `<area>`;
  - `<input type="image"> `.
- Otherwise, the content of the `title` attribute for the tags:
  - `<img>`;
  - `<input type="image"> `;
  - `<object type="image/…"> `;
  - `<embed type="image/…"> `.

This order must be used to determine what constitutes the text alternative.

However, in the case of partial support of the algorithm for calculating the "accessible name", it is the value actually rendered by the assistive technologies used in the test environment (or "baseline") that should be considered as the text alternative.

For example

- In the case of the joint presence of a WAI-ARIA `aria-label` attribute and a WAI-ARIA `aria-labelledby` attribute on a `<img>` tag, it is the text passage referenced by the WAI-ARIA `aria-labelledby` attribute that must be considered as the alternative text if the content of the text passage is actually rendered by the assistive technologies used in the test environment;
- In the case of the joint presence of a WAI-ARIA `aria-label` attribute and an `alt` attribute on a `<img>` tag, it is the content of the WAI-ARIA `aria-label` attribute that must be considered as the alternative text if the content of the WAI-ARIA `aria-label` attribute is actually rendered by the assistive technologies used in the test environment.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

RAWeb considers three types of text alternative linked to the nature of the image:

- For an image conveying information, the text alternative provides the information needed to understand the content it conveys;
- For a decorative image, no text alternative should be provided;
- For a [CAPTCHA](#captcha) image or a [test image](#test-image), the text alternative only describes the nature and function of the image. The text alternative cannot provide the information conveyed by the image without rendering the associated function inoperative.

Note 1: for a [CAPTCHA](#captcha) image, the alternative could be, for example: "Anti-spam security code" or "code to verify that you are a human" or any other alternative that allows the user to understand the nature and function of the image.

Note 2: For a group of images, for example a voting system made up of several star images, it is strongly recommended to use either the first image of the group to give a coherent alternative to the group of images (see [WCAG2.1 technique G196](https://www.w3.org/WAI/WCAG21/Techniques/general/G196)), or a container tag with a WAI-ARIA role `img` and a text alternative (image). In the first case, the other images in the group are considered to be decorative images. In the second case, all the images in the group are considered to be decorative images.

Note 3: for image links, the alternative text must allow the function and destination of the link to be understood; this is covered in the links theme.

Note 4: for vector images (`<svg>` tag) the text alternative could also be present in a tag `<title>` or in a `<text>` tag whether or not the latter tag is visible, even if this is not the role assigned to this element in SVG.

Note 5: As the use of the `alt` attribute is the only technique fully supported by assistive technologies, it is recommended that this solution be preferred when implementing an alternative to a `<img>`, `<area>` and `<input type="image">` tag.

Note 6: although the `title` attribute is considered to be a possible text alternative (image), its use can cause problems, in particular because an image with an absent or empty `alt` attribute is considered to be an image with a `role="presentation"` by WAI-ARIA: <a href="https://www.w3.org/TR/html-aam-1.0/#details-id-54">https://www.w3.org/TR/html-aam-1.0/#details-id-54</a>. It is important to ensure that the assistive technologies present in the selected test environment correctly render the alternative proposed by the `title` attribute.
