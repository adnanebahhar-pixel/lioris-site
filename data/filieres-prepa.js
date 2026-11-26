// Classes de prepa prises par Lioris, matiere par matiere. Decision d'ad du 2026-11-26, d'apres son tableau « Classement prépas par niveau de
// prof » vu avec les professeurs : on ne prend que les lignes marquees « Oui » ; tout le reste est hors champ.
// classes : [texte court garde avec l'inscription, libelle affiche, annee, code de filiere]. oui : les codes de filiere pris, par matiere.
// Ce fichier est la seule source : l'inscription, le test et l'administration le lisent. Les pages de vente le recopient a la construction.
window.LIO_PREPA = {
 "classes": [
  [
   "MPSI",
   "MPSI",
   1,
   "MPSI"
  ],
  [
   "MP2I",
   "MP2I",
   1,
   "MP2I"
  ],
  [
   "PCSI",
   "PCSI",
   1,
   "PCSI"
  ],
  [
   "PTSI",
   "PTSI",
   1,
   "PTSI"
  ],
  [
   "TSI 1",
   "TSI, première année",
   1,
   "TSI1"
  ],
  [
   "TPC 1",
   "TPC, première année",
   1,
   "TPC1"
  ],
  [
   "BCPST 1",
   "BCPST, première année",
   1,
   "BCPST"
  ],
  [
   "TB 1",
   "TB, première année",
   1,
   "TB"
  ],
  [
   "ECG approfondies 1",
   "ECG, maths approfondies, première année",
   1,
   "ECG approfondies"
  ],
  [
   "ECG appliquées 1",
   "ECG, maths appliquées, première année",
   1,
   "ECG appliquées"
  ],
  [
   "B/L 1",
   "B/L, première année",
   1,
   "B/L"
  ],
  [
   "ECT 1",
   "ECT, première année",
   1,
   "ECT"
  ],
  [
   "ATS génie civil",
   "ATS génie civil",
   1,
   "ATS génie civil"
  ],
  [
   "ATS ingénierie indus.",
   "ATS ingénierie industrielle",
   1,
   "ATS ingénierie industrielle"
  ],
  [
   "ATS métiers chimie",
   "ATS métiers de la chimie",
   1,
   "ATS métiers de la chimie"
  ],
  [
   "MP",
   "MP",
   2,
   "MP"
  ],
  [
   "MPI",
   "MPI",
   2,
   "MPI"
  ],
  [
   "PC",
   "PC",
   2,
   "PC"
  ],
  [
   "PSI",
   "PSI",
   2,
   "PSI"
  ],
  [
   "PT",
   "PT",
   2,
   "PT"
  ],
  [
   "TSI 2",
   "TSI, deuxième année",
   2,
   "TSI2"
  ],
  [
   "TPC 2",
   "TPC, deuxième année",
   2,
   "TPC2"
  ],
  [
   "BCPST 2",
   "BCPST, deuxième année",
   2,
   "BCPST"
  ],
  [
   "TB 2",
   "TB, deuxième année",
   2,
   "TB"
  ],
  [
   "ECG approfondies 2",
   "ECG, maths approfondies, deuxième année",
   2,
   "ECG approfondies"
  ],
  [
   "ECG appliquées 2",
   "ECG, maths appliquées, deuxième année",
   2,
   "ECG appliquées"
  ],
  [
   "B/L 2",
   "B/L, deuxième année",
   2,
   "B/L"
  ],
  [
   "ECT 2",
   "ECT, deuxième année",
   2,
   "ECT"
  ]
 ],
 "oui": {
  "maths": [
   "PCSI",
   "PTSI",
   "TSI1",
   "TSI2",
   "TPC1",
   "TPC2",
   "ATS génie civil",
   "ATS ingénierie industrielle",
   "ATS métiers de la chimie",
   "BCPST",
   "TB",
   "ECG appliquées",
   "B/L",
   "ECT"
  ],
  "physique": [
   "TSI1",
   "TPC1",
   "BCPST",
   "TB",
   "ATS génie civil",
   "ATS ingénierie industrielle",
   "ATS métiers de la chimie"
  ],
  "chimie": [
   "PC",
   "TPC2",
   "ATS métiers de la chimie",
   "PCSI",
   "TPC1",
   "BCPST",
   "TB",
   "MP",
   "PSI",
   "PT",
   "TSI2",
   "MPSI",
   "MP2I",
   "MPI",
   "PTSI",
   "TSI1"
  ]
 },
 "noms": {
  "maths": "maths",
  "physique": "physique",
  "chimie": "chimie"
 }
};
// Retrouve la classe de prepa dans le texte garde avec l'inscription (« PCSI · en cours d'année », « Terminale · vise TSI 1 »).
window.LIO_PREPA.lire = function (texte) {
  var t = String(texte || ''), L = window.LIO_PREPA.classes, m = null;
  for (var i = 0; i < L.length; i++) if ((t.indexOf(L[i][0] + ' ·') === 0 || t.indexOf('vise ' + L[i][0]) >= 0 && t.slice(t.indexOf('vise ') + 5) === L[i][0] || t === L[i][0]) && (!m || L[i][0].length > m[0].length)) m = L[i];
  return m ? { court: m[0], nom: m[1], annee: m[2], filiere: m[3], terminale: /^Terminale/.test(t), cours: /en cours d'année$/.test(t) } : null;
};
window.LIO_PREPA.prise = function (matiere, filiere) { var o = window.LIO_PREPA.oui[matiere]; return !!o && o.indexOf(filiere) >= 0; };
