### Introduction
Chaque état membre de l’UE peut définir sa propre méthode de contrôle simplifié, mais cette méthode doit répondre aux exigences définies dans la [décision d'exécution UE 2018/1524](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32018D1524). L’objectif de cette méthode de contrôle simplifié est de détecter des non-conformités, elle ne vise pas l’exhaustivité du contrôle approfondi. Cette méthode est fondée sur un [sous-ensemble de critères du RAWeb](../raweb2/audit-simpl.html) appliqués à un échantillon de 3 pages.

### Méthode de contrôle simplifié de sites

#### Outils recommandés pour les tests
La méthode de contrôle peut être réalisée sans les outils suivants. Cependant la décision d'exécution UE 2018/1524 encourage fortement la mise en oeuvre de tests semi-automatisés. Nous recommandons donc les outils suivant pour mener les tests : 

- les outils recommandés dans la [méthodologie de test du RAWeb](../../fr/raweb2/methodo-test.html#outils)
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
Les bonnes pratiques ne correspondant pas à proprement parler à des problèmes d’accessibilité, elles peuvent être désactivées dans les réglages de l’extension Axe. La correspondance entre les règles Axe et les critères RAWeb est disponible dans le tableau ci-après ainsi que sur la [page reprenant l'ensemble des critères pour les tests simplifiés](../raweb2/audit-simpl.html).

##### Critères testables manuellement

Voici la liste des critères à tester manuellement : 1.1, 1.2, 1.3, 1.4, 1.6, 1.7, 2.1, 3.1, 3.2, 3.3, 4.10, 4.11, 4.12, 4.13, 4.15, 4.16, 4.18, 4.19, 4.2, 4.3, 4.9, 5.5, 5.6, 6.1, 6.2, 7.4, 8.1, 8.2, 8.3, 8.4, 8.6, 8.7, 9.1, 9.2, 9.3, 10.2, 10.5, 10.7, 11.1, 11.2, 11.3, 11.4, 11.7, 11.8, 11.9, 11.11, 11.12, 11.15, 11.16, 11.19, 12.3, 12.4, 12.6, 12.7, 12.8, 13.1, 13.11, 13.3, 13.4.
Ces critères sont listés sur la page [audit simplifié – critères](../raweb2/audit-simpl.html).
Pour l’exécution des tests manuels, utiliser la méthodologie de test du RAWeb (un lien est fourni dans chaque test sur la page mentionnée précédemment).
Si un problème d’accessibilité est détecté pendant l’audit manuel et ne correspond pas à un de ces critères, il est recommandé de mentionner ce problème dans le rapport.

<table>
    <caption>Règles Axe (axe-core 4.14.0) et leurs critères RAWEB2</caption>
    <thead>
      <tr>
        <th scope="col">règle Axe</th>
        <th scope="col">message d'erreur Axe en anglais</th>
        <th scope="col">critère RAWEB 2</th>
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


