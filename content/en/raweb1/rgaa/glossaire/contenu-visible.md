---
title: Visible content
---

For {% test '10.2.1' %}: "Content present" means that visible content remains present when CSS is disabled. For example, an image carrying information in CSS background property invalidates this test because the information is no longer “present” when CSS is disabled. On the other hand, an image carrying information in the CSS background property but accompanied by hidden text validates this test because the information is indeed “present” when CSS is deactivated.

Note: the practice of managing images as background properties of elements via CSS is strictly discouraged, even if it is accompanied by hidden text.
