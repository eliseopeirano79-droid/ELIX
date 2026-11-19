export const THEORY_THYROID = Object.freeze({
  "id": "terapia-tiroidea",
  "volume": 10,
  "title": "Ormoni tiroidei e antitiroidei",
  "lead": "Asse, follicolo e recettori nucleari; destino degli ormoni, interazioni e disfunzioni associate ai farmaci.",
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
      "text": "Nel sangue T4 e T3 circolano soprattutto legate a proteine, fra cui la globulina legante la tiroxina, TBG. Il legame è reversibile: la quota legata e quella libera sono in equilibrio. Misurare l’ormone totale significa sommare entrambe; misurare la frazione libera risponde a una domanda diversa. Una concentrazione totale elevata non dimostra automaticamente un eccesso di segnale nei tessuti.\n\nLe proteine di legame costituiscono un compartimento di distribuzione e una riserva circolante. Se aumenta la TBG, inizialmente più ormone può essere trattenuto nella forma legata. In un sistema integro, gli adattamenti della secrezione e del metabolismo possono ristabilire la disponibilità libera, mentre il valore totale rimane diverso. La situazione di equilibrio va distinta dalla fase di transizione e da quella di una persona la cui disponibilità dipende dalla terapia sostitutiva.\n\nTBG e recettore tiroideo hanno funzioni radicalmente differenti. La prima lega l’ormone nel plasma; il secondo contribuisce a trasformare il segnale in una risposta cellulare. Non si può dedurre l’attivazione recettoriale dalla sola quantità legata a TBG, né considerare una variazione della proteina di trasporto equivalente a una nuova malattia della ghiandola.\n\nAnche il passaggio dal sangue alla cellula richiede attenzione. Trasportatori specifici, fra cui MCT8, contribuiscono all’accesso degli ormoni ai compartimenti cellulari. La disponibilità finale dipende quindi da distribuzione, trasporto e metabolismo locale. La quota libera è essenziale per interpretare l’esposizione, ma non riassume da sola tutte le condizioni che determinano l’effetto in un singolo tessuto.\n\nIl sistema nervoso rende evidente questa organizzazione per compartimenti. Nel plesso coroideo, trasportatori di membrana e proteine di legame partecipano al passaggio degli ormoni fra sangue, cellule e liquido cerebrospinale. Una freccia fra due compartimenti rappresenta un trasporto, non l’attivazione automatica del recettore. Lo schema aiuta a distinguere accesso al tessuto e risposta del tessuto, senza attribuire a tutti gli organi gli stessi trasportatori o le stesse concentrazioni.",
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
      "id": "coniugazione-e-ricircolo",
      "title": "Eliminazione e ricircolo: il percorso oltre le deiodinasi",
      "refs": [
        "CFI",
        "RANG",
        "KATZ"
      ],
      "text": "La deiodazione modifica l’attività delle iodotironine, ma non esaurisce il loro destino. Fegato e rene partecipano anche a reazioni di coniugazione: l’aggiunta di gruppi glucuronide o solfato rende i derivati più adatti al trasporto e all’escrezione. Occorre distinguere la trasformazione chimica dalla perdita definitiva dell’ormone dall’organismo. Un composto trasferito nella bile ha lasciato il sangue, ma può ancora trovarsi in un circuito dal quale una parte ritorna disponibile.\n\nDopo il passaggio biliare, i coniugati raggiungono l’intestino. La deconiugazione, alla quale contribuisce il microbiota, può liberare materiale riassorbibile; un’altra parte procede verso l’eliminazione fecale. Le vie urinarie contribuiscono a loro volta all’escrezione di derivati. Il circolo enteroepatico è dunque un ricircolo fra compartimenti, non una nuova sintesi tiroidea. Non va confuso neppure con il recupero dello iodio da MIT e DIT all’interno del tireocita.\n\nQuesto percorso aiuta a interpretare le interazioni intestinali. Una sostanza che trattiene l’ormone nel lume può ridurre la quantità che raggiunge o ritorna al sangue. Il risultato può assomigliare a quello di un metabolismo più rapido, pur avendo una sede diversa. Anche per questo la concentrazione finale non si deduce dalla sola dose ingerita.\n\nIl modello rimane qualitativo: non assegna al microbiota una percentuale fissa della disponibilità ormonale e non permette di prevedere l’effetto di un probiotico o di una malattia intestinale nel singolo individuo. Serve a seguire il bilancio fra ingresso, trasformazione, ritorno ed eliminazione, collegando fisiologia tiroidea e farmacocinetica.",
      "formula": "Coniugazione → bile → intestino → eliminazione oppure deconiugazione e riassorbimento"
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
        "APP",
        "KATZ",
        "NICE"
      ],
      "text": "Gli ormoni tiroidei partecipano alla regolazione del metabolismo energetico e allo sviluppo. In molti tessuti aumentano il ricambio dei substrati, il consumo di energia e la produzione di calore. Le vie dei carboidrati, dei lipidi e delle proteine interagiscono con insulina, catecolamine e altri segnali: non sono interruttori isolati che T3 accende sempre nella stessa direzione.\n\nL’aumento della sintesi di determinate proteine può convivere con un maggiore turnover e, nell’eccesso ormonale, con perdita di massa e debolezza. Analogamente, una maggiore mobilizzazione degli acidi grassi non equivale a un beneficio metabolico. Il cambiamento di una singola via va interpretato insieme al bilancio complessivo di produzione, consumo e disponibilità dei substrati.\n\nIl cuore rende evidente il collegamento fra regolazione molecolare e funzione d’organo. Una maggiore attività tiroidea può aumentare frequenza e lavoro cardiaco; un’esposizione eccessiva favorisce palpitazioni e aritmie. La risposta cardiovascolare contribuisce ai sintomi dell’ipertiroidismo e spiega perché la sostituzione ormonale richieda particolare attenzione quando la riserva cardiaca è ridotta. Non basta conoscere il recettore per prevedere la tolleranza del paziente.\n\nCrescita, maturazione scheletrica e sviluppo del sistema nervoso richiedono una disponibilità ormonale adeguata nei rispettivi periodi della vita. Le manifestazioni della carenza o dell’eccesso dipendono pertanto anche dall’età e dalla durata dell’alterazione. Intolleranza al freddo, stanchezza, tremore o variazioni di peso possono orientare il ragionamento, ma nessuno di questi elementi isolati è una misura specifica della funzione tiroidea.\n\nNel confronto fra carenza ed eccesso, la cute fredda e secca o la maggiore sudorazione riflettono aspetti della termoregolazione; rallentamento e agitazione descrivono possibili manifestazioni, non criteri diagnostici autosufficienti. Anche la debolezza può comparire in quadri diversi. L’orbitopatia associata a Graves, invece, rimanda a un contesto autoimmune specifico e non è una conseguenza obbligata di qualsiasi tireotossicosi. Una tabella di segni serve a organizzare ipotesi, non a classificare una persona sulla base di una singola voce.\n\nUna parte delle manifestazioni cardiovascolari e del tremore richiama la stimolazione adrenergica, ma non richiede necessariamente un aumento delle catecolamine circolanti. Gli ormoni tiroidei possono modificare l’espressione dei recettori β e la risposta dei sistemi di segnalazione: a parità di segnale adrenergico, il tessuto può rispondere diversamente. Occorre quindi distinguere la quantità del mediatore dalla sensibilità del bersaglio. Questo collegamento integra gli effetti diretti della regolazione tiroidea e spiega perché un sintomo apparentemente «adrenergico» non identifichi da solo la sua causa."
    },
    {
      "id": "origine-della-tireotossicosi",
      "title": "Da dove viene l’ormone in eccesso?",
      "refs": [
        "CFI",
        "KATZ",
        "NICE",
        "ATAT"
      ],
      "text": "Due persone possono avere un eccesso di azione degli ormoni tiroidei per processi diversi. Nel Graves e nell’autonomia nodulare aumenta la produzione: la ghiandola continua ad alimentare il flusso di ormone. In una tiroidite distruttiva, invece, il danno follicolare rende disponibili riserve già formate. Un terzo percorso è l’apporto di ormone dall’esterno. La tireotossicosi descrive il risultato sul sistema; identificarne l’origine permette di capire quale passaggio potrebbe essere modificato da un farmaco.\n\nNel Graves il segnale degli anticorpi stimolanti raggiunge il recettore del TSH e sostiene l’attività delle cellule follicolari. Nelle forme autonome, la produzione può proseguire senza dipendere normalmente dallo stimolo ipofisario. Nel processo distruttivo, al contrario, non serve postulare un’accelerazione della sintesi per spiegare l’aumento dell’ormone circolante: viene alterato il contenitore delle riserve. Il colloide, già incontrato come deposito fisiologico, diventa così centrale per comprendere una malattia che inizialmente espone i tessuti a troppo ormone anche senza vera iperproduzione.\n\nQuesta differenza chiarisce il limite delle tionamidi. Se il problema è la nuova sintesi, inibire le reazioni della TPO interviene su un passaggio pertinente. Nella fase tireotossica puramente distruttiva, quel blocco non arresta la fuoriuscita dell’ormone già immagazzinato: le indicazioni ufficiali distinguono quindi questo quadro dall’ipertiroidismo da aumentata produzione. Anche nell’eccesso di ormone assunto dall’esterno, bloccare la fabbrica tiroidea non coincide con correggere la fonte dell’esposizione. La somiglianza dei sintomi non rende equivalenti i bersagli.\n\nIl decorso di una tiroidite può inoltre cambiare direzione. Mentre le riserve si consumano, un tessuto danneggiato può non riuscire a ricostituirle e l’esposizione può diventare insufficiente. La fase ipotiroidea non è obbligatoria, né la ripresa funzionale è garantita in tutte le forme. Seguire l’andamento nel tempo serve dunque a distinguere un deposito che si svuota da una produzione persistentemente aumentata. Attenuare tremore o palpitazioni agisce su un altro livello ancora: la risposta del tessuto bersaglio. Il miglioramento di un sintomo, da solo, non dimostra che sia stata rimossa la causa.",
      "formula": "Produzione aumentata → nuova sintesi; danno follicolare → riserve liberate; apporto esterno → altra fonte. Sintomi simili, passaggi farmacologici diversi."
    },
    {
      "id": "gozzo-funzione-e-subclinico",
      "title": "Volume della tiroide, funzione e alterazioni subcliniche",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "NICE",
        "ATAGO"
      ],
      "text": "Il gozzo descrive un aumento di volume della tiroide. Non specifica quanto ormone venga prodotto, se la crescita sia diffusa o nodulare, né quale processo l’abbia determinata. Una ghiandola ingrandita può accompagnarsi a funzione normale, ridotta o aumentata. Per collegare l’aspetto anatomico alla farmacologia occorre quindi separare tre domande: come è fatto il tessuto, quale stimolo ne sostiene l’attività e quale esposizione ormonale raggiunge l’organismo.\n\nIl TSH aiuta a collegare crescita e funzione senza confonderle. Oltre a stimolare i processi secretori, sostiene la crescita delle cellule follicolari. Quando lo ioduro disponibile limita la sintesi, il circuito di feedback può aumentare lo stimolo sulla tiroide. L’ingrandimento può rappresentare una risposta compensatoria: la presenza di gozzo non dimostra che la compensazione abbia fallito e che sia già presente ipotiroidismo. Nel Graves, invece, la stimolazione del recettore del TSH da parte degli anticorpi può sostenere sia crescita sia produzione. Una somiglianza di volume può perciò nascondere circuiti causali differenti.\n\nAnche la parola «subclinico» richiede una lettura precisa. Nell’ipertiroidismo subclinico il TSH è inferiore all’intervallo di riferimento, mentre FT4 e FT3 restano nei rispettivi intervalli. È una definizione biochimica: non significa semplicemente che non siano riferiti sintomi. Se la FT3 è aumentata, una FT4 normale non basta a classificare il quadro come subclinico. Questo esempio mostra perché selezionare un solo valore possa cancellare una parte essenziale del profilo ormonale.\n\nUn singolo risultato, infine, non definisce automaticamente persistenza, causa e scelta terapeutica. Le raccomandazioni NICE considerano la ripetizione dell’alterazione e il contesto clinico nel percorso di valutazione. L’assenza di un evidente eccesso ormonale non risolve neppure ogni problema anatomico: un aumento di volume può avere conseguenze compressive da valutare separatamente. Ridurre la sintesi, sostituire un ormone mancante e intervenire su una massa che comprime strutture vicine rispondono a problemi diversi. Il collegamento fra laboratorio, anatomia e sintomi permette di formulare la domanda terapeutica prima di scegliere il farmaco.",
      "formula": "Gozzo = volume aumentato. Funzione: normale, ridotta o aumentata. Subclinico: TSH basso con FT4 e FT3 nei rispettivi intervalli."
    },
    {
      "id": "indizi-della-causa",
      "title": "Dalla funzione alla causa: anticorpi, captazione e struttura",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "NICE",
        "ETAG",
        "ATAF"
      ],
      "text": "Un profilo ormonale documenta come sta funzionando l’asse, ma non identifica sempre il processo che ha prodotto l’alterazione. Davanti a una tireotossicosi, distinguere l’aumento della sintesi dalla liberazione di ormone già formato cambia il significato dei farmaci disponibili. La misura degli ormoni, gli anticorpi e le immagini rispondono quindi a domande complementari: quanto ormone circola, quale stimolo agisce sulla ghiandola e come si distribuisce il tessuto funzionante.\n\nNel Graves, il collegamento con il recettore è particolarmente diretto. Gli anticorpi stimolanti riconoscono il recettore del TSH e sostengono l’attività della cellula follicolare anche quando il TSH ipofisario è soppresso dal feedback. I TRAb misurati con comuni saggi di legame indicano la presenza di anticorpi contro quel recettore; il risultato non descrive necessariamente se il loro effetto sia stimolante o bloccante. La concentrazione di anticorpi e l’attività biologica sono proprietà diverse, distinguibili con metodi appropriati. Questo chiarisce anche perché anticorpi anti-TPO e TRAb non siano intercambiabili: riconoscono bersagli differenti. La TPO è inoltre il bersaglio enzimatico delle tionamidi; inibirla non significa antagonizzare direttamente il recettore del TSH.\n\nLa captazione di un tracciante esplora un altro livello. La tiroide concentra ioduro attraverso NIS; usando un radioisotopo dello iodio si può osservare l’accumulo nella ghiandola, mentre la scintigrafia ne mostra la distribuzione. Nel Graves non trattato l’attività è tipicamente diffusa; un nodulo autonomo può invece concentrare il tracciante in modo focale, con minore attività del tessuto circostante. Una tiroidite distruttiva può determinare concentrazioni ormonali elevate e captazione bassa: il sangue riceve le riserve liberate dai follicoli, senza che questo richieda un corrispondente aumento della nuova sintesi.\n\nAnche questa relazione ha condizioni di validità. Un carico recente di iodio può ridurre l’accumulo del radiotracciante e rendere una captazione bassa meno specifica per distruzione follicolare. Il dato va quindi confrontato con esposizioni, farmaci e altri risultati. L’attività somministrata a scopo diagnostico e il trattamento con radioiodio rispondono a obiettivi diversi: osservare il comportamento della ghiandola oppure ridurne il tessuto funzionante. Condividere il trasporto dello ioduro non rende i due interventi equivalenti.\n\nL’ecografia descrive volume e struttura; il Doppler aggiunge informazioni sulla vascolarizzazione. Un nodulo visto all’ecografia, da solo, non dimostra autonomia secretoria. Le linee guida consultate attribuiscono un ruolo diverso agli esami nel percorso: NICE considera TRAb e, se negativi, la scintigrafia, riservando l’ecografia nell’adulto con tireotossicosi al nodulo palpabile; ETA 2018 include ecografia e Doppler a supporto della diagnosi di Graves. Questa differenza va conservata, senza costruire una sequenza universale sommando le raccomandazioni.\n\nIl ragionamento farmacologico finale collega la causa al bersaglio: una produzione sostenuta dal recettore o da tessuto autonomo rende pertinente l’inibizione della sintesi; il rilascio distruttivo delle riserve richiede un’interpretazione diversa. Nessun singolo valore anticorpale o reperto d’immagine sostituisce questa ricostruzione.",
      "formula": "Ormoni → stato funzionale; TRAb → indizio immunologico; captazione → attività e distribuzione; ecografia → struttura."
    },
    {
      "id": "tempi-e-cinetica",
      "title": "Tre tempi diversi: esposizione, risposta e feedback",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP",
        "NICE",
        "ETAG"
      ],
      "text": "La farmacologia tiroidea richiede di distinguere almeno tre processi temporali. Il primo è la variazione della quantità di ormone nei compartimenti corporei. Il secondo è l’adattamento dei tessuti, che comprende regolazione genica e modificazioni delle proteine. Il terzo è il riassestamento del sistema di feedback. Un cambiamento nel primo processo non implica che gli altri due siano già completati.\n\nT4 permane generalmente più a lungo di T3 e sostiene una riserva dalla quale può derivare ormone attivo. Le emivite riportate nei testi dipendono però dallo stato tiroideo e dalle condizioni studiate. È più utile capire la differenza di persistenza che memorizzare un numero come costante universale. Anche la durata dell’effetto non coincide necessariamente con l’emivita plasmatica.\n\nUna curva ottenuta dopo una singola somministrazione non descrive automaticamente l’esposizione durante un trattamento ripetuto. Con somministrazioni successive, quanto viene introdotto si somma a quanto non è ancora stato eliminato. Il raggiungimento di un nuovo equilibrio richiede tempo; contemporaneamente cambiano conversione periferica e risposta dei tessuti. Il confronto fra picchi dopo boli equimolari non fornisce da solo un rapporto di sostituzione fra farmaci.\n\nLa stessa cautela vale per gli antitiroidei: bloccare la produzione futura lascia inizialmente disponibili riserve già formate. Un ritardo dell’effetto può quindi riflettere deposito, eliminazione e adattamento, senza dimostrare assenza di azione sul bersaglio. D’altra parte, un miglioramento rapido di un sintomo non dimostra che l’intero asse sia tornato in equilibrio.\n\nPer la sostituzione ripetuta, lo stato stazionario farmacocinetico indica un equilibrio fra apporto ed eliminazione nelle condizioni considerate. Non certifica che sintomi e TSH abbiano già raggiunto il loro assetto finale. Le settimane indicate nelle tabelle didattiche per T4 descrivono una scala temporale, non una scadenza clinica universale. NICE segnala che, dopo una carenza prolungata o un TSH iniziale molto elevato, il riassestamento del TSH può richiedere mesi. Un valore ancora alterato va quindi interpretato rispetto alla storia del trattamento e dell’asse; il solo tempo trascorso non autorizza una correzione automatica.\n\nDurante il trattamento antitiroideo del Graves si osserva una seconda forma di ritardo del feedback. FT4 e T3 possono diminuire mentre il TSH resta ancora soppresso: la risposta ipofisaria riflette anche la precedente esposizione all’eccesso ormonale. Un TSH basso isolato, in questa fase, non quantifica quindi la produzione ancora presente e non dimostra automaticamente insufficiente azione di metimazolo o propiltiouracile. Le linee guida ETA richiamano questo limite nella valutazione iniziale della risposta; NICE considera insieme TSH, FT4 e FT3 nel monitoraggio iniziale degli antitiroidei.\n\nSi può rappresentare il problema con un esempio qualitativo: due controlli mostrano FT4 e T3 in diminuzione e TSH ancora basso. Il dato suggerisce che i diversi componenti dell’asse si stanno modificando con velocità differenti; non consente, da solo, di scegliere una nuova dose. Per interpretarlo servono andamento complessivo, quadro clinico e fase del trattamento. Lo stesso valore di TSH ha quindi un significato diverso prima della terapia, durante il recupero del feedback e dopo una stabilizzazione prolungata.",
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
      "text": "La levotiroxina corrisponde a T4 e fornisce substrato per la produzione periferica di T3. Nelle raccomandazioni NICE per l’ipotiroidismo primario è il trattamento di prima scelta. La liotironina corrisponde a T3: il fatto che sia già attiva e abbia una cinetica diversa non dimostra una superiorità clinica generale. NICE non ne raccomanda l’impiego di routine, da sola o in associazione; la sorveglianza del 2025 non ha modificato questa indicazione.\n\nGli antitiroidei intervengono invece su un sistema che produce ormone. Le tionamidi, come metimazolo e propiltiouracile, interferiscono con reazioni sostenute dalla tireoperossidasi. Il loro bersaglio non è il recettore nucleare TR e non neutralizzano direttamente tutto l’ormone già circolante. Il propiltiouracile aggiunge un effetto sulla conversione periferica: appartenenza di classe ed effetti aggiuntivi vanno tenuti insieme.\n\nLo ioduro mostra un’altra distinzione fra fisiologia e farmacologia. È un substrato indispensabile, ma un carico elevato può anche frenare temporaneamente processi tiroidei, compresa la liberazione dell’ormone. La risposta dipende dallo stato della ghiandola e non autorizza l’idea che assumere più iodio curi qualsiasi disfunzione.\n\nInfine, la tireotossicosi descrive l’eccesso di azione ormonale, mentre l’ipertiroidismo indica un’aumentata produzione della ghiandola. La distinzione, richiamata da NICE, spiega perché ridurre la sintesi e gestire la liberazione di riserve siano problemi differenti. Questi collegamenti orientano lo studio dei farmaci; scelta fra terapie, chirurgia e radioiodio richiede una valutazione dedicata alla causa e al contesto.\n\nLa maggiore persistenza di T4 attenua le oscillazioni fra apporti successivi e lascia ai tessuti un substrato da convertire. Questa proprietà aiuta a comprendere il razionale della sostituzione con levotiroxina, senza attribuirle una capacità di autoregolazione perfetta: assorbimento, conversione e fabbisogno possono cambiare. La maggiore rapidità di T3, invece, è una caratteristica farmacologica e non un’indicazione generica per ogni situazione «acuta». Un confronto di velocità, emivita o attività molecolare non sostituisce la dimostrazione di beneficio e sicurezza nel contesto clinico considerato.",
      "formula": "Levotiroxina → apporto di T4; tionamidi → nuova sintesi; propiltiouracile → anche conversione periferica"
    },
    {
      "id": "sostituzione-e-riserva-surrenalica",
      "title": "Sostituzione ormonale e riserva surrenalica",
      "refs": [
        "CFI",
        "KATZ",
        "APP",
        "LT4"
      ],
      "text": "Correggere una carenza tiroidea modifica un organismo che si è adattato a quella carenza. La ripresa del metabolismo interessa anche il turnover degli altri ormoni: per questo la tiroide non si studia come un sistema chiuso. Un collegamento particolarmente rilevante riguarda il cortisolo, la cui disponibilità dipende dal rapporto fra secrezione ed eliminazione.\n\nSe aumenta la clearance del cortisolo, una concentrazione adeguata richiede che la produzione possa compensare. Quando la riserva surrenalica è ridotta, questa compensazione può mancare. L’introduzione dell’ormone tiroideo può quindi rendere evidente o aggravare un’insufficienza surrenalica non riconosciuta. Il punto non è un antagonismo fra T3 e il recettore dei glucocorticoidi: il problema riguarda l’equilibrio fra capacità di risposta endocrina e nuovo stato metabolico.\n\nIl collegamento è particolarmente chiaro nel deficit ipofisario, che può compromettere sia il comando tiroideo sia quello corticosurrenalico. TSH e FT4 descrivono una parte del quadro; non misurano la riserva dell’asse ACTH–cortisolo. Il riassunto delle caratteristiche della levotiroxina consultato richiama la necessità di affrontare un’insufficienza surrenalica prima di iniziare la sostituzione tiroidea. Questo principio non implica l’aggiunta sistematica di glucocorticoidi a ogni trattamento dell’ipotiroidismo e non costituisce uno schema posologico.\n\nAnche l’eccesso di sostituzione si comprende partendo dalla fisiologia. Se l’apporto supera il fabbisogno, il trattamento può generare un eccesso di azione ormonale: tremore, intolleranza al caldo e palpitazioni non diventano benefici perché l’ormone proviene da un farmaco. Vanno inoltre distinti eccesso protratto e ingestione acuta. La possibile comparsa ritardata dei segni dopo un sovradosaggio non offre un intervallo di sicurezza né permette di escludere il rischio in assenza di sintomi iniziali.",
      "formula": "Riserva surrenalica ridotta + aumento della clearance del cortisolo → possibile insufficienza clinicamente evidente"
    },
    {
      "id": "tionamidi-deposito-e-sicurezza",
      "title": "Tionamidi: bersaglio, deposito e limiti dell’effetto",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP",
        "PTUM",
        "PTUS"
      ],
      "text": "Le tionamidi agiscono sulla costruzione di nuovi ormoni nel follicolo. Inibendo reazioni sostenute dalla tireoperossidasi, ostacolano l’organificazione dello ioduro e l’accoppiamento dei residui iodati sulla tireoglobulina. Metimazolo e propiltiouracile appartengono quindi alla stessa famiglia funzionale, pur avendo caratteristiche differenti. Il carbimazolo descritto nei testi è un profarmaco del metimazolo: questa relazione chimica non dimostra che prodotti e disponibilità locali siano intercambiabili.\n\nDopo il blocco della sintesi, il colloide contiene ancora materiale formato in precedenza. Le tionamidi non distruggono immediatamente questa riserva e non neutralizzano l’ormone già in circolo. Il calo dell’esposizione dipende anche dall’esaurimento delle riserve e dall’eliminazione dell’ormone. Nel descrivere il risultato complessivo, dire che «arriva meno ormone al sangue» non equivale dunque a identificare un blocco diretto della liberazione. Questa distinzione chiarisce il ritardo fra azione sul bersaglio e piena risposta biologica.\n\nAnche il farmaco ha una distribuzione da considerare. La sua permanenza nella ghiandola può differire da quella nel plasma: l’emivita plasmatica, da sola, non riassume la durata dell’inibizione intratiroidea. A questo si aggiunge, per il propiltiouracile, l’inibizione della conversione periferica di T4 in T3. È un effetto ulteriore su un altro passaggio del sistema; non trasforma il farmaco in un antagonista di TR e non ne dimostra una superiorità universale.\n\nL’effetto desiderato non esaurisce il profilo farmacologico. I documenti di prodotto del propiltiouracile segnalano agranulocitosi e danno epatico anche grave. Febbre o mal di gola durante il trattamento richiedono un contatto medico immediato per il possibile problema ematologico; non sono una misura dell’efficacia antitiroidea. La risposta della tiroide e la tossicità a carico di altri organi sono dimensioni distinte della valutazione.\n\nInfine, frenare la sintesi con una tionamide, ridurre temporaneamente processi tiroidei con ioduro e danneggiare il tessuto funzionante mediante radioiodio sono interventi diversi. La parola «antitiroideo» non basta a renderli equivalenti. La causa della tireotossicosi determina quali passaggi siano realmente aumentati: un deposito che si svuota per danno follicolare pone un problema differente da una ghiandola che continua a sintetizzare troppo ormone.",
      "formula": "TPO inibita → minore nuova sintesi; ormone già formato ancora disponibile → risposta differita"
    },
    {
      "id": "ioduro-autoregolazione",
      "title": "Ioduro: substrato, freno transitorio e risposta della ghiandola",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "APP",
        "ETAI",
        "KI"
      ],
      "text": "Lo ioduro è necessario per costruire T3 e T4, ma la risposta della tiroide non cresce semplicemente in proporzione alla quantità disponibile. Occorre distinguere l’apporto del substrato, il suo ingresso nel tireocita e le reazioni che lo incorporano nella tireoglobulina. NIS contribuisce al trasporto; la TPO sostiene organificazione e accoppiamento. La disponibilità di ioduro si inserisce quindi in un sistema regolato, non in una produzione che accelera senza limiti.\n\nAccanto al controllo esercitato dal TSH esiste un’autoregolazione locale. Un carico elevato di ioduro può inibire temporaneamente l’organificazione: è l’effetto di Wolff–Chaikoff. L’evento riguarda la sintesi nella ghiandola e non corrisponde a un antagonismo del recettore nucleare TR nei tessuti. Gli ioduri possono anche ridurre la liberazione dell’ormone già formato, attraverso processi che coinvolgono la proteolisi della tireoglobulina. Inibire la costruzione di nuovo ormone e ridurre l’uscita dalle riserve sono due azioni da tenere distinte, anche quando concorrono allo stesso calo dell’esposizione.\n\nIl freno iniziale non è necessariamente permanente. Si parla di «fuga» dal blocco quando la sintesi riprende nonostante persista un apporto elevato. Questo recupero funzionale non significa che tutto lo iodio sia già stato eliminato. Le linee guida ETA sui mezzi di contrasto iodati distinguono tale adattamento dal suo fallimento, che può contribuire a ipotiroidismo nei soggetti predisposti. La sequenza temporale conta quanto la direzione dell’effetto iniziale: osservare un’inibizione non dimostra che la ghiandola resterà indefinitamente inibita.\n\nIl fenomeno di Jod–Basedow descrive invece un aumento della produzione ormonale favorito dall’eccesso di iodio in una tiroide suscettibile. Il tessuto nodulare autonomo e il Graves latente sono contesti rilevanti. Una maggiore disponibilità di substrato può alimentare un apparato sintetico già predisposto a produrre troppo. Non va confuso con il normale recupero dopo il blocco acuto: «fuga» e ipertiroidismo indotto da iodio non sono sinonimi. Il nome della sostanza, da solo, non permette perciò di prevedere se prevalgano adattamento, ipofunzione o iperfunzione.\n\nQuesta distinzione aiuta a leggere insieme farmaci ed esposizioni. Mezzi di contrasto iodati e amiodarone possono aumentare il carico iodico; per l’amiodarone restano inoltre rilevanti gli effetti sulla conversione periferica e il possibile danno follicolare descritti nella sezione dedicata. Una coincidenza temporale non identifica automaticamente un unico meccanismo. Anche le informazioni di prodotto dello ioduro di potassio richiamano il rischio di ipertiroidismo nei soggetti predisposti e l’interferenza con indagini e trattamenti radioiodici: l’effetto farmacologico va interpretato nel contesto della specifica indicazione.\n\nIl confronto con le tionamidi chiarisce infine il bersaglio. Metimazolo e propiltiouracile frenano la nuova sintesi; un carico di ioduro può agire transitoriamente su più processi, compresa la liberazione dell’ormone già formato. Nessuna delle due descrizioni autorizza a usare lo iodio come sostituto generico di un antitiroideo. Il ragionamento deve collegare stato della ghiandola, quantità e durata dell’esposizione, produzione e deposito. È questa combinazione a spiegare il comportamento apparentemente opposto dello stesso elemento.",
      "formula": "Carico di ioduro → possibile freno transitorio. Adattamento → ripresa della sintesi; mancato adattamento → possibile ipofunzione. Tiroide predisposta → possibile iperproduzione."
    },
    {
      "id": "controllo-e-remissione",
      "title": "Controllo biochimico, remissione e causa dell’ipertiroidismo",
      "refs": [
        "CFI",
        "NICE",
        "ATAG",
        "ATAH"
      ],
      "text": "Una concentrazione ormonale rientrata nell’intervallo di riferimento può descrivere il risultato di un trattamento ancora in corso. Non dimostra, da sola, che il processo responsabile dell’ipertiroidismo sia terminato. Il controllo biochimico e la remissione sono quindi esiti diversi: nel primo si osserva la funzione tiroidea sotto l’effetto della terapia; nel secondo si valuta se il miglioramento persiste anche dopo la conclusione del trattamento, nel tempo e con i controlli appropriati.\n\nLa distinzione diventa più chiara confrontando due cause di aumentata sintesi. Nella malattia di Graves, anticorpi stimolanti attivano il recettore del TSH sulla cellula follicolare. Una tionamide interviene più a valle, sulle reazioni di sintesi sostenute dalla TPO: il suo effetto farmacologico non equivale a neutralizzare direttamente quegli anticorpi. Durante il trattamento può verificarsi una remissione della malattia, ma non è garantita dal semplice blocco enzimatico. Nelle forme nodulari autonome, invece, ridurre la sintesi non elimina il tessuto responsabile dell’autonomia. La stessa risposta iniziale al farmaco può perciò avere significati diversi per l’evoluzione successiva.\n\nNICE distingue esplicitamente Graves e gozzo nodulare tossico nel discutere le opzioni terapeutiche. La causa, la probabilità di remissione, i problemi compressivi e l’eventuale interessamento oculare partecipano alla scelta. Questo spiega perché una tabella con una sola percentuale di «successo» possa essere fuorviante: normalizzazione durante la terapia, assenza di recidiva dopo la sospensione e controllo ottenuto eliminando tessuto funzionante non misurano lo stesso risultato. Prima di confrontare due trattamenti bisogna dunque definire quale esito viene contato e dopo quanto tempo, oltre alla popolazione studiata.",
      "formula": "Causa → produzione aumentata; farmaco → controllo della sintesi. Controllo durante terapia ≠ remissione dopo terapia."
    },
    {
      "id": "radioiodio-e-tessuto-funzionante",
      "title": "Radioiodio e chirurgia: intervenire sul tessuto funzionante",
      "refs": [
        "CFI",
        "KATZ",
        "RANG",
        "NICE",
        "ATAH"
      ],
      "text": "Lo iodio radioattivo sfrutta una proprietà già incontrata nella fisiologia follicolare: la tiroide concentra ioduro per costruire gli ormoni. Il trasporto contribuisce a portare lo iodio-131 nel tessuto, mentre l’emissione di radiazione beta produce il danno cellulare che sostiene l’effetto terapeutico. Captazione e danno sono due passaggi della stessa strategia. Il bersaglio finale è il tessuto capace di produrre ormone; non si tratta di occupare TR come antagonista né di bloccare soltanto la TPO.\n\nLa distinzione dallo ioduro non radioattivo è essenziale. Un carico di ioduro può modificare temporaneamente i processi tiroidei; nel radioiodio interviene anche il decadimento dell’isotopo. La comune presenza di iodio non rende equivalenti gli effetti. Inoltre, captare il radionuclide non significa ottenere immediatamente il risultato endocrino: il danno del tessuto e la variazione dell’esposizione ormonale si sviluppano nel tempo. Come per le tionamidi, occorre distinguere l’evento iniziale dalla risposta misurata; il passaggio che determina il ritardo, però, non è identico.\n\nLa tiroidectomia riduce invece la capacità secretoria asportando tessuto. L’asportazione totale e quella limitata a una parte della ghiandola lasciano riserve funzionali differenti. Dopo la rimozione completa viene meno la fonte tiroidea di ormone e diventa necessaria la sostituzione; dopo un intervento parziale la funzione residua va valutata. Anche il radioiodio può condurre a ipotiroidismo. Il successivo impiego di levotiroxina può quindi appartenere al percorso terapeutico conseguente al controllo dell’ipertiroidismo, senza rappresentare di per sé una contraddizione farmacologica.\n\nLa funzione della tiroide non è l’unico esito rilevante. L’orbitopatia di Graves richiede una valutazione distinta e il radioiodio può peggiorarla. Per la chirurgia, le strutture vicine aiutano a comprendere rischi diversi: il danno alle paratiroidi può compromettere il controllo della calcemia, quello ai nervi laringei la funzione vocale. Queste differenze spiegano perché il confronto debba includere organi coinvolti, rapidità, persistenza e conseguenze del trattamento. Una percentuale di efficacia isolata non sostituisce questo ragionamento.",
      "formula": "Iodio-131: captazione → danno del tessuto → produzione ridotta. Chirurgia: asportazione → capacità secretoria residua. Dopo entrambi: funzione tiroidea da rivalutare."
    },
    {
      "id": "farmaci-e-sedi-di-interazione",
      "title": "Dove agisce l’interazione: ghiandola, distribuzione o metabolismo?",
      "refs": [
        "CFI",
        "KATZ",
        "DII14",
        "LT4"
      ],
      "text": "La stessa espressione, «un farmaco modifica gli esami tiroidei», può descrivere fenomeni differenti. Il primo livello è la ghiandola: interferire con sintesi o liberazione dell’ormone cambia la produzione endogena. Il secondo è la distribuzione: modificare le proteine plasmatiche può cambiare soprattutto l’ormone totale. Il terzo è il metabolismo periferico, che comprende conversione e rimozione. Un quarto livello riguarda la misura stessa, quando il metodo analitico restituisce un risultato alterato senza un corrispondente cambiamento biologico.\n\nLa rifampicina permette di collegare questi concetti alla farmacologia degli antibatterici. Il suo bersaglio antimicrobico è la RNA-polimerasi batterica; l’induzione di sistemi metabolici dell’ospite è un effetto distinto, rilevante per le interazioni. Katzung e lo SmPC della levotiroxina segnalano un aumento del metabolismo dell’ormone durante l’associazione. Non bisogna quindi cercare un antagonismo della rifampicina sul recettore TR per spiegare una minore esposizione alla terapia sostitutiva.\n\nUna tiroide funzionante può compensare in parte le variazioni del destino periferico attraverso il feedback. Questa possibilità è diversa da quella di chi dipende prevalentemente dall’apporto farmacologico. Identica interazione non significa perciò identico effetto finale in tutte le persone. Inoltre, l’avvio e la cessazione di un trattamento possono cambiare l’equilibrio in direzioni opposte, con tempi che non coincidono necessariamente con quelli dell’assunzione.\n\nLa sede dell’interazione precede la scelta della risposta clinica. Ridotto assorbimento, metabolismo accelerato e interferenza analitica non si risolvono automaticamente nello stesso modo. Nello studio è utile ricostruire il passaggio coinvolto prima di trasformare un valore di laboratorio in una conclusione sulla funzione della ghiandola.",
      "formula": "Produzione → distribuzione → conversione ed eliminazione → misura: quattro livelli da distinguere"
    },
    {
      "id": "amiodarone-e-tiroide",
      "title": "Amiodarone: più meccanismi dietro un unico farmaco",
      "refs": [
        "CFI",
        "KATZ",
        "CII5",
        "AMIO",
        "ETA"
      ],
      "text": "L’amiodarone è studiato come antiaritmico capace di interferire con più correnti ioniche. Questa descrizione spiega una parte della sua azione cardiaca, ma non basta a spiegare tutte le conseguenze endocrine. La molecola contiene iodio e può modificare il metabolismo degli ormoni tiroidei; il rapporto con la tiroide va ricostruito separatamente dal suo inquadramento nella classificazione degli antiaritmici.\n\nUn primo fenomeno è la riduzione della conversione periferica di T4 in T3. Lo SmPC distingue le conseguenti variazioni biochimiche, possibili anche in persone clinicamente eutiroidee, da una vera disfunzione tiroidea. Non ogni aumento di FT4 durante il trattamento significa quindi che la ghiandola stia producendo ormone in eccesso. Non si tratta necessariamente di un errore dello strumento: può essere cambiata la fisiologia del sistema misurato.\n\nEsistono però anche ipotiroidismo e tireotossicosi associati all’amiodarone. Le linee guida ETA del 2018 distinguono, per la tireotossicosi, un meccanismo di aumentata sintesi favorito dal carico iodato e un meccanismo distruttivo, con liberazione di riserve da tessuto danneggiato. Sono possibili forme miste. Il primo e il secondo processo coinvolgono passaggi diversi del follicolo e non diventano equivalenti solo perché entrambi aumentano l’esposizione ormonale.\n\nLa persistenza del farmaco nei tessuti aggiunge una dimensione temporale: la fine dell’assunzione non equivale alla scomparsa immediata dell’esposizione. Le fonti riportano emivite variabili; il numero isolato non predice la durata di una complicanza. Il capitolo utilizza queste distinzioni per spiegare i meccanismi, senza proporre una regola automatica di sospensione o un algoritmo per le diverse forme.",
      "formula": "Amiodarone → conversione periferica modificata; carico iodato o danno follicolare → possibili disfunzioni"
    },
    {
      "id": "checkpoint-e-asse-tiroideo",
      "title": "Checkpoint immunitari: dalla risposta antitumorale all’asse endocrino",
      "refs": [
        "CFI",
        "SII10",
        "EMA"
      ],
      "text": "CTLA-4 e PD-1 partecipano al controllo dell’attivazione dei linfociti T. Gli anticorpi diretti contro questi checkpoint riducono segnali inibitori e possono sostenere la risposta antitumorale. Ipilimumab agisce su CTLA-4; nivolumab su PD-1. La rimozione di un freno immunitario ha però conseguenze che possono estendersi ai tessuti sani: il collegamento con la tiroide riguarda la regolazione dell’immunità, non un legame di questi anticorpi al recettore nucleare TR.\n\nLe informazioni EMA di nivolumab descrivono endocrinopatie immunomediate, comprese alterazioni tiroidee e ipofisite. È una distinzione anatomica decisiva. Un danno alla tiroide riguarda il compartimento che produce e conserva l’ormone; un interessamento ipofisario può compromettere il comando a monte e coinvolgere altri assi endocrini. Limitare il ragionamento alla sola ghiandola tiroidea rischia quindi di perdere una parte del problema.\n\nStanchezza e variazioni delle condizioni generali hanno molte possibili spiegazioni nel contesto oncologico. Il loro significato dipende dall’andamento temporale, dai trattamenti e dalla funzione endocrina nel suo insieme. Il confronto con la fonte regolatoria conferma la necessità di distinguere sedi e meccanismi, senza trasferire qui frequenze, schemi oncologici o protocolli di gestione delle reazioni avverse.\n\nQuesto esempio mostra come un bersaglio farmacologico lontano dalla tiroide possa modificarne indirettamente la funzione. Per collegare recettore, farmaco e patologia bisogna seguire la catena causale: blocco del checkpoint, cambiamento della risposta immunitaria, possibile interessamento di un organo endocrino e conseguenze sul circuito ormonale.",
      "formula": "Blocco di CTLA-4 o PD-1 → risposta immunitaria modificata → possibile danno endocrino periferico o centrale"
    },
    {
      "id": "esposizione-e-laboratorio",
      "title": "Interpretare esposizione, interazioni e laboratorio",
      "refs": [
        "KATZ",
        "APP",
        "NICE",
        "LT4",
        "CFI"
      ],
      "text": "La dose nominale di levotiroxina non coincide con la quantità assorbita. Cibo, formulazione e condizioni gastrointestinali possono modificare l’esposizione. Il riassunto delle caratteristiche del prodotto consultato segnala interazioni con ferro, calcio e antiacidi, oltre all’effetto del pH gastrico durante uso di inibitori di pompa protonica. Questo è un problema di assorbimento, distinto dall’ingresso dell’ormone nelle cellule bersaglio: una generica competizione con tutte le proteine alimentari non ne costituisce una spiegazione adeguata.\n\nSeparare temporalmente due assunzioni e modificare il pH gastrico non sono lo stesso intervento. Le indicazioni sugli intervalli rispetto a cibo, ferro o calcio dipendono dal prodotto e dalla situazione; non è corretto estendere una sola regola a tutte le interazioni. In particolare, l’effetto degli inibitori di pompa sul pH non si interpreta come una semplice competizione simultanea nel lume.\n\nUn risultato inatteso può dipendere da esposizione variabile, legame plasmatico, metabolismo o interferenza della misura. La biotina può alterare alcuni immunodosaggi senza produrre una corrispondente alterazione fisiologica. NICE distingue inoltre l’interpretazione del TSH quando si sospetta una disfunzione centrale, situazione in cui è necessario considerare anche FT4. Il dato deve essere letto nel contesto dell’asse, non come comando automatico alla prescrizione.\n\nPer la sostituzione nell’ipotiroidismo primario, NICE richiama l’obiettivo di evitare soppressione del TSH e tireotossicosi. Il prodotto consultato segnala rischi cardiovascolari e ossei dell’eccesso di esposizione. Una risposta lenta, da sola, non dimostra che occorra aumentare subito l’apporto.\n\nL’esempio riunisce i livelli del capitolo: identificare la sede del problema, distinguere ormone totale e libero, considerare conversione e tempi di adattamento, poi interpretare sintomi e laboratorio. Dosi, intervalli dei controlli, emergenze, gravidanza e gestione specialistica degli antitiroidei restano fuori da questa sintesi didattica e richiedono fonti specifiche aggiornate.",
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
    },
    {
      "question": "Il passaggio nella bile equivale sempre a eliminazione definitiva?",
      "answer": "No: una parte dei coniugati può essere deconiugata nell’intestino e riassorbita; ricircolo e nuova sintesi sono processi diversi."
    },
    {
      "question": "La rifampicina riduce l’esposizione alla levotiroxina bloccando TR?",
      "answer": "No: l’interazione descritta riguarda l’aumento del metabolismo dell’ormone, distinto dal bersaglio antibatterico della rifampicina."
    },
    {
      "question": "Ogni variazione degli ormoni durante amiodarone dimostra nuova iperproduzione tiroidea?",
      "answer": "No: conversione periferica, aumentata sintesi e danno follicolare sono meccanismi distinti; possono esistere anche variazioni biochimiche in persone eutiroidee."
    },
    {
      "question": "Le endocrinopatie da checkpoint riguardano soltanto la tiroide?",
      "answer": "No: il possibile interessamento ipofisario coinvolge il comando centrale e può riguardare più assi endocrini."
    },
    {
      "question": "Lo stato stazionario di T4 garantisce che il TSH abbia già completato il proprio adattamento?",
      "answer": "No. Equilibrio fra apporto ed eliminazione, risposta tissutale e feedback sono processi distinti; la storia della carenza e del trattamento influenza il riassestamento."
    },
    {
      "question": "Perché la riserva surrenalica è rilevante prima della sostituzione tiroidea?",
      "answer": "L’aumento della clearance del cortisolo può rendere insufficiente una produzione non in grado di compensare. Nei deficit ipofisari possono essere coinvolti più assi; ciò non implica glucocorticoidi per ogni ipotiroidismo."
    },
    {
      "question": "Una tionamide blocca direttamente la liberazione di tutto l’ormone già formato?",
      "answer": "No. Riduce la nuova sintesi; depositi già costituiti e ormone circolante contribuiscono al ritardo della risposta. Il propiltiouracile aggiunge un effetto sulla conversione periferica."
    },
    {
      "question": "Una funzione tiroidea normale durante una tionamide dimostra la remissione della malattia?",
      "answer": "No. Dimostra il controllo nel momento osservato; la remissione richiede una valutazione dopo il trattamento. La causa conta: Graves e autonomia nodulare non hanno la stessa evoluzione."
    },
    {
      "question": "Perché la levotiroxina può essere necessaria dopo un trattamento dell’ipertiroidismo?",
      "answer": "Se l’asportazione o il danno del tessuto riducono la funzione tiroidea fino all’ipotiroidismo, occorre sostituire l’ormone mancante. Controllare l’eccesso e conservare la capacità secretoria sono esiti differenti."
    },
    {
      "question": "Perché una tionamide non corregge il meccanismo di una tireotossicosi puramente distruttiva?",
      "answer": "Inibisce la nuova sintesi sostenuta dalla TPO, mentre il danno follicolare libera ormone già formato. La causa dell’esposizione è lo svuotamento delle riserve; controllo dei sintomi e controllo della produzione sono obiettivi diversi."
    },
    {
      "question": "Un gozzo con FT4 normale e FT3 aumentata dimostra ipertiroidismo subclinico?",
      "answer": "No. Il gozzo descrive il volume e non determina la funzione. La definizione subclinica richiede TSH basso e sia FT4 sia FT3 nei rispettivi intervalli: una FT3 aumentata non soddisfa quel profilo."
    },
    {
      "question": "TRAb, ecografia e captazione misurano la stessa proprietà della tiroide?",
      "answer": "No. I TRAb forniscono un indizio immunologico legato al recettore del TSH; l’ecografia descrive struttura e, con Doppler, vascolarizzazione; la captazione e la scintigrafia studiano accumulo e distribuzione del tracciante. I dati vanno integrati con funzione ed esposizioni, perché un carico di iodio può ridurre la captazione."
    },
    {
      "question": "Un TSH ancora soppresso mentre FT4 e T3 diminuiscono dimostra che una tionamide non sta agendo?",
      "answer": "No. All’inizio del trattamento il TSH può recuperare più lentamente degli ormoni circolanti. Servono andamento di FT4 e T3, quadro clinico e fase terapeutica; il solo TSH non autorizza una variazione automatica della dose."
    },
    {
      "question": "La fuga dall’effetto di Wolff–Chaikoff significa che lo iodio è stato eliminato o che è comparso Jod–Basedow?",
      "answer": "Nessuna delle due conclusioni è automatica. La fuga indica ripresa della sintesi nonostante il carico iodico; Jod–Basedow indica iperproduzione indotta dall’eccesso di iodio in una tiroide suscettibile. Adattamento, eliminazione e malattia sono fenomeni distinti."
    },
    {
      "question": "Perché ioduro e tionamidi non sono equivalenti anche se entrambi possono ridurre l’esposizione agli ormoni tiroidei?",
      "answer": "Le tionamidi inibiscono la nuova sintesi sostenuta dalla TPO. Un carico elevato di ioduro può inibire transitoriamente l’organificazione e la liberazione dalle riserve, con una risposta dipendente dallo stato della ghiandola e dall’adattamento. Un risultato finale simile non dimostra identità di meccanismo o intercambiabilità terapeutica."
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · AA 2025–26",
      "detail": "PDF 801–817 e 824–835, etichette 799–815 e 822–833, letti per intervalli. In questo lotto PDF 831–835 (Lancet 775–779): testo e impaginazione controllati; integrato il passaggio sul carico iodico a 832. PDF 834–835 sono bibliografia: gli articoli citati non sono stati letti singolarmente. Chaker et al., Hyperthyroidism, Lancet 2024;403:768–780, DOI 10.1016/S0140-6736(23)02016-0; ricerca dichiarata fino al 16 settembre 2022. Lettura cumulativa limitata a 768–779; pagina 780 non letta. Nessuna figura o tabella riprodotta."
    },
    {
      "id": "KATZ",
      "title": "Katzung · Farmacologia generale e clinica · IX italiana 2014 / XII originale 2012",
      "detail": "Capitolo 38, PDF 785–800, editoriali 765–780, letti per intervalli. In questo lotto rilette e controllate PDF 788 e 794 (editoriali 768 e 774) per autoregolazione e azione degli ioduri su organificazione e liberazione. PDF 794, prima di contesto, ora contribuisce con passaggi selezionati. Dosi, urgenze, gravidanza e protocolli storici esclusi."
    },
    {
      "id": "RANG",
      "title": "Rang & Dale · Farmacologia · VIII italiana 2016 / originale 2015",
      "detail": "Capitolo 34, PDF 651–659, numero editoriale non visibile. PDF 656 riletto e controllato per il rapporto fra carico iodico, amiodarone e funzione tiroidea, senza nuove pagine uniche. Frase conflittuale sul recettore TRH e gerarchie terapeutiche storiche escluse. Nessuna figura riprodotta."
    },
    {
      "id": "APP",
      "title": "Appunti del corso di Farmacologia I · AA 2025–26",
      "detail": "Lezione 19 del 1 dicembre 2025, PDF 333–335, stampate 328–330. In questo lotto PDF 335 (stampata 330; lezione p.11) riletto e controllato per azione degli ioduri sulla liberazione. Figure condivise non considerate conferme indipendenti; classificazione impropria del PTU, algoritmi, dosi e gerarchie terapeutiche esclusi."
    },
    {
      "id": "NICE",
      "title": "NICE NG145 · Thyroid disease: assessment and management · aggiornamento 2023",
      "detail": "Consultazione 16 novembre 2026 dei passaggi ufficiali indicizzati: §§1.1.2,1.2.8–1.2.11,1.3.3–1.3.4,1.4.1–1.4.4,1.6.1 e1.6.5. Apertura diretta HTML/PDF negata (403); non dichiarata lettura integrale. In questo lotto confrontati i passaggi ufficiali indicizzati1.1.5 e1.6.9–1.6.17; apertura diretta403. Non trasferito un algoritmo terapeutico. In questo lotto: sezioni 1.6, 1.8, 1.9 e definizioni, nei soli passaggi ufficiali indicizzati; apertura diretta 403. Confrontati meccanismo della tireotossicosi, profilo subclinico e distinzione volume/funzione; nessuna soglia automatica trasferita. Lotto826–830: il19novembre2026 confrontati i passaggi ufficiali indicizzati1.2.8–1.2.11,1.6.1–1.6.2 e1.7.9. Accesso diretto403; nessuna lettura integrale. Ruolo di TRAb/imaging e monitoraggio distinto da posologia e calendario.",
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
      "detail": "Prodotto 5682, testo 16 ottobre 2026, consultato 16 novembre 2026. In questo lotto §§4.3–4.4,4.8 e5.1–5.2; §4.9 soltanto per la possibile latenza dei segni. Già consultato §4.5. Fonte britannica, non RCP italiano; posologie e gestione del sovradosaggio non trasferite.",
      "url": "https://www.medicines.org.uk/emc/product/5682/smpc"
    },
    {
      "id": "CII5",
      "title": "Appunti e diapositive del corso di Farmacologia II · AA 2025–26",
      "detail": "Lezione 5 del 5 novembre 2025, PDF e stampate 2–3: testo completo controllato; nessuna figura. Integrati multicanalità e persistenza dell’amiodarone. Discussione su integratori esclusa."
    },
    {
      "id": "SII10",
      "title": "Appunti e diapositive del corso di Farmacologia II · AA 2025–26",
      "detail": "Lezione 10 del 18 novembre 2025, PDF e stampate 10–11: testo e schemi CTLA-4/PD-1 controllati. Integrati meccanismi e rischio endocrino; indicazioni oncologiche, schemi e premedicazioni non trasferiti."
    },
    {
      "id": "DII14",
      "title": "Appunti e diapositive del corso di Farmacologia II · AA 2025–26",
      "detail": "Lezione 14 del 13 gennaio 2026, PDF e stampata 25: testo completo e figura controllati. Integrato soltanto il collegamento fra rifampicina e induzione metabolica; terapia della tubercolosi e figura NAT2 escluse."
    },
    {
      "id": "AMIO",
      "title": "Amiodarone · SmPC britannico · testo 7 ottobre 2026",
      "detail": "Prodotto 101141, consultato il 16 novembre 2026: §4.4 endocrinologia e §5.2 persistenza; distinte variazioni biochimiche e disfunzione. Fonte britannica, non RCP italiano; nessuna posologia o istruzione di sospensione trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/101141/smpc"
    },
    {
      "id": "ETA",
      "title": "European Thyroid Association · disfunzione tiroidea associata ad amiodarone · 2018",
      "detail": "Consultazione del 16 novembre 2026 dell’abstract ufficiale indicizzato: distinzione fra aumentata sintesi, danno distruttivo e forme miste. Apertura PMC fermata dalla verifica del browser; non dichiarata lettura integrale né revisione aggiornata di tutta la letteratura.",
      "url": "https://doi.org/10.1159/000486957"
    },
    {
      "id": "EMA",
      "title": "EMA · Opdivo · informazioni del prodotto",
      "detail": "Documento corrente consultato il 16 novembre 2026: §4.4 endocrinopatie, PDF 18; §5.1 meccanismo, PDF 45. Letti i soli passaggi pertinenti, non tutte le 308 pagine. Posologie, frequenze e algoritmi esclusi.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/opdivo-epar-product-information_en.pdf"
    },
    {
      "id": "PTUM",
      "title": "Propiltiouracile · SmPC britannico Morningside · testo 10 marzo 2022",
      "detail": "Prodotto 14252, consultato 16 novembre 2026: §5.1 per TPO, ormone preformato e conversione periferica; §5.2 per ritenzione tiroidea. Confronto mirato, non RCP italiano né revisione integrale del documento. Posologie e trattamento del sovradosaggio esclusi.",
      "url": "https://www.medicines.org.uk/emc/product/14252/smpc"
    },
    {
      "id": "PTUS",
      "title": "Propiltiouracile · SmPC britannico Wockhardt · testo 6 febbraio 2026",
      "detail": "Prodotto 3123, consultato 16 novembre 2026: §§4.4,4.8 per rischi ematologici ed epatici; §5.1 per sintesi e latenza dell’effetto. Documento di un altro prodotto, mantenuto distinto. Frequenze, protocolli e gravidanza non trasferiti.",
      "url": "https://www.medicines.org.uk/emc/product/3123/smpc"
    },
    {
      "id": "ATAH",
      "title": "American Thyroid Association · Hyperthyroidism",
      "detail": "Consultato16novembre2026: sezioni su antitiroidei, radioiodio e chirurgia, per controllo/remissione, tessuto funzionante, funzione residua e rischi oculari/paratiroidei/laringei. Informazione ufficiale per pazienti; data di revisione non indicata. Nessuna dose o frequenza trasferita.",
      "url": "https://www.thyroid.org/hyperthyroidism/"
    },
    {
      "id": "ATAG",
      "title": "American Thyroid Association · Graves’ Disease",
      "detail": "Consultato16novembre2026: causa immunologica e trattamento, per anticorpi al recettore delTSH e possibilità di remissione. Informazione ufficiale per pazienti; data di revisione non indicata. Nessun regime o calendario trasferito.",
      "url": "https://www.thyroid.org/graves-disease/"
    },
    {
      "id": "ATAT",
      "title": "American Thyroid Association · Thyroiditis",
      "detail": "Consultato il 16 novembre 2026: testo delle sezioni su sintomi, decorso e trattamento; liberazione di riserve, possibile fase ipotiroidea e limite degli antitiroidei nella fase distruttiva. Informazione ufficiale per pazienti, data di revisione non indicata. Nessuna dose, percentuale o durata trasferita.",
      "url": "https://www.thyroid.org/thyroiditis/"
    },
    {
      "id": "ATAGO",
      "title": "American Thyroid Association · Goiter",
      "detail": "Consultato il 16 novembre 2026: definizione e cause; volume distinto dalla funzione e risposta allo stimolo del TSH. Informazione ufficiale per pazienti, data di revisione non indicata. Nessun algoritmo terapeutico trasferito.",
      "url": "https://www.thyroid.org/goiter/"
    },
    {
      "id": "ETAG",
      "title": "European Thyroid Association · linea guida sul Graves · 2018",
      "detail": "Consultazione 19 novembre 2026 del testo primario: sezioni Diagnosis/Serology, Imaging e passaggi iniziali Medical Treatment, per saggi TRAb, ruolo dell’imaging e ritardo del TSH. Differenza con NICE sull’ecografia conservata. Documento del2018, non interamente letto né revisione di tutte le linee guida; dosi, calendari e algoritmi esclusi.",
      "url": "https://doi.org/10.1159/000490384"
    },
    {
      "id": "ATAF",
      "title": "American Thyroid Association · Thyroid Function Tests",
      "detail": "Consultazione 19 novembre2026: sezioni Tests, Thyroid Antibody Tests e Non-Blood Tests. Distinti funzione, anticorpi e captazione. Scheda informativa ufficiale per pazienti, data di revisione non indicata; figura non riprodotta e nessuna indicazione numerica trasferita.",
      "url": "https://www.thyroid.org/thyroid-function-tests/"
    },
    {
      "id": "ETAI",
      "title": "European Thyroid Association · disfunzione tiroidea da mezzi di contrasto iodati · 2021",
      "detail": "Consultazione 19 novembre 2026 del testo primario: Monitoring/Does ICM exposure affect thyroid function tests e passaggi su eziologia di iper- e ipotiroidismo. Distinti blocco di Wolff–Chaikoff, adattamento, mancata fuga e Jod–Basedow. Lettura circoscritta; nessuna revisione completa delle linee guida, dose, calendario o algoritmo trasferito.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8314764/"
    },
    {
      "id": "KI",
      "title": "Potassium iodide 65 mg · G.L Pharma UK · SmPC britannico",
      "detail": "Consultato 19 novembre 2026; pagina emc aggiornata il 25 agosto 2026. §4.1 per l’indicazione radioprotettiva specifica; §§4.4–4.5 per rischio nei predisposti e interferenza radioiodica. Fonte britannica, non RCP italiano. Nessuna dose, indicazione per ipertiroidismo o procedura radioprotettiva trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/15911/smpc"
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
    },
    {
      "id": "CHEMBL633",
      "label": "AMIODARONE"
    },
    {
      "id": "CHEMBL2108738",
      "label": "NIVOLUMAB"
    }
  ],
  "relatedExistingChapterIds": [
    "gpcr",
    "modelli-pk",
    "metabolismo-trasportatori",
    "popolazioni-speciali",
    "antiaritmici",
    "anticorpi-biologici"
  ],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-19",
  "readingManifest": "./data/terapia-tiroidea-reading.json",
  "coverage": "62 pagine locali uniche pertinenti alla tiroide lette, 53 con passaggi integrati. Questo lotto: 5 pagine nuove e 4 rilette, tutte 9 controllate visivamente; 5 sostengono passaggi selezionati. Due pagine contengono solo bibliografia: non equivalgono alla lettura degli articoli citati. Nessun libro o corso interamente letto; nessuna revisione clinica indipendente.",
  "wordCount": 6517
});
