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

#### Special cases

When the doctype declared in the page is not the HTML5 doctype, this criterion is not applicable.

#### Technical notes

The `<main>` tag can be used several times in the same HTML document. However, there can only ever be one tag that is visible and readable by assistive technologies, and the others must have a `hidden` attribute or a style that allows them to be hidden from assistive technologies. It should be noted, however, that the use of a style alone will not be sufficient to ensure the uniqueness of a `<main>` tag that is visible if the style sheets are deactivated.
