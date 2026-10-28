// Sintesi didattica originale; copertura e limiti nei registri collegati.
export const THEORY_MIGRAINE = Object.freeze({
  "id": "emicrania",
  "volume": 9,
  "title": "Emicrania: circuiti, bersagli e uso dei farmaci",
  "lead": "Il dolore emicranico nasce in un sistema nervoso che integra segnali meningei, sensibilità sensoriale e modulazione centrale. Collegare questo circuito ai bersagli dei farmaci aiuta a distinguere trattamento dell’attacco, prevenzione e cefalea da uso eccessivo di medicinali.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-28",
  "readingManifest": "./data/emicrania-reading.json",
  "sections": [
    {
      "id": "fenotipo",
      "title": "Riconoscere un quadro clinico, non un singolo sintomo",
      "refs": [
        "CFI",
        "ICHD-1",
        "ICHD-11",
        "NIH"
      ],
      "text": "L’emicrania è una cefalea primaria con manifestazioni che superano il dolore alla testa. Nausea, intolleranza alla luce e ai suoni, difficoltà di concentrazione e stanchezza modificano la capacità di svolgere le attività quotidiane. Il nome non obbliga il dolore a essere sempre unilaterale: la diagnosi deriva dalla combinazione delle caratteristiche e dalla storia degli attacchi, non dalla localizzazione isolata.\n\nNella forma senza aura, ICHD-3 considera attacchi ricorrenti che nell’adulto non trattato o trattato senza successo durano tipicamente 4–72 ore. Valuta insieme qualità e intensità del dolore, rapporto con l’attività ordinaria e sintomi associati. Questi elementi descrivono un fenotipo clinico; non sono un test biologico né una scorciatoia per classificare qualsiasi cefalea intensa.\n\nAlcune persone riconoscono cambiamenti prima del dolore e una fase di recupero dopo la sua risoluzione. È quindi utile pensare a un attacco come a una sequenza variabile, senza imporre a tutti una successione identica. Anche una cefalea che assomiglia all’emicrania può essere secondaria a un’altra condizione: una presentazione nuova o diversa richiede una valutazione del contesto. La risposta a un analgesico, da sola, non risolve questa distinzione."
    },
    {
      "id": "aura",
      "title": "Aura e dolore: fenomeni collegati, ma separabili",
      "refs": [
        "CFI",
        "ICHD-12"
      ],
      "text": "L’aura è un insieme di sintomi neurologici reversibili, spesso visivi, sensitivi o del linguaggio. La progressione graduale e la successione dei sintomi aiutano a descriverla. Nella classificazione, la durata tipica di ciascun sintomo è 5–60 minuti, con eccezioni che dipendono dal tipo di manifestazione: non significa che qualsiasi disturbo neurologico transitorio entro un’ora sia un’aura.\n\nIl fenomeno corticale di depolarizzazione propagata seguito da ridotta attività, tradizionalmente chiamato cortical spreading depression, è considerato un meccanismo probabile dell’aura. Non coincide con il dolore meningeo e non va assunto come spiegazione obbligatoria di ogni attacco senza aura.\n\nL’aura può precedere il dolore, accompagnarlo o comparire senza una successiva cefalea. Inoltre, una stessa persona può avere attacchi con e senza aura. Questa separazione è farmacologicamente utile: controllare il dolore non dimostra che tutti i fenomeni corticali siano stati bloccati. Sintomi nuovi, atipici o improvvisi non devono essere automaticamente attribuiti a un’aura già nota; la diagnosi differenziale resta clinica."
    },
    {
      "id": "cronicita",
      "title": "Giorni di cefalea, giorni di emicrania e singoli attacchi",
      "refs": [
        "CFI",
        "ICHD-13"
      ],
      "text": "La cronicità si descrive nel tempo, non mediante l’intensità di un singolo episodio. ICHD-3 definisce l’emicrania cronica attraverso cefalea in almeno 15 giorni al mese per oltre tre mesi, con caratteristiche emicraniche in almeno otto giorni al mese e gli ulteriori requisiti della classificazione. Non richiede che ogni giorno di dolore presenti lo stesso fenotipo.\n\nContare attacchi e contare giorni non produce necessariamente lo stesso risultato. Un attacco può attraversare più giorni; viceversa, episodi distinti possono verificarsi nella stessa giornata. Il diario permette di conservare questa informazione invece di ridurla a un unico numero ricordato a distanza.\n\nUn esempio di ragionamento: la riduzione dell’intensità può rappresentare un beneficio anche quando i giorni di cefalea cambiano poco. Viceversa, meno giorni non descrivono da soli l’impatto degli episodi residui. Il giudizio sull’andamento deve mantenere distinti frequenza, caratteristiche del dolore e funzionamento quotidiano. Quando sono soddisfatti anche i criteri della cefalea da uso eccessivo di medicinali, le due diagnosi possono coesistere: non si sceglie automaticamente una sola etichetta."
    },
    {
      "id": "circuito",
      "title": "Il sistema trigeminovascolare: dalla meninge all’esperienza dolorosa",
      "refs": [
        "CFI",
        "ICHD-11"
      ],
      "formula": "Meningi → afferenze trigeminali → complesso trigeminocervicale → vie ascendenti e reti cerebrali.\nSchema di connessioni, non misura dell’intensità del dolore.",
      "text": "Le strutture meningeali ricevono afferenze sensitive del trigemino. I corpi cellulari si trovano nel ganglio trigeminale; le proiezioni centrali raggiungono il complesso trigeminocervicale, che comprende il nucleo trigeminale caudale e segmenti cervicali superiori. Da qui la trasmissione si collega a strutture superiori, tra cui il talamo, e a reti coinvolte nella percezione e modulazione del dolore.\n\nLa parola trigeminovascolare descrive una relazione anatomica e funzionale fra innervazione e vasi. Non significa che l’emicrania sia soltanto un problema di diametro vascolare. Il rilascio di mediatori, la sensibilità delle terminazioni e l’elaborazione centrale possono cambiare; i fenomeni vascolari sono una parte del sistema, non una spiegazione sufficiente dell’intero disturbo.\n\nPer studiare un farmaco conviene seguire tre passaggi: dove si trova il bersaglio, quale segnale modifica e quale conseguenza può avere sulla trasmissione. Una minore liberazione di un mediatore periferico e una minore trasmissione centrale sono eventi diversi, anche se possono concorrere allo stesso risultato. Il circuito non è un filo rigido percorso in una sola direzione: la modulazione delle connessioni cambia il rapporto fra ingresso sensoriale e risposta. Lo schema serve a orientare il ragionamento, non a dedurre una previsione individuale."
    },
    {
      "id": "triptani",
      "title": "Triptani: attivare recettori serotoninergici in sedi diverse",
      "refs": [
        "CFI",
        "ICHD-11",
        "SUM-UK"
      ],
      "text": "I triptani sono agonisti dei recettori serotoninergici 5-HT1B/1D. La loro collocazione nel circuito spiega perché non basti ricordare la parola serotonina: lo stesso sistema comprende componenti vascolari e neuronali. La stimolazione di recettori sulle vie trigeminali può ridurre la trasmissione; l’attività vasocostrittrice rappresenta un’altra componente da considerare.\n\nUn agonista non aumenta indistintamente tutta l’attività del sistema nervoso. Il segno della risposta dipende dal recettore, dal suo accoppiamento e dalla cellula che lo esprime. La conseguenza utile può essere una minore uscita di segnale da una via nocicettiva. Questo collega l’emicrania ai principi generali dei GPCR: attivazione del recettore e aumento della funzione dell’intero circuito non sono sinonimi.\n\nIl sumatriptan fornisce anche un esempio del legame fra meccanismo e limiti d’impiego. La scheda britannica consultata riporta controindicazioni cardiovascolari e cerebrovascolari, tra cui cardiopatia ischemica, vasospasmo coronarico e precedente ictus o TIA. Non è quindi sufficiente conoscere il bersaglio per scegliere il trattamento. Questa scheda documenta uno specifico prodotto; non sostituisce il RCP italiano né costituisce qui un elenco completo delle controindicazioni o delle interazioni."
    },
    {
      "id": "obiettivi",
      "title": "Attacco e prevenzione rispondono a domande diverse",
      "refs": [
        "CFI",
        "NICE"
      ],
      "text": "Il trattamento acuto cerca di modificare l’attacco in corso: dolore, sintomi associati e possibilità di riprendere le attività. La prevenzione cerca invece di migliorare l’andamento della malattia nel tempo, riducendo il carico degli episodi successivi. Le due strategie possono coesistere perché osservano scale temporali diverse.\n\nPer questo un medicinale efficace durante un episodio non diventa automaticamente un trattamento preventivo, e un preventivo non deve essere giudicato soltanto sulla rapidità con cui cambia il dolore presente. Occorre sapere per quale obiettivo sia stato studiato e autorizzato. Anche la stessa molecola può avere impieghi distinti, ciascuno con condizioni proprie.\n\nLe misure di risultato seguono la domanda: valutare la risposta a un attacco non equivale a contare i giorni mensili di emicrania. La percentuale di persone che migliora non coincide con la percentuale di miglioramento della singola persona. Una soglia riportata in una tabella non è perciò un obiettivo universale per tutti i prodotti e tutte le forme di malattia. Frequenza, durata, intensità, disabilità e tollerabilità devono rimanere leggibili separatamente, anche quando contribuiscono alla stessa decisione clinica."
    },
    {
      "id": "cgrp",
      "title": "CGRP e gepanti: dal bersaglio all’indicazione del prodotto",
      "refs": [
        "CFI",
        "RIM-EMA",
        "ATO-EMA"
      ],
      "text": "Il CGRP è un neuropeptide coinvolto nella segnalazione emicranica. I gepanti interferiscono con recettori di questa famiglia di mediatori; non sono agonisti serotoninergici come i triptani. Cambiare bersaglio permette di agire su un altro passaggio, ma non autorizza a considerare tutti i gepanti identici nell’impiego.\n\nNelle informazioni EMA consultate il 28 ottobre 2026, rimegepant è indicato per il trattamento acuto dell’emicrania con o senza aura nell’adulto e per la prevenzione della forma episodica nell’adulto con almeno quattro attacchi mensili. La prevenzione della forma cronica non può essere dedotta da questa indicazione. Per atogepant, il documento corrente comprende sia il trattamento acuto nell’adulto sia la profilassi con almeno quattro giorni mensili di emicrania.\n\nAnche la descrizione molecolare richiede precisione. Per rimegepant è documentato l’antagonismo del recettore CGRP. Per atogepant il documento considera potenzialmente rilevanti anche recettori dell’amilina-1 e mantiene esplicitamente aperta la definizione del meccanismo clinico preciso. Affinità sperimentale, meccanismo proposto e beneficio clinico sono livelli collegati ma distinti. Non sono riportate qui dosi o equivalenze tra i prodotti."
    },
    {
      "id": "prevenzione",
      "title": "Prevenire: famiglie diverse e sicurezza specifica",
      "refs": [
        "CFI",
        "NICE",
        "TOP-EMA"
      ],
      "text": "La prevenzione dell’emicrania comprende farmaci provenienti da famiglie farmacologiche diverse. Nelle diapositive compaiono, fra gli altri, beta-bloccanti e antiepilettici: l’origine della classe non descrive da sola la ragione del beneficio nell’emicrania. Un’indicazione può essere sostenuta da studi clinici anche quando il contributo esatto dei diversi effetti molecolari non è interamente chiarito.\n\nLe raccomandazioni NICE consultate discutono propranololo, topiramato e amitriptilina considerando benefici, rischi, comorbilità e preferenze. Questo non costituisce una graduatoria da applicare automaticamente in Italia né dimostra che tutte le opzioni siano intercambiabili. Autorizzazione, raccomandazione e condizioni di accesso sono informazioni differenti.\n\nIl topiramato mostra perché una lista di nomi sia insufficiente. Le misure europee vietano il suo impiego nella prevenzione dell’emicrania durante la gravidanza e prevedono specifiche condizioni del programma di prevenzione della gravidanza per chi può iniziarne una. Non si trasferiscono alla profilassi emicranica le eccezioni previste per altre indicazioni. La lezione generale è valutare la sicurezza del singolo farmaco nel contesto pertinente: appartenere a una classe efficace non elimina rischi specifici, e una sintesi didattica non può sostituire questa valutazione."
    },
    {
      "id": "analgesici",
      "title": "Analgesici comuni: il contesto conta quanto il nome",
      "refs": [
        "CFI",
        "NICE"
      ],
      "text": "FANS e paracetamolo compaiono fra le opzioni per il trattamento acuto, ma non sono due nomi dello stesso meccanismo. Il collegamento con il capitolo su COX ed eicosanoidi aiuta a ricostruire l’azione dei FANS; il confronto clinico richiede poi indicazione, formulazione e caratteristiche della persona.\n\nNon è corretto trasformare una frase sintetica su una comorbilità in una preferenza automatica. Una condizione cardiovascolare, per esempio, non rende universalmente adatto l’acido acetilsalicilico per qualsiasi attacco. Le raccomandazioni correnti chiedono di considerare comorbilità e rischi delle diverse opzioni. Analogamente, le scelte durante gravidanza, allattamento o età pediatrica non possono essere ricavate per semplice analogia con l’adulto.\n\nC’è inoltre una differenza fra potenza dell’intervento e frequenza d’uso. Un farmaco può attenuare un episodio e diventare problematico quando la gestione complessiva richiede un ricorso troppo frequente ai sintomatici. Passare a un analgesico percepito come più forte non chiarisce perché gli attacchi siano aumentati. Il passo successivo è ricostruire l’andamento della cefalea e l’esposizione reale ai medicinali."
    },
    {
      "id": "moh",
      "title": "Cefalea da uso eccessivo: i criteri non richiedono una prova di sospensione",
      "refs": [
        "CFI",
        "ICHD-MOH"
      ],
      "text": "La cefalea da uso eccessivo di medicinali, indicata con MOH, si valuta in una persona con un disturbo di cefalea preesistente, cefalea in almeno 15 giorni al mese e uso eccessivo regolare di farmaci per il trattamento acuto o sintomatico per oltre tre mesi. Devono essere escluse spiegazioni diagnostiche migliori e vanno applicati i criteri della classe coinvolta.\n\nNell’attuale ICHD-3 non è necessario dimostrare prima che la cefalea scompaia entro due mesi dalla sospensione. Quel requisito compare in classificazioni storiche: importarlo come condizione obbligatoria ritarderebbe o altererebbe l’inquadramento. Il miglioramento dopo il cambiamento della terapia è un’informazione di follow-up, non quel requisito diagnostico preliminare.\n\nLa MOH può coesistere con emicrania cronica. Non è una definizione morale del comportamento e non coincide automaticamente con un disturbo da dipendenza. L’oggetto della valutazione è l’interazione fra una cefalea preesistente e un’esposizione farmacologica nel tempo."
    },
    {
      "id": "giorni-uso",
      "title": "Contare i giorni di uso, distinguendo le classi",
      "refs": [
        "CFI",
        "ICHD-TMOH",
        "ICHD-NMOH"
      ],
      "text": "Le soglie di uso eccessivo non sono tutte uguali. Per i triptani ICHD-3 considera l’uso regolare in almeno dieci giorni al mese per oltre tre mesi, nel quadro dei criteri generali della MOH. Per gli analgesici non oppioidi la soglia è almeno quindici giorni mensili per oltre tre mesi.\n\nSi contano i giorni di assunzione, non soltanto le compresse. Due somministrazioni nella stessa giornata non diventano due giorni; alternare prodotti, invece, non azzera il conteggio. Per la classificazione, più analgesici non oppioidi possono contribuire cumulativamente alla stessa classe. Vanno quindi registrati i medicinali e il calendario, senza affidarsi soltanto alla quantità consumata di ciascuna confezione.\n\nQueste soglie sono criteri classificativi, non un numero di giorni garantito sicuro né un invito a utilizzarli fino al limite. Il diario rende visibile la relazione fra cefalea e trattamento; da solo non stabilisce la causa di ogni giornata di dolore."
    },
    {
      "id": "percorso",
      "title": "Ricomporre il problema nel tempo",
      "refs": [
        "CFI",
        "NICE",
        "NIH"
      ],
      "text": "Quando aumentano sia i giorni di cefalea sia il ricorso ai medicinali, la domanda non è soltanto quale prodotto aggiungere. Occorre ricostruire il disturbo di partenza, i farmaci realmente impiegati, i risultati ottenuti e gli effetti indesiderati. Una mappa temporale aiuta a distinguere ciò che precede il peggioramento da ciò che viene usato per affrontarlo.\n\nLa gestione della MOH può comprendere modifica dell’uso dei farmaci acuti, prevenzione della cefalea sottostante, educazione e follow-up. Il piano dipende dalla classe coinvolta e dalle comorbilità; situazioni complesse o con oppioidi possono richiedere un percorso specialistico. Non si ricava da uno schema didattico un programma universale di sospensione.\n\nPer studiare un caso, si possono infine collegare quattro domande: quale fenotipo clinico è descritto, quale circuito è pertinente, quale bersaglio modifica il farmaco e quale esito viene osservato nel tempo? Il collegamento è utile anche quando la risposta rimane incompleta. Se manca un passaggio, occorre riconoscere la lacuna, non riempirla assumendo che il meccanismo garantisca efficacia o che un miglioramento dimostri da solo una diagnosi."
    }
  ],
  "checks": [
    {
      "question": "Un dolore bilaterale esclude da solo l’emicrania?",
      "answer": "No. La sede è uno degli elementi del fenotipo; diagnosi e diagnosi differenziale dipendono dall’insieme delle caratteristiche e dalla storia."
    },
    {
      "question": "L’assenza di cefalea dopo un’aura rende impossibile l’inquadramento emicranico?",
      "answer": "No. L’aura può comparire senza cefalea. Reversibilità, andamento e contesto clinico restano necessari; non ogni sintomo transitorio è un’aura."
    },
    {
      "question": "Dieci attacchi corrispondono necessariamente a dieci giorni di emicrania?",
      "answer": "No. Un attacco può durare più giorni e più episodi possono ricadere nella stessa giornata. Attacchi e giorni sono misure diverse."
    },
    {
      "question": "Perché attivare un recettore con un triptano può ridurre la trasmissione dolorosa?",
      "answer": "Agonismo indica attivazione del recettore. Il segno dell’effetto sul circuito dipende dalla cellula e dalla via di segnalazione: l’attivazione può ridurre la trasmissione trigeminale."
    },
    {
      "question": "L’indicazione preventiva di rimegepant può essere estesa alla forma cronica soltanto perché il farmaco antagonizza CGRP?",
      "answer": "No. Il bersaglio non estende l’indicazione: il documento EMA consultato specifica la prevenzione della forma episodica nell’adulto."
    },
    {
      "question": "Per diagnosticare MOH è obbligatorio attendere la scomparsa della cefalea dopo sospensione?",
      "answer": "No. Questo requisito storico non compare nei criteri generali dell’ICHD-3. La rivalutazione dell’andamento resta distinta dalla diagnosi iniziale."
    },
    {
      "question": "Alternare due analgesici non oppioidi rende irrilevante il totale dei giorni d’uso?",
      "answer": "No. ICHD-3 considera cumulativamente la classe. Il calendario deve includere entrambi i prodotti e distinguere giorni da singole dosi."
    },
    {
      "question": "Una tabella di efficacia basta a scegliere un preventivo?",
      "answer": "No. Vanno considerati indicazione, obiettivo, rischi specifici e contesto individuale. La prevenzione dell’emicrania in gravidanza, per esempio, non può usare le eccezioni di altre indicazioni del topiramato."
    }
  ],
  "relatedExistingChapterIds": [
    "gpcr",
    "fansi-cox",
    "oppioidi",
    "anticorpi-biologici",
    "metabolismo-trasportatori"
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL128",
      "label": "SUMATRIPTAN"
    },
    {
      "id": "CHEMBL2178422",
      "label": "RIMEGEPANT"
    },
    {
      "id": "CHEMBL3991065",
      "label": "ATOGEPANT"
    },
    {
      "id": "CHEMBL27",
      "label": "PROPRANOLOL"
    },
    {
      "id": "CHEMBL220492",
      "label": "TOPIRAMATE"
    },
    {
      "id": "CHEMBL521",
      "label": "IBUPROFEN"
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 514–520, etichette interne 512–518: testo disponibile e immagini controllati. Le pagine 514–515 erano già lette; cinque nuove pagine in questo intervallo. Gli articoli citati nelle immagini non sono stati letti integralmente. Criteri storici della MOH e indicazioni sintetiche confrontati con le fonti correnti."
    },
    {
      "id": "ICHD-1",
      "title": "International Headache Society · ICHD-3, emicrania",
      "url": "https://ichd-3.org/1-migraine/",
      "detail": "Introduzione e regole per cefalea primaria/secondaria consultate il 28/10/2026; non lettura dell’intera classificazione."
    },
    {
      "id": "ICHD-11",
      "title": "ICHD-3 · Emicrania senza aura",
      "url": "https://ichd-3.org/1-migraine/1-1-migraine-without-aura/",
      "detail": "Descrizione, criteri, note e commenti letti direttamente il 28/10/2026, incluso il superamento della spiegazione soltanto vascolare."
    },
    {
      "id": "ICHD-12",
      "title": "ICHD-3 · Emicrania con aura",
      "url": "https://ichd-3.org/1-migraine/1-2-migraine-with-aura/",
      "detail": "Descrizione, criteri, note e commenti letti il 28/10/2026. Durata per singolo sintomo, eccezioni e distinzione dal dolore."
    },
    {
      "id": "ICHD-13",
      "title": "ICHD-3 · Emicrania cronica",
      "url": "https://ichd-3.org/1-migraine/1-3-chronic-migraine/",
      "detail": "Descrizione, criteri e note letti il 28/10/2026: giorni di cefalea, componente emicranica e possibile coesistenza con MOH."
    },
    {
      "id": "ICHD-MOH",
      "title": "ICHD-3 · Cefalea da uso eccessivo di medicinali",
      "url": "https://ichd-3.org/8-headache-attributed-to-a-substance-or-its-withdrawal/8-2-medication-overuse-headache-moh/",
      "detail": "Descrizione, criteri, note e commenti consultati il 28/10/2026. La risoluzione dopo sospensione non è un requisito diagnostico preliminare."
    },
    {
      "id": "ICHD-TMOH",
      "title": "ICHD-3 · Uso eccessivo di triptani",
      "url": "https://ichd-3.org/8-headache-attributed-to-a-substance-or-its-withdrawal/8-2-medication-overuse-headache-moh/8-2-2-triptan-overuse-headache/",
      "detail": "Descrizione, criteri e commento consultati il 28/10/2026: conteggio dei giorni d’uso, oltre tre mesi e criteri generali."
    },
    {
      "id": "ICHD-NMOH",
      "title": "ICHD-3 · Uso eccessivo di analgesici non oppioidi",
      "url": "https://ichd-3.org/8-headache-attributed-to-a-substance-or-its-withdrawal/8-2-medication-overuse-headache-moh/8-2-3-simple-analgesic-overuse-headache/",
      "detail": "Descrizione e commenti consultati il 28/10/2026, incluso il conteggio cumulativo della classe."
    },
    {
      "id": "NICE",
      "title": "NICE CG150 · Cefalee oltre i 12 anni",
      "url": "https://www.nice.org.uk/guidance/cg150/chapter/Recommendations",
      "detail": "Raccomandazioni 1.3.10–1.3.33 e 1.3.42–1.3.48 lette nella pagina corrente il 28/10/2026. Contesto britannico; nessun protocollo, dosaggio o criterio di rimborso italiano derivato."
    },
    {
      "id": "RIM-EMA",
      "title": "EMA · Vydura, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/vydura-epar-product-information_en.pdf",
      "detail": "Consultazione selettiva il 28/10/2026: 4.1 (PDF 2), 4.4 (PDF 3) e meccanismo iniziale di 5.1 (PDF 6). Studi e intero documento non letti."
    },
    {
      "id": "ATO-EMA",
      "title": "EMA · Aquipta, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/aquipta-epar-product-information_en.pdf",
      "detail": "Consultazione selettiva il 28/10/2026: indicazioni 4.1 (PDF 2), avvertenze 4.4 (PDF 4) e meccanismo iniziale di 5.1 (PDF 6). Documento corrente con trattamento acuto e profilassi; affinità recettoriale distinta dal meccanismo clinico preciso."
    },
    {
      "id": "TOP-EMA",
      "title": "EMA · Misure di sicurezza sul topiramato",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/topiramate",
      "detail": "Misure del 2023 ricontrollate il 28/10/2026: gravidanza, differenza fra indicazioni e programma di prevenzione della gravidanza."
    },
    {
      "id": "SUM-UK",
      "title": "Sumatriptan compresse · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/525/smpc",
      "detail": "Documento aggiornato il 17/06/2026, consultato il 28/10/2026: indicazione e precauzioni/controindicazioni selezionate in 4.1, 4.3–4.4. Non un RCP italiano."
    },
    {
      "id": "NIH",
      "title": "NIH/NINDS · Migraine",
      "url": "https://health.nih.gov/health-topics-a-z/migraine",
      "detail": "Quadro generale, fasi, diagnosi e diario letti il 28/10/2026; la sintesi per il pubblico non sostituisce i criteri ICHD o le informazioni dei singoli prodotti."
    }
  ],
  "coverage": "Prima stesura estesa sui fondamenti dell’emicrania, sul rapporto fra circuito e bersagli e sulla cefalea da uso eccessivo. Sette pagine delle diapositive lette e controllate, cinque nuove; nessun manuale o corso intero dichiarato letto. Restano da integrare i corrispondenti intervalli dei libri e degli appunti, le classi specifiche, gli anticorpi e le popolazioni speciali. Consultazioni ufficiali selettive: controllo editoriale mirato, non revisione clinica indipendente.",
  "wordCount": 1995
});
