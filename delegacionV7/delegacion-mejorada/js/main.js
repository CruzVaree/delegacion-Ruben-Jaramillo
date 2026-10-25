(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const b=$('.nav-btn'),n=$('#nav');if(b){const t=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Cerrar menú':'Abrir menú')};
b.onclick=()=>t(!n.classList.contains('open'));addEventListener('keydown',e=>e.key==='Escape'&&t(false));$$('a',n).forEach(a=>a.onclick=()=>t(false))}
// Lightbox
const g=$$('.gal a'),d=$('#lb');if(d&&g.length){let i=0;const img=$('img',d),s=k=>{i=(k+g.length)%g.length;img.src=g[i].href;img.alt=$('img',g[i]).alt};
g.forEach((a,k)=>a.onclick=e=>{e.preventDefault();s(k);d.showModal()});$('.x',d).onclick=()=>d.close();$('.pv',d).onclick=()=>s(i-1);$('.nx',d).onclick=()=>s(i+1);
d.onclick=e=>e.target===d&&d.close();d.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')s(i-1);if(e.key==='ArrowRight')s(i+1)})}
// Filtros de lugares
const P=$$('.place');if(P.length){let f='Todos',q='';const c=$('#count'),run=()=>{let v=0;P.forEach(p=>{const ok=(f==='Todos'||p.dataset.c===f)&&p.textContent.toLowerCase().includes(q);p.hidden=!ok;v+=ok});c.textContent=v?v+' lugares encontrados':'No encontramos lugares con esa búsqueda. Prueba con otra palabra o elige “Todos”.'};
$$('.chip').forEach(x=>x.onclick=()=>{$$('.chip').forEach(y=>y.setAttribute('aria-pressed',y===x));f=x.dataset.f;run()});$('#q').oninput=e=>{q=e.target.value.trim().toLowerCase();run()};run()}
// Índice de historia
const T=$$('.toc a');if(T.length){const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&T.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))),{rootMargin:'-20% 0px -70% 0px'});$$('.chap').forEach(s=>o.observe(s))}
// Mapa (carga diferida)
const m=$('#map');if(m){const go=()=>{const l=document.createElement('link');l.rel='stylesheet';l.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';l.integrity='sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';l.crossOrigin='';document.head.append(l);
const s=document.createElement('script');s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';s.integrity='sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';s.crossOrigin='';
s.onload=()=>{const p=[18.834375617287048,-99.23937601976901],map=L.map('map',{scrollWheelZoom:false}).setView(p,17),
sat=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles &copy; Esri'}),
st=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'});sat.addTo(map);L.control.layers({'Satélite':sat,'Calles':st}).addTo(map);
L.marker(p).addTo(map).bindPopup('<b>Delegación Rubén Jaramillo</b><br>Mariano Matamoros esq. Niño Artillero').openPopup()};document.head.append(s)};
'IntersectionObserver'in window?new IntersectionObserver((e,o)=>e[0].isIntersecting&&(o.disconnect(),go()),{rootMargin:'300px'}).observe(m):go()}})();
