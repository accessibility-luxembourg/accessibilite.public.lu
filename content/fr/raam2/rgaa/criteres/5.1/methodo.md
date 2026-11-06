Le test le plus complet est un test de restitution avec un lecteur d’écran. En effet, tous les éléments à évaluer, s’ils sont présents, sont restitués par les lecteurs d’écran. D’autres tests avec d’autres technologies d’assistance peuvent être nécessaires pour s’assurer de la compatibilité. Plusieurs méthodes d’évaluation plus ou moins complètes vous sont décrites.

Plusieurs méthodes sont disponibles avec iOS, mais seul le test avec VoiceOver est le test qui permet d’évaluer l’ensemble des éléments demandé par le critère.

De plus, il n’existe pas comme pour le web de documentation technique permettant de décrire le fonctionnement et les implémentations attendues (par exemple pour les fenêtres modales ou les potentiomètres). En l’absence d’une telle documentation, afin d’évaluer au plus juste ce type de composant il est conseillé tout de même de se rapprocher&nbsp;: 

- de ce que décrit [la spécification ARIA pour les modèles de conception](https://www.w3.org/TR/wai-aria-practices-1.1/)&nbsp;;
- des [documentations des éditeurs de plateformes dédiées aux développeurs](methodologie.md#ressources-des-editeurs).

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants interactifs (par exemple, bouton, lien).
1. Accéder à chaque composant interactif en utilisant les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- qu’un rôle est restitué (par exemple, bouton, zone de modification, lien)&nbsp;; 
	- que le rôle restitué est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est restitué &laquo;&nbsp;zone de modification&nbsp;&raquo; a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est restitué et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique &laquo;&nbsp;Formulaires&nbsp;&raquo; pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé est restitué&nbsp;;
	- que si le composant a un état perceptible (activé, désactivé, sélectionné), cet état est restitué&nbsp;;
	- que si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état est correctement restitué (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;;
	- que si le composant a une valeur perceptible (valeur d’un potentiomètre), cette valeur est restituée.
1. Si c’est le cas, le critère est validé.

###### iOS Avec **Accessibility Inspector**{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque élément de l’interface.
1. Vérifier&nbsp;: 
	- qu’un rôle est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; (par exemple, *Bouton, Tab, Text Field*{lang=en})&nbsp;; 
	- que le rôle est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est présenté comme *Static text*{lang=en} a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est disponible dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo; et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique &laquo;&nbsp;Formulaires&nbsp;&raquo; pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé défini dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo; contient au moins cet intitulé.
1. Si le composant a un état perceptible (activé, désactivé, sélectionné), vérifier que cet état&nbsp;: 
	- est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo;&nbsp;;
	- ou est indiqué dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo;.
1. Si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;:
	- est disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo;&nbsp;;
	- ou est indiqué dans le paramètre &laquo;&nbsp;Label&nbsp;&raquo;.
1. Si c’est le cas, le critère est validé.

###### iOS Avec le contrôle vocal

L’application de contrôle vocal permet aux utilisateurs de naviguer à la voix. 

Le critère 5.1 dans sa globalité ne peut pas être évalué avec le contrôle vocal, mais une fonctionnalité du contrôle vocal (l’affichage des libellés) permet d’avoir une vue d’ensemble rapide de l’état des composants interactifs.

Le contrôle vocal va permettre de déceler les composants utilisables au toucher qui ne sont pas des composants interactifs détectables par les technologies d’assistance, la présence d’un intitulé et sa pertinence, et la présence du nom visible dans le nom accessible.

1. Activer le contrôle vocal&nbsp;: *Réglages > Accessibilité > Contrôle vocal*.
1. Afficher les libellés des composants interactifs&nbsp;: depuis l’écran de paramètres du contrôle vocal, atteindre le bouton &laquo;&nbsp;Superposition&nbsp;&raquo; et l’activer, puis choisir &laquo;&nbsp;Noms des éléments&nbsp;&raquo;.
1. Dorénavant, lorsque le contrôle vocal sera activé, des infobulles grises apparaîtront au-dessus des éléments interactifs qui ont des labels. À noter que si l’écran possède un très grand nombre de contrôles interactifs, les labels s’afficheront par groupes successifs (un  groupe de label disparaît et un autre apparaît).

Ce qu’il faut savoir&nbsp;: seuls les éléments qui ont des rôles interactifs reconnus par l’API d’accessibilité posséderont un label. Ceci va permettre de repérer rapidement quels éléments utilisables au toucher ne sont pas reconnus par le contrôle vocal et ne sont donc pas des éléments interactifs (ce qui constitue une non-conformité).

Procédure&nbsp;: 

1. Repérer dans l’écran tous les contrôles interactifs (activables au toucher).
1. Activer le contrôle vocal et vérifier que tous les contrôles interactifs identifiés possèdent un label associé (infobulle grise).
1. Si c’est le cas, vérifier que&nbsp;: 
	- le label associé est pertinent&nbsp;;
	- et que le nom visible (s’il en possède un) est compris dans ce label.
1. Si c’est le cas, les conditions sur la pertinence de l’intitulé et la présence du nom visible dans le nom accessible sont remplies.

###### Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants interactifs (par exemple, bouton, lien).
1. Accéder à chaque composant interactif avec les gestes du lecteur d’écran.
1. Vérifier&nbsp;:
	- qu’un rôle est restitué (par exemple, bouton, zone de modification, lien)&nbsp;; 
	- que le rôle restitué est pertinent au regard de la fonctionnalité associée (par exemple, un composant qui déclenche l’ouverture d’une fenêtre modale et qui est restitué &laquo;&nbsp;zone de modification&nbsp;&raquo; a un rôle non pertinent, il devrait être identifié comme un bouton)&nbsp;; 
	- qu’un nom est restitué et que ce nom est pertinent, c’est-à-dire qu’il permet de comprendre la fonction de l’élément (pour les champs de formulaire, on se reportera à la thématique [&laquo;&nbsp;Formulaires&nbsp;&raquo;](#topic-9) pour les évaluer)&nbsp;;
	- que si le composant possède un nom visible (un texte visible), l’intitulé est restitué&nbsp;;
	- que si le composant a un état perceptible (activé, désactivé, sélectionné), cet état est restitué&nbsp;;
	- que si le composant peut changer d’état (par exemple bouton à bascule, potentiomètre), réaliser les actions nécessaires pour tester les différents états et vérifier que chaque changement d’état est correctement restitué (le passage à l’état sélectionné, l’augmentation du potentiomètre)&nbsp;;
	- que si le composant a une valeur perceptible (valeur d’un potentiomètre), cette valeur est restituée.
1. Si c’est le cas, le critère est validé.
