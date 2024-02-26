---
title: Column or row header
---

Content of a cell in a data table (usually the first cell in a column or row) that serves as a label for all or part of the cells in the column or row. A column or row can contain several headers (intermediate header). When headers apply to an entire row or column, they can be structured with a `<th>` tag or a tag with a WAI-ARIA `role="rowheader attribute "` or `role="columnheader"`. Otherwise, only a `<th>` tag can be used.

Note: only the `<th>` tag is fully supported by all assistance technologies, it is strongly recommended to favor this solution during implementation in order to avoid numerous checks in the different combinations provided in the testing environment (or “baseline”).
