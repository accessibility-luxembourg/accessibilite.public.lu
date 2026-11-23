---
WCAG: 2.2.2
EN301549-V4: 11.2.2.2
APPT: 2.2.2
RAAM1.1: 11.8
---


#### Cas particuliers

Le critère ne s’applique pas lorsque le mouvement, le clignotement ou le défilement :

- a une durée inférieure ou égale à 5 secondes ; 
- concerne un contenu qui n’est pas présenté en parallèle d’autres contenus (par exemple, une publicité animée présentée en plein écran pendant 15 secondes, sans contenus présentés en parallèle) ;
- est un élément [essentiel](#essentiel) au bon déroulement ou à la compréhension d’une fonctionnalité ;
- fait partie intégrante du composant et il n’est pas possible d’en donner le contrôle à l’utilisateur, par exemple une barre de progression (ou <em lang="en">loader</em>) dont la fonction est d’indiquer par un mouvement la progression d’un évènement comme un téléchargement.

#### Notes techniques

Ce critère est soumis au [principe de non-interférence](methodo-test.md#principe-de-non-interference).

Si un clignotement se produit à une fréquence supérieure à 3 fois par seconde, il est considéré comme un flash, le {% crit 11.4 %} est alors également concerné.

L’arrêt ou la mise en pause d’un contenu en mouvement ou clignotant au moyen du survol ou de la prise de focus (par exemple, l’effet est suspendu uniquement pendant la prise de focus) n’est pas considéré comme un procédé conforme. 

Le déclenchement automatique au survol ou à la prise de focus est concerné par le critère.
