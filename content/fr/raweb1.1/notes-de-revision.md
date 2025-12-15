---
title: Notes de révision du RAWeb 1 vers RAWeb 1.1
---

Le [RAWeb 1.1](/fr/raweb1.1/) est le référentiel d’accessibilité luxembourgeois qui couvre l’ensemble des exigences de la norme européenne [EN 301 549 v3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) actuellement en vigueur dans toute l’Europe.
Il s’agit d’une mise à jour du [RAWeb 1.0](/fr/raweb1/), lui-même dérivé du [RGAA 4.1.2](https://accessibilite.numerique.gouv.fr/) publié par la DINUM en France.
Le RAWeb 1.0 dispose de ses propres [notes de révision](/fr/raweb1/notes-revision.html).

L’ensemble des évolutions réalisées entre les versions 1.1 et 1.0 du RAWeb sont détaillées ci-dessous&nbsp;:

### Méthodologie

### Critères

#### 1.2

##### Modification de l’intitulé 

L’intitulé du [critère 1.2](/fr/raweb1.1/criteres.html#crit-1-2) est modifié pour intégrer la notion &laquo;&nbsp;sans légende&nbsp;&raquo;, comme c’est déjà le cas sur l’intitulé du test.

###### Dans le RAWeb 1

<blockquote>

Chaque image de décoration est-elle correctement ignorée par les technologies d’assistance&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Chaque image de décoration, sans légende, est-elle correctement ignorée par les technologies d’assistance&nbsp;?

</blockquote>

##### Note technique

Ajout d’une précision concernant les images pour lesquelles l’attribut `aria-hidden="true"` est positionné sur un élément parent et pas l’image elle-même. 

<blockquote>

Si une image se trouve imbriquée dans une balise possédant un attribut `aria-hidden="true"`, alors elle sera considérée comme étant masquée pour les technologies d’assistance.

</blockquote>

##### Restriction sur l’usage du `role="presentation"` et introduction du `role="none"` pour les éléments `<img>` ou `<area>`

Aux [tests 1.2.1](/fr/raweb1.1/criteres.html#test-1-2-1) et [1.2.2](/fr/raweb1.1/criteres.html#test-1-2-2), le RAWeb 1 prévoyait qu’il était possible de masquer une image (`<img>` ou `<area>`) avec le `role="presentation"`, sans autre condition. 

Des tests récents sur l’environnement de test ont montré qu’une image avec le `role="presentation"` et un attribut `title` ou une propriété de nommmage ARIA n’était pas ignorée. Les tests sont réécrits pour prendre en compte ces particularités. 

Le `role="none"` ayant des effets similaires pour le masquage des images, il est introduit dans les tests. 

Les méthodologies sont modifiées en conséquence.

<b>Attention&nbsp;:</b> Il y a ici un cas de **défaut de rétrocompatibilité avec le RAWeb 1**. En effet, des images masquées avec le `role="presentation"` mais avec un nommage `title`, `aria-label` ou `aria-labelledby` ont pu être considérées conformes. Elles seront considérées non conformes avec cette nouvelle version du test. 

###### Dans le RAWeb 1

<blockquote>

Test 1.2.1 Chaque image (balise `<img>`) de décoration, sans légende, vérifie-t-elle une de ces conditions&nbsp;?
steps:
  - La balise `<img>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.
  - La balise `<img>` possède un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.

Test 1.2.2 Chaque zone non cliquable (balise `<area>` sans attribut `href`) de décoration, vérifie-t-elle une de ces conditions&nbsp;?
steps:
  - La balise `<area>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.
  - La balise `<area>` possède un attribut WAI-ARIA `aria-hidden="true"` ou `role="presentation"`.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Test 1.2.1 Chaque image (balise `<img>`) de décoration, sans légende, vérifie-t-elle une de ces conditions&nbsp;?
steps:
  - La balise `<img>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.
  - La balise `<img>` possède un attribut WAI-ARIA `aria-hidden="true"`.
  - La balise `<img>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut `title`.
  - La balise `<img>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut WAI-ARIA `aria-labelledby`.
  - La balise `<img>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut WAI-ARIA `aria-label`.

Test 1.2.2 Chaque zone non cliquable (balise `<area>` sans attribut `href`) de décoration, vérifie-t-elle une de ces conditions&nbsp;?
steps:
  - La balise `<area>` possède un attribut `alt` vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.
  - La balise `<area>` possède un attribut WAI-ARIA `aria-hidden="true"`.
  - La balise `<area>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut `title`.
  - La balise `<area>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut WAI-ARIA `aria-labelledby`.
  - La balise `<area>` possède un `role="presentation"` ou un `role="none"` et est dépourvue de l’attribut WAI-ARIA `aria-label`.

</blockquote>

##### Suppression des conditions de tests sur les propriétés de nommage des éléments `<svg>`

Au [test 1.2.4](/fr/raweb1.1/criteres.html#test-1-2-4), le RAWeb 1 demandait de tester l’absence de méthode de nommage pour l’élément `<svg>` même en présence d’une propriété `aria-hidden="true"`. Des tests récents sur l’environnement de test ont montré que, même en présence d’une méthode de nommage, la seule présence de la propriété `aria-hidden="true"` est suffisante pour que l’image soit ignorée. Il n’est plus nécessaire de contrôler l’absence de méthode de nommage.

La méthodologie est modifiée en conséquence.

###### Dans le RAWeb 1

<blockquote>

Chaque image vectorielle (balise `<svg>`) de décoration, sans légende, vérifie-t-elle ces conditions&nbsp;?

- La balise `<svg>` possède un attribut WAI-ARIA `aria-hidden="true"`.
- La balise `<svg>` et ses enfants sont dépourvus d’alternative textuelle.
- Les balises `<title>` et `<desc>` sont absentes ou vides.
- La balise `<svg>` et ses enfants sont dépourvus d’attribut `title`.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Chaque image vectorielle (balise `<svg>`) de décoration, sans légende, possède un attribut WAI-ARIA `aria-hidden="true"`. Cette règle est-elle respectée&nbsp;?

</blockquote>

#### 1.6

La note technique du [critère 1.6](/fr/raweb1.1/criteres.html#crit-1-6) est modifiée pour prendre en compte&nbsp;: 
- l’intégration de l’élément `<title>` dans le calcul du nom accessible d’un élément `<svg>` (voir l’évolution de l’entrée de glossaire [Alternative textuelle (image)](glossaire.html#alternative-textuelle-image))&nbsp;;
- l’évolution du [critère 1.9](/fr/raweb1.1/criteres.html#crit-1-9) et la suppression des exigences liées à la présence d’un attribut `role` et `aria-label`.

##### Dans le RAWeb 1

<blockquote>

Dans le cas du SVG, le manque de support de l’élément `<title>` et `<desc>` par les technologies d’assistance crée une difficulté dans le cas de l’implémentation de l’alternative textuelle de l’image et de sa description détaillée. Dans ce cas, il est recommandé d’utiliser l’attribut WAI-ARIA `aria-label` pour implémenter à la fois l’alternative textuelle courte et la référence à la description détaillée adjacente ou l’attribut WAI-ARIA `aria-labelledby` pour associer les passages de texte faisant office d’alternative courte et de description détaillée.

L’utilisation de l’attribut WAI-ARIA `aria-describedby` n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa description détaillée, par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la description détaillée.

La description détaillée adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le critère 1.9 doit être vérifié (utilisation de `<figure>` et des attributs WAI-ARIA `role="figure"` et `aria-label`, notamment).

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Dans le cas du SVG, le manque de support de l’élément `<desc>` ne permet pas son utilisation pour l’implémentation d’une description détaillée.

L’utilisation de l’attribut WAI-ARIA `aria-describedby` n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa description détaillée, par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la description détaillée.

La description détaillée adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le [critère 1.9](/fr/raweb1.1/criteres.html#crit-1-9) doit être vérifié.

</blockquote>

#### 1.9 

Les tests du [critère 1.9](/fr/raweb1.1/criteres.html#crit-1-9) du RAWeb 1 demandait de toujours vérifier la présence d’un `role="group"` ou `role="figure"` et d’un attribut WAI-ARIA `aria-label` sur la balise `<figure>`. 

Des tests récents sur l’environnement de test ont montré que les images légendées sont correctement identifiées et présentées aux utilisateurs avec l’implémentation simple `<figure>` et `<figcaption>`. 

Les conditions relatives à la présence des attributs `role` et `aria-label` sont supprimées des 5 tests&nbsp;: 

<blockquote>

- La balise `<figure>` possède un attribut WAI-ARIA `role="figure"` ou `role="group"`.
- La balise `<figure>` possède un attribut WAI-ARIA `aria-label` dont le contenu est identique au contenu de la légende.

</blockquote>

Les méthodologies sont modifiées en conséquence.

La note technique est également modifiée pour prendre en compte ces changements.

##### Note technique

###### Dans le RAWeb 1

<blockquote>

L’implémentation d’un attribut WAI-ARIA `role="group"` ou `role="figure"` sur l’élément parent `<figure>` est destiné à pallier le manque de support actuel des éléments `<figure>` par les technologies d’assistance. L’utilisation d’un élément `<figcaption>` pour associer une légende à une image impose au minimum l’utilisation d’un attribut WAI-ARIA `aria-label` sur l’élément parent `<figure>` dont le contenu sera identique au contenu de l’élément `<figcaption>`. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’alternative de l’image et le contenu de l’élément `<figcaption>`, par exemple&nbsp;:

`<img src="image.png" alt="Photo&nbsp;: soleil couchant" /><figcaption>Photo&nbsp;: crédit xxx</figcaption>`

Les attributs WAI-ARIA `aria-labelledby` et `aria-describedby` ne peuvent pas être utilisés actuellement par manque de support par les technologies d’assistance.

Note&nbsp;: les images légendées doivent par ailleurs respecter le critère 1.1 et le critère 1.3 relatifs aux images porteuses d’information.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Les images légendées doivent par ailleurs respecter le critère 1.1 et le critère 1.3 relatifs aux images porteuses d’information.

</blockquote>

#### 3.1

Les méthodologies des tests du [critère 3.1](/fr/raweb1.1/criteres.html#crit-3-1) étaient incomplètes, elles sont modifiées pour mieux refléter ce qui est effectivement attendu en termes d’implémentation de graphique et de code. Pour chacun des 6 tests, la deuxième étape est modifiée.

##### Dans le RAWeb 1

<blockquote>

2. Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…).

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

2. Pour chacune de ces informations, vérifier la présence&nbsp;: 
  - d’un complément au niveau du code (`title`, `aria-label`, texte masqué, `aria-current`, etc.)&nbsp;;
  - et d’une information visuelle complémentaire à la couleur (icône, effet graphique de forme ou de position, un effet typographique…).

</blockquote>

#### 4.1 

Le cas particulier référencé au [critère 4.1](/fr/raweb1.1/criteres.html#crit-4-1) est modifié pour prendre en compte l’entrée en vigueur de la [loi du 8 mars 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) afin de conditionner l’exemption des média temporel publiés avant le 23 septembre 2020, uniquement aux organismes du secteur public soumis à la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Dans le RAWeb 1

<blockquote>

- Le média temporel a été publié avant le 23 septembre 2020 (d’après la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)).

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

- Le média temporel a été publié avant le 23 septembre 2020 sur un site internet d’un organisme du secteur public soumis à la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

</blockquote>

#### 4.3 

Le [critère 4.3](/fr/raweb1.1/criteres.html#crit-4-3) est modifié afin de prendre l’entrée en vigueur de la [loi du 8 mars 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) qui ne concède pas d’exemption pour les contenus multimédias en direct. 

- Le critère est reformulé pour supprimer la notion de &laquo;&nbsp;pré-enregistré&nbsp;&raquo;. 
- Le [test 4.3.3](/fr/raweb1.1/criteres.html#test-4-3-3) est créé avec sa méthodologie.
- Un cas particulier est ajouté pour prendre en compte les exemptions de la loi du 28 mai 2019.

##### Critère 

###### Dans le RAWeb 1

<blockquote>

Chaque média temporel synchronisé pré-enregistré a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers)&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Chaque média temporel synchronisé a-t-il, si nécessaire, des sous-titres synchronisés (hors cas particuliers)&nbsp;?

</blockquote>

##### Cas particulier 

Ajout de l’exemption de la [loi du 28 mai 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

<blockquote>

Les médias temporels synchronisés en direct diffusés via un site web soumis à la loi du 28 mai 2019 sont exemptés.

</blockquote>

#### 4.4

Le [critère 4.4](/fr/raweb1.1/criteres.html#crit-4-4) est modifié afin de prendre en compte l’entrée en vigueur de la [loi du 8 mars 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) qui ne concède pas d’exemption pour les contenus multimédias en direct. 

- Le critère est reformulé pour supprimer la notion de &laquo;&nbsp;pré-enregistré&nbsp;&raquo;. 
- Le [test 4.4.2](/fr/raweb1.1/criteres.html#test-4-4-2) est créé avec sa méthodologie.
- Un cas particuliers est ajouté pour prendre en compte les exemptions de la loi du 28 mai 2019.

##### Critère 

###### Dans le RAWeb 1

<blockquote>

Pour chaque média temporel synchronisé pré-enregistré ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Pour chaque média temporel synchronisé ayant des sous-titres synchronisés, ces sous-titres sont-ils pertinents (hors cas particuliers)&nbsp;?

</blockquote>

##### Cas particulier 

Ajout de l’exemption de la [loi du 28 mai 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

<blockquote>

Les médias temporels synchronisés en direct diffusés via un site web soumis à la [loi du 28 mai 2019](https://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo) sont exemptés.

</blockquote>

#### 5.7

Le [test 5.7.6](/fr/raweb1.1/criteres.html#test-5-7-6) est créé (et sa méthodologie) pour prendre en charge les groupes de colonnes et des groupes de lignes en tant qu’en-têtes de tableau.

#### 6.1

Le [test 6.1.6](/fr/raweb1.1/criteres.html#test-6-1-6) est créé suite à la [modification de la note de glossaire Intitulé (ou nom accessible) de lien](#intitulé-ou-nom-accessible-de-lien----modification)&nbsp;: une des 5 notes supprimées et transformée en test.

#### 6.2

L’intitulé du [test 6.2.2](/fr/raweb1.1/criteres.html#test-6-2-2) est modifié ainsi que sa méthodologie, pour se limiter à la recherche des liens sans nom accessible.

Cette évolution accompagne l’évolution de la note de glossaire [Intitulé (ou nom accessible) de lien](glossaire.html#intitule-ou-nom-accessible-de-lien) qui ne demande plus à invalider le critère 6.2 et 10.2 dans le cas où un lien n’aurait pas de contenu entre les balises. Le [critère 6.2](/fr/raweb1.1/criteres.html#crit-6-2) ne s’intéresse plus qu’à la présence d’un nom accessible.

##### Dans le RAWeb 1

<blockquote>

Dans chaque page web, chaque lien a-t-il un intitulé entre `<a>` et `</a>`&nbsp;? 

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque lien a-t-il un intitulé&nbsp;?

</blockquote>

#### 7.1

La méthodologie du [test 7.1.3](/fr/raweb1.1/criteres.html#test-7-1-3) est modifiée. Elle faisait référence au nom accessible et l’intitulé visible comme deux dénominations d’un même élément.

##### Dans le RAWeb 1

<blockquote>

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface possède&nbsp;:
- un nom pertinent (intitulé visible)&nbsp;;
- un rôle pertinent.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

1. Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface possède&nbsp;:
- un nom pertinent&nbsp;;
- un rôle pertinent.

</blockquote>

#### 7.3

La méthodologie du [test 7.3.1](/fr/raweb1.1/criteres.html#test-7-3.1) est modifiée, en accord avec la modification de l’entrée de glossaire [Accessible et activable par le clavier et tout dispositif de pointage](glossaire.html#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage), afin de ne pas restreindre l’activation au clavier, à la seule touche <kbd>Entrée</kbd>.

#### Dans le RAWeb 1

<blockquote>

Si l’élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée).

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Si l’élément gère une action simple, il est activable au clavier avec la ou les touches prévues par défaut dans les agents utilisateurs (par exemple <kbd>Entrée</kbd>, <kbd>Espace</kbd>).

</blockquote>

#### 9.2

Le [critère 9.2](/fr/raweb1.1/criteres.html#crit-9-2) est modifié afin de prendre en compte l’évolution du support par les technologies d’assistance des balises HTML permettant de structurer les grandes régions de la page. Il n’est plus obligatoire de recourir à l’implémentation conjointe d’une balise HTML5 et d’un `role` ARIA équivalent. Le [critère 12.6](/fr/raweb1.1/criteres.html#crit-12-6) est d’ailleurs également modifié en ce sens.

- La notion de [rôle calculé](glossaire.html#role-calcule) est introduite dans le glossaire à cette fin.
- Le [test 9.2.1](/fr/raweb1.1/criteres.html#test-9-2-1) est modifié ainsi que sa méthodologie.
- Les tests [9.2.2](/fr/raweb1.1/criteres.html#test-9-2-2), [9.2.3](/fr/raweb1.1/criteres.html#test-9-2-3) et [9.2.4](/fr/raweb1.1/criteres.html#test-9-2-4) sont créés ainsi que leurs méthodologies. 
- Le cas particulier relatif au DOCTYPE est supprimé.
- La note technique est modifiée pour refléter ces changements.

##### Cas particulier

###### Dans le RAWeb 1

Pour mémoire, le cas particulier supprimé&nbsp;:

<blockquote>

Lorsque le doctype déclaré dans la page n’est pas le doctype HTML5, ce critère est non applicable.

</blockquote>

##### Note technique

###### Dans le RAWeb 1

<blockquote>
La balise `<main>` peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut `hidden` ou d’un style permettant de les masquer aux technologies d’assistances. À noter cependant que l’utilisation d’un style seul restera insuffisante pour assurer l’unicité d’une balise `<main>` visible en cas de désactivation des feuilles de styles.
</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Il peut y avoir plusieurs éléments ayant le rôle calculé de `main` dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’un seul élément visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut `hidden` ou d’un style permettant de les masquer aux technologies d’assistances. 

</blockquote>

##### 9.2.1

###### Dans le RAWeb 1

<blockquote>

Dans chaque page web, la structure du document vérifie-t-elle ces conditions (hors cas particuliers)&nbsp;?

- La zone d’en-tête de la page est structurée via une balise `<header>`.
- Les zones de navigation principales et secondaires sont structurées via une balise `<nav>`.
- La balise `<nav>` est réservée à la structuration des zones de navigation principales et secondaires.
- La zone de contenu principal est structurée via une balise `<main>`.
- La structure du document utilise une balise `<main>` visible unique.
- La zone de pied de page est structurée via une balise `<footer>`.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, les zones principales de la page constituant la structure du document vérifient-elles ces conditions&nbsp;?

- L’élément contenant la zone d’en-tête de la page a un rôle calculé de `banner`.
- Les éléments contenant les zones de navigation principales et secondaires ont un rôle calculé de `navigation`.
- L’élément contenant la zone de moteur de recherche a un rôle calculé de `search`.
- L’élément contenant la zone de contenu principal a un rôle calculé de `main`.
- L’élément contenant la zone de pied de page a un rôle calculé de `contentinfo`.

</blockquote>

#### 10.1

La méthodologie du [test 10.1.2](/fr/raweb1.1/criteres.html#test-10-1-2) est modifiée afin d’ajouter les éléments `<iframe>`, `<source>` et les enfants de `<svg>` à l’exception de l’usage des attributs `width` ou `height`. La première condition de la méthodologie est modifiée.

##### Dans le RAWeb 1

<blockquote>

1. Vérifier l’absence des attributs de présentation&nbsp;: `align`, `alink`, `background`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `color`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size`(exception faite de l’élément `<select>`), `width` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`), `height` (exception faite des éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>`).

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

1. Vérifier l’absence des attributs de présentation&nbsp;: `align`, `alink`, `background`, `bgcolor`, `border`, `cellpadding`, `cellspacing`, `char`, `charoff`, `clear`, `color`, `compact`, `frameborder`, `hspace`, `link`, `marginheight`, `marginwidth`, `text`, `valign`, `vlink`, `vspace`, `size`(exception faite de l’élément `<select>`)
2. Vérifier que les attributs `width` ou `height`, s’ils sont utilisés, sont uniquement présents sur les éléments  `<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<object>`, `<source>`, `<svg>` (ou l’un de ses enfants).

</blockquote>

#### 10.2

Le [critère 10.2](/fr/raweb1.1/criteres.html#crit-10-2)  et le [test 10.2.1](/fr/raweb1.1/criteres.html#test-10-2-1)  sont reformulés pour une meilleure compréhension de l’exigence et du périmètre d’évaluation. La méthodologie du [test 10.2.1](/fr/raweb1.1/criteres.html#test-10-2-1) est également mise à jour.

Cette évolution accompagne la modification de la note de glossaire [Contenu visible](glossaire.html#contenu-visible).

#### Critère 

###### Dans le RAWeb 1

<blockquote>

Dans chaque page web, le contenu visible porteur d’information reste-t-il présent lorsque les feuilles de styles sont désactivées&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, le contenu visible porteur d’information est-il accessible aux technologies d’assistance&nbsp;?

</blockquote>

#### 10.2.1 

###### Dans le RAWeb 1

<blockquote>

Dans chaque page web, l’information reste-t-elle présente lorsque les feuilles de styles sont désactivées&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, le contenu visible porteur d’information est-il accessible aux technologies d’assistance&nbsp;?

</blockquote>

#### 10.4

Les méthodologies des tests [test 10.4.1](/fr/raweb1.1/criteres.html#test-10-4-1) et [test 10.4.2](/fr/raweb1.1/criteres.html#test-10-4-2) sont modifiées pour expliciter le fait qu’une seule des conditions doit être remplie. 

##### Dans le RAWeb 1

<blockquote>

- Le zoom texte du navigateur est réglé à 200 %.
- Le zoom graphique du navigateur est réglé à 200 %.
- Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

- Soit lorque le zoom texte du navigateur est réglé à 200 %.
- Soit lorque le zoom graphique du navigateur est réglé à 200 %.
- Soit lorque les fonctionnalités de zoom personnalisé proposées par le document sont utilisées.

</blockquote>

#### 10.7

Le [critère 10.7](/fr/raweb1.1/criteres.html#crit-10-7) et le [test 10.7.1](/fr/raweb1.1/criteres.html#test-10-7-1) sont modifiés pour expliciter le fait qu’il est uniquement question du focus du clavier et non pas du focus souris.

La méthodologie est également modifiée en conséquence.

##### Critère 

###### Dans le RAWeb 1

<blockquote>

Dans chaque page web, pour chaque élément recevant le focus, la prise de focus est-elle visible&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, pour chaque élément recevant le focus du clavier, la prise de focus est-elle visible&nbsp;?

</blockquote>

##### 10.7.1

###### Dans le RAWeb 1

<blockquote>

Pour chaque élément recevant le focus, la prise de focus vérifie-t-elle une de ces conditions&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Pour chaque élément recevant le focus du clavier, la prise de focus vérifie-t-elle une de ces conditions&nbsp;?

</blockquote>

#### 10.12 

Les conditions du [test 10.12.1](/fr/raweb1.1/criteres.html#test-10-12-1)  sont reformulées pour refléter au mieux l’attendu&nbsp;: &laquo;&nbsp;augmenté jusqu’à&nbsp;&raquo; est remplacé par &laquo;&nbsp;défini à au moins&nbsp;&raquo;.

##### Dans le RAWeb 1

<blockquote>

- L’espacement entre les lignes (`line-height`) est augmenté jusqu’à 1,5 fois la taille de la police.
- L’espacement suivant les paragraphes (balise `<p>`) est augmenté jusqu’à 2 fois la taille de la police.
- L’espacement des lettres (`letter-spacing`) est augmenté jusqu’à 0,12 fois la taille de la police.
- L’espacement des mots (`word-spacing`) est augmenté jusqu’à 0,16 fois la taille de la police.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

- L’espacement entre les lignes (`line-height`) est défini à au moins 1,5 fois la taille de la police.
- L’espacement suivant les paragraphes (balise `<p>`) est défini à au moins 2 fois la taille de la police.
- L’espacement des lettres (`letter-spacing`) est défini à au moins 0,12 fois la taille de la police.
- L’espacement des mots (`word-spacing`) est défini à au moins 0,16 fois la taille de la police.

</blockquote>

#### 11.10 

Les tests du [critère 11.10](/fr/raweb1.1/criteres.html#crit-11-10) sont modifiés&nbsp;: 
- pour introduire les champs optionnels dans les tests (référencés avant uniquement en cas particuliers)&nbsp;; 
- pour étendre les possibilités d’identification des champs obligatoires (test 11.10.2)&nbsp;;
- pour étendre l’obligation d’indication des formats de saisie à tous les champs dont le format est contrôlé, et pas uniquement aux champs obligatoires (test 11.10.4)&nbsp;;
- pour modifier &laquo;&nbsp;préalablement à la validation du formulaire&nbsp;&raquo; par &laquo;&nbsp;avant sa saisie&nbsp;&raquo; (tests 11.10.1, 11.10.2 et 11.10.5) afin de pouvoir gérer les cas où le contrôle de saisie a lieu à la sortie d’un champ.

Les méthodologies sont modifiées en conséquence.

Les cas particuliers sont modifiés pour refléter ces changements. Un cas particulier pour l’identification des champs obligatoires est ajouté afin d’exclure les cas où l’usage permet de déduire le caractère obligatoire des champs (les formulaires de connexion par exemple).

La note technique est modifiée pour refléter ces changements.

La note de glossaire [Indication de champ obligatoire](glossaire.html#indication-de-champ-obligatoire-ou-facultatif) est renommée &laquo;&nbsp;Indication de champ obligatoire ou facultatif&nbsp;&raquo; et modifiée pour accompagner ce changement.

##### 11.10.1

###### Dans le RAWeb 1

<blockquote>

Les indications du caractère obligatoire de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers)&nbsp;?

- Une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire.
- Le champ obligatoire dispose de l’attribut `aria-required="true"` ou `required` préalablement à la validation du formulaire.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Les indications du caractère obligatoire **ou facultatif** de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers)&nbsp;?

- Une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné avant sa saisie.
- Le champ obligatoire dispose de l’attribut `aria-required="true"` ou `required` avant sa saisie.
- **Une indication de champ facultatif est visible et permet d’identifier nommément le champ concerné avant sa saisie.**

</blockquote>

##### 11.10.2

###### Dans le RAWeb 1

<blockquote>

Les champs obligatoires ayant l’attribut `aria-required="true"` ou `required` vérifient-ils une de ces conditions&nbsp;?

- Une indication de champ obligatoire est visible et située dans l’étiquette associée au champ préalablement à la validation du formulaire.
- Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ préalablement à la validation du formulaire.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Les champs obligatoires ayant l’attribut `aria-required="true"` ou `required` vérifient-ils une de ces conditions&nbsp;?

- **Une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné avant sa saisie.**
- Une indication de champ obligatoire est visible et située dans l’étiquette associée au champ avant sa saisie.
- Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ avant sa saisie.
- **Une indication de champ obligatoire est visible et située dans la légende associée au groupe de champs avant sa saisie.**

</blockquote>

##### 11.10.4

###### Dans le RAWeb 1

<blockquote>

Les champs obligatoires ayant l’attribut `aria-invalid="true"` vérifient-ils une de ces conditions&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Les champs ayant l’attribut `aria-invalid="true"` vérifient-ils une de ces conditions&nbsp;?

</blockquote>

##### 11.10.5

###### Dans le RAWeb 1

<blockquote>

Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?
- Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire.
- Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l’étiquette ou le passage de texte associé au champ préalablement à la validation du formulaire.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?
- Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d’identifier nommément le champ concerné avant sa saisie.
- Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l’étiquette ou le passage de texte associé au champ avant sa saisie.

</blockquote>

##### Cas particuliers

###### Dans le RAWeb 1

<blockquote>

Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul champ de formulaire ou qu’il indique les champs optionnels de manière&nbsp;:

- Visible&nbsp;;
- Dans la balise `<label>` ou dans la légende associée au champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque&nbsp;: 
* le formulaire comporte un seul [champ de formulaire](#champ-de-saisie-de-formulaire)&nbsp;;
* le formulaire comporte uniquement un champ d’identifiant et un champ de mot de passe (dans le cas d’un formulaire d’identification).

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

</blockquote>

##### Notes techniques

###### Dans le RAWeb 1

<blockquote>

Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que&nbsp;:

- Un message précise visuellement en haut de formulaire que &laquo;&nbsp;tous les champs sont obligatoires sauf ceux indiqués comme étant facultatifs&nbsp;&raquo;&nbsp;;
- Une mention &laquo;&nbsp;facultatif&nbsp;&raquo; est présente visuellement dans le libellé des champs facultatifs ou dans la légende d’un groupe de champs facultatifs&nbsp;;
- Un attribut `required` ou `aria-required="true"` reste associé à chaque champ qui n’est pas concerné par ce caractère facultatif.

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Le test 11.10.1 et le test 11.10.2 traitent des champs de manière indépendante, néanmoins, il faut garantir que la méthode choisie pour avertir les utilisateurs (champs obligatoires ou champs facultatifs) soit cohérente sur l’ensemble du formulaire.

</blockquote>

#### 12.6

Le [critère 12.6](/fr/raweb1.1/criteres.html#crit-12-6) est modifié pour prendre en compte l’évolution des exigences sur l’implémentation des landamrks (voir l’[évolution du critère 9.2](#9.2))&nbsp;: il n’est plus obligatoire de recourir à l’implémentation conjointe d’une balise HTML5 et d’un `role` ARIA équivalent. 

Le [critère 12.6](/fr/raweb1.1/criteres.html#crit-12-6) est ainsi modifié pour ne s’appliquer qu’aux régions autres que les zones principales déjà identifiées dans le [critère 9.2](/fr/raweb1.1/criteres.html#crit-9-2).

La définition de [Landmarks](#landmarks---modification) est modifiée pour refléter ces changements.

##### Dans le RAWeb 1

<blockquote>

Critère 12.6&nbsp;: Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées&nbsp;?

Test 12.6.1&nbsp;: Dans chaque page web où elles sont présentes, la zone d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche respectent-elles au moins une de ces conditions&nbsp;?

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Critère 12.6&nbsp;: Les zones de regroupement de contenus présentes dans plusieurs pages web **(à l’exception des zones principales constituant la structure du document)** peuvent-elles être atteintes ou évitées, **si nécessaire**&nbsp;?

Test 12.6.1&nbsp;: Les zones de regroupement de contenus présentes dans plusieurs pages web **(à l’exception des zones principales constituant la structure du document)** respectent-elles au moins une de ces conditions, **si nécessaire**&nbsp;?

</blockquote>

#### 13.1

La méthodologie du [test 13.1.2](/fr/raweb1.1/criteres.html#test-13-1-2)  est modifiée pour plus de précisions.

##### Dans le RAWeb 1

<blockquote>

1. Retrouver dans le document une redirection automatique initiée par un élément `<meta http-equiv="refresh" content="0;URL='[URL ciblée]'" />`.
2. Vérifier que la redirection est immédiate.
3. Si c’est le cas, **le test est validé**.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

1. Retrouver dans le document une redirection automatique initiée par un élément `<meta http-equiv="refresh" />`.
2. Si un procédé de redirection existe, vérifier&nbsp;:
    - soit que la redirection est immédiate (la propriété `content` doit avoir la valeur `0`, par exemple `content="0; URL=’https://url.com’"`)
    - soit que la limite de temps avant la redirection est de vingt heures, au moins (la propriété `content` a alors une valeur supérieure ou égale à `72000`, par exemple `content="80000; URL=’https://url.com’"`).
3. Si c’est le cas, **le test est validé**.

</blockquote>

#### 13.2

La méthodologie du [test 13.2.1](/fr/raweb1.1/criteres.html#test-13-2-1)  est modifiée pour plus de précisions.

##### Dans le RAWeb 1

<blockquote>

1. Vérifier qu’à l’ouverture du document, aucune nouvelle fenêtre (pop-up ou pop-under, par exemple) n’est ouverte.
2. Si c’est le cas, **le test est validé**.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

1. Pendant la consultation d’une page, vérifier qu’aucune nouvelle fenêtre (fenêtre de navigateur ou nouvel onglet) n’est ouverte sans action de l’utilisateur.
2. Si c’est le cas, **le test est validé**.

</blockquote>

#### 13.3

Le cas particulier référencé au [critère 13.3](/fr/raweb1.1/criteres.html#crit-13-3) est modifié pour prendre en compte l’entrée en vigueur de la [loi du 8 mars 2023](https://legilux.public.lu/eli/etat/leg/loi/2023/03/08/a133/jo) afin de conditionner l’exemption des fichiers bureautiques publié avant le 23 septembre 2020, uniquement aux organismes du secteur public soumis à la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo).

##### Dans le RAWeb 1

<blockquote>

Il existe une gestion de cas particuliers&nbsp;:

- Si les fichiers bureautiques (ex&nbsp;: PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ces contenus sont nécessaires pour les besoins de processus administratifs actifs concernant des tâches effectuées par l’organisme du secteur public concerné), ils sont exemptés de l’obligation d’accessibilité, d’après la loi du [28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo)

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Il existe une gestion de cas particuliers&nbsp;:

- Si les fichiers bureautiques (ex&nbsp;: PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 sur un site internet d’un organisme du secteur public soumis à la [loi du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo) (sauf si ces contenus sont nécessaires pour les besoins de processus administratifs actifs concernant des tâches effectuées par l’organisme du secteur public concerné), ils sont exemptés de l’obligation d’accessibilité.

</blockquote>

#### 13.5 

Le [critère 13-5](/fr/raweb1.1/criteres.html#crit-13-5) est modifié afin de mieux définir la portée du critère (la définition [Contenu cryptique](glossaire.html#contenu-cryptique) a d’ailleurs été créée) et les cas d’implémentations jugés compatibles avec l’accessibilité.

Le [test 13.5.1](/fr/raweb1.1/criteres.html#test-13-5-1) est modifié&nbsp;: l’attribut `title` n’est plus référencé en tant que méthode valide. Il est nécessaire de garantir une implémentation compatible avec l’accessibilité et supportée sur l’environnement de test. 

Le [test 13.5.2](/fr/raweb1.1/criteres.html#test-13-5-2) est ajouté pour vérifier que les contenus cryptiques sont bien ignorés par les technologies d’assistance, et que seule la définition reste disponible.

Les méthodologies sont modifiées en conséquence et une note technique est ajoutée. 

##### Critère

##### Dans le RAWeb 1

<blockquote>

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative&nbsp;?

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque contenu cryptique est-il correctement identifié&nbsp;?

</blockquote>

##### 13.5.1

##### Dans le RAWeb 1

<blockquote>

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions&nbsp;?

- Un attribut `title` est disponible.
- Une définition est donnée par le contexte adjacent.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque contenu cryptique porteur d’information vérifie-t-il une de ces conditions&nbsp;?

- La signification du contenu est donnée dans le contexte adjacent.
- La signification du contenu est mise à disposition par une méthode compatible avec l’accessibilité.

</blockquote>

##### 13.5.2

Nouveau test dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque contenu cryptique de décoration est-il correctement ignoré par les technologies d’assistance au moyen d’un attribut WAI-ARIA `aria-hidden="true"`&nbsp;?

</blockquote>

##### Note technique

Nouvelle note technique dans le RAWeb 1.1

<blockquote>

Si un contenu cryptique informatif se trouve imbriqué dans une balise possédant un attribut WAI-ARIA `role="img"`, il sera évalué sur les critères 1.1 et 1.3 et le critère 13.5 sera considéré non applicable.

Si un contenu cryptique décoratif se trouve imbriqué dans une balise possédant un attribut WAI-ARIA `aria-hidden="true"`, quel que soit le niveau d’imbrication, alors il sera considéré comme étant masqué pour les technologies d’assistance.

Du fait du faible support de la balise `<abbr>` et de l’attribut `title`, la mise à disposition de la signification d’un contenu cryptique avec cette implémentation ne permet pas de rendre le critère conforme.

</blockquote>

#### 13.6 

Le [critère 13.6](/fr/raweb1.1/criteres.html#crit-13-6) est modifié pour prendre en compte les modifications opérées sur le [critère 13.5](/fr/raweb1.1/criteres.html#crit-13-5).

##### Critère

###### Dans le RAWeb 1

<blockquote>

Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente&nbsp;?

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, pour chaque contenu cryptique ayant une alternative, cette alternative est-elle pertinente&nbsp;?

</blockquote>

##### 13.6.1

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions&nbsp;?

- Le contenu de l’attribut `title` est pertinent.
- La définition donnée par le contexte adjacent est pertinente

</blockquote>

###### Dans le RAWeb 1.1

<blockquote>

Dans chaque page web, chaque contenu cryptique vérifie-t-il une de ces conditions&nbsp;?

- La signification donnée dans le contexte adjacent est pertinente.
- La signification mise à disposition par une méthode compatible avec l’accessibilité est pertinente.

</blockquote>

#### 13.7

La première condition des 3 tests du [critère 13.7](/fr/raweb1.1/criteres.html#crit-13-7) est modifiée, car elle était plus restrictive que la norme (&laquo;&nbsp;inférieure&nbsp;&raquo; au lieu de &laquo;&nbsp;inférieure ou égale&nbsp;&raquo;).

Les méthodologies sont également modifiées en conséquence.

##### Dans le RAWeb 1

<blockquote>

La fréquence de l’effet est inférieure à 3 par seconde. 

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

La fréquence de l’effet est inférieure ou égale à 3 par seconde.

</blockquote>

#### 13.8

Un cas particulier est ajouté au critère [critère 13.8](/fr/raweb1.1/criteres.html#crit-13-8) (la mention &laquo;&nbsp;(hors cas particuliers)&nbsp;&raquo; est ajoutée au critère et aux tests). Ce cas particulier est récupéré de la note 3 de la définition de glossaire <i>Contrôle (contenu en mouvement ou clignotant</i>, qui en est supprimé.

<blockquote>

Lorsque le mouvement, le clignotement ou le défilement est un élément essentiel au bon déroulement ou à la compréhension d’une fonctionnalité, le critère est non applicable.

Dans certains cas, le mouvement fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression (ou <em lang="en">loader</em> par exemple) dont la fonction est d’indiquer par un mouvement la progression d’un évènement comme un téléchargement. Dans ce cas, le critère est non applicable.

</blockquote>

#### 14.1

Une condition est ajoutée au [critère 14.1](/fr/raweb1.1/criteres.html#crit-14-1) et la méthodologie est modifiée en conséquence.

<blockquote>

Une liste des non-conformités ou une description des éléments non conformes. 

</blockquote>

#### 15.1

Le [test 15.1.4](/fr/raweb1.1/criteres.html#test-15-1-4) est créé afin de couvrir les technologies mobiles de diffusion de contenus. La méthodologie est créée en conséquence.

<blockquote>

Chaque outil d’édition qui crée du contenu diffusé dans une application mobile permet-il de définir les informations d’accessibilité nécessaires pour créer un contenu conforme au RAAM&nbsp;?

</blockquote>

#### 15.3

La méthodologie du [test 15.3.1](/fr/raweb1.1/criteres.html#test-15-3-1) est modifiée afin de couvrir les technologies mobiles de diffusion de contenus. 

<blockquote>

7. Pour chaque contenu diffusé dans une application mobile, vérifier&nbsp;: 
  - que les informations nécessaires pour qu’il soit conforme au RAAM (par exemple l’alternative d’une image, les niveaux de titres) sont préservées dans le contenu généré.
  - que l’information, si elle est restructurée, reste compatible avec les technologies d’assistance (par exemple, si l’auteur saisit un tableau et qu’après l’enregistrement, l’outil linéarise le tableau, l’information ainsi restructurée doit être compréhensible pour les utilisateurs de technologies d’assistance comme elle l’aurait été dans sa forme initiale).

</blockquote>

#### 15.5

Le [test 15.5.4](/fr/raweb1.1/criteres.html#test-15-5-4) est créé afin de couvrir les technologies mobiles de diffusion de contenus. La méthodologie est créée en conséquence.

<blockquote>

Pour chaque ensemble de gabarits permettant de diffuser des contenus dans une application mobile, un gabarit au moins est conforme aux critères du RAAM. Cette règle est-elle respectée&nbsp;?

</blockquote>

#### 16.2

Le [critère 16.2](/fr/raweb1.1/criteres.html#crit-16-2) et le [test 16.2.1](/fr/raweb1.1/criteres.html#test-16-2-1) sont modifiés pour couvrir la possibilité d’avoir plusieurs services d’assistance. La méthodologie est modifiée en conséquence.

##### Dans le RAWeb 1

<blockquote>

16.2&nbsp;: Le service d’assistance répond aux besoins de communication des personnes handicapées directement ou par l’intermédiaire d’un service de relais. Cette règle est-elle respectée&nbsp;?

Test 16.2.1&nbsp;: Le service d’assistance répond aux besoins de communication des personnes handicapées directement ou par l’intermédiaire d’un service de relais. Cette règle est-elle respectée&nbsp;?

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

16.2&nbsp;: **Chaque** service d’assistance répond aux besoins de communication des personnes handicapées directement ou par l’intermédiaire d’un service de relais. Cette règle est-elle respectée&nbsp;?

Test 16.2.1&nbsp;: **Chaque** service d’assistance répond aux besoins de communication des personnes handicapées directement ou par l’intermédiaire d’un service de relais. Cette règle est-elle respectée&nbsp;?

</blockquote>

### Ajouts et suppressions de nouvelles liaisons aux critères, techniques et échecs WCAG

De nouvelles liaisons aux critères, techniques et échecs WCAG sont ajoutées en correspondance de certains critères RAWeb&nbsp;: 

- Critère [4.1](criteres.html#crit-4-1), [4.2](criteres.html#crit-4-2), [4.5](criteres.html#crit-4-5) et [4.6](criteres.html#crit-4-6)&nbsp;: [G226](https://www.w3.org/WAI/WCAG21/Techniques/general/G226)
- Critère [4.3](criteres.html#crit-4-3) et [4.4](criteres.html#crit-4-3)&nbsp;: [1.2.4 Sous-titres (en direct)](https://www.w3.org/Translations/WCAG21-fr/#captions-live)
- Critère [4.3](criteres.html#crit-4-3) et [4.4](criteres.html#crit-4-3)&nbsp;: [G9](https://www.w3.org/WAI/WCAG21/Techniques/general/G9)
- Critère [4.5](criteres.html#crit-4-5) et [4.6](criteres.html#crit-4-6)&nbsp;: [F113](https://www.w3.org/WAI/WCAG21/Techniques/failures/F113)
- Critère [9.2](criteres.html#crit-9-2)&nbsp;: [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
- Critère [10.7](criteres.html#crit-10-7)&nbsp;: [C45](https://www.w3.org/WAI/WCAG21/Techniques/css/C45)
- Critères [6.1](criteres.html#crit-6-1), [7.1](criteres.html#crit-7-1), [11.2](criteres.html#crit-11-2), [11.9](criteres.html#crit-11-9)&nbsp;: [F111](https://www.w3.org/WAI/WCAG21/Techniques/failures/F111).
- Critère [10.11](criteres.html#crit-10-11)&nbsp;: [G224](https://www.w3.org/WAI/WCAG21/Techniques/general/G224), [G225](https://www.w3.org/WAI/WCAG21/Techniques/general/G225)
- Critère [11.3](criteres.html#crit-11-2)&nbsp;: [G197](https://www.w3.org/WAI/WCAG21/Techniques/general/G197)
- Critère [12.8](criteres.html#crit-12-8)&nbsp;: [H102](https://www.w3.org/WAI/WCAG21/Techniques/html/H102)
- Critère [13.8](criteres.html#crit-13-8)&nbsp;: [F112](https://www.w3.org/WAI/WCAG21/Techniques/failures/F112)

D’autres techniques et échecs ont été supprimés&nbsp;: 

- Critère [4.8](criteres.html#crit-4-8) et [4.9](criteres.html#crit-4-8)&nbsp;: suppression de la liaison [H46](https://www.w3.org/WAI/WCAG21/Techniques/html/H46). Cette technique a été classée obsolète par le groupe de travail AG WG.
- Critère [7.1](criteres.html#crit-7-1)&nbsp;: suppression de la liaison [SCR21](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR21). Cette technique a été abandonnée le groupe de travail AG WG, car elle n’a aucun impact sur l’accessibilité.
- Critère [7.4](criteres.html#crit-7-4)&nbsp;: 
  - Suppression des liaisons [F9](https://www.w3.org/WAI/WCAG21/Techniques/failures/F9) et [F22](https://www.w3.org/WAI/WCAG21/Techniques/failures/F22). Ces échecs sont liés au critère triple A [3.2.5 Changement à la demande](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
  - Suppression de la liaison [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76). Cette technique est liée aux critères triple A [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions) et [3.2.5 Changement à la demande](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
- Critère [9.3](criteres.html#crit-9-3)&nbsp;: 
  - Suppression de la liaison [G153](https://www.w3.org/WAI/WCAG21/Techniques/general/G153). Cette technique est liée au critère triple A [3.1.5 Niveau de lecture](https://www.w3.org/Translations/WCAG22-fr/#reading-level).
  - Suppression de la liaison [H40](https://www.w3.org/WAI/WCAG21/Techniques/html/H40). Cette technique est liée au critère triple A [3.1.3 Mots rares](https://www.w3.org/Translations/WCAG22-fr/#unusual-words).
- Critère [10.2](criteres.html#crit-10-2)&nbsp;: suppression de la liaison [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87). L’échec a été classé obsolète par le groupe de travail AG WG.
- Critère [12.8](criteres.html#crit-12-8)&nbsp;: suppression des liaisons [SCR37](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37) et [H4](https://www.w3.org/WAI/WCAG21/Techniques/html/H4). Ces techniques ont été classées obsolètes par le groupe de travail AG WG.
- Critère [13.1](criteres.html#crit-13-1)&nbsp;: 
  - Suppression des liaisons [F61](https://www.w3.org/WAI/WCAG21/Techniques/failures/F61), [G110](www.w3.org/WAI/WCAG21/Techniques/general/G110), [H76](https://www.w3.org/WAI/WCAG21/Techniques/html/H76) et [SVR1](https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR1). Ces techniques et échecs sont liés au critère triple A [3.2.5 Changement à la demande](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
  - Suppression de la liaison [G75](https://www.w3.org/WAI/WCAG21/Techniques/general/G75). Cette technique est liée au critère triple A [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions).
  - Suppression de la liaison [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76). Cette technique est liée aux critères triple A [2.2.4 Interruptions](https://www.w3.org/Translations/WCAG22-fr/#interruptions) et [3.2.5 Changement à la demande](https://www.w3.org/Translations/WCAG22-fr/#change-on-request).
- Critère [13.8](criteres.html#crit-13-8)&nbsp;: suppression des liaisons [G187](https://www.w3.org/WAI/WCAG21/Techniques/general/G187), [F4](https://www.w3.org/WAI/WCAG21/Techniques/failures/F4), [F47](https://www.w3.org/WAI/WCAG21/Techniques/failures/F47). Les échecs ont été classés obsolètes par le groupe de travail AG WG.

### Glossaire

#### Accessible et activable par le clavier et tout dispositif de pointage

L’entrée de glossaire [Accessible et activable par le clavier et tout dispositif de pointage](glossaire.html#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) a été modifiée pour ne pas restreindre l’utilisation au clavier à la touche <kbd>Entrée</kbd>. 

##### Dans le RAWeb 1

<blockquote>

Un composant d’interface (lien, bouton…) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou la touche entrée du clavier ;

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

- Un composant d’interface (lien, bouton…) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou la ou les touches prévues par défaut dans les agents utilisateurs (par exemple <kbd>Entrée</kbd>, <kbd>Espace</kbd>) ;

</blockquote>

#### Alternative textuelle (image) - modification

L’entrée de glossaire [Alternative textuelle (image)](glossaire.html#alternative-textuelle-image) a été modifiée pour&nbsp;: 
- prendre en compte l’évolution du support de l’élément `<title>` pour l’élément `<svg>` dans le calcul du nom accessible&nbsp;; 
- prendre en compte le support du calcul du nom accessible par les technologies d’assistance.

##### 1 

L’élément `<title>` est ajouté à la fin de la liste des éléments pris en compte pour le nom accessible. 

<blockquote>

Sinon, contenu de l’élément `<title>` pour l’élément `<svg>`.

</blockquote>

##### 2

La note 4 est modifiée pour supprimer la référence à l’élément `<title>`.

La note 4 dans RAWeb 1&nbsp;:

<blockquote>

Note 4&nbsp;: pour les images vectorielles (balise `<svg>`) l’alternative textuelle pourrait se trouver aussi présente dans une balise `<title>` ou dans une balise `<text>` que cette dernière balise soit ou non visible, même si ce n’est pas le rôle dévolu à cet élément en SVG.

</blockquote>

La note 4 dans RAWeb 1.1&nbsp;: 

<blockquote>

Note 4&nbsp;: pour les images vectorielles (balise `<svg>`) l’alternative textuelle pourrait se trouver aussi présente dans une balise `<text>` que cette dernière balise soit ou non visible, même si ce n’est pas le rôle dévolu à cet élément en SVG.

</blockquote>

##### 3

La note 5 est supprimée (et la note 6 devient la note 5)

La note 5 dans RAWeb 1&nbsp;:

<blockquote>

l’utilisation de l’attribut `alt` étant la seule technique totalement supportée par les aides techniques il est recommandé de privilégier cette solution lors de la mise en œuvre d’une alternative à une balise `<img>`, `<area>` et `<input type="image">`.

</blockquote>

#### Audiodescription synchronisée (média temporel) - modification

La note 2 de l’entrée de glossaire [Audiodescription synchronisée (média temporel)](glossaire.html#audiodescription-synchronisee-media-temporel) est modifiée pour supprimer la référence à l’entrée de glossaire &laquo;&nbsp;audiodescription étendue&nbsp;&raquo; qui n’existe pas dans le RAWeb (définition associée à un critère de niveau triple A non présent dans le RAWeb).

La note 2 dans RAWeb 1&nbsp;:

<blockquote>

 Note 2&nbsp;: dans une audiodescription standard, la narration est ajoutée durant les pauses qui existent dans le dialogue. (Voir aussi audiodescription étendue.) 

</blockquote>

La note 2 dans RAWeb 1.1&nbsp;: 

<blockquote>

 Note 2&nbsp;: dans une audiodescription standard, la narration est ajoutée durant les pauses qui existent dans le dialogue.

</blockquote>

#### Contenu caché - modification

La propriété `inert` est ajoutée à la liste des propriétés qui masquent les contenus aux technologies d’assistance dans la note de glossaire [Contenu caché](glossaire.html#contenu-cache).

#### Contenu cryptique - création

Création de l’entrée de glossaire [Contenu cryptique](glossaire.html#contenu-cryptique).

#### Contenu visible - modification

L’entrée de glossaire [Contenu visible](glossaire.html#contenu-visible) a été modifiée pour accompagner la révision du  [critère 10.2](/fr/raweb1.1/criteres.html#crit-10-2), réalisée pour faciliter la compréhension de la portée du critère.

##### Dans le RAWeb 1

<blockquote>

Pour le [test 10.2.1](/fr/raweb1.1/criteres.html#test-10-2-1)&nbsp;: « Contenu présent » signifie que le contenu visible reste présent lorsque CSS est désactivé. Par exemple, une image porteuse d’information en propriété de fond CSS invalide ce test car l’information n’est plus « présente » lorsque CSS est désactivé. En revanche, une image porteuse d’information en propriété de fond CSS mais accompagnée d’un texte caché valide ce test car l’information est bien « présente » lorsque CSS est désactivé.

Note&nbsp;: la pratique qui consiste à gérer des images en propriété de fond d’éléments via CSS est formellement déconseillée, même si elle est accompagnée d’un texte caché.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

Un contenu est visible lorsqu’il est apparent sur la page web, au chargement de la page ou après l’activation d’un composant d’interface (par exemple, l’affichage d’une fenêtre modale ou d’un sous-menu).

Le test 10.2.1 demande à ce que le contenu visible soit accessible aux technologies d’assistance. Cela signifie que tout contenu visible qui serait implémenté au travers d’une méthode qui nativement ne dispose pas de moyen pour fournir d’alternative devrait être accompagné d’une méthode secondaire pour fournir cette alternative. Par exemple, une image porteuse d’information en propriété de fond CSS sur un élément qui contient un texte visuellement caché valide ce test, car l’information est accessible aux technologies d’assistance. Sans ce texte caché, le test est invalidé.

</blockquote>

#### Contrôle (contenu en mouvement ou clignotant)  - modification

L’entrée de glossaire [Contrôle (contenu en mouvement ou clignotant)](glossaire.html#controle-contenu-en-mouvement-ou-clignotant) a été modifiée pour&nbsp;:
- déplacer la note 3 en tant que cas particuliers du critère [critère 13.8](/fr/raweb1.1/criteres.html#crit-13-8)&nbsp;;
- réviser la note 2 décrivant un exemple non conforme afin de le rendre plus explicite.

##### Dans le RAWeb 1

<blockquote>

Note 2&nbsp;: la méthode de contrôle du contenu en mouvement ou clignotant doit permettre à l’utilisateur d’interagir avec le reste de la page. En conséquence, l’arrêt ou la mise en pause via un événement déclenché uniquement sur la prise de focus ne permet pas de valider le critère.

</blockquote>

##### Dans le RAWeb 1.1

<blockquote>

La méthode de contrôle du contenu en mouvement ou clignotant doit permettre à l’utilisateur d’interagir avec le reste de la page. 

Ainsi, le fait que l’animation s’arrête lorsque l’utilisateur passe le pointeur de sa souris ou déplace le focus clavier sur le composant sous-jacent (et reprend dès que l’utilisateur déplace le pointeur de la souris ou le focus clavier ailleurs sur la page) ne serait pas considéré comme un «&nbsp;mécanisme permettant de contrôler le contenu en mouvement ou clignotant&nbsp;», car cela rendrait la page inutilisable pendant ce temps.

En conséquence, l’arrêt ou la mise en pause via un événement déclenché uniquement sur la prise de focus ou le survol de la souris ne permet pas de valider le critère.

</blockquote>

##### Note 3

Pour mémoire, la note 3 dans le RAWeb 1

<blockquote>

Note 3&nbsp;: Dans certains cas, le mouvement fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression dont la fonction est d’indiquer par un mouvement la progression d’un évènement comme un téléchargement. Dans ce cas le critère est Non Applicable.

</blockquote>

#### Description détaillée (image) - création

La note 2 est supprimée, elle est obsolète.

Pour mémoire, la note 2 dans le RAWeb 1&nbsp;: 

<blockquote>

Note 2 : Pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un `tabindex="-1"` sur les balises qui contiennent un passage de texte et qui ne sont pas des éléments interactifs (bouton, liens, éléments de formulaires, etc.).

</blockquote>

#### Document - création

Création de l’entrée de glossaire [Document](glossaire.html#document).

#### En-tête de colonne ou de ligne  - modification

L’entrée de glossaire [En-tête de colonne ou de ligne](glossaire.html#en-tete-de-colonne-ou-de-ligne) a été modifiée pour prendre en compte l’[évolution du critère 5-7](#5.7) quant à la prise en charge des groupes de colonnes et des groupes de lignes.

Dans le RAWeb 1.1, la notion de groupe est ajoutée dans la phrase&nbsp;:

<blockquote>

Contenu d’une cellule dans un tableau de données (la première cellule d’une colonne ou d’une ligne, généralement) qui sert d’intitulé pour la totalité ou une partie des cellules de la colonne **(ou groupe de colonnes)** ou de la ligne **(ou groupe de lignes)**.

</blockquote>

#### Formulaire - modification

L’entrée de glossaire [Formulaire](glossaire.html#formulaire) est modifiée afin de ne pas restreindre l’évaluation de certains critères de la thématique Formulaires aux seules balises `<form>` ou  possédant un attribut WAI-ARIA `role="form"`.

##### Dans le RAWeb 1 

<blockquote>

 Balise `<form>` ou balise possédant un attribut WAI-ARIA `role="form"`.

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Un formulaire n’est pas obligatoirement contenu dans une balise `<form>` ou une balise possédant un attribut WAI-ARIA `role="form"`.

</blockquote>

#### Indication de champ obligatoire - modification

L’entrée de glossaire [Indication de champ obligatoire](glossaire.html#indication-de-champ-obligatoire-ou-facultatif) a été renommée et modifiée pour accompagner l’introduction des champs optionnels dans les tests du [critère 11.10](/fr/raweb1.1/criteres.html#crit-11-10). 

##### Dans le RAWeb 1 

<blockquote>

Indication de champ obligatoire

Indication textuelle ou graphique (icône) permettant à l’utilisateur de savoir que la saisie d’un champ est obligatoire préalablement à la saisie.

Note&nbsp;: Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, “*”, “!”, etc.), l’explication de la signification de cette indication doit se situer, visuellement et dans l’ordre du code source, avant la première utilisation de l’indication.

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Indication de champ obligatoire ou facultatif

Indication textuelle ou graphique (icône) permettant à l’utilisateur de savoir que la saisie d’un champ est obligatoire ou facultative préalablement à la saisie.

Note&nbsp;: Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, “*”, “!”, etc.), l’explication de la signification de cette indication doit se situer, visuellement et dans l’ordre du code source, avant la première utilisation de l’indication.

</blockquote>

#### Indication du type de données et/ou de format - modification

L’entrée de glossaire [Indication du type de données et/ou de format](glossaire.html#indication-du-type-de-donnees-et-ou-de-format) a été modifiée&nbsp;: 
- pour fusionner des éléments présents dans une entrée de glossaire redondante *Type et format de données* qui a donc été supprimée&nbsp;;
- pour supprimer la référence aux seuls champs obligatoires, puisque des formats de saisie peuvent être attendus sur des champs qui ne sont pas obligatoires.

##### Dans le RAWeb 1 

<blockquote>

Indication textuelle permettant à l’utilisateur de savoir quel est le type de donnée et/ou le format de saisie requis par un champ obligatoire, préalablement à son renseignement.

Exemples&nbsp;:

- Courriel (format&nbsp;: vous@domaine.com)&nbsp;;
- Code postal (format&nbsp;: 00000)&nbsp;;
- Date (format&nbsp;: JJ/MM/AAAA).

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Indication textuelle permettant à l’utilisateur de savoir quel est le type de donnée et/ou le format de saisie requis.

Exemples&nbsp;:

- Courriel (format&nbsp;: vous@domaine.com)&nbsp;;
- Code postal (format&nbsp;: 00000)&nbsp;;
- Date (format&nbsp;: JJ/MM/AAAA)&nbsp;;
- Montant en euros.

Note importante&nbsp;: lorsque le type de champ de formulaire propose un masque de saisie, par exemple les champs `date` ou `time`, l’indication de format n’est pas nécessaire.

</blockquote>

#### Intitulé (ou nom accessible) de lien  - modification 

L’entrée de glossaire [Intitulé (ou nom accessible) de lien](glossaire.html#intitule-ou-nom-accessible-de-lien) est modifiée. Les 5 notes sont supprimées.

La note 1 est supprimée, car elle constitue déjà l’objet du [test 6.1.5](/fr/raweb1.1/criteres.html#test-6-1-5).

Pour mémoire, la note 1 dans le RAWeb 1&nbsp;: 

<blockquote>

Note 1&nbsp;: un intitulé de lien sera considéré comme non-explicite dans le cas où le « nom accessible » ne reprend pas l’[intitulé visible](glossaire.html#intitule-visible) du lien.

</blockquote>

La note 2 est supprimée, car les tests de restitution sur l’environnement de test démontrent que le cas qui y est décrit n’est plus valable aujourd’hui. Sauf cas de configuration très particulière, le contenu de `title` n’est plus jamais restitué à la place du nom accessible. Ainsi, un `title` qui ne reprend pas le nom accessible ne peut plus constituer une non conformité au regard du RAWeb.

Pour mémoire, la note 2 dans le RAWeb 1&nbsp;: 

<blockquote>

Note 2&nbsp;: en raison de la configuration possible des aides techniques permettant de forcer la restitution du « nom accessible » issu du contenu de l’attribut `title` au détriment du « nom accessible » issu du contenu du lien. Un intitulé de lien sera considéré comme non-explicite dans le cas où le lien possède un attribut `title` dont la valeur ne reprendrait pas au moins le « nom accessible » issu du contenu du lien.

</blockquote>

La note 3 est supprimée et intégrée en tant que nouveau test&nbsp;: [test 6.1.6](/fr/raweb1.1/criteres.html#test-6-1-6).

Pour mémoire, la note 3 dans le RAWeb 1&nbsp;: 

<blockquote>
Note 3&nbsp;: dans le cas de la présence de plusieurs liens ayant une destination différente dont le « nom accessible » est identique. L’intitulé de lien seul sera considéré comme non-explicite si le contexte de lien ne permet pas de les différencier.

</blockquote>

La note 4 est supprimée, car l’absence de contenu dans un lien n’est pas un motif valable de non conformité. 
Dans le critère 6.2 on recherche la présence d’un nom accessible. Invalider le critère 10.2 sur la base d’une absence de contenu dans un lien ne repose sur aucune technique WCAG.

Pour mémoire, la note 4 dans le RAWeb 1&nbsp;: 

<blockquote>

Note 4&nbsp;: lorsqu’un lien ne comporte aucun contenu, il sera non conforme au regard du critère 10.2 et du critère 6.2.

</blockquote>

La note 5 est supprimée car l’échec WCAG [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87) a été rendu obsolète. 

Pour mémoire, la note 5 dans le RAWeb 1&nbsp;: 

<blockquote>

Note 5&nbsp;: bien que le calcul du nom accessible d’un lien tienne compte de contenus texte générés en CSS via les pseudo-éléments `::before` et `::after`, cette pratique ne doit pas être utilisée, car elle constitue une non-conformité au critère 1.3.1 des <abbr lang="en" title="web content accessibility guidelines">WCAG</abbr> 2.1 (cf. [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87)).

</blockquote>

#### Landmarks - modification 

L’entrée de glossaire [Landmarks](#landmarks) est modifiée pour prendre en compte la [modification du critère 9.2](#9.2) et [la modification du critère 12.6](#12.6).

##### Dans le RAWeb 1 

<blockquote>

WAI-ARIA propose des rôles permettant d’indiquer les zones principales (régions) du document. Ces rôles sont très profitables aux utilisateurs de lecteurs d’écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation rapide dans la [structure du document](#structure-du-document).

Les rôles doivent être définis dans le document en fonction de la nature de la zone&nbsp;:

- La zone d’en-tête doit avoir un attribut WAI-ARIA `role="banner"`&nbsp;;
- Le menu de navigation principal doit avoir un attribut WAI-ARIA `role="navigation"`&nbsp;;
- La zone de contenu principal doit avoir un attribut WAI-ARIA `role="main"`&nbsp;;
- La zone de pied de page doit avoir un attribut WAI-ARIA `role="contentinfo"`&nbsp;;
- La zone de moteur de recherche sur le site doit avoir un attribut WAI-ARIA `role="search"`.

Note 1&nbsp;: Si la plupart des lecteurs d’écran mettent à disposition ces fonctionnalités, les navigateurs n’ont pas encore proposé de fonctionnalité de navigation dédiée pour les utilisateurs qui ne peuvent pas utiliser la souris. La mise en place des liens d’évitement reste donc à privilégier par rapport aux <span lang="en">landmarks</span>.

Note 2&nbsp;: Les rôles WAI-ARIA `banner`, `main` et `contentinfo` doivent être uniques dans la page. Le rôle WAI-ARIA `navigation` est réservé aux zones de navigations principales et secondaires. Lorsqu’il y a plusieurs rôles WAI-ARIA `navigation`, il peut être utile de les différencier en précisant un nom à chacune des zones via l’attribut WAI-ARIA `aria-label` ou `aria-labelledby`.

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

WAI-ARIA propose des rôles permettant d’identifier des repères de navigation. Ces rôles sont très profitables aux utilisateurs de lecteurs d’écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation rapide.

Les rôles doivent être définis dans le document en fonction de la nature de la zone (grâce à l’attribut WAI-ARIA `role` ou une balise HTML ayant un rôle implicite). WAI-ARIA désigne 8 landmarks. 

5 landmarks sont exploités dans la structure du document (critère 9.2)&nbsp;: 
- `banner`
- `contentinfo`
- `main`
- `navigation`
- `search`

3 landmarks sont disponibles pour identifier d’autres régions&nbsp;: 
- `form` (`<form>` ou `role="form"`)
- `complementary` (`<aside>` ou `role="complementary"`)
- `region` (`role="region"`).

Les landmarks `form` et `region` ne sont identifiés comme repère de navigation que s’ils possèdent un nom accessible.

Voir la section [Landmark Roles](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles) dans la documentation.

Note 1&nbsp;: compte-tenu du support variable des landmarks `form`, `complementary` et `region`, s’ils sont utilisés dans la page en tant que repères de navigation, ils devront faire l’objet de tests de navigation et de restitution sur l’environnement de test.

Note 2&nbsp;: Il n’est pas obligatoire d’identifier des repères de navigation autre que ceux requis par le critère 9.2 si le contexte ne le nécessite pas. Par exemple, il n’est pas obligatoire d’identifier tous les formulaires avec un élément `form`, mais seulement si un contexte de navigation plus ou moins complexe (applicatif par exemple) nécessiterait d’offrir plus de repères de navigation que ne le réclame déjà le critère 9.2. 

</blockquote>

#### Lien dont la nature n’est pas évidente - modification 

L’exemple de l’entrée de glossaire [Lien dont la nature n’est pas évidente](glossaire.html#lien-dont-la-nature-n-est-pas-evidente) est modifiée.

##### Dans le RAWeb 1 

<blockquote>

Par exemple, dans ce texte &laquo;&nbsp;Nouvelle grève à la SNCF&nbsp;&raquo;, si le mot &laquo;&nbsp;grève&nbsp;&raquo; est un lien signalé uniquement par la couleur, sa nature peut être ignorée par les utilisateurs ne percevant pas la couleur et accédant au contenu CSS activé.

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Par exemple, dans ce texte &laquo;&nbsp;Nouveaux horaires d’été&nbsp;&raquo;, si le mot &laquo;&nbsp;horaires&nbsp;&raquo; est un lien signalé uniquement par la couleur, sa nature peut être ignorée par les utilisateurs ne percevant pas la couleur et accédant au contenu CSS activé.

</blockquote>

#### Lien identique - création

Création de l’entrée de glossaire [Lien identique](glossaire.html#lien-identique) pour venir documenter le nouveau [test 6.1.6](/fr/raweb1.1/criteres.html#test-16-1-6).

#### Présentation de l’information - modification

L’entrée de glossaire [Présentation de l’information](glossaire.html#presentation-de-l-information) est modifiée pour documenter des cas d’exception pour d’interdiction des attributs width pour les éléments `<iframe>`,`<source>` ainsi que les enfants de `<svg>`.

##### Dans le RAWeb 1 

<blockquote>

Les attributs `width` et `height` utilisés sur d’autres éléments que les éléments `<img>`, `<object>`, `<embed>`, `<canvas>` et `<svg>` sont également interdits&nbsp;;

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Les attributs `width` et `height` sont interdits sauf sur les éléments `<canvas>`, `<embed>`, `<iframe>`, `<img>`, `<object>`, `<source>` ainsi que `<svg>` et ses enfants&nbsp;;

</blockquote>

#### Prise de focus - modification

L’entrée de glossaire [Prise de focus](glossaire.html#prise-de-focus) pour&nbsp;: 
- supprimer la référence à <code>accesskey</code>&nbsp;; 
- spécifier explicitement que le critère associé ([critère 10.7](/fr/raweb1.1/criteres.html#crit-10-7)) ne s’intéresse qu’à la prise de focus clavier. 

Ajout d’une phrase&nbsp;:

<blockquote>

Le [critère 10.7](/fr/raweb1.1/criteres.html#crit-10-7) ne s’intéresse qu’au focus du clavier (tabulation, majuscule + tabulation, raccourci clavier).

</blockquote>

#### Rôle calculé - création

Création de l’entrée de glossaire [Rôle calculé](glossaire.html#role-calcule) pour supporter la [modification du critère 9.2](#9.2) et la [modification du critère 12.6](#12.6). 

####  Tableau de données complexe - modification

L’entrée de glossaire [Tableau de données complexe](glossaire.html#tableau-de-donnees-complexe) a été modifiée pour mieux définir ce qu’est un tableau complexe. Dans l’ancienne définition, si une ligne d’entête n’était pas positionnée en tant que première ligne du tableau, le tableau était considéré complexe or il reste bien un tableau simple. La définition a été revue pour mieux refléter ce qu’est un tableau complexe.

##### Dans le RAWeb 1

La phrase suivante est modifiée&nbsp;: 

<blockquote>

Lorsqu’un tableau de données contient des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau de données complexe.

</blockquote>

##### Dans le RAWeb 1.1 

<blockquote>

Lorsqu’un tableau de données contient des en-têtes qui sont répartis sur plusieurs lignes et/ou plusieurs colonnes de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau de données complexe.

</blockquote>

#### Type et format de données - suppression

L’entrée de glossaire *Type et format de données* est supprimée, car elle n’apportait aucune information supplémentaire par rapport à l’entrée [Indication du type de données et/ou de format](glossaire.html#indication-du-type-de-donnees-et-ou-de-format) et elle ne faisait l’objet d’aucun appel depuis le référentiel technique. Les informations ont été fusionnées dans l’entrée [Indication du type de données et/ou de format](glossaire.html#indication-du-type-de-donnees-et-ou-de-format)

Pour mémoire, dans le RAWeb 1&nbsp;: 

<blockquote>

Indication concernant le type et le format des données attendus lors de la saisie d’un champ de formulaire. Par exemple&nbsp;:

- Date (jj/mm/aaaa)&nbsp;;
- Montant en euros&nbsp;;
- Code postal (5 chiffres&nbsp;: ex. 75001).

Note importante&nbsp;: lorsque le type de champ de formulaire propose un masque de saisie, par exemple les champs `date` ou `time`, l’indication de format n’est pas nécessaire.

</blockquote>

#### Version accessible (pour un document en téléchargement) - modification

L’entrée de glossaire [Version accessible (pour un document en téléchargement)](glossaire.html#version-accessible-pour-un-document-en-telechargement) a été modifiée pour remplacer la référence à Open Office Org (ODF) par LibreOffice.