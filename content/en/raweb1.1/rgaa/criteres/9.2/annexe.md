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

#### Technical notes

There may be several elements with the computed role of `<main>` in the same HTML document. However, only one element can be visible and readable by assistive technologies at any given time; the others must be hidden from assistive technologies.