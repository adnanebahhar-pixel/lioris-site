window.DIAGS = window.DIAGS || {};
window.DIAGS["allemand"] = {
 "cle": "allemand",
 "matiere": "allemand",
 "titre": "Test d'allemand",
 "nom": "Diagnostic d'allemand",
 "commun": null,
 "niveaux": [
  [
   "A",
   "5e ou 4e"
  ],
  [
   "B",
   "3e"
  ],
  [
   "C",
   "Seconde"
  ],
  [
   "D",
   "Première ou terminale"
  ]
 ],
 "classes": [
  [
   "Cinquième",
   "A"
  ],
  [
   "Quatrième",
   "A"
  ],
  [
   "Troisième",
   "B"
  ],
  [
   "Seconde",
   "C"
  ],
  [
   "Première",
   "D"
  ],
  [
   "Terminale",
   "D"
  ]
 ],
 "duree": "30 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans dictionnaire ni traducteur.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-allemand-college-lycee.md",
 "blocs": {
  "A": {
   "titre": "5e et 4e",
   "questions": [
    {
     "id": "A1",
     "q": "Ich ___ dreizehn Jahre alt.",
     "ok": "bin",
     "bad": [
      "habe",
      "bist",
      "ist"
     ],
     "err": [
      "calque « avoir 13 ans » : met haben à la place de sein",
      "choisit bien sein mais prend la forme de du",
      "choisit bien sein mais prend la forme de er"
     ]
    },
    {
     "id": "A2",
     "q": "Du ___ in Berlin.",
     "ok": "wohnst",
     "bad": [
      "wohne",
      "wohnt",
      "wohnen"
     ],
     "err": [
      "prend la terminaison de ich",
      "prend la terminaison de er",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "A3",
     "q": "Mein Bruder ___ gut Englisch.",
     "ok": "spricht",
     "bad": [
      "sprecht",
      "sprechen",
      "sprichst"
     ],
     "err": [
      "oublie le changement de voyelle du verbe fort (e devient i)",
      "laisse le verbe à l'infinitif",
      "change la voyelle mais prend la terminaison de du"
     ]
    },
    {
     "id": "A4",
     "q": "Wir ___ einen Hund.",
     "ok": "haben",
     "bad": [
      "sind",
      "habt",
      "hat"
     ],
     "err": [
      "confond haben et sein",
      "prend la forme de ihr",
      "prend la forme de er"
     ]
    },
    {
     "id": "A5",
     "q": "Ich ___ gut schwimmen.",
     "ok": "kann",
     "bad": [
      "kanne",
      "können",
      "kannst"
     ],
     "err": [
      "ajoute le -e de ich à un verbe de modalité",
      "laisse le verbe de modalité à l'infinitif",
      "prend la forme de du"
     ]
    },
    {
     "id": "A6",
     "q": "Choisis la phrase correcte.",
     "ok": "Heute spiele ich Fußball.",
     "bad": [
      "Heute ich spiele Fußball.",
      "Heute Fußball spiele ich.",
      "Ich heute spiele Fußball."
     ],
     "err": [
      "garde l'ordre français sujet puis verbe après un complément en tête",
      "met deux éléments avant le verbe conjugué",
      "glisse le complément entre le sujet et le verbe : verbe en troisième position"
     ]
    },
    {
     "id": "A7",
     "q": "Tu veux demander à un camarade où il habite. Choisis la question correcte.",
     "ok": "Wo wohnst du?",
     "bad": [
      "Wo du wohnst?",
      "Wo wohnen du?",
      "Wer wohnst du?"
     ],
     "err": [
      "garde l'ordre sujet puis verbe, calque de « où tu habites ? »",
      "place bien le verbe mais ne le conjugue pas",
      "confond wo (où) et wer (qui)"
     ]
    },
    {
     "id": "A8",
     "q": "Choisis la phrase correcte.",
     "ok": "Ich kann gut Gitarre spielen.",
     "bad": [
      "Ich kann spielen gut Gitarre.",
      "Ich spielen kann gut Gitarre.",
      "Ich kann gut Gitarre spiele."
     ],
     "err": [
      "place l'infinitif juste après le verbe de modalité, comme en français",
      "inverse le verbe conjugué et l'infinitif",
      "conjugue aussi le second verbe au lieu de l'infinitif"
     ]
    },
    {
     "id": "A9",
     "q": "Tu veux dire « Je n'ai pas de frère ». Choisis la phrase correcte.",
     "ok": "Ich habe keinen Bruder.",
     "bad": [
      "Ich habe nicht Bruder.",
      "Ich habe kein Bruder.",
      "Ich nicht habe einen Bruder."
     ],
     "err": [
      "nie avec nicht là où il faut kein",
      "emploie kein mais oublie l'accusatif masculin",
      "place la négation devant le verbe, calque de « ne »"
     ]
    },
    {
     "id": "A10",
     "q": "Choisis la phrase correcte.",
     "ok": "Ich stehe um sieben Uhr auf.",
     "bad": [
      "Ich aufstehe um sieben Uhr.",
      "Um sieben Uhr ich stehe auf.",
      "Ich um sieben Uhr aufstehe."
     ],
     "err": [
      "ne sépare pas la particule du verbe",
      "sépare la particule mais place le verbe conjugué comme en français",
      "envoie tout le verbe à la fin dans une phrase principale"
     ]
    },
    {
     "id": "A11",
     "q": "Das ist ___ Mutter.",
     "ok": "meine",
     "bad": [
      "mein",
      "meinen",
      "meiner"
     ],
     "err": [
      "n'accorde pas le possessif au féminin",
      "met une terminaison d'accusatif masculin",
      "met une terminaison de datif à un attribut"
     ]
    },
    {
     "id": "A12",
     "q": "Ich habe ___ Bruder.",
     "ok": "einen",
     "bad": [
      "ein",
      "eine",
      "einem"
     ],
     "err": [
      "ne marque pas l'accusatif masculin",
      "se trompe de genre",
      "confond accusatif et datif"
     ]
    },
    {
     "id": "A13",
     "q": "___ Mädchen heißt Anna.",
     "ok": "Das",
     "bad": [
      "Die",
      "Der",
      "Den"
     ],
     "err": [
      "suit le sexe de la personne au lieu du genre du mot",
      "ne connaît pas le genre du nom",
      "met le sujet à l'accusatif"
     ]
    },
    {
     "id": "A14",
     "q": "Wohin gehst du? Ich gehe ___ Schule.",
     "ok": "in die",
     "bad": [
      "in der",
      "zu die",
      "nach"
     ],
     "err": [
      "confond le lieu où l'on est (datif) et le lieu où l'on va (accusatif)",
      "prend zu mais ne le fait pas suivre du datif",
      "étend nach, réservé aux villes et aux pays sans article"
     ]
    },
    {
     "id": "A15",
     "q": "Wir wohnen ___ Frankreich.",
     "ok": "in",
     "bad": [
      "nach",
      "zu",
      "bei"
     ],
     "err": [
      "confond le lieu où l'on est et la direction",
      "traduit « à » ou « en » par zu",
      "étend bei, réservé aux personnes"
     ]
    },
    {
     "id": "A16",
     "q": "D'après le texte : Wie alt ist Lena?",
     "ok": "Sie ist neun.",
     "bad": [
      "Sie ist zwölf.",
      "Sie ist neunzehn.",
      "Das steht nicht im Text."
     ],
     "err": [
      "donne l'âge de Jonas",
      "confond neun et neunzehn",
      "ne relie pas « ist neun » à Lena"
     ]
    },
    {
     "id": "A17",
     "q": "D'après le texte : Welches Tier hat die Familie?",
     "ok": "einen Hund",
     "bad": [
      "eine Katze",
      "einen Hund und eine Katze",
      "kein Tier"
     ],
     "err": [
      "ne lit pas la négation « keine »",
      "ne tient pas compte de « aber »",
      "étend la négation à toute la phrase"
     ]
    },
    {
     "id": "A18",
     "q": "D'après le texte : Was macht Jonas am Samstag?",
     "ok": "Er geht ins Schwimmbad.",
     "bad": [
      "Er spielt mit seinen Freunden Fußball.",
      "Er liest.",
      "Er spielt mit seinem Vater Fußball."
     ],
     "err": [
      "confond Mittwoch et Samstag",
      "attribue à Jonas l'activité de Lena",
      "mélange les deux phrases du texte"
     ]
    },
    {
     "id": "A19",
     "q": "D'après le texte : Warum kommt Lena nicht mit ins Schwimmbad?",
     "ok": "Sie schwimmt nicht gern.",
     "bad": [
      "Sie kann nicht schwimmen.",
      "Sie spielt Fußball.",
      "Sie ist zu klein."
     ],
     "err": [
      "confond « ne pas aimer » et « ne pas savoir »",
      "attribue à Lena l'activité de Jonas",
      "invente une raison à partir de l'âge"
     ]
    },
    {
     "id": "A20",
     "q": "Il est 7 h 30. Es ist ___ .",
     "ok": "halb acht",
     "bad": [
      "halb sieben",
      "sieben und halb",
      "acht halb"
     ],
     "err": [
      "calque « sept heures et demie » : ne sait pas que halb annonce l'heure suivante",
      "traduit mot à mot",
      "connaît la règle mais pas l'ordre des mots"
     ]
    },
    {
     "id": "A21",
     "q": "Der Bruder von meiner Mutter ist mein ___ .",
     "ok": "Onkel",
     "bad": [
      "Oncle",
      "Tante",
      "Cousin"
     ],
     "err": [
      "écrit le mot français",
      "confond Onkel et Tante",
      "confond les liens de parenté"
     ]
    },
    {
     "id": "A22",
     "q": "Tu veux dire « J'aime jouer au tennis ». Choisis la phrase correcte.",
     "ok": "Ich spiele gern Tennis.",
     "bad": [
      "Ich gern Tennis.",
      "Ich mag spielen Tennis.",
      "Ich spiele gut Tennis."
     ],
     "err": [
      "prend gern pour un verbe",
      "calque « j'aime jouer » avec deux verbes à la française",
      "confond gern (volontiers) et gut (bien)"
     ]
    }
   ],
   "redaction": "Présente-toi en allemand, en 5 à 6 phrases : ton prénom et ton âge, où tu habites, ta famille, ce que tu aimes faire et ce que tu n'aimes pas, ce que tu fais le week-end. Écris des phrases complètes. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Ich heiße Lina und ich bin dreizehn Jahre alt. Ich wohne in Lyon. Ich habe einen Bruder, er heißt Adam. Ich spiele gern Handball, aber ich mag Fußball nicht. Am Samstag gehe ich mit meiner Freundin ins Kino. Am Sonntag lese ich oder ich höre Musik. » Le prof regarde : sein pour l'âge, la terminaison du verbe avec ich, le verbe en deuxième position après « Am Samstag », l'accusatif après haben, gern placé après le verbe, la majuscule à tous les noms.",
   "texte": "Hallo, ich heiße Jonas. Ich bin zwölf Jahre alt und wohne in Köln. Ich habe eine Schwester, sie heißt Lena und ist neun. Wir haben einen Hund, aber keine Katze. Am Mittwoch spiele ich mit meinen Freunden Fußball. Am Samstag gehe ich mit meinem Vater ins Schwimmbad. Lena kommt nicht mit: Sie schwimmt nicht gern. Sie liest lieber.",
   "texte_ids": [
    "A16",
    "A17",
    "A18",
    "A19"
   ]
  },
  "B": {
   "titre": "3e",
   "questions": [
    {
     "id": "B1",
     "q": "Am Samstag ___ wir nach Berlin gefahren.",
     "ok": "sind",
     "bad": [
      "haben",
      "sein",
      "seid"
     ],
     "err": [
      "prend haben avec un verbe de déplacement : ne connaît qu'un auxiliaire",
      "choisit sein mais ne le conjugue pas",
      "choisit sein mais prend la forme de ihr"
     ]
    },
    {
     "id": "B2",
     "q": "Ich habe meine Hausaufgaben schon ___ .",
     "ok": "gemacht",
     "bad": [
      "gemachen",
      "macht",
      "machen"
     ],
     "err": [
      "donne la terminaison -en d'un verbe fort à un verbe faible",
      "oublie le préfixe ge- du participe",
      "met l'infinitif à la place du participe"
     ]
    },
    {
     "id": "B3",
     "q": "Er hat ein Buch ___ .",
     "ok": "gelesen",
     "bad": [
      "gelest",
      "lesen",
      "geliest"
     ],
     "err": [
      "traite un verbe fort comme un verbe faible",
      "met l'infinitif à la place du participe",
      "construit le participe sur la forme du présent « liest »"
     ]
    },
    {
     "id": "B4",
     "q": "Letztes Jahr ___ ich in Spanien.",
     "ok": "war",
     "bad": [
      "bin",
      "habe gewesen",
      "ware"
     ],
     "err": [
      "ne marque pas le passé",
      "calque « j'ai été » : prend haben comme auxiliaire de sein",
      "ajoute le -e de ich au prétérit de sein"
     ]
    },
    {
     "id": "B5",
     "q": "Du ___ jetzt deine Hausaufgaben machen, das ist Pflicht.",
     "ok": "musst",
     "bad": [
      "muss",
      "müsst",
      "darfst"
     ],
     "err": [
      "prend la forme de ich et de er",
      "prend la forme de ihr",
      "confond l'obligation (müssen) et la permission (dürfen)"
     ]
    },
    {
     "id": "B6",
     "q": "Ich bleibe zu Hause, weil ___ .",
     "ok": "ich krank bin",
     "bad": [
      "ich bin krank",
      "bin ich krank",
      "krank ich bin"
     ],
     "err": [
      "place le verbe conjugué comme en français après weil",
      "inverse sujet et verbe comme après un complément en tête",
      "sait que l'ordre change mais ne rejette pas le verbe à la fin"
     ]
    },
    {
     "id": "B7",
     "q": "Ich weiß, ___ .",
     "ok": "dass er morgen kommt",
     "bad": [
      "dass er kommt morgen",
      "das er morgen kommt",
      "dass kommt er morgen"
     ],
     "err": [
      "place le verbe conjugué comme en français après dass",
      "confond la conjonction dass et le mot das",
      "inverse sujet et verbe au lieu de rejeter le verbe à la fin"
     ]
    },
    {
     "id": "B8",
     "q": "Choisis la phrase correcte.",
     "ok": "Morgen muss ich früh aufstehen.",
     "bad": [
      "Morgen ich muss früh aufstehen.",
      "Morgen muss ich aufstehen früh.",
      "Morgen muss ich früh stehen auf."
     ],
     "err": [
      "garde l'ordre français sujet puis verbe après un complément en tête",
      "ne rejette pas l'infinitif à la fin",
      "sépare la particule alors que le verbe est à l'infinitif"
     ]
    },
    {
     "id": "B9",
     "q": "Mein Bruder ist ___ ich.",
     "ok": "älter als",
     "bad": [
      "mehr alt als",
      "älter dass",
      "alter als"
     ],
     "err": [
      "calque « plus âgé » au lieu du comparatif en -er",
      "traduit « que » par dass au lieu de als",
      "oublie l'inflexion du comparatif"
     ]
    },
    {
     "id": "B10",
     "q": "Choisis la question correcte.",
     "ok": "Was hast du gestern gemacht?",
     "bad": [
      "Was du hast gestern gemacht?",
      "Was hast du gestern machen?",
      "Was gestern hast du gemacht?"
     ],
     "err": [
      "garde l'ordre sujet puis verbe dans une question",
      "met l'infinitif à la place du participe",
      "met deux éléments avant le verbe conjugué"
     ]
    },
    {
     "id": "B11",
     "q": "Ich fahre mit ___ Bus zur Schule.",
     "ok": "dem",
     "bad": [
      "den",
      "der",
      "das"
     ],
     "err": [
      "met l'accusatif après mit, qui demande le datif",
      "ne décline pas l'article",
      "se trompe de genre et ne marque pas le datif"
     ]
    },
    {
     "id": "B12",
     "q": "Ich schenke ___ Mutter Blumen.",
     "ok": "meiner",
     "bad": [
      "meine",
      "meinen",
      "meinem"
     ],
     "err": [
      "ne marque pas le datif de la personne à qui l'on donne",
      "met une terminaison d'accusatif masculin",
      "marque le datif mais se trompe de genre"
     ]
    },
    {
     "id": "B13",
     "q": "Kannst du ___ helfen?",
     "ok": "mir",
     "bad": [
      "mich",
      "ich",
      "mein"
     ],
     "err": [
      "confond accusatif et datif : calque de « m'aider »",
      "ne décline pas le pronom",
      "confond le pronom et le possessif"
     ]
    },
    {
     "id": "B14",
     "q": "Das Geschenk ist für ___ Bruder.",
     "ok": "meinen",
     "bad": [
      "meinem",
      "mein",
      "meiner"
     ],
     "err": [
      "met le datif après für, qui demande l'accusatif",
      "ne décline pas le possessif",
      "se trompe de genre"
     ]
    },
    {
     "id": "B15",
     "q": "Die Katze liegt ___ .",
     "ok": "auf dem Sofa",
     "bad": [
      "auf das Sofa",
      "auf der Sofa",
      "auf den Sofa"
     ],
     "err": [
      "confond le lieu où l'on est (datif) et le lieu où l'on va (accusatif)",
      "marque le datif mais se trompe de genre",
      "cumule l'erreur de cas et l'erreur de genre"
     ]
    },
    {
     "id": "B16",
     "q": "D'après le texte : Warum hat Emma am ersten Tag fast nichts verstanden?",
     "ok": "Die Familie hat sehr schnell gesprochen.",
     "bad": [
      "Die Familie hat nicht mit ihr gesprochen.",
      "Sie hat nie Deutsch gelernt.",
      "Die Familie war nicht nett."
     ],
     "err": [
      "contresens sur « schnell gesprochen »",
      "conclut trop loin à partir de « nichts verstanden »",
      "ne lit pas « sehr nett »"
     ]
    },
    {
     "id": "B17",
     "q": "D'après le texte : Wie sind sie zum Hafen gekommen?",
     "ok": "mit dem Fahrrad",
     "bad": [
      "mit dem Auto",
      "zu Fuß",
      "mit dem Schiff"
     ],
     "err": [
      "déduit de « gefahren » qu'il s'agit d'une voiture",
      "ne comprend pas « Fahrrad »",
      "associe « Hafen » au bateau"
     ]
    },
    {
     "id": "B18",
     "q": "D'après le texte : Was erfahren wir über Felix?",
     "ok": "Er ist so alt wie Emma.",
     "bad": [
      "Er ist älter als Emma.",
      "Er ist Emmas Bruder.",
      "Er wohnt in Frankreich."
     ],
     "err": [
      "lit « so alt wie » comme un comparatif de supériorité",
      "confond le fils de la famille d'accueil et un frère",
      "prend un projet pour un fait"
     ]
    },
    {
     "id": "B19",
     "q": "D'après le texte : Warum hat Felix ein bisschen Angst?",
     "ok": "Er spricht noch nicht gut Französisch.",
     "bad": [
      "Er will nicht nach Frankreich kommen.",
      "Er spricht noch nicht gut Deutsch.",
      "Er kennt Emma nicht."
     ],
     "err": [
      "contresens sur « will » : lit un refus",
      "confond les deux langues",
      "répond sans appui dans le texte"
     ]
    },
    {
     "id": "B20",
     "q": "Tu veux dire « Après les cours, je rentre à la maison ». Nach der Schule gehe ich ___ .",
     "ok": "nach Hause",
     "bad": [
      "zu Hause",
      "bei mir",
      "in Hause"
     ],
     "err": [
      "confond zu Hause (y être) et nach Hause (y aller)",
      "calque « chez moi » mot à mot",
      "invente une préposition devant Hause"
     ]
    },
    {
     "id": "B21",
     "q": "Der Film dauert zwei ___ .",
     "ok": "Stunden",
     "bad": [
      "Uhren",
      "Uhr",
      "Zeiten"
     ],
     "err": [
      "confond Uhr (l'heure qu'il est) et Stunde (la durée), un seul mot « heure » en français",
      "même confusion, calque de « deux heures » lu sur une montre",
      "traduit par le mot « temps »"
     ]
    },
    {
     "id": "B22",
     "q": "Ich ___ nicht, wo er wohnt.",
     "ok": "weiß",
     "bad": [
      "kenne",
      "wisse",
      "kann"
     ],
     "err": [
      "confond kennen et wissen",
      "conjugue wissen comme un verbe régulier",
      "confond wissen et können, calque de « savoir faire »"
     ]
    }
   ],
   "redaction": "Raconte en allemand ton dernier week-end ou tes dernières vacances, en 6 à 8 phrases : où tu étais, avec qui, ce que tu as fait, ce que tu as préféré. Termine par une phrase sur ce que tu voudrais faire le week-end prochain. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Letztes Wochenende bin ich mit meiner Familie nach Annecy gefahren. Am Samstag haben wir eine Radtour gemacht und am See gegessen. Das Wetter war schön, aber das Wasser war zu kalt. Am Abend habe ich mit meinem Cousin Karten gespielt. Am Sonntag sind wir zu Hause geblieben, weil es geregnet hat. Ich habe das Wochenende toll gefunden. Nächstes Wochenende möchte ich ins Kino gehen. » Le prof regarde : le parfait tenu d'un bout à l'autre, le choix entre haben et sein, le participe à la fin, le verbe en deuxième position après un complément de temps, le verbe à la fin après weil, le datif après mit.",
   "texte": "Liebe Clara, ich bin seit Montag bei meiner Gastfamilie in Hamburg. Die Familie Becker ist sehr nett. Am ersten Tag habe ich fast nichts verstanden, weil alle so schnell gesprochen haben. Jetzt geht es besser. Gestern sind wir mit dem Fahrrad zum Hafen gefahren und haben Fischbrötchen gegessen. Der Sohn, Felix, ist so alt wie ich. Er will nächstes Jahr nach Frankreich kommen, aber er hat ein bisschen Angst, denn sein Französisch ist noch nicht sehr gut. Bis bald, deine Emma",
   "texte_ids": [
    "B16",
    "B17",
    "B18",
    "B19"
   ]
  },
  "C": {
   "titre": "seconde",
   "questions": [
    {
     "id": "C1",
     "q": "Als ich klein war, ___ ich jeden Tag Fußball.",
     "ok": "spielte",
     "bad": [
      "spiele",
      "gespielt",
      "spielten"
     ],
     "err": [
      "ne marque pas le passé",
      "met le participe sans auxiliaire",
      "marque le prétérit mais prend la forme du pluriel"
     ]
    },
    {
     "id": "C2",
     "q": "Der Zug ist pünktlich ___ .",
     "ok": "angekommen",
     "bad": [
      "angekommt",
      "ankommen",
      "geankommen"
     ],
     "err": [
      "traite un verbe fort comme un verbe faible",
      "met l'infinitif à la place du participe",
      "place ge- devant la particule au lieu de l'insérer"
     ]
    },
    {
     "id": "C3",
     "q": "Wenn ich Zeit ___ , würde ich mehr lesen.",
     "ok": "hätte",
     "bad": [
      "habe",
      "hatte",
      "würde"
     ],
     "err": [
      "met l'indicatif présent : ne marque pas l'irréel",
      "calque l'imparfait français de « si j'avais »",
      "met würde sans verbe dans la proposition en wenn"
     ]
    },
    {
     "id": "C4",
     "q": "Gestern ___ ich nicht kommen, ich war krank.",
     "ok": "konnte",
     "bad": [
      "könnte",
      "kann",
      "gekonnt"
     ],
     "err": [
      "confond le prétérit konnte et le subjonctif könnte",
      "ne marque pas le passé",
      "met le participe sans auxiliaire"
     ]
    },
    {
     "id": "C5",
     "q": "Ich interessiere ___ für Musik.",
     "ok": "mich",
     "bad": [
      "mir",
      "sich",
      "me"
     ],
     "err": [
      "met le pronom réfléchi au datif",
      "garde le sich de l'infinitif sans l'accorder au sujet",
      "écrit le pronom français"
     ]
    },
    {
     "id": "C6",
     "q": "Choisis la phrase correcte.",
     "ok": "Wenn es regnet, bleibe ich zu Hause.",
     "bad": [
      "Wenn es regnet, ich bleibe zu Hause.",
      "Wenn regnet es, bleibe ich zu Hause.",
      "Wenn es regnet, ich zu Hause bleibe."
     ],
     "err": [
      "garde l'ordre sujet puis verbe dans la principale placée après la subordonnée",
      "place le verbe conjugué comme en français dans la subordonnée",
      "rejette aussi le verbe à la fin dans la principale"
     ]
    },
    {
     "id": "C7",
     "q": "Ich habe keine Lust, ___ .",
     "ok": "ins Kino zu gehen",
     "bad": [
      "zu gehen ins Kino",
      "ins Kino gehen",
      "um ins Kino zu gehen"
     ],
     "err": [
      "place zu et l'infinitif comme en français, avant le complément",
      "oublie zu devant l'infinitif",
      "confond zu (après un nom) et um ... zu (le but)"
     ]
    },
    {
     "id": "C8",
     "q": "Ich lerne Deutsch, ___ in Berlin zu studieren.",
     "ok": "um",
     "bad": [
      "für",
      "damit",
      "dass"
     ],
     "err": [
      "calque « pour » par für devant un infinitif",
      "confond damit (suivi d'un sujet et d'un verbe conjugué) et um ... zu",
      "traduit « pour » par une conjonction prise au hasard"
     ]
    },
    {
     "id": "C9",
     "q": "Das ist der Lehrer, ___ mir geholfen hat.",
     "ok": "der",
     "bad": [
      "den",
      "wer",
      "dass"
     ],
     "err": [
      "met le relatif à l'accusatif alors qu'il est sujet",
      "traduit « qui » par l'interrogatif wer",
      "traduit « qui » par dass"
     ]
    },
    {
     "id": "C10",
     "q": "Ich weiß nicht, ___ er morgen kommt.",
     "ok": "ob",
     "bad": [
      "wenn",
      "falls",
      "als"
     ],
     "err": [
      "traduit « si » par wenn alors qu'il s'agit d'une question indirecte",
      "connaît un autre « si », mais c'est celui de la condition",
      "confond les conjonctions"
     ]
    },
    {
     "id": "C11",
     "q": "Ich warte ___ .",
     "ok": "auf den Bus",
     "bad": [
      "für den Bus",
      "den Bus",
      "an den Bus"
     ],
     "err": [
      "calque de l'anglais « wait for »",
      "calque « attendre le bus », sans préposition",
      "sait qu'il faut une préposition mais se trompe"
     ]
    },
    {
     "id": "C12",
     "q": "Leg das Buch bitte ___ .",
     "ok": "in die Tasche",
     "bad": [
      "in der Tasche",
      "in den Tasche",
      "im Tasche"
     ],
     "err": [
      "confond le lieu où l'on est (datif) et le lieu où l'on pose (accusatif)",
      "choisit l'accusatif mais se trompe de genre",
      "met le datif et se trompe de genre"
     ]
    },
    {
     "id": "C13",
     "q": "Ich habe einen ___ Hund.",
     "ok": "kleinen",
     "bad": [
      "kleine",
      "kleiner",
      "klein"
     ],
     "err": [
      "ne marque pas l'accusatif masculin sur l'adjectif",
      "met la terminaison du nominatif",
      "n'accorde pas l'adjectif épithète, comme un attribut"
     ]
    },
    {
     "id": "C14",
     "q": "Ich spiele mit meinen ___ Tennis.",
     "ok": "Freunden",
     "bad": [
      "Freunde",
      "Freund",
      "Freundes"
     ],
     "err": [
      "oublie le -n du datif pluriel",
      "ne marque ni le pluriel ni le datif",
      "met une terminaison de génitif"
     ]
    },
    {
     "id": "C15",
     "q": "In meiner Stadt gibt es ___ .",
     "ok": "einen Bahnhof",
     "bad": [
      "ein Bahnhof",
      "einem Bahnhof",
      "eine Bahnhof"
     ],
     "err": [
      "met le nominatif après es gibt, calque de « il y a »",
      "met le datif après es gibt",
      "se trompe de genre"
     ]
    },
    {
     "id": "C16",
     "q": "D'après le texte : Warum war der Anfang hart für Malik?",
     "ok": "Er musste sehr früh aufstehen und war abends sehr müde.",
     "bad": [
      "Er hatte keine Freunde in Leipzig.",
      "Er durfte abends seine Freunde nicht treffen.",
      "Die Arbeit war langweilig."
     ],
     "err": [
      "contresens sur « keine Lust mehr hatte, seine Freunde zu treffen »",
      "confond « keine Lust haben » et « nicht dürfen »",
      "répond sans appui dans le texte"
     ]
    },
    {
     "id": "C17",
     "q": "D'après le texte : Was bedeutet « Malik ist trotzdem geblieben »?",
     "ok": "Er hat weitergemacht, obwohl seine Eltern dagegen waren.",
     "bad": [
      "Er ist geblieben, weil seine Eltern es wollten.",
      "Er hat mit dem Praktikum aufgehört.",
      "Er ist bei seinen Eltern geblieben."
     ],
     "err": [
      "lit trotzdem comme une cause",
      "s'arrête à « aufhört » et l'attribue à Malik",
      "rattache « geblieben » aux parents"
     ]
    },
    {
     "id": "C18",
     "q": "D'après le texte : Was stört Malik heute noch?",
     "ok": "Er muss am Wochenende arbeiten.",
     "bad": [
      "Die Kunden kennen seinen Namen nicht.",
      "Seine Freunde arbeiten am Wochenende.",
      "Er darf die Brötchen nicht allein backen."
     ],
     "err": [
      "lit une négation qui n'est pas dans le texte",
      "inverse les deux sujets autour de « während »",
      "contresens sur « darf »"
     ]
    },
    {
     "id": "C19",
     "q": "D'après le texte : Was denkt Malik am Ende?",
     "ok": "Er weiß noch nicht, ob er Bäcker wird, aber er ist stolz auf sich.",
     "bad": [
      "Er will sicher Bäcker werden.",
      "Er will auf keinen Fall Bäcker werden.",
      "Er ist traurig, dass er nicht aufgehört hat."
     ],
     "err": [
      "ne lit pas « weiß er noch nicht »",
      "transforme un doute en refus",
      "contresens sur « stolz »"
     ]
    },
    {
     "id": "C20",
     "q": "Ich muss heute Abend für die Mathearbeit ___ .",
     "ok": "lernen",
     "bad": [
      "studieren",
      "lehren",
      "etudieren"
     ],
     "err": [
      "calque « étudier » : studieren se dit pour l'université",
      "confond lernen (apprendre) et lehren (enseigner)",
      "germanise le mot français"
     ]
    },
    {
     "id": "C21",
     "q": "Wie ist ___ heute? Es regnet.",
     "ok": "das Wetter",
     "bad": [
      "die Zeit",
      "das Tempo",
      "die Uhr"
     ],
     "err": [
      "confond Wetter et Zeit, un seul mot « temps » en français",
      "germanise le mot français",
      "confond avec l'heure"
     ]
    },
    {
     "id": "C22",
     "q": "Er war krank. ___ ist er nicht gekommen.",
     "ok": "Deshalb",
     "bad": [
      "Weil",
      "Denn",
      "Wegen"
     ],
     "err": [
      "prend la conjonction weil pour un adverbe de liaison",
      "prend la conjonction denn pour un adverbe de liaison",
      "met une préposition seule en tête de phrase"
     ]
    }
   ],
   "redaction": "« Sollen Jugendliche in den Ferien arbeiten? » Donne ton avis en allemand, en 60 à 80 mots : ta position, deux arguments, un exemple, une phrase de conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Ich finde, dass Jugendliche in den Ferien arbeiten können, aber nicht müssen. Ein Ferienjob ist interessant, weil man eigenes Geld verdient. Außerdem lernt man einen Beruf kennen. Mein Cousin hat zum Beispiel letzten Sommer in einem Café gearbeitet und es hat ihm gefallen. Aber die Ferien sind auch wichtig, um sich auszuruhen. Deshalb denke ich, dass zwei oder drei Wochen Arbeit genug sind. » Le prof regarde : une position annoncée dès la première phrase, le verbe à la fin après dass et weil, le verbe en deuxième position après außerdem et deshalb, un parfait correct, au moins trois connecteurs, pas de calque du type « für Geld zu verdienen ».",
   "texte": "Seit drei Monaten macht Malik ein Praktikum in einer Bäckerei in Leipzig. Am Anfang war es hart: Er musste jeden Tag um vier Uhr aufstehen, und abends war er so müde, dass er keine Lust mehr hatte, seine Freunde zu treffen. Seine Eltern wollten, dass er aufhört. Malik ist trotzdem geblieben. Inzwischen darf er die Brötchen allein backen, und die Kunden kennen seinen Namen. Nur eines stört ihn noch: Am Wochenende arbeitet er, während seine Freunde ausschlafen. Ob er später Bäcker werden will, weiß er noch nicht. Aber er ist stolz darauf, dass er nicht aufgegeben hat.",
   "texte_ids": [
    "C16",
    "C17",
    "C18",
    "C19"
   ]
  },
  "D": {
   "titre": "première et terminale",
   "questions": [
    {
     "id": "D1",
     "q": "Wenn ich mehr gelernt hätte, ___ ich die Prüfung bestanden.",
     "ok": "hätte",
     "bad": [
      "habe",
      "würde",
      "hatte"
     ],
     "err": [
      "met l'indicatif : ne marque pas l'irréel du passé",
      "mélange würde et le participe passé",
      "oublie l'inflexion : prend le plus-que-parfait pour le subjonctif II"
     ]
    },
    {
     "id": "D2",
     "q": "Die Schule ___ gerade von den Arbeitern renoviert.",
     "ok": "wird",
     "bad": [
      "ist",
      "hat",
      "werden"
     ],
     "err": [
      "calque « est rénovée » : forme le passif avec sein au lieu de werden",
      "prend haben comme auxiliaire du passif",
      "choisit werden mais ne l'accorde pas au sujet singulier"
     ]
    },
    {
     "id": "D3",
     "q": "Nachdem er gegessen ___ , ging er spazieren.",
     "ok": "hatte",
     "bad": [
      "hat",
      "war",
      "hätte"
     ],
     "err": [
      "ne marque pas l'antériorité après nachdem",
      "se trompe d'auxiliaire",
      "confond le plus-que-parfait hatte et le subjonctif hätte"
     ]
    },
    {
     "id": "D4",
     "q": "Tu demandes poliment de l'aide à une vendeuse. ___ Sie mir bitte helfen?",
     "ok": "Könnten",
     "bad": [
      "Konnten",
      "Könntet",
      "Kannten"
     ],
     "err": [
      "oublie l'inflexion : prend le prétérit pour le subjonctif de politesse",
      "prend la forme de ihr avec Sie",
      "confond können et kennen"
     ]
    },
    {
     "id": "D5",
     "q": "Tu veux dire « Je fais réparer mon vélo ». Choisis la phrase correcte.",
     "ok": "Ich lasse mein Fahrrad reparieren.",
     "bad": [
      "Ich mache mein Fahrrad reparieren.",
      "Ich lasse reparieren mein Fahrrad.",
      "Ich lasse mein Fahrrad zu reparieren."
     ],
     "err": [
      "calque « faire réparer » avec machen",
      "place l'infinitif comme en français, avant le complément",
      "ajoute zu après lassen"
     ]
    },
    {
     "id": "D6",
     "q": "Ich weiß nicht, ob er gestern ___ .",
     "ok": "angerufen hat",
     "bad": [
      "hat angerufen",
      "angerufen",
      "anrufen hat"
     ],
     "err": [
      "place l'auxiliaire avant le participe, comme en principale",
      "oublie l'auxiliaire en fin de subordonnée",
      "met l'infinitif à la place du participe"
     ]
    },
    {
     "id": "D7",
     "q": "Das ist der Freund, ___ ich nach Italien gefahren bin.",
     "ok": "mit dem",
     "bad": [
      "mit den",
      "mit wem",
      "mit ihm"
     ],
     "err": [
      "met l'accusatif après mit",
      "traduit « avec qui » par l'interrogatif wem",
      "met un pronom personnel à la place du relatif"
     ]
    },
    {
     "id": "D8",
     "q": "Choisis la phrase correcte.",
     "ok": "Je mehr ich lese, desto besser verstehe ich.",
     "bad": [
      "Je mehr ich lese, desto ich verstehe besser.",
      "Mehr ich lese, besser ich verstehe.",
      "Je mehr lese ich, desto besser verstehe ich."
     ],
     "err": [
      "garde l'ordre sujet puis verbe après desto",
      "calque « plus... plus » sans je ni desto",
      "ne rejette pas le verbe à la fin après je"
     ]
    },
    {
     "id": "D9",
     "q": "Meine Eltern wollen, ___ .",
     "ok": "dass ich mehr arbeite",
     "bad": [
      "mich mehr zu arbeiten",
      "dass ich arbeite mehr",
      "ich mehr arbeiten"
     ],
     "err": [
      "calque de l'anglais « want me to »",
      "place le verbe conjugué comme en français après dass",
      "supprime la conjonction et laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "D10",
     "q": "___ ich zehn Jahre alt war, wohnten wir in Lyon.",
     "ok": "Als",
     "bad": [
      "Wenn",
      "Wann",
      "Ob"
     ],
     "err": [
      "met wenn pour un fait unique du passé, un seul mot « quand » en français",
      "prend l'interrogatif wann pour une conjonction",
      "confond les conjonctions"
     ]
    },
    {
     "id": "D11",
     "q": "Ich interessiere mich für Politik. Und du, interessierst du dich auch ___ ?",
     "ok": "dafür",
     "bad": [
      "für es",
      "davon",
      "darauf"
     ],
     "err": [
      "calque « pour ça » au lieu du pronom adverbial en da-",
      "forme bien le pronom adverbial mais avec la préposition de « parler de »",
      "forme bien le pronom adverbial mais se trompe de préposition"
     ]
    },
    {
     "id": "D12",
     "q": "Das ist das Auto ___ .",
     "ok": "meines Vaters",
     "bad": [
      "meines Vater",
      "von mein Vater",
      "meiner Vaters"
     ],
     "err": [
      "marque le génitif sur le possessif mais oublie le -s du nom",
      "calque « de mon père » avec von, sans datif",
      "marque le génitif mais se trompe de genre"
     ]
    },
    {
     "id": "D13",
     "q": "___ des schlechten Wetters sind wir spazieren gegangen.",
     "ok": "Trotz",
     "bad": [
      "Obwohl",
      "Trotzdem",
      "Gegen"
     ],
     "err": [
      "met une conjonction devant un groupe nominal",
      "prend l'adverbe trotzdem pour une préposition",
      "se trompe de préposition : gegen veut dire contre et demande l'accusatif"
     ]
    },
    {
     "id": "D14",
     "q": "Er trinkt gern ___ Kaffee.",
     "ok": "schwarzen",
     "bad": [
      "schwarzer",
      "schwarze",
      "schwarz"
     ],
     "err": [
      "met la terminaison du nominatif à un complément d'objet",
      "met une terminaison de féminin ou de pluriel",
      "n'accorde pas l'adjectif épithète, comme un attribut"
     ]
    },
    {
     "id": "D15",
     "q": "Ich habe Angst ___ Spinnen.",
     "ok": "vor",
     "bad": [
      "von",
      "für",
      "gegen"
     ],
     "err": [
      "calque « peur de » avec von",
      "calque « peur pour »",
      "traduit l'idée d'opposition par gegen"
     ]
    },
    {
     "id": "D16",
     "q": "D'après le texte : Warum beginnt der Unterricht jetzt später?",
     "ok": "Weil Jugendliche morgens später wach werden als Erwachsene.",
     "bad": [
      "Weil die Eltern es verlangt haben.",
      "Weil die Lehrer morgens zu müde waren.",
      "Weil die Schüler abends länger am Handy bleiben wollten."
     ],
     "err": [
      "inverse le rôle des parents et celui des élèves",
      "attribue aux professeurs ce qui est dit des jeunes",
      "prend la crainte des parents pour la raison du changement"
     ]
    },
    {
     "id": "D17",
     "q": "D'après le texte : Was bedeutet « Heute fällt die Bilanz gemischt aus »?",
     "ok": "Es gibt positive und negative Ergebnisse.",
     "bad": [
      "Das Projekt ist ein Misserfolg.",
      "Der Unterricht fällt heute aus.",
      "Alle sind zufrieden."
     ],
     "err": [
      "lit « gemischt » comme un jugement négatif",
      "confond « ausfallen » (être annulé) et « gemischt ausfallen » (donner un résultat mitigé)",
      "lit « gemischt » comme un jugement positif"
     ]
    },
    {
     "id": "D18",
     "q": "D'après le texte : Welches Problem ist entstanden?",
     "ok": "Nach der Schule bleibt wenig Zeit für Hobbys.",
     "bad": [
      "Mehr Schüler kommen zu spät.",
      "Die Schüler sind in der ersten Stunde müder.",
      "Die Sportvereine haben geschlossen."
     ],
     "err": [
      "ne lit pas « weniger »",
      "contresens sur « aufmerksamer »",
      "conclut trop loin à partir de « kaum noch Zeit »"
     ]
    },
    {
     "id": "D19",
     "q": "D'après le texte : Was bedeutet « Kaum jemand möchte zum alten Stundenplan zurück »?",
     "ok": "Fast niemand will den alten Stundenplan wieder haben.",
     "bad": [
      "Viele möchten zum alten Stundenplan zurück.",
      "Niemand darf zum alten Stundenplan zurück.",
      "Der alte Stundenplan gilt wieder."
     ],
     "err": [
      "ne perçoit pas le sens négatif de kaum",
      "confond un souhait (möchte) et une interdiction (darf)",
      "confond un souhait et un fait"
     ]
    },
    {
     "id": "D20",
     "q": "Tu veux dire « Elle veut devenir médecin ». Sie will Ärztin ___ .",
     "ok": "werden",
     "bad": [
      "bekommen",
      "wird",
      "devenieren"
     ],
     "err": [
      "confond werden et bekommen, influence de l'anglais « become »",
      "choisit le bon verbe mais le conjugue après un verbe de modalité",
      "germanise le mot français"
     ]
    },
    {
     "id": "D21",
     "q": "Ich freue mich ___ die Ferien: Nur noch zwei Wochen Schule.",
     "ok": "auf",
     "bad": [
      "über",
      "für",
      "zu"
     ],
     "err": [
      "confond sich freuen auf (ce qui vient) et sich freuen über (ce qui est là)",
      "calque « pour »",
      "se trompe de préposition, calque de « à »"
     ]
    },
    {
     "id": "D22",
     "q": "Die Stadt ist teuer. ___ wollen viele junge Leute dort wohnen.",
     "ok": "Trotzdem",
     "bad": [
      "Obwohl",
      "Trotz",
      "Aber"
     ],
     "err": [
      "met une conjonction de subordination en tête d'une principale",
      "met une préposition seule en tête de phrase",
      "traite aber comme un adverbe qui occupe la première place"
     ]
    }
   ],
   "redaction": "« Die Schule sollte später am Morgen beginnen. » Bist du einverstanden? Réponds en allemand, en 80 à 100 mots : ta position, deux arguments, une objection à laquelle tu réponds, une conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Ich bin teilweise einverstanden. Wenn der Unterricht später beginnen würde, könnten wir länger schlafen und wären in der ersten Stunde konzentrierter. Außerdem müssten Schüler, die weit weg wohnen, nicht mehr um sechs Uhr aufstehen. Manche sagen, dass man dann einfach später ins Bett geht. Das stimmt vielleicht für einige, aber die meisten Jugendlichen sind morgens wirklich müde. Allerdings würde die Schule dann später enden, und es bliebe weniger Zeit für Sport oder Musik. Deshalb finde ich, dass neun Uhr ein guter Kompromiss wäre, aber nur, wenn der Nachmittag nicht zu lang wird. » Le prof regarde : une position nuancée, une objection traitée et pas seulement citée, le subjonctif II (würde, könnte, wäre), une relative, le verbe à la fin dans toutes les subordonnées, des connecteurs variés (außerdem, allerdings, deshalb), un lexique qui dépasse les mots de base.",
   "texte": "An einer Gesamtschule in Norddeutschland wurde vor zwei Jahren der Unterrichtsbeginn von acht auf neun Uhr verschoben. Die Idee kam von den Schülern selbst: Sie hatten gelesen, dass Jugendliche morgens später wach werden als Erwachsene. Viele Eltern waren zunächst dagegen, weil sie fürchteten, ihre Kinder würden abends einfach länger am Handy bleiben. Heute fällt die Bilanz gemischt aus. Die Lehrer berichten, dass die Klassen in der ersten Stunde aufmerksamer sind und weniger Schüler zu spät kommen. Allerdings endet der Unterricht nun erst um halb fünf, sodass für Sportvereine und Musikschule kaum noch Zeit bleibt. Kaum jemand möchte zum alten Stundenplan zurück. Trotzdem gibt die Schulleitung zu, dass sie die Folgen für die Freizeit unterschätzt hat.",
   "texte_ids": [
    "D16",
    "D17",
    "D18",
    "D19"
   ]
  }
 },
 "domaines": [
  {
   "nom": "Conjugaison et temps du verbe",
   "ids": {
    "A": [
     "A1",
     "A2",
     "A3",
     "A4",
     "A5"
    ],
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
     "C4",
     "C5"
    ],
    "D": [
     "D1",
     "D2",
     "D3",
     "D4",
     "D5"
    ]
   }
  },
  {
   "nom": "Place du verbe et construction de la phrase",
   "ids": {
    "A": [
     "A6",
     "A7",
     "A8",
     "A9",
     "A10"
    ],
    "B": [
     "B6",
     "B7",
     "B8",
     "B9",
     "B10"
    ],
    "C": [
     "C6",
     "C7",
     "C8",
     "C9",
     "C10"
    ],
    "D": [
     "D6",
     "D7",
     "D8",
     "D9",
     "D10"
    ]
   }
  },
  {
   "nom": "Cas, genres et prépositions",
   "ids": {
    "A": [
     "A11",
     "A12",
     "A13",
     "A14",
     "A15"
    ],
    "B": [
     "B11",
     "B12",
     "B13",
     "B14",
     "B15"
    ],
    "C": [
     "C11",
     "C12",
     "C13",
     "C14",
     "C15"
    ],
    "D": [
     "D11",
     "D12",
     "D13",
     "D14",
     "D15"
    ]
   }
  },
  {
   "nom": "Compréhension de l'écrit",
   "ids": {
    "A": [
     "A16",
     "A17",
     "A18",
     "A19"
    ],
    "B": [
     "B16",
     "B17",
     "B18",
     "B19"
    ],
    "C": [
     "C16",
     "C17",
     "C18",
     "C19"
    ],
    "D": [
     "D16",
     "D17",
     "D18",
     "D19"
    ]
   }
  },
  {
   "nom": "Lexique et expressions",
   "ids": {
    "A": [
     "A20",
     "A21",
     "A22"
    ],
    "B": [
     "B20",
     "B21",
     "B22"
    ],
    "C": [
     "C20",
     "C21",
     "C22"
    ],
    "D": [
     "D20",
     "D21",
     "D22"
    ]
   }
  }
 ],
 "criteres": [
  "Respect de la consigne",
  "Cohérence et enchaînement",
  "Étendue du lexique",
  "Place du verbe",
  "Cas, genres et accords",
  "Orthographe et ponctuation"
 ]
};
