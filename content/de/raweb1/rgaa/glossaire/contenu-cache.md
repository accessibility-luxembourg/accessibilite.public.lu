---
title: Hidden content
---

Assistive technologies (in particular screen readers) do not render hidden content via :

- `display` with the value `none` (`display: none`) ;
- visibility with the value `hidden` (`visibility: hidden`) ;
- font-size set to `0` (`font-size:0`);
- HTML5 attribute `hidden` ;
- WAI-ARIA attribute `aria-hidden="true"`.

All content using one or more of these properties and attributes is applicable for the {% crit 10.8 %}.
