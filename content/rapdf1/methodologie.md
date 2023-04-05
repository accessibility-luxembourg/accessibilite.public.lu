Contrairement aux contenus web pour lesquels il est possible d’inspecter le code source afin de déterminer la présence d’éléments ou d’attributs, il est difficile de procéder de la même manière pour les documents au format PDF.
En effet, l'inspection du code d'un document au format PDF ne peut se faire qu'au moyen du logiciel <span lang="en">Acrobat Pro</span> qui est un logiciel propriétaire payant dont l'utilisation nécessite une formation. 

C’est la raison pour laquelle l’approche choisie est de tester la présence de certains éléments au travers d'un outil dédié (PAC 2021) ou directement sur l’interface elle-même au moyen de tests de restitution vocale par l'intermédiaire d'un lecteur d'écran.

Par exemple, lorsque l’interface contient un élément graphique porteur d’information, le critère demande de vérifier qu’une alternative est disponible et pertinente sans donner plus de précisions sur les techniques à employer pour mettre à disposition une alternative à un élément graphique. Afin d’aider pour l’évaluation, chaque critère dispose d’une méthodologie pratique (**qui n’est pas normative**) exposant une méthode possible d’évaluation du critère.

### Ressources d'exemple

[Des exemples (fichier zip, 9,24 Mo)](../files/ressources-rapdf1.zip) sont à votre disposition pour illustrer la méthodologie de test. Chaque critère est notamment illustré par une capture d'écran issue de l'outil PAC 2021.


###  Outils d’évaluation

Pour évaluer les critères du référentiel, les tests se font au moyen de l'outil dédié PAC 2021 ou directement dans l'interface d'<span lang="en">Acrobat Reader</span> à l'exception de la thématique complémentaire «&nbsp;10 - Formulaire interactif&nbsp;» qui nécessite l'utilisation du lecteur d'écran NVDA.

Les sections ci-dessous décrivent les éléments essentiels à connaitre pour installer ces outils.

#### PAC 2021
Procédure d'installation :

