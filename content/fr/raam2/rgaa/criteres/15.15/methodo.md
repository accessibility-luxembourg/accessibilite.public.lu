###### iOS et Android

1. Activer l’application et connecter deux terminaux à une même session.
2. Depuis le premier terminal, dans la fonctionnalité de texte en temps réel, saisir et envoyer :
	- au moins 50 caractères de type Latin-1 (norme ISO-8859-1), par exemple des lettres accentuées et de la ponctuation (à, é, ù, ç, œ, «, ») ;
	- au moins 50 caractères spécifiques à la région d’utilisation de l’application (par exemple des caractères arabes ou cyrilliques) ainsi que du texte écrit de droite à gauche (si ce cas est applicable) ;
	- au moins 15 des émojis disponibles sur le terminal (si possible).
3. Vérifier que tous ces caractères sont affichés correctement sur le second terminal.
4. Envoyer au moins 5 fois un caractère non reconnu (par exemple `U+2140`) et vérifier qu’il est remplacé à chaque fois par le caractère Unicode `U+FFFD` (`�`).
5. Si c’est le cas, **le critère est validé.**