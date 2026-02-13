---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
Techniques:
  - F71
  - F70
  - G135
  - H86
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
---

#### Technical notes

If cryptic content conveying information is nested within a tag with a WAI-ARIA `role="img"` attribute, it will be evaluated against criteria 1.1 and 1.3, and criterion 13.5 will be considered not applicable.

If cryptic decorative content is nested within a tag with a WAI-ARIA `aria-hidden="true"` attribute, regardless of the level of nesting, it will be considered hidden from assistive technologies.

Due to the limited support for the `<abbr>` tag and the `title` attribute, providing the meaning of cryptic content with this implementation does not make the criterion compliant.