###### iOS et Android

1. Activer l’application et lancer un appel entre les deux terminaux.
1. Vérifier que la qualité de l’activité orale avec l’application web est au moins équivalente à la qualité de l’activité orale lors d’un appel avec un téléphone fixe.
1. Si le test n’est pas satisfaisant (par exemple, mauvaise compréhension de certains mots énoncés par l’interlocuteur, présence de bruits parasites, etc.), vérifier dans la documentation de l’application&nbsp;:
	- la présence d’une référence à l’implémentation de la [recommandation UIT-T G.722](https://www.itu.int/rec/T-REC-G.722/fr)&nbsp;;
	- ou la présence d’une référence à l’utilisation du [codec opus de l’API WebRTC](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs)&nbsp;;
	- ou la présence d’une référence à l’utilisation d’un encodage et décodage dont la fréquence est supérieure ou égale à 7 000 Hz.
1. Sinon, il est recommandé de demander à l’éditeur de l’application de fournir ces détails techniques, notamment en demandant si l’application web implémente par exemple la recommandation UIT-T G.722 ou utilise le codec opus de l’API WebRTC.
1. Si c’est le cas, le test est validé.

Si l’information ne peut être trouvée dans l’interface ou sa documentation, et que l’éditeur de l’application n’est pas en mesure de répondre sur cette caractéristique technique, le critère sera considéré non conforme.
