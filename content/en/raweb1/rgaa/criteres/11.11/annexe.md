---
WCAG:
  - successCriterion: 3.3.3
    title: Error Suggestion
    level: AA
Techniques:
  - G84
  - G85
  - G89
  - G177
  - H89
Norm:
  - criterion: 9.3.3.3
    title: Error Suggestion
---

#### Technical notes

Certain types of HTML5 controls offer automatic completion help messages: for example the `email` type displays a message like "please enter a valid email address" in the case where the email address entered does not correspond to the expected format. These messages are customizable via the Constraint Validation API, which allows you to personalize the error messages and validate the criterion. The `pattern` attribute allows format checks to be automatically performed (via regular expressions) and displays a customizable help message via the `title` attribute: this device also validates the criterion.
