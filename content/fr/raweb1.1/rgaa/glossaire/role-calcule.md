---
title: Rôle calculé

---

Le rôle ARIA d’un élément peut-être calculé de deux façons : 
- sur la base du rôle implicite de l’élément. Par exemple, l’élément `<header>` a le rôle implicite de `banner`, l’élément `<nav>` a le rôle implicite de `navigation`, etc. 
- sur la base du rôle explicite par la valeur de l’attribut WAI-ARIA `role` sur la balise ouvrante : `<div role="banner">`.

Lorsque le référentiel indique qu’un élément &laquo;&nbsp;a le rôle calculé de&nbsp;&raquo;, ce peut-être du fait d’un rôle implicite ou explicite.

Par exemple : &laquo;&nbsp;L’élément a un rôle calculé de `banner`&nbsp;&raquo; indique que l’élément peut-être un élément HTML5 `<header>` ou tout autre élément possédant l’attribut WAI-ARIA `role="banner"`. À l’inverse, s’il est indiqué &laquo;&nbsp;L’élément est pourvu d’un attribut WAI-ARIA `role="banner"`&nbsp;&raquo;, alors c’est bien l’attribut `role` uniquement qui est attendu.

Voir la documentation : [Implicit WAI-ARIA semantics](https://www.w3.org/TR/wai-aria-1.2/#implicit_semantics).

Ci-dessous la liste des rôles implicites WAI-ARIA des éléments HTML5 permettant de structurer le document : 
- `<footer>` : `role="contentinfo"`
- `<header>` : `role="banner"`
- `<main>` : `role="main"`
- `<nav>` : `role="navigation"`
- `<search>` : `role="search"`

Note : Pour `<footer>` et `<header>`, le rôle ne sera calculé que s’ils ne sont pas inclus dans un élément ayant le rôle calculé de  `article`, `aside`, `main`, `nav` ou `section`.