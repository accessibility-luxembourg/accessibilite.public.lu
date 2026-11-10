###### iOS et Android

1. Vérifier que l’application permet la communication écrite en temps réel.
1. Si c’est le cas, activer l’application et la fonctionnalité de communication écrite sur deux terminaux distincts et les connecter à une même session.
1. Saisir du texte sur le premier terminal et observer son apparition sur le second terminal. L’apparition sur le second terminal doit être instantanée (inférieure à une demi-seconde). Selon le paramétrage de la fonctionnalité, chaque caractère n’est pas envoyé individuellement. En effet, si la fonctionnalité de communication écrite en temps réel implémente une prédiction de mots, c’est lorsque le mot désiré sera sélectionné qu’il sera envoyé, et non pas lors de la saisie des premiers caractères servant à déclencher l’affichage de suggestion. Un test par observation simple peut être suffisant pour constater l’apparition instantanée sur le terminal qui reçoit le message écrit. 
1. Si c’est le cas, le critère est validé.
