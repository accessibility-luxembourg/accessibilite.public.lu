### Introduction
Each EU member state can define its own simplified control method, but this method must meet the requirements set out in [EU Implementing Decision 2018/1524](https://eur-lex.europa.eu/legal -content/FR/TXT/?uri=CELEX%3A32018D1524). The objective of this simplified control method is to detect non-conformities; it does not aim for the exhaustiveness of the in-depth control. This method is based on a [subset of RAWeb criteria](./audit-simpl.html) applied to a sample of 3 pages.

### Simplified site control method

#### Recommended tools for testing
The control method can be carried out without the following tools. However, Implementing Decision EU 2018/1524 strongly encourages the implementation of semi-automated tests. We therefore recommend the following tools to conduct the tests:

- the tools recommended in the [RAWeb test methodology](../../../html/fr/raweb1/methodo-test.html#tools)
- [The Ax browser extension](https://www.deque.com/axe/browser-extensions/)

These tools are free and open source, or based on open source technologies.

#### Document templates
Here are the document templates to carry out a simplified audit.

- [Audit report template](../files/template-rapport-audit-simplifie.docx "Simplified audit report template, Docx format (21 KB)"), Docx format (21 KB)
- [Audit grid](../files/template-grille-audit-simplifie.xlsx "Simplified audit grid template, Xlsx format (81 KB)"), Xlsx format (81 KB)

#### Definition of sample pages
The sample of pages to test is 3 pages. We recommend the following three pages:

- The home page ;
- A page with a form (the contact page for example);
- A page with specific content: a video, a table, a complex image.

It is necessary to avoid pages containing too much deviated content.
If non-conformities are detected for a criterion proposed below, it is not necessary to test the 3 pages for this criterion.
We only consider web pages, all downloadable documents are outside the scope of this method.

#### General appreciation
Certain elements of the site cannot be controlled using the simplified control criteria proposed here but impact the reading that can be made of the results. This assessment must be carried out globally across the entire site.
The following criteria must be evaluated and appear in a dedicated section of the report:

- Quantity of exempted content: it is especially important to identify exempted content which contains functionalities or information essential to users (online approach, access to information, etc.). Too much derogated content could call into question the conformity assessment.
- Quantity and nature of office documents (Word, Excel, PDF): here the quantity and nature of the documents are two important indices. The more content downloaded, the more likely it is that users will not access the information. This lack of access is all the more damaging as office documents are necessary to carry out a procedure.
- Presence of procedures essential to users behind an inaccessible identification procedure.


#### Sample evaluation
We must assess each criterion in the checklist described below. The objective is only to list non-conformities.
We start the evaluation by launching the automated tests, we manually check the results of the automated tests then we carry out the manual tests.
If no non-compliance is revealed by the automated tests for a given criterion, then a more complete manual test is initiated. However, if the automatic test has already detected an error, then the more extensive manual test is no longer necessary.
We suggest filling in the audit grid as the audit is carried out. If a test fails on a page, we stop the test and document it, there is no need to test other pages.
When all of the checklist criteria have been tested, it is necessary to summarize the audit results in the report.

#### Checklist
##### Semi-automatically testable criteria
Run the tests with the Ax extension and only note the results corresponding to the following Ax rules. The Ax rule ID is visible in the URL displayed when hovering over each issue.
Since best practices do not strictly speaking correspond to accessibility problems, they can be deactivated in the settings of the Ax extension. The correspondence between the Ax rules and the RAWeb criteria is available in the table below as well as on the [page containing all the criteria for simplified tests](./audit-simpl.html).

##### Manually testable criteria

Here is the list of criteria to test manually: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 3.1, 3.2, 4.1, 4.2, 4.3, 4.4, 4.8, 4.9, 4.10, 4.11, 5.6, 5.7, 6.1, 6.2 ,7.3, 8.4, 8.5, 8.6, 8.7, 8.8, 9.1, 9.2, 10.7, 10.9, 10.10, 10.14, 11.1, 11.2, 11.5, 11.6, 11.7, 11.10, 12.6, 12.7, 12.8, 1 2.9, 12.11, 13.1, 13.7 , 13.8.
These criteria are listed on the page [simplified audit – criteria](./audit-simpl.html).
For the execution of manual tests, use the RAWeb testing methodology (a link is provided in each test on the previously mentioned page).
If an accessibility issue is detected during the manual audit and does not meet one of these criteria, it is recommended to mention this issue in the report.

<table>
<caption>Correspondence table between Axis rules and RAWeb criteria</caption>
<tbody>
<tr>
<th scope="col" >
<p><strong>Axis rule</strong></p>
</th>
<th scope="col" >
<p><strong>Axe error message in English</strong></p>
</th>
<th scope="col" >
<p><strong>RAWeb criteria</strong></p>
</th>
</tr>
<tr>
<td>
<p>area-alt</p>
</td>
<td>
<p lang="en">Active &lt;area&gt; elements must have alternate text</p>
</td>
<td>
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-allowed-attr</p>
</td>
<td>
<p lang="en">Elements must only use allowed ARIA attributes</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-hidden-body</p>
</td>
<td>
<p lang="en">aria-hidden='true' must not be present on the document body</p>
</td>
<td>
<p>10.8</p>
</td>
</tr>
<tr>
<td>
<p>Aria-hidden-focus</p>
</td>
<td>
<p lang="en">ARIA hidden element must not contain focusable elements</p>
</td>
<td>
<p>10.8</p>
</td>
</tr>
<tr>
<td>
<p>Aria-required-attr</p>
</td>
<td>
<p lang="en">Required ARIA attributes must be provided</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-required-children</p>
</td>
<td>
<p lang="en">Certain ARIA roles must contain particular children</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-required-parent</p>
</td>
<td>
<p lang="en">Certain ARIA roles must be contained by particular parents</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-roledescription</p>
</td>
<td>
<p lang="en">Use aria-roledescription on elements with a semantic role</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-roles</p>
</td>
<td>
<p lang="en">ARIA roles used must conform to valid values</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-valid-attr</p>
</td>
<td>
<p lang="en">ARIA attributes must conform to valid names</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Aria-valid-attr-value</p>
</td>
<td>
<p lang="en">ARIA attributes must conform to valid values</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Blink</p>
</td>
<td>
<p lang="en">&lt;blink&gt; elements are deprecated and must not be used</p>
</td>
<td>
<p>13.8</p>
</td>
</tr>
<tr>
<td>
<p>Button-name</p>
</td>
<td>
<p lang="en">Buttons must have discernible text</p>
</td>
<td>
<p>11.9</p>
</td>
</tr>
<tr>
<td>
<p>Bypass</p>
</td>
<td>
<p lang="en">Page must have means to bypass repeated blocks</p>
</td>
<td>
<p>12.7</p>
</td>
</tr>
<tr>
<td>
<p>Color-contrast</p>
</td>
<td>
<p lang="en">Elements must have sufficient color contrast</p>
</td>
<td>
<p>3.2</p>
</td>
</tr>
<tr>
<td>
<p>Definition-list</p>
</td>
<td>
<p lang="en">&lt;dl&gt; elements must only directly contain properly-ordered &lt;dt&gt; and &lt;dd&gt; groups, &lt;script&gt;, &lt;template&gt; or &lt;div&gt; elements</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Dlitem</p>
</td>
<td>
<p lang="en">&lt;dt&gt; and &lt;dd&gt; elements must be contained by a &lt;dl&gt;</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Duplicate-id-active</p>
</td>
<td>
<p lang="en">IDs of active elements must be unique</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Duplicate-id-aria</p>
</td>
<td>
<p lang="en">IDs used in ARIA and labels must be unique</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Frame-title</p>
</td>
<td>
<p lang="en">Frames must have an accessible name</p>
</td>
<td>
<p>2.1</p>
</td>
</tr>
<tr>
<td>
<p>Headings-order</p>
</td>
<td>
<p lang="en">Heading levels should only increase by one</p>
</td>
<td>
<p>9.1</p>
</td>
</tr>
<tr>
<td>
<p>Html-has-lang</p>
</td>
<td>
<p lang="en">&lt;html&gt; element must have a lang attribute</p>
</td>
<td>
<p>8.3</p>
</td>
</tr>
<tr>
<td>
<p>Html-lang-valid</p>
</td>
<td>
<p lang="en">&lt;html&gt; element must have a valid value for the lang attribute</p>
</td>
<td>
<p>8.4</p>
</td>
</tr>
<tr>
<td>
<p>Image-alt</p>
</td>
<td>
<p lang="en">Images must have alternate text</p>
</td>
<td>
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Input-button-name</p>
</td>
<td>
<p lang="en">Input buttons must have discernible text</p>
</td>
<td>
<p>11.9</p>
</td>
</tr>
<tr>
<td>
<p>Input-image-alt</p>
</td>
<td>
<p lang="en">Image buttons must have alternate text</p>
</td>
<td>
<p>1.1&nbsp;&nbsp; or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Label</p>
</td>
<td>
<p lang="en">Form elements must have labels</p>
</td>
<td>
<p>11.1</p>
</td>
</tr>
<tr>
<td>
<p>Link-name</p>
</td>
<td>
<p lang="en">Links must have discernible text</p>
</td>
<td>
<p>6.2</p>
</td>
</tr>
<tr>
<td>
<p>List</p>
</td>
<td>
<p lang="en">&lt;ul&gt; and &lt;ol&gt; must only directly contain &lt;li&gt;, &lt;script&gt; or &lt;template&gt; elements</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Listitem</p>
</td>
<td>
<p lang="en">&lt;li&gt; elements must be contained in a &lt;ul&gt; or &lt;ol&gt;</p>
</td>
<td>
<p>8.2</p>
</td>
</tr>
<tr>
<td>
<p>Marquee</p>
</td>
<td>
<p lang="en">&lt;marquee&gt; elements are deprecated and must not be used</p>
</td>
<td>
<p>13.8</p>
</td>
</tr>
<tr>
<td>
<p>Meta-refresh</p>
</td>
<td>
<p lang="en">Timed refresh must not exist</p>
</td>
<td>
<p>13.1</p>
</td>
</tr>
<tr>
<td>
<p>Object-alt</p>
</td>
<td>
<p lang="en">&lt;object&gt; elements must have alternate text</p>
</td>
<td>
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Role-img-alt</p>
</td>
<td>
<p lang="en">[role='img'] elements have an alternative text</p>
</td>
<td>
<p>1.1&nbsp;&nbsp; or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Svg-img-alt</p>
</td>
<td>
<p lang="en">svg elements with an img role have an alternative text</p>
</td>
<td>
<p>1.1&nbsp;&nbsp; or 1.2</p>
</td>
</tr>
<tr>
<td>
<p>Td-headers-attr</p>
</td>
<td>
<p lang="en">All cells in a table element that use the headers attribute must only refer to other cells of that same table</p>
</td>
<td>
<p>5.7</p>
</td>
</tr>
<tr>
<td>
<p>Th-has-data-cells</p>
</td>
<td>
<p lang="en">All th elements and elements with role=columnheader/rowheader must have data cells they describe</p>
</td>
<td>
<p>5.7</p>
</td>
</tr>
<tr>
<td>
<p>Video-caption</p>
</td>
<td>
<p lang="en">&lt;video&gt; elements must have captions</p>
</td>
<td>
<p>4.3</p>
</td>
</tr>
<tr>
<td>
<p>Valid-lang</p>
</td>
<td>
<p lang="en">lang attribute must have a valid value</p>
</td>
<td>
<p>8.8</p>
</td>
</tr>
<tr>
<td>
<p>Region</p>
</td>
<td>
<p lang="en">All page content should be contained by landmarks</p>
</td>
<td>
<p>9.2</p>
</td>
</tr>
<tr>
<td>
<p>Landmark-no-duplicate-main</p>
</td>
<td>
<p lang="en">Document should not have more than one main landmark</p>
</td>
<td>
<p>9.2</p>
</td>
</tr>
</tbody>
</table>


