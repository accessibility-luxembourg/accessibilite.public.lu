---
title: Writing rules
---

The source code must follow the following rules in accordance with the document type declaration used in the page:

- No opening or closing tag without `<` or `>` (example error: `li>velo`);
- no closing tag with missing `/` (example error: `<li>bicycle<li>`);
- no attribute value with missing `“` or `‘` (example error: `alt="bike`);
- no multiple attribute values separated by a space without `"` or `‘` (example error: `alt=my beautiful bike`);
- no missing space between attributes (example: `alt="bicycle" title="bicycle"`);
- no missing closing tag for elements that require one (example error: `<object>` without `</object>`).
