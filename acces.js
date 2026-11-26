// Page ouverte par un lien personnel (2026-11-24, arbitrage #16) : professeur, parent ou eleve.
// Le lien est dans la partie de l'adresse apres le signe diese : elle n'est jamais envoyee a un serveur ni a un autre site.
// Une seule lecture : la fonction page_lien de la base, qui ne rend que ce que le porteur du lien a le droit de voir.
(function(){
'use strict';
if(window.top!==window.self){document.documentElement.innerHTML='';throw new Error('cadre');}
var CFG=window.LIORIS_BASE||{},z=document.getElementById('zone'),J=(/l=([0-9a-f-]{36})/i.exec(location.hash)||[])[1],P=null,onglet=0,ouvert=null,ouvertR=null;
function h(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function fmt(s){return h(s).replace(/\^\(([^)]+)\)/g,'<sup>$1</sup>').replace(/\^(−?[\w]+)/g,'<sup>$1</sup>');}
function txt(s){return h(s).replace(/\n/g,'<br>');}
function jour(iso,court){if(!iso)return '';var d=new Date(iso);if(isNaN(d))return h(iso);return d.toLocaleDateString('fr-FR',court?{day:'numeric',month:'long'}:{weekday:'long',day:'numeric',month:'long'})+(!court&&String(iso).length>10?' à '+d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}):'');}
function eur(c){return (c/100).toLocaleString('fr-FR',{maximumFractionDigits:2})+' €';}
// Un lien de paiement marche 24 heures, tant qu'il n'a ni servi ni expire.
function vivant(c){return c.statut==='lien créé'&&/^https:\/\//.test(c.url||'')&&Date.now()-new Date(c.cree_le).getTime()<864e5;}
function local(d){var p=function(n){return (n<10?'0':'')+n;};return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())+'T'+p(d.getHours())+':'+p(d.getMinutes());}
function tag(t,k){return '<span class="tag '+(k||'')+'">'+h(t)+'</span>';}
function val(i){var e=document.getElementById(i);return e?e.value.trim():'';}
function titre(k){var N={'college-seconde':'Collège et seconde','premiere-terminale-18h':'Première et terminale','prepa-superieur-18h':'BTS et licence','prepa-physique-chimie-18h':'Prépa, physique ou chimie','maths-premiere-terminale-24h':'Maths, première et terminale','maths-prepa-24h':'Maths, prépa'};return (Object.prototype.hasOwnProperty.call(N,k)&&N[k])||(window.DIAGS&&Object.prototype.hasOwnProperty.call(window.DIAGS,k)&&window.DIAGS[k].titre)||k;}
// Page d'exemple : #demo=parent ou #demo=professeur. Donnees fictives (acces-demo.js), aucun appel a la base.
var DEMO=(/[#&]demo=(parent|professeur)\b/.exec(location.hash)||[])[1]||'';
function rpc(nom,corps){if(DEMO)return Promise.resolve(null);return fetch(CFG.url+'/rest/v1/rpc/'+nom,{method:'POST',headers:{'Content-Type':'application/json',apikey:CFG.cle},body:JSON.stringify(corps)}).then(function(r){return r.text().then(function(x){if(!r.ok)throw new Error(x);return x?JSON.parse(x):null;});});}
// Groupe d'un domaine : meme regle de seuils que le test (provisoire, ecrite dans chaque test). n = questions tentees, err = non reussies.
function groupe(D0,n,err){if(n===0)return 'pasvu';if(n<3)return 'peu';if(D0.seuils==='pourcent'){var r=(n-err)/n;return r>=0.8?'sat':r>=0.5?'fra':'bes';}if(D0.seuils==='prepa'&&n>=5)return err<=1?'sat':err===2?'fra':'bes';return err===0?'sat':err===1?'fra':'bes';}
function lecture(t){var D0=window.DIAGS&&Object.prototype.hasOwnProperty.call(window.DIAGS,t.cle)?window.DIAGS[t.cle]:null,o={ok:0,total:0,erreurs:[],sans:0,nsp:0,titre:D0?D0.titre:t.cle,domaines:[]};if(!D0||!D0.blocs)return o;
 var R=t.reponses||{},dom={};
 (D0.domaines||[]).forEach(function(d,i){var ids=(d.ids&&Object.prototype.hasOwnProperty.call(d.ids,t.niveau)&&d.ids[t.niveau])||[];if(Object.prototype.toString.call(ids)!=='[object Array]')ids=[];if(!ids.length&&d.ids&&!t.niveau)Object.keys(d.ids).forEach(function(k){ids=ids.concat(d.ids[k]);});
  var n=0,err=0,vu=0;ids.forEach(function(id){dom[id]=i;var x=R[id];if(!x)return;vu++;if(x.k==='pasvu')return;n++;if(x.k!=='ok')err++;});
  if(vu)o.domaines.push({i:i,nom:d.nom,g:groupe(D0,n,err)});});
 Object.keys(D0.blocs).forEach(function(b){D0.blocs[b].questions.forEach(function(q){var x=R[q.id];if(!x)return;o.total++;
  if(x.k==='ok')o.ok++;else if(/^bad\d+$/.test(x.k)){var n=+x.k.slice(3);o.erreurs.push({cle:t.cle+':'+q.id,id:q.id,q:q.q,rep:q.bad[n],err:q.err[n]||'',bloc:D0.blocs[b].titre,dom:dom[q.id]});}else{o.sans++;if(x.k==='nsp')o.nsp++;}});});
 // Ordre de priorite : les erreurs des domaines « a besoins » d'abord, puis « fragile », puis le reste ; dans un groupe, l'ordre des domaines du test.
 var G={};o.domaines.forEach(function(d){G[d.i]=d;});var rang=function(e){var d=G[e.dom];return d?(d.g==='bes'?0:d.g==='fra'?1:2):3;};
 o.erreurs.forEach(function(e,k){e.k=k;e.domaine=G[e.dom]?G[e.dom].nom:e.bloc;});
 o.erreurs.sort(function(x,y){return (rang(x)-rang(y))||((x.dom==null?99:x.dom)-(y.dom==null?99:y.dom))||(x.k-y.k);});return o;}
function court(s){var p=String(s).split(':');s=(p.length>1?p.slice(1).join(':'):p[0]).split('(')[0].trim();s=s.charAt(0).toUpperCase()+s.slice(1);if(s.length<=26)return s;var c=s.slice(0,25),i=c.lastIndexOf(' ');return (i>8?c.slice(0,i):c)+'…';}
// La toile : un axe par domaine du test, quatre crans nommes sans chiffre, un trace date (celui du test). Rien n'est simule.
function toile(L,quand,L2,quand2,sem){var A=L.domaines;if(A.length<3)return '';var cx=280,cy=205,R=130,N=A.length,V={bes:1,fra:2,sat:3},pt=function(k,v){var a=-Math.PI/2+2*Math.PI*k/N;return [cx+R*v/4*Math.cos(a),cy+R*v/4*Math.sin(a)];},P=function(v){var s=[];for(var k=0;k<N;k++)s.push(pt(k,v).map(function(x){return x.toFixed(1);}).join(','));return s.join(' ');};
 var s='<svg viewBox="0 0 560 420" role="img" aria-label="La toile : un axe par chapitre du test, du centre (à reprendre) vers l\'extérieur (niveau d\'excellence)." overflow="visible" style="display:block;width:100%;min-width:460px;max-width:560px;height:auto;margin:6px auto 0;overflow:visible" font-family="inherit" font-size="12.5" font-weight="600">';
 [1,2,3].forEach(function(v){s+='<polygon points="'+P(v)+'" fill="none" stroke="#D5DBEC"/>';});s+='<polygon points="'+P(4)+'" fill="none" stroke="#B9C2DC" stroke-dasharray="2 4"/>';
 var vus=[];A.forEach(function(d,k){var e=pt(k,4),l=pt(k,4.7),gris=!V[d.g],anc=Math.abs(l[0]-cx)<24?'middle':(l[0]>cx?'start':'end');
  s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+e[0].toFixed(1)+'" y2="'+e[1].toFixed(1)+'" stroke="#D5DBEC"'+(gris?' stroke-dasharray="3 4"':'')+'/><text x="'+l[0].toFixed(1)+'" y="'+(l[1]+4).toFixed(1)+'" text-anchor="'+anc+'" fill="'+(gris?'#9AA3BA':'#17203A')+'">'+h(court(d.nom))+'</text>';
  if(gris)s+='<text x="'+l[0].toFixed(1)+'" y="'+(l[1]+19).toFixed(1)+'" text-anchor="'+anc+'" fill="#9AA3BA" font-weight="500" font-size="11">'+(d.g==='pasvu'?'pas encore vu en classe':'à voir avec le professeur')+'</text>';else vus.push([k,V[d.g]]);});
 // Avec un test court : le trace du test d'entree passe en pointille gris, celui du test court en trait plein. Rien n'est simule : un axe
 // ne bouge que si ses questions ont ete reposees.
 var poly=function(V2,plein){var o='';if(V2.length>2)o+='<polygon points="'+V2.map(function(x){return pt(x[0],x[1]).map(function(y){return y.toFixed(1);}).join(',');}).join(' ')+'" fill="'+(plein?'rgba(35,67,214,.10)':'none')+'" stroke="'+(plein?'#17203A':'#8A93AD')+'" stroke-width="'+(plein?2.2:1.6)+'"'+(plein?'':' stroke-dasharray="5 5"')+' stroke-linejoin="round"/>';
  V2.forEach(function(x){var c=pt(x[0],x[1]);o+='<circle cx="'+c[0].toFixed(1)+'" cy="'+c[1].toFixed(1)+'" r="'+(plein?4:3)+'" fill="'+(plein?'#17203A':'#8A93AD')+'"/>';});return o;};
 var vus2=[];if(L2){var G2={};L2.domaines.forEach(function(d){G2[d.i]=d;});A.forEach(function(d,k){var d2=G2[d.i];if(d2&&V[d2.g])vus2.push([k,V[d2.g]]);});}
 s+=L2?poly(vus,false)+poly(vus2,true):poly(vus,true);
 return '<h3>La toile</h3><div style="overflow-x:auto">'+s+'</svg></div><p class="petit" style="margin:4px 0 0">'+(L2?'En pointillé gris : le test d\'entrée'+(quand?' du '+jour(quand,1):'')+'. En trait plein : après le test court de la semaine '+h(sem)+(quand2?', passé le '+jour(quand2,1):'')+'. Un axe ne bouge que si ses questions ont été reposées.':'Tracé du test'+(quand?' du '+jour(quand,1):'')+'.')+' Du centre vers l\'extérieur : à reprendre, fragile, solide, puis le niveau d\'excellence en pointillé.</p><p class="petit" style="margin:4px 0 0">Le niveau d\'excellence est une référence fixée par Lioris. Ce n\'est ni une note, ni un niveau promis.</p>';}
// La carte des erreurs, pour le parent : ce qui tient, les erreurs reperees par ordre de priorite, par quoi commencer. Aucune note, aucun score.
function blocCarte(t,etats,C){var L=lecture(t);if(!L.total)return '';C=C||[];
 var R2={},k0;for(k0 in (t.reponses||{}))R2[k0]=t.reponses[k0];var bilans=C.map(function(c){var b=bilanCourt(R2,c);Object.keys(c.reponses||{}).forEach(function(id){R2[id]=c.reponses[id];});b.c=c;return b;});
 var L2=C.length?lecture({cle:t.cle,niveau:t.niveau,reponses:R2}):null,der=C[C.length-1];var tient=L.domaines.filter(function(d){return d.g==='sat';}),deb=L.domaines.filter(function(d){return d.g==='bes';})[0]||L.domaines.filter(function(d){return d.g==='fra';})[0];
 var o='<div class="bloc"><h2>La carte des erreurs</h2><p class="petit" style="margin:0">'+h(L.titre)+' · passé le '+jour(t.passe_le,1)+'. Ce n\'est pas une note : c\'est la liste de ce qu\'il faut travailler.</p>';
 o+='<h3>Ce qui tient</h3><p style="margin:0">'+(tient.length?tient.map(function(d){return h(d.nom);}).join(' · '):'Le professeur vous le dit au rendez-vous, question par question.')+'</p>';
 o+='<h3>Les erreurs repérées, par ordre de priorité</h3>'+(L.erreurs.length?'<ol class="err-l" style="padding-left:22px">'+L.erreurs.map(function(x){var e=etats&&etats[x.cle];var reussie=L2&&R2[x.id]&&R2[x.id].k==='ok';return '<li><small>'+h(x.domaine)+'</small><b>'+fmt(x.err)+'</b>'+(reussie?' '+tag('réussie au test court','v'):e?' '+tag(e==='reglee'?'réglée':'à confirmer',e==='reglee'?'v':'j'):'')+'</li>';}).join('')+'</ol>':'<p style="margin:0">'+(L.nsp?'Pas d\'erreur nommée : des questions sont restées sans réponse. Les chapitres à reprendre sont indiqués ci-dessous.':'Aucune erreur repérée sur ce test.')+'</p>');
 if(deb)o+='<h3>Par quoi commencer</h3><p style="margin:0">'+h(deb.nom)+'.</p>';
 if(bilans.length)o+='<h3>Tests courts</h3><ul class="fil">'+bilans.map(function(b){return '<li><b>Semaine '+h(semaine(b.c))+'</b> · passé le '+jour(b.c.passe_le,1)+'<small>'+b.n+' question'+(b.n>1?'s':'')+' reprise'+(b.n>1?'s':'')+' du test d\'entrée : '+b.reglees+' erreur'+(b.reglees>1?'s':'')+' réglée'+(b.reglees>1?'s':'')+', '+b.restent+' encore à travailler'+(b.nouvelles?', '+b.nouvelles+' à revoir alors qu\'elle'+(b.nouvelles>1?'s étaient réussies':' était réussie'):'')+'. Ce n\'est pas une note.</small></li>';}).join('')+'</ul>';
 return o+toile(L,t.passe_le,L2,der&&der.passe_le,der&&semaine(der))+'</div>';}
// Un test d'entree par matiere (le plus recent) ; les tests courts des semaines 6 et 12 s'y rattachent par la meme cle.
function estCourt(t){return !!t.type&&t.type!=='entree';}
function dernierTests(T){var vu={};return (T||[]).filter(function(t){if(estCourt(t)||vu[t.cle])return false;vu[t.cle]=1;return true;});}
function courtsDe(T,t){return (T||[]).filter(function(c){return estCourt(c)&&c.cle===t.cle&&c.passe_le>t.passe_le;}).sort(function(a,b){return a.passe_le<b.passe_le?-1:1;});}
function semaine(t){return String(t.type||'').split('-')[1]||'';}
// Ce qu'un test court change : pour chaque question reposee, la reponse d'avant et celle d'apres.
function bilanCourt(avant,c){var o={n:0,reglees:0,restent:0,nouvelles:0};Object.keys(c.reponses||{}).forEach(function(id){var a=avant[id],b=c.reponses[id];if(!b)return;o.n++;var okA=!!a&&a.k==='ok',okB=b.k==='ok';if(!okA&&okB)o.reglees++;else if(!okA&&!okB)o.restent++;else if(okA&&!okB)o.nouvelles++;});return o;}
function toutesErreurs(T){var o=[];dernierTests(T).forEach(function(t){o=o.concat(lecture(t).erreurs);});return o;}
function blocTest(t,detail){var L=lecture(t),o='<div class="bloc"><h2>'+h(L.titre)+(estCourt(t)?' · test court, semaine '+h(semaine(t)):'')+'</h2><p style="margin:0"><b>'+L.ok+' bonnes réponses sur '+L.total+'</b>'+(L.sans?' · '+L.sans+' sans réponse':'')+' · passé le '+jour(t.passe_le,1)+'</p>';
 if(L.erreurs.length)o+='<h3>'+L.erreurs.length+' erreur'+(L.erreurs.length>1?'s':'')+' à travailler</h3><ul class="err-l">'+L.erreurs.map(function(x){return '<li>'+(detail?'<small>'+h(x.bloc)+'</small>'+fmt(x.q)+'<small>A répondu : '+fmt(x.rep)+'</small>':'<small>'+h(x.bloc)+'</small>')+'<b>'+fmt(x.err)+'</b></li>';}).join('')+'</ul>';
 return o+'</div>';}
function cr(c,interne){if(!c)return '';var L=[['Travaillé',c.travaille],['Ce qui a marché',c.marche],['Ce qui a bloqué',c.bloque],['Travail à faire',c.travail]];if(interne)L.push(['Note interne',c.interne]);
 return L.filter(function(x){return x[1];}).map(function(x){return '<h3>'+x[0]+'</h3><p style="margin:0">'+txt(x[1])+'</p>';}).join('');}
function etatS(s){return tag(s.etat,{'faite':'v','manquée':'r','reportée':'j','annulée':'r'}[s.etat]||'');}
function prochaine(L){var n=Date.now()-36e5*2;return L.filter(function(s){return s.etat==='prévue'&&new Date(s.quand).getTime()>n;})[0];}
function blocProchaine(s,qui){if(!s)return '<div class="bloc"><h2>Prochaine séance</h2><p class="petit" style="margin:0">Aucune séance prévue pour le moment.</p></div>';
 return '<div class="bloc alerte" style="border-color:var(--cta)"><h2>Prochaine séance</h2><p style="font-size:19px;margin:0 0 6px"><b>'+jour(s.quand)+'</b> · '+s.duree_min+' minutes'+(qui?' · '+h(qui):'')+'</p>'+(/^https:\/\//.test(s.visio||'')?'<p style="margin:10px 0 0"><a class="act plein" href="'+h(s.visio)+'" target="_blank" rel="noopener">Rejoindre la visio</a></p>':'<p class="petit" style="margin:0">Le lien de la visio sera affiché ici.</p>')+'</div>';}
function onglets(L){return L.length>1?'<div class="onglets" role="tablist">'+L.map(function(x,i){return '<button type="button" class="act" role="tab" data-a="onglet" data-id="'+i+'" aria-selected="'+(i===onglet)+'"'+(i===onglet?' style="background:var(--ink);color:#fff"':'')+'>'+h(x)+'</button>';}).join('')+'</div>':'';}

// ---------- parent
function erreursRapport(E,IDX){var K=Object.keys(E||{}).filter(function(k){return Object.prototype.hasOwnProperty.call(IDX,k)&&(E[k]==='reglee'||E[k]==='confirmer');});if(!K.length)return '';
 return '<h3>Erreurs de la carte travaillées</h3><ul class="fil">'+K.map(function(k){return '<li>'+fmt(IDX[k].err)+' '+tag(E[k]==='reglee'?'réglée':'à confirmer',E[k]==='reglee'?'v':'j')+'</li>';}).join('')+'</ul>';}
function vueParent(){var o='<h1>Bonjour '+h(P.prenom)+'</h1><p class="petit" style="margin:0 0 20px">Tout ce qui concerne votre famille chez Lioris, à jour.</p>'+onglets(P.eleves.map(function(e){return e.prenom;})),e=P.eleves[onglet]||P.eleves[0];
 if(!e)return o+'<div class="bloc"><p style="margin:0">Aucun élève sur cette page pour le moment.</p></div>';
 var S=[];e.programmes.forEach(function(g){g.seances.forEach(function(s){s.g=g;S.push(s);});});S.sort(function(a,b){return a.quand<b.quand?-1:1;});
 var IDX={},ETATS={},RP=[];toutesErreurs(e.tests).forEach(function(x){IDX[x.cle]=x;});e.programmes.forEach(function(g){RP=RP.concat(g.rapports||[]);});
 RP.sort(function(a,b){return a.envoye_le<b.envoye_le?-1:1;}).forEach(function(r){var E=(r.contenu||{}).erreurs||{};Object.keys(E).forEach(function(k){if(E[k]==='reglee'||E[k]==='confirmer')ETATS[k]=E[k];});});
 if(e.programmes.length)o+=blocProchaine(prochaine(S),prochaine(S)&&prochaine(S).g.professeur?'avec '+prochaine(S).g.professeur:'');
 e.rendez_vous.filter(function(r){return r.quand;}).forEach(function(r){o+='<div class="bloc"><h2>Rendez-vous de résultats</h2><p style="margin:0"><b>'+jour(r.quand)+'</b>'+(r.professeur?' · avec '+h(r.professeur):'')+' '+tag(r.etat,r.etat==='fait'?'v':'')+'</p>'+(r.ecrit&&r.ecrit.texte?'<h3>Ce qui a été dit</h3><p style="margin:0">'+txt(r.ecrit.texte)+'</p>':'')+'</div>';});
 e.programmes.forEach(function(g){var f=g.seances.filter(function(s){return s.etat==='faite';}).length;
  o+='<div class="bloc"><h2>'+h(titre(g.cle))+'</h2><p style="margin:0 0 4px">'+(g.professeur?'Professeur : <b>'+h(g.professeur)+'</b> · ':'')+f+' séance'+(f>1?'s':'')+' faite'+(f>1?'s':'')+' sur '+g.seances.length+(g.creneau?' · le '+h(g.creneau):'')+'</p>'+(g.objectif?'<p class="petit" style="margin:0">Objectif : '+h(g.objectif)+'</p>':'');
  if(g.rapports.length)o+='<h3>Rapports de la semaine</h3>'+g.rapports.map(function(r){var c=r.contenu||{};return '<details'+(r===g.rapports[0]?' open':'')+' class="rap"><summary>Semaine '+r.semaine+' · publié le '+jour(r.envoye_le,1)+'</summary>'+[['Travaillé',c.travaille],['Acquis',c.acquis],['À renforcer',c.renforcer],['La suite',c.suite]].filter(function(x){return x[1];}).map(function(x){return '<h3>'+x[0]+'</h3><p style="margin:0">'+txt(x[1])+'</p>';}).join('')+erreursRapport(c.erreurs,IDX)+'</details>';}).join('');
  o+='<h3>Séances</h3><div class="tw"><table><thead><tr><th>N°</th><th>Date</th><th>État</th><th>Présence</th></tr></thead><tbody>'+g.seances.map(function(s){return '<tr><td>'+(s.numero||'')+'</td><td>'+jour(s.quand)+'</td><td>'+etatS(s)+'</td><td>'+(s.present===true?'présent':s.present===false?tag('absent','r'):'')+'</td></tr>';}).join('')+'</tbody></table></div></div>';});
 dernierTests(e.tests).forEach(function(t){o+=blocCarte(t,ETATS,courtsDe(e.tests,t));});
 if(!e.tests.length&&!e.programmes.length)o+='<div class="bloc"><h2>Test</h2><p style="margin:0">'+h(e.prenom)+' n\'a pas encore passé son test. Le lien du test est dans l\'email reçu à l\'inscription.</p></div>';
 if(P.commandes.length)o+='<div class="bloc"><h2>Paiements</h2><ul class="fil">'+P.commandes.map(function(c){return '<li><b>'+h((c.packs||[]).map(titre).join(' + '))+'</b> · '+eur(c.total_centimes)+' · '+(c.mode==='3x'?'en trois mensualités':'en une fois')+' '+(c.paye_le&&c.statut==='payé'?tag('payé le '+jour(c.paye_le,1),'v'):c.statut==='paiement refusé'?tag('paiement refusé','r'):c.statut==='en attente'?tag('en attente de la banque','j'):vivant(c)?tag('à payer','j'):tag('lien expiré','j'))+(vivant(c)?' <a href="'+h(c.url)+'" target="_blank" rel="noopener">Payer</a>':c.statut==='lien créé'||c.statut==='lien expiré'||c.statut==='paiement refusé'?' <span class="petit">Écrivez-nous pour recevoir un lien neuf.</span>':'')+'</li>';}).join('')+'</ul></div>';
 return o+'<p class="petit">Une question, un changement de créneau : <a href="mailto:contact@lioris.fr">contact@lioris.fr</a>. Pour vous rétracter ou arrêter : <a href="arreter.html">cette page</a>.</p>';}

// ---------- eleve
function vueEleve(){var S=[];P.programmes.forEach(function(g){g.seances.forEach(function(s){s.g=g;S.push(s);});});S.sort(function(a,b){return a.quand<b.quand?-1:1;});
 var p=prochaine(S),faites=S.filter(function(s){return s.etat==='faite'&&s.compte_rendu&&s.compte_rendu.travail;}),d=faites[faites.length-1];
 var o='<h1>Bonjour '+h(P.prenom)+'</h1><p class="petit" style="margin:0 0 20px">Tes séances et ton travail à faire.</p>'+blocProchaine(p,p&&p.g.professeur?'avec '+p.g.professeur:'');
 o+='<div class="bloc"><h2>Travail à faire</h2>'+(d?'<p style="margin:0">'+txt(d.compte_rendu.travail)+'</p><p class="petit" style="margin:8px 0 0">Donné à la séance du '+jour(d.quand,1)+'.</p>':'<p class="petit" style="margin:0">Rien pour le moment.</p>')+'</div>';
 if(S.length)o+='<div class="bloc"><h2>Toutes tes séances</h2><div class="tw"><table><thead><tr><th>N°</th><th>Date</th><th>État</th></tr></thead><tbody>'+S.map(function(s){return '<tr><td>'+(s.numero||'')+'</td><td>'+jour(s.quand)+'</td><td>'+etatS(s)+'</td></tr>';}).join('')+'</tbody></table></div></div>';
 return o;}

// ---------- professeur
function toutesSeances(){var S=[];P.eleves.forEach(function(e){e.programmes.forEach(function(g){g.seances.forEach(function(s){s.e=e;s.g=g;S.push(s);});});});return S.sort(function(a,b){return a.quand<b.quand?-1:1;});}
function formErreurs(e,c){var L=toutesErreurs(e.tests),E=c.erreurs||{};if(!L.length)return '';
 return '<h3>Erreurs de la carte travaillées à cette séance</h3><p class="petit" style="margin:0 0 8px">Ce que vous cochez ici alimente le rapport de la semaine et la carte que voit le parent.</p><ul class="fil">'+L.map(function(x){var v=E[x.cle]||'';return '<li><label style="display:block">'+fmt(x.err)+'<small>'+h(x.domaine)+'</small><select data-er="'+h(x.cle)+'" style="margin-top:4px"><option value="">pas travaillée</option><option value="confirmer"'+(v==='confirmer'?' selected':'')+'>travaillée, à confirmer</option><option value="reglee"'+(v==='reglee'?' selected':'')+'>réglée</option></select></label></li>';}).join('')+'</ul>';}
function formSeance(s){var c=s.compte_rendu||{},T=function(id,l,v,aide){return '<div class="large"><label for="'+id+'">'+l+'</label><textarea id="'+id+'"'+(aide?' placeholder="'+h(aide)+'"':'')+'>'+h(v||'')+'</textarea></div>';};
 return '<p><button type="button" class="act" data-a="ferme">Retour au planning</button></p><h1>'+h(s.e.prenom)+', séance '+(s.numero||'')+'</h1><p class="petit" style="margin:0 0 16px">'+jour(s.quand)+' · '+s.duree_min+' minutes · '+h(titre(s.g.cle))+(/^https:\/\//.test(s.visio||'')?' · <a href="'+h(s.visio)+'" target="_blank" rel="noopener">Ouvrir la visio</a>':'')+'</p><div class="bloc"><div class="form"><div><label for="x-etat">La séance</label><select id="x-etat">'+[['faite','a eu lieu'],['manquée','élève absent sans prévenir'],['reportée','reportée'],['prévue','pas encore eu lieu']].map(function(x){return '<option value="'+x[0]+'"'+(x[0]===(s.etat==='prévue'?'faite':s.etat)?' selected':'')+'>'+x[1]+'</option>';}).join('')+'</select></div><div><label for="x-pres">Élève présent</label><select id="x-pres"><option value="1"'+(s.present!==false?' selected':'')+'>oui</option><option value="0"'+(s.present===false?' selected':'')+'>non</option></select></div><div class="large"><label for="x-quand">Si la séance est reportée : sa nouvelle date</label><input type="datetime-local" id="x-quand"><span class="petit">La séance garde son numéro et repasse à « prévue » à cette date. Sans date, Lioris vous recontacte pour la fixer.</span></div>'+T('x-trav','Ce qui a été travaillé',c.travaille)+T('x-ok','Ce qui a marché',c.marche)+T('x-bloc','Ce qui a bloqué',c.bloque)+T('x-dev','Travail donné pour la prochaine fois',c.travail,'L\'élève le voit sur sa page.')+T('x-int','Note pour l\'équipe (la famille ne la voit pas)',c.interne)+'</div>'+formErreurs(s.e,c)+'<p style="margin:14px 0 0"><button type="button" class="act plein" data-a="rend" data-id="'+s.id+'">Enregistrer le compte rendu</button></p><p class="msg" id="msg" aria-live="polite"></p></div>';}
function tousRdv(){var L=[];P.eleves.forEach(function(e){e.rendez_vous.forEach(function(r){if(r.quand&&r.id)L.push([e,r]);});});return L;}
function formRdv(x){var e=x[0],r=x[1],passe=new Date(r.quand).getTime()<Date.now();
 return '<p><button type="button" class="act" data-a="ferme">Retour au planning</button></p><h1>Rendez-vous de résultats, '+h(e.prenom)+'</h1><p class="petit" style="margin:0 0 16px">'+jour(r.quand)+' · '+h(e.classe)+' · parent : '+h(e.parent)+'</p><div class="bloc"><div class="form"><div><label for="y-etat">Le rendez-vous</label><select id="y-etat">'+[['fait','a eu lieu'],['manqué','la famille n\'est pas venue'],['prévu','pas encore eu lieu']].map(function(o){return '<option value="'+o[0]+'"'+(o[0]===(r.etat==='prévu'&&passe?'fait':r.etat)?' selected':'')+'>'+o[1]+'</option>';}).join('')+'</select></div><div class="large"><label for="y-texte">Ce qui a été dit au parent</label><textarea id="y-texte" style="min-height:180px" placeholder="Ce qui tient, ce qui est fragile, par quoi commencer. Le parent lit ce texte sur sa page : écrivez-le pour lui.">'+h((r.ecrit&&r.ecrit.texte)||'')+'</textarea></div></div><p class="petit" style="margin:10px 0">Le parent voit ce texte sur sa page dès l\'enregistrement. Aucune note, aucune promesse de résultat.</p><p style="margin:14px 0 0"><button type="button" class="act plein" data-a="rend-rdv" data-id="'+r.id+'">Enregistrer</button></p><p class="msg" id="msg" aria-live="polite"></p></div>'+(e.tests.map(function(t){return blocTest(t,true);}).join('')||'<p class="petit">Test pas encore passé.</p>');}
// ---------- planning du professeur en calendrier (2026-11-26, demande d'ad) : semaine en grille horaire, mois, et liste jour par jour sur telephone.
// Un clic sur un creneau ouvre la seance ou le rendez-vous. Couleurs : seance, rendez-vous de resultats, a rendre, fait, annule.
var calRef=null,calVue='semaine';
function lundi(d){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+6)%7));return x;}
function plusJ(d,n){var x=new Date(d.getTime());x.setDate(x.getDate()+n);return x;}
function memeJ(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();}
function hm(d){return d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'});}
function jourLong(d){return d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long'});}
function evenements(){var L=[];
 toutesSeances().forEach(function(s){var d=new Date(s.quand);if(!s.quand||isNaN(d))return;L.push({d:d,min:s.duree_min||60,type:'s',id:s.id,nom:s.e.prenom,sous:'Séance '+(s.numero||''),etat:s.etat,rendu:!!s.compte_rendu});});
 tousRdv().forEach(function(x){var d=new Date(x[1].quand);if(isNaN(d))return;L.push({d:d,min:30,type:'r',id:x[1].id,nom:x[0].prenom,sous:'Rendez-vous de résultats',etat:x[1].etat,rendu:!!(x[1].ecrit&&x[1].ecrit.texte)});});
 return L.sort(function(a,b){return a.d-b.d;});}
function classeEv(e){if(/^(manqu|annul|report)/.test(e.etat||''))return 'x';if(/^fait/.test(e.etat||'')&&e.rendu)return 'ok';if(/^fait/.test(e.etat||'')||e.d.getTime()+e.min*6e4<Date.now())return 'du';return e.type==='r'?'r':'s';}
function libEv(e){var c=classeEv(e);return c==='ok'?'fait':c==='du'?(e.type==='r'?'écrit à rendre':'compte rendu à rendre'):c==='x'?e.etat:'';}
function boutonEv(e,style){var l=libEv(e);return '<button type="button" class="cal-ev '+classeEv(e)+'" data-a="'+(e.type==='r'?'ouvre-rdv':'ouvre')+'" data-id="'+h(e.id)+'"'+(style?' style="'+style+'"':'')+' aria-label="'+h(jourLong(e.d)+' à '+hm(e.d)+', '+e.nom+', '+e.sous+(l?', '+l:''))+'"><b>'+hm(e.d)+' · '+h(e.nom)+'</b><span>'+h(e.sous)+(l?' · '+h(l):'')+'</span></button>';}
function calSemaine(E){var L0=lundi(calRef),auj=new Date(),h0=8,h1=20,PX=52,i,W=E.filter(function(e){return e.d>=L0&&e.d<plusJ(L0,7);});
 W.forEach(function(e){var a=e.d.getHours(),b=Math.ceil((a*60+e.d.getMinutes()+e.min)/60);if(a<h0)h0=a;if(b>h1)h1=Math.min(24,b);});
 var o='<div class="cal-grille" style="--h:'+((h1-h0)*PX)+'px;--px:'+PX+'px"><div class="cal-heures"><div class="cal-tete"></div><div class="cal-col">';
 for(i=h0;i<h1;i++)o+='<span style="top:'+((i-h0)*PX)+'px">'+i+' h</span>';
 o+='</div></div>';
 for(i=0;i<7;i++){var d=plusJ(L0,i),ev=W.filter(function(e){return memeJ(e.d,d);}),estAuj=memeJ(d,auj),cols=[];
  ev.forEach(function(e){var deb=e.d.getTime(),k=0;while(cols[k]&&cols[k]>deb)k++;cols[k]=deb+e.min*6e4;e.k=k;});var n=cols.length||1;
  o+='<div class="cal-jour'+(estAuj?' auj':'')+'"><div class="cal-tete"><span>'+d.toLocaleDateString('fr-FR',{weekday:'short'})+'</span><b>'+d.getDate()+'</b></div><div class="cal-col">';
  if(estAuj){var m=(auj.getHours()-h0)*60+auj.getMinutes();if(m>=0&&m<=(h1-h0)*60)o+='<i class="cal-now" style="top:'+(m/60*PX)+'px"></i>';}
  ev.forEach(function(e){var top=((e.d.getHours()-h0)*60+e.d.getMinutes())/60*PX,ht=Math.max(40,e.min/60*PX-2);o+=boutonEv(e,'top:'+top+'px;height:'+ht+'px;left:calc('+(e.k/n*100)+'% + 2px);width:calc('+(100/n)+'% - 4px)');});
  o+='</div></div>';}
 return o+'</div>';}
function calListe(E){var L0=lundi(calRef),auj=new Date(),o='<div class="cal-liste">',i;
 for(i=0;i<7;i++){var d=plusJ(L0,i),ev=E.filter(function(e){return memeJ(e.d,d);});
  o+='<div class="cal-lj'+(memeJ(d,auj)?' auj':'')+'"><h3>'+h(jourLong(d))+(memeJ(d,auj)?' · aujourd\'hui':'')+'</h3>'+(ev.length?ev.map(function(e){return boutonEv(e,'');}).join(''):'<p class="petit" style="margin:0">Rien de prévu.</p>')+'</div>';}
 return o+'</div>';}
function calMois(E){var m0=new Date(calRef.getFullYear(),calRef.getMonth(),1),d=lundi(m0),auj=new Date(),w,i,o='<div class="cal-mois"><div class="cal-mt">'+['lun.','mar.','mer.','jeu.','ven.','sam.','dim.'].map(function(x){return '<span>'+x+'</span>';}).join('')+'</div>';
 for(w=0;w<6;w++){if(w>3&&d.getMonth()!==m0.getMonth())break;o+='<div class="cal-ms">';
  for(i=0;i<7;i++){var ev=E.filter(function(e){return memeJ(e.d,d);});
   o+='<button type="button" class="cal-mj'+(d.getMonth()!==m0.getMonth()?' hors':'')+(memeJ(d,auj)?' auj':'')+'" data-a="cal-jour" data-id="'+d.getTime()+'" aria-label="'+h(jourLong(d)+' : '+(ev.length?ev.length+' créneau'+(ev.length>1?'x':''):'rien de prévu')+'. Ouvrir la semaine.')+'"><b>'+d.getDate()+'</b>'+ev.slice(0,3).map(function(e){return '<span class="'+classeEv(e)+'">'+hm(e.d)+' '+h(e.nom)+'</span>';}).join('')+(ev.length>3?'<small>+ '+(ev.length-3)+'</small>':'')+'</button>';d=plusJ(d,1);}
  o+='</div>';}
 return o+'</div>';}
function calendrier(){if(!calRef)calRef=new Date();var E=evenements(),L0=lundi(calRef),D6=plusJ(L0,6),now=Date.now(),
  tt=calVue==='mois'?calRef.toLocaleDateString('fr-FR',{month:'long',year:'numeric'}):'Semaine du '+L0.getDate()+(L0.getMonth()!==D6.getMonth()?' '+L0.toLocaleDateString('fr-FR',{month:'long'}):'')+' au '+D6.toLocaleDateString('fr-FR',{day:'numeric',month:'long'}),
  dans=E.filter(function(e){return e.d>=L0&&e.d<plusJ(L0,7);}).length,proch=E.filter(function(e){return e.d.getTime()>now&&classeEv(e)!=='x';})[0];
 var o='<div class="bloc cal"><div class="cal-barre"><h2>'+h(tt.charAt(0).toUpperCase()+tt.slice(1))+'</h2><div class="cal-nav"><button type="button" class="act" data-a="cal-prec" aria-label="'+(calVue==='mois'?'Mois précédent':'Semaine précédente')+'">‹</button><button type="button" class="act" data-a="cal-auj">Aujourd\'hui</button><button type="button" class="act" data-a="cal-suiv" aria-label="'+(calVue==='mois'?'Mois suivant':'Semaine suivante')+'">›</button><span class="cal-choix" role="group" aria-label="Affichage">'+[['semaine','Semaine'],['mois','Mois']].map(function(x){return '<button type="button" class="act" data-a="cal-vue" data-id="'+x[0]+'" aria-pressed="'+(calVue===x[0])+'">'+x[1]+'</button>';}).join('')+'</span></div></div>';
 if(calVue==='semaine'&&!dans)o+='<p class="cal-vide">Rien cette semaine.'+(proch?' Prochain créneau : '+h(jourLong(proch.d))+' à '+hm(proch.d)+', '+h(proch.nom)+'. <button type="button" class="act" data-a="cal-jour" data-id="'+proch.d.getTime()+'">Y aller</button>':'')+'</p>';
 o+=calVue==='mois'?calMois(E):calSemaine(E)+calListe(E);
 return o+'<p class="cal-leg"><span class="s">Séance</span><span class="r">Rendez-vous de résultats</span><span class="du">À rendre</span><span class="ok">Fait</span><span class="x">Annulé, manqué ou reporté</span></p><p class="petit" style="margin:8px 0 0">Cliquez sur un créneau pour l\'ouvrir. Heures affichées : celles de votre appareil.</p></div>';}
function vueProf(){var S=toutesSeances(),now=Date.now();
 if(ouvert){var s0=S.filter(function(x){return x.id===ouvert;})[0];if(s0)return formSeance(s0);}
 if(ouvertR){var r0=tousRdv().filter(function(x){return x[1].id===ouvertR;})[0];if(r0)return formRdv(r0);}
 var retard=S.filter(function(s){var q=new Date(s.quand).getTime();return (s.etat==='prévue'&&q<now-36e5*2)||(s.etat==='faite'&&!s.compte_rendu);}),av=S.filter(function(s){return s.etat==='prévue'&&new Date(s.quand).getTime()>=now-36e5*2;});
 var o='<h1>Bonjour '+h(P.prenom)+'</h1><p class="petit" style="margin:0 0 16px">Vos élèves, votre planning, vos comptes rendus.</p>'+onglets(['Planning','Mes élèves ('+P.eleves.length+')']);
 if(onglet===0){
  if(retard.length)o+='<div class="bloc alerte"><h2>Comptes rendus à rendre ('+retard.length+')</h2><ul class="liste">'+retard.map(function(s){return '<li><span class="pt"></span><span><b>'+h(s.e.prenom)+'</b>, séance '+(s.numero||'')+'<small>'+jour(s.quand)+'</small></span><button type="button" class="act plein" data-a="ouvre" data-id="'+s.id+'">Rendre</button></li>';}).join('')+'</ul></div>';
  var rd=tousRdv().filter(function(x){var r=x[1];return (r.etat==='prévu'&&new Date(r.quand).getTime()<now)||(r.etat==='fait'&&!(r.ecrit&&r.ecrit.texte));});
  if(rd.length)o+='<div class="bloc alerte"><h2>Rendez-vous de résultats à rendre ('+rd.length+')</h2><ul class="liste">'+rd.map(function(x){var r=x[1],passe=new Date(r.quand).getTime()<now;return '<li><span class="pt'+(passe?'':' g')+'"></span><span><b>'+h(x[0].prenom)+'</b> ('+h(x[0].classe)+')<small>'+jour(r.quand)+(r.etat==='fait'?' · fait, écrit à rendre':passe?' · à rendre':' · le test est dans « Mes élèves »')+'</small></span><button type="button" class="act'+(passe?' plein':'')+'" data-a="ouvre-rdv" data-id="'+r.id+'">'+(passe?'Rendre':'Préparer')+'</button></li>';}).join('')+'</ul></div>';
  o+=calendrier();
 }else{
  if(!P.eleves.length)o+='<div class="bloc"><p style="margin:0">Aucun élève ne vous est encore attribué.</p></div>';
  P.eleves.forEach(function(e){o+='<details class="bloc"'+(P.eleves.length===1?' open':'')+'><summary>'+h(e.prenom)+' · '+h(e.classe)+'</summary><p class="petit" style="margin:6px 0 0">Parent : '+h(e.parent)+'</p>';
   e.programmes.forEach(function(g){o+='<h3>'+h(titre(g.cle))+(g.objectif?' · objectif : '+h(g.objectif):'')+'</h3><div class="tw"><table><thead><tr><th>N°</th><th>Date</th><th>État</th><th></th></tr></thead><tbody>'+g.seances.map(function(s){return '<tr><td>'+(s.numero||'')+'</td><td>'+jour(s.quand)+'</td><td>'+etatS(s)+(s.compte_rendu?' '+tag('compte rendu rendu','v'):'')+'</td><td><button type="button" class="act" data-a="ouvre" data-id="'+s.id+'">'+(s.compte_rendu?'Modifier':'Rendre')+'</button></td></tr>';}).join('')+'</tbody></table></div>';});
   o+=e.tests.map(function(t){return blocTest(t,true);}).join('')||'<p class="petit">Test pas encore passé.</p>';o+='</details>';});
 }
 return o;}

function dessine(){document.getElementById('qui').textContent={professeur:'Page du professeur',parent:'Page du parent',eleve:'Page de l\'élève'}[P.type]||'';z.innerHTML=P.type==='professeur'?vueProf():P.type==='parent'?vueParent():vueEleve();}
// Vue de l'administration (2026-11-26, demande d'ad) : ouverte depuis le poste de pilotage avec « &vue=admin », la page se lit par une fonction
// reservee a l'administrateur connecte, qui ne compte pas la visite. Le parent ou le professeur garde ainsi un compteur d'ouvertures juste.
var ADMIN=/[#&]vue=admin\b/.test(location.hash);
function sesAdmin(){try{var s=JSON.parse(localStorage.getItem('lioris_session')||'null');return s&&s.access_token&&s.expire>Date.now()+5000?s.access_token:null;}catch(e){return null;}}
function charge(){
 if(DEMO){P=P||window.LIO_DEMO()[DEMO];dessine();z.insertAdjacentHTML('afterbegin','<div class="bloc" role="note" style="border-left:4px solid #D23F2A"><p style="margin:0"><b>Page d\'exemple.</b> Les personnes et les données sont fictives. Les boutons n\'enregistrent rien.</p></div>');return Promise.resolve();}
 if(!ADMIN)return rpc('page_lien',{p_jeton:J}).then(function(d){P=d;dessine();});
 var tk=sesAdmin();if(!tk){z.innerHTML='<div class="bloc"><h2>Session d\'administration à rouvrir</h2><p style="margin:0">Ouvrez le poste de pilotage, puis recliquez sur « Voir la page ».</p></div>';return Promise.resolve();}
 return fetch(CFG.url+'/rest/v1/rpc/page_lien_admin',{method:'POST',headers:{'Content-Type':'application/json',apikey:CFG.cle,Authorization:'Bearer '+tk},body:JSON.stringify({p_jeton:J})}).then(function(r){return r.text().then(function(x){if(!r.ok)throw new Error(x);return x?JSON.parse(x):null;});})
  .then(function(d){P=d;dessine();z.insertAdjacentHTML('afterbegin','<div class="bloc" role="note" style="border-left:4px solid #2343D6"><p style="margin:0"><b>Vue de l\'administration.</b> Vous voyez cette page comme son destinataire. Cette visite n\'est pas comptée. Attention : les boutons de cette page agissent pour de vrai.</p></div>');});}
function refuse(){z.innerHTML='<div class="bloc"><h1 style="font-size:24px">Ce lien ne marche pas</h1><p style="margin:8px 0 0">Il a peut-être été remplacé par un lien plus récent. Écrivez-nous à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a> : nous vous en envoyons un neuf.</p></div>';}
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('[data-a]');if(!t)return;var a=t.getAttribute('data-a'),id=t.getAttribute('data-id');
 if(a==='onglet'){onglet=+id;dessine();}
 else if(a==='ouvre'){ouvert=id;dessine();window.scrollTo(0,0);}
 else if(a==='ferme'){ouvert=null;ouvertR=null;dessine();}
 else if(a==='ouvre-rdv'){ouvertR=id;dessine();window.scrollTo(0,0);}
 else if(a==='cal-prec'||a==='cal-suiv'){var sg=a==='cal-prec'?-1:1;calRef=calVue==='mois'?new Date(calRef.getFullYear(),calRef.getMonth()+sg,1):plusJ(calRef,7*sg);dessine();}
 else if(a==='cal-auj'){calRef=new Date();dessine();}
 else if(a==='cal-vue'){calVue=id==='mois'?'mois':'semaine';dessine();}
 else if(a==='cal-jour'){calRef=new Date(+id);calVue='semaine';dessine();}
 else if(a==='rend-rdv'){var ey=val('y-etat'),ty=val('y-texte'),my=document.getElementById('msg');
  if(ey==='fait'&&!ty){my.textContent='Écrivez ce qui a été dit au parent : il le lit sur sa page.';document.getElementById('y-texte').focus();return;}
  t.disabled=true;my.textContent='Enregistrement…';
  rpc('prof_rendez_vous',{p_jeton:J,p_rdv:id,p_etat:ey,p_texte:ty}).then(function(){ouvertR=null;return charge();}).catch(function(){t.disabled=false;my.textContent='Enregistrement refusé. Réessayez, ou écrivez à contact@lioris.fr.';});}
 else if(a==='rend'){var c={travaille:val('x-trav'),marche:val('x-ok'),bloque:val('x-bloc'),travail:val('x-dev'),interne:val('x-int')},et=val('x-etat'),m=document.getElementById('msg'),ER={};Array.prototype.forEach.call(document.querySelectorAll('select[data-er]'),function(x){if(x.value)ER[x.getAttribute('data-er')]=x.value;});if(Object.keys(ER).length)c.erreurs=ER;
  if(et==='faite'&&!c.travaille){m.textContent='Dites en une phrase ce qui a été travaillé.';document.getElementById('x-trav').focus();return;}
  t.disabled=true;m.textContent='Enregistrement…';
  var corps={p_jeton:J,p_seance:id,p_etat:et,p_present:val('x-pres')==='1',p_compte_rendu:et==='faite'||c.travaille||c.interne?c:null},nq=val('x-quand');
  if(et==='reportée'&&nq){if(isNaN(new Date(nq).getTime())||new Date(nq).getTime()<Date.now()-864e5){m.textContent='La nouvelle date doit être à venir.';t.disabled=false;return;}corps.p_quand=new Date(nq).toISOString();}
  rpc('prof_seance',corps).then(function(){ouvert=null;return charge();}).catch(function(){t.disabled=false;m.textContent='Enregistrement refusé. Réessayez, ou écrivez à contact@lioris.fr.';});}
});
if(DEMO&&window.LIO_DEMO)charge().catch(refuse);else if(!J||!CFG.url||!CFG.cle)refuse();else charge().catch(refuse);
})();
