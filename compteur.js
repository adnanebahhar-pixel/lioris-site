// Mesure d'audience maison (2026-11-24). Envoie a notre base un simple +1 : la page, le site d'ou vient la visite, le type d'appareil.
// Aucun cookie, aucun identifiant de visiteur, aucune adresse IP gardee, rien envoye a un tiers. La base ne garde que des totaux par jour.
// Une note dans la memoire de l'onglet (effacee a sa fermeture) evite de compter deux fois la meme visite.
(function(){try{
 var C=window.LIORIS_BASE||{};if(!C.url||!C.cle||navigator.webdriver||/bot|crawl|spider|headless|preview|lighthouse/i.test(navigator.userAgent))return;
 if(!/(^|\.)lioris\.fr$/.test(location.hostname))return;
 var page=(location.pathname.split('/').pop()||'index.html').toLowerCase(),v=null,neuve=false;
 try{v=JSON.parse(sessionStorage.getItem('lio_v')||'null');}catch(e){}
 if(!v){neuve=true;var o='',u=/[?&]utm_source=([^&#]+)/.exec(location.search);
  if(u)o=decodeURIComponent(u[1]);else if(document.referrer){try{o=new URL(document.referrer).hostname;}catch(e){}}
  o=String(o).toLowerCase().replace(/^www\./,'').replace(/[^a-z0-9.-]/g,'').slice(0,58);if(/(^|\.)lioris\.fr$/.test(o))o='';
  v={o:o,p:page};try{sessionStorage.setItem('lio_v',JSON.stringify(v));}catch(e){}}
 var w=window.innerWidth||0,h={'Content-Type':'application/json',apikey:C.cle};if(C.cle.indexOf('sb_')!==0)h.Authorization='Bearer '+C.cle;
 fetch(C.url+'/rest/v1/rpc/compter',{method:'POST',headers:h,keepalive:true,body:JSON.stringify({p_page:page,p_origine:v.o,p_appareil:w<700?'telephone':w<1100?'tablette':'ordinateur',p_nouvelle:neuve})}).catch(function(){});
}catch(e){}})();
