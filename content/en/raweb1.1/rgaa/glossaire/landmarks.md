---
title: Landmarks
---

WAI-ARIA provides roles that enable navigation landmarks to be identified. These roles are very useful for screen reader users in particular, but also for keyboard navigation users who can benefit from quick navigation functions.

Roles must be defined in the document according to the nature of the zone (using the WAI-ARIA `role` attribute or an HTML tag with an implicit role). WAI-ARIA designates eight landmarks.

Five landmarks are used in the document structure (criterion 9.2):

- `banner`
- `contentinfo`
- `main`
- `navigation`
- `search`

Three landmarks are available to identify other regions:

- `form` (`<form>` or `role="form"`)
- `complementary` (`<aside>` or `role="complementary"`)
- `region` (`<section>` or `role="region"`).

`form` and `region` landmarks are only identified as navigation landmarks if they have an accessible name.

See the <a href="https://www.w3.org/TR/wai-aria-1.1/#landmark_roles">Landmark Roles</a> section in the documentation.

Note 1: Given the variable support for `form`, `complementary` and `region` landmarks, if they are used on the page as navigation landmarks, they must be tested for navigation and rendering in the test environment.

Note 2: It is not mandatory to identify navigation landmarks other than those required by criterion 9.2 if the context does not require it. For example, it is not mandatory to identify all forms with a `form` element, but only if a more or less complex navigation context (e.g. application) would require more navigation landmarks than already required by criterion 9.2.

