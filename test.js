// Outil de test. Les donnees viennent de data/diag-*.js, fabriquees par extract_diag.py.
// Habillage v6 (2026-11-26, v6-test.css) : le test est la copie de l'eleve. On ecrit sur la page reglee, on entoure sa lettre au stylo bleu,
// la coche rouge du correcteur n'arrive qu'a la fin. Le parcours, les textes et les donnees envoyees n'ont pas change.
(function(){
var app=document.getElementById('app'), D=window.DIAG, L=window.LIO, esc=L.esc, fmt=L.fmt;
var ins=L.lire('lioris_inscription',{});
var JETON=(/[?&]j=([0-9a-f-]{36})/.exec(location.search)||[])[1]||'';
var niveau=D.niveaux.length===1?D.niveaux[0][0]:(ins.niveau||null), liste=[], i=0, prec=0, rep={}, t0=0, debut=0;
// Le test en cours est garde dans ce navigateur a chaque reponse (2026-11-26) : recharger la page ou fermer l'onglet ne fait plus rien perdre.
// Il est efface des que les reponses sont arrivees. Au-dela de 24 heures, on repart de zero.
var ENC='lioris_encours_'+window.PACK+(JETON?'_'+JETON.slice(0,8):''),RES=null,etape='q';
function garder(){try{localStorage.setItem(ENC,JSON.stringify({niveau:niveau,ordre:liste.map(function(it){return {id:it.q.id,c:it.commun,o:it.opts.map(function(o){return o.k;})};}),i:i,rep:rep,debut:debut,etape:etape}));}catch(e){}}
function oublier(){try{localStorage.removeItem(ENC);}catch(e){}}
function enCours(){try{var s=JSON.parse(localStorage.getItem(ENC)||'null');if(!s||!s.ordre||!s.ordre.length||!D.blocs[s.niveau]||Date.now()-s.debut>864e5)return null;
  var par={};[D.commun,s.niveau].forEach(function(b){if(b&&D.blocs[b])D.blocs[b].questions.forEach(function(q){par[q.id]=q;});});
  var L=s.ordre.map(function(x){var q=par[x.id];if(!q)return null;var o=x.o.map(function(k){if(k==='ok')return {t:q.ok,k:k};var n=+String(k).slice(3);return q.bad[n]===undefined?null:{t:q.bad[n],k:k};});return o.indexOf(null)>=0||o.length!==q.bad.length+1?null:{q:q,commun:!!x.c,opts:o};});
  if(L.indexOf(null)>=0)return null;s.liste=L;s.i=Math.max(0,Math.min(L.length-1,s.i|0));return s;}catch(e){return null;}}
function melange(a){a=a.slice();for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var x=a[k];a[k]=a[j];a[j]=x;}return a;}
function aRedaction(){return !!(niveau&&D.blocs[niveau].redaction);}
function accueil(){
 var avecRed=Object.keys(D.blocs).some(function(k){return D.blocs[k].redaction;});
 var nb=niveau?((D.commun?D.blocs[D.commun].questions.length:0)+D.blocs[niveau].questions.length):0;
 var classe=ins.classe||'';if(!classe&&niveau){var cc=D.classes.filter(function(c){return c[1]===niveau;})[0];classe=cc?cc[0]:'';}
 var moi=ins.qui==='moi';
 app.innerHTML='<header class="t-couv"><p class="etiquette">Test gratuit'+(classe?'. '+esc(classe)+'.':'.')+'</p>'+
  '<h1 class="t-titre">'+esc(D.titre)+'</h1>'+
  (ins.eleve?'<p class="t-nom"><span>Nom</span><span class="eleve">'+esc(ins.eleve)+'</span></p>':'')+
  '<ul class="t-faits">'+(nb?'<li><b>'+nb+'</b>questions</li>':'')+'<li><b>'+esc(String(D.duree).replace(/\s*minutes?/,' min'))+'</b>environ</li><li><b>Aucune</b>note</li></ul>'+
  '<p class="t-but">Ce test repère ce qu\'il faut travailler, et dans quel ordre.</p><p class="t-mot" aria-hidden="true">Ce n\'est pas une note.</p><span class="evite">Ce n\'est pas une note.</span></header>'+
 '<h2 class="t-h2">Avant de commencer</h2>'+
 '<ul class="t-regles"><li><i>1</i><span><b>Calcule au brouillon avant de répondre.</b> '+esc(D.calculatrice)+'</span></li>'+
  '<li><i>2</i><span><b>Ne réponds pas au hasard.</b> « Je ne sais pas » nous aide plus qu\'un coup de chance.</span></li>'+
  '<li><i>3</i><span><b>Des questions à choix'+(avecRed?', puis un court exercice à rédiger sur papier':'')+'.</b> Tu peux revenir en arrière à tout moment.</span></li></ul>'+
 '<ol class="t-suite"><li class="ici"><b>Le test</b><span>maintenant</span></li><li><b>Le rendez-vous</b><span>'+(moi?'un professeur t\'explique tes réponses':'un professeur explique tes réponses à ton parent')+'</span></li><li><b>Le plan écrit</b><span>ce qu\'il faut reprendre, dans l\'ordre</span></li></ol>'+
 (function(){var s=enCours();return s?'<div class="t-reprise"><p><b>Tu avais commencé ce test.</b> Tes réponses sont gardées : tu en étais à la question '+(s.i+1)+' sur '+s.liste.length+'.</p><p class="t-go" style="margin:0"><button class="btn" id="reprendre">Reprendre où j\'en étais</button></p></div>':'';})()+
 (niveau?'':'<label for="nv">Ta classe</label><select id="nv">'+D.classes.map(function(c){return '<option value="'+c[1]+'">'+esc(c[0])+'</option>';}).join('')+'</select>')+
 '<p class="t-go"><button class="btn'+(enCours()?' ghost':'')+'" id="go">'+(enCours()?'Recommencer depuis le début':'Commencer le test')+'</button></p>';
 var rp=document.getElementById('reprendre');if(rp)rp.onclick=function(){var s=enCours();if(!s)return;niveau=s.niveau;liste=s.liste;rep=s.rep||{};i=s.i;prec=i;debut=s.debut;if(s.etape==='red'&&aRedaction())redaction();else question();};
 document.getElementById('go').onclick=function(){if(!niveau)niveau=document.getElementById('nv').value;
  var qs=(D.commun?D.blocs[D.commun].questions.map(function(q){return {q:q,commun:true};}):[]).concat(D.blocs[niveau].questions.map(function(q){return {q:q,commun:false};}));
  liste=qs.map(function(x){var q=x.q,o=[{t:q.ok,k:'ok'}].concat(q.bad.map(function(b,n){return {t:b,k:'bad'+n};}));return {q:q,commun:x.commun,opts:melange(o)};});
  debut=Date.now();i=0;rep={};question();};
}
var ROND='<svg viewBox="0 0 100 100" preserveAspectRatio="none"><path pathLength="1" d="M52 6 C22 4 5 24 7 52 C9 82 34 97 60 93 C86 89 97 66 93 43 C89 20 68 5 44 9"/></svg>';
document.addEventListener('keydown',function(e){if(e.metaKey||e.ctrlKey||e.altKey)return;var o=app.querySelectorAll('.t-choix .opt');if(!o.length)return;
 var n='abcdefgh'.indexOf(String(e.key).toLowerCase());if(n>=0&&n<o.length){e.preventDefault();o[n].click();return;}
 if(e.key==='Enter'){var s=document.getElementById('next');if(s&&!s.disabled){e.preventDefault();s.click();}}});
function question(){
 var it=liste[i], q=it.q, cur=rep[q.id];
 var LET='ABCDEFGH',min=parseInt(D.duree,10)||0,reste=min?Math.max(1,Math.round(min*(liste.length-i)/liste.length)):0;
 var h='<div class="t-barre"><div class="t-info"><span><b>Question '+(i+1)+'</b> sur '+liste.length+'</span>'+(reste?'<span>encore '+reste+' min environ</span>':'')+'</div>'+
  '<div class="progress" role="progressbar" aria-label="Avancement du test" aria-valuemin="0" aria-valuemax="'+liste.length+'" aria-valuenow="'+i+'"><i style="transform:scaleX('+(prec/liste.length)+')"></i></div></div>'+
  '<div class="t-q"><p class="lab">'+esc(D.titre)+'</p><h1 class="q" tabindex="-1">'+fmt(q.q)+'</h1></div>';
 var bl=D.blocs[it.commun?D.commun:niveau];
 if(bl&&bl.texte){var vise=!bl.texte_ids||bl.texte_ids.indexOf(q.id)>=0;h+='<details class="texte"'+(bl.texte_ids&&vise?' open':'')+'><summary>'+(bl.texte_ids?'Le texte':'Le texte du test, utile pour certaines questions')+'</summary><p>'+esc(bl.texte)+'</p></details>';}
 h+='<div class="t-choix" role="group" aria-label="Réponses proposées">';
 it.opts.forEach(function(o,n){var s=cur&&cur.k===o.k;h+='<button class="opt'+(s?' sel':'')+'" aria-pressed="'+(s?'true':'false')+'" data-k="'+o.k+'"><span class="t-l" aria-hidden="true">'+LET.charAt(n)+ROND+'</span><span class="t-t">'+fmt(o.t)+'</span></button>';});
 h+='</div><div class="t-autres"><button class="opt alt'+(cur&&cur.k==='nsp'?' sel':'')+'" data-k="nsp">Je ne sais pas</button>';
 if(D.pasvu&&!it.commun)h+='<button class="opt alt'+(cur&&cur.k==='pasvu'?' sel':'')+'" data-k="pasvu">Pas encore vu en classe</button>';
 h+='</div><div class="t-nav">'+(i>0?'<button class="btn ghost" id="prev">Précédent</button>':'')+'<button class="btn" id="next"'+(cur?'':' disabled')+'>'+(i<liste.length-1?'Suivant':(aRedaction()?'Passer à la rédaction':'Terminer le test'))+'</button></div>'+
  '<p class="t-aide">Au clavier : les lettres pour choisir, Entrée pour continuer.</p>';
 app.innerHTML=h;t0=Date.now();window.scrollTo(0,0);etape='q';garder();
 var bar=app.querySelector('.progress i');bar.getBoundingClientRect();bar.style.transform='scaleX('+(i/liste.length)+')';prec=i;
 app.querySelector('.q').focus({preventScroll:true});
 Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(b){b.onclick=function(){
  rep[q.id]={k:b.getAttribute('data-k'),s:((rep[q.id]&&rep[q.id].s)||0)};
  Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(x){x.classList.remove('sel');x.setAttribute('aria-pressed','false');});b.classList.add('sel');b.setAttribute('aria-pressed','true');
  document.getElementById('next').disabled=false;garder();};});
 function quitter(){if(rep[q.id])rep[q.id].s+=Math.round((Date.now()-t0)/1000);}
 var p=document.getElementById('prev');if(p)p.onclick=function(){quitter();i--;question();};
 document.getElementById('next').onclick=function(){quitter();if(i<liste.length-1){i++;question();}else if(aRedaction())redaction();else fin(false);};
}
function redaction(){
 var r=D.blocs[niveau].redaction||'';
 app.innerHTML='<div class="t-barre"><div class="t-info"><span><b>Dernière étape</b></span><span>un quart d\'heure environ</span></div><div class="progress"><i></i></div></div>'+
 '<div class="t-q"><p class="lab">Exercice à rédiger, sur papier</p></div><div class="feuille-e papier t-feuille"><p class="lab">L\'énoncé</p><p class="t-red">'+fmt(r).replace(/\n/g,'<br>')+'</p></div>'+
 '<p class="t-consigne"><b>Consigne.</b> Rédige sur une feuille, comme sur une copie.'+(D.calculatrice.indexOf('autorisée')>=0?' Calculatrice autorisée pour cet exercice.':'')+'</p>'+
 '<p class="t-consigne">Garde ta feuille : tu la montres au professeur pendant le rendez-vous.</p><p class="t-go"><button class="btn" id="fin">Terminer le test</button></p>';
 etape='red';garder();
 window.scrollTo(0,0);
 document.getElementById('fin').onclick=function(){fin(false);};
}
function fin(photo){
 RES={pack:window.PACK,niveau:niveau,eleve:ins.eleve||'',parent:ins.parent||'',duree:Math.round((Date.now()-debut)/1000),reponses:rep,redaction:aRedaction(),photo:photo,fin:new Date().toISOString()};
 envoyer();
}
// Trois issues : les reponses sont arrivees ; elles ne sont pas parties (on le dit, rien n'est perdu, on peut renvoyer) ; le test n'est relie a aucune inscription.
function envoyer(){
 app.innerHTML='<div class="t-msg"><p class="lead" role="status">Envoi de tes réponses…</p></div>';window.scrollTo(0,0);
 var C=window.CRM,pr;
 if(!C||!C.enLigne()){L.ecrire('lioris_resultat',RES);if(C)C.resultat(RES);pr=Promise.resolve('ok');}          // site hors ligne (travail local) : rien a envoyer
 else if(JETON){C.depot=C.deposer(JETON,RES);pr=C.depot.then(function(ok){return ok?'ok':'echec';});}
 else{L.ecrire('lioris_resultat',RES);var id=C.resultat(RES),f=C.famille(id);pr=(f&&f.jeton)?C.depot.then(function(ok){return ok?'ok':'echec';}):Promise.resolve('seul');}
 pr.then(function(r){if(r==='ok'){oublier();termine();}else echec(r);},function(){echec('echec');});
}
function echec(r){
 app.innerHTML='<div class="t-msg"><h1>'+(r==='seul'?'Ce test n\'est pas relié à une inscription.':'Tes réponses ne sont pas parties.')+'</h1>'+
  '<p class="lead">'+(r==='seul'?'Tes réponses sont gardées dans ce navigateur, mais personne ne les a reçues. Pour qu\'un professeur les lise, il faut une inscription : elle est gratuite.':'Rien n\'est perdu : tes réponses sont gardées dans ce navigateur. Vérifie ta connexion, puis renvoie-les.')+'</p></div>'+
  (r==='seul'?'<p class="t-go"><a class="btn" href="commencer.html">Faire l\'inscription</a></p>':'<p class="t-go"><button class="btn" id="renvoi">Renvoyer mes réponses</button></p>')+
  '<p class="small" style="margin-top:32px">'+(r==='seul'?'':'Si ce test avait déjà été envoyé une première fois, tes premières réponses sont bien arrivées. ')+'Une question ? Écrivez à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a>.</p>';
 var b=document.getElementById('renvoi');if(b)b.onclick=envoyer;window.scrollTo(0,0);
}
function termine(){
 var file=[];try{file=JSON.parse(sessionStorage.getItem('lioris_file')||'[]');}catch(e){}
 file=file.filter(function(k){return window.DIAGS[k];});var suivant=file.shift(),moi=ins.qui==='moi';try{sessionStorage.setItem('lioris_file',JSON.stringify(file));}catch(e){}
 if(!suivant&&window.CRM&&window.CRM.nettoyer)window.CRM.depot.then(function(){window.CRM.nettoyer();});
 var lien=suivant?'test.html?pack='+suivant:'';
 app.innerHTML='<div class="t-fin"><span class="t-ok" aria-hidden="true"><svg viewBox="0 0 54 40"><path pathLength="1" d="M4 22 L18 36 L50 4"/></svg></span>'+
  '<h1>'+(suivant?'Ce test est terminé.':'C\'est terminé, merci.')+'</h1>'+
  '<p class="lead">'+(suivant?'Tes réponses sont enregistrées. Il te reste '+(file.length+1)+' étape'+(file.length?'s':'')+' : tu peux faire une pause avant de continuer.':'Tes réponses sont enregistrées. Tu n\'as pas de note : le test sert à savoir quoi travailler.')+'</p></div>'+
  (suivant?'<p class="t-go" style="margin:0 0 64px"><a class="btn" href="'+lien+'">'+('Passer au test suivant : '+esc(window.DIAGS[suivant].titre))+'</a></p>':'')+
  '<h2 class="t-h2">Ce qui se passe maintenant</h2>'+
  '<ol class="t-suite"><li class="fait"><b>Le test</b><span>fait</span></li><li class="ici"><b>Le rendez-vous</b><span>'+(moi?'un professeur t\'explique tes réponses en visio':'un professeur explique tes réponses à ton parent, en visio')+'</span></li><li><b>Le plan écrit</b><span>ce qu\'il faut reprendre, dans l\'ordre</span></li></ol>'+
  (suivant?'':'<p class="t-note">'+(moi?'Tu reçois un email avec la date et l\'heure du rendez-vous.':'Ton parent reçoit un email avec la date et l\'heure du rendez-vous.')+'</p>')+
  '';
 window.scrollTo(0,0);
}
// Arrivee par le lien de l'email : on demande a la base a qui est ce test. Lien inconnu ou deja utilise : on le dit, sans laisser repasser le test.
function message(titre,texte){app.innerHTML='<div class="t-msg"><h1>'+titre+'</h1><p class="lead">'+texte+'</p></div><p class="small">Une question ? Écrivez à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a>.</p>';}
if(JETON&&window.CRM&&window.CRM.enLigne()){
 app.innerHTML='<div class="t-msg"><p class="lead">Ouverture du test…</p></div>';
 window.CRM.ouvrir(JETON).then(function(o){
  if(!o||o.cle!==window.PACK){message('Ce lien ne correspond pas à ce test.','Reprenez le lien reçu par email, sans le modifier.');return;}
  if(o.utilise){message('Ce test a déjà été passé.','Les réponses sont bien arrivées. Un professeur les explique pendant le rendez-vous.');return;}
  var nomc=String(o.classe||''),mot=nomc.split(/[ ,]/)[0],c=D.classes.filter(function(x){return x[0]===nomc;})[0]||D.classes.filter(function(x){return x[0].split(/[ ,]/)[0]===mot;})[0];
  ins={eleve:o.prenom||'',classe:o.classe||'',qui:o.pour_soi?'moi':'enfant',niveau:c?c[1]:null};
  niveau=D.niveaux.length===1?D.niveaux[0][0]:(ins.niveau||null);accueil();
 },function(){message('Ce lien de test n\'est pas reconnu.','Reprenez le lien reçu par email. S\'il ne marche toujours pas, écrivez-nous.');});
}else accueil();
})();
