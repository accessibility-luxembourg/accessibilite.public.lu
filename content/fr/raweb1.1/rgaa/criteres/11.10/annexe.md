---
WCAG:
  - successCriterion: 3.3.1
    title: Error Identification
    level: A
  - successCriterion: 3.3.2
    title: Labels or Instructions
    level: A
Techniques:
  - ARIA1
  - ARIA2
  - ARIA6
  - ARIA9
  - ARIA16
  - ARIA21
  - F81
  - G83
  - G84
  - G85
  - G89
  - G139
  - G184
  - H44
  - H81
  - H89
  - H90
  - SCR18
  - SCR32
Norm:
  - criterion: 9.3.3.1
    title: Error Identification
  - criterion: 9.3.3.2
    title: Labels or Instructions
---

#### Cas particuliers

Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque : 
* le formulaire comporte un seul [champ de formulaire](#champ-de-saisie-de-formulaire)&nbsp;;
* le formulaire comporte uniquement un champ d’identifiant et un champ de mot de passe (dans le cas d’un formulaire d’identification).

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

#### Notes techniques

Le test 11.10.1 et le test 11.10.2 traitent des champs de manière indépendante, néanmoins, il faut garantir que la méthode choisie pour avertir les utilisateurs (champs obligatoires ou champs facultatifs) soit cohérente sur l’ensemble du formulaire.