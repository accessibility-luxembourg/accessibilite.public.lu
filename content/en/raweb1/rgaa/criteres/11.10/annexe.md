---
WCAG:
  - successCriterion: 3.3.1
    title: Error Identification
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - ARIA1
  - ARIA2
  - ARIA6
  - ARIA9
  - ARIA16
  - ARIA21
  - F81
  - G83
  - G84
  - G85
  - G89
  - G139
  - G184
  - H44
  - H81
  - H89
  - H90
  - SCR18
  - SCR32
Norm:
  - criterion: 9.3.3.1
    title: Error Identification
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

Test 11.10.1 and test 11.10.2 will be considered not applicable when the form has only one [form field](#form-input-field) or indicates optional fields in the following manner:

- Visible;
- In the `<label>` tag or in the [caption](#caption) associated with the field.

If all of the fields in a form are mandatory, tests 11.10.1 and 11.10.2 remain applicable.

#### Technical notes

In a long form where the majority of fields are mandatory, we might notice that it is the few fields that remain optional that are explicitly marked as such. In this case, it would be necessary to ensure that:

- A message visually clarifies at the top of the form that “all fields are mandatory except those indicated as optional”; ;
- A mention &laquo;optional&nbsp;&raquo; is visually present in the label of optional fields or in the caption of a group of optional fields;
- A `required` or `aria-required="true"` attribute remains associated with each field that is not affected by this optional character.
