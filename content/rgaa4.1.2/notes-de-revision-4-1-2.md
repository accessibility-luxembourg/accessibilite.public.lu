---
title: Notes de révision du RGAA 4.1 vers 4.1.2
layout: layouts/base.njk
descirption: 
eleventyNavigation:
  title: Ressources
  parent: ressources
  order: 6
---

Cette édition comporte les deux premiers erratum apportés à la version 4.1 du Référentiel général d’amélioration de l’accessibilité (RGAA). Ils n’invalident pas les audits déjà réalisés. Il s'agit d'une mise à jour mineure du référentiel. 

Les corrections concernent essentiellement les critères, les tests et le glossaire.

Elles corrigent les défauts suivants :
* fautes d’orthographe (description pour desription) ;
* typographie – espace insécable, apostrophe française remplaçant une apostrophe anglaise droite… – ;
* grammaire notamment accord de genre ou de pluriel – évaluations […] prévues pour prévus – ;
* indication de langue ;
* permutation de termes et plus généralement tri d’énumérations pour respecter l’ordre alphabétique ;
* ajout d’ancre pour pointer plus précisément une référence ou explicitation de la langue d’une ressource ;
* séparation d’items indûment fusionnés.

Ces corrections ont été reportées directement aux fichiers `criteres.json` et `glossaire.json` disponibles sur le <a href="https://github.com/DISIC/accessibilite.numerique.gouv.fr/tree/main/RGAA"   rel="noreferrer noopener" title="dépôt GitHub du RGAA - nouvelle fenêtre" target="_blank">dépôt GitHub du RGAA</a>.

Les sources de cette mise à jour sont issues du dépôt RGAA.
### Critères et tests
* **1.1.5** Ajout de la mention “Contenu de l’élément `<title>`” dans la méthodologie de test.
* **1.6** Ajout de la note technique suivante :
“attribut longdesc qui constitue une des conditions du test 1.6.1 (et dont la pertinence est vérifiée avec le test 1.7.1) est désormais considéré comme obsolète par la spécification HTML en cours. La vérification de cet attribut ne sera donc requise que pour les versions de la spécification HTML antérieure à HTML5.”
* **4.5.1 et 4.5.2** Ajout de la mention “accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).” dans la méthodologie de test. 
* **5.8.1** Suppression de l’élément `<colgroup>` de la liste des éléments à vérifier
* **10.1.1** Les éléments de présentation sont listés par ordre alphabétique dans la méthodologie de test.
* **10.1.2** Suppression de l’attribut basefont de la liste des attributs de présentation dans la méthodologie de test.
* **10.7.1** Suppression des propriétés css :  
“(propriétés outline, outline-width, outline-style, outline-color ou toute autre propriété de mise en forme appropriée)”  
est remplacé par :  
“(en agissant sur le contour ou le fond ou les deux)”  
 dans la méthodologie de test. 
* **10.11**
  * Ajout des techniques WCAG manquantes
  * Ajout de la mention suivante dans Cas particuliers : « L’objectif de ce critère est de garantir un défilement dans une unique direction pour une lecture facilitée selon le sens de l’écriture. »
  * Modification de l’intitulé du critère :  
“Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou à un défilement horizontal pour une fenêtre ayant une largeur de 320px (hors cas particuliers) ?”  
est remplacé par :  
“Pour chaque page web, les contenus peuvent-ils être présentés sans perte d’information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?”
* **11.2** Référence à un test inexistant :  
“Ce cas particulier s’applique également au test 11.9.3.”  
est remplacé par :  
“Ce cas particulier s’applique également au test 11.9.2.”
* **12.8** Correction de la correspondance aux WCAG :  
“C7”  
est remplacé par :  
“C27”.
* **13.3.1** Reformulation de la méthodologie de test :
  * Il existe une version alternative du document en téléchargement compatible avec l’accessibilité,
  * Il existe une version alternative du document en téléchargement au format HTML.  
	est remplacé par :  
  * Il en existe une version alternative en téléchargement compatible avec l’accessibilité,
  * Il en existe une version alternative au format HTML compatible avec l’accessibilité.
### Glossaire
* Alternative textuelle (image) : Précision et ajout de la balise title soit “dans une balise `<title>` ou dans une balise `<text>` que cette dernière balise soit ou non visible”
* Contrôle de la consultation d’un média temporel : Ajout de la mention “Si l’objet multimédia a des sous-titres non incrustés, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition des sous-titres”
* Liste des valeurs possibles pour l’attribut `autocomplete` :
	* “Identité sexuelle” est remplacé par “identité de genre”,
	* Séparation de deux items indûment fusionnés ;
* Présentation de l’information :
	* Les éléments sont listés par ordre alphabétique ,
	* Ajout de deux notes concernant l’attribut size et l’élément u.

### Adaptations pour le Luxembourg

Vous trouverez ci-après les notes de révision issues de l'adaptation du RGAA 4.1.2 à la loi luxembourgeoise.

#### Page Critères

- Ajout d'un avertissement concernant le caractère non-normatif de la méthodologie de test.

##### Critère 1.4

- Suppression de la condition "S’il est présent, le contenu de l’attribut alt est pertinent" dans les tests 1.4.4 à 1.4.7.

##### Critère 1.6

- Suppression de la condition "Il existe un attribut longdesc qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la description détaillée" dans les tests 1.6.2, 1.6.3 et 1.6.4.
- Dans le test 1.6.4, ajout de la condition "Il existe un attribut WAI-ARIA aria-describedby associant un passage de texte faisant office de description détaillée." Cette condition était présente dans la version précédente du RGAA.

##### Critère 4.1

- Remplacement des notes relatives à la loi française par une note relative à la loi luxembourgeoise.

##### Critère 5.1 

- Correction d'un lien mort dans les notes techniques.

##### Critère 8.7

- Mise en place d'une liste de dictionnaires officiels adaptée au contexte multilingue du Luxembourg dans la note 1.

##### Critère 13.3

- Suppression d'une note relative aux organismes de droit privé. Ajout d'une note sur l'exemption de certains fichiers bureautiques d'après la loi luxembourgeoise. 
- Ajout d'une référence au RAPDF dans les cas particuliers.

#### Page Glossaire

- Remplacement de la référence aux anciens critères bureautiques par la référence au RAPDF pour les documents PDF et à la norme européenne pour les autres types de documents.
- Dans la définition de "contenu visible" modification de la référence au test 12.2.1 en 10.2.1.

#### Méthodologie de test

##### Critère 4.1

- Remplacement des notes relatives à la loi française par une note relative à la loi luxembourgeoise.

##### Critère 13.3

- Suppression d'une note relative aux organismes de droit privé. Ajout d'une note sur l'exemption de certains fichiers bureautiques d'après la loi luxembourgeoise. Remplacement de la référence aux anciens critères bureautiques par la référence au RAPDF pour les documents PDF et à la norme européenne pour les autres types de documents.
- Ajout d'une référence au RAPDF.
- Suppression d'une référence à un document qui n'est plus disponible.
- Modification des informations concernant LibreOffice.