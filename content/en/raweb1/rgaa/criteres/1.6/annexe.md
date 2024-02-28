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

In the case of SVG, the lack of support for the `<title>` and `<desc>` element by assistive technologies creates difficulty in the case of implementing the [textual alternative](#alternative-textual-image) of the image and its [detailed description](#description-detailee-image). In this case, it is recommended to use the WAI-ARIA `aria-label` attribute to implement both the short [textual alternative](#textual-alternative-image) and the reference to the [detailed description] (#detail-image-description) or the WAI-ARIA attribute `aria-labelledby` to associate text passages serving as a short alternative and [detail-description](#detail-image-description).

Using the WAI-ARIA aria-describedby attribute is not recommended to link an image (`<img>`, `<object>`, `<embed>`, `<canvas>`) to its [ detailed description](#description-detailee-image), due to lack of support for assistive technologies. However, when used, the attribute must necessarily refer to the `id` of the zone containing the [detailed description](#description-detaillee-image).

The adjacent [detailed description](#description-detaillee-image) can be implemented via a `<figcaption>` tag, in this case criterion 1.9 must be verified (use of `<figure>` and WAI-ARIA attributes ` role="figure"` and `aria-label`, in particular).