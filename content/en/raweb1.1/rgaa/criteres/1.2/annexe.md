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

When an image is associated with an [image caption](#image-caption), the WCAG Technical Note recommends systematically providing a [text alternative](#text-alternative-image) (see Criterion 1.9). In this case, criterion 1.2 does not apply.

In the case of a decorative vector image (`<svg>` tag) which is displayed via an `<use href="…">` element, which is a child of the `<svg>` element, test 1.2.4 will also apply to the associated `<svg>` element via the `<use>` element.

If an image is nested within a tag with an `aria-hidden="true"` attribute, it will be considered hidden by assistive technologies.