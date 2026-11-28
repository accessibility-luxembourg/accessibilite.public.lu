###### iOS

1. Rechercher les fonctionnalités d’accessibilité documentées de la plateforme : 
	- dans une documentation dédiée ; 
	- ou depuis la liste des paramètres d’accessibilité personnalisables, directement dans les préférences <em>Réglages > Accessibilité</em>.
1. Activer chacune des fonctionnalités disponibles (si nécessaire, redémarrer l’application pour appliquer les changements). Par exemple : 
	- Texte en gras (<em>Réglages > Accessibilité > Affichage et taille du texte</em>) ;
	- Augmenter le contraste (<em>Réglages > Accessibilité > Affichage et taille du texte</em>, vérifier que les contrôles présentés avec les styles natifs de la plateforme sont présentés avec un contraste augmenté) ;
	- etc. (les paramètres ne se limitent pas à la présentation, la norme évoque la taille des pointeurs par exemple).
1. Pour chacune, vérifier leur application dans l’écran.
1. Si c’est le cas, **le critère est validé**.

###### Android

1. Rechercher les fonctionnalités d’accessibilité documentées de la plateforme : 
	- dans une documentation dédiée ; 
	- ou depuis la liste des paramètres d’accessibilité personnalisables, directement dans les préférences <em>Préférences > Accessibilité</em>.
1. Activer chacune des fonctionnalités disponibles. Par exemple : 
	- Texte en gras (<em>Préférences > Accessibilité > Taille et affichage du texte</em>) ;
	- Texte avec contraste élevé (<em>Préférences > Accessibilité > Taille et affichage du texte</em>,) ;
	- etc. (les paramètres ne se limitent pas à la présentation, la norme évoque la taille des pointeurs par exemple).
1. Pour chacune, vérifier leur application dans l’écran.
1. Si c’est le cas, **le critère est validé**.

Note : Les paramètres d’accessibilité des plateformes sont variables d’un système à l’autre, d’une version à l’autre. Des exemples sont fournis dans la méthodologie, mais ils peuvent ne pas s’appliquer aux terminaux utilisés pour réaliser les tests qui peuvent, à l’inverse, disposer de paramètres non listés, qu’il sera nécessaire de tester.

Si un seul des paramètres testés échoue, le critère est non conforme.