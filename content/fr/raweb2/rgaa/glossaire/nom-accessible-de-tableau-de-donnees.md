---
title: Nom accessible de tableaux de données
---
Le nom accessible d'un tableau informe sur les données qui y sont présentées. 
 
Le nom accessible d'un tableau est déterminé selon l’ordre de priorité suivant :

1. Passage de texte associé par l’attribut WAI-ARIA `aria-labelledby` ;
2. Sinon, contenu de l’attribut WAI-ARIA `aria-label` ;
3. Sinon, contenu de la balise `<caption>` ;
4. Sinon, contenu de l’attribut `title`.

Note : seule la balise `<caption>` étant complètement supporté par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en œuvre afin d’éviter de nombreuses vérifications dans les différentes combinaisons prévues par l’environnement de test.
