---
title: Focus
---

Focus is the state returned by an element that receives attention following a user action. There are three ways in HTML to give focus to an element:

- By activating the element with a pointing device (example: mouse);
- By reaching the element using the tab key or shift + tab;
- By activating the element using a keyboard shortcut (`accesskey`).

Some elements naturally receive focus, for example: `<a href>`, `<area href>`, `<button>`, `<input>`, `<object>`, `<select>`, `< label>`, `<legend>`, `<optgroup>`, `<option>` and `<textarea>`.
The behavior of the element, when taking focus, depends on its nature; a link, for example, must be activated after taking focus (except when using a script). On the other hand, a form element, such as `<textarea>`, must allow input following focus taking. The `<label>` and `<legend>` elements only receive focus via the mouse pointer. For the `<label>` element, the expected behavior is to transfer focus to the element associated with it.

Note 1: the WAI-ARIA specification extends the role assigned to the `tabindex` attribute by defining that any HTML element can acquire the ability to receive focus by assigning it the value `tabindex="0"`. On the other hand, no behavior is assigned via the sole presence of `tabindex`. Similarly, the value `tabindex="-1"` when used on an element naturally receiving focus removes the affected element from the tab plane by inhibiting its ability to signal "taking focus". The use of `tabindex`, in accordance with the WAI-ARIA specification, can validate certain tests relating to tab focus management, in particular.

Note 2: the visual indication of browser focus should not be removed or degraded unless a focus style defined by the author is visible and sufficiently contrasted in relation to the {% crit 3.3 %}.
