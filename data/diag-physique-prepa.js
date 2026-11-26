window.DIAGS = window.DIAGS || {};
window.DIAGS["physique-prepa"] = {
 "cle": "physique-prepa",
 "matiere": "physique",
 "titre": "Test de physique",
 "nom": "Test de physique, prépa",
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
   "Première année, en cours d'année",
   "S"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-physique-prepa.md",
 "blocs": {
  "E": {
   "titre": "entrée en prépa (acquis de terminale et outils)",
   "questions": [
    {
     "id": "E1",
     "q": "Un pendule a une longueur ℓ (en m), dans un champ de pesanteur g (en m/s²). Laquelle de ces expressions est homogène à une durée ?",
     "ok": "√(ℓ/g)",
     "bad": [
      "√(g/ℓ)",
      "ℓ/g",
      "√(ℓ × g)"
     ],
     "err": [
      "inverse le quotient : obtient l'inverse d'une durée",
      "oublie la racine : obtient une durée au carré",
      "multiplie au lieu de diviser : obtient une vitesse"
     ]
    },
    {
     "id": "E2",
     "q": "Une voiture de 1 000 kg roule à 72 km/h. Son énergie cinétique vaut",
     "ok": "2 × 10^5 J",
     "bad": [
      "2,6 × 10^6 J",
      "4 × 10^5 J",
      "1 × 10^4 J"
     ],
     "err": [
      "ne convertit pas les km/h en m/s",
      "oublie le facteur 1/2",
      "oublie le carré de la vitesse"
     ]
    },
    {
     "id": "E3",
     "q": "La position d'un mobile sur un axe est x(t) = 3t² − 12t + 5 (x en m, t en s). Sa vitesse s'annule",
     "ok": "à t = 2 s",
     "bad": [
      "à t = 4 s",
      "à aucun instant : elle est constante",
      "à t = −2 s"
     ],
     "err": [
      "dérive 3t² en 3t",
      "dérive deux fois : confond vitesse et accélération",
      "erreur de signe en résolvant 6t − 12 = 0"
     ]
    },
    {
     "id": "E4",
     "q": "La solution de l'équation dy/dt + y/τ = 0 qui vérifie y(0) = y0 est",
     "ok": "y0 × e^(−t/τ)",
     "bad": [
      "y0 × e^(−τ × t)",
      "y0 × e^(t/τ)",
      "y0 × (1 − e^(−t/τ))"
     ],
     "err": [
      "écrit un exposant non homogène : τ × t a une dimension",
      "erreur de signe : la solution diverge",
      "confond avec la réponse à un échelon (charge), ne vérifie pas y(0) = y0"
     ]
    },
    {
     "id": "E5",
     "q": "Un solide de poids P est posé sur un plan incliné d'un angle α par rapport à l'horizontale. La composante du poids parallèle au plan a pour valeur",
     "ok": "P sin α",
     "bad": [
      "P cos α",
      "P tan α",
      "P"
     ],
     "err": [
      "confond avec la composante perpendiculaire au plan",
      "fait le rapport des deux composantes",
      "ne projette pas le vecteur"
     ]
    },
    {
     "id": "E6",
     "q": "Le niveau sonore est L = 10 log(I/I0), en décibels. Quand l'intensité sonore I est multipliée par 100, le niveau L",
     "ok": "augmente de 20 dB",
     "bad": [
      "est multiplié par 100",
      "est multiplié par 2",
      "augmente de 2 dB"
     ],
     "err": [
      "traite le logarithme comme une fonction linéaire",
      "applique log(100) = 2 comme un facteur au lieu d'un terme ajouté",
      "oublie le facteur 10 de la définition"
     ]
    },
    {
     "id": "E7",
     "q": "On mesure U = 12,0 V et I = 0,25 A aux bornes d'un conducteur ohmique. Sa résistance R = U/I s'écrit",
     "ok": "48 Ω",
     "bad": [
      "48,0 Ω",
      "48,00 Ω",
      "3,0 Ω"
     ],
     "err": [
      "garde trois chiffres significatifs alors que I n'en a que deux",
      "ajoute des chiffres pour faire précis",
      "multiplie U par I au lieu de diviser"
     ]
    },
    {
     "id": "E8",
     "q": "Tu lances une balle verticalement vers le haut. On néglige les frottements. Pendant tout le vol, son accélération est",
     "ok": "verticale, vers le bas, de valeur g",
     "bad": [
      "vers le haut pendant la montée, vers le bas pendant la descente",
      "nulle au sommet, puisque la vitesse y est nulle",
      "de plus en plus faible pendant la montée"
     ],
     "idee_fausse": true,
     "err": [
      "confond le sens de l'accélération avec celui de la vitesse",
      "croit qu'une vitesse nulle impose une accélération nulle",
      "croit que l'élan du lancer s'épuise pendant la montée"
     ]
    },
    {
     "id": "E9",
     "q": "On lance une balle horizontalement à 5 m/s depuis une hauteur de 20 m. On néglige les frottements. Elle touche le sol au bout de",
     "ok": "2 s",
     "bad": [
      "4 s",
      "environ 1,4 s",
      "0,5 s"
     ],
     "err": [
      "divise la hauteur par la vitesse horizontale : mélange les deux directions",
      "oublie le facteur 2 dans h = ½ g t²",
      "divise la vitesse initiale par g"
     ]
    },
    {
     "id": "E10",
     "q": "Un objet est lâché sans vitesse d'une hauteur de 5 m. On néglige les frottements. Sa vitesse à l'arrivée au sol vaut",
     "ok": "10 m/s",
     "bad": [
      "100 m/s",
      "50 m/s",
      "environ 7 m/s"
     ],
     "err": [
      "oublie la racine carrée",
      "calcule g × h : oublie le facteur 2 et la racine",
      "oublie le facteur 2 sous la racine"
     ]
    },
    {
     "id": "E11",
     "q": "Un satellite décrit une orbite circulaire de rayon r autour d'une planète de masse M. G est la constante de gravitation. La valeur de sa vitesse est",
     "ok": "√(G M/r)",
     "bad": [
      "G M/r²",
      "√(G M/r²)",
      "√(G M r)"
     ],
     "err": [
      "confond la vitesse avec le champ de gravitation",
      "oublie le rayon dans l'accélération v²/r",
      "multiplie par r au lieu de diviser : résultat non homogène à une vitesse"
     ],
     "hors": [
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle"
     ]
    },
    {
     "id": "E12",
     "q": "Deux satellites tournent autour de la même planète sur des orbites circulaires. Le rayon de l'orbite de B est 4 fois celui de A. La période de B vaut",
     "ok": "8 fois celle de A",
     "bad": [
      "4 fois celle de A",
      "64 fois celle de A",
      "16 fois celle de A"
     ],
     "err": [
      "croit la période proportionnelle au rayon",
      "oublie la racine : calcule r³",
      "prend le carré au lieu de la puissance 3/2"
     ],
     "hors": [
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle"
     ]
    },
    {
     "id": "E13",
     "q": "Un générateur de tension 12 V alimente deux résistances en série, R1 = 2 kΩ et R2 = 4 kΩ. La tension aux bornes de R2 vaut",
     "ok": "8 V",
     "bad": [
      "4 V",
      "12 V",
      "6 V"
     ],
     "err": [
      "calcule la tension aux bornes de R1",
      "croit que chaque résistance reçoit toute la tension du générateur",
      "partage la tension en deux parts égales sans regarder les résistances"
     ]
    },
    {
     "id": "E14",
     "q": "Un circuit RC série comporte R = 10 kΩ et C = 100 µF. Sa constante de temps vaut",
     "ok": "1 s",
     "bad": [
      "1 000 s",
      "1 × 10^(−3) s",
      "1 × 10^6 s"
     ],
     "err": [
      "ne convertit ni les kilo-ohms ni les microfarads",
      "ne convertit pas les kilo-ohms",
      "ne convertit pas les microfarads"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "E15",
     "q": "Un condensateur déchargé est branché en série avec une résistance sur un générateur de tension E. Juste après la fermeture du circuit, la tension aux bornes du condensateur",
     "ok": "est nulle, puis elle augmente peu à peu vers E",
     "bad": [
      "vaut E tout de suite",
      "vaut E, puis elle décroît vers 0",
      "est nulle et le reste indéfiniment"
     ],
     "err": [
      "croit que la charge du condensateur est instantanée",
      "confond avec la tension aux bornes de la résistance",
      "croit qu'aucun courant ne circule jamais dans la branche d'un condensateur"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "E16",
     "q": "Un faisceau de lumière rouge passe de l'air dans le verre. Quelle grandeur garde la même valeur ?",
     "ok": "sa fréquence",
     "bad": [
      "sa longueur d'onde",
      "sa célérité",
      "aucune : fréquence, longueur d'onde et célérité changent"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la longueur d'onde est fixée par la couleur, donc par la source",
      "croit que la lumière a la même célérité dans tous les milieux",
      "croit que le milieu modifie toutes les grandeurs de l'onde"
     ]
    },
    {
     "id": "E17",
     "q": "Un laser de longueur d'onde λ = 600 nm éclaire une fente de largeur a = 0,1 mm. Le demi-angle de diffraction θ = λ/a vaut",
     "ok": "6 × 10^(−3) rad",
     "bad": [
      "6 × 10^3 rad",
      "1,7 × 10^2 rad",
      "6 × 10^(−11) rad"
     ],
     "err": [
      "ne convertit ni les nanomètres ni les millimètres",
      "inverse le quotient",
      "multiplie λ par a"
     ]
    },
    {
     "id": "E18",
     "q": "Un rayon passe de l'air (indice 1,00) dans l'eau (indice 1,33) avec un angle d'incidence de 30°. L'angle de réfraction r vérifie",
     "ok": "sin r = 0,50/1,33",
     "bad": [
      "sin r = 0,50 × 1,33",
      "r = 30°/1,33",
      "r = 30°"
     ],
     "err": [
      "inverse les deux indices : le rayon s'écarterait de la normale",
      "applique la loi aux angles au lieu des sinus",
      "ignore la réfraction"
     ]
    },
    {
     "id": "E19",
     "q": "Une bouilloire de puissance 2 kW chauffe 1 kg d'eau de 20 °C à 100 °C. Capacité thermique massique de l'eau : 4 200 J/(kg·K). Sans pertes, le chauffage dure",
     "ok": "168 s",
     "bad": [
      "210 s",
      "168 000 s",
      "42 s"
     ],
     "err": [
      "prend la température finale au lieu de l'écart de température",
      "ne convertit pas les kilowatts",
      "prend la température initiale au lieu de l'écart"
     ]
    },
    {
     "id": "E20",
     "q": "Une voiture de 1 000 kg roule à 20 m/s et freine jusqu'à l'arrêt sur 50 m de route horizontale. La force de freinage, supposée constante, vaut",
     "ok": "4 000 N",
     "bad": [
      "8 000 N",
      "200 N",
      "1 × 10^7 N"
     ],
     "err": [
      "oublie le facteur 1/2 de l'énergie cinétique",
      "oublie le carré de la vitesse",
      "multiplie l'énergie par la distance au lieu de diviser"
     ]
    }
   ],
   "redaction": "Un palet de masse m est lâché sans vitesse en haut d'un plan incliné d'un angle α = 30° par rapport à l'horizontale. Il glisse sans frottement sur une longueur L = 2,5 m. Données : g = 10 m/s² ; sin 30° = 0,50.\n1. Fais un schéma et le bilan des forces qui s'exercent sur le palet.\n2. À l'aide de la deuxième loi de Newton, établis l'expression littérale de l'accélération du palet le long du plan.\n3. Établis l'expression littérale de la durée de la descente, puis calcule-la. Calcule aussi la vitesse en bas du plan.\n4. Vérifie l'homogénéité de l'expression de la durée. La durée dépend-elle de la masse du palet ? Commente.",
   "corrige": "Référentiel terrestre, supposé galiléen. Deux forces : le poids (vertical, vers le bas, de valeur m g) et la réaction du plan (perpendiculaire au plan, puisqu'il n'y a pas de frottement). Deuxième loi de Newton : m × a = poids + réaction (somme de vecteurs). En projection sur l'axe du plan orienté vers le bas, la réaction ne compte pas et il reste m a = m g sin α, donc a = g sin α = 10 × 0,50 = 5,0 m/s². L'accélération est constante et la vitesse initiale est nulle : v(t) = g sin α × t et x(t) = ½ g sin α × t². Le palet a parcouru L quand t = √(2L/(g sin α)) = √(5,0/5,0) = 1,0 s. Sa vitesse vaut alors v = g sin α × t = 5,0 m/s. Homogénéité : L/g s'exprime en m/(m/s²) = s², et sin α n'a pas de dimension, donc la racine est bien une durée. La masse n'apparaît pas dans le résultat : sans frottement, tous les palets descendent en la même durée, comme pour une chute libre."
  },
  "S": {
   "titre": "premier semestre de prépa",
   "questions": [
    {
     "id": "S1",
     "q": "Un rayon lumineux se propage dans du verre d'indice 1,5 et arrive sur une surface de séparation avec l'air d'indice 1,0. L'angle limite i_lim au-delà duquel la réflexion est totale vérifie",
     "ok": "sin i_lim = 2/3",
     "bad": [
      "sin i_lim = 3/2",
      "i_lim = 2/3 rad",
      "rien : la réflexion totale n'existe que de l'air vers le verre"
     ],
     "err": [
      "inverse les indices : un sinus ne peut pas dépasser 1",
      "oublie le sinus",
      "inverse la condition : la réflexion totale exige d'aller vers le milieu le moins réfringent"
     ],
     "hors": [
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle",
      "ATS métiers de la chimie"
     ]
    },
    {
     "id": "S2",
     "q": "Une lentille mince convergente a une distance focale image de 10 cm. Un objet réel est placé à 30 cm avant la lentille. Son image se forme",
     "ok": "à 15 cm après la lentille",
     "bad": [
      "à 7,5 cm après la lentille",
      "à 20 cm après la lentille",
      "à 40 cm après la lentille"
     ],
     "err": [
      "erreur de signe dans la relation de conjugaison : additionne les inverses",
      "soustrait les distances au lieu des inverses",
      "additionne les distances"
     ],
     "hors": [
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle",
      "ATS métiers de la chimie"
     ]
    },
    {
     "id": "S3",
     "q": "Un objet réel est placé à 20 cm avant une lentille mince convergente. Son image réelle se forme à 60 cm après la lentille. Le grandissement vaut",
     "ok": "−3",
     "bad": [
      "+3",
      "−1/3",
      "+1/3"
     ],
     "err": [
      "oublie le signe : l'image est renversée",
      "inverse le rapport",
      "cumule les deux erreurs"
     ],
     "hors": [
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle",
      "ATS métiers de la chimie"
     ]
    },
    {
     "id": "S4",
     "q": "Une lentille convergente forme sur un écran l'image nette d'un objet. On cache la moitié supérieure de la lentille avec un carton. Sur l'écran, l'image",
     "ok": "reste entière, mais moins lumineuse",
     "bad": [
      "perd sa moitié supérieure",
      "perd sa moitié inférieure",
      "disparaît"
     ],
     "idee_fausse": true,
     "err": [
      "croit que chaque partie de la lentille forme une partie de l'image",
      "même idée, en tenant compte du renversement de l'image",
      "croit qu'il faut la lentille entière pour former une image"
     ]
    },
    {
     "id": "S5",
     "q": "Un signal a pour expression s(x, t) = A cos(ω t − k x), avec ω et k positifs. C'est une onde progressive qui se propage",
     "ok": "vers les x croissants, à la célérité ω/k",
     "bad": [
      "vers les x décroissants, à la célérité ω/k",
      "vers les x croissants, à la célérité k/ω",
      "vers les x croissants, à la célérité ω × k"
     ],
     "err": [
      "se trompe sur le signe devant k x",
      "inverse le quotient : obtient l'inverse d'une vitesse",
      "multiplie au lieu de diviser : résultat non homogène à une vitesse"
     ],
     "hors": [
      "BCPST",
      "TB"
     ]
    },
    {
     "id": "S6",
     "q": "Une onde sonore de fréquence 1,0 kHz se propage dans l'eau, où la célérité du son vaut 1 500 m/s. Sa longueur d'onde dans l'eau vaut",
     "ok": "1,5 m",
     "bad": [
      "0,34 m",
      "1,5 × 10^6 m",
      "0,67 m"
     ],
     "err": [
      "prend la célérité du son dans l'air",
      "multiplie la célérité par la fréquence",
      "inverse le quotient"
     ]
    },
    {
     "id": "S7",
     "q": "Deux résistances de 6 Ω et de 3 Ω sont branchées en dérivation. La résistance équivalente vaut",
     "ok": "2 Ω",
     "bad": [
      "9 Ω",
      "0,5 Ω",
      "4,5 Ω"
     ],
     "err": [
      "additionne, comme pour deux résistances en série",
      "additionne les inverses sans inverser le résultat",
      "fait la moyenne des deux valeurs"
     ]
    },
    {
     "id": "S8",
     "q": "Une résistance de 50 Ω est soumise à une tension continue de 10 V. La puissance qu'elle dissipe vaut",
     "ok": "2 W",
     "bad": [
      "500 W",
      "0,2 W",
      "5 000 W"
     ],
     "err": [
      "multiplie U par R",
      "calcule l'intensité U/R",
      "multiplie U² par R au lieu de diviser"
     ]
    },
    {
     "id": "S9",
     "q": "Un circuit RC série est soumis à un échelon de tension E. La tension u aux bornes du condensateur vérifie",
     "ok": "RC × du/dt + u = E",
     "bad": [
      "du/dt + RC × u = E",
      "RC × du/dt − u = E",
      "RC × du/dt + u = 0"
     ],
     "err": [
      "place RC devant u : équation non homogène",
      "erreur de signe : la solution diverge",
      "oublie le second membre : écrit le régime libre"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "S10",
     "q": "Un condensateur déchargé se charge à travers une résistance sous une tension E. À la date t = τ = RC, la tension à ses bornes vaut environ",
     "ok": "63 % de E",
     "bad": [
      "37 % de E",
      "50 % de E",
      "100 % de E"
     ],
     "err": [
      "confond la charge avec la décharge",
      "confond la constante de temps avec la durée de demi-charge",
      "croit la charge terminée au bout de τ"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "S11",
     "q": "Un circuit alimenté par un générateur de tension continue a atteint son régime permanent. L'intensité du courant dans la branche qui contient un condensateur est",
     "ok": "nulle",
     "bad": [
      "maximale, car le condensateur est chargé",
      "égale à E/R, comme si le condensateur était un fil",
      "variable : le condensateur se charge et se décharge sans cesse"
     ],
     "err": [
      "confond la charge portée par le condensateur avec le courant",
      "traite le condensateur comme un fil : confusion avec la bobine",
      "confond régime continu et régime sinusoïdal"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "S12",
     "q": "Un condensateur de capacité 10 µF est chargé sous une tension de 100 V. L'énergie qu'il stocke vaut",
     "ok": "0,05 J",
     "bad": [
      "0,1 J",
      "5 × 10^(−4) J",
      "5 × 10^4 J"
     ],
     "err": [
      "oublie le facteur 1/2",
      "oublie le carré de la tension",
      "ne convertit pas les microfarads"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "S13",
     "q": "Un point décrit un cercle de rayon R avec une vitesse de valeur constante v. Son accélération est",
     "ok": "de valeur v²/R, dirigée vers le centre",
     "bad": [
      "nulle, puisque la vitesse est constante",
      "de valeur v²/R, dirigée vers l'extérieur du cercle",
      "de valeur v²/R, tangente au cercle"
     ],
     "idee_fausse": true,
     "err": [
      "confond valeur de la vitesse et vecteur vitesse",
      "raisonne avec la force centrifuge",
      "confond la direction de l'accélération avec celle de la vitesse"
     ],
     "hors": [
      "TB"
     ]
    },
    {
     "id": "S14",
     "q": "En coordonnées polaires (r, θ), avec les vecteurs unitaires u_r et u_θ, le vecteur vitesse d'un point s'écrit",
     "ok": "(dr/dt) u_r + r (dθ/dt) u_θ",
     "bad": [
      "(dr/dt) u_r + (dθ/dt) u_θ",
      "(dr/dt) u_r",
      "r (dθ/dt) u_r + (dr/dt) u_θ"
     ],
     "err": [
      "oublie le facteur r : second terme non homogène à une vitesse",
      "oublie que le vecteur u_r tourne avec le point",
      "échange les composantes radiale et orthoradiale"
     ],
     "hors": [
      "BCPST",
      "TB",
      "ATS génie civil",
      "ATS ingénierie industrielle"
     ]
    },
    {
     "id": "S15",
     "q": "Une bille de masse m tombe dans un fluide qui exerce sur elle une force de frottement de valeur k × v, opposée à la vitesse. On néglige la poussée d'Archimède. Sa vitesse limite vaut",
     "ok": "m g/k",
     "bad": [
      "k/(m g)",
      "m/k",
      "√(m g/k)"
     ],
     "err": [
      "inverse le quotient : résultat non homogène à une vitesse",
      "oublie g : donne le temps caractéristique",
      "confond avec un frottement proportionnel à v²"
     ]
    },
    {
     "id": "S16",
     "q": "Une particule chargée entre dans un champ magnétique uniforme et stationnaire, avec une vitesse perpendiculaire au champ. On néglige son poids. Sa trajectoire est",
     "ok": "un cercle, parcouru à vitesse de valeur constante",
     "bad": [
      "une parabole",
      "un cercle, parcouru de plus en plus vite",
      "une droite"
     ],
     "err": [
      "confond avec le mouvement dans un champ électrique uniforme",
      "croit que la force magnétique travaille",
      "croit que la force magnétique est colinéaire à la vitesse, ou nulle"
     ],
     "hors": [
      "TSI1",
      "BCPST",
      "TB",
      "ATS ingénierie industrielle",
      "ATS métiers de la chimie"
     ]
    },
    {
     "id": "S17",
     "q": "Un pendule simple de longueur ℓ est lâché sans vitesse, fil tendu et horizontal. On néglige les frottements. La valeur de sa vitesse au point le plus bas est",
     "ok": "√(2 g ℓ)",
     "bad": [
      "√(g ℓ)",
      "2 g ℓ",
      "√(2 g ℓ/m)"
     ],
     "err": [
      "oublie le facteur 2",
      "oublie la racine : résultat non homogène à une vitesse",
      "croit que la masse intervient : résultat non homogène à une vitesse"
     ]
    },
    {
     "id": "S18",
     "q": "Un ressort de raideur k = 200 N/m est comprimé de 10 cm. Son énergie potentielle élastique vaut",
     "ok": "1 J",
     "bad": [
      "2 J",
      "10 J",
      "1 × 10^4 J"
     ],
     "err": [
      "oublie le facteur 1/2",
      "oublie le carré de l'allongement",
      "ne convertit pas les centimètres"
     ]
    },
    {
     "id": "S19",
     "q": "L'énergie potentielle Ep(x) d'un point soumis à une seule force conservative présente un minimum en x0. La position x0 est",
     "ok": "une position d'équilibre stable",
     "bad": [
      "une position d'équilibre instable",
      "une position où la force est maximale, donc pas un équilibre",
      "un équilibre seulement si Ep(x0) = 0"
     ],
     "err": [
      "confond minimum et maximum d'énergie potentielle",
      "confond extremum de l'énergie potentielle et extremum de la force",
      "croit que la valeur de l'énergie potentielle compte, alors qu'elle est définie à une constante près"
     ]
    },
    {
     "id": "S20",
     "q": "Un point mobile sur un axe a pour énergie potentielle Ep(x) = ½ k x². La force associée, en projection sur l'axe, vaut",
     "ok": "−k x",
     "bad": [
      "+k x",
      "½ k x²",
      "−½ k x"
     ],
     "err": [
      "oublie le signe moins de F = −dEp/dx",
      "ne dérive pas : confond force et énergie",
      "dérive x² en x"
     ]
    },
    {
     "id": "TB1",
     "q": "Un point a pour coordonnées x(t) = 4t et y(t) = 3t − 5t² (x et y en m, t en s). À t = 0, la valeur de sa vitesse est",
     "ok": "5 m/s",
     "bad": [
      "7 m/s",
      "4 m/s",
      "10 m/s"
     ],
     "err": [
      "additionne les deux composantes au lieu de calculer la norme",
      "oublie la composante de la vitesse selon y",
      "dérive deux fois : donne la valeur de l'accélération"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB2",
     "q": "Une voiture démarre en ligne droite, sans vitesse initiale, avec une accélération constante de 2 m/s². Au bout de 10 s, elle a parcouru",
     "ok": "100 m",
     "bad": [
      "200 m",
      "20 m",
      "10 m"
     ],
     "err": [
      "oublie le facteur 1/2 de la loi horaire",
      "calcule a × t : donne la vitesse atteinte, pas la distance",
      "oublie le carré du temps"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB3",
     "q": "Une bille est lancée horizontalement. Avec un axe y dirigé vers le bas, ses équations horaires sont x(t) = 2t et y(t) = 5t² (x et y en m, t en s). L'équation de sa trajectoire est",
     "ok": "y = 1,25 x²",
     "bad": [
      "y = 2,5 x²",
      "y = 20 x²",
      "y = 2,5 x"
     ],
     "err": [
      "n'élève pas le 2 au carré en remplaçant t par x/2",
      "écrit t = 2x au lieu de t = x/2",
      "oublie le carré en remplaçant t : obtient une droite"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB4",
     "q": "Une cabine d'ascenseur de masse 500 kg monte avec une accélération de 2 m/s² dirigée vers le haut. On prend g = 10 m/s². La force exercée par le câble sur la cabine vaut",
     "ok": "6 000 N",
     "bad": [
      "5 000 N",
      "4 000 N",
      "1 000 N"
     ],
     "err": [
      "croit que le câble compense juste le poids : ignore l'accélération",
      "erreur de signe en projetant la deuxième loi de Newton",
      "calcule m × a seul : oublie le poids"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB5",
     "q": "Un palet glisse en ligne droite, à vitesse constante, sur une table horizontale. La résultante des forces qui s'exercent sur lui est",
     "ok": "nulle",
     "bad": [
      "dirigée dans le sens du mouvement",
      "dirigée en sens inverse du mouvement",
      "égale à son poids"
     ],
     "err": [
      "croit qu'un mouvement exige une force dans son sens",
      "ne compte que les frottements : le palet ralentirait",
      "ne compte que le poids : oublie la réaction de la table"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB6",
     "q": "On tire une valise sur 10 m de sol horizontal avec une force constante de 50 N, inclinée de 60° par rapport à l'horizontale. On donne cos 60° = 0,5. Le travail de cette force vaut",
     "ok": "250 J",
     "bad": [
      "500 J",
      "1 000 J",
      "25 J"
     ],
     "err": [
      "oublie le cosinus : fait comme si la force était parallèle au déplacement",
      "divise par le cosinus au lieu de multiplier",
      "oublie la distance : calcule seulement la composante horizontale de la force"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB7",
     "q": "Un skieur de 80 kg part sans vitesse et descend une piste dont le dénivelé est de 20 m. Il arrive en bas à 10 m/s. On prend g = 10 m/s². Le travail des forces de frottement vaut",
     "ok": "−12 000 J",
     "bad": [
      "+12 000 J",
      "−8 000 J",
      "+20 000 J"
     ],
     "err": [
      "oublie le signe : une force de frottement a un travail résistant",
      "oublie le facteur 1/2 de l'énergie cinétique",
      "compte le travail du poids comme résistant alors que le skieur descend"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB8",
     "q": "Deux armatures planes et parallèles, distantes de 5 cm, sont soumises à une différence de potentiel de 100 V. Le champ électrostatique entre elles, supposé uniforme, a pour valeur",
     "ok": "2 000 V/m",
     "bad": [
      "20 V/m",
      "5 V·m",
      "5 × 10^(−4) m/V"
     ],
     "err": [
      "ne convertit pas les centimètres en mètres",
      "multiplie la tension par la distance au lieu de diviser",
      "inverse le quotient"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB9",
     "q": "Dans une cuve d'électrophorèse, un ion de charge q positive est soumis à la force électrique q E et à une force de frottement de valeur α × v, opposée à sa vitesse. Sa mobilité électrophorétique μ, définie par v_lim = μ E, vaut",
     "ok": "q/α",
     "bad": [
      "α/q",
      "q E/α",
      "q × α"
     ],
     "err": [
      "inverse le quotient",
      "donne la vitesse limite, pas la mobilité",
      "multiplie au lieu de diviser"
     ],
     "pour": [
      "TB"
     ]
    },
    {
     "id": "TB10",
     "q": "Pendant 10 s, 5 × 10^15 ions portant chacun une charge de 3,2 × 10^(−19) C traversent, dans le même sens, une section de la cuve d'électrophorèse. L'intensité du courant vaut",
     "ok": "1,6 × 10^(−4) A",
     "bad": [
      "1,6 × 10^(−3) A",
      "1,6 × 10^(−2) A",
      "5 × 10^14 A"
     ],
     "err": [
      "calcule la charge totale sans diviser par la durée",
      "multiplie la charge totale par la durée au lieu de diviser",
      "divise le nombre d'ions par la durée : oublie la charge de chaque ion"
     ],
     "pour": [
      "TB"
     ]
    }
   ],
   "redaction": "Un condensateur de capacité C = 100 µF, chargé sous la tension U0 = 6,0 V, se décharge à partir de t = 0 dans un conducteur ohmique de résistance R = 10 kΩ. On note u(t) la tension aux bornes du condensateur. Le condensateur et le conducteur ohmique sont orientés en convention récepteur. Donnée : ln 2 ≈ 0,69.\n1. Fais le schéma du circuit et établis l'équation différentielle vérifiée par u(t).\n2. Résous cette équation en tenant compte de la condition initiale.\n3. Donne l'expression de la constante de temps τ, vérifie son homogénéité à l'aide des unités, puis calcule-la.\n4. À quelle date la tension vaut-elle U0/2 ?\n5. Calcule l'énergie dissipée dans le conducteur ohmique pendant toute la décharge. Justifie.",
   "corrige": "Avec une même intensité i orientée en convention récepteur pour les deux dipôles, i = C du/dt et la loi des mailles s'écrit u + R i = 0, donc RC du/dt + u = 0. Les solutions sont de la forme u(t) = K e^(−t/τ) avec τ = RC ; la tension aux bornes d'un condensateur est continue, donc u(0) = U0 et u(t) = U0 e^(−t/τ). Homogénéité : R s'exprime en V/A et C en A·s/V, donc RC est en secondes. τ = 10 × 10^3 × 100 × 10^(−6) = 1,0 s. u = U0/2 quand e^(−t/τ) = 1/2, soit t = τ ln 2 ≈ 0,69 s. À la fin de la décharge, le condensateur est vide : toute l'énergie qu'il stockait a été dissipée par effet Joule dans le conducteur ohmique, soit ½ C U0² = 0,5 × 100 × 10^(−6) × 36 = 1,8 × 10^(−3) J.",
   "redaction_hors": [
    "TB"
   ]
  }
 },
 "domaines": [
  {
   "nom": "Outils (dimensions, ordres de grandeur, dérivées, vecteurs, logarithmes)",
   "ids": {
    "E": [
     "E1",
     "E2",
     "E3",
     "E4",
     "E5",
     "E6",
     "E7"
    ],
    "S": []
   }
  },
  {
   "nom": "Mécanique du point",
   "ids": {
    "E": [
     "E8",
     "E9",
     "E11",
     "E12"
    ],
    "S": [
     "S13",
     "S14",
     "S15",
     "S16",
     "TB1",
     "TB2",
     "TB3",
     "TB4",
     "TB5"
    ]
   }
  },
  {
   "nom": "Énergie",
   "ids": {
    "E": [
     "E10",
     "E19",
     "E20"
    ],
    "S": [
     "S17",
     "S18",
     "S19",
     "S20",
     "TB6",
     "TB7"
    ]
   }
  },
  {
   "nom": "Circuits électriques",
   "ids": {
    "E": [
     "E13",
     "E14",
     "E15"
    ],
    "S": [
     "S7",
     "S8",
     "S9",
     "S10",
     "S11",
     "S12",
     "TB8",
     "TB9",
     "TB10"
    ]
   }
  },
  {
   "nom": "Ondes et optique géométrique",
   "ids": {
    "E": [
     "E16",
     "E17",
     "E18"
    ],
    "S": [
     "S1",
     "S2",
     "S3",
     "S4",
     "S5",
     "S6"
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
