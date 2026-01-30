### Introduction
Each EU Member State may define its own simplified control method, but this method must meet the requirements set out in the [Implementing Decision EU 2018/1524](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018D1524). The goal of this simplified control method is to detect non-compliances, it does not aim at the completeness of the in-depth control. This method is based on a [subset of RAWeb criteria](../raweb1.1/audit-simpl.html) applied to a sample of 3 pages.

### Simplified website control method

#### Recommended tools for testing
The testing method can be carried out without the following tools. However, implementing decision EU 2018/1524 strongly encourages the implementation of semi-automated tests. We therefore recommend the following tools to conduct the tests: 

- the tools recommended in the [RAWeb test methodology](../../en/raweb1.1/methodo-test.html#tools)
- [The Axe browser extension](https://www.deque.com/axe/browser-extensions/)

These tools are free and open source, or based on open source technologies.

#### Document templates 
To carry out a simplified audit, the [audit grid](../files/template-grille-audit-simplifie.xlsx "Simplified audit grid template, Xlsx format (81 Kb)"), Xlsx format (81 Kb) can be used.

#### Definition of the sample of pages
The sample of pages to be tested is 3 pages. We recommend the following three pages:

- The home page;
- A page with a form (the contact page, for example);
- A page with special content: a video, a table, a complex image.

Pages containing too much content that are out of scope should be avoided.
If non-compliances are detected for a criterion listed below, it is not necessary to test all 3 pages for this criterion.
We are only considering web pages; all downloadable documents are outside the scope of this method.

#### General assessment
Some elements of the site cannot be checked using the simplified control criteria proposed here, but they do have an impact on the way in which the results are interpreted. This assessment must be carried out for the site as a whole.
The following criteria must be assessed and appear in a dedicated section of the report:

- Quantity of out of scope content: it is especially important to highlight out of scope content that contains functions or information that are essential to users (online procedures, access to information, etc.). Too much out of scope content could jeopardise the compliance assessment.
- Quantity and type of office documents (Word, Excel, PDF): here the quantity and type of documents are two important indicators. The more content there is to download, the more likely it is that users will not be able to access the information. This lack of access is more damaging when the office documents are necessary to complete a procedure.
- The presence of procedures essential to users behind an inaccessible identification procedure.


#### Evaluation of the sample
We must assess each criterion in the checklist described below. The only aim is to list non-compliances.
We start the assessment by running the automated tests, manually checking the results of the automated tests and then carrying out the manual tests.
If no non-compliances are identified by the automated tests for a given criterion, then a more comprehensive manual test is run. However, if the automated test has already identified an error, then the more comprehensive manual test is no longer necessary.
We suggest filling in the audit grid as the audit is carried out. If a test fails on a page, we stop the test and document it; there is no need to test other pages.
When all the checklist criteria have been tested, it is necessary to summarise the audit results in the report.

#### Checklist
##### Semi-automatically testable criteria
Run the tests with the Axe extension and record only the results corresponding to the following Axe rules. The Axe rule identifier can be seen in the URL displayed when hovering over each problem.
As good practices do not strictly speaking correspond to accessibility problems, they can be deactivated in the Axe extension settings. The mapping between the Axe rules and the RAWeb criteria is available in the table below and on the [page containing all the criteria for the simplified tests](../raweb1.1/audit-simpl.html).

##### Criteria that can be tested manually

Here is the list of criteria that can be tested manually: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 3.1, 3.2, 4.1, 4.2, 4.3, 4.4, 4.8, 4.9, 4.10, 4.11, 5.6, 5.7, 6.1, 6.2,7.3, 8.4, 8.5, 8.6, 8.7, 8.8, 9.1, 9.2, 10.7, 10.9, 10.10, 10.14, 11.1, 11.2, 11.5, 11.6, 11.7, 11.10, 12.6, 12.7, 12.8, 12.9, 12.11, 13.1, 13.7, 13.8.
These criteria are listed on the [Criteria for simplified control](../raweb1.1/audit-simpl.html) page.
To run the manual tests, use the RAWeb test methodology (a link is provided in each test on the page mentioned above).
If an accessibility problem is detected during the manual audit and does not correspond to one of these criteria, it is recommended that this problem be mentioned in the report.

<table>
<caption>Mapping table between Axe rules and RAWeb criteria</caption>
<tbody>
<tr>
<th scope="col" >
<p><strong>axe rule</strong></p>
</th>
<th scope="col" >
<p><strong>Axe error message in English</strong></p>
</th>
<th scope="col" >
<p><strong>RAWeb criteria</strong></p>
</th>
</tr>
<tr>
<td >
<p>area-alt</p>
</td>
<td >
<p>Active &lt;area&gt; elements must have alternate text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-allowed-attr</p>
</td>
<td >
<p>Elements must only use allowed ARIA attributes</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-hidden-body</p>
</td>
<td >
<p>aria-hidden='true' must not be present on the document body</p>
</td>
<td >
<p>10.8</p>
</td>
</tr>
<tr>
<td >
<p>Aria-hidden-focus</p>
</td>
<td >
<p>ARIA hidden element must not contain focusable elements</p>
</td>
<td >
<p>10.8</p>
</td>
</tr>
<tr>
<td >
<p>Aria-required-attr</p>
</td>
<td >
<p>Required ARIA attributes must be provided</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-required-children</p>
</td>
<td >
<p>Certain ARIA roles must contain particular children</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-required-parent</p>
</td>
<td >
<p>Certain ARIA roles must be contained by particular parents</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-roledescription</p>
</td>
<td >
<p>Use aria-roledescription on elements with a semantic role</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-roles</p>
</td>
<td >
<p>ARIA roles used must conform to valid values</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-valid-attr</p>
</td>
<td >
<p>ARIA attributes must conform to valid names</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-valid-attr-value</p>
</td>
<td >
<p>ARIA attributes must conform to valid values</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Blink</p>
</td>
<td >
<p>&lt;blink&gt; elements are deprecated and must not be used</p>
</td>
<td >
<p>13.8</p>
</td>
</tr>
<tr>
<td >
<p>Button-name</p>
</td>
<td >
<p>Buttons must have discernible text</p>
</td>
<td >
<p>11.9</p>
</td>
</tr>
<tr>
<td >
<p>Bypass</p>
</td>
<td >
<p>Page must have means to bypass repeated blocks</p>
</td>
<td >
<p>12.7</p>
</td>
</tr>
<tr>
<td >
<p>Color-contrast</p>
</td>
<td >
<p>Elements must have sufficient color contrast</p>
</td>
<td >
<p>3.2</p>
</td>
</tr>
<tr>
<td >
<p>Definition-list</p>
</td>
<td >
<p>&lt;dl&gt; elements must only directly contain properly-ordered &lt;dt&gt; and &lt;dd&gt; groups, &lt;script&gt;, &lt;template&gt; or &lt;div&gt; elements</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Dlitem</p>
</td>
<td >
<p>&lt;dt&gt; and &lt;dd&gt; elements must be contained by a &lt;dl&gt;</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Duplicate-id-active</p>
</td>
<td >
<p>IDs of active elements must be unique</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Duplicate-id-aria</p>
</td>
<td >
<p>IDs used in ARIA and labels must be unique</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Frame-title</p>
</td>
<td >
<p>Frames must have an accessible name</p>
</td>
<td >
<p>2.1</p>
</td>
</tr>
<tr>
<td >
<p>Headings-order</p>
</td>
<td >
<p>Heading levels should only increase by one</p>
</td>
<td >
<p>9.1</p>
</td>
</tr>
<tr>
<td >
<p>Html-has-lang</p>
</td>
<td >
<p>&lt;html&gt; element must have a lang attribute</p>
</td>
<td >
<p>8.3</p>
</td>
</tr>
<tr>
<td >
<p>Html-lang-valid</p>
</td>
<td >
<p>&lt;html&gt; element must have a valid value for the lang attribute</p>
</td>
<td >
<p>8.4</p>
</td>
</tr>
<tr>
<td >
<p>Image-alt</p>
</td>
<td >
<p>Images must have alternate text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Input-button-name</p>
</td>
<td >
<p>Input buttons must have discernible text</p>
</td>
<td >
<p>11.9</p>
</td>
</tr>
<tr>
<td >
<p>Input-image-alt</p>
</td>
<td >
<p>Image buttons must have alternate text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Label</p>
</td>
<td >
<p>Form elements must have labels</p>
</td>
<td >
<p>11.1</p>
</td>
</tr>
<tr>
<td >
<p>Link-name</p>
</td>
<td >
<p>Links must have discernible text</p>
</td>
<td >
<p>6.2</p>
</td>
</tr>
<tr>
<td >
<p>List</p>
</td>
<td >
<p>&lt;ul&gt; and &lt;ol&gt; must only directly contain &lt;li&gt;, &lt;script&gt; or &lt;template&gt; elements</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Listitem</p>
</td>
<td >
<p>&lt;li&gt; elements must be contained in a &lt;ul&gt; or &lt;ol&gt;</p>
</td>
<td >
<p>8.2</p>
</td>
</tr>
<tr>
<td >
<p>Marquee</p>
</td>
<td >
<p>&lt;marquee&gt; elements are deprecated and must not be used</p>
</td>
<td >
<p>13.8</p>
</td>
</tr>
<tr>
<td >
<p>Meta-refresh</p>
</td>
<td >
<p>Timed refresh must not exist</p>
</td>
<td >
<p>13.1</p>
</td>
</tr>
<tr>
<td >
<p>Object-alt</p>
</td>
<td >
<p>&lt;object&gt; elements must have alternate text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Role-img-alt</p>
</td>
<td >
<p>[role='img'] elements have an alternative text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Svg-img-alt</p>
</td>
<td >
<p>svg elements with an img role have an alternative text</p>
</td>
<td >
<p>1.1 or 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Td-headers-attr</p>
</td>
<td >
<p>All cells in a table element that use the headers attribute must only refer to other cells of that same table</p>
</td>
<td >
<p>5.7</p>
</td>
</tr>
<tr>
<td >
<p>Th-has-data-cells</p>
</td>
<td >
<p>All th elements and elements with role=columnheader/rowheader must have data cells they describe</p>
</td>
<td >
<p>5.7</p>
</td>
</tr>
<tr>
<td >
<p>Video-caption</p>
</td>
<td >
<p>&lt;video&gt; elements must have captions</p>
</td>
<td >
<p>4.3</p>
</td>
</tr>
<tr>
<td >
<p>Valid-lang</p>
</td>
<td >
<p>lang attribute must have a valid value</p>
</td>
<td >
<p>8.8</p>
</td>
</tr>
<tr>
<td >
<p>Region</p>
</td>
<td >
<p>All page content should be contained by landmarks</p>
</td>
<td >
<p>9.2</p>
</td>
</tr>
<tr>
<td >
<p>Landmark-no-duplicate-main</p>
</td>
<td >
<p>Document should not have more than one main landmark</p>
</td>
<td >
<p>9.2</p>
</td>
</tr>
</tbody>
</table>


