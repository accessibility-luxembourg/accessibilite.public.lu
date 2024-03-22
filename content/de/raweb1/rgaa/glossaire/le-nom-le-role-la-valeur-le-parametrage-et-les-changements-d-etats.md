---
title: The name, role, value, settings and status changes
---

A component must have an appropriate role and name. Its values, states and any parameters must also be accessible and correctly passed on to the accessibility APIs in particular.

A component can be based on an interactive HTML element or on a non-interactive element overloaded by WAI-ARIA via an ad hoc role. Important: buttons (tags `<button>` or `<input type="button">`) when controlled via JavaScript must be evaluated with {% crit 7.1 %}.

The name can be the title of the component (the title of a button, for example).

The value is, for example, the selected item in a drop-down list or the current value of a cursor (`slider`).

The role corresponds to the type of element defined by the HTML or WAI-ARIA specification (such as the `<button>` tag or the WAI-ARIA attribute `role="button"`).

Parameters correspond to specific information about a component, generally provided by WAI-ARIA. For example, `aria-controls` is a parameter that sends APIs the information that the component controls such and such content (referenced by its identifier -- attribute `id`).

Changes of state are also made available by WAI-ARIA. For example, `aria-expanded` is a state that tells APIs whether the component is "open" or "closed". Note that a state can also be transmitted via the name, when the title is dynamically changed to correspond to the state of the controlled zone in particular.

These parameters are not mandatory, but may be required if they are essential to make the component accessible. It is up to the auditor to consider the cases where these parameters are essential, depending on the context in which the component is used.

The auditor must also check that, where they are present, these parameters are used correctly.

To do this (if they deem it relevant, given the context in which the components are implemented and the ergonomic choices made), they can use the WAI-ARIA usage recommendations for components with WAI-ARIA attributes corresponding to a design pattern as described in the document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org/TR/wai-aria-practices/</span>).

Note: WAI-ARIA roles, properties and states are implemented via attributes, for example `role="banner"`, `aria-hidden="true"`.
