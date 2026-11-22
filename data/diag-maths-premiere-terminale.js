window.DIAGS = window.DIAGS || {};
window.DIAGS["maths-premiere-terminale"] = {
 "cle": "maths-premiere-terminale",
 "matiere": "maths",
 "titre": "Test de maths",
 "nom": "Diagnostic de spécialité maths",
 "commun": "A",
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
   "Première, spécialité maths",
   "P"
  ],
  [
   "Terminale, spécialité maths",
   "T"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "compte",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, tout juste = satisfaisant, une erreur = fragile, deux ou plus = à besoins. Domaine de 1 ou 2 questions : le professeur tranche avec la rédaction.",
 "source": "diagnostic-maths-premiere-terminale.md",
 "blocs": {
  "A": {
   "titre": "calcul et prérequis de seconde (commun)",
   "questions": [
    {
     "id": "A1",
     "q": "3/4 − 5/6 =",
     "ok": "−1/12",
     "bad": [
      "1/12",
      "1",
      "−1/5"
     ],
     "err": [
      "erreur de signe",
      "soustrait les numérateurs entre eux et les dénominateurs entre eux",
      "additionne les dénominateurs, pas de dénominateur commun"
     ]
    },
    {
     "id": "A2",
     "q": "2^3 × 2^(−5) =",
     "ok": "1/4",
     "bad": [
      "2^(−15)",
      "1/16",
      "−4"
     ],
     "err": [
      "multiplie les exposants au lieu de les additionner",
      "multiplie aussi les bases (4^(−2))",
      "confond exposant négatif et nombre négatif"
     ]
    },
    {
     "id": "A3",
     "q": "(2x − 3)² =",
     "ok": "4x² − 12x + 9",
     "bad": [
      "4x² − 9",
      "4x² − 6x + 9",
      "2x² − 12x + 9"
     ],
     "err": [
      "oublie le double produit",
      "ne double pas le produit",
      "n'élève pas le 2 au carré"
     ]
    },
    {
     "id": "A4",
     "q": "Les solutions de x² = 5x sont",
     "ok": "0 et 5",
     "bad": [
      "5 seulement",
      "−5 et 0",
      "√5 et −√5"
     ],
     "err": [
      "divise par x et perd la solution 0",
      "erreur de signe en factorisant",
      "lit x² = 5"
     ]
    },
    {
     "id": "A5",
     "q": "−2x + 6 > 0 équivaut à",
     "ok": "x < 3",
     "bad": [
      "x > 3",
      "x < −3",
      "x > −3"
     ],
     "err": [
      "ne change pas le sens en divisant par un négatif",
      "erreur de signe sur le 6",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "A6",
     "q": "La droite passant par A(1 ; 2) et B(3 ; −4) a pour coefficient directeur",
     "ok": "−3",
     "bad": [
      "3",
      "−1/3",
      "−1"
     ],
     "err": [
      "erreur de signe",
      "inverse le quotient",
      "calcule −4 + 2 au lieu de −4 − 2"
     ]
    },
    {
     "id": "A7",
     "q": "Un prix augmente de 20 %, puis baisse de 20 %. Au total, il",
     "ok": "baisse de 4 %",
     "bad": [
      "ne change pas",
      "augmente de 4 %",
      "baisse de 0,04 %"
     ],
     "err": [
      "additionne les pourcentages",
      "calcule 0,96 mais se trompe de sens",
      "confond 0,04 et 0,04 %"
     ]
    },
    {
     "id": "A8",
     "q": "√50 − √8 =",
     "ok": "3√2",
     "bad": [
      "√42",
      "3",
      "7√2"
     ],
     "err": [
      "soustrait sous la racine",
      "perd la racine en simplifiant",
      "additionne au lieu de soustraire"
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
     "q": "Le discriminant de 2x² − 3x − 2 vaut",
     "ok": "25",
     "bad": [
      "−7",
      "13",
      "7"
     ],
     "err": [
      "erreur de signe dans −4ac quand c est négatif",
      "oublie le facteur 4",
      "calcule (−3)² = −9"
     ]
    },
    {
     "id": "P2",
     "q": "Les solutions de x² − 5x + 6 = 0 sont",
     "ok": "2 et 3",
     "bad": [
      "−2 et −3",
      "1 et 6",
      "−1 et 6"
     ],
     "err": [
      "erreur de signe sur −b",
      "bon produit, mauvaise somme",
      "lit c = −6"
     ]
    },
    {
     "id": "P3",
     "q": "L'ensemble des solutions de −x² + 4x − 3 > 0 est",
     "ok": "]1 ; 3[",
     "bad": [
      "]−∞ ; 1[ ∪ ]3 ; +∞[",
      "[1 ; 3]",
      "]−3 ; −1["
     ],
     "err": [
      "oublie que a est négatif",
      "confond inégalité stricte et large",
      "erreur de signe sur les racines"
     ]
    },
    {
     "id": "P4",
     "q": "Le minimum de f(x) = x² − 6x + 5 vaut",
     "ok": "−4",
     "bad": [
      "5",
      "3",
      "32"
     ],
     "err": [
      "prend le terme constant",
      "confond l'abscisse du sommet et la valeur",
      "calcule en x = −3"
     ]
    },
    {
     "id": "P5",
     "q": "(u_n) est arithmétique, u_0 = 5, raison −3. Alors u_10 =",
     "ok": "−25",
     "bad": [
      "−22",
      "35",
      "5 × (−3)^10"
     ],
     "err": [
      "compte 9 pas au lieu de 10",
      "erreur de signe sur la raison",
      "confond arithmétique et géométrique"
     ]
    },
    {
     "id": "P6",
     "q": "(u_n) est géométrique, u_0 = 3, raison 2. Alors u_5 =",
     "ok": "96",
     "bad": [
      "48",
      "13",
      "7 776"
     ],
     "err": [
      "décalage d'un rang",
      "confond géométrique et arithmétique",
      "multiplie 3 par 2 avant la puissance"
     ]
    },
    {
     "id": "P7",
     "q": "u_0 = 2 et u_(n+1) = 2u_n − 1. Alors u_3 =",
     "ok": "9",
     "bad": [
      "5",
      "17",
      "7"
     ],
     "err": [
      "s'arrête à u_2",
      "va jusqu'à u_4",
      "prolonge 3, 5 en ajoutant 2 (croit la suite arithmétique)"
     ]
    },
    {
     "id": "P8",
     "q": "Pour f(x) = x², le taux de variation entre 1 et 3 vaut",
     "ok": "4",
     "bad": [
      "8",
      "2",
      "6"
     ],
     "err": [
      "oublie de diviser par l'écart",
      "donne le nombre dérivé en 1",
      "donne le nombre dérivé en 3"
     ]
    },
    {
     "id": "P9",
     "q": "P(A) = 0,4 ; P(B) = 0,5 ; P(A∩B) = 0,2. Alors P(A∪B) =",
     "ok": "0,7",
     "bad": [
      "0,9",
      "0,2",
      "0,3"
     ],
     "err": [
      "oublie de retirer l'intersection",
      "confond réunion et intersection",
      "soustrait sans utiliser P(A)"
     ]
    },
    {
     "id": "P10",
     "q": "Dans une classe, 60 % des élèves sont des filles et 30 % des élèves sont des filles qui font allemand. On choisit une fille au hasard. La probabilité qu'elle fasse allemand est",
     "ok": "0,5",
     "bad": [
      "0,18",
      "0,3",
      "0,9"
     ],
     "err": [
      "multiplie les deux pourcentages",
      "confond P(F∩A) et la probabilité sachant F",
      "additionne"
     ]
    },
    {
     "id": "P11",
     "q": "A(1 ; 2) et B(4 ; 6). La distance AB vaut",
     "ok": "5",
     "bad": [
      "7",
      "25",
      "√89"
     ],
     "err": [
      "additionne les écarts sans Pythagore",
      "oublie la racine",
      "additionne les coordonnées au lieu de les soustraire"
     ]
    },
    {
     "id": "P12",
     "q": "Le système x + y = 5 et x − y = 1 a pour solution (x ; y) =",
     "ok": "(3 ; 2)",
     "bad": [
      "(2 ; 3)",
      "(3 ; −2)",
      "(4 ; 1)"
     ],
     "err": [
      "inverse x et y",
      "erreur de signe",
      "ne vérifie qu'une seule des deux équations"
     ]
    }
   ],
   "redaction": "Soit f la fonction définie sur ℝ par f(x) = x² − 4x + 3.\n1. Résoudre l'équation f(x) = 0.\n2. Dresser le tableau de signes de f(x).\n3. En déduire l'ensemble des solutions de f(x) ≤ 0.\nRédige comme sur une copie.",
   "corrige": "discriminant 16 − 12 = 4, racines 1 et 3. Le coefficient de x² est positif : f(x) est positif à l'extérieur des racines, négatif entre elles, nul en 1 et en 3. Solutions de f(x) ≤ 0 : l'intervalle [1 ; 3]."
  },
  "T": {
   "titre": "élève de terminale",
   "questions": [
    {
     "id": "T1",
     "q": "f(x) = x³ − 3x² + 2. Alors f′(x) =",
     "ok": "3x² − 6x",
     "bad": [
      "3x² − 6x + 2",
      "3x² − 3x",
      "x⁴/4 − x³ + 2x"
     ],
     "err": [
      "ne dérive pas la constante",
      "oublie le facteur 2 en dérivant −3x²",
      "confond dérivée et primitive"
     ]
    },
    {
     "id": "T2",
     "q": "f(x) = x e^x. Alors f′(x) =",
     "ok": "(x + 1) e^x",
     "bad": [
      "e^x",
      "x e^x",
      "x e^(x−1)"
     ],
     "err": [
      "multiplie les dérivées des deux facteurs",
      "traite x comme une constante et ne dérive que e^x",
      "applique la règle de x^n à l'exponentielle"
     ]
    },
    {
     "id": "T3",
     "q": "f(x) = (2x + 1)/(x − 1). Alors f′(x) =",
     "ok": "−3/(x − 1)²",
     "bad": [
      "2",
      "3/(x − 1)²",
      "−3/(x − 1)"
     ],
     "err": [
      "divise les dérivées",
      "inverse l'ordre de la formule",
      "oublie le carré au dénominateur"
     ]
    },
    {
     "id": "T4",
     "q": "La solution de e^(2x−1) = 1 est",
     "ok": "x = 1/2",
     "bad": [
      "x = 1",
      "x = 0",
      "il n'y en a pas"
     ],
     "err": [
      "confond e^0 = 1 et e^1 = e",
      "retient « exposant nul » et répond x = 0 sans résoudre 2x − 1 = 0",
      "croit que l'exponentielle ne vaut jamais 1"
     ]
    },
    {
     "id": "T5",
     "q": "f′(x) = (3 − x) e^x sur ℝ. Alors f est",
     "ok": "croissante jusqu'à 3, puis décroissante",
     "bad": [
      "décroissante jusqu'à 3, puis croissante",
      "croissante sur ℝ",
      "décroissante sur ℝ"
     ],
     "err": [
      "erreur de signe sur 3 − x",
      "ne regarde que e^x, positif",
      "ne regarde que le signe « − »"
     ]
    },
    {
     "id": "T6",
     "q": "La tangente à la courbe de f(x) = x² au point d'abscisse 1 a pour équation",
     "ok": "y = 2x − 1",
     "bad": [
      "y = 2x + 1",
      "y = 2x",
      "y = x"
     ],
     "err": [
      "erreur de signe dans la formule",
      "oublie l'ordonnée à l'origine",
      "prend f(1) comme pente"
     ]
    },
    {
     "id": "T7",
     "q": "u_n = n² − 4n. La suite (u_n) est",
     "ok": "croissante à partir du rang 2",
     "bad": [
      "croissante dès le rang 0",
      "décroissante dès le rang 0",
      "constante à partir d'un certain rang"
     ],
     "err": [
      "ne regarde que n²",
      "ne regarde que les premiers termes",
      "lit mal les termes u_1 = u_3 = −3"
     ]
    },
    {
     "id": "T8",
     "q": "La limite de (3n² + 1)/(n² − 5) quand n tend vers +∞ est",
     "ok": "3",
     "bad": [
      "+∞",
      "1",
      "−1/5"
     ],
     "err": [
      "croit que « infini sur infini » donne l'infini",
      "croit que « infini sur infini » donne 1",
      "prend les constantes"
     ]
    },
    {
     "id": "T9",
     "q": "1 + 2 + 4 + … + 2^10 =",
     "ok": "2 047",
     "bad": [
      "1 023",
      "2 048",
      "2 046"
     ],
     "err": [
      "compte un terme de moins",
      "oublie le −1 de la formule",
      "commence la somme à 2"
     ]
    },
    {
     "id": "T10",
     "q": "Pour prouver par récurrence que u_n ≥ 2 pour tout n, l'étape d'hérédité consiste à",
     "ok": "supposer u_n ≥ 2 pour un entier n fixé et en déduire u_(n+1) ≥ 2",
     "bad": [
      "supposer u_n ≥ 2 pour tout n et en déduire u_(n+1) ≥ 2",
      "vérifier que u_0, u_1 et u_2 sont supérieurs à 2",
      "montrer que u_(n+1) ≥ u_n"
     ],
     "err": [
      "suppose ce qu'il faut prouver",
      "confond exemples et preuve",
      "confond récurrence et sens de variation"
     ]
    },
    {
     "id": "T11",
     "q": "P(A) = 0,3 ; la probabilité de B sachant A vaut 0,8 ; la probabilité de B sachant « non A » vaut 0,1. Alors P(B) =",
     "ok": "0,31",
     "bad": [
      "0,9",
      "0,24",
      "0,08"
     ],
     "err": [
      "additionne les branches",
      "oublie le second chemin de l'arbre",
      "multiplie deux branches qui ne se suivent pas"
     ]
    },
    {
     "id": "T12",
     "q": "Dans un repère orthonormé, u(2 ; −1) et v(3 ; 6). Alors",
     "ok": "u et v sont orthogonaux",
     "bad": [
      "u et v sont colinéaires",
      "u·v = 12",
      "u·v = (6 ; −6)"
     ],
     "err": [
      "confond les deux critères",
      "erreur de signe",
      "croit que le produit scalaire est un vecteur"
     ]
    }
   ],
   "redaction": "Soit f la fonction définie sur ℝ par f(x) = (x − 2) e^x.\n1. Calculer f′(x).\n2. Étudier le signe de f′(x) et dresser le tableau de variations de f.\n3. En déduire le minimum de f sur ℝ.\nRédige comme sur une copie.",
   "corrige": "f′(x) = e^x + (x − 2) e^x = (x − 1) e^x. Comme e^x > 0, f′(x) a le signe de x − 1 : f est décroissante sur ]−∞ ; 1] et croissante sur [1 ; +∞[. Le minimum est f(1) = −e."
  }
 },
 "domaines": [
  {
   "nom": "Calcul",
   "ids": {
    "P": [
     "A1",
     "A2",
     "A3",
     "A7",
     "A8"
    ],
    "T": [
     "A1",
     "A2",
     "A3",
     "A7",
     "A8"
    ]
   }
  },
  {
   "nom": "Équations et inéquations",
   "ids": {
    "P": [
     "A4",
     "A5",
     "P12"
    ],
    "T": [
     "A4",
     "A5",
     "T4"
    ]
   }
  },
  {
   "nom": "Second degré",
   "ids": {
    "P": [
     "P1",
     "P2",
     "P3",
     "P4"
    ],
    "T": []
   }
  },
  {
   "nom": "Dérivation et fonctions",
   "ids": {
    "P": [
     "A6",
     "P8"
    ],
    "T": [
     "A6",
     "T1",
     "T2",
     "T3",
     "T5",
     "T6"
    ]
   }
  },
  {
   "nom": "Suites",
   "ids": {
    "P": [
     "P5",
     "P6",
     "P7"
    ],
    "T": [
     "T7",
     "T8",
     "T9",
     "T10"
    ]
   }
  },
  {
   "nom": "Probabilités",
   "ids": {
    "P": [
     "P9",
     "P10"
    ],
    "T": [
     "T11"
    ]
   }
  },
  {
   "nom": "Géométrie",
   "ids": {
    "P": [
     "P11"
    ],
    "T": [
     "T12"
    ]
   }
  }
 ],
 "criteres": [
  "Méthode",
  "Calcul",
  "Justification",
  "Rédaction",
  "Soin et aisance"
 ]
};
