---
title: Passage of text linked by `aria-labelledby` or `aria-describedby`
---

This is one or more passages of text identified by `id` whose value is unique on the page and associated with an element (form field, button, etc.) by the WAI-ARIA `aria attributes -labelledby` or `aria-describedby` on the following pattern: `aria-labelledby="ID1 ID2 ID3…"` where the value of the attribute used is equal to the list of `id` attribute values of the passages of text to associate present on the page.

Note 1: to ensure maximum compatibility with user agents, notably Internet Explorer 11, it is recommended to implement a `tabindex="-1"` on text passages which are not interactive elements (button, links, form elements, etc.).

Note 2: the value of the WAI-ARIA attributes `aria-labelledby` or `aria-describedby` must not create a recursive reference (A references B which references A) or traversal reference (A which references B which references C).
