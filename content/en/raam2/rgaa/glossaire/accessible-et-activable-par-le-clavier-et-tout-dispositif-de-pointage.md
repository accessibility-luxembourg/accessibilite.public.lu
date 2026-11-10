---
title: Accessible et activable par le clavier et tout dispositif de pointage
---

Les dispositifs de pointage en environnement mobile peuvent être, mais ne sont pas limités à&nbsp;: 

- le toucher&nbsp;; 
- la souris&nbsp;;
- les dispositifs d’*eye tracking*{lang=en}&nbsp;; 
- les dispositifs d’[analyse par point](https://support.apple.com/fr-fr/HT201370) sur iOS (ou [recherche par point](https://support.google.com/accessibility/android/answer/6395627?hl=fr) sur Android)&nbsp;; 
- la commande vocale.

Un composant d’interface (lien, bouton, champ de formulaire, etc.) est accessible par tout dispositif de pointage lorsque l’utilisateur &nbsp;: 

- peut prendre le focus sur le composant, indifféremment du dispositif&nbsp;;
- peut enclencher l’action prévue par le composant d’interface par une manipulation propre au dispositif (une certaine touche du clavier, un geste sur l’écran par exemple);

**Attention&nbsp;:** pour certains composants d’interface comme les potentiomètres (*slider*{lang=en}, bouton rotatif), plusieurs interactions sont possibles et donc plusieurs manipulations propres au dispositif peuvent être requises pour interagir avec le composant.  Au clavier, par exemple pour les potentiomètres, les flèches de direction (droite, gauche, haut et bas) permettent d’interagir et de modifier le composant. 

Dans ce référentiel, l’expression «&nbsp;contrôlable par le clavier et tout dispositif de pointage&nbsp;» se rapporte également à la présente définition.

**Note importante&nbsp;:** le recours à certaines technologies peut rendre la gestion du focus trop complexe ou trop instable pour ne reposer que sur la tabulation, les touches de direction et la touche entrée. Dans ce cas, la mise à disposition de raccourcis clavier peut être la seule solution pour rendre le composant utilisable. Le critère ne peut être considéré comme conforme qu’à la condition que les raccourcis clavier utilisés soient correctement documentés, qu’ils soient fonctionnels et qu’ils respectent le [critère 10.4](#critere-10-4).
