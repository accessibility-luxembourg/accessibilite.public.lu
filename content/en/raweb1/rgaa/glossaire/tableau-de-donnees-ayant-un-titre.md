---
title: Data table with a title
---

Data table having an attribute or containing a tag whose content acts as a title.

Data table preceded or followed by a passage of text associated with the table serving as the title.

To the extent that it is correctly rendered and associated by assistive technologies with the data table, the associated title can be:

- In a `<caption>` tag;
- In a `title` attribute;
- In a WAI-ARIA `aria-label` attribute;
- In a tag associated with the data table via a WAI-ARIA `aria-labelledby` attribute on the table.

Note: only the `<caption>` tag is completely supported by all assistance technologies, it is strongly recommended to favor this solution during implementation in order to avoid numerous checks in the different combinations provided by the testing environment (or “baseline”).
