---
title: Link context
---

The link context represents the additional information (referred to as context information) that can be related by a computer program to the [title (or accessible name) of link](#intittitule-ou-nom-accessible-de-lien). The contextual information used to complete the [title (or accessible name) of link](#intitule-ou-nom-accessible-de-lien) is as follows:

- The content of the sentence in which the text link is present ;
- The content of the paragraph (tag `<p>`) in which the text link is present;
- The content of the list item (tag `<li>`) or the content of a parent list item (tag `<li>`) in which the text link is present;
- The content of the title (tag `<hx>`) preceding the text link;
- The content of the table header cell(s) (tag(s) `<th>`) associated with the data cell (tag `<td>`) in which the text link is present;
- The content of the data cell (tag `<td>`) in which the text link is present.

Note 1: One of the 6 link contexts combined with the [title (or accessible name) of link](#intitule-ou-nom-accessible-de-lien) should make it possible to understand the function and destination of the link.

Note 2: RAWeb considers that an e-mail address of the type `xxx@xxx.yyy` is sufficient link text to understand the function of the link and does not require the action to be indicated more explicitly.
