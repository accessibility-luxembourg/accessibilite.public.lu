---
title: Accessible and activatable by the keyboard and any pointing device
---

- An interface component (link, button, etc.) is accessible from the keyboard and by any pointing device when the user can take focus, indifferently, by a pointer or the tab key;
- An interface component (link, button, etc.) can be activated on the keyboard and by any pointing device when the user can initiate, indifferently, the action planned by the interface component by pressing the pointer or the enter key of the keyboard ;
- Warning: for certain interface components such as <span lang="en">`sliders`</span> (sliding or rotary button, etc.), it is not possible to control the component using the key alone. entrance. In these situations, other keys (such as the arrow keys) can be used. In particular for elements with a WAI-ARIA role corresponding to a design pattern it is recommended to consider the document <span lang="en">[WAI-ARIA 1.1 Authoring Practices](http://www.w3.org /TR/wai-aria-practices/)</span> during their implementation.

In the repository, the expression “controllable by the keyboard and any pointing device” also refers to this definition.

Important note: The use of certain technologies can make focus management too complex or too unstable to rely only on tab, arrow keys and the enter key. In this case, providing keyboard shortcuts may be the only solution to make the component usable.

The criterion can only be considered compliant on the condition that the keyboard shortcuts used are correctly documented, that they are functional and that they respect {% crit 12.10 %}.
