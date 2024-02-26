---
title: Image caption
---

When a text, adjacent to an image, contains information about the image (for example a copyright, a date, an author, etc.) or is intended to supplement the information provided by the image (for example a text associated with a image in an image gallery), we speak of an image caption.

When an image is captioned it is necessary to associate the image caption with the image by a structural relationship, so that assistive technologies can treat the image and its caption as a single whole.

HTML5 allows you to associate a caption with an image via the `figure` elements (the entire image and the caption) and `figcaption` (the caption).

An image without a caption can define:

- An image that is not inserted into a `figure` element;
- An image inserted in a `figure` element without a `figcaption` element.

Note: when the text adjacent to the image can act as replacement text, it is not obligatory to use the `figure`, `figcaption` set, the image can simply be treated as a decorative image .

On this subject, you can consult the note in English <span lang="en">[Requirements for providing text to act as an alternative for images](https://www.w3.org/TR/html51/semantics- embedded-content.html#alt-text)</span> of the W3C.
