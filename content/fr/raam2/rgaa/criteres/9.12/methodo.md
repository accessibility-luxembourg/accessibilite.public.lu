###### iOS 

1. Accéder à chacun des champs de formulaire (taper sur le champ de saisie par exemple pour activer l’apparition des contrôles de saisie).
1. Pour chaque champ qui attend une donnée personnelle sur l’utilisateur, vérifier que les [contrôles natifs adéquats de la plateforme](#controles-natifs-de-la-plateforme) sont présentés à l’utilisateur. Par exemple&nbsp;:
	- pour un champ demandant la saisie de l’adresse *e-mail*{lang=en} de l’utilisateur, le clavier présenté possède le caractère @ sans que l’utilisateur ait de manipulation de clavier à réaliser (comme afficher le clavier secondaire)&nbsp;;
	- pour un champ demandant la saisie d’un numéro de téléphone, le pavé numérique est présenté directement à l’utilisateur&nbsp;;
	- etc.
1. Vérifier que le formulaire est compatible avec un mécanisme de remplissage automatique. Par exemple, iOS permet un remplissage automatique des champs sur la base des dernières valeurs saisies en fonction de leur nature (adresse postale, ville, nom, prénom, adresse *e-mail*{lang=en}). Vérifier que des valeurs pertinentes sont suggérées sur ces champs.
1. Si c’est le cas, le critère est validé.

###### Android 

1. Accéder à chacun des champs de formulaire (taper sur le champ de saisie par exemple pour activer l’apparition des contrôles de saisie).
1. Pour chaque champ qui attend une donnée personnelle sur l’utilisateur, vérifier que les [contrôles natifs adéquats de la plateforme](#controles-natifs-de-la-plateforme) sont présentés à l’utilisateur. Par exemple&nbsp;:
	- pour un champ demandant la saisie de l’adresse *e-mail*{lang=en} de l’utilisateur, le clavier présenté possède le caractère @ sans que l’utilisateur ait de manipulation de clavier à réaliser (comme afficher le clavier secondaire)&nbsp;;
	- pour un champ demandant la saisie d’un numéro de téléphone, le pavé numérique est présenté directement à l’utilisateur&nbsp;;
	- etc.
1. Vérifier que le formulaire est compatible avec un mécanisme de remplissage automatique. Par exemple, Google fournit un système de remplissage automatique sur Android. Aller dans *Paramètres > Système > Langues et saisie > Paramètres avancés > Service de saisie automatique* (selon la version de la plateforme, le chemin d’accès peut être différent) pour activer et paramétrer les données.
1. Sur le formulaire de l’application, vérifier que le système vous propose une option pour remplir automatiquement avec les données renseignées.
1. Si c’est le cas, le critère est validé.
