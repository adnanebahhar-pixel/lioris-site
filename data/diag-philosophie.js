window.DIAGS = window.DIAGS || {};
window.DIAGS["philosophie"] = {
 "cle": "philosophie",
 "matiere": "philosophie",
 "titre": "Test de philosophie",
 "nom": "Diagnostic de philosophie",
 "commun": null,
 "niveaux": [
  [
   "T",
   "Terminale"
  ]
 ],
 "classes": [
  [
   "Terminale",
   "T"
  ]
 ],
 "duree": "30 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans document.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-philosophie-terminale.md",
 "blocs": {
  "T": {
   "titre": "élève de terminale",
   "questions": [
    {
     "id": "T1",
     "q": "Sujet : « Peut-on être heureux sans être libre ? » Qu'est-ce qui fait de cette question un problème philosophique ?",
     "ok": "On peut défendre sérieusement des réponses opposées, et il faut examiner les notions pour trancher",
     "bad": [
      "Personne ne connaît encore la réponse : il manque des informations",
      "Chacun a son avis, donc toutes les réponses se valent",
      "La question est difficile à comprendre"
     ],
     "err": [
      "confond un problème et un manque d'informations",
      "confond un problème et un désaccord d'opinions où tout se vaut",
      "confond un problème et une question obscure"
     ]
    },
    {
     "id": "T2",
     "q": "Laquelle de ces questions est une question de fait, qu'une recherche d'informations suffit à régler ?",
     "ok": "« Combien de pays ont aboli la peine de mort ? »",
     "bad": [
      "« Une loi peut-elle être injuste ? »",
      "« Faut-il toujours obéir à la loi ? »",
      "« Qu'est-ce qu'une loi juste ? »"
     ],
     "err": [
      "croit qu'une question à réponse oui ou non est une question de fait",
      "croit qu'une question sur ce qu'il faut faire se règle par une information",
      "croit qu'une définition se règle avec le dictionnaire"
     ]
    },
    {
     "id": "T3",
     "q": "« La technique nous libère, car elle réduit le temps passé aux tâches pénibles. » Dans cette phrase, la thèse est",
     "ok": "la technique nous libère",
     "bad": [
      "elle réduit le temps passé aux tâches pénibles",
      "la phrase entière",
      "la technique"
     ],
     "err": [
      "confond la thèse et l'argument",
      "ne sépare pas ce qui est affirmé de ce qui le justifie",
      "confond le thème et la thèse"
     ]
    },
    {
     "id": "T4",
     "q": "Pour défendre l'idée « le travail n'est pas seulement une contrainte », laquelle de ces phrases est un argument, et pas un exemple ?",
     "ok": "En travaillant, l'homme transforme ce qui l'entoure et développe ses propres capacités",
     "bad": [
      "Mon oncle est menuisier et il adore son métier",
      "Dans un roman que j'ai lu, le héros s'épanouit en cultivant sa terre",
      "Tout le monde sait bien que le travail rend heureux"
     ],
     "err": [
      "prend un exemple personnel pour un argument",
      "prend un exemple littéraire pour un argument",
      "prend l'opinion commune pour un argument"
     ]
    },
    {
     "id": "T5",
     "q": "Dans une dissertation, à quoi sert un exemple ?",
     "ok": "À illustrer ou à mettre à l'épreuve un argument, qui doit être formulé par ailleurs",
     "bad": [
      "À prouver la thèse à lui seul",
      "À remplacer l'argument quand on n'en trouve pas",
      "À montrer sa culture, même sans lien avec le raisonnement"
     ],
     "err": [
      "confond exemple et preuve",
      "remplace le raisonnement par un récit",
      "traite l'exemple comme un décor"
     ]
    },
    {
     "id": "T6",
     "q": "« Dans tous les pays, des gens mentent. Donc mentir est permis. » Quelle est l'erreur de ce raisonnement ?",
     "ok": "Il passe de ce qui existe en fait à ce qui est permis en droit",
     "bad": [
      "Il confond l'absolu et le relatif",
      "Il confond la cause et la fin",
      "Il généralise à partir de trop peu de cas"
     ],
     "err": [
      "se trompe de repère : absolu et relatif",
      "se trompe de repère : cause et fin",
      "croit que le défaut tient au nombre de cas, pas au passage du fait au droit"
     ]
    },
    {
     "id": "T7",
     "q": "« Cette loi est juste dans ce pays et à cette époque. » Cette phrase parle d'une justice",
     "ok": "relative : elle dépend d'un contexte",
     "bad": [
      "absolue : elle vaut partout et toujours",
      "subjective : ce n'est que l'opinion de celui qui parle",
      "sans valeur : ce qui dépend d'un contexte ne vaut rien"
     ],
     "err": [
      "confond absolu et relatif",
      "confond relatif et subjectif",
      "croit que ce qui est relatif ne vaut rien"
     ]
    },
    {
     "id": "T8",
     "q": "« Pourquoi cours-tu ? » Réponse 1 : « Parce que mon réveil n'a pas sonné. » Réponse 2 : « Pour arriver à l'heure. »",
     "ok": "La réponse 1 donne une cause, la réponse 2 donne une fin",
     "bad": [
      "La réponse 1 donne une fin, la réponse 2 donne une cause",
      "Les deux donnent une cause : « pourquoi » demande toujours une cause",
      "Les deux donnent une fin : on agit toujours dans un but"
     ],
     "err": [
      "inverse la cause et la fin",
      "réduit toute explication à une cause",
      "réduit toute explication à un but"
     ]
    },
    {
     "id": "T9",
     "q": "Un acte est autorisé par la loi, mais des citoyens le jugent injuste. Cet acte est",
     "ok": "légal, et sa légitimité est contestée",
     "bad": [
      "légitime, mais illégal",
      "forcément légitime, puisque la loi l'autorise",
      "illégal, puisqu'il est jugé injuste"
     ],
     "err": [
      "inverse le légal et le légitime",
      "confond le légal et le légitime",
      "réduit le légal au juste"
     ]
    },
    {
     "id": "T10",
     "q": "Cas 1 : un voleur armé te force à lui donner ton téléphone. Cas 2 : tu as promis à un ami de l'aider à déménager.",
     "ok": "Le cas 1 est une contrainte, le cas 2 une obligation",
     "bad": [
      "Le cas 1 est une obligation, le cas 2 une contrainte",
      "Ce sont deux contraintes : dans les deux cas, tu n'as pas le choix",
      "Ce sont deux obligations : dans les deux cas, quelqu'un attend quelque chose de toi"
     ],
     "err": [
      "inverse obligation et contrainte",
      "confond un devoir que l'on se reconnaît et une force que l'on subit",
      "appelle obligation toute pression, même la force"
     ]
    },
    {
     "id": "T11",
     "q": "« La plupart des hommes cherchent le bonheur. » Cette affirmation est",
     "ok": "générale : elle vaut pour le plus grand nombre, pas pour tous sans exception",
     "bad": [
      "universelle : elle vaut pour tous sans exception",
      "particulière : elle ne vaut que pour quelques-uns",
      "singulière : elle ne vaut que pour un seul"
     ],
     "err": [
      "confond général et universel",
      "confond général et particulier",
      "confond général et singulier"
     ]
    },
    {
     "id": "T12",
     "q": "Sujet : « Faut-il toujours dire la vérité ? » Que demande précisément le mot « toujours » ?",
     "ok": "D'examiner s'il existe des cas où le devoir de dire la vérité cesse de s'imposer",
     "bad": [
      "De raconter comment on a jugé le mensonge à travers les époques",
      "Rien de plus : le sujet revient à « Faut-il dire la vérité ? »",
      "De prouver que personne ne ment jamais"
     ],
     "err": [
      "prend « toujours » au sens historique",
      "néglige le mot qui fait le problème",
      "confond ce qu'il faut faire et ce qui se fait"
     ]
    },
    {
     "id": "T13",
     "q": "Dans le sujet « Peut-on désobéir à la loi ? », l'expression « peut-on »",
     "ok": "a deux sens à distinguer : est-ce possible, et est-ce permis ou légitime",
     "bad": [
      "demande seulement si c'est matériellement possible",
      "demande seulement si la loi l'autorise",
      "demande si les gens le font souvent"
     ],
     "err": [
      "réduit « peut-on » à la capacité",
      "réduit « peut-on » à l'autorisation légale, ce qui ferme la question",
      "transforme le sujet en question de fait"
     ]
    },
    {
     "id": "T14",
     "q": "Le sujet « Pourquoi cherchons-nous à connaître le passé ? » tient une chose pour acquise. Laquelle ?",
     "ok": "Que nous cherchons à connaître le passé",
     "bad": [
      "Que nous connaissons déjà le passé",
      "Que nous devons connaître le passé",
      "Aucune : un sujet ne tient jamais rien pour acquis"
     ],
     "err": [
      "inverse le présupposé : chercher suppose de ne pas posséder",
      "confond un fait tenu pour acquis et un devoir",
      "ne voit pas qu'une question peut affirmer quelque chose"
     ]
    },
    {
     "id": "T15",
     "q": "Texte : « On dit souvent qu'être libre, c'est faire tout ce qui nous plaît. Pourtant, celui qui cède à chacune de ses envies ne choisit rien : il suit ce qui le pousse. Être libre, c'est donc plutôt pouvoir prendre du recul sur ses envies et décider lesquelles suivre. » Quelle est la thèse de l'auteur ?",
     "ok": "Être libre, c'est pouvoir prendre du recul sur ses envies et décider lesquelles suivre",
     "bad": [
      "Être libre, c'est faire tout ce qui nous plaît",
      "La liberté n'existe pas, car nos envies nous poussent toujours",
      "Pour être libre, il faut renoncer à toutes ses envies"
     ],
     "err": [
      "prend l'opinion critiquée pour la thèse de l'auteur",
      "durcit l'argument en une thèse que le texte ne soutient pas",
      "pousse la thèse trop loin : contresens par excès"
     ]
    },
    {
     "id": "T16",
     "q": "Texte : « On dit souvent qu'être libre, c'est faire tout ce qui nous plaît. Pourtant, celui qui cède à chacune de ses envies ne choisit rien : il suit ce qui le pousse. Être libre, c'est donc plutôt pouvoir prendre du recul sur ses envies et décider lesquelles suivre. » À quoi sert la première phrase ?",
     "ok": "À présenter une opinion courante, que l'auteur critique ensuite",
     "bad": [
      "À donner la thèse de l'auteur",
      "À donner un exemple",
      "À donner la conclusion du raisonnement"
     ],
     "err": [
      "croit que la première phrase d'un texte est toujours sa thèse",
      "confond une opinion rapportée et un exemple",
      "ne repère pas l'ordre du raisonnement"
     ]
    },
    {
     "id": "T17",
     "q": "Texte : « On dit souvent qu'être libre, c'est faire tout ce qui nous plaît. Pourtant, celui qui cède à chacune de ses envies ne choisit rien : il suit ce qui le pousse. Être libre, c'est donc plutôt pouvoir prendre du recul sur ses envies et décider lesquelles suivre. » Quel est l'argument de l'auteur ?",
     "ok": "Celui qui cède à chacune de ses envies ne choisit pas : il est poussé",
     "bad": [
      "On dit souvent qu'être libre, c'est faire ce qui nous plaît",
      "Être libre, c'est décider quelles envies suivre",
      "Les envies sont mauvaises"
     ],
     "err": [
      "prend l'opinion commune pour un argument",
      "confond la thèse et l'argument",
      "ajoute au texte un jugement moral qu'il ne contient pas"
     ]
    },
    {
     "id": "T18",
     "q": "Expliquer un texte philosophique, c'est",
     "ok": "dégager son problème, sa thèse et les étapes de son raisonnement, en montrant comment l'auteur justifie ce qu'il dit",
     "bad": [
      "redire le texte avec d'autres mots, phrase après phrase",
      "réciter ce que l'on sait de l'auteur et de sa doctrine",
      "dire d'emblée si l'on est d'accord, puis développer sa propre opinion"
     ],
     "err": [
      "paraphrase",
      "récite le cours à la place du texte",
      "se sert du texte comme prétexte à son opinion"
     ]
    },
    {
     "id": "T19",
     "q": "Faire une dissertation de philosophie, c'est",
     "ok": "construire une réflexion qui avance, examine plusieurs réponses à un problème et justifie celle où elle arrive",
     "bad": [
      "présenter l'un après l'autre ce que des philosophes ont dit sur la notion",
      "donner son opinion dès l'introduction, puis accumuler des exemples",
      "peser le pour et le contre, puis conclure que chacun a sa vérité"
     ],
     "err": [
      "fait un catalogue de doctrines",
      "affirme une opinion sans l'examiner",
      "refuse de conclure : relativisme"
     ]
    },
    {
     "id": "T20",
     "q": "Dans une dissertation, une citation d'un philosophe",
     "ok": "ne prouve rien à elle seule : il faut l'expliquer et montrer ce qu'elle apporte au raisonnement",
     "bad": [
      "suffit à prouver une idée, puisqu'un philosophe l'a dite",
      "est obligatoire dans chaque paragraphe",
      "est interdite : on ne doit parler qu'en son propre nom"
     ],
     "err": [
      "croit à l'argument d'autorité",
      "confond culture et récitation",
      "croit que penser par soi-même interdit les références"
     ]
    }
   ],
   "redaction": "Sujet : « Suffit-il d'obéir aux lois pour être juste ? » Tu n'as pas à répondre au sujet. En cinq à huit lignes, transforme-le en problème :\n1. Explique le sens des mots importants du sujet.\n2. Donne deux réponses opposées que l'on pourrait défendre, chacune avec sa raison.\n3. Formule le problème : la difficulté qui oblige à réfléchir.",
   "corrige": "Un exemple de réponse attendue, d'autres sont possibles. « Suffit-il » demande si obéir aux lois est assez, ou s'il faut autre chose. « Les lois » sont ici les règles posées par un État. « Être juste » peut vouloir dire respecter les règles, ou bien agir comme il convient envers les autres. D'un côté, obéir aux lois semble suffire : la loi est la même pour tous, et sans elle chacun déciderait seul de ce qui est juste. De l'autre, cela ne semble pas suffire : une loi peut elle-même être injuste, et la loi ne dit pas tout ce que l'on doit aux autres. Le problème : si la justice se réduit à la loi, on ne peut plus dire qu'une loi est injuste ; mais si la justice dépasse la loi, il faut savoir au nom de quoi on juge la loi. Ce qui est attendu : les mots sont expliqués, deux réponses s'opposent avec leurs raisons, la difficulté est formulée sans être tranchée."
  }
 },
 "domaines": [
  {
   "nom": "Problème, thèse, argument, exemple",
   "ids": {
    "T": [
     "T1",
     "T2",
     "T3",
     "T4",
     "T5"
    ]
   }
  },
  {
   "nom": "Repères du programme",
   "ids": {
    "T": [
     "T6",
     "T7",
     "T8",
     "T9",
     "T10",
     "T11"
    ]
   }
  },
  {
   "nom": "Analyse d'un sujet",
   "ids": {
    "T": [
     "T12",
     "T13",
     "T14"
    ]
   }
  },
  {
   "nom": "Lecture d'un passage argumentatif",
   "ids": {
    "T": [
     "T15",
     "T16",
     "T17"
    ]
   }
  },
  {
   "nom": "Méthode de la dissertation et de l'explication",
   "ids": {
    "T": [
     "T18",
     "T19",
     "T20"
    ]
   }
  }
 ],
 "criteres": [
  "Analyser les termes",
  "Opposer deux réponses",
  "Formuler le problème",
  "Ne pas répondre trop vite",
  "Rédiger"
 ]
};
