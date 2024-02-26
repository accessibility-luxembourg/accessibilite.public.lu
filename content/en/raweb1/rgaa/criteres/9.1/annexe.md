---
WCAG:
  - successCriterion: 1.3.1
    title: Info and Relationships
    level: A
  - successCriterion: 2.4.1
    title: Bypass Blocks
    level: A
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  -ARIA12
  - G115
  - G130
  - G141
  - H42
Norm:
  - criteria: 9.1.3.1
    title: Info and Relationships
  - criteria: 9.2.4.1
    title: Bypass Blocks
  - criterion: 9.2.4.6
    title: Headings and Labels
  - criteria: 9.4.1.2
    title: Name, Role, Value
---

#### Technical notes

WAI-ARIA allows titles to be defined via the `heading` role and the `aria-level` attribute (indication of the title level). Although it is preferable to use the native HTML title element `<hx>`, using the WAI-ARIA `heading` role is compatible with accessibility.
