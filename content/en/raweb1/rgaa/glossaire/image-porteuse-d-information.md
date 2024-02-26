---
title: Image carrying information
---

Image which conveys information necessary for understanding the content with which it is associated.

Note 1: when the image is the only content of a link, its alternative is the link title. In this case, the image alternative should be evaluated with the theme “Links”.

Note 2: when a form button, inserted with the `<button>` element, contains only one image (tag `<img>`, `<object>`, `<embed>`, `<canvas >` or `<svg>`), the alternative of the image is the button title. Two cases can arise:

- The button is controlled by its type, for example, type `submit` or `reset`, and is part of a form. In this case, the image button must be evaluated with the “Forms” theme;
- The button is controlled by a JavaScript device. In this case, the image button must be evaluated with the “Scripts” theme.
