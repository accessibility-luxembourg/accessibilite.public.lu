### Introduction
Each EU Member State may define its own simplified control method, but this method must meet the requirements set out in the [Implementing Decision EU 2018/1524](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32018D1524). The goal of this simplified control method is to detect non-compliances, it does not aim at the completeness of the in-depth control. This method is based on a [subset of RAWeb criteria](../raweb2/audit-simpl.html) applied to a sample of 3 pages.

### Simplified website control method

#### Recommended tools for testing
The testing method can be carried out without the following tools. However, implementing decision EU 2018/1524 strongly encourages the implementation of semi-automated tests. We therefore recommend the following tools to conduct the tests: 

- the tools recommended in the [RAWeb test methodology](../../en/raweb2/methodo-test.html#tools)
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
As good practices do not strictly speaking correspond to accessibility problems, they can be deactivated in the Axe extension settings. The mapping between the Axe rules and the RAWeb criteria is available in the table below and on the [page containing all the criteria for the simplified tests](../raweb2/audit-simpl.html).

##### Criteria that can be tested manually

Here is the list of criteria that can be tested manually: 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 2.1, 3.1, 3.2, 3.3, 4.10, 4.11, 4.12, 4.13, 4.15, 4.16, 4.18, 4.19, 4.2, 4.3, 4.9, 5.5, 5.6, 6.1, 6.2, 7.4, 8.1, 8.2, 8.3, 8.4, 8.6, 8.7, 9.1, 9.2, 9.3, 10.2, 10.5, 10.7, 11.1, 11.2, 11.3, 11.4, 11.7, 11.8, 11.9, 11.11, 11.12, 11.15, 11.16, 11.19, 12.3, 12.4, 12.6, 12.7, 12.8, 13.1, 13.11, 13.3, 13.4.
These criteria are listed on the [Criteria for simplified control](../raweb2/audit-simpl.html) page.
To run the manual tests, use the RAWeb test methodology (a link is provided in each test on the page mentioned above).
If an accessibility problem is detected during the manual audit and does not correspond to one of these criteria, it is recommended that this problem be mentioned in the report.

<table>
    <caption>Axe rules (axe-core 4.14.0) and their RAWEB2 criteria</caption>
    <thead>
      <tr>
        <th scope="col">Axe rule</th>
        <th scope="col">Axe error message in English</th>
        <th scope="col">RAWEB 2 criteria</th>
      </tr>
    </thead>
    <tbody lang="en">
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/area-alt?application=axeAPI"><code>area-alt</code></a></td>
        <td>Active &lt;area&gt; elements must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-allowed-attr?application=axeAPI"><code>aria-allowed-attr</code></a></td>
        <td>Elements must only use supported ARIA attributes</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-command-name?application=axeAPI"><code>aria-command-name</code></a></td>
        <td>ARIA commands must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11">11.11</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-conditional-attr?application=axeAPI"><code>aria-conditional-attr</code></a></td>
        <td>ARIA attributes must be used as specified for the element's role</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-deprecated-role?application=axeAPI"><code>aria-deprecated-role</code></a></td>
        <td>Deprecated ARIA roles must not be used</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-hidden-body?application=axeAPI"><code>aria-hidden-body</code></a></td>
        <td>aria-hidden="true" must not be present on the document body</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2">10.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-hidden-focus?application=axeAPI"><code>aria-hidden-focus</code></a></td>
        <td>ARIA hidden element must not be focusable or contain focusable elements</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2">10.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-input-field-name?application=axeAPI"><code>aria-input-field-name</code></a></td>
        <td>ARIA input fields must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2">11.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-meter-name?application=axeAPI"><code>aria-meter-name</code></a></td>
        <td>ARIA meter nodes must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2">11.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-progressbar-name?application=axeAPI"><code>aria-progressbar-name</code></a></td>
        <td>ARIA progressbar nodes must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2">11.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-prohibited-attr?application=axeAPI"><code>aria-prohibited-attr</code></a></td>
        <td>Elements must only use permitted ARIA attributes</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-required-attr?application=axeAPI"><code>aria-required-attr</code></a></td>
        <td>Required ARIA attributes must be provided</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-required-children?application=axeAPI"><code>aria-required-children</code></a></td>
        <td>Certain ARIA roles must contain particular children</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-required-parent?application=axeAPI"><code>aria-required-parent</code></a></td>
        <td>Certain ARIA roles must be contained by particular parents</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-roles?application=axeAPI"><code>aria-roles</code></a></td>
        <td>ARIA roles used must conform to valid values</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-tab-name?application=axeAPI"><code>aria-tab-name</code></a></td>
        <td>ARIA tab nodes must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-toggle-field-name?application=axeAPI"><code>aria-toggle-field-name</code></a></td>
        <td>ARIA toggle fields must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr?application=axeAPI"><code>aria-valid-attr</code></a></td>
        <td>ARIA attributes must conform to valid names</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/aria-valid-attr-value?application=axeAPI"><code>aria-valid-attr-value</code></a></td>
        <td>ARIA attributes must conform to valid values</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/autocomplete-valid?application=axeAPI"><code>autocomplete-valid</code></a></td>
        <td>autocomplete attribute must be used correctly</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.21">11.21</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/blink?application=axeAPI"><code>blink</code></a></td>
        <td>&lt;blink&gt; elements are deprecated and must not be used</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3">13.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/button-name?application=axeAPI"><code>button-name</code></a></td>
        <td>Buttons must have discernible text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12">11.12</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/bypass?application=axeAPI"><code>bypass</code></a></td>
        <td>Page must have means to bypass repeated blocks</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3">11.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/color-contrast?application=axeAPI"><code>color-contrast</code></a></td>
        <td>Elements must meet minimum color contrast ratio thresholds</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3">3.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/css-orientation-lock?application=axeAPI"><code>css-orientation-lock</code></a></td>
        <td>CSS Media queries must not lock display orientation</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10">13.10</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/definition-list?application=axeAPI"><code>definition-list</code></a></td>
        <td>&lt;dl&gt; elements must only directly contain properly-ordered &lt;dt&gt; and &lt;dd&gt; groups, &lt;script&gt;, &lt;template&gt; or &lt;div&gt; elements</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/dlitem?application=axeAPI"><code>dlitem</code></a></td>
        <td>&lt;dt&gt; and &lt;dd&gt; elements must be contained by a &lt;dl&gt;</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/document-title?application=axeAPI"><code>document-title</code></a></td>
        <td>Documents must have &lt;title&gt; element to aid in navigation</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6">8.6</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/focus-order-semantics?application=axeAPI"><code>focus-order-semantics</code></a></td>
        <td>Elements in the focus order should have an appropriate role</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7">12.7</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/form-field-multiple-labels?application=axeAPI"><code>form-field-multiple-labels</code></a></td>
        <td>Form field must not have multiple label elements</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3">11.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/frame-focusable-content?application=axeAPI"><code>frame-focusable-content</code></a></td>
        <td>Frames with focusable content must not have tabindex=-1</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4">7.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/frame-title?application=axeAPI"><code>frame-title</code></a></td>
        <td>Frames must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.1">2.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/frame-title-unique?application=axeAPI"><code>frame-title-unique</code></a></td>
        <td>Frames must have a unique title attribute</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.2">2.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/html-has-lang?application=axeAPI"><code>html-has-lang</code></a></td>
        <td>&lt;html&gt; element must have a lang attribute</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1">8.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/html-lang-valid?application=axeAPI"><code>html-lang-valid</code></a></td>
        <td>&lt;html&gt; element must have a valid value for the lang attribute</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.2">8.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/html-xml-lang-mismatch?application=axeAPI"><code>html-xml-lang-mismatch</code></a></td>
        <td>HTML elements with lang and xml:lang must have the same base language</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1">8.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/image-alt?application=axeAPI"><code>image-alt</code></a></td>
        <td>Images must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/input-button-name?application=axeAPI"><code>input-button-name</code></a></td>
        <td>Input buttons must have discernible text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12">11.12</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/input-image-alt?application=axeAPI"><code>input-image-alt</code></a></td>
        <td>Image buttons must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.13">11.13</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/label?application=axeAPI"><code>label</code></a></td>
        <td>Form elements must have labels</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2">11.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/label-content-name-mismatch?application=axeAPI"><code>label-content-name-mismatch</code></a></td>
        <td>Elements must have their visible text as part of their accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.3">6.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/link-in-text-block?application=axeAPI"><code>link-in-text-block</code></a></td>
        <td>Links must be distinguishable without relying on color</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1">3.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/link-name?application=axeAPI"><code>link-name</code></a></td>
        <td>Links must have discernible text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1">6.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/list?application=axeAPI"><code>list</code></a></td>
        <td>&lt;ul&gt; and &lt;ol&gt; must only directly contain &lt;li&gt;, &lt;script&gt; or &lt;template&gt; elements</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/listitem?application=axeAPI"><code>listitem</code></a></td>
        <td>&lt;li&gt; elements must be contained in a &lt;ul&gt; or &lt;ol&gt;</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4">9.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/marquee?application=axeAPI"><code>marquee</code></a></td>
        <td>&lt;marquee&gt; elements are deprecated and must not be used</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3">13.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/meta-refresh?application=axeAPI"><code>meta-refresh</code></a></td>
        <td>Delayed refresh under 20 hours must not be used</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1">13.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/meta-viewport?application=axeAPI"><code>meta-viewport</code></a></td>
        <td>Zooming and scaling must not be disabled</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9">10.9</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/nested-interactive?application=axeAPI"><code>nested-interactive</code></a></td>
        <td>Interactive controls must not be nested</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1">7.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/no-autoplay-audio?application=axeAPI"><code>no-autoplay-audio</code></a></td>
        <td>&lt;video&gt; or &lt;audio&gt; elements must not play automatically</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.15">4.15</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/object-alt?application=axeAPI"><code>object-alt</code></a></td>
        <td>&lt;object&gt; elements must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/p-as-heading?application=axeAPI"><code>p-as-heading</code></a></td>
        <td>Styled &lt;p&gt; elements must not be used as headings</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1">9.1</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/region?application=axeAPI"><code>region</code></a></td>
        <td>All page content should be contained by landmarks</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3">9.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/role-img-alt?application=axeAPI"><code>role-img-alt</code></a></td>
        <td>[role="img"] and [role="image"] elements must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/scrollable-region-focusable?application=axeAPI"><code>scrollable-region-focusable</code></a></td>
        <td>Scrollable region must have keyboard access</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4">7.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/select-name?application=axeAPI"><code>select-name</code></a></td>
        <td>Select element must have an accessible name</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2">11.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/server-side-image-map?application=axeAPI"><code>server-side-image-map</code></a></td>
        <td>Server-side image maps must not be used</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/skip-link?application=axeAPI"><code>skip-link</code></a></td>
        <td>The skip-link target should exist and be focusable</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3">11.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/svg-img-alt?application=axeAPI"><code>svg-img-alt</code></a></td>
        <td>&lt;svg&gt; elements with an img or image role must have alternative text</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2">1.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/table-duplicate-name?application=axeAPI"><code>table-duplicate-name</code></a></td>
        <td>Tables should not have the same summary and caption</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.2">5.2</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/table-fake-caption?application=axeAPI"><code>table-fake-caption</code></a></td>
        <td>Data or header cells must not be used to give caption to a data table.</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.3">5.3</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/td-has-header?application=axeAPI"><code>td-has-header</code></a></td>
        <td>Non-empty &lt;td&gt; elements in larger &lt;table&gt; must have an associated table header</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6">5.6</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/td-headers-attr?application=axeAPI"><code>td-headers-attr</code></a></td>
        <td>Table cell headers attributes must refer to other &lt;th&gt; elements in the same table</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6">5.6</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/th-has-data-cells?application=axeAPI"><code>th-has-data-cells</code></a></td>
        <td>Table headers in a data table must refer to data cells</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6">5.6</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/valid-lang?application=axeAPI"><code>valid-lang</code></a></td>
        <td>lang attribute must have a valid value</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.4">8.4</a></td>
      </tr>
      <tr>
        <td><a href="https://dequeuniversity.com/rules/axe/4.14/video-caption?application=axeAPI"><code>video-caption</code></a></td>
        <td>&lt;video&gt; elements must have captions</td>
        <td><a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.9">4.9</a></td>
      </tr>
    </tbody>
  </table>