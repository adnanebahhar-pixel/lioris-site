window.DIAGS = window.DIAGS || {};
window.DIAGS["svt"] = {
 "cle": "svt",
 "matiere": "SVT",
 "titre": "Test de SVT",
 "nom": "Diagnostic de SVT",
 "commun": null,
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
  ],
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
  ],
  [
   "Première, spécialité SVT",
   "P"
  ],
  [
   "Terminale, spécialité SVT",
   "T"
  ]
 ],
 "duree": "32 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-svt-college-lycee.md",
 "blocs": {
  "B": {
   "titre": "élève de 6e ou de 5e",
   "questions": [
    {
     "id": "B1",
     "q": "Une plante verte en pot grandit et devient plus lourde. La matière qu'elle fabrique vient surtout",
     "ok": "du dioxyde de carbone de l'air et de l'eau, grâce à la lumière",
     "bad": [
      "de la terre du pot, qu'elle mange peu à peu",
      "de l'eau seulement",
      "de la lumière, qui se transforme en matière"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la plante se nourrit de terre",
      "oublie le dioxyde de carbone : pense qu'un gaz ne peut pas devenir de la matière",
      "confond énergie et matière"
     ]
    },
    {
     "id": "B2",
     "q": "Une plante verte respire",
     "ok": "le jour et la nuit",
     "bad": [
      "seulement la nuit",
      "jamais : elle fait la photosynthèse à la place",
      "seulement le jour, quand il y a de la lumière"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la respiration des plantes n'existe que la nuit",
      "croit que la photosynthèse remplace la respiration",
      "confond respiration et photosynthèse"
     ]
    },
    {
     "id": "B3",
     "q": "Qu'ont en commun un chêne, une souris et une bactérie ?",
     "ok": "ils sont tous faits de cellules : une seule ou plusieurs",
     "bad": [
      "rien : une plante n'est pas faite de cellules",
      "rien : une bactérie n'est pas un être vivant",
      "ils sont tous faits du même nombre de cellules"
     ],
     "err": [
      "réserve la cellule aux animaux",
      "croit qu'un microbe n'est pas un être vivant",
      "ne distingue pas êtres à une cellule et êtres à plusieurs cellules"
     ]
    },
    {
     "id": "B4",
     "q": "Le dauphin vit dans la mer et nage. Les scientifiques le classent",
     "ok": "avec les mammifères, car il a des mamelles et allaite ses petits",
     "bad": [
      "avec les poissons, car il vit dans l'eau",
      "avec les poissons, car il a des nageoires et la même forme",
      "à part, car il ne ressemble à aucun autre animal"
     ],
     "idee_fausse": true,
     "err": [
      "classe selon le milieu de vie",
      "classe selon la forme et le déplacement",
      "ne sait pas qu'un caractère partagé suffit à classer"
     ]
    },
    {
     "id": "B5",
     "q": "Dans la chaîne alimentaire « herbe → criquet → grenouille → héron », la flèche signifie",
     "ok": "« est mangé par »",
     "bad": [
      "« mange »",
      "« se transforme en »",
      "« est plus petit que »"
     ],
     "err": [
      "lit la flèche à l'envers",
      "croit qu'un être vivant devient le suivant",
      "lit la flèche comme un classement de taille"
     ]
    },
    {
     "id": "B6",
     "q": "Une feuille morte tombée au sol disparaît en quelques mois. Que lui arrive-t-il ?",
     "ok": "des êtres vivants du sol (vers, champignons, bactéries) la transforment en matière minérale",
     "bad": [
      "elle disparaît toute seule, avec le temps",
      "la pluie la dissout",
      "elle s'enfonce dans le sol sans être transformée"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la décomposition se fait sans êtres vivants",
      "attribue la décomposition à la pluie seule",
      "confond enfouissement et décomposition"
     ]
    },
    {
     "id": "B7",
     "q": "Un poisson respire dans l'eau. Il prélève",
     "ok": "le dioxygène dissous dans l'eau",
     "bad": [
      "le dioxygène qui compose la molécule d'eau",
      "rien : un poisson ne respire pas",
      "de l'air, en remontant à la surface"
     ],
     "idee_fausse": true,
     "err": [
      "confond le dioxygène dissous et l'oxygène de la molécule d'eau",
      "croit que respirer veut dire respirer de l'air",
      "généralise le cas des animaux à poumons"
     ]
    },
    {
     "id": "B8",
     "q": "En France, il fait plus chaud en été qu'en hiver parce que",
     "ok": "l'axe de la Terre est incliné : en été, le Soleil est plus haut dans le ciel et les journées sont plus longues",
     "bad": [
      "la Terre est plus proche du Soleil en été",
      "le Soleil chauffe plus fort en été",
      "la Terre tourne plus lentement sur elle-même en été"
     ],
     "idee_fausse": true,
     "err": [
      "explique les saisons par la distance entre la Terre et le Soleil",
      "croit que le Soleil change de puissance",
      "confond rotation de la Terre et saisons"
     ]
    },
    {
     "id": "B9",
     "q": "Quelle différence y a-t-il entre la météo et le climat ?",
     "ok": "la météo est le temps qu'il fait un jour donné ; le climat est la moyenne du temps sur une longue durée, environ 30 ans",
     "bad": [
      "aucune : ce sont deux mots pour la même chose",
      "le climat, c'est la météo prévue pour la semaine à venir",
      "la météo parle de la pluie, le climat de la température"
     ],
     "idee_fausse": true,
     "err": [
      "confond météo et climat",
      "confond climat et prévision à court terme",
      "sépare météo et climat par la grandeur mesurée, pas par la durée"
     ]
    },
    {
     "id": "B10",
     "q": "La lave qui sort d'un volcan vient",
     "ok": "de roches qui ont fondu en profondeur, dans une zone limitée",
     "bad": [
      "du centre de la Terre, qui est entièrement liquide",
      "d'un feu qui brûle sous le volcan",
      "d'une couche de lave qui fait le tour de la Terre juste sous le sol"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'intérieur de la Terre est liquide",
      "confond lave et combustion",
      "imagine une couche continue de magma sous le sol"
     ]
    },
    {
     "id": "B11",
     "q": "Un séisme est provoqué par",
     "ok": "une cassure brutale de roches en profondeur, qui libère de l'énergie",
     "bad": [
      "l'éruption d'un volcan, dans tous les cas",
      "la météo : forte chaleur ou orage",
      "l'effondrement de grottes sous le sol"
     ],
     "err": [
      "lie tout séisme à un volcan",
      "attribue le séisme à la météo",
      "attribue le séisme à des vides sous le sol"
     ]
    },
    {
     "id": "B12",
     "q": "Il fait nuit en France parce que",
     "ok": "la Terre tourne sur elle-même : la France se trouve du côté non éclairé",
     "bad": [
      "le Soleil tourne autour de la Terre",
      "la Lune cache le Soleil",
      "la Terre s'est éloignée du Soleil"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le Soleil tourne autour de la Terre",
      "confond la nuit et une éclipse",
      "confond le jour et la nuit avec la distance au Soleil"
     ]
    },
    {
     "id": "B13",
     "q": "Que deviennent les aliments une fois digérés ?",
     "ok": "les nutriments passent de l'intestin dans le sang, qui les apporte aux organes",
     "bad": [
      "ils vont de l'estomac aux muscles par un tuyau direct",
      "ils ressortent tous dans les excréments",
      "les liquides suivent un tuyau vers l'urine, les solides un autre tuyau"
     ],
     "idee_fausse": true,
     "err": [
      "ne connaît pas le rôle du sang dans le transport des nutriments",
      "croit que le tube digestif ne fait que laisser passer",
      "imagine deux tuyaux séparés, liquides et solides"
     ]
    },
    {
     "id": "B14",
     "q": "Un bébé se forme à partir",
     "ok": "d'une cellule-œuf, née de l'union d'un spermatozoïde et d'un ovule",
     "bad": [
      "d'un spermatozoïde seul, qui grandit dans le ventre de la mère",
      "d'un ovule seul",
      "du mélange du sang du père et de celui de la mère"
     ],
     "err": [
      "croit que le bébé est déjà contenu dans le spermatozoïde",
      "croit que l'ovule suffit",
      "croit que l'hérédité passe par le sang"
     ]
    },
    {
     "id": "B15",
     "q": "Les micro-organismes (bactéries, levures) sont",
     "ok": "pour la plupart sans danger, et certains sont utiles : yaourt, pain, digestion",
     "bad": [
      "tous dangereux pour la santé",
      "tous des virus",
      "présents seulement dans les endroits sales"
     ],
     "idee_fausse": true,
     "err": [
      "croit que tout microbe rend malade",
      "confond bactérie et virus",
      "lie microbes et saleté"
     ]
    },
    {
     "id": "B16",
     "q": "Par rapport à l'air que tu inspires, l'air que tu expires contient",
     "ok": "moins de dioxygène et plus de dioxyde de carbone",
     "bad": [
      "uniquement du dioxyde de carbone",
      "exactement la même chose",
      "plus de dioxygène"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'on rejette seulement du dioxyde de carbone",
      "ne voit pas d'échange de gaz",
      "inverse le sens de l'échange"
     ]
    },
    {
     "id": "B17",
     "q": "Lina veut savoir si un engrais fait pousser plus vite ses plants de radis. Elle met de l'engrais dans un pot. Que doit-elle préparer d'autre ?",
     "ok": "un second pot identique (mêmes plants, même eau, même lumière) sans engrais",
     "bad": [
      "rien : un seul pot suffit, elle verra bien si ça pousse",
      "un second pot sans engrais, placé à l'ombre pour bien voir la différence",
      "un second pot avec engrais, mais avec des plants de tomate"
     ],
     "err": [
      "ne voit pas le besoin d'un témoin",
      "fait varier deux facteurs à la fois",
      "change le mauvais facteur"
     ]
    },
    {
     "id": "B18",
     "q": "On relève la température d'une mare : 12 °C à 8 h, 16 °C à 12 h, 19 °C à 16 h, 15 °C à 20 h. Entre 8 h et 16 h, la température a",
     "ok": "augmenté de 7 °C",
     "bad": [
      "augmenté de 19 °C",
      "augmenté de 3 °C",
      "diminué de 4 °C"
     ],
     "err": [
      "lit la valeur finale au lieu de l'écart",
      "calcule l'écart sur le mauvais intervalle, de 12 h à 16 h",
      "lit l'intervalle de 16 h à 20 h"
     ]
    },
    {
     "id": "B19",
     "q": "« Je pense que les cloportes préfèrent l'obscurité. » Cette phrase est",
     "ok": "une hypothèse : une idée à tester par une expérience",
     "bad": [
      "une observation",
      "une conclusion",
      "une preuve"
     ],
     "err": [
      "confond ce que l'on pense et ce que l'on voit",
      "confond hypothèse et conclusion",
      "confond une idée et une preuve"
     ]
    },
    {
     "id": "B20",
     "q": "On place 10 cloportes dans une boîte à moitié éclairée, à moitié sombre. Après 10 minutes : 9 du côté sombre, 1 du côté éclairé. On recommence trois fois, avec le même résultat. On peut conclure que",
     "ok": "dans cette expérience, les cloportes vont surtout du côté sombre",
     "bad": [
      "tous les animaux préfèrent l'obscurité",
      "les cloportes fuient la lumière parce qu'elle leur fait mal",
      "rien : un cloporte est allé à la lumière, l'expérience est ratée"
     ],
     "err": [
      "généralise au-delà de ce qui a été testé",
      "ajoute une explication que l'expérience ne montre pas",
      "croit qu'une exception annule un résultat"
     ]
    }
   ],
   "redaction": "Des élèves veulent savoir de quoi une graine de blé a besoin pour germer. Ils préparent trois boîtes de 20 graines posées sur du coton, toutes à la lumière, et comptent les graines germées au bout de 5 jours. Boîte 1 : coton mouillé, 20 °C, 18 graines germées. Boîte 2 : coton sec, 20 °C, 0 graine germée. Boîte 3 : coton mouillé, 4 °C (réfrigérateur éclairé), 2 graines germées.\n1. Quelle boîte sert de témoin ? Explique pourquoi.\n2. Compare les boîtes 1 et 2. Que peux-tu conclure ?\n3. Compare les boîtes 1 et 3. Que peux-tu conclure ?\n4. Un élève dit : « Cette expérience prouve que les graines ont besoin de lumière pour germer. » A-t-il raison ? Justifie.",
   "corrige": "La boîte 1 est le témoin : elle réunit les conditions habituelles (eau, 20 °C) et sert de point de comparaison. Entre les boîtes 1 et 2, seule l'eau change : 18 graines germées avec eau, 0 sans eau, donc l'eau est nécessaire à la germination. Entre les boîtes 1 et 3, seule la température change : 18 graines germées à 20 °C, 2 à 4 °C, donc le froid freine fortement la germination. L'élève a tort : les trois boîtes sont à la lumière, la lumière n'a donc pas été testée. Pour la tester, il faudrait deux boîtes identiques, l'une à la lumière, l'autre à l'obscurité."
  },
  "C": {
   "titre": "élève de 4e ou de 3e",
   "questions": [
    {
     "id": "C1",
     "q": "Les cellules de ta peau et celles de ton foie contiennent",
     "ok": "la même information génétique : les mêmes chromosomes",
     "bad": [
      "chacune seulement les gènes utiles à son organe",
      "une information génétique qui change au cours de la vie, selon ce que tu fais",
      "aucun chromosome : seuls les spermatozoïdes et les ovules en ont"
     ],
     "idee_fausse": true,
     "err": [
      "croit que chaque cellule ne possède que les gènes qu'elle utilise",
      "croit que les caractères acquis s'inscrivent dans les gènes",
      "réserve l'information génétique aux cellules reproductrices"
     ]
    },
    {
     "id": "C2",
     "q": "Une cellule de peau humaine contient",
     "ok": "46 chromosomes, soit 23 paires",
     "bad": [
      "23 chromosomes",
      "46 paires de chromosomes",
      "2 chromosomes : X et Y"
     ],
     "err": [
      "confond le nombre de paires et le nombre de chromosomes",
      "confond chromosomes et paires",
      "réduit les chromosomes aux chromosomes sexuels"
     ]
    },
    {
     "id": "C3",
     "q": "Un homme a développé de très gros muscles par l'entraînement. Ses futurs enfants",
     "ok": "ne naîtront pas plus musclés : l'entraînement ne modifie pas les gènes transmis",
     "bad": [
      "naîtront avec de gros muscles",
      "naîtront plus musclés si ce sont des garçons",
      "naîtront plus musclés si la mère s'entraîne aussi"
     ],
     "idee_fausse": true,
     "err": [
      "croit que les caractères acquis se transmettent",
      "même idée, liée au sexe de l'enfant",
      "même idée, dosée selon les deux parents"
     ]
    },
    {
     "id": "C4",
     "q": "Dans un hôpital, des bactéries sont devenues résistantes à un antibiotique. Quelle explication est juste ?",
     "ok": "quelques bactéries étaient déjà résistantes à cause d'une mutation due au hasard ; l'antibiotique a tué les autres et elles se sont multipliées",
     "bad": [
      "les bactéries se sont habituées peu à peu à l'antibiotique",
      "les bactéries ont muté pour se défendre contre l'antibiotique",
      "ce sont les malades qui sont devenus résistants à l'antibiotique"
     ],
     "idee_fausse": true,
     "err": [
      "croit à une accoutumance des bactéries",
      "croit que la mutation se produit dans un but",
      "confond la résistance de la bactérie et celle du malade"
     ]
    },
    {
     "id": "C5",
     "q": "L'être humain et le chimpanzé",
     "ok": "ont un ancêtre commun, qui n'était ni un humain ni un chimpanzé",
     "bad": [
      "sont liés ainsi : l'être humain descend du chimpanzé",
      "n'ont aucun lien de parenté",
      "sont liés ainsi : le chimpanzé est un humain qui n'a pas fini d'évoluer"
     ],
     "idee_fausse": true,
     "err": [
      "voit l'évolution comme une lignée directe entre espèces actuelles",
      "nie la parenté entre espèces",
      "voit l'évolution comme un progrès vers l'être humain"
     ]
    },
    {
     "id": "C6",
     "q": "Le sexe d'un bébé est déterminé",
     "ok": "à la fécondation, par le chromosome sexuel X ou Y apporté par le spermatozoïde",
     "bad": [
      "à la fécondation, par l'ovule, qui apporte X ou Y",
      "pendant la grossesse, selon l'alimentation de la mère",
      "pendant la grossesse, au moment où les organes se forment"
     ],
     "err": [
      "croit que l'ovule peut porter un chromosome Y",
      "attribue le sexe à l'environnement",
      "confond le moment où le sexe est fixé et celui où les organes apparaissent"
     ]
    },
    {
     "id": "C7",
     "q": "Dans un écosystème, les végétaux verts sont appelés « producteurs » parce qu'ils",
     "ok": "fabriquent leur matière organique à partir de matière minérale (eau, dioxyde de carbone, sels minéraux) et de lumière",
     "bad": [
      "ont pour rôle de fournir du dioxygène aux animaux",
      "fabriquent leur matière à partir de la terre",
      "sont les êtres vivants les plus nombreux"
     ],
     "idee_fausse": true,
     "err": [
      "attribue un but aux végétaux",
      "croit que la plante se nourrit de terre",
      "confond producteur et abondance"
     ]
    },
    {
     "id": "C8",
     "q": "Les plaques lithosphériques se déplacent",
     "ok": "de quelques centimètres par an, en permanence",
     "bad": [
      "de quelques kilomètres par an",
      "plus du tout : elles ont bougé au temps des dinosaures",
      "seulement pendant les séismes, et restent immobiles le reste du temps"
     ],
     "idee_fausse": true,
     "err": [
      "n'a pas l'ordre de grandeur",
      "croit que la tectonique est un phénomène du passé",
      "confond le mouvement lent continu et les ruptures brutales"
     ]
    },
    {
     "id": "C9",
     "q": "Sous les plaques, le manteau terrestre est",
     "ok": "solide, mais capable de se déformer très lentement",
     "bad": [
      "liquide : les plaques flottent sur du magma",
      "solide et totalement immobile",
      "liquide sous les océans, solide sous les continents"
     ],
     "idee_fausse": true,
     "err": [
      "croit que les plaques flottent sur un manteau liquide",
      "croit qu'un solide ne peut pas se déformer",
      "invente un état du manteau selon ce qu'il y a en surface"
     ]
    },
    {
     "id": "C10",
     "q": "L'effet de serre est",
     "ok": "un phénomène naturel, renforcé par les gaz que rejettent les activités humaines",
     "bad": [
      "entièrement dû à la pollution : il n'existait pas avant l'industrie",
      "causé par le trou de la couche d'ozone",
      "dû à la chaleur dégagée directement par les usines et les moteurs"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'effet de serre est seulement artificiel",
      "confond effet de serre et couche d'ozone",
      "confond effet de serre et chaleur des machines"
     ]
    },
    {
     "id": "C11",
     "q": "Les séismes et les volcans se trouvent surtout",
     "ok": "aux frontières des plaques",
     "bad": [
      "au centre des continents",
      "dans les pays chauds",
      "un peu partout, au hasard"
     ],
     "err": [
      "place l'activité loin des frontières de plaques",
      "lie volcans et climat chaud",
      "ne connaît pas la répartition en bandes étroites"
     ]
    },
    {
     "id": "C12",
     "q": "Une région désertique, sans habitant ni construction, subit souvent de forts séismes. Le risque sismique y est",
     "ok": "faible : l'aléa est fort, mais presque rien ni personne n'est exposé",
     "bad": [
      "fort : le risque ne dépend que de la force des séismes",
      "nul : sans habitants, il n'y a pas de séisme",
      "fort : un séisme qu'on ne peut pas prévoir est toujours un risque fort"
     ],
     "err": [
      "confond aléa et risque",
      "confond le phénomène et ses conséquences",
      "confond prévision et risque"
     ]
    },
    {
     "id": "C13",
     "q": "Les antibiotiques agissent",
     "ok": "contre les bactéries, pas contre les virus",
     "bad": [
      "contre tous les microbes",
      "surtout contre les virus, comme celui de la grippe",
      "en renforçant les défenses du corps"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un antibiotique agit sur tous les microbes",
      "croit que les antibiotiques soignent les maladies virales",
      "confond antibiotique et stimulation des défenses"
     ]
    },
    {
     "id": "C14",
     "q": "Un vaccin protège parce qu'il",
     "ok": "fait fabriquer à l'avance des défenses contre un microbe précis : anticorps et cellules mémoire",
     "bad": [
      "contient un antibiotique qui tue le microbe",
      "apporte des anticorps tout prêts",
      "renforce le corps contre toutes les maladies"
     ],
     "idee_fausse": true,
     "err": [
      "confond vaccin et antibiotique",
      "confond vaccin et sérum",
      "croit que le vaccin n'est pas spécifique d'un microbe"
     ]
    },
    {
     "id": "C15",
     "q": "Tu retires ta main d'une plaque chaude. Le message nerveux va",
     "ok": "de la peau vers un centre nerveux (moelle épinière), puis du centre nerveux vers les muscles, par des nerfs",
     "bad": [
      "directement de la peau aux muscles, sans passer par un centre nerveux",
      "du cerveau vers la peau, puis vers les muscles",
      "de la peau aux muscles par le sang"
     ],
     "err": [
      "oublie le centre nerveux",
      "inverse le départ du message",
      "confond message nerveux et transport par le sang"
     ]
    },
    {
     "id": "C16",
     "q": "La pilule contraceptive",
     "ok": "empêche une grossesse, mais ne protège pas des infections sexuellement transmissibles",
     "bad": [
      "protège aussi des infections sexuellement transmissibles",
      "rend stérile pour toujours",
      "n'a besoin d'être prise que le jour du rapport"
     ],
     "idee_fausse": true,
     "err": [
      "confond contraception et protection contre les infections",
      "confond contraception réversible et stérilité",
      "confond pilule quotidienne et contraception d'urgence"
     ]
    },
    {
     "id": "C17",
     "q": "Dans une ville, plus on vend de glaces, plus on compte de coups de soleil. Quelle explication est la plus solide ?",
     "ok": "les deux augmentent ensemble sans que l'un cause l'autre : le beau temps explique les deux",
     "bad": [
      "manger des glaces provoque des coups de soleil",
      "les coups de soleil donnent envie de manger des glaces",
      "c'est un pur hasard : il n'y a rien à expliquer"
     ],
     "idee_fausse": true,
     "err": [
      "confond corrélation et causalité",
      "même confusion, dans l'autre sens",
      "ne conçoit pas de cause commune"
     ]
    },
    {
     "id": "C18",
     "q": "Pour tester l'effet d'un antibiotique, on pose une pastille imbibée d'antibiotique sur une culture de bactéries. Le témoin est",
     "ok": "une pastille identique sans antibiotique, sur la même culture",
     "bad": [
      "une boîte sans bactéries, avec la pastille d'antibiotique",
      "une pastille d'un autre antibiotique, sur une autre bactérie",
      "inutile : si les bactéries meurent autour de la pastille, la preuve est faite"
     ],
     "err": [
      "retire le mauvais élément : ne peut plus rien observer",
      "fait varier deux facteurs à la fois",
      "ne voit pas le besoin d'un témoin"
     ]
    },
    {
     "id": "C19",
     "q": "Fréquence cardiaque d'un élève : 70 battements par minute au repos, 130 après 2 minutes de course, 80 après 5 minutes de récupération. Entre le repos et la fin de la course, elle a été multipliée par environ",
     "ok": "1,9",
     "bad": [
      "60",
      "0,54",
      "1,6"
     ],
     "err": [
      "calcule une différence au lieu d'un rapport",
      "inverse le rapport",
      "prend la valeur de récupération au lieu de la valeur de repos"
     ]
    },
    {
     "id": "C20",
     "q": "On veut savoir si un médicament fait baisser la fièvre. Quel essai est le plus fiable ?",
     "ok": "200 malades répartis par tirage au sort en deux groupes : l'un reçoit le médicament, l'autre un comprimé sans produit actif, puis on compare",
     "bad": [
      "on donne le médicament à 200 malades et on regarde si la fièvre baisse",
      "on demande à 3 personnes qui l'ont pris si elles vont mieux",
      "on donne le médicament aux plus malades et rien aux moins malades, puis on compare"
     ],
     "err": [
      "oublie le groupe témoin : la fièvre peut baisser seule",
      "se fie à un témoignage sur un très petit nombre",
      "compare deux groupes qui ne sont pas comparables au départ"
     ]
    }
   ],
   "redaction": "On mesure ce que contiennent 100 mL de sang à l'entrée et à la sortie d'un muscle de la cuisse, au repos puis pendant un effort (valeurs simplifiées). Au repos : dioxygène, 20 mL à l'entrée et 15 mL à la sortie ; glucose, 90 mg à l'entrée et 87 mg à la sortie. Pendant l'effort : dioxygène, 20 mL à l'entrée et 5 mL à la sortie ; glucose, 90 mg à l'entrée et 81 mg à la sortie.\n1. Calcule la quantité de dioxygène et la quantité de glucose prélevées par le muscle dans 100 mL de sang, au repos puis pendant l'effort.\n2. Compare le repos et l'effort, avec des chiffres.\n3. Rédige une conclusion en une ou deux phrases.\n4. Ces mesures suffisent-elles à affirmer que le muscle utilise le glucose et le dioxygène pour produire son énergie ? Justifie.",
   "corrige": "Au repos, le muscle prélève 20 − 15 = 5 mL de dioxygène et 90 − 87 = 3 mg de glucose pour 100 mL de sang. Pendant l'effort, il prélève 20 − 5 = 15 mL de dioxygène et 90 − 81 = 9 mg de glucose. Les deux prélèvements sont multipliés par 3. Conclusion : un muscle en activité prélève plus de dioxygène et plus de glucose dans le sang qu'un muscle au repos. Ces mesures montrent un prélèvement, pas un usage : elles ne disent pas ce que le muscle fait du glucose et du dioxygène. Pour aller plus loin, il faudrait d'autres mesures, par exemple le dioxyde de carbone rejeté ou la chaleur produite."
  },
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "Une cellule de muscle et un neurone d'une même personne sont différents parce que",
     "ok": "ils possèdent les mêmes gènes mais n'expriment pas les mêmes",
     "bad": [
      "ils ne possèdent pas les mêmes gènes",
      "le neurone contient plus d'ADN",
      "leurs gènes ont muté différemment pendant le développement"
     ],
     "idee_fausse": true,
     "err": [
      "croit que chaque cellule ne possède que ses gènes",
      "lie la spécialisation à la quantité d'ADN",
      "explique la différenciation par des mutations"
     ]
    },
    {
     "id": "S2",
     "q": "L'ADN est une molécule",
     "ok": "formée de deux brins de nucléotides, dont l'ordre (A, T, C, G) porte l'information",
     "bad": [
      "formée d'une chaîne d'acides aminés",
      "dont l'information tient à la forme en hélice, pas à l'ordre des nucléotides",
      "de nature chimique différente d'une espèce à l'autre"
     ],
     "err": [
      "confond ADN et protéine",
      "n'a pas l'idée d'information portée par une séquence",
      "ignore que l'ADN est universel"
     ]
    },
    {
     "id": "S3",
     "q": "Une mutation est une modification de la séquence de l'ADN",
     "ok": "qui se produit au hasard et peut être neutre, défavorable ou favorable",
     "bad": [
      "qui est toujours néfaste",
      "que l'organisme provoque pour s'adapter à son milieu",
      "qui est toujours transmise aux descendants"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une mutation est toujours néfaste",
      "croit que la mutation répond à un besoin",
      "oublie que seule une mutation des cellules reproductrices se transmet"
     ]
    },
    {
     "id": "S4",
     "q": "Dans une petite population isolée, la fréquence d'un allèle sans effet sur la survie change beaucoup en quelques générations. La cause est",
     "ok": "le hasard de la reproduction : la dérive génétique",
     "bad": [
      "la sélection naturelle, seule cause possible d'un tel changement",
      "le besoin qu'a la population de s'adapter",
      "l'usage que les individus font de ce caractère"
     ],
     "idee_fausse": true,
     "err": [
      "croit que seule la sélection fait évoluer une population",
      "prête un but à l'évolution",
      "raisonne par l'usage et le non-usage"
     ]
    },
    {
     "id": "S5",
     "q": "La sélection naturelle agit",
     "ok": "sur des différences héréditaires qui existent déjà entre les individus",
     "bad": [
      "en créant les variations dont l'espèce a besoin",
      "pour le bien de l'espèce, afin de la rendre parfaite",
      "seulement par la mort des plus faibles : le nombre de descendants ne compte pas"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le milieu crée les variations utiles",
      "croit que l'évolution a un but",
      "réduit la sélection à la survie, oublie la reproduction"
     ]
    },
    {
     "id": "S6",
     "q": "Une cellule chlorophyllienne de feuille, à la lumière",
     "ok": "réalise à la fois la photosynthèse et la respiration",
     "bad": [
      "réalise la photosynthèse seulement : la respiration s'arrête à la lumière",
      "ne respire jamais : la photosynthèse remplace la respiration",
      "respire grâce à ses chloroplastes"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la plante ne respire que la nuit",
      "croit que la photosynthèse remplace la respiration",
      "confond chloroplaste et mitochondrie"
     ]
    },
    {
     "id": "S7",
     "q": "La biodiversité se décrit à trois échelles",
     "ok": "la diversité des écosystèmes, celle des espèces et la diversité génétique au sein de chaque espèce",
     "bad": [
      "le nombre d'espèces, et rien d'autre",
      "les animaux, les végétaux et les minéraux",
      "le nombre d'individus, leur taille et leur âge"
     ],
     "err": [
      "réduit la biodiversité au nombre d'espèces",
      "confond biodiversité et anciens règnes de la nature",
      "confond diversité et abondance"
     ]
    },
    {
     "id": "S8",
     "q": "Les grains de quartz d'une plage de sable proviennent surtout",
     "ok": "de l'érosion de roches du continent, transportés par les rivières puis par la mer",
     "bad": [
      "de nulle part : le sable a toujours été là",
      "de volcans sous-marins",
      "de la cristallisation du sel de mer"
     ],
     "idee_fausse": true,
     "err": [
      "n'a pas l'idée d'un cycle des roches",
      "attribue tout matériau minéral au volcanisme",
      "confond grain de sable et cristal de sel"
     ]
    },
    {
     "id": "S9",
     "q": "Une rivière ralentit en arrivant en plaine. Les particules qui se déposent en premier sont",
     "ok": "les plus grosses : galets et graviers",
     "bad": [
      "les plus fines : argiles",
      "toutes, en même temps",
      "aucune : les particules ne se déposent qu'en mer"
     ],
     "err": [
      "inverse le tri des particules",
      "ignore le tri selon la taille",
      "croit que la sédimentation n'existe qu'en mer"
     ]
    },
    {
     "id": "S10",
     "q": "Un sol est",
     "ok": "un mélange de matière minérale venue de la roche et de matière organique, habité par de nombreux êtres vivants, formé en plusieurs siècles au moins",
     "bad": [
      "de la roche broyée, sans vie",
      "une ressource qui se reforme en quelques années",
      "un simple support : les plantes n'y prélèvent rien"
     ],
     "idee_fausse": true,
     "err": [
      "voit le sol comme un minéral inerte",
      "croit le sol renouvelable à l'échelle d'une vie",
      "voit le sol comme un simple support"
     ]
    },
    {
     "id": "S11",
     "q": "Dans un champ de blé, il faut apporter des engrais chaque année parce que",
     "ok": "la récolte emporte hors du champ les éléments minéraux que les plantes ont prélevés",
     "bad": [
      "l'engrais est la nourriture des plantes, à la place de la photosynthèse",
      "un sol ne contient jamais d'éléments minéraux",
      "l'engrais tue les ravageurs"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la plante se nourrit d'engrais comme d'un aliment",
      "ignore la réserve minérale du sol",
      "confond engrais et pesticide"
     ]
    },
    {
     "id": "S12",
     "q": "Pour que l'érosion efface presque entièrement une chaîne de montagnes, il faut",
     "ok": "des dizaines de millions d'années",
     "bad": [
      "quelques milliers d'années",
      "un temps infini : une montagne ne disparaît pas",
      "un temps très court : seules les grandes catastrophes modifient le relief"
     ],
     "idee_fausse": true,
     "err": [
      "sous-estime les durées géologiques",
      "croit le relief immuable",
      "explique le relief par les seules catastrophes"
     ]
    },
    {
     "id": "S13",
     "q": "Chez l'embryon humain, le développement de testicules dépend",
     "ok": "de la présence du chromosome Y, qui porte le gène SRY",
     "bad": [
      "du nombre de chromosomes X",
      "des hormones de la mère",
      "de la testostérone, produite avant les testicules"
     ],
     "err": [
      "raisonne sur le chromosome X au lieu du Y",
      "attribue le sexe de l'embryon à la mère",
      "inverse la cause et l'effet : les testicules produisent la testostérone"
     ]
    },
    {
     "id": "S14",
     "q": "La pilule contraceptive combinée agit surtout",
     "ok": "en bloquant l'ovulation, par son action sur l'hypothalamus et l'hypophyse",
     "bad": [
      "en détruisant les spermatozoïdes",
      "en formant une barrière entre les spermatozoïdes et l'ovule",
      "en interrompant une grossesse déjà commencée"
     ],
     "idee_fausse": true,
     "err": [
      "confond pilule et spermicide",
      "confond pilule et préservatif",
      "confond contraception et interruption de grossesse"
     ]
    },
    {
     "id": "S15",
     "q": "Les bactéries de ton intestin, le microbiote, sont",
     "ok": "pour la plupart utiles : elles aident à digérer et protègent contre des microbes pathogènes",
     "bad": [
      "le signe d'une infection à soigner",
      "absentes chez une personne en bonne santé",
      "toutes venues d'aliments avariés"
     ],
     "idee_fausse": true,
     "err": [
      "croit que toute bactérie est un danger",
      "croit qu'un corps sain est sans microbes",
      "lie bactéries et saleté"
     ]
    },
    {
     "id": "S16",
     "q": "Le paludisme est transmis par un moustique. Le moustique est",
     "ok": "le vecteur : il transporte l'agent pathogène, un parasite, d'une personne à une autre",
     "bad": [
      "l'agent pathogène lui-même",
      "sans rôle réel : le paludisme s'attrape par le mauvais air ou l'eau sale",
      "dangereux par son venin, sans aucun microbe"
     ],
     "err": [
      "confond vecteur et agent pathogène",
      "reprend l'ancienne idée du mauvais air",
      "confond piqûre venimeuse et transmission d'un parasite"
     ]
    },
    {
     "id": "S17",
     "q": "Une étude montre que les élèves qui prennent un petit déjeuner ont de meilleures notes. Quelle conclusion est justifiée ?",
     "ok": "les deux sont associés, mais d'autres facteurs (sommeil, niveau de vie) peuvent expliquer les deux : il faudrait une expérience contrôlée",
     "bad": [
      "le petit déjeuner est la cause des bonnes notes",
      "les bonnes notes donnent faim le matin",
      "l'étude est fausse : je connais un excellent élève qui ne déjeune jamais"
     ],
     "idee_fausse": true,
     "err": [
      "confond corrélation et causalité",
      "même confusion, dans l'autre sens",
      "oppose un cas isolé à une statistique"
     ]
    },
    {
     "id": "S18",
     "q": "On veut montrer que l'amylase, une enzyme, digère l'amidon. Tube 1 : amidon et amylase, à 37 °C. Quel tube témoin faut-il ?",
     "ok": "amidon et eau, à 37 °C",
     "bad": [
      "amylase et eau, à 37 °C",
      "amidon et amylase, à 0 °C",
      "amidon et eau, à 0 °C"
     ],
     "err": [
      "retire le substrat : ne teste pas le rôle de l'enzyme",
      "teste un autre facteur, la température",
      "fait varier deux facteurs à la fois"
     ]
    },
    {
     "id": "S19",
     "q": "Une population compte 400 papillons, dont 100 foncés. Dix ans plus tard : 500 papillons, dont 250 foncés. La fréquence des papillons foncés est passée",
     "ok": "de 25 % à 50 %",
     "bad": [
      "de 100 % à 250 %",
      "de 25 % à 62,5 %",
      "de 4 à 2"
     ],
     "err": [
      "confond effectif et pourcentage",
      "rapporte le nouvel effectif à l'ancien total",
      "inverse le quotient"
     ]
    },
    {
     "id": "S20",
     "q": "Deux lots de 5 plants. Taille moyenne : 20,1 cm pour le lot A, 20,4 cm pour le lot B. Dans chaque lot, les tailles vont de 17 à 23 cm. On peut dire que",
     "ok": "l'écart entre les lots est trop faible, comparé aux écarts entre plants, pour conclure à une différence",
     "bad": [
      "le lot B pousse mieux, puisque 20,4 est plus grand que 20,1",
      "le traitement du lot B fait gagner exactement 0,3 cm",
      "les mesures sont fausses : les plants d'un même lot devraient avoir la même taille"
     ],
     "err": [
      "ignore la variabilité entre individus",
      "prend une moyenne pour une mesure exacte",
      "croit que des êtres vivants identiques donnent des mesures identiques"
     ]
    }
   ],
   "redaction": "L'eau iodée devient bleu-noir en présence d'amidon et reste jaune sans amidon. On prépare cinq tubes, puis on ajoute de l'eau iodée au bout de 15 minutes. Tube 1 : amidon et amylase, à 37 °C, résultat jaune. Tube 2 : amidon et eau, à 37 °C, résultat bleu-noir. Tube 3 : amidon et amylase, à 0 °C, résultat bleu-noir. Tube 4 : amidon et amylase préalablement bouillie, à 37 °C, résultat bleu-noir. Tube 5 : un tube préparé comme le tube 3, laissé 15 minutes à 0 °C puis replacé 15 minutes à 37 °C, résultat jaune.\n1. À quoi sert le tube 2 ? Que montre la comparaison des tubes 1 et 2 ?\n2. À l'aide des tubes 1, 3 et 5, explique l'effet du froid sur l'amylase.\n3. À l'aide des tubes 1 et 4, explique l'effet de l'ébullition sur l'amylase.\n4. Cette expérience permet-elle de dire que l'amylase digère aussi les protéines ? Justifie.",
   "corrige": "Le tube 2 est le témoin sans enzyme. Sans amylase, l'amidon reste présent (bleu-noir) ; avec amylase, il a disparu (jaune) : l'amylase est responsable de la disparition de l'amidon. À 0 °C, l'amidon reste présent : le froid empêche l'amylase d'agir. Le tube 5 montre que cet effet est réversible : remise à 37 °C, l'enzyme agit de nouveau. L'amylase bouillie n'agit plus, même à 37 °C : la chaleur l'a modifiée de façon irréversible, elle est dénaturée. L'expérience ne dit rien des protéines : seul l'amidon a été testé. Pour conclure, il faudrait un tube contenant des protéines et de l'amylase, avec un test adapté."
  },
  "P": {
   "titre": "élève de première spécialité",
   "questions": [
    {
     "id": "P1",
     "q": "Après une mitose, chaque cellule fille possède, par rapport à la cellule mère",
     "ok": "la même information génétique et le même nombre de chromosomes",
     "bad": [
      "la moitié des chromosomes",
      "la moitié des gènes, l'autre moitié étant dans l'autre cellule fille",
      "deux fois plus de chromosomes"
     ],
     "err": [
      "confond mitose et méiose",
      "croit que l'information génétique se partage entre les cellules filles",
      "confond la réplication qui précède la mitose et son résultat"
     ]
    },
    {
     "id": "P2",
     "q": "Juste avant la mitose, un chromosome est formé",
     "ok": "de deux chromatides identiques, issues de la réplication de l'ADN",
     "bad": [
      "de deux chromatides, l'une venue du père, l'autre de la mère",
      "d'une seule chromatide",
      "de deux chromosomes homologues soudés"
     ],
     "idee_fausse": true,
     "err": [
      "confond chromatides sœurs et chromosomes homologues",
      "oublie la réplication",
      "confond chromosome à deux chromatides et paire d'homologues"
     ]
    },
    {
     "id": "P3",
     "q": "La réplication de l'ADN est dite semi-conservative parce que",
     "ok": "chaque molécule fille contient un brin ancien et un brin nouveau",
     "bad": [
      "une molécule fille est entièrement ancienne, l'autre entièrement nouvelle",
      "seule la moitié de l'ADN est copiée",
      "chaque brin est un mélange de morceaux anciens et de morceaux nouveaux"
     ],
     "err": [
      "retient le modèle conservatif",
      "confond « semi » et « moitié de l'ADN »",
      "retient le modèle dispersif"
     ]
    },
    {
     "id": "P4",
     "q": "La taille d'un adulte dépend",
     "ok": "de nombreux gènes et de l'environnement, dont l'alimentation",
     "bad": [
      "d'un seul gène, le gène de la taille",
      "de l'environnement seulement",
      "des gènes du père pour un garçon, de ceux de la mère pour une fille"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un gène égale un caractère",
      "nie la part génétique",
      "invente une hérédité liée au sexe du parent"
     ]
    },
    {
     "id": "P5",
     "q": "Lors de la transcription",
     "ok": "un brin d'ADN sert de modèle à la synthèse d'un ARN",
     "bad": [
      "un ARN messager est lu pour assembler une protéine",
      "l'ADN est copié en deux molécules d'ADN",
      "une protéine sert de modèle à la synthèse d'un ARN"
     ],
     "err": [
      "confond transcription et traduction",
      "confond transcription et réplication",
      "inverse le sens de l'information génétique"
     ]
    },
    {
     "id": "P6",
     "q": "Une mutation remplace un nucléotide par un autre dans la partie codante d'un gène. La protéine",
     "ok": "peut rester identique, car plusieurs codons désignent le même acide aminé",
     "bad": [
      "est toujours modifiée",
      "n'est jamais modifiée",
      "n'est plus fabriquée, dans tous les cas"
     ],
     "idee_fausse": true,
     "err": [
      "ignore la redondance du code génétique",
      "croit qu'une mutation est toujours sans effet",
      "croit qu'une mutation bloque toujours la synthèse"
     ]
    },
    {
     "id": "P7",
     "q": "Une enzyme",
     "ok": "accélère une réaction précise et se retrouve intacte à la fin",
     "bad": [
      "est consommée par la réaction qu'elle accélère",
      "accélère n'importe quelle réaction de la cellule",
      "agit de la même façon quels que soient la température et le pH"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un catalyseur est consommé",
      "ignore la spécificité de l'enzyme",
      "ignore l'effet des conditions du milieu"
     ]
    },
    {
     "id": "P8",
     "q": "Sous la lithosphère se trouve l'asthénosphère, qui est",
     "ok": "solide, mais ductile : elle se déforme lentement",
     "bad": [
      "liquide : c'est du magma",
      "rigide et cassante, comme la lithosphère",
      "la partie inférieure de la croûte"
     ],
     "idee_fausse": true,
     "err": [
      "croit que les plaques flottent sur un manteau liquide",
      "confond lithosphère et asthénosphère",
      "confond le découpage croûte et manteau avec le découpage lithosphère et asthénosphère"
     ]
    },
    {
     "id": "P9",
     "q": "Comparée à la croûte océanique, la croûte continentale est",
     "ok": "plus épaisse et moins dense",
     "bad": [
      "plus épaisse et plus dense",
      "plus mince et moins dense",
      "identique : seule la présence d'eau au-dessus les distingue"
     ],
     "err": [
      "croit que plus épais veut dire plus dense",
      "inverse les épaisseurs",
      "ne distingue pas les deux croûtes par leurs roches"
     ]
    },
    {
     "id": "P10",
     "q": "On connaît la structure profonde de la Terre surtout grâce",
     "ok": "à l'étude de la propagation des ondes sismiques",
     "bad": [
      "à des forages qui atteignent le noyau",
      "aux laves des volcans, qui viennent du noyau",
      "aux photographies prises par satellite"
     ],
     "idee_fausse": true,
     "err": [
      "surestime la profondeur des forages",
      "croit que les laves viennent du noyau",
      "confond observation de la surface et étude de la profondeur"
     ]
    },
    {
     "id": "P11",
     "q": "À l'axe d'une dorsale océanique",
     "ok": "de la lithosphère océanique se forme et deux plaques s'écartent",
     "bad": [
      "une plaque plonge sous une autre",
      "deux continents entrent en collision",
      "deux plaques coulissent sans création ni disparition de lithosphère"
     ],
     "err": [
      "confond dorsale et zone de subduction",
      "confond dorsale et zone de collision",
      "confond dorsale et faille transformante"
     ]
    },
    {
     "id": "P12",
     "q": "Dans une forêt, l'énergie passe des producteurs aux consommateurs. À chaque niveau de la chaîne alimentaire",
     "ok": "seule une petite partie de l'énergie passe au niveau suivant : le reste est perdu, surtout sous forme de chaleur",
     "bad": [
      "toute l'énergie est transmise",
      "l'énergie augmente, car les prédateurs sont plus puissants",
      "l'énergie est recyclée par les décomposeurs, comme la matière"
     ],
     "idee_fausse": true,
     "err": [
      "ignore les pertes d'énergie",
      "confond énergie et force du prédateur",
      "croit que l'énergie se recycle comme la matière"
     ]
    },
    {
     "id": "P13",
     "q": "Un cancer est le plus souvent dû",
     "ok": "à l'accumulation de plusieurs mutations dans des cellules du corps, favorisée par l'âge et par des agents mutagènes",
     "bad": [
      "à un microbe contagieux",
      "à une mutation héritée d'un parent, dans tous les cas",
      "à une seule mutation, qui suffit toujours"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le cancer est contagieux",
      "croit que tout cancer est héréditaire",
      "ignore le caractère progressif, en plusieurs étapes"
     ]
    },
    {
     "id": "P14",
     "q": "Traiter un patient par un antibiotique favorise la résistance des bactéries parce que",
     "ok": "l'antibiotique élimine les bactéries sensibles et laisse se multiplier les résistantes déjà présentes",
     "bad": [
      "les bactéries s'habituent peu à peu à l'antibiotique",
      "l'antibiotique provoque les mutations qui protègent les bactéries",
      "le corps du patient devient résistant à l'antibiotique"
     ],
     "idee_fausse": true,
     "err": [
      "croit à une accoutumance des bactéries",
      "croit que la mutation est provoquée par le besoin",
      "confond la résistance de la bactérie et celle du patient"
     ]
    },
    {
     "id": "P15",
     "q": "La réaction inflammatoire (rougeur, chaleur, gonflement, douleur) est",
     "ok": "une réponse immunitaire innée, rapide et non spécifique",
     "bad": [
      "le signe que le microbe est en train de gagner",
      "une réponse spécifique, qui exige un premier contact avec le microbe",
      "due à l'action des anticorps"
     ],
     "idee_fausse": true,
     "err": [
      "voit le symptôme comme un dégât du microbe, pas comme une défense",
      "confond immunité innée et immunité adaptative",
      "attribue toute défense aux anticorps"
     ]
    },
    {
     "id": "P16",
     "q": "Un anticorps",
     "ok": "se lie de façon spécifique à un antigène donné",
     "bad": [
      "est une cellule qui avale les microbes",
      "reconnaît n'importe quel antigène",
      "est un antibiotique fabriqué par le corps"
     ],
     "err": [
      "confond anticorps et phagocyte",
      "ignore la spécificité",
      "confond anticorps et antibiotique"
     ]
    },
    {
     "id": "P17",
     "q": "Les fumeurs ont beaucoup plus de cancers du poumon que les non-fumeurs. Qu'est-ce qui renforce le plus l'idée d'un lien de cause à effet ?",
     "ok": "le risque augmente avec la dose, et l'effet mutagène de la fumée est établi par des expériences",
     "bad": [
      "rien de plus n'est utile : la corrélation suffit",
      "rien ne peut l'établir : certains fumeurs vivent jusqu'à 95 ans",
      "le très grand nombre de personnes étudiées, qui suffit à prouver la cause"
     ],
     "idee_fausse": true,
     "err": [
      "confond corrélation et causalité",
      "oppose un cas isolé à une statistique",
      "croit que la taille de l'échantillon prouve la cause"
     ]
    },
    {
     "id": "P18",
     "q": "On expose une culture de levures aux UV pendant 30 secondes : 12 colonies mutantes sur 400. Pour conclure que les UV sont mutagènes, il faut",
     "ok": "une culture identique non exposée, pour connaître la fréquence des mutants sans UV",
     "bad": [
      "une culture exposée 60 secondes",
      "une culture d'une autre espèce, exposée 30 secondes",
      "rien d'autre : la présence de mutants prouve l'effet des UV"
     ],
     "err": [
      "change la dose sans témoin",
      "change deux facteurs à la fois",
      "ignore les mutations spontanées"
     ]
    },
    {
     "id": "P19",
     "q": "Culture témoin : 2 colonies mutantes sur 1 000. Culture exposée aux UV : 30 colonies mutantes sur 600. La fréquence des mutants a été multipliée par",
     "ok": "25",
     "bad": [
      "15",
      "28",
      "0,04"
     ],
     "err": [
      "compare les nombres bruts sans les rapporter aux totaux",
      "soustrait au lieu de diviser",
      "inverse le rapport"
     ]
    },
    {
     "id": "P20",
     "q": "On mesure la vitesse d'une réaction enzymatique (unités arbitraires) : 2 à 10 °C, 5 à 20 °C, 9 à 30 °C, 12 à 40 °C, 3 à 50 °C, 0 à 60 °C. On peut affirmer que",
     "ok": "la vitesse la plus forte mesurée est à 40 °C : l'optimum réel se situe quelque part entre 30 et 50 °C",
     "bad": [
      "l'optimum est exactement 40 °C",
      "la vitesse augmente toujours avec la température",
      "l'enzyme est entièrement détruite dès 50 °C"
     ],
     "err": [
      "donne à une mesure une précision qu'elle n'a pas",
      "ne lit pas la baisse après 40 °C",
      "prend une baisse pour une disparition"
     ]
    }
   ],
   "redaction": "Des bactéries sont cultivées longtemps sur un milieu contenant de l'azote lourd : tout leur ADN est « lourd ». On les transfère sur un milieu contenant de l'azote léger, puis on mesure la densité de l'ADN à chaque génération. Génération 0 : 100 % d'ADN lourd. Génération 1 : 100 % d'ADN de densité intermédiaire. Génération 2 : 50 % d'ADN de densité intermédiaire, 50 % d'ADN léger. Trois modèles de réplication étaient proposés. Conservatif : la molécule d'origine reste intacte, une molécule entièrement nouvelle est fabriquée. Semi-conservatif : chaque molécule fille garde un brin ancien et reçoit un brin nouveau. Dispersif : chaque brin mêle des morceaux anciens et nouveaux.\n1. Quel modèle le résultat de la génération 1 élimine-t-il ? Justifie.\n2. Quel modèle le résultat de la génération 2 élimine-t-il ? Justifie.\n3. Prévois le résultat de la génération 3 avec le modèle restant.",
   "corrige": "Avec le modèle conservatif, la génération 1 donnerait 50 % d'ADN lourd et 50 % d'ADN léger, et aucun ADN intermédiaire. On observe 100 % d'ADN intermédiaire : le modèle conservatif est éliminé. Avec le modèle dispersif, toutes les molécules de la génération 2 auraient la même densité, entre intermédiaire et léger. On observe deux catégories distinctes : le modèle dispersif est éliminé. Le modèle semi-conservatif explique les deux résultats : en génération 2, les molécules qui gardent un brin lourd sont intermédiaires, les autres sont légères. En génération 3, on attend 25 % d'ADN intermédiaire et 75 % d'ADN léger."
  },
  "T": {
   "titre": "élève de terminale spécialité",
   "questions": [
    {
     "id": "T1",
     "q": "Une cellule humaine à 2n = 46 chromosomes subit une méiose complète. On obtient",
     "ok": "4 cellules à n = 23 chromosomes, à une chromatide chacun",
     "bad": [
      "2 cellules à 46 chromosomes",
      "4 cellules à 46 chromosomes",
      "2 cellules à 23 chromosomes, à deux chromatides chacun"
     ],
     "err": [
      "confond méiose et mitose",
      "compte quatre cellules mais oublie la réduction du nombre de chromosomes",
      "s'arrête à la fin de la première division"
     ]
    },
    {
     "id": "T2",
     "q": "Le brassage interchromosomique correspond à",
     "ok": "la répartition au hasard des chromosomes homologues de chaque paire, en anaphase 1",
     "bad": [
      "l'échange de fragments entre chromatides de chromosomes homologues, en prophase 1",
      "la rencontre au hasard des gamètes, à la fécondation",
      "la séparation des chromatides, en anaphase 2"
     ],
     "err": [
      "confond brassage interchromosomique et brassage intrachromosomique",
      "confond brassage de la méiose et brassage de la fécondation",
      "confond séparation des chromatides et brassage"
     ]
    },
    {
     "id": "T3",
     "q": "Un individu hétérozygote pour deux gènes est croisé avec un double récessif. Descendance : 410 [AB], 390 [ab], 105 [Ab], 95 [aB]. Les deux gènes sont",
     "ok": "liés : portés par le même chromosome, les phénotypes rares venant de crossing-over",
     "bad": [
      "indépendants : portés par deux paires de chromosomes différentes",
      "liés, sans aucun crossing-over",
      "mal étudiés : un tel résultat est impossible, on attend toujours 25 % par phénotype"
     ],
     "err": [
      "applique le résultat des gènes indépendants sans lire les effectifs",
      "oublie que les phénotypes rares existent",
      "croit que toute descendance suit les proportions des gènes indépendants"
     ]
    },
    {
     "id": "T4",
     "q": "Deux parents sains ont une fille atteinte d'une maladie héréditaire, due à un seul gène porté par un autosome. L'allèle responsable est",
     "ok": "récessif, et les deux parents sont hétérozygotes",
     "bad": [
      "dominant, et les deux parents le portent",
      "récessif, et un seul des deux parents le porte",
      "sans importance : une maladie génétique saute toujours une génération"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une maladie génétique vient toujours d'un allèle dominant",
      "oublie qu'il faut deux allèles récessifs, un par parent",
      "applique la règle populaire de la génération sautée"
     ]
    },
    {
     "id": "T5",
     "q": "Dans une population à l'équilibre de Hardy-Weinberg, un allèle récessif, noté a, a une fréquence de 0,2. La fréquence des individus aa vaut",
     "ok": "0,04",
     "bad": [
      "0,2",
      "0,4",
      "0,32"
     ],
     "err": [
      "confond fréquence d'un allèle et fréquence d'un génotype",
      "double au lieu d'élever au carré",
      "calcule la fréquence des hétérozygotes"
     ]
    },
    {
     "id": "T6",
     "q": "Dans une population, un allèle dominant",
     "ok": "n'est pas forcément le plus fréquent",
     "bad": [
      "devient automatiquement plus fréquent au fil des générations",
      "donne toujours un avantage à celui qui le porte",
      "est par définition l'allèle le plus répandu"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la dominance fait progresser un allèle",
      "confond dominance et avantage sélectif",
      "confond dominance et fréquence"
     ]
    },
    {
     "id": "T7",
     "q": "Deux populations d'une même espèce, séparées par une barrière géographique, forment deux espèces quand",
     "ok": "elles ont accumulé assez de différences génétiques pour ne plus pouvoir se reproduire entre elles",
     "bad": [
      "leurs individus ne se ressemblent plus",
      "l'une d'elles a besoin de s'adapter à un nouveau milieu",
      "la barrière géographique apparaît : la séparation suffit"
     ],
     "idee_fausse": true,
     "err": [
      "définit l'espèce par la ressemblance",
      "prête un but à l'évolution",
      "confond isolement géographique et isolement reproducteur"
     ]
    },
    {
     "id": "T8",
     "q": "Un filon de basalte recoupe trois couches de sédiments. Le filon est",
     "ok": "plus récent que les couches qu'il recoupe",
     "bad": [
      "plus ancien que ces couches",
      "du même âge que ces couches",
      "d'âge inconnu : seule une datation absolue permet de classer"
     ],
     "err": [
      "inverse le principe de recoupement",
      "ignore le principe de recoupement",
      "croit que seule la datation absolue ordonne les événements"
     ]
    },
    {
     "id": "T9",
     "q": "Un isotope radioactif a une demi-vie de 1 milliard d'années. Au bout de 2 milliards d'années, il en reste",
     "ok": "un quart de la quantité initiale",
     "bad": [
      "rien",
      "la moitié de la quantité initiale",
      "un huitième de la quantité initiale"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la désintégration est linéaire",
      "s'arrête à une demi-vie",
      "compte trois demi-vies"
     ]
    },
    {
     "id": "T10",
     "q": "Le réchauffement climatique actuel est principalement dû",
     "ok": "à l'augmentation des gaz à effet de serre rejetés par les activités humaines",
     "bad": [
      "au trou de la couche d'ozone",
      "à une hausse de l'activité du Soleil",
      "à la chaleur dégagée directement par les moteurs et les usines"
     ],
     "idee_fausse": true,
     "err": [
      "confond effet de serre et couche d'ozone",
      "attribue le réchauffement à une cause naturelle que les mesures écartent",
      "confond effet de serre et chaleur des machines"
     ]
    },
    {
     "id": "T11",
     "q": "Dans une carotte de glace polaire, la composition isotopique de la glace (delta 18 O) renseigne sur",
     "ok": "la température de l'air au moment où la neige est tombée",
     "bad": [
      "l'âge de la glace",
      "la teneur de l'air en dioxyde de carbone",
      "le niveau de la mer, par lecture directe"
     ],
     "err": [
      "confond thermomètre isotopique et datation",
      "confond la glace et les bulles d'air qu'elle contient",
      "confond avec le signal des sédiments marins"
     ]
    },
    {
     "id": "T12",
     "q": "La fonte complète de la banquise arctique, faite de glace de mer flottante, ferait monter le niveau des mers",
     "ok": "presque pas : la glace flottante occupe déjà sa place dans l'eau",
     "bad": [
      "de plusieurs mètres",
      "autant que la fonte de la calotte du Groenland",
      "pas du tout : le niveau baisserait nettement"
     ],
     "idee_fausse": true,
     "err": [
      "confond glace de mer et glace continentale",
      "même confusion, avec un ordre de grandeur précis",
      "raisonne sur le volume de la glace, plus grand que celui de l'eau, sans la poussée d'Archimède"
     ]
    },
    {
     "id": "T13",
     "q": "Lors du réflexe myotatique, l'étirement d'un muscle provoque",
     "ok": "la contraction de ce même muscle, par un circuit qui passe par la moelle épinière",
     "bad": [
      "la contraction de ce muscle, sur ordre volontaire du cerveau",
      "la contraction du muscle antagoniste",
      "la contraction du muscle, sans intervention d'un centre nerveux"
     ],
     "err": [
      "confond réflexe et mouvement volontaire",
      "confond le muscle étiré et son antagoniste",
      "oublie le centre nerveux"
     ]
    },
    {
     "id": "T14",
     "q": "Le long d'un axone, l'intensité d'une stimulation est codée par",
     "ok": "la fréquence des potentiels d'action, dont l'amplitude reste constante",
     "bad": [
      "l'amplitude des potentiels d'action",
      "la vitesse de propagation des potentiels d'action",
      "la quantité de neurotransmetteur présente le long de l'axone"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le potentiel d'action est d'amplitude variable",
      "confond codage et vitesse de conduction",
      "confond le message le long de l'axone et la transmission à la synapse"
     ]
    },
    {
     "id": "T15",
     "q": "L'ATP nécessaire à la contraction musculaire",
     "ok": "n'est presque pas stocké : il est régénéré en permanence",
     "bad": [
      "est stocké en grande quantité dans le muscle, pour plusieurs heures",
      "vient directement des aliments, sans transformation",
      "n'est produit que par la respiration, en présence de dioxygène"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'ATP est une réserve",
      "ignore les voies de régénération de l'ATP",
      "oublie la phosphocréatine et la fermentation"
     ]
    },
    {
     "id": "T16",
     "q": "Après un repas riche en glucides, le pancréas sécrète surtout",
     "ok": "de l'insuline, qui fait baisser la glycémie en favorisant le stockage du glucose",
     "bad": [
      "du glucagon, qui fait baisser la glycémie",
      "de l'insuline, qui fait monter la glycémie",
      "de l'insuline, qui détruit le glucose dans le sang"
     ],
     "err": [
      "confond insuline et glucagon",
      "inverse l'effet de l'insuline",
      "croit que l'insuline détruit le glucose au lieu de le faire stocker"
     ]
    },
    {
     "id": "T17",
     "q": "Dans les glaces de l'Antarctique, la teneur en dioxyde de carbone et la température varient ensemble depuis 800 000 ans. Cette corrélation, à elle seule",
     "ok": "ne prouve pas une causalité : c'est la physique de l'effet de serre, établie par ailleurs, qui montre le rôle du dioxyde de carbone",
     "bad": [
      "prouve que le dioxyde de carbone est la cause des variations de température",
      "prouve qu'il n'y a aucun lien entre les deux",
      "prouve que la température est la seule cause des variations du dioxyde de carbone"
     ],
     "idee_fausse": true,
     "err": [
      "confond corrélation et causalité",
      "rejette tout lien dès qu'il n'est pas prouvé par la corrélation",
      "même confusion, dans l'autre sens"
     ]
    },
    {
     "id": "T18",
     "q": "On teste l'effet de l'auxine sur l'allongement de jeunes tiges coupées : on pose sur la section un bloc de gélose contenant de l'auxine. Le meilleur témoin est",
     "ok": "une tige identique, avec un bloc de gélose sans auxine posé de la même façon",
     "bad": [
      "une tige identique, sans aucun bloc",
      "une tige avec le bloc d'auxine, placée à l'obscurité alors que l'essai est à la lumière",
      "aucun : si la tige s'allonge, l'effet de l'auxine est prouvé"
     ],
     "err": [
      "ne contrôle pas l'effet du bloc de gélose lui-même",
      "fait varier deux facteurs à la fois",
      "ne voit pas le besoin d'un témoin"
     ]
    },
    {
     "id": "T19",
     "q": "Une roche du plancher océanique, située à 150 km de l'axe d'une dorsale, est datée de 5 millions d'années. De ce côté de la dorsale, la plaque s'est écartée de l'axe à la vitesse moyenne de",
     "ok": "3 cm par an",
     "bad": [
      "30 cm par an",
      "750 cm par an",
      "0,3 cm par an"
     ],
     "err": [
      "se trompe d'un facteur 10 dans la conversion",
      "multiplie la distance par la durée",
      "se trompe d'un facteur 10 dans l'autre sens"
     ]
    },
    {
     "id": "T20",
     "q": "Essai d'un médicament : 12 patients sur 20 vont mieux avec le médicament, 10 sur 20 avec le placebo. Quelle conclusion est justifiée ?",
     "ok": "l'écart est trop faible, sur si peu de patients, pour conclure à un effet du médicament",
     "bad": [
      "le médicament est efficace : 60 % contre 50 %",
      "le médicament est inefficace : c'est prouvé",
      "le placebo est un vrai médicament, puisqu'il améliore un patient sur deux"
     ],
     "idee_fausse": true,
     "err": [
      "ignore l'effet du hasard sur un petit effectif",
      "confond absence de preuve et preuve d'absence",
      "ignore l'évolution naturelle de la maladie et l'effet placebo"
     ]
    }
   ],
   "redaction": "Dans une tourbière du Massif central, on compte les grains de pollen conservés à deux profondeurs, datées au carbone 14 (valeurs simplifiées). Niveau daté de 15 000 ans : 80 % de pollens d'herbes de steppe (armoise, graminées), 5 % de pollens d'arbres de climat tempéré (chêne, noisetier), 15 % d'autres pollens. Niveau daté de 8 000 ans : 10 % de pollens d'herbes de steppe, 70 % de pollens d'arbres de climat tempéré, 20 % d'autres pollens. Aujourd'hui, la steppe à armoise se rencontre sous un climat froid et sec, la chênaie sous un climat tempéré.\n1. Décris l'évolution de la végétation entre les deux niveaux, avec des chiffres.\n2. Déduis-en l'évolution du climat local, et nomme le principe sur lequel repose ce raisonnement.\n3. Donne deux limites de cette méthode.",
   "corrige": "Entre 15 000 et 8 000 ans, les pollens d'herbes de steppe passent de 80 % à 10 %, ceux d'arbres de climat tempéré de 5 % à 70 % : une steppe a été remplacée par une forêt de chênes et de noisetiers. Le climat local est donc passé de froid et sec à tempéré : c'est un réchauffement. Le raisonnement repose sur le principe d'actualisme : on admet que les plantes du passé avaient les mêmes exigences climatiques que les mêmes plantes aujourd'hui. Limites possibles : le résultat est local et ne dit rien du climat mondial ; le vent transporte les pollens, certains viennent de loin ; toutes les plantes ne produisent pas autant de pollen ; deux niveaux ne donnent ni la vitesse ni les étapes du changement."
  }
 },
 "domaines": [
  {
   "nom": "Le vivant",
   "ids": {
    "B": [
     "B1",
     "B2",
     "B3",
     "B4",
     "B5",
     "B6",
     "B7"
    ],
    "C": [
     "C1",
     "C2",
     "C3",
     "C4",
     "C5",
     "C6",
     "C7"
    ],
    "S": [
     "S1",
     "S2",
     "S3",
     "S4",
     "S5",
     "S6",
     "S7"
    ],
    "P": [
     "P1",
     "P2",
     "P3",
     "P4",
     "P5",
     "P6",
     "P7"
    ],
    "T": [
     "T1",
     "T2",
     "T3",
     "T4",
     "T5",
     "T6",
     "T7"
    ]
   }
  },
  {
   "nom": "La Terre et l'environnement",
   "ids": {
    "B": [
     "B8",
     "B9",
     "B10",
     "B11",
     "B12"
    ],
    "C": [
     "C8",
     "C9",
     "C10",
     "C11",
     "C12"
    ],
    "S": [
     "S8",
     "S9",
     "S10",
     "S11",
     "S12"
    ],
    "P": [
     "P8",
     "P9",
     "P10",
     "P11",
     "P12"
    ],
    "T": [
     "T8",
     "T9",
     "T10",
     "T11",
     "T12"
    ]
   }
  },
  {
   "nom": "Corps humain et santé",
   "ids": {
    "B": [
     "B13",
     "B14",
     "B15",
     "B16"
    ],
    "C": [
     "C13",
     "C14",
     "C15",
     "C16"
    ],
    "S": [
     "S13",
     "S14",
     "S15",
     "S16"
    ],
    "P": [
     "P13",
     "P14",
     "P15",
     "P16"
    ],
    "T": [
     "T13",
     "T14",
     "T15",
     "T16"
    ]
   }
  },
  {
   "nom": "Démarche scientifique",
   "ids": {
    "B": [
     "B17",
     "B18",
     "B19",
     "B20"
    ],
    "C": [
     "C17",
     "C18",
     "C19",
     "C20"
    ],
    "S": [
     "S17",
     "S18",
     "S19",
     "S20"
    ],
    "P": [
     "P17",
     "P18",
     "P19",
     "P20"
    ],
    "T": [
     "T17",
     "T18",
     "T19",
     "T20"
    ]
   }
  }
 ],
 "criteres": [
  "Lire le document",
  "Comparer",
  "Interpréter",
  "Conclure avec prudence",
  "Communiquer"
 ]
};
