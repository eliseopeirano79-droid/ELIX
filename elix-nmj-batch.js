/* Two existing chemical identities; product contexts are never inherited by salts. */
const checkedAt='2026-10-24';
const sources=[
 {id:'nmj-rocuronio',product:'Rocuronium bromide AS Kalceks · 10 mg/ml iniezione/infusione',url:'https://www.medicines.org.uk/emc/product/13173/smpc',section:'SmPC §§ 4.1–4.5, 5.1–5.2; § 10',jurisdiction:'Regno Unito',language:'en',checkedAt,sourceVersion:'Testo revisionato 02/04/2026; pagina emc aggiornata 07/10/2026. Consultato 24/10/2026; non è un RCP italiano.'},
 {id:'nmj-sugammadex',product:'Bridion · 100 mg/ml soluzione iniettabile',url:'https://www.ema.europa.eu/en/documents/product-information/bridion-epar-product-information_en.pdf',section:'RCP §§ 4.1–4.5, 5.1–5.2 · pagine PDF 2–7, 10, 13–14',jurisdiction:'Unione europea',language:'en',checkedAt,sourceVersion:'PDF EMA inglese consultato 24/10/2026; pagina delle informazioni di prodotto aggiornata 06/11/2025. Questa è la data della pagina, non una nuova revisione clinica.'},
 {id:'nmj-asa-2023',product:'ASA 2023 · monitoraggio e antagonismo del blocco neuromuscolare',url:'https://doi.org/10.1097/ALN.0000000000004379',section:'Highlights e raccomandazioni selezionate nel testo indicizzato dall’editore',jurisdiction:'USA · linea guida',language:'en',checkedAt,sourceVersion:'Anesthesiology 2023;138:13–41. Consultazione selettiva 24/10/2026; testo integrale non accessibile, non dichiarato letto.'}
];
const drugs=[
 {id:'rocuronio',name:'Rocuronio',chembl:'CHEMBL1201244',family:'Bloccanti neuromuscolari',subgroup:'Antagonista nicotinico non depolarizzante',targets:['NACHR_MUSCLE'],
 mechanism:'Compete con l’acetilcolina alla placca motrice e riduce la trasmissione al muscolo scheletrico.',
 clinical:'Prodotto UK: complemento dell’anestesia generale per intubazione e rilassamento chirurgico; negli adulti anche induzione rapida e specifici impieghi intensivi.',
 critical:'Paralisi respiratoria e blocco residuo richiedono ventilazione e monitoraggio. Ipersensibilità e malattie neuromuscolari sono rilevanti; nella miastenia la risposta può essere molto intensa.',
 interactions:'Anestetici volatili, aminoglicosidi e magnesio possono potenziare il blocco. Associazione prolungata con corticosteroidi in terapia intensiva: rischio di miopatia.',
 learning:{title:'Immobile non significa anestetizzato',body:'Il blocco della placca non produce di per sé analgesia o perdita di coscienza. Nel laboratorio il rocuronio occupa un sito per ACh, mentre il poro resta chiuso: antagonismo del ligando, non un tappo nel canale.'},
 references:[{id:'nmj-rocuronio',supports:'Meccanismo, impieghi, rischi e PK del prodotto UK.'}]},
 {id:'sugammadex',name:'Sugammadex',chembl:'CHEMBL2111107',family:'Agenti di rimozione del blocco neuromuscolare',subgroup:'Ciclodestrina · sequestrante del bloccante',targets:[],targetNote:'Lega rocuronio o vecuronio nel plasma; non è un ligando del recettore nicotinico.',
 mechanism:'Forma complessi con rocuronio o vecuronio nel plasma, riducendone la disponibilità per la giunzione neuromuscolare.',
 clinical:'Bridion UE: inversione del blocco da rocuronio o vecuronio nell’adulto. Dalla nascita a 17 anni l’indicazione riguarda soltanto l’inversione di routine del blocco da rocuronio.',
 critical:'Possibili ipersensibilità, bradicardia marcata e ricomparsa del blocco. Non raccomandato nell’insufficienza renale grave; la ventilazione può restare necessaria.',
 interactions:'Contraccettivi ormonali: per quelli orali seguire le istruzioni sulla dose dimenticata; per quelli non orali il RCP richiede un metodo non ormonale aggiuntivo per 7 giorni.',
 learning:{title:'Cattura nel plasma, recupero alla placca',body:'La cattura del farmaco libero favorisce il riequilibrio e la dissociazione dal recettore. Non equivale a stimolare il recettore o ad aumentare ACh. Non rimuove tutti i tipi di blocco: per esempio, non quello da succinilcolina. Il recupero va misurato, non dedotto dal solo trattamento.'},
 learningLinks:[{target:'NACHR_MUSCLE',label:'Esplora la rimozione del blocco · collegamento funzionale'}],
 references:[{id:'nmj-sugammadex',supports:'Meccanismo, indicazione UE, sicurezza e PK.'},{id:'nmj-asa-2023',supports:'Contesto del monitoraggio quantitativo, distinto dall’autorizzazione del prodotto.'}]}
];
const metric=(summary,detail,substance,measurementType,values=[],dataStatus='documented')=>({summary,detail,substance,measurementType,values,dataStatus});
const value=(value,unit,extra={})=>({value,unit,...extra});
const profiles=[
 {id:'nmj-rocuronio',title:'Rocuronio · Kalceks endovenoso',applicableMoleculeIds:['CHEMBL1201244'],formulation:'Rocuronio bromuro 10 mg/ml · soluzione per iniezione/infusione',route:'Endovenosa',population:'Adulti normali dopo singolo bolo EV; non estendere a infusione prolungata in terapia intensiva.',metrics:{
 halfLife:metric('73 min · media','IC 95%: 66–80 min, non intervallo individuale.','Rocuronio','Emivita di eliminazione',[value(73,'min',{statistic:'mean',confidenceInterval:[66,80],confidenceLevel:95})]),
 bioavailability:metric('Valore non riportato','Via endovenosa; nessuna stima orale assegnata.','Rocuronio','Biodisponibilità non quantificata',[],'not-reported'),
 proteinBinding:metric('Non riportato in § 5.2','','Rocuronio','Legame plasmatico non quantificato',[],'not-reported'),
 metabolism:metric('Non caratterizzato in § 5.2','L’assenza di metaboliti plasmatici rilevati non dimostra assenza assoluta di metabolismo.','Rocuronio','Biotrasformazione',[],'not-reported'),
 metabolites:metric('Non rilevati nel plasma','','Metaboliti del rocuronio','Rilevazione plasmatica'),
 excretion:metric('47% urine · 43% feci','Recupero medio dopo dose radiomarcata, in 9 giorni; non solo farmaco immodificato.','Materiale radiomarcato','Bilancio di escrezione',[value(47,'%',{statistic:'mean',route:'urine',denominator:'dose radiomarcata',interval:'9 giorni'}),value(43,'%',{statistic:'mean',route:'feci',denominator:'dose radiomarcata',interval:'9 giorni'})])}},
 {id:'nmj-sugammadex',title:'Sugammadex · Bridion endovenoso',applicableMoleculeIds:['CHEMBL2111107'],formulation:'Bridion 100 mg/ml · sugammadex sodico espresso come sugammadex',route:'Endovenosa',population:'Adulti anestetizzati con funzione renale normale. Parametri PK calcolati sulla somma di sugammadex libero e legato al complesso.',metrics:{
 halfLife:metric('≈2 h','Non è una stima del solo farmaco libero.','Sugammadex libero + legato al complesso','Emivita di eliminazione',[value(2,'h',{relation:'~'})]),
 bioavailability:metric('Valore non riportato','Somministrazione EV; non viene attribuita una biodisponibilità orale.','Sugammadex','Biodisponibilità non quantificata',[],'not-reported'),
 proteinBinding:metric('Legame non osservato in vitro','Né sugammadex né il complesso con rocuronio legano proteine plasmatiche o eritrociti nel sistema studiato.','Sugammadex e complesso con rocuronio','Legame in vitro'),
 metabolism:metric('Eliminazione osservata come immodificato','','Sugammadex','Biotrasformazione negli studi preclinici e clinici'),
 metabolites:metric('Nessuno osservato negli studi','','Metaboliti del sugammadex','Rilevazione preclinica e clinica'),
 excretion:metric('96% della dose nelle urine','Almeno il 95% del recupero urinario è sugammadex immodificato. Oltre il 90% della dose è escreto entro 24 h.','Sugammadex','Bilancio di escrezione',[value(96,'%',{denominator:'dose somministrata',route:'urine'}),value(95,'%',{relation:'>=',denominator:'recupero urinario',substance:'sugammadex immodificato'}),value(90,'%',{relation:'>',denominator:'dose somministrata',interval:'24 h'})])}}
];
for(const d of drugs)Object.assign(d,{quizAvailable:false,tag:'Placca neuromuscolare',checkedAt,review:'Sintesi didattica selettiva con controllo delle fonti; non revisione clinica indipendente.'});
for(const p of profiles){Object.assign(p,{sourceIds:[p.id],checkedAt,reviewStatus:'source-checked',scopeNote:'Contesto del prodotto selezionato; non trasferito automaticamente a sali, altre formulazioni o popolazioni.'});for(const m of Object.values(p.metrics))Object.assign(m,{sourceIds:[p.id],context:p.population+' '+p.formulation});}
export const NMJ_BATCH={id:'neuromuscular-2026-10-24',checkedAt,drugs,sources,profiles};
