// Original synthesis; bounded reading is not independent clinical validation.
export const THEORY_ANTIBODIES = Object.freeze({
  "id": "anticorpi-biologici",
  "volume": 15,
  "title": "Farmaci biologici e anticorpi: struttura, destino ed evidenza",
  "lead": "Dalla produzione ai bersagli, dal riciclo FcRn ai biosimilari: un percorso per capire le differenze.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-25",
  "readingManifest": "./data/anticorpi-biologici-reading.json",
  "sections": [
    {
      "id": "bio-01",
      "title": "Biologico e biotecnologico: definire prima di classificare",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Un farmaco biologico contiene una sostanza attiva prodotta o ottenuta da una fonte biologica, la cui caratterizzazione richiede di considerare insieme struttura, attività e processo produttivo. Il termine biotecnologico mette invece in evidenza l'impiego di tecnologie come il DNA ricombinante. Le due categorie si sovrappongono ampiamente, ma non sono sinonimi perfetti: una proteina estratta da materiale biologico non diventa ricombinante per il solo fatto di essere una proteina.\n\nIn questo capitolo il centro dello studio sono le proteine terapeutiche: ormoni, enzimi, citochine, anticorpi e proteine di fusione. Vaccini, terapie geniche e prodotti cellulari richiedono percorsi dedicati. Chiamare tutto «biologico» può essere utile per descrivere l'origine, ma non permette di dedurre un meccanismo comune. Un'insulina sostituisce un segnale ormonale; un anticorpo può neutralizzare un mediatore; un enzima ricombinante ripristina una reazione carente.\n\nNon esiste una soglia universale di peso molecolare che separi correttamente tutte queste categorie. Le proteine hanno dimensioni molto diverse. Anche la coppia «naturale, quindi innocuo» è fuorviante: una molecola simile a una proteina umana può modificare profondamente l'omeostasi quando viene somministrata in una certa quantità, sede o durata. Origine, funzione e rischio devono restare tre domande distinte."
    },
    {
      "id": "bio-02",
      "title": "La produzione determina attributi da controllare",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "La sequenza amminoacidica è essenziale, ma non esaurisce l'identità funzionale di una proteina terapeutica. Ripiegamento, ponti disolfuro, modificazioni post-traduzionali, aggregazione e stabilità contribuiscono al comportamento del prodotto. Due preparazioni con la stessa sequenza non possono quindi essere confrontate soltanto leggendo l'ordine degli amminoacidi.\n\nNella produzione ricombinante si introduce l'informazione genetica in un sistema ospite, si selezionano condizioni di espressione e coltura, poi si recupera e purifica il prodotto. Batteri, lieviti e cellule di mammifero non hanno le stesse capacità di modificazione delle proteine. La scelta dipende dalle caratteristiche necessarie al farmaco; non esiste un ospite migliore per qualunque molecola. La purificazione deve ridurre anche contaminanti e residui del processo.\n\nLa microeterogeneità descrive la presenza controllata di varianti molecolari, per esempio differenti forme glicosilate. Non è di per sé un difetto, ma richiede limiti e metodi di controllo coerenti con l'attività e la sicurezza. La formulazione protegge inoltre una struttura che può essere sensibile a condizioni fisiche e chimiche. Per studiare un biologico occorre perciò collegare sequenza, processo, proprietà misurate e funzione, evitando sia l'idea di una copia atomica unica sia quella opposta di un prodotto impossibile da caratterizzare."
    },
    {
      "id": "bio-03",
      "title": "IgG: due bracci riconoscono, altre regioni organizzano la risposta",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Una IgG convenzionale è formata da due catene pesanti e due leggere, associate attraverso interazioni non covalenti e ponti disolfuro. Le regioni variabili di una catena pesante e di una leggera cooperano nel formare ciascun sito di riconoscimento. Le regioni determinanti la complementarità, o CDR, contribuiscono alla superficie che interagisce con l'epitopo, cioè la porzione dell'antigene effettivamente riconosciuta.\n\nIl frammento Fab comprende il sito di legame ma anche domini costanti: Fab non è sinonimo di «sola regione variabile». La porzione Fc contiene regioni costanti delle catene pesanti e può partecipare al reclutamento di effettori immunitari e al riciclo. La regione cerniera consente una certa flessibilità tra i bracci; la geometria dell'anticorpo contribuisce così al modo in cui può incontrare gli antigeni.\n\nMonoclonale indica l'origine da un clone o da una definita sequenza di riconoscimento, non significa monovalente. Una IgG monospecifica convenzionale ha due siti per la stessa specificità. I formati ingegnerizzati possono invece avere numeri e combinazioni di siti differenti. Confondere clonazione, specificità e valenza rende difficile capire perché un frammento, una IgG intera e un bispecifico possano condividere un bersaglio senza comportarsi allo stesso modo."
    },
    {
      "id": "bio-04",
      "title": "Affinità, avidità e accessibilità del bersaglio",
      "refs": [
        "C",
        "R",
        "FI"
      ],
      "text": "L'affinità riguarda l'interazione tra un singolo sito di legame e il suo epitopo. L'avidità descrive invece la stabilità complessiva ottenuta quando più interazioni possono cooperare. Due bracci non garantiscono automaticamente un vantaggio: devono poter raggiungere epitopi con una distanza e un orientamento compatibili. La densità dell'antigene sulla superficie cellulare può quindi cambiare il legame effettivo senza modificare la sequenza dell'anticorpo.\n\nUn anticorpo può riconoscere molto bene una proteina isolata e raggiungerla con difficoltà nel tessuto. L'epitopo può essere mascherato, scarsamente esposto o presente in una regione poco accessibile. Il farmaco deve arrivare nel compartimento appropriato e mantenere una concentrazione libera sufficiente. La selettività misurata in una provetta è una proprietà utile, ma non sostituisce lo studio della distribuzione e del contesto biologico.\n\nAnche il risultato del legame dipende dalla posizione dell'epitopo. Due anticorpi contro lo stesso recettore possono interferire con passaggi diversi: legame del ligando, associazione con un partner, internalizzazione o reclutamento immunitario. Per spiegare l'effetto bisogna quindi aggiungere alla domanda «contro quale proteina?» le domande «in quale punto?» e «con quale conseguenza?». Un nome di bersaglio non contiene già tutta la farmacodinamica."
    },
    {
      "id": "bio-05",
      "title": "Chimerizzazione, umanizzazione e nomi: una storia che non predice tutto",
      "refs": [
        "K",
        "R",
        "FI",
        "SFI",
        "WHO"
      ],
      "text": "Gli anticorpi murini hanno mostrato sia la possibilità di colpire un antigene definito sia i limiti dell'impiego ripetuto di proteine estranee nell'uomo. Nei formati chimerici classici le regioni variabili murine sono associate a regioni costanti umane. Nell'umanizzazione si conserva principalmente il riconoscimento conferito dalle CDR, inserendolo in un contesto umano, con eventuali modifiche necessarie a mantenere struttura e affinità.\n\nQuesta descrizione è più precisa dell'idea che la chimerizzazione sostituisca semplicemente «il gambo» lasciando tutto il Fab murino: il Fab comprende anche regioni costanti. Gli anticorpi umani vengono ottenuti con piattaforme capaci di generare sequenze umane, ma possono comunque indurre una risposta anti-farmaco. La percentuale di sequenza umana non stabilisce da sola emivita, immunogenicità clinica o superiorità terapeutica.\n\nNei nomi storici si incontrano terminazioni come -ximab e -zumab. Il sistema WHO del 2022 distingue nuovi gruppi: -tug per immunoglobuline monospecifiche intere con regioni costanti non modificate, -bart per quelle con regioni costanti ingegnerizzate, -ment per frammenti monospecifici e -mig per formati bi- o multispecifici. I nomi già assegnati restano in uso. Il nome aiuta a orientarsi, ma il formato effettivo va verificato nella descrizione del prodotto."
    },
    {
      "id": "bio-06",
      "title": "Tre modi di interrompere il dialogo tra citochina e cellula",
      "refs": [
        "C",
        "K",
        "S1",
        "EMA-KINERET",
        "EMA-ROACTEMRA",
        "EMA-STELARA"
      ],
      "text": "Un mediatore può essere intercettato prima che raggiunga il recettore. Un anticorpo neutralizzante riconosce il ligando; un recettore solubile costruito come farmaco ne conserva invece una regione di riconoscimento e agisce da esca. In entrambi i casi diminuisce la disponibilità del mediatore per i recettori cellulari, ma la struttura del farmaco è diversa.\n\nUn'altra strategia consiste nell'occupare il recettore o impedirne l'attivazione. Anakinra è una forma ricombinante dell'antagonista del recettore di IL-1: agisce sul recettore, non è una trappola che lega direttamente IL-1. Tocilizumab riconosce il recettore di IL-6, nelle forme di membrana e solubile. Ustekinumab riconosce invece p40, subunità condivisa dalle citochine IL-12 e IL-23: non blocca direttamente i loro recettori.\n\n«Solubile» non significa sempre «inibitorio». Nel sistema IL-6, un complesso con il recettore solubile può attivare gp130 su cellule appropriate, attraverso la trans-segnalazione. Questo esempio impedisce di trattare ogni recettore extracellulare come un semplice sequestratore. Nel disegnare il circuito bisogna rappresentare quali componenti legano il mediatore e quali possono ancora trasmettere il segnale. È quella sequenza, non la sola posizione fuori dalla cellula, a determinare l'effetto."
    },
    {
      "id": "bio-07",
      "title": "Fc, cellule effettrici e complemento: funzioni da selezionare",
      "refs": [
        "K",
        "R",
        "C",
        "SFI",
        "SL9"
      ],
      "text": "Dopo il legame a un antigene di superficie, la regione Fc dell'anticorpo può essere riconosciuta da recettori Fcγ sulle cellule immunitarie. Nella citotossicità cellulare dipendente da anticorpi, o ADCC, una cellula effettrice come una NK riconosce l'anticorpo associato al bersaglio e può favorire la sua uccisione. La Fc appartiene all'anticorpo: non è una regione della cellula tumorale.\n\nLa fagocitosi dipendente da anticorpi coinvolge invece cellule fagocitiche che riconoscono il materiale rivestito. Nella citotossicità dipendente dal complemento, o CDC, il legame dell'anticorpo può avviare una cascata di proteine solubili. Questi processi non sono tre nomi della stessa reazione. Richiedono componenti differenti e dipendono dall'isotipo, dalla disposizione degli anticorpi, dal tessuto e dalle caratteristiche del bersaglio.\n\nUn anticorpo terapeutico non deve necessariamente attivarli tutti. Quando l'obiettivo è neutralizzare una citochina, una forte attività citotossica può essere inutile o indesiderata. La progettazione può conservare, ridurre o modificare le funzioni della Fc; anche la glicosilazione può influenzarne le interazioni. Per comprendere un prodotto è quindi necessario distinguere il riconoscimento dell'antigene dall'effetto che si vuole ottenere dopo il riconoscimento. La presenza di una Fc non dimostra da sola un'attività ADCC clinicamente dominante."
    },
    {
      "id": "bio-08",
      "title": "Confronta i formati: la struttura suggerisce domande diverse",
      "refs": [
        "C",
        "R",
        "FI",
        "SFI",
        "SL9"
      ],
      "text": "Il confronto visivo mette accanto cinque architetture ideali: una IgG, un frammento Fab associato a PEG, una proteina recettore–Fc, un bispecifico a frammenti e un anticorpo coniugato a un carico. Non sono sagome intercambiabili. Cambiano la superficie che riconosce il bersaglio, la presenza di una Fc, le possibilità di collegare due partner e l'eventuale trasporto di un'altra sostanza.\n\nLa forma a Y rappresenta un'organizzazione semplificata, non una struttura tridimensionale in scala. Nel bispecifico disegnato, per esempio, l'assenza di Fc riguarda il formato scelto come esempio e non tutti i bispecifici. Nel coniugato il numero dei simboli del carico è illustrativo: non comunica un rapporto farmaco–anticorpo misurato. Analogamente, una Fc aggiunta a un recettore non trasforma quel recettore in un anticorpo contro il ligando.\n\nUsa il confronto per formulare una previsione ragionata, poi verifica dove si ferma. Un frammento privo di Fc non dispone delle sue normali interazioni, ma altre modifiche possono prolungarne la permanenza. Un costrutto con due specificità può avvicinare cellule, ma non ogni doppia specificità è progettata per questo. La struttura restringe le ipotesi plausibili; i dati del prodotto stabiliscono quali sono effettivamente rilevanti.",
      "antibodyLab": true
    },
    {
      "id": "bio-09",
      "title": "Bispecifici: collegare due partner senza modificarne il genoma",
      "refs": [
        "SL9",
        "SFI",
        "EMA-BLINCYTO"
      ],
      "text": "Un anticorpo bispecifico è progettato per riconoscere due specificità differenti. Esistono formati con Fc e formati costituiti da frammenti: l'etichetta descrive il riconoscimento, non una sola architettura. Anche la valenza può cambiare, perciò «due specificità» non deve essere confuso con «esattamente due siti di legame».\n\nBlinatumomab offre un esempio: collega CD19 sulle cellule B con CD3 sui linfociti T e favorisce la formazione di una sinapsi citolitica. Il formato a due frammenti variabili a catena singola non possiede una Fc. L'azione viene descritta senza dipendere dalla presentazione di un peptide tramite HLA. Il prodotto ha indicazioni definite nella leucemia linfoblastica acuta a precursori B CD19-positiva; non è una terapia per qualsiasi tumore che esprima un antigene.\n\nIl linfocita T viene reclutato dal farmaco, mentre nelle CAR-T si impiegano cellule modificate per esprimere un recettore ingegnerizzato. Non sono due formulazioni della stessa procedura. L'attivazione immunitaria può inoltre produrre effetti sistemici: per blinatumomab sono rilevanti la sindrome da rilascio di citochine e le tossicità neurologiche. Il riconoscimento mirato non rende l'attivazione confinata o priva di rischi; modalità di somministrazione e sorveglianza appartengono al percorso specialistico."
    },
    {
      "id": "bio-10",
      "title": "Coniugati anticorpo–farmaco: una sequenza di passaggi necessari",
      "refs": [
        "SL9",
        "SFI",
        "EMA-KADCYLA"
      ],
      "text": "Un coniugato anticorpo–farmaco, o ADC, combina un anticorpo, un collegamento chimico e un carico farmacologicamente attivo. L'anticorpo orienta il riconoscimento; il collegamento contribuisce alla stabilità e alle condizioni di rilascio; il carico determina un'ulteriore azione. Nessuna di queste componenti può essere ignorata spiegando il prodotto soltanto con il nome del bersaglio.\n\nTrastuzumab emtansine riconosce HER2 e veicola DM1, un derivato maytansinoide che interferisce con i microtubuli. Dopo internalizzazione e degradazione lisosomiale si formano cataboliti attivi contenenti DM1. Il collegamento è di tipo non scindibile: non va illustrato come un semplice gancio che si apre invariato all'esterno della cellula. Il prodotto è distinto da trastuzumab non coniugato e da trastuzumab deruxtecan; condividere una componente non rende i medicinali intercambiabili.\n\nNel modello generale contano espressione dell'antigene, accessibilità, internalizzazione, traffico intracellulare e sensibilità al carico. Una resistenza può comparire in uno qualsiasi di questi passaggi. Il farmaco non raggiunge esclusivamente cellule tumorali e le proprietà del carico possono contribuire alla tossicità. Il trasporto mirato modifica la distribuzione dell'azione, ma non autorizza a promettere una separazione assoluta tra efficacia sul tumore e danno ai tessuti sani."
    },
    {
      "id": "bio-11",
      "title": "FcRn: il recupero endosomiale prolunga la permanenza",
      "refs": [
        "FI",
        "SFI",
        "R"
      ],
      "text": "Le proteine plasmatiche possono entrare nelle cellule mediante processi di endocitosi. Per molte IgG, una parte del materiale internalizzato può essere recuperata grazie al recettore FcRn. Nell'ambiente acido dell'endosoma il legame della Fc a FcRn favorisce lo smistamento verso il riciclo, riducendo l'invio alla degradazione lisosomiale. Quando il complesso torna verso la superficie, il pH extracellulare facilita il rilascio dell'IgG.\n\nFcRn non coincide con i recettori Fcγ che reclutano cellule effettrici. Riconoscere questa distinzione permette di capire perché una modifica della Fc possa essere progettata per influenzare il riciclo senza perseguire lo stesso cambiamento nell'attività citotossica. Il nome «neonatale» ricorda una funzione storicamente studiata, ma il sistema contribuisce all'omeostasi delle IgG anche nell'adulto.\n\nLa presenza di FcRn non assegna a ogni anticorpo una medesima emivita. Interazioni con il bersaglio, stato del paziente, struttura del farmaco e risposta anti-farmaco possono contribuire alla sua eliminazione. Un frammento senza Fc non sfrutta questo recupero attraverso una propria Fc, ma può essere modificato in altri modi per prolungarne l'esposizione. L'emivita descrive una dinamica di concentrazione: non coincide automaticamente con la durata di un beneficio o con l'intervallo tra somministrazioni."
    },
    {
      "id": "bio-12",
      "title": "Assorbimento e distribuzione: dal punto di iniezione al tessuto",
      "refs": [
        "FI",
        "SFI",
        "R"
      ],
      "text": "Le proteine terapeutiche convenzionali vengono generalmente somministrate per vie che evitano la digestione e le difficoltà di attraversamento dell'epitelio intestinale. Dopo una somministrazione endovenosa non esiste una fase di assorbimento dal sito di iniezione; dopo una somministrazione sottocutanea entrano invece in gioco diffusione locale, drenaggio linfatico e possibile degradazione prima dell'arrivo nella circolazione.\n\nLa biodisponibilità sottocutanea non è per definizione completa e il picco può comparire lentamente. Formulazione, sito e proprietà della proteina contribuiscono al profilo. Un'esposizione prolungata non deve essere attribuita automaticamente a una lenta eliminazione: anche il rilascio e l'assorbimento possono influenzare la curva osservata. La via riportata nel documento di un prodotto non va sostituita con una generica categoria «iniettabile».\n\nPer molte IgG il volume apparente di distribuzione è relativamente contenuto rispetto a quello di piccole molecole lipofile. Questo non significa che rimangano tutte nel plasma o non raggiungano i tessuti. Passaggio attraverso l'endotelio, convezione, struttura interstiziale e legame locale regolano l'accesso. Nei tumori, una distribuzione eterogenea può lasciare regioni meno esposte. Concentrazione plasmatica, concentrazione nel tessuto e occupazione del bersaglio sono misure collegate, ma non equivalenti."
    },
    {
      "id": "bio-13",
      "title": "Proteolisi e disposizione mediata dal bersaglio",
      "refs": [
        "FI",
        "SFI",
        "R",
        "EMA-TMDD"
      ],
      "text": "Molte proteine terapeutiche vengono degradate mediante processi proteolitici in diversi compartimenti. I prodotti di degradazione rientrano nel metabolismo delle proteine e degli amminoacidi. Non è appropriato assegnare a tutti i biologici percentuali fisse di eliminazione epatica o renale; dimensione, formato, legame e stato biologico modificano le vie rilevanti. Anche un frammento piccolo può comportarsi diversamente da una IgG intera.\n\nQuando il farmaco si lega al bersaglio e il complesso viene internalizzato o eliminato, il bersaglio partecipa alla disposizione del farmaco: si parla di target-mediated drug disposition, o TMDD. Una quantità elevata di bersaglio può contribuire a consumare il farmaco. Se il processo si satura, la relazione tra dose ed esposizione può diventare non proporzionale. La componente non mediata dal bersaglio continua comunque a operare.\n\nNon vale la regola assoluta «bersaglio solubile uguale cinetica lineare, bersaglio di membrana uguale non lineare». Contano capacità, velocità di turnover, concentrazioni e intervallo studiato. Un andamento quasi lineare in un certo intervallo non dimostra l'assenza di una componente saturabile. Il ragionamento deve partire dai processi e dalle misure, non dalla sola sede anatomica del bersaglio; le curve didattiche illustrano possibilità, non leggi universali per una classe."
    },
    {
      "id": "bio-14",
      "title": "Esposizione ed effetto: evitare scorciatoie tra dose e risposta",
      "refs": [
        "FI",
        "SFI",
        "C"
      ],
      "text": "Cmax, concentrazione minima e area sotto la curva descrivono aspetti differenti dell'esposizione. La Cmax non appartiene esclusivamente allo studio delle piccole molecole e l'AUC non è una misura riservata ai biologici. La scelta del parametro utile dipende dalla relazione con il meccanismo, dall'andamento temporale e dalla domanda clinica.\n\nL'effetto può dipendere dall'occupazione del bersaglio, dalla durata del blocco o dalla modificazione di una popolazione cellulare. Se il farmaco induce la rimozione di cellule che si ricostituiscono lentamente, una conseguenza farmacodinamica può persistere oltre una diminuzione marcata della concentrazione. Al contrario, una concentrazione misurabile non garantisce che nel tessuto sia mantenuto un effetto sufficiente.\n\nÈ utile seguire tre livelli: dose somministrata, esposizione e risposta. Il collegamento tra i primi due appartiene soprattutto alla farmacocinetica; quello tra esposizione e risposta coinvolge la farmacodinamica. Bersaglio e malattia possono influenzare entrambi. Ne deriva una cautela interpretativa: un'associazione tra bassa concentrazione e scarsa risposta non dimostra da sola che aumentare la dose risolva il problema. Possono intervenire immunogenicità, perdita del bersaglio, vie alternative o cambiamenti dell'attività di malattia. Un modello didattico non sostituisce i dati del singolo contesto."
    },
    {
      "id": "bio-15",
      "title": "Immunogenicità: legare il farmaco non significa sempre neutralizzarlo",
      "refs": [
        "FI",
        "SFI",
        "EMA-ADA"
      ],
      "text": "Una proteina terapeutica può essere riconosciuta dal sistema immunitario anche quando è umana o umanizzata. Struttura, aggregazione, formulazione e caratteristiche dell’ospite contribuiscono al rischio. Ridurre le sequenze animali non elimina ogni possibilità di risposta immune.\n\nGli anticorpi anti-farmaco, o ADA, legano il prodotto. Alcuni ne neutralizzano l’attività; altri possono modificarne l’eliminazione senza neutralizzarlo. Non ogni positività determina una perdita di risposta: contano persistenza, caratteristiche della risposta e relazione con esposizione, efficacia e sicurezza.\n\nLe percentuali di ADA di studi diversi non costituiscono automaticamente una graduatoria. Metodo, tempi di prelievo e farmaco residuo influenzano la rilevazione. Bisogna mantenere distinti test di legame, valutazione funzionale e osservazione clinica: un dato analitico acquista significato quando viene collegato alla sequenza temporale e agli esiti."
    },
    {
      "id": "bio-16",
      "title": "Interazioni e sicurezza si spiegano anche attraverso la funzione",
      "refs": [
        "SFI",
        "K",
        "EMA-ROACTEMRA",
        "EMA-HUMIRA"
      ],
      "text": "Il fatto che una proteina non venga eliminata principalmente tramite i citocromi non la rende priva di interazioni. Le interazioni farmacodinamiche possono derivare dalla combinazione di effetti sullo stesso sistema. Esistono inoltre collegamenti indiretti tra infiammazione e metabolismo di altri farmaci.\n\nTocilizumab illustra quest'ultimo punto: l'infiammazione mediata da IL-6 può ridurre l'espressione di diversi CYP; il blocco del segnale può ripristinarla e cambiare l'esposizione a medicinali concomitanti. L'interazione nasce dalla modifica dell'ambiente biologico, non dalla competizione della proteina nella tasca enzimatica. È un motivo per leggere anche la sezione sulle interazioni di un biologico.\n\nLa selettività per un mediatore può colpire una funzione utile dell'organismo. Per adalimumab, tra i rischi documentati figurano infezioni gravi e tubercolosi; la valutazione preventiva e il monitoraggio appartengono alle condizioni d'impiego del prodotto. Non bisogna estendere indistintamente questo profilo a ogni proteina terapeutica. Reazioni durante l'infusione, ipersensibilità, rilascio di citochine e conseguenze del blocco immunitario possono avere meccanismi differenti. Comprendere il rischio significa collegarlo a molecola, bersaglio, modalità di esposizione e paziente, non compilare un elenco unico valido per tutti i biologici."
    },
    {
      "id": "bio-17",
      "title": "Un mediatore, tre architetture: il confronto sul TNF",
      "refs": [
        "K",
        "FI",
        "S1",
        "EMA-ENBREL",
        "EMA-CIMZIA",
        "EMA-HUMIRA"
      ],
      "text": "Il TNF è un buon esempio per separare bersaglio, struttura e prodotto. Adalimumab è un anticorpo monoclonale umano che lega TNF; la formulazione descritta nell'overview EMA viene somministrata per via sottocutanea. Non va chiamata intramuscolare solo perché è iniettabile. L'indicazione e il regime restano specifici della malattia e della formulazione.\n\nEtanercept è una proteina di fusione: associa regioni extracellulari del recettore p75 del TNF a una Fc umana. Funziona da recettore solubile dimerico e non è un anticorpo monoclonale anti-TNF. Certolizumab pegol è invece un frammento Fab′ umanizzato associato a PEG, privo di Fc; il RCP descrive l'assenza delle attività ADCC e CDC nei sistemi in vitro studiati. La PEGilazione contribuisce a prolungarne la permanenza senza aggiungere una Fc.\n\nQueste differenze rendono inadeguata la frase «sono lo stesso farmaco contro lo stesso mediatore». Possono cambiare interazioni, distribuzione e proprietà dei complessi. Dal confronto strutturale non deriva però una graduatoria automatica di efficacia o sicurezza. Per scegliere tra prodotti servono evidenze nella patologia considerata; non basta una somiglianza di bersaglio e non è lecito trasferire a uno tutte le indicazioni autorizzate per un altro."
    },
    {
      "id": "bio-18",
      "title": "Il bersaglio nella malattia: espressione, dipendenza e resistenza",
      "refs": [
        "C",
        "K",
        "SL9"
      ],
      "text": "Perché una terapia mirata funzioni, non basta che una proteina sia presente. Il bersaglio deve essere accessibile, il farmaco deve raggiungerlo e la sua modificazione deve influenzare un processo rilevante per la malattia. In oncologia, l'espressione di un antigene e la dipendenza da un circuito non sono la stessa cosa: un antigene può servire da indirizzo per un carico senza essere il motore principale della crescita.\n\nLe popolazioni cellulari possono essere eterogenee. Alcune cellule esprimono meno bersaglio, altre modificano il traffico intracellulare o utilizzano vie alternative. Durante il trattamento può cambiare la composizione della popolazione. Una resistenza non deve quindi essere attribuita automaticamente alla comparsa di ADA: può nascere nel tumore o nel circuito patologico anche con un'esposizione farmacologica adeguata.\n\nLo stesso principio vale nelle patologie infiammatorie: una citochina importante in un paziente o in una fase di malattia può non essere l'unico determinante in un altro contesto. Gli esempi molecolari aiutano a interpretare le evidenze, ma non sostituiscono biomarcatori validati, criteri d'impiego e confronto clinico. Il collegamento con le patologie va costruito attraverso queste domande, evitando di trasformare un disegno recettoriale in un algoritmo terapeutico completo."
    },
    {
      "id": "bio-19",
      "title": "Biosimilarità: una dimostrazione comparativa, non una somiglianza intuitiva",
      "refs": [
        "R",
        "SFI",
        "EMA-BIOSIM"
      ],
      "text": "Un biosimilare autorizzato nell’Unione europea è altamente simile al prodotto di riferimento, senza differenze clinicamente significative per qualità, sicurezza ed efficacia. Una variabilità controllata è compatibile con questa dimostrazione: la complessità della proteina non implica un’efficacia inferiore.\n\nLa comparabilità integra caratterizzazione strutturale e funzionale con le prove necessarie a risolvere le incertezze residue. Non si riparte da zero: si dimostra che il prodotto può fondarsi sulle conoscenze relative al riferimento. La scadenza di un brevetto o lo stesso nome della sostanza non bastano a ottenere l’autorizzazione.\n\nIl confronto riguarda un riferimento preciso. Due farmaci contro la stessa citochina non sono per questo biosimilari tra loro. Nemmeno una modifica intenzionale per ottenere una nuova funzione equivale alla dimostrazione di biosimilarità. Per orientarsi occorre distinguere somiglianza documentata, condivisione del bersaglio e progettazione di proprietà nuove: sono domande differenti."
    },
    {
      "id": "bio-20",
      "title": "Come cambia il percorso regolatorio: prove proporzionate all’incertezza",
      "refs": [
        "EMA-TAILORED",
        "EMA-GUIDE"
      ],
      "text": "Il documento EMA adottato nel 2026 sull'approccio clinico adattato ai biosimilari chiarisce che, per proteine ben caratterizzate con meccanismo noto, uno studio clinico comparativo di efficacia non è in generale necessario. Restano essenziali una caratterizzazione robusta e il confronto farmacocinetico appropriato; situazioni con incertezze residue possono richiedere ulteriori dati, compresi studi di efficacia. La conclusione non è «nessun controllo clinico», ma una scelta delle prove capace di rispondere alla domanda rimasta aperta.\n\nI dati di sicurezza e immunogenicità concorrono al confronto. La sensibilità del metodo e della popolazione studiata conta quanto la quantità di osservazioni. Uno studio molto grande non corregge automaticamente un confronto analitico inadeguato; viceversa, la sola identità della sequenza non basta a risolvere ogni incertezza su una proteina complessa.\n\nL'estrapolazione a un'indicazione del riferimento richiede una giustificazione scientifica che consideri meccanismi, bersagli e informazioni disponibili. Non è un trasferimento libero a qualsiasi patologia, né la prova che tutte le malattie condividano la stessa biologia. Le indicazioni effettivamente autorizzate vanno lette nel documento del prodotto: il principio regolatorio spiega come si costruisce il dossier, non autorizza lo studente a inventarne l'estensione."
    },
    {
      "id": "bio-21",
      "title": "Intercambiabilità e switch informato nel contesto italiano",
      "refs": [
        "AIFA-SWITCH",
        "EMA-BIOSIM"
      ],
      "text": "Nel quadro europeo i biosimilari autorizzati sono considerati intercambiabili con il riferimento e con altri biosimilari dello stesso riferimento. Le modalità pratiche di sostituzione e impiego sono però governate anche a livello nazionale. Intercambiabilità scientifica, decisione prescrittiva e dispensazione non sono tre parole per una procedura identica.\n\nIl Terzo Position Paper AIFA del 2026 tratta anche il passaggio nei pazienti già in terapia. Lo switch informato delinea un ruolo del farmacista con l'assenso del prescrittore, nel quadro previsto per i prodotti aggiudicati nelle gare regionali, insieme a informazione, tracciabilità e motivazioni cliniche della scelta. Non equivale a una sostituzione autonoma e indiscriminata da parte del paziente. Nome del prodotto e lotto permettono di ricostruire l'esposizione nella farmacovigilanza.\n\nIl punto didattico è evitare due assoluti opposti: «non si cambia mai un biologico» e «ogni biologico è sostituibile con qualsiasi altro». Occorre identificare esattamente il riferimento, il prodotto autorizzato e la procedura applicabile. Le indicazioni operative possono evolvere; la data di consultazione delle fonti serve a rendere verificabile il contesto, non a trasformare questo capitolo in una prescrizione individuale."
    },
    {
      "id": "bio-22",
      "title": "Dalla struttura al ragionamento: una scheda mentale utilizzabile",
      "refs": [
        "C",
        "R",
        "FI",
        "SFI"
      ],
      "text": "Per studiare una proteina terapeutica, ricostruisci anzitutto quale problema biologico affronta: sostituzione di una funzione, neutralizzazione di un mediatore, blocco di un recettore, reclutamento cellulare o trasporto di un carico. Descrivi poi la struttura che rende possibile quell'azione. Questa sequenza impedisce di memorizzare una lista di nomi senza capire perché appartengano a famiglie differenti.\n\nSegui quindi il percorso della molecola: ingresso, accesso al compartimento, legame, eventuale internalizzazione, riciclo o degradazione. Chiediti quali passaggi possono dipendere dalla quantità di bersaglio e quali dalla risposta immunitaria. Infine collega i rischi alla funzione modificata e distingui le prove molecolari da quelle necessarie per l'impiego in una malattia specifica.\n\nIl capitolo sviluppa questi principi e alcuni esempi selezionati. Non contiene una trattazione completa di tutte le proteine terapeutiche, delle terapie cellulari o delle singole patologie, e non esaurisce i materiali di Farmaco I e II. Le letture effettive e le figure controllate sono elencate separatamente. Le domande successive servono a verificare i collegamenti: una risposta motivata dovrebbe spiegare il passaggio causale e riconoscere dove sono necessari altri dati, senza trasformare una proprietà strutturale in una promessa clinica."
    }
  ],
  "checks": [
    {
      "question": "Una IgG monoclonale convenzionale ha un solo sito di legame?",
      "answer": "No. Monoclonale riguarda il clone o la sequenza di riconoscimento. Una IgG monospecifica convenzionale ha due siti per la stessa specificità. Specificità e valenza sono proprietà distinte."
    },
    {
      "question": "Un recettore solubile è sempre un inibitore?",
      "answer": "No. Può sequestrare un ligando, ma alcuni complessi solubili partecipano alla segnalazione. IL-6 con il suo recettore solubile può attivare gp130: bisogna seguire il complesso, non dedurre l’effetto dalla parola solubile."
    },
    {
      "question": "Anakinra è una trappola per IL-1?",
      "answer": "No. È un antagonista ricombinante del recettore di IL-1. La distinzione riguarda il partner riconosciuto: recettore per anakinra, mediatore per una trappola del ligando."
    },
    {
      "question": "Un frammento senza Fc deve avere per forza una brevissima permanenza?",
      "answer": "Non necessariamente. Non dispone del riciclo attraverso una propria Fc, ma modifiche come la PEGilazione possono prolungare l’esposizione. Certolizumab pegol illustra questa possibilità, senza acquisire una Fc."
    },
    {
      "question": "FcRn e FcγR spiegano la stessa funzione?",
      "answer": "No. FcRn contribuisce al recupero endosomiale delle IgG con legame dipendente dal pH; i recettori Fcγ partecipano al riconoscimento della Fc da parte di cellule immunitarie. Non si può dedurre l’attività citotossica dalla sola capacità di riciclo."
    },
    {
      "question": "Un bersaglio di membrana rende sempre non lineare la cinetica?",
      "answer": "No. La saturazione dipende dalle quantità e dalle velocità coinvolte e dall’intervallo studiato. La disposizione mediata dal bersaglio può contribuire senza dominare tutta la curva osservata."
    },
    {
      "question": "Un test ADA positivo dimostra una neutralizzazione clinicamente rilevante?",
      "answer": "No. Legame, neutralizzazione e conseguenze cliniche richiedono valutazioni distinte. Occorre collegare persistenza e caratteristiche della risposta a esposizione, efficacia e sicurezza."
    },
    {
      "question": "Un biologico non metabolizzato dai CYP può cambiare l’esposizione ad altri farmaci?",
      "answer": "Sì. Il blocco di IL-6 può modificare l’espressione dei CYP precedentemente ridotta dall’infiammazione. L’interazione può quindi essere indiretta, senza che il biologico sia un substrato di quegli enzimi."
    },
    {
      "question": "Blinatumomab e un ADC risolvono il problema con lo stesso passaggio finale?",
      "answer": "No. Il primo collega cellule tramite CD19 e CD3 e recluta una risposta citolitica; un ADC trasporta un carico farmacologico. Reclutamento immunitario e rilascio del carico sono strategie differenti."
    },
    {
      "question": "Un biosimilare richiede sempre un nuovo grande studio comparativo di efficacia?",
      "answer": "No. L’approccio EMA 2026 adatta le prove all’incertezza residua e alla caratterizzabilità del prodotto. Il confronto farmacocinetico e le altre evidenze pertinenti restano parte della dimostrazione: meno duplicazione non significa assenza di valutazione."
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012. Testo estratto letto: PDF1139–1144; figura controllata: PDF1143 (pagina stampata1123). Impieghi e regimi storici non trasferiti automaticamente."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "8ª italiana2016 / originale2015. Testo estratto letto: PDF1069–1073; figura/tabella controllate: PDF1072. Classificazioni e biosimilarità confrontate con fonti successive."
    },
    {
      "id": "C",
      "title": "Clementi e Fumagalli · Farmacologia generale e molecolare",
      "detail": "4ª edizione2012. Testo estratto letto: PDF204–209, capitolo17; controllo visivo PDF207, stampata186. Nessuna figura ripubblicata."
    },
    {
      "id": "FI",
      "title": "Farmaco I · slide Serpe",
      "detail": "AA2025–26. Testo estraibile letto: PDF159–202; pagine194–202 fuori dall’argomento, non integrate. Figure controllate solo su PDF169,171,175,181,188. Le altre pagine a prevalenza grafica non sono dichiarate interamente lette."
    },
    {
      "id": "SFI",
      "title": "Farmaco I · sbobina Serpe del13/10/2025",
      "detail": "AA2025–26, lezione5. Raccolta PDF87–103, pagine1–17 della lezione (stampate82–98). Lettura del testo estratto; figure non controllate in questo file. Restano PDF104–114 della lezione e il resto del corso."
    },
    {
      "id": "S1",
      "title": "Farmaco II · sbobina Serpe del27/10/2025",
      "detail": "AA2025–26, lezione1 PDF14–17, equivalenti a raccolta15–18: contate una sola volta. Testo estratto letto; figure non controllate. Distinti recettore, ligando e proteine di fusione."
    },
    {
      "id": "SL9",
      "title": "Farmaco II · Antitumorali mirati, Serpe",
      "detail": "AA2025–26. Testo estraibile letto: PDF31–41; controllo visivo solo PDF41. Le pagine prevalentemente grafiche non controllate non sono dichiarate integralmente lette. Il precedente intervallo1–12 resta documentato nel capitolo RTK."
    },
    {
      "id": "WHO",
      "title": "WHO · nomenclatura INN degli anticorpi",
      "detail": "Schema2022: pagina introduttiva ed estratto indicizzato della classificazione. Non lettura completa del documento.",
      "url": "https://www.who.int/publications/m/item/inn-22-542"
    },
    {
      "id": "EMA-KINERET",
      "title": "EMA · Kineret",
      "detail": "Overview, sezione sul meccanismo letta25/10/2026. PDF del RCP non recuperato; impiegata la descrizione ufficiale accessibile.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/kineret"
    },
    {
      "id": "EMA-ROACTEMRA",
      "title": "EMA · RoActemra",
      "detail": "Consultazione25/10/2026: estratti §4.5 (PDF12) e §5.1 (PDF21), interazioni indirette e IL-6R Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/roactemra-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-STELARA",
      "title": "EMA · Stelara",
      "detail": "Consultazione25/10/2026: estratto indicizzato §5.1 sul riconoscimento di p40; apertura del PDF non riuscita Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/stelara-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-ENBREL",
      "title": "EMA · Enbrel",
      "detail": "Consultazione25/10/2026: estratti §2 e §5.1, recettore p75–Fc dimerico Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/enbrel-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-CIMZIA",
      "title": "EMA · Cimzia",
      "detail": "Consultazione25/10/2026: estratti §2 e §5.1; Fab′ PEGilato e risultati ADCC/CDC in vitro; passaggio §5.2 sulla PEGilazione Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/cimzia-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-BLINCYTO",
      "title": "EMA · Blincyto",
      "detail": "Consultazione25/10/2026: estratti §§4.1,4.2,4.4 e5.1, CD19/CD3, contesto LLA e rischi selezionati Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/blincyto-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-KADCYLA",
      "title": "EMA · Kadcyla",
      "detail": "Consultazione25/10/2026: estratti §§2,4.1,4.2 e5.1, DM1, internalizzazione e distinzione dai prodotti correlati Non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/kadcyla-epar-product-information_en.pdf"
    },
    {
      "id": "EMA-HUMIRA",
      "title": "EMA · Humira",
      "detail": "Overview consultata25/10/2026: meccanismo, via sottocutanea e rischi selezionati; non intero RCP.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/humira"
    },
    {
      "id": "EMA-TMDD",
      "title": "EMA · biosimilari monoclonali, aspetti farmacocinetici",
      "detail": "Linea guida2012: estratto indicizzato della sezione PK (PDF9) letto25/10/2026; usato per TMDD, non per requisiti regolatori clinici aggiornati.",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-similar-biological-medicinal-products-containing-monoclonal-antibodies-non-clinical_en.pdf"
    },
    {
      "id": "EMA-ADA",
      "title": "EMA · immunogenicità delle proteine terapeutiche",
      "detail": "Revisione1, efficace dal1/12/2017. Consultati25/10/2026 estratti §§5,7 e8: conseguenze, metodi e interpretazione ADA; non tutte le24pagine.",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-immunogenicity-assessment-therapeutic-proteins-revision-1_en.pdf"
    },
    {
      "id": "EMA-BIOSIM",
      "title": "EMA · biosimilari, quadro europeo",
      "detail": "Pagina di sintesi consultata25/10/2026: definizione, sviluppo e intercambiabilità. Il contesto italiano è documentato separatamente.",
      "url": "https://www.ema.europa.eu/en/human-regulatory-overview/biosimilar-medicines-overview"
    },
    {
      "id": "EMA-GUIDE",
      "title": "EMA/HMA · guida ai biosimilari",
      "detail": "Guida2023, estratti PDF24–25 sull’estrapolazione consultati25/10/2026. Non lettura integrale delle40pagine.",
      "url": "https://www.ema.europa.eu/en/documents/leaflet/biosimilars-eu-information-guide-healthcare-professionals_en.pdf"
    },
    {
      "id": "EMA-TAILORED",
      "title": "EMA · approccio clinico adattato ai biosimilari",
      "detail": "Documento adottato e pubblicato27/03/2026; letti §§3.2–3.3 (PDF12–13) e passaggi §3.1.7 (PDF10–11) il25/10/2026. Non il precedente testo in consultazione.",
      "url": "https://www.ema.europa.eu/en/documents/other/reflection-paper-tailored-clinical-approach-biosimilar-development_en.pdf-0"
    },
    {
      "id": "AIFA-SWITCH",
      "title": "AIFA · Terzo Position Paper sui biosimilari",
      "detail": "Comunicazione29/04/2026 e relativi estratti del Position Paper (comparabilità, farmacovigilanza e switch informato) consultati25/10/2026. Non lettura integrale né istruzione terapeutica individuale.",
      "url": "https://www.aifa.gov.it/-/aifa-pubblica-terzo-position-paper-farmaci-biosimilari-focus-intercambiabilita-switch-informato-sostenibilita-del-ssn"
    }
  ],
  "drugs": [],
  "targets": [],
  "moleculeLinks": [
    {
      "id": "CHEMBL1201580",
      "label": "Adalimumab"
    },
    {
      "id": "CHEMBL1201572",
      "label": "Etanercept"
    },
    {
      "id": "CHEMBL1201831",
      "label": "Certolizumab pegol"
    },
    {
      "id": "CHEMBL1201570",
      "label": "Anakinra"
    },
    {
      "id": "CHEMBL1237022",
      "label": "Tocilizumab"
    },
    {
      "id": "CHEMBL1742992",
      "label": "Blinatumomab"
    },
    {
      "id": "CHEMBL1743082",
      "label": "Trastuzumab emtansine"
    }
  ],
  "relatedExistingChapterIds": [
    "recettori-e-legame",
    "modelli-pk",
    "tirosinchinasi"
  ],
  "coverage": "Intervalli selezionati di tre libri, Farmaco I e Farmaco II; testo estraibile letto e controllo delle figure distinti. Non sono stati letti integralmente libri o corsi. Collino e D’Avolio non sono integrati in questo lotto. Esempi e fonti ufficiali verificati per aspetti specifici; nessuna revisione clinica indipendente o linea guida terapeutica completa.",
  "wordCount": 3932
});
