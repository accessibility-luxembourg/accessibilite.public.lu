###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Naviguer sur l’ensemble des éléments de l’écran avec les gestes du lecteur d’écran et vérifier que l’ordre d’accès aux éléments de l’écran (composants interactifs et textes) reste cohérent. Il n’est pas obligatoire que l’ordre suive l’ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent qui ne pose pas de problèmes de compréhension.
1. Repérer dans l’écran les composants (bouton par exemple) qui mettent à jour un contenu (affichage d’élément masqué, mise à jour dynamique de contenus par exemple)&nbsp;: 
	1. activer le composant&nbsp;;
	1. après l’affichage du contenu mis à jour, vérifier que le parcours du lecteur d’écran reste cohérent.
1. Si c’est le cas, **le critère est validé**.

**Exemple de contenu dont l’implémentation pose un problème de compréhension&nbsp;:** une heure d’arrivée et une heure de départ sont affichées à l’écran sous forme de deux blocs d’informations visuelles (heure d’arrivée 17h00&nbsp;; heure de départ 18h00). Le lecteur d’écran atteint séquentiellement &laquo;&nbsp;heure d’arrivée&nbsp;&raquo; puis &laquo;&nbsp;heure de départ&nbsp;&raquo; puis &laquo;&nbsp;17h00&nbsp;&raquo; et enfin &laquo;&nbsp;18h00&nbsp;&raquo;. L’ordre de lecture ne correspond pas à l’ordre visuel, et l’ordre de lecture est problématique puisqu’il ne permet pas de lier les informations entre elles.
