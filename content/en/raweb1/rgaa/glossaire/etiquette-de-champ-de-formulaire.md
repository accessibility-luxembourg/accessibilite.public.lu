---
title: Form field label
---

Text near the form field allowing you to know the nature, type or format of the expected information. The label can be associated with the form field in several ways:

- By using a `<label>` tag;
- By using the WAI-ARIA `aria-label` attribute;
- By using a link between the text and the field by the WAI-ARIA attribute `aria-labelledby`;
- By using the `title` attribute.

Important note: when several of these techniques are present on the same field, the calculation of the “accessible name”, that is to say what will be restored, follows a strict order:

- `aria-labelledby`;
- Else `aria-label`;
- Else `<label>`;
- Otherwise `title`.

This order should be used for evaluating the relevance of the label ({% crit 11.2 %}). For example, even in the case of the presence of a `<label>`, it is the passage of text referenced by `aria-labelledby` that must be taken into account.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span >.

Important note about using `placeholder`: when the `placeholder` attribute is present, it may be rendered in place of the `title` attribute. Therefore, when these two attributes `title` and `placeholder` are present, they must be the same.

Note about labels linked by `aria-labelledby`: This is one or more passages of text identified by `id` and linked by `aria-labelledby` according to the following pattern: `aria-labelledby= “ID1 ID2 ID3…”`.
To ensure maximum compatibility with user agents, notably Internet Explorer 11, it is recommended to implement a `tabindex="-1"` on text passages which are not interactive elements (buttons, links, form elements). , etc.).

Note: the `aria-label` attribute cannot be used to indicate the mandatory nature of a field.
