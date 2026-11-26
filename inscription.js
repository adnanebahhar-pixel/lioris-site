// Inscription du parent au diagnostic, squelette. Le diagnostic vient de ?pack=...
(function(){
var D=window.DIAG, L=window.LIO, app=document.getElementById('app');
var Q=location.search,MOI=/[?&]qui=moi/.test(Q),SUITE=((Q.match(/[?&]suite=([\w,-]+)/)||[])[1]||'').split(',').filter(function(k){return k&&window.DIAGS[k]&&k!==window.PACK;});
var PACKS=[window.PACK].concat(SUITE),NOMS=PACKS.map(function(k){return window.DIAGS[k].titre;});
var plusieurs=PACKS.length>1,dureeTxt=plusieurs?'un par matière':'environ '+L.esc(D.duree);
// Prepa (decision d'ad du 2026-11-26) : on ne prend que certaines classes, matiere par matiere (data/filieres-prepa.js). Le formulaire demande
// la classe precise et refuse proprement, avant toute inscription, une classe hors champ pour l'un des tests choisis.
var P=window.LIO_PREPA,PREPA=!!P&&PACKS.every(function(k){return /-prepa$/.test(k)&&!!P.oui[window.DIAGS[k].matiere];});
function champPrepa(){var o=function(an){return P.classes.filter(function(c){return c[2]===an;}).map(function(c){return '<option value="'+L.esc(c[0])+'">'+L.esc(c[1])+'</option>';}).join('');};
 return '<label for="fp">'+(MOI?'Votre classe':'Sa classe')+'</label><select id="fp" required><option value="">Choisir</option><option value="T">Terminale, '+(MOI?'je vise':'il vise')+' la prépa</option><optgroup label="Première année et ATS">'+o(1)+'</optgroup><optgroup label="Deuxième année">'+o(2)+'</optgroup></select>'+
  '<div id="fv-z" hidden><label for="fv">La classe visée</label><select id="fv"><option value="">Choisir</option>'+o(1)+'</select></div>'+
  '<div id="fm-z" hidden><label for="fm">Le moment de l\'année</label><select id="fm"><option value="debut">Début d\'année (avant la Toussaint)</option><option value="cours">En cours d\'année</option></select></div>'+
  '<p class="t-note" id="fmsg" role="status" aria-live="polite" hidden></p>';}
// Ce que la classe choisie donne : le texte garde avec l'inscription, la filiere, et si chaque test choisi est pris.
function choixPrepa(){var a=v('fp'),vise=a==='T',court=vise?v('fv'):a,c=P.classes.filter(function(x){return x[0]===court;})[0];if(!c)return null;
 var moment=c[2]===1&&!vise?v('fm'):'',avance=(c[2]===2||moment==='cours');
 return {c:c,avance:avance,texte:vise?'Terminale · vise '+c[0]:(c[2]===2?c[0]:c[0]+' · '+(moment==='cours'?'en cours d\'année':'début d\'année')),
  refus:PACKS.filter(function(k){return !P.prise(window.DIAGS[k].matiere,c[3]);}),autres:Object.keys(P.oui).filter(function(m){return P.prise(m,c[3]);})};}
// Le parcours du test : debut (acquis de terminale) ou suite (premier semestre), selon le moment. Un test a un seul parcours : celui-la.
function niveauPrepa(G,avance){return G.classes[avance?G.classes.length-1:0][1];}
function majPrepa(){var a=v('fp'),ch=choixPrepa(),m=document.getElementById('fmsg'),b=document.querySelector('#f button[type=submit]');
 document.getElementById('fv-z').hidden=a!=='T';document.getElementById('fv').required=a==='T';
 var deux=PACKS.some(function(k){var G=window.DIAGS[k];return niveauPrepa(G,false)!==niveauPrepa(G,true);});
 document.getElementById('fm-z').hidden=!(deux&&ch&&ch.c[2]===1&&a!=='T');
 if(ch&&ch.refus.length){var noms=ch.refus.map(function(k){return P.noms[window.DIAGS[k].matiere];}),pris=ch.autres.filter(function(x){return noms.indexOf(x)<0;});
  m.innerHTML='Nous ne donnons pas de cours de '+L.esc(noms.join(' ni de '))+' en '+L.esc(ch.c[1])+'. '+(pris.length?'Dans cette classe, nous prenons : '+pris.map(function(x){return '<a href="inscription.html?pack='+x+'-prepa'+(MOI?'&qui=moi':'')+'">'+L.esc(P.noms[x])+'</a>';}).join(', ')+'.':'Nous ne prenons pas cette classe pour l\'instant.');
  m.hidden=false;b.disabled=true;}
 else{m.hidden=true;m.textContent='';b.disabled=false;}}
var h='<header class="t-couv"><p class="etiquette">Gratuit. Sans carte bancaire. Aucune obligation.</p><h1 class="t-titre">'+(plusieurs?'Vos '+PACKS.length+' tests':L.esc(D.titre))+'</h1></header>'+
 (plusieurs?'<p class="t-note" style="margin:0 0 32px">'+NOMS.map(L.esc).join(' · ')+'</p>':'')+
 '<p class="lead">'+(MOI?'Vous passez '+(plusieurs?'les tests, ':'le test, ')+dureeTxt+'. Vous retrouvez la carte des erreurs sur votre page personnelle. Un professeur vous l\'explique en visio et, si c\'est utile, vous propose un programme. Vous êtes libre de ne pas donner suite.'
   :'Vous inscrivez votre enfant. Il passe '+(plusieurs?'les tests, ':'le test, ')+dureeTxt+'. Vous retrouvez la carte des erreurs sur votre page personnelle. Un professeur vous l\'explique en visio et, si c\'est utile, vous propose un programme. Vous êtes libre de ne pas donner suite.')+'</p>'+
 '<form id="f" class="t-form"><label for="pp">Votre prénom</label><input id="pp" type="text" required autocomplete="given-name" maxlength="40" pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ \'’.\\-]{0,39}" title="Des lettres seulement, 40 au plus">'+
 '<label for="em">Votre email</label><input id="em" type="email" required autocomplete="email">'+
 '<label for="tel">Votre téléphone</label><input id="tel" type="tel" autocomplete="tel" maxlength="20" pattern="[0-9+ ().\\-]{6,20}" title="Des chiffres, 6 à 20 caractères">'+
 (MOI?'':'<label for="pe">Prénom de votre enfant</label><input id="pe" type="text" required maxlength="40" pattern="[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ \'’.\\-]{0,39}" title="Des lettres seulement, 40 au plus">')+
 (PREPA?champPrepa():'<label for="cl">'+(MOI?'Votre classe':'Sa classe')+'</label><select id="cl" required><option value="">Choisir</option>'+D.classes.map(function(c){return '<option value="'+c[1]+'">'+L.esc(c[0])+'</option>';}).join('')+'</select>')+
 '<label class="check"><input type="checkbox" id="c1" required><span>'+(MOI?'J\'ai 18 ans ou plus, et j\'accepte que mes réponses soient utilisées pour préparer le rendez-vous. Si vous avez moins de 18 ans, c\'est à votre parent de remplir ce formulaire. ':'Je suis le parent ou le représentant légal de l\'élève, et j\'accepte que ses réponses soient utilisées pour préparer le rendez-vous. ')+'<a href="confidentialite.html" target="_blank" rel="noopener">Lire la politique de confidentialité</a>.</span></label>'+
 '<p class="small" style="margin-top:10px">Nous vous recontactons par email, téléphone ou messagerie au sujet '+(plusieurs?'de ces tests':'de ce test')+'. Vous pouvez demander l\'arrêt à tout moment à contact@lioris.fr.</p>'+
 '<p class="t-go"><button class="btn" type="submit">Continuer : choisir le créneau</button></p>'+
 '<p class="small" style="margin-top:12px">Étape suivante : le créneau du rendez-vous, puis '+(plusieurs?'les tests':'le test')+'. Sans carte bancaire. Aucune obligation.</p></form>';
app.innerHTML=h;
var AGENDA='https://cal.com/lioris/rendez-vous-de-resultats',CRENEAU='à choisir dans l\'agenda';
function v(i){var e=document.getElementById(i);return e?e.value:'';}
if(PREPA){['fp','fv','fm'].forEach(function(i){document.getElementById(i).addEventListener('change',majPrepa);});}
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
 var CH=PREPA?choixPrepa():null;if(PREPA&&(!CH||CH.refus.length)){majPrepa();return;}
 var cl=document.getElementById('cl'),classe=PREPA?CH.texte:cl.options[cl.selectedIndex].text,eleve=MOI?v('pp'):v('pe'),nivP=PREPA?niveauPrepa(D,CH.avance):v('cl');
 // Une fiche d'inscription par test, pour que chaque test retrouve le prenom et la classe. Le code de niveau depend du test : on le retrouve par le nom de la classe.
 PACKS.forEach(function(k){var G=window.DIAGS[k],mot=classe.split(/[ ,]/)[0],c=PREPA?[classe,niveauPrepa(G,CH.avance)]:(k===window.PACK)?[classe,v('cl')]:(G.classes.filter(function(x){return x[0]===classe;})[0]||G.classes.filter(function(x){return x[0].split(/[ ,]/)[0]===mot;})[0]||[classe,null]);
  try{localStorage.setItem('lioris_inscription_'+k,JSON.stringify({parent:v('pp'),email:v('em'),tel:v('tel'),eleve:eleve,niveau:c[1],classe:classe,creneau:CRENEAU,contact:true,qui:MOI?'moi':'enfant',date:new Date().toISOString()}));}catch(e){}});
 try{sessionStorage.setItem('lioris_file',JSON.stringify(SUITE));}catch(e){}
 if(window.CRM)window.CRM.inscription({parent:v('pp'),email:v('em'),tel:v('tel'),eleve:eleve,niveau:nivP,classe:classe,creneau:CRENEAU,contact:true,accord:document.getElementById('c1').checked,packs:PACKS,qui:MOI?'moi':'enfant',origine:'site'});
 // Etape 2 : le creneau du rendez-vous, choisi dans l'agenda Cal.com (rien n'est passe dans l'adresse : le parent redonne son nom et son email a Cal.com).
 app.innerHTML='<header class="t-couv"><p class="etiquette">Inscription enregistrée.</p><h1 class="t-titre moyen">Choisissez le créneau du rendez-vous</h1></header>'+
  '<p class="lead">'+(MOI?'Un professeur vous explique vos résultats en visio. ':'Un professeur vous explique les résultats de votre enfant en visio. ')+'Prenez un créneau qui laisse le temps de passer '+(plusieurs?'les tests':'le test')+' avant.</p>'+
  '<iframe class="agenda" title="Choisir le créneau du rendez-vous" src="'+AGENDA+'?theme=light"></iframe>'+
  '<p class="small">L\'agenda ne s\'affiche pas ? <a href="'+AGENDA+'" target="_blank" rel="noopener">Ouvrez-le dans un nouvel onglet</a>. Vous pourrez déplacer ce créneau depuis l\'email de confirmation.</p>'+
  '<p class="t-go"><a class="btn" href="test.html?pack='+window.PACK+'">'+(plusieurs?'Passer au premier test':'Passer au test')+'</a></p>'+
  '<p class="small">Vous pouvez aussi '+(plusieurs?'passer les tests':'passer le test')+' d\'abord et réserver ensuite.</p>';
 window.scrollTo(0,0);});
})();
