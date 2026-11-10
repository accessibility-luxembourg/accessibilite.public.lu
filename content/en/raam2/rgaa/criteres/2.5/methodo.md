###### iOS

1. Activer l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) ou s’il est présent dans l’application, activer le [mécanisme de remplacement permettant d’afficher les éléments graphiques avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme).
1. Repérer dans l’écran les éléments graphiques porteurs d’information et pour chacun&nbsp;: 
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Repérer dans l’écran les composants interactifs qui peuvent avoir plusieurs états (survolés, focus, activé, coché) et pour chacun&nbsp;:
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée et de l’état (cela peut être la bordure, la couleur d’une icône, la couleur de fond) pour chacun des états&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si un [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) est disponible et qu'il est identifié par un ou des éléments graphiques : 
	1. Désactiver le mécanisme (pour afficher l'écran avec les contrastes en défaut) et vérifier que l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) est désactivée.
	2. Évaluer les éléments graphiques  qui identifient le mécanisme sur les mêmes principes que les étapes précédentes et , vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Inspector](methodologie.md#applications-de-tests)**{lang=en} disponible sur macOS pour réaliser une évaluation rapide des contrastes des écrans. Le logiciel dispose d’une fonctionnalité &laquo;&nbsp;Audit&nbsp;&raquo; qui permet de faire des tests automatiques de certains éléments textes et graphiques des écrans. Cette fonctionnalité ne détecte pas l’ensemble des défauts de contraste, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

###### Android

1. S’il existe dans l’application, activer le [mécanisme de remplacement permettant d’afficher les éléments graphiques avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme).
1. Repérer dans l’écran les éléments graphiques porteurs d’information et pour chacun&nbsp;: 
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée (cela peut être la bordure, la couleur d’une icône, la couleur de fond)&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Repérer dans l’écran les composants interactifs qui peuvent avoir plusieurs états (survolés, focus, activé, coché) et pour chacun&nbsp;:
	- Identifier quelle(s) couleur(s) du composant sont nécessaires à l’identification de la localisation et/ou de l’information véhiculée et de l’état (cela peut être la bordure, la couleur d’une icône, la couleur de fond) pour chacun des états&nbsp;;
	- Identifier les couleurs adjacentes qui ont un impact sur la visibilité de la ou les couleurs du composant.
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan sur le terminal mobile soit&nbsp;:  
	- En [diffusant l’écran du terminal mobile sur l’ordinateur](methodologie.md#diffuser-l-ecran-du-terminal-mobile)&nbsp;;
	- En réalisant des [captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les important sur l’ordinateur).
1. Vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si un [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) est disponible et qu'il est identifié par un ou des éléments graphiques : 
	1. Désactiver le mécanisme (pour afficher l'écran avec les contrastes en défaut).
	2. Évaluer les éléments graphiques  qui identifient le mécanisme sur les mêmes principes que les étapes précédentes et , vérifier que le rapport de contraste entre les couleurs identifiées est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Scanner](methodologie.md#applications-de-tests)** pour réaliser une évaluation rapide des contrastes des écrans. L’application ne détecte pas l’ensemble des défauts de contrastes, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.
