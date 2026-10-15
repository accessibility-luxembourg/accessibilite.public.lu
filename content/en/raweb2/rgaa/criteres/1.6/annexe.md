---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
Techniques:
  - ARIA6
  - G92
  - G74
  - G73
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
---

#### Technical notes

In the case of SVG, the lack of support for the `<desc>` element means that it cannot be used to implement a [detailed description](#detailed-description-image).

The use of the WAI-ARIA `aria-describedby` attribute is not recommended for linking an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its [detailed description](#detailed-description-image), due to a lack of support for assistive technologies. However, when it is used, the attribute must necessarily refer to the `id` of the block containing the [detailed description](#detailed-description-image).

The adjacent [detailed description](#detailed-description-image) may be implemented via a `<figcaption>` tag, in which case [criterion 1.9](#crit-1-9) must be checked.