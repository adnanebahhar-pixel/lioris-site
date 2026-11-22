window.DIAGS = window.DIAGS || {};
window.DIAGS["maths-college-seconde"] = {
 "cle": "maths-college-seconde",
 "matiere": "maths",
 "titre": "Test de maths",
 "nom": "Diagnostic des bases en maths",
 "commun": "A",
 "niveaux": [
  [
   "B",
   "6e ou 5e"
  ],
  [
   "C",
   "4e ou 3e"
  ],
  [
   "S",
   "Seconde"
  ]
 ],
 "classes": [
  [
   "Sixième",
   "B"
  ],
  [
   "Cinquième",
   "B"
  ],
  [
   "Quatrième",
   "C"
  ],
  [
   "Troisième",
   "C"
  ],
  [
   "Seconde",
   "S"
  ]
 ],
 "duree": "30 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 2 questions : le professeur tranche. Pas de rédaction : le professeur fait résoudre un court problème à voix haute pendant le rendez-vous.",
 "source": "diagnostic-maths-college-seconde.md",
 "blocs": {
  "A": {
   "titre": "automatismes (commun à tous)",
   "questions": [
    {
     "id": "A1",
     "q": "3,7 + 12,45 =",
     "ok": "16,15",
     "bad": [
      "12,82",
      "15,15",
      "15,52"
     ],
     "err": [
      "aligne les chiffres à droite sans tenir compte de la virgule",
      "oublie la retenue",
      "ajoute 7 et 45 comme des entiers"
     ]
    },
    {
     "id": "A2",
     "q": "Le plus grand de ces nombres est",
     "ok": "0,8",
     "bad": [
      "0,125",
      "0,75",
      "0,09"
     ],
     "err": [
      "croit que plus il y a de chiffres, plus le nombre est grand",
      "compare 75 et 8",
      "regarde le chiffre le plus grand"
     ]
    },
    {
     "id": "A3",
     "q": "5 + 3 × 4 =",
     "ok": "17",
     "bad": [
      "32",
      "60",
      "12"
     ],
     "err": [
      "calcule de gauche à droite",
      "multiplie tout",
      "oublie le 5"
     ]
    },
    {
     "id": "A4",
     "q": "Les 3/4 de 60 valent",
     "ok": "45",
     "bad": [
      "80",
      "20",
      "15"
     ],
     "err": [
      "multiplie par 4/3",
      "divise par 3 seulement",
      "prend un quart seulement"
     ]
    },
    {
     "id": "A5",
     "q": "4 cahiers coûtent 10 €. Au même prix, 6 cahiers coûtent",
     "ok": "15 €",
     "bad": [
      "12 €",
      "24 €",
      "60 €"
     ],
     "err": [
      "ajoute 2 € pour 2 cahiers de plus",
      "multiplie 6 par 4",
      "multiplie 6 par 10"
     ]
    },
    {
     "id": "A6",
     "q": "Un film commence à 14 h 45 et dure 1 h 50. Il finit à",
     "ok": "16 h 35",
     "bad": [
      "15 h 95",
      "15 h 35",
      "16 h 95"
     ],
     "err": [
      "additionne sans convertir les 60 minutes",
      "convertit les minutes mais oublie l'heure en plus",
      "ajoute l'heure sans retirer 60 minutes"
     ]
    },
    {
     "id": "A7",
     "q": "Un rectangle mesure 8 cm sur 3 cm. Son périmètre vaut",
     "ok": "22 cm",
     "bad": [
      "24 cm",
      "11 cm",
      "48 cm"
     ],
     "err": [
      "calcule l'aire",
      "oublie de doubler",
      "double l'aire"
     ]
    },
    {
     "id": "A8",
     "q": "0,6 × 100 =",
     "ok": "60",
     "bad": [
      "0,600",
      "6",
      "600"
     ],
     "err": [
      "ajoute des zéros à droite",
      "multiplie par 10",
      "multiplie par 1 000"
     ]
    },
    {
     "id": "A9",
     "q": "La fraction égale à 2/3 est",
     "ok": "4/6",
     "bad": [
      "3/4",
      "4/9",
      "3/2"
     ],
     "err": [
      "ajoute 1 en haut et en bas",
      "multiplie le haut par 2 et le bas par 3",
      "inverse la fraction"
     ]
    },
    {
     "id": "A10",
     "q": "Léa a 50 €. Elle achète 3 livres à 12 € l'un. Il lui reste",
     "ok": "14 €",
     "bad": [
      "38 €",
      "35 €",
      "86 €"
     ],
     "err": [
      "ne compte qu'un livre",
      "retire 12 puis 3",
      "additionne au lieu de soustraire"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "B": {
   "titre": "élève de 6e ou de 5e",
   "questions": [
    {
     "id": "B1",
     "q": "1/2 + 1/4 =",
     "ok": "3/4",
     "bad": [
      "2/6",
      "2/4",
      "1/8"
     ],
     "err": [
      "additionne les hauts entre eux et les bas entre eux",
      "trouve le bon dénominateur sans convertir les numérateurs",
      "multiplie au lieu d'additionner"
     ]
    },
    {
     "id": "B2",
     "q": "3/5 =",
     "ok": "0,6",
     "bad": [
      "3,5",
      "0,35",
      "environ 1,67"
     ],
     "err": [
      "lit la barre de fraction comme une virgule",
      "colle les deux chiffres après la virgule",
      "divise 5 par 3"
     ]
    },
    {
     "id": "B3",
     "q": "25 % de 80 valent",
     "ok": "20",
     "bad": [
      "55",
      "3,2",
      "2 000"
     ],
     "err": [
      "retire 25 à 80",
      "divise 80 par 25",
      "multiplie sans diviser par 100"
     ]
    },
    {
     "id": "B4",
     "q": "−3 + 7 =",
     "ok": "4",
     "bad": [
      "−10",
      "10",
      "−4"
     ],
     "err": [
      "additionne les distances et garde le signe moins",
      "ignore le signe moins",
      "se trompe de signe au résultat"
     ]
    },
    {
     "id": "B5",
     "q": "5 − (−2) =",
     "ok": "7",
     "bad": [
      "3",
      "−7",
      "−3"
     ],
     "err": [
      "ne transforme pas « moins moins » en plus",
      "se trompe de signe au résultat",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "B6",
     "q": "20 − (8 − 3) × 2 =",
     "ok": "10",
     "bad": [
      "30",
      "6",
      "18"
     ],
     "err": [
      "calcule (20 − 5) × 2, de gauche à droite",
      "ignore les parenthèses",
      "soustrait tout puis multiplie"
     ]
    },
    {
     "id": "B7",
     "q": "Pour x = 3, l'expression 2x + 5 vaut",
     "ok": "11",
     "bad": [
      "28",
      "10",
      "16"
     ],
     "err": [
      "lit 2x comme le nombre 23",
      "additionne 2, 3 et 5",
      "calcule 2 × (3 + 5)"
     ]
    },
    {
     "id": "B8",
     "q": "Une voiture roule à 60 km/h. En 1 h 30, elle parcourt",
     "ok": "90 km",
     "bad": [
      "78 km",
      "40 km",
      "120 km"
     ],
     "err": [
      "lit 1 h 30 comme 1,30 h",
      "divise au lieu de multiplier",
      "compte 2 heures"
     ]
    },
    {
     "id": "B9",
     "q": "2,5 km =",
     "ok": "2 500 m",
     "bad": [
      "250 m",
      "25 000 m",
      "0,0025 m"
     ],
     "err": [
      "multiplie par 100",
      "multiplie par 10 000",
      "divise au lieu de multiplier"
     ]
    },
    {
     "id": "B10",
     "q": "Un triangle a une base de 6 cm et une hauteur de 4 cm. Son aire vaut",
     "ok": "12 cm²",
     "bad": [
      "24 cm²",
      "10 cm²",
      "20 cm²"
     ],
     "err": [
      "oublie de diviser par 2",
      "additionne base et hauteur",
      "calcule un périmètre de rectangle"
     ]
    },
    {
     "id": "B11",
     "q": "Un triangle a deux angles de 50° et 60°. Le troisième mesure",
     "ok": "70°",
     "bad": [
      "110°",
      "250°",
      "10°"
     ],
     "err": [
      "additionne les deux angles sans retirer de 180°",
      "retire de 360°",
      "soustrait les deux angles"
     ]
    },
    {
     "id": "B12",
     "q": "Le reste de la division euclidienne de 47 par 5 est",
     "ok": "2",
     "bad": [
      "9",
      "9,4",
      "7"
     ],
     "err": [
      "donne le quotient",
      "fait la division décimale",
      "donne le dernier chiffre de 47"
     ]
    },
    {
     "id": "B13",
     "q": "La moyenne des notes 10, 12 et 17 est",
     "ok": "13",
     "bad": [
      "12",
      "39",
      "7"
     ],
     "err": [
      "donne la valeur du milieu",
      "donne la somme",
      "donne l'écart entre la plus haute et la plus basse"
     ]
    },
    {
     "id": "B14",
     "q": "La solution de x + 7 = 15 est",
     "ok": "8",
     "bad": [
      "22",
      "−8",
      "7"
     ],
     "err": [
      "ajoute 7 au lieu de le retirer",
      "se trompe de signe",
      "recopie un nombre de l'énoncé"
     ]
    },
    {
     "id": "B15",
     "q": "Dans une classe de 25 élèves, 10 sont des garçons. La proportion de filles est",
     "ok": "3/5",
     "bad": [
      "2/5",
      "15",
      "2/3"
     ],
     "err": [
      "donne la proportion de garçons",
      "donne un effectif, pas une proportion",
      "compare les garçons aux filles"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "C": {
   "titre": "élève de 4e ou de 3e",
   "questions": [
    {
     "id": "C1",
     "q": "2/3 × 3/4 =",
     "ok": "1/2",
     "bad": [
      "8/9",
      "5/7",
      "17/12"
     ],
     "err": [
      "multiplie en croix, comme pour une division",
      "additionne les hauts entre eux et les bas entre eux",
      "additionne les deux fractions"
     ]
    },
    {
     "id": "C2",
     "q": "2/3 ÷ 4/5 =",
     "ok": "5/6",
     "bad": [
      "8/15",
      "6/5",
      "−2/15"
     ],
     "err": [
      "multiplie sans inverser la seconde fraction",
      "inverse la première fraction au lieu de la seconde",
      "soustrait les deux fractions"
     ]
    },
    {
     "id": "C3",
     "q": "(−3) × (−4) − 5 =",
     "ok": "7",
     "bad": [
      "−17",
      "17",
      "27"
     ],
     "err": [
      "croit que moins par moins donne moins",
      "ajoute 5 au lieu de le retirer",
      "calcule −4 − 5 avant de multiplier"
     ]
    },
    {
     "id": "C4",
     "q": "10^3 × 10^(−5) =",
     "ok": "0,01",
     "bad": [
      "10^(−15)",
      "100",
      "10^8"
     ],
     "err": [
      "multiplie les exposants",
      "se trompe de signe sur l'exposant",
      "ignore le signe de −5"
     ]
    },
    {
     "id": "C5",
     "q": "L'écriture scientifique de 45 000 est",
     "ok": "4,5 × 10^4",
     "bad": [
      "45 × 10^3",
      "4,5 × 10^3",
      "4,5 × 10^(−4)"
     ],
     "err": [
      "oublie qu'il faut un seul chiffre avant la virgule",
      "compte mal les rangs",
      "confond grand nombre et exposant négatif"
     ]
    },
    {
     "id": "C6",
     "q": "3(x − 4) =",
     "ok": "3x − 12",
     "bad": [
      "3x − 4",
      "3x − 7",
      "−9x"
     ],
     "err": [
      "ne distribue pas sur le second terme",
      "additionne 3 et 4",
      "regroupe des termes qui ne vont pas ensemble"
     ]
    },
    {
     "id": "C7",
     "q": "5x − 2 + 3x + 6 =",
     "ok": "8x + 4",
     "bad": [
      "12x",
      "8x − 4",
      "2x + 4"
     ],
     "err": [
      "additionne tous les nombres",
      "se trompe de signe sur les constantes",
      "soustrait les x au lieu de les additionner"
     ]
    },
    {
     "id": "C8",
     "q": "La solution de 3x + 5 = x − 7 est",
     "ok": "−6",
     "bad": [
      "−1",
      "6",
      "−3"
     ],
     "err": [
      "se trompe en passant le 5 de l'autre côté",
      "se trompe de signe au résultat",
      "additionne les x au lieu de les soustraire"
     ]
    },
    {
     "id": "C9",
     "q": "Un triangle rectangle a des côtés de l'angle droit de 6 cm et 8 cm. Son hypoténuse mesure",
     "ok": "10 cm",
     "bad": [
      "14 cm",
      "100 cm",
      "√28 cm"
     ],
     "err": [
      "additionne les deux côtés",
      "oublie la racine carrée",
      "soustrait les carrés au lieu de les additionner"
     ]
    },
    {
     "id": "C10",
     "q": "On agrandit une figure : un côté de 4 cm devient 6 cm. Un côté de 10 cm devient",
     "ok": "15 cm",
     "bad": [
      "12 cm",
      "environ 6,7 cm",
      "24 cm"
     ],
     "err": [
      "ajoute 2 cm au lieu de multiplier",
      "divise par 1,5",
      "multiplie 4 par 6"
     ]
    },
    {
     "id": "C11",
     "q": "Un article à 80 € baisse de 25 %. Son nouveau prix est",
     "ok": "60 €",
     "bad": [
      "55 €",
      "20 €",
      "100 €"
     ],
     "err": [
      "retire 25 € au lieu de 25 %",
      "donne le montant de la baisse",
      "augmente au lieu de baisser"
     ]
    },
    {
     "id": "C12",
     "q": "f(x) = 2x − 3. Alors f(−1) =",
     "ok": "−5",
     "bad": [
      "−1",
      "5",
      "−6"
     ],
     "err": [
      "calcule 2 × (−1) = 2",
      "perd le signe du résultat",
      "multiplie 2, −1 et 3 au lieu de soustraire 3"
     ]
    },
    {
     "id": "C13",
     "q": "On lance un dé équilibré à 6 faces. La probabilité d'obtenir 5 ou plus est",
     "ok": "1/3",
     "bad": [
      "1/6",
      "5/6",
      "1/2"
     ],
     "err": [
      "ne compte qu'une face",
      "confond avec « 5 ou moins »",
      "compte trois faces"
     ]
    },
    {
     "id": "C14",
     "q": "Un train parcourt 150 km en 2 h 30. Sa vitesse moyenne est",
     "ok": "60 km/h",
     "bad": [
      "environ 65 km/h",
      "75 km/h",
      "375 km/h"
     ],
     "err": [
      "lit 2 h 30 comme 2,30 h",
      "oublie la demi-heure",
      "multiplie au lieu de diviser"
     ]
    },
    {
     "id": "C15",
     "q": "La forme factorisée de x² − 9 est",
     "ok": "(x − 3)(x + 3)",
     "bad": [
      "(x − 3)²",
      "x(x − 9)",
      "(x − 9)(x + 9)"
     ],
     "err": [
      "confond avec le carré d'une différence",
      "met x en facteur à tort",
      "oublie de prendre la racine de 9"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "1/2 + 1/3 × 3/4 =",
     "ok": "3/4",
     "bad": [
      "5/8",
      "3/10",
      "2/7"
     ],
     "err": [
      "additionne avant de multiplier",
      "cumule l'erreur de priorité et une addition fausse",
      "multiplie bien, puis additionne les hauts entre eux et les bas entre eux"
     ]
    },
    {
     "id": "S2",
     "q": "(10^3)^2 × 10^(−4) =",
     "ok": "10^2",
     "bad": [
      "10^1",
      "10^(−24)",
      "10^10"
     ],
     "err": [
      "additionne 3 et 2 au lieu de les multiplier",
      "multiplie tous les exposants",
      "ignore le signe de −4"
     ]
    },
    {
     "id": "S3",
     "q": "√75 =",
     "ok": "5√3",
     "bad": [
      "25√3",
      "3√5",
      "37,5"
     ],
     "err": [
      "sort 25 de la racine sans en prendre la racine",
      "inverse les deux nombres",
      "divise par 2"
     ]
    },
    {
     "id": "S4",
     "q": "(x + 3)(x − 5) =",
     "ok": "x² − 2x − 15",
     "bad": [
      "x² − 15",
      "x² + 2x − 15",
      "2x − 2"
     ],
     "err": [
      "oublie les termes croisés",
      "se trompe de signe sur le terme en x",
      "additionne les deux facteurs"
     ]
    },
    {
     "id": "S5",
     "q": "(x + 4)² =",
     "ok": "x² + 8x + 16",
     "bad": [
      "x² + 16",
      "x² + 4x + 16",
      "2x + 8"
     ],
     "err": [
      "oublie le double produit",
      "ne double pas le produit",
      "confond carré et double"
     ]
    },
    {
     "id": "S6",
     "q": "La forme factorisée de 4x² − 25 est",
     "ok": "(2x − 5)(2x + 5)",
     "bad": [
      "(2x − 5)²",
      "(4x − 5)(x + 5)",
      "4(x² − 25)"
     ],
     "err": [
      "confond avec le carré d'une différence",
      "ne voit pas que 4x² est le carré de 2x",
      "met 4 en facteur à tort"
     ]
    },
    {
     "id": "S7",
     "q": "Les solutions de (x − 2)(x + 5) = 0 sont",
     "ok": "2 et −5",
     "bad": [
      "−2 et 5",
      "2 seulement",
      "−10"
     ],
     "err": [
      "se trompe de signe sur les deux solutions",
      "oublie le second facteur",
      "multiplie −2 par 5"
     ]
    },
    {
     "id": "S8",
     "q": "La solution de x/3 + 1 = 5 est",
     "ok": "12",
     "bad": [
      "18",
      "4/3",
      "14"
     ],
     "err": [
      "ajoute 1 au lieu de le retirer",
      "divise par 3 au lieu de multiplier",
      "multiplie x/3 et 5 par 3 mais oublie de multiplier le 1"
     ]
    },
    {
     "id": "S9",
     "q": "3x − 4 ≤ 2 équivaut à",
     "ok": "x ≤ 2",
     "bad": [
      "x ≥ 2",
      "x ≤ −2/3",
      "x ≤ 6"
     ],
     "err": [
      "change le sens de l'inégalité sans raison",
      "se trompe en passant le −4 de l'autre côté",
      "oublie de diviser par 3"
     ]
    },
    {
     "id": "S10",
     "q": "f(x) = x² − 3x. L'image de −2 est",
     "ok": "10",
     "bad": [
      "−2",
      "−10",
      "2"
     ],
     "err": [
      "calcule −3 × (−2) = −6",
      "cumule les deux erreurs",
      "calcule (−2)² = −4"
     ]
    },
    {
     "id": "S11",
     "q": "g(x) = 2x + 1. L'antécédent de 7 est",
     "ok": "3",
     "bad": [
      "15",
      "4",
      "6"
     ],
     "err": [
      "calcule l'image de 7",
      "ajoute 1 au lieu de le retirer",
      "oublie de diviser par 2"
     ]
    },
    {
     "id": "S12",
     "q": "Un prix passe de 40 € à 50 €. Il augmente de",
     "ok": "25 %",
     "bad": [
      "10 %",
      "20 %",
      "125 %"
     ],
     "err": [
      "donne la hausse en euros",
      "divise par le prix d'arrivée",
      "donne le coefficient multiplicateur"
     ]
    },
    {
     "id": "S13",
     "q": "A(−2 ; 4) et B(6 ; 0). Le milieu de [AB] a pour coordonnées",
     "ok": "(2 ; 2)",
     "bad": [
      "(4 ; 4)",
      "(4 ; −2)",
      "(8 ; −4)"
     ],
     "err": [
      "additionne sans diviser par 2",
      "calcule une demi-différence",
      "calcule les coordonnées du vecteur AB"
     ]
    },
    {
     "id": "S14",
     "q": "« x appartient à [−1 ; 3[ » signifie",
     "ok": "−1 ≤ x < 3",
     "bad": [
      "−1 < x ≤ 3",
      "−1 < x < 3",
      "−1 ≤ x ≤ 3"
     ],
     "err": [
      "inverse les deux crochets",
      "lit deux crochets ouverts",
      "lit deux crochets fermés"
     ]
    },
    {
     "id": "S15",
     "q": "Un rectangle a un périmètre de 30 cm. Sa longueur est le double de sa largeur. Sa largeur mesure",
     "ok": "5 cm",
     "bad": [
      "10 cm",
      "15 cm",
      "7,5 cm"
     ],
     "err": [
      "pose largeur + longueur = 30, ou donne la longueur",
      "donne le demi-périmètre",
      "divise par 4, comme pour un carré"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  }
 },
 "domaines": [
  {
   "nom": "Nombres et calcul",
   "ids": {
    "B": [
     "A1",
     "A2",
     "A3",
     "A8",
     "B4",
     "B5",
     "B6",
     "B12"
    ],
    "C": [
     "A1",
     "A2",
     "A3",
     "A8",
     "C3",
     "C4",
     "C5"
    ],
    "S": [
     "A1",
     "A2",
     "A3",
     "A8",
     "S2",
     "S3"
    ]
   }
  },
  {
   "nom": "Fractions",
   "ids": {
    "B": [
     "A4",
     "A9",
     "B1",
     "B2"
    ],
    "C": [
     "A4",
     "A9",
     "C1",
     "C2"
    ],
    "S": [
     "A4",
     "A9",
     "S1"
    ]
   }
  },
  {
   "nom": "Proportionnalité et pourcentages",
   "ids": {
    "B": [
     "A5",
     "B3",
     "B8",
     "B15"
    ],
    "C": [
     "A5",
     "C10",
     "C11",
     "C14"
    ],
    "S": [
     "A5",
     "S12"
    ]
   }
  },
  {
   "nom": "Grandeurs et géométrie",
   "ids": {
    "B": [
     "A6",
     "A7",
     "B9",
     "B10",
     "B11"
    ],
    "C": [
     "A6",
     "A7",
     "C9"
    ],
    "S": [
     "A6",
     "A7",
     "S13"
    ]
   }
  },
  {
   "nom": "Calcul littéral et équations",
   "ids": {
    "B": [
     "B7",
     "B14"
    ],
    "C": [
     "C6",
     "C7",
     "C8",
     "C15"
    ],
    "S": [
     "S4",
     "S5",
     "S6",
     "S7",
     "S8",
     "S9",
     "S14",
     "S15"
    ]
   }
  },
  {
   "nom": "Fonctions, données et problèmes",
   "ids": {
    "B": [
     "A10",
     "B13"
    ],
    "C": [
     "A10",
     "C12",
     "C13"
    ],
    "S": [
     "A10",
     "S10",
     "S11"
    ]
   }
  }
 ],
 "criteres": []
};
