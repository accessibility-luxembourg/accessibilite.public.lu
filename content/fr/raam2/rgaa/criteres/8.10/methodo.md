###### iOS avec Accessibility Inspector

1. Aller dans <em>Réglages > Affichage et luminosité > Affichage</em> et vérifier que « Par défaut » est sélectionné.
1. Repérer dans l’écran toutes les cibles réactives à une interaction tactile ou avec un dispositif de pointage (par exemple, une souris ou un stylet).
1. Pour chaque cible identifiée, vérifier si elle répond aux descriptions d’un des cas particuliers : 
    - la fonction associée à la cible peut être réalisée grâce à un élément de contrôle différent sur le même écran, et qui satisfait à ce critère ;
    - ou la cible se trouve dans une phrase ou est limitée par la hauteur de ligne du texte non ciblé (par exemple, un lien dans une phrase, un paragraphe ou un item de liste) ; 
    - ou la taille de la cible est déterminée par les styles natifs de la plateforme sans aucune modification par l’auteur (par exemple, une case à cocher native) ; 
    - ou une présentation spécifique de la cible est essentielle ou est légalement requise pour transmettre l’information (par exemple, des marqueurs de localisation sur une carte interactive).
1. Sinon, connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel <em lang="en">Accessibility Inspector</em>.
1. Choisir le terminal mobile comme source ainsi que l’application, afficher l’écran à évaluer et aller sur l’onglet « Audit » (second bouton en haut à droite).
1. Dans la liste des résultats, rechercher les mentions « <em lang="en">Hit area too small</em> » qui signalent la présence d’erreur sur la taille des cibles. Vérifier pour chaque alerte :  
	- qu’elle concerne une cible d’une taille supérieure à 24 px sur 24 px (seules les tailles inférieures sont à considérer comme des non-conformités) ; 
	- ou qu’elle concerne une cible avec une taille réduite (inférieure à 24 px sur 24 px) positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si l’application embarque des vues web : 
	1. Connecter le terminal à l’ordinateur en USB ([débogage distant](../methodo-test.html#)).
	1. Si l’application autorise le debogage distant, sur l’ordinateur, depuis Safari, accéder à la vue web (depuis le menu <em>Développement</em> le terminal doit apparaître avec la liste des vues disponibles à l’inspection).
	1. Utiliser le pointeur de l’inspecteur pour viser chacune des cibles interactives et identifier sa taille en pixels. 
	1. Vérifier : 
		- que la taille de la cible est d’au moins 24 par 24 pixels CSS ; 
		- ou que la cible, si elle est de taille réduite (moins de 24 px sur 24 px) est positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si d’autres cibles non identifiées par les méthodes précédentes semblent problématiques à l’&oelig;il nu, réaliser des contrôles manuels : 
	1. Capturer l’écran à évaluer en [réalisant des captures d’écran](methodo-test.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les [important sur l’ordinateur](methodo-test.md#importer-des-captures-d-ecrans-sur-l-ordinateur)).
	1. Depuis la capture d’écran ouverte dans le logiciel de retouche, activer l’outil de sélection rectangulaire et dessiner un rectangle autour des composants pour lesquels vous souhaitez déterminer la taille.
	1. Vérifier : 
		- que la taille de la cible est d’au moins 24 par 24 pixels CSS ; 
		- ou que la cible, si elle est de taille réduite (moins de 24 px sur 24 px) est positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si c’est le cas, **le critère est validé**.

###### iOS

1. Repérer dans l’écran toutes les cibles réactives à une interaction tactile ou avec un dispositif de pointage (par exemple, une souris ou un stylet).
1. Aller dans <em>Réglages > Affichage et luminosité > Affichage</em> et vérifier que « Par défaut » est sélectionné.
1. Pour chaque cible identifiée, vérifier si elle répond aux descriptions d’un des cas particuliers : 
    - la fonction associée à la cible peut être réalisée grâce à un élément de contrôle différent sur le même écran, et qui satisfait à ce critère ;
    - ou la cible se trouve dans une phrase ou est limitée par la hauteur de ligne du texte non ciblé (par exemple, un lien dans une phrase, un paragraphe ou un item de liste) ; 
    - ou la taille de la cible est déterminée par les styles natifs de la plateforme sans aucune modification par l’auteur (par exemple, une case à cocher native) ; 
    - ou une présentation spécifique de la cible est essentielle ou est légalement requise pour transmettre l’information (par exemple, des marqueurs de localisation sur une carte interactive).
1. Sinon, pour les cibles restantes qui ne correspondent pas aux cas particuliers, continuer l’évaluation (application mobile et web view) : 
	1. Capturer l’écran à évaluer en [réalisant des captures d’écran](methodo-test.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les [important sur l’ordinateur](methodo-test.md#importer-des-captures-d-ecrans-sur-l-ordinateur)).
	1. Depuis la capture d’écran ouverte dans le logiciel de retouche, activer l’outil de sélection rectangulaire et dessiner un rectangle autour des composants pour lesquels vous souhaitez déterminer la taille.
	1. Vérifier : 
		- que la taille de la cible est d’au moins 24 par 24 pixels CSS ; 
		- ou que la cible, si elle est de taille réduite (moins de 24 px sur 24 px) est positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si c’est le cas, **le critère est validé**.

###### Android

1. Repérer dans l’écran toutes les cibles réactives à une interaction avec une interaction tactile ou avec un dispositif de pointage (par exemple, une souris ou un stylet).
1. Pour chaque cible identifiée, vérifier si elle répond aux descriptions d’un des cas particuliers : 
    - la fonction associée à la cible peut être réalisée grâce à un élément de contrôle différent sur le même écran, et qui satisfait à ce critère ;
    - ou la cible se trouve dans une phrase ou est limitée par la hauteur de ligne du texte non ciblé (par exemple, un lien dans une phrase, un paragraphe ou un item de liste) ; 
    - ou la taille de la cible est déterminée par les styles natifs de la plateforme sans aucune modification par l’auteur (par exemple, une case à cocher native) ; 
    - ou une présentation spécifique de la cible est essentielle ou est légalement requise pour transmettre l’information (par exemple, des marqueurs de localisation sur une carte interactive).
1. Sinon, pour les cibles restantes qui ne correspondent pas aux cas particuliers, continuer l’évaluation. 
1. Activer [Accessibility Scanner](methodo-test.html#android-2) et dans les paramètres de l’application, vérifier que le seuil de détection des cibles tactiles est défini à 24dp, sinon le modifier.
1. Depuis l’écran à évaluer, activer le bouton pour lancer Accessibility Scanner (il se présente généralement comme un carré bleu en surimpression de l’écran) et sélectionner « Instantané ».
1. Dans la liste des suggestions, rechercher les mentions « Cible tactile » qui signalent la présence d’erreur sur la taille des cibles. Vérifier pour chaque alerte qu’elle concerne une cible avec une taille réduite (inférieure à 24 px sur 24 px) positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si d’autres cibles non identifiées par Accessibility scanner semblent problématiques à l’&oelig;il nu, réaliser des contrôles manuels : 
	1. Ouvrir les [Options pour les développeurs](../methodo-test.html#activer-les-options-pour-les-developpeurs-sur-android).
	1. Dans la section « <em>Tracé</em> » (ou « <em>Dessin</em> »), activer l’option « <em>Afficher les contours</em> ».
	1. Capturer l’écran à évaluer en [réalisant des captures d’écran](methodo-test.md#realiser-des-captures-d-ecran) des éléments à évaluer (et en les [important sur l’ordinateur](methodo-test.md#importer-des-captures-d-ecrans-sur-l-ordinateur)).
	1. Depuis la capture d’écran ouverte dans le logiciel de retouche, activer l’outil de sélection rectangulaire et dessiner un rectangle autour des composants pour lesquels vous souhaitez déterminer la taille.
	1. Vérifier : 
		- que la taille de la cible est d’au moins 24 par 24 pixels CSS ; 
		- ou que la cible, si elle est de taille réduite (moins de 24 px sur 24 px) est positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si l’application embarque des vues web : 
	1. Connecter le terminal à l’ordinateur en USB ([débogage distant](../methodo-test.html#)).
	1. Sur l’ordinateur, depuis Chrome, accéder à <code>chrome://inspect/#devices</code> et retrouver la vue web à évaluer dans la liste des vues affichées. Activer le bouton « <em>Inspect</em> ».
	1. Utiliser le pointeur de l’inspecteur pour viser chacune des cibles interactives et identifier sa taille en pixels. 
	1. Vérifier : 
		- que la taille de la cible est d’au moins 24 par 24 pixels CSS ; 
		- ou que la cible, si elle est de taille réduite (moins de 24 px sur 24 px) est positionnée de telle sorte que si un cercle de 24 pixels CSS de diamètre est centré sur la [boîte de délimitation](#boite-de-delimitation), le cercle ne croise aucune autre cible ni le cercle d’une autre cible de taille réduite.
1. Si c’est le cas, **le critère est validé**.