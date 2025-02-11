### Introduction {class="no-summary"}

Ce référentiel est proposé pour vérifier que les documents PDF issus de logiciels d’édition bureautique présentent une accessibilité de base. L’objectif est de permettre aux personnes en situation de handicap d’accéder aux contenus et de les comprendre ainsi que d’utiliser des fonctionnalités de navigation.
Il ne prend pas en compte certains types de contenus complexes ou de structures spécifiques au format PDF. En effet, ceux-ci ne peuvent être édités qu’avec l’environnement de travail Acrobat Pro ou des logiciels similaires.

Parmi ces types de contenus, on peut citer&nbsp;:
- les en-têtes et pieds de page, 
- les citations,
- les notes de bas de page,
- les renvois vers des sources additionnelles comme les références bibliographiques.

Parmi les structures spécifiques, on peut citer&nbsp;:
- l’indication de langue du document,
- les indications de langue de passage de texte,
- les indications de changement de sens de lecture,
- les déclarations d’éléments décoratifs spécifiques au format PDF,
- l'association d'une infobulle aux liens.

Par ailleurs, les contenus de type formulaire sont abordés dans une thématique additionnelle et sont réduits aux éléments essentiels.

L’évaluation et l’adaptation de ces éléments nécessitent l’intervention de spécialistes et l’utilisation de logiciels techniques (lecteurs d’écran, logiciels de mise en page compatibles avec le format PDF ou l’environnement de travail Acrobat Pro).

Il en va de même lorsque le document PDF est issu de logiciels spécialisés, notamment de logiciels de PAO (Publication Assistée par Ordinateur) ou de chaine d'édition spécialisée, dans ce cas il faut se référer directement à la norme [EN 301 549 v.3.2.1](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) pour la Section 10 *Non-web documents*{lang=en}.

### Type de contenus non conformes {class="no-summary"}

Les types de contenus suivants seront considérés comme non conformes, car ils pourraient ne pas être utilisés de façon satisfaisante par toutes les personnes en situation de handicap&nbsp;:
- les contenus multimédia, vidéo ou audio&nbsp;;
- les changements brusques de luminosité ou les effets de flash (contenu multimédia ou éléments graphiques animés).

Leur présence rend l’ensemble du document non conforme avec l’accessibilité et nécessite la mise à disposition d’une version alternative du document dans laquelle toute l’information véhiculée par ces contenus est présente sous forme textuelle.

