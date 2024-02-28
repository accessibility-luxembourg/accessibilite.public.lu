---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 2.4.4
    title: Link Purpose (In Context)
    level: A
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
Techniques:
  - ARIA7
  - ARIA8
  - C7
  - F63
  - F89
  - F96
  - G53
  - G91
  - G208
  - G211
  - H30
  - H33
  - H77
  - H78
  - H79
  - H80
  - H81
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.2.4.4
    title: Link Purpose (In Context)
  - criterion: 9.2.5.3
    title: Label in Name
---

#### Particular cases

There is special case management for tests 6.1.1, 6.1.2, 6.1.3 and 6.1.4 when the link is [ambiguous for everyone](#ambiguous-for-everyone). In this situation, where it is not possible to make the link explicit in its context, the criterion is not applicable.

There is special case management for test 6.1.5 when:

- Punctuation and capital letters are present in the text of the [visible title](#visible-title): they can be ignored in the accessible name without having any consequences;
- The text of the [visible title](#visible-title) serves as a symbol: the text should not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, “B” in a text editor will have the accessible name “Bold”, the sign “>” depending on the context will mean “Next” or “ Play video”). The case of mathematical symbols is, however, an exception (see the note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to serve as a label for the accessible name (e.g.: “A>B”). It is left to the user to make the correspondence between the expression and what he must spell taking into account the knowledge he has of the operation of his voice input software (“A greater than B” or “A greater than B”).

#### Technical notes

When the visible title is supplemented by another expression in the accessible name:

- WCAG insists on the placement of the visible title at the beginning of the accessible name without, however, reserving the exclusivity of this location;
- WCAG considers a non-exact match of the character string of the visible title within the accessible name as a case of failure.

For example, if we consider the visible title “Order now” completed in the accessible name by the expression “product X”, we can have the following different cases:

- “Order now product X” is valid (good practice);
- “Product X: Order Now” is valid;
- “Order product X now” is invalid.
