---
title: Title
---

HTML element (`h` tag) with 6 levels of hierarchy (from `h1` for the most important title to `h6` for the least important) or HTML element with WAI-ARIA `role="heading"` and `aria-level` attributes used to structure the information in web content.

Ensuring a strict hierarchy between the titles of a web page is good practice, but the presence of hierarchical jumps does not invalidate the criterion as long as this looser hierarchy remains coherent (a title `<h3>` can come directly after a title `<h1>`, for example). The title hierarchy does not have to contain a `<h1>` title. Although these practices are not encouraged, they do not invalidate the criterion.

Note: titles visually hidden via CSS are considered to be present and validate the {% crit 9.1 %}.