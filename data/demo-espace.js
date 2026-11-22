// Donnees fictives pour montrer l'espace parent. Aucun eleve reel.
window.DEMO = {
 maths: {
  eleve: "Élève démo", classe: "Terminale, spécialité maths", pack: "Maths première et terminale", professeur: "Professeur démo",
  debut: "2026-12-01", prix: "960 € TTC", payeLe: "2026-11-28", seancesTotal: 24,
  objectif: "Sécuriser les études de fonctions et la rédaction avant les épreuves de spécialité.",
  plan: [
   {nom:"Calcul et équations", etat:"acquis"},
   {nom:"Dérivation : règles de calcul", etat:"acquis"},
   {nom:"Étude de fonctions avec exponentielle", etat:"en cours"},
   {nom:"Rédaction et justification", etat:"à renforcer"},
   {nom:"Suites : récurrence et limites", etat:"pas commencé"},
   {nom:"Probabilités", etat:"pas commencé"},
   {nom:"Exercices de type épreuve en temps limité", etat:"pas commencé"}],
  diagnostic: "Points solides : calcul, équations. Points fragiles : dérivée d'un produit, justification du signe. Chapitre à reprendre : suites.",
  seances: [
   {date:"2026-12-10", semaine:2, travaille:"Dérivée d'un produit et d'un quotient.", marche:"Les règles de calcul sont appliquées sans aide.", bloque:"Oublie encore de justifier le signe de la dérivée.", travail:"Trois exercices, pour le 12 décembre."},
   {date:"2026-12-08", semaine:2, travaille:"Reprise des équations où l'on divise par x.", marche:"Pense maintenant à factoriser.", bloque:"Rien de bloquant.", travail:"Deux exercices, pour le 10 décembre."},
   {date:"2026-12-03", semaine:1, travaille:"Calcul avec les puissances et les racines.", marche:"À l'aise sur les puissances.", bloque:"Simplification des racines encore lente.", travail:"Une fiche de dix calculs, pour le 8 décembre."}],
  rapports: [
   {semaine:1, date:"2026-12-05", acquis:"Calcul avec les puissances.", encours:"Simplification des racines.", renforcer:"Rien pour l'instant.", travail:"Rendu.", plan:"À l'heure : étape 1 sur 7.", suite:"Équations, puis début de la dérivation."}],
  devoirs: [
   {quoi:"Trois exercices sur la dérivée d'un produit", pour:"2026-12-12", etat:"à faire"},
   {quoi:"Deux exercices d'équations", pour:"2026-12-10", etat:"rendu"},
   {quoi:"Fiche de dix calculs", pour:"2026-12-08", etat:"rendu"}],
  prochaines: [{date:"2026-12-15", heure:"18 h 00"},{date:"2026-12-17", heure:"18 h 00"}],
  coaching: null
 },
 coaching: {
  eleve: "Élève démo", classe: "Quatrième", pack: "Coaching organisation", professeur: "Coach démo",
  debut: "2026-12-01", prix: "600 € TTC", payeLe: "2026-11-28", seancesTotal: 12,
  objectif: "Que les devoirs commencent sans rappel trois soirs sur quatre.",
  plan: [
   {nom:"Savoir ce qu'il y a à faire chaque soir", etat:"acquis"},
   {nom:"Commencer à heure fixe", etat:"en cours"},
   {nom:"Découper un devoir long", etat:"pas commencé"},
   {nom:"Préparer le sac la veille", etat:"pas commencé"}],
  diagnostic: "Bilan d'organisation : l'élève et le parent s'accordent sur la mise au travail, difficile ; ils divergent sur le matériel.",
  seances: [
   {date:"2026-12-09", semaine:2, travaille:"Mise en place d'une heure fixe de début.", marche:"A choisi lui-même 17 h 30.", bloque:"Le mercredi, l'horaire ne tient pas.", travail:"Tenir l'heure fixe quatre soirs et noter ce qui gêne."},
   {date:"2026-12-02", semaine:1, travaille:"Relevé de ce qu'il y a à faire, chaque soir, sur une seule page.", marche:"La page unique est utilisée.", bloque:"Rien de bloquant.", travail:"Remplir la page chaque soir pendant une semaine."}],
  rapports: [
   {semaine:1, date:"2026-12-05", acquis:"La page unique des devoirs.", encours:"Rien d'autre cette semaine.", renforcer:"Rien pour l'instant.", travail:"Fait cinq soirs sur cinq.", plan:"À l'heure : étape 1 sur 4.", suite:"Heure fixe de début."}],
  devoirs: [{quoi:"Tenir l'heure fixe quatre soirs", pour:"2026-12-16", etat:"à faire"}],
  prochaines: [{date:"2026-12-16", heure:"17 h 30"}],
  coaching: {
   bilan: "Écrit du bilan d'organisation remis le 30 novembre : ce que dit l'élève, ce que dit le parent, les écarts de regard, trois pistes.",
   outils: ["Page unique des devoirs", "Planning de la semaine", "Routine du soir en cinq étapes"],
   pointParents: {date:"2026-12-22", note:"Premier point mensuel à venir. Ordre du jour : ce qui tient, ce qui ne tient pas, ce qu'on essaie ensuite."}
  }
 }
};
