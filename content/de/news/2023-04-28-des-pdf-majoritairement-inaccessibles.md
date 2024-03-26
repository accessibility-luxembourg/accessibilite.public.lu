---
teaser: rotary-press-teaser.jpg
tags:
- PDF
author: Alain Vagner
---
<style type="text/css">
div#pdf-20230503-1 button#hc-linkto-highcharts-data-table-0 {
    display: none;
}
</style>
<script src="../../../../content/fr/news/2023-04-28-des-pdf-majoritairement-inaccessibles.js"></script>
<h2>Most PDFs on the most visited public sites are inaccessible</h2>
<h3>The accessibility of these documents, which are sometimes present on a massive scale on Luxembourg's most visited public portals in 2023, is nevertheless tending to improve</h3>
<hr>
<div class="intro">
    <p>The presence on public sites of a large number of inaccessible PDF files is a key problem for disabled people. Indeed, certain accessibility problems can completely block access to information or the implementation of administrative procedures in the case of forms. In this article, we look at the accessibility of PDF files on the 17 most frequently visited public websites in Luxembourg.</p>
</div>
<figure role="group" aria-label="Photo: Getty Images / istockphoto.com / nyvltart" class="pic">
    <img src="../../../../content/fr/news/img/rotary-press.jpg" alt="Photo of a publication being printed on a rotary press">
    <figcaption>Photo: Getty Images / istockphoto.com / nyvltart</figcaption>
