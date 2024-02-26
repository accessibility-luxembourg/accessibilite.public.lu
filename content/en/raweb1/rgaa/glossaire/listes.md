---
title: Lists
---

A sequence of elements that can be grouped in the form of an ordered, unordered, or definition structured list. For example, the sequence of links in a navigation menu is an unordered list of links, the different steps of a procedure are a list of ordered elements, the term/description pair in a glossary is a list of descriptions. In HTML, lists use the following tags:

- Ordered list: `<ol>` and `<li>` tags (each element in the list is assigned an indexed marker);
- Unordered list: `<ul>` and `<li>` tags (each element of the list is assigned an unindexed marker;
- Description list: tags `<dl>`, `<dt>` (term to describe) and `<dd>` (description).

Note 1: In HTML5, the `<dl>` tag no longer represents only a list of definitions, but generically any list of descriptions which can include as a group of term-descriptions names and definitions, questions and answers, categories and topics, etc.

Note 2: It is also possible to structure lists using the WAI-ARIA `role="list"` and `role="listitem"` attributes for ordered and unordered lists.

Note 3: the notion of “visually grouped in list form” is characterized by:

- The presence of a visual marker making it clear that it is an unordered list, for example `-`, `•`, `\*`, etc. ;
- The presence of a visual marker making it clear that it is an ordered list, for example a number, a Greek letter, etc. ;
- The presence of a series of elements following each other visually, with an identical visual form, nature and operation, but without directly having a visual marker of a list (unordered or ordered), for example a menu navigation.

Please note, however, that not all lists necessarily require a list structure, for example a series of terms separated by a comma.
