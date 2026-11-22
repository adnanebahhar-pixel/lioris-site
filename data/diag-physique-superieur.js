window.DIAGS = window.DIAGS || {};
window.DIAGS["physique-superieur"] = {
 "cle": "physique-superieur",
 "matiere": "physique",
 "titre": "Test de physique",
 "nom": "Test de physique, première année du supérieur",
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
 "calculatrice": "Sans calculatrice pour les questions. Calculatrice autorisée pour l'exercice à rédiger.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-physique-superieur.md",
 "blocs": {
  "L": {
   "titre": "acquis du lycée dont la première année a besoin",
   "questions": [
    {
     "id": "L1",
     "q": "Une masse volumique de 2,5 g/cm³ vaut",
     "ok": "2 500 kg/m³",
     "bad": [
      "0,0025 kg/m³",
      "2,5 kg/m³",
      "0,25 kg/m³"
     ],
     "err": [
      "convertit les grammes mais pas les cm³",
      "prend 1 m³ = 1 000 cm³",
      "prend 1 m³ = 100 cm³"
     ]
    },
    {
     "id": "L2",
     "q": "Une force de 10 N fait un angle de 60° avec l'horizontale. Sa composante horizontale vaut",
     "ok": "5 N",
     "bad": [
      "environ 8,7 N",
      "10 N",
      "20 N"
     ],
     "err": [
      "prend le sinus au lieu du cosinus",
      "ignore l'angle",
      "divise par le cosinus au lieu de multiplier"
     ]
    },
    {
     "id": "L3",
     "q": "L'énergie cinétique s'écrit E = ½ m v². Alors v =",
     "ok": "√(2E/m)",
     "bad": [
      "2E/m",
      "√(E/(2m))",
      "√(2Em)"
     ],
     "err": [
      "oublie la racine carrée",
      "place le 2 au dénominateur",
      "multiplie par la masse au lieu de diviser"
     ]
    },
    {
     "id": "L4",
     "q": "L'ordre de grandeur de la taille d'un atome est",
     "ok": "10^(−10) m",
     "bad": [
      "10^(−15) m",
      "10^(−6) m",
      "10^(−3) m"
     ],
     "err": [
      "confond l'atome et son noyau",
      "confond avec la taille d'une cellule ou d'une bactérie",
      "n'a pas de repère d'échelle : donne une taille visible à l'œil nu"
     ]
    },
    {
     "id": "L5",
     "q": "La période d'un pendule est T = 2π √(L/g). Si on multiplie la longueur L par 4, la période est",
     "ok": "multipliée par 2",
     "bad": [
      "multipliée par 4",
      "multipliée par 16",
      "divisée par 2"
     ],
     "err": [
      "oublie la racine carrée",
      "élève au carré au lieu de prendre la racine",
      "inverse l'effet de la longueur"
     ]
    },
    {
     "id": "L6",
     "q": "On lance un palet sur une table horizontale : il glisse, ralentit, puis s'arrête. Pendant qu'il glisse, une fois la main retirée, les forces horizontales qui s'exercent sur lui sont",
     "ok": "les frottements seulement",
     "bad": [
      "la force du lancer, vers l'avant, et les frottements",
      "la force du lancer seulement, qui s'épuise peu à peu",
      "aucune : il ralentit de lui-même"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une force reste « dans » l'objet après le lancer",
      "même idée, et oublie les frottements",
      "croit qu'un mouvement s'arrête sans cause"
     ]
    },
    {
     "id": "L7",
     "q": "Tu pousses un mur avec une force de 50 N. Le mur ne bouge pas. Le mur exerce sur toi une force",
     "ok": "de 50 N",
     "bad": [
      "nulle : un objet immobile n'exerce pas de force",
      "de moins de 50 N, sinon tu serais repoussé en arrière",
      "de plus de 50 N, puisqu'il résiste"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un objet immobile ou passif n'exerce pas de force",
      "lie la force subie à l'effet observé au lieu d'appliquer l'action et la réaction",
      "croit que l'objet qui « gagne » exerce la force la plus grande"
     ]
    },
    {
     "id": "L8",
     "q": "Un chariot de 2 kg est soumis à deux forces horizontales : 10 N vers la droite et 4 N vers la gauche. Son accélération vaut",
     "ok": "3 m/s²",
     "bad": [
      "7 m/s²",
      "12 m/s²",
      "5 m/s²"
     ],
     "err": [
      "additionne les forces sans tenir compte de leur sens",
      "multiplie par la masse au lieu de diviser",
      "ignore la force de 4 N"
     ]
    },
    {
     "id": "L9",
     "q": "On lance une balle verticalement vers le haut. On néglige les frottements. Au sommet de sa trajectoire, son accélération",
     "ok": "vaut g et est dirigée vers le bas",
     "bad": [
      "est nulle, puisque sa vitesse est nulle",
      "vaut g et est dirigée vers le haut",
      "change de sens à cet instant précis"
     ],
     "idee_fausse": true,
     "err": [
      "lie l'accélération à la vitesse au lieu de la lier aux forces",
      "croit que l'accélération suit le sens du mouvement de montée",
      "croit que l'accélération change de sens quand la vitesse change de sens"
     ]
    },
    {
     "id": "L10",
     "q": "Un objet tombe sans frottement d'une hauteur de 20 m, sans vitesse au départ (g = 10 m/s²). Sa vitesse à l'arrivée au sol vaut",
     "ok": "20 m/s",
     "bad": [
      "400 m/s",
      "environ 14 m/s",
      "200 m/s"
     ],
     "err": [
      "oublie la racine carrée",
      "oublie le facteur 2",
      "calcule g × h, sans le facteur 2 ni la racine"
     ]
    },
    {
     "id": "L11",
     "q": "Une voiture part de l'arrêt et atteint 30 m/s en 10 s, avec une accélération constante. La distance parcourue pendant ces 10 s vaut",
     "ok": "150 m",
     "bad": [
      "300 m",
      "3 m",
      "15 m"
     ],
     "err": [
      "multiplie la vitesse finale par la durée, comme si la vitesse était constante",
      "donne l'accélération",
      "oublie le carré sur la durée"
     ]
    },
    {
     "id": "L12",
     "q": "Une pile alimente une lampe. On ajoute une deuxième lampe identique en série. L'intensité du courant débité par la pile",
     "ok": "diminue",
     "bad": [
      "reste la même : une pile fournit toujours le même courant",
      "augmente : il y a deux lampes à alimenter",
      "reste la même dans la première lampe et diminue dans la seconde"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une pile est une source de courant constant",
      "croit que le courant s'adapte à la demande des lampes",
      "croit que le courant s'use en traversant une lampe"
     ]
    },
    {
     "id": "L13",
     "q": "Deux résistances de 100 Ω et 300 Ω sont branchées en série sous une tension de 12 V. La tension aux bornes de la résistance de 300 Ω vaut",
     "ok": "9 V",
     "bad": [
      "3 V",
      "6 V",
      "12 V"
     ],
     "err": [
      "donne la tension de l'autre résistance",
      "partage la tension en deux parts égales",
      "applique la règle de la dérivation à un montage en série"
     ]
    },
    {
     "id": "L14",
     "q": "Deux résistances de 100 Ω sont branchées en dérivation. La résistance équivalente vaut",
     "ok": "50 Ω",
     "bad": [
      "200 Ω",
      "100 Ω",
      "0,02 Ω"
     ],
     "err": [
      "additionne, comme en série",
      "croit que la dérivation ne change rien",
      "additionne les inverses et oublie d'inverser le résultat"
     ]
    },
    {
     "id": "L15",
     "q": "Un condensateur de 100 µF se charge à travers une résistance de 10 kΩ. Le temps caractéristique τ = R × C vaut",
     "ok": "1 s",
     "bad": [
      "1 ms",
      "1 000 000 s",
      "1 000 s"
     ],
     "err": [
      "oublie de convertir les kilo-ohms",
      "oublie de convertir les microfarads",
      "ne fait aucune des deux conversions"
     ]
    },
    {
     "id": "L16",
     "q": "Un rayon de lumière passe de l'air dans l'eau (indice 1,33) en arrivant en biais sur la surface. Le rayon réfracté",
     "ok": "se rapproche de la normale",
     "bad": [
      "s'écarte de la normale",
      "continue tout droit, sans être dévié",
      "n'existe pas : toute la lumière est réfléchie"
     ],
     "err": [
      "inverse le sens de la déviation",
      "croit que la lumière va toujours tout droit",
      "confond réfraction et réflexion totale"
     ]
    },
    {
     "id": "L17",
     "q": "Un objet est placé 20 cm devant une lentille convergente de distance focale 10 cm. L'image se forme",
     "ok": "20 cm derrière la lentille",
     "bad": [
      "10 cm derrière la lentille",
      "30 cm derrière la lentille",
      "environ 6,7 cm derrière la lentille"
     ],
     "err": [
      "croit que l'image se forme toujours au foyer",
      "additionne les deux distances",
      "erreur de signe dans la relation de conjugaison"
     ]
    },
    {
     "id": "L18",
     "q": "Une lumière a une fréquence de 5 × 10^14 Hz. Avec c = 3 × 10^8 m/s, sa longueur d'onde dans le vide vaut",
     "ok": "6 × 10^(−7) m",
     "bad": [
      "1,5 × 10^23 m",
      "environ 1,7 × 10^6 m",
      "6 × 10^(−6) m"
     ],
     "err": [
      "multiplie au lieu de diviser",
      "inverse le quotient",
      "erreur d'un facteur 10 sur les puissances"
     ]
    },
    {
     "id": "L19",
     "q": "De l'eau bout dans une casserole ouverte, à 100 °C. On laisse le feu allumé. Tant qu'il reste de l'eau liquide, sa température",
     "ok": "reste à 100 °C",
     "bad": [
      "continue de monter, puisqu'on continue de chauffer",
      "monte d'autant plus vite que le feu est fort",
      "baisse, car la vapeur emporte la chaleur"
     ],
     "idee_fausse": true,
     "err": [
      "croit que chauffer fait toujours monter la température",
      "lie la température à la puissance du feu",
      "confond le système eau liquide et l'énergie emportée par la vapeur"
     ]
    },
    {
     "id": "L20",
     "q": "On chauffe 2 kg d'eau de 20 °C à 70 °C. La capacité thermique massique de l'eau est 4 200 J/(kg·°C). L'énergie reçue par l'eau vaut",
     "ok": "420 kJ",
     "bad": [
      "588 kJ",
      "210 kJ",
      "168 J"
     ],
     "err": [
      "utilise la température finale au lieu de l'écart",
      "oublie la masse",
      "divise par l'écart de température au lieu de multiplier"
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
     "q": "La dimension d'une force s'écrit (M masse, L longueur, T temps)",
     "ok": "M L T^(−2)",
     "bad": [
      "M L T^(−1)",
      "M L² T^(−2)",
      "M L^(−1) T^(−2)"
     ],
     "err": [
      "donne la dimension d'une quantité de mouvement",
      "donne la dimension d'une énergie",
      "donne la dimension d'une pression"
     ]
    },
    {
     "id": "S2",
     "q": "Une seule de ces expressions est homogène à un temps (L longueur, g accélération de la pesanteur, m masse). Laquelle ?",
     "ok": "2π √(L/g)",
     "bad": [
      "2π √(g/L)",
      "2π L/g",
      "2π √(m L/g)"
     ],
     "err": [
      "inverse le quotient : obtient l'inverse d'un temps",
      "oublie la racine : obtient un temps au carré",
      "croit que la masse doit figurer dans la formule, sans vérifier la dimension"
     ]
    },
    {
     "id": "S3",
     "q": "L'énergie cinétique d'une voiture de 1 000 kg qui roule à 72 km/h vaut",
     "ok": "2 × 10^5 J",
     "bad": [
      "environ 2,6 × 10^6 J",
      "4 × 10^5 J",
      "10^4 J"
     ],
     "err": [
      "ne convertit pas les km/h en m/s",
      "oublie le facteur ½",
      "oublie le carré sur la vitesse"
     ]
    },
    {
     "id": "S4",
     "q": "Un point se déplace sur un axe. Sa position est x(t) = 3t² − 2t, avec x en mètres et t en secondes. À t = 2 s, sa vitesse vaut",
     "ok": "10 m/s",
     "bad": [
      "8 m/s",
      "4 m/s",
      "6 m/s"
     ],
     "err": [
      "calcule la position au lieu de la vitesse",
      "calcule la vitesse moyenne depuis le départ au lieu de dériver",
      "donne la valeur de l'accélération"
     ]
    },
    {
     "id": "S5",
     "q": "Un point décrit un cercle de rayon R à vitesse de valeur constante v. Son accélération est",
     "ok": "dirigée vers le centre du cercle, de valeur v²/R",
     "bad": [
      "nulle, puisque la valeur de la vitesse est constante",
      "tangente au cercle",
      "dirigée vers l'extérieur du cercle"
     ],
     "idee_fausse": true,
     "err": [
      "confond la valeur de la vitesse et le vecteur vitesse",
      "confond accélération et vitesse, qui est tangente",
      "raisonne avec la force centrifuge"
     ]
    },
    {
     "id": "S6",
     "q": "Un bloc de masse m glisse sans frottement sur un plan incliné d'un angle α par rapport à l'horizontale. Son accélération vaut",
     "ok": "g sin α",
     "bad": [
      "g cos α",
      "g",
      "m g sin α"
     ],
     "err": [
      "échange sinus et cosinus dans la projection du poids",
      "ignore la réaction du plan",
      "donne une force au lieu d'une accélération"
     ]
    },
    {
     "id": "S7",
     "q": "Un objet de 2 kg descend une pente de 5 m de long, dont le point bas est 3 m plus bas que le point haut (g = 10 m/s²). Le travail du poids sur ce trajet vaut",
     "ok": "60 J",
     "bad": [
      "100 J",
      "−60 J",
      "80 J"
     ],
     "err": [
      "utilise la longueur de la pente au lieu du dénivelé",
      "erreur de signe : le poids est moteur dans une descente",
      "utilise la distance horizontale (4 m) au lieu du dénivelé"
     ]
    },
    {
     "id": "S8",
     "q": "Une masse de 1 kg est accrochée à un ressort de raideur 100 N/m. La pulsation propre des oscillations vaut",
     "ok": "10 rad/s",
     "bad": [
      "100 rad/s",
      "0,1 rad/s",
      "environ 63 rad/s"
     ],
     "err": [
      "oublie la racine carrée",
      "inverse le quotient",
      "multiplie par 2π : confond pulsation et fréquence"
     ]
    },
    {
     "id": "S9",
     "q": "Un bloc de 2 kg est lancé à 3 m/s sur un sol horizontal. Les frottements l'arrêtent. Le travail des frottements vaut",
     "ok": "−9 J",
     "bad": [
      "+9 J",
      "−18 J",
      "−6 J"
     ],
     "err": [
      "erreur de signe : un frottement fait perdre de l'énergie cinétique",
      "oublie le facteur ½",
      "calcule m × v : confond énergie cinétique et quantité de mouvement"
     ]
    },
    {
     "id": "S10",
     "q": "Un générateur de force électromotrice 12 V et de résistance interne 2 Ω alimente une résistance de 4 Ω. La tension aux bornes de cette résistance vaut",
     "ok": "8 V",
     "bad": [
      "12 V",
      "4 V",
      "6 V"
     ],
     "err": [
      "ignore la résistance interne",
      "donne la tension perdue dans la résistance interne",
      "calcule le courant sans la résistance interne, puis retire la chute de tension"
     ]
    },
    {
     "id": "S11",
     "q": "Un condensateur déchargé se charge à travers une résistance sous une tension E. Au bout d'une durée égale au temps caractéristique τ, la tension à ses bornes vaut environ",
     "ok": "63 % de E",
     "bad": [
      "37 % de E",
      "50 % de E",
      "100 % de E"
     ],
     "err": [
      "confond la charge et la décharge",
      "confond le temps caractéristique et la durée de demi-charge",
      "croit que la charge est terminée au bout de τ"
     ]
    },
    {
     "id": "S12",
     "q": "En régime sinusoïdal, quand la fréquence augmente, l'impédance d'un condensateur",
     "ok": "diminue",
     "bad": [
      "augmente",
      "reste constante",
      "devient infinie"
     ],
     "err": [
      "confond le condensateur et la bobine",
      "traite le condensateur comme une résistance",
      "confond avec le régime continu, où le condensateur chargé bloque le courant"
     ]
    },
    {
     "id": "S13",
     "q": "Une tension sinusoïdale a une amplitude de 10 V. Sa valeur efficace vaut environ",
     "ok": "7,1 V",
     "bad": [
      "14,1 V",
      "5 V",
      "0 V"
     ],
     "err": [
      "multiplie par √2 au lieu de diviser",
      "divise par 2 au lieu de √2",
      "confond valeur efficace et valeur moyenne"
     ]
    },
    {
     "id": "S14",
     "q": "La réflexion totale de la lumière peut se produire",
     "ok": "quand la lumière passe du verre vers l'air, au-delà d'un angle limite",
     "bad": [
      "quand la lumière passe de l'air vers le verre, au-delà d'un angle limite",
      "dans les deux sens, au-delà d'un angle limite",
      "seulement quand le rayon arrive perpendiculairement à la surface"
     ],
     "err": [
      "inverse le sens : la réflexion totale exige de passer vers le milieu d'indice plus faible",
      "ne tient pas compte des indices",
      "confond avec l'incidence normale, où le rayon n'est pas dévié"
     ]
    },
    {
     "id": "S15",
     "q": "Un objet est placé 15 cm devant une lentille convergente de distance focale 10 cm. Le grandissement de l'image vaut",
     "ok": "−2",
     "bad": [
      "+2",
      "−0,5",
      "−3"
     ],
     "err": [
      "oublie le signe : l'image est renversée",
      "inverse le rapport des distances",
      "divise par la distance focale au lieu de la distance de l'objet"
     ]
    },
    {
     "id": "S16",
     "q": "Un gaz parfait est enfermé dans un récipient rigide. Sa température passe de 27 °C à 327 °C. Sa pression est",
     "ok": "multipliée par 2",
     "bad": [
      "multipliée par 12 environ",
      "inchangée, puisque le volume ne change pas",
      "divisée par 2"
     ],
     "err": [
      "fait le rapport des températures en degrés Celsius au lieu des kelvins",
      "croit que la pression ne dépend que du volume",
      "inverse la relation entre pression et température"
     ]
    },
    {
     "id": "S17",
     "q": "Un gaz reçoit 500 J sous forme de chaleur et fournit 200 J de travail à l'extérieur. La variation de son énergie interne vaut",
     "ok": "+300 J",
     "bad": [
      "+700 J",
      "−300 J",
      "+500 J"
     ],
     "err": [
      "erreur de signe sur le travail : l'ajoute au lieu de le retirer",
      "inverse la convention de signe sur les deux échanges",
      "croit que seule la chaleur modifie l'énergie interne"
     ]
    },
    {
     "id": "S18",
     "q": "On comprime très vite de l'air dans une pompe à vélo bouchée, sans qu'il ait le temps d'échanger de la chaleur avec l'extérieur. Sa température",
     "ok": "augmente, car le travail reçu augmente son énergie interne",
     "bad": [
      "reste constante, puisqu'il n'y a aucun échange de chaleur",
      "diminue, puisque son volume diminue",
      "augmente, mais seulement à cause des frottements du piston"
     ],
     "idee_fausse": true,
     "err": [
      "confond chaleur et température : croit que sans échange de chaleur la température ne peut pas changer",
      "applique la proportionnalité entre volume et température hors de son cadre (pression constante)",
      "n'attribue pas l'échauffement au travail de compression"
     ]
    }
   ],
   "redaction": "Un skieur de masse m = 80 kg part sans vitesse du haut d'une piste rectiligne de longueur L = 50 m, inclinée d'un angle α = 30° par rapport à l'horizontale. Donnée : g = 9,81 m/s².\n1. On néglige d'abord tous les frottements. Fais le bilan des forces, puis établis l'expression littérale de la vitesse v du skieur en bas de la piste. Calcule sa valeur.\n2. Vérifie par une analyse dimensionnelle que ton expression littérale est bien homogène à une vitesse.\n3. La vitesse mesurée en bas est en réalité de 18 m/s. Calcule le travail des forces de frottement sur la descente, puis la valeur de la force de frottement, supposée constante.\nPour chaque question : formule littérale d'abord, puis calcul, résultat avec son unité, et une phrase de conclusion.",
   "corrige": "1. Forces : le poids et la réaction de la piste, perpendiculaire au déplacement, qui ne travaille pas. Le dénivelé vaut h = L sin α = 50 × 0,5 = 25 m. Théorème de l'énergie cinétique (ou conservation de l'énergie mécanique) : ½ m v² = m g L sin α, donc v = √(2 g L sin α) = √(2 × 9,81 × 50 × 0,5) = √490,5, soit environ 22 m/s. La masse n'intervient pas. 2. g est en m/s² et L en m, sin α est sans dimension : g L a pour dimension L² T^(−2), sa racine carrée a pour dimension L T^(−1), celle d'une vitesse. 3. Variation d'énergie cinétique : ½ m v² = 0,5 × 80 × 18² = 12 960 J. Travail du poids : m g L sin α = 80 × 9,81 × 25 = 19 620 J. Travail des frottements : 12 960 − 19 620 = −6 660 J, soit environ −6,7 × 10³ J. Il est négatif : les frottements s'opposent au mouvement. Force de frottement : 6 660 / 50, soit environ 1,3 × 10² N. Deux chiffres significatifs, comme les données."
  }
 },
 "domaines": [
  {
   "nom": "Lycée : outils et ordres de grandeur",
   "ids": {
    "S": [
     "L1",
     "L2",
     "L3",
     "L4",
     "L5"
    ]
   }
  },
  {
   "nom": "Lycée : mécanique",
   "ids": {
    "S": [
     "L6",
     "L7",
     "L8",
     "L9",
     "L10",
     "L11"
    ]
   }
  },
  {
   "nom": "Lycée : électricité",
   "ids": {
    "S": [
     "L12",
     "L13",
     "L14",
     "L15"
    ]
   }
  },
  {
   "nom": "Lycée : optique et ondes",
   "ids": {
    "S": [
     "L16",
     "L17",
     "L18"
    ]
   }
  },
  {
   "nom": "Lycée : température et énergie thermique",
   "ids": {
    "S": [
     "L19",
     "L20"
    ]
   }
  },
  {
   "nom": "Première année : analyse dimensionnelle et ordres de grandeur",
   "ids": {
    "S": [
     "S1",
     "S2",
     "S3"
    ]
   }
  },
  {
   "nom": "Première année : mécanique du point",
   "ids": {
    "S": [
     "S4",
     "S5",
     "S6",
     "S7",
     "S8",
     "S9"
    ]
   }
  },
  {
   "nom": "Première année : électricité",
   "ids": {
    "S": [
     "S10",
     "S11",
     "S12",
     "S13"
    ]
   }
  },
  {
   "nom": "Première année : optique géométrique",
   "ids": {
    "S": [
     "S14",
     "S15"
    ]
   }
  },
  {
   "nom": "Première année : thermodynamique",
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
  "S'approprier",
  "Analyser",
  "Réaliser",
  "Valider",
  "Communiquer"
 ]
};
