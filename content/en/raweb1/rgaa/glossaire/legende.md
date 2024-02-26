---
title: Legend
---

HTML offers a device for titling groups of fields of the same nature using the `<fieldset>` and `<legend>` elements.

It is also possible to create groupings with the WAI-ARIA `group` role and a passage of text, acting as a caption, linked by the WAI-ARIA `aria-labelledby` attribute or provided by a WAI-ARIA `attribute aria-label`.

Note 1: Field groupings can use other methods that associate the grouping information directly into the field label.
For example, via a `title` attribute, a WAI-ARIA `aria-label` attribute, an `aria-labelledby` link acting as a label or even by the WAI-attribute ARIA `aria-describedby` associating additional text. In this case, grouping fields becomes unnecessary since the labels are sufficiently relevant.

Note 2: When the form is made up of a single block of information of the same nature (the identity and address of the user, for example) or a single field (a search engine, for example) , grouping fields is not mandatory.
