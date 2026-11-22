window.DIAGS = window.DIAGS || {};
window.DIAGS["anglais"] = {
 "cle": "anglais",
 "matiere": "anglais",
 "titre": "Test d'anglais",
 "nom": "Diagnostic d'anglais",
 "commun": null,
 "niveaux": [
  [
   "A",
   "6e ou 5e"
  ],
  [
   "B",
   "4e ou 3e"
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
   "Sixième",
   "A"
  ],
  [
   "Cinquième",
   "A"
  ],
  [
   "Quatrième",
   "B"
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
 "source": "diagnostic-anglais-college-lycee.md",
 "blocs": {
  "A": {
   "titre": "6e et 5e",
   "questions": [
    {
     "id": "A1",
     "q": "My sister ___ twelve years old.",
     "ok": "is",
     "bad": [
      "has",
      "have",
      "are"
     ],
     "err": [
      "calque « avoir 12 ans » : met have à la place de be",
      "même calque, sans accorder le verbe",
      "choisit bien be mais ne l'accorde pas au sujet"
     ]
    },
    {
     "id": "A2",
     "q": "Tom ___ football every Saturday.",
     "ok": "plays",
     "bad": [
      "play",
      "is play",
      "playing"
     ],
     "err": [
      "oublie le -s de la troisième personne",
      "mélange be et la base verbale",
      "met -ing sans auxiliaire"
     ]
    },
    {
     "id": "A3",
     "q": "Right now, the dog ___ in the garden.",
     "ok": "is running",
     "bad": [
      "runs",
      "run",
      "is run"
     ],
     "err": [
      "prend le présent simple pour une action en cours, comme en français",
      "ni -ing ni accord : ne marque rien",
      "met be mais oublie -ing"
     ]
    },
    {
     "id": "A4",
     "q": "She ___ like fish.",
     "ok": "doesn't",
     "bad": [
      "don't",
      "isn't",
      "not"
     ],
     "err": [
      "n'accorde pas l'auxiliaire do à la troisième personne",
      "nie avec be au lieu de do",
      "nie sans auxiliaire, calque de « elle n'aime pas »"
     ]
    },
    {
     "id": "A5",
     "q": "There ___ two cats on the sofa.",
     "ok": "are",
     "bad": [
      "is",
      "have",
      "has"
     ],
     "err": [
      "traite there is comme « il y a », invariable",
      "calque « il y a » avec le verbe avoir",
      "même calque, au singulier"
     ]
    },
    {
     "id": "A6",
     "q": "Yesterday, we ___ to the swimming pool.",
     "ok": "went",
     "bad": [
      "go",
      "goed",
      "have gone"
     ],
     "err": [
      "ne marque pas le passé",
      "régularise un verbe irrégulier",
      "calque le passé composé alors que le moment est daté"
     ]
    },
    {
     "id": "A7",
     "q": "Choisis la question correcte.",
     "ok": "Do you like pizza?",
     "bad": [
      "Like you pizza?",
      "Are you like pizza?",
      "Does you like pizza?"
     ],
     "err": [
      "inverse sujet et verbe comme dans « Aimes-tu »",
      "prend be au lieu de do comme auxiliaire",
      "n'accorde pas l'auxiliaire au sujet you"
     ]
    },
    {
     "id": "A8",
     "q": "Tu veux savoir où habite Emma. Choisis la question correcte.",
     "ok": "Where does Emma live?",
     "bad": [
      "Where lives Emma?",
      "Where Emma lives?",
      "Where is Emma live?"
     ],
     "err": [
      "calque l'ordre de « Où habite Emma ? »",
      "garde l'ordre de la phrase affirmative, sans auxiliaire",
      "prend be au lieu de do comme auxiliaire"
     ]
    },
    {
     "id": "A9",
     "q": "Leo ___ swim very well.",
     "ok": "can",
     "bad": [
      "cans",
      "can to",
      "knows"
     ],
     "err": [
      "met un -s à un modal",
      "met to après un modal",
      "calque « sait nager » avec know"
     ]
    },
    {
     "id": "A10",
     "q": "I have two ___ .",
     "ok": "black cats",
     "bad": [
      "cats black",
      "blacks cats",
      "black cat"
     ],
     "err": [
      "place l'adjectif après le nom, comme en français",
      "accorde l'adjectif au pluriel, comme en français",
      "oublie le pluriel du nom après two"
     ]
    },
    {
     "id": "A11",
     "q": "A horse is ___ a dog.",
     "ok": "bigger than",
     "bad": [
      "more big than",
      "bigger that",
      "big than"
     ],
     "err": [
      "calque « plus grand » au lieu du comparatif en -er",
      "confond than et that pour traduire « que »",
      "oublie la marque du comparatif"
     ]
    },
    {
     "id": "A12",
     "q": "I ___ my homework after school.",
     "ok": "do",
     "bad": [
      "make",
      "work",
      "does"
     ],
     "err": [
      "confond do et make, un seul verbe « faire » en français",
      "prend « travailler » pour « faire ses devoirs »",
      "accorde le verbe à la troisième personne avec I"
     ]
    },
    {
     "id": "A13",
     "q": "Tu veux dire « J'ai faim ». Choisis la phrase correcte.",
     "ok": "I'm hungry.",
     "bad": [
      "I have hungry.",
      "I'm angry.",
      "I have hunger."
     ],
     "err": [
      "calque « avoir faim » avec have",
      "confond hungry et angry",
      "calque mot à mot avec le nom"
     ]
    },
    {
     "id": "A14",
     "q": "Il est 7 h 30. It's ___ .",
     "ok": "half past seven",
     "bad": [
      "seven and half",
      "seven half past",
      "seven hours thirty"
     ],
     "err": [
      "calque « sept heures et demie »",
      "connaît les mots mais pas leur ordre",
      "traduit « heures » mot à mot"
     ]
    },
    {
     "id": "A15",
     "q": "My mother's brother is my ___ .",
     "ok": "uncle",
     "bad": [
      "oncle",
      "aunt",
      "cousin"
     ],
     "err": [
      "écrit le mot français",
      "confond uncle et aunt",
      "confond les liens de parenté"
     ]
    },
    {
     "id": "A16",
     "q": "D'après le texte : how old is Maya's brother?",
     "ok": "He is six.",
     "bad": [
      "He is eleven.",
      "The text doesn't say.",
      "He is sixteen."
     ],
     "err": [
      "donne l'âge de Maya",
      "ne relie pas Sam à « my little brother »",
      "confond six et sixteen"
     ]
    },
    {
     "id": "A17",
     "q": "D'après le texte : which pet does the family have?",
     "ok": "a dog",
     "bad": [
      "a cat",
      "a dog and a cat",
      "no pets"
     ],
     "err": [
      "ne lit pas la négation « don't have »",
      "ne tient pas compte de « but »",
      "étend la négation à toute la phrase"
     ]
    },
    {
     "id": "A18",
     "q": "D'après le texte : when does Maya play basketball?",
     "ok": "on Saturday mornings",
     "bad": [
      "on Saturday afternoons",
      "every morning",
      "on Sunday mornings"
     ],
     "err": [
      "confond les deux moments de la journée",
      "ne lit pas « On Saturdays »",
      "confond Saturday et Sunday"
     ]
    },
    {
     "id": "A19",
     "q": "D'après le texte : what does Sam think of pancakes?",
     "ok": "He doesn't like them.",
     "bad": [
      "He loves them.",
      "He prefers them to toast.",
      "He makes them with his dad."
     ],
     "err": [
      "attribue à Sam l'avis de Maya",
      "lit « prefers » à l'envers",
      "confond Sam et Maya"
     ]
    },
    {
     "id": "A20",
     "q": "I get up ___ seven o'clock.",
     "ok": "at",
     "bad": [
      "in",
      "on",
      "to"
     ],
     "err": [
      "confond avec « in the morning »",
      "confond avec la préposition des jours",
      "calque « à » par to"
     ]
    },
    {
     "id": "A21",
     "q": "My mother is ___ .",
     "ok": "a doctor",
     "bad": [
      "doctor",
      "an doctor",
      "one doctor"
     ],
     "err": [
      "calque « ma mère est médecin », sans article",
      "ne connaît pas la règle a ou an",
      "confond l'article et le nombre, « un » en français"
     ]
    },
    {
     "id": "A22",
     "q": "I like ___ music.",
     "ok": "listening to",
     "bad": [
      "listen to",
      "listening",
      "to listening to"
     ],
     "err": [
      "met la base verbale après like",
      "oublie to, calque de « écouter la musique »",
      "mélange l'infinitif et la forme en -ing"
     ]
    }
   ],
   "redaction": "Présente-toi en anglais, en 5 à 6 phrases : ton prénom et ton âge, ta famille, ce que tu aimes et ce que tu n'aimes pas, ce que tu fais le week-end. Écris des phrases complètes. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « My name is Lina and I'm twelve. I live in Lyon with my parents and my two sisters. I like drawing and I love cats, but I don't like football. On Saturdays I go to the swimming pool with my friend. On Sundays I usually watch a film with my family. » Le prof regarde : be pour l'âge, le -s de la troisième personne, la négation avec don't, like suivi de -ing ou d'un nom, la place de l'adjectif, la majuscule aux jours.",
   "texte": "Hi, my name is Maya. I'm eleven and I live in Bristol with my mum, my dad and my little brother, Sam. Sam is six. We have a dog called Pepper, but we don't have a cat. On Saturdays I play basketball with my friends in the morning. In the afternoon I usually help my dad in the kitchen: we make pancakes. I love pancakes, but Sam doesn't like them. He prefers toast.",
   "texte_ids": [
    "A16",
    "A17",
    "A18",
    "A19"
   ]
  },
  "B": {
   "titre": "4e et 3e",
   "questions": [
    {
     "id": "B1",
     "q": "I ___ TV when the phone rang.",
     "ok": "was watching",
     "bad": [
      "am watching",
      "was watch",
      "have watched"
     ],
     "err": [
      "reste au présent dans un récit au passé",
      "met be mais oublie -ing",
      "calque le passé composé"
     ]
    },
    {
     "id": "B2",
     "q": "I ___ my grandparents last weekend.",
     "ok": "visited",
     "bad": [
      "have visited",
      "visit",
      "did visited"
     ],
     "err": [
      "calque le passé composé alors que le moment est daté",
      "ne marque pas le passé",
      "marque deux fois le passé"
     ]
    },
    {
     "id": "B3",
     "q": "She ___ in London since 2020.",
     "ok": "has lived",
     "bad": [
      "lives",
      "is living",
      "lived"
     ],
     "err": [
      "calque le présent français avec « depuis »",
      "même calque, à la forme en -ing",
      "prend le prétérit, qui coupe le lien avec le présent"
     ]
    },
    {
     "id": "B4",
     "q": "Have you ever ___ sushi?",
     "ok": "eaten",
     "bad": [
      "ate",
      "eat",
      "eating"
     ],
     "err": [
      "confond prétérit et participe passé",
      "met la base verbale après have",
      "met -ing après have"
     ]
    },
    {
     "id": "B5",
     "q": "Look at those black clouds. It ___ rain.",
     "ok": "is going to",
     "bad": [
      "goes to",
      "is going",
      "going to"
     ],
     "err": [
      "calque « va pleuvoir » sans be",
      "oublie to",
      "oublie l'auxiliaire be"
     ]
    },
    {
     "id": "B6",
     "q": "If it ___ tomorrow, we will stay at home.",
     "ok": "rains",
     "bad": [
      "will rain",
      "rain",
      "rained"
     ],
     "err": [
      "met le futur après if",
      "oublie le -s de la troisième personne",
      "mélange deux types de phrases en if"
     ]
    },
    {
     "id": "B7",
     "q": "Choisis la question correcte.",
     "ok": "What did you do yesterday?",
     "bad": [
      "What did you did yesterday?",
      "What you did yesterday?",
      "What have you done yesterday?"
     ],
     "err": [
      "marque deux fois le passé",
      "garde l'ordre de la phrase affirmative, sans auxiliaire",
      "calque le passé composé avec yesterday"
     ]
    },
    {
     "id": "B8",
     "q": "You ___ use your phone in class: it's forbidden.",
     "ok": "mustn't",
     "bad": [
      "don't have to",
      "mustn't to",
      "don't must"
     ],
     "err": [
      "confond interdiction et absence d'obligation",
      "met to après un modal",
      "nie un modal avec do"
     ]
    },
    {
     "id": "B9",
     "q": "This is ___ film I have ever seen.",
     "ok": "the best",
     "bad": [
      "the most good",
      "the better",
      "the goodest"
     ],
     "err": [
      "calque « le plus bon » au lieu de la forme irrégulière",
      "confond comparatif et superlatif, calque de « le meilleur »",
      "régularise une forme irrégulière"
     ]
    },
    {
     "id": "B10",
     "q": "There isn't ___ milk in the fridge.",
     "ok": "much",
     "bad": [
      "many",
      "a lot",
      "no"
     ],
     "err": [
      "confond dénombrable et indénombrable",
      "oublie of après a lot",
      "met une double négation"
     ]
    },
    {
     "id": "B11",
     "q": "This castle ___ in 1250.",
     "ok": "was built",
     "bad": [
      "built",
      "has been built",
      "was build"
     ],
     "err": [
      "prend la forme active pour un sens passif",
      "calque « a été construit » malgré la date",
      "met la base verbale au lieu du participe passé"
     ]
    },
    {
     "id": "B12",
     "q": "My sister is very ___ : she cries when she watches sad films.",
     "ok": "sensitive",
     "bad": [
      "sensible",
      "sensitif",
      "sensibility"
     ],
     "err": [
      "faux ami : sensible veut dire raisonnable",
      "écrit le mot français avec une allure anglaise",
      "met le nom à la place de l'adjectif"
     ]
    },
    {
     "id": "B13",
     "q": "I ___ the bus this morning, so I was late for school.",
     "ok": "missed",
     "bad": [
      "lost",
      "failed",
      "lacked"
     ],
     "err": [
      "confond miss et lose",
      "traduit « rater » par fail",
      "traduit « manquer » par lack"
     ]
    },
    {
     "id": "B14",
     "q": "She ___ me that she was tired.",
     "ok": "told",
     "bad": [
      "said",
      "told to",
      "telled"
     ],
     "err": [
      "confond say et tell, un seul verbe « dire » en français",
      "ajoute to, calque de « dire à »",
      "régularise un verbe irrégulier"
     ]
    },
    {
     "id": "B15",
     "q": "I'm very ___ in history.",
     "ok": "interested",
     "bad": [
      "interesting",
      "interest",
      "interessed"
     ],
     "err": [
      "confond l'adjectif en -ed et l'adjectif en -ing",
      "met le nom à la place de l'adjectif",
      "calque l'orthographe de « intéressé »"
     ]
    },
    {
     "id": "B16",
     "q": "D'après le texte : why was Jake nervous on the train?",
     "ok": "It was his first trip without his parents.",
     "bad": [
      "He had never taken a train before.",
      "He was travelling without his aunt.",
      "The train was late."
     ],
     "err": [
      "rattache « never » au train",
      "confond aunt et parents",
      "répond sans appui dans le texte"
     ]
    },
    {
     "id": "B17",
     "q": "D'après le texte : what does « more sheep than people » tell us about the island?",
     "ok": "Very few people live there.",
     "bad": [
      "Nobody lives there.",
      "There are more people than sheep.",
      "It is a very big island."
     ],
     "err": [
      "lit la comparaison comme une absence totale",
      "inverse la comparaison",
      "ne tient pas compte de « small »"
     ]
    },
    {
     "id": "B18",
     "q": "D'après le texte : how did Jake's feelings change during the holiday?",
     "ok": "He was bored at first, then he enjoyed it.",
     "bad": [
      "He enjoyed it at first, then he got bored.",
      "He was bored until the end.",
      "He enjoyed it from the first day."
     ],
     "err": [
      "inverse « At first » et « Then »",
      "s'arrête à la première moitié du texte",
      "ne lit pas « At first »"
     ]
    },
    {
     "id": "B19",
     "q": "D'après le texte : what does the last sentence show?",
     "ok": "Jake wants to return to the island.",
     "bad": [
      "Jake has already come back to the island.",
      "His aunt has asked him to come back.",
      "His aunt said no."
     ],
     "err": [
      "rattache « already » à come back",
      "inverse qui demande et à qui",
      "invente la réponse de la tante"
     ]
    },
    {
     "id": "B20",
     "q": "I have known him ___ three years.",
     "ok": "for",
     "bad": [
      "since",
      "during",
      "from"
     ],
     "err": [
      "confond for et since, un seul mot « depuis » en français",
      "traduit « pendant » par during",
      "calque « depuis » par from"
     ]
    },
    {
     "id": "B21",
     "q": "___ it was raining, we went for a walk.",
     "ok": "Although",
     "bad": [
      "Despite",
      "However",
      "But"
     ],
     "err": [
      "met despite devant une proposition",
      "prend l'adverbe however pour une conjonction",
      "met but en tête de phrase à la place d'une subordonnée"
     ]
    },
    {
     "id": "B22",
     "q": "The girl ___ lives next door is my friend.",
     "ok": "who",
     "bad": [
      "which",
      "what",
      "she"
     ],
     "err": [
      "confond who et which, personne et chose",
      "traduit « qui » par what",
      "met un pronom personnel à la place du relatif"
     ]
    }
   ],
   "redaction": "Raconte en anglais ton dernier week-end ou tes dernières vacances, en 6 à 8 phrases : où tu étais, avec qui, ce que tu as fait, ce que tu as préféré et pourquoi. Termine par une phrase sur ce que tu feras la prochaine fois. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Last weekend I went to my cousin's house in Nantes with my mother. On Saturday we visited the castle and we ate crêpes in the old town. In the evening we watched a film, but it was too long and I fell asleep. On Sunday it was raining, so we stayed at home and played cards. My favourite moment was the castle because the view was amazing. Next time I will take more photos. » Le prof regarde : le prétérit tenu d'un bout à l'autre, les verbes irréguliers, un futur dans la dernière phrase, au moins deux connecteurs (but, so, because), un avis justifié.",
   "texte": "Last summer, Jake spent two weeks in Scotland with his aunt. He had never travelled without his parents before, so he felt a bit nervous on the train. His aunt lives on a small island where there are more sheep than people. At first Jake found it boring because there was no wifi. Then he met Isla, a girl of his age, who taught him how to fish. By the end of the holiday he didn't want to leave. He has already asked his aunt if he can come back next year.",
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
     "q": "I ___ for the bus for twenty minutes, and it still hasn't come.",
     "ok": "have been waiting",
     "bad": [
      "am waiting",
      "wait",
      "have waiting"
     ],
     "err": [
      "calque le présent français avec « depuis »",
      "même calque, au présent simple",
      "forme incomplète : oublie been"
     ]
    },
    {
     "id": "C2",
     "q": "When we arrived at the cinema, the film ___ .",
     "ok": "had already started",
     "bad": [
      "has already started",
      "was already started",
      "had already start"
     ],
     "err": [
      "met le present perfect dans un récit au passé",
      "calque « était déjà commencé »",
      "met la base verbale au lieu du participe passé"
     ]
    },
    {
     "id": "C3",
     "q": "I ___ my keys yesterday, and I still can't find them.",
     "ok": "lost",
     "bad": [
      "have lost",
      "losed",
      "did lost"
     ],
     "err": [
      "calque le passé composé alors que le moment est daté",
      "régularise un verbe irrégulier",
      "marque deux fois le passé"
     ]
    },
    {
     "id": "C4",
     "q": "If I ___ more time, I would learn Spanish.",
     "ok": "had",
     "bad": [
      "would have",
      "have",
      "will have"
     ],
     "err": [
      "met would dans la proposition en if",
      "met le présent : ne marque pas l'irréel",
      "met le futur après if"
     ]
    },
    {
     "id": "C5",
     "q": "I'll call you when I ___ home.",
     "ok": "get",
     "bad": [
      "will get",
      "would get",
      "got"
     ],
     "err": [
      "calque le futur de « quand j'arriverai »",
      "met le conditionnel après when",
      "met un passé pour un fait à venir"
     ]
    },
    {
     "id": "C6",
     "q": "She left without ___ goodbye.",
     "ok": "saying",
     "bad": [
      "to say",
      "say",
      "said"
     ],
     "err": [
      "calque l'infinitif de « sans dire »",
      "met la base verbale après une préposition",
      "met le prétérit après une préposition"
     ]
    },
    {
     "id": "C7",
     "q": "English ___ all over the world.",
     "ok": "is spoken",
     "bad": [
      "is speaking",
      "is spoke",
      "speaks"
     ],
     "err": [
      "confond le passif et la forme be + -ing",
      "confond prétérit et participe passé",
      "prend la forme active, calque de « l'anglais se parle »"
     ]
    },
    {
     "id": "C8",
     "q": "He asked me where ___ .",
     "ok": "I lived",
     "bad": [
      "did I live",
      "that I lived",
      "lived I"
     ],
     "err": [
      "garde l'ordre de la question directe",
      "ajoute that, calque de « où est-ce que »",
      "inverse sujet et verbe comme en français"
     ]
    },
    {
     "id": "C9",
     "q": "You should ___ me earlier. Now it's too late.",
     "ok": "have told",
     "bad": [
      "told",
      "had told",
      "have tell"
     ],
     "err": [
      "met le prétérit après un modal",
      "prend had au lieu de have, calque de « tu aurais dû »",
      "met la base verbale après have"
     ]
    },
    {
     "id": "C10",
     "q": "My parents want ___ harder.",
     "ok": "me to work",
     "bad": [
      "that I work",
      "I work",
      "me work"
     ],
     "err": [
      "calque « veulent que je travaille »",
      "même calque, sans that",
      "oublie to"
     ]
    },
    {
     "id": "C11",
     "q": "Who ___ the window? I want a name.",
     "ok": "broke",
     "bad": [
      "did break",
      "did broke",
      "has broke"
     ],
     "err": [
      "ajoute do alors que who est sujet",
      "même erreur, avec le passé marqué deux fois",
      "confond prétérit et participe passé"
     ]
    },
    {
     "id": "C12",
     "q": "Choisis la phrase correcte.",
     "ok": "I agree with you.",
     "bad": [
      "I am agree with you.",
      "I'm agreed with you.",
      "I agree you."
     ],
     "err": [
      "calque « être d'accord »",
      "même calque, avec un participe",
      "oublie la préposition with"
     ]
    },
    {
     "id": "C13",
     "q": "She is ___ working on a new project.",
     "ok": "currently",
     "bad": [
      "actually",
      "actual",
      "eventually"
     ],
     "err": [
      "faux ami : actually veut dire en fait",
      "met l'adjectif à la place de l'adverbe",
      "faux ami : eventually veut dire finalement"
     ]
    },
    {
     "id": "C14",
     "q": "About fifty students ___ the meeting last night.",
     "ok": "attended",
     "bad": [
      "assisted",
      "assisted to",
      "attended to"
     ],
     "err": [
      "faux ami : assist veut dire aider",
      "même faux ami, avec le calque de « assister à »",
      "ajoute une préposition, calque de « à »"
     ]
    },
    {
     "id": "C15",
     "q": "This song ___ me of my holidays.",
     "ok": "reminds",
     "bad": [
      "remembers",
      "recalls",
      "memories"
     ],
     "err": [
      "confond remember et remind",
      "traduit « rappelle » par recall, avec la mauvaise construction",
      "met un nom à la place du verbe"
     ]
    },
    {
     "id": "C16",
     "q": "D'après le texte : how did Priya react to the announcement?",
     "ok": "Unlike most students, she was not angry.",
     "bad": [
      "Like most students, she was furious.",
      "She was the only student who was furious.",
      "She did not care about phones at all."
     ],
     "err": [
      "ne lit pas « Priya was not »",
      "inverse Priya et les autres",
      "conclut trop loin : elle regardait son téléphone sans arrêt"
     ]
    },
    {
     "id": "C17",
     "q": "D'après le texte : what does « she kept reaching for her pocket, as if something was missing » mean?",
     "ok": "She was so used to her phone that she looked for it without thinking.",
     "bad": [
      "She had lost her phone.",
      "She kept her phone hidden in her pocket.",
      "She missed her friends."
     ],
     "err": [
      "lit « missing » au sens propre",
      "contresens sur « kept »",
      "confond les deux sens de miss"
     ]
    },
    {
     "id": "C18",
     "q": "D'après le texte : why did lunch breaks become louder?",
     "ok": "Students were talking to each other instead of looking at their phones.",
     "bad": [
      "Students were protesting against the rule.",
      "Students were phoning their parents.",
      "Students were playing music on their phones."
     ],
     "err": [
      "relie le bruit à la colère du début",
      "prend « call their parents » pour un fait",
      "oublie que les téléphones sont enfermés"
     ]
    },
    {
     "id": "C19",
     "q": "D'après le texte : what is Priya's opinion at the end?",
     "ok": "The rule goes too far, but she prefers the situation now.",
     "bad": [
      "The rule is perfect as it is.",
      "The rule is too strict, so she wants the old situation back.",
      "The rule should be stricter."
     ],
     "err": [
      "ne lit pas « too strict »",
      "contresens sur « would not go back »",
      "contresens sur « too strict »"
     ]
    },
    {
     "id": "C20",
     "q": "I'm looking forward ___ you soon.",
     "ok": "to seeing",
     "bad": [
      "to see",
      "seeing",
      "for seeing"
     ],
     "err": [
      "prend to pour la marque de l'infinitif",
      "oublie la préposition",
      "se trompe de préposition, calque de « pour »"
     ]
    },
    {
     "id": "C21",
     "q": "___ , school uniforms are a good idea.",
     "ok": "In my opinion",
     "bad": [
      "According to me",
      "To my opinion",
      "At my opinion"
     ],
     "err": [
      "calque « selon moi »",
      "calque « à mon avis » avec to",
      "calque « à mon avis » avec at"
     ]
    },
    {
     "id": "C22",
     "q": "The train was cancelled. ___ , we arrived two hours late.",
     "ok": "As a result",
     "bad": [
      "Because",
      "Despite",
      "In effect"
     ],
     "err": [
      "prend la conjonction because pour un connecteur de phrase",
      "prend la préposition despite pour un connecteur de phrase",
      "faux ami : calque « en effet »"
     ]
    }
   ],
   "redaction": "Should mobile phones be banned in secondary schools? Donne ton avis en anglais, en 80 à 100 mots : ta position, deux arguments, un exemple, une phrase de conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « In my opinion, phones should not be completely banned at school. First, students sometimes need them to contact their parents, for example when a lesson is cancelled. Secondly, a phone can be a useful tool: last year we used ours to record interviews in English. However, I agree that they should stay in our bags during lessons, because it is hard to concentrate when you receive messages. To conclude, I think clear rules would be better than a total ban. » Le prof regarde : une position annoncée dès la première phrase, des arguments reliés par des connecteurs, les modaux should et can, une concession, pas de calque du type « I am agree » ou « according to me ».",
   "texte": "When Priya's school announced that phones would be locked away during the day, most students were furious. Priya was not. For months she had been checking her messages every few minutes, even in lessons, and her marks had dropped. During the first week of the ban she kept reaching for her pocket, as if something was missing. By the third week, however, she noticed that lunch breaks had become louder: people were actually talking to each other. She still thinks the rule is too strict, since students cannot even call their parents in an emergency. But she admits she would not go back to the way things were.",
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
     "q": "If she had left earlier, she ___ the train.",
     "ok": "wouldn't have missed",
     "bad": [
      "wouldn't miss",
      "hadn't missed",
      "wouldn't had missed"
     ],
     "err": [
      "mélange l'irréel du présent et l'irréel du passé",
      "met had dans les deux propositions",
      "met had après would"
     ]
    },
    {
     "id": "D2",
     "q": "It's the first time I ___ sushi.",
     "ok": "have eaten",
     "bad": [
      "eat",
      "am eating",
      "ate"
     ],
     "err": [
      "calque le présent de « c'est la première fois que je mange »",
      "même calque, à la forme en -ing",
      "prend le prétérit pour le present perfect"
     ]
    },
    {
     "id": "D3",
     "q": "I wish I ___ more free time, but my timetable is full.",
     "ok": "had",
     "bad": [
      "have",
      "would have",
      "will have"
     ],
     "err": [
      "met le présent après wish",
      "met would have après wish, comme dans la principale",
      "met le futur après wish"
     ]
    },
    {
     "id": "D4",
     "q": "Your English is very good. How long ___ it?",
     "ok": "have you been learning",
     "bad": [
      "do you learn",
      "are you learning",
      "you have been learning"
     ],
     "err": [
      "calque le présent de « depuis combien de temps apprends-tu »",
      "même calque, à la forme en -ing",
      "oublie l'inversion de la question"
     ]
    },
    {
     "id": "D5",
     "q": "I'm not used to ___ up so early.",
     "ok": "getting",
     "bad": [
      "get",
      "got",
      "be getting"
     ],
     "err": [
      "confond used to + base verbale et be used to + -ing",
      "met un passé après used to",
      "mélange les deux constructions"
     ]
    },
    {
     "id": "D6",
     "q": "He suggested ___ a taxi.",
     "ok": "taking",
     "bad": [
      "to take",
      "us to take",
      "to taking"
     ],
     "err": [
      "calque l'infinitif de « a proposé de prendre »",
      "calque la construction de want",
      "mélange to et -ing"
     ]
    },
    {
     "id": "D7",
     "q": "A new hospital ___ in our town at the moment.",
     "ok": "is being built",
     "bad": [
      "is building",
      "is been built",
      "builds itself"
     ],
     "err": [
      "prend la forme active pour un sens passif",
      "confond been et being",
      "calque le pronominal de « se construit »"
     ]
    },
    {
     "id": "D8",
     "q": "« Don't touch it », she said. She told me ___ it.",
     "ok": "not to touch",
     "bad": [
      "don't touch",
      "that I don't touch",
      "to don't touch"
     ],
     "err": [
      "garde l'impératif du discours direct",
      "calque « que je ne touche pas »",
      "nie l'infinitif avec do"
     ]
    },
    {
     "id": "D9",
     "q": "He ___ be at home: his car isn't there and all the lights are off.",
     "ok": "can't",
     "bad": [
      "mustn't",
      "doesn't can",
      "can't to"
     ],
     "err": [
      "nie must pour exprimer une déduction négative",
      "nie un modal avec do",
      "met to après un modal"
     ]
    },
    {
     "id": "D10",
     "q": "___ you practise, ___ you get.",
     "ok": "The more / the better",
     "bad": [
      "More / better",
      "The more / the best",
      "The more / the more good"
     ],
     "err": [
      "calque « plus... plus » sans the",
      "confond comparatif et superlatif",
      "ne connaît pas le comparatif irrégulier de good"
     ]
    },
    {
     "id": "D11",
     "q": "I don't understand ___ he said.",
     "ok": "what",
     "bad": [
      "that",
      "which",
      "this that"
     ],
     "err": [
      "traduit « ce que » par that",
      "confond what et which",
      "calque « ce que » mot à mot"
     ]
    },
    {
     "id": "D12",
     "q": "The government has ___ taxes by 3%.",
     "ok": "raised",
     "bad": [
      "risen",
      "rose",
      "rised"
     ],
     "err": [
      "confond rise, sans complément, et raise, avec complément",
      "même confusion, au prétérit",
      "régularise rise"
     ]
    },
    {
     "id": "D13",
     "q": "Tu veux dire « Il prétend être médecin ». Choisis la phrase correcte.",
     "ok": "He claims to be a doctor.",
     "bad": [
      "He pretends to be a doctor.",
      "He pretends being a doctor.",
      "He claims being a doctor."
     ],
     "err": [
      "faux ami : pretend veut dire faire semblant",
      "même faux ami, avec -ing au lieu de l'infinitif",
      "bon verbe, mais -ing au lieu de l'infinitif"
     ]
    },
    {
     "id": "D14",
     "q": "The government's new ___ on immigration was announced today.",
     "ok": "policy",
     "bad": [
      "politic",
      "politics",
      "police"
     ],
     "err": [
      "calque « politique »",
      "confond la politique en général et une politique précise",
      "confond policy et police"
     ]
    },
    {
     "id": "D15",
     "q": "Whether we go or not ___ the weather.",
     "ok": "depends on",
     "bad": [
      "depends of",
      "depends from",
      "is depending of"
     ],
     "err": [
      "calque « dépend de »",
      "traduit « de » par from",
      "même calque, avec une forme en -ing inutile"
     ]
    },
    {
     "id": "D16",
     "q": "D'après le texte : why does building more roads fail to reduce traffic?",
     "ok": "Easier driving encourages more people to drive.",
     "bad": [
      "New roads take too long to build.",
      "Researchers ask for more roads.",
      "Very few drivers use the new lanes."
     ],
     "err": [
      "s'appuie sur « as soon as they open » sans le comprendre",
      "contresens sur « demand »",
      "contresens sur « fill up »"
     ]
    },
    {
     "id": "D17",
     "q": "D'après le texte : what does « Shopkeepers were up in arms » mean?",
     "ok": "They were strongly opposed to the plan.",
     "bad": [
      "They carried weapons.",
      "They welcomed the plan with open arms.",
      "They gave up their shops."
     ],
     "err": [
      "lit l'expression au sens propre",
      "confond avec « with open arms »",
      "confond avec « give up »"
     ]
    },
    {
     "id": "D18",
     "q": "D'après le texte : what happened to shops in the centre?",
     "ok": "More people walk there, but some stores selling large items have left.",
     "bad": [
      "All the shops lost their customers.",
      "All the shops are doing better.",
      "Furniture stores opened in the centre."
     ],
     "err": [
      "retient la crainte des commerçants, pas le résultat",
      "s'arrête à « has risen », ne lit pas « yet »",
      "contresens sur « moved to the outskirts »"
     ]
    },
    {
     "id": "D19",
     "q": "D'après le texte : what does « Hardly anyone now suggests reopening the avenues » mean?",
     "ok": "Almost nobody wants cars back in the avenues.",
     "bad": [
      "Many people are working hard to reopen the avenues.",
      "Everyone suggests reopening the avenues.",
      "The avenues have already been reopened."
     ],
     "err": [
      "prend hardly pour l'adverbe de hard",
      "ne perçoit pas le sens négatif de hardly",
      "confond la proposition et le fait"
     ]
    },
    {
     "id": "D20",
     "q": "___ the high cost, the project was approved.",
     "ok": "Despite",
     "bad": [
      "Although",
      "In spite",
      "Despite of"
     ],
     "err": [
      "met une conjonction devant un groupe nominal",
      "oublie of après in spite",
      "mélange despite et in spite of"
     ]
    },
    {
     "id": "D21",
     "q": "Tom loves the city, ___ his sister prefers the countryside.",
     "ok": "whereas",
     "bad": [
      "however",
      "despite",
      "on the contrary"
     ],
     "err": [
      "prend l'adverbe however pour une conjonction",
      "met une préposition devant une proposition",
      "calque « au contraire » pour un simple contraste"
     ]
    },
    {
     "id": "D22",
     "q": "We need to ___ this problem before Friday.",
     "ok": "discuss",
     "bad": [
      "discuss about",
      "discuss of",
      "talk"
     ],
     "err": [
      "calque « discuter de » avec about",
      "calque « discuter de » avec of",
      "oublie about après talk"
     ]
    }
   ],
   "redaction": "« Cities should ban cars from their centres. » Do you agree? Réponds en anglais, en 100 à 120 mots : ta position, deux arguments, une objection à laquelle tu réponds, une conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « I partly agree with this statement. Banning cars from city centres would clearly reduce pollution and noise, which would make streets safer and more pleasant for pedestrians. Moreover, the space that is currently used for parking could be turned into parks or cycle lanes. Some people argue that shops would lose customers. Although this may be true for stores selling heavy goods, most shops actually benefit when more people walk past their windows. However, a ban only works if public transport is reliable and affordable. Otherwise, people living outside the city would simply be excluded. To sum up, I believe cars should be banned from centres, provided that real alternatives are offered first. » Le prof regarde : une position nuancée, une objection traitée et pas seulement citée, des connecteurs variés (moreover, although, however, otherwise), le conditionnel et un passif, un lexique qui dépasse les mots de base.",
   "texte": "For years, cities have tried to tackle traffic by building more roads, only to find that the new lanes fill up almost as soon as they open. Researchers call this « induced demand »: when driving becomes easier, more people choose to drive. One medium-sized city took the opposite approach. Instead of widening its ring road, it closed two central avenues to cars and spent the savings on trams. Shopkeepers were up in arms, convinced that customers would stay away. Two years on, the picture is more nuanced than either side predicted. The number of people walking in the centre has risen, yet several furniture and appliance stores have moved to the outskirts, where customers can load their cars. Hardly anyone now suggests reopening the avenues. Still, the council concedes that it underestimated how much some businesses depend on drivers.",
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
   "nom": "Temps et formes du verbe",
   "ids": {
    "A": [
     "A1",
     "A2",
     "A3",
     "A4",
     "A5",
     "A6"
    ],
    "B": [
     "B1",
     "B2",
     "B3",
     "B4",
     "B5",
     "B6"
    ],
    "C": [
     "C1",
     "C2",
     "C3",
     "C4",
     "C5",
     "C6"
    ],
    "D": [
     "D1",
     "D2",
     "D3",
     "D4",
     "D5",
     "D6"
    ]
   }
  },
  {
   "nom": "Construction de la phrase",
   "ids": {
    "A": [
     "A7",
     "A8",
     "A9",
     "A10",
     "A11"
    ],
    "B": [
     "B7",
     "B8",
     "B9",
     "B10",
     "B11"
    ],
    "C": [
     "C7",
     "C8",
     "C9",
     "C10",
     "C11"
    ],
    "D": [
     "D7",
     "D8",
     "D9",
     "D10",
     "D11"
    ]
   }
  },
  {
   "nom": "Lexique",
   "ids": {
    "A": [
     "A12",
     "A13",
     "A14",
     "A15"
    ],
    "B": [
     "B12",
     "B13",
     "B14",
     "B15"
    ],
    "C": [
     "C12",
     "C13",
     "C14",
     "C15"
    ],
    "D": [
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
   "nom": "Structures de l'expression",
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
  "Correction grammaticale",
  "Orthographe et ponctuation"
 ]
};
