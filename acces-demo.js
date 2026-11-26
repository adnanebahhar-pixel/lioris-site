// Pages d'exemple des espaces personnels (2026-11-26, demande d'ad : voir en ligne a quoi ressemblent la page du parent et celle du
// professeur). Donnees fictives, les memes que celles du banc d'essai. Ouvertes par acces.html#demo=parent ou #demo=professeur :
// rien n'est lu dans la base, rien n'est enregistre.
window.LIO_DEMO = function () {
const F1 = 'f0000000-0000-4000-8000-000000000001', E1 = 'e0000000-0000-4000-8000-000000000001', E2 = 'e0000000-0000-4000-8000-000000000002', E3 = 'e0000000-0000-4000-8000-000000000003';
const P1 = 'a0000000-0000-4000-8000-000000000001', G1 = 'b0000000-0000-4000-8000-000000000001';
const S1 = 'c0000000-0000-4000-8000-000000000001', S2 = 'c0000000-0000-4000-8000-000000000002', S3 = 'c0000000-0000-4000-8000-000000000003';
const R1 = 'd0000000-0000-4000-8000-000000000001', JT = '11111111-2222-4333-8444-555555555555', JC = '22222222-3333-4444-8555-666666666666';
const now = Date.now(), J = 864e5, iso = (d) => new Date(now + d * J).toISOString();
const REP = {}; ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'].forEach((id) => { REP[id] = { k: 'ok', s: 30 }; });
['A3', 'T2', 'T5', 'T7', 'T11'].forEach((id, n) => { REP[id] = { k: 'bad' + (n % 3), s: 40 }; }); ['A6', 'T9'].forEach((id) => { REP[id] = { k: 'nsp', s: 10 }; });
const PAGE_PROF = { type: 'professeur', prenom: 'Hugo', eleves: [{ id: E1, prenom: 'Léa', classe: 'Terminale', parent: 'Nadia', tests: [],
  rendez_vous: [{ id: R1, quand: iso(-1), etat: 'prévu', ecrit: null }],
  programmes: [{ id: G1, cle: 'maths-premiere-terminale-24h', objectif: 'Tenir les dérivées', seances: [{ id: S3, numero: 3, quand: iso(2), duree_min: 120, etat: 'prévue', present: null, visio: null, compte_rendu: null }] }] }] };
const REP_COURT = {}; ['A3', 'T2', 'T5', 'T7', 'T11', 'A6', 'T9'].forEach((id) => { REP_COURT[id] = { k: 'ok', s: 20 }; }); REP_COURT.T7 = { k: 'bad0', s: 30 }; REP_COURT.A1 = { k: 'bad1', s: 30 };
const PAGE_PARENT = { type: 'parent', prenom: 'Nadia', eleves: [{ id: E1, prenom: 'Léa', classe: 'Terminale', tests: [{ cle: 'maths-premiere-terminale', niveau: 'T', reponses: REP_COURT, redaction: false, duree_s: 600, passe_le: iso(-2), type: 'court-6' }, { cle: 'maths-premiere-terminale', niveau: 'T', reponses: REP, redaction: false, duree_s: 2400, passe_le: iso(-45), type: 'entree' }], rendez_vous: [{ quand: iso(-17), etat: 'fait', ecrit: { texte: 'Ce qui tient : les règles de dérivation.' }, professeur: 'Hugo' }], programmes: [] }],
  commandes: [{ packs: ['college-seconde'], mode: '1x', total_centimes: 63000, statut: 'lien créé', paye_le: null, cree_le: iso(-3), url: 'https://lioris.fr/paiement-recu.html' },
              { packs: ['maths-premiere-terminale-24h'], mode: '1x', total_centimes: 96000, statut: 'lien créé', paye_le: null, cree_le: iso(-0.2), url: 'https://lioris.fr/paiement-recu.html' }] };

  // Planning d'exemple plus fourni pour la page du professeur : quatre eleves, une semaine remplie, la suivante entamee.
  var L0 = new Date(); L0.setHours(0, 0, 0, 0); L0.setDate(L0.getDate() - ((L0.getDay() + 6) % 7));
  var le = function (j, hh, mm) { var d = new Date(L0.getTime()); d.setDate(d.getDate() + j); d.setHours(hh, mm, 0, 0); return d.toISOString(); };
  var nS = 0, seance = function (num, quand, min, rendu) { nS++; var passe = new Date(quand).getTime() < Date.now();
    return { id: 'c0000000-0000-4000-8000-0000000002' + (nS < 10 ? '0' : '') + nS, numero: num, quand: quand, duree_min: min, etat: passe && rendu ? 'faite' : 'prévue', present: passe && rendu ? true : null, visio: 'https://lioris.fr/', compte_rendu: passe && rendu ? { travaille: 'Dérivées de produits.', marche: 'La règle du produit.', bloque: '', travail: 'Trois dérivées à refaire.' } : null }; };
  var eleve = function (n, prenom, classe, parent, cle, S, R) { return { id: 'e0000000-0000-4000-8000-00000000010' + n, prenom: prenom, classe: classe, parent: parent, tests: [], rendez_vous: R || [], programmes: [{ id: 'b0000000-0000-4000-8000-00000000010' + n, cle: cle, objectif: '', seances: S }] }; };
  PAGE_PROF.eleves = PAGE_PROF.eleves.concat([
    eleve(1, 'Yanis', 'Première', 'Karim', 'maths-premiere-terminale-24h', [seance(5, le(0, 18, 0), 60, true), seance(6, le(2, 18, 0), 60, true), seance(7, le(7, 18, 0), 60, true), seance(8, le(9, 18, 0), 60, true)]),
    eleve(2, 'Inès', 'Seconde', 'Sofia', 'college-seconde', [seance(2, le(1, 17, 0), 90, false), seance(3, le(8, 17, 0), 90, true)]),
    eleve(3, 'Tom', 'PCSI', 'Claire', 'maths-prepa-24h', [seance(9, le(3, 19, 30), 60, true), seance(10, le(5, 10, 0), 60, true), seance(11, le(10, 19, 30), 60, true)],
      [{ id: 'd0000000-0000-4000-8000-000000000201', quand: le(4, 12, 30), etat: 'prévu', ecrit: null }])]);
  return { professeur: PAGE_PROF, parent: PAGE_PARENT };
};
