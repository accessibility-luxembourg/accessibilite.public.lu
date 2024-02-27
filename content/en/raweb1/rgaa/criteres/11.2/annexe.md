---
WCAG:
  - successCriterion: 2.4.6
    title: Headings and Labels
    level: AA
  - successCriterion: 2.5.3
    title: Label in Name
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - ARIA6
  - ARIA9
  - ARIA14
  - ARIA16
  - F96
  - G82
  - G131
  - G208
  - G211
  - H44
  - H65
Norm:
  - criterion: 9.2.4.6
    title: Headings and Labels
  - criterion: 9.2.5.3
    title: Label in Name
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Special cases

There is special case management for test 11.2.5 when:

- Punctuation and capital letters are present in the text of the [visible title](#visible-title): they can be ignored in the accessible name without having any consequences;
- The text of the [visible title](#visible-title) serves as a symbol: the text should not be interpreted literally at the level of the accessible name. The name must express the function conveyed by the symbol (for example, “B” in a text editor will have the accessible name “Bold”, the sign “>” depending on the context will mean “Next” or “ Play video”). The case of mathematical symbols is, however, an exception (see the note below).

Note: if the visible label represents a mathematical expression, the mathematical symbols can be used literally to serve as a label for the accessible name (e.g.: “A>B”). It is left to the user to make the correspondence between the expression and what he must spell taking into account the knowledge he has of the operation of his voice input software (“A greater than B” or “A greater than B”).

This special case also applies to test 11.9.2.
