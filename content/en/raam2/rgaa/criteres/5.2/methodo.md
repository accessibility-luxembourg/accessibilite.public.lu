###### iOS avec VoiceOver

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants d'interface (par exemple, bouton, lien) qui ont un intitulé visible et un nom accessible (exceptés les champs de formulaires, évalués dans une thématique dédiée).
1. Accéder à chaque composant en utilisant les gestes du lecteur d’écran.
1. Pour chaque composant d’interface, vérifier que le nom accessible reprend au moins l'intitulé visible.
1. Si c’est le cas, **le critère est validé**.

###### iOS Avec **Accessibility Inspector**{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque composant d'interface ayant un intitulé visible.
1. Pour chacun, vérifier que le nom accessible (paramètre &laquo;&nbsp;Label&nbsp;&raquo;) reprend au moins l'intitulé visible. 
1. Si c’est le cas, **le critère est validé**.

###### iOS Avec le contrôle vocal

1. Activer le contrôle vocal&nbsp;: *Réglages > Accessibilité > Contrôle vocal*.
1. Afficher les libellés des composants interactifs&nbsp;: depuis l’écran de paramètres du contrôle vocal, atteindre le bouton &laquo;&nbsp;Superposition&nbsp;&raquo; et l’activer, puis choisir &laquo;&nbsp;Noms des éléments&nbsp;&raquo;.
1. Dorénavant, lorsque le contrôle vocal sera activé, des infobulles grises apparaîtront au-dessus des éléments interactifs qui ont des labels. À noter que si l’écran possède un très grand nombre de contrôles interactifs, les labels s’afficheront par groupes successifs (un  groupe de label disparaît et un autre apparaît).

Ce qu’il faut savoir&nbsp;: seuls les éléments qui ont des rôles interactifs reconnus par l’API d’accessibilité posséderont un label. Ceci va permettre de repérer rapidement quels éléments utilisables au toucher ne sont pas reconnus par le contrôle vocal et ne sont donc pas des éléments interactifs (ce qui constitue une non-conformité).

Procédure&nbsp;: 

1. Repérer dans l’écran les composants d'interface (par exemple, bouton, lien) qui ont un intitulé visible et un nom accessible (exceptés les champs de formulaires, évalués dans une thématique dédiée).
1. Pour chaque composant d’interface, vérifier que le nom accessible donné par l'infobulle grise du contrôle vocal reprend au moins l'intitulé visible.
1. Si c’est le cas, **le critère est validé**.

###### Android

1. Activer le **lecteur d’écran**.
1. Repérer dans l’écran les composants d'interface (par exemple, bouton, lien) qui ont un intitulé visible et un nom accessible (exceptés les champs de formulaires, évalués dans une thématique dédiée).
1. Accéder à chaque composant en utilisant les gestes du lecteur d’écran.
1. Pour chaque composant d’interface, vérifier que le nom accessible reprend au moins l'intitulé visible.
1. Si c’est le cas, **le critère est validé**.