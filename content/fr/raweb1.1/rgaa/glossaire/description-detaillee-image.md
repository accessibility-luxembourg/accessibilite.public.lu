---
title: Description détaillée (image)
---

Contenu associé à une image en complément de son alternative textuelle afin de décrire en totalité l’information véhiculée par l’image. La description détaillée peut être associée à l’image via :

- Une référence à une description détaillée adjacente à l’image dans l’alternative textuelle ;
- Un [lien ou un bouton adjacent](#lien-ou-bouton-adjacent) qui permet d’accéder à la description détaillée dans la page ou dans une autre page ;
- Un ou plusieurs passages de texte identifiés par un id et liés par un attribut WAI-ARIA `aria-describedby` sur le modèle `aria-describedby="ID1 ID2 ID3…"`.

Note 1 : Si le support de l’attribut `aria-describedby` fait défaut, il est possible d’utiliser un ou plusieurs passages de texte identifiés par un `id` et liés par un attribut WAI-ARIA `aria-labelledby` à la suite de l’alternative textuelle.
