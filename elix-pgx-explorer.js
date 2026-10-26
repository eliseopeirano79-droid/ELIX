// Qualitative one-pathway teaching model. No measured concentration, genotype or dose.
export const PGX_ROLES=Object.freeze([
 {id:'inactivation',label:'Farmaco già attivo',title:'La via inattiva la specie attiva',before:'Farmaco attivo',after:'Prodotto inattivo',active:'Sostanza somministrata'},
 {id:'activation',label:'Profarmaco',title:'La via forma la specie attiva',before:'Precursore',after:'Metabolita attivo',active:'Metabolita formato'}
]);
export const PGX_ACTIVITIES=Object.freeze([{id:'low',label:'Ridotta'},{id:'reference',label:'Riferimento'},{id:'high',label:'Aumentata'}]);
export function pgxState(role,activity){
 const r=PGX_ROLES.find(x=>x.id===role)||PGX_ROLES[0],a=PGX_ACTIVITIES.find(x=>x.id===activity)||PGX_ACTIVITIES[1];
 const direction=a.id==='reference'?0:(a.id==='low'?-1:1)*(r.id==='activation'?1:-1);
 return {...r,activity:a.id,activityLabel:a.label,direction,trend:direction>0?'Può aumentare':direction<0?'Può diminuire':'Condizione di confronto',reason:a.id==='reference'?'È il riferimento del modello: non indica un genotipo o un valore clinico normale.':r.id==='activation'?(direction>0?'La formazione della specie attiva è favorita.':'La formazione della specie attiva è limitata.'):(direction>0?'L’inattivazione della specie attiva è ridotta.':'L’inattivazione della specie attiva è favorita.')};
}
export function pgxScene(role,activity){
 const s=pgxState(role,activity),activeX=s.id==='activation'?292:68;
 const paths=s.activity==='high'?'<path d="M113 112 H238 M113 124 H238"/><path d="M230 104 L241 112 L230 120 M230 116 L241 124 L230 132"/>':`<path d="M113 118 H238" ${s.activity==='low'?'stroke-dasharray="5 9"':''}/><path d="M230 110 L241 118 L230 126"/>`;
 return `<div class="pgx-scene" data-pgx-role="${s.id}" data-pgx-activity="${s.activity}"><figure><svg viewBox="0 0 360 265" role="img" aria-label="${s.title}. Attività ${s.activityLabel.toLowerCase()}. ${s.reason}"><text x="180" y="30">${s.id==='activation'?'BIOATTIVAZIONE':'INATTIVAZIONE'}</text><circle class="pgx-active" cx="${activeX}" cy="118" r="43"/><circle class="pgx-node" cx="68" cy="118" r="32"/><circle class="pgx-node" cx="292" cy="118" r="32"/><text x="68" y="124">A</text><text x="292" y="124">B</text><g class="pgx-arrow">${paths}</g><text class="pgx-caption" x="180" y="85">Via enzimatica</text><text class="pgx-caption" x="180" y="159">${s.activityLabel}</text><text class="pgx-caption" x="68" y="193">${s.before}</text><text class="pgx-caption" x="292" y="193">${s.after}</text><circle class="pgx-key" cx="66" cy="238" r="7"/><text class="pgx-caption" x="204" y="243">Anello = specie attiva</text></svg><figcaption>Una sola via · confronto qualitativo</figcaption></figure><div class="pgx-explanation"><span class="ex-kicker">${s.title}</span><h4>${s.trend}</h4><p class="pgx-result-label">Esposizione alla specie attiva</p><p>${s.reason}</p><dl><div><dt>Specie da seguire</dt><dd>${s.active}</dd></div><div><dt>Confronto</dt><dd>Stesso apporto, altri processi invariati</dd></div></dl></div></div>`;
}
let remembered={role:'inactivation',activity:'reference'};
if(typeof customElements!=='undefined'&&!customElements.get('elix-pgx-explorer'))customElements.define('elix-pgx-explorer',class extends HTMLElement{
 connectedCallback(){
  this.innerHTML=`<div class="pgx-lab"><span class="ex-kicker">Segui la specie attiva</span><h4>Stessa via, conseguenze opposte</h4><fieldset><legend>1 · Che cosa fa la trasformazione?</legend><div class="pgx-controls">${PGX_ROLES.map(r=>`<button type="button" data-pgx-role-button="${r.id}" aria-pressed="false">${r.label}</button>`).join('')}</div></fieldset><fieldset><legend>2 · Come cambia l’attività della via?</legend><div class="pgx-controls">${PGX_ACTIVITIES.map(a=>`<button type="button" data-pgx-activity-button="${a.id}" aria-pressed="false">${a.label}</button>`).join('')}</div></fieldset><div data-pgx-output aria-live="polite" aria-atomic="true"></div><p class="pgx-limits">Le frecce descrivono un passaggio, non una velocità misurata. Nessun calcolo di concentrazione, effetto, genotipo o dose. Vie alternative e destino del metabolita possono cambiare la previsione.</p></div>`;
  const update=()=>{this.querySelectorAll('[data-pgx-role-button]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pgxRoleButton===remembered.role)));this.querySelectorAll('[data-pgx-activity-button]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pgxActivityButton===remembered.activity)));this.querySelector('[data-pgx-output]').innerHTML=pgxScene(remembered.role,remembered.activity);};
  this.querySelectorAll('[data-pgx-role-button]').forEach(b=>b.addEventListener('click',()=>{remembered.role=b.dataset.pgxRoleButton;update();}));
  this.querySelectorAll('[data-pgx-activity-button]').forEach(b=>b.addEventListener('click',()=>{remembered.activity=b.dataset.pgxActivityButton;update();}));
  update();
 }
});
