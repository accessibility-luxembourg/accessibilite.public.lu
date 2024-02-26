---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - H85
Norm:
  - criteria: 9.1.3.1
    title: Info and Relationships
---

#### Technical notes

It is possible to use a tag with a WAI-ARIA `role="listbox"` attribute to replace a `<select>` tag. However, it is impossible to create option groups using WAI-ARIA. Therefore, a list requiring a grouping of options structured using a tag with a WAI-ARIA attribute `role="listbox"` will be considered non-compliant with criterion 11.8.
