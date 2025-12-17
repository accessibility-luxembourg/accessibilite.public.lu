### Ajout des correspondances PDF/UA-2

Pour chaque critère, lorsque c’est possible, une ou plusieurs correspondances avec les éléments de la norme PDF/UA-2 ont été ajoutées.

### Critères

#### Modifiction de la méthodologie du critère 5.1 

Les méthodologies des tests du [critère 5.1](/fr/rapdf1.1/referentiel-technique.html#crit-5-1) sont modifiées. Elles ont été fusionnées en une seule méthodologie qui se base uniquement sur l’utilisation de PAC.

##### Dans le RAPDF&nbsp;1

<blockquote>

Test 5.1.1 avec PAC

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les passages de texte qui doivent être des titres dans le document original.
4. Vérifier dans PAC que le titre est présenté au moyen d’un élément Hx où x est le niveau de titre, par exemple H1.
5. Si c’est le cas, le test est validé.

Test 5.1.2 avec Acrobat Reader

1. Ouvrir le fichier PDF et consulter le sommaire ou afficher la liste des titres (icône «&nbsp;signet&nbsp;» dans le panneau latéral gauche).
2. Vérifier que l’arborescence est cohérente (l’arborescence proposée représente les niveaux de titres).
3. Si c’est le cas, le test est validé.

Test 5.1.3 avec Acrobat Reader

1. Ouvrir le fichier PDF et consulter le sommaire ou afficher la liste des titres (icône «&nbsp;signet&nbsp;» dans le panneau latéral gauche).
2. Vérifier que chaque titre décrit de manière satisfaisante le contenu auquel il est associé.
4. Si c’est le cas, le test est validé.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Avec PAC

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les passages de texte qui doivent être des titres dans le document original et vérifier dans PAC que le titre est présenté au moyen d’un élément Hx où x est le niveau de titre, par exemple H1.
4. Repérer l’ensemble des titres identifiés dans le document et vérifier que l’arborescence est cohérente (l’imbrication des niveaux de titres les uns par rapport aux autres est cohérente).
5. Vérifier que chaque titre identifié dans le document décrit de manière satisfaisante le contenu auquel il est associé.
6. Si c’est le cas, le test est validé. 

</blockquote>

#### Création du critère 5.4&nbsp;: bloc de citation

Il est possible d’identifier des blocs de citations grâce aux styles de paragraphes dans les outils d’édition, qui sont restitués correctement par les technologies d’assistance. 

Le [critère 5.4](/fr/rapdf1.1/referentiel-technique.html#crit-5-4) est donc créé pour évaluer leur identification correcte dans les documents.

#### Suppression du critère 7.1

Le critère 7.1 n’avait pas de correspondance dans la norme européenne EN 301 549. Le critère est supprimé.

Pour mémoire, le critère 7.1 dans le RAPDF&nbsp;1&nbsp;:

<blockquote>

Critère 7.1 [AA] Le document possède-t-il un sommaire (hors cas particuliers)&nbsp;?

Test 7.1.1 Le document possède-t-il un sommaire (hors cas particuliers)&nbsp;?

</blockquote>

#### Formulaires&nbsp;: révision complète des méthodologies

Les méthodologies d’évaluation des critères [10.1](/fr/rapdf1.1/referentiel-technique.html#crit-10-1), [10.2](/fr/rapdf1.1/referentiel-technique.html#crit-10-2), [10.3](/fr/rapdf1.1/referentiel-technique.html#crit-10-3), [10.5](/fr/rapdf1.1/referentiel-technique.html#crit-10-5), [10.6](/fr/rapdf1.1/referentiel-technique.html#crit-10-6), [10.7](/fr/rapdf1.1/referentiel-technique.html#crit-10-7), [10.8](/fr/rapdf1.1/referentiel-technique.html#crit-10-8), [10.9](/fr/rapdf1.1/referentiel-technique.html#crit-10-9) et [10.10](/fr/rapdf1.1/referentiel-technique.html#crit-10-10), initialement basées sur l’utilisation de NVDA, sont modifiées et ne se basent plus que sur une évaluation dans Acrobat Reader.

Le texte d’introduction est modifié pour prendre en compte ce changement méthodologique. 

##### Dans le RAPDF&nbsp;1

<blockquote>

Cette thématique concerne uniquement les formulaires interactifs remplis avec Acrobat Reader.
Les formulaires PDF ne peuvent être réalisés qu’au moyen d’Acrobat Pro ou de logiciels spécialisés dans l’édition de formulaire au format PDF.

Par ailleurs, la méthodologie de test nécessite l’utilisation d’un lecteur d’écran.
Ce sont les raisons pour lesquelles cette thématique a volontairement été isolée en dernière partie du référentiel.

La méthodologie d’évaluation est fondée sur le lecteur d’écran [NVDA](https://www.nvda.fr/) librement installable et utilisable sur un ordinateur Windows.

Les critères de cette thématique visent à vérifier que les contrôles de formulaire (champ de saisie, etc.) sont correctement restitués pour assurer une accessibilité de base.

Néanmoins, le recours à un test par une personne en situation de handicap au moyen de sa propre technologie d’assistance est à privilégier pour vérifier&nbsp;: 
- que le formulaire PDF est parfaitement utilisable,
- que tous les champs de saisie peuvent être remplis,
- et que l’utilisateur dispose de toutes les informations nécessaires.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Cette thématique concerne uniquement les formulaires interactifs remplis avec Acrobat Reader.

Les formulaires PDF ne peuvent être réalisés qu’au moyen d’Acrobat Pro, d’Adobe InDesign ou de logiciels spécialisés dans l’édition de formulaire au format PDF.

En plus des évaluations proposées dans cette thématique, le recours à un test par une personne en situation de handicap au moyen de sa propre technologie d’assistance est à privilégier pour vérifier&nbsp;: 

- que le formulaire PDF est parfaitement utilisable,
- que tous les champs de saisie peuvent être remplis,
- et que l’utilisateur dispose de toutes les informations nécessaires.

</blockquote>

#### 10.1

Modification des conditions du critère [10.1](/fr/rapdf1.1/referentiel-technique.html#crit-10-1) pour prendre le changement de méthodologie.

##### Dans le RAPDF&nbsp;1

<blockquote>

 - l’étiquette est visible&nbsp;;
 - l’étiquette est correctement restituée par les technologies d’assistance.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

 - l’étiquette est visible&nbsp;;
 - l’étiquette est accessible aux technologies d’assistance.

</blockquote>

#### 10.2

Modification rédactionnelle du critère [10.2](/fr/rapdf1.1/referentiel-technique.html#crit-10-2).

##### Dans le RAPDF&nbsp;1

<blockquote>

- L’intitulé de l’étiquette accessible aux technologies d’assistance est pertinent&nbsp;;
- L’intitulé visible de l’étiquette est contenu dans l’intitulé accessible aux technologies d’assistance.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

- L’étiquette accessible aux technologies d’assistance est pertinente&nbsp;;
- L’étiquette visible est contenue dans l’étiquette accessible aux technologies d’assistance.

</blockquote>

#### 10.5

Modification du critère [10.5](/fr/rapdf1.1/referentiel-technique.html#crit-10-5) pour introduire les champs optionnels directement dans les tests au lieu des cas particuliers.

Le cas particulier est modifié et une note technique est ajoutée.

##### Dans le RAPDF&nbsp;1

<blockquote>

Critère 10.5 Les champs de formulaire obligatoires sont-ils correctement identifiés (hors cas particuliers)&nbsp;?

Test 10.5.1 Chaque champ de formulaire obligatoire vérifie-t-il ces conditions&nbsp;?
- Le caractère obligatoire est visible et explicite.
- Le caractère obligatoire est accessible aux technologies d’assistance.

**Cas particuliers** 

Dans ces situations, le critère est non applicable&nbsp;:

- Le formulaire ne comporte qu’un seul champ.
- Les champs optionnels sont indiqués de manière&nbsp;:
    - visible et explicite&nbsp;;
    - dans l’étiquette du champ.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Critère 10.5 Les champs de formulaire obligatoires ou facultatifs sont-ils correctement identifiés (hors cas particuliers)&nbsp;?

Test 10.5.1 Chaque champ de formulaire obligatoire ou facultatif vérifie-t-il ces conditions&nbsp;?
- Le caractère obligatoire ou facultatif est visible et explicite.
- Le caractère obligatoire ou facultatif est accessible aux technologies d’assistance.

**Cas particuliers** 

Lorsque le formulaire ne comporte qu’un seul champ, le critère est non applicable.

**Notes techniques**

Le test 10.5.1 traite des champs de manière indépendante, néanmoins, il faut garantir que la méthode choisie pour avertir les utilisateurs (champs obligatoires ou champs facultatifs) soit cohérente sur l’ensemble du formulaire.

</blockquote>

#### 10.6

Modification rédactionnelle du critère [10.6](/fr/rapdf1.1/referentiel-technique.html#crit-10-6) et ajout d’une condition sur l’affichage des informations préalablement à la validation.

##### Dans le RAPDF&nbsp;1

<blockquote>

Critère 10.6 Pour chaque champ de formulaire obligatoire, le type de données et/ou de format attendu est-il disponible&nbsp;?

Test 10.6.1 Chaque champ de formulaire obligatoire vérifie-t-il ces conditions&nbsp;?
- Le type de données et/ou de format est visible.
- Le type de données et/ou de format est accessible aux technologies d’assistance.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Critère 10.6 Les instructions du type de données et/ou de format vérifient-elles ces conditions&nbsp;?

Test 10.6.1 Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles ces conditions&nbsp;?
- Le type de données et/ou de format est visible.
- Le type de données et/ou de format est indiqué préalablement à la validation du formulaire.
- Le type de données et/ou de format est accessible aux technologies d’assistance.

</blockquote>

#### 10.8

Suppression du cas particulier du critère [10.8](/fr/rapdf1.1/referentiel-technique.html#crit-10-8) lié au script.

Pour mémoire, dans le RAPDF&nbsp;1

<blockquote>

La personnalisation des messages d’erreur nécessite l’utilisation d’un langage de script.

</blockquote>

### Glossaire

#### Contrôle de saisie

Ajout de la mention &laquo;&nbsp;des champs obligatoires&nbsp;&raquo; suite à la modification du critère 10.5 et la prise en compte des champs facultatifs dans l’évaluation.

#### Hiérarchie du titrage

Modification de la définition pour supprimer l’obligation de démarrer par un titre de niveau 1 et l’interdiction des sauts hiérarchiques.

##### Dans le RAPDF&nbsp;1

<blockquote>

Dans la plupart des logiciels d’édition bureautique, la bibliothèque de styles propose un style particulier pour chaque niveau de titre, généralement jusqu’à 8 niveaux.

La hiérarchie du titrage est cohérente lorsque&nbsp;:
- Tous les passages de textes ayant vocation à être un titre utilisent un style de titre.
- Le premier titre du contenu est de niveau 1.
- Il n’y a pas de rupture dans la hiérarchie de titrage (par exemple on ne passe pas directement d’un titre de niveau 2 à un titre de niveau 4).

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Dans la plupart des logiciels d’édition bureautique, la bibliothèque de style propose un style particulier pour chaque niveau de titre, généralement jusqu’à 6 niveaux.

La hiérarchie du titrage est cohérente lorsque l’imbrication des niveaux de titres est cohérente (les niveaux d’imbrication des titres reflètent le niveau de dépendance des contenus les uns par rapport aux autres).

Note&nbsp;: la présence de sauts hiérarchiques (par exemple, passage d’un titre de niveau 2 à un titre de niveau 4) n’invalide pas le critère, mais elle est déconseillée.

</blockquote>

#### Lien dont la nature n’est pas évidente

Simplification de l’entrée de glossaire et modification de l’exemple.

##### Dans le RAPDF&nbsp;1

<blockquote>

Il s’agit d’un lien dont l’intitulé ne permet pas d’en comprendre la nature, ce qui peut amener les personnes déficientes visuelles à l’ignorer.

Exemple d’un lien dont la nature est évidente&nbsp;: «&nbsp;Les conditions générales d’utilisation de nos services ont été mises à jour, cliquez pour les consulter en ligne.&nbsp;»

Si le texte «&nbsp;Cliquez pour les consulter en ligne&nbsp;» est un lien, sa nature est évidente.

Exemple d’un lien dont la nature n’est pas évidente&nbsp;: «&nbsp;Les Règles pour l’accessibilité des contenus Web (WCAG) 2.1 définissent la façon de rendre les contenus Web plus accessibles aux personnes en situation de handicap.&nbsp;»

Si le texte «&nbsp;Les Règles pour l’accessibilité des contenus Web (WCAG) 2.1&nbsp;» est un lien, son intitulé est insuffisant pour en comprendre la nature.

**Note importante**&nbsp;: seuls les liens qui sont insérés dans des blocs de texte sont concernés.

</blockquote>

##### Dans le RAPDF&nbsp;1.1

<blockquote>

Lien qui peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur par certains utilisateurs ne percevant pas ou mal les couleurs. Par exemple, dans ce texte «&nbsp;Nouveaux horaires d’été&nbsp;», si le mot «&nbsp;horaires&nbsp;» est un lien signalé uniquement par la couleur, sa nature peut être ignorée par les utilisateurs ne percevant pas la couleur et accédant au contenu CSS activé.

Note&nbsp;: «&nbsp;signalé uniquement par la couleur&nbsp;» signifie que le lien n’est accompagné d’aucun marqueur visuel (icône, soulignement, bordure…). En conséquence, un lien de la même couleur que le texte environnant est concerné par ce critère.

**Note importante**&nbsp;: seuls les liens qui sont insérés dans des blocs de texte sont concernés.

</blockquote>

#### Sommaire - suppression

L’entrée de glossaire &nbsp;&laquo;Sommaire&nbsp;&raquo; est supprimée suite à la suppression du critère 7.1. 

Pour mémoire, l’entrée de glossaire &nbsp;&laquo;Sommaire&nbsp;&raquo; dans le RAPDF&nbsp;1&nbsp;: 

<blockquote>

Liste des titres du contenu, présentée en introduction du document, généralement sous la forme de liens permettant d’accéder directement aux parties concernées. Chaque titre peut être accompagné du numéro de page correspondant.
Selon le logiciel utilisé pour éditer le contenu, le sommaire peut être structuré avec des éléments TOC et TOCI ou des éléments L et LI.

</blockquote>

### Modification des documents annexes

Les pages [Introduction](introduction.html), [Méthodologie de test](methodologie.html) et [Environnement de test](environnement.html) sont modifiées pour supprimer toute référence au lecteur d'écran en tant que méthodologie d'évaluation, suite à sa suppression pour l'évaluation de la thématique Formulaires.
