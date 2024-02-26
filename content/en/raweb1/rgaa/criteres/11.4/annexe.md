---
WCAG:
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - G162
Norm:
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

Tests 11.4.2 and 11.4.3 will be considered not applicable:

- In the case where the [label](#form-field-label) mixes a portion of text that is read from right to left with a portion of text that is read from left to right;
- In the case where a form contains labels from several languages which are read from right to left and vice versa. For example, an order form in Arabic which offers a list of product check boxes in French or mixing products in Arabic or French;
- In the case where fields of type `radio` or `checkbox` and tags having a WAI-ARIA attribute `role="checkbox"`, `role="radio"` or `role="switch"` are not not visually presented as a radio button or checkbox;
- In case the fields are used in a context where it could be legitimate, from a user experience point of view, to place the labels in a different way to that required in tests 11.4.2 and 11.4.3.
