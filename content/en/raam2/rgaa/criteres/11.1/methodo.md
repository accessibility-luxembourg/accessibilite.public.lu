###### iOS et Android

1. Repérer dans l’écran : 
	- les rafraîchissements initiés pour un écran complet ; 
	- les redirections automatiques initiées avec un délai ; 
	- les procédés limitant le temps d’une session (par exemple, une session connectée, un panier d’achats sur un site de vente en ligne).
1. Pour chacun, vérifier que :
	- Soit la présence d’un mécanisme permet à l’utilisateur de stopper et de relancer le rafraîchissement, la redirection ou la limite de session (par exemple, un bouton à bascule permettant à l’utilisateur d’activer ou désactiver).
	- Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter : 
		-  la limite de temps entre deux rafraîchissements de dix fois, au moins ;
		-  la limite de temps avant la redirection automatique de dix fois, au moins) ;
		-  la limite de temps de la session de dix fois, au moins (par exemple, une liste déroulante avec des valeurs de temps de connexion disponibles).
	- Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, de la redirection ou de la limite de session, laisse au moins 20 secondes à l’utilisateur pour augmenter la limite de temps par une action simple, au moins dix fois (par exemple, l’ouverture d’une modale avec un bouton permettant d’augmenter la limite de temps).
1. Si c’est le cas, **le critère est validé**.