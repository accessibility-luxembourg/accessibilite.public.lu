---
title: Calculated role

---

The ARIA role of an element can be calculated in two ways:
- based on the implicit role of the element. For example, the `<header>` element has the implicit role of `banner`, the `<nav>` element has the implicit role of `navigation`, etc. 
- based on the explicit role specified by the value of the WAI-ARIA `role` attribute on the opening tag: `<div role="banner">`.

When the framework states that an element "has the calculated role of", this may be due to an implicit or explicit role.

For example: "The element has a calculated role of `banner`" indicates that the element may be an HTML5 `<header>` element or any other element with the WAI-ARIA `role="banner"` attribute. Conversely, if it is indicated that "The element has a WAI-ARIA attribute `role="banner"`&nbsp;&raquo;, then only the `role` attribute is expected.

See the documentation: [Implicit WAI-ARIA semantics](https://www.w3.org/TR/wai-aria-1.2/#implicit_semantics).

Below is a list of implicit WAI-ARIA roles for HTML5 elements used to structure the document:
- `<footer>`: `role="contentinfo"`
- `<header>`: `role="banner"`
- `<main>`: `role="main"`
- `<nav>`: `role="navigation"`
- `<search>`: `role="search"`

Note: For `<footer>` and `<header>`, the role will only be calculated if they are not included in an element with the calculated role of  `article`, `complementary`, `main`, `navigation` or `section`.