const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-header nav');
button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button?.setAttribute('aria-expanded','false');}));
const size=document.querySelector('#pet-size');
const extras=[...document.querySelectorAll('.calc-options input[type="checkbox"]')];
const total=document.querySelector('#calc-price');
const note=document.querySelector('#calc-note');
function calculate(){const base=Number(size?.value||0);const selected=extras.filter(x=>x.checked);const sum=base+selected.reduce((n,x)=>n+Number(x.value),0);if(total)total.textContent=new Intl.NumberFormat('ru-RU').format(sum)+' ₽';if(note)note.textContent=selected.length?`Базовый комплекс + ${selected.length} доп. ${selected.length===1?'процедура':'процедуры'}`:'Базовый комплекс включён';}
size?.addEventListener('change',calculate);extras.forEach(x=>x.addEventListener('change',calculate));