</figure>
<p>When a PDF document is digitised as an image or not marked up, a blind or partially sighted user has no access at all to its content (for more details on this subject, see the article "<a href="https://access42.net/pdf-accessibilite?lang=fr">PDF and accessibility, the false good idea</a>").</p>
<h4>The study</h4>
<p>In April 2023, the SIP analysed a sample of PDF files from the 17 most visited public websites in Luxembourg, according to <a href="https://github.com/zakird/crux-top-lists">Google's Top 1 Million</a>:</p>
<ul>
<li>adem.lu,</li>
<li>cita.lu,</li>
<li>gouvernement.lu,</li>
<li>govjobs.lu,</li>
<li>guichet.lu,</li>
<li>impotsdirects.public.lu,</li>
<li>inll.lu,</li>
<li>inondations.lu,</li>
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
    <h4>The three most problematic accessibility issues for PDFs</h4>
    <h5>Untagged PDFs</h5>
    <p>The PDF format was originally designed for printing. In 2001, a new version of this format introduced the concept of<span lang="en">tagging</span>, which provides assistive technologies with structured information about the content of pages, making them accessible to people with disabilities. In practice, tagging enables blind people to identify and interact with different types of content, such as titles, lists, paragraphs, tables, images, form fields, etc. The main office suites and DTP (Desktop Publishing) software can export tagged PDFs.</p>
    <h5>Documents scanned in image mode</h5>
    <p>When a paper document is scanned in image mode and exported in PDF format, optical<span lang="en">character</span> recognition (OCR) is required. Without this step, the document will consist solely of images for each page, which will not be accessible. Character recognition can be carried out using Adobe Acrobat Pro or any software specialising in OCR.</p>
    <h5>Protection against the use of assistive technologies</h5>
    <p>The PDF format offers a number of options for protecting documents, for example against modification. One of these options protects the document against the use of assistive technologies by people with disabilities. This option can be activated by mistake and should be avoided overall.</p>
</aside>
<p>The analysis focused essentially on the three most blocking accessibility problems. There are, of course, many other potential accessibility problems (see the <a href="https://accessibilite.public.lu/fr/rapdf1/">RAPDF</a> framework for evaluating the accessibility of documents in PDF format for all the criteria to be met for producing accessible PDFs), but tagging is a prerequisite. If it is missing, a PDF is immediately considered not accessible.</p>
<h4>The results</h4>
<h5>General</h5>
<p>We analysed 25,398 PDF files, representing a volume of 42 GB and over 471,000 pages. PDF documents represent 95% of the office files downloaded from the sites analysed. The remaining 5% were mainly documents from the Microsoft Office suite.</p>
<p>Of all the PDF documents available for download, 46% are a priori exempt from the accessibility obligation, as they were published before 23 September 2018 (exemption provided for in <a href="https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo">the law of 28 May 2019</a>). In the remainder of this article, we will only consider PDF documents that are subject to the accessibility obligation, i.e. forms and documents published after 23 September 2018.</p>
<figure class="chart">
    <div id="pdf-20230503-1">
        <img src="../../../../content/fr/news/img/pdf-20230503-1.svg" alt="Graph 1. Breakdown of PDFs available for download (see description below).">
    </div>
    <details>
        <summary>Description of diagram 1</summary>
        <p>This diagram shows, in the form of a proportional map, the distribution of the 25,398 PDF files collected as part of this study:</p>
        <ul>
            <li>13,715 PDFs covered by the law (54%)</li>
            <ul>
                <li>5,623 tagged (22% of the total or 41% of files covered by the law)</li>
                <ul>
                    <li>890 forms</li>
                    <li>7,202 other structured documents</li>
                </ul>
                <li>8,095 untagged (32% of the total or 59% of the files covered by the Act)</li>
                <ul>
                    <li>1,295 files scanned in image mode</li>
                    <li>728 forms</li>
                    <li>6,069 other unstructured documents</li>
                </ul>
            </ul>
            <li>11,683 exempt PDFs (46%)</li>
        </ul>
    </details>
</figure>
<p>With regard to the accessibility of these documents, we have detected that 59% are untagged. Of these untagged documents, 9% are forms and 16% are scanned documents on which no optical character recognition has been performed.</p>
<p>From another perspective, if we look at the tagging of all PDFs according to their nature, we see that around 10% of PDF documents are forms. These documents are therefore particularly important because they support active administrative procedures. 52% are not tagged.</p>
<p>On a positive note, very few documents are protected against the use of assistive technologies (0.03%).</p>
<h5>Evolution over time</h5>
<div class="charts-side-by-side">
    <figure class="chart">
        <div id="pdf-20230503-2">
            <img src="../../../../content/fr/news/img/pdf-20230503-2.svg" alt="Graph 2. Percentage of non-tagged PDFs by year (see description below).">
        </div>
        <details>
            <summary>Description of graph 2</summary>
            <p>This column chart shows the change over four years, from 2019 to 2022, in the proportion of untagged PDFs analysed as part of this study.</p>
        </details>
    </figure>
    <figure class="chart">
        <div id="pdf-20230503-3">
            <img src="../../../../content/fr/news/img/pdf-20230503-3.svg" alt="Graph 3. Number of PDFs published per year (see description below).">
        </div>
        <details>
            <summary>Description of graph 3</summary>
            <p>This column chart shows the change over four years, from 2019 to 2022, in the number of PDFs published as part of this study.</p>
        </details>
    </figure>
</div>
<p>Based on the last modification date of the files studied, we can identify some interesting trends over the last four years. While the number of documents published per year has been increasing since 2019, the share of untagged PDFs is decreasing (from 64% in 2019 to 53% in 2022).</p>
<p>While the number of untagged PDFs is still far too high, particularly for forms, the general trend is towards a gradual improvement in the accessibility of downloadable documents.</p>
<h5>Comparison of the main sites</h5>
<figure class="chart">
    <div id="pdf-20230503-4">
        <img src="../../../../content/fr/news/img/pdf-20230503-4.svg" alt="Graph 4. Percentage of tagged PDFs (see description below).">
    </div>
    <details>
        <summary>Description of graph 4</summary>
        <p>This line graph shows the proportion of tagged PDF documents on the eight sites covered by the study.</p>
    </details>
</figure>
<p>There are significant differences between the sites in terms of the proportion of tagged PDFs. Here we have analysed the sites with more than a hundred PDF files available. Guichet.lu leads the way with 82% and meteolux.lu comes in at just 3%.</p>
<p>These results must be qualified, however, as our automatic tests do not allow us to determine whether the documents in question are exempt from the obligation to comply with accessibility standards. This is because a document may be issued by a third party and not be under the control of the publishing organisation, or an accessible alternative may be available. These two exceptions are provided for in the law.</p>
<h5>Impact of production method</h5>
<p>We then wanted to know the origin of tagged and untagged files. Fortunately, the PDF format has "<span lang="en">Creator</span>" and "<span lang="en">Producer</span>" metadata that can be used to identify the source.</p>
<p>Below are the Top 5 software and hardware products that our tests identified as producing the most tagged and untagged documents:</p>
<h6>Top 5 producers of tagged PDFs</h6>
<ol>
<li>Microsoft Word</li>
<li>Adobe Acrobat PDFMaker</li>
<li>Adobe InDesign</li>
<li>Adobe LiveCycle Designer</li>
<li>Microsoft Powerpoint</li>
</ol>
<h6>Top 5 untagged PDF producers</h6>
<ol>
<li>Adobe InDesign</li>
<li>Konica Minolta</li>
<li>Pscript5.dll (Acrobat Distiller or GhostScript)</li>
<li>Microsoft Print to PDF</li>
<li>Adobe Acrobat</li>
</ol>
<p>There is still a significant proportion (35%) of files whose origin cannot be identified via their metadata.</p>
<p>The main producers of untagged PDFs are InDesign DTP software, scanners and the PDF printing functionality included in most recent operating systems.</p>
<figure class="chart">
    <div id="pdf-20230503-5">
        <img src="../../../../content/fr/news/img/pdf-20230503-5.svg" alt="Graph 5. Percentage of digitised PDFs among non-tagged PDFs (see description below).">
    </div>
    <details>
        <summary>Description of Chart 5</summary>
        <p>This line graph shows the percentage of untagged PDF documents scanned in image mode in the six sites covered by the study.</p>
    </details>
</figure>
<p>The prevalence of documents digitised as images on public sites varies. Their number is very low on a site such as guichet.lu (2% of untagged PDFs on this site) but very high on that of the City of Luxembourg (52% of untagged PDFs on the site).</p>
<h5>Analysis of accessibility statements</h5>
<p>All public websites are required to publish an accessibility statement. This is generally available via an "Accessibility" link in the <span lang="en">footer of</span> each page. The organisations in charge of these sites must describe the level of accessibility achieved and any accessibility problems of which they are aware. We wanted to find out whether these organisations are aware of any accessibility problems with the PDF files they publish.</p>
<p>11 of the 17 sites studied have an accessibility statement. These include</p>
<ul>
<li>8 invoke an exemption provided for by law for old documents (4) or for documents originating from third parties (7).</li>
<li>7 invoke an exemption for disproportionate burden: the work involved in bringing their PDF documents into compliance would be too costly in relation to the estimated benefit for citizens.</li>
<li>3 mention PDFs as a non-compliance that will be corrected.</li>
</ul>
<p><strong>None of these statements make it possible to identify precisely which PDFs on their sites are not accessible.</strong></p>
<p>The majority of the organisations responsible for these sites are therefore aware of the problem but are not necessarily in a position to resolve it simply.</p>
<h4>How can PDF documents be made accessible?</h4>
<p>As we saw above, the top three producers of unmarked PDFs are DTP software, scanners and the PDF printing function. We therefore feel it is important to raise awareness and train the teams responsible for producing brochures. If this is outsourced, it should be possible to include accessibility in the request (see our page on <a href="https://accessibilite.public.lu/fr/tools/cahier-des-charges.html">specifications</a>).</p>
<p>It would also be appropriate to put in place processes to manage the accessibility of digitised documents (OCR and tagging stages or provision of an accessible alternative such as the source document before printing and digitisation) and, finally, to raise awareness among administrations to avoid using the PDF printing function as much as possible and to favour PDF export, which produces tagged documents.</p>
<p>To go further and work on the accessibility of the PDF documents produced, the SIP is making available the <a href="https://accessibilite.public.lu/fr/rapdf1/">RAPDF</a> framework, which sets out all the criteria to be met, and is offering a training course for the public sector entitled "<a href="https://fonction-publique.public.lu/fr/formation-developpement/catalogue-formations/secteur-etatique/04organisat/04-6-egalch/et_04-6-3-31.html">Accessibility of PDF documents in practice</a>". If you are interested, don't hesitate to sign up.</p>
<aside class="contextbox">
    <h5>Evaluation methodology</h5>
    <h6>Constitution of the sample</h6>
    <p>The sample of sites was obtained from <a href="https://github.com/zakird/crux-top-lists">the list of sites in the Top 1 Million of the Google Chrome UX Report</a> (see also the <a href="https://developer.chrome.com/docs/crux/methodology/">methodology</a> used by Google to compile this list). We searched for all .lu sites and detected sites in <a href="https://data.public.lu/fr/datasets/inventaire-des-sites-publics/">the inventory of public sites</a> published by the SIP in open data. To simplify the exercise, we kept only State and local authority sites and excluded sites requiring identification as well as duplicates (e.g. www.services-publics.lu and guichet.public.lu). This method produced the list of 17 sites presented at the beginning of this article.</p>
    <h6>File analysis</h6>
    <p>The <a href="https://github.com/accessibility-luxembourg/simplA11yPDFCrawler">simplA11yPDFCrawler</a> tool, developed at SIP, was used to collect and analyse the PDFs on these 17 sites. Only the office documents present on these sites were downloaded; external links were not taken into account. In order to carry out the study in a reasonable timeframe, this collection was limited to 24 hours per site, which means that some sites may make more documents available than those analysed in this study.</p>
    <h6>Limitations of the study</h6>
    <p>The tests do not verify the presence of an accessible alternative. Nor do they check whether the PDFs published are under the control of the publishing authority (exemption provided for in the law).</p>
    <p>The law provides an exemption from the obligation to comply for all files published before 23 September 2018. Technically, we have no way of knowing the date of publication of a file. To get an approximation of this date, we have used the date on which the file was last modified, on the assumption that this date would be fairly close to the publication date and that a document cannot be published before it has been created or modified. This is a conservative assumption, and potentially underestimates the number of files falling within the scope of the law.</p>
    <h6 lang="en">Open data</h6>
    <p>All the data used in this study is available in <span lang="en">Open data</span> in the dataset <a href="https://data.public.lu/fr/datasets/analyse-de-laccessibilite-numerique-des-fichiers-pdf-presents-sur-les-17-sites-publics-les-plus-visites-avril-2023/">Analysis of the digital accessibility of PDF files on the 17 most visited public sites - April 2023</a>, under <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.fr">CC0 licence</a>.</p>
</aside>