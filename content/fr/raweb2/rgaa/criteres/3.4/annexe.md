---
EN301549-V4: 9.1.4.11
WCAG: 1.4.11
Techniques:
  - F78
  - G136
  - G174
  - G195
  - G207
  - G209
---

#### Cas particuliers

Le critère est non applicable pour :

- Les composants d’interface inactifs (par exemple, un bouton avec un attribut `disabled`) sur lesquel aucune action n’est possible.
- Les composants d’interface pour lesquel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox).
- Les composants d’interface pour lesquel la couleur n’est pas nécessaire pour identifier les composants ou leurs états (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1).
- Les éléments graphiques ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page).
- Les éléments graphiques ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société.
- Les éléments graphiques ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs).
- Les éléments graphiques ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant.


#### Notes techniques

Il est important de comprendre que le critère 3.3 [@@TODO numérotation] évalue uniquement les contrastes des éléments non textuels porteurs d'information. Dès qu’il s’agira d’évaluer le contraste d’un texte, même s’il est présent dans un composant d’interface, c’est le critère 3.2 [@@TODO numérotation] qui s’applique.
