window.DIAGS = window.DIAGS || {};
window.DIAGS["histoire-geographie"] = {
 "cle": "histoire-geographie",
 "matiere": "histoire-géographie",
 "titre": "Test d'histoire-géographie",
 "nom": "Diagnostic d'histoire-géographie",
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
   "Première",
   "P"
  ],
  [
   "Terminale",
   "T"
  ]
 ],
 "duree": "40 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans document ni manuel.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-histoire-geographie-college-lycee.md",
 "blocs": {
  "B": {
   "titre": "élève de sixième ou de cinquième",
   "questions": [
    {
     "id": "B1",
     "q": "Dans quel ordre se suivent les quatre grandes périodes de l'histoire ?",
     "ok": "Antiquité, Moyen Âge, Temps modernes, Époque contemporaine",
     "bad": [
      "Moyen Âge, Antiquité, Temps modernes, Époque contemporaine",
      "Antiquité, Temps modernes, Moyen Âge, Époque contemporaine",
      "Antiquité, Moyen Âge, Époque contemporaine, Temps modernes"
     ],
     "err": [
      "place le Moyen Âge avant l'Antiquité",
      "place les Temps modernes avant le Moyen Âge",
      "confond Temps modernes et Époque contemporaine"
     ]
    },
    {
     "id": "B2",
     "q": "L'année 1492 appartient",
     "ok": "au XVe siècle après J.-C.",
     "bad": [
      "au XIVe siècle après J.-C.",
      "au XVIe siècle après J.-C.",
      "au XVe siècle avant J.-C."
     ],
     "err": [
      "prend le nombre des centaines sans ajouter un",
      "ajoute un siècle de trop",
      "confond avant et après J.-C."
     ]
    },
    {
     "id": "B3",
     "q": "Lequel de ces événements est le plus ancien ?",
     "ok": "un événement daté de 753 avant J.-C.",
     "bad": [
      "un événement daté de 52 avant J.-C.",
      "un événement daté de 800 après J.-C.",
      "un événement daté de 27 après J.-C."
     ],
     "err": [
      "croit que, avant J.-C., le plus petit nombre est le plus ancien",
      "ne regarde pas « avant » ou « après » et prend le plus grand nombre",
      "ne regarde pas « avant » ou « après » et prend le plus petit nombre"
     ]
    },
    {
     "id": "B4",
     "q": "Quel océan sépare l'Europe de l'Amérique ?",
     "ok": "l'océan Atlantique",
     "bad": [
      "l'océan Pacifique",
      "l'océan Indien",
      "la mer Méditerranée"
     ],
     "err": [
      "confond Atlantique et Pacifique",
      "situe mal l'océan Indien",
      "confond mer et océan"
     ]
    },
    {
     "id": "B5",
     "q": "Sur un planisphère, quelle ligne imaginaire sépare l'hémisphère Nord de l'hémisphère Sud ?",
     "ok": "l'équateur",
     "bad": [
      "le méridien de Greenwich",
      "le tropique du Cancer",
      "le cercle polaire arctique"
     ],
     "err": [
      "confond parallèle et méridien",
      "confond l'équateur avec un tropique",
      "confond l'équateur avec un cercle polaire"
     ]
    },
    {
     "id": "B6",
     "q": "Lequel de ces noms désigne un continent ?",
     "ok": "l'Afrique",
     "bad": [
      "le Sahara",
      "la Méditerranée",
      "la Chine"
     ],
     "err": [
      "confond désert et continent",
      "confond mer et continent",
      "confond pays et continent"
     ]
    },
    {
     "id": "B7",
     "q": "Au Néolithique, les humains deviennent peu à peu sédentaires. Cela signifie qu'ils",
     "ok": "vivent dans des villages fixes",
     "bad": [
      "se déplacent toute l'année en suivant le gibier",
      "savent lire et écrire",
      "vivent dans de très grandes villes"
     ],
     "err": [
      "confond sédentaire et nomade",
      "confond la sédentarisation avec l'invention de l'écriture",
      "anachronisme : place les grandes villes au Néolithique"
     ]
    },
    {
     "id": "B8",
     "q": "Dans une religion polythéiste, on",
     "ok": "croit en plusieurs dieux",
     "bad": [
      "croit en un seul dieu",
      "ne croit en aucun dieu",
      "obéit à un seul roi"
     ],
     "err": [
      "confond polythéisme et monothéisme",
      "confond polythéisme et absence de croyance",
      "confond religion et régime politique"
     ]
    },
    {
     "id": "B9",
     "q": "La densité de population d'un territoire, c'est",
     "ok": "le nombre d'habitants par kilomètre carré",
     "bad": [
      "le nombre total de ses habitants",
      "sa superficie en kilomètres carrés",
      "le nombre de naissances par an"
     ],
     "err": [
      "confond densité et population totale",
      "confond densité et superficie",
      "confond densité et natalité"
     ]
    },
    {
     "id": "B10",
     "q": "En géographie, une métropole est",
     "ok": "une très grande ville qui concentre des habitants, des activités et des lieux de décision",
     "bad": [
      "la capitale d'un pays, dans tous les cas",
      "un réseau de transport souterrain",
      "un pays très peuplé"
     ],
     "err": [
      "confond métropole et capitale",
      "confond métropole et métro",
      "confond ville et pays"
     ]
    },
    {
     "id": "B11",
     "q": "Tableau de la population de quatre villes imaginaires. Alba : 2 millions d'habitants. Borel : 500 000 habitants. Cyra : 8 millions d'habitants. Dunes : 90 000 habitants. Quelle est la ville la plus peuplée ?",
     "ok": "Cyra",
     "bad": [
      "Alba",
      "Borel",
      "Dunes"
     ],
     "err": [
      "prend la première ligne du tableau",
      "compare les nombres écrits en chiffres sans lire le mot « millions »",
      "compare seulement le premier chiffre de chaque nombre"
     ]
    },
    {
     "id": "B12",
     "q": "Une légende raconte que Rome a été fondée par Romulus en 753 avant J.-C. Des archéologues ont retrouvé sur une colline de Rome, le Palatin, des traces de cabanes du VIIIe siècle avant J.-C. Que peut-on en conclure ?",
     "ok": "Des gens habitaient bien le site de Rome à cette époque, mais cela ne prouve pas que Romulus a existé",
     "bad": [
      "La légende est vraie dans tous ses détails",
      "La légende est entièrement fausse : personne ne vivait là à cette époque",
      "Les archéologues ont retrouvé la maison de Romulus"
     ],
     "err": [
      "prend la légende pour un fait prouvé",
      "rejette tout le récit alors que les traces confirment une occupation du site",
      "fait dire aux traces plus qu'elles ne disent"
     ]
    },
    {
     "id": "B13",
     "q": "Récit imaginaire d'un marchand de l'Antiquité : « Parti de Chine avec ma caravane chargée de soie, j'ai voyagé des mois vers l'ouest. J'ai vendu mes tissus à d'autres marchands, qui les porteront jusqu'à Rome. » Que montre ce texte ?",
     "ok": "Des marchandises circulaient entre la Chine et l'Empire romain",
     "bad": [
      "Les Romains fabriquaient la soie et la vendaient aux Chinois",
      "Ce marchand est allé lui-même jusqu'à Rome",
      "La Chine faisait partie de l'Empire romain"
     ],
     "err": [
      "lit le sens de l'échange à l'envers",
      "n'a pas vu que les tissus changent de mains en route",
      "confond relation commerciale et domination politique"
     ]
    },
    {
     "id": "B14",
     "q": "Carte d'un pays imaginaire. La légende indique : gros point rouge = ville de plus d'un million d'habitants ; petit point rouge = ville de moins de 100 000 habitants ; trait bleu = fleuve. La ville de Valmer est dessinée par un gros point rouge posé sur un trait bleu. Que sait-on de Valmer ?",
     "ok": "C'est une grande ville située au bord d'un fleuve",
     "bad": [
      "C'est une petite ville située au bord d'un fleuve",
      "C'est une grande ville située au bord de la mer",
      "C'est la capitale du pays"
     ],
     "err": [
      "lit la taille des points à l'envers",
      "confond fleuve et mer",
      "ajoute une information absente de la légende"
     ]
    },
    {
     "id": "B15",
     "q": "Pourquoi les premiers villages apparaissent-ils au Néolithique ?",
     "ok": "Parce que l'agriculture et l'élevage permettent de produire sa nourriture sur place",
     "bad": [
      "Parce que l'écriture vient d'être inventée",
      "Parce que les humains viennent de maîtriser le feu",
      "Parce que des rois ordonnent de construire des villages"
     ],
     "err": [
      "anachronisme : l'écriture vient bien après les premiers villages",
      "confusion de périodes : le feu est maîtrisé dès le Paléolithique",
      "anachronisme : les rois et les États viennent après les villages"
     ]
    },
    {
     "id": "B16",
     "q": "Pourquoi beaucoup de très grandes villes du monde sont-elles situées sur un littoral ?",
     "ok": "Parce que la mer facilite les échanges, grâce aux ports",
     "bad": [
      "Parce qu'il n'y a aucun risque naturel au bord de la mer",
      "Parce qu'il est impossible de construire des villes à l'intérieur des terres",
      "Parce que ce sont toutes d'anciennes stations balnéaires créées pour les touristes"
     ],
     "err": [
      "oublie les risques des littoraux (tempêtes, submersions)",
      "généralise : de grandes villes existent loin des côtes",
      "explique tout par une cause récente et particulière, le tourisme"
     ]
    },
    {
     "id": "B17",
     "q": "Rome a conquis de nombreux territoires autour de la Méditerranée. Quelle en est une conséquence ?",
     "ok": "Le mode de vie romain se diffuse dans les provinces conquises",
     "bad": [
      "Romulus fonde la ville de Rome",
      "Les cités grecques apparaissent",
      "Toutes les langues et toutes les croyances locales disparaissent aussitôt"
     ],
     "err": [
      "confond cause et conséquence dans le temps : la fondation de Rome est antérieure",
      "confusion de périodes : les cités grecques sont antérieures aux conquêtes",
      "exagère : la romanisation est lente et les cultures se mêlent"
     ]
    },
    {
     "id": "B18",
     "q": "Dans une consigne, « Décris le document » te demande de",
     "ok": "dire ce que tu vois ou ce que tu lis dans le document",
     "bad": [
      "donner ton avis sur le document",
      "expliquer les causes de ce que montre le document",
      "recopier le document en entier"
     ],
     "err": [
      "confond décrire et juger",
      "confond décrire et expliquer",
      "confond décrire et recopier"
     ]
    },
    {
     "id": "B19",
     "q": "Sur une carte, à quoi sert l'échelle ?",
     "ok": "À retrouver les distances réelles à partir des distances mesurées sur la carte",
     "bad": [
      "À expliquer ce que veulent dire les couleurs et les symboles",
      "À indiquer où se trouve le nord",
      "À donner le sujet de la carte"
     ],
     "err": [
      "confond échelle et légende",
      "confond échelle et orientation",
      "confond échelle et titre"
     ]
    },
    {
     "id": "B20",
     "q": "Pour présenter un document en histoire, tu donnes d'abord",
     "ok": "sa nature, son auteur, sa date et son sujet",
     "bad": [
      "ton avis sur ce document",
      "un résumé de tout ce qu'il contient",
      "la réponse à la dernière question de l'exercice"
     ],
     "err": [
      "confond présenter et donner son avis",
      "confond présenter et résumer",
      "ne distingue pas les étapes du travail sur document"
     ]
    }
   ],
   "redaction": "Lis ce témoignage imaginaire, écrit comme si un habitant de la Gaule romaine parlait vers l'an 220 : « Je m'appelle Lucius. J'habite Lugdunum, en Gaule. Mes ancêtres parlaient gaulois ; moi, je parle latin. Je vais aux thermes et j'assiste aux spectacles de l'amphithéâtre. Depuis l'an 212, je suis citoyen romain, comme tous les hommes libres de l'Empire. »\n1. Présente ce document en une phrase : de quel type de texte s'agit-il, qui parle, où et à quelle époque ?\n2. Relève deux informations qui montrent que Lucius vit comme un Romain.\n3. Explique en trois ou quatre phrases ce que ce texte nous apprend sur la vie dans les provinces de l'Empire romain.",
   "corrige": "Le document est un témoignage imaginaire, celui de Lucius, habitant de Lugdunum (Lyon) en Gaule, vers 220 après J.-C., au temps de l'Empire romain. Deux informations parmi : il parle latin, il fréquente les thermes, il va à l'amphithéâtre, il est citoyen romain. Explication attendue : après la conquête, les habitants des provinces adoptent peu à peu la langue, les loisirs et les bâtiments des Romains ; c'est la romanisation. Elle se fait sur plusieurs générations (ses ancêtres parlaient gaulois). En 212, l'empereur Caracalla accorde la citoyenneté romaine à tous les hommes libres de l'Empire. Le mot « romanisation » n'est pas exigé en sixième si l'idée est là."
  },
  "C": {
   "titre": "élève de quatrième ou de troisième",
   "questions": [
    {
     "id": "C1",
     "q": "Quel classement va du plus ancien au plus récent ?",
     "ok": "règne de Louis XIV, Révolution française, Premier Empire, Troisième République",
     "bad": [
      "Révolution française, règne de Louis XIV, Premier Empire, Troisième République",
      "règne de Louis XIV, Premier Empire, Révolution française, Troisième République",
      "règne de Louis XIV, Révolution française, Troisième République, Premier Empire"
     ],
     "err": [
      "place la monarchie absolue après la Révolution",
      "place l'Empire de Napoléon avant la Révolution",
      "ne situe pas la Troisième République à la fin du XIXe siècle"
     ]
    },
    {
     "id": "C2",
     "q": "Les grands voyages de découverte de Christophe Colomb et de Magellan se situent",
     "ok": "à la fin du XVe siècle et au début du XVIe siècle",
     "bad": [
      "au XIIe siècle, au cœur du Moyen Âge",
      "au XVIIIe siècle, au temps des Lumières",
      "au XIXe siècle, au temps des conquêtes coloniales"
     ],
     "err": [
      "confusion de périodes : place les découvertes au Moyen Âge",
      "confond grandes découvertes et siècle des Lumières",
      "confond grandes découvertes et colonisation du XIXe siècle"
     ]
    },
    {
     "id": "C3",
     "q": "Dans le découpage des périodes utilisé en France, l'année 1789 marque",
     "ok": "la fin des Temps modernes et le début de l'époque contemporaine",
     "bad": [
      "la fin du Moyen Âge et le début des Temps modernes",
      "la fin de l'Antiquité et le début du Moyen Âge",
      "le passage du XVIIe au XVIIIe siècle"
     ],
     "err": [
      "confond avec la limite entre Moyen Âge et Temps modernes",
      "confond avec la fin de l'Antiquité",
      "se trompe d'un siècle en lisant 1789"
     ]
    },
    {
     "id": "C4",
     "q": "Au XVIIIe siècle, le commerce dit « triangulaire » relie trois continents. Lesquels ?",
     "ok": "l'Europe, l'Afrique et l'Amérique",
     "bad": [
      "l'Europe, l'Asie et l'Amérique",
      "l'Europe, l'Afrique et l'Asie",
      "l'Europe, l'Amérique et l'Océanie"
     ],
     "err": [
      "confond avec le commerce des épices et des comptoirs d'Asie",
      "oublie l'Amérique, lieu des plantations",
      "situe mal les continents concernés par la traite atlantique"
     ]
    },
    {
     "id": "C5",
     "q": "Le détroit de Gibraltar relie",
     "ok": "l'océan Atlantique et la mer Méditerranée",
     "bad": [
      "la mer Méditerranée et la mer Rouge",
      "l'océan Atlantique et l'océan Pacifique",
      "la Manche et la mer du Nord"
     ],
     "err": [
      "confond avec le canal de Suez",
      "confond avec le canal de Panama",
      "confond avec le pas de Calais"
     ]
    },
    {
     "id": "C6",
     "q": "Lequel de ces territoires français d'outre-mer est situé dans l'océan Indien ?",
     "ok": "La Réunion",
     "bad": [
      "la Guadeloupe",
      "la Guyane",
      "la Nouvelle-Calédonie"
     ],
     "err": [
      "situe les Antilles dans l'océan Indien",
      "ne sait pas que la Guyane est en Amérique du Sud",
      "confond océan Indien et océan Pacifique"
     ]
    },
    {
     "id": "C7",
     "q": "Dans une monarchie absolue de droit divin, comme en France sous Louis XIV, le roi",
     "ok": "concentre les pouvoirs et affirme tenir son autorité de Dieu",
     "bad": [
      "partage le pouvoir avec une assemblée élue",
      "est élu par ses sujets",
      "est considéré comme un dieu"
     ],
     "err": [
      "confond monarchie absolue et monarchie parlementaire",
      "anachronisme : applique l'élection à l'Ancien Régime",
      "confond « droit divin » et roi divinisé"
     ]
    },
    {
     "id": "C8",
     "q": "Au XVIIIe siècle, Montesquieu défend la séparation des pouvoirs. Cela signifie que",
     "ok": "faire la loi, la faire appliquer et juger ne doivent pas être confiés aux mêmes mains",
     "bad": [
      "l'Église et l'État doivent être séparés",
      "le royaume doit être divisé en provinces qui se gouvernent seules",
      "le roi garde tous les pouvoirs mais les exerce l'un après l'autre"
     ],
     "err": [
      "confond séparation des pouvoirs et laïcité",
      "confond séparation des pouvoirs et autonomie des territoires",
      "ne voit pas que l'idée s'oppose à la concentration des pouvoirs"
     ]
    },
    {
     "id": "C9",
     "q": "L'urbanisation, c'est",
     "ok": "l'augmentation de la part de la population qui vit en ville",
     "bad": [
      "l'augmentation de la population mondiale",
      "le départ des habitants des villes vers les campagnes",
      "l'augmentation des échanges entre les pays"
     ],
     "err": [
      "confond urbanisation et croissance démographique",
      "inverse le sens du mouvement",
      "confond urbanisation et mondialisation"
     ]
    },
    {
     "id": "C10",
     "q": "Une personne qui quitte son pays pour s'installer durablement dans un autre est appelée « émigrée » par",
     "ok": "le pays qu'elle a quitté",
     "bad": [
      "le pays où elle s'installe",
      "les pays qu'elle traverse pendant son voyage",
      "le pays où elle passe ses vacances"
     ],
     "err": [
      "confond émigré et immigré",
      "confond pays de départ et pays de transit",
      "confond migration et tourisme"
     ]
    },
    {
     "id": "C11",
     "q": "Tableau, pays imaginaire : part de la population qui vit en ville. En 1800 : 10 %. En 1850 : 25 %. En 1900 : 55 %. Que montre ce tableau ?",
     "ok": "En 1900, plus de la moitié des habitants vit en ville, contre un sur dix en 1800",
     "bad": [
      "En 1900, la majorité des habitants vit encore à la campagne",
      "La population du pays a été multipliée par 5,5 en un siècle",
      "Le nombre de villes du pays est passé de 10 à 55"
     ],
     "err": [
      "lecture inversée : lit 55 % comme la part des campagnes",
      "confond une part en pourcentage et un nombre d'habitants",
      "confond un pourcentage et un nombre de villes"
     ]
    },
    {
     "id": "C12",
     "q": "Témoignage imaginaire, France, 1835 : « J'ai douze ans. Je travaille à la filature de coton de cinq heures du matin à sept heures du soir. Le bruit des machines est assourdissant. Mon salaire est bien plus faible que celui d'un adulte. » De quoi ce texte témoigne-t-il ?",
     "ok": "Du travail des enfants dans les usines au début de l'industrialisation",
     "bad": [
      "Du travail des serfs sur les terres d'un seigneur au Moyen Âge",
      "De l'esclavage dans les plantations des colonies",
      "De l'interdiction du travail des enfants à cette époque"
     ],
     "err": [
      "confusion de périodes : Moyen Âge et XIXe siècle",
      "confond travail salarié en usine et esclavage",
      "lecture inversée du témoignage"
     ]
    },
    {
     "id": "C13",
     "q": "Texte imaginaire d'un propriétaire de plantation à Saint-Domingue, 1780 : « Sans le travail des esclaves, nos plantations de sucre seraient ruinées. La traite est donc nécessaire. » Comment un historien utilise-t-il ce texte ?",
     "ok": "Comme le point de vue d'un homme qui tire profit de l'esclavage, à comparer avec d'autres sources",
     "bad": [
      "Comme la preuve que l'esclavage était nécessaire",
      "Comme un texte inutile, parce que son auteur n'est pas neutre",
      "Comme le témoignage d'un esclave sur sa vie"
     ],
     "err": [
      "prend un point de vue pour un fait",
      "rejette une source parce qu'elle est partiale, alors que tout point de vue se critique et s'utilise",
      "confond l'auteur du texte et ceux dont il parle"
     ]
    },
    {
     "id": "C14",
     "q": "Une carte du monde en 1914 colorie en bleu les territoires dominés par la France et en rose ceux dominés par le Royaume-Uni. Le bleu couvre une grande partie de l'Afrique du Nord et de l'Ouest. Le rose couvre notamment l'Inde et plusieurs territoires d'Afrique. Quel est le sujet de cette carte ?",
     "ok": "Les empires coloniaux à la veille de la Première Guerre mondiale",
     "bad": [
      "Les alliances militaires de la Première Guerre mondiale",
      "Les grandes découvertes du XVIe siècle",
      "Les pays membres de l'Union européenne"
     ],
     "err": [
      "confond domination coloniale et alliance militaire",
      "confusion de périodes : XVIe siècle et début du XXe siècle",
      "anachronisme : l'Union européenne n'existe pas en 1914"
     ]
    },
    {
     "id": "C15",
     "q": "Laquelle de ces propositions est une cause de la Révolution française de 1789 ?",
     "ok": "La crise financière de la monarchie et la contestation des privilèges",
     "bad": [
      "La Déclaration des droits de l'homme et du citoyen",
      "Le sacre de Napoléon Ier",
      "L'industrialisation de la France"
     ],
     "err": [
      "confond cause et conséquence",
      "place un événement postérieur parmi les causes",
      "anachronisme : l'industrialisation de la France date du XIXe siècle"
     ]
    },
    {
     "id": "C16",
     "q": "Au XIXe siècle, en Europe, l'industrialisation entraîne",
     "ok": "la croissance des villes et l'essor du monde ouvrier",
     "bad": [
      "l'invention de la machine à vapeur",
      "la disparition de l'agriculture",
      "la fin de la colonisation"
     ],
     "err": [
      "confond cause et conséquence",
      "exagère : l'agriculture recule en part, elle ne disparaît pas",
      "contresens : la colonisation s'accélère au XIXe siècle"
     ]
    },
    {
     "id": "C17",
     "q": "Pourquoi beaucoup d'usines de vêtements se sont-elles installées dans des pays d'Asie du Sud et du Sud-Est depuis la fin du XXe siècle ?",
     "ok": "Parce que la main-d'œuvre y coûte moins cher et que le transport par conteneurs est peu coûteux",
     "bad": [
      "Parce que les habitants de ces pays sont les plus gros acheteurs de vêtements du monde",
      "Parce que le coton ne pousse que dans ces pays",
      "Parce que la mondialisation a réduit les échanges entre les continents"
     ],
     "err": [
      "inverse lieux de production et lieux de consommation",
      "explique par la nature seule ce qui relève de choix économiques",
      "contresens sur la mondialisation, qui augmente les échanges"
     ]
    },
    {
     "id": "C18",
     "q": "Au collège, un « développement construit » est",
     "ok": "un texte organisé en paragraphes, qui répond au sujet avec des connaissances précises",
     "bad": [
      "une liste de dates et de mots-clés",
      "un résumé de tout le chapitre, quel que soit le sujet",
      "un texte qui donne surtout ton opinion"
     ],
     "err": [
      "confond rédaction et fiche de révision",
      "récite le cours sans répondre au sujet",
      "confond argumenter avec des connaissances et donner son opinion"
     ]
    },
    {
     "id": "C19",
     "q": "Sur un croquis de géographie, pour représenter un flux (un déplacement de personnes ou de marchandises), on utilise",
     "ok": "une flèche",
     "bad": [
      "une plage de couleur",
      "un point ou un cercle",
      "un nom écrit en majuscules"
     ],
     "err": [
      "confond figuré de surface et flèche",
      "confond figuré ponctuel et flèche",
      "confond figuré et nom de lieu"
     ]
    },
    {
     "id": "C20",
     "q": "Une consigne te demande d'« expliquer » une phrase d'un texte. Tu dois",
     "ok": "éclairer la phrase avec tes connaissances : contexte, causes, sens des mots",
     "bad": [
      "redire la phrase avec d'autres mots",
      "dire si tu es d'accord avec l'auteur",
      "présenter l'auteur et la date du texte"
     ],
     "err": [
      "paraphrase au lieu d'expliquer",
      "confond expliquer et juger",
      "confond expliquer et présenter"
     ]
    }
   ],
   "redaction": "Lis cette lettre imaginaire d'un médecin d'une ville du nord de la France, vers 1850 : « Depuis l'ouverture de la filature, notre ville ne cesse de grandir. Les paysans des alentours viennent y chercher un salaire. Ils s'entassent dans des logements humides, tout près de l'usine. Les cheminées fument jour et nuit, et le chemin de fer apporte le charbon. »\n1. Présente ce document en une phrase : nature, auteur, lieu, époque.\n2. Relève deux transformations de la ville décrites par le médecin.\n3. En cinq ou six lignes, explique comment l'industrialisation transforme les villes et la société au XIXe siècle. Appuie-toi sur le document et sur tes connaissances.",
   "corrige": "Le document est une lettre imaginaire écrite par un médecin, dans une ville industrielle du nord de la France, vers 1850, pendant l'industrialisation. Deux transformations parmi : la ville grandit, des paysans arrivent des campagnes (exode rural), des logements ouvriers insalubres se concentrent près de l'usine, le paysage change (cheminées, fumées, chemin de fer). Explication attendue : les usines, qui utilisent la machine à vapeur et le charbon, attirent une main-d'œuvre venue des campagnes ; les villes grandissent vite ; un monde ouvrier nombreux apparaît, avec des conditions de vie et de travail difficiles (longues journées, bas salaires, logements insalubres) ; le chemin de fer relie les villes et transporte matières premières et marchandises. On valorise l'élève qui ajoute une connaissance absente du texte, par exemple le travail des enfants ou les premières lois sociales."
  },
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "Quel classement va du plus ancien au plus récent ?",
     "ok": "Première Guerre mondiale, crise des années 1930, Seconde Guerre mondiale, guerre froide",
     "bad": [
      "crise des années 1930, Première Guerre mondiale, Seconde Guerre mondiale, guerre froide",
      "Première Guerre mondiale, crise des années 1930, guerre froide, Seconde Guerre mondiale",
      "Première Guerre mondiale, Seconde Guerre mondiale, crise des années 1930, guerre froide"
     ],
     "err": [
      "place la crise des années 1930 avant 1914",
      "place la guerre froide avant la Seconde Guerre mondiale",
      "place la crise des années 1930 après 1945"
     ]
    },
    {
     "id": "S2",
     "q": "La Ve République, régime actuel de la France, est fondée",
     "ok": "en 1958, dans le contexte de la guerre d'Algérie",
     "bad": [
      "à la Libération, en 1944",
      "dans les années 1870, après la chute du Second Empire",
      "en 1792, pendant la Révolution française"
     ],
     "err": [
      "confond avec le rétablissement de la République à la Libération",
      "confond avec la Troisième République",
      "confond avec la Première République"
     ]
    },
    {
     "id": "S3",
     "q": "Quelle association entre une période et un fait est exacte ?",
     "ok": "Temps modernes : la Renaissance et les réformes religieuses",
     "bad": [
      "Antiquité : les croisades",
      "Moyen Âge : le mouvement des Lumières",
      "Époque contemporaine : le premier voyage de Christophe Colomb"
     ],
     "err": [
      "place les croisades, fait médiéval, dans l'Antiquité",
      "place les Lumières, fait du XVIIIe siècle, au Moyen Âge",
      "place un fait de la fin du XVe siècle à l'époque contemporaine"
     ]
    },
    {
     "id": "S4",
     "q": "Lequel de ces États ne fait pas partie de l'Union européenne en 2026 ?",
     "ok": "le Royaume-Uni",
     "bad": [
      "la Pologne",
      "l'Irlande",
      "la Croatie"
     ],
     "err": [
      "croit l'Union européenne limitée à l'Europe de l'Ouest",
      "confond l'Irlande et le Royaume-Uni",
      "ignore l'élargissement de 2013"
     ]
    },
    {
     "id": "S5",
     "q": "Quels continents bordent la mer Méditerranée ?",
     "ok": "l'Europe, l'Afrique et l'Asie",
     "bad": [
      "l'Europe et l'Afrique seulement",
      "l'Europe, l'Afrique et l'Amérique",
      "l'Europe et l'Asie seulement"
     ],
     "err": [
      "oublie la rive asiatique, au Proche-Orient",
      "situe mal l'Amérique",
      "oublie la rive africaine"
     ]
    },
    {
     "id": "S6",
     "q": "Sur une carte des densités de population de la France métropolitaine, une bande de faibles densités, souvent appelée « diagonale des faibles densités », s'étend",
     "ok": "du nord-est au sud-ouest, des Ardennes aux Pyrénées, en passant par le Massif central",
     "bad": [
      "le long du littoral méditerranéen",
      "de la Bretagne à l'Alsace, en passant par Paris",
      "le long de la vallée du Rhône"
     ],
     "err": [
      "lecture inversée : ce littoral est densément peuplé",
      "se trompe d'axe et fait passer la bande par la région la plus peuplée",
      "confond avec un axe de fortes densités"
     ]
    },
    {
     "id": "S7",
     "q": "On parle de « guerre totale » lorsque",
     "ok": "les États mobilisent toutes leurs ressources : soldats, économie, civils, opinion",
     "bad": [
      "tous les pays du monde participent à la guerre",
      "la guerre se termine par la destruction complète du vaincu",
      "seuls les soldats sont concernés, loin des civils"
     ],
     "err": [
      "confond guerre totale et guerre mondiale",
      "confond guerre totale et destruction du vaincu",
      "contresens : la guerre totale implique les civils"
     ]
    },
    {
     "id": "S8",
     "q": "Un régime totalitaire se distingue d'une démocratie parce que",
     "ok": "un parti unique et son chef cherchent à contrôler l'État, la société et les esprits, par la propagande et la terreur",
     "bad": [
      "le chef de l'État y est élu pour un mandat très long",
      "le pouvoir s'y transmet de père en fils",
      "le pays y est toujours en guerre"
     ],
     "err": [
      "confond totalitarisme et durée du mandat",
      "confond totalitarisme et monarchie héréditaire",
      "confond la nature d'un régime et la situation de guerre"
     ]
    },
    {
     "id": "S9",
     "q": "En géographie, le développement d'un pays désigne",
     "ok": "l'amélioration des conditions de vie de sa population : santé, éducation, revenus",
     "bad": [
      "l'augmentation de sa production de richesses",
      "l'augmentation de sa population",
      "la protection de son environnement"
     ],
     "err": [
      "confond développement et croissance économique",
      "confond développement et croissance démographique",
      "réduit le développement durable à son seul volet environnemental"
     ]
    },
    {
     "id": "S10",
     "q": "La mondialisation désigne",
     "ok": "la mise en relation croissante des territoires du monde par des flux de marchandises, de capitaux, de personnes et d'informations",
     "bad": [
      "la domination du monde par un seul pays",
      "le fait que tous les pays deviennent aussi riches les uns que les autres",
      "le réchauffement de la planète"
     ],
     "err": [
      "confond mondialisation et domination d'une puissance",
      "croit que la mondialisation efface les inégalités",
      "confond mondialisation et changement climatique"
     ]
    },
    {
     "id": "S11",
     "q": "Tableau, deux pays imaginaires. Pays X : revenu moyen par habitant de 30 000 dollars par an, espérance de vie de 62 ans, 60 % d'adultes sachant lire. Pays Y : revenu moyen par habitant de 12 000 dollars par an, espérance de vie de 79 ans, 98 % d'adultes sachant lire. Que montre la comparaison ?",
     "ok": "Un pays peut être plus riche par habitant sans être plus développé",
     "bad": [
      "Le pays X est le plus développé, puisqu'il est le plus riche",
      "Le pays Y est le plus riche des deux",
      "La richesse d'un pays n'a jamais aucun lien avec son développement"
     ],
     "err": [
      "confond richesse et développement",
      "lecture inversée du tableau",
      "généralise à partir de deux cas"
     ]
    },
    {
     "id": "S12",
     "q": "Lettre imaginaire d'un soldat français, 1916 : « Voilà dix jours que nous tenons la tranchée sous les obus. La boue, les rats, le froid. À l'arrière, ma femme a pris une place à l'usine d'armement. » Qu'illustre ce document ?",
     "ok": "La violence du front et la mobilisation de l'arrière, deux aspects de la guerre totale",
     "bad": [
      "Une guerre de mouvement rapide, menée avec des chars et des avions",
      "La vie des civils dans la France occupée pendant la Seconde Guerre mondiale",
      "Le fait que les femmes combattent dans les tranchées"
     ],
     "err": [
      "confond guerre de position et guerre de mouvement",
      "confond les deux guerres mondiales",
      "lit mal le texte : la femme travaille à l'arrière"
     ]
    },
    {
     "id": "S13",
     "q": "Un graphique montre la population mondiale : environ 2,5 milliards d'habitants en 1950, environ 6 milliards en 2000, environ 8 milliards en 2022. Quelle affirmation est exacte ?",
     "ok": "La population mondiale a plus que triplé entre 1950 et 2022",
     "bad": [
      "La population mondiale a doublé entre 2000 et 2022",
      "La population mondiale diminue depuis 2000",
      "La population mondiale a augmenté de 8 milliards d'habitants entre 1950 et 2022"
     ],
     "err": [
      "erreur d'ordre de grandeur : de 6 à 8 milliards, ce n'est pas un doublement",
      "confond une hausse plus lente et une baisse",
      "confond le total atteint et l'augmentation"
     ]
    },
    {
     "id": "S14",
     "q": "Une affiche imaginaire, datée de 1941 et diffusée par un régime autoritaire, montre son chef souriant, entouré d'enfants, avec le slogan « Suivez le chef, il veille sur vous ». Comment un historien utilise-t-il ce document ?",
     "ok": "Comme un document de propagande : il montre l'image que le régime veut donner de lui-même",
     "bad": [
      "Comme la preuve que toute la population soutenait le régime",
      "Comme un document sans intérêt, puisqu'il ne dit pas la vérité",
      "Comme une affiche réalisée par les opposants au régime"
     ],
     "err": [
      "prend la propagande pour la réalité",
      "rejette une source au lieu de la critiquer",
      "contresens sur l'auteur et sur l'intention"
     ]
    },
    {
     "id": "S15",
     "q": "Quel événement déclenche la Seconde Guerre mondiale en Europe ?",
     "ok": "L'invasion de la Pologne par l'Allemagne nazie, en septembre 1939",
     "bad": [
      "L'attentat de Sarajevo",
      "La création de l'Organisation des Nations unies",
      "Le début de la guerre froide"
     ],
     "err": [
      "confond avec le déclenchement de la Première Guerre mondiale",
      "confond cause et conséquence",
      "place un fait postérieur parmi les causes"
     ]
    },
    {
     "id": "S16",
     "q": "Après 1945, la décolonisation s'explique notamment par",
     "ok": "l'affaiblissement des puissances coloniales européennes et la montée des mouvements indépendantistes",
     "bad": [
      "la conquête de nouvelles colonies par les Européens",
      "la chute du mur de Berlin",
      "l'entrée de nombreux nouveaux États à l'ONU"
     ],
     "err": [
      "inverse le sens du processus",
      "place en cause un fait postérieur à l'essentiel des indépendances",
      "confond cause et conséquence"
     ]
    },
    {
     "id": "S17",
     "q": "Quelle est la cause principale du réchauffement climatique actuel ?",
     "ok": "Les émissions de gaz à effet de serre liées aux activités humaines",
     "bad": [
      "La montée du niveau des mers",
      "Le trou dans la couche d'ozone",
      "Un rapprochement entre la Terre et le Soleil"
     ],
     "err": [
      "confond cause et conséquence",
      "confond deux problèmes d'environnement distincts",
      "fausse représentation astronomique, sans lien avec les activités humaines"
     ]
    },
    {
     "id": "S18",
     "q": "Sujet : « La Méditerranée médiévale : espace d'échanges et de conflits ». Laquelle de ces phrases est une problématique ?",
     "ok": "Comment la Méditerranée médiévale est-elle à la fois un lieu de contacts et d'affrontements entre civilisations ?",
     "bad": [
      "En quelle année a eu lieu la première croisade ?",
      "Je vais parler d'abord des échanges, puis des conflits.",
      "La Méditerranée est une mer située entre trois continents."
     ],
     "err": [
      "confond problématique et question de cours",
      "confond problématique et annonce de plan",
      "confond problématique et affirmation"
     ]
    },
    {
     "id": "S19",
     "q": "La légende d'un croquis de géographie doit être",
     "ok": "organisée en parties titrées qui répondent au sujet",
     "bad": [
      "une liste de figurés, dans l'ordre où on les a dessinés",
      "rédigée en paragraphes, comme une rédaction",
      "remplacée par des noms écrits directement sur le croquis"
     ],
     "err": [
      "ne hiérarchise pas les informations",
      "confond légende et texte rédigé",
      "confond légende et nomenclature"
     ]
    },
    {
     "id": "S20",
     "q": "En histoire, « critiquer un document », c'est",
     "ok": "évaluer ce qu'il apporte et ses limites : point de vue de l'auteur, intentions, silences",
     "bad": [
      "dire du mal du document",
      "montrer que le document est faux",
      "donner son avis personnel sur le sujet"
     ],
     "err": [
      "prend « critiquer » au sens courant",
      "croit qu'un document critiqué est forcément faux",
      "confond analyse critique et opinion"
     ]
    }
   ],
   "redaction": "Lis ce témoignage imaginaire d'une agricultrice d'un delta d'Asie du Sud, 2024 : « Dans notre delta, la mer gagne chaque année sur les rizières. L'eau salée abîme les récoltes. Mon frère est parti travailler dans la capitale, comme beaucoup de jeunes du village. La digue promise par l'État n'est pas encore construite. »\n1. Présente le document en une phrase : nature, auteur, lieu, date.\n2. Relève le changement environnemental décrit et deux de ses effets.\n3. Rédige un paragraphe de huit à dix lignes qui répond à la question : en quoi ce témoignage montre-t-il qu'un changement de l'environnement transforme une société et ses mobilités ? Utilise le vocabulaire de la géographie.",
   "corrige": "Le document est un témoignage imaginaire d'une agricultrice, dans un delta d'Asie du Sud, en 2024. Le changement décrit est l'avancée de la mer sur les terres basses du delta, liée à la montée du niveau marin ; ses effets : salinisation des sols et baisse des récoltes, départ des jeunes vers la capitale. Paragraphe attendu : une idée directrice (un changement environnemental fragilise une société déjà vulnérable), une explication (les deltas sont des espaces bas, très peuplés et agricoles ; la perte de terres et de revenus pousse à partir), l'exemple tiré du texte (le frère parti en ville : migration interne des campagnes vers les villes), une nuance (la vulnérabilité dépend aussi des moyens de protection : la digue non construite montre le rôle des acteurs publics et des inégalités de développement). Vocabulaire valorisé : risque, aléa, vulnérabilité, migration, exode rural, adaptation, changement climatique."
  },
  "P": {
   "titre": "élève de première",
   "questions": [
    {
     "id": "P1",
     "q": "Quel classement va du plus ancien au plus récent ?",
     "ok": "démocratie athénienne, Empire romain, croisades, Renaissance",
     "bad": [
      "Empire romain, démocratie athénienne, croisades, Renaissance",
      "démocratie athénienne, Empire romain, Renaissance, croisades",
      "démocratie athénienne, croisades, Empire romain, Renaissance"
     ],
     "err": [
      "place l'Empire romain avant la démocratie athénienne",
      "place la Renaissance avant les croisades",
      "place les croisades dans l'Antiquité"
     ]
    },
    {
     "id": "P2",
     "q": "Dans le découpage classique des périodes, l'époque moderne s'étend",
     "ok": "de la fin du XVe siècle à la Révolution française",
     "bad": [
      "de la Révolution française à nos jours",
      "de la fin de l'Empire romain d'Occident à la fin du XVe siècle",
      "du début du XIXe siècle à 1914"
     ],
     "err": [
      "confond époque moderne et époque contemporaine",
      "confond époque moderne et Moyen Âge",
      "réduit la période au XIXe siècle"
     ]
    },
    {
     "id": "P3",
     "q": "À la fin du XVIIe siècle, quelle affirmation sur la France et l'Angleterre est exacte ?",
     "ok": "En Angleterre, le pouvoir du roi est limité par le Parlement, alors qu'en France la monarchie absolue s'affirme",
     "bad": [
      "Les deux royaumes sont des monarchies absolues",
      "La France est déjà une république, alors que l'Angleterre reste une monarchie",
      "En France, le pouvoir du roi est limité par un parlement élu, alors qu'en Angleterre la monarchie absolue s'affirme"
     ],
     "err": [
      "ignore l'évolution du modèle anglais après les révolutions du XVIIe siècle",
      "anachronisme : place la République au XVIIe siècle",
      "inverse les deux modèles"
     ]
    },
    {
     "id": "P4",
     "q": "Aux XVe et XVIe siècles, l'ouverture atlantique déplace peu à peu le centre de gravité des échanges européens",
     "ok": "de la Méditerranée vers la façade atlantique",
     "bad": [
      "de la façade atlantique vers la Méditerranée",
      "de l'Europe vers l'océan Pacifique",
      "de la mer du Nord vers la mer Noire"
     ],
     "err": [
      "inverse le sens du basculement",
      "anachronisme : applique au XVIe siècle un basculement actuel",
      "situe mal les espaces d'échanges de l'époque"
     ]
    },
    {
     "id": "P5",
     "q": "L'Afrique australe comprend notamment",
     "ok": "l'Afrique du Sud, la Namibie et le Botswana",
     "bad": [
      "le Maroc, l'Algérie et la Tunisie",
      "le Nigeria, le Ghana et le Sénégal",
      "l'Australie et la Nouvelle-Zélande"
     ],
     "err": [
      "confond Afrique australe et Maghreb",
      "confond Afrique australe et Afrique de l'Ouest",
      "confond « australe » et Australie"
     ]
    },
    {
     "id": "P6",
     "q": "Sur un planisphère des migrations internationales, que constate-t-on ?",
     "ok": "Une grande partie des migrations se fait entre pays voisins ou d'une même région, y compris entre pays du Sud",
     "bad": [
      "Presque toutes les migrations vont des pays pauvres vers les pays riches",
      "La majorité de la population mondiale vit hors de son pays de naissance",
      "Les migrations internationales se dirigent uniquement vers l'Europe"
     ],
     "err": [
      "représentation fausse d'un sens unique du Sud vers le Nord",
      "erreur d'ordre de grandeur : les migrants internationaux sont une petite minorité",
      "réduit un phénomène mondial à une seule destination"
     ]
    },
    {
     "id": "P7",
     "q": "À la Renaissance, l'humanisme est",
     "ok": "un mouvement intellectuel qui place l'être humain et le savoir au centre de la réflexion, en s'appuyant sur les textes antiques",
     "bad": [
      "un mouvement religieux qui rompt avec l'Église catholique",
      "une action de secours aux populations en détresse",
      "un courant du XVIIIe siècle qui critique la monarchie absolue"
     ],
     "err": [
      "confond humanisme et Réforme",
      "confond humanisme et humanitaire",
      "confond humanisme et Lumières"
     ]
    },
    {
     "id": "P8",
     "q": "La société d'ordres de l'Ancien Régime repose sur",
     "ok": "une inégalité de droits entre clergé, noblesse et tiers état, liée surtout à la naissance",
     "bad": [
      "des classes sociales définies seulement par la richesse",
      "l'égalité de tous devant la loi",
      "trois groupes dont les membres sont élus par la population"
     ],
     "err": [
      "confond ordre et classe sociale",
      "anachronisme : l'égalité devant la loi date de 1789",
      "anachronisme : applique l'élection à la société d'ordres"
     ]
    },
    {
     "id": "P9",
     "q": "En géographie, une « transition » (démographique, énergétique, environnementale) est",
     "ok": "une phase de changements profonds qui fait passer d'un état à un autre",
     "bad": [
      "une crise brutale et courte",
      "un retour à la situation d'autrefois",
      "un état stable, qui ne change plus"
     ],
     "err": [
      "confond transition et crise",
      "prend la transition pour un retour en arrière",
      "contresens : une transition est un changement"
     ]
    },
    {
     "id": "P10",
     "q": "Un risque naît de la rencontre entre un aléa et une société vulnérable. Lequel de ces éléments est un aléa ?",
     "ok": "un séisme",
     "bad": [
      "un quartier construit en zone inondable",
      "un plan d'évacuation",
      "le nombre de victimes d'une catastrophe"
     ],
     "err": [
      "confond aléa et vulnérabilité",
      "confond aléa et prévention",
      "confond aléa et bilan d'une catastrophe"
     ]
    },
    {
     "id": "P11",
     "q": "Tableau, pays imaginaire. En 1960 : natalité 45 pour mille, mortalité 25 pour mille. En 1990 : natalité 35 pour mille, mortalité 10 pour mille. En 2020 : natalité 15 pour mille, mortalité 7 pour mille. À quelle date l'accroissement naturel est-il le plus fort ?",
     "ok": "en 1990",
     "bad": [
      "en 1960",
      "en 2020",
      "il est le même aux trois dates"
     ],
     "err": [
      "regarde seulement la natalité",
      "regarde seulement la mortalité",
      "ne calcule pas la différence entre natalité et mortalité"
     ]
    },
    {
     "id": "P12",
     "q": "Extrait imaginaire d'un cahier de doléances de village, 1789 : « Nous demandons que les impôts soient payés par tous, nobles comme paysans, et que les droits que le seigneur prélève sur nos récoltes soient supprimés. » Que demandent ces villageois ?",
     "ok": "L'égalité devant l'impôt et la fin des droits seigneuriaux",
     "bad": [
      "La fin de la monarchie et la proclamation de la République",
      "Le maintien des privilèges de la noblesse",
      "Le droit de vote pour tous"
     ],
     "err": [
      "anachronisme : la République n'est pas demandée en 1789",
      "lecture inversée du texte",
      "plaque une revendication absente du texte"
     ]
    },
    {
     "id": "P13",
     "q": "Une carte du tourisme international représente les flux par des flèches dont l'épaisseur est proportionnelle au nombre de touristes. Les flèches les plus épaisses relient des pays d'Europe entre eux. Qu'en déduit-on ?",
     "ok": "Les flux touristiques les plus importants sont internes à l'Europe",
     "bad": [
      "Les Européens voyagent, mais l'Europe ne reçoit pas de touristes",
      "Les trajets les plus longs se font en Europe",
      "Tous les touristes du monde vont en Europe"
     ],
     "err": [
      "lit les flèches comme des départs sans arrivées",
      "confond épaisseur de la flèche et longueur du trajet",
      "généralise à tous les touristes du monde"
     ]
    },
    {
     "id": "P14",
     "q": "Document 1 : un édit royal de 1685 affirme que la plus grande partie des protestants du royaume de France se sont convertis au catholicisme. Document 2 : lettre imaginaire d'un artisan protestant, la même année, qui prépare en secret son départ pour la Hollande. Que montre la confrontation des deux documents ?",
     "ok": "Le texte officiel ne dit pas tout : des protestants refusent la conversion et choisissent l'exil",
     "bad": [
      "Le document 2 est forcément faux, puisqu'il contredit un texte officiel",
      "Les deux documents disent la même chose",
      "L'édit de 1685 accorde la liberté de culte aux protestants"
     ],
     "err": [
      "croit qu'un texte officiel dit forcément vrai",
      "ne confronte pas les deux documents",
      "confond l'édit de 1685, qui révoque, et l'édit de Nantes, qui accordait"
     ]
    },
    {
     "id": "P15",
     "q": "Laquelle de ces propositions est une conséquence de l'arrivée des Européens en Amérique à partir de 1492 ?",
     "ok": "L'effondrement démographique des populations amérindiennes, notamment à cause des épidémies",
     "bad": [
      "Les progrès de la navigation : caravelle, boussole, cartes",
      "La recherche d'une route maritime vers l'Asie",
      "La prise de Constantinople par les Ottomans en 1453"
     ],
     "err": [
      "confond cause et conséquence",
      "confond cause et conséquence, sur les motivations",
      "place un fait antérieur parmi les conséquences"
     ]
    },
    {
     "id": "P16",
     "q": "Quel lien de cause à effet est exact ?",
     "ok": "L'imprimerie favorise la diffusion des idées humanistes et des réformes religieuses",
     "bad": [
      "La Réforme protestante entraîne l'invention de l'imprimerie",
      "L'imprimerie fait disparaître aussitôt l'analphabétisme en Europe",
      "L'imprimerie permet l'invention de l'alphabet"
     ],
     "err": [
      "inverse la cause et l'effet",
      "exagère la vitesse et l'ampleur de l'effet",
      "anachronisme : l'alphabet existe depuis l'Antiquité"
     ]
    },
    {
     "id": "P17",
     "q": "Dans un pays, la mortalité baisse fortement alors que la natalité reste élevée. Quelle en est la conséquence ?",
     "ok": "Une forte croissance de la population",
     "bad": [
      "Un vieillissement rapide de la population",
      "Une baisse de la population",
      "Les progrès de la médecine et de l'hygiène"
     ],
     "err": [
      "confond deux moments de la transition démographique",
      "inverse l'effet",
      "donne une cause au lieu de la conséquence"
     ]
    },
    {
     "id": "P18",
     "q": "Sujet : « Comment le pouvoir royal s'affirme-t-il en France aux XVIe et XVIIe siècles ? » Quel plan répond le mieux à la question ?",
     "ok": "I. Le roi renforce son autorité. II. Les outils de ce pouvoir : administration, impôt, armée. III. Les limites et les résistances.",
     "bad": [
      "I. La vie de François Ier. II. La vie de Louis XIV.",
      "I. Le pouvoir royal au Moyen Âge. II. La Révolution française.",
      "I. Les avantages de la monarchie. II. Les inconvénients de la monarchie."
     ],
     "err": [
      "plan catalogue, par personnages",
      "hors sujet chronologique",
      "plan de jugement, qui ne répond pas à « comment »"
     ]
    },
    {
     "id": "P19",
     "q": "Tu dois réaliser un croquis sur les mobilités dans le monde. Quel choix de figurés est cohérent ?",
     "ok": "Des flèches d'épaisseurs différentes pour les flux, des plages de couleur pour les espaces de départ et d'accueil",
     "bad": [
      "Des points pour les flux, des flèches pour les villes",
      "Une seule couleur et un seul figuré pour toutes les informations",
      "Aucun figuré : des phrases écrites sur le fond de carte"
     ],
     "err": [
      "inverse figurés ponctuels et flèches",
      "ne hiérarchise pas et ne distingue pas les informations",
      "confond croquis et texte"
     ]
    },
    {
     "id": "P20",
     "q": "Dans une réponse à une question problématisée, la conclusion sert à",
     "ok": "répondre clairement à la question posée, en reprenant les idées essentielles",
     "bad": [
      "ajouter de nouveaux exemples détaillés",
      "annoncer le plan",
      "donner son opinion personnelle"
     ],
     "err": [
      "confond conclusion et développement",
      "confond conclusion et introduction",
      "confond bilan argumenté et opinion"
     ]
    }
   ],
   "redaction": "Sujet de question problématisée : « Pourquoi peut-on dire que les XVe et XVIe siècles ouvrent l'Europe sur le monde ? » Tu ne rédiges pas tout le devoir.\n1. Rédige l'introduction en cinq ou six lignes : présente le sujet, pose la question, annonce ton plan.\n2. Donne ton plan : le titre de chaque partie et, pour chacune, un exemple précis (daté et localisé).",
   "corrige": "Introduction attendue : les termes du sujet sont situés (XVe et XVIe siècles, passage du Moyen Âge à l'époque moderne ; Europe et autres parties du monde) ; la question est reprise ou reformulée (en quoi les voyages de découverte changent-ils la place de l'Europe et sa vision du monde ?) ; le plan est annoncé. Plan possible en deux ou trois parties : I. Des voyages qui élargissent le monde connu des Européens (Christophe Colomb atteint l'Amérique en 1492 ; Vasco de Gama rejoint l'Inde en 1498 ; l'expédition de Magellan fait le tour du monde de 1519 à 1522). II. La construction d'empires et de nouveaux circuits d'échanges (empires espagnol et portugais, partage de Tordesillas en 1494, métaux précieux d'Amérique, essor des ports atlantiques comme Séville et Lisbonne). III. Des conséquences majeures pour les sociétés (effondrement démographique des populations amérindiennes, développement de la traite et de l'esclavage, échanges de plantes et d'animaux entre les continents, nouvelle représentation du monde sur les cartes). Tout autre plan qui répond à « pourquoi » avec des exemples exacts est accepté."
  },
  "T": {
   "titre": "élève de terminale",
   "questions": [
    {
     "id": "T1",
     "q": "Quel classement de ces régimes politiques français va du plus ancien au plus récent ?",
     "ok": "Premier Empire, monarchie de Juillet, Deuxième République, Second Empire",
     "bad": [
      "monarchie de Juillet, Premier Empire, Deuxième République, Second Empire",
      "Premier Empire, Deuxième République, monarchie de Juillet, Second Empire",
      "Premier Empire, monarchie de Juillet, Second Empire, Deuxième République"
     ],
     "err": [
      "place la monarchie de Juillet avant le Premier Empire",
      "place la Deuxième République avant la monarchie de Juillet",
      "inverse Deuxième République et Second Empire"
     ]
    },
    {
     "id": "T2",
     "q": "Le suffrage universel masculin, repère majeur du programme de première, est adopté en France",
     "ok": "en 1848, par la Deuxième République",
     "bad": [
      "en 1789, avec la Déclaration des droits de l'homme et du citoyen",
      "en 1944, à la Libération",
      "en 1958, avec la Ve République"
     ],
     "err": [
      "confond proclamation de l'égalité des droits et droit de vote pour tous les hommes",
      "confond avec le droit de vote des femmes",
      "confond avec la fondation de la Ve République"
     ]
    },
    {
     "id": "T3",
     "q": "L'unité italienne et l'unité allemande s'achèvent",
     "ok": "autour de 1870-1871",
     "bad": [
      "au congrès de Vienne, en 1815",
      "avec les traités de paix de 1919",
      "pendant la Révolution française"
     ],
     "err": [
      "confond la réorganisation de l'Europe en 1815 et les unités nationales",
      "confond avec les États nés des traités de 1919",
      "anachronisme : place les unités au temps de la Révolution"
     ]
    },
    {
     "id": "T4",
     "q": "En 1914, à la veille de la Première Guerre mondiale, lequel de ces pays n'est pas un État indépendant ?",
     "ok": "la Pologne",
     "bad": [
      "l'Italie",
      "l'Allemagne",
      "la Serbie"
     ],
     "err": [
      "ignore que l'unité italienne est achevée",
      "ignore que l'Empire allemand existe depuis 1871",
      "confond la Serbie avec les nations sans État de 1914"
     ]
    },
    {
     "id": "T5",
     "q": "En Chine, les espaces les mieux intégrés à la mondialisation sont surtout situés",
     "ok": "sur le littoral, à l'est, avec ses grandes métropoles et ses ports",
     "bad": [
      "dans l'ouest intérieur, au Tibet et au Xinjiang",
      "le long de la frontière nord, face à la Mongolie",
      "partout, de façon uniforme"
     ],
     "err": [
      "inverse littoral et intérieur",
      "situe mal les espaces moteurs",
      "ignore les contrastes du territoire chinois"
     ]
    },
    {
     "id": "T6",
     "q": "Pendant la Première Guerre mondiale, le front de l'Ouest, stabilisé de la fin de 1914 à 1918, s'étend",
     "ok": "de la mer du Nord à la frontière suisse, à travers la Belgique et le nord-est de la France",
     "bad": [
      "le long du Rhin, en territoire allemand",
      "dans les Alpes, entre l'Italie et l'Autriche-Hongrie",
      "de la mer Baltique à la mer Noire"
     ],
     "err": [
      "croit que la guerre à l'ouest se déroule en Allemagne",
      "confond avec le front italien",
      "confond avec le front de l'Est"
     ]
    },
    {
     "id": "T7",
     "q": "Au XIXe siècle, le « principe des nationalités » affirme que",
     "ok": "tout peuple qui se reconnaît comme une nation a le droit de former son propre État",
     "bad": [
      "tout État puissant doit se constituer un empire colonial",
      "les souverains tiennent leur pouvoir de leur dynastie et de Dieu",
      "tous les habitants d'un empire doivent adopter la langue du souverain"
     ],
     "err": [
      "confond nationalisme et impérialisme colonial",
      "confond avec la légitimité dynastique, principe opposé",
      "confond droit des peuples et assimilation imposée"
     ]
    },
    {
     "id": "T8",
     "q": "Dans un régime parlementaire, comme la Troisième République,",
     "ok": "le gouvernement est responsable devant le Parlement, qui peut le renverser",
     "bad": [
      "le chef de l'État gouverne seul, sans rendre de comptes au Parlement",
      "le Parlement exerce aussi le pouvoir de juger",
      "les citoyens votent eux-mêmes toutes les lois"
     ],
     "err": [
      "confond régime parlementaire et pouvoir personnel",
      "ignore la séparation des pouvoirs",
      "confond démocratie représentative et démocratie directe"
     ]
    },
    {
     "id": "T9",
     "q": "La métropolisation désigne",
     "ok": "la concentration des populations, des activités et des fonctions de commandement dans les plus grandes villes",
     "bad": [
      "l'augmentation de la part de la population qui vit en ville",
      "l'étalement des villes sur les campagnes voisines",
      "le départ d'entreprises vers l'étranger"
     ],
     "err": [
      "confond métropolisation et urbanisation",
      "confond métropolisation et périurbanisation",
      "confond métropolisation et délocalisation"
     ]
    },
    {
     "id": "T10",
     "q": "Dire qu'un espace rural est « multifonctionnel » signifie",
     "ok": "qu'il accueille plusieurs fonctions : agricole, résidentielle, touristique, industrielle, environnementale",
     "bad": [
      "que ses agriculteurs y pratiquent plusieurs cultures",
      "qu'il est devenu une ville",
      "que l'agriculture en a disparu"
     ],
     "err": [
      "confond diversité des fonctions et diversité des cultures",
      "confond espace rural transformé et espace urbain",
      "contresens : la fonction agricole demeure"
     ]
    },
    {
     "id": "T11",
     "q": "Tableau, pays imaginaire : répartition de la population active. En 1850 : agriculture 60 %, industrie 25 %, services 15 %. En 1910 : agriculture 40 %, industrie 35 %, services 25 %. Quelle affirmation est exacte ?",
     "ok": "La part de l'agriculture recule, mais elle reste le premier secteur en 1910",
     "bad": [
      "L'industrie est devenue le premier secteur en 1910",
      "Le nombre d'agriculteurs a diminué d'un tiers",
      "La part des services recule"
     ],
     "err": [
      "lit une hausse comme un dépassement",
      "confond une part en pourcentage et un nombre de personnes",
      "lecture inversée"
     ]
    },
    {
     "id": "T12",
     "q": "Extrait imaginaire d'un discours de député républicain, 1882 : « L'école doit former des citoyens. Elle sera gratuite pour que tous y entrent, obligatoire pour que nul n'y échappe, laïque pour que chacun y soit respecté dans sa conscience. » Quel objectif politique ce discours poursuit-il ?",
     "ok": "Enraciner la République en formant des citoyens par l'école",
     "bad": [
      "Rétablir l'enseignement religieux dans l'école publique",
      "Réserver l'école à une élite",
      "Séparer les Églises et l'État"
     ],
     "err": [
      "contresens sur « laïque »",
      "contresens sur « gratuite » et « obligatoire »",
      "anticipe la loi de 1905 : confond laïcité de l'école et séparation"
     ]
    },
    {
     "id": "T13",
     "q": "Une carte de la France métropolitaine représente les aires urbaines par des cercles proportionnels à leur population et les lignes à grande vitesse par des traits. Presque tous les traits partent du plus gros cercle. Que met-elle en évidence ?",
     "ok": "Un réseau en étoile centré sur Paris, qui renforce le poids de la capitale",
     "bad": [
      "Un réseau qui relie de façon égale toutes les villes entre elles",
      "Le fait que Paris est la seule métropole française",
      "Le fait que le train à grande vitesse explique à lui seul la taille de Paris"
     ],
     "err": [
      "lecture inversée : confond réseau en étoile et réseau maillé",
      "fait dire à la carte plus qu'elle ne dit",
      "confond corrélation et cause"
     ]
    },
    {
     "id": "T14",
     "q": "Lettre imaginaire d'un instituteur alsacien, 1872 : « Depuis l'an dernier, on nous impose l'allemand à l'école. Beaucoup de familles ont choisi de partir pour rester françaises. » Quel événement explique cette situation ?",
     "ok": "L'annexion de l'Alsace-Moselle par l'Empire allemand, après la défaite française de 1871",
     "bad": [
      "L'occupation de la France par l'Allemagne nazie",
      "L'invasion du nord de la France pendant la Première Guerre mondiale",
      "Les décisions du congrès de Vienne"
     ],
     "err": [
      "confond 1871 et 1940",
      "confond 1871 et 1914",
      "confond avec les changements de frontières de 1815"
     ]
    },
    {
     "id": "T15",
     "q": "Laquelle de ces propositions est une cause profonde de la Première Guerre mondiale ?",
     "ok": "Les rivalités entre puissances européennes et le jeu des alliances opposées",
     "bad": [
      "Le traité de Versailles",
      "La révolution russe de 1917",
      "La crise économique de 1929"
     ],
     "err": [
      "confond cause et conséquence",
      "place parmi les causes un fait survenu pendant la guerre",
      "place un fait postérieur parmi les causes"
     ]
    },
    {
     "id": "T16",
     "q": "Quelle est une conséquence de la loi de séparation des Églises et de l'État, votée en 1905 ?",
     "ok": "La République ne reconnaît et ne finance plus aucun culte, et garantit la liberté de conscience",
     "bad": [
      "La pratique des religions est interdite en France",
      "Le catholicisme devient la religion de l'État",
      "Les lois scolaires de Jules Ferry sont votées"
     ],
     "err": [
      "confond séparation et interdiction",
      "inverse le sens de la loi",
      "place parmi les conséquences des lois antérieures"
     ]
    },
    {
     "id": "T17",
     "q": "Quel facteur explique le mieux l'essor des littoraux chinois depuis les années 1980 ?",
     "ok": "L'ouverture économique : zones économiques spéciales, investissements étrangers, ports tournés vers l'exportation",
     "bad": [
      "Les richesses minières, plus abondantes sur le littoral",
      "Le départ des habitants du littoral vers l'intérieur",
      "L'arrivée de millions de travailleurs venus des campagnes"
     ],
     "err": [
      "explique par la nature seule ce qui relève de choix politiques et économiques",
      "inverse le sens des migrations internes",
      "prend une conséquence pour la cause"
     ]
    },
    {
     "id": "T18",
     "q": "Sujet de question problématisée : « La Troisième République avant 1914 : un régime qui s'enracine ? » À quoi t'invite le point d'interrogation ?",
     "ok": "À discuter : montrer l'enracinement du régime, mais aussi ses limites et ses oppositions",
     "bad": [
      "À répondre oui, en ne développant que les réussites",
      "À raconter toute la période dans l'ordre, sans argumenter",
      "À donner ton opinion sur la République"
     ],
     "err": [
      "ignore la nuance demandée par le sujet",
      "confond argumenter et raconter",
      "confond argumentation et opinion"
     ]
    },
    {
     "id": "T19",
     "q": "Tu dois réaliser un croquis à partir d'un texte. Quelle est la première étape ?",
     "ok": "Relever dans le texte les informations à cartographier et les classer en parties de légende",
     "bad": [
      "Colorier tout le fond de carte",
      "Recopier les phrases du texte dans la légende",
      "Dessiner d'abord, et construire la légende si le temps le permet"
     ],
     "err": [
      "commence par le dessin, sans sélection des informations",
      "confond légende et texte recopié",
      "néglige la légende, qui porte le raisonnement"
     ]
    },
    {
     "id": "T20",
     "q": "Dans une réponse à une question problématisée, un paragraphe solide contient",
     "ok": "une idée directrice, une explication et un exemple précis, daté et localisé",
     "bad": [
      "plusieurs exemples à la suite, sans idée qui les relie",
      "une idée générale, sans aucun exemple",
      "un récit détaillé des événements, dans l'ordre"
     ],
     "err": [
      "catalogue d'exemples sans idée",
      "affirmation sans preuve",
      "confond argumenter et raconter"
     ]
    }
   ],
   "redaction": "Sujet de question problématisée : « Comment la Première Guerre mondiale bouleverse-t-elle les sociétés européennes ? » Tu ne rédiges pas tout le devoir.\n1. Rédige l'introduction en cinq ou six lignes : présente le sujet, pose la question, annonce ton plan.\n2. Donne ton plan : le titre de chaque partie et, pour chacune, un exemple précis (daté et localisé).",
   "corrige": "Introduction attendue : le sujet est situé (guerre de 1914 à 1918, pays européens engagés, soldats et civils) ; la question est reprise ou reformulée (en quoi cette guerre totale transforme-t-elle durablement les sociétés ?) ; le plan est annoncé. Plan possible : I. Des sociétés mobilisées par une guerre totale (mobilisation de millions de soldats, économie de guerre, travail des femmes dans les usines d'armement, propagande et censure). II. Des sociétés frappées par une violence de masse (guerre des tranchées, bataille de Verdun en 1916, près de dix millions de soldats tués, génocide des Arméniens dans l'Empire ottoman en 1915, mutilés, veuves et orphelins). III. Des sociétés durablement transformées après 1918 (deuil et monuments aux morts, anciens combattants, effondrement des empires allemand, austro-hongrois, russe et ottoman, révolution russe de 1917, nouvelles frontières fixées par les traités de 1919-1920). Tout autre plan qui répond à « comment » avec des exemples exacts est accepté."
  }
 },
 "domaines": [
  {
   "nom": "Repères dans le temps",
   "ids": {
    "B": [
     "B1",
     "B2",
     "B3"
    ],
    "C": [
     "C1",
     "C2",
     "C3"
    ],
    "S": [
     "S1",
     "S2",
     "S3"
    ],
    "P": [
     "P1",
     "P2",
     "P3"
    ],
    "T": [
     "T1",
     "T2",
     "T3"
    ]
   }
  },
  {
   "nom": "Repères dans l'espace",
   "ids": {
    "B": [
     "B4",
     "B5",
     "B6"
    ],
    "C": [
     "C4",
     "C5",
     "C6"
    ],
    "S": [
     "S4",
     "S5",
     "S6"
    ],
    "P": [
     "P4",
     "P5",
     "P6"
    ],
    "T": [
     "T4",
     "T5",
     "T6"
    ]
   }
  },
  {
   "nom": "Notions et vocabulaire",
   "ids": {
    "B": [
     "B7",
     "B8",
     "B9",
     "B10"
    ],
    "C": [
     "C7",
     "C8",
     "C9",
     "C10"
    ],
    "S": [
     "S7",
     "S8",
     "S9",
     "S10"
    ],
    "P": [
     "P7",
     "P8",
     "P9",
     "P10"
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
   "nom": "Lecture de documents",
   "ids": {
    "B": [
     "B11",
     "B12",
     "B13",
     "B14"
    ],
    "C": [
     "C11",
     "C12",
     "C13",
     "C14"
    ],
    "S": [
     "S11",
     "S12",
     "S13",
     "S14"
    ],
    "P": [
     "P11",
     "P12",
     "P13",
     "P14"
    ],
    "T": [
     "T11",
     "T12",
     "T13",
     "T14"
    ]
   }
  },
  {
   "nom": "Causes et conséquences",
   "ids": {
    "B": [
     "B15",
     "B16",
     "B17"
    ],
    "C": [
     "C15",
     "C16",
     "C17"
    ],
    "S": [
     "S15",
     "S16",
     "S17"
    ],
    "P": [
     "P15",
     "P16",
     "P17"
    ],
    "T": [
     "T15",
     "T16",
     "T17"
    ]
   }
  },
  {
   "nom": "Méthode",
   "ids": {
    "B": [
     "B18",
     "B19",
     "B20"
    ],
    "C": [
     "C18",
     "C19",
     "C20"
    ],
    "S": [
     "S18",
     "S19",
     "S20"
    ],
    "P": [
     "P18",
     "P19",
     "P20"
    ],
    "T": [
     "T18",
     "T19",
     "T20"
    ]
   }
  }
 ],
 "criteres": [
  "Se repérer",
  "Comprendre",
  "Mobiliser",
  "Raisonner",
  "Rédiger"
 ]
};
