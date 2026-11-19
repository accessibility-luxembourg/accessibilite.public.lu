###### iOS et Android

1. Activer l’application et lancer un appel entre les deux terminaux.
2. Vérifier que la qualité de l’activité orale avec l’application est au moins équivalente à la qualité de l’activité orale lors d’un appel avec un téléphone fixe.
3. Si le test n’est pas satisfaisant (par exemple, mauvaise compréhension de certains mots énoncés par l’interlocuteur, présence de bruits parasites, etc.), vérifier dans la documentation de l’application : 
	- la présence d’une référence à l’implémentation de la [recommandation UIT-T G.722](https://www.itu.int/rec/T-REC-G.722/fr) ; 
	- ou la présence d’une référence à l’utilisation du [codec opus de l’API WebRTC](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/WebRTC_codecs) ; 
	- ou la présence d’une référence à l’utilisation d’un encodage et décodage dont la fréquence est comprise entre 250 Hz et 7 000 Hz.
4. Sinon, il est recommandé de demander à l’éditeur de l’application de fournir ces détails techniques, notamment en demandant si l’application implémente par exemple la recommandation UIT-T G.722 ou utilise le codec opus de l’API WebRTC.
5. Si c’est le cas, **le critère est validé**.

Si l’information ne peut être trouvée dans l’interface ou sa documentation, et que l’éditeur de l’application n’est pas en mesure de répondre sur cette caractéristique technique, le critère sera considéré non conforme.