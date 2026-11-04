// Sintesi didattica originale; copertura circoscritta nei registri collegati.
export const THEORY_HISTAMINE = Object.freeze({
  "id": "istamina-antistaminici",
  "volume": 9,
  "title": "Istamina e anti-H1: dal recettore al controllo dei sintomi",
  "lead": "Agonismo inverso, distribuzione cerebrale e bersagli aggiuntivi spiegano benefici e rischi degli anti-H1. Un percorso fra rinite, orticaria, prurito e limiti nelle emergenze.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-04",
  "readingManifest": "./data/istamina-antistaminici-reading.json",
  "sections": [
    {
      "id": "mediatore",
      "title": "Un mediatore, molte sedi: perché la risposta dipende dal tessuto",
      "refs": [
        "KAT",
        "RAN"
      ],
      "text": "L’istamina è una piccola ammina prodotta dalla decarbossilazione dell’istidina. Il suo nome richiama spesso l’allergia, ma il suo ruolo comprende anche secrezione gastrica e regolazione della veglia. Per capire un farmaco antistaminico occorre quindi indicare quale recettore raggiunge e in quale compartimento agisce. La stessa molecola segnale può produrre conseguenze differenti quando incontra cellule dotate di recettori e apparati di risposta diversi.\n\nMastociti e basofili costituiscono importanti depositi di istamina nei granuli. L’attivazione mediata dalle IgE è una via di rilascio rilevante nelle reazioni allergiche, ma non è l’unica. L’istamina compare inoltre in cellule gastriche e neuroni, dove partecipa a funzioni fisiologiche che non richiedono una reazione allergica. Bloccare una risposta periferica e interferire con la trasmissione cerebrale sono perciò due esiti farmacologici distinti.\n\nAnche la quantità liberata non basta a prevedere il quadro clinico. Contano la sede, il tempo di esposizione, la sensibilità del tessuto e i mediatori rilasciati insieme all’istamina. Un farmaco diretto a H1 può attenuare una componente del processo senza spegnere l’intera risposta infiammatoria. Questo limite spiega perché un effetto convincente sul pomfo cutaneo non dimostri automaticamente efficacia su ogni malattia allergica."
    },
    {
      "id": "recettori",
      "title": "H1, H2, H3 e H4: distinguere il bersaglio prima del farmaco",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "PIT",
        "RANIT"
      ],
      "text": "I quattro recettori dell’istamina appartengono alla famiglia dei recettori accoppiati a proteine G. H1 si collega prevalentemente a Gq e alla via fosfolipasi C–inositolo trifosfato–diacilglicerolo; H2 a Gs e all’aumento dell’AMP ciclico. H3 e H4 sono associati soprattutto a Gi/o. Queste differenze impediscono di descrivere tutti i recettori istaminergici come semplici interruttori della stessa via dell’AMP ciclico.\n\nH1 partecipa alle risposte vascolari, sensoriali e della muscolatura liscia, oltre che alla trasmissione centrale. H2 contribuisce alla secrezione acida delle cellule parietali: la famotidina appartiene quindi a un contesto diverso dagli anti-H1 usati per rinite e orticaria. La presenza della ranitidina nelle tabelle storiche non ne dimostra l’attualità d’impiego: EMA ne documenta la sospensione nell’Unione europea per il problema delle nitrosammine.\n\nH3 regola il rilascio di neurotrasmettitori. Pitolisant, antagonista/agonista inverso H3 autorizzato per la narcolessia, aumenta l’attività dei neuroni istaminergici coinvolti nella veglia: corregge l’affermazione storica secondo cui non esisterebbero farmaci approvati su H3. H4 ha rilievo nelle cellule immunitarie e nella chemotassi; il suo interesse biologico non autorizza a trasferirgli indicazioni degli anti-H1.",
      "formula": "H1 → Gq → PLC / IP3 / DAG; H2 → Gs → AMPc; H3 e H4 → Gi/o. Schema originale dei principali accoppiamenti: tessuto e circuito determinano la risposta finale."
    },
    {
      "id": "agonismo",
      "title": "Agonismo inverso e antagonismo competitivo rispondono a domande diverse",
      "refs": [
        "CFI",
        "KAT",
        "APP"
      ],
      "text": "Un recettore può assumere conformazioni attive anche in assenza di agonista. Nel modello a due stati, l’equilibrio fra conformazioni meno attive e più attive produce un’attività costitutiva. L’istamina stabilizza le conformazioni associate all’attivazione; molti anti-H1 stabilizzano quelle inattive e riducono il segnale basale. Per questo vengono descritti più precisamente come agonisti inversi.\n\nUn antagonista neutro impedisce l’effetto dell’agonista senza ridurre, nel modello ideale, l’attività costitutiva. Agonista inverso e antagonista neutro possono entrambi occupare il sito che riconosce l’istamina. Dire che un anti-H1 è un agonista inverso non significa dunque che non competa con l’istamina: l’efficacia sul segnale basale e la competizione per il legame sono proprietà differenti. La descrizione tradizionale di antagonismo competitivo reversibile rimane compatibile con l’agonismo inverso.\n\nSi parla di conformazioni del recettore, non di due isoforme obbligatoriamente diverse. La distinzione è importante perché evita di immaginare due proteine separate, una buona e una cattiva. Il modello serve a interpretare il comportamento funzionale del sistema; non consente da solo di prevedere quale farmaco darà il maggiore beneficio clinico, né implica che la diminuzione di un segnale basale misurato in laboratorio sia sempre l’esito terapeutico dominante.",
      "formula": "Attività costitutiva: R ⇄ R*. Istamina favorisce R*; agonista inverso favorisce R; antagonista neutro non sposta il segnale basale ideale. Competizione per il sito ed efficacia sono assi distinti. Schema qualitativo originale."
    },
    {
      "id": "segnale",
      "title": "Dal segnale H1 al pomfo, allo starnuto e al prurito",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "L’attivazione di H1 può stimolare la fosfolipasi C, che scinde PIP2 in IP3 e diacilglicerolo. IP3 mobilizza calcio dai depositi intracellulari; calcio e diacilglicerolo contribuiscono ad attivare ulteriori effettori. La conseguenza dipende dalla cellula: un segnale al calcio nell’endotelio non equivale alla stessa risposta in una fibra sensoriale o nella muscolatura liscia.\n\nNella cute, aumento della permeabilità delle piccole venule e risposte vascolari contribuiscono a edema e arrossamento. Le terminazioni sensitive partecipano al prurito e ai riflessi locali. Nella mucosa nasale, l’azione dell’istamina contribuisce a starnuti, prurito e secrezione. L’anti-H1 interrompe la risposta del bersaglio al mediatore; non deve necessariamente impedire la degranulazione del mastocita per produrre questi effetti.\n\nLe rappresentazioni che collegano H1 a PKC e NF-κB descrivono anche possibili conseguenze sull’espressione genica. Non ne deriva che tutti gli anti-H1 abbiano la stessa attività antinfiammatoria dei glucocorticoidi o che stabilizzino i mastociti in misura clinicamente equivalente. Proprietà aggiuntive documentate per una molecola, una concentrazione o una formulazione vanno tenute separate dal meccanismo comune sul recettore. La via di segnale è un punto di partenza, non una misura universale dell’efficacia."
    },
    {
      "id": "generazioni",
      "title": "Le generazioni descrivono soprattutto distribuzione e selettività",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "Gli anti-H1 di prima generazione, come difenidramina, prometazina, clorfenamina e idrossizina, possono raggiungere il sistema nervoso centrale e interagire con altri bersagli. La seconda generazione comprende molecole come cetirizina, loratadina, fexofenadina e bilastina, sviluppate con un profilo prevalentemente periferico. La distinzione è utile, purché non venga trasformata in una regola assoluta su ogni effetto di ogni composto.\n\nL’ingresso nel cervello dipende da proprietà chimiche, trasporto attraverso la barriera ematoencefalica ed esposizione sistemica. Una minore penetrazione cerebrale permette di conservare l’attività periferica riducendo l’interferenza con la veglia. Non significa che la barriera sia impermeabile in ogni condizione o che tutti i pazienti siano protetti dalla sonnolenza.\n\nLa selettività è inoltre relativa alla concentrazione: una molecola preferisce un bersaglio entro un certo intervallo di esposizione, senza perdere ogni possibilità di interazione con altri. La denominazione terza generazione viene usata in alcuni testi per metaboliti attivi o enantiomeri, ma non costituisce una graduatoria clinica uniforme. Per confrontare due farmaci è più utile chiedere quanto sedino, come siano eliminati e quali interazioni abbiano, piuttosto che contare il numero della generazione."
    },
    {
      "id": "sedazione",
      "title": "Sedazione e azioni fuori bersaglio: un beneficio periferico può avere un costo centrale",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "CET"
      ],
      "text": "La trasmissione istaminergica cerebrale sostiene la veglia. Ridurla può compromettere attenzione, memoria operativa e prestazioni psicomotorie. La sensazione soggettiva di non avere sonno non garantisce che tutte queste funzioni siano rimaste intatte. Per lo studio della classe, è quindi insufficiente chiedere soltanto se il paziente si addormenti dopo l’assunzione.\n\nMolti composti di prima generazione aggiungono un’attività antimuscarinica: secchezza della bocca, difficoltà di accomodazione, stipsi e ritenzione urinaria illustrano effetti che non dipendono semplicemente dal blocco di H1. In alcuni farmaci si associano antagonismo α1, con ipotensione ortostatica, o interazioni serotoninergiche che possono contribuire a modificare l’appetito. Queste proprietà variano: non sono un elenco di eventi obbligatori per ogni anti-H1.\n\nAlcol e altri depressori del sistema nervoso centrale possono aumentare l’alterazione funzionale. Il documento regolatorio della cetirizina conferma che sonnolenza e riduzione dell’attenzione rimangono possibili anche con una molecola di seconda generazione. La minore sedazione media è quindi un vantaggio comparativo, non un’autorizzazione automatica alla guida. Analogamente, usare l’effetto sedativo come scorciatoia per controllare un bambino agitato confonde un effetto indesiderato con un’indicazione e ignora la possibilità di eccitazione paradossa."
    },
    {
      "id": "cuore",
      "title": "Il rischio cardiaco riguarda canali ed esposizione, non soltanto H1",
      "refs": [
        "KAT",
        "RAN",
        "HYD"
      ],
      "text": "Il blocco di H1 non spiega da solo tutte le reazioni cardiache di un antistaminico. Alcune molecole possono interferire con canali ionici che partecipano alla conduzione o alla ripolarizzazione. Se viene ridotta una corrente di potassio rilevante per la ripolarizzazione, l’intervallo QT può allungarsi; in determinate condizioni aumenta il rischio di torsioni di punta. Questo meccanismo deve essere distinto dall’effetto antiallergico periferico.\n\nTerfenadina e astemizolo costituiscono esempi storici di come accumulo del composto e interazioni metaboliche possano trasformare il profilo di sicurezza. Il fatto che un metabolita mantenga attività su H1 non rende equivalente la tossicità della molecola madre. Un cambiamento della clearance può modificare l’esposizione a bersagli indesiderati prima ancora di produrre un beneficio clinico aggiuntivo.\n\nPer idrossizina, EMA ha confermato un rischio di prolungamento del QT e torsioni di punta, richiedendo restrizioni e attenzione a fattori predisponenti, alterazioni elettrolitiche e farmaci concomitanti. La raccomandazione di contenere esposizione e durata riguarda quel medicinale nel suo contesto regolatorio. Non va trasformata né in un allarme identico per tutti gli anti-H1 né nell’idea opposta che una seconda generazione sia automaticamente priva di problemi cardiaci."
    },
    {
      "id": "destino",
      "title": "Metaboliti, eliminazione e interazioni cambiano la risposta",
      "refs": [
        "KAT",
        "RAN",
        "CET"
      ],
      "text": "L’elenco dei nomi diventa più comprensibile se si seguono le relazioni fra molecole. Cetirizina è un metabolita attivo dell’idrossizina; levocetirizina è l’enantiomero R della cetirizina. Desloratadina è un metabolita attivo della loratadina, mentre fexofenadina deriva dalla terfenadina. Queste relazioni spiegano una continuità del bersaglio senza imporre identità di distribuzione, metabolismo o sicurezza.\n\nNon tutti gli anti-H1 dipendono nella stessa misura dal metabolismo epatico. L’eliminazione renale assume particolare importanza per la cetirizina: una riduzione della funzione renale può richiedere una diversa gestione dell’esposizione secondo il prodotto. Non è corretto applicare a tutta la classe la stessa regola sui CYP, sulla funzionalità renale o sull’intervallo fra somministrazioni.\n\nOccorre inoltre distinguere interazione farmacocinetica e farmacodinamica. Un inibitore del metabolismo può aumentare la concentrazione di un substrato; alcol e sedativi possono invece sommare effetti centrali senza che ogni combinazione debba aumentare la concentrazione dell’anti-H1. La valutazione parte dal nome esatto, dalla formulazione e dalle altre sostanze assunte. Una tabella di dosi tratta da un manuale storico serve alla comprensione del problema, ma non sostituisce il riassunto delle caratteristiche del prodotto aggiornato."
    },
    {
      "id": "tempi",
      "title": "Quattro tempi diversi: picco plasmatico, inizio, emivita e durata",
      "refs": [
        "CFI",
        "KAT",
        "CET"
      ],
      "text": "Dopo una somministrazione orale, il tempo necessario a raggiungere il picco plasmatico, o Tmax, descrive una misura di esposizione. L’inizio dell’effetto descrive invece quando un esito osservabile comincia a cambiare. I due momenti possono essere vicini senza coincidere: il farmaco deve raggiungere la sede d’azione e il risultato dipende anche da come viene misurato. Un miglioramento del prurito e l’inibizione di un pomfo sperimentale non definiscono necessariamente lo stesso tempo di insorgenza.\n\nL’emivita di eliminazione indica quanto impiega la concentrazione a dimezzarsi nella fase considerata. Non è un conto alla rovescia che, al suo termine, azzera il farmaco o spegne il recettore. La durata dell’effetto dipende dalla concentrazione disponibile al bersaglio, dal legame e dalla risposta del sistema; per alcune molecole contribuiscono metaboliti attivi. Anche il tempo di permanenza sul recettore è una proprietà distinta dall’emivita plasmatica. Un legame più persistente può contribuire alla durata, ma non basta da solo a ricavare l’intervallo terapeutico.\n\nPerciò una tabella con Tmax, emivita e ore di attività deve essere letta colonna per colonna. Valori ottenuti con dosi, popolazioni o prove differenti non permettono una graduatoria automatica di efficacia. La frequenza di somministrazione deriva dalle prove sulla specifica preparazione e dalla sua scheda tecnica, non dall’arrotondamento dell’emivita. Il capitolo sui modelli farmacocinetici sviluppa questa distinzione fra andamento della concentrazione e risposta.",
      "formula": "Tmax: quando il plasma raggiunge il picco. Inizio: quando cambia l’esito misurato. Emivita: velocità di diminuzione nella fase osservata. Durata: quanto persiste l’effetto definito. Quattro misure collegate, senza equivalenza automatica; schema originale."
    },
    {
      "id": "eta-rene",
      "title": "Cetirizina nel bambino: un’emivita più breve non identifica il meccanismo",
      "refs": [
        "CFI",
        "CET"
      ],
      "text": "La cetirizina offre un esempio utile di ragionamento sulla clearance. La scheda tecnica documenta un’emivita più breve in alcune fasce pediatriche rispetto all’adulto e un’eliminazione importante della molecola immodificata nelle urine. Questi dati non sostengono l’attribuzione automatica della differenza a un metabolismo epatico più veloce. Osservare una diversa emivita descrive il risultato complessivo di distribuzione ed eliminazione; non identifica da solo quale organo o processo sia cambiato.\n\nNel bambino vanno distinti età, dimensioni corporee, funzione renale e formulazione. Il documento regolatorio specifica fasce d’età e preparazioni: una regola generica per tutti i minori di dodici anni perderebbe queste differenze. Neppure la misura di un’emivita in un gruppo sperimentale equivale all’autorizzazione di ogni formulazione in quel gruppo.\n\nL’esempio collega la farmacocinetica alla scelta del prodotto, senza proporre dosi pediatriche. Prima di dedurre una frequenza occorre verificare quali dati sostengano quella preparazione e quella popolazione. La domanda corretta non è soltanto quanto dura il farmaco, ma quale esposizione produce e quale beneficio e rischio sono stati valutati."
    },
    {
      "id": "rinite",
      "title": "Rinite allergica: scegliere l’esito che si vuole controllare",
      "refs": [
        "KAT",
        "RAN",
        "ARIA2"
      ],
      "text": "Nella rinite allergica, il collegamento fra mediatore e sintomo aiuta a interpretare la risposta. Prurito, starnuti e rinorrea acquosa contengono una componente istaminergica importante. L’ostruzione nasale riflette anche edema e processi infiammatori più ampi: la riduzione di uno starnuto non dimostra che l’intero quadro sia controllato. Vanno considerati persistenza dei sintomi, sonno e attività quotidiane.\n\nLa revisione ARIA-EAACI 2024–2025, parte II pubblicata nel 2026, favorisce gli anti-H1 orali di seconda generazione rispetto alla prima e i corticosteroidi intranasali rispetto agli anti-H1 orali per il trattamento della rinite. Non identifica un singolo anti-H1 orale da preferire universalmente: efficacia, tollerabilità, preferenze, disponibilità e costo concorrono alla scelta. Per la via intranasale rispetto a quella orale propone una scelta contestuale.\n\nLa differenza fra trattamento locale e sistemico deve quindi essere discussa insieme alla praticità d’uso. Un prodotto efficace ma non utilizzato correttamente può sembrare meno valido di un altro più semplice da assumere. Questo non rende irrilevante il bersaglio: mostra che la risposta osservata dipende sia dalla farmacologia sia dall’esposizione effettivamente ottenuta. Le raccomandazioni di popolazione orientano il ragionamento e non costituiscono una prescrizione individuale."
    },
    {
      "id": "locale",
      "title": "Naso e occhio: la formulazione modifica il problema farmacologico",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "ARIA1"
      ],
      "text": "Azelastina illustra l’uso locale degli anti-H1; olopatadina e ketotifene compaiono fra le molecole impiegate nelle formulazioni oculari. Raggiungere direttamente una mucosa permette di ottenere un’esposizione nella sede del sintomo. L’utilità della via locale non può tuttavia essere dedotta dal solo nome del principio attivo: concentrazione, veicolo, tecnica e indicazione del prodotto fanno parte del trattamento.\n\nAlcune molecole combinano attività H1 con effetti sul rilascio di mediatori. La proprietà aggiuntiva non va assegnata automaticamente all’intera classe, né descritta come garanzia di efficacia identica in naso, occhio e cute. Anche l’assorbimento sistemico varia: topico non significa necessariamente assente, ma intranasale non significa automaticamente più pericoloso dell’orale.\n\nARIA-EAACI parte I valuta specificamente corticosteroidi intranasali, anti-H1 intranasali e associazioni fisse fra queste classi. Considera il vantaggio delle associazioni nel contesto di sintomi e preferenze; non suggerisce di sommare liberamente qualsiasi preparazione disponibile. La presenza di due meccanismi in un prodotto richiede prove sulla combinazione e sulla formulazione. Per lo studio è utile mantenere separati il razionale biologico, la dimostrazione clinica e l’autorizzazione della singola preparazione."
    },
    {
      "id": "orticaria",
      "title": "Orticaria: controllare pomfi e prurito senza confondere le cause",
      "refs": [
        "KAT",
        "RAN",
        "URT"
      ],
      "text": "Nell’orticaria, l’attivazione dei mastociti e il rilascio di mediatori rendono il recettore H1 un bersaglio particolarmente rilevante per pomfi e prurito. L’effetto sintomatico non implica però che sia stata identificata o rimossa una causa allergica esterna. La forma cronica spontanea e le forme inducibili non sono semplicemente sinonimi di una reazione alimentare prolungata.\n\nLa linea guida internazionale sull’orticaria del 2026 mantiene gli anti-H1 moderni di seconda generazione come trattamento iniziale. Nella forma cronica spontanea indica un uso regolare; nelle forme inducibili il rapporto con l’esposizione allo stimolo conta. Se la risposta è insufficiente, il percorso specialistico può prevedere un aumento della dose fino a quattro volte quella standard, con informazione sull’impiego fuori indicazione. Non è un invito all’automodifica della terapia e non equivale a mescolare diversi antistaminici.\n\nIl passaggio alle terapie successive richiede di verificare diagnosi, attività e controllo della malattia. Qui il punto didattico è il limite della risposta H1: una persistenza dei sintomi non dimostra automaticamente scarsa affinità del farmaco. La scelta di un’altra strategia dipende dal quadro e dalle raccomandazioni aggiornate, non da una competizione astratta fra numeri di generazione."
    },
    {
      "id": "anafilassi",
      "title": "Anafilassi: migliorare la cute non significa risolvere l’emergenza",
      "refs": [
        "RCUK",
        "KAT"
      ],
      "text": "Nell’anafilassi possono essere compromessi vie aeree, respirazione e circolo. Questi problemi non vengono corretti in modo affidabile dal solo antagonismo H1. Secondo Resuscitation Council UK, gli antistaminici non appartengono al trattamento iniziale dei problemi vitali e non devono ritardare l’adrenalina intramuscolare. Dopo la stabilizzazione, un anti-H1 non sedativo può avere un ruolo per sintomi cutanei persistenti.\n\nIl nesso farmacologico è importante: diminuire il prurito o il rossore non dimostra che siano risolti broncospasmo, edema delle vie aeree o instabilità circolatoria. La risposta cutanea misura una parte della reazione e può dare una falsa impressione di controllo se viene usata come unico indicatore. L’adrenalina, collegata nel catalogo come epinefrina, agisce su bersagli adrenergici con funzioni differenti.\n\nLe vecchie tabelle che collocano un anti-H1 accanto alle emergenze allergiche devono pertanto essere lette distinguendo trattamento accessorio e intervento prioritario. Anche la sedazione può complicare la valutazione della persona. Questo capitolo chiarisce la differenza di ruolo: non propone un protocollo completo di rianimazione o dosi di emergenza, che richiedono una guida specifica e un contesto clinico appropriato."
    },
    {
      "id": "limiti",
      "title": "Prurito, asma e angioedema non sono un unico problema istaminergico",
      "refs": [
        "KAT",
        "RAN",
        "APP",
        "URT"
      ],
      "text": "Il prurito è un sintomo prodotto da circuiti diversi. Nella dermatite atopica contribuiscono alterazione della barriera, infiammazione e segnali neuroimmuni che non si riducono a H1. La sonnolenza indotta da un farmaco può cambiare il modo in cui il sintomo viene percepito o riferito senza dimostrare il controllo della malattia cutanea. Il capitolo sulla dermatite approfondisce questi circuiti e le terapie dirette ad altri bersagli.\n\nAnalogamente, la presenza di istamina nella broncocostrizione sperimentale non rende gli anti-H1 la terapia di fondo dell’asma. La malattia coinvolge più mediatori e processi, e il miglioramento di una rinite associata non prova da solo un controllo dell’infiammazione bronchiale. È un esempio della distanza fra bloccare un agonista in laboratorio e trattare un sistema patologico complesso.\n\nAnche l’angioedema richiede una distinzione: le forme associate ad attivazione mastocitaria e quelle mediate dalla bradichinina non condividono lo stesso meccanismo. L’etichetta gonfiore non basta per scegliere il bersaglio e la mancata risposta a H1 non va corretta automaticamente aggiungendo altro anti-H1. La sede e la gravità impongono inoltre una valutazione indipendente dalla presenza di pomfi. Il principio comune è verificare quale via sostenga il sintomo prima di interpretare la risposta al farmaco."
    },
    {
      "id": "rischi",
      "title": "Riconoscere un effetto avverso richiede anche una linea del tempo",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "CET",
        "FDA"
      ],
      "text": "Gli effetti indesiderati vanno collocati rispetto a inizio, variazioni e interruzione del trattamento. Una sonnolenza comparsa dopo l’assunzione, una ritenzione urinaria in presenza di altri farmaci antimuscarinici e un evento cardiaco durante un’interazione non sono osservazioni intercambiabili. Per ciascuna cambia la spiegazione plausibile e quindi il tipo di verifica necessario.\n\nNel 2025 FDA ha segnalato un prurito raro ma intenso dopo l’interruzione di cetirizina o levocetirizina assunte quotidianamente per periodi prolungati. Il segnale riguarda questi farmaci e quel contesto, non ogni sospensione di qualsiasi anti-H1. Un nuovo prurito dopo l’interruzione richiede quindi valutazione e non deve essere automaticamente interpretato come ricomparsa dell’allergia originaria. La comunicazione statunitense viene usata qui per il segnale di sicurezza, senza trasferirne le condizioni autorizzative all’Italia.\n\nAllo stesso modo, non si può ricavare l’incidenza di un danno da un’immagine di una notizia o da un grafico didattico privo di riferimento. Questi materiali possono suggerire una domanda, ma non sostituiscono la fonte regolatoria o lo studio originale. Collegare il rischio a molecola, esposizione e sequenza temporale rende la farmacovigilanza più informativa di una generica etichetta sicuro o pericoloso."
    },
    {
      "id": "uso-improprio",
      "title": "Uso improprio e sovradosaggio: quando cambia il problema farmacologico",
      "refs": [
        "CFI",
        "RAN",
        "APP",
        "CYPRO",
        "ANSM",
        "FDADPH"
      ],
      "text": "Un effetto osservato non diventa automaticamente un obiettivo terapeutico. La ciproeptadina associa attività H1 ad azioni antiserotoniniche, anticolinergiche e antiadrenergiche; aumento dell’appetito e del peso sono riportati nella documentazione regolatoria insieme agli effetti indesiderati. Questo profilo non dimostra un beneficio estetico né una modificazione selettiva delle forme corporee. ANSM ha segnalato il suo impiego improprio per aumentare di peso e, in Francia, ha introdotto la prescrizione obbligatoria dal luglio 2024. La misura francese documenta un problema di sicurezza; non descrive le condizioni di dispensazione italiane.\n\nIl sovradosaggio aggiunge un’altra distinzione. La difenidramina, pur essendo un anti-H1, a esposizioni eccessive può provocare un’intossicazione grave. FDA segnala problemi cardiaci, convulsioni e coma, fino a esiti fatali. Non è corretto riassumere il rischio come semplice sonnolenza più intensa, né limitare la tossicità al cuore. Alterazioni marcate della coscienza, convulsioni o difficoltà respiratorie dopo un eccesso di farmaco richiedono assistenza medica immediata.\n\nRagionare per bersagli ed esposizione aiuta a capire questa discontinuità: aumentando l’esposizione possono diventare rilevanti azioni centrali e fuori bersaglio, mentre il sollievo del sintomo allergico non cresce necessariamente in parallelo. Notizie e contenuti social possono far emergere un segnale; la valutazione deve ricondurlo alla molecola e a fonti verificabili. Non permettono di stimare un’incidenza, né sostituiscono le prove richieste per un impiego terapeutico."
    },
    {
      "id": "sintesi",
      "title": "Una mappa per collegare recettore, esposizione e malattia",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "Per ragionare su un antistaminico si possono percorrere quattro passaggi. Il primo è il bersaglio: H1 periferico, H1 centrale e H2 gastrico non hanno lo stesso significato; H3 aggiunge un esempio in cui la modulazione dell’istamina serve alla veglia. Il secondo è l’esposizione: via, distribuzione, eliminazione e interazioni stabiliscono quale concentrazione raggiunga quel bersaglio.\n\nIl terzo passaggio riguarda la malattia. Pomfo, rinite, eczema, broncocostrizione e anafilassi possono condividere alcuni mediatori senza avere la stessa terapia. Il quarto è l’esito da misurare: prurito, attenzione, ostruzione nasale e stabilità circolatoria rispondono a domande diverse. Una riduzione di un sintomo non deve essere scambiata per il controllo di tutti gli altri.\n\nQuesta lettura collega la teoria dei recettori alla scelta clinica senza trasformare una sintesi didattica in una prescrizione. La competizione per H1 spiega parte della farmacodinamica; l’agonismo inverso descrive l’effetto sul segnale costitutivo; la distribuzione cerebrale e le interazioni spiegano perché due molecole con lo stesso bersaglio possano essere diverse. Le fonti storiche restano utili per costruire il modello, mentre indicazioni, restrizioni e raccomandazioni devono essere ricontrollate nei documenti correnti del prodotto e della patologia.",
      "formula": "Bersaglio → esposizione → malattia → esito. Anti-H1 periferico e sollievo del prurito non equivalgono a sedazione, soppressione di tutta l’infiammazione o trattamento dell’instabilità circolatoria. Schema originale, non algoritmo prescrittivo."
    }
  ],
  "wordCount": 3301,
  "checks": [
    {
      "question": "Perché istamina non è sinonimo di allergia?",
      "answer": "Partecipa anche alla secrezione gastrica e alla trasmissione cerebrale: sede e recettore definiscono la funzione."
    },
    {
      "question": "Quale differenza separa H1 e H2 nella segnalazione principale?",
      "answer": "H1 si accoppia soprattutto a Gq/PLC, H2 a Gs/AMPc. Famotidina e anti-H1 non sono quindi intercambiabili per il solo nome antistaminico."
    },
    {
      "question": "Un agonista inverso può essere un antagonista competitivo?",
      "answer": "Sì. L’agonismo inverso descrive la riduzione dell’attività costitutiva; la competizione descrive il rapporto fra ligandi per il legame."
    },
    {
      "question": "Bloccare H1 implica bloccare la degranulazione?",
      "answer": "No. L’effetto comune riguarda la risposta recettoriale; eventuali proprietà mastocitarie aggiuntive richiedono prove specifiche."
    },
    {
      "question": "Seconda generazione significa barriera cerebrale impermeabile?",
      "answer": "No. Indica in generale minore esposizione centrale e sedazione; non garantisce assenza di sonnolenza nel singolo soggetto."
    },
    {
      "question": "La secchezza della bocca è necessariamente un effetto H1?",
      "answer": "No. In molti composti dipende dall’attività antimuscarinica, distinta da H1 e variabile fra molecole."
    },
    {
      "question": "Perché un’interazione può aumentare il rischio cardiaco?",
      "answer": "L’aumento dell’esposizione può rendere più importante l’azione su canali ionici. Molecola, clearance e fattori predisponenti devono essere valutati insieme."
    },
    {
      "question": "Metabolita attivo e molecola madre hanno identica sicurezza?",
      "answer": "Non necessariamente: distribuzione, eliminazione e azioni fuori bersaglio possono differire pur conservando attività H1."
    },
    {
      "question": "Esiste un anti-H1 orale preferibile universalmente nella rinite?",
      "answer": "ARIA-EAACI 2024–2025 non indica un vincitore universale: scelta e formulazione dipendono da efficacia, tollerabilità e contesto."
    },
    {
      "question": "Via topica significa rischio sistemico nullo?",
      "answer": "No. Cambia l’esposizione, che dipende da prodotto, sede e uso; non permette una conclusione universale sull’assorbimento."
    },
    {
      "question": "L’aumento della dose nell’orticaria è una scelta autonoma?",
      "answer": "No. Le raccomandazioni lo collocano in un percorso controllato, anche fuori indicazione; non equivalgono ad associare liberamente diversi anti-H1."
    },
    {
      "question": "Il miglioramento del pomfo dimostra che l’anafilassi è risolta?",
      "answer": "No. I problemi di vie aeree, respirazione e circolo richiedono interventi prioritari; l’anti-H1 non deve ritardare l’adrenalina."
    },
    {
      "question": "Perché prurito atopico e orticaria rispondono diversamente?",
      "answer": "I circuiti che sostengono il sintomo differiscono: nell’eczema barriera e segnali neuroimmuni non sono riducibili a H1."
    },
    {
      "question": "Quale segnale richiede attenzione dopo cetirizina prolungata?",
      "answer": "FDA ha segnalato raro prurito intenso dopo l’interruzione di cetirizina o levocetirizina: va valutato senza attribuirlo automaticamente all’allergia iniziale."
    },
    {
      "question": "Quali quattro domande collegano teoria e impiego?",
      "answer": "Quale bersaglio, quale esposizione, quale malattia e quale esito. Le risposte vanno mantenute distinte prima di giudicare beneficio e rischio."
    },
    {
      "question": "Un’emivita di alcune ore significa che l’effetto termina dopo quel tempo?",
      "answer": "No. L’emivita descrive il dimezzamento della concentrazione nella fase considerata. Durata clinica, esposizione al bersaglio e permanenza recettoriale sono misure distinte."
    },
    {
      "question": "Una minore emivita pediatrica della cetirizina prova un metabolismo epatico più rapido?",
      "answer": "No. La cetirizina è eliminata in misura importante immodificata nelle urine. L’emivita da sola non identifica il processo; età, funzione renale e formulazione vanno considerate separatamente."
    },
    {
      "question": "Perché il sovradosaggio di un anti-H1 non è soltanto maggiore sedazione?",
      "answer": "L’esposizione elevata può coinvolgere altri bersagli e produrre tossicità neurologica e cardiaca. Per difenidramina FDA segnala anche convulsioni e coma: il problema richiede valutazione urgente."
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 611–620, etichette 609–618. Primo lotto 611–615; aggiunta 616–620 letta nel testo disponibile e nei rendering. Le pagine 616 e 618 ripetono materiale già confrontato; 617, 619 e 620 sostengono le nuove sezioni. Nessuna figura riprodotta."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana 2014 / XII americana 2012, capitolo 16, PDF 325 e 328–332, editoriali 305 e 308–312. Sei pagine lette e controllate visivamente; dati clinici storici riconciliati. PDF 328 riletto per l’ampliamento su tempi ed esposizione."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015: PDF 330–331 e 521–522, capitoli 17 e 26. Testo e rendering letti; tabella 26.4 controllata, dosi e generalizzazioni storiche non trasferite. PDF 522 riletto per l’ampliamento sui rischi."
    },
    {
      "id": "APP",
      "title": "Appunti e diapositive del corso di Farmacologia I · lezione 16",
      "detail": "20 novembre 2025, PDF 289–290, etichette 284–285: 289 riletto, 290 nuovo. Diagrammi duplicati non contati come studi indipendenti; grafici senza fonte non usati quantitativamente. Entrambe le pagine rilette nel lotto successivo per deduplicare tabella, grafico e notizia; nessuna nuova pagina."
    },
    {
      "id": "HYD",
      "title": "EMA · Restrizioni per idrossizina",
      "detail": "Comunicazione 2015, pagina ufficiale consultata il 4 novembre 2026: rischio QT/torsioni di punta e fattori predisponenti. Non intero RCP.",
      "url": "https://www.ema.europa.eu/en/news/new-restrictions-minimise-risks-effects-heart-rhythm-hydroxyzine-containing-medicines"
    },
    {
      "id": "CET",
      "title": "AEMPS CIMA · Cetirizina, scheda tecnica",
      "detail": "Documento 67862, §§4.1–4.8 consultati selettivamente il 4 novembre 2026. Indicazioni, sedazione, interazioni e rene; nessuna soglia di dosaggio trasferita. Fonte spagnola, non verifica della disponibilità italiana. Per l’ampliamento letti §4.2 pediatrico e §5.2: eliminazione immodificata e variabilità per età, senza dedurre la dose dall’emivita.",
      "url": "https://cima.aemps.es/cima/dochtml/ft/67862/FichaTecnica_67862.html"
    },
    {
      "id": "PIT",
      "title": "AEMPS CIMA · Wakix (pitolisant)",
      "detail": "Scheda tecnica, §§4.1 e 5.1: narcolessia e antagonismo/agonismo inverso H3; consultazione mirata del 4 novembre 2026.",
      "url": "https://cima.aemps.es/cima/dochtml/ft/1151068001/FT_1151068001.html"
    },
    {
      "id": "RANIT",
      "title": "EMA · Ranitidine-containing medicinal products",
      "detail": "Referral e sintesi ufficiale indicizzata, sospensione UE per NDMA; consultati il 4 novembre 2026. Accesso diretto limitato da 429.",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/ranitidine-containing-medicinal-products"
    },
    {
      "id": "ARIA1",
      "title": "ARIA-EAACI · Revisione 2024–2025, parte I",
      "detail": "Allergy, DOI 10.1111/all.70131. Abstract e raccomandazioni intranasali selezionate; portale ufficiale consultato il 4 novembre 2026. Non lettura integrale degli allegati.",
      "url": "https://aria.med.up.pt/guideline-on-intranasal-treatments"
    },
    {
      "id": "ARIA2",
      "title": "ARIA-EAACI · Revisione 2024–2025, parte II",
      "detail": "Vieira et al., 2026, Allergy 81:1947–1970, DOI 10.1111/all.70305. Abstract e quesiti selezionati su generazioni, scelta e vie orale/intranasale. Nessuna graduatoria universale o aggiustamento trasferito dalla tabella.",
      "url": "https://onlinelibrary.wiley.com/doi/full/10.1111/all.70305"
    },
    {
      "id": "URT",
      "title": "Linea guida internazionale sull’orticaria · 2026",
      "detail": "Allergy 81:2582–2632, DOI 10.1111/all.70210; §5.4 sugli anti-H1 e passaggi selezionati letti il 4 novembre 2026. Non algoritmo completo delle terapie successive.",
      "url": "https://onlinelibrary.wiley.com/doi/full/10.1111/all.70210"
    },
    {
      "id": "RCUK",
      "title": "Resuscitation Council UK · Emergency treatment of anaphylaxis",
      "detail": "Edizione maggio 2021 indicata dal portale corrente; §5.4, pagina 32, letto il 4 novembre 2026. Ruolo accessorio degli anti-H1; nessun protocollo completo dichiarato revisionato.",
      "url": "https://www.resus.org.uk/media/337/download"
    },
    {
      "id": "FDA",
      "title": "FDA · Prurito dopo interruzione di cetirizina o levocetirizina",
      "detail": "Comunicazione 16 maggio 2025, testo MedWatch consultato il 4 novembre 2026. Segnale di sicurezza statunitense dopo uso prolungato, senza trasferimento delle autorizzazioni.",
      "url": "https://www.fda.gov/safety/medical-product-safety-information/cetirizine-or-levocetirizine-drug-safety-communication-fda-warns-about-risk-severe-itching-after"
    },
    {
      "id": "CYPRO",
      "title": "Base de données publique des médicaments · Ciproeptadina",
      "detail": "RCP francese Périactine, §§4.5, 4.7–4.9 e 5.1 consultati il 4 novembre 2026: bersagli, effetti indesiderati e sovradosaggio. Non intero RCP né verifica delle autorizzazioni italiane.",
      "url": "https://base-donnees-publique.medicaments.gouv.fr/medicament/67231270/extrait"
    },
    {
      "id": "ANSM",
      "title": "ANSM · Ciproeptadina e uso improprio per aumento di peso",
      "detail": "Comunicazione del 26 giugno 2024 letta il 4 novembre 2026. Prescrizione obbligatoria in Francia dal 10 luglio 2024; ambito nazionale esplicito.",
      "url": "https://ansm.sante.fr/actualites/a-compter-du-10-07-2024-la-cyproheptadine-periactine-4mg-sera-dispensee-uniquement-sur-ordonnance"
    },
    {
      "id": "FDADPH",
      "title": "FDA · Rischi delle dosi eccessive di difenidramina",
      "detail": "Comunicazione del 24 settembre 2020 letta il 4 novembre 2026. Rischi cardiaci e neurologici da sovradosaggio; nessuna quantità o procedura di uso improprio riprodotta.",
      "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-about-serious-problems-high-doses-allergy-medicine-diphenhydramine-benadryl"
    }
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL505",
      "label": "CHLORPHENIRAMINE"
    },
    {
      "id": "CHEMBL534",
      "label": "KETOTIFEN"
    },
    {
      "id": "CHEMBL639",
      "label": "AZELASTINE"
    },
    {
      "id": "CHEMBL643",
      "label": "PROMETHAZINE"
    },
    {
      "id": "CHEMBL657",
      "label": "DIPHENHYDRAMINE"
    },
    {
      "id": "CHEMBL679",
      "label": "EPINEPHRINE"
    },
    {
      "id": "CHEMBL896",
      "label": "HYDROXYZINE"
    },
    {
      "id": "CHEMBL902",
      "label": "FAMOTIDINE"
    },
    {
      "id": "CHEMBL914",
      "label": "FEXOFENADINE"
    },
    {
      "id": "CHEMBL998",
      "label": "LORATADINE"
    },
    {
      "id": "CHEMBL1000",
      "label": "CETIRIZINE"
    },
    {
      "id": "CHEMBL1172",
      "label": "DESLORATADINE"
    },
    {
      "id": "CHEMBL462605",
      "label": "PITOLISANT"
    },
    {
      "id": "CHEMBL1189432",
      "label": "OLOPATADINE"
    },
    {
      "id": "CHEMBL1201191",
      "label": "LEVOCETIRIZINE"
    },
    {
      "id": "CHEMBL1742423",
      "label": "BILASTINE"
    },
    {
      "id": "CHEMBL516",
      "label": "CYPROHEPTADINE"
    }
  ],
  "relatedExistingChapterIds": [
    "recettori-e-legame",
    "metabolismo-trasportatori",
    "dermatite-atopica",
    "asma-e-broncodilatatori",
    "acidita-gastrica",
    "modelli-pk"
  ],
  "coverage": "Sintesi originale su quattro fonti locali. Primo lotto: 17 pagine lette, 16 nuove e una riletta. Ampliamento: cinque pagine nuove e quattro rilette, nove rendering; tre pagine nuove e tre rilette sostengono le aggiunte. Totale distinto: 22 pagine controllate, 20 con passaggi integrati. Fonti ufficiali consultate selettivamente; nessuna lettura integrale di libri o corsi, nessuna revisione clinica indipendente."
});
