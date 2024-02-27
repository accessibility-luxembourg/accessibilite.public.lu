---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - F2
  - G115
  - G153
  - H40
  - H48
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Technical notes

The WAI-ARIA `role="list"` and `role="listitem"` attributes may require the use of the WAI-ARIA `aria-setsize` and `aria-posinset` attributes in the case where the entire list is not available via the DOM generated at the time of consultation.

The WAI-ARIA attributes `role="tree"`, `role="tablist"`, `role="menu"`, `role="combobox"` and `role="listbox"` are not equivalent to a HTML list `<ul>` or `<ol>`.
