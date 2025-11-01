---
title: Contenu visible
---

Un contenu est visible lorsqu’il est apparent sur la page web, au chargement de la page ou après l’activation d’un composant d’interface (par exemple, l’affichage d’une fenêtre modale ou d’un sous-menu).

Le {% test ’10.2.1’ %} demande à ce que le contenu visible soit accessible aux technologies d’assistance. Cela signifie que tout contenu visible qui serait implémenté au travers d’une méthode qui nativement ne dispose pas de moyen pour fournir d’alternative devrait être accompagné d’une méthode secondaire pour fournir cette alternative. Par exemple, une image porteuse d’information en propriété de fond CSS invalide ce test, car l’information est visible, mais elle n’est pas accessible aux technologies d’assistance et il n’existe aucune méthode pour définir une alternative à une image de fond CSS (contrairement à l’élément `img` et l’attribut `alt` par exemple). En revanche, une image porteuse d’information en propriété de fond CSS, mais accompagnée d’un texte caché valide ce test, car l’information est alors accessible aux technologies d’assistance.