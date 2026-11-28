*Version 2, publiée le xx xxxx 2027*

D’après la [loi luxembourgeoise du 28 mai 2019](http://legilux.public.lu/eli/etat/leg/loi/2019/05/28/a373/jo), tous les sites Internet et applications mobiles d’organismes du secteur public luxembourgeois doivent être accessibles. Le [Service information et presse](https://sip.gouvernement.lu/) est en charge du contrôle de leur accessibilité.

Dans ce cadre, le référentiel d’évaluation de l’accessibilité des applications mobiles a été élaboré pour servir de socle d’évaluation et d’implémentation pour tous les organismes du secteur public concernés par la loi.

La méthode technique du RAAM couvre uniquement les applications mobiles, les sites web sont couverts par le [RAWeb 2](../raweb2/index.html).

Il comporte [XX @@TODO] critères de contrôle. 

Ce référentiel propose un cadre opérationnel de vérification de la conformité aux exigences d’accessibilité. Dès lors, elle permet de vérifier qu’une application mobile est conforme aux critères décrits dans la [norme européenne EN 301 549 (.pdf)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf) pour les sections suivantes&nbsp;: 

- 5 *Generic requirements*{lang=en}
- 6 *ICT supporting real-time bidirectional communication*{lang=en}
- 7 *ICT with video capabilities*{lang=en}
- 10 *Non-web documents*{lang=en}
- 11 *Non-web Software*{lang=en}
- 12 *Information about products and services*{lang=en}

D’autres critères spécifiques de la norme européenne liés à des éléments particuliers ne sont pas transposés dans le présent référentiel. Les entités concernées doivent se référer directement à la norme européenne EN 301 549 V4.1.1 : 

- Les guides électroniques des programmes (GEP) sont concernés par 2 critères (12.4 <span lang="en">Electronic program guides</span> et 12.5 <span lang="en">Electronic program guides display</span>) ;
- Les services de relais ou d’urgence (section 12 <span lang="en">ICT providing relay or emergency service access</span>).

Les critères de la section 11.5 (<span lang="en">Interoperability with keyboards and assistive technology</span>) ne sont pas représentés directement dans le référentiel parce que leurs exigences recouvrent des critères déjà existants : 

- 11.5.2.5 *Object information*{lang=en} : les exigences sont testées dans le critère 11.1.3.1 (*Info and relationships*{lang=en}) et le critère 11.4.1.2 (*Name, role, value*{lang=en}).
- 11.5.2.6 *Row, column, and headers*{lang=en} : les exigences sont testées dans le critère 11.1.3.1 (*Info and relationships*{lang=en}).
- 11.5.2.7 *Values*{lang=en} : les exigences sont testées dans le critère 11.4.1.2 (*Name, role, value*{lang=en}).
- 11.5.2.8 *Label relationships*{lang=en} : les exigences sont testées dans le critère 11.1.3.1 (*Info and relationships*{lang=en}), le critère 11.3.3.2 (*Name, role, value*{lang=en}) et le critère 11.4.1.2 (*Name, role, value*{lang=en}).
- 11.5.2.9 *Parent-child relationships*{lang=en} : les exigences sont testées dans le critère 11.1.3.1 (*Info and relationships*{lang=en}) et le critère 11.4.1.2 (*Name, role, value*{lang=en}).
- 11.5.2.10 *Text*{lang=en} : les exigences sont testées dans le critère 11.1.3.1 (*Info and relationships*{lang=en}) et le critère 11.4.1.2 (*Name, role, value*{lang=en}).
- 11.5.2.11 *List of available actions*{lang=en} : .
- 11.5.2.12 *Execution of available actions*{lang=en} : .
- 11.5.2.13 *Tracking of focus and selection attributes*{lang=en} : .
- 11.5.2.14 *Modification of focus and selection attributes*{lang=en} : .
- 11.5.2.15 *Change notification*{lang=en} : .
- 11.5.2.16 *Modifications of states and properties*{lang=en} : .
- 11.5.2.17 *Modifications of values and text*{lang=en} : .

En cas d’absence de mise à jour du référentiel sous 3 ans pour prendre en compte de nouveaux standards ou spécifications techniques, il est possible de créer ses propres tests en complément de ceux existants.

Ce référentiel est édité par le [Service information et presse](https://sip.gouvernement.lu/) et distribué sous licence [CC-BY 3.0 LU](https://creativecommons.org/licenses/by/3.0/lu/) ([plus d’information sur la licence](../licence.md)). Les sources sont disponibles sur le dépôt GitHub [accessibility-luxembourg/ReferentielAccessibiliteMobile](https://github.com/accessibility-luxembourg/ReferentielAccessibiliteMobile).
En cas de défaut constaté sur ce référentiel, vous pouvez créer un ticket dans ce dépôt. 

### Concernant les niveaux des critères

WCAG propose une classification des critères en 3 niveaux : A, AA ou AAA. L’affectation d’un critère à l’un ou l’autre des niveaux dépend d’[un certain nombre d’éléments documentés par le groupe de travail des WCAG](https://www.w3.org/WAI/WCAG22/Understanding/conformance#levels) et permet de jauger notamment de sa criticité. Ainsi, les critères associés à un niveau A sont réputés être les plus critiques pour les utilisateurs. 

La norme européenne EN 301 549 intègre les critères WCAG de niveau A et AA, mais ne les affiche jamais dans le document officiel.

Cependant, nous pensons que le niveau d’un critère est une information qui peut s’avérer utile pour évaluer la criticité d’un critère et ainsi déterminer des priorités de corrections. 

Le référentiel souhaite garder cette identification pour guider les entités dans leurs démarches de mise en conformité. 

Ainsi, bien que la norme n’en définisse pas pour les critères hors WCAG, il a été fait un travail de répartition des critères de la norme entre les niveaux A et AA. Ces niveaux n’ont donc rien d’officiel et ne sont pas liés à la norme européenne.

### Sommaire

- [Critères et tests](criteres.md)
- [Glossaire](glossaire.md)
- [Méthodologie de test](methodo-test.md)
- [Environnement de test](environnement.md)
- [Notes de révision](notes-revision.md)
- [Références](references.md)

