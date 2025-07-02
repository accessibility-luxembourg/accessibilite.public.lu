---
tags:
- interview
auteur: Dominique Nauroy
---
 <hgroup> <h1><q>Les applications natives deviendront plus populaires</q></h1> 
 <p>Jan Jaap de Groot était de passage au Luxembourg la semaine dernière. Nous avons rencontré cet expert néerlandais reconnu en matière d'accessibilité des applications mobiles.</p>
</hgroup>
<hr>
<div class="intro"> 
    <p>Président de la Fondation Appt, qui partage une grande base de connaissances sur l'accessibilité des applications et propose un manuel dédié, co-fondateur d'Abra, où il développe des applications mobiles accessibles et propose ses services en tant que consultant, expert invité au W3C et facilitateur de la <span lang="en">Mobile Accessibility Task Force</span>, Jan Jaap de Groot a été invité à s'exprimer sur le sujet au GovTech Lab.</p>
</div>
<figure role="group" aria-label="Jan Jaap de Groot. Photo : Dominique Nauroy" class="pic"> <img src="img/2024-11-jjdegroot.jpg" alt="Photo de Jan Jaap de Groot au Service d'information et de presse, en novembre 2024"> <figcaption>Jan Jaap de Groot. Photo : Dominique Nauroy</figcaption>
</figure>
<h2>Quand et pourquoi vous êtes-vous intéressé à l’accessibilité numérique&nbsp;?</h2>
<p>Pour moi, ça a commencé en troisième année à l'université, dans un cours qui s'appelait <span lang="en">Advanced Mobile Development</span>. Dès la sortie d'Android et d'iOS, je me suis intéressé à la création d'applications. Il y a une dizaine d'années, la Fondation pour l'accessibilité aux Pays-Bas a eu l'idée de développer une application accessible aux personnes aveugles. C'était le premier public cible, avant de lancer l'application à tout le monde. L'idée était de proposer un <span lang="en">city trip</span> et, à certains endroits dédiés, grâce au GPS, on avait une description audio du lieu. À cette époque, je ne savais pas qu'il était possible pour les personnes aveugles d'utiliser un <span lang="en">smartphone</span>. C'était mon premier projet pour les personnes handicapées.</p>
<h2>Vous êtes membre de la <span lang="en">Mobile Accessibility Task Force</span> du W3C&nbsp;: quel est son objectif actuel&nbsp;?</h2>
<p>Il est difficile de s'en tenir à la norme européenne EN 301 549 lorsqu'on audite des applications mobiles. C'est la raison pour laquelle nous [à la Fondation Appt] avons rédigé notre propre méthodologie, en essayant d'expliquer étape par étape comment appliquer les critères de réussite aux applications mobiles. Beaucoup de gens utilisent cette méthodologie, mais certains pensent que c'est la vérité alors que, sur certains points, nous donnons simplement notre avis.</p>
<p>Il est difficile de rédiger des directives, surtout si vous souhaitez qu'elles soient utilisées non seulement dans votre entreprise ou dans votre pays, mais aussi ailleurs. Il faut donc, à un moment donné, collaborer. Cela m'a finalement conduit à participer, il y a deux ans et demi, à la <span lang="en">Mobile Accessibility Task Force</span> (MATF), qui fait partie du W3C. J'ai été nommé en janvier à la tête de cette MATF. Dix à vingt experts en accessibilité mobile y contribuent activement et nous prévoyons de publier de nouvelles directives en décembre. Ce sera une première ébauche, mais ce sera tout de même un événement, car peu de choses ont été publiées au cours des dix dernières années. L'objectif serait de créer des directives qui pourraient être utilisées dans le monde entier, afin d'appliquer pleinement les WCAG aux applications.</p>
<h2>Quel est votre point de vue sur l’accessibilité des applications&nbsp;? A-t-elle tendance à s’améliorer au fil du temps&nbsp;?</h2>
<p>Je pense que oui. C'est ce que nous voyons lorsque nous examinons le tableau de bord national où le gouvernement néerlandais suit les déclarations d'accessibilité. Vous pouvez avoir cinq statuts, de A à E. De toute façon, il est assez difficile d'obtenir le statut A, beaucoup restent bloqués dans le statut B. C'est particulièrement vrai pour les applications&nbsp;: vous pouvez avoir des restrictions en fonction de votre framework, surtout si vous développez des applications multiplateformes. Je pense que les applications natives deviendront plus populaires car vous aurez alors un contrôle total et il n'y aura aucune limitation due à des frameworks tiers.</p>
<h2>Quels sont les problèmes les plus courants que vous rencontrez&nbsp;?</h2>
<p>Problèmes liés au critère WCAG intitulé « 4.1.2 Nom, rôle, valeur ». De nombreuses applications n'ont pas de noms accessibles pour les composants interactifs. Vous pouvez avoir un écran de code PIN où les dix boutons (1, 2, 3…) sont simplement rendus par les lecteurs d'écran sous la forme « bouton », « bouton », « bouton », etc. Vous devez deviner quel bouton correspond à quel numéro. C'est le retour que nous recevons des audits et de notre hotline.</p>
<h2>Développer des applications pour les modes portrait et paysage est-il vraiment si compliqué&nbsp;?</h2>
<p>Le mode paysage est clairement l'un des problèmes les plus courants. Mais les utilisateurs ne s'en plaignent jamais. Le mode paysage est beaucoup plus difficile à prendre en charge pour un développeur, surtout si vous le concevez après avoir déjà publié l'application. Par exemple, sur Android, lorsque vous passez en mode paysage, l'application se « recrée », vous devez donc ajouter une certaine logique. Par exemple, l'utilisateur saisit des données, puis il les fait pivoter. Si le développeur n'a pas ajouté la prise en charge de la mise en cache des données saisies, alors elles disparaîssent. Ce n'est pas si difficile si vous le prenez en compte dès le début.</p>
<h2>Vous proposez une solution logicielle permettant d'analyser l'accessibilité d'une application Android ou iOS depuis macOS&nbsp;: combien de critères de la norme européenne peuvent être analysés automatiquement&nbsp;?</h2>
<p>Vous pouvez tester environ 20 % des critères, mais ces critères couvrent peut-être environ 50 % des problèmes. Dans un avenir proche, avec l'IA, vous pourrez peut-être aller un peu plus loin. L'IA pourrait déterminer visuellement si l'écran contient un titre, où il se trouve précisément, puis vérifier si ce titre est correctement codé. Il serait autrement difficile de le faire par programmation.</p>
<h2>Remarquez-vous une différence entre les applications du secteur public et les applications des entreprises privées&nbsp;?</h2>
<p>Cela dépend vraiment&nbsp;: si l'application du secteur public est créée par une société commerciale tierce, elle est généralement pire que s'il s'agit d'une application interne créée par le gouvernement&nbsp;: celles-ci sont généralement bien meilleures que les applications commerciales.</p>
<h2>Prévoyez-vous de continuer à investir votre temps dans l’accessibilité des applications&nbsp;?</h2>
<p>J'aime beaucoup cela. Au début, je ne trouvais pas de personnes partageant les mêmes idées. Très peu de personnes se consacrent exclusivement à la création d'applications mobiles accessibles. Et c'est ce que j'aime avec la MATF&nbsp;: le travail quotidien de ces personnes consiste à travailler sur l'accessibilité des applications mobiles. Nous partageons également nos connaissances dans un groupe Slack, c'est quelque chose qui manquait.</p>
<aside class="more"> 
    <h2>Sur le même sujet</h2> 
    <ul> 
        <li><a href="https://appt.org/en">Base de connaissances Appt</a></li> 
        <li><a href="https://appt.li/slack">Groupe Slack Appt</a></li> 
        <li><a href="https://www.w3.org/WAI/about/groups/task-forces/matf/">Groupe de travail sur l'accessibilité mobile</a></li>
        <li><a href="https://abra.ai/">Logiciel Abra</a></li> 
    </ul>
</aside>