---
title: Élément graphique
---

Élément faisant appel à une représentation visuelle telle que des images, des pictogrammes ou des graphiques.

Cet élément peut être composé d’une ou plusieurs parties dont la visibilité est nécessaire à sa compréhension (par exemple chaque point sur chaque ligne d’un graphique de statistiques).

Le rôle « Image » n’est pas restitué de manière uniforme sur tous les environnements.

- TalkBack (Android) : la nature des éléments graphiques n’est pas restituée lorsqu’ils sont intégrés dans une application native, le lecteur d’écran restituera la description si elle est définie mais n’annoncera pas « image ». Par contre, pour les images intégrées dans des [vues web](#vues-web), le lecteur d’écran restitue « Éléments graphiques ».
- VoiceOver (iOS) : que ce soit dans une application native ou dans une vue web, VoiceOver restitue  « Image » pour les images auxquelles il peut accéder.

De manière générale, selon la méthode de développement, il est également possible que le rôle ne soit restitué ni sur TalkBack ni sur VoiceOver. Dès lors, c’est l’observation seule qui permettra de déterminer la nature de l’élément.

Il n’est pas essentiel que le rôle « Image » soit restitué dans la majeure partie des cas. Sauf cas particuliers où l’identification du rôle est essentiel, l’absence de rôle restitué ne peut pas constituer une non-conformité.
