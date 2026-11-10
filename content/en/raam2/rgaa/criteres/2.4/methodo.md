###### iOS

1. Activer l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) ou s’il est présent dans l’application, activer le [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme).
1. Repérer dans l’écran les textes, les textes contenus dans des éléments graphiques et les textes incrustés dans les vidéos qui pourraient poser des problèmes de contraste.
1. Pour les textes dont [la taille (normale ou agrandie)](#contraste-taille-des-textes) ne peut être appréciée à l’œil nu, vous devrez la mesurer ([voir la section dédiée dans la méthodologie](methodologie.md#evaluer-la-taille-d-un-texte)).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan&nbsp;: 
	- en [diffusant l’écran du terminal mobile](methodologie.md#diffuser-l-ecran-du-terminal-mobile) sur l’ordinateur&nbsp;;
	- ou en [réalisant des captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les [important sur l’ordinateur](methodologie.md#importer-des-captures-d-ecrans-sur-l-ordinateur)).
1. Pour les textes problématiques identifiés précédemment, vérifier&nbsp;:
	- Pour les textes dont la taille est de moins de 24 px sans effet de graisse, ou de moins de 18,5 px avec effet de graisse, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes dont la taille est de 24 px ou plus sans effet de graisse, ou de 18,5 px ou plus avec effet de graisse, que la valeur de contraste est de 3:1 au moins.
1. Si un [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) est disponible et qu'il est identifié par du texte : 
	1. Désactiver le mécanisme (pour afficher l'écran avec les contrastes en défaut) et vérifier que l’option **Augmenter le contraste** (*Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*) est désactivée.
	2. Évaluer les textes qui identifient le mécanisme sur les mêmes principes que les étapes précédentes et , vérifier&nbsp;:
		- Pour les textes dont la taille est de moins de 24 px sans effet de graisse, ou de moins de 18,5 px avec effet de graisse, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
		- Pour les textes dont la taille est de 24 px ou plus sans effet de graisse, ou de 18,5 px ou plus avec effet de graisse, que la valeur de contraste est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Inspector](methodologie.md#applications-de-tests)**{lang=en} disponible sur macOS pour réaliser une évaluation rapide des contrastes des écrans. Le logiciel dispose d’une fonctionnalité &laquo;&nbsp;Audit&nbsp;&raquo; qui permet de faire des tests automatiques de certains éléments textes et graphiques des écrans. Cette fonctionnalité ne détecte pas l’ensemble des défauts de contraste, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.

###### Android

1. S’il existe dans l’application, activer le [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme).
1. Repérer dans l’écran les textes, les textes contenus dans des éléments graphiques et les textes incrustés dans les vidéos qui pourraient poser des problèmes de contraste.
1. Pour les textes dont [la taille (normale ou agrandie)](#contraste-taille-des-textes) ne peut être appréciée à l’œil nu, vous devrez la mesurer ([voir la section dédiée dans la méthodologie](methodologie.md#evaluer-la-taille-d-un-texte)).
1. Activer le logiciel **Colour Contrast Analyser**{lang=en} sur l’ordinateur et capturer les couleurs d’avant-plan et d’arrière-plan&nbsp;: 
	- en [diffusant l’écran du terminal mobile](methodologie.md#diffuser-l-ecran-du-terminal-mobile) sur l’ordinateur&nbsp;;
	- ou en [réalisant des captures d’écran](methodologie.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les [important sur l’ordinateur](methodologie.md#importer-des-captures-d-ecrans-sur-l-ordinateur)).
1. Pour les textes problématiques identifiés précédemment, vérifier&nbsp;:
	- Pour les textes dont la taille est de moins de 24 px sans effet de graisse, ou de moins de 18,5 px avec effet de graisse, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
	- Pour les textes dont la taille est de 24 px ou plus sans effet de graisse, ou de 18,5 px ou plus avec effet de graisse, que la valeur de contraste est de 3:1 au moins.
1. Si un [mécanisme de remplacement permettant d’afficher l’application avec un rapport de contraste suffisant](#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme) est disponible et qu'il est identifié par du texte : 
	1. Désactiver le mécanisme (pour afficher l'écran avec les contrastes en défaut.
	2. Évaluer les textes qui identifient le mécanisme sur les mêmes principes que les étapes précédentes et , vérifier&nbsp;:
		- Pour les textes dont la taille est de moins de 24 px sans effet de graisse, ou de moins de 18,5 px avec effet de graisse, que la valeur de contraste est de 4.5:1, au moins&nbsp;; 
		- Pour les textes dont la taille est de 24 px ou plus sans effet de graisse, ou de 18,5 px ou plus avec effet de graisse, que la valeur de contraste est de 3:1 au moins.
1. Si c’est le cas, le critère est validé.

Note&nbsp;: Il est possible d’utiliser l’application **[Accessibility Scanner](methodologie.md#applications-de-tests)** pour réaliser une évaluation rapide des contrastes des écrans. L’application ne détecte pas l’ensemble des défauts de contrastes, des tests complémentaires suivant la méthodologie décrite ci-avant seront nécessaires.
