// Se retracter (14 jours) ou arreter un programme (preavis de 30 jours), sans compte. Decision d'ad du 2026-11-24.
// Trois ecrans : la demande, UN ecran qui propose une solution (on peut l'ignorer), la confirmation avec date, heure et reference.
// La demande est enregistree dans la base en ligne (fonction deposer_demande). Sans base ou en cas d'echec : renvoi vers l'email.
(function(){
var app=document.getElementById('app'),CFG=window.LIORIS_BASE||{},EN_LIGNE=!!(CFG.url&&CFG.cle),D={};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function v(i){var e=document.getElementById(i);return e?e.value.trim():'';}
function envoyer(type){if(!EN_LIGNE)return Promise.reject(new Error('hors ligne'));
 var h={'Content-Type':'application/json',apikey:CFG.cle};if(CFG.cle.indexOf('sb_')!==0)h.Authorization='Bearer '+CFG.cle;
 return fetch(CFG.url+'/rest/v1/rpc/deposer_demande',{method:'POST',headers:h,body:JSON.stringify({p_type:type,p_nom:D.nom,p_email:D.email,p_programme:D.programme,p_message:D.message})})
  .then(function(r){return r.text().then(function(x){if(!r.ok)throw new Error(x);return JSON.parse(x);});});}
function mot(){return D.type==='retractation'?'la rétractation':'l\'arrêt';}
function secours(){var sujet=D.type==='retractation'?'Rétractation':'Arrêt du programme',corps='Bonjour,\n\n'+(D.type==='retractation'?'Je renonce à ma commande.':'Je souhaite arrêter le programme.')+'\n\nNom : '+D.nom+'\nProgramme : '+D.programme+'\n';
 return 'mailto:contact@lioris.fr?subject='+encodeURIComponent(sujet)+'&body='+encodeURIComponent(corps);}
function etape1(){
 app.innerHTML='<p class="brand">Lioris</p><h1>Se rétracter ou arrêter un programme</h1>'+
  '<p class="lead">Vous n\'avez pas besoin de compte. Votre demande est datée dès que vous la confirmez.</p>'+
  '<form id="f"><fieldset style="border:0;padding:0;margin:0 0 6px"><legend style="font-weight:600;margin-bottom:8px">Votre demande</legend>'+
  '<label class="check"><input type="radio" name="t" value="retractation" required><span><b>Me rétracter.</b> Possible pendant les 14 jours qui suivent le paiement. Vous êtes remboursé, moins les séances déjà faites.</span></label>'+
  '<label class="check"><input type="radio" name="t" value="arret" required><span><b>Arrêter mon programme.</b> Possible à tout moment, avec 30 jours de préavis.</span></label></fieldset>'+
  '<label for="nom">Votre nom</label><input id="nom" type="text" required autocomplete="name">'+
  '<label for="em">Votre email</label><input id="em" type="email" required autocomplete="email">'+
  '<label for="pg">Programme et prénom de l\'élève</label><input id="pg" type="text" required placeholder="Exemple : maths, terminale, Inès">'+
  '<label for="msg">Un mot pour nous, si vous le souhaitez</label><textarea id="msg" rows="3" style="width:100%;font:inherit;padding:11px 12px;border:1.5px solid var(--ink,#17203A);border-radius:8px"></textarea>'+
  '<button class="btn" type="submit" style="margin-top:18px">Continuer</button></form>'+
  '<p class="small" style="margin-top:14px">Vous pouvez aussi nous écrire à <a href="mailto:contact@lioris.fr">contact@lioris.fr</a>.</p>';
 document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
  D={type:(document.querySelector('input[name=t]:checked')||{}).value,nom:v('nom'),email:v('em'),programme:v('pg'),message:v('msg')};etape2();});
 window.scrollTo(0,0);}
function etape2(){
 app.innerHTML='<p class="brand">Lioris</p><h1>Avant de confirmer</h1>'+
  '<p class="lead">Si quelque chose ne va pas, on peut souvent le régler : changer de professeur, déplacer les séances, revoir le rythme. Un membre de l\'équipe peut vous rappeler.</p>'+
  '<p class="cta"><button class="btn" type="button" id="oui">Confirmer '+mot()+'</button></p>'+
  '<p style="margin-top:14px"><button class="btn ligne" type="button" id="rap">Être rappelé d\'abord</button></p>'+
  '<p class="small" style="margin-top:14px">Être rappelé ne retarde rien : vous pouvez confirmer tout de suite, ou plus tard.</p><p id="err" class="note" role="alert" hidden></p>';
 document.getElementById('oui').onclick=function(){this.disabled=true;envoyer(D.type).then(recu,echec);};
 document.getElementById('rap').onclick=function(){this.disabled=true;envoyer('rappel').then(function(){
   app.innerHTML='<p class="brand">Lioris</p><h1>Nous vous rappelons.</h1><p class="lead">Votre demande de rappel est notée. '+(D.type==='retractation'?'Votre délai de 14 jours continue de courir : vous pouvez confirmer la rétractation à tout moment.':'Vous pouvez confirmer l\'arrêt à tout moment.')+'</p>'+
    '<p class="cta"><button class="btn" type="button" id="oui2">Confirmer '+mot()+' maintenant</button></p><p id="err" class="note" role="alert" hidden></p>';
   document.getElementById('oui2').onclick=function(){this.disabled=true;envoyer(D.type).then(recu,echec);};window.scrollTo(0,0);},echec);};
 window.scrollTo(0,0);}
function recu(j){var d=new Date(j.recu);
 app.innerHTML='<p class="brand">Lioris</p><h1>Votre demande est enregistrée.</h1>'+
  '<p class="lead">'+(D.type==='retractation'?'Rétractation':'Arrêt du programme')+' reçu le '+esc(d.toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'}))+' à '+esc(d.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'}))+'.</p>'+
  '<p class="note"><b>Référence : '+esc(j.reference)+'</b><br>Gardez cette page ou faites-en une capture d\'écran. Nous vous confirmons la réception par email à '+esc(D.email)+'.</p>'+
  '<p>'+(D.type==='retractation'?'Le remboursement est fait sur le moyen de paiement utilisé, moins les séances déjà faites.':'Le préavis de 30 jours part d\'aujourd\'hui. Les séances continuent normalement jusqu\'à la date de fin, que nous vous confirmons par email.')+'</p>';
 window.scrollTo(0,0);}
function echec(){var e=document.getElementById('err');if(!e)return;e.hidden=false;
 e.innerHTML='Votre demande n\'a pas pu être enregistrée en ligne. <a href="'+secours()+'">Envoyez-la par email à contact@lioris.fr</a> : c\'est la date de votre email qui compte.';
 Array.prototype.forEach.call(document.querySelectorAll('button'),function(b){b.disabled=false;});}
etape1();
})();
