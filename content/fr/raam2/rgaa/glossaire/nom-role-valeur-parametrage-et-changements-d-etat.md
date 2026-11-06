---
title: Nom, rôle, valeur, paramétrage et changements d’état
---

Un composant doit avoir un rôle et un nom appropriés, ses valeurs, états et paramètres éventuels doivent également être accessibles et correctement transmis aux API d’accessibilité.

Le nom peut être l’intitulé du composant comme l’intitulé d’un bouton par exemple.

La valeur est, par exemple, l’élément sélectionné d’une liste déroulante ou la valeur actuelle d’un curseur.

Le rôle correspond au type d’élément défini dans la spécification de la technologie employée. Le rôle (bouton, lien, champ de saisie par exemple) est généralement restitué par les technologies d’assistance.

Le paramétrage correspond aux informations particulières d’un composant. Par exemple un paramètre qui transmet aux API l’information que le composant contrôle tel ou tel contenu.

Les changements d’état doivent également être mis à disposition. Par exemple, l’utilisation d’une propriété permettant de signaler aux API que le composant est «&nbsp;ouvert&nbsp;» ou «&nbsp;fermé&nbsp;». Note&nbsp;: un état peut également être transmis via le nom, lorsque l’intitulé est changé dynamiquement pour correspondre à l’état de la zone contrôlée notamment.

Ces paramètres ne sont pas obligatoires, mais peuvent être requis s’ils sont indispensables pour rendre le composant accessible. C’est à l’auditeur de considérer les cas où ces paramètres sont indispensables en fonction du contexte lié à l’utilisation du composant.

L’auditeur doit également vérifier que, lorsqu’ils sont présents, ces paramètres sont correctement utilisés.
