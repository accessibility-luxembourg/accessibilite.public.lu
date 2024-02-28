---
WCAG:
  - successCriterion: 1.4.10
    title: Reflow
    level: AA
Techniques:
  - C31
  - C32
  - C33
  - C34
  - C37
  - C38
  - F102
  - G206
Norm:
  - criterion: 9.1.4.10
    title: Reflow
---

#### Particular cases

The objective of this criterion is to guarantee scrolling in a single direction for easier reading according to the direction of the writing.

An exception to this criterion is content whose arrangement requires two dimensions to be understood or used as:

- Images, graphics or videos;
- Games (platform games, for example);
- Presentations (slideshow type, for example);
- Data tables;
- Interfaces where it is necessary to have a horizontal scrollbar when manipulating the interface.

Note: the majority of browsers on mobile operating systems (Android, iOS) do not correctly manage redistribution in case of zoom. In this context, the criterion will be considered not applicable to these environments.

#### Technical note

When we talk about pixels here, we are talking about the CSS pixel as defined by the W3C https://www.w3.org/TR/css3-values/
