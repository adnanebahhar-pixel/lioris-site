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

  return { professeur: PAGE_PROF, parent: PAGE_PARENT };
};
