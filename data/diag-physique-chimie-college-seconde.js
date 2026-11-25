window.DIAGS = window.DIAGS || {};
window.DIAGS["physique-chimie-college-seconde"] = {
 "cle": "physique-chimie-college-seconde",
 "matiere": "physique-chimie",
 "titre": "Test de physique-chimie",
 "nom": "Test de physique-chimie, collège et seconde",
 "commun": "M",
 "niveaux": [
  [
   "C",
   "5e ou 4e"
  ],
  [
   "T",
   "3e"
  ],
  [
   "S",
   "Seconde"
  ]
 ],
 "classes": [
  [
   "Cinquième",
   "C"
  ],
  [
   "Quatrième",
   "C"
  ],
  [
   "Troisième",
   "T"
  ],
  [
   "Seconde",
   "S"
  ]
 ],
 "duree": "35 minutes",
 "pasvu": true,
 "seuils": "pourcent",
 "calculatrice": "Sans calculatrice pour les questions. Calculatrice autorisée pour l'exercice à rédiger.",
 "note": "Seuils provisoires, à caler sur les premiers élèves : domaine de 3 questions ou plus, au moins 80 % de réussite = satisfaisant, de 50 à 79 % = fragile, moins de 50 % = à besoins. Domaine de 1 ou 2 questions : le professeur tranche.",
 "source": "diagnostic-physique-chimie-college-seconde.md",
 "blocs": {
  "M": {
   "titre": "outils mathématiques (commun)",
   "questions": [
    {
     "id": "M1",
     "q": "Un robinet remplit 6 L en 2 min. Son débit ne change pas. En 5 min, il remplit",
     "ok": "15 L",
     "bad": [
      "9 L",
      "30 L",
      "2,4 L"
     ],
     "err": [
      "ajoute 3 L pour 3 min de plus : raisonne par addition, pas par proportion",
      "multiplie 6 L par 5 sans revenir à une minute",
      "inverse la proportion : multiplie par 2 et divise par 5"
     ]
    },
    {
     "id": "M2",
     "q": "0,75 L =",
     "ok": "750 mL",
     "bad": [
      "75 mL",
      "7 500 mL",
      "0,00075 mL"
     ],
     "err": [
      "multiplie par 100 au lieu de 1 000",
      "multiplie par 10 000",
      "divise au lieu de multiplier"
     ]
    },
    {
     "id": "M3",
     "q": "Un film dure 1 h 30 min. En minutes, cela fait",
     "ok": "90 min",
     "bad": [
      "130 min",
      "78 min",
      "30 min"
     ],
     "err": [
      "compte 100 minutes dans une heure",
      "lit 1,30 h puis multiplie par 60",
      "oublie l'heure entière"
     ]
    },
    {
     "id": "M4",
     "q": "3,2 × 10^3 =",
     "ok": "3 200",
     "bad": [
      "32 000",
      "0,0032",
      "320"
     ],
     "err": [
      "ajoute trois zéros à 32 sans tenir compte de la virgule",
      "déplace la virgule dans le mauvais sens",
      "prend 10^3 pour 100"
     ]
    },
    {
     "id": "M5",
     "q": "10^2 × 10^3 =",
     "ok": "10^5",
     "bad": [
      "10^6",
      "100^5",
      "10^1"
     ],
     "err": [
      "multiplie les exposants au lieu de les additionner",
      "multiplie aussi les 10 entre eux",
      "soustrait les exposants"
     ]
    },
    {
     "id": "M6",
     "q": "Un graphique donne la température d'une eau qu'on chauffe (axe vertical, en °C) en fonction du temps (axe horizontal, en min). C'est une droite qui passe par les points (0 ; 20), (2 ; 40) et (4 ; 60). À 3 min, la température lue est",
     "ok": "50 °C",
     "bad": [
      "60 °C",
      "30 °C",
      "43 °C"
     ],
     "err": [
      "croit que la droite passe par l'origine : applique une proportion à partir de (2 ; 40)",
      "applique les 10 °C par minute en oubliant les 20 °C de départ",
      "ajoute 3 à la valeur lue à 2 min : ne lit pas la pente"
     ]
    }
   ],
   "redaction": null,
   "corrige": null
  },
  "C": {
   "titre": "élève de 5e ou de 4e",
   "questions": [
    {
     "id": "C1",
     "q": "Tu dissous entièrement 10 g de sucre dans 200 g d'eau. La masse du mélange obtenu vaut",
     "ok": "210 g",
     "bad": [
      "200 g, car le sucre a disparu",
      "un peu moins de 210 g, car le sucre dissous pèse moins que le sucre solide",
      "on ne peut pas le prévoir sans peser le mélange"
     ],
     "idee_fausse": true,
     "err": [
      "croit que ce qui est dissous n'existe plus",
      "croit que la matière perd de la masse en se dissolvant",
      "ne connaît pas la conservation de la masse"
     ]
    },
    {
     "id": "C2",
     "q": "De l'eau pure bout dans une casserole, à 100 °C. Tu continues à chauffer aussi fort pendant 5 minutes et l'eau bout toujours. Sa température",
     "ok": "reste à 100 °C",
     "bad": [
      "dépasse 100 °C, car on continue à chauffer",
      "monte d'autant plus qu'il reste peu d'eau",
      "baisse, car l'eau s'en va en vapeur"
     ],
     "idee_fausse": true,
     "err": [
      "croit que chauffer fait toujours monter la température",
      "croit que la température d'ébullition dépend de la quantité d'eau",
      "confond l'eau qui s'évapore et l'eau qui refroidit"
     ]
    },
    {
     "id": "C3",
     "q": "Quand l'eau bout à gros bouillons, les grosses bulles qui montent contiennent surtout",
     "ok": "de l'eau à l'état de gaz",
     "bad": [
      "de l'air",
      "du dioxygène et du dihydrogène, car l'eau se casse en bouillant",
      "rien du tout : du vide"
     ],
     "idee_fausse": true,
     "err": [
      "confond les bulles d'ébullition avec de l'air",
      "prend un changement d'état pour une transformation chimique",
      "croit qu'un gaz invisible n'est pas de la matière"
     ]
    },
    {
     "id": "C4",
     "q": "Un caillou a une masse de 60 g et un volume de 20 cm³. Sa masse volumique vaut",
     "ok": "3 g/cm³",
     "bad": [
      "1 200 g/cm³",
      "environ 0,33 g/cm³",
      "40 g/cm³"
     ],
     "err": [
      "multiplie la masse par le volume",
      "inverse le quotient",
      "soustrait le volume de la masse"
     ]
    },
    {
     "id": "C5",
     "q": "Tu pèses un ballon de basket bien gonflé sur une balance précise. Tu le dégonfles, puis tu le pèses de nouveau. La masse affichée",
     "ok": "a diminué, car l'air qui est sorti a une masse",
     "bad": [
      "est la même, car l'air ne pèse rien",
      "a augmenté, car l'air allégeait le ballon",
      "est la même, car seul le volume du ballon a changé"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un gaz n'a pas de masse",
      "croit que l'air rend les objets plus légers, comme un ballon de fête qui s'envole",
      "confond masse et volume"
     ]
    },
    {
     "id": "C6",
     "q": "Laquelle de ces situations est une transformation chimique ?",
     "ok": "du bois qui brûle",
     "bad": [
      "un glaçon qui fond",
      "du sel qui se dissout dans l'eau",
      "du sable qu'on sépare de l'eau avec un filtre"
     ],
     "err": [
      "prend un changement d'état pour une transformation chimique",
      "prend une dissolution pour une transformation chimique",
      "prend une séparation de mélange pour une transformation chimique"
     ]
    },
    {
     "id": "C7",
     "q": "Une élève parcourt 3 km en 30 min, à allure régulière. Sa vitesse moyenne vaut",
     "ok": "6 km/h",
     "bad": [
      "0,1 km/h",
      "90 km/h",
      "10 km/h"
     ],
     "err": [
      "divise 3 par 30 sans convertir les minutes en heures",
      "multiplie la distance par la durée",
      "inverse le quotient"
     ]
    },
    {
     "id": "C8",
     "q": "Tu es assis dans un train qui roule à 100 km/h. Quelle phrase est juste ?",
     "ok": "tu es immobile par rapport au train et en mouvement par rapport au quai",
     "bad": [
      "tu es en mouvement, quel que soit l'objet auquel on te compare",
      "tu es immobile, puisque tu es assis",
      "tu es immobile par rapport au quai et en mouvement par rapport au train"
     ],
     "err": [
      "croit que le mouvement ne dépend pas de l'observateur",
      "confond « ne pas bouger soi-même » et « être immobile pour tout le monde »",
      "inverse les deux références"
     ]
    },
    {
     "id": "C9",
     "q": "Tu lâches un ballon du haut d'un escalier, sans le pousser. Il tombe parce que",
     "ok": "la Terre l'attire",
     "bad": [
      "l'air appuie sur lui et le pousse vers le bas",
      "plus rien ne le tient : aucune action n'est nécessaire pour tomber",
      "il est lourd, et tout ce qui est lourd tombe tout seul"
     ],
     "err": [
      "croit que c'est l'air qui fait tomber les objets",
      "croit qu'une chute n'a pas de cause : il suffit d'ôter le support",
      "fait du poids une propriété de l'objet, sans la Terre"
     ]
    },
    {
     "id": "C10",
     "q": "Dans une lampe de poche allumée, la pile",
     "ok": "convertit de l'énergie chimique en énergie électrique",
     "bad": [
      "convertit de l'énergie électrique en énergie chimique",
      "convertit de l'énergie lumineuse en énergie électrique",
      "ne convertit rien : elle contient de l'électricité en réserve et la laisse sortir"
     ],
     "err": [
      "inverse le sens de la conversion",
      "confond la pile et le panneau solaire",
      "voit la pile comme un réservoir d'électricité"
     ]
    },
    {
     "id": "C11",
     "q": "Une ampoule reçoit 10 J d'énergie électrique. Elle fournit 2 J de lumière. Les 8 J restants",
     "ok": "sont transférés à l'air autour sous forme de chaleur",
     "bad": [
      "ont disparu : cette énergie est détruite",
      "restent stockés dans l'ampoule",
      "retournent à la pile par le second fil"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'énergie peut être détruite",
      "croit que l'énergie non utile reste dans l'appareil",
      "confond l'énergie et le courant qui circule"
     ]
    },
    {
     "id": "C12",
     "q": "Dans une pièce éclairée, tu vois un livre posé sur la table. Pourquoi ?",
     "ok": "le livre renvoie vers tes yeux une partie de la lumière qu'il reçoit",
     "bad": [
      "tes yeux envoient un rayon jusqu'au livre",
      "le livre est éclairé, cela suffit : rien n'a besoin d'arriver jusqu'à tes yeux",
      "le livre produit sa propre lumière"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'œil émet quelque chose pour voir",
      "croit qu'il suffit qu'un objet soit éclairé, sans lumière qui entre dans l'œil",
      "confond objet éclairé et source de lumière"
     ]
    },
    {
     "id": "C13",
     "q": "Une explosion a lieu dans l'espace, dans le vide. Les passagers d'un vaisseau situé à quelques kilomètres",
     "ok": "voient la lumière mais n'entendent aucun son",
     "bad": [
      "voient la lumière, puis entendent le son un peu plus tard",
      "voient la lumière et entendent le son au même instant",
      "ne voient rien et n'entendent rien"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le son se propage dans le vide, en plus lent que la lumière",
      "croit que le son se propage dans le vide, aussi vite que la lumière",
      "croit que la lumière aussi a besoin d'un milieu matériel"
     ]
    },
    {
     "id": "C14",
     "q": "Pendant un orage, tu vois un éclair, puis tu entends le tonnerre 3 s plus tard. Le son parcourt environ 340 m par seconde. L'orage est à environ",
     "ok": "1 000 m",
     "bad": [
      "113 m",
      "340 m",
      "3 km"
     ],
     "err": [
      "divise la vitesse par la durée",
      "oublie de multiplier par la durée",
      "applique « une seconde, un kilomètre » sans calculer"
     ]
    },
    {
     "id": "C15",
     "q": "Pour allumer une lampe avec une pile et des fils, il faut",
     "ok": "relier une borne de la lampe à une borne de la pile, et l'autre borne de la lampe à l'autre borne de la pile",
     "bad": [
      "un seul fil, de la borne + de la pile à la lampe",
      "deux fils qui partent de la même borne de la pile et arrivent sur les deux bornes de la lampe",
      "relier les deux bornes de la pile par un fil, la lampe posée contre le fil"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un seul fil suffit pour amener le courant",
      "ne voit pas qu'il faut une boucle passant par les deux bornes de la pile",
      "met la pile en court-circuit : la lampe n'est pas dans la boucle"
     ]
    },
    {
     "id": "C16",
     "q": "Un circuit forme une boucle : une pile, une lampe allumée, deux fils. Tu mesures l'intensité du courant dans le fil qui arrive à la lampe, puis dans le fil qui en repart. Tu trouves",
     "ok": "la même valeur dans les deux fils",
     "bad": [
      "une valeur plus faible dans le fil qui repart, car la lampe a utilisé une partie du courant",
      "zéro dans le fil qui repart, car la lampe a utilisé tout le courant",
      "une valeur plus grande dans le fil qui repart"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le courant s'use en traversant la lampe",
      "croit que le courant est entièrement consommé",
      "croit que le courant s'accumule ou grossit en route"
     ]
    },
    {
     "id": "C17",
     "q": "Deux lampes sont branchées en dérivation sur une pile. Tu dévisses l'une des deux. L'autre",
     "ok": "reste allumée",
     "bad": [
      "s'éteint aussi",
      "brille deux fois plus fort",
      "s'éteint au bout de quelques secondes"
     ],
     "err": [
      "confond dérivation et série",
      "croit que le courant de la lampe retirée se reporte sur l'autre",
      "croit qu'il reste du courant en réserve dans les fils"
     ]
    }
   ],
   "redaction": "Lors d'une sortie, une classe marche 6 km en 1 h 30 min, à allure régulière.\n1. Calcule la vitesse moyenne de la classe en km/h.\n2. À cette vitesse, quelle durée faut-il pour parcourir 10 km ?\nPour chaque question : écris la relation que tu utilises, le calcul, le résultat avec son unité, puis une phrase de conclusion.",
   "corrige": "1 h 30 min = 1,5 h. v = d/t = 6/1,5 = 4 km/h : la classe marche à 4 km/h en moyenne. t = d/v = 10/4 = 2,5 h, soit 2 h 30 min : il faut 2 h 30 min pour parcourir 10 km."
  },
  "T": {
   "titre": "élève de 3e",
   "questions": [
    {
     "id": "T1",
     "q": "L'atome de chlore possède 17 protons et 17 électrons. L'ion chlorure Cl− possède",
     "ok": "17 protons et 18 électrons",
     "bad": [
      "17 protons et 16 électrons",
      "16 protons et 17 électrons",
      "18 protons et 17 électrons"
     ],
     "err": [
      "retire un électron pour une charge négative",
      "modifie le nombre de protons : en retire un",
      "modifie le nombre de protons : en ajoute un"
     ]
    },
    {
     "id": "T2",
     "q": "L'huile a une masse volumique de 0,9 g/mL. La masse de 200 mL d'huile vaut",
     "ok": "180 g",
     "bad": [
      "environ 222 g",
      "200 g",
      "200,9 g"
     ],
     "err": [
      "divise le volume par la masse volumique au lieu de multiplier",
      "croit que 1 mL de n'importe quel liquide pèse 1 g, comme l'eau",
      "additionne les deux données"
     ]
    },
    {
     "id": "T3",
     "q": "On brûle un morceau de charbon dans un flacon bien fermé, rempli de dioxygène. Le charbon disparaît presque entièrement. La masse du flacon et de son contenu",
     "ok": "n'a pas changé",
     "bad": [
      "a diminué, car le charbon solide a disparu",
      "a diminué, car le gaz formé ne pèse rien",
      "a augmenté, car un nouveau corps s'est formé"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la matière qui n'est plus visible n'a plus de masse",
      "croit qu'un gaz n'a pas de masse",
      "croit qu'une transformation chimique crée de la matière"
     ]
    },
    {
     "id": "T4",
     "q": "N2 + 3 H2 → 2 NH3. Du côté des produits, le nombre total d'atomes d'hydrogène est",
     "ok": "6",
     "bad": [
      "3",
      "5",
      "2"
     ],
     "err": [
      "ignore le coefficient 2 devant NH3",
      "additionne le coefficient et l'indice",
      "lit le coefficient à la place du nombre d'atomes"
     ]
    },
    {
     "id": "T5",
     "q": "Une solution acide a un pH de 3. On la dilue avec beaucoup d'eau pure. Son pH",
     "ok": "augmente et se rapproche de 7, sans le dépasser",
     "bad": [
      "diminue, car la solution est plus diluée",
      "ne change pas, car c'est toujours le même acide",
      "passe au-dessus de 7 : la solution devient basique"
     ],
     "err": [
      "croit que « plus dilué » veut dire « pH plus petit »",
      "croit que le pH ne dépend que de la nature de l'acide",
      "croit que l'eau peut rendre basique une solution acide"
     ]
    },
    {
     "id": "T6",
     "q": "Sur Terre, g vaut environ 10 N/kg. Le poids d'un sac de 5 kg vaut",
     "ok": "50 N",
     "bad": [
      "5 N",
      "0,5 N",
      "50 kg"
     ],
     "err": [
      "donne au poids la valeur de la masse",
      "divise au lieu de multiplier",
      "calcule juste mais donne une unité de masse : confond poids et masse"
     ]
    },
    {
     "id": "T7",
     "q": "Un satellite tourne autour de la Terre à 400 km d'altitude. À cette altitude, l'attraction de la Terre sur le satellite",
     "ok": "existe toujours : c'est elle qui le maintient sur son orbite",
     "bad": [
      "a disparu, car il n'y a plus d'air",
      "a disparu, car il n'y a pas de gravité dans l'espace",
      "est annulée par l'attraction de la Lune"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la gravité vient de l'air",
      "croit que la gravité s'arrête en quittant la Terre",
      "invente une compensation pour expliquer que le satellite ne tombe pas"
     ]
    },
    {
     "id": "T8",
     "q": "Tu pousses une caisse sur le sol, puis tu la lâches. Elle ralentit et s'arrête. Pourquoi ?",
     "ok": "les frottements du sol la freinent",
     "bad": [
      "la force de ta poussée, restée dans la caisse, s'est épuisée",
      "plus aucune force ne s'exerce sur elle, donc elle s'arrête",
      "son poids la freine"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une force reste « dans » l'objet et s'use",
      "croit qu'il faut une force pour entretenir un mouvement, et ne voit pas les frottements",
      "attribue le freinage au poids, qui est vertical"
     ]
    },
    {
     "id": "T9",
     "q": "Une voiture de 1 000 kg roule à 20 m/s. Son énergie cinétique vaut",
     "ok": "200 000 J",
     "bad": [
      "10 000 J",
      "400 000 J",
      "20 000 J"
     ],
     "err": [
      "oublie le carré de la vitesse",
      "oublie le facteur un demi",
      "multiplie la masse par la vitesse"
     ]
    },
    {
     "id": "T10",
     "q": "Une pomme tombe d'un arbre. On néglige les frottements de l'air. Pendant la chute",
     "ok": "son énergie de position diminue et son énergie cinétique augmente",
     "bad": [
      "ses deux énergies augmentent, car elle va de plus en plus vite",
      "son énergie cinétique reste constante",
      "ses deux énergies diminuent, car elle se rapproche du sol"
     ],
     "err": [
      "lie toute énergie à la vitesse",
      "croit que l'énergie cinétique ne dépend pas de la vitesse",
      "lie toute énergie à la hauteur"
     ]
    },
    {
     "id": "T11",
     "q": "Une lampe de puissance 10 W reste allumée 2 min. L'énergie qu'elle consomme vaut",
     "ok": "1 200 J",
     "bad": [
      "20 J",
      "5 J",
      "600 J"
     ],
     "err": [
      "ne convertit pas les minutes en secondes",
      "divise au lieu de multiplier",
      "convertit une minute mais oublie qu'il y en a deux"
     ]
    },
    {
     "id": "T12",
     "q": "La lumière du Soleil met environ 8 min pour arriver sur Terre. Elle se propage à 300 000 km/s. La distance entre la Terre et le Soleil vaut environ",
     "ok": "144 millions de km",
     "bad": [
      "2,4 millions de km",
      "37 500 km",
      "625 km"
     ],
     "err": [
      "ne convertit pas les minutes en secondes",
      "divise la vitesse par la durée, sans conversion",
      "divise la vitesse par la durée en secondes"
     ]
    },
    {
     "id": "T13",
     "q": "L'oreille humaine entend les sons de 20 Hz à 20 000 Hz environ. Un sifflet pour chien émet un son de 30 000 Hz. Pour toi, ce son",
     "ok": "est un ultrason : il est trop aigu pour être entendu",
     "bad": [
      "est un infrason : il est trop grave pour être entendu",
      "s'entend très bien, car il est très fort",
      "s'entend comme un son très aigu"
     ],
     "err": [
      "inverse aigu et grave",
      "confond fréquence et niveau sonore",
      "croit que l'oreille n'a pas de limite vers les sons aigus"
     ]
    },
    {
     "id": "T14",
     "q": "Une année-lumière est",
     "ok": "une distance",
     "bad": [
      "une durée",
      "une vitesse",
      "une quantité de lumière"
     ],
     "err": [
      "se laisse piéger par le mot « année »",
      "confond avec la vitesse de la lumière",
      "se laisse piéger par le mot « lumière »"
     ]
    },
    {
     "id": "T15",
     "q": "Un conducteur ohmique est soumis à une tension de 6 V. Il est traversé par un courant de 0,2 A. Sa résistance vaut",
     "ok": "30 Ω",
     "bad": [
      "1,2 Ω",
      "environ 0,033 Ω",
      "6,2 Ω"
     ],
     "err": [
      "multiplie la tension par l'intensité",
      "inverse le quotient",
      "additionne les deux données"
     ]
    },
    {
     "id": "T16",
     "q": "Une pile alimente une lampe. La tension de la pile ne change pas. On ajoute une seconde lampe identique, en dérivation sur la première. L'intensité du courant qui sort de la pile",
     "ok": "augmente",
     "bad": [
      "reste la même et se partage entre les deux lampes",
      "diminue, car il y a plus de lampes à traverser",
      "reste la même, et chaque lampe la reçoit en entier"
     ],
     "idee_fausse": true,
     "err": [
      "croit que la pile débite toujours le même courant, quel que soit le circuit",
      "raisonne comme en série : plus de lampes, moins de courant",
      "croit que la pile débite toujours le même courant et ignore le partage entre les branches"
     ]
    },
    {
     "id": "T17",
     "q": "Une pile de 4,5 V alimente deux lampes branchées en série. La tension aux bornes de la première lampe vaut 3 V. Aux bornes de la seconde, elle vaut",
     "ok": "1,5 V",
     "bad": [
      "3 V",
      "4,5 V",
      "7,5 V"
     ],
     "err": [
      "applique à la tension la règle de l'intensité en série : la même partout",
      "croit que chaque lampe reçoit la tension de la pile, comme en dérivation",
      "additionne au lieu de soustraire"
     ]
    }
   ],
   "redaction": "Une bague a une masse de 38,6 g. On la plonge dans une éprouvette graduée : le niveau de l'eau passe de 20,0 mL à 22,0 mL. Données : 1 mL = 1 cm³ ; masse volumique de l'or : 19,3 g/cm³ ; masse volumique de l'argent : 10,5 g/cm³.\n1. Calcule le volume de la bague.\n2. Calcule la masse volumique de la bague, en g/cm³.\n3. La bague peut-elle être en or ? Justifie.\nPour chaque question : écris la relation que tu utilises, le calcul, le résultat avec son unité, puis une phrase de conclusion.",
   "corrige": "V = 22,0 − 20,0 = 2,0 mL, soit 2,0 cm³. Masse volumique = m/V = 38,6/2,0 = 19,3 g/cm³. Cette valeur est égale à celle de l'or et très différente de celle de l'argent : la bague peut être en or. Une seule mesure ne suffit pas à le prouver, elle montre seulement que le résultat est compatible."
  },
  "S": {
   "titre": "élève de seconde",
   "questions": [
    {
     "id": "S1",
     "q": "Une solution a une concentration en masse de 20 g/L. La masse de soluté contenue dans 250 mL de cette solution vaut",
     "ok": "5 g",
     "bad": [
      "5 000 g",
      "80 g",
      "12,5 g"
     ],
     "err": [
      "ne convertit pas les millilitres en litres",
      "divise la concentration par le volume au lieu de multiplier",
      "divise le volume par la concentration"
     ]
    },
    {
     "id": "S2",
     "q": "Une eau minérale en bouteille, parfaitement limpide, est",
     "ok": "un mélange homogène : de l'eau et des espèces dissoutes",
     "bad": [
      "un corps pur, car elle est transparente",
      "un corps pur, car elle est naturelle",
      "un mélange hétérogène"
     ],
     "idee_fausse": true,
     "err": [
      "confond « limpide » et « pur »",
      "confond « naturel » et « pur »",
      "confond homogène et hétérogène"
     ]
    },
    {
     "id": "S3",
     "q": "Un noyau de sodium a pour nombre de masse A = 23 et pour numéro atomique Z = 11. Il contient",
     "ok": "11 protons et 12 neutrons",
     "bad": [
      "11 protons et 23 neutrons",
      "23 protons et 11 neutrons",
      "12 protons et 11 neutrons"
     ],
     "err": [
      "prend A pour le nombre de neutrons",
      "inverse A et Z",
      "inverse protons et neutrons"
     ]
    },
    {
     "id": "S4",
     "q": "Une mole d'atomes de fer et une mole d'atomes d'or",
     "ok": "contiennent le même nombre d'atomes",
     "bad": [
      "ont la même masse",
      "occupent le même volume",
      "ne contiennent pas le même nombre d'atomes : il y en a plus dans l'or, qui est plus lourd"
     ],
     "err": [
      "confond quantité de matière et masse",
      "confond quantité de matière et volume",
      "croit que le nombre d'entités dans une mole dépend de l'atome"
     ]
    },
    {
     "id": "S5",
     "q": "Un glaçon fond. À l'échelle microscopique, les molécules d'eau",
     "ok": "restent les mêmes : seule leur disposition change",
     "bad": [
      "se cassent en atomes d'hydrogène et d'oxygène",
      "grossissent en se réchauffant",
      "deviennent des molécules d'une autre espèce chimique"
     ],
     "idee_fausse": true,
     "err": [
      "prend un changement d'état pour une transformation chimique : les molécules se cassent",
      "prête aux molécules les propriétés de la matière visible",
      "prend un changement d'état pour une transformation chimique : l'espèce change"
     ]
    },
    {
     "id": "S6",
     "q": "C3H8 + … O2 → 3 CO2 + 4 H2O. Pour que l'équation soit ajustée, le nombre à écrire devant O2 est",
     "ok": "5",
     "bad": [
      "7",
      "10",
      "2"
     ],
     "err": [
      "additionne les coefficients des produits",
      "compte les atomes d'oxygène sans diviser par 2",
      "recopie l'indice de O2"
     ]
    },
    {
     "id": "S7",
     "q": "Une sonde spatiale se trouve très loin de tout astre, moteurs coupés. Aucune force ne s'exerce sur elle. Elle",
     "ok": "continue en ligne droite, à vitesse constante",
     "bad": [
      "ralentit peu à peu, puis s'arrête",
      "s'arrête aussitôt",
      "va de plus en plus vite"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'un mouvement s'épuise sans force pour l'entretenir",
      "croit qu'il n'y a pas de mouvement sans force",
      "croit qu'un objet lancé continue d'accélérer tout seul"
     ]
    },
    {
     "id": "S8",
     "q": "La Terre attire la Lune. La Lune, elle,",
     "ok": "attire la Terre avec une force de même valeur",
     "bad": [
      "attire la Terre avec une force plus faible, car sa masse est plus petite",
      "n'attire pas la Terre : seul le plus gros astre attire l'autre",
      "repousse la Terre, sinon les deux astres se rejoindraient"
     ],
     "idee_fausse": true,
     "err": [
      "croit que le plus lourd exerce la force la plus grande",
      "croit qu'un seul des deux objets agit",
      "confond attraction mutuelle et répulsion pour expliquer l'orbite"
     ]
    },
    {
     "id": "S9",
     "q": "Un satellite géostationnaire reste toujours à la verticale du même point de l'équateur. Il est immobile dans le référentiel",
     "ok": "terrestre",
     "bad": [
      "géocentrique",
      "héliocentrique",
      "de ton choix : un objet immobile l'est dans tous les référentiels"
     ],
     "err": [
      "confond référentiel terrestre et référentiel géocentrique",
      "choisit un référentiel où la Terre elle-même se déplace",
      "croit que l'immobilité ne dépend pas du référentiel"
     ]
    },
    {
     "id": "S10",
     "q": "La distance entre deux astres double. La valeur de la force de gravitation entre eux est",
     "ok": "divisée par 4",
     "bad": [
      "divisée par 2",
      "multipliée par 4",
      "inchangée"
     ],
     "err": [
      "oublie le carré de la distance",
      "inverse le sens de la variation",
      "croit que la gravitation ne dépend pas de la distance"
     ]
    },
    {
     "id": "S11",
     "q": "Un son devient plus aigu quand",
     "ok": "sa fréquence augmente",
     "bad": [
      "son amplitude augmente",
      "sa vitesse de propagation augmente",
      "sa période augmente"
     ],
     "err": [
      "confond hauteur et intensité sonore",
      "lie la hauteur à la vitesse du son",
      "inverse le lien entre période et fréquence"
     ]
    },
    {
     "id": "S12",
     "q": "Un faisceau de lumière blanche traverse un prisme. Sur un écran, on observe",
     "ok": "un spectre continu : le prisme sépare des couleurs qui étaient déjà dans la lumière blanche",
     "bad": [
      "un spectre continu : le verre du prisme ajoute des couleurs à la lumière blanche",
      "une tache blanche simplement déviée",
      "quelques raies colorées sur fond noir"
     ],
     "err": [
      "croit que le prisme colore la lumière",
      "connaît la déviation mais pas la dispersion",
      "confond le spectre de la lumière blanche et un spectre de raies"
     ]
    },
    {
     "id": "S13",
     "q": "Un rayon lumineux passe de l'air dans l'eau (indice 1,33). Son angle d'incidence, mesuré par rapport à la normale, vaut 40°. L'angle de réfraction est",
     "ok": "plus petit que 40°",
     "bad": [
      "égal à 40°",
      "plus grand que 40°",
      "nul"
     ],
     "err": [
      "croit que la lumière ne change pas de direction en changeant de milieu",
      "inverse le sens de la déviation",
      "confond avec le cas d'un rayon arrivant perpendiculairement à la surface"
     ]
    },
    {
     "id": "S14",
     "q": "Un courant de 0,50 A arrive à un nœud du circuit et se partage entre deux branches. La première branche est parcourue par 0,20 A. La seconde est parcourue par",
     "ok": "0,30 A",
     "bad": [
      "0,50 A",
      "0,70 A",
      "0,20 A"
     ],
     "err": [
      "applique au nœud la règle du circuit en série : la même intensité partout",
      "additionne au lieu de soustraire",
      "suppose un partage égal entre les branches"
     ]
    },
    {
     "id": "S15",
     "q": "La caractéristique d'un dipôle (tension U en fonction de l'intensité I) est une droite qui passe par l'origine et par le point (0,10 A ; 5,0 V). Ce dipôle est un conducteur ohmique de résistance",
     "ok": "50 Ω",
     "bad": [
      "0,50 Ω",
      "0,020 Ω",
      "5,1 Ω"
     ],
     "err": [
      "multiplie U par I",
      "inverse le quotient",
      "additionne les deux valeurs lues"
     ]
    },
    {
     "id": "S16",
     "q": "Tu dissous le contenu d'un sachet dans de l'eau à 20 °C. La température de l'eau descend à 12 °C. Cette dissolution est",
     "ok": "endothermique : elle absorbe de l'énergie, prise à l'eau",
     "bad": [
      "exothermique : elle libère de l'énergie",
      "exothermique : elle libère du froid",
      "sans échange d'énergie : c'est la poudre qui était froide"
     ],
     "err": [
      "inverse les deux mots",
      "voit le froid comme une chose que l'on libère",
      "ne relie pas la baisse de température à un échange d'énergie"
     ]
    },
    {
     "id": "S17",
     "q": "Il faut 330 J pour faire fondre 1 g de glace à 0 °C. Pour faire fondre 20 g de glace à 0 °C, il faut",
     "ok": "6 600 J",
     "bad": [
      "16,5 J",
      "350 J",
      "0 J, car la température ne change pas pendant la fusion"
     ],
     "err": [
      "divise au lieu de multiplier",
      "additionne les deux données",
      "confond apport d'énergie et hausse de température"
     ]
    }
   ],
   "redaction": "On dissout 5,00 g de glucose dans de l'eau pour obtenir 250,0 mL de solution, appelée solution mère.\n1. Calcule la concentration en masse de la solution mère.\n2. On prélève 20,0 mL de la solution mère et on complète avec de l'eau jusqu'à 100,0 mL. Calcule la concentration en masse de la solution fille obtenue.\n3. Vérifie que ton résultat est cohérent : la solution fille doit-elle être plus ou moins concentrée que la solution mère ?\nPour chaque question : écris la relation littérale, le calcul, le résultat avec son unité et trois chiffres significatifs, puis une phrase de conclusion.",
   "corrige": "Concentration en masse de la solution mère = m/V = 5,00/0,2500 = 20,0 g/L. Masse de glucose prélevée = 20,0 × 0,0200 = 0,400 g ; concentration de la solution fille = 0,400/0,1000 = 4,00 g/L. Autre méthode : le volume est multiplié par 5, donc la concentration est divisée par 5, et 20,0/5 = 4,00 g/L. La solution fille est moins concentrée que la solution mère, ce qui est cohérent avec une dilution."
  }
 },
 "domaines": [
  {
   "nom": "Outils mathématiques",
   "ids": {
    "C": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6"
    ],
    "T": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6"
    ],
    "S": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6"
    ]
   }
  },
  {
   "nom": "Matière : organisation et transformations",
   "ids": {
    "C": [
     "C1",
     "C2",
     "C3",
     "C4",
     "C5",
     "C6"
    ],
    "T": [
     "T1",
     "T2",
     "T3",
     "T4",
     "T5"
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
  },
  {
   "nom": "Mouvement et interactions",
   "ids": {
    "C": [
     "C7",
     "C8",
     "C9"
    ],
    "T": [
     "T6",
     "T7",
     "T8"
    ],
    "S": [
     "S7",
     "S8",
     "S9",
     "S10"
    ]
   }
  },
  {
   "nom": "Énergie et conversions",
   "ids": {
    "C": [
     "C10",
     "C11"
    ],
    "T": [
     "T9",
     "T10",
     "T11"
    ],
    "S": [
     "S16",
     "S17"
    ]
   }
  },
  {
   "nom": "Signaux : lumière et son",
   "ids": {
    "C": [
     "C12",
     "C13",
     "C14"
    ],
    "T": [
     "T12",
     "T13",
     "T14"
    ],
    "S": [
     "S11",
     "S12",
     "S13"
    ]
   }
  },
  {
   "nom": "Électricité",
   "ids": {
    "C": [
     "C15",
     "C16",
     "C17"
    ],
    "T": [
     "T15",
     "T16",
     "T17"
    ],
    "S": [
     "S14",
     "S15"
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
