// Inscription du parent au diagnostic, squelette. Le diagnostic vient de ?pack=...
(function(){
var D=window.DIAG, L=window.LIO, app=document.getElementById('app');
var Q=location.search,MOI=/[?&]qui=moi/.test(Q),SUITE=((Q.match(/[?&]suite=([\w,-]+)/)||[])[1]||'').split(',').filter(function(k){return k&&window.DIAGS[k]&&k!==window.PACK;});
var PACKS=[window.PACK].concat(SUITE),NOMS=PACKS.map(function(k){return window.DIAGS[k].titre;});
var plusieurs=PACKS.length>1,dureeTxt=plusieurs?'un par matière':'environ '+L.esc(D.duree);
var h='<header class="t-couv"><p class="etiquette">Gratuit. Sans carte bancaire. Aucune obligation.</p><h1 class="t-titre">'+(plusieurs?'Vos '+PACKS.length+' tests':L.esc(D.titre))+'</h1></header>'+
 (plusieurs?'<p class="t-note" style="margin:0 0 32px">'+NOMS.map(L.esc).join(' · ')+'</p>':'')+
 '<p class="lead">'+(MOI?'Vous passez '+(plusieurs?'les tests, ':'le test, ')+dureeTxt+'. Vous retrouvez la carte des erreurs sur votre page personnelle. Un professeur vous l\'explique en visio et, si c\'est utile, vous propose un programme. Vous êtes libre de ne pas donner suite.'
   :'Vous inscrivez votre enfant. Il passe '+(plusieurs?'les tests, ':'le test, ')+dureeTxt+'. Vous retrouvez la carte des erreurs sur votre page personnelle. Un professeur vous l\'explique en visio et, si c\'est utile, vous propose un programme. Vous êtes libre de ne pas donner suite.')+'</p>'+
 '<form id="f" class="t-form"><label for="pp">Votre prénom</label><input id="pp" type="text" required autocomplete="given-name">'+
 '<label for="em">Votre email</label><input id="em" type="email" required autocomplete="email">'+
 '<label for="tel">Votre téléphone</label><input id="tel" type="tel" autocomplete="tel">'+
 (MOI?'':'<label for="pe">Prénom de votre enfant</label><input id="pe" type="text" required>')+
 '<label for="cl">'+(MOI?'Votre classe':'Sa classe')+'</label><select id="cl" required><option value="">Choisir</option>'+D.classes.map(function(c){return '<option value="'+c[1]+'">'+L.esc(c[0])+'</option>';}).join('')+'</select>'+
 '<label class="check"><input type="checkbox" id="c1" required><span>'+(MOI?'J\'ai 18 ans ou plus, et j\'accepte que mes réponses soient utilisées pour préparer le rendez-vous. Si vous avez moins de 18 ans, c\'est à votre parent de remplir ce formulaire. ':'Je suis le parent ou le représentant légal de l\'élève, et j\'accepte que ses réponses soient utilisées pour préparer le rendez-vous. ')+'<a href="confidentialite.html" target="_blank" rel="noopener">Lire la politique de confidentialité</a>.</span></label>'+
 '<p class="small" style="margin-top:10px">Nous vous recontactons par email, téléphone ou messagerie au sujet '+(plusieurs?'de ces tests':'de ce test')+'. Vous pouvez demander l\'arrêt à tout moment à contact@lioris.fr.</p>'+
 '<p class="t-go"><button class="btn" type="submit">Continuer : choisir le créneau</button></p>'+
 '<p class="small" style="margin-top:12px">Étape suivante : le créneau du rendez-vous, puis '+(plusieurs?'les tests':'le test')+'. Sans carte bancaire. Aucune obligation.</p></form>';
app.innerHTML=h;
var AGENDA='https://cal.com/lioris/rendez-vous-de-resultats',CRENEAU='à choisir dans l\'agenda';
function v(i){return document.getElementById(i).value;}
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
 var cl=document.getElementById('cl'),classe=cl.options[cl.selectedIndex].text,eleve=MOI?v('pp'):v('pe');
 // Une fiche d'inscription par test, pour que chaque test retrouve le prenom et la classe. Le code de niveau depend du test : on le retrouve par le nom de la classe.
 PACKS.forEach(function(k){var G=window.DIAGS[k],mot=classe.split(/[ ,]/)[0],c=(k===window.PACK)?[classe,v('cl')]:(G.classes.filter(function(x){return x[0].split(/[ ,]/)[0]===mot;})[0]||[classe,null]);
  try{localStorage.setItem('lioris_inscription_'+k,JSON.stringify({parent:v('pp'),email:v('em'),tel:v('tel'),eleve:eleve,niveau:c[1],classe:classe,creneau:CRENEAU,contact:true,qui:MOI?'moi':'enfant',date:new Date().toISOString()}));}catch(e){}});
 try{sessionStorage.setItem('lioris_file',JSON.stringify(SUITE));}catch(e){}
 if(window.CRM)window.CRM.inscription({parent:v('pp'),email:v('em'),tel:v('tel'),eleve:eleve,niveau:v('cl'),classe:classe,creneau:CRENEAU,contact:true,accord:document.getElementById('c1').checked,packs:PACKS,qui:MOI?'moi':'enfant',origine:'site'});
 // Etape 2 : le creneau du rendez-vous, choisi dans l'agenda Cal.com (rien n'est passe dans l'adresse : le parent redonne son nom et son email a Cal.com).
 app.innerHTML='<header class="t-couv"><p class="etiquette">Inscription enregistrée.</p><h1 class="t-titre moyen">Choisissez le créneau du rendez-vous</h1></header>'+
  '<p class="lead">'+(MOI?'Un professeur vous explique vos résultats en visio. ':'Un professeur vous explique les résultats de votre enfant en visio. ')+'Prenez un créneau qui laisse le temps de passer '+(plusieurs?'les tests':'le test')+' avant.</p>'+
  '<iframe class="agenda" title="Choisir le créneau du rendez-vous" src="'+AGENDA+'?theme=light"></iframe>'+
  '<p class="small">L\'agenda ne s\'affiche pas ? <a href="'+AGENDA+'" target="_blank" rel="noopener">Ouvrez-le dans un nouvel onglet</a>. Vous pourrez déplacer ce créneau depuis l\'email de confirmation.</p>'+
  '<p class="t-go"><a class="btn" href="test.html?pack='+window.PACK+'">'+(plusieurs?'Passer au premier test':'Passer au test')+'</a></p>'+
  '<p class="small">Vous pouvez aussi '+(plusieurs?'passer les tests':'passer le test')+' d\'abord et réserver ensuite.</p>';
 window.scrollTo(0,0);});
})();
