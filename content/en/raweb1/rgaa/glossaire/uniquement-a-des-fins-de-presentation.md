---
title: For presentation purposes only
---

For presentation purposes only: use of HTML tags for a purpose different from that intended in the specifications (with regard to the type of document declared). Examples: using `h` tags for the sole purpose of creating a typographic effect; use of the `<blockquote>` tag for the sole purpose of indenting a paragraph, etc.

Note 1: the use of `<div>` or `<span>` or multiple `<br>` elements to visually create a paragraph is considered non-compliant and invalidates the criterion.

Example: `<div>`, `paragraphs of a block of text simulated`, `<br>`, `using multiple <br>` tags, `</div>`

Note 2: WAI-ARIA offers a `presentation` role allowing you to remove the semantics of an element, for example `<h1 role="presentation">Title</h1>`. In this case, the text will be correctly rendered but its role as title will no longer be. Use of the `presentation` role may be required when using a WAI-ARIA [design pattern](#design-pattern).

The WAI-ARIA `presentation` role can also be used to strip the semantics of an element when the latter is used solely for presentation purposes, e.g. `<blockquote role="presentation">` will have the same effect as an absence of `<blockquote>` element.

Even if this use is strongly discouraged (in the case of assistive technology that does not implement WAI-ARIA for example) it can be considered as compliant with <abbr lang="en" title="web content accessibility guidelines"> WCAG</abbr>. On the other hand, the use of a WAI-ARIA `presentation` role on an element whose nature (for example semantics) is essential to understanding the content is a violation of the rules <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> (particularly the failure [F92](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92)) and invalidates the criterion.
