// Original educational synthesis. Reading scope is recorded separately from clinical validation.
export const THEORY_RTK = Object.freeze({
  "id": "tirosinchinasi",
  "volume": 4,
  "title": "Recettori tirosin-chinasici: dal segnale alla terapia mirata",
  "lead": "Struttura, reclutamento, RAS–MAPK e PI3K–AKT; biomarcatori, resistenza e limiti dei modelli.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-25",
  "readingManifest": "./data/tirosinchinasi-reading.json",
  "sections": [
    {
      "id": "rtk-01",
      "title": "Un segnale esterno diventa un programma cellulare",
      "refs": [
        "K-RTK",
        "C-RTK"
      ],
      "text": "Un fattore di crescita non trasporta dentro la cellula un ordine già completo. Il suo legame modifica un recettore; il recettore rende possibili nuove interazioni tra proteine; queste interazioni cambiano attività enzimatiche, metabolismo ed espressione genica. Per capire un recettore tirosin-chinasico bisogna seguire questa trasformazione dell'informazione, senza saltare direttamente dal nome del ligando alla proliferazione.\n\nI recettori tirosin-chinasici, abbreviati RTK, partecipano a funzioni fisiologiche essenziali: crescita, differenziamento, sopravvivenza, riparazione e controllo metabolico. EGFR e il recettore dell'insulina appartengono alla stessa grande classe strutturale, ma non producono un programma identico. Contano le proteine disponibili nel tessuto, lo stato della cellula, l'intensità e la durata del segnale, oltre agli altri stimoli presenti.\n\nL'interesse oncologico nasce quando questa regolazione viene alterata. Un circuito normalmente attivato in un luogo e per un tempo limitati può contribuire a mantenere una crescita patologica. Questo non rende ogni RTK un «recettore tumorale»: lo stesso apparato esiste nei tessuti sani. La farmacologia deve quindi affrontare insieme due domande: quanto il tumore dipende dal circuito e quanto quel circuito serve all'organismo. La selettività molecolare, da sola, non risponde a entrambe."
    },
    {
      "id": "rtk-02",
      "title": "Tre regioni, due funzioni diverse",
      "refs": [
        "K-RTK",
        "C-RTK"
      ],
      "text": "Il modello strutturale comprende una regione extracellulare che partecipa al riconoscimento del ligando, un tratto che attraversa la membrana e una regione intracellulare con attività tirosin-chinasica. La parte esterna riceve il segnale; quella interna catalizza reazioni. Il ligando non deve attraversare la membrana per attivare l'enzima: il cambiamento si trasmette attraverso l'organizzazione del recettore.\n\nUna proteina chinasi trasferisce un gruppo fosforile dall'ATP a un substrato. Nel caso delle tirosin-chinasi, il gruppo accettore appartiene a un residuo di tirosina di una proteina. L'ATP diventa ADP. Il residuo modificato può trovarsi sul recettore stesso oppure su un'altra proteina: riconoscere il substrato è necessario per capire quale conseguenza produce la reazione.\n\n«Fosforilazione» non significa sempre «attivazione». La modifica può aumentare o diminuire un'attività, cambiare la localizzazione di una proteina o creare una superficie di riconoscimento. Per gli RTK sono centrali sia il controllo della funzione catalitica sia la formazione di siti di aggancio. Un recettore può conservare una chinasi funzionante e tuttavia trasmettere male il segnale se non recluta correttamente i suoi interlocutori. Il disegno di una sola freccia recettore-nucleo nasconde proprio questo passaggio."
    },
    {
      "id": "rtk-03",
      "title": "Dimerizzare non basta: conta la geometria del complesso",
      "refs": [
        "K-RTK",
        "C-RTK"
      ],
      "text": "Per molti RTK il legame del ligando favorisce l'associazione di due unità o stabilizza una disposizione attiva di unità già vicine. La prossimità rende possibili interazioni tra i domini intracellulari e la fosforilazione di una componente da parte dell'altra, detta trans-fosforilazione. Le tirosine modificate possono regolare la chinasi oppure offrire punti di reclutamento ai trasduttori.\n\nLa sequenza «due monomeri separati, un ligando, un dimero attivo» è utile come primo schema, ma non descrive ogni famiglia. Il recettore dell'insulina è già organizzato in un complesso covalente prima del legame: l'attivazione comporta una riorganizzazione, non la semplice comparsa di una coppia prima inesistente. Anche tra gli altri RTK cambiano il ruolo del ligando, delle regioni extracellulari e delle molecole accessorie.\n\nÈ quindi più preciso pensare a un equilibrio tra configurazioni, del quale il ligando modifica la distribuzione. Un dimero non è automaticamente attivo e la vicinanza non garantisce un orientamento cataliticamente produttivo. Questa distinzione diventa utile per interpretare le mutazioni: alcune favoriscono una configurazione attiva, altre aumentano la quantità di recettore disponibile o eliminano regioni regolatorie. Esiti simili nella segnalazione possono derivare da alterazioni strutturali diverse."
    },
    {
      "id": "rtk-04",
      "title": "Fosfotirosine, adattatori e indirizzi molecolari",
      "refs": [
        "C-RTK",
        "R-RTK"
      ],
      "text": "Le tirosine fosforilate funzionano anche come indirizzi molecolari. Proteine dotate di domini di riconoscimento si associano a specifiche sequenze del recettore o di proteine intermedie. Un dominio SH2 riconosce una fosfotirosina nel suo contesto amminoacidico: non si lega indifferentemente a ogni punto fosforilato della cellula. La sequenza circostante contribuisce dunque a selezionare il partner.\n\nI domini PTB costituiscono un'altra famiglia di moduli di riconoscimento; requisiti e dipendenza dalla fosforilazione variano secondo il dominio e il partner. I domini SH3, invece, riconoscono tipicamente regioni ricche di prolina. Non sono una versione più potente degli SH2 e non svolgono la stessa funzione. La combinazione di moduli permette a una proteina di collegare componenti differenti.\n\nGRB2 illustra il ruolo di un adattatore: contribuisce a mettere in relazione un complesso recettoriale attivato con SOS, una proteina che favorisce lo scambio del nucleotide legato a RAS. GRB2 non deve essere immaginata come la chinasi che fosforila RAS. La sua funzione principale in questo percorso è organizzare l'incontro. Il reclutamento rende disponibili, nello stesso luogo e momento, proteine che nel citoplasma sarebbero meno efficacemente accoppiate. La specificità del segnale nasce anche da questa organizzazione spaziale."
    },
    {
      "id": "rtk-05",
      "title": "RAS: un interruttore a nucleotide, non una chinasi",
      "refs": [
        "C-RTK",
        "R-RTK"
      ],
      "text": "RAS è una piccola proteina G monomerica. Alterna uno stato legato a GDP, prevalentemente inattivo, e uno legato a GTP capace di interagire con determinati effettori. La somiglianza con le proteine G dei GPCR riguarda l'uso di nucleotidi guaninici; RAS non è però il complesso eterotrimerico formato dalle subunità α, β e γ.\n\nSOS è un fattore di scambio: facilita il rilascio del nucleotide e consente il caricamento di GTP nelle condizioni intracellulari. Non trasforma GDP in GTP aggiungendogli un fosfato. Questa distinzione evita di descrivere l'attivazione di RAS come una comune fosforilazione da parte del recettore. Il recettore recluta una macchina di scambio; RAS cambia stato di legame.\n\nLo spegnimento dipende dall'idrolisi del GTP a GDP, facilitata da proteine regolatrici chiamate GAP. Le forme oncogene di RAS possono alterare questa regolazione e favorire la permanenza nello stato attivo. In quel caso un segnale situato a valle può dipendere meno dallo stimolo recettoriale iniziale. Non segue che ogni variante di RAS abbia lo stesso comportamento o la stessa sensibilità farmacologica: la posizione e la natura dell'alterazione contano. «RAS mutato» è l'inizio di una caratterizzazione, non la sua conclusione."
    },
    {
      "id": "rtk-06",
      "title": "RAS–RAF–MEK–ERK: una cascata con passaggi distinti",
      "refs": [
        "C-RTK",
        "R-RTK"
      ],
      "text": "Nel ramo MAPK più utile come modello introduttivo, RAS nello stato attivo favorisce l'attivazione di RAF. RAF è una chinasi; fosforila e attiva MEK, che a sua volta fosforila ERK. La sigla collettiva «via RAS–MAPK» non autorizza a scambiare i nomi: RAS è una GTPasi, mentre RAF, MEK ed ERK sono chinasi con ruoli e specificità differenti.\n\nMEK ha una specificità duplice, perché modifica residui di treonina e tirosina nel motivo regolatorio di ERK. Non è corretto trasformare l'intera cascata in una serie di tirosin-chinasi o, all'opposto, di sole chinasi per serina e treonina. Il tipo di reazione e la posizione nella sequenza sono due informazioni diverse.\n\nERK può modificare bersagli citoplasmatici e contribuire alla regolazione della trascrizione. Il risultato può riguardare proliferazione, differenziamento o altri programmi: dipende dal contesto e dalla dinamica della risposta. La cascata consente controllo e amplificazione, ma comprende anche freni e ritorni di regolazione. Una freccia tra due nodi indica una relazione funzionale, non un flusso costante e inevitabile. Per valutare un inibitore occorre chiedersi quale passaggio intercetta e quali altri ingressi possono mantenere attivi i nodi successivi."
    },
    {
      "id": "rtk-07",
      "title": "PI3K, PIP3 e AKT: anche la membrana porta informazione",
      "refs": [
        "C-RTK",
        "RX-AKT",
        "RX-MTOR"
      ],
      "text": "Un RTK può attivare più rami contemporaneamente. Un secondo percorso importante coinvolge PI3K, una fosfoinositide chinasi. Qui il substrato decisivo è un lipide di membrana: la PI3K di classe I può convertire PIP2 in PIP3. Non bisogna confondere questa reazione con la fosforilazione di una tirosina proteica, pur trovandosi entrambe nello stesso circuito.\n\nPIP3 contribuisce a reclutare proteine dotate di opportuni domini di riconoscimento alla superficie interna della membrana. Il reclutamento di AKT ne facilita l'attivazione attraverso fosforilazioni: nel modello canonico partecipano PDK1 e il complesso mTORC2. PIP3 è quindi un segnale lipidico che organizza incontri; non è una proteina chinasi che «fosforila direttamente AKT». PTEN contrasta l'accumulo di PIP3 rimuovendo il fosfato in posizione 3.\n\nAKT modifica diversi effettori collegati a metabolismo, sopravvivenza e crescita. Anche mTOR va distinto nei suoi complessi: mTORC2 contribuisce alla regolazione di AKT, mentre mTORC1 controlla processi come la sintesi proteica e l'autofagia. La formula abbreviata PI3K–AKT–mTOR riassume una rete, non una fila nella quale mTOR occupa sempre un solo posto. Per questo la perdita di un freno, come PTEN, può modificare il circuito senza coincidere con un aumento del ligando extracellulare."
    },
    {
      "id": "rtk-08",
      "title": "PLCγ, incroci e durata del segnale",
      "refs": [
        "C-RTK",
        "K-RTK"
      ],
      "text": "Tra gli effettori reclutabili dagli RTK rientra PLCγ. La fosfolipasi C agisce su PIP2 generando IP3 e diacilglicerolo: IP3 favorisce il rilascio di calcio da depositi intracellulari, mentre il diacilglicerolo partecipa all'attivazione di proteine chinasi C. Il risultato si intreccia con altri percorsi e non va interpretato come una risposta esclusiva di tutti gli RTK.\n\nL'uso di PIP2 rende evidente un confronto: PI3K ne modifica la fosforilazione formando PIP3; PLC lo scinde producendo messaggeri differenti. Il substrato iniziale può essere collegato, mentre la reazione e l'informazione generata sono diverse. Analogamente, GPCR e RTK possono convergere su alcuni messaggeri senza avere la stessa architettura recettoriale o gli stessi intermedi iniziali.\n\nLa durata dipende inoltre da fosfatasi, internalizzazione, riciclo e degradazione. L'endocitosi non significa sempre arresto immediato: alcuni complessi continuano a trasmettere informazioni da compartimenti intracellulari. La degradazione riduce invece il numero di recettori disponibili. Lo stesso stimolo può dunque produrre una risposta transitoria oppure sostenuta secondo come vengono regolati questi passaggi. Quando si osserva un segnale persistente, occorre considerare sia una maggiore attivazione sia un difetto dei sistemi che normalmente lo limitano."
    },
    {
      "id": "rtk-09",
      "title": "Confini della famiglia: JAK e BCR–ABL non sono RTK",
      "refs": [
        "K-RTK",
        "C-RTK",
        "EMA-GLIVEC"
      ],
      "text": "Non tutti i recettori che portano alla fosforilazione di tirosine possiedono una chinasi propria. Molti recettori per citochine utilizzano chinasi associate della famiglia JAK. L'attivazione del complesso favorisce la fosforilazione e il reclutamento di proteine STAT, che contribuiscono alla regolazione genica. Qui il recettore e l'enzima sono componenti molecolari distinte: è la differenza fondamentale rispetto a un RTK con attività catalitica intrinseca.\n\nAnche altri recettori con attività enzimatica appartengono a famiglie differenti. I recettori del TGF-β trasmettono il segnale attraverso chinasi per serina e treonina; i recettori dei peptidi natriuretici possiedono attività guanilato-ciclasica. Condividere una collocazione sulla membrana o un diagramma di segnalazione non equivale a condividere il meccanismo.\n\nBCR–ABL è invece una proteina di fusione con attività tirosin-chinasica non recettoriale. Non presenta l'organizzazione di un RTK di superficie che riceve un fattore di crescita. Il confronto aiuta a leggere la categoria farmacologica: un inibitore di tirosin-chinasi può colpire chinasi recettoriali o non recettoriali. Imatinib, ad esempio, inibisce BCR–ABL e anche bersagli recettoriali quali KIT e PDGFR. Il nome della classe di farmaci non deve cancellare la distinzione biologica tra i bersagli."
    },
    {
      "id": "rtk-10",
      "title": "La famiglia ErbB: EGFR non coincide con HER2",
      "refs": [
        "FII-S9",
        "FII-SL",
        "GTP-ERBB",
        "EMA-HERCEPTIN"
      ],
      "text": "EGFR, chiamato anche HER1 o ErbB1, appartiene a una famiglia che comprende HER2/ErbB2, HER3/ErbB3 e HER4/ErbB4. Le combinazioni tra i membri contribuiscono a determinare la segnalazione. Per leggere una figura occorre controllare quale ligando, quale componente recettoriale e quale dominio sono realmente rappresentati.\n\nHER2 non viene attivato da un proprio ligando cognato identificato come avviene per EGFR; svolge un ruolo importante come partner di altri membri della famiglia. Non è quindi corretto disegnare EGF come un ligando che si lega direttamente a HER2 e spiegare ogni effetto anti-HER2 come semplice competizione con EGF. Né l'assenza di un ligando cognato significa che HER2 sia, in ogni cellula e in ogni condizione, permanentemente attivo.\n\nAmplificazione del gene ed elevata espressione possono favorire una segnalazione patologica. In questo contesto il bersaglio può essere raggiunto dall'esterno: trastuzumab riconosce una regione del dominio extracellulare di HER2 e può interferire con la segnalazione, oltre a partecipare a meccanismi immunitari mediati dall'anticorpo. È un esempio di come lo stesso circuito possa essere modificato senza occupare la tasca dell'ATP intracellulare. «Anticorpo contro il recettore» descrive la sede del riconoscimento, non un unico meccanismo valido per tutti gli anticorpi."
    },
    {
      "id": "rtk-11",
      "title": "Quando il circuito diventa dominante: mutazioni, amplificazioni e fusioni",
      "refs": [
        "C-RTK",
        "FII-S9",
        "FII-SL"
      ],
      "text": "Una mutazione attivante può favorire la funzione di una chinasi; un'amplificazione può aumentare il numero di copie del gene e la quantità di proteina; una fusione può collegare domini che prima appartenevano a proteine diverse. Sono alterazioni distinte. La semplice parola «positivo» perde informazione se non chiarisce quale fenomeno è stato misurato.\n\nIl concetto di dipendenza oncogenica descrive una situazione nella quale il mantenimento del fenotipo tumorale dipende fortemente da un particolare circuito alterato. Questo offre una ragione biologica per cercare un bersaglio farmacologico. Non implica però che il tumore abbia una sola anomalia, che tutte le cellule siano identiche o che il blocco del nodo determini necessariamente una guarigione.\n\nUn'altra distinzione riguarda gli oncogeni e i freni della crescita. Aumentare l'attività di un componente promotore e perdere una funzione che limita il segnale possono convergere su una risposta simile, ma richiedono interpretazioni differenti. Rilevare un'alterazione non basta inoltre a stabilirne il ruolo causale: può essere un elemento determinante oppure un dato associato. Il percorso dal risultato molecolare alla terapia richiede di collegare variante, malattia, sensibilità al farmaco e prove cliniche, senza sostituire questi passaggi con una somiglianza tra nomi."
    },
    {
      "id": "rtk-12",
      "title": "Dove intervenire: ligando, recettore o enzima intracellulare",
      "refs": [
        "K-RTK",
        "FII-SL",
        "EMA-HERCEPTIN",
        "EMA-TAGRISSO"
      ],
      "text": "Le strategie farmacologiche possono intercettare punti diversi della comunicazione. Un anticorpo può legare un ligando extracellulare e ridurne l'accesso ai recettori; un altro può riconoscere il dominio esterno di un recettore. Sono interventi differenti, anche quando il risultato finale converge sulla stessa rete. La posizione del bersaglio va letta prima del nome del farmaco.\n\nLe piccole molecole possono invece raggiungere domini intracellulari e inibire l'attività di una chinasi. Il riconoscimento dipende dalla struttura del sito, dalla conformazione della proteina e dalle interazioni formate. La selettività è relativa: chinasi differenti condividono caratteristiche strutturali, e uno stesso composto può inibirne più di una. Questo può contribuire all'attività terapeutica, agli effetti indesiderati o a entrambi.\n\nAnche un anticorpo non coniugato va distinto da un anticorpo associato a un carico citotossico. Nel secondo caso entrano in gioco internalizzazione, rilascio del carico e proprietà di quest'ultimo; non è corretto trasferire automaticamente a tutti i coniugati l'idea di una tossicità confinata alle sole cellule tumorali. Per questo capitolo è sufficiente mantenere separate le domande «che cosa viene riconosciuto?» e «che cosa succede dopo il riconoscimento?». Esse preparano lo studio dei singoli farmaci senza fingere che una sola figura esaurisca la loro farmacologia."
    },
    {
      "id": "rtk-13",
      "title": "ATP, conformazione e reversibilità: tre descrizioni da non sovrapporre",
      "refs": [
        "FII-SL",
        "FDA-IRESSA",
        "EMA-TAGRISSO"
      ],
      "text": "Molti inibitori di chinasi occupano la regione di legame dell'ATP o siti adiacenti. La classificazione in tipo I e tipo II descrive, in termini generali, diverse modalità di riconoscimento di conformazioni del dominio chinasico. È una classificazione strutturale: non stabilisce da sola se il farmaco formi un legame covalente né quanto a lungo rimanga associato al bersaglio.\n\nUn inibitore reversibile si può dissociare senza rompere un legame covalente con la proteina. Un inibitore covalente irreversibile può invece mantenere inattiva la molecola di bersaglio modificata finché intervengono processi quali il ricambio proteico. Questo non significa che ogni effetto nell'organismo sia permanente: l'organismo rinnova proteine e cellule, e l'esposizione al farmaco cambia nel tempo.\n\nGefitinib è un esempio documentato di inibizione reversibile di EGFR; osimertinib è descritto nel RCP come inibitore irreversibile di specifiche forme mutate di EGFR, inclusa T790M. Il confronto corregge l'idea che «tutti i TKI sono irreversibili». Non consente di dedurre che il secondo sia sempre preferibile al primo per qualsiasi tumore: sensibilità della variante, sede di malattia, contesto autorizzato, sicurezza ed evidenze cliniche restano informazioni necessarie. La chimica del legame spiega un pezzo del comportamento, non una graduatoria terapeutica universale."
    },
    {
      "id": "rtk-14",
      "title": "Biomarcatori: il test deve rispondere alla domanda giusta",
      "refs": [
        "FII-S9",
        "FII-SL",
        "EMA-GLIVEC",
        "EMA-TAGRISSO",
        "EMA-HERCEPTIN"
      ],
      "text": "Un test può misurare espressione proteica, numero di copie di un gene, una variante di sequenza o una fusione. Questi risultati non sono intercambiabili. Un'abbondante proteina sulla superficie non dimostra, da sola, la presenza di una specifica mutazione del dominio chinasico. Analogamente, il nome della variante non descrive automaticamente la quantità di proteina espressa.\n\nTre esempi aiutano a mantenere il collegamento tra biologia e contesto. Il RCP di Glivec comprende la leucemia mieloide cronica con cromosoma Philadelphia e contesti definiti di GIST; il RCP di Tagrisso collega gli impieghi a specifiche caratteristiche di EGFR e della malattia; Herceptin richiede una caratterizzazione validata di HER2. Questi richiami illustrano tipi di selezione, non riassumono tutte le indicazioni o le sequenze di trattamento.\n\nIl valore predittivo riguarda la probabilità di beneficio in relazione a un trattamento e a un contesto. Il valore prognostico riguarda invece l'andamento della malattia: le due proprietà possono coesistere, ma una non dimostra l'altra. Anche l'affidabilità del campione e del metodo conta. Prima di trarre una conclusione da un risultato bisogna chiedersi che cosa è stato cercato, con quale test, in quale materiale e per quale decisione. Il biomarcatore acquista significato dentro questa catena, non come etichetta isolata."
    },
    {
      "id": "rtk-15",
      "title": "Resistenza: un ostacolo al legame oppure una strada alternativa",
      "refs": [
        "FII-S9",
        "FII-SL",
        "C-RTK",
        "FDA-KRAS"
      ],
      "text": "La resistenza può essere presente fin dall'inizio o emergere durante il trattamento. Un'alterazione del bersaglio può ridurre l'effetto dell'inibitore; un circuito alternativo può sostenere la risposta nonostante il blocco; popolazioni cellulari differenti possono contribuire in modo diverso alla progressione. Queste possibilità non sono equivalenti e possono coesistere.\n\nSe RAS mantiene attivo un ramo a valle, interrompere il segnale esterno può non spegnere quel ramo. È un utile ragionamento causale, ma diventa scorretto quando viene trasformato nella regola «qualsiasi mutazione di KRAS esclude qualsiasi impiego di un anti-EGFR». Variante, tumore e associazione farmacologica cambiano la domanda clinica.\n\nUn controesempio documentato è l'approvazione FDA del 16 gennaio 2025 di sotorasib insieme a panitumumab negli adulti con carcinoma colorettale metastatico KRAS G12C dopo precedente chemioterapia a base di fluoropirimidina, oxaliplatino e irinotecan. Si tratta di un'associazione e di un contesto statunitense specifici, non della dimostrazione che il solo anti-EGFR sia efficace in ogni tumore con KRAS mutato, né di un'indicazione italiana automaticamente deducibile. Il punto didattico è conservare il meccanismo generale senza trasformarlo in una controindicazione universale che ignora gli sviluppi clinici."
    },
    {
      "id": "rtk-16",
      "title": "Esplora il circuito: cambia un punto, segui le conseguenze",
      "refs": [
        "C-RTK",
        "R-RTK"
      ],
      "rtkLab": true,
      "text": "Lo schema interattivo segue soltanto il ramo RTK–GRB2/SOS–RAS–RAF–MEK–ERK. Parti dalla condizione senza stimolo, poi aggiungi il ligando: il recettore può reclutare il sistema di scambio e il segnale raggiunge la cascata. Confronta quindi il blocco esterno, che impedisce l'attivazione da parte del ligando, con il blocco della chinasi, che interrompe il passaggio catalitico intracellulare.\n\nNello scenario con RAS autonomo il recettore è bloccato, ma il nodo a valle rimane acceso per ipotesi. Il disegno rende visibile la posizione della discontinuità: non rappresenta un farmaco inefficace «perché troppo debole», ma un ingresso del segnale che nel modello non dipende più dal passaggio bloccato. È una domanda sulla struttura del circuito prima che sulla quantità di farmaco.\n\nGli stati acceso e spento sono una semplificazione qualitativa. Non rappresentano percentuali di occupazione, velocità, dosi o probabilità di risposta. Sono esclusi PI3K, feedback, altre forme di RAS, interazioni tra rami, tossicità e adattamenti nel tempo. Perciò il modello aiuta a formulare un'ipotesi di resistenza, ma non seleziona una terapia. Il caso clinico dell'associazione KRAS G12C/anti-EGFR mostra proprio perché una rete reale richiede più informazioni di quelle contenute in questa singola catena."
    },
    {
      "id": "rtk-17",
      "title": "Mirato non significa privo di rischi",
      "refs": [
        "EMA-TAGRISSO",
        "EMA-HERCEPTIN",
        "K-RTK"
      ],
      "text": "Un bersaglio può essere rilevante per il tumore e contemporaneamente svolgere funzioni nei tessuti sani. Inoltre un farmaco può agire su più proteine. La tossicità può quindi derivare dall'interferenza con il bersaglio desiderato in un altro tessuto, da altri bersagli o da proprietà ulteriori del trattamento. La parola «mirato» descrive una strategia, non l'assenza di effetti indesiderati.\n\nI documenti ufficiali aiutano a evitare una rappresentazione troppo rassicurante. Il RCP di Tagrisso descrive, tra i rischi, malattia polmonare interstiziale e prolungamento del QTc; quello di Herceptin evidenzia la disfunzione cardiaca. Questi esempi non costituiscono un elenco completo e non sono una guida per modificare una terapia. Servono a ricordare che la comprensione del meccanismo deve restare collegata alla sicurezza.\n\nAnche l'esposizione conta: un effetto osservato in una preparazione cellulare non garantisce che nell'organismo si raggiunga selettivamente quel bersaglio senza conseguenze altrove. Distribuzione, metabolismo, interazioni e caratteristiche individuali modificano il rapporto tra attività desiderata e rischi. Studiare una chinasi come punto di una rete è necessario, ma la valutazione di un medicinale riguarda una persona e un contesto terapeutico, non un circuito isolato."
    },
    {
      "id": "rtk-18",
      "title": "Dal disegno alla prova: che cosa possiamo davvero concludere",
      "refs": [
        "FII-S9",
        "FDA-KRAS",
        "EMA-TAGRISSO"
      ],
      "text": "Un diagramma suggerisce dove un intervento potrebbe funzionare. Un esperimento biochimico può misurare l'inibizione di una proteina. Un modello cellulare può mostrare una variazione della crescita. Nessuno di questi livelli, da solo, dimostra il beneficio clinico: ciascuno risponde a una domanda diversa e introduce condizioni che possono non coincidere con la malattia nell'organismo.\n\nNegli studi clinici bisogna distinguere anche gli esiti. Una risposta radiologica, un periodo senza progressione e la sopravvivenza complessiva non sono misure equivalenti. Nel resoconto FDA dell'associazione sotorasib–panitumumab, ad esempio, il confronto sulla sopravvivenza senza progressione e quello sulla sopravvivenza complessiva non hanno lo stesso risultato statistico. Non è corretto sostituirli con un generico «tasso di successo».\n\nPer ripercorrere il capitolo, scegli una coppia bersaglio-farmaco e ricostruisci cinque passaggi: struttura del bersaglio, modalità di attivazione, ramo intercettato, alterazione rilevante nella patologia e tipo di prova disponibile. Se manca un passaggio, dichiaralo. Questo metodo permette di integrare libri, lezioni e documenti aggiornati senza trattarli come fonti intercambiabili. Il capitolo sviluppa un intervallo tematico verificato; non equivale alla lettura completa dei corsi né a una revisione clinica indipendente dell'oncologia molecolare."
    }
  ],
  "checks": [
    {
      "question": "Il recettore è dimerico: possiamo concludere che stia trasmettendo il segnale?",
      "answer": "No. Conta la configurazione del complesso, l'attività catalitica e il reclutamento degli effettori. Il recettore dell'insulina è già un complesso covalente prima dello stimolo: l'attivazione non coincide semplicemente con la comparsa di un dimero."
    },
    {
      "question": "SOS attiva RAS aggiungendo un fosfato al GDP?",
      "answer": "No. SOS facilita lo scambio del nucleotide. RAS è una GTPasi e passa allo stato legato a GTP; non viene attivata da SOS mediante una comune fosforilazione del GDP."
    },
    {
      "question": "Che differenza c'è tra PI3K e PLC quando il substrato è PIP2?",
      "answer": "La PI3K di classe I genera PIP3 aggiungendo un fosfato al lipide. PLC scinde PIP2 producendo IP3 e diacilglicerolo. Condividere un substrato di partenza non significa generare gli stessi messaggeri."
    },
    {
      "question": "Perché BCR–ABL e un recettore per citochine non sono esempi equivalenti di RTK?",
      "answer": "BCR–ABL è una chinasi di fusione non recettoriale. Molti recettori per citochine utilizzano JAK separate dal recettore. Un RTK possiede invece un dominio tirosin-chinasico intrinseco: attività simili possono appartenere ad architetture diverse."
    },
    {
      "question": "Un inibitore di tipo II è necessariamente covalente e irreversibile?",
      "answer": "No. La classificazione di tipo I/II riguarda modalità di legame e conformazione della chinasi. Covalenza e reversibilità sono altre caratteristiche. Gefitinib reversibile e osimertinib irreversibile mostrano perché non si può attribuire un'unica reversibilità a tutti i TKI."
    },
    {
      "question": "L'assenza di un ligando cognato di HER2 significa che HER2 non può segnalare?",
      "answer": "No. HER2 può partecipare a complessi con altri membri della famiglia ErbB. Non è corretto né assegnargli direttamente EGF come ligando né considerarlo sempre attivo in ogni condizione."
    },
    {
      "question": "Nello schema RAS resta acceso mentre il recettore è bloccato. Questo esclude ogni associazione anti-EGFR in tutti i tumori con KRAS mutato?",
      "answer": "No. Lo schema assume una sola catena qualitativa. Variante, patologia e combinazioni cambiano il contesto; l'esempio FDA sotorasib–panitumumab riguarda KRAS G12C nel carcinoma colorettale metastatico dopo terapie definite, non ogni tumore RAS-mutato né il solo anti-EGFR."
    },
    {
      "question": "Un miglioramento della sopravvivenza senza progressione dimostra automaticamente un miglioramento della sopravvivenza complessiva?",
      "answer": "No. PFS e OS misurano esiti diversi e vanno valutati separatamente, insieme al disegno dello studio. Non si possono sostituire con una percentuale generica di successo o con la sola plausibilità del meccanismo."
    }
  ],
  "references": [
    {
      "id": "K-RTK",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana, Piccin 2014, dalla XII americana 2012. Testo letto: PDF43–47 (stampate23–27); figura2-7 e pagina PDF45 controllate visivamente. Meccanismi generali; esempi terapeutici storici non assunti come indicazioni attuali."
    },
    {
      "id": "R-RTK",
      "title": "Rang & Dale · Farmacologia",
      "detail": "8ª edizione italiana 2016, originale2015. PDF81–83: testo letto; PDF82 controllato visivamente, figura3.17. PDF81 e83 sono riletture rispetto al registro GPCR. Il passaggio GRB2/SOS è riconciliato con Clementi; il disegno abbreviato non viene riprodotto."
    },
    {
      "id": "C-RTK",
      "title": "Clementi e Fumagalli · Farmacologia generale e molecolare",
      "detail": "4ª edizione2012. Testo letto PDF168–178; controllo visuale PDF172 e176, stampate151 e155, figure14.3 e14.5. Tabelle storiche di malattie e farmaci non trasferite come raccomandazioni correnti."
    },
    {
      "id": "FII-S9",
      "title": "Appunti del corso di Farmacologia II · lezione 9 del 17/11/2025",
      "detail": "Anno accademico2025–26, canaleD. Testo degli appunti PDF1–6 letto, corrispondente alla raccolta PDF142–147; contato una sola volta. Figure degli appunti non controllate in questo intervallo. BCR–ABL, HER2 e la generalizzazione su KRAS sono riconciliati criticamente, non copiati."
    },
    {
      "id": "FII-SL",
      "title": "Diapositive del corso di Farmacologia II · Antitumorali mirati",
      "detail": "Slide2025–26, PDF1–12: testo estratto letto; figure controllate a PDF3,4,6–12. Alcuni schemi sono storici. Corrette la sovrapposizione HER2/EGFR e la generalizzazione dell'irreversibilità a tutti i TKI. Restano fuori dall'intervallo PDF13–48."
    },
    {
      "id": "RX-AKT",
      "title": "Reactome · attivazione di AKT",
      "detail": "Evento umano R-HSA-198270: fosforilazione di AKT da parte di PDPK1. Consultazione25/10/2026, descrizione del singolo evento; non lettura dell'intera banca dati.",
      "url": "https://reactome.org/content/detail/R-HSA-198270"
    },
    {
      "id": "RX-MTOR",
      "title": "Reactome · mTORC2 e AKT",
      "detail": "Evento umano R-HSA-198640: descrizione letta, ruolo di mTORC2 su AKT e distinzione da mTORC1. Consultazione25/10/2026; la data di accesso non modifica la data della letteratura citata.",
      "url": "https://reactome.org/content/detail/R-HSA-198640"
    },
    {
      "id": "GTP-ERBB",
      "title": "IUPHAR/BPS · recettori catalitici, famiglia ErbB",
      "detail": "Concise Guide2023/24: sezione Type I RTKs/ErbB consultata il25/10/2026. HER2 come partner senza attivazione da un proprio ligando cognato. Non revisione dell'intera guida.",
      "url": "https://bpspubs.onlinelibrary.wiley.com/doi/10.1111/bph.16180"
    },
    {
      "id": "EMA-GLIVEC",
      "title": "EMA · Glivec · informazioni di prodotto UE",
      "detail": "Consultazione25/10/2026: estratti §4.1 e §5.1; distinzione BCR–ABL/KIT/PDGFR e contesti autorizzati. Non lettura integrale del documento né nuova scheda farmacocinetica.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/glivec-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-TAGRISSO",
      "title": "EMA · Tagrisso · informazioni di prodotto UE",
      "detail": "Consultazione25/10/2026: estratti §§4.1,4.4,4.8 e5.1 su EGFR, test, irreversibilità, rischio polmonare e QTc. Sintesi selettiva; non copre tutti gli impieghi o i rischi e non propone una sequenza terapeutica.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/tagrisso-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-HERCEPTIN",
      "title": "EMA · Herceptin · informazioni di prodotto UE",
      "detail": "Consultazione25/10/2026: estratti §§4.1,4.4 e5.1, versione endovenosa: HER2, dominio extracellulare, ADCC e disfunzione cardiaca. Non estensione automatica a coniugati o altre formulazioni.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/herceptin-epar-product-information_en.pdf"
    },
    {
      "id": "FDA-IRESSA",
      "title": "FDA · Iressa · meccanismo d'azione",
      "detail": "Documento2021, §12.1 consultato il25/10/2026 solo per il carattere reversibile dell'inibizione di EGFR. Non presentato come ultimo aggiornamento clinico o fonte delle autorizzazioni italiane.",
      "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/206995s004lbl.pdf"
    },
    {
      "id": "FDA-KRAS",
      "title": "FDA · sotorasib con panitumumab, KRAS G12C",
      "detail": "Comunicazione16/01/2025, letta il25/10/2026: carcinoma colorettale metastatico dopo le terapie specificate; confronto tra PFS e OS. ContestoUSA, non autorizzazione o rimborsabilità italiana.",
      "url": "https://www.fda.gov/drugs/resources-information-approved-drugs/fda-approves-sotorasib-panitumumab-kras-g12c-mutated-colorectal-cancer"
    }
  ],
  "drugs": [],
  "targets": [],
  "moleculeLinks": [
    {
      "id": "CHEMBL941",
      "label": "Imatinib"
    },
    {
      "id": "CHEMBL939",
      "label": "Gefitinib"
    },
    {
      "id": "CHEMBL3353410",
      "label": "Osimertinib"
    },
    {
      "id": "CHEMBL1201585",
      "label": "Trastuzumab"
    }
  ],
  "relatedExistingChapterIds": [
    "recettori-e-legame",
    "gpcr",
    "desensibilizzazione-tolleranza",
    "anticorpi-biologici"
  ],
  "coverage": "Capitolo ampliato su intervalli delimitati di tre libri, appunti e diapositive del corso di Farmacologia II. Non sono stati letti integralmente libri o corsi. Gli altri materiali del corso di Farmacologia restano nel percorso di riconciliazione; nessuna nuova lettura completa di Farmaco I in questo lotto. Figure controllate solo alle pagine dichiarate. Esempi clinici confrontati con fonti ufficiali, senza algoritmo di trattamento o revisione clinica indipendente.",
  "wordCount": 3352
});
