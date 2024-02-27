---
WCAG:
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - ARIA5
  - ARIA18
  - ARIA19
  - F15
  - F19
  - F20
  - F42
  - F59
  - F79
  - F96
  - G10
  - G135
  - G136
  - G208
  - G211
  - SCR21
Norm:
  - criterion: 9.2.5.3
    title: Label in Name
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Special cases

There is special case management for test 7.1.3 when:

- Punctuation and capital letters are present in the text of the visible title: they can be ignored in the accessible name without having any consequences;
- The text of the visible title serves as a symbol: the text should not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, “B” in a text editor will have the accessible name “Bold”, the sign “>” depending on the context will mean “Next” or “ Play video”). The case of mathematical symbols is, however, an exception (see the note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to serve as a label for the accessible name (e.g.: “A>B”). It is left to the user to make the correspondence between the expression and what he must spell taking into account the knowledge he has of the operation of his voice input software (“A greater than B” or “A greater than B”).

#### Technical notes

Criterion 7.1 implements the notion of “compatible with assistive technologies” as defined by WCAG, as well as the use of WAI-ARIA to make a component or functionality accessible. The correct use of WAI-ARIA is verified via tests 7.1.1, 7.1.2, 7.1.3.

Important note: In an HTML5 environment, many components may require JavaScript to function; consequently the provision of an alternative to a JavaScript component which cannot be made accessible must benefit from a method specific to the component in question, allowing it to be replaced by an accessible alternative (and reactivated). This means that disabling JavaScript for the entire page will not be accepted as a valid method unless it does not jeopardize the use of other components.
