window.DIAGS = window.DIAGS || {};
window.DIAGS["maths-bts"] = {
 "cle": "maths-bts",
 "matiere": "maths",
 "titre": "Test de maths",
 "nom": "Test de maths, première année de BTS",
 "commun": "B",
 "niveaux": [
  [
   "S",
   "BTS"
  ]
 ],
 "classes": [
  [
   "Première année de BTS",
   "S"
  ],
  [
   "Deuxième année de BTS",
   "S"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers étudiants : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-maths-bts.md",
 "blocs": {
  "B": {
   "titre": "bases de calcul dont le BTS a besoin",
   "questions": [
    {
     "id": "B1",
     "q": "3/4 − 2/5 =",
     "ok": "7/20",
     "bad": [
      "−1",
      "1/20",
      "23/20"
     ],
     "err": [
      "soustrait les numérateurs entre eux et les dénominateurs entre eux",
      "trouve le dénominateur commun 20 mais ne transforme pas les numérateurs",
      "additionne au lieu de soustraire"
     ]
    },
    {
     "id": "B2",
     "q": "(3/5) ÷ (9/10) =",
     "ok": "2/3",
     "bad": [
      "27/50",
      "3/2",
      "27/5"
     ],
     "err": [
      "multiplie les deux fractions sans retourner la seconde",
      "retourne la première fraction au lieu de la seconde",
      "multiplie par 9 au lieu de diviser par 9/10"
     ]
    },
    {
     "id": "B3",
     "q": "2³ × 2⁴ =",
     "ok": "2⁷",
     "bad": [
      "2¹²",
      "4⁷",
      "4¹²"
     ],
     "err": [
      "multiplie les exposants au lieu de les additionner",
      "multiplie les bases entre elles",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "B4",
     "q": "10⁵ / 10⁻² =",
     "ok": "10⁷",
     "bad": [
      "10³",
      "10⁻¹⁰",
      "10⁻⁷"
     ],
     "err": [
      "ajoute l'exposant −2 au lieu de le retirer",
      "multiplie les exposants",
      "inverse le quotient"
     ]
    },
    {
     "id": "B5",
     "q": "Un prix de 80 € augmente de 15 %. Le nouveau prix est",
     "ok": "92 €",
     "bad": [
      "95 €",
      "12 €",
      "120 €"
     ],
     "err": [
      "ajoute 15 € au lieu de 15 %",
      "donne le montant de la hausse, pas le nouveau prix",
      "multiplie par 1,5 au lieu de 1,15"
     ]
    },
    {
     "id": "B6",
     "q": "Un prix augmente de 20 %, puis baisse de 20 %. Au total, il",
     "ok": "baisse de 4 %",
     "bad": [
      "revient au prix de départ",
      "augmente de 4 %",
      "baisse de 40 %"
     ],
     "idee_fausse": true,
     "err": [
      "additionne les pourcentages comme s'ils portaient sur le même prix",
      "se trompe de sens sur le résultat",
      "additionne les deux taux et ne garde que le sens du dernier"
     ]
    },
    {
     "id": "B7",
     "q": "La solution de 3x − 7 = 5x + 1 est",
     "ok": "x = −4",
     "bad": [
      "x = 4",
      "x = −1",
      "x = 3"
     ],
     "err": [
      "perd le signe en divisant 8 par −2",
      "passe 3x à droite sans changer son signe : écrit −7 = 8x + 1",
      "calcule 1 − 7 au lieu de 1 + 7"
     ]
    },
    {
     "id": "B8",
     "q": "(2x − 3)(x + 4) =",
     "ok": "2x² + 5x − 12",
     "bad": [
      "2x² − 12",
      "2x² + 11x − 12",
      "2x² + 5x + 12"
     ],
     "err": [
      "ne multiplie que les premiers termes et les derniers",
      "erreur de signe sur −3x",
      "erreur de signe sur −3 × 4"
     ]
    },
    {
     "id": "B9",
     "q": "La forme factorisée de 6x² − 9x est",
     "ok": "3x(2x − 3)",
     "bad": [
      "3x(2x + 3)",
      "3x(2x − 9)",
      "3x(2x² − 3)"
     ],
     "err": [
      "erreur de signe sur le second terme",
      "ne divise pas le second terme par 3",
      "ne baisse pas le degré du premier terme"
     ]
    },
    {
     "id": "B10",
     "q": "L'inéquation 4 − 2x > 0 a pour solutions",
     "ok": "x < 2",
     "bad": [
      "x > 2",
      "x < −2",
      "x > −2"
     ],
     "err": [
      "ne change pas le sens de l'inégalité en divisant par un nombre négatif",
      "erreur de signe en déplaçant le 4",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "B11",
     "q": "La droite d'équation y = −3x + 2 a pour coefficient directeur",
     "ok": "−3",
     "bad": [
      "2",
      "3",
      "−3x"
     ],
     "err": [
      "confond coefficient directeur et ordonnée à l'origine",
      "oublie le signe",
      "donne le terme entier, pas le coefficient"
     ]
    },
    {
     "id": "B12",
     "q": "Soit f(x) = x² − 5. L'image de −3 par f est",
     "ok": "4",
     "bad": [
      "−14",
      "−11",
      "−8"
     ],
     "err": [
      "calcule −3² = −9 : ne met pas le nombre négatif entre parenthèses",
      "calcule 2 × (−3) au lieu du carré",
      "oublie le carré : calcule −3 − 5"
     ]
    },
    {
     "id": "B13",
     "q": "La dérivée de f(x) = 2x³ − 5x² + 4 est",
     "ok": "6x² − 10x",
     "bad": [
      "6x² − 10x + 4",
      "2x² − 5x",
      "6x³ − 10x²"
     ],
     "err": [
      "garde la constante dans la dérivée",
      "baisse l'exposant sans multiplier par lui",
      "multiplie par l'exposant sans le baisser"
     ]
    },
    {
     "id": "B14",
     "q": "(u_n) est arithmétique, de premier terme u_0 = 7 et de raison 4. Alors u_5 =",
     "ok": "27",
     "bad": [
      "23",
      "7 × 4⁵",
      "31"
     ],
     "err": [
      "compte un terme de moins",
      "applique la formule d'une suite géométrique",
      "compte un terme de trop"
     ]
    },
    {
     "id": "B15",
     "q": "(u_n) est géométrique, de premier terme u_0 = 3 et de raison 2. Alors u_4 =",
     "ok": "48",
     "bad": [
      "24",
      "11",
      "1 296"
     ],
     "err": [
      "compte un rang de moins",
      "ajoute la raison au lieu de multiplier",
      "met tout le produit 3 × 2 à la puissance 4"
     ]
    },
    {
     "id": "B16",
     "q": "log désigne le logarithme décimal. log(1 000) =",
     "ok": "3",
     "bad": [
      "100",
      "0,001",
      "10"
     ],
     "err": [
      "divise par 10 au lieu de chercher l'exposant",
      "donne l'inverse du nombre",
      "confond le logarithme avec la base"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "S": {
   "titre": "notions du programme de BTS",
   "questions": [
    {
     "id": "S1",
     "q": "Les solutions de 2x² − 5x + 2 = 0 sont",
     "ok": "2 et 1/2",
     "bad": [
      "−2 et −1/2",
      "4 et 1",
      "(5 + √41)/4 et (5 − √41)/4"
     ],
     "err": [
      "erreur de signe sur −b dans la formule",
      "divise par a au lieu de 2a",
      "erreur de signe dans le discriminant : calcule 25 + 16"
     ]
    },
    {
     "id": "S2",
     "q": "ln désigne le logarithme népérien. ln(e²) + ln(1) =",
     "ok": "2",
     "bad": [
      "3",
      "e²",
      "2e"
     ],
     "err": [
      "prend ln(1) = 1 au lieu de 0",
      "ne voit pas que ln et l'exponentielle se compensent",
      "lit ln(e²) comme 2 × e"
     ]
    },
    {
     "id": "S3",
     "q": "La solution de e^x = 3 est",
     "ok": "ln(3)",
     "bad": [
      "3/e",
      "e³",
      "log(3), où log est le logarithme décimal"
     ],
     "err": [
      "traite e comme un facteur : écrit e × x = 3",
      "applique l'exponentielle au lieu du logarithme",
      "confond logarithme décimal et logarithme népérien"
     ]
    },
    {
     "id": "S4",
     "q": "La dérivée de e^(3x) est",
     "ok": "3 e^(3x)",
     "bad": [
      "e^(3x)",
      "3x e^(3x − 1)",
      "3 e^x"
     ],
     "err": [
      "oublie le facteur 3 venu de la dérivée de 3x",
      "applique la règle de dérivation de x^n à une exponentielle",
      "dérive l'exposant et perd le 3 dans l'exponentielle"
     ]
    },
    {
     "id": "S5",
     "q": "La dérivée de x e^x est",
     "ok": "(1 + x) e^x",
     "bad": [
      "e^x",
      "x e^x",
      "1 + e^x"
     ],
     "err": [
      "multiplie les dérivées des deux facteurs",
      "ne dérive que l'exponentielle, ou pense que e^x laisse toute dérivée inchangée",
      "dérive le produit comme une somme"
     ]
    },
    {
     "id": "S6",
     "q": "Pour x > 0, la dérivée de ln(x) + 1/x est",
     "ok": "1/x − 1/x²",
     "bad": [
      "1/x + 1/x²",
      "1/x + ln(x)",
      "1/x"
     ],
     "err": [
      "erreur de signe sur la dérivée de 1/x",
      "prend une primitive de 1/x au lieu de sa dérivée",
      "traite 1/x comme une constante"
     ]
    },
    {
     "id": "S7",
     "q": "La limite de 1/x quand x tend vers +∞ est",
     "ok": "0",
     "bad": [
      "+∞",
      "1",
      "elle n'existe pas"
     ],
     "idee_fausse": true,
     "err": [
      "pense qu'une expression où x devient grand devient grande",
      "confond avec la valeur de 1/x en x = 1",
      "pense qu'on ne peut pas conclure avec l'infini"
     ]
    },
    {
     "id": "S8",
     "q": "La limite de (2x + 1)/(x − 3) quand x tend vers +∞ est",
     "ok": "2",
     "bad": [
      "+∞",
      "−1/3",
      "1"
     ],
     "err": [
      "pense qu'un quotient de deux grands nombres est grand",
      "remplace x par 0",
      "pense qu'un quotient de deux grands nombres vaut 1"
     ]
    },
    {
     "id": "S9",
     "q": "La limite de e^(−x) quand x tend vers +∞ est",
     "ok": "0",
     "bad": [
      "−∞",
      "+∞",
      "1"
     ],
     "err": [
      "reporte le signe moins de l'exposant sur le résultat",
      "ignore le signe de l'exposant",
      "remplace x par 0"
     ]
    },
    {
     "id": "S10",
     "q": "Une primitive de 3x² + 2 est",
     "ok": "x³ + 2x",
     "bad": [
      "6x",
      "x³ + 2",
      "3x³ + 2x"
     ],
     "err": [
      "dérive au lieu de chercher une primitive",
      "oublie la primitive de la constante",
      "ne divise pas par le nouvel exposant"
     ]
    },
    {
     "id": "S11",
     "q": "L'intégrale de 0 à 2 de 2x dx vaut",
     "ok": "4",
     "bad": [
      "8",
      "2",
      "x²"
     ],
     "err": [
      "multiplie la valeur en 2 par la longueur de l'intervalle, sans intégrer",
      "dérive au lieu d'intégrer",
      "donne une primitive, pas un nombre"
     ]
    },
    {
     "id": "S12",
     "q": "Les solutions de l'équation différentielle y' = 2y sont les fonctions (C constante réelle)",
     "ok": "C e^(2x)",
     "bad": [
      "C e^(−2x)",
      "2x + C",
      "e^(2x) + C"
     ],
     "err": [
      "erreur de signe dans l'exposant",
      "intègre 2 comme si y n'apparaissait pas",
      "ajoute la constante au lieu de la mettre en facteur"
     ]
    }
   ],
   "redaction": "Soit f la fonction définie sur [0 ; 5] par f(x) = x² − 4x + 3.\n1. Calcule f'(x), étudie son signe et donne les variations de f sur [0 ; 5].\n2. Donne le minimum de f sur [0 ; 5] et la valeur de x où il est atteint.\n3. Résous l'équation f(x) = 0.\nRédige chaque étape : ce que tu utilises, le calcul, la conclusion.",
   "corrige": "1. f'(x) = 2x − 4. f'(x) est négatif sur [0 ; 2[, nul en 2, positif sur ]2 ; 5]. Donc f est décroissante sur [0 ; 2] et croissante sur [2 ; 5]. 2. D'après les variations, le minimum est atteint en x = 2 et vaut f(2) = 4 − 8 + 3 = −1. 3. Le discriminant vaut 16 − 12 = 4, donc les solutions sont (4 − 2)/2 = 1 et (4 + 2)/2 = 3. Autre méthode acceptée : f(x) = (x − 1)(x − 3), qui s'annule en 1 et en 3. Les deux valeurs sont dans [0 ; 5]."
  }
 },
 "domaines": [
  {
   "nom": "Bases : fractions, puissances et pourcentages",
   "ids": {
    "S": [
     "B1",
     "B2",
     "B3",
     "B4",
     "B5",
     "B6"
    ]
   }
  },
  {
   "nom": "Bases : calcul littéral, équations et inéquations",
   "ids": {
    "S": [
     "B7",
     "B8",
     "B9",
     "B10"
    ]
   }
  },
  {
   "nom": "Bases : fonctions et dérivée d'un polynôme",
   "ids": {
    "S": [
     "B11",
     "B12",
     "B13"
    ]
   }
  },
  {
   "nom": "Bases : suites et logarithme décimal",
   "ids": {
    "S": [
     "B14",
     "B15",
     "B16"
    ]
   }
  },
  {
   "nom": "BTS : second degré, logarithme népérien et exponentielle",
   "ids": {
    "S": [
     "S1",
     "S2",
     "S3"
    ]
   }
  },
  {
   "nom": "BTS : dérivation",
   "ids": {
    "S": [
     "S4",
     "S5",
     "S6"
    ]
   }
  },
  {
   "nom": "BTS : limites",
   "ids": {
    "S": [
     "S7",
     "S8",
     "S9"
    ]
   }
  },
  {
   "nom": "BTS : primitives, intégrales et équations différentielles",
   "ids": {
    "S": [
     "S10",
     "S11",
     "S12"
    ]
   }
  }
 ],
 "criteres": [
  "Calcul",
  "Justification",
  "Enchaînement",
  "Contrôle",
  "Rédaction"
 ]
};
