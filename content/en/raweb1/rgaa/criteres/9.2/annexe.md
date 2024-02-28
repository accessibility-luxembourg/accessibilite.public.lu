---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - ARIA11
  - G115
  - H97
  - H101
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Particular cases

When the doctype declared on the page is not the HTML5 doctype, this criterion is not applicable.

#### Technical notes

The `<main>` tag can be used multiple times in the same HTML document. However, there can only be one tag at all times visible and readable by assistive technologies, the others must have a `hidden` attribute or a style allowing them to be hidden from assistive technologies. Please note, however, that the use of a style alone will remain insufficient to ensure the uniqueness of a visible `<main>` tag if style sheets are deactivated.
