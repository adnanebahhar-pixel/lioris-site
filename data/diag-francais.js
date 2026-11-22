window.DIAGS = window.DIAGS || {};
window.DIAGS["francais"] = {
 "cle": "francais",
 "matiere": "français",
 "titre": "Test de français",
 "nom": "Diagnostic de français",
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
  ],
  [
   "P",
   "Première"
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
  ]
 ],
 "duree": "35 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans dictionnaire.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-francais-college-lycee.md",
 "blocs": {
  "A": {
   "titre": "orthographe de base (commun)",
   "questions": [
    {
     "id": "A1",
     "q": "Complète : « Les voisins de mon oncle (…) chaque matin à sept heures. »",
     "ok": "partent",
     "bad": [
      "part",
      "partes",
      "partents"
     ],
     "err": [
      "accorde le verbe avec le nom le plus proche, « oncle », au lieu du sujet",
      "met au verbe le « s » du pluriel des noms",
      "cumule la marque du verbe et celle du nom"
     ]
    },
    {
     "id": "A2",
     "q": "Complète : « Hier, nous avons (…) tout le quartier à pied. »",
     "ok": "traversé",
     "bad": [
      "traverser",
      "traversés",
      "traversez"
     ],
     "err": [
      "ne distingue pas l'infinitif du participe passé",
      "accorde le participe avec le sujet malgré l'auxiliaire avoir",
      "confond avec la terminaison de la deuxième personne du pluriel"
     ]
    },
    {
     "id": "A3",
     "q": "Complète avec deux mots, dans l'ordre : « Mon frère (…) oublié son sac (…) la piscine. »",
     "ok": "a, puis à",
     "bad": [
      "à, puis a",
      "a, puis a",
      "à, puis à"
     ],
     "err": [
      "inverse le verbe avoir et la préposition",
      "ne connaît pas la préposition « à »",
      "ne reconnaît pas le verbe avoir"
     ]
    },
    {
     "id": "A4",
     "q": "Quelle phrase est bien écrite ?",
     "ok": "Elle a rangé ses vieilles chaussures noires.",
     "bad": [
      "Elle a rangé ses vieille chaussures noire.",
      "Elle a rangé ses vieilles chaussures noirs.",
      "Elle a rangé ses vieilles chaussure noires."
     ],
     "err": [
      "accorde les adjectifs en genre mais oublie le pluriel",
      "perd le genre du nom quand l'adjectif est placé après",
      "oublie le pluriel du nom lui-même"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "B": {
   "titre": "élève de sixième ou de cinquième",
   "questions": [
    {
     "id": "B1",
     "q": "« Au fond du jardin poussent de grands tournesols. » Quel est le sujet du verbe « poussent » ?",
     "ok": "de grands tournesols",
     "bad": [
      "le jardin",
      "au fond du jardin",
      "il n'y a pas de sujet"
     ],
     "err": [
      "prend pour sujet le nom placé juste avant le verbe",
      "croit que le premier groupe de la phrase est toujours le sujet",
      "croit qu'un sujet se trouve forcément avant le verbe"
     ]
    },
    {
     "id": "B2",
     "q": "« Ma sœur deviendra vétérinaire. » Quelle est la fonction du mot « vétérinaire » ?",
     "ok": "attribut du sujet",
     "bad": [
      "complément d'objet direct",
      "sujet",
      "complément circonstanciel"
     ],
     "err": [
      "pose la question « quoi ? » sans voir le verbe d'état",
      "confond le sujet et le mot qui le caractérise",
      "range dans les circonstanciels tout ce qui suit le verbe"
     ]
    },
    {
     "id": "B3",
     "q": "« Elle parle à son voisin. » Quelle est la fonction du groupe « à son voisin » ?",
     "ok": "complément d'objet indirect",
     "bad": [
      "complément d'objet direct",
      "complément circonstanciel de lieu",
      "attribut du sujet"
     ],
     "err": [
      "ne tient pas compte de la préposition",
      "associe la préposition « à » à l'idée de lieu",
      "confond verbe d'action et verbe d'état"
     ]
    },
    {
     "id": "B4",
     "q": "« Il court vite. » Quelle est la classe grammaticale du mot « vite » ?",
     "ok": "adverbe",
     "bad": [
      "adjectif",
      "verbe",
      "préposition"
     ],
     "err": [
      "confond le mot qui précise un verbe et celui qui précise un nom",
      "prend pour un verbe le mot qui porte l'idée d'action",
      "confond entre eux les mots invariables"
     ]
    },
    {
     "id": "B5",
     "q": "« Le chien aboie quand le facteur arrive. » Comment les deux propositions sont-elles reliées ?",
     "ok": "par « quand », conjonction de subordination",
     "bad": [
      "par « quand », conjonction de coordination",
      "par rien : elles sont juxtaposées",
      "par « quand », adverbe de temps"
     ],
     "err": [
      "confond coordination et subordination",
      "ne repère pas le mot qui relie les propositions",
      "s'arrête au sens du mot sans regarder son rôle dans la phrase"
     ]
    },
    {
     "id": "B6",
     "q": "Complète : « Les deux sœurs sont (…) tard. »",
     "ok": "rentrées",
     "bad": [
      "rentré",
      "rentrés",
      "rentrer"
     ],
     "err": [
      "laisse le participe invariable comme avec avoir",
      "accorde en nombre mais pas en genre",
      "ne distingue pas l'infinitif du participe passé"
     ]
    },
    {
     "id": "B7",
     "q": "Complète : « Ces pommes, je les ai (…) ce matin. »",
     "ok": "cueillies",
     "bad": [
      "cueilli",
      "cueillis",
      "cueillie"
     ],
     "err": [
      "n'accorde jamais le participe avec avoir, même quand le COD est placé avant",
      "accorde en nombre mais pas en genre",
      "accorde en genre mais oublie le pluriel"
     ]
    },
    {
     "id": "B8",
     "q": "Complète : « Mon frère (…) blessé au genou. »",
     "ok": "s'est",
     "bad": [
      "c'est",
      "ses",
      "sait"
     ],
     "err": [
      "confond le pronom « se » et le démonstratif « ce »",
      "confond avec le déterminant possessif",
      "écrit ce qu'il entend et choisit le verbe savoir"
     ]
    },
    {
     "id": "B9",
     "q": "Quelle est la forme du verbe « prendre » au passé simple, à la troisième personne du singulier ?",
     "ok": "il prit",
     "bad": [
      "il prena",
      "il prenait",
      "il prît"
     ],
     "err": [
      "applique au verbe la terminaison du premier groupe",
      "confond passé simple et imparfait",
      "confond avec le subjonctif imparfait, qui porte un accent circonflexe"
     ]
    },
    {
     "id": "B10",
     "q": "Complète avec le verbe « ranger » à l'impératif : « (…) ta chambre avant de sortir. »",
     "ok": "Range",
     "bad": [
      "Ranges",
      "Ranger",
      "Rangé"
     ],
     "err": [
      "ajoute le « s » de la deuxième personne du présent",
      "met l'infinitif à la place de l'impératif",
      "met le participe passé à la place de l'impératif"
     ]
    },
    {
     "id": "B11",
     "q": "Complète : « Si j'avais le temps, je (…) avec toi. »",
     "ok": "viendrais",
     "bad": [
      "viendrai",
      "venais",
      "viendrait"
     ],
     "err": [
      "confond le futur et le conditionnel",
      "répète l'imparfait de la proposition en « si »",
      "choisit le bon temps mais se trompe de personne"
     ]
    },
    {
     "id": "B12",
     "q": "Quel mot appartient à la famille du mot « terre » ?",
     "ok": "atterrir",
     "bad": [
      "terrible",
      "sol",
      "planète"
     ],
     "err": [
      "se fie aux premières lettres sans vérifier le sens",
      "confond famille de mots et synonyme",
      "confond famille de mots et champ lexical"
     ]
    },
    {
     "id": "B13",
     "q": "« Ce problème est simple. » Quel mot peut remplacer « simple » sans changer le sens de la phrase ?",
     "ok": "facile",
     "bad": [
      "modeste",
      "compliqué",
      "simplement"
     ],
     "err": [
      "prend un autre sens du mot, celui de « une personne simple »",
      "confond synonyme et contraire",
      "confond synonyme et mot de la même famille"
     ]
    },
    {
     "id": "B14",
     "q": "« Il a un cœur de pierre. » Que veut dire cette expression ?",
     "ok": "il est insensible",
     "bad": [
      "son cœur est malade",
      "il est très courageux",
      "il est très résistant"
     ],
     "err": [
      "lit l'expression au sens propre",
      "confond avec une autre expression, « un cœur de lion »",
      "reporte sur la personne la solidité de la pierre"
     ]
    },
    {
     "id": "B15",
     "q": "« Elle regarda sa montre, puis le panneau d'affichage : aucune sortie n'était annoncée. » Que cherche Lina sur le panneau ?",
     "ok": "si sa classe est partie en sortie",
     "bad": [
      "l'heure qu'il est",
      "la salle de son prochain cours",
      "si une fête est prévue pour elle"
     ],
     "err": [
      "attribue au panneau l'information donnée par la montre",
      "invente une information absente du texte",
      "anticipe la fin du récit"
     ]
    },
    {
     "id": "B16",
     "q": "La cour est vide et aucune sortie n'est annoncée. « Son cœur se mit à battre plus vite. » À ce moment du récit, Lina est",
     "ok": "inquiète de ne voir personne",
     "bad": [
      "essoufflée d'avoir couru",
      "joyeuse à cause de la surprise",
      "en colère contre ses camarades"
     ],
     "err": [
      "prend l'expression pour un simple fait physique",
      "anticipe la fin du récit au lieu de suivre son ordre",
      "prête au personnage un sentiment qu'aucun indice n'appuie"
     ]
    },
    {
     "id": "B17",
     "q": "La cour était silencieuse. Puis : « Elle poussa la porte et sourit : toute la classe l'y attendait, serrée autour d'un gâteau. » Que comprend le lecteur ?",
     "ok": "la classe a préparé une surprise à Lina",
     "bad": [
      "la classe prend son goûter comme tous les jours",
      "Lina est arrivée en retard au cours de sport",
      "Lina a apporté un gâteau pour la classe"
     ],
     "err": [
      "ne relie pas l'attente de la classe au silence du début",
      "comprend « attendait » comme la marque d'un retard",
      "inverse celui qui agit et celui qui reçoit"
     ]
    }
   ],
   "redaction": "Lina arrive au collège : la cour est vide. Elle entend un rire dans le gymnase, pousse la porte et découvre toute sa classe réunie autour d'un gâteau. Raconte la suite en 6 à 8 lignes. Écris à la troisième personne et au passé : passé simple pour les actions, imparfait pour les descriptions. Fais parler au moins un personnage, avec des guillemets. Relis-toi : accords et ponctuation.",
   "corrige": "il n'y a pas une seule bonne réponse. Exemple : « Lina resta sur le seuil, la main sur la poignée. Tous ses camarades la regardaient en souriant. \"Bon anniversaire, Lina\", lança Inès en lui tendant une part de gâteau. Lina sentit ses joues rougir. Elle chercha ses mots, n'en trouva aucun et finit par éclater de rire. Le professeur de sport, qui tenait encore les bougies, lui fit signe d'approcher. » Ce qu'on attend : la suite respecte la situation de départ, le récit reste à la troisième personne, le passé simple porte les actions et l'imparfait les descriptions, une réplique est correctement ponctuée.",
   "texte": "Ce matin-là, Lina trouva la cour du collège étrangement silencieuse. Les bancs étaient vides et le portail grinçait sous le vent. Elle regarda sa montre, puis le panneau d'affichage : aucune sortie n'était annoncée. Son cœur se mit à battre plus vite. Soudain, un éclat de rire monta du gymnase. Elle poussa la porte et sourit : toute la classe l'y attendait, serrée autour d'un gâteau.",
   "texte_ids": null
  },
  "C": {
   "titre": "élève de quatrième ou de troisième",
   "questions": [
    {
     "id": "C1",
     "q": "« Le livre que tu m'as prêté est passionnant. » La proposition « que tu m'as prêté » est",
     "ok": "une subordonnée relative, qui complète le nom « livre »",
     "bad": [
      "une subordonnée conjonctive, complément d'objet du verbe",
      "une proposition indépendante coordonnée",
      "une subordonnée circonstancielle"
     ],
     "err": [
      "confond le pronom relatif « que » et la conjonction « que »",
      "ne repère pas la subordination",
      "range toute subordonnée dans les circonstancielles"
     ]
    },
    {
     "id": "C2",
     "q": "« Il pleuvait si fort que le match a été reporté. » La proposition « que le match a été reporté » exprime",
     "ok": "la conséquence",
     "bad": [
      "la cause",
      "le but",
      "la condition"
     ],
     "err": [
      "inverse la cause et la conséquence",
      "confond la conséquence et le but, qui est un résultat voulu",
      "lit « si » comme le « si » de l'hypothèse"
     ]
    },
    {
     "id": "C3",
     "q": "« Le pont a été construit par les Romains. » Quelle phrase dit la même chose à la voix active, au même temps ?",
     "ok": "Les Romains ont construit le pont.",
     "bad": [
      "Les Romains construisent le pont.",
      "Les Romains avaient construit le pont.",
      "Le pont a construit les Romains."
     ],
     "err": [
      "ne conserve pas le temps du verbe",
      "prend le passé composé passif pour un plus-que-parfait, à cause des deux auxiliaires",
      "garde l'ordre des groupes et ne change que le verbe"
     ]
    },
    {
     "id": "C4",
     "q": "Lundi dernier, il a dit : « Je viendrai demain. » Quelle phrase rapporte correctement ses paroles au discours indirect ?",
     "ok": "Lundi dernier, il a dit qu'il viendrait le lendemain.",
     "bad": [
      "Lundi dernier, il a dit qu'il viendra demain.",
      "Lundi dernier, il a dit que je viendrai le lendemain.",
      "Lundi dernier, il a dit qu'il viendrait demain."
     ],
     "err": [
      "ne change ni le temps ni l'indicateur de temps",
      "ne change pas la personne",
      "change le temps mais oublie l'indicateur de temps"
     ]
    },
    {
     "id": "C5",
     "q": "Quelle phrase est bien écrite ?",
     "ok": "Je leur ai rendu leurs cahiers.",
     "bad": [
      "Je leurs ai rendu leurs cahiers.",
      "Je leur ai rendu leur cahiers.",
      "Je leurs ai rendu leur cahiers."
     ],
     "err": [
      "met un « s » au pronom placé devant le verbe",
      "n'accorde pas le déterminant avec le nom au pluriel",
      "cumule les deux erreurs : inverse le pronom et le déterminant"
     ]
    },
    {
     "id": "C6",
     "q": "Complète : « Les photos qu'elle a (…) sont floues. »",
     "ok": "prises",
     "bad": [
      "pris",
      "prise",
      "prisent"
     ],
     "err": [
      "n'accorde pas le participe avec le COD placé avant",
      "accorde le participe avec le sujet « elle »",
      "confond le participe passé et un verbe conjugué au pluriel"
     ]
    },
    {
     "id": "C7",
     "q": "Complète : « Il faut que tu (…) tes devoirs avant ce soir. »",
     "ok": "fasses",
     "bad": [
      "fais",
      "faisses",
      "feras"
     ],
     "err": [
      "met l'indicatif après « il faut que »",
      "fabrique le subjonctif sur le radical du présent",
      "met le futur parce que l'action est à venir"
     ]
    },
    {
     "id": "C8",
     "q": "Complète avec le verbe « voir » au passé simple : « Ils (…) la mer pour la première fois. »",
     "ok": "virent",
     "bad": [
      "voyèrent",
      "vurent",
      "voyaient"
     ],
     "err": [
      "applique au verbe la terminaison du premier groupe",
      "aligne le verbe sur les passés simples en « u »",
      "confond passé simple et imparfait"
     ]
    },
    {
     "id": "C9",
     "q": "Complète : « Quand elle arriva sur le quai, le train (…) depuis dix minutes. »",
     "ok": "était parti",
     "bad": [
      "partit",
      "est parti",
      "partait"
     ],
     "err": [
      "ne marque pas que le départ a eu lieu avant l'arrivée",
      "mélange le passé composé avec un récit au passé simple",
      "choisit un temps de l'action en cours, impossible avec « depuis dix minutes »"
     ]
    },
    {
     "id": "C10",
     "q": "Dans « chronomètre » et « chronologie », que signifie l'élément « chrono » ?",
     "ok": "le temps",
     "bad": [
      "la mesure",
      "la vitesse",
      "l'ordre"
     ],
     "err": [
      "attribue à « chrono » le sens de « mètre »",
      "se fie à l'usage de l'objet, les courses",
      "déduit le sens d'un seul des deux mots"
     ]
    },
    {
     "id": "C11",
     "q": "Quel mot est formé avec un préfixe qui exprime le contraire ?",
     "ok": "illisible",
     "bad": [
      "illustrer",
      "relire",
      "lisible"
     ],
     "err": [
      "se fie aux lettres « il » sans vérifier qu'il existe un mot de base",
      "confond les préfixes : « re » marque la répétition",
      "confond préfixe et suffixe"
     ]
    },
    {
     "id": "C12",
     "q": "Quelle série classe les mots du plus faible au plus fort ?",
     "ok": "inquiet, effrayé, terrifié",
     "bad": [
      "terrifié, effrayé, inquiet",
      "effrayé, inquiet, terrifié",
      "inquiet, terrifié, effrayé"
     ],
     "err": [
      "inverse le sens du classement",
      "ne perçoit pas l'écart entre « inquiet » et « effrayé »",
      "perçoit le mot le plus faible mais pas le plus fort"
     ]
    },
    {
     "id": "C13",
     "q": "« La vieille maison nous attendait (…), tassée sous son toit comme une bête frileuse. » Quelle figure de style reconnais-tu dans « comme une bête frileuse » ?",
     "ok": "une comparaison",
     "bad": [
      "une métaphore",
      "une personnification",
      "une hyperbole"
     ],
     "err": [
      "ne tient pas compte de l'outil de comparaison « comme »",
      "appelle personnification toute image appliquée à un objet",
      "confond image et exagération"
     ]
    },
    {
     "id": "C14",
     "q": "« Mon cousin riait trop fort ; moi, je comptais les marches du perron. » Qui raconte cette histoire ?",
     "ok": "un narrateur qui est un personnage de l'histoire et dit « je »",
     "bad": [
      "un narrateur extérieur à l'histoire",
      "le cousin",
      "l'auteur, qui raconte forcément sa propre vie"
     ],
     "err": [
      "ne repère pas les marques de la première personne",
      "confond le narrateur et le personnage dont il parle",
      "confond l'auteur et le narrateur"
     ]
    },
    {
     "id": "C15",
     "q": "« Je comptais les marches du perron pour ne pas regarder les fenêtres noires. » Pourquoi le narrateur compte-t-il les marches ?",
     "ok": "pour éviter de regarder ce qui lui fait peur",
     "bad": [
      "pour savoir combien le perron a de marches",
      "pour gagner un pari contre son cousin",
      "parce qu'il fait trop sombre pour voir les fenêtres"
     ],
     "err": [
      "lit la phrase au premier degré et ignore « pour ne pas regarder »",
      "invente une raison absente du texte",
      "prend « fenêtres noires » pour une explication matérielle"
     ]
    },
    {
     "id": "C16",
     "q": "« Je répondis que mes lacets étaient défaits. Ils ne l'étaient pas. » Que comprend le lecteur ?",
     "ok": "le narrateur a peur et invente un prétexte pour ne pas entrer",
     "bad": [
      "le narrateur vient de refaire ses lacets",
      "le narrateur prépare une blague pour son cousin",
      "le cousin a menti au narrateur"
     ],
     "err": [
      "ne voit pas le mensonge : lit les deux phrases comme une suite d'actions",
      "prête au narrateur une intention qu'aucun indice n'appuie",
      "se trompe sur celui qui parle"
     ]
    },
    {
     "id": "C17",
     "q": "« Il faut lire tous les jours, car la lecture enrichit le vocabulaire : un élève qui lit chaque soir croise des mots qu'il n'entend jamais à l'oral. » Dans cette phrase, « la lecture enrichit le vocabulaire » est",
     "ok": "l'argument",
     "bad": [
      "la thèse",
      "l'exemple",
      "une objection"
     ],
     "err": [
      "confond l'opinion défendue et la raison qui la soutient",
      "confond la raison générale et le cas concret",
      "ne voit pas que l'idée va dans le sens de la thèse"
     ]
    },
    {
     "id": "C18",
     "q": "Complète avec le mot de liaison qui convient : « Ce film dure trois heures ; (…), on ne s'ennuie pas une seconde. »",
     "ok": "pourtant",
     "bad": [
      "donc",
      "car",
      "de plus"
     ],
     "err": [
      "confond opposition et conséquence",
      "confond opposition et cause",
      "confond opposition et addition"
     ]
    }
   ],
   "redaction": "Relis ce texte : « La vieille maison nous attendait au bout du chemin, tassée sous son toit comme une bête frileuse. Les volets claquaient, et le vent poussait une plainte que personne n'avait envie d'écouter. Mon cousin riait trop fort ; moi, je comptais les marches du perron pour ne pas regarder les fenêtres noires. \"Tu viens ?\" dit-il. Je répondis que mes lacets étaient défaits. Ils ne l'étaient pas. » Le narrateur n'écrit jamais qu'il a peur. Explique en 6 à 8 lignes comment le texte le fait pourtant comprendre. Cite au moins deux passages entre guillemets et explique ce que chacun montre.",
   "corrige": "plusieurs réponses sont possibles. Éléments attendus : le décor est inquiétant (« les volets claquaient », le vent qui pousse « une plainte », les « fenêtres noires ») ; le narrateur évite de regarder la maison (« pour ne pas regarder ») ; il invente une excuse pour retarder le moment d'entrer (« mes lacets étaient défaits »), et la dernière phrase, très courte, révèle le mensonge (« Ils ne l'étaient pas »). Une bonne réponse annonce l'idée, cite deux passages exacts, explique chacun avec ses propres mots et termine par une phrase de bilan. Une réponse qui raconte le texte sans rien expliquer ne suffit pas.",
   "texte": "La vieille maison nous attendait au bout du chemin, tassée sous son toit comme une bête frileuse. Les volets claquaient, et le vent poussait une plainte que personne n'avait envie d'écouter. Mon cousin riait trop fort ; moi, je comptais les marches du perron pour ne pas regarder les fenêtres noires. « Tu viens ? » dit-il. Je répondis que mes lacets étaient défaits. Ils ne l'étaient pas.",
   "texte_ids": null
  },
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "Complète : « C'est un roman (…) je me souviens très bien. »",
     "ok": "dont",
     "bad": [
      "que",
      "où",
      "qui"
     ],
     "err": [
      "ignore la construction « se souvenir de »",
      "emploie « où » comme un relatif passe-partout",
      "choisit le relatif sujet alors que le verbe a déjà son sujet"
     ]
    },
    {
     "id": "S2",
     "q": "« Je pense que le livre que tu lis est trop long. » Le premier « que » est",
     "ok": "une conjonction de subordination, qui introduit une complétive",
     "bad": [
      "un pronom relatif, qui reprend un nom",
      "un adverbe, comme dans « ne… que »",
      "un pronom interrogatif, comme dans « que lis-tu ? »"
     ],
     "err": [
      "confond la conjonction et le pronom relatif, qui est le second « que »",
      "rapproche la phrase de la tournure « ne… que »",
      "rapproche la phrase d'une question"
     ]
    },
    {
     "id": "S3",
     "q": "« Quand le rideau se leva, la salle, qui bavardait encore, se tut. » Combien cette phrase compte-t-elle de propositions ?",
     "ok": "trois",
     "bad": [
      "deux",
      "une",
      "quatre"
     ],
     "err": [
      "ne voit pas la relative placée au milieu de la principale",
      "croit qu'une phrase vaut une proposition",
      "compte les groupes séparés par des virgules au lieu des verbes conjugués"
     ]
    },
    {
     "id": "S4",
     "q": "« La raison du plus fort est toujours la meilleure. » (La Fontaine) Quelle est la valeur du présent dans ce vers ?",
     "ok": "un présent de vérité générale",
     "bad": [
      "un présent de narration",
      "un présent d'énonciation, limité au moment où l'on parle",
      "un présent d'habitude"
     ],
     "err": [
      "se fie au genre du texte, une fable qui raconte",
      "ne connaît que la valeur de base du présent",
      "se fie au mot « toujours » sans voir la portée générale de la phrase"
     ]
    },
    {
     "id": "S5",
     "q": "Complète : « Il affirmait qu'il (…) son travail la veille. »",
     "ok": "avait fini",
     "bad": [
      "a fini",
      "finissait",
      "finirait"
     ],
     "err": [
      "ne décale pas le temps après un verbe principal au passé",
      "marque la simultanéité au lieu de l'antériorité",
      "marque une action à venir, ce que « la veille » interdit"
     ]
    },
    {
     "id": "S6",
     "q": "« Selon un témoin, le conducteur aurait pris la fuite. » Ici, le conditionnel exprime",
     "ok": "une information qui n'est pas confirmée",
     "bad": [
      "un futur vu depuis le passé",
      "une condition qui ne s'est pas réalisée",
      "un regret ou un reproche"
     ],
     "err": [
      "ne connaît que le conditionnel du discours rapporté",
      "cherche un « si » qui n'existe pas dans la phrase",
      "confond avec la valeur du conditionnel dans « tu aurais pu »"
     ]
    },
    {
     "id": "S7",
     "q": "Complète : « Bien qu'il (…) malade, il est venu. »",
     "ok": "soit",
     "bad": [
      "est",
      "serait",
      "soie"
     ],
     "err": [
      "met l'indicatif après « bien que »",
      "confond concession et hypothèse",
      "connaît le mode mais pas la forme écrite du verbe être"
     ]
    },
    {
     "id": "S8",
     "q": "Complète : « Si tu (…) venu, tu aurais compris. »",
     "ok": "étais",
     "bad": [
      "serais",
      "es",
      "sois"
     ],
     "err": [
      "met le conditionnel après « si »",
      "ne marque pas que le fait est irréel et passé",
      "met le subjonctif après « si »"
     ]
    },
    {
     "id": "S9",
     "q": "Complète : « Les consignes que le professeur nous (…) étaient claires. »",
     "ok": "donnait",
     "bad": [
      "donnaient",
      "donnions",
      "donné"
     ],
     "err": [
      "accorde le verbe avec « consignes », antécédent du pronom relatif complément",
      "accorde le verbe avec « nous », pronom complément placé devant lui",
      "confond le verbe conjugué et le participe passé"
     ]
    },
    {
     "id": "S10",
     "q": "Complète : « (…) par la pluie, les spectatrices ont quitté le stade. »",
     "ok": "Trempées",
     "bad": [
      "Trempé",
      "Trempée",
      "Trempés"
     ],
     "err": [
      "laisse le participe invariable quand il est détaché en tête de phrase",
      "accorde avec le nom le plus proche, « la pluie »",
      "met le masculin par défaut"
     ]
    },
    {
     "id": "S11",
     "q": "Les mots « vague », « écume », « marée » et « rivage » forment",
     "ok": "un champ lexical",
     "bad": [
      "une famille de mots",
      "une série de synonymes",
      "un champ sémantique"
     ],
     "err": [
      "confond thème commun et radical commun",
      "confond même thème et même sens",
      "confond les mots d'un thème et les différents sens d'un seul mot"
     ]
    },
    {
     "id": "S12",
     "q": "Un personnage « misanthrope » est un personnage",
     "ok": "qui n'aime pas le genre humain",
     "bad": [
      "qui n'aime pas les femmes",
      "qui aime et aide les autres",
      "qui vit dans la misère"
     ],
     "err": [
      "confond avec « misogyne »",
      "confond avec « philanthrope », son contraire",
      "rapproche le mot de « misère »"
     ]
    },
    {
     "id": "S13",
     "q": "« Demain, dès l'aube, à l'heure où blanchit la campagne » (Victor Hugo) Combien ce vers compte-t-il de syllabes ?",
     "ok": "douze : c'est un alexandrin",
     "bad": [
      "quinze",
      "treize",
      "dix : c'est un décasyllabe"
     ],
     "err": [
      "prononce tous les « e », même ceux qui s'élident ou terminent le vers",
      "compte le « e » final de « campagne »",
      "compte à l'oreille, sans découper les syllabes"
     ]
    },
    {
     "id": "S14",
     "q": "« Cette obscure clarté qui tombe des étoiles » (Corneille) Quelle figure de style reconnais-tu dans « obscure clarté » ?",
     "ok": "un oxymore",
     "bad": [
      "une antithèse",
      "une métaphore",
      "un pléonasme"
     ],
     "err": [
      "voit l'opposition mais pas que les deux mots sont soudés dans un même groupe",
      "appelle métaphore toute expression imagée",
      "confond deux mots opposés et deux mots qui se répètent"
     ]
    },
    {
     "id": "S15",
     "q": "« Paul poussa la porte. Qui était cet homme assis à sa place ? Il ne l'avait jamais vu, il en était sûr. » Quel est le point de vue adopté ?",
     "ok": "interne : le lecteur ne sait que ce que Paul perçoit et pense",
     "bad": [
      "externe : le lecteur voit la scène du dehors",
      "omniscient : le narrateur sait tout de tous les personnages",
      "celui d'un narrateur personnage, qui dit « je »"
     ],
     "err": [
      "croit que la troisième personne interdit l'accès aux pensées",
      "croit que connaître les pensées d'un seul personnage suffit à l'omniscience",
      "confond le point de vue interne et le récit à la première personne"
     ]
    },
    {
     "id": "S16",
     "q": "« On répète que les écrans ont tué la lecture. C'est aller un peu vite. (…) Certes, cette lecture est brève et morcelée (…). Mais accuser l'écran, c'est se tromper de cible. Le vrai problème n'est pas l'outil : c'est le temps que nous acceptons encore de donner à un seul texte. » Quelle est la thèse de l'auteur ?",
     "ok": "le problème n'est pas l'écran, mais le temps accordé à un même texte",
     "bad": [
      "les écrans ont tué la lecture",
      "la lecture sur écran est brève et morcelée",
      "les adolescents lisent plus de romans qu'autrefois"
     ],
     "err": [
      "prend l'idée combattue pour l'idée défendue",
      "prend la concession pour la thèse",
      "déforme un argument et lui fait dire plus que le texte"
     ]
    },
    {
     "id": "S17",
     "q": "« Certes, cette lecture est brève et morcelée (…). Mais accuser l'écran, c'est se tromper de cible. » À quoi sert le mouvement « Certes… Mais… » ?",
     "ok": "à reconnaître un point à l'adversaire avant de maintenir sa position",
     "bad": [
      "à changer d'avis au milieu du texte",
      "à ajouter un second argument qui va dans le même sens",
      "à illustrer l'idée par un exemple"
     ],
     "err": [
      "prend la concession pour un revirement",
      "confond concession et addition",
      "confond concession et exemple"
     ]
    },
    {
     "id": "S18",
     "q": "Tu dois contracter ce passage : « On répète que les écrans ont tué la lecture. C'est aller un peu vite. » Quelle reformulation respecte les règles de la contraction de texte ?",
     "ok": "L'idée répandue selon laquelle les écrans auraient détruit la lecture est hâtive.",
     "bad": [
      "L'auteur pense qu'on a tort de répéter que les écrans ont tué la lecture.",
      "« Les écrans ont tué la lecture » : c'est aller un peu vite.",
      "Les écrans ont tué la lecture, et cela s'est fait très vite."
     ],
     "err": [
      "ne garde pas l'énonciation du texte : écrit « l'auteur pense »",
      "recopie le texte au lieu de le reformuler",
      "fait un contresens sur « aller un peu vite »"
     ]
    }
   ],
   "redaction": "Un auteur écrit : « Le vrai problème n'est pas l'outil : c'est le temps que nous acceptons encore de donner à un seul texte. » Es-tu d'accord ? Réponds en un seul paragraphe de 10 lignes environ. Ton paragraphe doit contenir : une idée clairement annoncée, un argument qui l'explique, un exemple précis (une lecture, un film, une expérience) que tu commentes, une phrase de bilan. Tu peux être d'accord, pas d'accord, ou nuancer.",
   "corrige": "aucune position n'est imposée. Exemple de paragraphe : « Le temps que l'on accorde à un texte compte plus que le support sur lequel on le lit. Lire demande en effet une attention continue : une intrigue ou un raisonnement ne se comprennent que si l'on garde en tête ce qui précède. Un roman policier lu sur une liseuse pendant une heure reste ainsi parfaitement clair, alors que le même roman, sur papier, devient confus si l'on s'interrompt toutes les deux pages pour répondre à un message. Ce n'est donc pas l'écran qui abîme la lecture, mais l'habitude de la couper. » Ce qu'on attend : une idée annoncée dès la première phrase, un argument qui explique et ne répète pas, un exemple précis et commenté, des liens logiques, une phrase de bilan. Un paragraphe qui donne trois avis sans en développer aucun ne suffit pas.",
   "texte": "On répète que les écrans ont tué la lecture. C'est aller un peu vite. Les adolescents lisent et écrivent toute la journée : messages, forums, sous-titres, tout passe par les mots. Certes, cette lecture est brève et morcelée ; elle n'apprend pas la patience que réclame un roman. Mais accuser l'écran, c'est se tromper de cible. Le vrai problème n'est pas l'outil : c'est le temps que nous acceptons encore de donner à un seul texte.",
   "texte_ids": null
  },
  "P": {
   "titre": "élève de première",
   "questions": [
    {
     "id": "P1",
     "q": "« Il n'a lu que la première page. » Comment analyses-tu « ne… que » ?",
     "ok": "c'est une restriction : la phrase signifie « il a lu seulement la première page »",
     "bad": [
      "c'est une négation totale : il n'a rien lu",
      "c'est une négation partielle, comme avec « rien » ou « jamais »",
      "c'est un « ne » explétif, que l'on peut supprimer"
     ],
     "err": [
      "voit « ne » et conclut que toute la phrase est niée",
      "confond restriction et négation partielle",
      "confond avec le « ne » employé seul après « craindre » ou « avant que »"
     ]
    },
    {
     "id": "P2",
     "q": "« Je me demande si elle viendra. » La proposition « si elle viendra » est",
     "ok": "une interrogative indirecte totale",
     "bad": [
      "une subordonnée circonstancielle de condition",
      "une interrogation directe totale",
      "une interrogative indirecte partielle"
     ],
     "err": [
      "se fie au mot « si » sans regarder le verbe « se demander »",
      "ne distingue pas interrogation directe et indirecte",
      "confond interrogation totale, réponse par oui ou non, et partielle"
     ]
    },
    {
     "id": "P3",
     "q": "Transforme la question « Où vas-tu ? » en interrogation indirecte. Quelle phrase est correcte ?",
     "ok": "Dis-moi où tu vas.",
     "bad": [
      "Dis-moi où vas-tu.",
      "Dis-moi où est-ce que tu vas.",
      "Dis-moi où tu vas ?"
     ],
     "err": [
      "garde l'inversion du sujet de la question directe",
      "garde « est-ce que », réservé à la question directe",
      "garde le point d'interrogation de la question directe"
     ]
    },
    {
     "id": "P4",
     "q": "« Bien qu'elle eût son billet, elle ne monta pas dans le train. » La subordonnée exprime",
     "ok": "la concession",
     "bad": [
      "la cause",
      "la condition",
      "le but"
     ],
     "err": [
      "lit un lien direct entre le billet et le refus de monter",
      "confond concession et hypothèse",
      "se fie au subjonctif, fréquent dans les subordonnées de but"
     ]
    },
    {
     "id": "P5",
     "q": "« Les réverbères s'éteignaient un à un, comme des veilleurs qu'on relève. » La proposition « qu'on relève » est",
     "ok": "une subordonnée relative, qui complète le nom « veilleurs »",
     "bad": [
      "une subordonnée conjonctive complétive",
      "une subordonnée circonstancielle de comparaison",
      "une interrogative indirecte"
     ],
     "err": [
      "confond le pronom relatif « que » et la conjonction « que »",
      "se fie au mot « comme » placé juste avant",
      "croit que tout « que » peut introduire une question indirecte"
     ]
    },
    {
     "id": "P6",
     "q": "« Il fallait qu'elle partît avant l'aube. » La forme « partît » est",
     "ok": "un subjonctif imparfait",
     "bad": [
      "un passé simple",
      "un imparfait de l'indicatif",
      "un conditionnel présent"
     ],
     "err": [
      "ne tient compte ni de l'accent circonflexe ni de « il fallait que »",
      "reconnaît un passé et choisit le temps du verbe principal",
      "reconnaît une forme rare et la range dans le conditionnel"
     ]
    },
    {
     "id": "P7",
     "q": "« Les réverbères s'éteignaient un à un. (…) Le train entra en gare. » Quelle est la valeur du passé simple « entra », face à l'imparfait ?",
     "ok": "une action de premier plan, bornée, qui fait avancer le récit",
     "bad": [
      "une action qui dure, sans début ni fin marqués",
      "une action qui se répète",
      "une action antérieure à toutes les autres"
     ],
     "err": [
      "inverse les valeurs du passé simple et de l'imparfait",
      "attribue au passé simple la valeur de répétition de l'imparfait",
      "confond avec la valeur du plus-que-parfait"
     ]
    },
    {
     "id": "P8",
     "q": "Un texte « polémique » est un texte",
     "ok": "qui attaque vivement une idée ou une personne",
     "bad": [
      "qui cherche d'abord à faire rire",
      "qui présente plusieurs avis de façon neutre",
      "qui parle de politique"
     ],
     "err": [
      "confond polémique et comique",
      "confond polémique et débat équilibré",
      "se fie à la ressemblance entre « polémique » et « politique »"
     ]
    },
    {
     "id": "P9",
     "q": "Dans un texte, un sens « implicite » est un sens",
     "ok": "suggéré par le texte sans être dit en toutes lettres",
     "bad": [
      "dit clairement, en toutes lettres",
      "impossible à établir à partir du texte",
      "contraire à ce que pense l'auteur"
     ],
     "err": [
      "inverse implicite et explicite",
      "confond implicite et incompréhensible",
      "confond implicite et ironie"
     ]
    },
    {
     "id": "P10",
     "q": "« À six heures, la ville n'appartenait encore à personne. » Que dit cette phrase ?",
     "ok": "à cette heure, les rues sont encore désertes",
     "bad": [
      "la ville n'a ni propriétaire ni maire",
      "la ville est abandonnée depuis longtemps",
      "les habitants sont partis en voyage"
     ],
     "err": [
      "lit la phrase au sens propre",
      "ne tient pas compte du mot « encore »",
      "invente une explication absente du texte"
     ]
    },
    {
     "id": "P11",
     "q": "« Les réverbères s'éteignaient un à un, comme des veilleurs qu'on relève. » Quel commentaire est juste ?",
     "ok": "une comparaison donne aux réverbères un rôle humain et fait de la nuit un temps de garde qui s'achève",
     "bad": [
      "une métaphore donne aux réverbères un rôle humain et fait de la nuit un temps de garde qui s'achève",
      "une comparaison montre que les réverbères tombent en panne",
      "une hyperbole exagère le nombre des réverbères"
     ],
     "err": [
      "nomme mal la figure : ne tient pas compte de l'outil « comme »",
      "fait un contresens sur « s'éteignaient » et « relève »",
      "confond image et exagération"
     ]
    },
    {
     "id": "P12",
     "q": "« Une femme attendait, immobile, son billet serré dans la main. Elle ne regardait ni l'horloge ni les rails : elle regardait la fenêtre éclairée, là-haut, au troisième étage. Le train entra en gare. Elle ne bougea pas. » Que suggère le texte ?",
     "ok": "elle hésite à partir : ce qui la retient se trouve derrière cette fenêtre",
     "bad": [
      "elle a manqué son train",
      "elle attend un voyageur qui arrive par ce train",
      "elle s'est trompée de quai"
     ],
     "err": [
      "ne lit pas que le train entre en gare sous ses yeux",
      "ne tient compte ni du billet ni de la direction du regard",
      "cherche une explication matérielle que rien n'appuie"
     ]
    },
    {
     "id": "P13",
     "q": "À l'oral de l'épreuve anticipée, dans une explication linéaire, on",
     "ok": "suit l'ordre du texte, mouvement après mouvement, en interprétant les procédés",
     "bad": [
      "classe ses remarques en deux ou trois axes",
      "redit le texte dans l'ordre avec ses propres mots",
      "relève les figures de style dans l'ordre, sans les interpréter"
     ],
     "err": [
      "confond avec le commentaire composé de l'écrit",
      "paraphrase le texte au lieu de l'expliquer",
      "dresse un catalogue de procédés sans les interpréter"
     ]
    },
    {
     "id": "P14",
     "q": "À l'oral de l'épreuve anticipée, la question de grammaire demande",
     "ok": "l'analyse syntaxique d'une courte phrase, ou d'une partie de phrase, du passage expliqué",
     "bad": [
      "le nom et l'effet d'une figure de style du passage",
      "la justification de l'orthographe d'un mot du passage",
      "la récitation d'une règle, sans s'appuyer sur le passage"
     ],
     "err": [
      "confond grammaire et analyse du style",
      "confond grammaire et orthographe",
      "croit qu'il s'agit d'une question de cours détachée du texte"
     ]
    },
    {
     "id": "P15",
     "q": "Dans un commentaire de texte, une remarque solide",
     "ok": "cite le texte, nomme le procédé et explique l'effet produit",
     "bad": [
      "redit avec d'autres mots ce que raconte le passage",
      "nomme un procédé sans citer le texte",
      "dit si l'on a aimé ou non le passage"
     ],
     "err": [
      "paraphrase au lieu d'analyser",
      "affirme sans prouver par le texte",
      "confond interprétation et jugement de goût"
     ]
    },
    {
     "id": "P16",
     "q": "Sujet : « Le roman n'est-il qu'un divertissement ? » Laquelle de ces phrases est une problématique ?",
     "ok": "Le roman se limite-t-il à distraire, ou peut-il aussi changer le regard de son lecteur ?",
     "bad": [
      "Le roman et le divertissement.",
      "Le roman est avant tout un divertissement.",
      "Nous verrons d'abord que le roman divertit."
     ],
     "err": [
      "donne un thème, pas une question à débattre",
      "donne déjà la réponse",
      "donne une annonce de plan"
     ]
    },
    {
     "id": "P17",
     "q": "Dans une dissertation sur une œuvre, un bon exemple est",
     "ok": "un passage précis de l'œuvre, situé puis analysé pour servir l'argument",
     "bad": [
      "un résumé complet de l'intrigue",
      "une citation apprise par cœur, donnée sans commentaire",
      "une anecdote tirée de sa vie personnelle"
     ],
     "err": [
      "raconte l'œuvre au lieu d'argumenter",
      "croit qu'une citation prouve par elle-même",
      "confond la dissertation sur œuvre et l'essai personnel"
     ]
    },
    {
     "id": "P18",
     "q": "À l'oral, dans la seconde partie, tu présentes l'œuvre que tu as choisie. L'essentiel est",
     "ok": "d'expliquer et de défendre ton choix en t'appuyant sur une connaissance précise de l'œuvre",
     "bad": [
      "de résumer l'œuvre le plus complètement possible",
      "de réciter la biographie de l'auteur",
      "de reprendre l'explication du texte de la première partie"
     ],
     "err": [
      "confond présenter une œuvre et la résumer",
      "remplace sa lecture personnelle par des connaissances apprises",
      "mélange les deux parties de l'épreuve"
     ]
    }
   ],
   "redaction": "Relis ce début de récit : « À six heures, la ville n'appartenait encore à personne. Les réverbères s'éteignaient un à un, comme des veilleurs qu'on relève. Sur le quai, une femme attendait, immobile, son billet serré dans la main. Elle ne regardait ni l'horloge ni les rails : elle regardait la fenêtre éclairée, là-haut, au troisième étage. Le train entra en gare. Elle ne bougea pas. » Rédige un paragraphe de commentaire de 10 à 12 lignes qui répond à cette question : comment ce début de récit fait-il naître une attente chez le lecteur ? Appuie-toi sur au moins deux citations. Pour chacune, nomme le procédé et explique son effet.",
   "corrige": "plusieurs lectures sont recevables. Éléments attendus : un cadre suspendu, entre nuit et jour (« n'appartenait encore à personne », la comparaison des réverbères avec « des veilleurs qu'on relève ») ; un personnage sans nom, défini par son immobilité, alors que le « billet serré dans la main » annonce un départ ; la double négation « ni l'horloge ni les rails », puis les deux-points qui déplacent le regard vers « la fenêtre éclairée » et installent une énigme ; le passé simple et les deux phrases brèves de la fin, où l'événement attendu arrive (« Le train entra en gare ») sans que le personnage agisse (« Elle ne bougea pas ») ; le choix de ne jamais donner les pensées de la femme, qui laisse le lecteur seul avec ses hypothèses. Une bonne réponse annonce son idée, cite exactement, nomme les procédés, les interprète et conclut. Une réponse qui raconte la scène, ou qui énumère des procédés sans dire leur effet, ne suffit pas.",
   "texte": "À six heures, la ville n'appartenait encore à personne. Les réverbères s'éteignaient un à un, comme des veilleurs qu'on relève. Sur le quai, une femme attendait, immobile, son billet serré dans la main. Elle ne regardait ni l'horloge ni les rails : elle regardait la fenêtre éclairée, là-haut, au troisième étage. Le train entra en gare. Elle ne bougea pas.",
   "texte_ids": null
  }
 },
 "domaines": [
  {
   "nom": "Orthographe grammaticale",
   "ids": {
    "B": [
     "A1",
     "A2",
     "A3",
     "A4",
     "B6",
     "B7",
     "B8"
    ],
    "C": [
     "A1",
     "A2",
     "A3",
     "A4",
     "C5",
     "C6"
    ],
    "S": [
     "A1",
     "A2",
     "A3",
     "A4",
     "S9",
     "S10"
    ],
    "P": [
     "A1",
     "A2",
     "A3",
     "A4"
    ]
   }
  },
  {
   "nom": "Grammaire et syntaxe",
   "ids": {
    "B": [
     "B1",
     "B2",
     "B3",
     "B4",
     "B5"
    ],
    "C": [
     "C1",
     "C2",
     "C3",
     "C4"
    ],
    "S": [
     "S1",
     "S2",
     "S3"
    ],
    "P": [
     "P1",
     "P2",
     "P3",
     "P4",
     "P5"
    ]
   }
  },
  {
   "nom": "Conjugaison et emploi des temps",
   "ids": {
    "B": [
     "B9",
     "B10",
     "B11"
    ],
    "C": [
     "C7",
     "C8",
     "C9"
    ],
    "S": [
     "S4",
     "S5",
     "S6",
     "S7",
     "S8"
    ],
    "P": [
     "P6",
     "P7"
    ]
   }
  },
  {
   "nom": "Lexique",
   "ids": {
    "B": [
     "B12",
     "B13",
     "B14"
    ],
    "C": [
     "C10",
     "C11",
     "C12"
    ],
    "S": [
     "S11",
     "S12"
    ],
    "P": [
     "P8",
     "P9"
    ]
   }
  },
  {
   "nom": "Compréhension et analyse d'un texte",
   "ids": {
    "B": [
     "B15",
     "B16",
     "B17"
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
     "S15"
    ],
    "P": [
     "P10",
     "P11",
     "P12"
    ]
   }
  },
  {
   "nom": "Méthode de l'argumentation",
   "ids": {
    "B": [],
    "C": [
     "C17",
     "C18"
    ],
    "S": [
     "S16",
     "S17",
     "S18"
    ],
    "P": []
   }
  },
  {
   "nom": "Exercices de l'épreuve anticipée",
   "ids": {
    "B": [],
    "C": [],
    "S": [],
    "P": [
     "P13",
     "P14",
     "P15",
     "P16",
     "P17",
     "P18"
    ]
   }
  }
 ],
 "criteres": [
  "Respect de la consigne",
  "Organisation",
  "Appui sur le texte ou sur un exemple",
  "Correction de la langue",
  "Précision du vocabulaire"
 ]
};
