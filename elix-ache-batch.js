/* Existing identities, distinct parenteral and oral product contexts. */
const checkedAt='2026-10-24';
const sources=[
 {id:'ache-neostigmina',product:'Neostigmine methylsulfate hameln · 2,5 mg/ml iniettabile',url:'https://www.medicines.org.uk/emc/product/6268/smpc',section:'SmPC §§ 4.1–4.5, 4.8–4.9, 5.1–5.2, 10',jurisdiction:'Regno Unito',language:'en',checkedAt,sourceVersion:'Testo 13/05/2021; pagina emc aggiornata 18/05/2021. Consultato 24/10/2026; non presentato come RCP italiano o revisione 2026.'},
 {id:'ache-piridostigmina',product:'Mestinon · piridostigmina bromuro 60 mg compresse',url:'https://www.medicines.org.uk/emc/product/962/smpc',section:'SmPC §§ 4.1–4.5, 4.8–4.9, 5.1–5.2, 10',jurisdiction:'Regno Unito',language:'en',checkedAt,sourceVersion:'Testo ottobre 2025, giorno non specificato; pagina emc aggiornata 29/10/2025. Consultato 24/10/2026; non è un RCP italiano.'},
 {id:'ache-abn-2025',product:'ABN · miastenia autoimmune, aggiornamento 2025',url:'https://doi.org/10.1136/pn-2025-004655',section:'Pagine a stampa 423–425 · PDF 2–4; gestione iniziale e Box 2',jurisdiction:'Regno Unito · linea guida, distinta dal prodotto',language:'en',checkedAt,sourceVersion:'Jacob et al., Practical Neurology 2025;25:422–437. Pubblicato 12/09/2025. Letto il PDF ospitato da UEMS; lettura selettiva, non integrale.'}
];
const drugs=[
 {id:'neostigmina',name:'Neostigmina',chembl:'CHEMBL278020',family:'Inibitori delle colinesterasi',subgroup:'Carbamato · azione reversibile',targets:['ACHE'],
 mechanism:'Inibisce reversibilmente le colinesterasi, prolungando gli effetti nicotinici e muscarinici dell’acetilcolina.',
 clinical:'Impiegata nel prodotto UK iniettabile per miastenia, inversione del blocco non depolarizzante, ileo paralitico e ritenzione urinaria postoperatoria. Vie diverse secondo l’impiego.',
 critical:'Bradicardia, broncospasmo, secrezioni e crisi colinergica. Controindicata nell’ostruzione meccanica gastrointestinale o urinaria; cautela nell’asma.',
 interactions:'Può prolungare il blocco depolarizzante da succinilcolina. Atropina contrasta gli effetti muscarinici, non quelli nicotinici.',
 learning:{title:'Più acetilcolina, senza sequestrare il bloccante',body:'Per l’inversione del blocco non depolarizzante lo SmPC richiede recupero spontaneo già iniziato e associazione con un antimuscarinico. Il meccanismo differisce dalla cattura plasmatica con sugammadex: non implica efficacia a ogni profondità di blocco.'},
 learningLinks:[{target:'NACHR_MUSCLE',label:'Confronta con rocuronio e sugammadex alla placca'}],
 references:[{id:'ache-neostigmina',supports:'Impieghi selezionati, meccanismo, rischi, interazioni e PK parenterale.'}]},
 {id:'piridostigmina',name:'Piridostigmina',chembl:'CHEMBL1115',family:'Inibitori delle colinesterasi',subgroup:'Carbamato · azione prevalentemente periferica',targets:['ACHE'],
 mechanism:'Rallenta reversibilmente l’inattivazione di ACh, prolungandone l’azione sinaptica. Alle dosi non tossiche non attraversa la barriera ematoencefalica.',
 clinical:'Mestinon compresse UK: miastenia gravis, ileo paralitico e ritenzione urinaria postoperatoria. Nella miastenia offre un beneficio sintomatico.',
 critical:'Crampi, diarrea, bradicardia, secrezioni e debolezza da eccesso colinergico. Controindicata nell’ostruzione meccanica; rilevanti asma e funzione renale.',
 interactions:'Metilcellulosa può inibire l’assorbimento. Aminoglicosidi e altri farmaci che alterano la trasmissione neuromuscolare richiedono attenzione.',
 learning:{title:'Sintomi e autoimmunità sono livelli diversi',body:'ABN 2025 colloca piridostigmina nella gestione iniziale della miastenia oculare o generalizzata lieve–moderata. Se il beneficio è insufficiente occorre rivalutare il trattamento; aumentare indefinitamente la dose non risolve l’autoimmunità. Nella forma MuSK risposta e tollerabilità possono essere inferiori.'},
 references:[{id:'ache-piridostigmina',supports:'Prodotto orale: meccanismo, indicazioni, sicurezza e PK.'},{id:'ache-abn-2025',supports:'Contesto attuale della miastenia e limite della terapia sintomatica.'}]}
];
const metric=(summary,detail,substance,measurementType,values=[],dataStatus='documented')=>({summary,detail,substance,measurementType,values,dataStatus});
const range=(min,max,unit,extra={})=>({range:[min,max],unit,...extra});
const profiles=[
 {id:'ache-neostigmina',title:'Neostigmina · hameln parenterale',applicableMoleculeIds:['CHEMBL278020'],formulation:'Neostigmina metilsolfato 2,5 mg/ml · iniettabile',route:'Parenterale',population:'Il § 5.2 non specifica la popolazione né separa i parametri per EV, IM e SC. Non attribuire questi valori alla sola via EV.',metrics:{
 halfLife:metric('1–2 h','La fonte non distingue fase terminale e popolazione.','Neostigmina','Emivita riportata',[range(1,2,'h')]),
 bioavailability:metric('Non quantificata','Lo SmPC riferisce scarso assorbimento gastrointestinale, senza una percentuale; non è il profilo di una compressa.','Neostigmina','Biodisponibilità',[],'not-reported'),
 proteinBinding:metric('Non riportato in § 5.2','','Neostigmina','Legame plasmatico',[],'not-reported'),
 metabolism:metric('Idrolisi parziale del legame estere','','Neostigmina','Biotrasformazione dopo somministrazione parenterale'),
 metabolites:metric('Identità e attività non specificate','La fonte menziona metaboliti urinari, senza nominarli.','Metaboliti della neostigmina','Caratterizzazione non riportata',[],'not-reported'),
 excretion:metric('Urine: farmaco e metaboliti','Frazioni non quantificate.','Neostigmina e metaboliti','Via di escrezione')}},
 {id:'ache-piridostigmina',title:'Piridostigmina · Mestinon compresse',applicableMoleculeIds:['CHEMBL1115'],formulation:'Mestinon 60 mg · piridostigmina bromuro, compresse',route:'Orale',population:'Parametri della via orale nello SmPC. Il valore di biodisponibilità selezionato riguarda volontari sani a 120 mg/die in uno studio, non una posologia consigliata.',metrics:{
 halfLife:metric('3–4 h','Emivita apparente terminale per la via orale; i valori EV della fonte sono differenti.','Piridostigmina','Emivita dopo somministrazione orale',[range(3,4,'h')]),
 bioavailability:metric('7,6% · in uno studio','Volontari sani, 120 mg/die. Varia fra studi, regimi e pazienti: non è una costante. Il 22–25% di assorbimento riportato separatamente non equivale alla biodisponibilità assoluta.','Piridostigmina','Biodisponibilità orale assoluta',[{value:7.6,unit:'%',dailyDoseMg:120,population:'volontari sani',denominator:'dose orale'}]),
 proteinBinding:metric('Non legata alle proteine plasmatiche','','Piridostigmina','Legame plasmatico'),
 metabolism:metric('Limitato · idrolisi da colinesterasi plasmatiche','','Piridostigmina','Biotrasformazione'),
 metabolites:metric('3-idrossi-N-metilpiridinio','Principale prodotto di idrolisi descritto.','Metabolita principale','Identità chimica'),
 excretion:metric('5–15% della dose orale: farmaco immodificato nelle urine','Dato dipendente dalla dose; non confondere con il recupero renale dopo EV.','Piridostigmina immodificata','Recupero urinario dopo via orale',[range(5,15,'%',{denominator:'dose orale',route:'urine',substance:'parent immodificato'})])}}
];
for(const d of drugs)Object.assign(d,{quizAvailable:false,tag:'Trasmissione colinergica',checkedAt,review:'Sintesi didattica selettiva controllata sulle fonti, non revisione clinica indipendente.'});
for(const p of profiles){Object.assign(p,{sourceIds:[p.id],checkedAt,reviewStatus:'source-checked',scopeNote:'Contesto del prodotto selezionato; nessuna estensione automatica a sali, altre vie, formulazioni o popolazioni.'});for(const m of Object.values(p.metrics))Object.assign(m,{sourceIds:[p.id],context:p.population+' '+p.formulation});}
export const ACHE_BATCH={id:'acetylcholinesterase-2026-10-24',checkedAt,drugs,sources,profiles};
