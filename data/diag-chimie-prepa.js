window.DIAGS = window.DIAGS || {};
window.DIAGS["chimie-prepa"] = {
 "cle": "chimie-prepa",
 "matiere": "chimie",
 "titre": "Test de chimie",
 "nom": "Test de chimie, prépa",
 "commun": null,
 "niveaux": [
  [
   "E",
   "Entrée en prépa"
  ],
  [
   "S",
   "Premier semestre"
  ]
 ],
 "classes": [
  [
   "Terminale, je vise la prépa",
   "E"
  ],
  [
   "Première année, début d'année",
   "E"
  ],
  [
   "Première année, MPSI ou PCSI",
   "S"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-chimie-prepa.md",
 "blocs": {
  "E": {
   "titre": "entrée en prépa (acquis de terminale et outils)",
   "questions": [
    {
     "id": "E1",
     "q": "Une solution a une concentration en ions H3O+ de 2,0 × 10^(−3) mol/L. On donne log 2 ≈ 0,3. Son pH vaut",
     "ok": "2,7",
     "bad": [
      "3,3",
      "3,0",
      "1,5"
     ],
     "err": [
      "ajoute log 2 au lieu de le soustraire",
      "ignore le facteur 2,0",
      "divise 3 par 2 : traite le logarithme d'un produit comme un quotient"
     ]
    },
    {
     "id": "E2",
     "q": "Un échantillon contient 4,40 g de dioxyde de carbone, de masse molaire 44,0 g/mol. La quantité de matière s'écrit",
     "ok": "0,100 mol",
     "bad": [
      "0,1 mol",
      "10,0 mol",
      "194 mol"
     ],
     "err": [
      "perd deux chiffres significatifs",
      "inverse le quotient",
      "multiplie la masse par la masse molaire"
     ]
    },
    {
     "id": "E3",
     "q": "Une réaction suit la loi de vitesse v = k × [A], avec v en mol/(L·s). L'unité de k est",
     "ok": "s^(−1)",
     "bad": [
      "mol/(L·s)",
      "L/(mol·s)",
      "s"
     ],
     "err": [
      "donne à k l'unité de la vitesse",
      "confond avec une réaction d'ordre 2",
      "inverse l'unité"
     ]
    },
    {
     "id": "E4",
     "q": "La concentration d'un réactif A vérifie d[A]/dt = −k × [A], avec [A] = c0 à t = 0. Alors [A](t) =",
     "ok": "c0 × e^(−k t)",
     "bad": [
      "c0 − k t",
      "c0 × e^(k t)",
      "c0 × e^(−t/k)"
     ],
     "err": [
      "traite la vitesse comme constante : confond avec l'ordre 0",
      "erreur de signe : la concentration augmenterait",
      "écrit un exposant non homogène : t/k n'est pas sans dimension"
     ]
    },
    {
     "id": "E5",
     "q": "On prélève 20,0 mL d'une solution de concentration 0,50 mol/L. La quantité de matière de soluté prélevée vaut",
     "ok": "1,0 × 10^(−2) mol",
     "bad": [
      "10 mol",
      "25 mol",
      "4,0 × 10^(−2) mol"
     ],
     "err": [
      "ne convertit pas les millilitres en litres",
      "divise la concentration par le volume",
      "divise le volume par la concentration"
     ]
    },
    {
     "id": "E6",
     "q": "Tu veux préparer 100 mL de solution à 0,010 mol/L à partir d'une solution mère à 0,50 mol/L. Le volume de solution mère à prélever est",
     "ok": "2,0 mL",
     "bad": [
      "50 mL",
      "5 000 mL",
      "98 mL"
     ],
     "err": [
      "prend le facteur de dilution pour un volume",
      "inverse le rapport des concentrations",
      "donne le volume d'eau à ajouter"
     ]
    },
    {
     "id": "E7",
     "q": "N2 + 3 H2 → 2 NH3. On mélange 2 mol de N2 et 3 mol de H2. L'avancement maximal vaut",
     "ok": "1 mol",
     "bad": [
      "2 mol",
      "3 mol",
      "5 mol"
     ],
     "err": [
      "compare les quantités sans les coefficients : prend N2 pour limitant",
      "prend la quantité de H2 sans la diviser par son coefficient",
      "additionne les quantités"
     ]
    },
    {
     "id": "E8",
     "q": "C3H8 + 5 O2 → 3 CO2 + 4 H2O. La combustion complète de 0,20 mol de propane produit une masse d'eau (masse molaire 18 g/mol) de",
     "ok": "14,4 g",
     "bad": [
      "3,6 g",
      "72 g",
      "0,044 g"
     ],
     "err": [
      "ignore le coefficient 4 de l'eau",
      "ignore la quantité de propane",
      "divise la quantité de matière par la masse molaire"
     ]
    },
    {
     "id": "E9",
     "q": "En solution aqueuse, la réaction A + B ⇌ C + D a pour constante d'équilibre K = 4. À l'état initial, les quatre espèces ont la même concentration, 1 mol/L. Le système",
     "ok": "évolue dans le sens direct, car Qr = 1 est inférieur à K",
     "bad": [
      "n'évolue pas : les concentrations sont égales, il est à l'équilibre",
      "évolue dans le sens inverse, car Qr est inférieur à K",
      "évolue dans le sens direct jusqu'à la disparition totale de A et de B"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'équilibre veut dire concentrations égales",
      "inverse le critère d'évolution",
      "croit que toute transformation est totale"
     ]
    },
    {
     "id": "E10",
     "q": "Un système chimique a atteint son état d'équilibre. À l'échelle des molécules",
     "ok": "les réactions directe et inverse continuent, à la même vitesse",
     "bad": [
      "plus aucune réaction n'a lieu",
      "seule la réaction directe continue, très lentement",
      "il ne reste plus de réactifs"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'équilibre est un arrêt des réactions",
      "confond équilibre et réaction lente",
      "confond équilibre et transformation totale"
     ]
    },
    {
     "id": "E11",
     "q": "CH3COOH(aq) + H2O(l) ⇌ CH3COO−(aq) + H3O+(aq). Le quotient de réaction s'écrit",
     "ok": "[CH3COO−] × [H3O+] / [CH3COOH]",
     "bad": [
      "[CH3COO−] × [H3O+] / ([CH3COOH] × [H2O])",
      "[CH3COOH] / ([CH3COO−] × [H3O+])",
      "([CH3COO−] + [H3O+]) / [CH3COOH]"
     ],
     "err": [
      "fait figurer le solvant dans le quotient",
      "inverse le quotient",
      "additionne les concentrations des produits au lieu de les multiplier"
     ]
    },
    {
     "id": "E12",
     "q": "Une solution d'acide HA de concentration apportée 1,0 × 10^(−2) mol/L a un pH de 3,0. Le taux d'avancement final de la réaction de HA avec l'eau vaut",
     "ok": "10 %",
     "bad": [
      "100 %",
      "0,1 %",
      "1 000 %"
     ],
     "err": [
      "croit que tout acide réagit totalement avec l'eau",
      "exprime la concentration en H3O+ en pourcentage, sans la diviser par la concentration apportée",
      "inverse le rapport"
     ]
    },
    {
     "id": "E13",
     "q": "Le couple CH3COOH/CH3COO− a un pKa de 4,8. Dans une solution de pH = 6,8, le rapport [CH3COO−]/[CH3COOH] vaut",
     "ok": "100",
     "bad": [
      "0,01",
      "2",
      "1,4"
     ],
     "err": [
      "inverse le rapport base sur acide",
      "oublie la puissance de dix",
      "divise le pH par le pKa"
     ]
    },
    {
     "id": "E14",
     "q": "On titre 20,0 mL d'acide chlorhydrique par une solution d'hydroxyde de sodium à 0,10 mol/L. L'équivalence est obtenue pour 10,0 mL versés. La concentration de l'acide vaut",
     "ok": "0,050 mol/L",
     "bad": [
      "0,20 mol/L",
      "0,10 mol/L",
      "1,0 × 10^(−3) mol/L"
     ],
     "err": [
      "inverse les deux volumes",
      "croit que les deux solutions ont la même concentration à l'équivalence",
      "donne la quantité de matière, sans diviser par le volume"
     ]
    },
    {
     "id": "E15",
     "q": "Une solution d'acide fort a un pH de 2,0. On la dilue 10 fois. Le pH de la solution diluée vaut",
     "ok": "3,0",
     "bad": [
      "1,0",
      "20",
      "0,2"
     ],
     "err": [
      "croit que diluer rend la solution plus acide",
      "multiplie le pH par 10",
      "divise le pH par 10"
     ]
    },
    {
     "id": "E16",
     "q": "En milieu acide, l'ion permanganate MnO4− est réduit en ion Mn2+. Dans la demi-équation équilibrée, le nombre d'électrons échangés est",
     "ok": "5",
     "bad": [
      "3",
      "7",
      "2"
     ],
     "err": [
      "fait la différence des charges des deux ions",
      "donne le nombre d'oxydation du manganèse dans MnO4−",
      "recopie la charge de l'ion Mn2+"
     ]
    },
    {
     "id": "E17",
     "q": "Dans une pile zinc-cuivre en fonctionnement, le zinc s'oxyde. Les électrons circulent",
     "ok": "du zinc vers le cuivre, dans les fils",
     "bad": [
      "du cuivre vers le zinc, dans les fils",
      "du zinc vers le cuivre, à travers le pont salin",
      "nulle part : seuls des ions se déplacent, dans tout le circuit"
     ],
     "idee_fausse": true,
     "err": [
      "inverse le sens : confond avec le sens du courant",
      "croit que les électrons traversent la solution",
      "confond les porteurs de charge des fils et ceux des solutions"
     ]
    },
    {
     "id": "E18",
     "q": "Une réaction est d'ordre 1 par rapport à son seul réactif, avec une constante de vitesse k. Son temps de demi-réaction vaut",
     "ok": "ln 2 / k",
     "bad": [
      "1/k",
      "k / ln 2",
      "c0/(2 k)"
     ],
     "err": [
      "confond avec le temps caractéristique",
      "inverse le quotient : résultat non homogène à une durée",
      "confond avec une réaction d'ordre 0"
     ]
    },
    {
     "id": "E19",
     "q": "Un catalyseur",
     "ok": "augmente la vitesse de la réaction sans changer l'état final",
     "bad": [
      "augmente la vitesse et la quantité de produit obtenue à l'équilibre",
      "est un réactif : il est consommé et figure dans l'équation de la réaction",
      "ralentit la réaction inverse pour favoriser la réaction directe"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un catalyseur déplace l'équilibre",
      "confond catalyseur et réactif",
      "croit qu'un catalyseur n'agit que sur un seul sens"
     ]
    },
    {
     "id": "E20",
     "q": "Dans le schéma de Lewis de l'ammoniac NH3, l'atome d'azote (Z = 7) porte",
     "ok": "trois liaisons simples et un doublet non liant",
     "bad": [
      "trois liaisons simples et aucun doublet non liant",
      "trois liaisons simples et deux doublets non liants",
      "trois liaisons doubles"
     ],
     "err": [
      "oublie deux des cinq électrons de valence",
      "confond numéro atomique et nombre d'électrons de valence",
      "ne respecte pas la règle du duet pour l'hydrogène"
     ]
    },
    {
     "id": "E21",
     "q": "La molécule de dioxyde de carbone CO2 est linéaire. Ses deux liaisons C=O sont polarisées. La molécule est",
     "ok": "apolaire : les effets des deux liaisons se compensent",
     "bad": [
      "polaire, puisque ses liaisons sont polarisées",
      "apolaire, car C et O ont la même électronégativité",
      "polaire, car les atomes d'oxygène portent des doublets non liants"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une liaison polarisée suffit à rendre la molécule polaire",
      "bonne conclusion, raison fausse : nie la polarisation des liaisons",
      "confond doublets non liants et polarité"
     ]
    }
   ],
   "redaction": "Une solution aqueuse d'acide éthanoïque CH3COOH a une concentration apportée c = 1,0 × 10^(−1) mol/L. On mesure pH = 2,9. Donnée : 10^(−2,9) ≈ 1,3 × 10^(−3).\n1. Écris l'équation de la réaction de l'acide éthanoïque avec l'eau.\n2. Dresse le tableau d'avancement pour un volume V = 1,0 L de solution. Donne l'avancement final et l'avancement maximal.\n3. Calcule le taux d'avancement final. L'acide est-il fort ou faible dans l'eau ? Justifie.\n4. Exprime la constante d'acidité Ka du couple, puis calcule-la. Compare à la valeur attendue, pKa = 4,8, soit Ka ≈ 1,6 × 10^(−5).",
   "corrige": "CH3COOH(aq) + H2O(l) ⇌ CH3COO−(aq) + H3O+(aq). Pour V = 1,0 L : au départ 0,10 mol d'acide ; à l'état final 0,10 − xf mol d'acide, xf mol d'ions éthanoate et xf mol d'ions H3O+ (l'eau est le solvant, en excès). xf = [H3O+] × V = 10^(−2,9) × 1,0 = 1,3 × 10^(−3) mol, et xmax = 0,10 mol. Taux d'avancement final : xf/xmax = 1,3 × 10^(−3)/0,10 = 1,3 %. Il est très inférieur à 100 % : la réaction n'est pas totale, l'acide est faible. Ka = [CH3COO−] × [H3O+]/[CH3COOH] = (1,3 × 10^(−3))²/(0,10 − 0,0013) ≈ 1,7 × 10^(−6)/0,10 = 1,7 × 10^(−5). C'est le même ordre de grandeur que la valeur attendue 1,6 × 10^(−5) : l'écart vient de la précision de la mesure du pH, donnée à un seul chiffre après la virgule."
  },
  "S": {
   "titre": "premier semestre de MPSI ou de PCSI",
   "questions": [
    {
     "id": "S1",
     "q": "Un mélange de gaz parfaits contient 1 mol de N2 et 3 mol de H2 sous une pression totale de 8 bar. La pression partielle de H2 vaut",
     "ok": "6 bar",
     "bad": [
      "2 bar",
      "8 bar",
      "24 bar"
     ],
     "err": [
      "calcule la pression partielle de N2",
      "croit que chaque gaz est à la pression totale",
      "multiplie la quantité de matière par la pression, sans fraction molaire"
     ]
    },
    {
     "id": "S2",
     "q": "La réaction A ⇌ 2 B a pour constante d'équilibre K° = 4 à une température donnée. À la même température, la constante de la réaction 2 B ⇌ A vaut",
     "ok": "0,25",
     "bad": [
      "−4",
      "4",
      "2"
     ],
     "err": [
      "prend l'opposé au lieu de l'inverse",
      "croit que la constante ne dépend pas du sens d'écriture",
      "prend la racine carrée : confond inverser l'équation et diviser ses coefficients par 2"
     ]
    },
    {
     "id": "S3",
     "q": "CaCO3(s) ⇌ CaO(s) + CO2(g). Le quotient de réaction s'écrit",
     "ok": "P(CO2)/P°",
     "bad": [
      "[CaO] × P(CO2) / ([CaCO3] × P°)",
      "P°/P(CO2)",
      "n(CO2)"
     ],
     "err": [
      "fait figurer les solides par une concentration",
      "inverse le quotient",
      "remplace l'activité par une quantité de matière : grandeur extensive"
     ]
    },
    {
     "id": "S4",
     "q": "2 NO2(g) ⇌ N2O4(g), avec K° = 7 à la température de l'expérience. À un instant donné, P(NO2) = 0,5 bar et P(N2O4) = 1 bar. Alors",
     "ok": "Q = 4 : le système évolue dans le sens direct",
     "bad": [
      "Q = 2 : le système évolue dans le sens direct",
      "Q = 0,25 : le système évolue dans le sens direct",
      "Q = 4 : le système évolue dans le sens inverse"
     ],
     "err": [
      "oublie l'exposant 2 sur la pression de NO2",
      "inverse le quotient",
      "inverse le critère d'évolution"
     ]
    },
    {
     "id": "S5",
     "q": "En solution, A ⇌ B a pour constante K° = 3. Au départ, [A] = 0,40 mol/L et il n'y a pas de B. À l'équilibre, [B] vaut",
     "ok": "0,30 mol/L",
     "bad": [
      "0,40 mol/L",
      "0,13 mol/L",
      "0,20 mol/L"
     ],
     "err": [
      "croit la transformation totale",
      "divise la concentration initiale par K°",
      "croit qu'à l'équilibre les concentrations sont égales"
     ]
    },
    {
     "id": "S6",
     "q": "CaCO3(s) ⇌ CaO(s) + CO2(g) est à l'équilibre dans une enceinte fermée, à température constante. On ajoute un peu de CaCO3 solide. On néglige le volume du solide ajouté.",
     "ok": "Rien ne change : l'activité d'un solide vaut 1, le quotient de réaction garde sa valeur",
     "bad": [
      "L'équilibre se déplace dans le sens direct et la pression de CO2 augmente",
      "L'équilibre se déplace dans le sens inverse",
      "La constante d'équilibre augmente"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'ajouter un solide déplace l'équilibre",
      "même idée, avec le sens inversé",
      "croit que la constante d'équilibre dépend des quantités introduites"
     ]
    },
    {
     "id": "S7",
     "q": "Pour une réaction donnée, le temps de demi-réaction ne dépend pas de la concentration initiale du réactif. La réaction est d'ordre",
     "ok": "1",
     "bad": [
      "0",
      "2",
      "quelconque : c'est vrai pour toutes les réactions"
     ],
     "err": [
      "confond avec l'ordre 0, où le temps de demi-réaction est proportionnel à la concentration initiale",
      "confond avec l'ordre 2, où il est inversement proportionnel à la concentration initiale",
      "généralise à tort la propriété de l'ordre 1"
     ]
    },
    {
     "id": "S8",
     "q": "2 N2O5 → 4 NO2 + O2. On note v la vitesse de la réaction. La vitesse de formation de NO2 vaut",
     "ok": "4 v",
     "bad": [
      "v",
      "v/4",
      "2 v"
     ],
     "err": [
      "ignore le coefficient stœchiométrique",
      "divise par le coefficient au lieu de multiplier",
      "donne la vitesse de disparition de N2O5"
     ]
    },
    {
     "id": "S9",
     "q": "Une réaction est d'ordre 2 par rapport à son seul réactif A. La grandeur qui varie de façon affine avec le temps est",
     "ok": "1/[A]",
     "bad": [
      "ln [A]",
      "[A]",
      "[A]²"
     ],
     "err": [
      "confond avec l'ordre 1",
      "confond avec l'ordre 0",
      "met l'ordre en exposant au lieu d'intégrer la loi de vitesse"
     ]
    },
    {
     "id": "S10",
     "q": "La loi d'Arrhenius s'écrit k = A × e^(−Ea/(R T)). Pour mesurer l'énergie d'activation Ea, on trace",
     "ok": "ln k en fonction de 1/T : droite de pente −Ea/R",
     "bad": [
      "ln k en fonction de T : droite de pente −Ea/R",
      "k en fonction de 1/T : droite de pente −Ea/R",
      "ln k en fonction de 1/T : droite de pente +Ea/R"
     ],
     "err": [
      "oublie de prendre l'inverse de la température",
      "oublie le logarithme",
      "erreur de signe sur la pente"
     ]
    },
    {
     "id": "S11",
     "q": "Une réaction a pour loi de vitesse v = k × [A] × [B]. On introduit B en très grand excès, à la concentration [B]0. La loi de vitesse devient",
     "ok": "v = k_app × [A], avec k_app = k × [B]0",
     "bad": [
      "v = k × [A]",
      "v = k_app × [B], avec k_app = k × [A]0",
      "v = k × [A]²"
     ],
     "err": [
      "supprime [B] sans le garder dans la constante : loi non homogène",
      "garde le réactif en excès au lieu du réactif limitant",
      "remplace [B] par [A]"
     ]
    },
    {
     "id": "S12",
     "q": "Le soufre est dans la 16e colonne et la 3e période du tableau périodique. Son nombre d'électrons de valence est",
     "ok": "6",
     "bad": [
      "16",
      "3",
      "2"
     ],
     "err": [
      "recopie le numéro de la colonne",
      "recopie le numéro de la période",
      "donne le nombre d'électrons qui manquent pour l'octet"
     ]
    },
    {
     "id": "S13",
     "q": "Dans le schéma de Lewis de l'ion ammonium NH4+, la charge formelle +1 est portée par",
     "ok": "l'azote, lié à quatre hydrogènes et sans doublet non liant",
     "bad": [
      "l'un des quatre hydrogènes",
      "aucun atome : il n'y a pas de charge formelle",
      "l'azote, lié à quatre hydrogènes et qui garde un doublet non liant"
     ],
     "err": [
      "attribue la charge au proton ajouté",
      "oublie de compter les électrons : ne calcule pas la charge formelle",
      "dépasse l'octet de l'azote"
     ]
    },
    {
     "id": "S14",
     "q": "Dans le tableau périodique (hors gaz nobles), l'électronégativité augmente",
     "ok": "de gauche à droite dans une période et de bas en haut dans une colonne",
     "bad": [
      "de gauche à droite dans une période et de haut en bas dans une colonne",
      "de droite à gauche dans une période et de bas en haut dans une colonne",
      "avec le numéro atomique, dans toutes les directions"
     ],
     "err": [
      "inverse le sens dans une colonne",
      "inverse le sens dans une période",
      "confond électronégativité et numéro atomique"
     ]
    },
    {
     "id": "S15",
     "q": "Quand de l'eau liquide bout, ce qui est rompu, ce sont",
     "ok": "des liaisons hydrogène entre molécules d'eau",
     "bad": [
      "les liaisons covalentes O-H des molécules d'eau",
      "les liaisons covalentes et les liaisons hydrogène",
      "aucune liaison : les molécules se dilatent"
     ],
     "idee_fausse": true,
     "err": [
      "confond liaisons dans la molécule et liaisons entre molécules",
      "même confusion, partielle",
      "ne relie pas le changement d'état aux interactions entre molécules"
     ]
    },
    {
     "id": "S16",
     "q": "L'éthanol CH3CH2OH bout à 78 °C. Son isomère, le méthoxyméthane CH3OCH3, bout à −24 °C. L'écart s'explique surtout parce que",
     "ok": "les molécules d'éthanol forment entre elles des liaisons hydrogène",
     "bad": [
      "l'éthanol a une masse molaire plus grande",
      "le méthoxyméthane est une molécule apolaire",
      "l'éthanol contient plus d'atomes d'hydrogène"
     ],
     "err": [
      "ne voit pas que deux isomères ont la même masse molaire",
      "confond absence de liaison hydrogène et absence de polarité",
      "compte les hydrogènes au lieu de chercher un hydrogène lié à l'oxygène"
     ]
    },
    {
     "id": "S17",
     "q": "Un acide faible HA a un pKa de 4,0. Dans une solution de concentration 1,0 × 10^(−2) mol/L, où il est peu dissocié, le pH vaut environ",
     "ok": "3,0",
     "bad": [
      "2,0",
      "4,0",
      "6,0"
     ],
     "err": [
      "traite l'acide comme un acide fort",
      "écrit pH = pKa",
      "oublie le facteur 1/2 de la formule"
     ]
    },
    {
     "id": "S18",
     "q": "On considère la réaction HA + B− ⇌ A− + HB. Le couple HA/A− a un pKa de 4 et le couple HB/B− un pKa de 9. La constante d'équilibre de cette réaction vaut",
     "ok": "10^5",
     "bad": [
      "10^(−5)",
      "10^13",
      "5"
     ],
     "err": [
      "inverse les deux couples",
      "additionne les pKa au lieu de les soustraire",
      "oublie la puissance de dix"
     ]
    },
    {
     "id": "S19",
     "q": "Dans l'ion dichromate Cr2O7 2− (deux atomes de chrome, sept atomes d'oxygène, charge 2−), le nombre d'oxydation du chrome est",
     "ok": "+VI",
     "bad": [
      "+XII",
      "+VII",
      "−II"
     ],
     "err": [
      "oublie de diviser par 2 : il y a deux atomes de chrome",
      "oublie la charge de l'ion",
      "recopie la charge de l'ion"
     ]
    },
    {
     "id": "S20",
     "q": "MnO4− + 5 Fe2+ + 8 H+ → Mn2+ + 5 Fe3+ + 4 H2O. On titre des ions Fe2+ par une solution de permanganate. À l'équivalence, la quantité initiale de Fe2+ vaut",
     "ok": "5 fois la quantité de MnO4− versée",
     "bad": [
      "la quantité de MnO4− versée",
      "le cinquième de la quantité de MnO4− versée",
      "8 fois la quantité de MnO4− versée"
     ],
     "err": [
      "ignore les coefficients stœchiométriques",
      "inverse le rapport",
      "prend le coefficient des ions H+"
     ]
    }
   ],
   "redaction": "On suit la décomposition d'un réactif A, seul réactif, en solution à température constante. On mesure sa concentration : 80 mmol/L à t = 0 ; 40 mmol/L à t = 10 min ; 20 mmol/L à t = 20 min ; 10 mmol/L à t = 30 min. Données : ln 2 ≈ 0,69 ; ln 100 ≈ 4,6.\n1. Détermine les temps de demi-réaction successifs. Quel ordre ces mesures suggèrent-elles ? Justifie.\n2. Écris la loi de vitesse correspondante, puis établis l'expression de [A] en fonction du temps.\n3. Calcule la constante de vitesse k, avec son unité.\n4. À quelle date reste-t-il 1 % du réactif ?\n5. Si la réaction était d'ordre 2, combien de temps faudrait-il pour passer de 40 à 20 mmol/L ? Conclus.",
   "corrige": "La concentration est divisée par 2 toutes les 10 min, quelle que soit la concentration de départ (80, puis 40, puis 20 mmol/L). Un temps de demi-réaction indépendant de la concentration initiale est la signature de l'ordre 1. Loi de vitesse : v = −d[A]/dt = k [A]. On sépare les variables : d[A]/[A] = −k dt, donc ln([A]/[A]0) = −k t et [A](t) = [A]0 e^(−k t). Au temps de demi-réaction, [A] = [A]0/2, d'où t½ = ln 2 / k et k = ln 2 / t½ = 0,69/10 = 0,069 min^(−1). Il reste 1 % quand e^(−k t) = 1/100, soit t = ln 100 / k = 4,6/0,069 ≈ 67 min. Pour un ordre 2, t½ = 1/(k [A]0) : il double quand la concentration de départ est divisée par 2. Il faudrait donc 20 min, et non 10, pour passer de 40 à 20 mmol/L. Les mesures écartent l'ordre 2 et confirment l'ordre 1."
  }
 },
 "domaines": [
  {
   "nom": "Outils (logarithmes, chiffres significatifs, dimensions, équation différentielle)",
   "ids": {
    "E": [
     "E1",
     "E2",
     "E3",
     "E4"
    ],
    "S": []
   }
  },
  {
   "nom": "Quantité de matière et avancement",
   "ids": {
    "E": [
     "E5",
     "E6",
     "E7",
     "E8"
    ],
    "S": [
     "S1",
     "S5"
    ]
   }
  },
  {
   "nom": "Équilibres et quotient de réaction",
   "ids": {
    "E": [
     "E9",
     "E10",
     "E11"
    ],
    "S": [
     "S2",
     "S3",
     "S4",
     "S6"
    ]
   }
  },
  {
   "nom": "Acide-base et pH",
   "ids": {
    "E": [
     "E12",
     "E13",
     "E14",
     "E15"
    ],
    "S": [
     "S17",
     "S18"
    ]
   }
  },
  {
   "nom": "Oxydoréduction",
   "ids": {
    "E": [
     "E16",
     "E17"
    ],
    "S": [
     "S19",
     "S20"
    ]
   }
  },
  {
   "nom": "Cinétique",
   "ids": {
    "E": [
     "E18",
     "E19"
    ],
    "S": [
     "S7",
     "S8",
     "S9",
     "S10",
     "S11"
    ]
   }
  },
  {
   "nom": "Structure de la matière",
   "ids": {
    "E": [
     "E20",
     "E21"
    ],
    "S": [
     "S12",
     "S13",
     "S14",
     "S15",
     "S16"
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
