import './elix-opioid-explorer.js';
import './elix-antidepressant-explorer.js';
import './elix-bioequivalence-explorer.js';
import './elix-transport-explorer.js';
import './elix-pgx-explorer.js';
import './elix-antibody-explorer.js';
import './elix-rtk-explorer.js';
// Render only structured, escaped educational content. No textbook assets are embedded.
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const sectionText=s=>s.text.split(/\n\n+/).map(p=>`<p>${esc(p)}</p>`).join('');
export function renderTheorySection(s,i){
 return `<section id="part-${i}" data-section="${esc(s.id||i)}"><h3 tabindex="-1">${esc(s.title)}</h3>${sectionText(s)}${s.formula?`<div class="ex-formula">${esc(s.formula)}</div>`:''}${s.lab?'<elix-binding-explorer></elix-binding-explorer>':''}${s.opioidLab?'<elix-opioid-explorer></elix-opioid-explorer>':''}${s.antidepressantLab?'<elix-antidepressant-explorer></elix-antidepressant-explorer>':''}${s.bioequivalenceLab?'<elix-bioequivalence-explorer></elix-bioequivalence-explorer>':''}${s.transportLab?'<elix-transport-explorer></elix-transport-explorer>':''}${s.pgxLab?'<elix-pgx-explorer></elix-pgx-explorer>':''}${s.antibodyLab?'<elix-antibody-explorer></elix-antibody-explorer>':''}${s.rtkLab?'<elix-rtk-explorer></elix-rtk-explorer>':''}${s.refs?.length?`<div class="ex-source-links" aria-label="Fonti della sezione">Fonti: ${s.refs.map(id=>`<a href="#source-${esc(id)}" data-theory-source="${esc(id)}">${esc(id)}</a>`).join(' · ')}</div>`:''}</section>`;
}
const readingPath=c=>/^\.\/data\/[a-z0-9-]+-reading\.json$/.test(c.readingManifest||'')?c.readingManifest:null;
export const theoryReviewLabel=c=>c.reviewStatus==='revisione_editoriale_mirata_eseguita_non_validazione_clinica'?'Stesura estesa · controllo editoriale mirato · revisione clinica non completata':c.reviewStatus||'Sintesi introduttiva · revisione specialistica non completata';
export function renderTheoryRelated(c,chapters){
 const related=(c.relatedExistingChapterIds||[]).map(id=>chapters.find(x=>x.id===id)).filter(Boolean);
 return related.length?`<section class="ex-theory-related"><h3>Continua il percorso</h3>${related.map(x=>`<a href="#/textbook/${esc(x.id)}">${esc(x.title)} →</a>`).join('')}</section>`:'';
}
export function renderTheoryExtras(c){
 return `${c.moleculeLinks?.length?`<section class="ex-theory-molecules"><h3>Ritrova i farmaci nel catalogo</h3><p>Identità già presenti: questi collegamenti non aggiungono nuove schede o profili farmacocinetici.</p>${c.moleculeLinks.filter(m=>/^CHEMBL[0-9]+$/.test(m.id)).map(m=>`<a href="#/molecule/${esc(m.id)}">${esc(m.label)} →</a>`).join('')}</section>`:''}${c.checks?.length?`<section class="ex-selfcheck"><h3>Ragiona prima di aprire la spiegazione</h3>${c.checks.map(q=>`<details><summary>${esc(q.question)}</summary><p>${esc(q.answer)}</p></details>`).join('')}</section>`:''}${c.references?.length?`<section class="ex-reading-sources"><h3>Fonti, letture e parti ancora mancanti</h3><p>${esc(c.coverage)}</p>${c.references.map(r=>`<div class="ex-source-record" id="source-${esc(r.id)}" tabindex="-1"><h4>${esc(r.id)} · ${esc(r.title)}</h4><p>${esc(r.detail)}</p>${r.url?`<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Apri la fonte ufficiale ↗</a>`:''}</div>`).join('')}${readingPath(c)?`<p>Registro dettagliato: <a data-reading-manifest href="${esc(readingPath(c))}" target="_blank" rel="noopener">pagine consultate e limiti</a>. Nessun PDF o figura dei testi viene ripubblicato.</p>`:''}</section>`:''}`;
}
export function bindingFraction(ratio){return ratio/(1+ratio);}
let rememberedRatio=1;
export function bindingScene(ratio){
 const f=bindingFraction(ratio),percent=(100*f).toLocaleString('it-IT',{maximumFractionDigits:1});
 const path=Array.from({length:101},(_,i)=>{const x=i/10;return `${i?'L':'M'}${45+x*43},${180-140*bindingFraction(x)}`;}).join(' ');
 return `<div class="ex-binding-result"><strong>${percent}%</strong><span>dei siti occupati · risposta non calcolata</span></div><svg viewBox="0 0 500 230" role="img" aria-label="Curva teorica di occupazione: ${percent} per cento a concentrazione ${ratio} volte Kd"><path d="M45 35 V180 H475" fill="none" stroke="currentColor"/><text x="12" y="31">100%</text><text x="15" y="184">0</text><text x="40" y="201">0</text><text x="460" y="201">10</text><text x="185" y="224">Concentrazione libera / Kd</text><path d="${path}" fill="none" stroke="var(--accent)" stroke-width="3"/><path d="M${45+ratio*43} 180 V${180-f*140} H45" fill="none" stroke="currentColor" stroke-dasharray="4 4"/><circle cx="${45+ratio*43}" cy="${180-f*140}" r="6" fill="var(--accent)" stroke="var(--text)" stroke-width="2"/></svg>`;
}
if(typeof customElements!=='undefined'&&!customElements.get('elix-binding-explorer')){
 customElements.define('elix-binding-explorer',class extends HTMLElement{
  connectedCallback(){
   this.innerHTML=`<div class="ex-binding"><span class="ex-kicker">Prova il modello</span><h4>Occupazione non significa effetto</h4><label>Concentrazione libera rispetto a Kd <output data-binding-ratio>${rememberedRatio.toLocaleString('it-IT')} × Kd</output><input type="range" min="0" max="10" step="0.1" value="${rememberedRatio}" aria-label="Concentrazione libera divisa per Kd"></label><div class="ex-binding-presets">${[0,1,9].map(n=>`<button type="button" data-binding-preset="${n}">${n} × Kd</button>`).join('')}</div><div data-binding-scene aria-live="polite">${bindingScene(rememberedRatio)}</div><p>Un solo tipo di sito, legame reversibile 1:1, equilibrio e nessun competitore. Valori astratti: nessuna dose, risposta o previsione per un paziente.</p></div>`;
   const update=n=>{rememberedRatio=Math.max(0,Math.min(10,n));this.querySelector('input').value=rememberedRatio;this.querySelector('output').textContent=rememberedRatio.toLocaleString('it-IT')+' × Kd';this.querySelector('[data-binding-scene]').innerHTML=bindingScene(rememberedRatio);};
   this.querySelector('input').addEventListener('input',e=>update(Number(e.target.value)));
   this.querySelectorAll('[data-binding-preset]').forEach(b=>b.addEventListener('click',()=>update(Number(b.dataset.bindingPreset))));
  }
 });
}
