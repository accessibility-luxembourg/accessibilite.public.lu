---
title: Hidden content
---

Assistive technologies (including screen readers) do not render content hidden via properties:

- `display` with value `none` (`display: none`);
- `visibility` with the value `hidden` (`visibility: hidden`);
- `font-size` with value `0` (`font-size:0`);
- HTML5 `hidden` attribute;
- WAI-ARIA attribute `aria-hidden="true"`.

All content using one or more of these properties and attributes is applicable for {% crit 10.8 %}.
