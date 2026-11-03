---
title: Nom accessible de regroupement
RAWEB1.1: legende
---

Le nom accessible d'un regroupement informe sur la nature de la liaison d'un groupe de champs. 

Dans le cas d’un regroupement réalisé avec  `<fieldset>`, le nom accessible du regroupement est déterminé selon l’ordre de priorité suivant : 

 - Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
- Sinon, contenu de la balise `<legend>`.

Il est également possible de créer des regroupements avec le rôle WAI-ARIA `group` ou `radiogroup`, dans ce cas le nom accessible du regroupement est déterminé selon l’ordre de priorité suivant :

 - Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
- Sinon, contenu de l’attribut WAI-ARIA `aria-label`.

Note 1 : Les regroupements de champs peuvent utiliser d’autres méthodes qui associent l’information du regroupement directement dans le nom accessible ou dans la description accessible des champs. Dans ce cas, le regroupement de champs devient inutile puisque les noms accessibles des champs sont suffisamment pertinents.

Note 2 : Lorsque le formulaire est constitué d’un seul bloc d’informations de même nature (l’identité et l’adresse de l’utilisateur, par exemple) ou d’un champ unique (un moteur de recherche, par exemple), le regroupement des champs n’est pas obligatoire.