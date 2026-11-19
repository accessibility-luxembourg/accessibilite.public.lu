###### iOS et Android

1. Repérer dans l’écran les champs de formulaire qui attendent des informations déjà saisies ou fournies à l’utilisateur lors d’une étape précédente du processus.
2. Pour chaque champ de formulaire, vérifier que :
	- L’information est préremplie. Par exemple : 
		- Dans le cadre d’un processus en deux étapes pour la création d’un compte, la première étape permet d’obtenir un numéro d’identification une fois que l’utilisateur a saisi une adresse électronique. La deuxième étape consiste à créer un profil utilisateur. Le numéro d’identification et l’adresse électronique sont préremplis.
		- L’information saisie ne disparaît pas après une erreur. Remplir le formulaire avec des données susceptibles de provoquer des erreurs (par exemple une adresse électronique mal formée), soumettre le formulaire et vérifier que les données saisies par l’utilisateur sont toutes conservées.
	- Ou que l’information peut être sélectionnée depuis l’écran. Par exemple : 
		- remplir un champ de saisie avec une valeur disponible dans un menu déroulant ;
		- sélectionner du texte sur l’écran et le copier dans un champ de saisie ;
		- cocher une case pour remplir les champs de saisie avec les mêmes valeurs que celles saisies précédemment (par exemple, l’adresse de facturation est la même que l’adresse de livraison).
3. Si c’est le cas, **le critère est validé.**

