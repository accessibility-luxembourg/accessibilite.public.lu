---
title: Couleur contiguë
RAWEB1.1: couleur-d-arriere-plan-contigue-et-couleur-contigue
---

Couleur directement en contact avec les couleurs de l'élément portant l'information, cela peut être la couleur d’arrière-plan ou toute autre couleur en jonction directe.

**Exemple :** dans un panneau de « sens interdit », le rouge du panneau est la couleur contiguë au trait blanc au centre du panneau.

Dans le cadre du critère [@@TODO numérotation], toutes les couleurs ne sont pas à évaluer. Il est essentiel d’évaluer les [éléments non textuels](#contenu-non-textuel) qui portent une information :

- **Les mises en couleur porteuses d’information** (toutes les mises en couleur ne sont pas porteuses d’information) :
	- Par exemple, dans le panneau de navigation d’une application, les boutons de navigation ont une couleur de fond grise, mais le bouton de l’écran actif a une couleur de fond verte. Il est nécessaire de vérifier que la couleur verte en jonction directe avec la couleur de fond grise a un rapport de contraste de 3:1 au moins.
- **Les mises en couleur permettant d’identifier la localisation d’un élément ou les zones interactives**, par exemple :
	- La bordure d’un champ de formulaire, si celle-ci est le seul moyen d’identifier la localisation de l’interaction, doit avoir une couleur qui présente un rapport de contraste de 3:1 au moins avec la couleur contigüe, généralement la couleur de fond ;
	- Il est essentiel ici d’évaluer le rapport de contraste de la bordure de ces composants avec les couleurs contigües (généralement la couleur de fond) mais également d’évaluer le rapport de contraste de ces composants lorsqu’ils sont sélectionnés. Il faut évaluer si l’élément visuel utilisé pour signifier la sélection a un rapport de contraste suffisant.
- **Les couleurs des autres éléments non textuels porteurs d’information** (éléments graphiques) :
	- Un chevron est positionné à droite de l’item sélectionné dans une liste d’items, le rapport de contraste entre la couleur du chevron et les couleurs contigües (généralement la couleur de fond) doit être de 3:1 au moins.

La couleur de fond d’un bouton d’envoi de formulaire par exemple (« Envoyer ») n’a pas à être contrastée avec le fond de l’écran. En effet, la localisation du bouton se fait par le texte, qui doit déjà respecter les contraintes de contrastes des textes (critère 3.2[@@TODO numérotation]). La taille du bouton et ses rebords ne sont pas considérés comme des informations qui répondent de ce critère.

**Note 1 :** dans le cas de la présence d’un dégradé, c’est la couleur contigüe la moins contrastée du dégradé qui sera à considérer comme la couleur contigüe.

**Note 2 :** dans le cas de la présence de plusieurs couleurs, c’est l’ensemble des couleurs qui seront à considérer comme couleurs contigües.