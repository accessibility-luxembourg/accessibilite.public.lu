---
teaser: rotary-press-teaser.jpg
tags:
- PDF
author: Alain Vagner
---
<style type="text/css">
div#pdf-20230503-1 button#hc-linkto-highcharts-data-table-0 {
    display:none;
}
</style>
<script src="../../../../content/fr/news/2023-04-28-des-pdf-majoritairement-inaccessibles.js"></script>
<h2>On the most visited public sites, PDFs are mostly inaccessible</h2>
<h3>The accessibility of these documents, sometimes present massively on the most visited Luxembourg public portals in 2023, however tends to improve</h3>
<hr>
<div class="intro">
    <p>The presence of large quantities of inaccessible PDF files on public sites is a key problem for people with disabilities. Indeed, certain accessibility problems can completely block access to information or the implementation of administrative procedures in the case of forms. In this article, we study the accessibility of PDFs present on the 17 most visited public sites in Luxembourg.</p>
</div>
<figure role="group" aria-label="Photo: Getty Images / istockphoto.com / nyvltart" class="pic">
    <img src="../../../../content/en/news/img/rotary-press.jpg" alt="Photo of a publication being printed on a rotary press">
    <figcaption>Photo&#8239;: Getty Images / istockphoto.com / nyvltart</figcaption>