### Type de documents non conformes {class="no-summary"}
Certaines types de documents pourraient ne pas être utilisés de façon satisfaisante par toutes les personnes en situation de handicap, il s'agit :
- des [documents non balisés](glossaire.md#documents-non-balises),
- des [formulaires non interactifs](glossaire.md#formulaire-non-interactif).
Dans ces cas, il est inutile d'auditer les documents qui devront faire l'objet d'une refonte totale ou de la mise à disposition d'une alternative pertinente.

### Avertissement {class="no-summary"}

Pour chaque critère du référentiel, une méthodologie d’évaluation est proposée. Néanmoins, elle n’a pas de valeur normative. Elle n’est fournie qu’à titre d’aide à la prise en main du référentiel et donne un exemple de méthode d’évaluation possible. Il peut en exister d’autres. De plus, le contenu de cette méthodologie ainsi que ses étapes ne peuvent pas constituer une base opposable en cas de contestation. Enfin, il est possible que des erreurs ne soient pas détectées sur la seule base de cette méthodologie.

Seul le contenu du critère et des tests a une valeur normative.

### [Thématique 1](#topic-1)&nbsp;: Éléments graphiques {id="topic-1"}

#### [Critère 1.1](#crit-1-1) [A] Chaque image [de décoration](glossaire.md#de-decoration) est-elle correctement ignorée par les technologies d’assistance&nbsp;? {id="crit-1-1"}
- **[Test 1.1.1](#test-1-1-1)** Chaque image [de décoration](glossaire.md#de-decoration) vérifie-t-elle une de ces conditions&nbsp;?{id="test-1-1-1"}
    - L’image est dépourvue d’alternative.
    - L’image est [absente de la restitution](glossaire.md#absente-de-la-restitution-image-de-decoration).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les images de décoration dans le document original.
4. Vérifier dans PAC que chacune d’elle est absente du contenu restitué (absence de l’élément FIGURE).
5. Si ce n’est pas le cas, vérifier que chacune d’elle est dépourvue d’alternative (élément ALT vide).
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.2](#crit-1-2) [A] Chaque image [porteuse d’information](glossaire.md#porteuse-d-information) a-t-elle une [alternative textuelle](glossaire.md#alternative-textuelle)&nbsp;? {id="crit-1-2"}
- **[Test 1.2.1](#test-1-2-1)** Chaque image [porteuse d’information](glossaire.md#porteuse-d-information) vérifie-t-elle une de ces conditions&nbsp;? {id="test-1-2-1"}
    - L’image possède une alternative textuelle.
    - Un lien adjacent à l’image permet d’accéder à une alternative textuelle.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les images porteuses d’information dans le document original.
4. Vérifier dans PAC que chacune d’elle (élément FIGURE) est accompagnée d’une alternative (élément ALT) renseignée.
5. Si ce n’est pas le cas, vérifier que l’image est immédiatement suivie d’un lien permettant d’accéder à une alternative textuelle (élément LINK).
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.3](#crit-1-3) [A] Pour chaque image [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [alternative textuelle](glossaire.md#alternative-textuelle), cette alternative est-elle pertinente&nbsp;? {id="crit-1-3"}
- **[Test 1.3.1](#test-1-3-1)** Pour chaque image [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [alternative textuelle](glossaire.md#alternative-textuelle), cette alternative est-elle pertinente&nbsp;? {id="test-1-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les images porteuses d’information dans le document original.
4. Vérifier dans PAC que les alternatives (élément ALT ou contenu lié par un lien adjacent) contiennent toutes les informations nécessaires à la compréhension du contenu auquel l’image est associée.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.4](#crit-1-4) [A] Chaque image [porteuse d’information](glossaire.md#porteuse-d-information) a-t-elle, si nécessaire, une [description détaillée](glossaire.md#description-detaillee)&nbsp;? {id="crit-1-4"}
- **[Test 1.4.1](#test-1-4-1)** Chaque image [porteuse d’information](glossaire.md#porteuse-d-information) qui nécessite une [description détaillée](glossaire.md#description-detaillee) vérifie-t-elle une de ces conditions&nbsp;?{id="test-1-4-1"}
    - La [description détaillée](glossaire.md#description-detaillee) est adjacente à l’image.
    - Un lien adjacent à l’image permet d’accéder à la [description détaillée](glossaire.md#description-detaillee).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les images porteuses d’information qui nécessitent une description détaillée dans le document original.
4. Vérifier dans PAC que chacune d’elle (élément FIGURE) est accompagnée d’un texte adjacent faisant office de description détaillée.
5. Si ce n’est pas le cas, vérifier que chacune d’elle est accompagnée d’un lien adjacent permettant d’accéder à la description détaillée.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73)&nbsp;;
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.5](#crit-1-5) [A] Pour chaque image [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [description détaillée](glossaire.md#description-detaillee), cette description est-elle pertinente ? {id="crit-1-5"}
- **[Test 1.5.1](#test-1-5-1)** Chaque image [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [description détaillée](glossaire.md#description-detaillee) vérifie-t-elle une de ces conditions&nbsp;?{id="test-1-5-1"}
    - La [description détaillée](glossaire.md#description-detaillee) adjacente à l’image est pertinente.
    - La [description détaillée](glossaire.md#description-detaillee) consultable au moyen d’un lien adjacent est pertinente.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Repérer les images porteuses d’information qui sont associées à une description détaillée.
4. Vérifier que la description détaillée adjacente ou consultable au moyen d’un lien adjacent reprend toutes les informations présentes dans l’image.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73)&nbsp;;
    - [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.6](#crit-1-6) [A] Chaque [légende](glossaire.md#legende) d’image est-elle, si nécessaire, correctement reliée à l’image correspondante&nbsp;? {id="crit-1-6"}
- **[Test 1.6.1](#test-1-6-1)** Chaque [légende](glossaire.md#legende) associée à une image vérifie-t-elle ces conditions&nbsp;?{id="test-1-6-1"}
    - La [légende](glossaire.md#legende) est adjacente à l’image.
    - L’alternative de l’image contient une [référence explicite](glossaire.md#reference-explicite-a-une-legende-d-image-ou-a-une-forme-complexe) à la légende.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les images associées à des légendes dans le document original.
4. Vérifier dans PAC que la légende est adjacente à l’image (il n’existe aucun contenu entre la légende et l’image).
5. Vérifier que l’alternative de l’image contient une référence explicite à la légende.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 1.7](#crit-1-7) [AA] Chaque [image texte](glossaire.md#image-texte-ou-texte-en-image) [porteuse d’information](glossaire.md#porteuse-d-information), en l’absence d’une [version alternative textuelle](glossaire.md#version-alternative-textuelle), doit être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers)&nbsp;? {id="crit-1-7"}
- **[Test 1.7.1](#test-1-7-1)** Chaque [image texte](glossaire.md#image-texte-ou-texte-en-image) [porteuse d’information](glossaire.md#porteuse-d-information), en l’absence d’une [version alternative textuelle](glossaire.md#version-alternative-textuelle), doit être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers)&nbsp;?{id="test-1-7-1"}

##### Cas particuliers 
Dans ces situations, le critère est non applicable&nbsp;:
- Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société.
- La présentation du texte est considérée comme essentielle à l’information véhiculée par l’image, par exemple une image utilisée pour illustrer l'aspect graphique d'une police.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
2. Repérer les textes susceptibles d’être présentés sous forme d’image dans le document original.
3. Vérifier dans PAC que ces textes sont bien présentés sous forme d’image (élément FIGURE).
3. Vérifier que l’image est accompagnée d’une ancre (élément LINK) permettant de consulter une version alternative textuelle.
4. Si ce n’est pas le cas, vérifier que l’image est accompagnée d’un lien (élément LINK) permettant de consulter une version alternative textuelle du document dans lequel l’image texte est remplacée.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.5 Texte sous forme d’image (AA)](https://www.w3.org/Translations/WCAG21-fr/#images-of-text)&nbsp;:
    - [PDF7](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF7)&nbsp;;
    - [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.5 Images of text*{lang=en}.


### [Thématique 2](#topic-2)&nbsp;: Couleur {id="topic-2"}
#### [Critère 2.1](#crit-2-1) [A] L’information ne doit pas être [donnée uniquement par la couleur](glossaire.md#information-donnee-uniquement-par-la-couleur). Cette règle est-elle respectée&nbsp;? {id="crit-2-1"}
- **[Test 2.1.1](#test-2-1-1)** Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d’information, l’information ne doit pas être [donnée uniquement par la couleur](glossaire.md#information-donnee-uniquement-par-la-couleur). Cette règle est-elle respectée&nbsp;?{id="test-2-1-1"}
- **[Test 2.1.2](#test-2-1-2)** Pour chaque indication de couleur donnée par un texte, l’information ne doit pas être [donnée uniquement par la couleur](glossaire.md#information-donnee-uniquement-par-la-couleur). Cette règle est-elle respectée&nbsp;?{id="test-2-1-2"}
- **[Test 2.1.3](#test-2-1-3)** Pour chaque image véhiculant une information, l’information ne doit pas être [donnée uniquement par la couleur](glossaire.md#information-donnee-uniquement-par-la-couleur). Cette règle est-elle respectée&nbsp;?{id="test-2-1-3"}
- **[Test 2.1.4](#test-2-1-4)** Pour chaque mise en forme dont la couleur véhicule une information, l’information ne doit pas être [donnée uniquement par la couleur](glossaire.md#information-donnee-uniquement-par-la-couleur). Cette règle est-elle respectée&nbsp;?{id="test-2-1-4"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
3. Repérer les informations données uniquement pas la couleur.
4. Pour chacune d’elle (mots ou ensemble de mots, indication textuelle, information donnée par la couleur dans les images), vérifier que la couleur n’est pas le seul moyen de récupérer l’information. Par exemple&nbsp;:
    - Le mot ou l’ensemble de mots est accompagné d’une icône avec une alternative pertinente.
    - L’indication textuelle fait référence à un texte explicite ou une icône avec une alternative pertinente.
    - L’indication donnée par la couleur dans une image est accompagnée d’une indication visuelle (légende, symbole…).
    - L’indication donnée par une mise en forme est accompagnée d’une icône avec une alternative pertinente.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Utilisation de la couleur (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color)&nbsp;:
    - [G14](https://www.w3.org/WAI/WCAG21/Techniques/general/G14)&nbsp;;
    - [G182](https://www.w3.org/WAI/WCAG21/Techniques/general/G182)&nbsp;;
    - [G111](https://www.w3.org/WAI/WCAG21/Techniques/general/G111)&nbsp;;
    - [G138](https://www.w3.org/WAI/WCAG21/Techniques/general/G138).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.1 Use of colour*{lang=en}.


#### [Critère 2.2](#crit-2-2) [AA] Le contraste entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers)&nbsp;? {id="crit-2-2"}
- **[Test 2.2.1](#test-2-2-1)** Pour le [texte en taille normale](glossaire.md#texte-en-taille-normale), le rapport de contraste entre le texte et son arrière-plan vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?{id="test-2-2-1"}
    - Le rapport de contraste entre le texte et son arrière-plan est de 4,5:1, au moins.
    - Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement-contraste-renforce) permet d’afficher le texte avec un rapport de contraste de 4,5:1, au moins.
- **[Test 2.2.2](#test-2-2-2)** Pour le [texte en taille agrandie](glossaire.md#texte-en-taille-agrandie), le rapport de contraste entre le texte et son arrière-plan vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?{id="test-2-2-2"}
    - Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins.
    - Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement-contraste-renforce) permet d’afficher le texte avec un rapport de contraste de 3:1, au moins.

##### Cas particuliers 
Dans ces situations, le critère est non applicable.
- Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société.
- Le texte est purement décoratif.
- Le texte fait partie d’une image véhiculant une information, mais le texte lui-même n’apporte aucune information essentielle.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et l’outil Color Contrast Analyser

1. Ouvrir le fichier PDF.
2. Vérifier, avec l’outil Color Contrast Analyser, que&nbsp;:
    - le corps de texte par défaut et le texte en image d'une taille équivalente a un rapport de contraste avec la couleur de fond de 4,5:1, au moins&nbsp;;
    - le texte et le texte en image d'une taille significativement agrandie a un rapport de contraste avec la couleur de fond de 3:1, au moins.
3. Si ce n’est pas le cas, vérifier qu’il existe un moyen d’obtenir une version du document avec des contrastes suffisants.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.3 Contraste (minimum) (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum)&nbsp;:
    - [G18](https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html)&nbsp;;
    - [G145](https://www.w3.org/WAI/WCAG21/Techniques/general/G145.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.3 Contrast (minimum)*{lang=en}.

#### [Critère 2.3](#crit-2-3) [AA] Les couleurs utilisées dans les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers)&nbsp;? {id="crit-2-3"}
- **[Test 2.3.1](#test-2-3-1)** Le rapport de contraste de chaque couleur nécessaire à la compréhension d’un élément graphique avec les [couleurs adjacentes](glossaire.md#couleurs-adjacentes), vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?{id="test-2-3-1"}
    - Le rapport de contraste est de 3:1, au moins.
    - Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement-contraste-renforce) permet d’afficher les éléments graphiques avec des contrastes suffisants.
- **[Test 2.3.2](#test-2-3-2)** Le rapport de contraste de chaque couleur nécessaire à la compréhension d’un élément graphique avec la couleur d’arrière-plan, vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?{id="test-2-3-2"}
    - Le rapport de contraste est de 3:1, au moins.
    - Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement-contraste-renforce) permet d’afficher les éléments graphiques avec des contrastes suffisants.
- **[Test 2.3.3](#test-2-3-3)** Le rapport de contraste entre les couleurs d’un élément graphique dans ses [différents états](glossaire.md#differents-etats-d-un-element-graphique) vérifie-t-il une de ces conditions (hors cas particuliers)&nbsp;?{id="test-2-3-3"}
    - Le rapport de contraste est de 3:1, au moins.
    - Un [mécanisme de remplacement](glossaire.md#mecanisme-de-remplacement-contraste-renforce) permet d’afficher les éléments graphiques avec des contrastes suffisants.

##### Cas particuliers 
Dans ces situations, le critère est non applicable&nbsp;:
- élément graphique (ou parties d’élément graphique) non porteur d’information ou ayant une alternative, une description détaillée, une information identique visible dans la page&nbsp;;
- élément graphique (ou parties d’élément graphique) faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société&nbsp;;
- élément graphique (ou parties d’élément graphique) dont la présentation est essentielle à l’information véhiculée (drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs, etc.).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et l’outil Color Contrast Analyser

1. Ouvrir le fichier PDF.
3. Repérer les éléments graphiques porteurs d’information.
4. Vérifier, avec l’outil Color Contrast Analyser, que&nbsp;:
    - le rapport de contraste entre chacune des couleurs porteuses d’information et sa ou ses couleurs adjacentes est de 3:1, au moins&nbsp;;
    - le rapport de contraste entre chacune des couleurs porteuses d’information et la couleur d’arrière-plan est de 3:1, au moins&nbsp;;
    - le rapport de contraste entre chaque état d’un même élément graphique est de 3:1, au moins&nbsp;;
    - le rapport de contraste de chaque état d’un même élément graphique et la couleur d’arrière-plan est de 3:1, au moins.
5. Si ce n’est pas le cas, vérifier qu’il existe un moyen d’obtenir une version du document avec des contrastes suffisants.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.11 Contraste du contenu non textuel (AA)](https://www.w3.org/Translations/WCAG21-fr/#non-text-contrast)&nbsp;:
    - [G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207.html)&nbsp;;
    - [G209](https://www.w3.org/WAI/WCAG21/Techniques/general/G209.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.11 Non-text contrast*{lang=en}.

### [Thématique 3](#topic-3)&nbsp;: Tableaux {id="topic-3"}

#### [Critère 3.1](#crit-3-1) [A] Chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) a-t-il une alternative&nbsp;? {id="crit-3-1"}
- **[Test 3.1.1](#test-3-1-1)** Chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) vérifie-t-il une de ces conditions&nbsp;? {id="test-3-1-1"}
    - Une alternative est adjacente au tableau&nbsp;;
    - Une ancre adjacente permet d’accéder à une alternative&nbsp;;
    - Un lien permet d’accéder à un document contenant une alternative.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader    

1. Ouvrir le fichier PDF.
2. Repérer les tableaux de données complexes.
4. Vérifier qu’il existe une ancre adjacente au tableau qui permet d’accéder à une alternative.
5. Si ce n’est pas le cas, vérifier qu’il existe une alternative adjacente.
5. Si ce n’est pas le cas, vérifier qu’il existe un lien adjacent permettant d’accéder à un document contenant une alternative au tableau de données complexe.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.2 Ordre séquentiel logique (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.2 Meaningful sequence*{lang=en}.

#### [Critère 3.2](#crit-3-2) [A] Pour chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) ayant une alternative, celle-ci est-elle pertinente&nbsp;? {id="crit-3-2"}
- **[Test 3.2.1](#test-3-2-1)** Pour chaque [tableau de données complexe](glossaire.md#tableau-de-donnees-complexe) ayant une alternative, celle-ci est-elle pertinente&nbsp;? {id="test-3-2-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Repérer les tableaux de données complexes associés à une alternative.
4. Vérifier que l’alternative apporte la même information que le tableau de données complexe.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.2 Ordre séquentiel logique (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.2 Meaningful sequence*{lang=en}.

#### [Critère 3.3](#crit-3-3) [A] Pour chaque [tableau de données](glossaire.md#tableau-de-donnees) les [en-têtes](glossaire.md#en-tete-tableau) sont-ils correctement déclarés&nbsp;? {id="crit-3-3"}
- **[Test 3.3.1](#test-3-3-1)** Pour chaque [tableau de données](glossaire.md#tableau-de-donnees), chaque [en-tête](glossaire.md#en-tete-tableau) utilise-t-il un élément TH&nbsp;? {id="test-3-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024	

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les tableaux de données dans le document original.
4. Vérifier dans PAC que chaque cellule faisant office d’en-tête est correctement structurée (élément TH).
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF6](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF6)&nbsp;;
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}.

#### [Critère 3.4](#crit-3-4) [A] Pour chaque [tableau de présentation](glossaire.md#tableau-de-presentation), le [contenu linéarisé](glossaire.md#contenu-linearise) reste-t-il compréhensible&nbsp;? {id="crit-3-4"}
- **[Test 3.4.1](#test-3-4-1)** Pour chaque [tableau de présentation](glossaire.md#tableau-de-presentation), le [contenu linéarisé](glossaire.md#contenu-linearise) reste-t-il compréhensible&nbsp;? {id="test-3-4-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024    

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les tableaux de mise en forme dans le document original.
4. Vérifier dans PAC que lorsque les cellules sont parcourues dans l’ordre dans lequel elles sont présentées les contenus restent compréhensibles.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.2 Ordre séquentiel logique (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.2 Meaningful sequence*{lang=en}.

#### [Critère 3.5](#crit-3-5) [A] Chaque [tableau de présentation](glossaire.md#tableau-de-presentation) ne doit pas utiliser d’éléments propres aux [tableaux de données](glossaire.md#tableau-de-donnees), cette règle est-elle respectée&nbsp;? {id="crit-3-5"}
- **[Test 3.5.1](#test-3-3-1)** Chaque [tableau de présentation](glossaire.md#tableau-de-presentation) ne doit pas utiliser d’éléments propres aux [tableaux de données](glossaire.md#tableau-de-donnees), cette règle est-elle respectée&nbsp;? {id="test-3-5-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024    

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les tableaux de présentation dans le document original.
4. Vérifier dans PAC que le tableau est dépourvu d’éléments TH.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}.

### [Thématique 4](#topic-4)&nbsp;: Liens {id="topic-4"}

#### [Critère 4.1](#crit-4-1) [A] Chaque [lien](glossaire.md#lien) est-il explicite&nbsp;? {id="crit-4-1"}
- **[Test 4.1.1](#test-4-1-1)** Chaque [lien](glossaire.md#lien) vérifie-t-il une de ces conditions&nbsp;? {id="test-4-1-1"}
    - L’[intitulé du lien](glossaire.md#intitule-du-lien) seul est explicite&nbsp;;
    - Le [contexte du lien](glossaire.md#contexte-du-lien) permet d’expliciter le lien.

- **[Test 4.1.2](#test-4-1-2)** Chaque [lien identique](glossaire.md#liens-identiques) a-t-il les mêmes fonctions et destination&nbsp;? {id="test-4-1-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Test 4.1.1 avec Acrobat Reader et PAC 2024

1. Ouvrir le fichier PDF avec PAC.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les liens dans le document original.
4. Vérifier dans PAC que le lien possède un intitulé seul explicite&nbsp;:
    - contenu textuel de l’élément LINK&nbsp;;
    - contenu textuel de l’élément ALT de l’image (élément FIGURE) contenue dans le lien&nbsp;;
    - ou l’association des deux.
5. Si ce n’est pas le cas, dans PAC, vérifier que la phrase où se trouve le lien permet de l’expliciter.
6. Si ce n’est pas le cas, dans PAC, vérifier que le titre précédent immédiatement le lien (élément Hx) permet de l’expliciter.
7. Si c’est le cas, le test est validé.

###### Test 4.1.2 avec Acrobat Reader et PAC 2024

1. Ouvrir le fichier PDF avec Acrobat Reader.
2. Repérer les liens identiques.
3. Cliquer sur les liens et vérifier que les ressources associées sont identiques.
4. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.4 Fonction du lien (selon le contexte) (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context)&nbsp;:
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11)&nbsp;;
    - [PDF13](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF13).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.4.4 Link purpose (in context)*{lang=en}.

#### [Critère 4.2](#crit-4-2) [A] Chaque [lien](glossaire.md#lien) a-t-il un intitulé&nbsp;? {id="crit-4-2"}
- **[Test 4.2.1](#test-4-2-1)** Chaque [lien](glossaire.md#lien) image a-t-il un intitulé&nbsp;? {id="test-4-2-1"}
- **[Test 4.2.2](#test-4-2-2)** Chaque [lien](glossaire.md#lien) utilisant une forme complexe a-t-il un intitulé&nbsp;? {id="test-4-2-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024    

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les liens image dans le document original.
4. Vérifier dans PAC que l’image possède une alternative renseignée (élément ALT contenu dans l’élément LINK).
5. Repérer les liens construits avec ne forme complexe dans le document original.
6. Vérifier dans PAC que la forme complexe possède une alternative renseignée (élément ALT).
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.4 Fonction du lien (selon le contexte) (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context)&nbsp;:
    - [PDF11](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF11).
- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.4.4 Link purpose (in context)*{lang=en}, *10.1.1.1 Non-text content*{lang=en}.

### [Thématique 5](#topic-5)&nbsp;: Structuration de l’information {id="topic-5"}

#### [Critère 5.1](#crit-5-1) [A] L’information est-elle structurée par l’utilisation appropriée de titres&nbsp;? {id="crit-5-1"}
- **[Test 5.1.1](#test-5-1-1)** Chaque titre utilise-t-il un [style de titre](glossaire.md#style-de-titre)&nbsp;? {id="test-5-1-1"}
- **[Test 5.1.2](#test-5-1-2)** Lorsque les [styles de titre](glossaire.md#style-de-titre) le permettent, la [hiérarchie du titrage](glossaire.md#hierarchie-du-titrage) est-elle cohérente&nbsp;? {id="test-5-1-2"}
- **[Test 5.1.3](#test-5-1-3)** Chaque titre est-il pertinent&nbsp;? {id="test-5-1-3"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Test 5.1.1 avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les passages de texte qui doivent être des titres dans le document original.
4. Vérifier dans PAC que le titre est présenté au moyen d’un élément Hx où x est le niveau de titre, par exemple H1.
5. Si c’est le cas, le test est validé.

###### Test 5.1.2 avec Acrobat Reader

1. Ouvrir le fichier PDF et consulter le sommaire ou afficher la liste des titres (icône «&nbsp;signet&nbsp;» dans le panneau latéral gauche).
2. Vérifier que l’arborescence est cohérente (l’arborescence proposée représente les niveaux de titres).
3. Si c’est le cas, le test est validé.

###### Test 5.1.3 avec Acrobat Reader

1. Ouvrir le fichier PDF et consulter le sommaire ou afficher la liste des titres (icône «&nbsp;signet&nbsp;» dans le panneau latéral gauche).
2. Vérifier que chaque titre décrit de manière satisfaisante le contenu auquel il est associé.
3. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF9](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF9).
- WCAG 2.1&nbsp;: [2.4.6 En-têtes et étiquettes (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels)&nbsp;:
    - [G130](https://www.w3.org/WAI/WCAG21/Techniques/general/G130.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}, *10.2.4.6 Headings and labels*{lang=en}.

#### [Critère 5.2](#crit-5-2) [A] Chaque contenu présenté sous forme de liste utilise-t-il un [style de liste](glossaire.md#style-de-liste)&nbsp;? {id="crit-5-2"}
- **[Test 5.2.1](#test-5-1-1)** Chaque contenu présenté sous forme de liste non ordonnée utilise-t-il un [style de liste](glossaire.md#style-de-liste) approprié&nbsp;? {id="test-5-2-1"}
- **[Test 5.2.2](#test-5-2-2)** Lorsque les [styles de liste](glossaire.md#style-de-liste) le permettent, chaque contenu présenté sous forme de liste ordonnée utilise-t-il un [style de liste](glossaire.md#style-de-liste) approprié&nbsp;? {id="test-5-2-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Test 5.2.1 avec PAC 2024 

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les contenus présentés sous forme de liste non ordonnée et ordonnée dans le document original.
4. Vérifier dans PAC que&nbsp;:
    - la liste est présentée au moyen d’un élément L&nbsp;;
    - chaque item de liste est présenté au moyen d’un élément LI.
5. Si c’est le cas, le test est validé.

###### Test 5.2.2 avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Vérifier, pour chaque liste qui doit être ordonnée, que chaque item de liste est associé à un index. 
3. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF21](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF21).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}.


#### [Critère 5.3](#crit-5-3) [A] Les [éléments de structure](glossaire.md#elements-de-structure) ne doivent pas être utilisés uniquement à des fins de présentation, cette règle est-elle respectée&nbsp;? {id="crit-5-3"}
- **[Test 5.3.1](#test-5-3-1)** Les [éléments de structure](glossaire.md#elements-de-structure) ne doivent pas être utilisés uniquement à des fins de présentation, cette règle est-elle respectée&nbsp;? {id="test-5-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Vérifier que tous les contenus utilisent des éléments appropriés, plus particulièrement qu’il n’existe pas&nbsp;:
    - des blocs de textes associés à un élément Hx (par exemple un bloc de texte associé à un élément H1)&nbsp;;
    - des paragraphes vides successifs&nbsp;;
    - des blocs de textes où chaque ligne est présentée sous la forme d’un paragraphe (élément P).
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}.

### [Thématique 6](#topic-6)&nbsp;: Présentation de l’information {id="topic-6"}

#### [Critère 6.1](#crit-6-1) [A] L’[ordre de restitution](glossaire.md#ordre-de-restitution) des contenus est-il cohérent&nbsp;? {id="crit-6-1"}
- **[Test 6.1.1](#test-6-1-1)** L’[ordre de restitution](glossaire.md#ordre-de-restitution) des contenus est-il cohérent&nbsp;? {id="test-6-1-1"}
- **[Test 6.1.2](#test-6-1-2)** L’[ordre de tabulation](glossaire.md#ordre-de-tabulation) des contenus est-il cohérent&nbsp;? {id="test-6-1-2"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et PAC 2024

###### Test 6.1.1 avec Acrobat Reader et PAC 2024

1. Ouvrir le fichier PDF avec PAC.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer dans PAC les contenus qui se présentent&nbsp;:
    - sous la forme de colonne dans le document original&nbsp;;
    - sous la forme de zones de textes indépendantes, associées ou non à un bloc de texte dans le document original.
4. Vérifier dans PAC que ces contenus se présentent dans un ordre cohérent pour rendre l’ensemble du document compréhensible.
5. Vérifier qu’il n’existe pas d’autres contenus qui se présenteraient dans un ordre incohérent.
6. Si c’est le cas, le test est validé.

Note&nbsp;: dans la plupart des cas, la zone de texte sera suivie immédiatement dans PAC d’un élément FIGURE vide. Cet élément FIGURE peut être ignoré.

###### Test 6.1.2 avec Acrobat Reader
1. Ouvrir le fichier PDF.
2. Avec la touche tabulation parcourir les éléments tabulables.
3. Vérifier que le parcours de tabulation est cohérent&nbsp;: les éléments tabulables se présentent dans un ordre logique et cohérent.
4. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.2 Ordre séquentiel logique (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence)&nbsp;:
    - [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57.html).
- WCAG 2.1&nbsp;: [2.1.1 Clavier (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3).
- WCAG 2.1&nbsp;: [2.4.3 Parcours du focus (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order)&nbsp;:
    - [PDF3](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF3)&nbsp;;
    - [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.2 Meaningful sequence*{lang=en}, *10.2.1.1 Keyboard*{lang=en}, *10.2.4.3 Focus order*{lang=en}.

#### [Critère 6.2](#crit-6-2) [A] L’information ne doit pas être donnée uniquement par la [forme, la taille ou la position](glossaire.md#indication-donnee-uniquement-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée&nbsp;? {id="crit-6-2"}
- **[Test 6.2.1](#test-6-2-1)** Pour chaque modification du type ou d’un style de caractère, porteur d’information, l’information ne doit pas être donnée uniquement par la [forme, la taille ou la position](glossaire.md#indication-donnee-uniquement-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée&nbsp;?{id="test-6-2-1"}
- **[Test 6.2.2](#test-6-2-2)** Pour chaque indication visuelle donnée au moyen d’un positionnement ou la présence d’un caractère spécial, porteur d’information, l’information ne doit pas être donnée uniquement par la [forme, la taille ou la position](glossaire.md#indication-donnee-uniquement-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée&nbsp;?{id="test-6-2-2"}


##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et PAC 2024

###### Test 6.2.1 avec Acrobat Reader et PAC 2024

1. Ouvrir le fichier avec Acrobat Reader.
2. Repérer dans le texte les informations qui utilisent une modification du type ou d’un style de caractère (graisse, italique, police)&nbsp;;
3. Vérifier que l’information transmise au moyen d’un type ou d’un style de caractère est associée à une indication textuelle équivalente. 
4. Si c’est le cas, le test est validé.

###### Test 6.2.2 avec Acrobat Reader et PAC 2024

1. Ouvrir le fichier avec Acrobat Reader.
2. Repérer dans le texte les informations qui utilisent une indication visuelle au moyen d’un positionnement ou la présence d’un caractère spécial (par exemple un symbole mathématique ou graphique).
3. Vérifier que l’information transmise au moyen d’un positionnement ou la présence d’un caractère spécial est associée à une indication textuelle équivalente. 
4. Si c’est le cas, le test est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.3 Caractéristiques sensorielles (A)](https://www.w3.org/Translations/WCAG21-fr/#sensory-characteristics)&nbsp;:
    - [G96](https://www.w3.org/WAI/WCAG21/Techniques/general/G96.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.3 Sensory characteristics*{lang=en}.

#### [Critère 6.3](#crit-6-3) [A] Chaque lien signalé uniquement par la couleur et dont [la nature n’est pas évidente](glossaire.md#lien-dont-la-nature-n-est-pas-evidente) est-il visible, par rapport au texte environnant&nbsp;? {id="crit-6-3"}
- **[Test 6.3.1](#test-6-3-1)** Chaque lien signalé uniquement par la couleur et dont [la nature n’est pas évidente](glossaire.md#lien-dont-la-nature-n-est-pas-evidente) a-t-il un rapport de contraste supérieur ou égal à 3:1, par rapport au texte environnant&nbsp;? {id="test-6-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et l’outil *Color Contrast Analyser*{lang=en}

1. Ouvrir le fichier PDF.
2. Repérer les liens insérés dans des blocs de texte (paragraphe, titre, liste…) et signalés uniquement par la couleur.
3. Vérifier avec l’outil Color Contrast Analyser que le rapport de contraste entre la couleur de police du lien et la couleur de police du texte environnant est supérieur ou égal à 3:1.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Utilisation de la couleur (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color)&nbsp;:
    - [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.1 Use of colour*{lang=en}.

### [Thématique 7](#topic-7)&nbsp;: Navigation {id="topic-7"}

#### [Critère 7.1](#crit-7-1) [AA] Le document possède-t-il un [sommaire](glossaire.md#sommaire) (hors cas particuliers)&nbsp;? {id="crit-7-1"}
- **[Test 7.1.1](#test-7-1-1)** Le document possède-t-il un [sommaire](glossaire.md#sommaire) (hors cas particuliers)&nbsp;? {id="test-7-1-1"}

##### Cas particuliers 
Dans ces situations, le critère est non applicable&nbsp;:
- Le document n’est constitué que de quelques pages.
- Le contenu n’a pas vocation à être structuré par une arborescence de titres.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Vérifier que le contenu est précédé d’un sommaire.
3. Si ce n’est pas le cas, vérifier la présence d’un sommaire dans le panneau latéral gauche (icône «&nbsp;signet&nbsp;») d’Acrobat Reader.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.5 Accès multiples (AA)](https://www.w3.org/Translations/WCAG21-fr/#multiple-ways)&nbsp;:
    - [PDF2](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF2)&nbsp;;
    - [G64](https://www.w3.org/WAI/WCAG21/Techniques/general/G64.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: pas de critère lié.

### [Thématique 8](#topic-8)&nbsp;: Éléments obligatoires {id="topic-8"}

#### [Critère 8.1](#crit-8-1) [A] Le document possède-t-il un [titre de document](glossaire.md#titre-de-document)&nbsp;? {id="crit-8-1"}
- **[Test 8.1.1](#test-8-1-1)** Le document possède-t-il un [titre de document](glossaire.md#titre-de-document)&nbsp;? {id="test-8-1-1"}

##### Cas particuliers 
Dans le cas où le document doit être anonymisé, l’utilisation des fonctions de suppression des propriétés du document (auteur, date de modification, etc.) de certains logiciels d’édition bureautique peut également supprimer le titre du document sans qu’il soit possible de le renseigner de manière indépendante.

Dans ce cas, le critère est non applicable.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Consulter le panneau des propriétés (menu «&nbsp;Fichier&nbsp;» puis option «&nbsp;Propriétés&nbsp;») et l’onglet «&nbsp;Description&nbsp;».
3. Vérifier que le champ «&nbsp;Titre&nbsp;» est renseigné.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.2 Titre de page (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled)&nbsp;:
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.4.2 Document titled*{lang=en}.

#### [Critère 8.2](#crit-8-2) [A] Le [titre de document](glossaire.md#titre-de-document) est-il pertinent (sauf cas particulier)&nbsp;? {id="crit-8-2"}
- **[Test 8.2.1](#test-8-2-1)** Le [titre de document](glossaire.md#titre-de-document) est-il pertinent (sauf cas particulier)&nbsp;? {id="test-8-2-1"}

##### Cas particuliers 
Dans le cas où le document doit être anonymisé, l’utilisation des fonctions de suppression des propriétés du document (auteur, date de modification, etc.) de certains logiciels d’édition bureautique peut également supprimer le titre du document sans qu’il soit possible de le renseigner de manière indépendante.

Dans ce cas, le critère est non applicable.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Consulter le panneau des propriétés (menu «&nbsp;Fichier&nbsp;» puis option «&nbsp;Propriétés&nbsp;») et l’onglet «&nbsp;Description&nbsp;».
3. Vérifier que le texte renseigné dans le champ «&nbsp;Titre&nbsp;» est pertinent.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.2 Titre de page (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled)&nbsp;:
    - [PDF18](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF18).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.4.2 Document titled*{lang=en}.

### [Thématique 9](#topic-9)&nbsp;: Consultation {id="topic-9"}

#### [Critère 9.1](#crit-9-1) [A] Chaque [forme complexe](glossaire.md#forme-complexe) [de décoration](glossaire.md#de-decoration) est-elle correctement ignorée par les technologies d’assistance&nbsp;? {id="crit-9-1"}
- **[Test 9.1.1](#test-9-1-1)** Chaque [forme complexe](glossaire.md#forme-complexe) [de décoration](glossaire.md#de-decoration) vérifie-t-elle une de ces conditions&nbsp;?{id="test-9-1-1"}
    - La forme complexe est dépourvue d’alternative.
    - La forme complexe est [absente de la restitution](glossaire.md#absente-de-la-restitution-image-de-decoration).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les formes complexes de décoration dans le document original.
4. Vérifier dans PAC que chacune d’elle est absente du contenu restitué (absence de l’élément FIGURE).
5. Si ce n’est pas le cas, vérifier que chacune d’elle est dépourvue d’alternative (élément ALT vide).
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1)&nbsp;;
    - [PDF4](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF4).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.2](#crit-9-2) [A] Chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) a-t-elle une [alternative textuelle](glossaire.md#alternative-textuelle)&nbsp;? {id="crit-9-2"}
- **[Test 9.2.1](#test-9-2-1)** Chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) vérifie-t-elle une de ces conditions&nbsp;? {id="test-9-2-1"}
    - La forme complexe possède une alternative textuelle.
    - Un lien adjacent à la forme complexe permet d’accéder à une alternative textuelle.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les formes complexes porteuses d’information dans le document original.
4. Vérifier dans PAC que chacune d’elle (élément FIGURE) est accompagnée d’une alternative (élément ALT) renseignée.
5. Si ce n’est pas le cas, vérifier que la forme complexe est immédiatement suivie d’un lien permettant d’accéder à une alternative textuelle (élément LINK).
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.3](#crit-9-3) [A] Pour chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [alternative textuelle](glossaire.md#alternative-textuelle), cette alternative est-elle pertinente&nbsp;? {id="crit-9-3"}
- **[Test 9.3.1](#test-9-3-1)** Pour chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [alternative textuelle](glossaire.md#alternative-textuelle), cette alternative est-elle pertinente&nbsp;? {id="test-9-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les formes complexes porteuses d’information dans le document original.
4. Vérifier dans PAC que les alternatives (élément ALT ou contenu lié par un lien adjacent) contiennent toutes les informations nécessaires à la compréhension du contenu auquel la forme complexe est associée.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.4](#crit-9-4) [A] Chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) a-t-elle, si nécessaire, une [description détaillée](glossaire.md#description-detaillee)&nbsp;? {id="crit-9-4"}
- **[Test 9.4.1](#test-9-4-1)** Chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) qui nécessite une [description détaillée](glossaire.md#description-detaillee) vérifie-t-elle une de ces conditions&nbsp;?{id="test-9-4-1"}
    - La [description détaillée](glossaire.md#description-detaillee) est adjacente à la forme complexe.
    - Un lien adjacent à la forme complexe permet d’accéder à la [description détaillée](glossaire.md#description-detaillee).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les formes complexes porteuses d’information qui nécessitent une description détaillée dans le document original.
4. Vérifier dans PAC que chacune d’elle est accompagnée d’un texte adjacent faisant office de description détaillée.
5. Si ce n’est pas le cas, vérifier que chacune d’elle est accompagnée d’un lien adjacent permettant d’accéder à la description détaillée.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.5](#crit-9-5) [A] Pour chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [description détaillée](glossaire.md#description-detaillee), cette description est-elle pertinente ? {id="crit-9-5"}
- **[Test 9.5.1](#test-9-5-1)** Chaque [forme complexe](glossaire.md#forme-complexe) [porteuse d’information](glossaire.md#porteuse-d-information) ayant une [description détaillée](glossaire.md#description-detaillee) vérifie-t-elle une de ces conditions&nbsp;?{id="test-9-5-1"}
    - La [description détaillée](glossaire.md#description-detaillee) adjacente à la forme complexe est pertinente.
    - La [description détaillée](glossaire.md#description-detaillee) consultable au moyen d’un lien adjacent est pertinente.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Repérer les formes complexes porteuses d’information qui sont associées à une description détaillée dans le document original.
4. Vérifier que la description détaillée adjacente ou consultable au moyen d’un lien adjacent reprend toutes les informations présentes dans la forme complexe.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;:
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.6](#crit-9-6) [A] Chaque [légende](glossaire.md#legende) de [forme complexe](glossaire.md#forme-complexe) est-elle, si nécessaire, correctement reliée à l’image correspondante&nbsp;? {id="crit-9-6"}
- **[Test 9.6.1](#test-9-6-1)** Chaque [légende](glossaire.md#legende) associée à une [forme complexe](glossaire.md#forme-complexe) vérifie-t-elle ces conditions&nbsp;?{id="test-9-6-1"}
    - La [légende](glossaire.md#legende) est adjacente à la forme complexe.
    - L’alternative de la forme complexe contient une [référence explicite](glossaire.md#reference-explicite-a-une-legende-d-image-ou-a-une-forme-complexe) à la [légende](glossaire.md#legende).

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec PAC 2024

1. Ouvrir le fichier PDF.
2. Ouvrir «&nbsp;Aperçu avec le lecteur d’écran&nbsp;», le contenu du fichier est exposé tel qu’il sera restitué, le ou les éléments utilisés précèdent chaque contenu.
3. Repérer les formes complexes associées à des légendes dans le document original.
4. Vérifier dans PAC que la légende est adjacente à la forme complexe (il n’existe aucun contenu entre la légende et la forme complexe).
5. Vérifier que l’alternative de la forme complexe contient une référence explicite à la légende.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;;
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.7](#crit-9-7) [A] Chaque [contenu cryptique](glossaire.md#contenu-cryptique) (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative&nbsp;? {id="crit-9-7"}
- **[Test 9.7.1](#test-9-7-1)** Chaque [contenu cryptique](glossaire.md#contenu-cryptique) (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative&nbsp;?{id="test-9-7-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
3. Repérer les contenus cryptiques.
4. Vérifier qu’une définition est disponible dans le contexte adjacent (immédiatement avant ou après le contenu cryptique).
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;;
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.8](#crit-9-8) [A] Pour chaque [contenu cryptique](glossaire.md#contenu-cryptique) (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente&nbsp;? {id="crit-9-8"}
- **[Test 9.8.1](#test-9-8-1)** Pour chaque [contenu cryptique](glossaire.md#contenu-cryptique) (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente&nbsp;?{id="test-9-8-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
3. Repérer les contenus cryptiques associés à une alternative.
4. Vérifier que l’alternative proposée apporte la même information que le contenu cryptique.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.1.1 Contenu non textuel (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content)&nbsp;;
    - [PDF1](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF1).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.1.1 Non-text content*{lang=en}.

#### [Critère 9.9](#crit-9-8) [A] Chaque [contenu clignotant ou en mouvement](glossaire.md#contenu-clignotant-ou-en-mouvement) doit avoir une [durée d’activation](glossaire.md#duree-d-activation) inférieure ou égale à 5 secondes. Cette règle est-elle respectée&nbsp;? {id="crit-9-9"}
- **[Test 9.9.1](#test-9-9-1)** Chaque [contenu clignotant ou en mouvement](glossaire.md#contenu-clignotant-ou-en-mouvement) doit avoir une [durée d’activation](glossaire.md#duree-d-activation) inférieure ou égale à 5 secondes. Cette règle est-elle respectée&nbsp;?{id="test-9-9-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
3. Repérer les contenus clignotants ou en mouvement.
4. Vérifier que la durée du clignotement ou du mouvement est inférieure ou égale à 5 secondes.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.2.2 Mettre en pause, arrêter, masquer (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide)&nbsp;:
    - [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4.html)&nbsp;;
    - [G11](https://www.w3.org/WAI/WCAG21/Techniques/general/G11.html)&nbsp;;
    - [G152](https://www.w3.org/WAI/WCAG21/Techniques/general/G152.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.2.2 Pause, stop, hide*{lang=en}.

### [Thématique 10](#topic-10)&nbsp;: Formulaire interactif (thématique complémentaire){id="topic-10"} 
#### Introduction{class=no-summary}
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

#### [Critère 10.1](#crit-10-1) [A] Chaque [champ de formulaire](glossaire.md#champ-de-formulaire) a-t-il une [étiquette](glossaire.md#etiquette)&nbsp;? {id="crit-10-1"}
- **[Test 10.1.1](#test-10-1-1)** Chaque [champ de formulaire](glossaire.md#champ-de-formulaire) vérifie-t-il ces conditions&nbsp;?{id="test-10-1-1"}
    - l'[étiquette](glossaire.md#etiquette) est visible&nbsp;;
    - l'[étiquette](glossaire.md#etiquette) est correctement restituée par les technologies d'assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ et vérifier :
    - que l'étiquette est visible&nbsp;;
    - qu’un nom est vocalement restitué.
3. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
 - WCAG 2.1&nbsp;: [4.1.2 Nom, rôle et valeur (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value)&nbsp;:
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.3.1 Info and relationships*{lang=en}, *10.4.1.2 Name, role, value*{lang=en}.

#### [Critère 10.2](#crit-10-2) [A] Chaque [étiquette](glossaire.md#etiquette) associée à un [champ de formulaire](glossaire.md#champ-de-formulaire) est-elle pertinente&nbsp;? {id="crit-10-2"}
- **[Test 10.2.1](#test-10-2-1)** Chaque [étiquette](glossaire.md#etiquette) vérifie-t-elle ces conditions&nbsp;?{id="test-10-2-1"}
    - L’intitulé de l'[étiquette](glossaire.md#etiquette) accessible aux technologies d’assistance est pertinent&nbsp;;
    - L’intitulé visible de l'[étiquette](glossaire.md#etiquette) est contenu dans l’intitulé accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ et vérifier que le nom vocalement restitué&nbsp;:
    - permet de connaitre la fonction exacte du champ associé&nbsp;;
    - et contient au moins l’étiquette visible.
3. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.4.6 En-têtes et étiquettes (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels)&nbsp;:
    - [G131](https://www.w3.org/WAI/WCAG21/Techniques/general/G131.html).
- WCAG 2.1&nbsp;: [2.5.3 Étiquette dans le nom (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name)&nbsp;:
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)&nbsp;;
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
- WCAG 2.1&nbsp;: [3.3.2 Étiquettes ou instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.4.6 Headings and labels*{lang=en}, *10.2.5.3 Label in name*{lang=en}, *10.3.3.2 Labels or instructions*{lang=en}.

#### [Critère 10.3](#crit-10-3) [AA] Chaque [étiquette](glossaire.md#etiquette) associée à un [champ de formulaire](glossaire.md#champ-de-formulaire) ayant la même fonction et répété plusieurs fois dans un même document est-elle [cohérente](glossaire.md#etiquettes-coherentes)&nbsp;? {id="crit-10-3"}
- **[Test 10.3.1](#test-10-3-1)** Chaque [étiquette](glossaire.md#etiquette) associée à un [champ de formulaire](glossaire.md#champ-de-formulaire) ayant la même fonction et répété plusieurs fois dans un même document est-elle [cohérente](glossaire.md#etiquettes-coherentes)&nbsp;?{id="test-10-3-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Repérer dans le document les champs de formulaire ayant les mêmes fonctions.
3. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ et vérifier que les noms vocalement restitués sont cohérents entre eux.
4. Vérifier que les étiquettes visibles sont également cohérentes entre elles.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.2.4 Identification cohérente (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-identification)&nbsp;:
    - [G197](https://www.w3.org/WAI/WCAG21/Techniques/general/G197.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: pas de critère lié.

#### [Critère 10.4](#crit-10-4) [A] Chaque [étiquette](glossaire.md#etiquette) et son champ associé sont-ils [accolés](glossaire.md#accoles-etiquette-et-champ-accoles)&nbsp;? {id="crit-10-4"}
- **[Test 10.4.1](#test-10-4-1)** Chaque [étiquette](glossaire.md#etiquette) et son champ associé sont-ils [accolés](glossaire.md#accoles-etiquette-et-champ-accoles)&nbsp;?{id="test-10-4-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Vérifier que les étiquettes visibles sont accolées aux champs auxquels elles sont associées.
3. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.2 Étiquettes ou instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html) ;
    - [G162](https://www.w3.org/WAI/WCAG21/Techniques/general/G162).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.3.3.2 Labels or instructions*{lang=en}.

#### [Critère 10.5](#crit-10-5) [A] Les [champs de formulaire](glossaire.md#champ-de-formulaire) obligatoires sont-ils correctement identifiés (hors cas particuliers)&nbsp;? {id="crit-10-5"}
- **[Test 10.5.1](#test-10-5-1)** Chaque [champ de formulaire](glossaire.md#champ-de-formulaire) obligatoire vérifie-t-il ces conditions&nbsp;?{id="test-10-5-1"}
    - Le caractère obligatoire est visible et explicite.
    - Le caractère obligatoire est accessible aux technologies d’assistance.

##### Cas particuliers 
Dans ces situations, le critère est non applicable&nbsp;:

- Le formulaire ne comporte qu’un seul champ.
- Les champs optionnels sont indiqués de manière&nbsp;:
    - visible et explicite&nbsp;;
    - dans l’étiquette du champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, le critère reste applicable.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Repérer dans le document les champs indiqués comme obligatoires.
3. Vérifier que l’indication visuelle est explicite&nbsp;:
    - il s’agit d’une indication textuelle (par exemple «&nbsp;obligatoire&nbsp;»)&nbsp;;
    - ou il s’agit d’une indication visuelle (par exemple «&nbsp;\*&nbsp;») définie avant le formulaire par une mention textuelle (par exemple «&nbsp;Les champs précédés de (\*) sont obligatoires&nbsp;»).
4. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ et vérifier que le caractère obligatoire de la saisie est vocalement restitué.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [1.4.1 Utilisation de la couleur (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color)&nbsp;:
    - [G205](https://www.w3.org/WAI/WCAG21/Techniques/general/G205.html).
- WCAG 2.1&nbsp;: [3.3.1 Identification des erreurs (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification)&nbsp;:
    - [PDF5](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF5).
- WCAG 2.1&nbsp;: [3.3.2 Étiquettes ou instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.1.4.1 Use of colour*{lang=en}, *10.3.3.1 Error identification*{lang=en}, *10.3.3.2 Labels or instructions*{lang=en}.

#### [Critère 10.6](#crit-10-6) [A] Pour chaque [champ de formulaire](glossaire.md#champ-de-formulaire) obligatoire, le type de données et/ou de format attendu est-il disponible&nbsp;? {id="crit-10-6"}
- **[Test 10.6.1](#test-10-6-1)** Chaque [champ de formulaire](glossaire.md#champ-de-formulaire) obligatoire vérifie-t-il ces conditions&nbsp;?{id="test-10-6-1"}
    - Le type de données et/ou de format est visible.
    - Le type de données et/ou de format est accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Repérer dans le document les champs obligatoires.
3. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ.
4. Remplir les champs avec des valeurs susceptibles de provoquer des erreurs de saisie (un format invalide pour une adresse e-mail par exemple). 
5. Utiliser la touche de tabulation pour sortir des champs ou, si le formulaire le permet, envoyer le formulaire.
6. Pour chaque message d’erreur affiché, vérifier que le type de données et/ou le format attendu&nbsp;:
    - est indiqué au moyen d’un texte visible à proximité du champ ou par l'intermédiaire d'une fenêtre d'information&nbsp;;
    - est vocalement restitué au moment de l’activation du champ.
7. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.1 Identification des erreurs (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification)&nbsp;:
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- WCAG 2.1&nbsp;: [3.3.2 Étiquettes ou instructions (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.3.3.1 Error identification*{lang=en}, *10.3.3.2 Labels or instructions*{lang=en}.

#### [Critère 10.7](#crit-10-7) [A] Chaque message d’erreur de saisie est-il correctement restitué&nbsp;? {id="crit-10-7"}
- **[Test 10.7.1](#test-10-7-1)** Chaque message d’erreur de saisie vérifie-t-il ces conditions&nbsp;?{id="test-10-7-1"}
    - Le message d’erreur est visible.
    - Le message d’erreur est accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ.
3. Remplir les champs avec des valeurs susceptibles de provoquer des erreurs de saisie (un format invalide pour une adresse e-mail par exemple). 
4. Utiliser la touche de tabulation pour sortir des champs ou, si le formulaire le permet, envoyer le formulaire.
5. Pour chaque message d’erreur affiché, vérifier&nbsp;:
    - qu'il est indiqué au moyen d’un texte visible à proximité du champ&nbsp;;
    - qu'il est vocalement restitué au moment de l’activation du champ.
6. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.1 Identification des erreurs (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification)&nbsp;:
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.3.3.1 Error identification*{lang=en}.

#### [Critère 10.8](#crit-10-8) [AA] Le [contrôle de saisie](glossaire.md#controle-de-saisie) est-il accompagné, si nécessaire, de suggestions des types, formats de données ou valeurs attendus (hors cas particuliers)&nbsp;? {id="crit-10-8"}
- **[Test 10.8.1](#test-10-8-1)** Le [contrôle de saisie](glossaire.md#controle-de-saisie) vérifie-t-il ces conditions&nbsp;?{id="test-10-8-1"}
    - Le contrôle de saisie est accompagné, si nécessaire, de suggestions des types et formats de données attendus.
    - Le contrôle de saisie est accompagné, si nécessaire, de suggestions de valeurs attendues.

##### Cas particuliers 
Dans ces situations, le critère est non applicable&nbsp;:

- Le message d’erreur est généré automatiquement par le logiciel d’édition PDF.
- La personnalisation des messages d’erreur nécessite l’utilisation d’un langage de script.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque champ.
3. Remplir les champs avec des valeurs susceptibles de provoquer des erreurs de saisies (un format invalide pour une adresse e-mail par exemple). 
4. Utiliser la touche de tabulation pour sortir des champs ou, si le formulaire le permet, envoyer le formulaire.
5. Pour chaque message d'erreur relatif à un type ou un format de donnée ou une valeur attendue, vérifier&nbsp;: 
    - qu'un exemple de saisie réelle est présent dans le message d’erreur (pour une adresse e-mail, vérifier la mention d’une adresse réelle sur le modèle &laquo;&nbsp;jean.dupont@sample.com&nbsp;&raquo;)&nbsp;;
    - que l’exemple de saisie réelle est vocalement restitué au moment de l’activation du champ.
5. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.3 Suggestion après une erreur (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-suggestion)&nbsp;:
    - [PDF22](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF22).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.3.3.3 Error suggestion*{lang=en}.


#### [Critère 10.9](#crit-10-9) [A] Chaque bouton de formulaire a-t-il un intitulé&nbsp;? {id="crit-10-9"}
- **[Test 10.9.1](#test-10-9-1)** Chaque bouton de formulaire a-t-il un intitulé&nbsp;?{id="test-10-9-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque bouton.
3. Vérifier qu’un intitulé est vocalement restitué.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}
- WCAG 2.1&nbsp;: [1.3.1 Information et relations (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships)&nbsp;:
    - [PDF10](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF10.html).
- WCAG 2.1&nbsp;: [4.1.2 Nom, rôle et valeur (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value)&nbsp;:
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.4.1.2 Name, role, value*{lang=en}.

#### [Critère 10.10](#crit-10-10) [A] L’intitulé de chaque bouton de formulaire est-il pertinent&nbsp;? {id="crit-10-10"}
- **[Test 10.10.1](#test-10-10-1)** Chaque bouton de formulaire respecte-t-il ces conditions&nbsp;?{id="test-10-10-1"}
    - L’intitulé du bouton accessible aux technologies d’assistance est pertinent.
    - L’intitulé visible du bouton est contenu dans l’intitulé accessible aux technologies d’assistance.

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader et NVDA

1. Ouvrir le fichier PDF et activer NVDA.
2. Avec NVDA, utiliser la touche de tabulation pour activer chaque bouton.
3. Vérifier&nbsp;:
    - que l’intitulé vocalement restitué est pertinent&nbsp;;
    - que l’intitulé visible est contenu dans l’intitulé vocalement restitué.
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [2.5.3 Étiquette dans le nom (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name)&nbsp;:
    - [G208](https://www.w3.org/WAI/WCAG21/Techniques/general/G208.html)&nbsp;;
    - [G211](https://www.w3.org/WAI/WCAG21/Techniques/general/G211.html).
 - WCAG 2.1&nbsp;: [4.1.2 Nom, rôle et valeur (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value)&nbsp;:
    - [G108](https://www.w3.org/WAI/WCAG21/Techniques/general/G108.html)&nbsp;;
    - [PDF12](https://www.w3.org/WAI/WCAG21/Techniques/pdf/PDF12.html).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.2.5.3 Label in name*{lang=en}, *10.4.1.2 Name, role, value*{lang=en}.

#### [Critère 10.11](#crit-10-11) [AA] Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur&nbsp;? {id="crit-10-11"}
- **[Test 10.11.1](#test-10-11-1)** Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur&nbsp;?{id="test-10-11-1"}

##### Méthodologie d’évaluation {class="disclosure methodo"}

###### Avec Acrobat Reader

1. Ouvrir le fichier PDF.
2. Remplir le formulaire.
3. Pour chaque donnée à caractère financier (par exemple, une indication de revenu), juridique (par exemple, une référence d’acte administratif), personnelle (par exemple, un numéro de téléphone), pour chaque formulaire qui transmet des réponses à un test ou à un examen, vérifier que l’utilisateur peut&nbsp;: 
    - modifier ou annuler les données et les actions effectuées sur ces données en cours de saisie (par exemple un champ n’est pas désactivé après qu’une valeur soit saisie)&nbsp;;
    - ou confirmer, de manière explicite, l’envoi de ces données avec un mécanisme dédié (par exemple en cochant une case de confirmation).
4. Pour chaque mécanisme (par exemple un bouton) qui permet de modifier ou supprimer une donnée saisie, vérifier que l’utilisateur peut&nbsp;:
    - annuler les modifications effectuées&nbsp;;
    - récupérer les données supprimées&nbsp;;
    - ou confirmer, de manière explicite, la modification ou la suppression de ces données avec un mécanisme dédié (par exemple une case à cocher).
4. Si c’est le cas, le critère est validé.

##### Correspondances {class="disclosure mapping"}

- WCAG 2.1&nbsp;: [3.3.4 Prévention des erreurs (juridiques, financières, de données) (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-prevention-legal-financial-data)&nbsp;:
    - [G99](https://www.w3.org/WAI/WCAG21/Techniques/general/G99)&nbsp;;
    - [G155](https://www.w3.org/WAI/WCAG21/Techniques/general/G155).
- EN 301 549 V3.2.1 (2021-03)&nbsp;: *10.3.3.4 Error prevention (legal, financial, data)*{lang=en}.


