---
WCAG: 1.4.11
EN301549-V4: 11.1.4.11
APPT: 1.4.11
---

#### Cas particuliers

Le critère ne s'applique pas pour&nbsp;:

- Les composants d’interface inactifs (par exemple, un bouton désactivé) sur lesquels aucune action n’est possible.
- Les composants d’interface gérés par la plateforme et pour lesquels il n’existe pas de méthode simple de développement pour les modifier.
- Les composants d’interface dont la couleur n’est pas nécessaire pour identifier les composant ou leurs états (par exemple, le soulignement des liens qui aurait un rapport de contraste inférieur à 3:1 mais dont le texte a un rapport de contraste de 4.5:1).
- Les [éléments graphiques](#element-graphique) ou parties d’élément graphique non porteur d’information ou ayant une alternative, une description détaillée, une information identique visible dans l’écran).
- Les éléments graphiques ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société.
- Les éléments graphiques ou parties d’élément graphique dont la présentation est [essentielle](#essentiel) à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs).
- Les éléments graphiques ou parties d’élément graphique dynamique dont le contraste peut varier si d’autres éléments sont survolés (ou reçoivent le focus), mais dont le survol ou focus permet de le rendre suffisamment contrasté (par exemple, un diagramme en camembert composé de plusieurs sections suffisamment contrastées, mais lorsque la souris survole une section du camembert, les autres sections ne sont plus suffisamment contrastées, leur opacité est réduite pour mettre en avant la section survolée).

#### Notes techniques

Le critère 2.5 évalue uniquement les contrastes **des éléments non textuels porteurs d'information**. Pour évaluer le contraste d’un texte, même s’il est présent dans un composant d’interface, c’est le {% crit 2.4 %} qui s’applique.
