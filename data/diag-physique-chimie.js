window.DIAGS = window.DIAGS || {};
window.DIAGS["physique-chimie"] = {
 "cle": "physique-chimie",
 "matiere": "physique-chimie",
 "titre": "Test de physique-chimie",
 "nom": "Test de physique-chimie",
 "commun": "M",
 "niveaux": [
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
   "Première, spécialité physique-chimie",
   "P"
  ],
  [
   "Terminale, spécialité physique-chimie",
   "T"
  ]
 ],
 "duree": "35 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice pour les questions. Calculatrice autorisée pour l'exercice à rédiger.",
 "note": "Seuils provisoires : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche avec la rédaction. Les questions marquées « idée fausse » ne se corrigent pas avec des exercices : il faut reprendre l'idée. Si les outils mathématiques sont « à besoins », le dire au parent : le travail commence par les maths.",
 "source": "diagnostic-physique-chimie.md",
 "blocs": {
  "M": {
   "titre": "outils mathématiques (commun)",
   "questions": [
    {
     "id": "M1",
     "q": "3 × 10^5 × 2 × 10^(−3) =",
     "ok": "6 × 10^2",
     "bad": [
      "6 × 10^(−15)",
      "5 × 10^2",
      "6 × 10^8"
     ],
     "err": [
      "multiplie les exposants",
      "additionne 3 et 2 au lieu de les multiplier",
      "ignore le signe de l'exposant −3"
     ]
    },
    {
     "id": "M2",
     "q": "250 mL =",
     "ok": "0,25 L",
     "bad": [
      "2,5 L",
      "0,025 L",
      "250 000 L"
     ],
     "err": [
      "divise par 100",
      "divise par 10 000",
      "multiplie au lieu de diviser"
     ]
    },
    {
     "id": "M3",
     "q": "v = d/t. Alors t =",
     "ok": "d/v",
     "bad": [
      "v/d",
      "d × v",
      "v − d"
     ],
     "err": [
      "inverse le quotient",
      "multiplie au lieu de diviser",
      "transforme la division en soustraction"
     ]
    },
    {
     "id": "M4",
     "q": "72 km/h =",
     "ok": "20 m/s",
     "bad": [
      "259,2 m/s",
      "1 200 m/s",
      "72 000 m/s"
     ],
     "err": [
      "multiplie par 3,6 au lieu de diviser",
      "convertit en mètres par minute",
      "convertit les kilomètres mais pas les heures"
     ]
    },
    {
     "id": "M5",
     "q": "On dissout 5 g de sel pour obtenir 200 mL de solution. La concentration en masse vaut",
     "ok": "25 g/L",
     "bad": [
      "0,025 g/L",
      "1 g/L",
      "40 g/L"
     ],
     "err": [
      "divise par 200 sans convertir en litres",
      "multiplie par 0,2 au lieu de diviser",
      "inverse le quotient, sans convertir en litres"
     ]
    },
    {
     "id": "M6",
     "q": "(6,0 × 10^(−3)) / (2,0 × 10^2) =",
     "ok": "3,0 × 10^(−5)",
     "bad": [
      "3,0 × 10^(−1)",
      "3,0 × 10^5",
      "4,0 × 10^(−5)"
     ],
     "err": [
      "additionne les exposants au lieu de les soustraire",
      "se trompe de signe sur l'exposant",
      "soustrait 6,0 et 2,0 au lieu de les diviser"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "P": {
   "titre": "élève de première",
   "questions": [
    {
     "id": "P1",
     "q": "Un palet glisse sur la glace, sans frottement, en ligne droite et à vitesse constante. Les forces qui s'exercent sur lui",
     "ok": "se compensent",
     "bad": [
      "comprennent une force vers l'avant qui entretient le mouvement",
      "n'existent pas : aucune force ne s'exerce",
      "comprennent la force du lancer, qui s'épuise peu à peu"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'il faut une force pour entretenir un mouvement",
      "oublie le poids et l'action de la glace",
      "croit qu'une force reste « dans » l'objet"
     ]
    },
    {
     "id": "P2",
     "q": "On lâche de la même hauteur une boule de 1 kg et une boule de 5 kg. On néglige les frottements de l'air.",
     "ok": "elles touchent le sol en même temps",
     "bad": [
      "la boule de 5 kg met 5 fois moins de temps à tomber",
      "la boule de 5 kg arrive un peu avant",
      "la boule de 1 kg arrive avant"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la durée de chute dépend de la masse, en proportion",
      "même idée, atténuée",
      "inverse l'idée"
     ]
    },
    {
     "id": "P3",
     "q": "Un camion qui roule heurte une petite voiture à l'arrêt. Pendant le choc, la force exercée par le camion sur la voiture est",
     "ok": "de même valeur que celle exercée par la voiture sur le camion",
     "bad": [
      "plus grande, car le camion est plus lourd",
      "plus grande, car le camion va plus vite",
      "la seule : la voiture n'exerce aucune force"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le plus lourd exerce la force la plus grande",
      "croit que le plus rapide exerce la force la plus grande",
      "croit qu'un objet passif n'exerce pas de force"
     ]
    },
    {
     "id": "P4",
     "q": "Sur la Lune, par rapport à la Terre, un astronaute a",
     "ok": "la même masse et un poids plus faible",
     "bad": [
      "une masse et un poids plus faibles",
      "la même masse et le même poids",
      "plus aucun poids, car il n'y a pas d'air"
     ],
     "idee_fausse": true,
     "err": [
      "confond masse et poids",
      "croit que le poids ne dépend pas du lieu",
      "croit que le poids vient de l'air"
     ]
    },
    {
     "id": "P5",
     "q": "Une pile alimente deux lampes identiques L1 puis L2, branchées en série. L'intensité du courant est",
     "ok": "la même dans L1 et dans L2",
     "bad": [
      "plus grande dans L1, qui reçoit le courant en premier",
      "nulle après L2 : tout le courant a été consommé",
      "plus grande dans L2"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le courant s'use en traversant une lampe",
      "croit que le courant est consommé",
      "croit que le courant s'accumule"
     ]
    },
    {
     "id": "P6",
     "q": "Une résistance de 100 Ω est traversée par un courant de 0,05 A. La tension à ses bornes vaut",
     "ok": "5 V",
     "bad": [
      "2 000 V",
      "0,0005 V",
      "100,05 V"
     ],
     "err": [
      "divise R par I",
      "divise I par R",
      "additionne"
     ]
    },
    {
     "id": "P7",
     "q": "La masse molaire de l'eau est 18 g/mol. 36 g d'eau contiennent",
     "ok": "2 mol",
     "bad": [
      "648 mol",
      "0,5 mol",
      "18 mol"
     ],
     "err": [
      "multiplie au lieu de diviser",
      "inverse le quotient",
      "soustrait"
     ]
    },
    {
     "id": "P8",
     "q": "On dilue 10 fois une solution de concentration 20 g/L. La nouvelle concentration vaut",
     "ok": "2 g/L",
     "bad": [
      "200 g/L",
      "10 g/L",
      "20 g/L"
     ],
     "err": [
      "multiplie au lieu de diviser",
      "retire 10",
      "croit que la dilution ne change pas la concentration"
     ]
    },
    {
     "id": "P9",
     "q": "Un glaçon de 10 g fond entièrement dans un récipient fermé. La masse d'eau liquide obtenue vaut",
     "ok": "10 g",
     "bad": [
      "moins de 10 g, car l'eau liquide prend moins de place",
      "plus de 10 g, car le liquide est plus lourd que la glace",
      "on ne peut pas le savoir sans la température"
     ],
     "idee_fausse": true,
     "err": [
      "confond masse et volume",
      "confond masse et masse volumique",
      "ne connaît pas la conservation de la masse"
     ]
    },
    {
     "id": "P10",
     "q": "CH4 + 2 O2 → CO2 + 2 H2O. Pour brûler 3 mol de méthane, il faut",
     "ok": "6 mol de dioxygène",
     "bad": [
      "3 mol de dioxygène",
      "1,5 mol de dioxygène",
      "2 mol de dioxygène"
     ],
     "err": [
      "ignore le coefficient",
      "divise au lieu de multiplier",
      "recopie le coefficient"
     ]
    },
    {
     "id": "P11",
     "q": "L'atome de magnésium a 12 protons. L'ion Mg2+ possède",
     "ok": "12 protons et 10 électrons",
     "bad": [
      "12 protons et 14 électrons",
      "10 protons et 12 électrons",
      "14 protons et 12 électrons"
     ],
     "err": [
      "ajoute des électrons pour une charge positive",
      "retire des protons",
      "change protons et électrons"
     ]
    },
    {
     "id": "P12",
     "q": "Le son se propage à 340 m/s. L'écho d'un cri revient 2 s après le cri. La paroi est à",
     "ok": "340 m",
     "bad": [
      "680 m",
      "170 m",
      "342 m"
     ],
     "err": [
      "oublie l'aller-retour",
      "divise deux fois par 2",
      "additionne les données"
     ]
    },
    {
     "id": "P13",
     "q": "Un signal a une période de 0,02 s. Sa fréquence vaut",
     "ok": "50 Hz",
     "bad": [
      "0,02 Hz",
      "20 Hz",
      "500 Hz"
     ],
     "err": [
      "recopie la période",
      "convertit la période en millisecondes au lieu de prendre l'inverse",
      "se trompe d'un facteur 10"
     ]
    },
    {
     "id": "P14",
     "q": "Un appareil de 2 000 W fonctionne pendant 30 min. Il consomme",
     "ok": "1 kWh",
     "bad": [
      "60 000 kWh",
      "60 kWh",
      "4 kWh"
     ],
     "err": [
      "multiplie des watts par des minutes",
      "ne convertit pas les minutes en heures",
      "divise au lieu de multiplier"
     ]
    }
   ],
   "redaction": "On dissout 11,7 g de chlorure de sodium NaCl dans de l'eau pour obtenir 500 mL de solution. Données : M(Na) = 23,0 g/mol ; M(Cl) = 35,5 g/mol.\n1. Calculer la quantité de matière de chlorure de sodium dissoute.\n2. Calculer la concentration en quantité de matière de la solution.\nPour chaque question : formule littérale, calcul, résultat avec son unité et le bon nombre de chiffres significatifs.",
   "corrige": "M(NaCl) = 23,0 + 35,5 = 58,5 g/mol. n = m/M = 11,7/58,5 = 0,200 mol. c = n/V = 0,200/0,500 = 0,400 mol/L. Trois chiffres significatifs."
  },
  "T": {
   "titre": "élève de terminale",
   "questions": [
    {
     "id": "T1",
     "q": "On lance une balle verticalement vers le haut. On néglige les frottements. Au sommet de sa trajectoire, la balle est soumise",
     "ok": "à son poids seulement",
     "bad": [
      "à aucune force, puisque sa vitesse est nulle",
      "à son poids et à la force du lancer, qui se compensent",
      "à une force vers le haut qui diminue"
     ],
     "idee_fausse": true,
     "err": [
      "lie force et vitesse au lieu de force et variation de vitesse",
      "croit qu'une force reste « dans » l'objet",
      "même idée, sans le poids"
     ]
    },
    {
     "id": "T2",
     "q": "Une voiture prend un virage en gardant 50 km/h au compteur. La somme des forces qui s'exercent sur elle est",
     "ok": "non nulle, car la direction de sa vitesse change",
     "bad": [
      "nulle, car sa vitesse est constante",
      "dirigée vers l'extérieur du virage",
      "nulle dans le plan horizontal"
     ],
     "idee_fausse": true,
     "err": [
      "confond valeur de la vitesse et vecteur vitesse",
      "raisonne avec la force centrifuge",
      "oublie l'action de la route"
     ]
    },
    {
     "id": "T3",
     "q": "La vitesse d'une voiture double. Son énergie cinétique est",
     "ok": "multipliée par 4",
     "bad": [
      "multipliée par 2",
      "multipliée par √2",
      "inchangée"
     ],
     "err": [
      "oublie le carré",
      "prend la racine au lieu du carré",
      "croit que l'énergie ne dépend pas de la vitesse"
     ]
    },
    {
     "id": "T4",
     "q": "On soulève de 5 m un objet de 2 kg (g = 10 N/kg). Son énergie potentielle de pesanteur augmente de",
     "ok": "100 J",
     "bad": [
      "10 J",
      "20 J",
      "50 J"
     ],
     "err": [
      "oublie g",
      "calcule le poids",
      "oublie la masse"
     ]
    },
    {
     "id": "T5",
     "q": "Une résistance de 10 Ω est traversée par un courant de 2 A. La puissance dissipée par effet Joule vaut",
     "ok": "40 W",
     "bad": [
      "20 W",
      "400 W",
      "5 W"
     ],
     "err": [
      "oublie le carré : calcule la tension",
      "met toute la tension au carré",
      "divise R par I"
     ]
    },
    {
     "id": "T6",
     "q": "Une onde sonore de fréquence 500 Hz se propage à 340 m/s. Sa longueur d'onde vaut",
     "ok": "0,68 m",
     "bad": [
      "170 000 m",
      "environ 1,47 m",
      "840 m"
     ],
     "err": [
      "multiplie au lieu de diviser",
      "inverse le quotient",
      "additionne"
     ]
    },
    {
     "id": "T7",
     "q": "La fréquence d'une radiation augmente. L'énergie d'un photon de cette radiation",
     "ok": "augmente",
     "bad": [
      "diminue",
      "ne change pas : seule l'intensité de la lumière compte",
      "dépend de la vitesse du photon"
     ],
     "err": [
      "inverse la relation",
      "confond énergie d'un photon et intensité",
      "lie l'énergie à la vitesse, comme en mécanique"
     ]
    },
    {
     "id": "T8",
     "q": "Une solution contient 0,10 mol de soluté dans 250 mL. Sa concentration vaut",
     "ok": "0,40 mol/L",
     "bad": [
      "0,025 mol/L",
      "0,0004 mol/L",
      "2,5 mol/L"
     ],
     "err": [
      "multiplie au lieu de diviser",
      "ne convertit pas en litres",
      "inverse le quotient"
     ]
    },
    {
     "id": "T9",
     "q": "2 H2 + O2 → 2 H2O. On mélange 4 mol de H2 et 3 mol de O2. Le réactif limitant est",
     "ok": "H2, car 4/2 est plus petit que 3/1",
     "bad": [
      "O2, car il y en a moins",
      "O2, car son coefficient est le plus petit",
      "aucun : les deux sont entièrement consommés"
     ],
     "err": [
      "compare les quantités sans les coefficients",
      "confond coefficient et quantité",
      "croit que tout réagit toujours"
     ]
    },
    {
     "id": "T10",
     "q": "Dans la demi-équation Cu2+ + 2 e− = Cu, l'ion Cu2+ est",
     "ok": "l'oxydant : il gagne des électrons",
     "bad": [
      "le réducteur : il gagne des électrons",
      "l'oxydant : il perd des électrons",
      "le réducteur : il perd des électrons"
     ],
     "err": [
      "confond oxydant et réducteur",
      "se trompe sur le sens de l'échange",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "T11",
     "q": "Un acide est dit « fort » dans l'eau quand",
     "ok": "sa réaction avec l'eau est totale",
     "bad": [
      "sa solution est très concentrée",
      "son pH est toujours inférieur à 1",
      "il est corrosif"
     ],
     "idee_fausse": true,
     "err": [
      "confond fort et concentré",
      "réduit la force à une valeur de pH",
      "confond fort et dangereux"
     ]
    },
    {
     "id": "T12",
     "q": "Une solution a une concentration en ions H3O+ de 1,0 × 10^(−3) mol/L. Son pH vaut",
     "ok": "3",
     "bad": [
      "−3",
      "11",
      "0,001"
     ],
     "err": [
      "oublie le signe moins de la définition",
      "confond avec les ions HO−",
      "recopie la concentration"
     ]
    },
    {
     "id": "T13",
     "q": "Quand on chauffe un mélange réactionnel, la transformation est en général",
     "ok": "plus rapide",
     "bad": [
      "de même durée, seule la quantité de produit change",
      "identique : la température n'a pas d'effet",
      "plus lente"
     ],
     "err": [
      "confond vitesse et état final",
      "ignore le facteur température",
      "inverse l'effet"
     ]
    },
    {
     "id": "T14",
     "q": "Lors d'un titrage, à l'équivalence",
     "ok": "les réactifs ont été introduits dans les proportions stœchiométriques",
     "bad": [
      "on a versé le même volume que celui de la solution titrée",
      "les deux solutions ont la même concentration",
      "le pH vaut toujours 7"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'équivalence se joue sur les volumes",
      "croit que l'équivalence se joue sur les concentrations",
      "généralise le cas acide fort et base forte"
     ]
    }
   ],
   "redaction": "Une bille de masse m = 0,200 kg est lâchée sans vitesse d'une hauteur h = 1,80 m. On néglige les frottements. Donnée : g = 9,81 N/kg. Le sol est la référence des énergies potentielles.\n1. Exprimer puis calculer l'énergie potentielle de pesanteur de la bille au départ.\n2. À l'aide de la conservation de l'énergie mécanique, établir l'expression littérale de la vitesse de la bille à l'arrivée au sol, puis la calculer.\n3. La vitesse mesurée est en réalité de 5,7 m/s. Proposer une explication.",
   "corrige": "Epp = m g h = 0,200 × 9,81 × 1,80 = 3,53 J. Au départ, l'énergie mécanique vaut m g h ; au sol, elle vaut ½ m v². D'où v = √(2 g h) = √(2 × 9,81 × 1,80) = 5,94 m/s. La valeur mesurée est plus faible : les frottements de l'air ne sont pas tout à fait négligeables, une partie de l'énergie mécanique est dissipée."
  }
 },
 "domaines": [
  {
   "nom": "Outils mathématiques",
   "ids": {
    "P": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6"
    ],
    "T": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6"
    ]
   }
  },
  {
   "nom": "Mécanique et énergie",
   "ids": {
    "P": [
     "P1",
     "P2",
     "P3",
     "P4"
    ],
    "T": [
     "T1",
     "T2",
     "T3",
     "T4"
    ]
   }
  },
  {
   "nom": "Électricité",
   "ids": {
    "P": [
     "P5",
     "P6",
     "P14"
    ],
    "T": [
     "T5"
    ]
   }
  },
  {
   "nom": "Ondes et lumière",
   "ids": {
    "P": [
     "P12",
     "P13"
    ],
    "T": [
     "T6",
     "T7"
    ]
   }
  },
  {
   "nom": "Matière et quantités",
   "ids": {
    "P": [
     "P7",
     "P8",
     "P9",
     "P11"
    ],
    "T": [
     "T8"
    ]
   }
  },
  {
   "nom": "Transformations chimiques",
   "ids": {
    "P": [
     "P10"
    ],
    "T": [
     "T9",
     "T10",
     "T11",
     "T12",
     "T13",
     "T14"
    ]
   }
  }
 ],
 "criteres": [
  "S'approprier",
  "Analyser",
  "Réaliser",
  "Valider",
  "Communiquer"
 ]
};
