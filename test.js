// Outil de test, squelette. Les donnees viennent de data/diag-*.js, fabriquees par extract_diag.py.
(function(){
var app=document.getElementById('app'), D=window.DIAG, L=window.LIO, esc=L.esc, fmt=L.fmt;
var ins=L.lire('lioris_inscription',{});
var JETON=(/[?&]j=([0-9a-f-]{36})/.exec(location.search)||[])[1]||'';
var niveau=D.niveaux.length===1?D.niveaux[0][0]:(ins.niveau||null), liste=[], i=0, prec=0, rep={}, t0=0, debut=0;
function melange(a){a=a.slice();for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var x=a[k];a[k]=a[j];a[j]=x;}return a;}
function aRedaction(){return !!(niveau&&D.blocs[niveau].redaction);}
function accueil(){
 var avecRed=Object.keys(D.blocs).some(function(k){return D.blocs[k].redaction;});
 app.innerHTML='<p class="brand">Lioris</p><h1>'+esc(D.titre)+'</h1>'+
 '<p class="lead">'+(ins.eleve?esc(ins.eleve)+', ce':'Ce')+' test sert à repérer ce qu\'il faut travailler. Ce n\'est pas une note.</p>'+
 '<ul><li>Des questions à choix'+(avecRed?', puis un court exercice à rédiger sur papier':'')+'.</li><li>Environ '+esc(D.duree)+'. '+esc(D.calculatrice)+'</li><li>Calcule au brouillon avant de répondre.</li><li>Ne réponds pas au hasard. « Je ne sais pas » nous aide plus qu\'un coup de chance.</li><li>'+(ins.qui==='moi'?'Un professeur t\'expliquera tes réponses pendant le rendez-vous.':'Tes réponses seront expliquées à ton parent par un professeur.')+'</li></ul>'+
 (niveau?'':'<label for="nv">Ta classe</label><select id="nv">'+D.classes.map(function(c){return '<option value="'+c[1]+'">'+esc(c[0])+'</option>';}).join('')+'</select>')+
 '<button class="btn" id="go">Commencer</button>';
 document.getElementById('go').onclick=function(){if(!niveau)niveau=document.getElementById('nv').value;
  var qs=(D.commun?D.blocs[D.commun].questions.map(function(q){return {q:q,commun:true};}):[]).concat(D.blocs[niveau].questions.map(function(q){return {q:q,commun:false};}));
  liste=qs.map(function(x){var q=x.q,o=[{t:q.ok,k:'ok'}].concat(q.bad.map(function(b,n){return {t:b,k:'bad'+n};}));return {q:q,commun:x.commun,opts:melange(o)};});
  debut=Date.now();i=0;question();};
}
function question(){
 var it=liste[i], q=it.q, cur=rep[q.id];
 var h='<p class="small">Question '+(i+1)+' sur '+liste.length+'</p><div class="progress" role="progressbar" aria-label="Avancement du test" aria-valuemin="0" aria-valuemax="'+liste.length+'" aria-valuenow="'+i+'"><i style="transform:scaleX('+(prec/liste.length)+')"></i></div><h1 class="q" tabindex="-1">'+fmt(q.q)+'</h1>';
 var bl=D.blocs[it.commun?D.commun:niveau];
 if(bl&&bl.texte){var vise=!bl.texte_ids||bl.texte_ids.indexOf(q.id)>=0;h+='<details class="texte"'+(bl.texte_ids&&vise?' open':'')+'><summary>'+(bl.texte_ids?'Le texte':'Le texte du test, utile pour certaines questions')+'</summary><p>'+esc(bl.texte)+'</p></details>';}
 it.opts.forEach(function(o){h+='<button class="opt'+(cur&&cur.k===o.k?' sel':'')+'" aria-pressed="'+(cur&&cur.k===o.k?'true':'false')+'" data-k="'+o.k+'">'+fmt(o.t)+'</button>';});
 h+='<button class="opt alt'+(cur&&cur.k==='nsp'?' sel':'')+'" data-k="nsp">Je ne sais pas</button>';
 if(D.pasvu&&!it.commun)h+='<button class="opt alt'+(cur&&cur.k==='pasvu'?' sel':'')+'" data-k="pasvu">Pas encore vu en classe</button>';
 h+='<div class="row">'+(i>0?'<button class="btn ghost" id="prev">Précédent</button>':'')+'<button class="btn" id="next"'+(cur?'':' disabled')+'>'+(i<liste.length-1?'Suivant':(aRedaction()?'Passer à la rédaction':'Terminer le test'))+'</button></div>';
 app.innerHTML=h;t0=Date.now();window.scrollTo(0,0);
 var bar=app.querySelector('.progress i');bar.getBoundingClientRect();bar.style.transform='scaleX('+(i/liste.length)+')';prec=i;
 app.querySelector('.q').focus({preventScroll:true});
 Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(b){b.onclick=function(){
  rep[q.id]={k:b.getAttribute('data-k'),s:((rep[q.id]&&rep[q.id].s)||0)};
  Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(x){x.classList.remove('sel');x.setAttribute('aria-pressed','false');});b.classList.add('sel');b.setAttribute('aria-pressed','true');
  document.getElementById('next').disabled=false;};});
 function quitter(){if(rep[q.id])rep[q.id].s+=Math.round((Date.now()-t0)/1000);}
 var p=document.getElementById('prev');if(p)p.onclick=function(){quitter();i--;question();};
 document.getElementById('next').onclick=function(){quitter();if(i<liste.length-1){i++;question();}else if(aRedaction())redaction();else fin(false);};
}
function redaction(){
 var r=D.blocs[niveau].redaction||'';
 app.innerHTML='<p class="small">Dernière étape</p><div class="progress"><i></i></div><h1>Exercice à rédiger</h1>'+
 '<p>Rédige sur une feuille, comme sur une copie. Compte un quart d\'heure.'+(D.calculatrice.indexOf('autorisée')>=0?' Calculatrice autorisée pour cet exercice.':'')+'</p><blockquote>'+fmt(r).replace(/\n/g,'<br>')+'</blockquote>'+
 '<label for="ph">Photo de ta copie</label><input id="ph" type="file" accept="image/*" capture="environment">'+
 '<p class="small">Dans ce squelette, la photo n\'est pas envoyée.</p><button class="btn" id="fin">Terminer le test</button>';
 window.scrollTo(0,0);
 document.getElementById('fin').onclick=function(){fin(!!document.getElementById('ph').files.length);};
}
function fin(photo){
 var RES={pack:window.PACK,niveau:niveau,eleve:ins.eleve||'',parent:ins.parent||'',duree:Math.round((Date.now()-debut)/1000),reponses:rep,redaction:aRedaction(),photo:photo,fin:new Date().toISOString()};if(JETON&&window.CRM){window.CRM.depot=window.CRM.deposer(JETON,RES).then(function(ok){if(!ok)L.ecrire('lioris_resultat',RES);return ok;});}else{L.ecrire('lioris_resultat',RES);if(window.CRM)window.CRM.resultat(RES);}
 var file=[];try{file=JSON.parse(sessionStorage.getItem('lioris_file')||'[]');}catch(e){}
 var suivant=file.shift(),moi=ins.qui==='moi';try{sessionStorage.setItem('lioris_file',JSON.stringify(file));}catch(e){}
 if((!suivant||suivant==='bilan')&&window.CRM&&window.CRM.nettoyer)window.CRM.depot.then(function(){window.CRM.nettoyer();});
 var lien=suivant?(suivant==='bilan'?'bilan.html?qui='+(moi?'eleve':'parent'):'test.html?pack='+suivant):'';
 app.innerHTML='<p class="brand">Lioris</p><h1>'+(suivant?'Ce test est terminé.':'C\'est terminé, merci.')+'</h1>'+
  (suivant?'<p class="lead">Il te reste '+(file.length+1)+' étape'+(file.length?'s':'')+'. Tu peux faire une pause avant de continuer.</p><p><a class="btn" href="'+lien+'">'+(suivant==='bilan'?'Passer au bilan d\'organisation':'Passer au test suivant : '+esc(window.DIAGS[suivant]?window.DIAGS[suivant].titre:suivant))+'</a></p>'
   :'<p class="lead">'+(moi?'Un professeur regarde tes réponses et te les explique pendant le rendez-vous. Tu reçois un email avec la date et l\'heure.':'Un professeur regarde tes réponses et les explique à ton parent pendant le rendez-vous. Ton parent reçoit un email avec la date et l\'heure.')+'</p>')+
  '<p class="note">Tu n\'as pas de note : le test sert à savoir quoi travailler.</p>';
 window.scrollTo(0,0);
}
// Arrivee par le lien de l'email : on demande a la base a qui est ce test. Lien inconnu ou deja utilise : on le dit, sans laisser repasser le test.
function message(titre,texte){app.innerHTML='<p class="brand">Lioris</p><h1>'+titre+'</h1><p class="lead">'+texte+'</p><p class="small">Une question ? Écrivez à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a>.</p>';}
if(JETON&&window.CRM&&window.CRM.enLigne()){
 app.innerHTML='<p class="brand">Lioris</p><p class="lead">Ouverture du test…</p>';
 window.CRM.ouvrir(JETON).then(function(o){
  if(!o||o.cle!==window.PACK){message('Ce lien ne correspond pas à ce test.','Reprenez le lien reçu par email, sans le modifier.');return;}
  if(o.utilise){message('Ce test a déjà été passé.','Les réponses sont bien arrivées. Un professeur les explique pendant le rendez-vous.');return;}
  var mot=String(o.classe||'').split(/[ ,]/)[0],c=D.classes.filter(function(x){return x[0].split(/[ ,]/)[0]===mot;})[0];
  ins={eleve:o.prenom||'',classe:o.classe||'',qui:o.pour_soi?'moi':'enfant',niveau:c?c[1]:null};
  niveau=D.niveaux.length===1?D.niveaux[0][0]:(ins.niveau||null);accueil();
 },function(){message('Ce lien de test n\'est pas reconnu.','Reprenez le lien reçu par email. S\'il ne marche toujours pas, écrivez-nous.');});
}else accueil();
})();
