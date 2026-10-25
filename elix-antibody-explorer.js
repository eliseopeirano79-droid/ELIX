// Original schematic comparison, not molecular coordinates or a potency simulator.
export const ANTIBODY_FORMATS = Object.freeze([
 {id:'igg',label:'IgG',title:'Una specificità, due siti',recognition:'Due Fab',fc:'Presente',extra:'Nessun carico',text:'I due bracci della IgG convenzionale riconoscono la stessa specificità. La Fc può contribuire al riciclo e alle funzioni effettrici; non dimostra che ogni meccanismo sia attivo in ogni prodotto.'},
 {id:'fab',label:'Fab + PEG',title:'Riconoscimento senza Fc',recognition:'Un Fab′',fc:'Assente',extra:'PEG',text:'Il frammento conserva un sito di riconoscimento. La PEGilazione può prolungarne la permanenza senza aggiungere una Fc. Il disegno non assegna una durata né una dose.'},
 {id:'fusion',label:'Recettore–Fc',title:'Il ligando incontra un recettore solubile',recognition:'Domini recettoriali',fc:'Presente',extra:'Fusione proteica',text:'Le estremità sono regioni di un recettore, non Fab. La fusione con Fc può favorire dimerizzazione e permanenza. Non tutti i recettori solubili hanno un effetto inibitorio.'},
 {id:'bispecific',label:'Bispecifico',title:'Due specificità nello stesso costrutto',recognition:'Due scFv differenti',fc:'Assente in questo formato',extra:'Collegamento tra partner',text:'Questo modello a frammenti rappresenta un formato possibile. Altri bispecifici hanno una Fc e valenze diverse. Riconoscere due partner non implica sempre reclutare un linfocita T.'},
 {id:'adc',label:'Coniugato ADC',title:'Riconoscimento e carico sono due componenti',recognition:'Fab dell’anticorpo',fc:'Presente nel modello',extra:'Carico farmacologico',text:'Il collegamento e il carico aggiungono proprietà all’anticorpo. Internalizzazione e processamento contano. I due simboli sono illustrativi: non indicano un rapporto farmaco–anticorpo misurato.'}
]);
export const antibodyFormat=id=>ANTIBODY_FORMATS.find(f=>f.id===id)||ANTIBODY_FORMATS[0];
function diagram(id){
 const fc='<path class="ab-backbone" d="M160 170 L160 260 M190 170 L190 260"/><text x="175" y="303">Fc</text>';
 const arms='<path class="ab-backbone" d="M160 180 L94 108 L62 68 M190 180 L256 108 L288 68"/><path class="ab-light" d="M72 128 L40 88 M278 128 L310 88"/>';
 const tips='<circle class="ab-tip" cx="61" cy="66" r="13"/><circle class="ab-tip" cx="289" cy="66" r="13"/>';
 const paths={
  igg:arms+tips+fc+'<text x="65" y="36">Fab</text><text x="285" y="36">Fab</text>',
  fab:'<path class="ab-backbone" d="M126 140 L94 94"/><path class="ab-light" d="M148 122 L116 76"/><circle class="ab-tip" cx="100" cy="80" r="13"/><path class="ab-peg" d="M137 136 C220 90 180 210 250 180 S300 240 240 245 S240 300 292 282"/><text x="84" y="48">Fab′</text><text x="277" y="322">PEG</text>',
  fusion:fc+'<path class="ab-backbone" d="M160 180 L95 126 M190 180 L255 126"/><path class="ab-domain" d="M57 70 Q94 35 132 70 L132 116 Q94 154 57 116 Z M218 70 Q255 35 293 70 L293 116 Q255 154 218 116 Z"/><text x="175" y="25">Domini recettoriali</text>',
  bispecific:'<path class="ab-peg" d="M137 158 Q175 103 215 158"/><ellipse class="ab-domain" cx="95" cy="160" rx="54" ry="73"/><ellipse class="ab-second" cx="255" cy="160" rx="54" ry="73"/><text x="95" y="165">scFv A</text><text x="255" y="165">scFv B</text><text x="175" y="286">Due specificità</text>',
  adc:arms+tips+fc+'<path class="ab-link" d="M160 208 L96 236 M190 208 L254 236"/><path class="ab-payload" d="M96 220 L112 236 L96 252 L80 236 Z M254 220 L270 236 L254 252 L238 236 Z"/><text x="65" y="36">Fab</text><text x="285" y="36">Fab</text><text x="175" y="335">◆ Carico (simbolico)</text>'
 };
 return `<svg viewBox="0 0 350 350" role="img" aria-label="Schema originale: ${antibodyFormat(id).label}">${paths[id]}</svg>`;
}
export function antibodyScene(id){
 const f=antibodyFormat(id);
 return `<div class="ab-layout"><figure>${diagram(f.id)}<figcaption>Architettura schematica · non in scala</figcaption></figure><div class="ab-explanation"><h4>${f.title}</h4><p>${f.text}</p><dl><div><dt>Riconoscimento</dt><dd>${f.recognition}</dd></div><div><dt>Regione Fc</dt><dd>${f.fc}</dd></div><div><dt>Elemento distintivo</dt><dd>${f.extra}</dd></div></dl></div></div>`;
}
let lastFormat='igg';
if(typeof customElements!=='undefined'&&!customElements.get('elix-antibody-explorer'))customElements.define('elix-antibody-explorer',class extends HTMLElement{
 connectedCallback(){
  this.innerHTML=`<div class="ab-lab"><span class="ex-kicker">Struttura e funzione</span><h4>Cambia formato, segui le differenze</h4><div class="ab-controls" role="group" aria-label="Formato della proteina">${ANTIBODY_FORMATS.map((f,i)=>`<button type="button" data-antibody-format="${f.id}" aria-pressed="${i===0}">${f.label}</button>`).join('')}</div><div data-antibody-scene aria-live="polite" aria-atomic="true">${antibodyScene('igg')}</div><p class="ab-limits">Modelli qualitativi: nessun confronto di potenza, efficacia, dose o sicurezza. Colori e geometrie servono a distinguere le parti.</p></div>`;
  const update=id=>{lastFormat=antibodyFormat(id).id;this.querySelectorAll('[data-antibody-format]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.antibodyFormat===lastFormat)));this.querySelector('[data-antibody-scene]').innerHTML=antibodyScene(lastFormat);};
  this.querySelectorAll('[data-antibody-format]').forEach(b=>b.addEventListener('click',()=>update(b.dataset.antibodyFormat)));
  update(lastFormat);
 }
});
