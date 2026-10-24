/* Original target explanations. Metabolic relationships remain distinct from pharmacodynamic targets. */
export const ADDITIONAL_TARGETS = {
"KV_AXON":{
  "id": "KV_AXON",
  "name": "Canali K⁺ · assone demielinizzato",
  "kind": "Canali voltaggio-dipendenti · gruppo funzionale",
  "tissue": "Membrana assonale nel sistema nervoso centrale",
  "signal": [
    "Demielinizzazione",
    "Conduzione compromessa",
    "Blocco dei canali K⁺",
    "Formazione di potenziali d’azione facilitabile",
    "Beneficio sintomatico da verificare"
  ],
  "mechanism": "La fampridina riduce il passaggio di K⁺ attraverso i canali e può favorire la formazione di potenziali d’azione negli assoni demielinizzati. Il modello non calcola la probabilità di conduzione né la risposta della marcia.",
  "insight": "KV_AXON identifica un contesto funzionale, non un singolo gene o una selettività molecolare. Mielina, infiammazione e conduzione sono aspetti distinti; non viene rappresentata una rimielinizzazione farmacologica.",
  "chapter": "canali-ionici",
  "source": "https://www.ema.europa.eu/en/documents/product-information/fampyra-epar-product-information_en.pdf",
  "reference": "Fampyra · RCP EMA § 5.1; Rang & Dale 8ª ed. italiana, PDF 102–103 e 280"
},
"KV_PRESYNAPTIC":{
  "id": "KV_PRESYNAPTIC",
  "name": "Canali K⁺ · terminale presinaptico",
  "kind": "Canali voltaggio-dipendenti · gruppo funzionale",
  "tissue": "Terminazione nervosa della giunzione neuromuscolare",
  "signal": [
    "Potenziale d’azione presinaptico",
    "Canali K⁺: contributo alla ripolarizzazione",
    "Blocco K⁺: depolarizzazione prolungata",
    "Ingresso di Ca²⁺ attraverso canali distinti",
    "Esocitosi di vescicole con ACh"
  ],
  "mechanism": "Il blocco dei canali K⁺ può prolungare il potenziale d’azione e favorire il rilascio vescicolare. La figura distingue i canali K⁺ modulati dall’amifampridina dai canali Ca²⁺ P/Q coinvolti nel LEMS.",
  "insight": "È un gruppo funzionale, non un singolo gene o una struttura atomica. Il beneficio sintomatico non equivale a rimuovere gli autoanticorpi.",
  "chapter": "parasimpatico-e-colinergici",
  "source": "https://www.ema.europa.eu/en/documents/product-information/firdapse-epar-product-information_en.pdf",
  "reference": "Firdapse · RCP EMA § 5.1; Rang & Dale 8ª ed. italiana, PDF 113–114 e 280"
},
"ACHE":{
  "id": "ACHE",
  "name": "Acetilcolinesterasi · AChE",
  "kind": "Enzima · serina idrolasi",
  "tissue": "Sinapsi colinergiche, compresa la giunzione neuromuscolare",
  "signal": [
    "Acetilcolina disponibile",
    "AChE: idrolisi del trasmettitore",
    "Colina e acetato",
    "Termine del segnale",
    "Carbamilazione: recupero enzimatico più lento"
  ],
  "mechanism": "L’acetilcolinesterasi idrolizza ACh. Neostigmina e piridostigmina, carbamati reversibili, rallentano il recupero dell’enzima dopo carbamilazione. ACh può quindi persistere più a lungo: aumentano sia gli effetti nicotinici sia quelli muscarinici.",
  "insight": "AChE è un enzima, non un recettore. Atropina limita gli effetti muscarinici senza riattivare AChE. La butirrilcolinesterasi è un enzima distinto: i farmaci illustrati non vengono dichiarati selettivi soltanto per AChE.",
  "chapter": "parasimpatico-e-colinergici",
  "source": "https://www.medicines.org.uk/emc/product/6268/smpc",
  "reference": "Neostigmina hameln, SmPC § 5.1; Rang & Dale 8ª ed. italiana, cap. 13, pagine PDF 275–280"
},
"NACHR_MUSCLE":{
  "id": "NACHR_MUSCLE",
  "name": "Recettore nicotinico muscolare · adulto",
  "kind": "Canale ionico · pentamero",
  "tissue": "Placca motrice del muscolo scheletrico · non recettori muscarinici o gangliari",
  "signal": [
    "ACh dal motoneurone",
    "Due siti del recettore nicotinico",
    "Apertura del canale cationico",
    "Depolarizzazione della placca",
    "Possibile potenziale d’azione muscolare"
  ],
  "mechanism": "Il recettore muscolare adulto comprende due subunità α1, una β1, una δ e una ε. Il legame di ACh favorisce la conduzione cationica. Rocuronio compete al sito del ligando; sugammadex agisce invece sul bloccante libero nel plasma, favorendone il riequilibrio.",
  "insight": "Il blocco neuromuscolare non produce di per sé analgesia o sedazione. NACHR_MUSCLE identifica qui un complesso recettoriale adulto, non un singolo gene né tutti i recettori nicotinici.",
  "chapter": "parasimpatico-e-colinergici",
  "source": "https://www.medicines.org.uk/emc/product/13173/smpc",
  "reference": "Rocuronio Kalceks, SmPC § 5.1; Rang & Dale 8ª ed. italiana, cap. 13, pagine PDF 253–254 e 268–271"
},
"GABAA":{
  "id": "GABAA",
  "name": "Recettori GABA-A · famiglia",
  "kind": "Canale ionico · pentamero",
  "tissue": "Sinapsi e membrane extrasinaptiche del sistema nervoso centrale",
  "signal": [
    "GABA",
    "GABA-A",
    "Conduttanza anionica ↑",
    "Potenziale verso il potenziale di inversione",
    "Eccitabilità modulata"
  ],
  "mechanism": "I recettori GABA-A sono canali pentamerici permeabili agli anioni, soprattutto Cl⁻. Le benzodiazepine potenziano la risposta al GABA nei sottotipi sensibili attraverso un sito allosterico. Il loro effetto non equivale a un agonismo diretto del sito del GABA.",
  "insight": "Il flusso ionico dipende dal gradiente elettrochimico. In molti neuroni adulti prevale l’inibizione, anche per shunt: non è corretto disegnare sempre iperpolarizzazione. GABAA indica una famiglia, non un singolo gene.",
  "chapter": "benzodiazepine",
  "source": "https://doi.org/10.1038/s41586-018-0832-5",
  "reference": "Masiulis et al., Nature 2019 · abstract e figure descritte; Rang & Dale 8ª ed., capitoli 38 e 44"
},
"NMDAR":{
  "id": "NMDAR",
  "name": "Recettori NMDA · famiglia",
  "kind": "Canale ionico · tetramero",
  "tissue": "Sistema nervoso centrale · trasmissione glutamatergica",
  "signal": [
    "Glutammato + coagonista",
    "NMDA convenzionale GluN1/GluN2",
    "Depolarizzazione → blocco da Mg²⁺ attenuato",
    "Flusso di cationi",
    "Segnalazione Ca²⁺-dipendente"
  ],
  "mechanism": "Nei recettori NMDA convenzionali, due subunità GluN1 e due GluN2 formano un canale cationico. Glutammato e glicina o D-serina sono coagonisti necessari. La depolarizzazione attenua il blocco da Mg²⁺ e permette un maggiore flusso, incluso Ca²⁺.",
  "insight": "La ketamina blocca il canale: non compete con il glutammato per lo stesso sito. Questa pagina descrive la famiglia e un modello GluN1/GluN2; le varianti con GluN3 e la farmacologia delle singole isoforme richiedono approfondimenti distinti.",
  "chapter": "canali-ionici",
  "source": "https://doi.org/10.1038/s41586-021-03769-9",
  "reference": "Zhang et al., Nature 2021 · abstract e correzione; Rang & Dale 8ª ed., capitolo 38"
},

  "CHRM3": {
    "id":"CHRM3","name":"Recettore muscarinico M₃","kind":"GPCR · Gq/11","tissue":"Muscolatura liscia bronchiale e ghiandole; altri distretti",
    "signal":["Acetilcolina","M₃","Gq/11 → PLCβ","IP₃ → Ca²⁺","Contrazione bronchiale"],
    "mechanism":"L’attivazione di M₃ favorisce la segnalazione Gq/11–PLC e la mobilizzazione del calcio. Nelle vie aeree contribuisce al tono contrattile e alla secrezione ghiandolare. Gli antimuscarinici ostacolano questa via.",
    "insight":"Tiotropio e ipratropio agiscono anche su altri sottotipi muscarinici. Per tiotropio, la dissociazione più lenta da M₃ rispetto a M₂ contribuisce alla selettività cinetica: non equivale ad affinità esclusiva per M₃.",
    "chapter":"asma-e-broncodilatatori","source":"https://www.medicines.org.uk/emc/product/407/smpc","reference":"Spiriva Respimat, SmPC UK § 5.1; revisione 12/2024, consultato 24/10/2026"
  },
  "CYSLTR1": {
    "id":"CYSLTR1","name":"Recettore dei leucotrieni CysLT₁","kind":"GPCR · via Gq/11 illustrata","tissue":"Vie aeree e cellule coinvolte nell’infiammazione",
    "signal":["LTD₄","CysLT₁","Gq/11 → PLC","Ca²⁺ intracellulare","Componente broncocostrittrice"],
    "mechanism":"CysLT₁ risponde ai cisteinil-leucotrieni; LTD₄ è il ligando endogeno preferito. Montelukast ne antagonizza gli effetti. L’accoppiamento e le risposte dipendono dalla cellula: qui si illustra un percorso semplificato verso la contrazione bronchiale.",
    "insight":"Antagonizzare CysLT₁ non equivale a inibire la sintesi di tutti i leucotrieni. Il blocco di questa via non rende montelukast un farmaco per risolvere un attacco acuto di asma.",
    "chapter":"asma-e-broncodilatatori","source":"https://www.medicines.org.uk/emc/product/198/smpc","reference":"Singulair, SmPC UK §§ 4.4 e 5.1; revisione 31/08/2026, consultato 24/10/2026"
  },
  "ACE": {
    "id": "ACE",
    "name": "Enzima di conversione dell'angiotensina",
    "kind": "Enzima",
    "tissue": "Endotelio e altri tessuti",
    "signal": [
      "Angiotensina I",
      "ACE",
      "Angiotensina II",
      "AT₁",
      "Gq/11 · tono vasale"
    ],
    "mechanism": "ACE converte angiotensina I in angiotensina II e contribuisce alla degradazione di bradichinina. Gli ACE-inibitori agiscono a monte dei recettori AT₁, riducendo vasocostrizione e secrezione di aldosterone ma anche modificando i sistemi delle chinine.",
    "insight": "Tosse e angioedema possono essere collegati alla ridotta degradazione di bradichinina; iperkaliemia e cambiamenti di filtrazione dipendono invece dalla modulazione del RAAS.",
    "chapter": "ipertensione"
  },
  "ADRA1": {
    "id": "ADRA1",
    "name": "Recettori α₁-adrenergici (famiglia)",
    "kind": "GPCR · Gq/11",
    "tissue": "Muscolatura liscia vascolare e altri distretti",
    "signal": [
      "Catecolamina",
      "α₁ (famiglia)",
      "Gq/11",
      "PLCβ → IP₃/DAG",
      "Ca²⁺ ↑ · contrazione"
    ],
    "mechanism": "La famiglia α₁ comprende sottotipi α₁A, α₁B e α₁D. L'attivazione favorisce segnalazione Gq/11–PLCβ e contrazione nei tessuti sensibili. Un'annotazione generica ADRA1 non autorizza ad assegnare il legame a uno specifico sottotipo senza dati.",
    "insight": "La distribuzione dei sottotipi modifica effetti vascolari e altri effetti; per comparare selettività servono esperimenti sull'isoforma corretta.",
    "chapter": "beta-adrenergici"
  },
  "CACNA1C": {
    "id": "CACNA1C",
    "name": "CaV1.2 · canale del calcio L",
    "kind": "Canale ionico",
    "tissue": "Vasi, cuore e altri tessuti",
    "signal": [
      "Depolarizzazione",
      "CaV1.2 aperto",
      "Ca²⁺ entra",
      "Contrazione e conduzione",
      "Blocco farmacologico → Ca²⁺ ↓"
    ],
    "mechanism": "CACNA1C codifica la subunità α1C del canale del calcio L. Farmaci diidropiridinici e non diidropiridinici ne modulano la funzione con differenze di selettività tissutale e di effetti su conduzione nodale e muscolatura vascolare.",
    "insight": "Una molecola vasoselettiva come amlodipina non si comporta nello stesso modo di verapamil sul nodo AV.",
    "chapter": "canali-ionici"
  },
  "SLC12A1": {
    "id": "SLC12A1",
    "name": "NKCC2 · cotrasportatore Na⁺/K⁺/2Cl⁻",
    "kind": "Trasportatore renale",
    "tissue": "Ansa di Henle, tratto ascendente spesso",
    "signal": [
      "Lume tubulare",
      "NKCC2",
      "Riassorbimento NaCl",
      "Gradiente midollare",
      "Blocco → natriuresi"
    ],
    "mechanism": "NKCC2 contribuisce al riassorbimento di sodio, potassio e cloro nel tratto ascendente spesso dell'ansa, impermeabile all'acqua. L'inibizione farmacologica riduce il gradiente osmotico midollare e aumenta l'escrezione di elettroliti.",
    "insight": "La maggiore disponibilità distale di sodio contribuisce a perdite di potassio e possibile alcalosi con diuretici dell'ansa.",
    "chapter": "diuretici-elettroliti"
  },
  "SLC12A3": {
    "id": "SLC12A3",
    "name": "NCC · cotrasportatore Na⁺/Cl⁻",
    "kind": "Trasportatore renale",
    "tissue": "Tubulo contorto distale",
    "signal": [
      "NaCl luminale",
      "NCC",
      "Riassorbimento distale",
      "Blocco tiazidico",
      "Natriuresi"
    ],
    "mechanism": "NCC recupera sodio e cloro nel tubulo contorto distale. La sua inibizione con tiazidici modifica la consegna di sodio ai segmenti più distali, con possibili effetti sulla secrezione di potassio e sull'equilibrio elettrolitico.",
    "insight": "Non confondere NCC con NKCC2: cambiano segmento nefronico e profilo farmacologico.",
    "chapter": "diuretici-elettroliti"
  },
  "NR3C2": {
    "id": "NR3C2",
    "name": "MR · recettore mineralcorticoide",
    "kind": "Recettore nucleare",
    "tissue": "Nefrone distale, cuore, vasi",
    "signal": [
      "Aldosterone",
      "MR",
      "Trascrizione di proteine di trasporto",
      "Riassorbimento Na⁺",
      "Escrezione K⁺"
    ],
    "mechanism": "Il recettore mineralcorticoide è un regolatore trascrizionale attivato da ligandi steroidei. Nel nefrone contribuisce all'espressione di proteine che favoriscono riassorbimento di sodio e secrezione di potassio; sono documentati effetti extra-renali di rimodellamento.",
    "insight": "L'iperkaliemia con antagonisti MR non è un effetto inatteso: segue il loro meccanismo tubulare.",
    "chapter": "scompenso"
  },
  "HMGCR": {
    "id": "HMGCR",
    "name": "HMG-CoA reduttasi",
    "kind": "Enzima metabolico",
    "tissue": "Reticolo endoplasmatico, soprattutto epatociti",
    "signal": [
      "HMG-CoA",
      "HMGCR",
      "Mevalonato",
      "Colesterolo epatico",
      "Recettori LDL ↑ quando HMGCR è inibita"
    ],
    "mechanism": "HMGCR catalizza un passaggio limitante nella sintesi del mevalonato. La sua inibizione con statine riduce sintesi epatica di colesterolo e aumenta il riciclo delle LDL plasmatiche attraverso up-regulation di recettori LDL.",
    "insight": "Il beneficio lipidico non deriva da legame alle LDL nel sangue, ma da una risposta epatica al blocco biosintetico.",
    "chapter": "metabolismo-diabetico"
  },
  "PTGS1": {
    "id": "PTGS1",
    "name": "COX-1 · prostaglandina-endoperossido sintasi 1",
    "kind": "Enzima",
    "tissue": "Piastrine, mucose e altri tessuti",
    "signal": [
      "Acido arachidonico",
      "COX-1",
      "Prostanoidi",
      "TXA₂ piastrinico",
      "Aggregazione"
    ],
    "mechanism": "COX-1 è coinvolta nella biosintesi di prostanoidi. Nelle piastrine l'acetilazione irreversibile indotta da aspirina limita la produzione di trombossano A₂, spiegando un effetto antiaggregante persistente oltre l'emivita plasmatica.",
    "insight": "Gli stessi mediatori hanno funzioni protettive in mucose ed emodinamica renale: la selettività del bersaglio non elimina rischi d'organo.",
    "chapter": "antiaggreganti"
  },
  "P2RY12": {
    "id": "P2RY12",
    "name": "P2Y₁₂ · recettore dell'ADP piastrinico",
    "kind": "GPCR · Gi",
    "tissue": "Piastrine",
    "signal": [
      "ADP",
      "P2Y₁₂",
      "Gi",
      "cAMP ↓",
      "Attivazione piastrinica"
    ],
    "mechanism": "P2Y₁₂ è un GPCR Gi-dipendente che contribuisce all'attivazione piastrinica in risposta all'ADP. Il metabolita attivo del clopidogrel inibisce irreversibilmente questo recettore.",
    "insight": "L'emivita del metabolita attivo è breve ma la conseguenza piastrinica persiste fino al ricambio delle cellule interessate.",
    "chapter": "antiaggreganti"
  },
  "F10": {
    "id": "F10",
    "name": "Fattore X attivato · Xa",
    "kind": "Proteasi della coagulazione",
    "tissue": "Plasma e superfici fosfolipidiche",
    "signal": [
      "Fattore X",
      "Fattore Xa",
      "Complesso protrombinasi",
      "Trombina",
      "Fibrina"
    ],
    "mechanism": "Il fattore Xa partecipa, con cofattori appropriati, al complesso protrombinasi che converte protrombina in trombina. Anticoagulanti diretti anti-Xa e farmaci mediati dall'antitrombina possono ridurne l'attività con meccanismi differenti.",
    "insight": "Eparina, fondaparinux e apixaban convergono su Xa ma non sono farmacologicamente equivalenti.",
    "chapter": "anticoagulanti"
  },
  "VKORC1": {
    "id": "VKORC1",
    "name": "Vitamina K epossido reduttasi",
    "kind": "Enzima",
    "tissue": "Fegato e altri tessuti",
    "signal": [
      "Vitamina K ossidata",
      "VKORC1",
      "Vitamina K ridotta",
      "γ-carbossilazione",
      "Fattori II, VII, IX e X"
    ],
    "mechanism": "VKORC1 rigenera forme ridotte della vitamina K necessarie alla maturazione di diversi fattori della coagulazione. Warfarin ne riduce l'attività, ma l'effetto anticoagulante richiede il ricambio dei fattori già presenti.",
    "insight": "INR riflette modifiche dell'emostasi e non equivale direttamente alla concentrazione plasmatica di warfarin.",
    "chapter": "anticoagulanti"
  },
  "ATP1A1": {
    "id": "ATP1A1",
    "name": "Na⁺/K⁺-ATPasi α1",
    "kind": "Pompa ionica",
    "tissue": "Molti tessuti, incluso muscolo cardiaco",
    "signal": [
      "Na⁺/K⁺-ATPasi",
      "Gradiente Na⁺",
      "Scambiatore Na⁺/Ca²⁺",
      "Ca²⁺ intracellulare",
      "Contrattilità"
    ],
    "mechanism": "La pompa Na⁺/K⁺ mantiene gradienti elettrochimici cellulari. L'inibizione da parte di glicosidi cardiaci può modificare il funzionamento dello scambiatore Na⁺/Ca²⁺ e aumentare calcio disponibile per la contrazione.",
    "insight": "L'ipokaliemia può aumentare suscettibilità agli effetti tossici della digossina: il rischio nasce da interazioni fra trasporto ionico e farmaco.",
    "chapter": "scompenso"
  },
  "KCNH2": {
    "id": "KCNH2",
    "name": "hERG · canale potassio Kv11.1",
    "kind": "Canale ionico",
    "tissue": "Cardiomiociti e altri tessuti",
    "signal": [
      "Depolarizzazione",
      "IKr (hERG)",
      "Ripolarizzazione",
      "Durata potenziale d'azione",
      "QT"
    ],
    "mechanism": "KCNH2 codifica il canale responsabile di una componente importante della corrente IKr. La sua inibizione può prolungare la ripolarizzazione e, in situazioni predisponenti, favorire aritmie specifiche.",
    "insight": "Non si può descrivere un antiaritmico soltanto in base alla riduzione di una corrente: alcuni blocchi ionici sono anche proaritmici.",
    "chapter": "antiaritmici"
  },
  "SCN5A": {
    "id": "SCN5A",
    "name": "NaV1.5 · canale sodio cardiaco",
    "kind": "Canale ionico",
    "tissue": "Miocardio atriale, ventricolare e sistema di conduzione",
    "signal": [
      "Soglia elettrica",
      "NaV1.5",
      "INa rapida",
      "Fase 0 miocardica",
      "Velocità conduzione"
    ],
    "mechanism": "SCN5A codifica la subunità principale di NaV1.5, responsabile di una componente della rapida depolarizzazione nei miociti a risposta veloce. Alcuni antiaritmici modificano l'attività del canale con dipendenza dallo stato.",
    "insight": "Canali del sodio e canali del calcio sostengono fasi differenti del potenziale d'azione secondo tipo di tessuto cardiaco.",
    "chapter": "canali-ionici"
  },
  "GUCY1A1": {
    "id": "GUCY1A1",
    "name": "Guanilato ciclasi solubile · subunità α1",
    "kind": "Enzima di segnalazione",
    "tissue": "Muscolatura liscia vascolare e altri tessuti",
    "signal": [
      "NO",
      "Guanilato ciclasi solubile",
      "cGMP ↑",
      "PKG",
      "Rilassamento"
    ],
    "mechanism": "La guanilato ciclasi solubile risponde a ossido nitrico e sintetizza cGMP, che promuove risposte di rilassamento nella muscolatura liscia. I nitrati organici influenzano questa via attraverso il segnale NO.",
    "insight": "Inibitori PDE5 riducono la degradazione di cGMP: con nitrati possono amplificare pericolosamente la vasodilatazione.",
    "chapter": "ipertensione"
  },
  "HCN4": {
    "id": "HCN4",
    "name": "HCN4 · canale pacemaker",
    "kind": "Canale ionico",
    "tissue": "Nodo senoatriale",
    "signal": [
      "Iperpolarizzazione",
      "HCN4 · corrente If",
      "Depolarizzazione diastolica",
      "Soglia",
      "Frequenza sinusale"
    ],
    "mechanism": "HCN4 contribuisce alla corrente If coinvolta nella depolarizzazione spontanea del nodo sinusale. Ivabradina ne modifica l'attività, differenziandosi dai farmaci che antagonizzano direttamente i recettori β.",
    "insight": "Un farmaco che rallenta il nodo senoatriale non controlla necessariamente la frequenza ventricolare nella fibrillazione atriale.",
    "chapter": "antiaritmici"
  },
  "SLC5A2": {
    "id": "SLC5A2",
    "name": "SGLT2 · cotrasportatore sodio-glucosio",
    "kind": "Trasportatore renale",
    "tissue": "Tubulo prossimale",
    "signal": [
      "Filtrato glomerulare",
      "SGLT2",
      "Riassorbimento glucosio/Na⁺",
      "Inibizione",
      "Glucosuria e natriuresi"
    ],
    "mechanism": "SGLT2 recupera glucosio e sodio nel tubulo prossimale. Gli inibitori riducono questo processo, modificando anche segnali emodinamici renali che contribuiscono agli effetti cardiometabolici documentati.",
    "insight": "DAPA-CKD ed EMPA-KIDNEY collegano un trasportatore tubulare a esiti clinici renali in popolazioni selezionate, anche senza diabete.",
    "chapter": "metabolismo-diabetico"
  },
  "CYP2C19": {
    "id": "CYP2C19",
    "name": "CYP2C19 · citocromo P450",
    "kind": "Enzima del metabolismo · non recettore",
    "tissue": "Metabolismo epatico",
    "signal": [
      "Clopidogrel (profarmaco)",
      "Bioattivazione, anche CYP2C19-dipendente",
      "Metabolita attivo",
      "Antagonismo P2Y₁₂ piastrinico"
    ],
    "mechanism": "CYP2C19 partecipa alla bioattivazione del clopidogrel. Le varianti che riducono l’attività enzimatica possono ridurre la formazione del metabolita attivo e la risposta antiaggregante. Questo enzima non è il recettore farmacodinamico del clopidogrel: il metabolita agisce su P2Y₁₂.",
    "insight": "Il significato di una variante dipende dalla relazione gene–farmaco, dall’indicazione e dalle altre condizioni cliniche; un genotipo non impone una dose da solo. Consultare la linea guida CPIC 2022, non applicare una regola identica a tutti i substrati.",
    "chapter": "metabolismo-farmacogenetica",
    "metabolizes": [
      "clopidogrel"
    ],
    "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9287492/",
    "reference": "CPIC, CYP2C19–clopidogrel, aggiornamento 2022"
  },
  "CYP2D6": {
    "id": "CYP2D6",
    "name": "CYP2D6 · citocromo P450",
    "kind": "Enzima del metabolismo · non recettore",
    "tissue": "Metabolismo epatico",
    "signal": [
      "Metoprololo (farmaco attivo)",
      "Biotrasformazione CYP2D6-dipendente",
      "Esposizione sistemica variabile",
      "Risposta β-bloccante"
    ],
    "mechanism": "CYP2D6 contribuisce al metabolismo del metoprololo. Una ridotta attività può aumentare l’esposizione al farmaco attivo: il senso della variazione è diverso dalla minore attivazione di un profarmaco. Le interazioni enzimatiche sono un altro determinante della variabilità.",
    "insight": "La linea guida CPIC 2024 riporta evidenza azionabile soprattutto per metoprololo. Non estendere automaticamente le raccomandazioni a tutti i beta-bloccanti o alle altre proteine studiate. La scheda spiega il processo metabolico e non fornisce un algoritmo di dosaggio.",
    "chapter": "metabolismo-farmacogenetica",
    "metabolizes": [
      "metoprololo",
      "nebivololo"
    ],
    "source": "https://pubmed.ncbi.nlm.nih.gov/38951961/",
    "reference": "CPIC, genotipi e terapia con beta-bloccanti, 2024"
  }
};
