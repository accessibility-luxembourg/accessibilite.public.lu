---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
Techniques:
  - F71
  - F70
  - G135
  - H86
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
---

#### Note technique

Si un contenu cryptique informatif se trouve imbriqué dans une balise possédant un attribut WAI-ARIA `role="img"`, il sera évalué sur les critères 1.1 et 1.3 et le critère 13.5 sera considéré non applicable.

Si un contenu cryptique décoratif se trouve imbriqué dans une balise possédant un attribut WAI-ARIA `aria-hidden="true"`, quel que soit le niveau d’imbrication, alors il sera considéré comme étant masqué pour les technologies d’assistance.

Du fait du faible support de la balise `<abbr>` et de l’attribut `title`, la mise à disposition de la signification d’un contenu cryptique avec cette implémentation ne permet pas de rendre le critère conforme.