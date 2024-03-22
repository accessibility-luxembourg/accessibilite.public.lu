---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - H85
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Technical notes

It is possible to use a tag with a WAI-ARIA attribute `role="listbox"` to replace a tag `<select>`. However, it is impossible to create groups of options using WAI-ARIA. As a result, a list requiring a group of options structured using a tag with a WAI-ARIA `role="listbox"` attribute will be considered not to conform to criterion 11.8.
