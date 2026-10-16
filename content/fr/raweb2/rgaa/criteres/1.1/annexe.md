---
EN301549-V4: 9.1.1.1
WCAG: 1.1.1
RAWEB1.1: 1.2
Techniques:
  - C9
  - F38
  - F39
  - G196
  - H67
ACT: 1
---

#### Notes techniques

##### Note 1

Lorsqu’une image est associée à une légende, la note technique WCAG recommande de prévoir systématiquement un [nom accessible](#nom-accessible-d-image) (cf. critère 1.9). Dans ce cas le critère 1.2 est non applicable.

Dans le cas d’une image vectorielle (balise `<svg>`) de décoration qui serait affichée au travers d’un élément `<use href="…">` enfant de l’élément `<svg>`, le test 1.2.4 s’appliquera également à l’élément `<svg>` associé par le biais de l’élément `<use>`.

Si une image se trouve imbriquée dans une balise possédant un attribut `aria-hidden="true"`, alors elle sera considérée comme étant masquée pour les technologies d’assistance.

##### Note 2

En raison du mauvais support de certains lecteurs d'écrans, si une balise <img> possédant un attribut alt vide se trouve dans une balise <figure>, il est recommandé d'ajouter sur la balise <img> un attribut WAI-ARIA aria-hidden="true", un role="presentation" ou un role="none".