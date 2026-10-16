---
EN301549-V4: 9.2.5.3
WCAG: 2.5.3
RAWEB1.1: 
  - 7.1.3[C2]
Techniques:
 - G208
 - G211
 - F96
 - F111
---

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
- Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, &laquo;&nbsp;B&nbsp;&raquo; au niveau d’un éditeur de texte aura pour nom accessible &laquo;&nbsp;Mettre en gras&nbsp;&raquo;, le signe &laquo;&nbsp;&gt;&nbsp;&raquo; en fonction du contexte signifiera &laquo;&nbsp;Suivant&nbsp;&raquo; ou &laquo;&nbsp;Lancer la vidéo&nbsp;&raquo;). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : &laquo;&nbsp;A&nbsp;&gt;&nbsp;B&nbsp;&raquo;). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (&laquo;&nbsp;A plus grand que B&nbsp;&raquo; ou &laquo;&nbsp;A supérieur à B&nbsp;&raquo;).
