window.DIAGS = window.DIAGS || {};
window.DIAGS["espagnol"] = {
 "cle": "espagnol",
 "matiere": "espagnol",
 "titre": "Test d'espagnol",
 "nom": "Diagnostic d'espagnol",
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
 "source": "diagnostic-espagnol-college-lycee.md",
 "blocs": {
  "A": {
   "titre": "5e et 4e",
   "questions": [
    {
     "id": "A1",
     "q": "Mi hermana ___ doce años.",
     "ok": "tiene",
     "bad": [
      "ha",
      "tengo",
      "es"
     ],
     "err": [
      "calque « elle a » avec haber au lieu de tener",
      "bon verbe, mais à la première personne",
      "calque l'anglais : dit l'âge avec ser"
     ]
    },
    {
     "id": "A2",
     "q": "Yo ___ español e inglés.",
     "ok": "hablo",
     "bad": [
      "habla",
      "hablar",
      "hablas"
     ],
     "err": [
      "prend la troisième personne, « je parle » et « il parle » se ressemblent en français",
      "laisse le verbe à l'infinitif",
      "confond la première et la deuxième personne"
     ]
    },
    {
     "id": "A3",
     "q": "Mi madre ___ profesora.",
     "ok": "es",
     "bad": [
      "está",
      "tiene",
      "soy"
     ],
     "err": [
      "confond ser et estar : un métier se dit avec ser",
      "confond ser et tener",
      "bon verbe, mais à la première personne"
     ]
    },
    {
     "id": "A4",
     "q": "Madrid ___ en el centro de España.",
     "ok": "está",
     "bad": [
      "es",
      "hay",
      "tiene"
     ],
     "err": [
      "confond ser et estar : le lieu se dit avec estar",
      "prend hay pour situer une chose précise",
      "calque « avoir » sans raison"
     ]
    },
    {
     "id": "A5",
     "q": "En mi clase ___ veinte alumnos.",
     "ok": "hay",
     "bad": [
      "están",
      "ha",
      "tiene"
     ],
     "err": [
      "confond hay et estar",
      "calque « il y a » avec haber conjugué",
      "calque « il y a » avec le verbe avoir"
     ]
    },
    {
     "id": "A6",
     "q": "Nosotros ___ en Lyon.",
     "ok": "vivimos",
     "bad": [
      "vivemos",
      "viven",
      "vivir"
     ],
     "err": [
      "applique la terminaison des verbes en -er à un verbe en -ir",
      "n'accorde pas le verbe avec nosotros",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "A7",
     "q": "Tu veux dire « Je ne parle pas italien ». Choisis la phrase correcte.",
     "ok": "No hablo italiano.",
     "bad": [
      "Hablo no italiano.",
      "No hablo pas italiano.",
      "Ne hablo italiano."
     ],
     "err": [
      "place la négation après le verbe",
      "calque le français : garde « pas »",
      "écrit la négation française « ne »"
     ]
    },
    {
     "id": "A8",
     "q": "Tu veux demander son âge à un camarade. Choisis la question correcte.",
     "ok": "¿Cuántos años tienes?",
     "bad": [
      "¿Cuántos años eres?",
      "¿Cuántos años has?",
      "¿Cuánto años tienes?"
     ],
     "err": [
      "calque l'anglais : dit l'âge avec ser",
      "calque « as » avec haber au lieu de tener",
      "n'accorde pas cuántos au pluriel"
     ]
    },
    {
     "id": "A9",
     "q": "Tu veux dire « J'aime le chocolat ». ___ el chocolate.",
     "ok": "Me gusta",
     "bad": [
      "Yo gusto",
      "Me gusto",
      "Yo gusta"
     ],
     "err": [
      "conjugue gustar comme « aimer », avec yo pour sujet",
      "met le pronom mais accorde le verbe avec « je »",
      "garde yo comme sujet de gustar"
     ]
    },
    {
     "id": "A10",
     "q": "Tengo dos ___ .",
     "ok": "gatos negros",
     "bad": [
      "negros gatos",
      "gatos negro",
      "gato negros"
     ],
     "err": [
      "place l'adjectif avant le nom",
      "n'accorde pas l'adjectif au pluriel, qui ne s'entend pas en français",
      "oublie le pluriel du nom après dos"
     ]
    },
    {
     "id": "A11",
     "q": "___ padres son simpáticos.",
     "ok": "Mis",
     "bad": [
      "Mi",
      "Mes",
      "Los mis"
     ],
     "err": [
      "n'accorde pas le possessif au pluriel",
      "écrit le mot français",
      "ajoute un article devant le possessif"
     ]
    },
    {
     "id": "A12",
     "q": "Il est 7 h 30. Son las ___ .",
     "ok": "siete y media",
     "bad": [
      "siete y medio",
      "siete media",
      "siete horas treinta"
     ],
     "err": [
      "accorde media au masculin, calque de « demi »",
      "oublie y, calque de « sept heures et demie » dit vite",
      "traduit « sept heures trente » mot à mot"
     ]
    },
    {
     "id": "A13",
     "q": "Después del lunes viene el ___ .",
     "ok": "martes",
     "bad": [
      "miércoles",
      "mardi",
      "domingo"
     ],
     "err": [
      "confond martes et miércoles",
      "écrit le mot français",
      "ne connaît pas l'ordre des jours"
     ]
    },
    {
     "id": "A14",
     "q": "El hermano de mi madre es mi ___ .",
     "ok": "tío",
     "bad": [
      "tía",
      "primo",
      "abuelo"
     ],
     "err": [
      "confond le masculin et le féminin",
      "confond oncle et cousin",
      "confond oncle et grand-père"
     ]
    },
    {
     "id": "A15",
     "q": "Tu veux dire « J'ai faim ». Choisis la phrase correcte.",
     "ok": "Tengo hambre.",
     "bad": [
      "Estoy hambre.",
      "He hambre.",
      "Tengo hombre."
     ],
     "err": [
      "calque l'anglais : dit la faim avec estar",
      "calque « j'ai » avec haber au lieu de tener",
      "confond hambre et hombre"
     ]
    },
    {
     "id": "A16",
     "q": "D'après le texte : ¿cuántos años tiene el hermano de Lucía?",
     "ok": "Tiene quince años.",
     "bad": [
      "Tiene doce años.",
      "Tiene cinco años.",
      "El texto no lo dice."
     ],
     "err": [
      "donne l'âge de Lucía",
      "confond quince et cinco",
      "ne relie pas Pablo à « mi hermano mayor »"
     ]
    },
    {
     "id": "A17",
     "q": "D'après le texte : ¿qué animal tiene la familia?",
     "ok": "un gato",
     "bad": [
      "un perro",
      "un gato y un perro",
      "ningún animal"
     ],
     "err": [
      "ne lit pas la négation « no tenemos »",
      "ne tient pas compte de « pero »",
      "étend la négation à toute la phrase"
     ]
    },
    {
     "id": "A18",
     "q": "D'après le texte : ¿cuándo juega Lucía al baloncesto?",
     "ok": "los miércoles por la tarde",
     "bad": [
      "los miércoles por la mañana",
      "los domingos por la tarde",
      "todos los días"
     ],
     "err": [
      "confond tarde et mañana",
      "confond les deux jours du texte",
      "ne lit pas « los miércoles »"
     ]
    },
    {
     "id": "A19",
     "q": "D'après le texte : ¿qué piensa Pablo de los churros?",
     "ok": "No le gustan.",
     "bad": [
      "Le encantan.",
      "Los prefiere a las tostadas.",
      "Los hace con su abuela."
     ],
     "err": [
      "attribue à Pablo l'avis de Lucía",
      "lit « prefiere » à l'envers",
      "confond Pablo et Lucía"
     ]
    },
    {
     "id": "A20",
     "q": "Voy ___ colegio en autobús.",
     "ok": "al",
     "bad": [
      "a el",
      "en el",
      "a"
     ],
     "err": [
      "ne fait pas la contraction a + el",
      "confond a et en après un verbe de mouvement",
      "oublie l'article"
     ]
    },
    {
     "id": "A21",
     "q": "Vivo ___ Madrid.",
     "ok": "en",
     "bad": [
      "a",
      "à",
      "de"
     ],
     "err": [
      "calque « à Madrid »",
      "écrit le mot français, avec son accent",
      "confond le lieu où l'on est et l'origine"
     ]
    },
    {
     "id": "A22",
     "q": "Me gusta ___ música.",
     "ok": "escuchar",
     "bad": [
      "escucho",
      "escuchando",
      "de escuchar"
     ],
     "err": [
      "conjugue le verbe après gustar",
      "calque l'anglais : met le gérondif après gustar",
      "ajoute de devant l'infinitif"
     ]
    }
   ],
   "redaction": "Présente-toi en espagnol, en 5 à 6 phrases : ton prénom et ton âge, ta famille, ce que tu aimes et ce que tu n'aimes pas, ce que tu fais le week-end. Écris des phrases complètes. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Me llamo Inès y tengo trece años. Vivo en Toulouse con mis padres y mi hermano pequeño. Me gusta dibujar y me encantan los perros, pero no me gusta el fútbol. Los sábados voy a la piscina con mi amiga. Los domingos como en casa de mis abuelos. » Le prof regarde : tener pour l'âge, la terminaison de la première personne, la négation avec no seul, gustar avec me, l'accord de l'adjectif et du possessif, les points d'interrogation et d'exclamation ouvrants s'il y en a.",
   "texte": "¡Hola! Me llamo Lucía y tengo doce años. Vivo en Sevilla con mi madre, mi abuela y mi hermano mayor, Pablo. Pablo tiene quince años. Tenemos un gato que se llama Canela, pero no tenemos perro. Los miércoles por la tarde juego al baloncesto con mis amigas. Los domingos por la mañana ayudo a mi abuela en la cocina: hacemos churros. A mí me encantan los churros, pero a Pablo no le gustan. Él prefiere las tostadas.",
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
     "q": "Ayer yo ___ al cine con mis amigos.",
     "ok": "fui",
     "bad": [
      "voy",
      "fue",
      "iré"
     ],
     "err": [
      "ne marque pas le passé",
      "confond fui et fue, première et troisième personne",
      "confond le passé et le futur"
     ]
    },
    {
     "id": "B2",
     "q": "Ahora no puedo hablar: ___ .",
     "ok": "estoy comiendo",
     "bad": [
      "soy comiendo",
      "estoy comer",
      "estoy comido"
     ],
     "err": [
      "confond ser et estar devant le gérondif",
      "calque « en train de manger » avec l'infinitif",
      "met le participe passé à la place du gérondif"
     ]
    },
    {
     "id": "B3",
     "q": "Mañana ___ a mi abuela.",
     "ok": "voy a visitar",
     "bad": [
      "voy visitar",
      "voy a visitando",
      "visité"
     ],
     "err": [
      "calque « je vais rendre visite » : oublie a",
      "mélange le futur proche et le gérondif",
      "prend un passé pour un fait à venir"
     ]
    },
    {
     "id": "B4",
     "q": "Yo no ___ ir a la fiesta.",
     "ok": "puedo",
     "bad": [
      "podo",
      "puede",
      "poder"
     ],
     "err": [
      "oublie la diphtongue de poder",
      "confond la première et la troisième personne",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "B5",
     "q": "Esta mañana me ___ a las siete.",
     "ok": "he levantado",
     "bad": [
      "soy levantado",
      "he levantar",
      "he levantando"
     ],
     "err": [
      "calque « je me suis levé » avec être",
      "met l'infinitif après haber",
      "met le gérondif après haber"
     ]
    },
    {
     "id": "B6",
     "q": "El año pasado, mis padres ___ una casa.",
     "ok": "compraron",
     "bad": [
      "compró",
      "compran",
      "comprieron"
     ],
     "err": [
      "n'accorde pas le verbe au pluriel",
      "ne marque pas le passé",
      "applique la terminaison des verbes en -er à un verbe en -ar"
     ]
    },
    {
     "id": "B7",
     "q": "A mis amigos ___ los videojuegos.",
     "ok": "les gustan",
     "bad": [
      "les gusta",
      "gustan",
      "se gustan"
     ],
     "err": [
      "n'accorde pas gustar avec la chose aimée, au pluriel",
      "oublie le pronom les",
      "prend gustar pour un verbe pronominal"
     ]
    },
    {
     "id": "B8",
     "q": "Mi hermano es ___ yo.",
     "ok": "más alto que",
     "bad": [
      "más alto de",
      "más alto como",
      "muy alto que"
     ],
     "err": [
      "traduit « que » par de",
      "confond más... que et tan... como",
      "confond muy et más"
     ]
    },
    {
     "id": "B9",
     "q": "Tu parles d'une película et tu veux dire « Je la regarde ce soir ». Choisis la phrase correcte.",
     "ok": "La veo esta noche.",
     "bad": [
      "Veo la esta noche.",
      "Le veo esta noche.",
      "Ella veo esta noche."
     ],
     "err": [
      "place le pronom après le verbe conjugué",
      "confond le et la, complément indirect et complément direct",
      "met le pronom sujet à la place du pronom complément"
     ]
    },
    {
     "id": "B10",
     "q": "Para aprobar el examen, ___ estudiar más.",
     "ok": "tienes que",
     "bad": [
      "tienes de",
      "tienes",
      "hay de"
     ],
     "err": [
      "se trompe de mot après tener, calque de « avoir à »",
      "oublie que",
      "mélange hay que et tener que"
     ]
    },
    {
     "id": "B11",
     "q": "Tu veux dire « Je ne mange jamais de viande ». Choisis la phrase correcte.",
     "ok": "Nunca como carne.",
     "bad": [
      "Nunca no como carne.",
      "Como nunca carne.",
      "No como nunca de carne."
     ],
     "err": [
      "met une double négation devant le verbe",
      "oublie no devant le verbe quand nunca est après",
      "calque le « de » de « jamais de viande »"
     ]
    },
    {
     "id": "B12",
     "q": "Tu lis « Estoy constipado ». Que dit cette personne ?",
     "ok": "Elle est enrhumée.",
     "bad": [
      "Elle est constipée.",
      "Elle est fatiguée.",
      "Elle est en colère."
     ],
     "err": [
      "faux ami : constipado veut dire enrhumé",
      "confond constipado et cansado",
      "confond constipado et enfadado"
     ]
    },
    {
     "id": "B13",
     "q": "Tu veux dire « Il fait chaud ». Choisis la phrase correcte.",
     "ok": "Hace calor.",
     "bad": [
      "Es calor.",
      "Hace caliente.",
      "Está calor."
     ],
     "err": [
      "calque l'anglais : dit le temps qu'il fait avec ser",
      "confond le nom calor et l'adjectif caliente",
      "prend estar pour dire le temps qu'il fait"
     ]
    },
    {
     "id": "B14",
     "q": "Mi hermana ___ la guitarra.",
     "ok": "toca",
     "bad": [
      "juega",
      "juega a",
      "toco"
     ],
     "err": [
      "confond jugar et tocar, un seul verbe « jouer » en français",
      "même confusion, avec le calque de « jouer de »",
      "bon verbe, mais à la première personne"
     ]
    },
    {
     "id": "B15",
     "q": "Voy a ___ un bocadillo al camarero.",
     "ok": "pedir",
     "bad": [
      "preguntar",
      "demandar",
      "pido"
     ],
     "err": [
      "confond pedir et preguntar, un seul verbe « demander » en français",
      "faux ami : demandar veut dire poursuivre en justice",
      "conjugue le verbe après voy a"
     ]
    },
    {
     "id": "B16",
     "q": "D'après le texte : ¿por qué estaba nervioso Hugo al principio?",
     "ok": "Era su primer viaje sin sus padres.",
     "bad": [
      "Nunca había viajado antes.",
      "Viajaba sin sus tíos.",
      "Llovía mucho."
     ],
     "err": [
      "rattache « primera vez » au voyage et pas à « sin sus padres »",
      "confond tíos et padres",
      "prend la cause de l'ennui pour la cause de la nervosité"
     ]
    },
    {
     "id": "B17",
     "q": "D'après le texte : ¿qué nos dice « casi no hay tiendas » sobre el pueblo?",
     "ok": "Hay muy pocas tiendas.",
     "bad": [
      "No hay ninguna tienda.",
      "Hay muchas tiendas.",
      "Las tiendas están cerradas."
     ],
     "err": [
      "ne lit pas « casi »",
      "ne lit pas la négation",
      "répond sans appui dans le texte"
     ]
    },
    {
     "id": "B18",
     "q": "D'après le texte : ¿cómo cambió la estancia de Hugo?",
     "ok": "Primero se aburrió y después se divirtió.",
     "bad": [
      "Primero se divirtió y después se aburrió.",
      "Se aburrió hasta el último día.",
      "Se divirtió desde el primer día."
     ],
     "err": [
      "inverse « los primeros días » et « después »",
      "s'arrête à la première moitié du texte",
      "ne lit pas le début du séjour"
     ]
    },
    {
     "id": "B19",
     "q": "D'après le texte : ¿qué muestra la última frase?",
     "ok": "Hugo quiere volver a Galicia.",
     "bad": [
      "Hugo ya ha vuelto a Galicia.",
      "Sus tíos quieren ir a casa de Hugo.",
      "Sus tíos han dicho que no."
     ],
     "err": [
      "prend la demande pour un fait accompli",
      "inverse qui veut aller chez qui",
      "invente la réponse des oncles"
     ]
    },
    {
     "id": "B20",
     "q": "Estudio español ___ viajar a México.",
     "ok": "para",
     "bad": [
      "por",
      "pour",
      "para que"
     ],
     "err": [
      "confond por et para : le but se dit avec para",
      "écrit le mot français",
      "met para que devant un infinitif"
     ]
    },
    {
     "id": "B21",
     "q": "No salgo ___ estoy enfermo.",
     "ok": "porque",
     "bad": [
      "por qué",
      "por",
      "para"
     ],
     "err": [
      "confond por qué, pour la question, et porque, pour la cause",
      "met une préposition devant une proposition",
      "confond la cause et le but"
     ]
    },
    {
     "id": "B22",
     "q": "No me gusta el pescado. A mí ___ .",
     "ok": "tampoco",
     "bad": [
      "también",
      "también no",
      "tan poco"
     ],
     "err": [
      "ne passe pas à tampoco après une phrase négative",
      "calque « moi non plus » en niant también",
      "confond tampoco et tan poco"
     ]
    }
   ],
   "redaction": "Raconte en espagnol ton dernier week-end ou tes dernières vacances, en 6 à 8 phrases : où tu étais, avec qui, ce que tu as fait, ce que tu as préféré et pourquoi. Termine par une phrase sur ce que tu vas faire la prochaine fois. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « El fin de semana pasado fui a casa de mi prima en Burdeos con mi madre. El sábado visitamos el centro y comimos una pizza en un restaurante pequeño. Por la noche vimos una película, pero era muy larga y me dormí. El domingo llovió, así que nos quedamos en casa y jugamos a las cartas. Lo que más me gustó fue el paseo por el centro porque había música en la calle. El próximo fin de semana voy a hacer más fotos. » Le prof regarde : un temps du passé tenu d'un bout à l'autre, les passés irréguliers courants (fui, hice, vi), un futur proche dans la dernière phrase, au moins deux connecteurs (pero, porque, así que), un avis justifié.",
   "texte": "El verano pasado, Hugo pasó diez días en Galicia, en casa de sus tíos. Era la primera vez que viajaba sin sus padres y al principio estaba un poco nervioso. Sus tíos viven en un pueblo pequeño, cerca del mar, donde casi no hay tiendas. Los primeros días Hugo se aburrió porque llovía mucho. Después conoció a Noa, una vecina de su edad, que le enseñó a hacer surf. El último día no quería volver a casa. Ya les ha preguntado a sus tíos si puede regresar el año que viene.",
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
     "q": "Cuando era pequeño, yo ___ al fútbol todos los días.",
     "ok": "jugaba",
     "bad": [
      "jugué",
      "he jugado",
      "jugía"
     ],
     "err": [
      "prend le passé simple pour une habitude du passé",
      "calque le passé composé pour une habitude du passé",
      "applique la terminaison -ía à un verbe en -ar"
     ]
    },
    {
     "id": "C2",
     "q": "Ayer yo no ___ venir porque estaba enfermo.",
     "ok": "pude",
     "bad": [
      "podí",
      "pudo",
      "puedo"
     ],
     "err": [
      "régularise un passé simple irrégulier",
      "confond pude et pudo, première et troisième personne",
      "ne marque pas le passé"
     ]
    },
    {
     "id": "C3",
     "q": "Mis padres quieren que yo ___ más.",
     "ok": "estudie",
     "bad": [
      "estudio",
      "estudiar",
      "estudiaré"
     ],
     "err": [
      "garde l'indicatif après querer que",
      "calque « veulent que » suivi d'un infinitif",
      "met le futur à la place du subjonctif"
     ]
    },
    {
     "id": "C4",
     "q": "Mañana ___ sol en toda España.",
     "ok": "hará",
     "bad": [
      "hacerá",
      "hizo",
      "haré"
     ],
     "err": [
      "régularise un futur irrégulier",
      "confond le passé et le futur",
      "bon temps, mais à la première personne"
     ]
    },
    {
     "id": "C5",
     "q": "Tu parles à ton petit frère. ¡___ la mesa, por favor!",
     "ok": "Pon",
     "bad": [
      "Pones",
      "Pone",
      "Poner"
     ],
     "err": [
      "prend le présent pour l'impératif",
      "prend la troisième personne du présent pour l'impératif",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "C6",
     "q": "Cuando llegamos al cine, la película ya ___ .",
     "ok": "había empezado",
     "bad": [
      "ha empezado",
      "era empezada",
      "había empezando"
     ],
     "err": [
      "met le passé composé dans un récit au passé",
      "calque « était commencée » avec ser",
      "met le gérondif après haber"
     ]
    },
    {
     "id": "C7",
     "q": "Hoy Marta ___ cansada porque ha dormido mal.",
     "ok": "está",
     "bad": [
      "es",
      "tiene",
      "hay"
     ],
     "err": [
      "confond ser et estar : un état passager se dit avec estar",
      "calque « avoir sommeil » sur un adjectif",
      "prend hay pour un verbe d'état"
     ]
    },
    {
     "id": "C8",
     "q": "¿El libro? Voy a ___ mañana.",
     "ok": "dártelo",
     "bad": [
      "te lo dar",
      "dárlote",
      "dar lo te"
     ],
     "err": [
      "place les pronoms devant l'infinitif, comme en français",
      "inverse l'ordre des deux pronoms",
      "même inversion, sans souder les pronoms au verbe"
     ]
    },
    {
     "id": "C9",
     "q": "Tu veux dire « En Espagne, on dîne très tard ». En España ___ muy tarde.",
     "ok": "se cena",
     "bad": [
      "on cena",
      "se cenan",
      "es cenado"
     ],
     "err": [
      "écrit le mot français « on »",
      "accorde le verbe au pluriel sans sujet pluriel",
      "calque un passif mot à mot"
     ]
    },
    {
     "id": "C10",
     "q": "Es la ciudad ___ bonita ___ país.",
     "ok": "más / del",
     "bad": [
      "la más / del",
      "más / que el",
      "más / de el"
     ],
     "err": [
      "calque « la ville la plus belle » : répète l'article",
      "traduit « du » par que, comme dans une comparaison",
      "ne fait pas la contraction de + el"
     ]
    },
    {
     "id": "C11",
     "q": "Tu veux dire « Je viens de finir ». Choisis la phrase correcte.",
     "ok": "Acabo de terminar.",
     "bad": [
      "Vengo de terminar.",
      "Acabo terminar.",
      "Acabo de terminado."
     ],
     "err": [
      "calque « venir de »",
      "oublie de",
      "met le participe passé après acabar de"
     ]
    },
    {
     "id": "C12",
     "q": "Tu veux dire « Je suis d'accord avec toi ». Choisis la phrase correcte.",
     "ok": "Estoy de acuerdo contigo.",
     "bad": [
      "Soy de acuerdo contigo.",
      "Estoy de acuerdo con ti.",
      "Estoy acuerdo contigo."
     ],
     "err": [
      "calque « être d'accord » avec ser",
      "ne connaît pas contigo",
      "oublie de"
     ]
    },
    {
     "id": "C13",
     "q": "Estoy ___ el autobús desde hace veinte minutos.",
     "ok": "esperando",
     "bad": [
      "atendiendo",
      "attendando",
      "esperado"
     ],
     "err": [
      "faux ami : atender veut dire s'occuper de",
      "invente un verbe sur le français « attendre »",
      "met le participe passé à la place du gérondif"
     ]
    },
    {
     "id": "C14",
     "q": "No ___ de su nombre.",
     "ok": "me acuerdo",
     "bad": [
      "recuerdo",
      "me recuerdo",
      "acuerdo"
     ],
     "err": [
      "mélange recordar, sans de, et acordarse de",
      "calque « je me rappelle » : rend recordar pronominal",
      "oublie le pronom de acordarse"
     ]
    },
    {
     "id": "C15",
     "q": "¿___ a mi hermano? Está en tu clase.",
     "ok": "Conoces",
     "bad": [
      "Sabes",
      "Conozco",
      "Conocer"
     ],
     "err": [
      "confond saber et conocer : une personne se connaît avec conocer",
      "bon verbe, mais à la première personne",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "C16",
     "q": "D'après le texte : ¿cómo reaccionó Irene al anuncio?",
     "ok": "A diferencia de casi todos, no se alegró.",
     "bad": [
      "Como casi todos, lo celebró.",
      "Fue la única que lo celebró.",
      "Le daba igual el horario."
     ],
     "err": [
      "ne lit pas « Irene no »",
      "inverse Irene et les autres",
      "conclut trop loin : le changement la gêne"
     ]
    },
    {
     "id": "C17",
     "q": "D'après le texte : ¿por qué el nuevo horario era un problema para Irene?",
     "ok": "Su autobús salía a la misma hora de siempre y ella tenía que esperar.",
     "bad": [
      "Tenía que levantarse más temprano.",
      "Ya no había autobús en su pueblo.",
      "Llegaba tarde a clase."
     ],
     "err": [
      "inverse la conséquence : elle attend, elle ne se lève pas plus tôt",
      "lit « único » comme « plus aucun »",
      "inverse la conséquence : elle arrive en avance"
     ]
    },
    {
     "id": "C18",
     "q": "D'après le texte : ¿qué cambió poco a poco?",
     "ok": "Empezó a leer durante la espera y le gustó.",
     "bad": [
      "Siguió llegando de mal humor.",
      "El instituto volvió al horario de antes.",
      "Empezó a leer, pero no le gustó."
     ],
     "err": [
      "ne lit pas « sin embargo »",
      "invente un fait absent du texte",
      "contresens sur « descubrió que le gustaba »"
     ]
    },
    {
     "id": "C19",
     "q": "D'après le texte : ¿cuál es la opinión de Irene al final?",
     "ok": "Critica cómo se decidió el cambio, pero le ve una ventaja.",
     "bad": [
      "Piensa que el cambio es perfecto.",
      "Quiere volver al horario de antes porque llega nerviosa.",
      "Piensa que se escuchó a los alumnos de los pueblos."
     ],
     "err": [
      "ne lit pas la critique de l'avant-dernière phrase",
      "contresens sur « más tranquila que antes »",
      "contresens sur « sin escuchar »"
     ]
    },
    {
     "id": "C20",
     "q": "No creo que ___ una buena idea.",
     "ok": "sea",
     "bad": [
      "es",
      "será",
      "ser"
     ],
     "err": [
      "garde l'indicatif après no creo que",
      "met le futur à la place du subjonctif",
      "laisse le verbe à l'infinitif"
     ]
    },
    {
     "id": "C21",
     "q": "Estudio español ___ tres años.",
     "ok": "desde hace",
     "bad": [
      "desde",
      "hay",
      "de"
     ],
     "err": [
      "confond desde, pour une date, et desde hace, pour une durée",
      "calque « il y a trois ans »",
      "traduit « depuis » par de"
     ]
    },
    {
     "id": "C22",
     "q": "Hacía frío. ___ , salimos a pasear.",
     "ok": "Sin embargo",
     "bad": [
      "Aunque",
      "A pesar de",
      "Por eso"
     ],
     "err": [
      "prend la conjonction aunque pour un connecteur de phrase",
      "prend la locution a pesar de, qui attend un complément, pour un connecteur de phrase",
      "confond l'opposition et la conséquence"
     ]
    }
   ],
   "redaction": "¿Deberían empezar las clases más tarde por la mañana? Donne ton avis en espagnol, en 80 à 100 mots : ta position, deux arguments, un exemple, une phrase de conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « En mi opinión, las clases deberían empezar un poco más tarde. Primero, los adolescentes necesitamos dormir más y a las ocho estamos cansados. Por ejemplo, en mi clase muchos alumnos no escuchan durante la primera hora. Además, con más descanso es más fácil concentrarse y aprender. Sin embargo, entiendo que no es fácil para todos: algunos padres trabajan temprano y no pueden esperar. Por eso creo que cada instituto tiene que hablar con las familias antes de cambiar el horario. En conclusión, estoy a favor, pero con condiciones. » Le prof regarde : une position annoncée dès la première phrase, des arguments reliés par des connecteurs (primero, además, sin embargo, por eso), ser et estar bien choisis, un conditionnel ou une obligation (deberían, tiene que), une concession, pas de calque du type « soy de acuerdo ».",
   "texte": "Cuando el instituto de Irene anunció que las clases empezarían una hora más tarde, casi todos los alumnos lo celebraron. Irene no. Vive en un pueblo y el único autobús sale a las siete, así que con el nuevo horario tenía que esperar una hora delante de la puerta cerrada. Las primeras semanas llegaba de mal humor. Poco a poco, sin embargo, empezó a aprovechar ese tiempo para leer, y descubrió que le gustaba. Sigue pensando que el cambio se hizo sin escuchar a los alumnos de los pueblos. Pero reconoce que ahora llega a clase más tranquila que antes.",
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
     "q": "Si ___ más tiempo, aprendería a tocar el piano.",
     "ok": "tuviera",
     "bad": [
      "tenía",
      "tendría",
      "tenga"
     ],
     "err": [
      "calque l'imparfait de l'indicatif de « si j'avais »",
      "met le conditionnel après si",
      "met le subjonctif présent pour une hypothèse irréelle"
     ]
    },
    {
     "id": "D2",
     "q": "Te llamaré cuando ___ a casa.",
     "ok": "llegue",
     "bad": [
      "llegaré",
      "llego",
      "llegaría"
     ],
     "err": [
      "calque le futur de « quand j'arriverai »",
      "met l'indicatif présent après cuando pour un fait à venir",
      "met le conditionnel après cuando"
     ]
    },
    {
     "id": "D3",
     "q": "Mi profesor quería que yo ___ el trabajo antes del lunes.",
     "ok": "terminara",
     "bad": [
      "terminaba",
      "terminaría",
      "terminé"
     ],
     "err": [
      "met l'indicatif après quería que",
      "met le conditionnel à la place du subjonctif",
      "met le passé simple à la place du subjonctif"
     ]
    },
    {
     "id": "D4",
     "q": "Mientras ___ , sonó el teléfono.",
     "ok": "cenábamos",
     "bad": [
      "cenáramos",
      "hemos cenado",
      "cenaríamos"
     ],
     "err": [
      "met le subjonctif pour une action en cours dans le passé",
      "calque le passé composé dans un récit au passé",
      "met le conditionnel à la place de l'imparfait"
     ]
    },
    {
     "id": "D5",
     "q": "El testigo ___ que no había visto nada.",
     "ok": "dijo",
     "bad": [
      "dició",
      "dijió",
      "deció"
     ],
     "err": [
      "régularise un passé simple irrégulier",
      "bon radical, mais terminaison régulière ajoutée",
      "régularise avec une terminaison inventée"
     ]
    },
    {
     "id": "D6",
     "q": "Tu parles à un ami. Por favor, no ___ nada a mis padres.",
     "ok": "digas",
     "bad": [
      "dices",
      "di",
      "digues"
     ],
     "err": [
      "garde l'indicatif pour une défense",
      "garde l'impératif affirmatif après no",
      "invente une forme de subjonctif"
     ]
    },
    {
     "id": "D7",
     "q": "La reunión ___ en la sala 3.",
     "ok": "es",
     "bad": [
      "está",
      "hay",
      "tiene"
     ],
     "err": [
      "confond ser et estar : un événement « a lieu » avec ser",
      "prend hay pour situer un événement précis",
      "calque « avoir lieu » avec tener"
     ]
    },
    {
     "id": "D8",
     "q": "« Cállate », me dijo. Me dijo que ___ .",
     "ok": "me callara",
     "bad": [
      "me callaba",
      "cállate",
      "de callarme"
     ],
     "err": [
      "rapporte un ordre à l'indicatif",
      "garde l'impératif du discours direct",
      "calque « de me taire »"
     ]
    },
    {
     "id": "D9",
     "q": "La chica ___ te hablé vive en mi calle.",
     "ok": "de la que",
     "bad": [
      "que",
      "cuya",
      "la que"
     ],
     "err": [
      "oublie la préposition de hablar de, calque de « dont » mal compris",
      "prend cuya, qui marque la possession, pour « dont »",
      "oublie la préposition devant le relatif"
     ]
    },
    {
     "id": "D10",
     "q": "Tu veux dire « Ce qui est important, c'est de participer ». ___ importante es participar.",
     "ok": "Lo",
     "bad": [
      "El",
      "Lo que",
      "Eso"
     ],
     "err": [
      "traduit « ce qui est » par l'article masculin au lieu du neutre lo",
      "met lo que devant un adjectif",
      "traduit « ce » par un démonstratif"
     ]
    },
    {
     "id": "D11",
     "q": "¿Le diste el libro a Ana? Sí, ___ di ayer.",
     "ok": "se lo",
     "bad": [
      "le lo",
      "lo le",
      "se le"
     ],
     "err": [
      "ne change pas le en se devant lo",
      "inverse l'ordre des deux pronoms",
      "change bien le en se, mais se trompe sur le pronom du complément direct"
     ]
    },
    {
     "id": "D12",
     "q": "La película tuvo mucho ___ : la vieron millones de personas.",
     "ok": "éxito",
     "bad": [
      "suceso",
      "succeso",
      "salida"
     ],
     "err": [
      "faux ami : suceso veut dire événement",
      "écrit le mot français avec une allure espagnole",
      "confond éxito avec l'anglais exit, la sortie"
     ]
    },
    {
     "id": "D13",
     "q": "Tu veux dire « Je me suis rendu compte de mon erreur ». Choisis la phrase correcte.",
     "ok": "Me di cuenta de mi error.",
     "bad": [
      "Realicé mi error.",
      "Me rendí cuenta de mi error.",
      "Me di cuenta mi error."
     ],
     "err": [
      "faux ami : realizar veut dire accomplir",
      "calque « se rendre compte » avec rendir",
      "oublie de"
     ]
    },
    {
     "id": "D14",
     "q": "Mis padres me ___ en todos mis proyectos: siempre me ayudan.",
     "ok": "apoyan",
     "bad": [
      "soportan",
      "suportan",
      "aguantan"
     ],
     "err": [
      "faux ami : soportar veut dire supporter au sens de tolérer",
      "écrit le mot français avec une allure espagnole",
      "même contresens avec un synonyme de tolérer"
     ]
    },
    {
     "id": "D15",
     "q": "Pienso mucho ___ mis abuelos.",
     "ok": "en",
     "bad": [
      "a",
      "de",
      "por"
     ],
     "err": [
      "calque « penser à »",
      "confond « penser à quelqu'un » et « penser quelque chose de »",
      "se trompe de préposition, au hasard"
     ]
    },
    {
     "id": "D16",
     "q": "D'après le texte : ¿qué han descubierto muchos pueblos de la costa?",
     "ok": "Que atraer a más turistas también tiene consecuencias negativas.",
     "bad": [
      "Que los turistas ya no quieren hoteles.",
      "Que construir hoteles cuesta demasiado dinero.",
      "Que los turistas han dejado de venir."
     ],
     "err": [
      "répond sans appui dans le texte",
      "lit « precio » au sens propre",
      "contresens sur « éxito »"
     ]
    },
    {
     "id": "D17",
     "q": "D'après le texte : ¿qué significa « pusieron el grito en el cielo »?",
     "ok": "Protestaron con mucha fuerza.",
     "bad": [
      "Gritaron de alegría.",
      "Rezaron para pedir ayuda.",
      "Se quedaron callados."
     ],
     "err": [
      "prend le cri pour un cri de joie",
      "lit « cielo » au sens propre",
      "contresens complet sur l'expression"
     ]
    },
    {
     "id": "D18",
     "q": "D'après le texte : ¿qué ha pasado en el centro dos años después?",
     "ok": "Viven más familias jóvenes, pero algunas tiendas para turistas han cerrado.",
     "bad": [
      "Todos los comercios han cerrado.",
      "Los alquileres siguen subiendo.",
      "Han abierto nuevas tiendas de recuerdos."
     ],
     "err": [
      "retient la crainte des patrons, pas le résultat",
      "contresens sur « han dejado de subir »",
      "contresens sur « han cerrado »"
     ]
    },
    {
     "id": "D19",
     "q": "D'après le texte : ¿qué significa « Apenas queda quien pida volver atrás »?",
     "ok": "Casi nadie quiere volver a la situación de antes.",
     "bad": [
      "A mucha gente le da pena no poder volver atrás.",
      "Todo el mundo pide volver atrás.",
      "El pueblo ya ha vuelto a la situación de antes."
     ],
     "err": [
      "confond apenas et pena",
      "ne perçoit pas le sens restrictif de apenas",
      "confond la demande et le fait"
     ]
    },
    {
     "id": "D20",
     "q": "___ el cansancio, terminó la carrera.",
     "ok": "A pesar de",
     "bad": [
      "Aunque",
      "A pesar",
      "Sin embargo"
     ],
     "err": [
      "met une conjonction devant un groupe nominal",
      "oublie de après a pesar",
      "prend un connecteur de phrase pour une préposition"
     ]
    },
    {
     "id": "D21",
     "q": "No quiero que me ayudes, ___ que me escuches.",
     "ok": "sino",
     "bad": [
      "pero",
      "si no",
      "sino también"
     ],
     "err": [
      "ne passe pas à sino après une négation corrigée",
      "confond sino et si no",
      "ajoute también sans « no solo »"
     ]
    },
    {
     "id": "D22",
     "q": "___ llegar a casa, me di cuenta de que había perdido las llaves.",
     "ok": "Al",
     "bad": [
      "En",
      "A el",
      "Cuando"
     ],
     "err": [
      "calque « en arrivant »",
      "ne fait pas la contraction a + el",
      "met une conjonction devant un infinitif"
     ]
    }
   ],
   "redaction": "« El turismo es siempre una suerte para una ciudad. » ¿Estás de acuerdo? Réponds en espagnol, en 100 à 120 mots : ta position, deux arguments, une objection à laquelle tu réponds, une conclusion. N'utilise ni traducteur ni dictionnaire.",
   "corrige": "pas de réponse unique. Exemple de production attendue : « Estoy de acuerdo solo en parte con esta afirmación. Es cierto que el turismo crea empleo y permite que muchos bares, hoteles y tiendas sigan abiertos. Además, gracias a los visitantes, las ciudades cuidan más su patrimonio. Algunos dicen que sin turistas no habría trabajo. Aunque esto sea verdad en ciertas zonas, no hay que olvidar que los alquileres suben y que los vecinos acaban marchándose del centro. Si todas las viviendas se convirtieran en pisos turísticos, la ciudad perdería su alma. Por eso creo que hace falta poner límites. En resumen, el turismo es una suerte siempre que los habitantes sigan siendo la prioridad. » Le prof regarde : une position nuancée, une objection traitée et pas seulement citée, des connecteurs variés (además, aunque, por eso, en resumen), au moins un subjonctif juste et une phrase en si avec le conditionnel, ser et estar bien choisis, un lexique qui dépasse les mots de base.",
   "texte": "Durante años, muchos pueblos de la costa han intentado atraer a más turistas construyendo hoteles y aparcamientos, hasta descubrir que el éxito también tiene un precio. Un pequeño municipio decidió hacer lo contrario. En lugar de ampliar el puerto, limitó el número de pisos turísticos y destinó el dinero a rehabilitar viviendas para sus vecinos. Los dueños de bares y restaurantes pusieron el grito en el cielo: estaban convencidos de que los visitantes dejarían de venir. Dos años después, el balance es más matizado de lo que unos y otros esperaban. Los alquileres han dejado de subir y varias familias jóvenes se han instalado en el centro; sin embargo, algunos comercios de recuerdos han cerrado por falta de clientes. Apenas queda quien pida volver atrás. Aun así, el ayuntamiento admite que no calculó bien cuánto dependían ciertos negocios del turismo.",
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
