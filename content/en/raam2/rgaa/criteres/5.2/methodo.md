Il s’agit ici de s’assurer que le composant peut être utilisé par le lecteur d’écran, le contrôle vocal, un clavier externe ou tout autre commutateur externe. On peut limiter les tests à quelques dispositifs de pointage puisque les caractéristiques nécessaires (sur les composants interactifs) sont semblables.

Il est néanmoins nécessaire de tester au moins avec le lecteur d’écran et un clavier externe.

Pour le clavier externe, [certains paramétrages sont nécessaires pour que le périphérique soit pleinement fonctionnel](methodologie.md#clavier-externe).

###### iOS et Android

1. Activer le **lecteur d’écran**.
1. Parcourir l’ensemble des composants interactifs.
1. Vérifier&nbsp;: 
	- qu’il peut être atteint avec le lecteur d’écran&nbsp;;
	- qu’il peut être activé avec le lecteur d’écran. 
1. Si c’est un composant modifiable (champ de saisie, case à cocher, potentiomètre), vérifier qu’il peut être modifié avec le lecteur d’écran.
1. Connecter un **clavier externe** (et [paramétrer la navigation au clavier](methodologie.md#clavier-externe)).
1. Parcourir l’ensemble des composants interactifs.
1. Vérifier&nbsp;: 
	- qu’il peut être atteint avec les touches du clavier&nbsp;;
	- qu’il peut être activé avec la touche dédiée du clavier.
1. Si c’est un composant modifiable (champ de saisie, case à cocher, potentiomètre), vérifier qu’il peut être modifié avec les touches du clavier.
1. Si c’est le cas, le critère est validé.
