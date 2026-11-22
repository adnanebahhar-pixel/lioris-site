window.DIAGS = window.DIAGS || {};
window.DIAGS["ses"] = {
 "cle": "ses",
 "matiere": "SES",
 "titre": "Test de SES",
 "nom": "Diagnostic de SES",
 "commun": null,
 "niveaux": [
  [
   "S",
   "Seconde"
  ],
  [
   "P",
   "Première"
  ],
  [
   "T",
   "Terminale"
  ]
 ],
 "classes": [
  [
   "Seconde",
   "S"
  ],
  [
   "Première, spécialité SES",
   "P"
  ],
  [
   "Terminale, spécialité SES",
   "T"
  ]
 ],
 "duree": "35 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-ses-lycee.md",
 "blocs": {
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "Une boulangerie vend pour 200 000 € de produits dans l'année. Elle a acheté pour 80 000 € de farine, d'électricité et d'autres consommations intermédiaires. Elle a versé 70 000 € de salaires. Sa valeur ajoutée vaut",
     "ok": "120 000 €",
     "bad": [
      "200 000 €",
      "50 000 €",
      "280 000 €"
     ],
     "err": [
      "confond valeur ajoutée et chiffre d'affaires",
      "retire aussi les salaires : confond valeur ajoutée et bénéfice",
      "additionne les consommations intermédiaires au lieu de les retirer"
     ]
    },
    {
     "id": "S2",
     "q": "Le PIB d'un pays correspond à",
     "ok": "la somme des valeurs ajoutées produites sur son territoire en un an",
     "bad": [
      "la somme des chiffres d'affaires de toutes ses entreprises",
      "la richesse totale accumulée par ses habitants",
      "les recettes de l'État sur l'année"
     ],
     "err": [
      "additionne les chiffres d'affaires, ce qui compte plusieurs fois les mêmes produits",
      "confond ce qui est produit en un an et le patrimoine accumulé",
      "confond le PIB et le budget de l'État"
     ]
    },
    {
     "id": "S3",
     "q": "Un hôpital public soigne des patients sans leur faire payer le coût réel des soins. Sa production est",
     "ok": "non marchande : le service est fourni gratuitement ou à un prix très inférieur à son coût",
     "bad": [
      "nulle : il ne vend rien, donc il ne produit rien",
      "marchande, car les médecins touchent un salaire",
      "marchande, car l'hôpital achète du matériel"
     ],
     "err": [
      "croit que seul ce qui se vend est une production",
      "confond payer des salaires et vendre sa production",
      "confond les achats de l'hôpital et la vente de son service"
     ]
    },
    {
     "id": "S4",
     "q": "Dans le modèle simple du marché, le prix d'un bien se trouve au-dessus du prix d'équilibre. Alors",
     "ok": "la quantité offerte dépasse la quantité demandée, et le prix tend à baisser",
     "bad": [
      "la quantité demandée dépasse la quantité offerte, et le prix tend à monter",
      "l'offre est égale à la demande, car un marché est toujours à l'équilibre",
      "la quantité offerte dépasse la quantité demandée, et le prix tend à monter encore"
     ],
     "err": [
      "inverse l'excès d'offre et l'excès de demande",
      "croit que tout prix est un prix d'équilibre",
      "voit l'excès d'offre mais inverse le sens de l'ajustement du prix"
     ]
    },
    {
     "id": "S5",
     "q": "Une mauvaise récolte réduit l'offre de fraises. La demande ne change pas : elle diminue quand le prix monte, comme avant. Dans le modèle simple du marché",
     "ok": "le prix d'équilibre monte et la quantité échangée baisse",
     "bad": [
      "le prix d'équilibre baisse et la quantité échangée baisse",
      "le prix d'équilibre monte et la quantité échangée augmente",
      "rien ne change, puisque la demande n'a pas changé"
     ],
     "err": [
      "croit qu'une offre plus rare fait baisser le prix",
      "croit qu'un prix plus haut fait échanger plus, sans regarder la demande",
      "croit que seule la demande fixe le prix"
     ]
    },
    {
     "id": "S6",
     "q": "La socialisation, c'est",
     "ok": "le processus par lequel une personne apprend et intériorise, tout au long de sa vie, les façons d'agir et de penser de sa société",
     "bad": [
      "le fait d'avoir beaucoup d'amis et de sortir souvent",
      "l'éducation donnée par les parents pendant l'enfance, et rien d'autre",
      "le passage d'une entreprise privée sous le contrôle de l'État"
     ],
     "err": [
      "confond socialisation et sociabilité",
      "réduit la socialisation à la famille et à l'enfance",
      "prend le mot au sens de nationalisation"
     ]
    },
    {
     "id": "S7",
     "q": "Des enquêtes montrent que les parents n'offrent pas, en moyenne, les mêmes jouets aux filles et aux garçons. C'est un exemple de",
     "ok": "socialisation différenciée selon le genre",
     "bad": [
      "socialisation différenciée selon le milieu social",
      "différence de naissance entre filles et garçons",
      "socialisation par le groupe des pairs"
     ],
     "err": [
      "se trompe de variable : milieu social au lieu du genre",
      "explique par la naissance un comportement des parents",
      "se trompe d'instance : les pairs au lieu de la famille"
     ]
    },
    {
     "id": "S8",
     "q": "Sous la Cinquième République, qui vote la loi ?",
     "ok": "le Parlement : l'Assemblée nationale et le Sénat",
     "bad": [
      "le Gouvernement",
      "le Président de la République",
      "le Conseil constitutionnel"
     ],
     "err": [
      "confond exécuter la loi et la voter",
      "confond promulguer la loi et la voter",
      "confond contrôler la loi et la voter"
     ]
    },
    {
     "id": "S9",
     "q": "Une assemblée de 100 sièges est élue au scrutin proportionnel, dans une seule circonscription et sans seuil minimal. Un parti obtient 20 % des voix. Il obtient environ",
     "ok": "20 sièges",
     "bad": [
      "0 siège, car il n'est pas arrivé en tête",
      "100 sièges s'il est arrivé en tête, 0 sinon",
      "un nombre de sièges sans rapport avec son nombre de voix"
     ],
     "err": [
      "applique la logique du scrutin majoritaire",
      "croit que le premier emporte tous les sièges",
      "ne relie pas les voix et les sièges"
     ]
    },
    {
     "id": "S10",
     "q": "Le prix d'un abonnement passe de 40 € à 50 €. Son taux de variation est de",
     "ok": "+25 %",
     "bad": [
      "+20 %",
      "+10 %",
      "+125 %"
     ],
     "err": [
      "divise par la valeur d'arrivée au lieu de la valeur de départ",
      "prend l'écart en euros pour un pourcentage",
      "confond taux de variation et indice"
     ]
    },
    {
     "id": "S11",
     "q": "Dans une classe de 30 élèves, 12 font de la musique. La proportion d'élèves qui font de la musique est de",
     "ok": "40 %",
     "bad": [
      "12 %",
      "2,5 %",
      "18 %"
     ],
     "err": [
      "recopie l'effectif comme un pourcentage",
      "inverse le quotient",
      "compte ceux qui ne font pas de musique"
     ]
    },
    {
     "id": "S12",
     "q": "Un prix est multiplié par 1,5. Il a augmenté de",
     "ok": "50 %",
     "bad": [
      "150 %",
      "1,5 %",
      "5 %"
     ],
     "err": [
      "confond coefficient multiplicateur et taux de variation",
      "lit le coefficient comme un pourcentage",
      "ne garde que la décimale du coefficient"
     ]
    },
    {
     "id": "S13",
     "q": "La production d'une usine a pour indice 100 en 2020 et 120 en 2025. Cela signifie que",
     "ok": "la production a augmenté de 20 % entre 2020 et 2025",
     "bad": [
      "l'usine a produit 120 unités en 2025",
      "la production a augmenté de 120 % entre 2020 et 2025",
      "la production a augmenté de 20 % chaque année"
     ],
     "err": [
      "confond un indice et une quantité produite",
      "lit l'indice comme un taux de variation",
      "confond la variation totale et la variation annuelle"
     ]
    },
    {
     "id": "S14",
     "q": "Une enquête interroge 200 lycéens : 120 filles et 80 garçons. 30 filles et 40 garçons disent jouer aux jeux vidéo tous les jours. Quelle phrase est juste ?",
     "ok": "50 % des garçons interrogés jouent tous les jours",
     "bad": [
      "40 % des garçons interrogés jouent tous les jours",
      "20 % des garçons interrogés jouent tous les jours",
      "50 % de ceux qui jouent tous les jours sont des garçons"
     ],
     "err": [
      "recopie l'effectif comme un pourcentage",
      "divise par le total des lycéens au lieu du nombre de garçons",
      "inverse le sens de lecture : part des garçons parmi les joueurs"
     ]
    },
    {
     "id": "S15",
     "q": "En un an, le salaire de Léa augmente de 2 % et les prix augmentent de 5 %. Son pouvoir d'achat",
     "ok": "baisse",
     "bad": [
      "augmente de 2 %",
      "augmente de 7 %",
      "ne change pas, puisque son salaire a augmenté"
     ],
     "err": [
      "confond salaire nominal et pouvoir d'achat",
      "additionne la hausse du salaire et celle des prix",
      "croit qu'une hausse de salaire protège toujours de la hausse des prix"
     ]
    },
    {
     "id": "S16",
     "q": "On observe que les jours où il se vend le plus de glaces sont aussi ceux où il y a le plus de coups de soleil. Que peut-on en conclure ?",
     "ok": "Les deux varient ensemble, mais une troisième variable, l'ensoleillement, peut expliquer les deux",
     "bad": [
      "Manger des glaces provoque des coups de soleil",
      "Les coups de soleil donnent envie de manger des glaces",
      "Les deux chiffres n'ont aucun rapport : c'est un pur hasard"
     ],
     "err": [
      "confond corrélation et causalité",
      "même confusion, en inversant le sens",
      "croit qu'un lien sans causalité n'est pas un lien"
     ]
    },
    {
     "id": "S17",
     "q": "En sciences économiques et sociales, un modèle est",
     "ok": "une représentation simplifiée de la réalité, qui sert à raisonner",
     "bad": [
      "une description complète et exacte de la réalité",
      "la situation idéale qu'il faudrait atteindre",
      "l'opinion personnelle d'un économiste"
     ],
     "err": [
      "croit qu'un modèle doit tout décrire",
      "confond modèle et idéal à atteindre",
      "confond modèle et opinion"
     ]
    },
    {
     "id": "S18",
     "q": "L'État crée une taxe sur un produit, payée par les vendeurs. La demande diminue quand le prix monte. Dans le modèle simple du marché, quel enchaînement est juste ?",
     "ok": "Le coût des vendeurs augmente, l'offre diminue, le prix d'équilibre monte, la quantité échangée baisse",
     "bad": [
      "Le revenu des acheteurs diminue, la demande diminue, le prix d'équilibre baisse",
      "Le prix monte, les vendeurs gagnent plus, ils offrent plus, la quantité échangée augmente",
      "Le prix monte exactement du montant de la taxe et la quantité échangée ne change pas"
     ],
     "err": [
      "fait passer la taxe par la demande au lieu de l'offre",
      "oublie que la taxe est reversée à l'État",
      "oublie que les acheteurs réagissent à la hausse du prix"
     ]
    },
    {
     "id": "S19",
     "q": "Un document indique : « Part du logement dans les dépenses des ménages, pays X, 2024 : 27 % ». Quelle phrase lit correctement ce chiffre ?",
     "ok": "En 2024, dans le pays X, sur 100 € dépensés par les ménages, 27 € vont en moyenne au logement",
     "bad": [
      "En 2024, dans le pays X, 27 % des ménages ont des dépenses de logement",
      "En 2024, dans le pays X, les dépenses de logement ont augmenté de 27 %",
      "En 2024, dans le pays X, les ménages dépensent 27 € par mois pour se loger"
     ],
     "err": [
      "se trompe d'ensemble : compte des ménages au lieu de répartir des dépenses",
      "confond une proportion et un taux de variation",
      "lit un pourcentage comme un montant en euros"
     ]
    },
    {
     "id": "S20",
     "q": "Dans un devoir, on te demande : « À l'aide du document, montrez que le diplôme protège du chômage. » La meilleure réponse",
     "ok": "affirme l'idée, compare deux chiffres du document, puis explique le lien",
     "bad": [
      "recopie tous les chiffres du document, sans commentaire",
      "récite le cours sur le diplôme sans citer le document",
      "donne ton avis personnel sur l'utilité des études"
     ],
     "err": [
      "recopie le document sans argumenter",
      "ignore le document demandé",
      "confond argumenter et donner son opinion"
     ]
    }
   ],
   "redaction": "Données inventées pour l'exercice. Dans un pays, en 2024, le taux de chômage est de 16 % pour les actifs sans diplôme, de 9 % pour les actifs qui ont le baccalauréat et de 5 % pour les diplômés de l'enseignement supérieur long.\n1. Écris une phrase qui donne le sens du chiffre 16 %.\n2. En cinq à huit lignes, montre que le risque de chômage diminue quand le niveau de diplôme augmente. Compare au moins deux chiffres par un calcul simple, puis propose une explication.",
   "corrige": "En 2024, dans ce pays, sur 100 actifs sans diplôme, 16 sont au chômage. Le taux de chômage baisse à chaque niveau de diplôme : 16 %, puis 9 %, puis 5 %. Entre les actifs sans diplôme et les diplômés du supérieur long, l'écart est de 11 points de pourcentage : le taux est 3,2 fois plus élevé pour les premiers (16 divisé par 5). Explication possible : le diplôme signale des compétences recherchées par les employeurs, il donne accès à plus d'emplois, et le manque de qualification est une cause de chômage. Limite à signaler : le document montre un lien, pas toutes ses causes."
  },
  "P": {
   "titre": "élève de première, spécialité SES",
   "questions": [
    {
     "id": "P1",
     "q": "Sur un marché en concurrence parfaite, on dit que les entreprises sont « preneuses de prix ». Cela veut dire que",
     "ok": "aucune ne peut influencer seule le prix : il s'impose à elle",
     "bad": [
      "chacune fixe librement son prix",
      "l'État fixe le prix à leur place",
      "elles s'entendent entre elles pour fixer le prix"
     ],
     "err": [
      "confond preneur de prix et faiseur de prix",
      "confond marché concurrentiel et prix fixé par l'État",
      "confond concurrence et entente"
     ]
    },
    {
     "id": "P2",
     "q": "Le prix du café baisse et rien d'autre ne change. Sur le graphique du marché du café",
     "ok": "on se déplace le long de la courbe de demande : la quantité demandée augmente",
     "bad": [
      "la courbe de demande se déplace vers la droite",
      "la courbe de demande se déplace vers la gauche",
      "la quantité demandée ne change pas : elle ne dépend que du revenu"
     ],
     "err": [
      "confond déplacement le long de la courbe et déplacement de la courbe",
      "même confusion, avec le sens inversé",
      "ignore le lien entre le prix et la quantité demandée"
     ]
    },
    {
     "id": "P3",
     "q": "Laquelle de ces situations est une externalité négative ?",
     "ok": "Une usine rejette des fumées qui nuisent à la santé des riverains, sans les dédommager",
     "bad": [
      "Une entreprise augmente ses prix et ses clients paient plus cher",
      "Les abeilles d'un apiculteur pollinisent gratuitement le verger voisin",
      "Une entreprise fait faillite et licencie ses salariés"
     ],
     "err": [
      "confond externalité et effet qui passe par le prix",
      "confond externalité négative et externalité positive",
      "prend toute conséquence négative pour une externalité"
     ]
    },
    {
     "id": "P4",
     "q": "Une personne très bien assurée contre le vol fait moins attention à fermer sa porte. C'est un exemple",
     "ok": "d'aléa moral",
     "bad": [
      "de sélection adverse",
      "d'externalité positive",
      "de pouvoir de marché"
     ],
     "err": [
      "confond aléa moral et sélection adverse",
      "confond asymétrie d'information et externalité",
      "confond asymétrie d'information et manque de concurrence"
     ]
    },
    {
     "id": "P5",
     "q": "Une banque commerciale accorde un crédit de 10 000 € à une entreprise. Que se passe-t-il ?",
     "ok": "Elle crée de la monnaie : elle inscrit 10 000 € sur le compte de l'entreprise",
     "bad": [
      "Elle prête l'épargne d'autres clients, dont les comptes diminuent d'autant",
      "Elle doit d'abord faire imprimer 10 000 € de billets",
      "C'est la banque centrale qui verse la somme à l'entreprise"
     ],
     "err": [
      "croit que les banques ne prêtent que l'épargne déposée",
      "réduit la monnaie aux billets",
      "attribue à la banque centrale le rôle des banques commerciales"
     ]
    },
    {
     "id": "P6",
     "q": "Une entreprise paie une nouvelle machine avec ses bénéfices mis en réserve. C'est",
     "ok": "de l'autofinancement",
     "bad": [
      "un financement externe par emprunt bancaire",
      "un financement externe par émission d'actions",
      "un financement externe par émission d'obligations"
     ],
     "err": [
      "confond financement interne et crédit",
      "confond bénéfices réinvestis et apport de nouveaux actionnaires",
      "confond bénéfices réinvestis et dette sur le marché financier"
     ]
    },
    {
     "id": "P7",
     "q": "Pendant ses premiers mois à l'hôpital, une jeune infirmière apprend les façons de faire et de parler de son métier. C'est",
     "ok": "une socialisation secondaire, de type professionnel",
     "bad": [
      "une socialisation primaire, puisqu'elle apprend des choses nouvelles",
      "un contrôle social formel",
      "une mobilité sociale"
     ],
     "err": [
      "croit que « primaire » veut dire « premier apprentissage d'une chose »",
      "confond socialisation et contrôle social",
      "confond apprendre un rôle et changer de position sociale"
     ]
    },
    {
     "id": "P8",
     "q": "Chez Émile Durkheim, la solidarité « organique » repose sur",
     "ok": "la complémentarité d'individus différents, liée à la division du travail",
     "bad": [
      "la ressemblance d'individus qui partagent les mêmes croyances",
      "les liens du sang à l'intérieur de la famille",
      "les aides versées par l'État aux plus pauvres"
     ],
     "err": [
      "inverse solidarité organique et solidarité mécanique",
      "prend « organique » au sens biologique",
      "confond solidarité au sens sociologique et aide sociale"
     ]
    },
    {
     "id": "P9",
     "q": "Une personne double toute la file d'attente à la boulangerie. Aucune loi ne l'interdit. C'est un acte",
     "ok": "déviant mais pas délinquant : il transgresse une norme sociale, pas une norme juridique",
     "bad": [
      "délinquant, puisqu'il transgresse une règle",
      "ni déviant ni délinquant, puisqu'aucune loi ne l'interdit",
      "délinquant mais pas déviant"
     ],
     "err": [
      "confond déviance et délinquance",
      "réduit les normes aux lois",
      "inverse l'emboîtement : toute délinquance est une déviance"
     ]
    },
    {
     "id": "P10",
     "q": "Lors d'une élection, le taux d'abstention rapporte le nombre d'abstentionnistes",
     "ok": "au nombre d'inscrits sur les listes électorales",
     "bad": [
      "au nombre de personnes en âge de voter",
      "au nombre de votants",
      "au nombre de suffrages exprimés"
     ],
     "err": [
      "oublie que les non-inscrits ne sont pas comptés",
      "prend les votants comme base de calcul",
      "confond le calcul de l'abstention et celui des scores"
     ]
    },
    {
     "id": "P11",
     "q": "Un prix augmente de 10 %, puis encore de 10 %. Au total, il a augmenté de",
     "ok": "21 %",
     "bad": [
      "20 %",
      "100 %",
      "10 %"
     ],
     "err": [
      "additionne les taux au lieu de multiplier les coefficients",
      "multiplie les taux entre eux",
      "ne compte qu'une des deux hausses"
     ]
    },
    {
     "id": "P12",
     "q": "Le taux de chômage d'un pays passe de 8 % à 10 %. Il augmente",
     "ok": "de 2 points de pourcentage, soit de 25 %",
     "bad": [
      "de 2 %",
      "de 20 %",
      "de 25 points de pourcentage"
     ],
     "err": [
      "confond points de pourcentage et pourcentage",
      "divise par la valeur d'arrivée",
      "inverse les deux unités"
     ]
    },
    {
     "id": "P13",
     "q": "Un livret rapporte 3 % par an. La même année, les prix augmentent de 4 %. Le taux d'intérêt réel est d'environ",
     "ok": "−1 %",
     "bad": [
      "7 %",
      "3 %",
      "1 %"
     ],
     "err": [
      "additionne le taux d'intérêt et l'inflation",
      "confond taux nominal et taux réel",
      "soustrait dans le mauvais sens"
     ]
    },
    {
     "id": "P14",
     "q": "Données inventées. À une élection, 40 % des inscrits de 18 à 24 ans se sont abstenus, contre 15 % des inscrits de 65 ans et plus. Quelle phrase est juste ?",
     "ok": "Sur 100 inscrits de 18 à 24 ans, 40 se sont abstenus",
     "bad": [
      "40 % des abstentionnistes ont de 18 à 24 ans",
      "Les 18 à 24 ans se sont abstenus 25 % de plus que les 65 ans et plus",
      "Il y a plus d'abstentionnistes de 18 à 24 ans que de 65 ans et plus"
     ],
     "err": [
      "inverse le sens de lecture du tableau",
      "confond points de pourcentage et pourcentage",
      "passe d'un taux à un effectif sans connaître la taille des groupes"
     ]
    },
    {
     "id": "P15",
     "q": "Dans une entreprise, le salaire médian est de 2 000 € et le salaire moyen de 2 600 €. Quelle phrase est juste ?",
     "ok": "La moitié des salariés gagne 2 000 € ou moins",
     "bad": [
      "La plupart des salariés gagnent 2 600 €",
      "La moitié des salariés gagne 2 600 € ou moins",
      "Le salaire le plus bas est de 2 000 €"
     ],
     "err": [
      "confond moyenne et valeur la plus fréquente",
      "prête à la moyenne la propriété de la médiane",
      "confond médiane et minimum"
     ]
    },
    {
     "id": "P16",
     "q": "Les familles qui possèdent beaucoup de livres ont, en moyenne, des enfants qui réussissent mieux à l'école. Avant de dire que les livres causent la réussite, il faut",
     "ok": "vérifier si une autre variable, comme le diplôme des parents, n'explique pas les deux à la fois",
     "bad": [
      "ne rien vérifier : la corrélation suffit",
      "trouver un élève qui réussit sans livres : un seul cas contraire annule le lien",
      "interroger plus de familles : avec un grand échantillon, la corrélation devient une causalité"
     ],
     "err": [
      "confond corrélation et causalité",
      "confond une tendance statistique et une loi sans exception",
      "croit que la taille de l'échantillon prouve la cause"
     ]
    },
    {
     "id": "P17",
     "q": "La banque centrale baisse son taux directeur. Quel enchaînement est attendu ?",
     "ok": "Le crédit coûte moins cher, ménages et entreprises empruntent plus, la demande augmente, l'activité est soutenue et les prix sont poussés à la hausse",
     "bad": [
      "Le crédit coûte moins cher, ménages et entreprises empruntent moins, la demande baisse",
      "L'épargne rapporte plus, les ménages épargnent plus, la demande baisse",
      "Tous les prix baissent aussitôt, car le taux directeur est le prix des biens"
     ],
     "err": [
      "inverse le lien entre taux d'intérêt et crédit",
      "inverse l'effet de la baisse sur la rémunération de l'épargne",
      "confond taux d'intérêt et niveau des prix"
     ]
    },
    {
     "id": "P18",
     "q": "Sur un marché de voitures d'occasion, les acheteurs ne savent pas distinguer les bonnes voitures des mauvaises. Quel enchaînement décrit la sélection adverse ?",
     "ok": "Ils ne proposent qu'un prix moyen, les vendeurs de bonnes voitures se retirent, la qualité moyenne baisse, le marché peut disparaître",
     "bad": [
      "Ils paient plus cher par prudence, donc les bonnes voitures chassent les mauvaises",
      "Les vendeurs de mauvaises voitures se retirent d'eux-mêmes du marché",
      "Le prix s'ajuste et révèle la qualité de chaque voiture : le marché reste efficace"
     ],
     "err": [
      "inverse le mécanisme",
      "ignore l'intérêt des vendeurs de mauvaises voitures à rester",
      "croit que le prix transmet toujours toute l'information"
     ]
    },
    {
     "id": "P19",
     "q": "Dans l'étude d'un document statistique, une bonne phrase de lecture d'un chiffre contient",
     "ok": "la date, le lieu, la population concernée, la valeur avec son unité et ce qu'elle mesure",
     "bad": [
      "le chiffre seul, puisque le correcteur a le document",
      "le chiffre et ton avis sur ce chiffre",
      "le titre du document recopié"
     ],
     "err": [
      "donne un chiffre sans lui donner de sens",
      "confond lire une donnée et la juger",
      "confond présenter le document et lire une donnée"
     ]
    },
    {
     "id": "P20",
     "q": "On te demande un raisonnement appuyé sur un dossier documentaire. Qu'est-ce qui est attendu ?",
     "ok": "Une argumentation construite avec tes connaissances, qui s'appuie sur les documents pour prouver",
     "bad": [
      "Un résumé de chaque document, l'un après l'autre",
      "Le cours récité, sans les documents",
      "Une critique de la fiabilité de chaque document"
     ],
     "err": [
      "paraphrase les documents au lieu d'argumenter",
      "ignore le dossier",
      "confond exploiter un document et le critiquer"
     ]
    }
   ],
   "redaction": "Données inventées pour l'exercice. Le prix de la farine payé par les boulangers passe de 0,50 € à 0,60 € le kilo.\n1. Calcule le taux de variation du prix de la farine.\n2. En six à huit lignes, explique par un enchaînement logique l'effet attendu sur le marché du pain, dans le modèle du marché concurrentiel. Utilise les mots : coût de production, offre, prix d'équilibre, quantité échangée.",
   "corrige": "Taux de variation : (0,60 − 0,50) / 0,50 = 0,20, soit une hausse de 20 %. La farine est une consommation intermédiaire des boulangers : sa hausse augmente leur coût de production. Pour chaque prix du pain, ils sont prêts à en offrir moins : la courbe d'offre se déplace vers la gauche. À l'ancien prix, la quantité demandée dépasse la quantité offerte, donc le prix monte. Quand le prix monte, la quantité demandée diminue : on se déplace le long de la courbe de demande, qui ne bouge pas. Le nouvel équilibre a un prix d'équilibre plus élevé et une quantité échangée plus faible."
  },
  "T": {
   "titre": "élève de terminale, spécialité SES",
   "questions": [
    {
     "id": "T1",
     "q": "La croissance économique se mesure par",
     "ok": "le taux de variation du PIB en volume",
     "bad": [
      "le taux de variation du PIB en valeur",
      "le niveau du PIB par habitant",
      "la hausse des prix"
     ],
     "err": [
      "oublie de retirer la hausse des prix",
      "confond un niveau et une variation",
      "confond croissance et inflation"
     ]
    },
    {
     "id": "T2",
     "q": "La production en volume d'un pays augmente de 3 %, alors que les quantités de travail et de capital utilisées n'ont pas changé. Cette croissance vient",
     "ok": "de la hausse de la productivité globale des facteurs, liée notamment au progrès technique",
     "bad": [
      "de l'accumulation du capital",
      "de la hausse de la population active",
      "de la hausse des prix"
     ],
     "err": [
      "confond hausse de la productivité et hausse de la quantité de capital",
      "confond hausse de la productivité et hausse de la quantité de travail",
      "confond volume et valeur"
     ]
    },
    {
     "id": "T3",
     "q": "Le pays A est plus efficace que le pays B dans la production de tous les biens. Selon la théorie des avantages comparatifs",
     "ok": "les deux pays peuvent gagner à l'échange si chacun se spécialise là où son avantage est le plus grand ou son désavantage le plus petit",
     "bad": [
      "le pays A n'a aucun intérêt à échanger avec le pays B",
      "le pays B ne peut rien exporter",
      "le pays B gagne à l'échange exactement ce que perd le pays A"
     ],
     "err": [
      "confond avantage absolu et avantage comparatif, côté pays A",
      "même confusion, côté pays B",
      "croit que l'échange est un jeu à somme nulle"
     ]
    },
    {
     "id": "T4",
     "q": "Au sens du Bureau international du travail, un chômeur est une personne en âge de travailler qui",
     "ok": "est sans emploi, est disponible pour travailler et recherche activement un emploi",
     "bad": [
      "est inscrite à France Travail",
      "est sans emploi, qu'elle en cherche un ou non",
      "travaille à temps partiel et voudrait travailler plus"
     ],
     "err": [
      "confond la définition du BIT et l'inscription administrative",
      "confond chômeur et inactif",
      "confond chômage et sous-emploi"
     ]
    },
    {
     "id": "T5",
     "q": "Pendant une récession, la demande globale chute. Les entreprises réduisent leur production et licencient. Ce chômage est dit",
     "ok": "conjoncturel",
     "bad": [
      "structurel, lié au coût du travail",
      "structurel, lié à un problème d'appariement entre les offres et les demandes d'emploi",
      "de sous-emploi"
     ],
     "err": [
      "confond chômage conjoncturel et chômage structurel lié au coût du travail",
      "confond chômage conjoncturel et problème d'appariement",
      "confond chômage et sous-emploi"
     ]
    },
    {
     "id": "T6",
     "q": "Dans l'analyse de Karl Marx, les classes sociales se définissent d'abord par",
     "ok": "la place dans les rapports de production : posséder ou non les moyens de production",
     "bad": [
      "le niveau de revenu",
      "le prestige social",
      "le niveau de diplôme"
     ],
     "err": [
      "confond classe sociale au sens de Marx et tranche de revenu",
      "confond avec les groupes de statut de Max Weber",
      "prend le diplôme pour le critère de classe"
     ]
    },
    {
     "id": "T7",
     "q": "Un fils d'ouvrier devient cadre. C'est un cas de",
     "ok": "mobilité sociale intergénérationnelle ascendante",
     "bad": [
      "mobilité professionnelle au cours de sa propre carrière",
      "reproduction sociale",
      "déclassement"
     ],
     "err": [
      "confond mobilité entre générations et mobilité en cours de carrière",
      "confond mobilité et reproduction",
      "inverse le sens de la mobilité"
     ]
    },
    {
     "id": "T8",
     "q": "Selon le paradoxe de l'action collective, un individu rationnel peut ne pas participer à une grève qui défend pourtant ses intérêts, parce que",
     "ok": "il profitera du résultat même sans participer, et il évite ainsi le coût de la participation",
     "bad": [
      "il est en désaccord avec les revendications",
      "il ignore que la grève a lieu",
      "une action collective n'obtient jamais rien"
     ],
     "err": [
      "confond passager clandestin et désaccord",
      "confond calcul rationnel et manque d'information",
      "généralise : croit que le paradoxe dit que l'action est inutile"
     ]
    },
    {
     "id": "T9",
     "q": "Un contrat à durée déterminée et une mission d'intérim sont",
     "ok": "des emplois salariés précaires",
     "bad": [
      "des situations de chômage",
      "des situations d'inactivité",
      "des emplois indépendants"
     ],
     "err": [
      "confond emploi précaire et chômage",
      "confond emploi précaire et inactivité",
      "confond salariat précaire et travail indépendant"
     ]
    },
    {
     "id": "T10",
     "q": "Le PIB en valeur d'un pays augmente de 5 % en un an. Sur la même année, les prix augmentent de 2 %. Le PIB en volume augmente d'environ",
     "ok": "3 %",
     "bad": [
      "7 %",
      "5 %",
      "2,5 %"
     ],
     "err": [
      "additionne au lieu de retirer la hausse des prix",
      "confond valeur et volume",
      "divise les deux taux entre eux"
     ]
    },
    {
     "id": "T11",
     "q": "Dans une table de destinée, on lit 10 % à la ligne « père ouvrier », colonne « fils cadre ». Quelle phrase est juste ?",
     "ok": "Sur 100 fils d'ouvriers, 10 sont devenus cadres",
     "bad": [
      "Sur 100 cadres, 10 ont un père ouvrier",
      "10 % de l'ensemble des hommes sont à la fois fils d'ouvrier et cadres",
      "Les fils d'ouvriers ont 10 fois moins de chances de devenir cadres que les fils de cadres"
     ],
     "err": [
      "confond table de destinée et table de recrutement",
      "lit le chiffre comme une part du total",
      "invente une comparaison que le chiffre ne donne pas"
     ]
    },
    {
     "id": "T12",
     "q": "Une production augmente de 50 %, puis baisse de 50 %. Par rapport au départ, elle",
     "ok": "a baissé de 25 %",
     "bad": [
      "est revenue à son niveau de départ",
      "a baissé de 50 %",
      "a baissé de 75 %"
     ],
     "err": [
      "additionne les taux au lieu de multiplier les coefficients",
      "ne retient que la dernière variation",
      "lit le coefficient 0,75 comme une baisse de 75 %"
     ]
    },
    {
     "id": "T13",
     "q": "Dans un pays, 1 000 personnes ont de 15 à 64 ans : 720 ont un emploi, 80 sont au chômage, 200 sont inactives. Le taux de chômage est de",
     "ok": "10 %",
     "bad": [
      "8 %",
      "28 %",
      "environ 11 %"
     ],
     "err": [
      "divise par toute la population au lieu de la population active",
      "compte les inactifs comme des chômeurs",
      "divise par le nombre d'emplois"
     ]
    },
    {
     "id": "T14",
     "q": "Un graphique donne le PIB de deux pays en indice, base 100 en 2000. En 2020, l'indice du pays A vaut 150 et celui du pays B vaut 130. On peut affirmer que",
     "ok": "le PIB du pays A a augmenté plus vite que celui du pays B depuis 2000",
     "bad": [
      "le PIB du pays A est plus élevé que celui du pays B en 2020",
      "le PIB du pays A a augmenté de 150 % depuis 2000",
      "le PIB du pays A dépasse de 20 % celui du pays B en 2020"
     ],
     "err": [
      "confond une évolution et un niveau",
      "lit l'indice comme un taux de variation",
      "compare des niveaux à partir d'indices, et confond points et pourcentage"
     ]
    },
    {
     "id": "T15",
     "q": "On observe que les pays qui dépensent le plus en recherche sont aussi les plus riches. Avant de conclure que la recherche cause la richesse, que faut-il examiner ?",
     "ok": "Si la causalité ne joue pas dans l'autre sens, et si une troisième variable n'explique pas les deux",
     "bad": [
      "Rien : une corrélation observée sur beaucoup de pays est une preuve",
      "S'il existe un pays qui fait exception : un seul suffit à annuler le lien",
      "S'il y a vraiment un lien : sans cause prouvée, la corrélation n'existe pas"
     ],
     "err": [
      "croit que le nombre de cas prouve la cause",
      "confond une tendance statistique et une loi sans exception",
      "croit qu'une corrélation sans cause prouvée n'existe pas"
     ]
    },
    {
     "id": "T16",
     "q": "Dans le raisonnement keynésien, une hausse des dépenses publiques en période de récession agit ainsi",
     "ok": "la demande globale augmente, les entreprises produisent plus, elles embauchent, le chômage conjoncturel recule",
     "bad": [
      "le coût du travail baisse, les entreprises embauchent, le chômage structurel recule",
      "la demande globale augmente, les entreprises produisent plus, donc elles licencient",
      "la demande globale augmente, ce qui règle les problèmes de qualification des chômeurs"
     ],
     "err": [
      "confond politique de soutien de la demande et baisse du coût du travail",
      "rompt le lien entre production et emploi",
      "prête à la relance un effet sur le chômage structurel"
     ]
    },
    {
     "id": "T17",
     "q": "Dans le raisonnement qui fonde les allègements du coût du travail, une baisse des cotisations patronales sur les bas salaires agit ainsi",
     "ok": "embaucher un salarié peu qualifié coûte moins cher, les entreprises en embauchent plus, le chômage structurel de ces salariés recule",
     "bad": [
      "le salaire net augmente, les ménages consomment plus, la demande globale repart",
      "le travail coûte moins cher, donc les entreprises remplacent des salariés par des machines",
      "les entreprises forment davantage leurs salariés, ce qui règle les problèmes de qualification"
     ],
     "err": [
      "confond politique d'offre et soutien de la demande",
      "inverse l'effet attendu sur le choix entre travail et machines",
      "confond coût du travail et politique de formation"
     ]
    },
    {
     "id": "T18",
     "q": "Sujet de dissertation : « Le progrès technique détruit-il l'emploi ? » Quel plan répond au sujet ?",
     "ok": "I. Il détruit certains emplois. II. Il en crée d'autres et transforme l'emploi",
     "bad": [
      "I. Définition du progrès technique. II. Définition de l'emploi",
      "I. Documents 1 et 2. II. Documents 3 et 4",
      "I. Les causes du chômage. II. Les politiques de l'emploi"
     ],
     "err": [
      "fait un catalogue de définitions sans répondre",
      "suit l'ordre des documents au lieu de construire un plan",
      "récite un autre chapitre : hors sujet"
     ]
    },
    {
     "id": "T19",
     "q": "Sujet de raisonnement : « Vous montrerez que l'engagement politique dépend de variables sociodémographiques. » Qu'est-ce qui est attendu ?",
     "ok": "Une argumentation qui va dans le sens demandé, sans partie « contre »",
     "bad": [
      "Un plan « oui, mais » qui discute l'affirmation",
      "Un résumé des documents, l'un après l'autre",
      "Une liste de définitions"
     ],
     "err": [
      "confond « montrer » et « discuter »",
      "paraphrase les documents",
      "confond définir et argumenter"
     ]
    },
    {
     "id": "T20",
     "q": "Dans l'introduction d'une dissertation, la problématique est",
     "ok": "la question centrale que pose le sujet, reformulée pour montrer ce qui fait débat, et à laquelle le devoir répond",
     "bad": [
      "le sujet recopié mot pour mot",
      "l'annonce du plan",
      "ta réponse personnelle, donnée dès le début"
     ],
     "err": [
      "confond le sujet et la problématique",
      "confond la problématique et l'annonce du plan",
      "confond la problématique et la réponse"
     ]
    }
   ],
   "redaction": "Sujet de dissertation : « Le commerce international profite-t-il à tous ? » Tu n'as pas à rédiger le devoir. En huit à dix lignes :\n1. Explique ce que veulent dire « profite » et « à tous » dans ce sujet.\n2. Formule une problématique.\n3. Annonce un plan en deux parties.",
   "corrige": "Un exemple de réponse attendue. « Profite » renvoie aux gains de l'échange : baisse des prix, variété des produits, débouchés pour les entreprises, croissance. « À tous » oblige à regarder deux niveaux : les pays entre eux, et les groupes à l'intérieur de chaque pays (consommateurs, entreprises, salariés selon leur qualification et leur secteur). Problématique possible : si le commerce international crée un gain global, ce gain est-il réparti entre tous les pays et entre tous les groupes à l'intérieur de chaque pays ? Plan possible : I. Le commerce international crée des gains : spécialisation selon les avantages comparatifs, baisse des prix, réduction des inégalités entre pays. II. Ces gains sont inégalement répartis : certains secteurs et certains salariés sont exposés à la concurrence, et les inégalités de revenus peuvent augmenter à l'intérieur de chaque pays. Tout autre plan qui discute le « à tous » est accepté."
  }
 },
 "domaines": [
  {
   "nom": "Notions d'économie",
   "ids": {
    "S": [
     "S1",
     "S2",
     "S3",
     "S4",
     "S5"
    ],
    "P": [
     "P1",
     "P2",
     "P3",
     "P4",
     "P5",
     "P6"
    ],
    "T": [
     "T1",
     "T2",
     "T3",
     "T4",
     "T5"
    ]
   }
  },
  {
   "nom": "Notions de sociologie et de science politique",
   "ids": {
    "S": [
     "S6",
     "S7",
     "S8",
     "S9"
    ],
    "P": [
     "P7",
     "P8",
     "P9",
     "P10"
    ],
    "T": [
     "T6",
     "T7",
     "T8",
     "T9"
    ]
   }
  },
  {
   "nom": "Lecture de données",
   "ids": {
    "S": [
     "S10",
     "S11",
     "S12",
     "S13",
     "S14",
     "S15"
    ],
    "P": [
     "P11",
     "P12",
     "P13",
     "P14",
     "P15"
    ],
    "T": [
     "T10",
     "T11",
     "T12",
     "T13",
     "T14"
    ]
   }
  },
  {
   "nom": "Raisonnement",
   "ids": {
    "S": [
     "S16",
     "S17",
     "S18"
    ],
    "P": [
     "P16",
     "P17",
     "P18"
    ],
    "T": [
     "T15",
     "T16",
     "T17"
    ]
   }
  },
  {
   "nom": "Méthode des épreuves",
   "ids": {
    "S": [
     "S19",
     "S20"
    ],
    "P": [
     "P19",
     "P20"
    ],
    "T": [
     "T18",
     "T19",
     "T20"
    ]
   }
  }
 ],
 "criteres": [
  "Comprendre la consigne",
  "Mobiliser les connaissances",
  "Utiliser les données",
  "Construire le raisonnement",
  "Rédiger"
 ]
};
