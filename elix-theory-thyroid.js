export const THEORY_THYROID = Object.freeze({
  "id": "terapia-tiroidea",
  "volume": 10,
  "title": "Ormoni tiroidei e antitiroidei",
  "lead": "Asse, follicolo, deiodinasi e recettori nucleari: comprendere la disponibilità di T3/T4 e il razionale dei farmaci.",
  "sections": [
    {
      "id": "asse-e-feedback",
      "title": "Asse tiroideo: il segnale e la risposta",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP"
      ],
      "text": "Il controllo tiroideo collega tre sedi con funzioni diverse. L’ipotalamo produce TRH, che raggiunge l’adenoipofisi attraverso il circolo portale e stimola le cellule tireotrope. Il TSH ipofisario raggiunge poi la tiroide e si lega a un recettore di membrana delle cellule follicolari. La risposta comprende produzione e liberazione degli ormoni, ma anche sostegno alla crescita e all’organizzazione della ghiandola. Il TSH è quindi un segnale regolatore; T3 e T4 sono i principali messaggeri con cui la tiroide modifica l’attività dei tessuti.\n\nL’aumento della disponibilità di ormone tiroideo frena l’asse mediante feedback negativo. Una parte del segnale percepito centralmente dipende dalla conversione locale di T4 in T3: anche il sistema che controlla la ghiandola elabora l’ormone che riceve. Non bisogna immaginare tre rubinetti indipendenti, perché una variazione a valle modifica il comando a monte.\n\nQuesta organizzazione spiega due situazioni patologiche differenti. Se la tiroide produce poco ormone e il controllo centrale funziona, il TSH tende ad aumentare. Se invece il problema interessa ipofisi o ipotalamo, il comando può essere insufficiente rispetto al bisogno: un valore di TSH apparentemente rassicurante non descrive da solo la disponibilità ormonale.\n\nNel morbo di Graves, anticorpi stimolanti il recettore del TSH possono sostenere l’attività tiroidea anche quando il TSH è soppresso dal feedback. Il recettore risponde dunque a uno stimolo diverso dal suo ormone fisiologico: la soppressione del comando ipofisario non garantisce lo spegnimento della ghiandola.",
      "formula": "TRH → TSH → recettore del TSH → tiroide; T3/T4 → feedback negativo"
    },
    {
      "id": "follicolo-e-ioduro",
      "title": "Il follicolo: trasportare lo ioduro e costruire l’ormone",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP"
      ],
      "text": "Il follicolo è l’unità che permette di separare approvvigionamento, sintesi e deposito. Le cellule follicolari, o tireociti, circondano un lume contenente colloide. La loro superficie basolaterale guarda verso il sangue; quella apicale comunica con il lume. Questa polarità rende comprensibile la posizione dei trasportatori e impedisce di confondere l’ingresso dello ioduro nella cellula con la sua incorporazione nell’ormone.\n\nSul lato basolaterale, NIS è un simporto sodio/ioduro: sfrutta il gradiente del sodio, mantenuto dalla Na⁺/K⁺-ATPasi, per accumulare ioduro. NIS è un trasportatore, non un canale che lascia semplicemente diffondere lo ioduro. Sul lato apicale, la pendrina contribuisce al trasferimento verso il compartimento follicolare. Il passaggio attraverso una membrana non equivale ancora a una reazione di sintesi.\n\nLa tireoglobulina, prodotta dai tireociti e secreta nel colloide, offre residui di tirosina sui quali lavorano le reazioni successive. La tireoperossidasi, o TPO, utilizza il sistema ossidante sostenuto dal perossido di idrogeno per consentire l’organificazione: lo iodio viene incorporato nei residui tirosinici. Si formano così MIT e DIT, con uno o due atomi di iodio.\n\nL’accoppiamento di residui iodati genera le strutture di T3 e T4 ancora comprese nella tireoglobulina. Due DIT contribuiscono alla formazione di T4; MIT e DIT a quella di T3. Captazione, organificazione e accoppiamento sono pertanto passaggi distinti: un farmaco che interferisce con uno di essi non blocca necessariamente tutti gli altri nello stesso momento.",
      "formula": "Sangue → NIS → tireocita → pendrina → colloide; TPO → iodazione e accoppiamento"
    },
    {
      "id": "deposito-e-rilascio",
      "title": "Dal deposito colloidale alla secrezione",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP"
      ],
      "text": "La tiroide conserva una riserva di precursori ormonali nella tireoglobulina iodurata del colloide. È una caratteristica farmacologicamente importante: la quantità di ormone disponibile non dipende soltanto da quanto viene sintetizzato in quell’istante. La ghiandola può continuare ad attingere a materiale già formato anche dopo una riduzione della nuova sintesi.\n\nPer liberare gli ormoni, il tireocita riprende materiale colloidale mediante endocitosi. Le vescicole comunicano con il sistema lisosomiale, dove la proteolisi della tireoglobulina rende disponibili T4 e T3. Gli ormoni vengono poi trasferiti verso il sangue mediante sistemi di trasporto. I residui MIT e DIT non utilizzati per formare ormone possono essere deiodati, recuperando iodio: il riciclo intracellulare va distinto dalla conversione di T4 in T3 nei tessuti periferici.\n\nTireoglobulina e ormone tiroideo non sono la stessa sostanza. La prima è una grande proteina che funge da supporto e deposito; T3 e T4 sono iodotironine, piccole molecole derivate da residui aminoacidici. Definirle proteine confonde sia la loro struttura sia il problema del trasporto attraverso le membrane.\n\nIl deposito spiega perché un inibitore della sintesi non elimini immediatamente l’ormone già presente. Spiega anche perché il rilascio da tessuto danneggiato possa produrre eccesso di ormone circolante senza una sintesi aumentata. Il ragionamento terapeutico deve quindi identificare se prevalgano nuova produzione, liberazione di riserve o apporto dall’esterno: la sola presenza di molto ormone non individua il passaggio responsabile.",
      "formula": "Tireoglobulina nel colloide → endocitosi → proteolisi lisosomiale → T4/T3 nel sangue"
    },
    {
      "id": "tbg-e-quota-libera",
      "title": "TBG, quota libera e ingresso nei tessuti",
      "refs": [
        "CFI",
        "KATZ",
        "RANG"
      ],
      "text": "Nel sangue T4 e T3 circolano soprattutto legate a proteine, fra cui la globulina legante la tiroxina, TBG. Il legame è reversibile: la quota legata e quella libera sono in equilibrio. Misurare l’ormone totale significa sommare entrambe; misurare la frazione libera risponde a una domanda diversa. Una concentrazione totale elevata non dimostra automaticamente un eccesso di segnale nei tessuti.\n\nLe proteine di legame costituiscono un compartimento di distribuzione e una riserva circolante. Se aumenta la TBG, inizialmente più ormone può essere trattenuto nella forma legata. In un sistema integro, gli adattamenti della secrezione e del metabolismo possono ristabilire la disponibilità libera, mentre il valore totale rimane diverso. La situazione di equilibrio va distinta dalla fase di transizione e da quella di una persona la cui disponibilità dipende dalla terapia sostitutiva.\n\nTBG e recettore tiroideo hanno funzioni radicalmente differenti. La prima lega l’ormone nel plasma; il secondo contribuisce a trasformare il segnale in una risposta cellulare. Non si può dedurre l’attivazione recettoriale dalla sola quantità legata a TBG, né considerare una variazione della proteina di trasporto equivalente a una nuova malattia della ghiandola.\n\nAnche il passaggio dal sangue alla cellula richiede attenzione. Trasportatori specifici, fra cui MCT8, contribuiscono all’accesso degli ormoni ai compartimenti cellulari. La disponibilità finale dipende quindi da distribuzione, trasporto e metabolismo locale. La quota libera è essenziale per interpretare l’esposizione, ma non riassume da sola tutte le condizioni che determinano l’effetto in un singolo tessuto.",
      "formula": "Ormone totale = quota legata + quota libera; TBG ≠ trasportatore di membrana ≠ recettore TR"
    },
    {
      "id": "deiodinasi",
      "title": "Deiodinasi: attivazione e inattivazione locale",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP"
      ],
      "text": "La tiroide libera soprattutto T4, mentre una parte importante della T3 disponibile deriva dalla conversione periferica. T4 può quindi funzionare come precursore e riserva per il segnale mediato da T3. Questa descrizione è utile per comprendere la fisiologia e la terapia, purché non venga trasformata nell’affermazione che ogni effetto tiroideo segua un unico percorso obbligato.\n\nLe deiodinasi delle iodotironine rimuovono iodio in posizioni differenti. D1 e D2 possono contribuire alla formazione di T3 da T4; D2 è particolarmente utile per comprendere la regolazione della disponibilità intracellulare. D3 segue invece una direzione inattivante: converte T4 in T3 inversa, o rT3, e T3 in derivati meno attivi come T2. Raggruppare tutte e tre le isoforme fra gli enzimi che producono T3 cancella una distinzione fondamentale.\n\nIl segnale locale risulta dall’equilibrio fra ingresso del substrato, attivazione e inattivazione. Due tessuti esposti alla stessa concentrazione plasmatica possono perciò elaborarla diversamente. La concentrazione nel sangue è un’informazione sul sistema, non una lettura diretta della quantità di ligando che raggiunge ogni recettore nucleare.\n\nAnche malattia sistemica, stato nutrizionale e farmaci possono modificare il metabolismo periferico. Un cambiamento di T3 non identifica da solo una carenza di produzione tiroidea. Il propiltiouracile offre un collegamento farmacologico: oltre ad appartenere alle tionamidi che interferiscono con la sintesi, può ridurre la conversione periferica di T4 in T3. Questo effetto aggiuntivo non rende intercambiabili tutti gli antitiroidei.",
      "formula": "D1/D2: T4 → T3; D3: T4 → rT3 e T3 → T2"
    },
    {
      "id": "tr-e-trascrizione",
      "title": "TR e regolazione della trascrizione",
      "refs": [
        "CFI",
        "KATZ",
        "RANG"
      ],
      "text": "T3 interagisce con recettori tiroidei della famiglia dei recettori nucleari. Le principali famiglie TRα e TRβ comprendono isoforme con distribuzione e funzioni differenti. Il punto decisivo è che il legame del ligando modifica l’attività di complessi che regolano l’espressione genica: non apre direttamente un canale ionico e non produce una risposta identica in tutte le cellule.\n\nNel modello classico di un gene regolato positivamente, TR associato al DNA può reclutare corepressori in assenza di ligando. Il legame di T3 modifica la conformazione del recettore e favorisce il reclutamento di coattivatori. TR può cooperare con RXR su elementi di risposta agli ormoni tiroidei, detti TRE. Il complesso modifica così la trascrizione e, successivamente, la quantità di specifiche proteine.\n\nQuesto schema descrive un meccanismo, non una regola secondo cui T3 attiverebbe qualunque gene. L’esito dipende dal gene, dal contesto della cromatina e dai coregolatori disponibili; nell’asse endocrino esistono anche effetti di feedback che riducono l’espressione di componenti del sistema. Non è corretto trasformare la regolazione della trascrizione in un aumento indiscriminato di tutta la sintesi proteica.\n\nLa sequenza recettore, RNA e proteine introduce tempi di risposta diversi dall’arrivo dell’ormone nel plasma. Una variazione dell’esposizione può precedere la piena riorganizzazione funzionale del tessuto. Esistono inoltre azioni tiroidee non genomiche: il modello nucleare rimane centrale per questo capitolo, senza essere presentato come spiegazione esclusiva di ogni effetto osservabile.",
      "formula": "T3 + TR → modifica dei coregolatori → espressione genica → risposta cellulare"
    },
    {
      "id": "effetti-e-patologie",
      "title": "Dal metabolismo ai segni della malattia",
      "refs": [
        "CFI",
        "RANG",
        "APP"
      ],
      "text": "Gli ormoni tiroidei partecipano alla regolazione del metabolismo energetico e allo sviluppo. In molti tessuti aumentano il ricambio dei substrati, il consumo di energia e la produzione di calore. Le vie dei carboidrati, dei lipidi e delle proteine interagiscono con insulina, catecolamine e altri segnali: non sono interruttori isolati che T3 accende sempre nella stessa direzione.\n\nL’aumento della sintesi di determinate proteine può convivere con un maggiore turnover e, nell’eccesso ormonale, con perdita di massa e debolezza. Analogamente, una maggiore mobilizzazione degli acidi grassi non equivale a un beneficio metabolico. Il cambiamento di una singola via va interpretato insieme al bilancio complessivo di produzione, consumo e disponibilità dei substrati.\n\nIl cuore rende evidente il collegamento fra regolazione molecolare e funzione d’organo. Una maggiore attività tiroidea può aumentare frequenza e lavoro cardiaco; un’esposizione eccessiva favorisce palpitazioni e aritmie. La risposta cardiovascolare contribuisce ai sintomi dell’ipertiroidismo e spiega perché la sostituzione ormonale richieda particolare attenzione quando la riserva cardiaca è ridotta. Non basta conoscere il recettore per prevedere la tolleranza del paziente.\n\nCrescita, maturazione scheletrica e sviluppo del sistema nervoso richiedono una disponibilità ormonale adeguata nei rispettivi periodi della vita. Le manifestazioni della carenza o dell’eccesso dipendono pertanto anche dall’età e dalla durata dell’alterazione. Intolleranza al freddo, stanchezza, tremore o variazioni di peso possono orientare il ragionamento, ma nessuno di questi elementi isolati è una misura specifica della funzione tiroidea."
    },
    {
      "id": "tempi-e-cinetica",
      "title": "Tre tempi diversi: esposizione, risposta e feedback",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP"
      ],
      "text": "La farmacologia tiroidea richiede di distinguere almeno tre processi temporali. Il primo è la variazione della quantità di ormone nei compartimenti corporei. Il secondo è l’adattamento dei tessuti, che comprende regolazione genica e modificazioni delle proteine. Il terzo è il riassestamento del sistema di feedback. Un cambiamento nel primo processo non implica che gli altri due siano già completati.\n\nT4 permane generalmente più a lungo di T3 e sostiene una riserva dalla quale può derivare ormone attivo. Le emivite riportate nei testi dipendono però dallo stato tiroideo e dalle condizioni studiate. È più utile capire la differenza di persistenza che memorizzare un numero come costante universale. Anche la durata dell’effetto non coincide necessariamente con l’emivita plasmatica.\n\nUna curva ottenuta dopo una singola somministrazione non descrive automaticamente l’esposizione durante un trattamento ripetuto. Con somministrazioni successive, quanto viene introdotto si somma a quanto non è ancora stato eliminato. Il raggiungimento di un nuovo equilibrio richiede tempo; contemporaneamente cambiano conversione periferica e risposta dei tessuti. Il confronto fra picchi dopo boli equimolari non fornisce da solo un rapporto di sostituzione fra farmaci.\n\nLa stessa cautela vale per gli antitiroidei: bloccare la produzione futura lascia inizialmente disponibili riserve già formate. Un ritardo dell’effetto può quindi riflettere deposito, eliminazione e adattamento, senza dimostrare assenza di azione sul bersaglio. D’altra parte, un miglioramento rapido di un sintomo non dimostra che l’intero asse sia tornato in equilibrio.",
      "formula": "Variazione dell’apporto → nuova esposizione → adattamento tissutale e feedback, con tempi distinti"
    },
    {
      "id": "farmaci-e-obiettivi",
      "title": "Sostituire l’ormone o ridurne la produzione",
      "refs": [
        "KATZ",
        "RANG",
        "APP",
        "NICE",
        "SURV"
      ],
      "text": "La levotiroxina corrisponde a T4 e fornisce substrato per la produzione periferica di T3. Nelle raccomandazioni NICE per l’ipotiroidismo primario è il trattamento di prima scelta. La liotironina corrisponde a T3: il fatto che sia già attiva e abbia una cinetica diversa non dimostra una superiorità clinica generale. NICE non ne raccomanda l’impiego di routine, da sola o in associazione; la sorveglianza del 2025 non ha modificato questa indicazione.\n\nGli antitiroidei intervengono invece su un sistema che produce ormone. Le tionamidi, come metimazolo e propiltiouracile, interferiscono con reazioni sostenute dalla tireoperossidasi. Il loro bersaglio non è il recettore nucleare TR e non neutralizzano direttamente tutto l’ormone già circolante. Il propiltiouracile aggiunge un effetto sulla conversione periferica: appartenenza di classe ed effetti aggiuntivi vanno tenuti insieme.\n\nLo ioduro mostra un’altra distinzione fra fisiologia e farmacologia. È un substrato indispensabile, ma un carico elevato può anche frenare temporaneamente processi tiroidei, compresa la liberazione dell’ormone. La risposta dipende dallo stato della ghiandola e non autorizza l’idea che assumere più iodio curi qualsiasi disfunzione.\n\nInfine, la tireotossicosi descrive l’eccesso di azione ormonale, mentre l’ipertiroidismo indica un’aumentata produzione della ghiandola. La distinzione, richiamata da NICE, spiega perché ridurre la sintesi e gestire la liberazione di riserve siano problemi differenti. Questi collegamenti orientano lo studio dei farmaci; scelta fra terapie, chirurgia e radioiodio richiede una valutazione dedicata alla causa e al contesto.",
      "formula": "Levotiroxina → apporto di T4; tionamidi → nuova sintesi; propiltiouracile → anche conversione periferica"
    },
    {
      "id": "esposizione-e-laboratorio",
      "title": "Interpretare esposizione, interazioni e laboratorio",
      "refs": [
        "KATZ",
        "APP",
        "NICE",
        "LT4"
      ],
      "text": "La dose nominale di levotiroxina non coincide con la quantità assorbita. Cibo, formulazione e condizioni gastrointestinali possono modificare l’esposizione. Il riassunto delle caratteristiche del prodotto consultato segnala interazioni con ferro, calcio e antiacidi, oltre all’effetto del pH gastrico durante uso di inibitori di pompa protonica. Questo è un problema di assorbimento, distinto dall’ingresso dell’ormone nelle cellule bersaglio: una generica competizione con tutte le proteine alimentari non ne costituisce una spiegazione adeguata.\n\nUn risultato inatteso può dipendere da esposizione variabile, legame plasmatico, metabolismo o interferenza della misura. La biotina può alterare alcuni immunodosaggi senza produrre una corrispondente alterazione fisiologica. NICE distingue inoltre l’interpretazione del TSH quando si sospetta una disfunzione centrale, situazione in cui è necessario considerare anche FT4. Il dato deve essere letto nel contesto dell’asse, non come comando automatico alla prescrizione.\n\nPer la sostituzione nell’ipotiroidismo primario, NICE richiama l’obiettivo di evitare soppressione del TSH e tireotossicosi. Il prodotto consultato segnala rischi cardiovascolari e ossei dell’eccesso di esposizione. Una risposta lenta, da sola, non dimostra che occorra aumentare subito l’apporto.\n\nL’esempio riunisce i livelli del capitolo: identificare la sede del problema, distinguere ormone totale e libero, considerare conversione e tempi di adattamento, poi interpretare sintomi e laboratorio. Dosi, intervalli dei controlli, emergenze, gravidanza e gestione specialistica degli antitiroidei restano fuori da questa sintesi didattica e richiedono fonti specifiche aggiornate.",
      "formula": "Dose assunta → assorbimento → distribuzione → metabolismo → risposta; il test misura solo una parte del sistema"
    }
  ],
  "drugs": [],
  "targets": [],
  "review": "Sintesi didattica originale e revisione editoriale del solo integratore; non revisione clinica indipendente.",
  "checks": [
    {
      "question": "Perché nel Graves il TSH basso non spegne necessariamente la tiroide?",
      "answer": "Gli anticorpi stimolanti possono attivare il recettore del TSH nonostante la soppressione del segnale ipofisario."
    },
    {
      "question": "NIS e TPO svolgono la stessa funzione?",
      "answer": "No: NIS trasporta ioduro; TPO partecipa all’organificazione e all’accoppiamento dei residui iodati."
    },
    {
      "question": "Perché bloccare la sintesi non elimina subito tutto l’ormone?",
      "answer": "Rimangono riserve nella tireoglobulina e ormone già presente nei compartimenti corporei."
    },
    {
      "question": "T4 totale elevata dimostra sempre ipertiroidismo?",
      "answer": "No: il valore totale comprende la quota legata; proteine di trasporto, quota libera e contesto dell’asse vanno distinti."
    },
    {
      "question": "D3 aumenta la conversione di T4 in T3?",
      "answer": "No: D3 inattiva, formando rT3 da T4 e T2 da T3; D1/D2 possono contribuire alla formazione di T3."
    },
    {
      "question": "T3 aumenta indiscriminatamente la trascrizione di tutti i geni?",
      "answer": "No: il risultato dipende dal gene, dal tessuto e dai coregolatori; lo schema di attivazione è un modello circoscritto."
    },
    {
      "question": "Perché maggiore attività metabolica non significa automaticamente beneficio?",
      "answer": "Il maggiore consumo e turnover può comportare perdita di massa, aumento del lavoro cardiaco e sintomi da eccesso."
    },
    {
      "question": "Una curva dopo un bolo definisce il rapporto di sostituzione T3/T4?",
      "answer": "No: cinetica, accumulo, conversione ed esito clinico differiscono dal confronto dopo una singola somministrazione."
    },
    {
      "question": "Il propiltiouracile è soltanto un inibitore della conversione periferica?",
      "answer": "No: è anche una tionamide che interferisce con la sintesi tiroidea."
    },
    {
      "question": "Un test discordante implica sempre una nuova disfunzione tiroidea?",
      "answer": "No: esposizione, tempi, proteine di legame e interferenze analitiche possono contribuire; serve il contesto clinico."
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · AA 2025–26",
      "detail": "PDF 801–805, etichette 799–803: testo e figure controllati. PDF 802 letto dall’immagine perché l’estrazione non restituisce il contenuto. Intervallo circoscritto, non corso intero."
    },
    {
      "id": "KATZ",
      "title": "Katzung · Farmacologia generale e clinica · IX italiana 2014 / XII originale 2012",
      "detail": "Capitolo 38, PDF 785–790, pagine editoriali 765–770: testo completo e figure/tabelle controllati; integrati solo i passaggi pertinenti. Posologie, range e disponibilità storiche esclusi."
    },
    {
      "id": "RANG",
      "title": "Rang & Dale · Farmacologia · VIII italiana 2016 / originale 2015",
      "detail": "Capitolo 34, PDF 651–655, pagina editoriale non visibile: testo e figure 34.1–34.4 controllati. La curva storica non è riprodotta e non costituisce un’equivalenza posologica."
    },
    {
      "id": "APP",
      "title": "Appunti del corso di Farmacologia I · AA 2025–26",
      "detail": "Lezione 19 del 1 dicembre 2025, PDF 333–335, stampate 328–330. PDF 333 già documentato e riletto; testo e figure controllati. Corretti struttura delle iodotironine, trasporto e semplificazioni terapeutiche; algoritmo e dosi non trasferiti."
    },
    {
      "id": "NICE",
      "title": "NICE NG145 · Thyroid disease: assessment and management · aggiornamento 2023",
      "detail": "Consultazione 16 novembre 2026 dei passaggi ufficiali indicizzati: §§1.1.2,1.2.8–1.2.11,1.3.3–1.3.4,1.4.1–1.4.4,1.6.1 e1.6.5. Apertura diretta HTML/PDF negata (403); non dichiarata lettura integrale.",
      "url": "https://www.nice.org.uk/guidance/ng145/chapter/Recommendations"
    },
    {
      "id": "SURV",
      "title": "NICE NG145 · sorveglianza eccezionale · 3 ottobre 2025",
      "detail": "Letto il testo ufficiale indicizzato della decisione sulla liotironina: raccomandazioni non modificate. Apertura diretta negata; nessuna revisione indipendente degli studi.",
      "url": "https://www.nice.org.uk/guidance/ng145/resources/october-2025-exceptional-surveillance-of-thyroid-disease-assessment-and-management-nice-guideline-ng145-pdf-20067764708293"
    },
    {
      "id": "LT4",
      "title": "Levothyroxine / Eltroxin · SmPC britannico · testo 16 ottobre 2026",
      "detail": "Prodotto 5682, consultato 16 novembre 2026: §§4.1,4.3–4.5,4.8,5.1–5.2 per sostituzione, interazioni, interferenze analitiche e rischi. Fonte di prodotto britannica; non RCP italiano. Dosi, gravidanza e gestione del sovradosaggio escluse.",
      "url": "https://www.medicines.org.uk/emc/product/5682/smpc"
    }
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL1624",
      "label": "LEVOTHYROXINE"
    },
    {
      "id": "CHEMBL1544",
      "label": "LIOTHYRONINE"
    },
    {
      "id": "CHEMBL1515",
      "label": "METHIMAZOLE"
    },
    {
      "id": "CHEMBL1518",
      "label": "PROPYLTHIOURACIL"
    }
  ],
  "relatedExistingChapterIds": [
    "gpcr",
    "modelli-pk",
    "metabolismo-trasportatori",
    "popolazioni-speciali"
  ],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-16",
  "readingManifest": "./data/terapia-tiroidea-reading.json",
  "coverage": "19 pagine locali lette e controllate visivamente: 18 nuove e una già documentata. Passaggi selezionati riconciliati con fonti ufficiali nei soli ambiti dichiarati. Nessun libro o corso interamente letto; revisione clinica indipendente non eseguita.",
  "wordCount": 2268
});
