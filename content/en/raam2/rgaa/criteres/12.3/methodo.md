###### iOS

1. Identifier dans la [documentation](#documentation) de la plateforme les fonctionnalités d’accessibilité mises à disposition des utilisateurs (voir la [documentation concernant les fonctionnalités d’accessibilité fournie par iOS](https://www.apple.com/fr/accessibility/?afid=p238%7CsfxtLHWp4-dc_mtid_2092576239937_pcrid_483515907294_pgrid_110868765821_&cid=wwa-fr-kwgo-features--slid---productid---Accessibility-Accessibility-)).
1. Vérifier que l’application n’empêche pas leur utilisation, par exemple&nbsp;:
	- si l’application implémente des interactions qui déclenchent des fonctionnalités, ces interactions n’empêchent pas le bon fonctionnement des fonctionnalités d’accessibilité de la plateforme comme le lecteur d’écran ou les autres fonctionnalités basées sur le toucher&nbsp;;
	- si l’application embarque une reconnaissance vocale, alors l’utilisation de la commande vocale intégrée à la plateforme n’est pas perturbée&nbsp;; 
	- si l’application implémente des raccourcis clavier, ceux-ci n’utilisent pas des combinaisons de touches déjà employées par la plateforme pour des fonctionnalités d’accessibilité ([VoiceOver peut être utilisé avec un clavier](https://support.apple.com/fr-fr/guide/iphone/iph6c494dc6/ios) par exemple, les raccourcis proposés ne doivent pas interférer)&nbsp;;
	- ou toute autre fonctionnalité de l’application.
1. Si c’est le cas, le critère est validé.

###### Android

1. Identifier dans la [documentation](#documentation) de la plateforme les fonctionnalités d’accessibilité mises à disposition des utilisateurs (voir la [documentation concernant les fonctionnalités d’accessibilité fournie par Android](https://support.google.com/accessibility/android/answer/6006564?hl=fr)).
1. Vérifier que l’application n’empêche pas leur utilisation, par exemple&nbsp;:
	- si l’application implémente des interactions qui déclenchent des fonctionnalités, ces interactions n’empêchent pas le bon fonctionnement des fonctionnalités d’accessibilité de la plateforme comme le lecteur d’écran ou les autres fonctionnalités basées sur le toucher&nbsp;;
	- si l’application embarque une reconnaissance vocale, alors l’utilisation de la commande vocale intégrée à la plateforme n’est pas perturbée&nbsp;;
	- si l’application implémente des raccourcis clavier, ceux-ci n’utilisent pas des combinaisons de touches déjà employées par la plateforme pour des fonctionnalités d’accessibilité ([TalkBack peut être utilisé avec un clavier](https://support.google.com/accessibility/android/answer/6110948?hl=fr&ref_topic=10602074) par exemple, les raccourcis proposés ne doivent pas interférer)&nbsp;; 
	- ou toute autre fonctionnalité de l’application.
1. Si c’est le cas, le critère est validé.
