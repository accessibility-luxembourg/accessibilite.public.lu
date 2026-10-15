---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
  - successCriterion: 4.1.2
    title: Name, Role, Value
    level: A
Techniques:
  - ARIA4
  - C9
  - F38
  - F39
  - G196
  - H67
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
  - criterion: 9.4.1.2
    title: Name, Role, Value
---

#### Note technique

Lorsqu’une image est associée à une [légende](#legende-d-image), la note technique WCAG recommande de prévoir systématiquement une [alternative textuelle](#alternative-textuelle-image) (cf. critère 1.9). Dans ce cas le critère 1.2 est non applicable.

Dans le cas d’une image vectorielle (balise `<svg>`) de décoration qui serait affichée au travers d’un élément `<use href="…">` enfant de l’élément `<svg>`, le test 1.2.4 s’appliquera également à l’élément `<svg>` associé par le biais de l’élément `<use>`.

Si une image se trouve imbriquée dans une balise possédant un attribut `aria-hidden="true"`, alors elle sera considérée comme étant masquée pour les technologies d’assistance.