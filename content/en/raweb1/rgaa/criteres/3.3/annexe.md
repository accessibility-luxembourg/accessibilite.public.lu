---
WCAG:
  - successCriterion: 1.4.11
    title: Non-text Contrast
    level: AA
Techniques:
  - F78
  - G18
  - G136
  -G145
  - G174
  - G183
  -G195
  - G207
  - G209
Norm:
  -criterion: 5.2
    title: Activation of accessibility features
  - criteria: 9.1.4.11
    title: Non-text Contrast
---

#### Special cases

The following cases are not applicable for this criterion:

- Inactive interface component (for example, a button with a `disabled` attribute) on which no action is possible;
- Interface component for which the appearance is managed by the browser's native styles without any modification by the author (for example, the native focus style in Chrome or Firefox);
- Interface component for which color is not necessary to identify the component or its state (for example, a group of links serving as navigation whose position on the page, size and color of the text make it possible to understand that these are links even if the color of the underline of the links with the white background does not have a ratio of 3:1 and that the text has a ratio of 4.5:1);
- [Graphic element](#graphic-element) or parts of a graphic element not carrying information or having an alternative (long description, identical information visible on the page);
- [Graphic element](#graphic-element) or parts of a graphic element forming part of a logo or brand name of an organization or company;
- [Graphic element](#graphic-element) or parts of graphic elements whose presentation is essential to the information conveyed (for example, flags, logos, photos of people or scenes, screenshots, medical diagrams, heat map);
- [Graphical element](#graphic-element) or dynamic graphic element parts whose contrast on hover/focus is sufficient.
