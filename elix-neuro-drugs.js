/* Original summaries of two existing identities. Each PK context belongs to one product. */
const checkedAt='2026-10-24';
const sources=[
 {id:'neuro-flumazenil',product:'Flumazenil hameln 100 microgrammi/ml · soluzione per iniezione/infusione',url:'https://www.medicines.org.uk/emc/product/6300/smpc',section:'SmPC §§ 4.1–4.5, 4.8, 5.1–5.2',jurisdiction:'Regno Unito',language:'en',checkedAt,sourceVersion:'Revisione del testo 02/09/2022; pagina emc aggiornata 01/03/2023. Consultato 24/10/2026; non è un RCP italiano.'},
 {id:'neuro-memantina',product:'Ebixa 10 e 20 mg · compresse rivestite',url:'https://www.ema.europa.eu/en/documents/product-information/ebixa-epar-product-information_en.pdf',section:'RCP §§ 4.1–4.5, 4.8, 5.1–5.2 · pagine PDF 2–8',jurisdiction:'Unione europea',language:'en',checkedAt,sourceVersion:'Informazioni di prodotto EMA: aggiornamento della pagina 08/07/2026. PDF inglese consultato 24/10/2026; sezione compresse, non soluzione orale.'},
 {id:'neuro-nice-ng97',product:'NICE NG97 · Alzheimer: contesto della memantina',url:'https://www.nice.org.uk/guidance/ng97/resources/dementia-assessment-management-and-support-for-people-living-with-dementia-and-their-carers-pdf-1837760199109',section:'Raccomandazioni 1.5.3–1.5.5 · pagine PDF 23–24',jurisdiction:'Regno Unito · linea guida, non autorizzazione del prodotto',language:'en',checkedAt,sourceVersion:'NG97 pubblicata 20/06/2018; PDF ufficiale con copyright 2025 consultato 24/10/2026. Il copyright non è una data di revisione clinica.'}
];
const drugs=[
 {id:'flumazenil',name:'Flumazenil',chembl:'CHEMBL407',family:'Antagonisti del sito benzodiazepinico',subgroup:'Antagonista competitivo · sito BZD',targets:['GABAA'],
  mechanism:'Compete al sito benzodiazepinico del GABA-A e contrasta il potenziamento da benzodiazepine; non tappa il poro.',
  clinical:'Prodotto UK endovenoso: inversione della sedazione da benzodiazepine in anestesia e in specifici contesti intensivi. Richiede personale esperto e monitoraggio.',
  critical:'Possibili risedazione, astinenza e convulsioni. Controindicato quando la benzodiazepina controlla una condizione potenzialmente letale, come lo stato epilettico.',
  interactions:'Nelle intossicazioni miste, soprattutto con antidepressivi ciclici, può far emergere convulsioni e aritmie. Non è un antidoto universale ai sedativi.',
  learning:{title:'Antagonizzare il modulatore non equivale a bloccare GABA',body:'Nel laboratorio il flumazenil occupa il sito benzodiazepinico: scompare il potenziamento, mentre resta la risposta al GABA. È uno scenario qualitativo di competizione, non una previsione della risposta del paziente.'},
  references:[{id:'neuro-flumazenil',supports:'Meccanismo, contesto clinico, sicurezza e farmacocinetica del prodotto endovenoso.'}]},
 {id:'memantina',name:'Memantina',chembl:'CHEMBL807',family:'Antagonisti NMDA',subgroup:'Bloccante del canale · antagonista incompetitivo',targets:['NMDAR'],
  mechanism:'Antagonista NMDA incompetitivo, voltaggio-dipendente e ad affinità moderata; agisce nel canale, non compete con il glutammato sul suo sito.',
  clinical:'Ebixa compresse, UE: malattia di Alzheimer moderata–grave negli adulti, con supervisione esperta e rivalutazione del beneficio.',
  critical:'Vertigini, sonnolenza, stipsi, cefalea e ipertensione. Rilevanti funzione renale, epilessia e alcalinizzazione urinaria.',
  interactions:'Il RCP indica di evitare altri antagonisti NMDA, come amantadina, ketamina e destrometorfano: possibile aumento degli effetti avversi centrali.',
  learning:{title:'Indicazione del prodotto e scelta terapeutica',body:'NICE NG97 distingue la monoterapia nella forma grave o moderata con intolleranza/controindicazione agli inibitori delle colinesterasi, dall’aggiunta a questi ultimi nella forma moderata o grave. È un contesto di linea guida britannica con condizioni di supervisione, non un algoritmo individuale. Il blocco NMDA non dimostra di per sé un effetto neuroprotettivo.'},
  references:[{id:'neuro-memantina',supports:'Indicazione UE, meccanismo, sicurezza e PK delle compresse.'},{id:'neuro-nice-ng97',supports:'Contesto della scelta terapeutica nell’Alzheimer, distinto dal RCP.'}]}
];
const metric=(summary,detail,substance,measurementType,values=[],dataStatus='documented')=>({summary,detail,substance,measurementType,values,dataStatus});
const value=(value,unit,extra={})=>({value,unit,...extra});
const range=(min,max,unit,extra={})=>({range:[min,max],unit,...extra});
const profiles=[
 {id:'neuro-flumazenil',title:'Flumazenil · hameln endovenoso',applicableMoleculeIds:['CHEMBL407'],formulation:'Soluzione 100 microgrammi/ml per iniezione/infusione',route:'Endovenosa',population:'Dati generali negli adulti dello SmPC; emivita più lunga in disfunzione epatica.',metrics:{
  halfLife:metric('40–80 min','Eliminazione, distinta dalla fase distributiva di 4–15 min.','Flumazenil','Emivita di eliminazione',[range(40,80,'min')]),
  bioavailability:metric('Valore non riportato','La fonte descrive la via endovenosa; non attribuisce una stima orale.','Flumazenil','Biodisponibilità non quantificata',[],'not-reported'),
  proteinBinding:metric('≈50%','','Flumazenil','Legame plasmatico',[value(50,'%',{relation:'~'})]),
  metabolism:metric('Prevalentemente epatico','','Flumazenil','Biotrasformazione'),
  metabolites:metric('Acido carbossilico inattivo','Forma libera e coniugata.','Metabolita principale','Attività sul sito benzodiazepinico'),
  excretion:metric('90–95% della radioattività nelle urine','Entro 72 h; non è una quota di parent immodificato.','Radioattività totale','Recupero urinario',[range(90,95,'%',{denominator:'radioattività somministrata',interval:'0–72 h'})])}},
 {id:'neuro-memantina',title:'Memantina · Ebixa compresse',applicableMoleculeIds:['CHEMBL807'],formulation:'Compresse rivestite di memantina cloridrato 10 e 20 mg; proprietà espresse per memantina',route:'Orale',population:'Dati della sezione compresse del RCP; studio radiomarcato e volontari con funzione renale normale.',metrics:{
  halfLife:metric('60–100 h','Terminale.','Memantina','Emivita terminale',[range(60,100,'h')]),
  bioavailability:metric('≈100%','Assoluta.','Memantina','Biodisponibilità orale',[value(100,'%',{relation:'~'})]),
  proteinBinding:metric('≈45%','','Memantina','Legame plasmatico',[value(45,'%',{relation:'~'})]),
  metabolism:metric('≈80% del materiale circolante è parent','Non è la quota urinaria immodificata; CYP non rilevato in vitro.','Materiale correlato alla memantina','Composizione circolante',[value(80,'%',{relation:'~',denominator:'materiale circolante correlato alla memantina'})]),
  metabolites:metric('Senza attività antagonista NMDA','Principali metaboliti descritti nel RCP.','Metaboliti','Attività recettoriale'),
  excretion:metric('84% recuperato in 20 giorni','Oltre il 99% del recuperato per via renale. Urine alcaline rallentano l’eliminazione.','Materiale radiomarcato','Bilancio ed eliminazione renale',[value(84,'%',{statistic:'mean',denominator:'dose radiomarcata',interval:'20 giorni'}),value(99,'%',{relation:'>',denominator:'materiale recuperato',route:'renale'})])}}
];
for(const d of drugs)Object.assign(d,{quizAvailable:false,tag:'Neurofarmacologia',checkedAt,review:'Sintesi selettiva con controllo editoriale delle fonti; non revisione clinica indipendente.'});
for(const p of profiles){Object.assign(p,{sourceIds:[p.id],reviewStatus:'source-checked',checkedAt,scopeNote:'Profilo del prodotto selezionato, non trasferito automaticamente a sali, altre formulazioni o popolazioni.'});for(const m of Object.values(p.metrics))Object.assign(m,{sourceIds:[p.id],context:p.population+' '+p.formulation});}
export const NEURO_DRUG_BATCH={id:'neuro-drugs-2026-10-24',checkedAt,drugs,sources,profiles};
