---
WCAG: 2.5.3
EN301549-V4: 9.2.5.3
RAWEB1.1: 11.2.5
Techniques:
  - F96
  - F111
  - G208
  - G211
---

#### Cas particuliers

Le critère ne s'applique pas lorsque :

- La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence.
- Le texte de l’[intitulé visible](#intitule-visible) sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, &laquo; B &raquo; au niveau d’un éditeur de texte aura pour nom accessible &laquo; Mettre en gras &raquo;, le signe &laquo; &gt; &raquo; en fonction du contexte signifiera &laquo; Suivant &raquo; ou &laquo; Lancer la vidéo &raquo;). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l'intitulé visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir de nom accessible (ex. : &laquo; A &gt; B &raquo;). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (&laquo; A plus grand que B &raquo; ou &laquo; A supérieur à B &raquo;).

[[@@TODO à remapper par la suite]] Ce cas particulier s’applique également au test 11.9.2.