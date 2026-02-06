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

Test 11.10.1 and Test 11.10.2 will be considered not applicable when: 

- the form contains only one form field;
- the form contains only a username field and a password field (in the case of a login form).

If all the fields in a form are mandatory, tests 11.10.1 and 11.10.2 still apply.

#### Technical notes

Test 11.10.1 and test 11.10.2 address fields independently; however, it must be ensured that the method chosen to alert users (mandatory fields or optional fields) is consistent throughout the form.
