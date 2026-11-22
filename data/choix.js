// Choisit le diagnostic d'apres ?pack=... dans l'adresse. Par defaut : maths premiere et terminale.
(function(){
 var k=(location.search.match(/pack=([\w-]+)/)||[])[1]||'maths-premiere-terminale';
 window.PACK=(window.DIAGS&&window.DIAGS[k])?k:'maths-premiere-terminale';
 window.DIAG=window.DIAGS[window.PACK];
 window.LIO={
  esc:function(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');},
  // Mise en forme des puissances et indices ecrits en texte dans les fichiers source.
  fmt:function(s){s=window.LIO.esc(s);
   s=s.replace(/\^\(([^)]+)\)/g,'<sup>$1</sup>').replace(/\^(−?[\w]+)/g,'<sup>$1</sup>');
   s=s.replace(/_\(([^)]+)\)/g,'<sub>$1</sub>').replace(/_([\w]+)/g,'<sub>$1</sub>');return s;},
  lire:function(k,d){try{var v=JSON.parse(localStorage.getItem(k+'_'+window.PACK)||'null');return v===null?d:v;}catch(e){return d;}},
  ecrire:function(k,v){try{localStorage.setItem(k+'_'+window.PACK,JSON.stringify(v));}catch(e){}},
  niveau:function(k){var n=window.DIAG.niveaux.filter(function(x){return x[0]===k;})[0];return n?n[1]:k;}
 };
})();
