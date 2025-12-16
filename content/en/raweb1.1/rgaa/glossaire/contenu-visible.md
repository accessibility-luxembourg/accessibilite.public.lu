---
title: Visible content
---

Content is visible when it is shown on the web page, either when the page loads or after an interface component is activated (e.g., displaying a modal window or submenu).

Test 10.2.1 requires that visible content be accessible to assistive technologies. This means that any visible content that is implemented using a method that does not natively provide an alternative should be accompanied by a secondary method to provide that alternative. For example, an image conveying information in CSS background property on an element that contains visually hidden text passes this test because the information is accessible to assistive technologies. Without this hidden text, the test fails.