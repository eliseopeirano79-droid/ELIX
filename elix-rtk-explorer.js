// Qualitative teaching model: one isolated RTK–RAS–MAPK branch, not a clinical predictor.
export const RTK_MODES = Object.freeze([
 {id:'rest',label:'Senza stimolo',ligand:false,externalBlock:false,kinaseBlock:false,rasAutonomous:false,title:'Il circuito attende un ingresso',description:'Senza ligando, in questo modello il recettore non recluta il sistema GRB2/SOS. RAS resta prevalentemente legato a GDP e la cascata non riceve il segnale.'},
 {id:'ligand',label:'Arriva il ligando',ligand:true,externalBlock:false,kinaseBlock:false,rasAutonomous:false,title:'Dal riconoscimento alla cascata',description:'Il ligando favorisce una configurazione attiva. La chinasi crea siti di reclutamento, GRB2/SOS facilita lo scambio su RAS e il ramo RAF–MEK–ERK riceve il segnale.'},
 {id:'external',label:'Blocco esterno',ligand:true,externalBlock:true,kinaseBlock:false,rasAutonomous:false,title:'L’ingresso è interrotto',description:'Il blocco esterno è idealizzato come completo impedimento dell’attivazione da ligando. Non rappresenta il meccanismo di ogni anticorpo, in particolare non descrive trastuzumab come competitore di EGF.'},
 {id:'kinase',label:'Blocco della chinasi',ligand:true,externalBlock:false,kinaseBlock:true,rasAutonomous:false,title:'Il legame esterno non basta',description:'Il ligando è presente, ma la tappa catalitica intracellulare è bloccata. In questo singolo ramo non si attiva il reclutamento necessario a trasmettere il segnale a RAS.'},
 {id:'bypass',label:'RAS autonomo',ligand:true,externalBlock:false,kinaseBlock:true,rasAutonomous:true,title:'Il segnale riparte a valle',description:'Il recettore resta bloccato. Per ipotesi RAS mantiene un ingresso autonomo: RAF–MEK–ERK rimane attivo nel modello. Questo non predice la risposta di una specifica variante o di un’associazione terapeutica.'}
]);
export function rtkState(id){
 const m=RTK_MODES.find(x=>x.id===id)||RTK_MODES[0];
 const receptor=m.ligand&&!m.externalBlock&&!m.kinaseBlock;
 return {...m,receptor,adaptor:receptor,ras:receptor||m.rasAutonomous,mapk:receptor||m.rasAutonomous};
}
const colour=active=>active?'var(--accent)':'var(--muted)';
export function rtkDiagram(s){
 const block=s.externalBlock||s.kinaseBlock;
 const node=(y,title,sub,on)=>`<g><rect x="40" y="${y}" width="260" height="54" rx="15" fill="var(--panel)" stroke="${colour(on)}" stroke-width="${on?2.5:1}"/><text x="170" y="${y+23}" class="rtk-node-title">${title}</text><text x="170" y="${y+43}" class="rtk-node-sub">${sub}</text></g>`;
 const arrow=(a,b,on)=>`<path d="M170 ${a} V${b-7} m-5 -5 5 5 5 -5" fill="none" stroke="${colour(on)}" stroke-width="2" ${on?'':'stroke-dasharray="3 4"'}/>`;
 return `<svg viewBox="0 0 340 530" role="img" aria-label="Circuito ${s.label}: recettore ${s.receptor?'attivo':'non attivo'}, RAS ${s.ras?'attivo':'non attivo'}, cascata ${s.mapk?'attiva':'non attiva'}">
 <text x="170" y="24" class="rtk-region">ESTERNO DELLA CELLULA</text>
 <g stroke="${colour(s.ligand)}" fill="${s.ligand?'var(--accent)':'none'}" stroke-width="2"><circle cx="170" cy="62" r="11"/></g><text x="170" y="90" class="rtk-node-sub">Ligando ${s.ligand?'presente':'assente'}</text>
 <rect x="12" y="136" width="316" height="26" rx="13" fill="var(--glow)" stroke="var(--line)"/>
 ${Array.from({length:15},(_,i)=>`<path d="M${25+i*21} 139 v20" stroke="var(--line)"/><circle cx="${25+i*21}" cy="139" r="3" fill="var(--muted)"/><circle cx="${25+i*21}" cy="159" r="3" fill="var(--muted)"/>`).join('')}
 <g fill="var(--panel2)" stroke="${colour(s.receptor)}" stroke-width="3"><path d="M137 109 Q117 93 121 122 L137 132 V186 Q150 201 162 186 V132 Q162 103 146 105 Z"/><path d="M203 109 Q223 93 219 122 L203 132 V186 Q190 201 178 186 V132 Q178 103 194 105 Z"/></g>
 ${s.receptor?'<g fill="var(--accent)"><circle cx="132" cy="194" r="5"/><circle cx="208" cy="194" r="5"/></g>':''}
 ${block?`<g stroke="var(--warn)" stroke-width="4" stroke-linecap="round"><path d="M152 ${s.externalBlock?102:175} l36 0"/><path d="M162 ${s.externalBlock?95:168} l16 14"/></g>`:''}
 <text x="170" y="222" class="rtk-node-title">RTK · ${s.receptor?'attivo':block?'bloccato':'a riposo'}</text>
 ${arrow(230,251,s.adaptor)}${node(252,'GRB2 / SOS',s.adaptor?'Reclutamento attivo':'Nessun reclutamento',s.adaptor)}
 ${arrow(306,327,s.adaptor)}${node(328,'RAS',s.ras?(s.rasAutonomous?'Ingresso autonomo · GTP':'GTP · attivo'):'GDP · non attivo',s.ras)}
 ${arrow(382,403,s.mapk)}${node(404,'RAF → MEK → ERK',s.mapk?'Ramo attivo':'Ramo non attivo',s.mapk)}
 ${arrow(458,480,s.mapk)}<text x="170" y="498" class="rtk-node-title">Programmi cellulari</text><text x="170" y="519" class="rtk-node-sub">Esito clinico non calcolato</text></svg>`;
}
let lastMode='ligand';
if(typeof customElements!=='undefined'&&!customElements.get('elix-rtk-explorer')){
 customElements.define('elix-rtk-explorer',class extends HTMLElement{
  connectedCallback(){
   this.innerHTML=`<div class="rtk-lab"><div class="ex-kicker">Circuito interattivo · schema originale</div><h4>Segui il segnale, trova l’interruzione</h4><div class="rtk-controls" role="group" aria-label="Scenari del circuito RTK">${RTK_MODES.map((m,i)=>`<button type="button" data-rtk-mode="${m.id}" aria-pressed="false"><span aria-hidden="true">0${i+1}</span>${m.label}</button>`).join('')}</div><div class="rtk-layout"><figure data-rtk-diagram></figure><div class="rtk-explanation"><div role="status" aria-live="polite" aria-atomic="true"><span class="ex-kicker">Cosa cambia</span><h4 data-rtk-title></h4><p data-rtk-description></p></div><dl data-rtk-state></dl><p class="rtk-limits">Un solo ramo, stati qualitativi e blocchi idealizzati. Nessuna dose o percentuale di efficacia; esclusi altri ingressi, feedback e tossicità.</p></div></div></div>`;
   this.onClick=e=>{const b=e.target.closest('[data-rtk-mode]');if(b&&this.contains(b))this.update(b.dataset.rtkMode);};
   this.addEventListener('click',this.onClick);this.update(lastMode);
  }
  disconnectedCallback(){this.removeEventListener('click',this.onClick);}
  update(id){const s=rtkState(id);lastMode=s.id;this.dataset.mode=s.id;
   this.querySelectorAll('[data-rtk-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.rtkMode===s.id)));
   this.querySelector('[data-rtk-diagram]').innerHTML=rtkDiagram(s);
   this.querySelector('[data-rtk-title]').textContent=s.title;
   this.querySelector('[data-rtk-description]').textContent=s.description;
   this.querySelector('[data-rtk-state]').innerHTML=[['Recettore',s.receptor],['RAS',s.ras],['Cascata MAPK',s.mapk]].map(([name,on])=>`<div><dt>${name}</dt><dd data-active="${on}">${on?'Attivo':'Non attivo'}</dd></div>`).join('');
  }
 });
}
