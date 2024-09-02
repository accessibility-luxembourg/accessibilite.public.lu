### Introduction
Chaque état membre de l’UE peut définir sa propre méthode de contrôle simplifié, mais cette méthode doit répondre aux exigences définies dans la [décision d'exécution UE 2018/1524](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32018D1524). L’objectif de cette méthode de contrôle simplifié est de détecter des non-conformités, elle ne vise pas l’exhaustivité du contrôle approfondi. Cette méthode est fondée sur un [sous-ensemble de critères du RAWeb](./audit-simpl.html) appliqués à un échantillon de 3 pages.

### Méthode de contrôle simplifié de sites

#### Outils recommandés pour les tests
La méthode de contrôle peut être réalisée sans les outils suivants. Cependant la décision d'exécution UE 2018/1524 encourage fortement la mise en oeuvre de tests semi-automatisés. Nous recommandons donc les outils suivant pour mener les tests : 

- les outils recommandés dans la [méthodologie de test du RAWeb](../../../html/fr/raweb1/methodo-test.html#outils)
- [L’extension de navigateur Axe](https://www.deque.com/axe/browser-extensions/)

Ces outils sont gratuits et open sources, ou basés sur des technologies open sources.

#### Modèles de documents 
Voici les modèles de documents pour réaliser un audit simplifié.

- [Modèle de rapport d'audit](../files/template-rapport-audit-simplifie.docx "Modèle de rapport d’audit simplifié, format Docx (21 Ko)"), format Docx (21 Ko)
- [Grille d'audit](../files/template-grille-audit-simplifie.xlsx "Modèle de grille d’audit simplifié, format Xlsx (81 Ko)"), format Xlsx (81 Ko)

#### Définition de l'échantillon de pages
L’échantillon de pages à tester est de 3 pages. Nous recommandons les trois pages suivantes :

- La page d’accueil ;
- Une page avec un formulaire (la page de contact par exemple) ;
- Une page avec un contenu particulier : une vidéo, un tableau, une image complexe.

Il est nécessaire d’éviter les pages contenant un nombre trop important de contenus dérogés.
Si des non-conformités sont détectées pour un critère proposé ci-après, il n’est pas nécessaire de tester les 3 pages pour ce critère.
Nous considérons uniquement des pages web, tous les documents téléchargeables sont hors scope de cette méthode.

#### Appréciation générale
Certains éléments du site ne sont pas contrôlables au moyen des critères de contrôle simplifié proposés ici mais impactent la lecture qui pourra être faite des résultats. Cette appréciation doit être réalisée de manière globale sur l’ensemble du site.
Les critères suivants doivent être évalués et apparaitre dans une section dédiée du rapport :

- Quantité de contenus dérogés : il est surtout important de pointer les contenus dérogés qui embarquent des fonctionnalités ou des informations essentielles aux usagers (démarche en ligne, accès à des informations etc.). Un trop grand nombre de contenus dérogés pourrait remettre en question l’évaluation de la conformité.
- Quantité et nature des documents bureautiques (Word, Excel, PDF) : ici la quantité et la nature des documents sont deux indices importants. Plus il y a de contenus en téléchargement, plus il y a de chances que des utilisateurs n’accèdent pas à l’information. Ce défaut d’accès étant d’autant plus dommageable que les documents bureautiques sont nécessaires à la réalisation d’une démarche.
- Présence de procédures essentielles aux usagers derrière une procédure d’identification inaccessible.


#### Évaluation de l’échantillon
Nous devons évaluer chaque critère de la checklist décrite ci-après. L’objectif est uniquement de lister des non-conformités.
On démarre l’évaluation en lançant les tests automatisés, on vérifie manuellement les résultats des tests automatisés puis on réalise les tests manuels.
Si aucune non-conformité n’est remontée par les tests automatisés pour un critère donné, alors un test manuel plus complet est engagé. Cependant, si le test automatique a déjà relevé une erreur, alors le test manuel plus complet n’est plus nécessaire.
Nous proposons de remplir la grille d’audit au fur et à mesure de l’exécution de l’audit. Si un test échoue sur une page, on stoppe le test et on le documente, il n’est pas nécessaire de tester d’autres pages.
Lorsque l’ensemble des critères de la checklist ont été testés, il est nécessaire de synthétiser les résultats de l’audit dans le rapport.

#### Checklist
##### Critères testables semi-automatiquement
Lancer les tests avec l’extension Axe et ne relever que les résultats correspondant aux règles Axe suivantes. L’identifiant de la règle Axe est visible dans l’URL affichée au survol de chaque problème.
Les bonnes pratiques ne correspondant pas à proprement parler à des problèmes d’accessibilité, elles peuvent être désactivées dans les réglages de l’extension Axe. La correspondance entre les règles Axe et les critères RAWeb est disponible dans le tableau ci-après ainsi que sur la [page reprenant l'ensemble des critères pour les tests simplifiés](./audit-simpl.html).

##### Critères testables manuellement

Voici la liste des critères à tester manuellement : 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 3.1, 3.2, 4.1, 4.2, 4.3, 4.4, 4.8, 4.9, 4.10, 4.11, 5.6, 5.7, 6.1, 6.2,7.3, 8.4, 8.5, 8.6, 8.7, 8.8, 9.1, 9.2, 10.7, 10.9, 10.10, 10.14, 11.1, 11.2, 11.5, 11.6, 11.7, 11.10, 12.6, 12.7, 12.8, 12.9, 12.11, 13.1, 13.7, 13.8.
Ces critères sont listés sur la page [audit simplifié – critères](./audit-simpl.html).
Pour l’exécution des tests manuels, utiliser la méthodologie de test du RAWeb (un lien est fourni dans chaque test sur la page mentionnée précédemment).
Si un problème d’accessibilité est détecté pendant l’audit manuel et ne correspond pas à un de ces critères, il est recommandé de mentionner ce problème dans le rapport.

<table>
<caption>Tableau de correspondance entre règles Axe et critères RAWeb</caption>
<tbody>
<tr>
<th scope="col" >
<p><strong>r&egrave;gle Axe</strong></p>
</th>
<th scope="col" >
<p><strong>Message d'erreur Axe en anglais</strong></p>
</th>
<th scope="col" >
<p><strong>Crit&egrave;res RAWeb</strong></p>
</th>
</tr>
<tr>
<td >
<p>area-alt</p>
</td>
<td >
<p lang="en">Active &lt;area&gt; elements must have alternate text</p>
</td>
<td >
<p>1.1 ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Aria-allowed-attr</p>
</td>
<td >
<p lang="en">Elements must only use allowed ARIA attributes</p>
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
<p lang="en">aria-hidden='true' must not be present on the document body</p>
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
<p lang="en">ARIA hidden element must not contain focusable elements</p>
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
<p lang="en">Required ARIA attributes must be provided</p>
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
<p lang="en">Certain ARIA roles must contain particular children</p>
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
<p lang="en">Certain ARIA roles must be contained by particular parents</p>
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
<p lang="en">Use aria-roledescription on elements with a semantic role</p>
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
<p lang="en">ARIA roles used must conform to valid values</p>
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
<p lang="en">ARIA attributes must conform to valid names</p>
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
<p lang="en">ARIA attributes must conform to valid values</p>
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
<p lang="en">&lt;blink&gt; elements are deprecated and must not be used</p>
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
<p lang="en">Buttons must have discernible text</p>
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
<p lang="en">Page must have means to bypass repeated blocks</p>
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
<p lang="en">Elements must have sufficient color contrast</p>
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
<p lang="en">&lt;dl&gt; elements must only directly contain properly-ordered &lt;dt&gt; and &lt;dd&gt; groups, &lt;script&gt;, &lt;template&gt; or &lt;div&gt; elements</p>
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
<p lang="en">&lt;dt&gt; and &lt;dd&gt; elements must be contained by a &lt;dl&gt;</p>
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
<p lang="en">IDs of active elements must be unique</p>
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
<p lang="en">IDs used in ARIA and labels must be unique</p>
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
<p lang="en">Frames must have an accessible name</p>
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
<p lang="en">Heading levels should only increase by one</p>
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
<p lang="en">&lt;html&gt; element must have a lang attribute</p>
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
<p lang="en">&lt;html&gt; element must have a valid value for the lang attribute</p>
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
<p lang="en">Images must have alternate text</p>
</td>
<td >
<p>1.1 ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Input-button-name</p>
</td>
<td >
<p lang="en">Input buttons must have discernible text</p>
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
<p lang="en">Image buttons must have alternate text</p>
</td>
<td >
<p>1.1&nbsp;&nbsp; ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Label</p>
</td>
<td >
<p lang="en">Form elements must have labels</p>
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
<p lang="en">Links must have discernible text</p>
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
<p lang="en">&lt;ul&gt; and &lt;ol&gt; must only directly contain &lt;li&gt;, &lt;script&gt; or &lt;template&gt; elements</p>
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
<p lang="en">&lt;li&gt; elements must be contained in a &lt;ul&gt; or &lt;ol&gt;</p>
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
<p lang="en">&lt;marquee&gt; elements are deprecated and must not be used</p>
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
<p lang="en">Timed refresh must not exist</p>
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
<p lang="en">&lt;object&gt; elements must have alternate text</p>
</td>
<td >
<p>1.1 ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Role-img-alt</p>
</td>
<td >
<p lang="en">[role='img'] elements have an alternative text</p>
</td>
<td >
<p>1.1&nbsp;&nbsp; ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Svg-img-alt</p>
</td>
<td >
<p lang="en">svg elements with an img role have an alternative text</p>
</td>
<td >
<p>1.1&nbsp;&nbsp; ou 1.2</p>
</td>
</tr>
<tr>
<td >
<p>Td-headers-attr</p>
</td>
<td >
<p lang="en">All cells in a table element that use the headers attribute must only refer to other cells of that same table</p>
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
<p lang="en">All th elements and elements with role=columnheader/rowheader must have data cells they describe</p>
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
<p lang="en">&lt;video&gt; elements must have captions</p>
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
<p lang="en">lang attribute must have a valid value</p>
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
<p lang="en">All page content should be contained by landmarks</p>
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
<p lang="en">Document should not have more than one main landmark</p>
</td>
<td >
<p>9.2</p>
</td>
</tr>
</tbody>
</table>


