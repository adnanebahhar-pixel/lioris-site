// Page ouverte par un lien personnel (2026-11-24, arbitrage #16) : professeur, parent ou eleve.
// Le lien est dans la partie de l'adresse apres le signe diese : elle n'est jamais envoyee a un serveur ni a un autre site.
// Une seule lecture : la fonction page_lien de la base, qui ne rend que ce que le porteur du lien a le droit de voir.
(function(){
'use strict';
if(window.top!==window.self){document.documentElement.innerHTML='';throw new Error('cadre');}
var CFG=window.LIORIS_BASE||{},z=document.getElementById('zone'),J=(/l=([0-9a-f-]{36})/i.exec(location.hash)||[])[1],P=null,onglet=0,ouvert=null;
function h(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function fmt(s){return h(s).replace(/\^\(([^)]+)\)/g,'<sup>$1</sup>').replace(/\^(−?[\w]+)/g,'<sup>$1</sup>');}
function txt(s){return h(s).replace(/\n/g,'<br>');}
function jour(iso,court){if(!iso)return '';var d=new Date(iso);if(isNaN(d))return h(iso);return d.toLocaleDateString('fr-FR',court?{day:'numeric',month:'long'}:{weekday:'long',day:'numeric',month:'long'})+(!court&&String(iso).length>10?' à '+d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}):'');}
function eur(c){return (c/100).toLocaleString('fr-FR',{maximumFractionDigits:2})+' €';}
function tag(t,k){return '<span class="tag '+(k||'')+'">'+h(t)+'</span>';}
function val(i){var e=document.getElementById(i);return e?e.value.trim():'';}
function titre(k){var N={'college-seconde':'Collège et seconde','premiere-terminale-18h':'Première et terminale','prepa-superieur-18h':'Prépa et supérieur','maths-premiere-terminale-24h':'Maths, première et terminale','maths-prepa-24h':'Maths, prépa','organisation-methode-12h':'Organisation et méthode'};return (Object.prototype.hasOwnProperty.call(N,k)&&N[k])||(window.DIAGS&&Object.prototype.hasOwnProperty.call(window.DIAGS,k)&&window.DIAGS[k].titre)||k;}
function rpc(nom,corps){return fetch(CFG.url+'/rest/v1/rpc/'+nom,{method:'POST',headers:{'Content-Type':'application/json',apikey:CFG.cle},body:JSON.stringify(corps)}).then(function(r){return r.text().then(function(x){if(!r.ok)throw new Error(x);return x?JSON.parse(x):null;});});}
function lecture(t){var D0=window.DIAGS&&Object.prototype.hasOwnProperty.call(window.DIAGS,t.cle)?window.DIAGS[t.cle]:null,o={ok:0,total:0,erreurs:[],sans:0,titre:D0?D0.titre:t.cle};if(!D0||!D0.blocs)return o;
 Object.keys(D0.blocs).forEach(function(b){D0.blocs[b].questions.forEach(function(q){var x=(t.reponses||{})[q.id];if(!x)return;o.total++;
  if(x.k==='ok')o.ok++;else if(/^bad\d+$/.test(x.k)){var n=+x.k.slice(3);o.erreurs.push({id:q.id,q:q.q,rep:q.bad[n],err:q.err[n]||'',bloc:D0.blocs[b].titre});}else o.sans++;});});return o;}
