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
  - C9
  - F38
  - F39
  - G196
  - H67
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Technical note

When an image is associated with a [caption](#image-caption), the WCAG technical note recommends systematically providing a [text alternative](#textual-image-alternative) (see criterion 1.9). In this case criterion 1.2 is not applicable.

In the case of a decorative vector image (`<svg>` tag) which would be displayed through a `<use href="…">` child element of the `<svg>` element, the test 1.2.4 will also apply to the `<svg>` element associated through the `<use>` element.

A WAI-ARIA `role="presentation"` attribute can be used on decoration images and non-clickable decoration areas. The `"none"` role introduced in ARIA 1.1 and synonymous with the `"presentation"` role can also be used. However, it is still preferable to use the `"presentation"` role while waiting for satisfactory support from the `"none"` role.
