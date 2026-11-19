---
title: Mécanisme de remplacement
---

Un mécanisme de remplacement est un dispositif permettant à l’utilisateur d’accéder à une version de l’application avec certains paramètres (généralement d’affichage) modifiés (par exemple, les couleurs de police et de fond).

Ce mécanisme peut être fourni par la plateforme elle-même ou par l’application. Lorsque la plateforme possède un mécanisme de remplacement robuste, les auteurs doivent privilégier son utilisation à un mécanisme de remplacement propre à l’application.

Les plateformes proposent aux utilisateurs plusieurs mécanismes de remplacement. L’activation de ces mécanismes de remplacement est détectable par les applications qui peuvent en retour servir des informations et présentations particulières.

##### Mécanismes de remplacement disponibles dans iOS

- **Augmenter le contraste** : L’option est disponible depuis le chemin : *Réglages > Accessibilité > Affichage et taille du texte > Augmenter le contraste*. Lorsqu’elle est activée, cette option permet de charger des styles différents qui auraient été définis par l’auteur pour cette option précise afin d’offrir une version plus contrastée aux utilisateurs qui en auraient besoin. De plus, cette option permet d’augmenter le contraste des composants natifs d’iOS comme les boutons *switch*{lang=en}.
- **Différencier sans couleur** : L’option est disponible depuis le chemin : *Réglages > Accessibilité > Affichage et taille du texte > Différencier sans couleur*. Lorsqu’elle est activée, cette option permet de charger des informations visuelles supplémentaires autres que la couleur (par exemple, forme ou taille) qui auraient été définies par l’auteur pour cette option précise afin de mettre en évidence un élément graphique dont la mise en couleur est porteuse d’information (un bouton actif par exemple).

##### Mécanismes de remplacement disponibles dans Android

- « **Texte avec contraste élevé** ») : L’option est disponible depuis le chemin : *Préférences > Accessibilité > Taille et affichage du texte > Texte avec contraste élevé*. 
- « **Texte en gras** ») : L’option est disponible depuis le chemin : *Préférences > Accessibilité > Taille et affichage du texte > Texte en gras*. 

##### Autres mécanismes de remplacement non délivrés par les plateformes

Lorsque la plateforme ne propose pas de mécanisme de remplacement pour certains paramètres, l’application peut en proposer depuis son interface.