</figure>
<p>When a PDF document is scanned as an image or unmarked, a blind or visually impaired user has no access to its content at all (for more details on this, see the article “&#8239 ;<a href="https://access42.net/pdf-accessibilite?lang=fr">PDF and accessibility, the wrong idea</a>&#8239;»).</p>
<h4>The study</h4>
<p>In April 2023, the SIP analyzed a sample of PDF files from the 17 most visited Luxembourg public sites, according to the <a href="https://github.com/zakird/crux-top-lists ">Top 1 Million of Google</a>&#8239;:</p>
<ul>
<li>adem.lu,</li>
<li>cita.lu,</li>
<li>government.lu,</li>
<li>govjobs.lu,</li>
<li>guichet.lu,</li>
<li>impotsdirects.public.lu,</li>
<li>inll.lu,</li>
<li>floods.lu,</li>
<li>itm.lu,</li>
<li>lod.lu,</li>
<li>luxembourg.lu,</li>
<li>map.geoportail.lu,</li>
<li>meteolux.lu,</li>
<li>mobiliteit.lu,</li>
<li>petitions.lu,</li>
<li>portal.education.lu,</li>
<li>vdl.lu.</li>
</ul>
<aside class="contextbox">
    <h4>The three most blocking PDF accessibility problems</h4>
    <h5>Untagged PDFs</h5>
    <p>The PDF format is basically a format intended for printing. In 2001, a new version of this format introduced the concept of tagging (“<span lang="en">tagging</span>&#8239;”) which makes it possible to provide assistive technologies with structured information on the content of the pages and thus make it accessible to people with disabilities. In practice, markup allows blind people to identify and interact with different types of content such as titles, lists, paragraphs, tables, images, form fields, etc. The main office suites and desktop publishing software allow you to export tagged PDFs.</p>
    <h5>Documents scanned in image mode</h5>
    <p>When a paper document is scanned in image mode and exported to PDF format, it is necessary to perform optical character recognition (<span lang="en">optical character recognition< /span>&#8239;» or OCR). Without this step, the document will consist only of images for each page which will not be accessible. Character recognition can be carried out via Adobe Acrobat Pro or via any software specialized in OCR.</p>
    <h5>Protection against the use of assistive technologies</h5>
    <p>The PDF format offers many options for protecting documents, for example against modification. One of these options protects the document against the use of assistive technologies by people with disabilities. This option can be activated by mistake and should generally be avoided.</p>
</aside>
<p>The analysis focused mainly on the three most blocking accessibility problems. There are of course many other potential accessibility issues (see the reference for assessing the accessibility of documents in PDF format <a href="https://accessibilite.public.lu/en/rapdf1/">RAPDF </a> for all the criteria to be respected for the production of accessible PDFs) but markup is a prerequisite. If it is absent, a PDF is directly considered inaccessible.</p>
<h4>The results</h4>
<h5>General</h5>
<p>We analyzed 25,398 PDF files representing a volume of 42 GB and more than 471,000 pages. PDF documents represent 95% of office files downloaded from the sites analyzed. The remaining 5% are mainly documents from the Microsoft Office suite.</p>
<p>Of all the PDF documents available for download, 46% are a priori exempt from the accessibility obligation because they were published before September 23, 2018 (exemption provided for in <a href="https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo">the law of May 28, 2019</a>). In the rest of this article, we only consider PDF documents that are subject to the accessibility obligation, that is to say forms and documents published after September 23, 2018.</p>
<figure class="chart">
    <div id="pdf-20230503-1">
        <img src="../../../../content/en/news/img/pdf-20230503-1.svg" alt="Graph 1. Distribution of PDFs available for download (see description below below).">
    </div>
    <details>
        <summary>Description of graph 1</summary>
        <p>This diagram presents, in the form of a proportional map, the distribution of the 25,398 PDF files collected as part of this study:</p>
        <ul>
            <li>13,715 PDFs covered by law (54,8239;%)</li>
            <ul>
                <li>5,623 tagged (22,000% of total or 41,000% of files covered by law)</li>
                <ul>
                    <li>890 forms</li>
                    <li>7&#8239;202 other structured documents</li>
                </ul>
                <li>8,095 untagged (32,000% of total or 59,000% of files covered by law)</li>
                <ul>
                    <li>1,295 files scanned in image mode</li>
                    <li>728 forms</li>
                    <li>6&#8239;069 other unstructured documents</li>
                </ul>
            </ul>
            <li>11,683 exempt PDFs (46%)</li>
        </ul>
    </details>
</figure>
<p>Regarding the accessibility of these documents, we detected that 59% are unmarked. Among these unmarked documents, 9% are forms and 16% are scanned documents on which no optical character recognition has been performed.</p>
<p>From another perspective, if we study the markup of all PDFs according to their nature, we see that approximately 10% of PDF documents are forms. These documents are therefore particularly important because they support active administrative procedures. 52% of them are not marked.</p>
<p>Positive point: very few documents are protected against the use of assistive technologies (0.03%).</p>
<h5>Temporal evolution</h5>
<div class="charts-side-by-side">
    <figure class="chart">
        <div id="pdf-20230503-2">
            <img src="../../../../content/en/news/img/pdf-20230503-2.svg" alt="Graph 2. Share of untagged PDFs by year (see description below -below).">
        </div>
        <details>
            <summary>Description of graph 2</summary>
            <p>This column chart shows the evolution over four years, from 2019 to 2022, in the share of untagged PDFs analyzed as part of this study.</p>
        </details>
    </figure>
    <figure class="chart">
        <div id="pdf-20230503-3">
            <img src="../../../../content/en/news/img/pdf-20230503-3.svg" alt="Graph 3. Quantity of PDFs published per year (see description below below).">
        </div>
        <details>
            <summary>Description of graph 3</summary>
            <p>This column chart shows the evolution over four years, from 2019 to 2022, in the quantity of PDFs published as part of this study.</p>
        </details>
    </figure>
</div>
<p>Based on the date of last modification of the files studied, we can identify interesting trends over the last four years. If the number of documents published per year has been increasing since 2019, the share of untagged PDFs is decreasing (from 64% in 2019 to 53% in 2022).</p>
<p>If the number of unmarked PDFs is still far too high, particularly for forms, the general trend is towards a gradual improvement in the accessibility of documents for download.</p>
<h5>Comparison of the main sites</h5>
<figure class="chart">
    <div id="pdf-20230503-4">
        <img src="../../../../content/en/news/img/pdf-20230503-4.svg" alt="Graph 4. Share of tagged PDFs in percentage (see description below below).">
    </div>
    <details>
        <summary>Description of graph 4</summary>
        <p>This line diagram presents, in eight sites covered by the study, the share of tagged PDF documents.</p>
    </details>
</figure>
<p>We note significant disparities between sites in the share of tagged PDFs. Here we analyzed sites with more than a hundred PDF files available. Guichet.lu leads the pack with 82% and meteolux.lu brings up the rear at just 3%.</p>
<p>These results must nevertheless be qualified, because our automatic tests do not allow us to know whether the documents considered are exempt from the obligation to comply with accessibility standards. Indeed, a document may be issued by a third party and not be under the control of the publishing organization, or an accessible alternative may be present. These two exceptions are provided for in the law.</p>
<h5>Impact of production mode</h5>
<p>We then wanted to know the origin of tagged and untagged files. Fortunately, the PDF format has “&#8239;<span lang="en">Creator</span>&#8239;” metadata. and “<span lang="en">Producer</span>&#8239;” which allow the origin to be identified.</p>
<p>Below you will find the Top 5 software and hardware that our tests were able to identify and which produced the most tagged and untagged documents:</p>
<h6>Top 5 tagged PDF producers</h6>
<ol>
<li>Microsoft Word</li>
<li>Adobe Acrobat PDFMaker</li>
<li>Adobe InDesign</li>
<li>Adobe LiveCycle Designer</li>
<li>Microsoft PowerPoint</li>
</ol>
<h6>Top 5 Untagged PDF Producers</h6>
<ol>
<li>Adobe InDesign</li>
<li>Konica Minolta</li>
<li>Pscript5.dll (Acrobat Distiller or GhostScript)</li>
<li>Microsoft Print to PDF</li>
<li>Adobe Acrobat</li>
</ol>
<p>We still note a significant portion (35%) of files whose origin could not be identified via their metadata.</p>
<p>The main producers of untagged PDFs are InDesign desktop publishing software, scanners, and the PDF printing functionality included in most recent operating systems.</p>
<figure class="chart">
    <div id="pdf-20230503-5">
        <img src="../../../../content/en/news/img/pdf-20230503-5.svg" alt="Graph 5. Share of PDFs scanned in image mode among untagged ones in percentage (see description below).">
    </div>
    <details>
        <summary>Description of graph 5</summary>
        <p>This line diagram presents, in six sites covered by the study, the share of PDF documents scanned in image mode among those not marked up, as a percentage.</p>
    </details>
</figure>
<p>The prevalence of documents scanned into images on public sites is varied. Their number is very low on a site like cecile.lu (2% of untagged PDFs on this site) but very high on that of the City of Luxembourg (52% of untagged PDFs on the site). </p>
<h5>Analysis of accessibility declarations</h5>
<p>All public sites are subject to the obligation to publish an accessibility declaration. This is generally available via an “Accessibility” link. present in the <span lang="en">footer</span> of each page. The organizations in charge of these sites must describe the level of accessibility achieved as well as the accessibility problems of which the organization is aware. We sought to find out whether these organizations are aware of possible accessibility problems with the PDF files they publish.</p>
<p>11 sites out of the 17 studied have an accessibility declaration. Among these:</p>
<ul>
<li>8 invoke an exemption provided for by law for old documents (4) or for documents from third parties (7).</li>
<li>7 invoke an exemption for disproportionate burden: the work to bring their PDF documents into compliance would be too costly in relation to the estimated benefit for citizens.</li>
<li>3 mention PDFs as a non-conformance that will be corrected.</li>
</ul>
<p><strong>None of these statements can accurately identify which PDFs on their sites are not accessible.</strong></p>
<p>The majority of organizations responsible for these sites are therefore aware of the problem but are not necessarily able to resolve it in a simple manner.</p>
<h4>How to make PDF documents accessible?</h4>
<p>As we saw above, the top three producers of untagged PDFs are desktop publishing software, scanners, and the print-to-PDF function. It therefore seems important to us to raise awareness and train the teams responsible for producing brochures. If this is outsourced, it must be possible to include consideration of accessibility in the request (see our page relating to <a href="https://accessibilite.public.lu/en/tools/ specifications.html">specifications</a>).</p>
<p>It would also be relevant to put in place processes to manage the accessibility of digitized documents (OCR and markup stages or provision of an accessible alternative such as the source document before printing and scanning) and finally to raise awareness administrations to avoid as much as possible the use of the PDF printing function and to favor PDF export which produces tagged documents.</p>
<p>To go further and work on the accessibility of the PDFs produced, the SIP provides the repository <a href="https://accessibilite.public.lu/en/rapdf1/">RAPDF</a> , which presents all the criteria to be respected, and offers training for the public sector entitled “&#8239;<a href="https://function-publique.public.lu/en/formation-developpement/catalogue- training/state-sector/04organisat/04-6-egalch/et_04-6-3-31.html">Accessibility of PDF documents through practice</a>&#8239;". If you are concerned, do not hesitate to register.</p>
<aside class="contextbox">
    <h5>Evaluation methodology</h5>
    <h6>Constitution of the sample</h6>
    <p>The sample of sites was obtained from <a href="https://github.com/zakird/crux-top-lists">the list of sites in the Top 1 Million of the UX Report of Google Chrome</a> (see also the <a href="https://developer.chrome.com/docs/crux/methodology/">methodology</a> used by Google to establish this list). We searched for all .lu sites and detected the sites present in <a href="https://data.public.lu/en/datasets/entreprises-des-sites-publics/">the site inventory public</a> published by the SIP in open data. To simplify the exercise, we have kept only the State and municipal sites and excluded the sites requiring identification as well as duplicates (e.g.: www.services-publics.lu andcompte.public.lu) . This method made it possible to obtain the list of 17 sites presented at the beginning of the article.</p>
    <h6>File analysis</h6>
    <p>The <a href="https://github.com/accessibility-luxembourg/simplA11yPDFCrawler">simplA11yPDFCrawler</a> tool, developed at SIP, was used to collect PDFs on these 17 sites and analyze them . Only office documents present on these sites were downloaded; external links were not taken into account. In order to be able to carry out the study in a reasonable time, this collection was limited to 24 hours per site, which means that certain sites may make more documents available than those analyzed as part of this study.</p>
    <h6>Limitations of the study</h6>
    <p>The tests do not verify the presence of an accessible alternative. They also do not check whether the published PDFs are under the control of the administration which publishes it (exemption provided for in the law).</p>
    <p>The law provides for an exemption from the compliance obligation for all files published before September 23, 2018. We technically have no way of knowing the date of publication of a file. To approximate this date, we used the file's last modification date, assuming that this date would be fairly close to the publication date and that a document cannot be published before having been created or modified. This is a conservative assumption, it potentially underestimates the number of files falling within the scope of the law.</p>
    <h6 lang="en">Open data</h6>
    <p>All of the data used for this study is available in <span lang="en">Open data</span> in the dataset <a href="https://data.public.lu/ fr/datasets/analysis-of-digital-accessibility-of-pdf-files-present-on-the-17-most-visited-public-sites-april-2023/">Analysis of digital accessibility of files PDF present on the 17 most visited public sites - April 2023</a>, under <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.fr">CC0 license</a>. </p>
</aside>