---
title: Link context
---

The context of the link represents the additional information (we speak of context information) which can be linked by a computer program with the [title of the link] (#title-or-accessible-name-of-link). The context information which allows the [title of the link](#title-or-accessible-name-of-link) to be completed is as follows:

- The content of the sentence in which the text link is present;
- The content of the paragraph (`<p>` tag) in which the text link is present;
- The content of the list item (`<li>` tag) or the content of a parent list item (`<li>` tag) in which the text link is present;
- The content of the title (`<hx>` tag) preceding the text link;
- The content of the table header cell(s) (`<th>` tag(s)) associated with the data cell (`<td>` tag) in which the link text is present;
- The content of the data cell (`<td>` tag) in which the text link is present.

Note 1: one of the 6 link contexts combined with [link title](#title-or-accessible-link-name) must make it possible to understand the function and destination of the link.

Note 2: RAWeb considers an email address like `xxx@xxx.yyy` to be sufficient link text to understand the function of the link and does not require more explicit reporting of the action.
