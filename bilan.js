// Bilan d'organisation, squelette. Deux questionnaires : le parent (?qui=parent), puis l'eleve (?qui=eleve).
// L'outil ne calcule rien : ni total, ni couleur, ni classement.
(function(){
var B=window.BILAN, app=document.getElementById('app'), qui=/qui=eleve/.test(location.search)?'eleve':'parent';
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
function melange(a){a=a.slice();for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1));var x=a[k];a[k]=a[j];a[j]=x;}return a;}
var ins={};try{ins=JSON.parse(localStorage.getItem('lioris_bilan_inscription')||'{}');}catch(e){}
var liste=melange(B.affirmations), i=0, rep={}, choix=B.choix.concat(qui==='parent'?['Je ne sais pas']:[]);
function inscription(){
 app.innerHTML='<p class="brand">Lioris</p><h1>Bilan d\'organisation : gratuit</h1><p class="lead">Vous remplissez le vôtre en cinq minutes, votre enfant remplit le sien. Un coach regarde vos deux regards avec vous, en visio. Vous êtes libre de ne pas donner suite.</p>'+
 '<form id="f"><label for="pp">Votre prénom</label><input id="pp" type="text" required><label for="em">Votre email</label><input id="em" type="email" required><label for="tel">Votre téléphone</label><input id="tel" type="tel">'+
 '<label for="pe">Prénom de votre enfant</label><input id="pe" type="text" required><label for="cl">Sa classe</label><input id="cl" type="text" required>'+
 '<label for="cr">Créneau pour l\'échange avec le coach</label><select id="cr" required><option value="">Choisir</option><option>Créneau à brancher sur l\'outil de rendez-vous</option></select>'+
 '<p class="small" style="margin-top:6px">Vous pourrez changer ce créneau à tout moment, depuis l\'email de confirmation.</p>'+
 '<label class="check"><input type="checkbox" required><span>Je suis le parent ou le représentant légal de l\'élève, et j\'accepte que nos réponses soient lues par le coach pour préparer l\'échange. <a href="confidentialite.html" target="_blank" rel="noopener">Lire la politique de confidentialité</a>.</span></label>'+
 '<p class="small" style="margin-top:10px">Nous vous recontactons par email, téléphone ou messagerie au sujet du bilan. Vous pouvez demander l\'arrêt à tout moment à contact@lioris.fr.</p>'+
 '<button class="btn" type="submit">Réserver et commencer mon bilan</button><p class="small" style="margin-top:12px">Sans carte bancaire. Aucune obligation.</p></form>'+
 '<p class="note" style="margin-top:18px">Ce bilan décrit des habitudes de travail. Il n\'est pas un acte médical.</p>';
 document.getElementById('f').onsubmit=function(e){e.preventDefault();function v(x){return document.getElementById(x).value;}
  ins={parent:v('pp'),email:v('em'),tel:v('tel'),eleve:v('pe'),classe:v('cl'),contact:true};
  try{localStorage.setItem('lioris_bilan_inscription',JSON.stringify(ins));}catch(x){} accueil();};
}
function accueil(){
 app.innerHTML='<p class="brand">Lioris</p><h1>Bilan d\'organisation</h1><p class="lead">'+esc(B.accueil[qui])+'</p><p class="small"><span class="todo">Ligne d\'information sur les données : à écrire avec le juriste.</span></p><button class="btn" id="go">Commencer</button>';
 window.scrollTo(0,0);document.getElementById('go').onclick=function(){i=0;affirmation();};
}
function affirmation(){
 var a=liste[i], cur=rep[a.n];
 var h='<p class="small">'+(i+1)+' sur '+liste.length+'</p><div class="progress"><i style="width:'+Math.round(100*i/liste.length)+'%"></i></div><p class="q">'+esc(a[qui])+'</p>';
 choix.forEach(function(c){h+='<button class="opt'+(c==='Je ne sais pas'?' alt':'')+(cur===c?' sel':'')+'" data-c="'+esc(c)+'">'+esc(c.charAt(0).toUpperCase()+c.slice(1))+'</button>';});
 h+='<div class="row">'+(i>0?'<button class="btn ghost" id="prev">Précédent</button>':'')+'<button class="btn" id="next"'+(cur?'':' disabled')+'>Suivant</button></div>';
 app.innerHTML=h;window.scrollTo(0,0);
 Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(b){b.onclick=function(){rep[a.n]=b.getAttribute('data-c');
  Array.prototype.forEach.call(app.querySelectorAll('.opt'),function(x){x.classList.toggle('sel',x===b);});document.getElementById('next').disabled=false;};});
 var p=document.getElementById('prev');if(p)p.onclick=function(){i--;affirmation();};
 document.getElementById('next').onclick=function(){if(i<liste.length-1){i++;affirmation();}else ouvertes();};
}
function ouvertes(){
 var h='<p class="small">Dernière étape</p><div class="progress"><i style="width:100%"></i></div><h1>'+(qui==='parent'?'Trois questions':'Trois questions pour finir')+'</h1><form id="o">';
 B.ouvertes[qui].forEach(function(q,k){h+='<label for="o'+k+'">'+esc(q)+'</label><textarea id="o'+k+'" rows="3"></textarea>';});
 h+='<p class="small">Merci de ne pas indiquer ici d\'information de santé.</p>';
 if(qui==='parent'){h+='<h3>Facultatif</h3><p>Souhaitez-vous nous signaler quelque chose pour adapter l\'accompagnement ? Vous restez libre de ne rien cocher : le bilan a lieu dans tous les cas.</p>';
  B.cases.forEach(function(c,k){h+='<label class="check"><input type="checkbox" class="cf" id="cf'+k+'"><span>'+esc(c)+'</span></label>';});
  h+='<div id="cons" hidden><label class="check"><input type="checkbox" id="cs"><span>'+esc(B.consentement)+' <span class="todo">Mentions sur les données à ajouter avec le juriste.</span></span></label></div>';}
 h+='<button class="btn" type="submit">Terminer</button><p id="msg" class="note" hidden></p></form>';
 app.innerHTML=h;window.scrollTo(0,0);
 var cfs=app.querySelectorAll('.cf');
 Array.prototype.forEach.call(cfs,function(c){c.onchange=function(){var une=Array.prototype.some.call(cfs,function(x){return x.checked;});document.getElementById('cons').hidden=!une;if(!une)document.getElementById('cs').checked=false;};});
 document.getElementById('o').onsubmit=function(e){e.preventDefault();
  var coche=Array.prototype.map.call(cfs,function(x){return x.checked;});
  if(coche.some(Boolean)&&!document.getElementById('cs').checked){var m=document.getElementById('msg');m.hidden=false;m.textContent='Pour que nous puissions tenir compte de ce que vous avez coché, cochez aussi la case d\'accord. Sinon, décochez les cases : le bilan a lieu dans tous les cas.';return;}
  var d={qui:qui,prenom:qui==='parent'?ins.parent:ins.eleve,reponses:rep,ouvertes:B.ouvertes[qui].map(function(q,k){return document.getElementById('o'+k).value.trim();}),date:new Date().toISOString()};
  if(qui==='parent')d.cases=coche.some(Boolean)?coche:null;
  try{localStorage.setItem('lioris_bilan_'+qui,JSON.stringify(d));}catch(x){}
  fin();};
}
function fin(){
 app.innerHTML=qui==='parent'
  ?'<p class="brand">Lioris</p><h1>Merci, votre bilan est enregistré.</h1><p class="lead">Il reste celui de votre enfant : cinq minutes, de son côté, sans vous.</p><p class="note">Vous recevez par email le lien à lui transmettre. <span class="todo">email à brancher</span></p>'
  :'<p class="brand">Lioris</p><h1>C\'est terminé, merci.</h1><p class="lead">Le coach lit tes réponses. On en parle ensemble, avec ton parent, pendant l\'échange.</p><p class="note">Il n\'y a pas de note et pas de bonne réponse.</p>';
 window.scrollTo(0,0);
}
if(qui==='parent'&&!ins.parent)inscription();else accueil();
})();
