/* Original, product-scoped summaries. Chemical identities already exist in the catalog. */
const checkedAt='2026-10-24';
const source=(id,product,number,revision)=>({id,product,url:`https://www.medicines.org.uk/emc/product/${number}/smpc`,section:'SmPC §§ 4.1, 4.4–4.5, 5.1–5.2',jurisdiction:'Regno Unito',language:'en',checkedAt,sourceVersion:`Revisione del testo: ${revision}. Consultato il 24/10/2026; non è un RCP italiano.`});
const sources=[
 source('resp-formoterolo','Oxis Turbohaler 12 · polvere per inalazione',878,'27/03/2023'),
 source('resp-tiotropio','Spiriva Respimat · soluzione per inalazione',407,'12/2024; giorno non specificato'),
 source('resp-ipratropio','Atrovent Inhaler CFC-Free · soluzione pressurizzata',61,'22/03/2021'),
 source('resp-montelukast','Singulair · compresse rivestite 10 mg',198,'31/08/2026')
];
const drugs=[
 {id:'formoterolo',name:'Formoterolo',chembl:'CHEMBL1256786',family:'Broncodilatatori β₂-agonisti',subgroup:'LABA · agonista β₂',targets:['ADRB2'],
  mechanism:'Agonista β₂ che rilassa il muscolo bronchiale; azione rapida e prolungata.',
  clinical:'Oxis UK: asma da 6 anni come aggiunta ai corticosteroidi inalatori quando insufficienti; BPCO negli adulti. Nell’asma non usare un LABA senza corticosteroide inalatorio.',
  critical:'Tremore, palpitazioni, ipokaliemia, iperglicemia e possibili aritmie; possibile broncospasmo paradosso.',
  interactions:'β-bloccanti possono antagonizzarlo; diuretici, xantine e corticosteroidi possono aggravare l’ipokaliemia. Attenzione ai farmaci che prolungano QTc.',
  learning:{title:'Emivita e broncodilatazione misurano cose diverse',body:'La durata dell’effetto bronchiale non coincide con l’eliminazione plasmatica. Oxis contiene formoterolo: non è un’associazione ICS-formoterolo per AIR/MART.'}},
 {id:'tiotropio',name:'Tiotropio',chembl:'CHEMBL1900528',family:'Antimuscarinici inalatori',subgroup:'LAMA · antagonista muscarinico',targets:['CHRM3'],
  mechanism:'Antagonista muscarinico: ostacola il tono colinergico bronchiale. La lenta dissociazione da M₃ contribuisce alla lunga azione; non è esclusivamente M₃-selettivo.',
  clinical:'Respimat UK: mantenimento nella BPCO; aggiunta nell’asma grave da 6 anni con riacutizzazioni gravi nell’anno precedente. Non è un farmaco di soccorso.',
  critical:'Secchezza orale, ritenzione urinaria, glaucoma ad angolo stretto e broncospasmo paradosso. Maggiore esposizione nell’insufficienza renale.',
  interactions:'L’associazione con altri anticolinergici non è raccomandata nella fonte.',
  learning:{title:'Permanenza sul recettore e nel plasma',body:'La dissociazione da M₃ e l’emivita sistemica descrivono processi distinti. Nell’asma il tiotropio si aggiunge alla terapia antinfiammatoria.'}},
 {id:'ipratropio',name:'Ipratropio',chembl:'CHEMBL1621597',family:'Antimuscarinici inalatori',subgroup:'SAMA · antagonista muscarinico',targets:['CHRM3'],
  mechanism:'Antimuscarinico quaternario: riduce la broncocostrizione colinergica soprattutto con azione locale; non è selettivo soltanto per M₃.',
  clinical:'Atrovent CFC-Free UK: trattamento regolare del broncospasmo reversibile associato a BPCO e asma cronica. Questa indicazione non definisce la strategia preferita GINA.',
  critical:'Secchezza orale, disturbi oculari se raggiunge gli occhi, ritenzione urinaria; possibili ipersensibilità e broncospasmo paradosso.',
  interactions:'Altri anticolinergici cronici non raccomandati nella fonte; broncodilatazione additiva con β-agonisti.',
  learning:{title:'Il dato radioattivo non è l’emivita del parent',body:'Le 3,2 ore riportate nello SmPC riguardano insieme farmaco e metaboliti radiomarcati. Non vengono attribuite al solo ipratropio.'}},
 {id:'montelukast',name:'Montelukast',chembl:'CHEMBL787',family:'Antagonisti dei leucotrieni',subgroup:'LTRA · antagonista CysLT₁',targets:['CYSLTR1'],
  mechanism:'Antagonista CysLT₁: contrasta gli effetti dei cisteinil-leucotrieni, compresa la broncocostrizione da LTD₄.',
  clinical:'Singulair 10 mg UK, da 15 anni: aggiunta nell’asma persistente non controllata e profilassi quando prevale la broncocostrizione da esercizio. Non tratta l’attacco acuto.',
  critical:'Possibili eventi neuropsichiatrici, anche gravi; richiedono segnalazione e rivalutazione clinica. Non sostituisce bruscamente i corticosteroidi.',
  interactions:'Induttori enzimatici possono ridurne l’esposizione; gemfibrozil la aumenta. L’inibizione CYP2C8 in vitro non dimostra analoga interazione clinica.',
  learning:{title:'Bloccare un mediatore non spegne tutta l’infiammazione',body:'La via dei leucotrieni è soltanto una componente dell’asma. Il bersaglio spiega il meccanismo, non la scelta automatica della terapia.'}}
];
const metric=(summary,detail,substance,measurementType,values=[],dataStatus='documented')=>({summary,detail,substance,measurementType,values,dataStatus});
const value=(value,unit,extra={})=>({value,unit,...extra});
const range=(min,max,unit,extra={})=>({range:[min,max],unit,...extra});
const profiles=[
 {id:'resp-formoterolo',title:'Formoterolo · Oxis Turbohaler',applicableMoleculeIds:['CHEMBL1256786'],formulation:'Polvere inalatoria di formoterolo fumarato diidrato; dati espressi per dose erogata',route:'Inalatoria',population:'Studi inalatori descritti nello SmPC; non popolazioni con insufficienza epatica o renale.',metrics:{
  halfLife:metric('≈17 h','Terminale dopo inalazione.','Formoterolo','Emivita terminale',[value(17,'h',{relation:'~'})]),
  bioavailability:metric('≈60% della dose erogata','Disponibilità sistemica; non deposizione polmonare.','Formoterolo','Disponibilità sistemica inalatoria',[value(60,'%',{relation:'~',denominator:'dose erogata'})]),
  proteinBinding:metric('≈50%','','Formoterolo','Legame plasmatico',[value(50,'%',{relation:'~'})]),
  metabolism:metric('Glucuronidazione e O-demetilazione','','Formoterolo','Biotrasformazione'),
  metabolites:metric('Attività non specificata','Non si assegna attività ai metaboliti senza dati.','Metaboliti','Attività non riportata',[],'not-reported'),
  excretion:metric('8–13% immodificato nelle urine','Dopo inalazione.','Formoterolo','Recupero urinario',[range(8,13,'%',{denominator:'dose erogata'})])}},
 {id:'resp-tiotropio',title:'Tiotropio · Spiriva Respimat',applicableMoleculeIds:['CHEMBL1900528'],formulation:'Soluzione inalatoria Respimat; non polvere HandiHaler',route:'Inalatoria',population:'Volontari sani e pazienti BPCO; escrezione a stato stazionario nella BPCO.',metrics:{
  halfLife:metric('27–45 h','Emivita efficace in sani/BPCO; non tempo di dissociazione da M₃.','Tiotropio','Emivita efficace',[range(27,45,'h')]),
  bioavailability:metric('≈33%','Stima sistemica in giovani sani, basata sull’escrezione.','Tiotropio','Disponibilità sistemica inalatoria',[value(33,'%',{relation:'~',denominator:'dose inalata'})]),
  proteinBinding:metric('72%','','Tiotropio','Legame plasmatico',[value(72,'%')]),
  metabolism:metric('Limitato; scissione dell’estere','Contributo minore CYP2D6/3A4.','Tiotropio','Biotrasformazione'),
  metabolites:metric('N-metilscopina e acido ditienilglicolico','Inattivi sui recettori muscarinici.','Prodotti di idrolisi','Attività dei metaboliti'),
  excretion:metric('18,6% della dose nelle urine','BPCO, stato stazionario; quota non assorbita soprattutto fecale.','Tiotropio','Recupero urinario',[value(18.6,'%',{denominator:'dose inalata',population:'BPCO, stato stazionario'})])}},
 {id:'resp-ipratropio',title:'Ipratropio · Atrovent CFC-Free',applicableMoleculeIds:['CHEMBL1621597'],formulation:'Soluzione pressurizzata per inalazione',route:'Inalatoria',population:'Studi di bilancio e farmacocinetica descritti nello SmPC; denominatori distinti.',metrics:{
  halfLife:metric('Parent non quantificato','Le 3,2 h sono della radioattività totale: parent + metaboliti.','Ipratropio','Emivita del parent non riportata',[],'not-reported'),
  bioavailability:metric('7–28%','Stima sistemica dopo inalazione.','Ipratropio','Biodisponibilità sistemica',[range(7,28,'%',{denominator:'dose inalata'})]),
  proteinBinding:metric('<20%','','Ipratropio','Legame plasmatico',[value(20,'%',{relation:'<'})]),
  metabolism:metric('Idrolisi e coniugazione','Circa 77% della dose sistemicamente disponibile dopo inalazione.','Ipratropio','Biotrasformazione',[value(77,'%',{relation:'~',denominator:'dose sistemicamente disponibile'})]),
  metabolites:metric('Affinità muscarinica minima o assente','','Metaboliti','Attività recettoriale'),
  excretion:metric('≈3–13% del parent nelle urine','Entro 24 h dall’inalazione.','Ipratropio immodificato','Recupero urinario',[range(3,13,'%',{denominator:'dose inalata',interval:'0–24 h'})])}},
 {id:'resp-montelukast',title:'Montelukast · Singulair 10 mg',applicableMoleculeIds:['CHEMBL787'],formulation:'Compressa rivestita 10 mg; non masticabile',route:'Orale',population:'Adulti; biodisponibilità media in condizioni di digiuno; studio radiomarcato di eliminazione.',metrics:{
  halfLife:metric('Non quantificata nello SmPC','Il tempo al picco non è un’emivita.','Montelukast','Emivita non riportata',[],'not-reported'),
  bioavailability:metric('64%','Media della compressa rivestita.','Montelukast','Biodisponibilità orale',[value(64,'%',{statistic:'mean'})]),
  proteinBinding:metric('>99%','','Montelukast','Legame plasmatico',[value(99,'%',{relation:'>'})]),
  metabolism:metric('Prevalentemente CYP2C8','Contributi minori CYP3A4 e CYP2C9.','Montelukast','Biotrasformazione'),
  metabolites:metric('Contributo terapeutico minimo','','Metaboliti','Contributo farmacologico'),
  excretion:metric('86% della radioattività nelle feci','Raccolta in 5 giorni; eliminazione biliare di parent e metaboliti.','Radioattività totale','Recupero fecale',[value(86,'%',{denominator:'radioattività somministrata',interval:'5 giorni'})])}}
];
for(const d of drugs)Object.assign(d,{quizAvailable:false,tag:'Vie respiratorie',checkedAt,review:'Sintesi selettiva del prodotto UK; controllo editoriale sulle fonti, non revisione clinica indipendente.',references:[{id:'resp-'+d.id,supports:'Meccanismo, indicazioni e sicurezza del prodotto specificato; farmacocinetica § 5.2.'}]});
for(const p of profiles){Object.assign(p,{sourceIds:[p.id],reviewStatus:'source-checked',checkedAt,scopeNote:'I dati del prodotto selezionato non si estendono automaticamente a sali, dispositivi, altre formulazioni o popolazioni.'});for(const m of Object.values(p.metrics))Object.assign(m,{sourceIds:[p.id],context:p.population+' '+p.formulation});}
export const RESPIRATORY_BATCH={id:'respiratory-2026-10-24',checkedAt,drugs,sources,profiles};
