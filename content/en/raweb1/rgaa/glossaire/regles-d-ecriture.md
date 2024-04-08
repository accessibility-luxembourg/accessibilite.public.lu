---
title: Writing rules
---

The source code must comply with the following rules in accordance with the document type declaration used in the page

- No opening or closing tags without `<` ou `>` (example of error: `li&gt;vélo`);
- no closing tag with `/` missing (example of error: `<li>vélo<li>`);
- no attribute values with `"` or `'` missing (example of error: `alt="vélo`);
- no multiple attribute values separated by a space without `"` or `'` (example of error: `alt=my beautiful bike`);
- no missing spaces between attributes (example: `alt="vélo "title="vélo"`);
- no missing closing tag for elements that require one (example of error: `<object>` without `</object>`).
