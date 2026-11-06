Dans ce critère, on ne contrôle que les éléments qui ne doivent pas être interactifs (les éléments texte, les tableaux par exemple).

###### iOS avec VoiceOver

1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que le rôle restitué par le lecteur d’écran correspond à la nature de l’élément (par exemple, lorsque le lecteur d’écran atteint ce qui apparaît comme un paragraphe et qu’il restitue &laquo;&nbsp;Bouton&nbsp;&raquo;, il s’agit d’une erreur, aucun rôle n’est restitué sur les paragraphes).
1. Si c’est le cas, le critère est validé.

###### iOS Avec *Accessibility Inspector*{lang=en}

1. Connecter le terminal mobile iOS à l’ordinateur avec macOS.
1. Activer le logiciel **Accessibility Inspector**{lang=en}.
1. Choisir le terminal mobile comme source et rester sur l’onglet &laquo;&nbsp;Inspection&nbsp;&raquo; (boutons en haut à droite).
1. Avec les flèches de *Accessibility Inspector*{lang=en}, accéder à chaque élément de l’interface.
1. Vérifier que le rôle disponible dans le paramètre &laquo;&nbsp;*Traits*{lang=en}&nbsp;&raquo; est pertinent au regard de la nature de l’élément associé (par exemple, un simple texte qui aurait un rôle de bouton serait considéré non conforme, il devrait être identifié comme un texte statique).
1. Si c’est le cas, le critère est validé.

###### Android

1. Activer le **lecteur d’écran** et parcourir l’ensemble des éléments de l’écran.
1. Vérifier que le rôle restitué par le lecteur d’écran correspond à la nature de l’élément (par exemple, lorsque le lecteur d’écran atteint ce qui apparaît comme un paragraphe et qu’il restitue &laquo;&nbsp;Bouton&nbsp;&raquo;, il s’agit d’une erreur, aucun rôle n’est restitué sur les paragraphes).
1. Si c’est le cas, le critère est validé.
