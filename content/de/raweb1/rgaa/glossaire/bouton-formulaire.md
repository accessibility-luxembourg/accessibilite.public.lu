---
title: Button (form)
---

Element of a form that allows you to perform a predefined action. For example, the submit button on a form sends the collected information to the server for processing. The title of a button must describe the action resulting from its activation (for example: "Start your search", "Send your message").

In HTML, there are three types of form buttons:

- The `<input>` tag of type `submit`, `reset` or `button`;
- The `<input>` tag, of type `image`;
- The `<button>` tag.

It is also possible to render a button using the WAI-ARIA role `button`.

The button label can be of six types:

- The content of the text passage associated with the button via the `aria-labelledby` WAI-ARIA attribute when it is present;
- The content of the `aria-label` attribute when it is present;
- The content of the `alt` attribute of an `image` type button;
- The content of the `value` attribute for buttons of type `submit`, `reset` or `button`;
- The content of the `<button>` tag;
- The content of the `title` attribute when it is present.

Important note: when several of these techniques are present on the same button, the calculation of the "accessible name", i.e. what will be rendered, follows a strict order:

- `aria-labelledby`;
- Otherwise `aria-label`;
- Otherwise `alt` for `image` <span lang="en">inputs</span>;
- Otherwise `value` for `submit`, `reset` or `button` <span lang="en">input</span>;
- Otherwise the content of the `<button>` tag;
- Otherwise `title`.

This order should be used to assess the relevance of the button's "accessible name". For example, even if there is a `title` and a text passage referenced by `aria-labelledby` on the same button, it is the text passage referenced by `aria-labelledby` that should be evaluated.

Reference: <span lang="en">[Accessible name and description calculation](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation)</span>.

Furthermore, an "accessible name" will be considered irrelevant if it does not include the visible text of the button. For example: `validate<button aria-label="confirmer la saisie">entry`</button> will be considered as not conforming to {% crit 11.9 %}.