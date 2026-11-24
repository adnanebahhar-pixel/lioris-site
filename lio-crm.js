// Registre des familles (CRM, etape 1). Aujourd'hui : garde tout dans ce navigateur (localStorage, cle lioris_crm).
// Demain : memes fonctions, branchees sur la base en ligne (voir crm/schema.sql). Les ecrans n'appellent que ces fonctions.
(function(){
 var CLE='lioris_crm';
 function lire(){try{var v=JSON.parse(localStorage.getItem(CLE)||'null');return (v&&v.f)?v:{v:1,f:[]};}catch(e){return {v:1,f:[]};}}
 function ecrire(b){try{localStorage.setItem(CLE,JSON.stringify(b));return true;}catch(e){return false;}}
 function note(f,texte){f.journal=f.journal||[];f.journal.unshift({d:new Date().toISOString(),t:texte});}
 function trouve(b,id){return b.f.filter(function(x){return x.id===id;})[0];}
 // Base en ligne : deux portes seulement pour le public, inscrire et deposer_test (voir crm/schema.sql). Sans cle, on ne fait rien.
 var CFG=window.LIORIS_BASE||{};
 function enLigne(){return !!(CFG.url&&CFG.cle);}
 function rpc(nom,corps){if(!enLigne())return Promise.resolve(null);var h={'Content-Type':'application/json',apikey:CFG.cle};if(CFG.cle.indexOf('sb_')!==0)h.Authorization='Bearer '+CFG.cle;
  return fetch(CFG.url+'/rest/v1/rpc/'+nom,{method:'POST',headers:h,body:JSON.stringify(corps),keepalive:true}).then(function(r){return r.text().then(function(x){if(!r.ok)throw new Error(nom+' : '+x);return x?JSON.parse(x):null;});});}
 window.CRM={
  familles:function(){return lire().f;},
  famille:function(id){return trouve(lire(),id);},
  // Inscription d'un parent : cree la fiche. Renvoie son identifiant.
  // o.packs : la liste des tests choisis (un seul le plus souvent). Une fiche locale par test ; en ligne, une seule famille et un lien de test par matiere.
  inscription:function(o){var b=lire(),packs=o.packs||[o.pack],ids=[],T=window.DIAGS||{};
   packs.forEach(function(k,n){var f={id:'f'+Date.now()+n+Math.floor(Math.random()*1000),parent:o.parent||'',email:o.email||'',tel:o.tel||'',eleve:o.eleve||'',classe:o.classe||'',niveau:o.niveau||'',pack:k||'',programme:(T[k]&&T[k].titre)||o.programme||'',creneau:o.creneau||'',contact:!!o.contact,accord:o.accord!==false,qui:o.qui||'enfant',cree:new Date().toISOString(),etat:'Inscrit',prof:'',rdv:'',test:null,journal:[]};
    note(f,'Inscription'+(o.origine?' ('+o.origine+')':'')+(packs.length>1?', '+packs.length+' tests choisis':''));b.f.unshift(f);ids.push(f.id);});
   ecrire(b);try{sessionStorage.setItem('lioris_crm_id',ids[0]);}catch(e){}
   window.CRM.attente=rpc('inscrire_plusieurs',{p_parent:o.parent||'',p_email:o.email||'',p_telephone:o.tel||'',p_eleve:o.eleve||'',p_classe:o.classe||'',p_cles:packs,p_accord:o.accord!==false,p_contact:!!o.contact,p_pour_soi:o.qui==='moi'}).then(function(j){if(j)ids.forEach(function(id,n){window.CRM.maj(id,{jeton:j[packs[n]]},'Fiche envoyée à la base en ligne');});
     try{var v=JSON.parse(sessionStorage.getItem('lio_v')||'null');if(j&&v&&j[packs[0]])rpc('noter_origine',{p_jeton:j[packs[0]],p_origine:v.o||'',p_page:v.p||''}).catch(function(){});}catch(e){}return j;}).catch(function(e){window.CRM.noter(ids[0],'Envoi à la base en ligne refusé : '+e.message);return null;});
   return ids[0];},
  // Test termine : rattache le resultat a la fiche ouverte dans cette session, sinon a la derniere fiche du meme test sans resultat.
  resultat:function(r){var b=lire(),id=null,f;try{id=sessionStorage.getItem('lioris_crm_id');}catch(e){}
   f=b.f.filter(function(x){return x.pack===r.pack&&!x.test;})[0]||(id&&trouve(b,id));
   if(!f){f={id:'f'+Date.now(),parent:r.parent||'',email:'',tel:'',eleve:r.eleve||'Élève sans inscription',classe:'',niveau:r.niveau||'',pack:r.pack,programme:'',creneau:'',contact:false,accord:false,cree:new Date().toISOString(),etat:'Inscrit',prof:'',rdv:'',test:null,journal:[]};note(f,'Fiche créée par un test passé sans inscription');b.f.unshift(f);}
   f.test=r;if(f.etat==='Inscrit')f.etat='Test passé';note(f,'Test passé');ecrire(b);
   var id2=f.id;window.CRM.depot=f.jeton?rpc('deposer_test',{p_jeton:f.jeton,p_niveau:r.niveau||'',p_reponses:r.reponses||{},p_redaction:!!r.redaction,p_duree_s:r.duree||0}).then(function(){window.CRM.maj(id2,{envoye:true},'Test envoyé à la base en ligne');return true;}).catch(function(e){window.CRM.noter(id2,'Envoi du test refusé : '+e.message);return false;}):Promise.resolve(false);
   return f.id;},
  // Modifie une fiche depuis l'administration et l'ecrit au journal.
  maj:function(id,champs,texte){var b=lire(),f=trouve(b,id);if(!f)return false;Object.keys(champs).forEach(function(k){f[k]=champs[k];});if(texte)note(f,texte);return ecrire(b);},
  noter:function(id,texte){var b=lire(),f=trouve(b,id);if(!f)return false;note(f,texte);return ecrire(b);},
  retirer:function(id){var b=lire();b.f=b.f.filter(function(x){return x.id!==id;});return ecrire(b);},
  enLigne:enLigne,attente:Promise.resolve(null),depot:Promise.resolve(false),
  // Lien recu par email (test.html?pack=...&j=...) : le lien porte le jeton, on retrouve le prenom et la classe sans rien garder dans le navigateur.
  ouvrir:function(jeton){return rpc('ouvrir_test',{p_jeton:jeton});},
  deposer:function(jeton,r){return rpc('deposer_test',{p_jeton:jeton,p_niveau:r.niveau||'',p_reponses:r.reponses||{},p_redaction:!!r.redaction,p_duree_s:r.duree||0}).then(function(){return true;},function(){return false;});},
  // Fin du parcours : une fois tous les tests arrives dans la base en ligne, on ne laisse dans ce navigateur ni l'inscription ni les reponses (ordinateur partage).
  // On n'efface rien tant qu'une fiche n'est pas arrivee, ni le bilan d'organisation, qui n'est pas encore envoye a la base.
  nettoyer:function(){var b=lire();if(!enLigne()||!b.f.length||b.f.some(function(x){return !(x.jeton&&x.envoye);}))return false;
   try{var k=[],i;for(i=0;i<localStorage.length;i++)k.push(localStorage.key(i));
    k.forEach(function(c){if(c.indexOf('lioris_')===0&&c.indexOf('lioris_bilan')!==0&&c!=='lioris_session'&&c!=='lioris_admin_mode')localStorage.removeItem(c);});
    sessionStorage.removeItem('lioris_crm_id');}catch(e){return false;}
   return true;},
  exporter:function(){return JSON.stringify(lire(),null,1);}
 };
})();
