---
WCAG:
  - successCriterion: 1.1.1
    title: Non-text Content
    level: A
Techniques:
  - ARIA6
  - G92
  - G74
  - G73
Norm:
  - criterion: 9.1.1.1
    title: Non-text Content
---

#### Notes techniques

Dans le cas du SVG, le manque de support de l’élément `<desc>` ne permet pas son utilisation pour l’implémentation d’une [description détaillée](#description-detaillee-image).

L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`, `<object>`, `<embed>`, `<canvas>`) à sa [description détaillée](#description-detaillee-image), par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id` de la zone contenant la [description détaillée](#description-detaillee-image).

La [description détaillée](#description-detaillee-image) adjacente peut être implémentée via une balise `<figcaption>`, dans ce cas le {% crit 1.9 %} doit être vérifié.