1. Télécharger [PAC 2021 - Le vérificateur PDF gratuit](https://pdfua.foundation/fr/pac-2021-le-verificateur-pdf-gratuit/).
2. Le téléchargement est constitué d'une archive au format ZIP qu'il faut désarchiver. Faire un clic droit et choisir «&nbsp;Extraire tout&nbsp;».
3. Cliquer ensuite sur «&nbsp;PAC.exe&nbsp;» pour lancer l'outil.

La manipulation de l'outil pour effectuer les tests est décrite en détail dans la méthodologie de tests associée à chaque critère dans le référentiel.

#### NVDA

Le lecteur NVDA est indispensable pour réaliser les tests des formulaires PDF. Néanmoins, son utilisation est réduite à la seule touche de tabulation et aucune des fonctionnalités avancées n'est nécessaire.

La procédure ci-dessous donne des détails supplémentaires pour s'assurer d'une restitution complète et suffisamment claire, notamment pour le choix de la synthèse vocale et du paramétrage des restitutions.

##### Installation

**Note** : le [site francophone de NVDA](https://www.nvda-fr.org/)
propose toujours la dernière version stable en téléchargement.

1.  Télécharger la [dernière version de NVDA](https://www.nvda-fr.org/cat.php?id=2).
1.  Vous avez le choix d\'installer NVDA sur votre ordinateur,
    d\'en faire une version portable ou d\'exécuter le logiciel sans
    l\'installer. Si vous souhaitez obtenir une version portable de
    NVDA, il vous suffit de créer un dossier et d\'indiquer, lors de
    l\'installation, où les fichiers de la version portable doivent être
    copiés, notamment sur un support USB pour pouvoir l\'exécuter
    sur n\'importe quel ordinateur.
1.  NVDA peut être lancé dès la fin de l\'installation, aucun redémarrage de l’ordinateur n'est nécessaire.

##### Configuration de NVDA pour l’évaluation

###### Dialogue de bienvenue

Lorsque vous démarrez NVDA pour la première fois, une boîte de dialogue
apparaît. Elle vous propose de :

1.  Choisir la disposition du clavier : ordinateur de bureau ou
    portable.
2.  Choisir la touche NVDA : la touche NVDA sert à activer certaines fonctionnalités. Par défaut, il s'agit de la touche <kbd>Insert</kbd>, mais vous pouvez ainsi cocher « Utiliser verrouillage majuscule comme touche NVDA », si vous souhaitez utiliser ces deux touches comme «&nbsp;touche NVDA&nbsp;».
3.  Choisir si NVDA doit démarrer ou non au lancement de Windows
    (uniquement pour la version installée).
4.  Décider d\'afficher ce dialogue de bienvenue à chaque lancement de
    NVDA.

**Note** : Si vous changez d\'avis, vous pouvez retrouver ce dialogue de
bienvenue dans « Aide  \> Dialogue de bienvenue ».

###### Synthèse vocale

Si vous utilisez Windows 10 et supérieur, vous pouvez vous servir des voix du
Narrateur, appelées les voix *OneCore*{lang="en"}. Si vous n\'avez pas
les voix nécessaires, il faut tout d\'abord [télécharger les langues de
synthèse vocale pour
Windows](https://support.office.com/fr-fr/article/T%C3%A9l%C3%A9charger-les-langues-de-synth%C3%A8se-vocale-pour-Windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3).

Une fois que vous aurez installé l\'extension qui vous convient, vous
pourrez changer de synthèse vocale en appuyant simultanément sur
[<kbd>NVDA</kbd> + <kbd>Contrôle</kbd> + <kbd>S</kbd>]. Choisir la synthèse souhaitée à l\'aide de
<kbd>flèche haut</kbd> et <kbd>flèche bas</kbd> et valider par <kbd>Entrée</kbd>.

Pour changer la vitesse de lecture, la langue de la voix et la quantité
d\'informations à prononcer, aller dans le menu NVDA en appuyant
simultanément sur [<kbd>NVDA</kbd> + </kbd>N</kbd>], aller dans « Préférences »,
« Paramètres », puis choisir l\'onglet « Parole ». Effectuer les
réglages et confirmer avec « OK ».

Il est possible de dire à NVDA de prononcer ou non chaque caractère tapé
en appuyant sur [<kbd>NVDA</kbd> + <kbd>2</kbd>] du clavier alphanumérique, de prononcer
ou non chaque mot tapé en appuyant sur [<kbd>NVDA</kbd> + <kbd>3</kbd>] du clavier
alphanumérique.

Vous pouvez modifier les paramètres vocaux, tels que la vitesse, la
hauteur, la langue, etc. comme suit :

-   [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>flèche droite</kbd> et <kbd>flèche gauche</kbd>] permet de
    passer d\'un paramètre à l\'autre.
-   [<kbd>NVDA</kbd> + <kbd>Ctrl</kbd> + <kbd>flèche haut</kbd> et <kbd>flèche bas</kbd>], permet de modifier
    le paramètre (plus vite, moins vite par exemple)

**Note** : ce raccourci concerne l\'utilisation de NVDA en version
clavier de bureau. Pour la version clavier portable, rajouter la touche
<kbd>majuscule</kbd> aux combinaisons évoquées précédemment.

##### Régler les préférences de NVDA pour l\'évaluation

On accède aux réglages de NVDA en tapant [<kbd>NVDA</kbd> + <kbd>n</kbd>] pour ouvrir le
menu NVDA, puis en sélectionnant « Préférences » et « Paramètres ». Les
paramètres sont classés sous forme d\'onglets, comme par exemple,
« général », « parole », « braille », etc.

Théoriquement, il n'y a pas besoin de modifier ces réglages qui
correspondent à la configuration par défaut. Vérifier néanmoins que les
réglages suivants sont activés.

Dans **Parole**, cocher les cases « Changement automatique de langue »
et « Changement automatique de dialecte ».

Dans **Présentation des objets**, cocher « Annoncer les suggestions »,
« Annoncer les bulles d\'aide », « Annoncer la description de
l\'objet », « Annoncer les changements dynamiques de contenu ».

Une fois tous les réglages effectués,
confirmer avec « OK ».


