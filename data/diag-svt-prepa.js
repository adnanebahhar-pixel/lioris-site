window.DIAGS = window.DIAGS || {};
window.DIAGS["svt-prepa"] = {
 "cle": "svt-prepa",
 "matiere": "SVT",
 "titre": "Test de SVT",
 "nom": "Test d'entrée en prépa BCPST, SVT",
 "commun": null,
 "niveaux": [
  [
   "E",
   "Entrée en BCPST"
  ]
 ],
 "classes": [
  [
   "Terminale, je vise la BCPST",
   "E"
  ],
  [
   "Première année de BCPST",
   "E"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-svt-prepa-bcpst.md",
 "blocs": {
  "E": {
   "titre": "entrée en BCPST",
   "questions": [
    {
     "id": "E1",
     "q": "On place un globule rouge dans de l'eau distillée. Il",
     "ok": "gonfle puis éclate : l'eau entre dans la cellule par osmose",
     "bad": [
      "se ratatine : l'eau sort de la cellule",
      "reste intact : la membrane est imperméable à l'eau",
      "se ratatine : ses solutés sortent vers l'eau pure"
     ],
     "idee_fausse": true,
     "err": [
      "inverse le sens de l'osmose",
      "croit la membrane imperméable à l'eau",
      "raisonne sur le déplacement des solutés au lieu de celui de l'eau"
     ]
    },
    {
     "id": "E2",
     "q": "La structure primaire d'une protéine est",
     "ok": "l'ordre de ses acides aminés, reliés par des liaisons peptidiques",
     "bad": [
      "l'ordre des nucléotides de son gène",
      "son repliement dans l'espace",
      "l'association de plusieurs chaînes"
     ],
     "err": [
      "confond séquence de la protéine et séquence du gène",
      "confond structure primaire et structure tertiaire",
      "confond structure primaire et structure quaternaire"
     ]
    },
    {
     "id": "E3",
     "q": "À concentration d'enzyme fixée, on augmente la concentration du substrat. La vitesse initiale de la réaction",
     "ok": "augmente, puis atteint un plateau quand l'enzyme est saturée",
     "bad": [
      "augmente en proportion, sans limite",
      "reste constante",
      "augmente, puis retombe à zéro car le substrat détruit l'enzyme"
     ],
     "idee_fausse": true,
     "err": [
      "ignore la saturation de l'enzyme",
      "croit que la vitesse ne dépend que de l'enzyme",
      "confond plateau de saturation et dénaturation"
     ]
    },
    {
     "id": "E4",
     "q": "Pour une même quantité de glucose consommée, une cellule produit",
     "ok": "beaucoup plus d'ATP par la respiration que par la fermentation",
     "bad": [
      "autant d'ATP par les deux voies",
      "plus d'ATP par la fermentation, car elle est plus rapide",
      "de l'ATP par la respiration seulement : la fermentation n'en produit pas"
     ],
     "idee_fausse": true,
     "err": [
      "ignore l'écart de rendement entre les deux voies",
      "confond vitesse d'une voie et rendement en ATP",
      "croit que sans dioxygène il n'y a pas d'ATP"
     ]
    },
    {
     "id": "E5",
     "q": "Dans une cellule eucaryote, la transcription et la traduction ont lieu",
     "ok": "dans le noyau pour la transcription, dans le cytoplasme pour la traduction",
     "bad": [
      "toutes les deux dans le noyau",
      "dans le cytoplasme pour la transcription, dans le noyau pour la traduction",
      "toutes les deux dans le cytoplasme"
     ],
     "err": [
      "oublie la sortie de l'ARN messager hors du noyau",
      "inverse les deux étapes",
      "applique le cas des bactéries à la cellule eucaryote"
     ]
    },
    {
     "id": "E6",
     "q": "Une cellule à 2n chromosomes contient une quantité Q d'ADN avant la réplication. Un gamète issu de sa méiose contient",
     "ok": "Q/2",
     "bad": [
      "Q",
      "2Q",
      "Q/4"
     ],
     "err": [
      "oublie la réduction de la méiose",
      "confond le gamète et la cellule après réplication",
      "divise par deux à chaque division en partant de Q au lieu de 2Q"
     ]
    },
    {
     "id": "E7",
     "q": "On croise deux individus AaBb. Les deux gènes sont indépendants, A domine a, B domine b. La proportion attendue de descendants [ab] est",
     "ok": "1/16",
     "bad": [
      "1/4",
      "1/8",
      "3/16"
     ],
     "err": [
      "raisonne comme pour un seul gène",
      "additionne les probabilités au lieu de les multiplier",
      "confond le double récessif et un phénotype à un seul caractère récessif"
     ]
    },
    {
     "id": "E8",
     "q": "Dans un arbre phylogénétique, deux espèces sont d'autant plus proches parentes que",
     "ok": "leur dernier ancêtre commun est récent",
     "bad": [
      "elles se ressemblent",
      "elles sont dessinées côte à côte au bout des branches",
      "elles vivent dans le même milieu"
     ],
     "idee_fausse": true,
     "err": [
      "confond parenté et ressemblance",
      "lit l'ordre des extrémités de l'arbre au lieu des nœuds",
      "confond parenté et milieu de vie"
     ]
    },
    {
     "id": "E9",
     "q": "En biologie de l'évolution, la valeur sélective d'un individu se mesure par",
     "ok": "le nombre de descendants viables et fertiles qu'il laisse",
     "bad": [
      "sa force physique",
      "sa durée de vie",
      "son degré de complexité"
     ],
     "idee_fausse": true,
     "err": [
      "prend « le plus apte » pour « le plus fort »",
      "réduit la sélection à la survie",
      "voit l'évolution comme une marche vers la complexité"
     ]
    },
    {
     "id": "E10",
     "q": "Le diabète de type 1 est dû",
     "ok": "à la destruction, par le système immunitaire, des cellules du pancréas qui produisent l'insuline",
     "bad": [
      "à une perte de sensibilité des cellules à l'insuline",
      "à une consommation excessive de sucre dans l'enfance",
      "à un manque de glucagon"
     ],
     "idee_fausse": true,
     "err": [
      "confond diabète de type 1 et de type 2",
      "croit que le sucre mangé cause le diabète de type 1",
      "confond insuline et glucagon"
     ]
    },
    {
     "id": "E11",
     "q": "Lors d'un sprint de 10 secondes, l'ATP du muscle est régénéré surtout par",
     "ok": "la phosphocréatine, puis la fermentation lactique",
     "bad": [
      "la respiration cellulaire",
      "l'oxydation des lipides",
      "rien : le stock d'ATP du muscle suffit"
     ],
     "err": [
      "ignore le délai de mise en route de la voie aérobie",
      "confond effort bref et effort long",
      "croit que l'ATP est une réserve"
     ]
    },
    {
     "id": "E12",
     "q": "Dans un grand arbre, la sève brute monte des racines aux feuilles surtout grâce",
     "ok": "à la transpiration des feuilles, qui crée une aspiration dans le xylème",
     "bad": [
      "à une pompe située dans les racines",
      "à la capillarité seule",
      "à la poussée des sucres dans le phloème"
     ],
     "idee_fausse": true,
     "err": [
      "attribue la montée de la sève à la seule poussée des racines",
      "surestime la capillarité",
      "confond xylème et phloème"
     ]
    },
    {
     "id": "E13",
     "q": "Un gaz traverse une surface d'échange par diffusion. Le débit est d'autant plus fort que",
     "ok": "la surface est grande, la paroi mince et la différence de pression partielle forte",
     "bad": [
      "la surface est grande, la paroi épaisse et la différence de pression partielle forte",
      "la surface est petite, la paroi mince et la différence de pression partielle forte",
      "la différence de pression partielle est forte : la surface et la paroi ne comptent pas"
     ],
     "err": [
      "croit qu'une paroi épaisse favorise l'échange",
      "inverse l'effet de la surface",
      "ignore la géométrie de la surface d'échange"
     ]
    },
    {
     "id": "E14",
     "q": "L'âge obtenu par radiochronologie sur les minéraux d'un granite date",
     "ok": "la cristallisation du magma : la fermeture du système",
     "bad": [
      "la formation des éléments chimiques de la roche",
      "l'arrivée du granite à la surface, par érosion",
      "le dépôt des sédiments qui entourent le granite"
     ],
     "err": [
      "confond l'âge de la roche et l'âge de ses atomes",
      "confond cristallisation et mise à l'affleurement",
      "date la roche par son encaissant"
     ]
    },
    {
     "id": "E15",
     "q": "Sous une dorsale, la péridotite du manteau fond en partie parce que",
     "ok": "elle remonte et sa pression baisse, sans apport de chaleur",
     "bad": [
      "elle est chauffée par le frottement des plaques",
      "elle reçoit de l'eau, qui abaisse sa température de fusion",
      "elle ne fond pas : le manteau est déjà liquide"
     ],
     "idee_fausse": true,
     "err": [
      "croit que fondre exige toujours de chauffer",
      "applique le mécanisme des zones de subduction",
      "croit que le manteau est liquide"
     ]
    },
    {
     "id": "E16",
     "q": "Dans le manteau terrestre, la chaleur interne est évacuée surtout par",
     "ok": "convection : un déplacement très lent de matière solide",
     "bad": [
      "conduction seule, de proche en proche",
      "des courants de magma liquide",
      "rayonnement"
     ],
     "idee_fausse": true,
     "err": [
      "ignore le mouvement de matière dans le manteau",
      "croit que la convection exige un liquide",
      "applique le transfert par rayonnement à l'intérieur de la Terre"
     ]
    },
    {
     "id": "E17",
     "q": "Une cellule animale mesure environ 20 micromètres, une bactérie environ 2 micromètres. À formes semblables, le volume de la cellule animale est environ",
     "ok": "1 000 fois plus grand",
     "bad": [
      "10 fois plus grand",
      "100 fois plus grand",
      "30 fois plus grand"
     ],
     "err": [
      "applique le rapport des longueurs au volume",
      "prend le carré, comme pour une surface",
      "multiplie le rapport par 3 au lieu de l'élever au cube"
     ]
    },
    {
     "id": "E18",
     "q": "Une population de bactéries double toutes les 20 minutes. On part de 1 000 bactéries. Au bout de 2 heures, on en compte",
     "ok": "64 000",
     "bad": [
      "6 000",
      "12 000",
      "32 000"
     ],
     "err": [
      "multiplie par le nombre de générations : croissance linéaire",
      "multiplie par 2 puis par le nombre de générations",
      "compte une génération de moins"
     ]
    },
    {
     "id": "E19",
     "q": "Une étude observe que les personnes qui prennent des compléments de vitamine D ont moins de fractures. Quelle conclusion est justifiée ?",
     "ok": "les deux sont associés : seul un essai avec tirage au sort et groupe témoin dirait si la vitamine D en est la cause",
     "bad": [
      "la vitamine D protège des fractures",
      "les fractures font baisser la prise de vitamine D",
      "aucune : les individus étant tous différents, aucune étude ne peut conclure"
     ],
     "idee_fausse": true,
     "err": [
      "confond corrélation et causalité",
      "même confusion, dans l'autre sens",
      "rejette toute preuve statistique"
     ]
    },
    {
     "id": "E20",
     "q": "On veut montrer qu'une protéine membranaire P transporte le glucose. On mesure l'entrée de glucose marqué dans des cellules qui expriment P. Le meilleur témoin est",
     "ok": "les mêmes cellules, sans la protéine P, dans les mêmes conditions",
     "bad": [
      "les cellules qui expriment P, sans glucose",
      "un autre type de cellule qui exprime P, à une autre température",
      "les cellules qui expriment P, avec deux fois plus de glucose"
     ],
     "err": [
      "retire ce que l'on mesure : ne peut plus rien observer",
      "fait varier deux facteurs à la fois",
      "change la dose sans témoin"
     ]
    }
   ],
   "redaction": "On mesure la vitesse initiale d'une réaction catalysée par une enzyme, à concentration d'enzyme, température et pH fixés, pour différentes concentrations de substrat (valeurs construites pour l'exercice). Substrat à 0,5 mmol/L : 10 micromoles par minute. À 1 mmol/L : 17. À 2 mmol/L : 25. À 4 mmol/L : 33. À 8 mmol/L : 40. À 18 mmol/L : 45. À 98 mmol/L : 49.\n1. Décris l'évolution de la vitesse initiale quand la concentration du substrat augmente, avec des chiffres.\n2. Explique l'allure obtenue aux fortes concentrations, à l'échelle des molécules.\n3. Estime la vitesse maximale, puis la concentration de substrat pour laquelle la vitesse vaut la moitié de ce maximum.\n4. On double la concentration d'enzyme. Prévois, en justifiant, ce que deviennent ces deux valeurs.\n5. Ce tableau permet-il de connaître la température optimale de l'enzyme ? Justifie.",
   "corrige": "La vitesse augmente vite aux faibles concentrations (de 10 à 25 micromoles par minute entre 0,5 et 2 mmol/L), puis de moins en moins (de 45 à 49 entre 18 et 98 mmol/L) : elle tend vers un plateau. Aux fortes concentrations, presque toutes les molécules d'enzyme sont occupées par une molécule de substrat : l'enzyme est saturée, ajouter du substrat ne change presque plus la vitesse. La vitesse maximale est proche de 50 micromoles par minute ; la moitié, 25, est atteinte pour 2 mmol/L. Si l'on double la concentration d'enzyme, il y a deux fois plus de sites actifs : la vitesse maximale double, environ 100 micromoles par minute. La concentration de demi-vitesse reste 2 mmol/L, car elle traduit l'affinité de l'enzyme pour son substrat et ne dépend pas de la quantité d'enzyme. Le tableau ne dit rien de la température optimale : la température est fixée, elle n'a pas été testée."
  }
 },
 "domaines": [
  {
   "nom": "Cellule et molécules",
   "ids": {
    "E": [
     "E1",
     "E2",
     "E3",
     "E4",
     "E5"
    ]
   }
  },
  {
   "nom": "Génétique et évolution",
   "ids": {
    "E": [
     "E6",
     "E7",
     "E8",
     "E9"
    ]
   }
  },
  {
   "nom": "Physiologie",
   "ids": {
    "E": [
     "E10",
     "E11",
     "E12",
     "E13"
    ]
   }
  },
  {
   "nom": "Sciences de la Terre",
   "ids": {
    "E": [
     "E14",
     "E15",
     "E16"
    ]
   }
  },
  {
   "nom": "Raisonnement et démarche",
   "ids": {
    "E": [
     "E17",
     "E18",
     "E19",
     "E20"
    ]
   }
  }
 ],
 "criteres": [
  "Lire le document",
  "Quantifier",
  "Interpréter",
  "Prévoir et conclure avec prudence",
  "Communiquer"
 ]
};
