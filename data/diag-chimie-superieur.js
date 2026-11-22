window.DIAGS = window.DIAGS || {};
window.DIAGS["chimie-superieur"] = {
 "cle": "chimie-superieur",
 "matiere": "chimie",
 "titre": "Test de chimie",
 "nom": "Test de chimie, première année du supérieur",
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
 "source": "diagnostic-chimie-superieur.md",
 "blocs": {
  "L": {
   "titre": "acquis du lycée dont la première année a besoin",
   "questions": [
    {
     "id": "L1",
     "q": "On dissout 4,0 g d'hydroxyde de sodium NaOH (M = 40 g/mol) dans de l'eau pour obtenir 250 mL de solution. La concentration en quantité de matière vaut",
     "ok": "0,40 mol/L",
     "bad": [
      "0,10 mol/L",
      "0,025 mol/L",
      "16 mol/L"
     ],
     "err": [
      "s'arrête à la quantité de matière, sans diviser par le volume",
      "multiplie par le volume au lieu de diviser",
      "divise la masse par le volume : donne une concentration en masse avec la mauvaise unité"
     ]
    },
    {
     "id": "L2",
     "q": "On prélève 10 mL d'une solution à 0,50 mol/L, qu'on verse dans une fiole jaugée de 100 mL. On complète avec de l'eau jusqu'au trait. La nouvelle concentration vaut",
     "ok": "0,050 mol/L",
     "bad": [
      "5,0 mol/L",
      "environ 0,045 mol/L",
      "0,50 mol/L"
     ],
     "err": [
      "multiplie par le facteur de dilution au lieu de diviser",
      "ajoute 100 mL d'eau au lieu de compléter à 100 mL",
      "croit que la dilution ne change pas la concentration"
     ]
    },
    {
     "id": "L3",
     "q": "N2 + 3 H2 → 2 NH3. On mélange 2 mol de N2 et 3 mol de H2. La quantité maximale de NH3 qu'on peut obtenir vaut",
     "ok": "2 mol",
     "bad": [
      "4 mol",
      "5 mol",
      "3 mol"
     ],
     "err": [
      "prend N2 comme réactif limitant parce qu'il y en a moins, sans les coefficients",
      "additionne les quantités de réactifs",
      "recopie la quantité de H2 sans utiliser les coefficients"
     ]
    },
    {
     "id": "L4",
     "q": "C3H8 + x O2 → 3 CO2 + 4 H2O. Pour que l'équation soit ajustée, x vaut",
     "ok": "5",
     "bad": [
      "7",
      "10",
      "2"
     ],
     "err": [
      "compte les molécules de produits",
      "compte les atomes d'oxygène sans diviser par 2",
      "ne compte que l'oxygène de l'eau"
     ]
    },
    {
     "id": "L5",
     "q": "L'ion chlorure formé à partir du chlore 35 (Z = 17, A = 35) porte une charge négative. Il contient",
     "ok": "17 protons, 18 neutrons, 18 électrons",
     "bad": [
      "17 protons, 18 neutrons, 16 électrons",
      "17 protons, 35 neutrons, 18 électrons",
      "18 protons, 17 neutrons, 18 électrons"
     ],
     "err": [
      "retire un électron pour une charge négative",
      "prend le nombre de masse pour le nombre de neutrons",
      "change le nombre de protons"
     ]
    },
    {
     "id": "L6",
     "q": "La configuration électronique de l'atome de soufre (Z = 16) dans son état fondamental est",
     "ok": "1s² 2s² 2p⁶ 3s² 3p⁴",
     "bad": [
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁸ 3s² 3p²",
      "1s² 2s² 2p⁶ 3s⁶"
     ],
     "err": [
      "donne la configuration de l'ion sulfure ou de l'argon",
      "met 8 électrons dans une sous-couche p, limitée à 6",
      "met 6 électrons dans une sous-couche s, limitée à 2"
     ]
    },
    {
     "id": "L7",
     "q": "L'atome de magnésium (Z = 12) forme l'ion Mg²⁺ parce qu'il",
     "ok": "perd ses 2 électrons de valence et prend la configuration du néon",
     "bad": [
      "gagne 2 électrons pour compléter sa couche externe",
      "perd 2 protons",
      "perd 2 électrons et prend la configuration de l'argon"
     ],
     "err": [
      "croit qu'un ion positif a gagné des électrons",
      "croit que la charge vient d'une perte de protons",
      "se trompe de gaz noble : le plus proche est celui qui précède"
     ]
    },
    {
     "id": "L8",
     "q": "Dans le schéma de Lewis de la molécule d'eau H2O, l'atome d'oxygène porte",
     "ok": "2 doublets non liants",
     "bad": [
      "aucun doublet non liant",
      "1 doublet non liant",
      "4 doublets non liants"
     ],
     "err": [
      "ne représente que les liaisons",
      "confond avec l'azote de l'ammoniac",
      "compte les électrons au lieu des doublets"
     ]
    },
    {
     "id": "L9",
     "q": "La molécule de dioxyde de carbone CO2 est",
     "ok": "linéaire et apolaire, bien que ses liaisons soient polarisées",
     "bad": [
      "coudée et polaire, comme la molécule d'eau",
      "linéaire et polaire, car ses liaisons sont polarisées",
      "apolaire, car le carbone et l'oxygène attirent autant les électrons"
     ],
     "idee_fausse": true,
     "err": [
      "recopie la géométrie de l'eau",
      "confond liaison polarisée et molécule polaire",
      "croit que deux atomes différents attirent autant les électrons"
     ]
    },
    {
     "id": "L10",
     "q": "Quand de l'eau bout, les grosses bulles qui montent dans le liquide contiennent",
     "ok": "de la vapeur d'eau, c'est-à-dire des molécules H2O",
     "bad": [
      "du dihydrogène et du dioxygène",
      "de l'air",
      "du vide"
     ],
     "idee_fausse": true,
     "err": [
      "croit que l'ébullition casse les liaisons à l'intérieur des molécules",
      "confond avec l'air dissous, qui ne forme que les petites bulles du début",
      "croit qu'un gaz invisible n'est pas de la matière"
     ]
    },
    {
     "id": "L11",
     "q": "Deux solutions ont la même concentration, 0,010 mol/L : l'une d'acide chlorhydrique (acide fort), l'autre d'acide éthanoïque (acide faible).",
     "ok": "Le pH de la solution d'acide éthanoïque est le plus élevé",
     "bad": [
      "Les deux pH sont égaux, puisque les concentrations sont égales",
      "Le pH de la solution d'acide éthanoïque est le plus bas",
      "L'acide éthanoïque ne produit aucun ion H3O+"
     ],
     "idee_fausse": true,
     "err": [
      "confond la force d'un acide et sa concentration",
      "inverse : croit qu'un acide faible donne plus d'ions H3O+",
      "croit qu'un acide faible ne réagit pas du tout avec l'eau"
     ]
    },
    {
     "id": "L12",
     "q": "Le pH d'une solution passe de 3 à 5. Sa concentration en ions H3O+ a été",
     "ok": "divisée par 100",
     "bad": [
      "divisée par 2",
      "multipliée par 100",
      "multipliée par 2"
     ],
     "err": [
      "raisonne en différence (5 − 3) au lieu d'un facteur 10 par unité de pH",
      "inverse le sens : un pH qui monte veut dire moins d'ions H3O+",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "L13",
     "q": "Dans une solution, le pH est égal au pKa du couple acide/base présent. Cela veut dire que",
     "ok": "l'acide et sa base conjuguée ont la même concentration",
     "bad": [
      "la solution est neutre",
      "l'acide a entièrement réagi avec l'eau",
      "l'acide n'a pas du tout réagi avec l'eau"
     ],
     "err": [
      "confond pH = pKa et pH = 7",
      "confond avec le cas d'un acide fort",
      "confond acide faible et acide qui ne réagit pas"
     ]
    },
    {
     "id": "L14",
     "q": "On titre 20,0 mL d'acide chlorhydrique par une solution de soude à 0,10 mol/L. L'équivalence est atteinte pour 10,0 mL de soude versés. La concentration de l'acide vaut",
     "ok": "0,050 mol/L",
     "bad": [
      "0,20 mol/L",
      "0,10 mol/L",
      "0,0010 mol/L"
     ],
     "err": [
      "inverse les deux volumes",
      "croit que les concentrations sont égales à l'équivalence",
      "s'arrête à la quantité de matière, sans diviser par le volume d'acide"
     ]
    },
    {
     "id": "L15",
     "q": "Dans la réaction Zn + Cu²⁺ → Zn²⁺ + Cu, le zinc métallique Zn est",
     "ok": "le réducteur : il cède des électrons",
     "bad": [
      "l'oxydant : il cède des électrons",
      "le réducteur : il capte des électrons",
      "l'oxydant : il capte des électrons"
     ],
     "err": [
      "confond oxydant et réducteur",
      "se trompe sur le sens de l'échange d'électrons",
      "cumule les deux erreurs"
     ]
    },
    {
     "id": "L16",
     "q": "MnO4⁻ + 8 H⁺ + x e⁻ = Mn²⁺ + 4 H2O. Pour que les charges soient équilibrées, x vaut",
     "ok": "5",
     "bad": [
      "3",
      "7",
      "2"
     ],
     "err": [
      "oublie les charges des ions H⁺",
      "donne le nombre d'oxydation du manganèse dans MnO4⁻",
      "recopie la charge de l'ion Mn²⁺"
     ]
    },
    {
     "id": "L17",
     "q": "Un catalyseur",
     "ok": "augmente la vitesse de la réaction sans changer l'état final",
     "bad": [
      "augmente la quantité de produit obtenue à l'état final",
      "est un réactif comme les autres, consommé par la réaction",
      "n'agit que si on chauffe le mélange"
     ],
     "idee_fausse": true,
     "err": [
      "confond vitesse et état final",
      "croit que le catalyseur est consommé",
      "confond catalyseur et effet de la température"
     ]
    },
    {
     "id": "L18",
     "q": "Le temps de demi-réaction est la durée au bout de laquelle",
     "ok": "l'avancement a atteint la moitié de sa valeur finale",
     "bad": [
      "la moitié de la durée totale de la réaction s'est écoulée",
      "la vitesse de réaction a été divisée par deux",
      "la moitié du réactif en excès a disparu"
     ],
     "err": [
      "confond avec la moitié de la durée totale",
      "confond avancement et vitesse",
      "raisonne sur le réactif en excès au lieu de l'avancement"
     ]
    },
    {
     "id": "L19",
     "q": "La molécule CH3-COOH appartient à la famille des",
     "ok": "acides carboxyliques",
     "bad": [
      "alcools",
      "aldéhydes",
      "esters"
     ],
     "err": [
      "voit le groupe OH sans voir le C=O voisin",
      "confond le groupe carboxyle et le groupe carbonyle en bout de chaîne",
      "confond acide et ester"
     ]
    },
    {
     "id": "L20",
     "q": "L'éthanol CH3-CH2-OH et le méthoxyméthane CH3-O-CH3 ont la même formule brute C2H6O. Ce sont",
     "ok": "des isomères de constitution",
     "bad": [
      "une seule et même molécule, dessinée de deux façons",
      "des isotopes",
      "l'acide et la base d'un même couple"
     ],
     "err": [
      "croit qu'une formule brute désigne une seule molécule",
      "confond isomère et isotope",
      "confond avec la notion de couple"
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
     "q": "Une sous-couche 3d peut contenir au maximum",
     "ok": "10 électrons",
     "bad": [
      "6 électrons",
      "18 électrons",
      "5 électrons"
     ],
     "err": [
      "confond avec une sous-couche p",
      "donne la capacité de toute la couche n = 3",
      "compte les orbitales sans les deux électrons par orbitale"
     ]
    },
    {
     "id": "S2",
     "q": "La configuration électronique de l'atome de fer (Z = 26) dans son état fondamental est",
     "ok": "[Ar] 4s² 3d⁶",
     "bad": [
      "[Ar] 3d⁸",
      "[Ar] 4s² 4p⁶",
      "[Ar] 4s¹ 3d⁷"
     ],
     "err": [
      "remplit la sous-couche 3d avant la 4s",
      "saute la sous-couche 3d",
      "applique à tort l'exception du chrome et du cuivre"
     ]
    },
    {
     "id": "S3",
     "q": "Dans la classification périodique, l'électronégativité augmente en général",
     "ok": "de gauche à droite dans une période et de bas en haut dans une colonne",
     "bad": [
      "de gauche à droite dans une période et de haut en bas dans une colonne",
      "de droite à gauche dans une période et de bas en haut dans une colonne",
      "seulement dans une colonne : elle est constante dans une période"
     ],
     "err": [
      "se trompe de sens dans une colonne",
      "se trompe de sens dans une période",
      "croit que l'électronégativité ne varie pas dans une période"
     ]
    },
    {
     "id": "S4",
     "q": "Le sodium (Z = 11) et le chlore (Z = 17) sont dans la même période. L'atome le plus gros est",
     "ok": "le sodium : son noyau, moins chargé, attire moins les électrons de la même couche",
     "bad": [
      "le chlore : il a plus d'électrons",
      "le chlore : il a plus de protons, donc un noyau plus gros",
      "aucun : deux atomes d'une même période ont la même taille"
     ],
     "err": [
      "croit que plus d'électrons veut dire plus gros",
      "confond la taille du noyau et la taille de l'atome",
      "croit que la taille ne dépend que du nombre de couches"
     ]
    },
    {
     "id": "S5",
     "q": "D'après la méthode VSEPR, la molécule d'ammoniac NH3 est",
     "ok": "une pyramide à base triangulaire",
     "bad": [
      "plane et triangulaire",
      "tétraédrique",
      "coudée"
     ],
     "err": [
      "oublie le doublet non liant de l'azote",
      "confond la disposition des quatre doublets et la forme de la molécule",
      "recopie la géométrie de l'eau"
     ]
    },
    {
     "id": "S6",
     "q": "Dans la molécule d'éthène H2C=CH2, chaque atome de carbone est hybridé",
     "ok": "sp²",
     "bad": [
      "sp³",
      "sp",
      "il n'est pas hybridé"
     ],
     "err": [
      "compte quatre liaisons sans voir la double liaison",
      "confond double et triple liaison",
      "ne relie pas géométrie plane et hybridation"
     ]
    },
    {
     "id": "S7",
     "q": "L'éthanol bout à 78 °C, le méthoxyméthane, de même masse molaire, à −24 °C. La raison principale est que",
     "ok": "les molécules d'éthanol sont liées entre elles par des liaisons hydrogène",
     "bad": [
      "les liaisons covalentes de l'éthanol sont plus solides",
      "la molécule d'éthanol est plus lourde",
      "l'éthanol est un composé ionique"
     ],
     "idee_fausse": true,
     "err": [
      "croit que bouillir, c'est casser des liaisons covalentes",
      "ne voit pas que les masses molaires sont égales",
      "confond molécule polaire et composé ionique"
     ]
    },
    {
     "id": "S8",
     "q": "Laquelle de ces molécules est polaire ?",
     "ok": "CHCl3",
     "bad": [
      "CCl4",
      "BF3",
      "CH4"
     ],
     "err": [
      "croit que des liaisons polarisées suffisent, sans regarder la symétrie tétraédrique",
      "même erreur avec la symétrie plane triangulaire",
      "croit que la présence d'hydrogène rend une molécule polaire"
     ]
    },
    {
     "id": "S9",
     "q": "Une solution d'acide éthanoïque (pKa = 4,8) a une concentration de 0,10 mol/L. Son pH vaut environ",
     "ok": "2,9",
     "bad": [
      "1,0",
      "4,8",
      "5,8"
     ],
     "err": [
      "traite l'acide faible comme un acide fort",
      "prend pH = pKa sans condition",
      "additionne pKa et 1 sans diviser par 2"
     ]
    },
    {
     "id": "S10",
     "q": "Une solution contient autant d'acide éthanoïque que d'ions éthanoate (pKa = 4,8). On la dilue 10 fois. Son pH",
     "ok": "reste voisin de 4,8",
     "bad": [
      "passe à 5,8",
      "passe à 3,8",
      "passe à 7"
     ],
     "err": [
      "applique la règle de dilution d'un acide fort",
      "même règle, dans le mauvais sens",
      "croit que diluer rend toujours une solution neutre"
     ]
    },
    {
     "id": "S11",
     "q": "On donne E°(Cu²⁺/Cu) = +0,34 V et E°(Zn²⁺/Zn) = −0,76 V. Dans les conditions standard, la tension à vide de la pile zinc-cuivre vaut",
     "ok": "1,10 V",
     "bad": [
      "0,42 V",
      "−1,10 V",
      "−0,42 V"
     ],
     "err": [
      "soustrait les valeurs sans tenir compte du signe de −0,76",
      "inverse les deux électrodes",
      "additionne les deux potentiels"
     ]
    },
    {
     "id": "S12",
     "q": "Pour une réaction en solution, le quotient de réaction Q est plus petit que la constante d'équilibre K. Le système évolue",
     "ok": "dans le sens direct, jusqu'à ce que Q soit égal à K",
     "bad": [
      "dans le sens inverse, jusqu'à ce que Q soit égal à K",
      "dans le sens direct, jusqu'à épuisement d'un réactif",
      "dans le sens direct, jusqu'à ce que réactifs et produits aient la même concentration"
     ],
     "idee_fausse": true,
     "err": [
      "inverse le critère d'évolution",
      "croit que toute réaction est totale",
      "croit qu'à l'équilibre les concentrations sont égales"
     ]
    },
    {
     "id": "S13",
     "q": "Dans l'ion sulfate SO4²⁻, le nombre d'oxydation du soufre vaut",
     "ok": "+VI",
     "bad": [
      "+VIII",
      "−II",
      "+X"
     ],
     "err": [
      "oublie la charge de l'ion",
      "donne la charge de l'ion",
      "ajoute la charge au lieu de la retirer"
     ]
    },
    {
     "id": "S14",
     "q": "Une réaction suit une loi de vitesse d'ordre 1 par rapport à son seul réactif. Si on double la concentration initiale, le temps de demi-réaction",
     "ok": "ne change pas",
     "bad": [
      "double",
      "est divisé par 2",
      "est multiplié par 4"
     ],
     "err": [
      "applique le résultat de l'ordre 0",
      "applique le résultat de l'ordre 2",
      "invente une dépendance au carré"
     ]
    },
    {
     "id": "S15",
     "q": "Une réaction a pour loi de vitesse v = k [A]² [B]. On double la concentration de A sans changer celle de B. La vitesse est",
     "ok": "multipliée par 4",
     "bad": [
      "multipliée par 2",
      "multipliée par 8",
      "inchangée"
     ],
     "err": [
      "ignore l'ordre 2 par rapport à A",
      "double aussi la concentration de B",
      "croit que seule la constante k compte"
     ]
    },
    {
     "id": "S16",
     "q": "Rompre une liaison chimique dans une molécule isolée",
     "ok": "demande toujours de l'énergie",
     "bad": [
      "libère toujours de l'énergie",
      "libère de l'énergie si la liaison est forte, en demande si elle est faible",
      "ne met aucune énergie en jeu"
     ],
     "idee_fausse": true,
     "err": [
      "croit qu'une liaison « contient » de l'énergie qui se libère quand elle casse",
      "même idée, limitée aux liaisons fortes",
      "croit que seule la formation de liaisons compte"
     ]
    },
    {
     "id": "S17",
     "q": "CH4 + 2 O2 → CO2 + 2 H2O(l). Enthalpies standard de formation en kJ/mol : CH4 : −75 ; CO2 : −394 ; H2O(l) : −286 ; O2 : 0. L'enthalpie standard de réaction vaut",
     "ok": "−891 kJ/mol",
     "bad": [
      "−605 kJ/mol",
      "−1 041 kJ/mol",
      "+891 kJ/mol"
     ],
     "err": [
      "oublie le coefficient 2 de l'eau",
      "erreur de signe sur l'enthalpie de formation du méthane",
      "calcule réactifs moins produits"
     ]
    },
    {
     "id": "S18",
     "q": "Une réaction endothermique (enthalpie de réaction positive)",
     "ok": "peut être spontanée si l'entropie augmente assez",
     "bad": [
      "n'est jamais spontanée",
      "est toujours spontanée",
      "cède de la chaleur à l'extérieur"
     ],
     "err": [
      "confond enthalpie et enthalpie libre : croit que seul le signe de la chaleur décide",
      "même confusion, dans l'autre sens",
      "confond endothermique et exothermique"
     ]
    },
    {
     "id": "S19",
     "q": "Laquelle de ces molécules possède un atome de carbone asymétrique ?",
     "ok": "le butan-2-ol CH3-CH(OH)-CH2-CH3",
     "bad": [
      "le propan-2-ol CH3-CH(OH)-CH3",
      "l'éthanol CH3-CH2-OH",
      "le 2-méthylpropan-2-ol (CH3)3C-OH"
     ],
     "err": [
      "ne voit pas que deux des quatre groupes sont identiques",
      "confond carbone porteur de la fonction et carbone asymétrique",
      "croit qu'un carbone très substitué est forcément asymétrique"
     ]
    },
    {
     "id": "S20",
     "q": "Dans le chlorométhane CH3-Cl, l'atome de carbone est un site",
     "ok": "électrophile : il porte une charge partielle positive",
     "bad": [
      "nucléophile : il porte une charge partielle positive",
      "nucléophile : il porte une charge partielle négative",
      "ni électrophile ni nucléophile : la liaison n'est pas polarisée"
     ],
     "err": [
      "confond les mots électrophile et nucléophile",
      "inverse le sens de polarisation de la liaison",
      "croit qu'une liaison covalente n'est jamais polarisée"
     ]
    }
   ],
   "redaction": "On dissout m = 1,22 g d'acide benzoïque C6H5COOH dans de l'eau pour obtenir V = 500 mL de solution. Données : M(C6H5COOH) = 122 g/mol ; l'acide benzoïque est un acide faible.\n1. Calcule la concentration en quantité de matière C de l'acide apporté.\n2. Le pH mesuré vaut 2,96. Écris l'équation de la réaction de l'acide avec l'eau, calcule la concentration en ions H3O+, puis la proportion d'acide qui a réagi. Ce résultat est-il cohérent avec le mot « faible » ?\n3. On titre 20,0 mL de cette solution par une solution de soude de concentration 0,0500 mol/L. Écris l'équation de la réaction de titrage et calcule le volume de soude versé à l'équivalence.\nPour chaque question : formule littérale d'abord, puis calcul, résultat avec son unité et le bon nombre de chiffres significatifs.",
   "corrige": "1. n = m/M = 1,22/122 = 0,0100 mol. C = n/V = 0,0100/0,500 = 0,0200 mol/L. 2. C6H5COOH + H2O = C6H5COO− + H3O+. [H3O+] = 10^(−pH) = 10^(−2,96), soit environ 1,1 × 10^(−3) mol/L. Proportion d'acide qui a réagi : [H3O+]/C = 1,1 × 10^(−3)/0,0200, soit environ 0,055, c'est-à-dire 5,5 %. Moins de 6 % de l'acide a réagi : la réaction avec l'eau est très limitée, ce qui correspond bien à un acide faible. Un acide fort de même concentration donnerait un pH de 1,7. 3. C6H5COOH + HO− → C6H5COO− + H2O. À l'équivalence, la quantité de soude versée est égale à la quantité d'acide titrée : C × 20,0 = 0,0500 × V(équivalence), donc V(équivalence) = 0,0200 × 20,0/0,0500 = 8,00 mL."
  }
 },
 "domaines": [
  {
   "nom": "Lycée : quantités de matière et équations",
   "ids": {
    "S": [
     "L1",
     "L2",
     "L3",
     "L4"
    ]
   }
  },
  {
   "nom": "Lycée : atome et classification",
   "ids": {
    "S": [
     "L5",
     "L6",
     "L7"
    ]
   }
  },
  {
   "nom": "Lycée : molécules et états de la matière",
   "ids": {
    "S": [
     "L8",
     "L9",
     "L10"
    ]
   }
  },
  {
   "nom": "Lycée : acides et bases",
   "ids": {
    "S": [
     "L11",
     "L12",
     "L13",
     "L14"
    ]
   }
  },
  {
   "nom": "Lycée : oxydoréduction",
   "ids": {
    "S": [
     "L15",
     "L16"
    ]
   }
  },
  {
   "nom": "Lycée : cinétique",
   "ids": {
    "S": [
     "L17",
     "L18"
    ]
   }
  },
  {
   "nom": "Lycée : chimie organique",
   "ids": {
    "S": [
     "L19",
     "L20"
    ]
   }
  },
  {
   "nom": "Première année : atomistique et classification",
   "ids": {
    "S": [
     "S1",
     "S2",
     "S3",
     "S4"
    ]
   }
  },
  {
   "nom": "Première année : liaison chimique",
   "ids": {
    "S": [
     "S5",
     "S6",
     "S7",
     "S8"
    ]
   }
  },
  {
   "nom": "Première année : équilibres en solution",
   "ids": {
    "S": [
     "S9",
     "S10",
     "S11",
     "S12",
     "S13"
    ]
   }
  },
  {
   "nom": "Première année : cinétique",
   "ids": {
    "S": [
     "S14",
     "S15"
    ]
   }
  },
  {
   "nom": "Première année : thermochimie",
   "ids": {
    "S": [
     "S16",
     "S17",
     "S18"
    ]
   }
  },
  {
   "nom": "Première année : chimie organique",
   "ids": {
    "S": [
     "S19",
     "S20"
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
