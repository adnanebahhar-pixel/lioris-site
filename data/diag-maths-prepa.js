window.DIAGS = window.DIAGS || {};
window.DIAGS["maths-prepa"] = {
 "cle": "maths-prepa",
 "matiere": "maths",
 "titre": "Test de calcul",
 "nom": "Test de calcul d'entrée en prépa",
 "commun": null,
 "niveaux": [
  [
   "C",
   "Prépa"
  ]
 ],
 "classes": [
  [
   "Terminale, je vise la prépa",
   "C"
  ],
  [
   "Première année, MPSI",
   "C"
  ],
  [
   "Première année, PCSI",
   "C"
  ]
 ],
 "duree": "45 minutes",
 "pasvu": false,
 "seuils": "prepa",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires : domaine de 3 ou 4 exercices, sans faute = satisfaisant, une erreur = fragile, deux ou plus = à besoins. Domaine de 5 ou 6 exercices : une erreur au plus = satisfaisant, deux = fragile, trois ou plus = à besoins. Trigonométrie (2 exercices) : le professeur tranche. Le temps compte : tout juste en dépassant largement 30 minutes = fragile en aisance.",
 "source": "diagnostic-maths-prepa.md",
 "blocs": {
  "C": {
   "titre": "Les 20 exercices",
   "questions": [
    {
     "id": "C1",
     "q": "Pour a et b non nuls, simplifier (a³ b^(−2))² / (a^(−1) b³)",
     "ok": "a⁷/b⁷",
     "bad": [
      "a⁵/b",
      "a⁶/b³",
      "a⁷/b"
     ],
     "err": [
      "additionne les exposants du dénominateur au lieu de les soustraire",
      "additionne 3 et 2 au lieu de les multiplier dans le carré",
      "erreur de signe sur l'exposant de b"
     ]
    },
    {
     "id": "C2",
     "q": "Pour x différent de 1 et de −1, 1/(x − 1) − 1/(x + 1) =",
     "ok": "2/(x² − 1)",
     "bad": [
      "0",
      "−2/(x² − 1)",
      "2x/(x² − 1)"
     ],
     "err": [
      "soustrait les numérateurs sans réduire au même dénominateur",
      "erreur de signe en soustrayant (x − 1)",
      "additionne au lieu de soustraire"
     ]
    },
    {
     "id": "C3",
     "q": "1/(√3 − √2) =",
     "ok": "√3 + √2",
     "bad": [
      "1/√3 − 1/√2",
      "1",
      "(√3 + √2)/5"
     ],
     "err": [
      "croit que l'inverse d'une différence est la différence des inverses",
      "soustrait sous la racine",
      "calcule 3 + 2 au lieu de 3 − 2 avec la quantité conjuguée"
     ]
    },
    {
     "id": "C4",
     "q": "La forme factorisée de x³ − x² − 4x + 4 est",
     "ok": "(x − 1)(x − 2)(x + 2)",
     "bad": [
      "(x − 1)(x² + 4)",
      "(x + 1)(x − 2)(x + 2)",
      "(x − 1)(x − 2)²"
     ],
     "err": [
      "erreur de signe dans la factorisation par groupes",
      "erreur de signe sur le facteur commun",
      "factorise mal x² − 4"
     ]
    },
    {
     "id": "C5",
     "q": "L'ensemble des solutions de (x − 1)/(x + 2) ≥ 0 est",
     "ok": "]−∞ ; −2[ ∪ [1 ; +∞[",
     "bad": [
      "[1 ; +∞[",
      "]−2 ; 1]",
      "]−∞ ; −2] ∪ [1 ; +∞["
     ],
     "err": [
      "multiplie par x + 2 sans regarder son signe",
      "inverse le signe du quotient",
      "inclut la valeur interdite −2"
     ]
    },
    {
     "id": "C6",
     "q": "L'ensemble des solutions de |2x − 1| ≤ 3 est",
     "ok": "[−1 ; 2]",
     "bad": [
      "]−∞ ; 2]",
      "[−2 ; 1]",
      "]−∞ ; −1] ∪ [2 ; +∞["
     ],
     "err": [
      "oublie un des deux côtés de l'encadrement",
      "erreur de signe : résout avec 2x + 1",
      "confond « inférieur à » et « supérieur à »"
     ]
    },
    {
     "id": "C7",
     "q": "ln(8) − 2 ln(2) + ln(1/2) =",
     "ok": "0",
     "bad": [
      "ln 2",
      "2 ln 2",
      "ln(9/2)"
     ],
     "err": [
      "compte ln(1/2) pour zéro",
      "prend ln(1/2) = ln 2",
      "traite le logarithme comme linéaire : ln a ± ln b = ln(a ± b)"
     ]
    },
    {
     "id": "C8",
     "q": "Les solutions de e^(2x) − 3e^x + 2 = 0 sont",
     "ok": "0 et ln 2",
     "bad": [
      "1 et 2",
      "ln 2 seulement",
      "e et e²"
     ],
     "err": [
      "s'arrête au changement de variable, sans revenir à x",
      "écarte à tort la valeur 1",
      "prend l'exponentielle au lieu du logarithme"
     ]
    },
    {
     "id": "C9",
     "q": "L'équation ln(x) + ln(x − 1) = ln 2 a pour solutions",
     "ok": "2 seulement",
     "bad": [
      "2 et −1",
      "3/2",
      "aucune"
     ],
     "err": [
      "oublie le domaine de définition",
      "écrit ln a + ln b = ln(a + b)",
      "écarte tout par excès de prudence"
     ]
    },
    {
     "id": "C10",
     "q": "La dérivée de ln(x² + 1) est",
     "ok": "2x/(x² + 1)",
     "bad": [
      "1/(x² + 1)",
      "2x ln(x² + 1)",
      "1/(2x)"
     ],
     "err": [
      "oublie de multiplier par la dérivée de x² + 1",
      "multiplie par la dérivée de x² + 1 mais garde le logarithme, comme pour une exponentielle",
      "prend l'inverse de la dérivée"
     ]
    },
    {
     "id": "C11",
     "q": "La dérivée de x² e^(−x) est",
     "ok": "(2x − x²) e^(−x)",
     "bad": [
      "(2x + x²) e^(−x)",
      "−2x e^(−x)",
      "2x e^(−x)"
     ],
     "err": [
      "oublie le signe moins de la dérivée de e^(−x)",
      "multiplie les dérivées des deux facteurs",
      "ne dérive que x²"
     ]
    },
    {
     "id": "C12",
     "q": "La dérivée de (3x + 1)⁵ est",
     "ok": "15 (3x + 1)⁴",
     "bad": [
      "5 (3x + 1)⁴",
      "(3x + 1)⁶/18",
      "15 (3x + 1)⁵"
     ],
     "err": [
      "oublie de multiplier par 3",
      "confond dérivée et primitive",
      "ne baisse pas l'exposant"
     ]
    },
    {
     "id": "C13",
     "q": "L'intégrale de 0 à 1 de x e^(x²) dx vaut",
     "ok": "(e − 1)/2",
     "bad": [
      "e − 1",
      "e/2",
      "2(e − 1)"
     ],
     "err": [
      "oublie le facteur 1/2",
      "oublie la valeur en 0",
      "multiplie par 2 au lieu de diviser"
     ]
    },
    {
     "id": "C14",
     "q": "L'intégrale de 0 à π/4 de cos(2x) dx vaut",
     "ok": "1/2",
     "bad": [
      "1",
      "2",
      "−1/2"
     ],
     "err": [
      "oublie le facteur 1/2",
      "multiplie par 2 au lieu de diviser",
      "prend −sin comme primitive de cos"
     ]
    },
    {
     "id": "C15",
     "q": "La limite en +∞ de (2e^x − x)/(e^x + 3x) est",
     "ok": "2",
     "bad": [
      "−1/3",
      "+∞",
      "1"
     ],
     "err": [
      "ne regarde que les termes en x",
      "ne lève pas la forme indéterminée",
      "croit que « infini sur infini » donne 1"
     ]
    },
    {
     "id": "C16",
     "q": "La limite en 0 de (e^x − 1)/x est",
     "ok": "1",
     "bad": [
      "0",
      "+∞",
      "elle n'existe pas"
     ],
     "err": [
      "croit que « zéro sur zéro » donne 0",
      "ne regarde que le dénominateur",
      "ne reconnaît pas un taux d'accroissement"
     ]
    },
    {
     "id": "C17",
     "q": "La somme des (2k + 1) pour k allant de 1 à n vaut",
     "ok": "n² + 2n",
     "bad": [
      "n² + n",
      "n² + n + 1",
      "2n² + n"
     ],
     "err": [
      "oublie la somme des n termes égaux à 1",
      "n'ajoute 1 qu'une seule fois",
      "multiplie le dernier terme par n"
     ]
    },
    {
     "id": "C18",
     "q": "1 + 1/2 + 1/4 + … + 1/2^n =",
     "ok": "2 − 1/2^n",
     "bad": [
      "2 − 1/2^(n−1)",
      "2",
      "1 − 1/2^(n+1)"
     ],
     "err": [
      "compte n termes au lieu de n + 1",
      "donne la limite au lieu de la somme",
      "oublie de diviser par 1 − q"
     ]
    },
    {
     "id": "C19",
     "q": "cos(2π/3) + sin(5π/6) =",
     "ok": "0",
     "bad": [
      "1",
      "−1",
      "(√3 − 1)/2"
     ],
     "err": [
      "prend cos(2π/3) = 1/2",
      "prend sin(5π/6) = −1/2",
      "prend sin(5π/6) = √3/2"
     ]
    },
    {
     "id": "C20",
     "q": "Les solutions de cos x = 1/2 dans [0 ; 2π[ sont",
     "ok": "π/3 et 5π/3",
     "bad": [
      "π/3 seulement",
      "π/3 et 2π/3",
      "π/6 et 11π/6"
     ],
     "err": [
      "oublie la seconde solution",
      "utilise la symétrie du sinus",
      "confond π/3 et π/6"
     ]
    }
   ],
   "redaction": "Soit (u_n) la suite définie par u_0 = 1 et, pour tout entier naturel n, u_(n+1) = √(2 + u_n).\n1. Démontrer par récurrence que, pour tout entier naturel n, 0 ≤ u_n ≤ 2.\n2. Démontrer que la suite (u_n) est croissante.\n3. En déduire que (u_n) converge, puis déterminer sa limite.",
   "corrige": "1. Initialisation : u_0 = 1, donc 0 ≤ u_0 ≤ 2. Hérédité : soit n un entier tel que 0 ≤ u_n ≤ 2. Alors 2 ≤ 2 + u_n ≤ 4, et comme la racine carrée est croissante, √2 ≤ u_(n+1) ≤ 2, donc 0 ≤ u_(n+1) ≤ 2. Conclusion : la propriété est vraie pour tout n.\n2. u_(n+1) − u_n = √(2 + u_n) − u_n = (2 + u_n − u_n²)/(√(2 + u_n) + u_n) = (2 − u_n)(1 + u_n)/(√(2 + u_n) + u_n). Comme 0 ≤ u_n ≤ 2, le numérateur est positif ou nul et le dénominateur est strictement positif. Donc u_(n+1) ≥ u_n.\n3. La suite est croissante et majorée par 2, donc elle converge vers une limite ℓ, avec 0 ≤ ℓ ≤ 2. La suite (u_(n+1)) tend aussi vers ℓ. La fonction racine carrée est continue, donc ℓ = √(2 + ℓ), soit ℓ² − ℓ − 2 = 0, dont les solutions sont 2 et −1. Comme ℓ ≥ 0, ℓ = 2."
  }
 },
 "domaines": [
  {
   "nom": "Calcul algébrique et inéquations",
   "ids": {
    "C": [
     "C1",
     "C2",
     "C3",
     "C4",
     "C5",
     "C6"
    ]
   }
  },
  {
   "nom": "Exponentielle et logarithme",
   "ids": {
    "C": [
     "C7",
     "C8",
     "C9"
    ]
   }
  },
  {
   "nom": "Dérivation et intégration",
   "ids": {
    "C": [
     "C10",
     "C11",
     "C12",
     "C13",
     "C14"
    ]
   }
  },
  {
   "nom": "Limites et sommes",
   "ids": {
    "C": [
     "C15",
     "C16",
     "C17",
     "C18"
    ]
   }
  },
  {
   "nom": "Trigonométrie",
   "ids": {
    "C": [
     "C19",
     "C20"
    ]
   }
  }
 ],
 "criteres": [
  "Structure de la récurrence",
  "Justification",
  "Calcul",
  "Rigueur à la limite",
  "Rédaction"
 ]
};
