---
title: The name, role, value, settings and state changes
---

A component must have an appropriate role and name. Its values, states and possible parameters must also be accessible and correctly transmitted to the accessibility APIs in particular.

A component can rely on an interactive HTML element or on a non-interactive element overloaded by WAI-ARIA via an ad hoc role. Important: buttons (`<button>` or `<input type="button">` tags) when controlled via JavaScript are to be evaluated with {% crit 7.1 %}.

The name can be the title of the component (the title of a button, for example).

The value is, for example, the selected item in a drop-down list or the current value of a slider.

The role corresponds to the element type defined by the HTML or WAI-ARIA specification (such as the `<button>` tag or the WAI-ARIA `role="button"` attribute).

The configuration corresponds to the specific information of a component, generally made available by WAI-ARIA. For example `aria-controls` is a parameter which transmits to the APIs the information that the component controls this or that content (referenced by its identifier -- `id` attribute).

Status changes are also made available by WAI-ARIA. For example `aria-expanded` is a state used to signal to APIs that the component is “open” or “closed”. Note that a state can also be transmitted via the name, when the title is dynamically changed to correspond to the state of the controlled zone in particular.

These parameters are not mandatory but may be required if they are essential to make the component accessible. It is up to the auditor to consider the cases where these parameters are essential depending on the context linked to the use of the component.

The auditor should also verify that, where present, these parameters are used correctly.

To do this (if it deems it relevant given the context of implementation of the components and the ergonomic choices implemented) it can rely on the recommendations for use of WAI-ARIA for components having WAI- attributes. ARIA corresponding to a design pattern as described in the document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/)< /span>.

Note: WAI-ARIA roles, properties and states are implemented via attributes, for example `role="banner"`, `aria-hidden="true"`.
