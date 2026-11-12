###### iOS

1. Ouvrir le centre de contrôle et activer le [paramètre « Taille du texte » (bouton « aA »)](../methodologie.md#modifier-la-taille-de-police-sur-ios) pour afficher la jauge des tailles de police. Paramétrer la valeur au palier 100%.
1. Aller dans <em>Réglages > Affichage et luminosité > Affichage</em> et activer « Police plus grande » (il est nécessaire de valider cette option dans certaines versions en activant un bouton en haut de l'écran, le changement de valeur d'option n'applique pas la valeur automatiquement).
1. Dans Safari, accéder à une page permettant de déterminer les caractéristiques d'affichage du terminal (par exemple [Unit converter](https://cssunitconverter.com/viewport-size-screen-resolution-checker)) et relever la largeur (le test devrait être réalisé avec une largeur de 320px, mais certains terminaux ne permettent d'atteindre cette largeur). 
1. Relancer l'application.
1. Repérer dans l'écran si le contenu, les informations et fonctionnalités sont conçues pour défiler verticalement (le sens de lecture du texte est horizontal).
1. Si c'est le cas, afficher l'écran en mode portrait et vérifier : 
	- que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ; 
	- qu'aucune information ni fonctionnalité n'est tronquée.
1. Repérer dans l'écran si le contenu, les informations et fonctionnalités sont conçues pour défiler horizontalement (le sens de lecture du texte est vertical).
1. Si c'est le cas, afficher l'écran en mode paysage et vérifier : 
	- que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ; 
	- qu'aucune information ni fonctionnalité n'est tronquée.
1. Si c’est le cas, **le critère est validé**.
1. Dans la section <em>Réglages > Affichage et luminosité > Affichage</em> activer « Par défaut » pour revenir à une configuration par défaut. 

###### Android


1. Accéder aux paramètres de réglages des tailles de caractères de la plateforme: <em>Paramètres > Accessibilité > Taille de la police </em> (selon la version de la plateforme, le chemin d’accès peut être différent).
1. Activer le bouton « <em>Réinitialiser paramètres</em> » s'il existe, sinon paramétrer la taille de la police à sa valeur par défaut (100%).
1. Ouvrir les [Options pour les développeurs](../methodologie.html#activer-les-options-pour-les-developpeurs-sur-android).
1. Dans la section « <em>Tracé</em> » (ou « <em>Dessin</em> »), accéder à l'option « <em>Plus petite largeur d'écran</em> » et noter la valeur inscrite pour pouvoir rétablir la valeur par défaut après les tests.
1. Repérer dans l'écran si le contenu, les informations et fonctionnalités sont conçues pour défiler verticalement (le sens de lecture du texte est horizontal).
1. Si c'est le cas, dans la section « <em>Plus petite largeur d'écran</em> » saisir la valeur <code>320</code> (si la valeur de 320 est refusée, saisir la plus petite taille acceptée par la plateforme). 
1. Relancer l'application, afficher l'écran en mode portrait et vérifier : 
	- que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ; 
	- qu'aucune information ni fonctionnalité n'est tronquée.
1. Repérer dans l'écran si le contenu, les informations et fonctionnalités sont conçues pour défiler horizontalement (le sens de lecture du texte est vertical).
1. Si c'est le cas, dans la section « <em>Plus petite largeur d'écran</em> » saisir la valeur <code>256</code> (si la valeur de 256 est refusée, saisir la plus petite taille acceptée par la plateforme). 
1. Relancer l'application, afficher l'écran en mode paysage et vérifier : 
	- que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ; 
	- qu'aucune information ni fonctionnalité n'est tronquée.
1. Si c’est le cas, **le critère est validé**.
1. Dans la section « <em>Plus petite largeur d'écran</em> » reporter la valeur initiale pour revenir à une configuration par défaut. 