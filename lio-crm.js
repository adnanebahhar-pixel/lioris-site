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
  inscription:function(o){var b=lire(),f={id:'f'+Date.now()+Math.floor(Math.random()*1000),parent:o.parent||'',email:o.email||'',tel:o.tel||'',eleve:o.eleve||'',classe:o.classe||'',niveau:o.niveau||'',pack:o.pack||'',programme:o.programme||'',creneau:o.creneau||'',contact:!!o.contact,accord:o.accord!==false,cree:new Date().toISOString(),etat:'Inscrit',prof:'',rdv:'',test:null,journal:[]};
   note(f,'Inscription'+(o.origine?' ('+o.origine+')':''));b.f.unshift(f);ecrire(b);try{sessionStorage.setItem('lioris_crm_id',f.id);}catch(e){}
   // Envoi a la base en ligne. Le jeton recu servira a deposer le test. CRM.attente : la page attend sa fin avant de changer d'adresse.
   var id=f.id;window.CRM.attente=rpc('inscrire',{p_parent:f.parent,p_email:f.email,p_telephone:f.tel,p_eleve:f.eleve,p_classe:f.classe,p_cle:f.pack,p_accord:f.accord,p_contact:f.contact}).then(function(j){if(j)window.CRM.maj(id,{jeton:j},'Fiche envoyée à la base en ligne');return j;}).catch(function(e){window.CRM.noter(id,'Envoi à la base en ligne refusé : '+e.message);return null;});
   return f.id;},
  // Test termine : rattache le resultat a la fiche ouverte dans cette session, sinon a la derniere fiche du meme test sans resultat.
  resultat:function(r){var b=lire(),id=null,f;try{id=sessionStorage.getItem('lioris_crm_id');}catch(e){}
   f=(id&&trouve(b,id))||b.f.filter(function(x){return x.pack===r.pack&&!x.test;})[0];
   if(!f){f={id:'f'+Date.now(),parent:r.parent||'',email:'',tel:'',eleve:r.eleve||'Élève sans inscription',classe:'',niveau:r.niveau||'',pack:r.pack,programme:'',creneau:'',contact:false,accord:false,cree:new Date().toISOString(),etat:'Inscrit',prof:'',rdv:'',test:null,journal:[]};note(f,'Fiche créée par un test passé sans inscription');b.f.unshift(f);}
   f.test=r;if(f.etat==='Inscrit')f.etat='Test passé';note(f,'Test passé');ecrire(b);
   var id2=f.id;if(f.jeton)rpc('deposer_test',{p_jeton:f.jeton,p_niveau:r.niveau||'',p_reponses:r.reponses||{},p_redaction:!!r.redaction,p_duree_s:r.duree||0}).then(function(){window.CRM.noter(id2,'Test envoyé à la base en ligne');}).catch(function(e){window.CRM.noter(id2,'Envoi du test refusé : '+e.message);});
   return f.id;},
  // Modifie une fiche depuis l'administration et l'ecrit au journal.
  maj:function(id,champs,texte){var b=lire(),f=trouve(b,id);if(!f)return false;Object.keys(champs).forEach(function(k){f[k]=champs[k];});if(texte)note(f,texte);return ecrire(b);},
  noter:function(id,texte){var b=lire(),f=trouve(b,id);if(!f)return false;note(f,texte);return ecrire(b);},
  retirer:function(id){var b=lire();b.f=b.f.filter(function(x){return x.id!==id;});return ecrire(b);},
  enLigne:enLigne,attente:Promise.resolve(null),
  exporter:function(){return JSON.stringify(lire(),null,1);}
 };
})();
