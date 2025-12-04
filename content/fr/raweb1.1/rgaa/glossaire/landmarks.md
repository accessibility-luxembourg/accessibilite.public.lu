---
title: <em lang="en">Landmarks</em>
---

WAI-ARIA propose des rôles permettant d’identifier des repères de navigation. Ces rôles sont très profitables aux utilisateurs de lecteurs d’écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation rapide.

Les rôles doivent être définis dans le document en fonction de la nature de la zone (grâce à l’attribut WAI-ARIA `role` ou une balise HTML ayant un rôle implicite). WAI-ARIA désigne 8 landmarks. 

5 landmarks sont exploités dans la structure du document (critère 9.2) : 
- `banner`
- `contentinfo`
- `main`
- `navigation`
- `search`

3 landmarks sont disponibles pour identifier d’autres régions : 
- `form` (`<form>` ou `role="form"`)
- `complementary` (`<aside>` ou `role="complementary"`)
- `region` (`<section>` ou `role="region"`).

Les landmarks `form` et `region` ne sont identifiés comme repère de navigation que s’ils possèdent un nom accessible.

Voir la section [Landmark Roles](https://www.w3.org/TR/wai-aria-1.1/#landmark_roles) dans la documentation.

Note 1 : compte-tenu du support variable des landmarks `form`, `complementary` et `region`, s’ils sont utilisés dans la page en tant que repères de navigation, ils devront faire l’objet de tests de navigation et de restitution sur l’environnement de test.

Note 2 : Il n’est pas obligatoire d’identifier des repères de navigation autre que ceux requis par le critère 9.2 si le contexte ne le nécessite pas. Par exemple, il n’est pas obligatoire d’identifier tous les formulaires avec un élément `form`, mais seulement si un contexte de navigation plus ou moins complexe (applicatif par exemple) nécessiterait d’offrir plus de repères de navigation que ne le réclame déjà le critère 9.2. 
