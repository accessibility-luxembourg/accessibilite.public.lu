###### iOS

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer sur l’ensemble des éléments de l’écran en utilisant les touches du clavier dédiées (par défaut dans iOS, ce sont les touches <kbd>Tab</kbd> et les flèches de direction qui sont utilisées pour naviguer dans les contenus).
1. Vérifier que&nbsp;:
	 - à partir de la position courante, l’élément focusable suivant ou précédent est atteignable avec les touches de navigation du clavier&nbsp;;
	 - l’élément possédant actuellement le focus propose une méthode utilisable au clavier (par exemple, un raccourci clavier) permettant d’atteindre l’élément suivant ou précédent.
1. Si c’est le cas, le critère est validé.

**Note&nbsp;:** Certains éléments complexes, souvent gérés par la plateforme, peuvent faire appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d’une partie du composant à l’autre.
Le test sur le piège au clavier se limite alors à vérifier que le composant peut être atteint et qu’il est possible de passer au composant suivant ou revenir au composant précédent. On ne vérifie pas l’utilisation même du composant dans ce critère.

###### Android

1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Naviguer sur l’ensemble des éléments de l’écran en utilisant les touches du clavier (les touches ou la combinaison de touches qui aura été associée dans *Switch Access*{lang=en} pour les paramètres &laquo;&nbsp;Passer à l’option suivante&nbsp;&raquo; et &laquo;&nbsp;Passer à l’option précédente&nbsp;&raquo;).
1. Vérifier que&nbsp;:
	 - à partir de la position courante, l’élément focusable suivant ou précédent est atteignable avec la touche de navigation du clavier&nbsp;;
	 - l’élément possédant actuellement le focus propose une méthode utilisable au clavier (par exemple, un raccourci clavier) permettant d’atteindre l’élément suivant ou précédent.
1. Si c’est le cas, le critère est validé.

**Note&nbsp;:** Certains éléments complexes, souvent gérés par la plateforme, peuvent faire appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d’une partie du composant à l’autre.
Le test sur le piège au clavier se limite alors à vérifier que le composant peut être atteint et qu’il est possible de passer au composant suivant ou revenir au composant précédent. On ne vérifie pas l’utilisation même du composant dans ce critère.