function blocTest(t,detail){var L=lecture(t),o='<div class="bloc"><h2>'+h(L.titre)+'</h2><p style="margin:0"><b>'+L.ok+' bonnes réponses sur '+L.total+'</b>'+(L.sans?' · '+L.sans+' sans réponse':'')+' · passé le '+jour(t.passe_le,1)+'</p>';
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
function vueParent(){var o='<h1>Bonjour '+h(P.prenom)+'</h1><p class="petit" style="margin:0 0 20px">Tout ce qui concerne votre famille chez Lioris, à jour.</p>'+onglets(P.eleves.map(function(e){return e.prenom;})),e=P.eleves[onglet]||P.eleves[0];
 if(!e)return o+'<div class="bloc"><p style="margin:0">Aucun élève sur cette page pour le moment.</p></div>';
 var S=[];e.programmes.forEach(function(g){g.seances.forEach(function(s){s.g=g;S.push(s);});});S.sort(function(a,b){return a.quand<b.quand?-1:1;});
 if(e.programmes.length)o+=blocProchaine(prochaine(S),prochaine(S)&&prochaine(S).g.professeur?'avec '+prochaine(S).g.professeur:'');
 e.rendez_vous.filter(function(r){return r.quand;}).forEach(function(r){o+='<div class="bloc"><h2>Rendez-vous de résultats</h2><p style="margin:0"><b>'+jour(r.quand)+'</b>'+(r.professeur?' · avec '+h(r.professeur):'')+' '+tag(r.etat,r.etat==='fait'?'v':'')+'</p>'+(r.ecrit&&r.ecrit.texte?'<h3>Ce qui a été dit</h3><p style="margin:0">'+txt(r.ecrit.texte)+'</p>':'')+'</div>';});
 e.programmes.forEach(function(g){var f=g.seances.filter(function(s){return s.etat==='faite';}).length;
  o+='<div class="bloc"><h2>'+h(titre(g.cle))+'</h2><p style="margin:0 0 4px">'+(g.professeur?'Professeur : <b>'+h(g.professeur)+'</b> · ':'')+f+' séance'+(f>1?'s':'')+' faite'+(f>1?'s':'')+' sur '+g.seances.length+(g.creneau?' · le '+h(g.creneau):'')+'</p>'+(g.objectif?'<p class="petit" style="margin:0">Objectif : '+h(g.objectif)+'</p>':'');
  if(g.rapports.length)o+='<h3>Rapports de la semaine</h3>'+g.rapports.map(function(r){var c=r.contenu||{};return '<details'+(r===g.rapports[0]?' open':'')+' class="rap"><summary>Semaine '+r.semaine+' · publié le '+jour(r.envoye_le,1)+'</summary>'+[['Travaillé',c.travaille],['Acquis',c.acquis],['À renforcer',c.renforcer],['La suite',c.suite]].filter(function(x){return x[1];}).map(function(x){return '<h3>'+x[0]+'</h3><p style="margin:0">'+txt(x[1])+'</p>';}).join('')+'</details>';}).join('');
  o+='<h3>Séances</h3><div class="tw"><table><thead><tr><th>N°</th><th>Date</th><th>État</th><th>Présence</th></tr></thead><tbody>'+g.seances.map(function(s){return '<tr><td>'+(s.numero||'')+'</td><td>'+jour(s.quand)+'</td><td>'+etatS(s)+'</td><td>'+(s.present===true?'présent':s.present===false?tag('absent','r'):'')+'</td></tr>';}).join('')+'</tbody></table></div></div>';});
 e.tests.forEach(function(t){o+=blocTest(t,false);});
 if(!e.tests.length&&!e.programmes.length)o+='<div class="bloc"><h2>Test</h2><p style="margin:0">'+h(e.prenom)+' n\'a pas encore passé son test. Le lien du test est dans l\'email reçu à l\'inscription.</p></div>';
 if(P.commandes.length)o+='<div class="bloc"><h2>Paiements</h2><ul class="fil">'+P.commandes.map(function(c){return '<li><b>'+h((c.packs||[]).map(titre).join(' + '))+'</b> · '+eur(c.total_centimes)+' · '+(c.mode==='3x'?'en trois mensualités':'en une fois')+' '+(c.paye_le?tag('payé le '+jour(c.paye_le,1),'v'):tag('en attente','j'))+(/^https:\/\//.test(c.url||'')?' <a href="'+h(c.url)+'" target="_blank" rel="noopener">Payer</a>':'')+'</li>';}).join('')+'</ul></div>';
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
function formSeance(s){var c=s.compte_rendu||{},T=function(id,l,v,aide){return '<div class="large"><label for="'+id+'">'+l+'</label><textarea id="'+id+'"'+(aide?' placeholder="'+h(aide)+'"':'')+'>'+h(v||'')+'</textarea></div>';};
 return '<p><button type="button" class="act" data-a="ferme">Retour au planning</button></p><h1>'+h(s.e.prenom)+', séance '+(s.numero||'')+'</h1><p class="petit" style="margin:0 0 16px">'+jour(s.quand)+' · '+s.duree_min+' minutes · '+h(titre(s.g.cle))+'</p><div class="bloc"><div class="form"><div><label for="x-etat">La séance</label><select id="x-etat">'+[['faite','a eu lieu'],['manquée','élève absent sans prévenir'],['reportée','reportée'],['prévue','pas encore eu lieu']].map(function(x){return '<option value="'+x[0]+'"'+(x[0]===(s.etat==='prévue'?'faite':s.etat)?' selected':'')+'>'+x[1]+'</option>';}).join('')+'</select></div><div><label for="x-pres">Élève présent</label><select id="x-pres"><option value="1"'+(s.present!==false?' selected':'')+'>oui</option><option value="0"'+(s.present===false?' selected':'')+'>non</option></select></div>'+T('x-trav','Ce qui a été travaillé',c.travaille)+T('x-ok','Ce qui a marché',c.marche)+T('x-bloc','Ce qui a bloqué',c.bloque)+T('x-dev','Travail donné pour la prochaine fois',c.travail,'L\'élève le voit sur sa page.')+T('x-int','Note pour l\'équipe (la famille ne la voit pas)',c.interne)+'</div><p style="margin:14px 0 0"><button type="button" class="act plein" data-a="rend" data-id="'+s.id+'">Enregistrer le compte rendu</button></p><p class="msg" id="msg" aria-live="polite"></p></div>';}
function vueProf(){var S=toutesSeances(),now=Date.now();
 if(ouvert){var s0=S.filter(function(x){return x.id===ouvert;})[0];if(s0)return formSeance(s0);}
 var retard=S.filter(function(s){var q=new Date(s.quand).getTime();return (s.etat==='prévue'&&q<now-36e5*2)||(s.etat==='faite'&&!s.compte_rendu);}),av=S.filter(function(s){return s.etat==='prévue'&&new Date(s.quand).getTime()>=now-36e5*2;});
 var o='<h1>Bonjour '+h(P.prenom)+'</h1><p class="petit" style="margin:0 0 16px">Vos élèves, votre planning, vos comptes rendus.</p>'+onglets(['Planning','Mes élèves ('+P.eleves.length+')']);
 if(onglet===0){
  if(retard.length)o+='<div class="bloc alerte"><h2>Comptes rendus à rendre ('+retard.length+')</h2><ul class="liste">'+retard.map(function(s){return '<li><span class="pt"></span><span><b>'+h(s.e.prenom)+'</b>, séance '+(s.numero||'')+'<small>'+jour(s.quand)+'</small></span><button type="button" class="act plein" data-a="ouvre" data-id="'+s.id+'">Rendre</button></li>';}).join('')+'</ul></div>';
  var rd=[];P.eleves.forEach(function(e){e.rendez_vous.forEach(function(r){if(r.quand&&r.etat==='prévu')rd.push([e,r]);});});
  if(rd.length)o+='<div class="bloc"><h2>Rendez-vous de résultats</h2><ul class="fil">'+rd.map(function(x){return '<li><b>'+h(x[0].prenom)+'</b> ('+h(x[0].classe)+')<small>'+jour(x[1].quand)+' · le test est dans « Mes élèves »</small></li>';}).join('')+'</ul></div>';
  o+='<div class="bloc"><h2>Séances à venir</h2>'+(av.length?'<ul class="liste">'+av.slice(0,30).map(function(s){return '<li><span class="pt g"></span><span><b>'+h(s.e.prenom)+'</b>, séance '+(s.numero||'')+'<small>'+jour(s.quand)+' · '+s.duree_min+' min</small></span>'+(/^https:\/\//.test(s.visio||'')?'<a class="act" href="'+h(s.visio)+'" target="_blank" rel="noopener">Visio</a>':'<span></span>')+'</li>';}).join('')+'</ul>':'<p class="petit" style="margin:0">Aucune séance prévue.</p>')+'</div>';
 }else{
  if(!P.eleves.length)o+='<div class="bloc"><p style="margin:0">Aucun élève ne vous est encore attribué.</p></div>';
  P.eleves.forEach(function(e){o+='<details class="bloc"'+(P.eleves.length===1?' open':'')+'><summary>'+h(e.prenom)+' · '+h(e.classe)+'</summary><p class="petit" style="margin:6px 0 0">Parent : '+h(e.parent)+'</p>';
   e.programmes.forEach(function(g){o+='<h3>'+h(titre(g.cle))+(g.objectif?' · objectif : '+h(g.objectif):'')+'</h3><div class="tw"><table><thead><tr><th>N°</th><th>Date</th><th>État</th><th></th></tr></thead><tbody>'+g.seances.map(function(s){return '<tr><td>'+(s.numero||'')+'</td><td>'+jour(s.quand)+'</td><td>'+etatS(s)+(s.compte_rendu?' '+tag('compte rendu rendu','v'):'')+'</td><td><button type="button" class="act" data-a="ouvre" data-id="'+s.id+'">'+(s.compte_rendu?'Modifier':'Rendre')+'</button></td></tr>';}).join('')+'</tbody></table></div>';});
   o+=e.tests.map(function(t){return blocTest(t,true);}).join('')||'<p class="petit">Test pas encore passé.</p>';o+='</details>';});
 }
 return o;}

function dessine(){document.getElementById('qui').textContent={professeur:'Page du professeur',parent:'Page du parent',eleve:'Page de l\'élève'}[P.type]||'';z.innerHTML=P.type==='professeur'?vueProf():P.type==='parent'?vueParent():vueEleve();}
function charge(){return rpc('page_lien',{p_jeton:J}).then(function(d){P=d;dessine();});}
function refuse(){z.innerHTML='<div class="bloc"><h1 style="font-size:24px">Ce lien ne marche pas</h1><p style="margin:8px 0 0">Il a peut-être été remplacé par un lien plus récent. Écrivez-nous à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a> : nous vous en envoyons un neuf.</p></div>';}
document.addEventListener('click',function(ev){var t=ev.target.closest&&ev.target.closest('[data-a]');if(!t)return;var a=t.getAttribute('data-a'),id=t.getAttribute('data-id');
 if(a==='onglet'){onglet=+id;dessine();}
 else if(a==='ouvre'){ouvert=id;dessine();window.scrollTo(0,0);}
 else if(a==='ferme'){ouvert=null;dessine();}
 else if(a==='rend'){var c={travaille:val('x-trav'),marche:val('x-ok'),bloque:val('x-bloc'),travail:val('x-dev'),interne:val('x-int')},et=val('x-etat'),m=document.getElementById('msg');
  if(et==='faite'&&!c.travaille){m.textContent='Dites en une phrase ce qui a été travaillé.';document.getElementById('x-trav').focus();return;}
  t.disabled=true;m.textContent='Enregistrement…';
  rpc('prof_seance',{p_jeton:J,p_seance:id,p_etat:et,p_present:val('x-pres')==='1',p_compte_rendu:et==='faite'||c.travaille||c.interne?c:null}).then(function(){ouvert=null;return charge();}).catch(function(){t.disabled=false;m.textContent='Enregistrement refusé. Réessayez, ou écrivez à contact@lioris.fr.';});}
});
if(!J||!CFG.url||!CFG.cle)refuse();else charge().catch(refuse);
})();
