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

In the case of SVG, the lack of support for the `<title>` and `<desc>` element by assistive technologies creates a difficulty in implementing the [text alternative (image)](#text-alternative-image) of the image and its [detailed description (image)](#description-size-image). In this case, it is recommended to use the WAI-ARIA `aria-label` attribute to implement both the short [text alternative](#alternative-textual-image) and the reference to the adjacent [detailed description](#description-size-image) or the WAI-ARIA `aria-labelledby` attribute to associate the text passages acting as short alternative and [detailed description](#description-size-image).

The use of the WAI-ARIA attribute aria-describedby is not recommended for linking an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its [detailed description](#description-detail-image), due to a lack of support for assistive technologies. However, when it is used, the attribute must necessarily refer to the `id` of the zone containing the [detailed description](#detailed-description-image).

The adjacent [detailed description](#description-size-image) may be implemented via a `<figcaption>` tag, in which case criterion 1.9 must be checked (use of `<figure>` and the WAI-ARIA attributes `role="figure"` and `aria-label`, in particular).