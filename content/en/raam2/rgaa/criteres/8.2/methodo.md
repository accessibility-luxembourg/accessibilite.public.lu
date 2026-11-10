###### iOS

1. Accéder aux paramètres de réglages des tailles de caractères de la plateforme&nbsp;: *Réglages > Accessibilité > Affichage et taille du texte > Police plus grande*.
1. Activer le bouton &laquo;&nbsp;Taille de police plus grande&nbsp;&raquo;.
1. Ouvrir le centre de contrôle et activer le [paramètre &laquo;&nbsp;Taille du texte&nbsp;&raquo; (bouton « aA »)](methodologie.md#modifier-la-taille-de-police-sur-ios) pour afficher la jauge des tailles de police. Augmenter la valeur pour atteindre le palier 190%.
1. Si nécessaire, redémarrer l’application pour s’assurer que le paramètre est pris en compte par l’application.
1. Vérifier&nbsp;: 
	- que tous les textes de l’interface ont été agrandis&nbsp;; 
	- que tous les textes de l’interface restent lisibles et les fonctionnalités utilisables&nbsp;; 
	- que des contenus ne disparaissent pas&nbsp;; 
	- si des textes ont disparu, qu’il existe une méthode dans l’écran pour afficher les textes à la demande (par exemple avec l’appui prolongé sur une icône).
1. Si c’est le cas, le critère est validé.

###### Android

1. Accéder aux paramètres de réglages des tailles de caractères de la plateforme&nbsp;: *Paramètres > Accessibilité > Taille de la police* (selon la version de la plateforme, le chemin d’accès peut être différent)&nbsp;; 
1. Augmenter la valeur de la taille de la police (potentiomètre en bas de l’écran) au maximum (voir note technique).
1. Si nécessaire, redémarrer l’application pour s’assurer que le paramètre est pris en compte par l’application.
1. Vérifier&nbsp;: 
	- que tous les textes de l’interface ont été agrandis&nbsp;; 
	- que tous les textes de l’interface restent lisibles et les fonctionnalités utilisables&nbsp;;
	- que des contenus ne disparaissent pas&nbsp;; 
	- si des textes ont disparu, qu’il existe une méthode dans l’écran pour afficher les textes à la demande (par exemple avec l’appui prolongé sur une icône).
1. Si c’est le cas, le critère est validé.

**Note technique**&nbsp;: Avant Android 14, sur les terminaux sans surcouche constructeur, le paramètre de taille de la police ne permet pas d’agrandir à 200% de la taille par défaut. Ce n’est qu’à partir d’Android 14 que cela est rendu possible. Si vous testez sur un terminal Android avec une version antérieure à 14, vous pouvez cumuler le paramètre de taille de la police et le paramètre de la taille de l’affichage pour atteindre un zoom approchant des 200%. À partir d’Android 14, le paramètre de taille de la police vous permet d’atteindre les 200%. À l’inverse, sur certaines versions d’Android, la jauge du potentiomètre peut être différente et offrir des valeurs qui permettent d’atteindre un zoom supérieur à 200%, il faudra alors vérifier que le test ne se fait que pour une valeur de 200%.
