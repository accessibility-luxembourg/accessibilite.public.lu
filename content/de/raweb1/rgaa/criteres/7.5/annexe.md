---
WCAG:
  - successCriterion: 4.1.3
    title: Status Messages
    level: AA
Techniques:
  - ARIA19
  - ARIA22
  - ARIA23
  - F103
Norm:
  - criterion: 9.4.1.3
    title: Status Messages
---

#### Technical notes

The WAI-ARIA roles `log`, `status` and `alert` implicitly have a WAI-ARIA attribute value `aria-live` and `aria-atomic`. We can therefore consider (in accordance with the WAI-ARIA 1.1 specification) that

- A WAI-ARIA `aria-live="polite"` attribute associated with a status message can be used for a WAI-ARIA `log` role;
- A WAI-ARIA `aria-live="polite"` attribute and a WAI-ARIA `aria-atomic="true"` attribute associated to a status message can be valid for a WAI-ARIA `status` role;
- A WAI-ARIA `aria-live="assertive"` attribute and a WAI-ARIA `aria-atomic="true"` attribute associated to a status message can be valid for a WAI-ARIA `alert` role.

This is subject to the nature of the status message satisfying the correspondence implicitly established. In the case of a status message indicating the progress of a process and graphically represented by a progress bar, an explicit WAI-ARIA `progressbar` role is required.
