---
title: Summary (of table)
---

A summary is a passage of text associated with a complex data table. It provides information on the nature and structure of the table in order to facilitate its use by users of assistive technologies, for example.

Note: in HTML5, the only technique currently usable is to insert the summary directly in the title (`<caption>` tag) by hiding the summary via CSS if necessary.

In previous versions of HTML, the summary can be inserted via a `summary` attribute on the `<table>` tag.

In the case of a tag with the WAI-ARIA `role="table"` attribute, the summary must be provided using an `aria-describedby` attribute and be correctly rendered by assistive technologies.
