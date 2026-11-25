(function(){window.liorisPret=true;
// chaque annotation de marge se place à la hauteur de ce qu'elle commente
function place(){if(window.innerWidth<=1180)return;Array.prototype.forEach.call(document.querySelectorAll('.annot[data-vers]'),function(a){var p=a.offsetParent,t=(p||document).querySelector(a.getAttribute('data-vers'))||document.querySelector(a.getAttribute('data-vers'));if(!p||!t)return;a.style.top=Math.round(t.getBoundingClientRect().top-p.getBoundingClientRect().top+parseFloat(a.getAttribute('data-part')||0)*t.offsetHeight)+'px';});}
place();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(place);var tp;window.addEventListener('resize',function(){clearTimeout(tp);tp=setTimeout(place,150);});
// longueur réelle de chaque trait, pour que le stylo le trace en entier
Array.prototype.forEach.call(document.querySelectorAll('.trace path'),function(p){try{p.style.setProperty('--l',Math.ceil(p.getTotalLength())+4);}catch(e){}});
// le stylo écrit : au chargement pour le haut de page, à l'arrivée à l'écran ensuite. Une seule fois.
var h=document.querySelector('.stylo-auto');requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.add('stylo');});});
var z=document.querySelectorAll('[data-stylo]');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('stylo');io.unobserve(e.target);}});},{rootMargin:'0px 0px -10% 0px'});Array.prototype.forEach.call(z,function(x){io.observe(x);});}
else{Array.prototype.forEach.call(z,function(x){x.classList.add('stylo');});}
var R=[['Juste.','Le double produit est bien là\u00a0: 2 × 3x × 5 = 30x.',true],
['Double produit oublié.','(a + b)² n’est pas a² + b². Il manque 2ab, ici 30x.',false],
['Double produit compté une fois.','3x × 5 = 15x, mais il apparaît deux fois dans le développement\u00a0: 30x.',false],
['Carré appliqué à x seulement.','(3x)² = 9x², pas 3x². Le 3 est au carré, lui aussi.',false]];
var v=document.querySelector('.verdict'),bs=document.querySelectorAll('.choix button');
Array.prototype.forEach.call(bs,function(b){b.addEventListener('click',function(){
 Array.prototype.forEach.call(bs,function(x){x.setAttribute('aria-pressed','false');var o=x.querySelector('svg');if(o)o.remove();});b.setAttribute('aria-pressed','true');
 b.insertAdjacentHTML('beforeend',R[+b.getAttribute('data-r')][2]?'<svg class="ok" viewBox="0 0 34 34" aria-hidden="true"><path d="M5 18 L14 28 L30 6"/></svg>':'<svg viewBox="0 0 34 34" aria-hidden="true"><path d="M6 6 L28 28"/><path d="M28 6 L6 28"/></svg>');
 var r=R[+b.getAttribute('data-r')];
 v.innerHTML='<p class="nom'+(r[2]?' ok':'')+'"><span class="ecrit2">'+r[0]+'</span></p><p>'+r[1]+'</p>';
});});
var ap=document.querySelector('.apercu');if(ap)ap.addEventListener('click',function(){var o=document.body.classList.toggle('marques');ap.textContent=(o?'Masquer':'Afficher')+' les marques « à confirmer »';});
})();