---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  -ARIA6
  - G140
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical note

Implementing a WAI-ARIA `role="group"` or `role="figure"` attribute on the parent `<figure>` element is intended to address the current lack of support for `<figure> elements ` by assistive technologies. The use of a `<figcaption>` element to associate a [caption](#image-caption) with an image requires at least the use of a WAI-ARIA `aria-label` attribute on the parent element `<figure>` whose content will be identical to the content of the element `<figcaption>`. To ensure optimal support, an explicit association can also be made between the content of the [textual alternative](#textual-alternative-image) of the image and the content of the element `<figcaption >`, for example:

`<img src="image.png" alt="Photo: setting sun" /><figcaption>Photo: credit xxx</figcaption>`

The WAI-ARIA attributes `aria-labelledby` and `aria-describedby` cannot currently be used due to lack of support by assistive technologies.

Note: captioned images must also comply with criterion 1.1 and criterion 1.3 relating to images carrying information.
