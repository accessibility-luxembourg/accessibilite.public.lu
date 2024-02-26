---
title: Button (form)
---

Element of a form that allows you to perform a predefined action. For example, the form submission button allows the information collected to be sent to the server for processing. The title of a button must describe the action that results from its activation (for example: “Start your search”, “Send your message”).

In HTML, there are three types of form buttons:

- `<input>` tag of type `submit`, `reset` or `button`;
- `<input>` tag of type `image`;
- `<button>` tag.

It is also possible to render a button using the WAI-ARIA `button` role.

The button label can be of six types:

- The content of the text passage associated with the button via the WAI-ARIA `aria-labelledby` attribute when present;
- The content of the `aria-label` attribute when present;
- The content of the `alt` attribute of an `image` type button;
- The content of the `value` attribute of `submit`, `reset` or `button` type buttons;
- The content of the `<button>` tag;
- The content of the `title` attribute when present.

Important note: when several of these techniques are present on the same button, the calculation of the “accessible name”, that is to say what will be rendered, follows a strict order:

- `aria-labelledby`;
- Else `aria-label`;
- Otherwise `alt` for the case of <span lang="en">input</span> `image`;
- Otherwise `value` for the case of <span lang="en">input</span> `submit`, `reset` or `button`;
- Otherwise content of the `<button>` tag;
- Otherwise `title`.

This order should be used when evaluating the relevance of the button's "accessible name". For example, even in the case of the presence of a `title` and a passage of text referenced by `aria-labelledby` on the same button, it is the passage of text referenced by `aria-labelledby` which must be evaluated.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span >.

Furthermore, an “accessible name” will be considered irrelevant if it does not include the visible text of the button. For example: `<button aria-label="confirm entry">validate entry</button>` will be considered non-compliant with {% crit 11.9 %}.
