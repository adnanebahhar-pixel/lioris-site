window.DIAGS = window.DIAGS || {};
window.DIAGS["maths-superieur"] = {
 "cle": "maths-superieur",
 "matiere": "maths",
 "titre": "Test de maths",
 "nom": "Test de maths, première année du supérieur",
 "commun": "L",
 "niveaux": [
  [
   "S",
   "Première année"
  ]
 ],
 "classes": [
  [
   "Première année du supérieur",
   "S"
  ]
 ],
 "duree": "55 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-maths-superieur.md",
 "blocs": {
  "L": {
   "titre": "acquis du lycée dont la première année a besoin",
   "questions": [
    {
     "id": "L1",
     "q": "(2/3 − 1/4) / (5/6) =",
     "ok": "1/2",
     "bad": [
      "25/72",
      "2",
      "−6/5"
     ],
     "err": [
      "multiplie par 5/6 au lieu de diviser",
      "inverse le quotient final",
      "soustrait numérateurs et dénominateurs entre eux au lieu de réduire au même dénominateur"
     ]
    },
    {
     "id": "L2",
     "q": "Pour x non nul, (x³)² × x^(−4) / x =",
     "ok": "x",
     "bad": [
      "1",
      "x³",
      "x⁹"
     ],
     "err": [
      "additionne 3 et 2 au lieu de les multiplier dans la puissance de puissance",
      "ajoute l'exposant du dénominateur au lieu de le retirer",
      "ignore le signe de l'exposant −4"
     ]
    },
    {
     "id": "L3",
     "q": "Les solutions de 2x² − 3x − 2 = 0 sont",
     "ok": "2 et −1/2",
     "bad": [
      "−2 et 1/2",
      "4 et −1",
      "aucune solution réelle"
     ],
     "err": [
      "erreur de signe sur −b dans la formule",
      "divise par a au lieu de 2a",
      "erreur de signe dans le discriminant : calcule 9 − 16"
     ]
    },
    {
     "id": "L4",
     "q": "ln(e³) − ln(1/e) + e^(ln 2) =",
     "ok": "6",
     "bad": [
      "4",
      "5",
      "4 + e²"
     ],
     "err": [
      "prend ln(1/e) = 1 au lieu de −1",
      "prend ln(1/e) = 0",
      "prend e^(ln 2) = e²"
     ]
    },
    {
     "id": "L5",
     "q": "La solution de e^(2x) = 5 est",
     "ok": "ln(5)/2",
     "bad": [
      "ln(5) − 2",
      "5/(2e)",
      "ln(5/2)"
     ],
     "err": [
      "transforme la division par 2 en soustraction",
      "traite e comme un facteur : écrit 2x × e = 5",
      "confond ln(5)/2 et ln(5/2)"
     ]
    },
    {
     "id": "L6",
     "q": "L'inéquation −2x + 6 > 0 a pour solutions",
     "ok": "x < 3",
     "bad": [
      "x > 3",
      "x < −3",
      "x > −3"
     ],
     "err": [
      "ne change pas le sens de l'inégalité en divisant par un nombre négatif",
      "erreur de signe en déplaçant le 6",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "L7",
     "q": "cos(π/3) + sin(π/6) =",
     "ok": "1",
     "bad": [
      "√3",
      "(1 + √3)/2",
      "π/2"
     ],
     "err": [
      "échange les valeurs de π/3 et de π/6",
      "se trompe sur une seule des deux valeurs",
      "additionne les angles au lieu des valeurs"
     ]
    },
    {
     "id": "L8",
     "q": "La dérivée de x e^(2x) est",
     "ok": "(1 + 2x) e^(2x)",
     "bad": [
      "2 e^(2x)",
      "(1 + x) e^(2x)",
      "2x e^(2x)"
     ],
     "err": [
      "multiplie les dérivées des deux facteurs",
      "oublie le facteur 2 venu de la dérivée de 2x",
      "ne dérive que l'exponentielle"
     ]
    },
    {
     "id": "L9",
     "q": "Pour x > −1/3, la dérivée de √(3x + 1) est",
     "ok": "3/(2√(3x + 1))",
     "bad": [
      "1/(2√(3x + 1))",
      "3/√(3x + 1)",
      "3√(3x + 1)/2"
     ],
     "err": [
      "oublie de multiplier par la dérivée de 3x + 1",
      "oublie le 2 de la dérivée de la racine",
      "ne baisse pas l'exposant : garde la racine au numérateur"
     ]
    },
    {
     "id": "L10",
     "q": "Sur l'intervalle [0 ; 4], la fonction f(x) = x³ − 12x atteint son minimum en x =",
     "ok": "2",
     "bad": [
      "−2",
      "4",
      "0"
     ],
     "err": [
      "garde la racine de la dérivée qui est hors de l'intervalle",
      "lit x² = 4 comme x = 4",
      "annule f au lieu d'annuler sa dérivée"
     ]
    },
    {
     "id": "L11",
     "q": "La tangente à la courbe de f(x) = x² au point d'abscisse 1 a pour équation",
     "ok": "y = 2x − 1",
     "bad": [
      "y = 2x + 1",
      "y = 2x",
      "y = x"
     ],
     "err": [
      "erreur de signe : écrit x + 1 au lieu de x − 1",
      "donne seulement la pente, sans l'ordonnée à l'origine",
      "prend f(1) au lieu de f'(1) comme pente"
     ]
    },
    {
     "id": "L12",
     "q": "L'intégrale de 0 à 2 de (3x² + 1) dx vaut",
     "ok": "10",
     "bad": [
      "13",
      "12",
      "26"
     ],
     "err": [
      "calcule la valeur de la fonction en 2 au lieu d'intégrer",
      "dérive au lieu d'intégrer",
      "oublie de diviser par 3 dans la primitive de 3x²"
     ]
    },
    {
     "id": "L13",
     "q": "Une primitive de e^(−3x) est",
     "ok": "−e^(−3x)/3",
     "bad": [
      "−3 e^(−3x)",
      "e^(−3x)/3",
      "e^(−3x + 1)/(−3x + 1)"
     ],
     "err": [
      "dérive au lieu de chercher une primitive",
      "oublie le signe moins",
      "applique la règle des puissances de x à une exponentielle"
     ]
    },
    {
     "id": "L14",
     "q": "(u_n) est arithmétique, avec u_0 = 5 et une raison égale à −3. Alors u_10 =",
     "ok": "−25",
     "bad": [
      "−22",
      "35",
      "5 × (−3)^10"
     ],
     "err": [
      "compte 9 pas au lieu de 10",
      "ajoute la raison au lieu de la retirer",
      "confond suite arithmétique et suite géométrique"
     ]
    },
    {
     "id": "L15",
     "q": "(u_n) est géométrique, avec u_0 = 2 et une raison égale à 3. La somme u_0 + u_1 + u_2 + u_3 vaut",
     "ok": "80",
     "bad": [
      "242",
      "54",
      "26"
     ],
     "err": [
      "compte cinq termes au lieu de quatre",
      "donne le dernier terme au lieu de la somme",
      "traite la suite comme arithmétique"
     ]
    },
    {
     "id": "L16",
     "q": "La limite de (3n² + 1)/(n² − 2n) quand n tend vers +∞ est",
     "ok": "3",
     "bad": [
      "+∞",
      "−1/2",
      "1"
     ],
     "err": [
      "ne regarde que le numérateur",
      "ne garde que les termes de plus bas degré",
      "croit que « infini sur infini » donne 1"
     ]
    },
    {
     "id": "L17",
     "q": "La limite de ln(x)/x quand x tend vers +∞ est",
     "ok": "0",
     "bad": [
      "+∞",
      "1",
      "elle n'existe pas : c'est une forme indéterminée"
     ],
     "err": [
      "ne regarde que le numérateur",
      "croit que ln(x) et x grandissent à la même vitesse",
      "s'arrête à la forme indéterminée sans utiliser les croissances comparées"
     ]
    },
    {
     "id": "L18",
     "q": "« Si un entier est multiple de 6, alors il est pair. » Quelle phrase dit exactement la même chose ?",
     "ok": "Si un entier est impair, alors il n'est pas multiple de 6",
     "bad": [
      "Si un entier est pair, alors il est multiple de 6",
      "Si un entier n'est pas multiple de 6, alors il est impair",
      "Un entier est pair si et seulement s'il est multiple de 6"
     ],
     "idee_fausse": true,
     "err": [
      "confond une implication et sa réciproque",
      "nie les deux côtés sans les échanger : ce n'est pas la contraposée",
      "transforme l'implication en équivalence"
     ]
    },
    {
     "id": "L19",
     "q": "La négation de « pour tout réel x, f(x) ≥ 0 » est",
     "ok": "il existe un réel x tel que f(x) < 0",
     "bad": [
      "pour tout réel x, f(x) < 0",
      "il existe un réel x tel que f(x) ≥ 0",
      "il existe un réel x tel que f(x) ≤ 0"
     ],
     "err": [
      "nie l'inégalité sans changer le quantificateur",
      "change le quantificateur sans nier l'inégalité",
      "nie mal l'inégalité : le contraire de ≥ est <, pas ≤"
     ]
    },
    {
     "id": "L20",
     "q": "L'affirmation « pour tout réel x, x² ≥ x » est",
     "ok": "fausse : x = 1/2 est un contre-exemple",
     "bad": [
      "vraie : elle marche pour x = 2, x = 3 et x = 10",
      "vraie : un carré est toujours plus grand que le nombre de départ",
      "fausse : x = −1 est un contre-exemple"
     ],
     "idee_fausse": true,
     "err": [
      "croit que quelques exemples prouvent une affirmation générale",
      "croit qu'élever au carré agrandit toujours un nombre",
      "choisit un faux contre-exemple : (−1)² = 1 est bien plus grand que −1"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "S": {
   "titre": "notions habituelles de première année",
   "questions": [
    {
     "id": "S1",
     "q": "(1 + 2i)(3 − i) =",
     "ok": "5 + 5i",
     "bad": [
      "1 + 5i",
      "3 − 2i",
      "5 + 7i"
     ],
     "err": [
      "prend i² = 1 au lieu de −1",
      "multiplie les parties réelles entre elles et les parties imaginaires entre elles, sans développer",
      "erreur de signe sur le terme −i"
     ]
    },
    {
     "id": "S2",
     "q": "Le module de 3 − 4i vaut",
     "ok": "5",
     "bad": [
      "7",
      "−1",
      "25"
     ],
     "err": [
      "additionne 3 et 4",
      "additionne 3 et −4",
      "oublie la racine carrée"
     ]
    },
    {
     "id": "S3",
     "q": "Une forme exponentielle de 1 + i est",
     "ok": "√2 e^(iπ/4)",
     "bad": [
      "2 e^(iπ/4)",
      "√2 e^(iπ/2)",
      "e^(iπ/4)"
     ],
     "err": [
      "oublie la racine dans le module",
      "se trompe d'argument",
      "oublie le module"
     ]
    },
    {
     "id": "S4",
     "q": "Dans l'ensemble des nombres complexes, les solutions de z² + 2z + 5 = 0 sont",
     "ok": "−1 + 2i et −1 − 2i",
     "bad": [
      "il n'y en a aucune",
      "−1 + 4i et −1 − 4i",
      "1 + 2i et 1 − 2i"
     ],
     "err": [
      "raisonne dans les réels : discriminant négatif, donc rien",
      "oublie de diviser la racine du discriminant par 2",
      "erreur de signe sur −b"
     ]
    },
    {
     "id": "S5",
     "q": "La limite de sin(3x)/x quand x tend vers 0 est",
     "ok": "3",
     "bad": [
      "1",
      "0",
      "1/3"
     ],
     "err": [
      "applique « sin(x)/x tend vers 1 » sans tenir compte du 3",
      "croit que « zéro sur zéro » donne 0",
      "place le 3 au dénominateur"
     ]
    },
    {
     "id": "S6",
     "q": "Le développement limité de e^x à l'ordre 2 au voisinage de 0 est (au reste près)",
     "ok": "1 + x + x²/2",
     "bad": [
      "1 + x + x²",
      "x + x²/2",
      "1 + x"
     ],
     "err": [
      "oublie de diviser par 2 le terme en x²",
      "oublie le terme constant",
      "s'arrête à l'ordre 1"
     ]
    },
    {
     "id": "S7",
     "q": "La limite de (e^x − 1 − x)/x² quand x tend vers 0 est",
     "ok": "1/2",
     "bad": [
      "0",
      "1",
      "+∞"
     ],
     "err": [
      "s'arrête à l'ordre 1 : trouve un numérateur nul",
      "oublie le coefficient 1/2 du terme en x²",
      "ne regarde que le dénominateur"
     ]
    },
    {
     "id": "S8",
     "q": "La limite de √(x² + x) − x quand x tend vers +∞ est",
     "ok": "1/2",
     "bad": [
      "0",
      "+∞",
      "1"
     ],
     "err": [
      "croit que « infini moins infini » donne 0",
      "ne regarde que la racine, qui grandit",
      "oublie un des deux termes du dénominateur après la quantité conjuguée"
     ]
    },
    {
     "id": "S9",
     "q": "Les solutions de l'équation différentielle y' + 2y = 0 sont les fonctions (C constante réelle)",
     "ok": "C e^(−2x)",
     "bad": [
      "C e^(2x)",
      "−2x + C",
      "e^(−2x) + C"
     ],
     "err": [
      "erreur de signe dans l'exposant",
      "intègre −2 comme si y ne figurait pas dans l'équation",
      "ajoute la constante au lieu de la mettre en facteur"
     ]
    },
    {
     "id": "S10",
     "q": "La solution de y' + y = 3 qui vérifie y(0) = 0 est",
     "ok": "3 − 3 e^(−x)",
     "bad": [
      "3 − e^(−x)",
      "3 e^(−x) − 3",
      "3 − 3 e^x"
     ],
     "err": [
      "ne calcule pas la constante avec la condition initiale",
      "erreur de signe : donne la solution de y' + y = −3",
      "erreur de signe dans l'exposant"
     ]
    },
    {
     "id": "S11",
     "q": "Laquelle de ces fonctions est solution de y' = 2x y ?",
     "ok": "e^(x²)",
     "bad": [
      "e^(2x)",
      "x²",
      "e^(2x²)"
     ],
     "err": [
      "traite 2x comme la constante 2",
      "intègre 2x en oubliant y",
      "oublie de diviser par 2 en intégrant 2x"
     ]
    },
    {
     "id": "S12",
     "q": "A est la matrice de lignes (1 2) et (3 4), B la matrice de lignes (0 1) et (1 0). Le produit A × B est la matrice de lignes",
     "ok": "(2 1) et (4 3)",
     "bad": [
      "(3 4) et (1 2)",
      "(0 2) et (3 0)",
      "(1 3) et (4 4)"
     ],
     "err": [
      "calcule B × A : croit que le produit de matrices est commutatif",
      "multiplie coefficient par coefficient",
      "additionne les deux matrices"
     ]
    },
    {
     "id": "S13",
     "q": "Le déterminant de la matrice de lignes (2 3) et (1 4) vaut",
     "ok": "5",
     "bad": [
      "11",
      "−5",
      "8"
     ],
     "err": [
      "additionne les deux produits au lieu de les soustraire",
      "échange les deux diagonales",
      "ne calcule que le produit de la diagonale principale"
     ]
    },
    {
     "id": "S14",
     "q": "La matrice de lignes (1 2) et (2 4) est",
     "ok": "non inversible, car son déterminant est nul",
     "bad": [
      "inversible, car aucun de ses coefficients n'est nul",
      "inversible, car elle est carrée",
      "non inversible, car elle est symétrique"
     ],
     "err": [
      "croit qu'une matrice sans zéro est inversible",
      "croit que toute matrice carrée est inversible",
      "donne la bonne conclusion pour une mauvaise raison : la symétrie n'a aucun rapport"
     ]
    },
    {
     "id": "S15",
     "q": "Le système x + y = 3 et 2x + 2y = 5 a",
     "ok": "aucune solution",
     "bad": [
      "une seule solution, car il y a deux équations et deux inconnues",
      "une infinité de solutions, car son déterminant est nul",
      "pour solution x = 1 et y = 2"
     ],
     "err": [
      "compte les équations et les inconnues sans regarder si elles sont compatibles",
      "croit qu'un déterminant nul donne toujours une infinité de solutions",
      "ne vérifie que la première équation"
     ]
    },
    {
     "id": "S16",
     "q": "Pour qu'un quadrilatère soit un carré, être un rectangle est une condition",
     "ok": "nécessaire mais pas suffisante",
     "bad": [
      "suffisante mais pas nécessaire",
      "nécessaire et suffisante",
      "ni nécessaire ni suffisante"
     ],
     "err": [
      "confond nécessaire et suffisant",
      "croit que tout rectangle est un carré",
      "ne voit pas qu'un carré est un rectangle particulier"
     ]
    },
    {
     "id": "S17",
     "q": "La fonction qui à x associe x², de l'ensemble des réels vers l'ensemble des réels, est",
     "ok": "ni injective ni surjective",
     "bad": [
      "injective mais pas surjective",
      "surjective mais pas injective",
      "bijective"
     ],
     "err": [
      "oublie que x et −x ont le même carré",
      "oublie que les réels négatifs ne sont pas atteints",
      "cumule les deux oublis"
     ]
    },
    {
     "id": "S18",
     "q": "Dans une démonstration par récurrence, l'étape d'hérédité consiste à montrer que",
     "ok": "si la propriété est vraie à un rang n, alors elle est vraie au rang n + 1",
     "bad": [
      "la propriété est vraie au rang n + 1, sans rien supposer",
      "la propriété est vraie aux rangs 0 et 1",
      "la propriété est vraie pour tout n, puis qu'elle est vraie au rang n + 1"
     ],
     "err": [
      "oublie l'hypothèse de récurrence",
      "confond hérédité et initialisation",
      "suppose ce qu'il faut démontrer"
     ]
    }
   ],
   "redaction": "Soit f la fonction définie sur [0 ; +∞[ par f(x) = x e^(−x).\n1. Calcule f'(x), étudie son signe et donne les variations de f sur [0 ; +∞[.\n2. Déduis-en que, pour tout réel x positif ou nul, x e^(−x) ≤ 1/e.\n3. À l'aide d'une intégration par parties, calcule l'intégrale de 0 à 1 de x e^(−x) dx.\nRédige chaque étape : ce que tu utilises, le calcul, la conclusion.",
   "corrige": "1. f est un produit : f'(x) = e^(−x) − x e^(−x) = (1 − x) e^(−x). Comme e^(−x) > 0, f'(x) a le signe de 1 − x : positif sur [0 ; 1[, nul en 1, négatif sur ]1 ; +∞[. Donc f est croissante sur [0 ; 1] et décroissante sur [1 ; +∞[. 2. D'après les variations, f atteint son maximum en x = 1, et f(1) = 1/e. Donc, pour tout x positif ou nul, x e^(−x) ≤ 1/e. 3. On pose u(x) = x et v'(x) = e^(−x), donc u'(x) = 1 et v(x) = −e^(−x). L'intégrale vaut [−x e^(−x)] pris entre 0 et 1, plus l'intégrale de 0 à 1 de e^(−x) dx, soit −1/e + (1 − 1/e) = 1 − 2/e. Contrôle : 1 − 2/e vaut environ 0,26, ce qui est bien inférieur à 1/e (environ 0,37), comme l'impose la question 2 sur un intervalle de longueur 1."
  }
 },
 "domaines": [
  {
   "nom": "Lycée : calcul et fonctions usuelles",
   "ids": {
    "S": [
     "L1",
     "L2",
     "L3",
     "L4",
     "L5",
     "L6",
     "L7"
    ]
   }
  },
  {
   "nom": "Lycée : dérivation et intégration",
   "ids": {
    "S": [
     "L8",
     "L9",
     "L10",
     "L11",
     "L12",
     "L13"
    ]
   }
  },
  {
   "nom": "Lycée : suites et limites",
   "ids": {
    "S": [
     "L14",
     "L15",
     "L16",
     "L17"
    ]
   }
  },
  {
   "nom": "Lycée : raisonnement et logique",
   "ids": {
    "S": [
     "L18",
     "L19",
     "L20"
    ]
   }
  },
  {
   "nom": "Première année : nombres complexes",
   "ids": {
    "S": [
     "S1",
     "S2",
     "S3",
     "S4"
    ]
   }
  },
  {
   "nom": "Première année : limites et développements limités",
   "ids": {
    "S": [
     "S5",
     "S6",
     "S7",
     "S8"
    ]
   }
  },
  {
   "nom": "Première année : équations différentielles du premier ordre",
   "ids": {
    "S": [
     "S9",
     "S10",
     "S11"
    ]
   }
  },
  {
   "nom": "Première année : calcul matriciel et systèmes",
   "ids": {
    "S": [
     "S12",
     "S13",
     "S14",
     "S15"
    ]
   }
  },
  {
   "nom": "Première année : raisonnement et logique",
   "ids": {
    "S": [
     "S16",
     "S17",
     "S18"
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
