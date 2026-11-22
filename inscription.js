// Inscription du parent au diagnostic, squelette. Le diagnostic vient de ?pack=...
(function(){
var D=window.DIAG, L=window.LIO, app=document.getElementById('app');
var h='<p class="brand">Lioris</p><h1>'+L.esc(D.nom)+' : gratuit</h1>'+
 '<p class="lead">Vous inscrivez votre enfant. Il passe le test, environ '+L.esc(D.duree)+'. Un professeur vous présente les résultats en visio et, si c\'est utile, notre pack. Vous êtes libre de ne pas donner suite.</p>'+
 '<form id="f"><label for="pp">Votre prénom</label><input id="pp" type="text" required autocomplete="given-name">'+
 '<label for="em">Votre email</label><input id="em" type="email" required autocomplete="email">'+
 '<label for="tel">Votre téléphone</label><input id="tel" type="tel" autocomplete="tel">'+
 '<label for="pe">Prénom de votre enfant</label><input id="pe" type="text" required>'+
 '<label for="cl">Sa classe</label><select id="cl" required><option value="">Choisir</option>'+D.classes.map(function(c){return '<option value="'+c[1]+'">'+L.esc(c[0])+'</option>';}).join('')+'</select>'+
 '<label for="cr">Créneau pour le rendez-vous de résultats</label><select id="cr" required><option value="">Choisir</option><option>Créneau à brancher sur l\'outil de rendez-vous</option></select>'+
 '<p class="small" style="margin-top:6px">Vous pourrez changer ce créneau à tout moment, depuis l\'email de confirmation.</p>'+
 '<label class="check"><input type="checkbox" id="c1" required><span>Je suis le parent ou le représentant légal de l\'élève, et j\'accepte que ses réponses au test soient utilisées pour préparer le rendez-vous. <span class="todo">Texte et lien vers la politique de confidentialité à valider.</span></span></label>'+
 '<label class="check"><input type="checkbox" id="c2"><span>J\'accepte d\'être contacté par téléphone, email et messagerie au sujet du diagnostic.</span></label>'+
 '<button class="btn" type="submit">Réserver et recevoir le lien du test</button>'+
 '<p class="small" style="margin-top:12px">Vous recevez le lien du test par email, tout de suite. Sans carte bancaire. Aucune obligation.</p></form>';
app.innerHTML=h;
function v(i){return document.getElementById(i).value;}
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();
 var cl=document.getElementById('cl');
 L.ecrire('lioris_inscription',{parent:v('pp'),email:v('em'),tel:v('tel'),eleve:v('pe'),niveau:v('cl'),classe:cl.options[cl.selectedIndex].text,creneau:v('cr'),contact:document.getElementById('c2').checked,date:new Date().toISOString()});
 if(window.CRM)window.CRM.inscription({parent:v('pp'),email:v('em'),tel:v('tel'),eleve:v('pe'),niveau:v('cl'),classe:cl.options[cl.selectedIndex].text,creneau:v('cr'),contact:document.getElementById('c2').checked,accord:document.getElementById('c1').checked,pack:window.PACK,programme:D.titre,origine:'site'});
 var parti=false,go=function(){if(parti)return;parti=true;location.href='test.html?pack='+window.PACK;};
 if(window.CRM&&window.CRM.attente){window.CRM.attente.then(go,go);setTimeout(go,4000);}else go();});
})();
