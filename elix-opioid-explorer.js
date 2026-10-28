// Original qualitative diagrams: locations and signs of modulation, not dose-response curves.
export const OPIOID_STATES=Object.freeze([
 {id:'gio',label:'Recettore · Gi/o',site:'Membrana cellulare',title:'Tre vie in parallelo',action:'Il recettore attiva Gi/o: Gαi riduce l’adenilato ciclasi; Gβγ può modulare canali del calcio e del potassio.',meaning:'Il canale è un effettore distinto dal recettore. Non ogni effetto ionico richiede di passare prima attraverso il cAMP.',transmitter:null,releaseReduced:false,excitabilityReduced:false,outputDisinhibited:false},
 {id:'terminale',label:'Terminale · Ca²⁺',site:'Corno dorsale · fibra sensitiva',title:'Meno calcio, meno rilascio',action:'Nel terminale presinaptico, la modulazione dei canali del calcio può ridurre la liberazione di glutammato e neuropeptidi.',meaning:'Il trasmettitore può essere ancora contenuto nelle vescicole: quantità presente e quantità liberata non sono la stessa cosa.',transmitter:'glutammato e neuropeptidi',releaseReduced:true,excitabilityReduced:false,outputDisinhibited:false},
 {id:'postsinapsi',label:'Cellula · K⁺',site:'Corno dorsale · cellula ricevente',title:'Una cellula meno eccitabile',action:'L’aumento di conduttanza al potassio può iperpolarizzare la cellula postsinaptica e ridurne l’eccitabilità.',meaning:'Qui cambia la risposta della cellula ricevente. Lo schema non attribuisce a questo passaggio una riduzione del rilascio presinaptico.',transmitter:null,releaseReduced:false,excitabilityReduced:true,outputDisinhibited:false},
 {id:'disinibizione',label:'Circuito · GABA',site:'Circuito di controllo discendente',title:'Inibire il freno',action:'Ridurre il rilascio di GABA da un interneurone inibitorio può disinibire il neurone di uscita che esso controllava.',meaning:'La conseguenza dipende dal circuito. Il recettore resta accoppiato a Gi/o: una maggiore attività a valle non implica attivazione di Gs.',transmitter:'GABA',releaseReduced:true,excitabilityReduced:false,outputDisinhibited:true}
]);
export const opioidState=id=>OPIOID_STATES.find(s=>s.id===id)||OPIOID_STATES[0];
const cell=(x,y,w,h)=>`<rect class="op-cell" x="${x}" y="${y}" width="${w}" height="${h}" rx="22"/>`;
const label=(x,y,t,small=false)=>`<text class="${small?'op-small':''}" x="${x}" y="${y}">${t}</text>`;
const node=(x,y,w,t)=>`<rect class="op-node" x="${x}" y="${y}" width="${w}" height="38" rx="12"/>${label(x+w/2,y+24,t)}`;
const arrow=(x,y,end,accent=false)=>`<path class="op-arrow ${accent?'op-active':''}" d="M${x} ${y} V${end} m-5 -7 l5 7 5 -7"/>`;
const receptor=(x,y)=>`<path class="op-receptor" d="M${x-18} ${y-12} V${y+8} Q${x} ${y+30} ${x+18} ${y+8} V${y-12}"/><circle class="op-ligand" cx="${x}" cy="${y-24}" r="7"/>`;
function drawing(s){
 if(s.id==='gio')return `${cell(12,100,336,290)}${label(180,40,'Agonista → recettore')}${receptor(180,100)}${label(180,154,'Gi/o')}${arrow(180,164,195,true)}
 <path class="op-arrow" d="M180 194 H90 V219 M180 194 H270 V219"/>${node(35,222,110,'Gαi')}${node(215,222,110,'Gβγ')}${arrow(90,269,300)}${arrow(270,269,300)}
 ${label(90,324,'Ad. ciclasi ↓')}${label(90,349,'cAMP ↓')}${label(270,324,'Ca²⁺ ↓')}${label(270,349,'Conduttanza K⁺ ↑')}${label(180,414,'Effettori diversi · vie parallele',true)}`;
 if(s.id==='terminale')return `${cell(12,35,336,175)}${label(180,65,'Terminale sensitivo')}${receptor(73,130)}${label(73,181,'Gi/o',true)}${node(228,110,100,'Canale Ca²⁺')}
 <path class="op-arrow op-active" d="M100 140 H212 m0 -9 v18"/>${label(277,174,'Ingresso ↓',true)}<circle class="op-vesicle" cx="180" cy="178" r="17"/><circle class="op-ligand" cx="180" cy="178" r="4"/>
 ${arrow(180,215,270,true)}${label(180,295,'Rilascio ↓')}${label(180,317,'Glutammato e neuropeptidi',true)}${cell(12,347,336,68)}${label(180,377,'Cellula ricevente')}${label(180,400,'Trasmissione eccitatoria attenuata',true)}`;
 if(s.id==='postsinapsi')return `${label(180,40,'Spazio extracellulare')}${cell(12,137,336,265)}${node(230,104,100,'Canale K⁺')}${receptor(80,137)}${label(80,190,'Gi/o',true)}
 <path class="op-arrow op-active" d="M108 167 H280 V143 M280 102 V60 m-5 7 l5 -7 5 7"/>${label(280,92,'K⁺',true)}${label(180,238,'Conduttanza K⁺ ↑')}${arrow(180,251,286,true)}${label(180,315,'Iperpolarizzazione possibile')}${label(180,343,'Eccitabilità ↓')}${label(180,380,'Cellula postsinaptica',true)}`;
 return `${cell(12,35,336,118)}${label(180,64,'Interneurone GABAergico')}${receptor(73,117)}${label(200,112,'Gi/o → rilascio ↓',true)}
 <path class="op-arrow op-active op-dashed" d="M180 163 V229 m-17 0 h34"/>${label(270,199,'GABA ↓')}${label(180,253,'Freno ridotto',true)}${cell(12,273,336,69)}${label(180,302,'Neurone di uscita')}${label(180,326,'Disinibito',true)}${arrow(180,350,382,true)}${label(180,410,'Controllo discendente modulato',true)}`;
}
export function opioidScene(id){
 const s=opioidState(id);
 return `<div class="op-scene" data-op-state="${s.id}"><figure><svg viewBox="0 0 360 435" role="img" aria-label="${s.site}. ${s.action}">${drawing(s)}</svg><figcaption>Verde: passaggio selezionato · ↓ diminuzione · ↑ aumento.<br>Barra: inibizione. Frecce qualitative, distanze non in scala.</figcaption></figure><div class="op-explanation"><span class="ex-kicker">${s.site}</span><h4>${s.title}</h4><p>${s.action}</p><p>${s.meaning}</p><div class="op-takeaway">Quale cellula esprime il recettore?<br>Che cosa faceva prima di essere inibita?</div></div></div>`;
}
let remembered='gio';
if(typeof customElements!=='undefined'&&!customElements.get('elix-opioid-explorer'))customElements.define('elix-opioid-explorer',class extends HTMLElement{
 connectedCallback(){
  this.innerHTML=`<div class="op-lab"><span class="ex-kicker">Dal recettore al circuito</span><h4>Inibire una cellula, modulare una rete</h4><fieldset><legend>Scegli il passaggio da seguire</legend><div class="op-controls">${OPIOID_STATES.map(s=>`<button type="button" data-op-button="${s.id}" aria-pressed="false">${s.label}</button>`).join('')}</div></fieldset><div data-op-output aria-live="polite" aria-atomic="true"></div><p class="op-limits">Quattro viste originali e qualitative. Ogni vista isola una sede; non disegna l’intera rete. Nessuna dose, risposta analgesica o sicurezza respiratoria viene calcolata. Meccanismi e fonti sono discussi nel capitolo.</p></div>`;
  const update=()=>{this.querySelectorAll('[data-op-button]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.opButton===remembered)));this.querySelector('[data-op-output]').innerHTML=opioidScene(remembered);};
  this.querySelectorAll('[data-op-button]').forEach(b=>b.addEventListener('click',()=>{remembered=b.dataset.opButton;update();}));update();
 }
});
