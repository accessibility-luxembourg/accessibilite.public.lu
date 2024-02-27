---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
Techniques:
  - F90
  - H43
  - H63
Norm:
  - criterion: 9.1.3.1
    title: Info and Relationships
---

#### Special cases

In the case of data tables having single row or single column headers, the headers can be structured using `<th>` tag without `scope` attribute.

#### Technical notes

If the `headers` attribute is implemented on a cell already linked to a header (row or column) with the `scope` attribute (with the value `col` or `row`), it is 'header or the headers referenced by the `headers` attribute which will be rendered to assistive technologies. Headers linked with the `scope` attribute will be ignored.
