// Original bounded educational synthesis; not independent clinical validation.
export const THEORY_PHARMACOGENOMICS = Object.freeze({
  "id": "farmacogenomica",
  "volume": 17,
  "title": "Farmacogenomica: dalla variante alla risposta",
  "lead": "Geni, metabolismo, trasportatori e immunità: seguire il meccanismo senza perdere il contesto.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-26",
  "readingManifest": "./data/farmacogenomica-reading.json",
  "sections": [
    {
      "id": "pgx-01",
      "title": "La stessa dose non racconta la stessa storia",
      "refs": [
        "K",
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "La variabilità della risposta comincia prima del recettore. Due persone possono assorbire, distribuire, trasformare ed eliminare diversamente una stessa sostanza; possono inoltre avere bersagli e circuiti biologici con sensibilità differenti. La genetica contribuisce a questa variabilità insieme a età, funzione degli organi, patologia, alimentazione, aderenza e altri trattamenti. Non è una spiegazione alternativa a questi fattori: interagisce con essi.\n\nLa farmacogenetica studia spesso associazioni tra varianti di singoli geni e risposta ai farmaci; farmacogenomica indica una prospettiva più ampia, che comprende più geni e il contesto del genoma. Nella pratica i termini possono sovrapporsi. La distinzione utile per ragionare è tra una differenza biologica plausibile, un'associazione riproducibile e un'informazione capace di migliorare una decisione. Questi tre livelli non coincidono automaticamente.\n\nUn risultato genetico può spiegare una parte di un'esposizione insolita o identificare un rischio prima della terapia. Non sostituisce l'osservazione del paziente e non trasforma la risposta in un destino scritto. Il percorso di questo capitolo segue la catena variante → funzione → esposizione o sensibilità → esito, chiedendo a ogni passaggio quali dati sostengano il collegamento e quali altre cause possano modificarlo."
    },
    {
      "id": "pgx-02",
      "title": "Farmacocinetica e farmacodinamica: due sedi della variabilità",
      "refs": [
        "R",
        "C",
        "SFI"
      ],
      "text": "Una variante farmacocinetica può modificare la quantità di farmaco che raggiunge il bersaglio: per esempio cambiando l'attività di un enzima metabolico o di un trasportatore. Una variante farmacodinamica può invece cambiare il riconoscimento del farmaco, la trasmissione del segnale o la risposta del tessuto. In questo secondo caso l'effetto può differire anche a concentrazioni plasmatiche simili.\n\nLe due dimensioni non sono impermeabili. Una proteina può partecipare a più processi e una patologia può modificare contemporaneamente distribuzione e sensibilità. Tuttavia, separarle evita un errore frequente: attribuire qualsiasi mancata risposta a una concentrazione insufficiente. Aumentare l'esposizione non corregge necessariamente un bersaglio resistente, né una concentrazione nella norma garantisce una risposta normale.\n\nSi può usare una sequenza di domande: il farmaco è stato assunto e assorbito? Quale specie chimica è attiva? Quanto raggiunge il compartimento pertinente? Il bersaglio è presente e sensibile? Il circuito a valle può ancora produrre l'effetto? La genetica può intervenire in punti diversi di questa sequenza. Una concentrazione misurata, un test genetico e una misura di effetto forniscono quindi informazioni complementari, con tempi e limiti differenti."
    },
    {
      "id": "pgx-03",
      "title": "Varianti: posizione, struttura e funzione non sono sinonimi",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Una variante di singolo nucleotide modifica una base; un'inserzione o una delezione aggiunge o rimuove materiale. Le variazioni del numero di copie coinvolgono invece duplicazioni o perdite di segmenti, talvolta comprendenti un gene. Queste categorie descrivono la struttura della differenza, non il suo effetto clinico. Anche una variante frequente può essere priva di conseguenze rilevanti per il farmaco considerato.\n\nNella regione codificante una sostituzione può conservare l'amminoacido, cambiarlo o introdurre un arresto della traduzione. Un'inserzione o delezione non produce sempre uno scorrimento della cornice: nella sequenza codificante questo dipende anche dal numero di nucleotidi coinvolti. Varianti nelle regioni regolatorie o nei siti di splicing possono modificare quantità o forma del prodotto senza cambiare semplicemente un amminoacido. Non tutto ciò che si trova fuori dagli esoni è quindi irrilevante.\n\nPer assegnare una funzione servono dati: espressione, attività misurata, studi di associazione e coerenza biologica. Una variante associata a un esito può essere soltanto vicina alla variante causale e viaggiare con essa nell'ereditarietà. Descrivere il cambiamento di sequenza, dimostrarne il ruolo e stabilirne l'utilità clinica sono operazioni separate; nessuna si ricava soltanto dalla parola «mutazione»."
    },
    {
      "id": "pgx-04",
      "title": "Alleli, aplotipi e diplotipi: leggere correttamente un referto",
      "refs": [
        "R",
        "C",
        "SFI",
        "CPIC-OP"
      ],
      "text": "Un allele è una forma di un gene; un aplotipo descrive una combinazione di varianti presenti sulla stessa copia cromosomica. Il diplotipo riunisce le configurazioni delle due copie ereditate, quando il sistema può essere rappresentato in questo modo. Sapere quali varianti si trovano insieme sulla stessa copia, cioè la fase, può essere necessario per attribuire correttamente una funzione.\n\nLa nomenclatura con asterisco usata per diversi geni farmacologici non è una scala di gravità. Un nome come *2 non significa «due mutazioni» e un numero più alto non indica necessariamente una perdita maggiore di attività. Uno stesso allele può essere definito da più varianti. La traduzione dal nome alla funzione richiede la tabella appropriata per quel gene e la sua versione aggiornata.\n\nLe duplicazioni complicano ulteriormente il quadro: conta quale allele è duplicato e se produce un enzima funzionante. Un test che misura il numero totale di copie può non risolvere tutta questa struttura. Anche l'assenza di varianti nel pannello analizzato non dimostra che ogni possibile variante sia stata esclusa. Per leggere il risultato bisogna conoscere copertura, metodo e limiti del laboratorio, senza confondere un'etichetta sintetica con la descrizione completa del genoma."
    },
    {
      "id": "pgx-05",
      "title": "Dal genotipo al fenotipo previsto, poi all’attività reale",
      "refs": [
        "K",
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Il genotipo descrive una configurazione genetica. Il fenotipo metabolico previsto traduce quella configurazione in una categoria funzionale per uno specifico gene: per esempio metabolizzatore lento, intermedio, normale o ultrarapido quando queste categorie sono applicabili. Non è una classificazione generale della persona: si può avere attività ridotta per una via e normale per un'altra.\n\nLa traduzione può usare punteggi di attività, ma soglie e assegnazioni non sono trasferibili automaticamente tra geni. Anche il termine «normale» è un riferimento funzionale, non una promessa di efficacia o assenza di tossicità. Un risultato indeterminato deve rimanere tale quando il laboratorio o la conoscenza disponibile non permettono una traduzione affidabile. Inventare una categoria per completare una tabella nasconde proprio l'incertezza che dovrebbe orientare l'interpretazione.\n\nL'attività effettiva al momento della terapia dipende poi da espressione, inibitori, stato fisiopatologico e disponibilità di substrato. Per questo il percorso non termina con la categoria prevista. Il referto è relativamente stabile nel tempo nella sua componente germinale, mentre esposizione e risposta possono cambiare. La relazione clinica va ricostruita nel contesto attuale, usando il gene come una delle informazioni e non come unico criterio."
    },
    {
      "id": "pgx-06",
      "title": "Una via metabolica conta in proporzione al suo ruolo",
      "refs": [
        "K",
        "R",
        "C",
        "FI"
      ],
      "text": "Un farmaco può essere eliminato da più enzimi, trasportatori e vie di escrezione. Ridurre una singola via produce effetti diversi se essa rappresenta il passaggio dominante oppure un contributo minore. La presenza di un enzima in una mappa metabolica non dimostra che una sua variante determini da sola l'esposizione complessiva.\n\nConta anche dove e quando avviene la trasformazione. Il metabolismo presistemico può influire sulla quota che arriva in circolo, mentre quello successivo contribuisce alla clearance. La funzione renale può diventare rilevante per il farmaco originario o per un metabolita. Una via alternativa può compensare in parte un cambiamento, ma questa compensazione non deve essere presunta senza dati. La stessa variante può così avere conseguenze molto diverse per due substrati dello stesso enzima.\n\nInfine occorre chiedersi che cosa si sta misurando: farmaco originario, metabolita attivo, metabolita inattivo o attività farmacologica complessiva. Una concentrazione più alta del precursore non prova una maggiore esposizione alla specie che produce l'effetto. Il collegamento tra metabolismo e risposta richiede una mappa delle trasformazioni, prima ancora di un numero o di un'etichetta genetica."
    },
    {
      "id": "pgx-07",
      "title": "Inattivazione e bioattivazione: cambia il verso della previsione",
      "refs": [
        "K",
        "R",
        "FI",
        "SFI"
      ],
      "text": "Quando un enzima contribuisce soprattutto a inattivare un farmaco già attivo, una minore attività può ridurre la sua eliminazione e aumentarne l'esposizione, a parità delle altre condizioni. Quando invece l'enzima forma una specie attiva a partire da un profarmaco, ridurre quel passaggio può diminuire la formazione della specie responsabile dell'effetto. La frase «metabolizzatore lento uguale più effetto» perde quindi validità appena cambia il ruolo della trasformazione.\n\nIl laboratorio sottostante isola questa differenza. Seleziona prima che cosa fa la via, poi varia la sua attività relativa. Le frecce indicano il verso atteso rispetto alla condizione di riferimento, tenendo costanti gli altri processi. Non rappresentano una curva temporale, una percentuale di conversione o una concentrazione misurata. L'attività indicata non viene tradotta in un genotipo reale.\n\nIl modello si ferma dove comincia la complessità del prodotto: più metaboliti attivi, eliminazione del metabolita, vie concorrenti, saturazione e differenze di sensibilità possono cambiare il risultato. È uno strumento per controllare il ragionamento causale, non per scegliere un dosaggio. Prima di applicare la previsione a un farmaco bisogna verificare quale specie agisca e quale passaggio sia realmente determinante.",
      "pgxLab": true
    },
    {
      "id": "pgx-08",
      "title": "Fenoconversione: il DNA resta, l’attività può cambiare",
      "refs": [
        "K",
        "R",
        "SFI",
        "CPIC-OP"
      ],
      "text": "La fenoconversione indica una discrepanza tra il fenotipo previsto dal genotipo e quello che si manifesta nel contesto reale. Un inibitore può ridurre l'attività di un enzima senza modificare la sequenza del gene. Un soggetto con una configurazione associata ad attività normale può quindi comportarsi diversamente mentre assume un'altra sostanza che interferisce con quella via.\n\nPer CYP2D6, la linea guida CPIC sugli oppioidi considera esplicitamente gli inibitori nella traduzione funzionale. Non bisogna aggiungere per simmetria una generica «induzione di CYP2D6»: le interazioni e i meccanismi di regolazione devono essere verificati enzima per enzima. Anche durata dell'esposizione all'interferente e tempo necessario al recupero dell'attività possono rendere inadeguata una fotografia priva di contesto temporale.\n\nIl controllo utile consiste nel ricostruire contemporaneamente variante, farmaci assunti e condizioni fisiopatologiche. Se la risposta cambia dopo l'introduzione di un altro trattamento, il dato genetico precedente non diventa falso; può essere cambiato il modo in cui quella capacità si esprime. Genetica e interazioni farmacologiche appartengono perciò allo stesso ragionamento sulla variabilità, senza che una delle due annulli l'altra."
    },
    {
      "id": "pgx-09",
      "title": "Codeina e metoprololo: lo stesso enzima, domande opposte",
      "refs": [
        "K",
        "R",
        "FI",
        "SFI",
        "CPIC-OP",
        "CPIC-BB"
      ],
      "text": "La codeina viene trasformata anche in morfina attraverso CYP2D6. Una funzione molto ridotta di questa via può limitare l'analgesia; una funzione ultrarapida può aumentare la formazione di morfina e il rischio di tossicità. CPIC distingue quindi le conseguenze funzionali e non propone di trattare tutti i fenotipi come variazioni equivalenti della stessa dose. Le conclusioni per codeina non si estendono automaticamente a ogni oppioide.\n\nIl metoprololo è già attivo e CYP2D6 contribuisce invece in modo importante al suo metabolismo verso prodotti prevalentemente inattivi. Un'attività ridotta può aumentarne l'esposizione. La linea guida CPIC del 2024 sui beta-bloccanti usa questa relazione in un contesto specifico: non rende il gene una spiegazione universale della risposta a tutti i beta-bloccanti.\n\nIl confronto mette alla prova il modello precedente. Il nome dell'enzima è lo stesso, ma cambia il significato farmacologico del passaggio. Prima di associare un fenotipo a beneficio o rischio occorre disegnare la freccia corretta, poi verificare indicazione, caratteristiche del prodotto e condizioni della persona. Il risultato genetico da solo non contiene un piano terapeutico."
    },
    {
      "id": "pgx-10",
      "title": "Clopidogrel: attivazione, piastrine e contesto clinico",
      "refs": [
        "FII-C",
        "FI",
        "SFI",
        "CPIC-CLO"
      ],
      "text": "Clopidogrel è un profarmaco: la sua attività antiaggregante dipende dalla formazione di un metabolita attivo che interferisce con P2Y12. CYP2C19 contribuisce alla bioattivazione, insieme ad altri passaggi. Una funzione ridotta può comportare minore formazione del metabolita e minore inibizione piastrinica. Il dato genetico riguarda questa catena, non una variante del recettore P2Y12.\n\nLa linea guida CPIC del 2022 distingue i contesti cardiovascolari e neurovascolari e la forza delle raccomandazioni. Non è corretto trasformarla in una regola identica per qualunque impiego. Anche le alternative hanno controindicazioni, interazioni e indicazioni proprie: «non è un profarmaco» non significa «non viene metabolizzato» o «non interagisce».\n\nGli appunti del corso di Farmacologia aiutano a separare un'altra coppia di concetti: permanenza del farmaco nel plasma e durata dell'effetto piastrinico. Quando l'interazione funzionale persiste nella piastrina, la durata dell'effetto non si ricava semplicemente dall'emivita plasmatica. Genetica dell'attivazione, proprietà del legame e ricambio delle piastrine rispondono a domande diverse e vanno mantenuti distinti nella spiegazione."
    },
    {
      "id": "pgx-11",
      "title": "Tiopurine: TPMT e NUDT15 controllano passaggi diversi",
      "refs": [
        "K",
        "FI",
        "SFI",
        "CPIC-TP"
      ],
      "text": "Azatioprina e mercaptopurina entrano in reti metaboliche che portano anche a nucleotidi tioguaninici attivi. La metilazione mediata da TPMT modifica la distribuzione tra vie; NUDT15 interviene sul destino di nucleotidi tioguaninici trifosfato. Non sono due nomi per lo stesso enzima e il rischio non si spiega soltanto con un accumulo del farmaco originario nel plasma.\n\nL'aggiornamento CPIC denominato 2025, pubblicato nel 2026, considera entrambi i geni e anche combinazioni di funzione ridotta. Varianti con funzione diminuita o assente possono aumentare la suscettibilità alla mielosoppressione. Una rappresentazione limitata a TPMT, presente nelle fonti didattiche più vecchie, lascia quindi incompleto il quadro attuale.\n\nLa traduzione clinica dipende dalla tiopurina, dall'indicazione e dal regime utilizzato. Il test non sostituisce il monitoraggio ematologico e non esclude le cause non genetiche di tossicità. Il capitolo conserva il meccanismo e il significato del rischio senza riprodurre una griglia di dosi: la linea guida interpreta risultati disponibili, mentre la decisione di eseguire un test e la gestione del trattamento richiedono il percorso clinico pertinente."
    },
    {
      "id": "pgx-12",
      "title": "Irinotecan: seguire SN-38 fino alla glucuronazione",
      "refs": [
        "K",
        "FI",
        "SFI",
        "HPRA-IRI"
      ],
      "text": "Irinotecan viene convertito in SN-38, una specie attiva; UGT1A1 contribuisce alla glucuronazione di SN-38 verso un prodotto molto meno attivo. La variante rilevante non riguarda quindi semplicemente l'attivazione iniziale del farmaco. Se si comprime tutto nella parola «metabolismo», si perde il punto in cui può aumentare l'esposizione alla specie tossica.\n\nIl riassunto delle caratteristiche del prodotto consultato presso HPRA nel 2025 descrive una maggiore suscettibilità a neutropenia e diarrea nei metabolizzatori lenti UGT1A1, comprendendo configurazioni legate a *28 e *6. Il genotipo può identificare una componente del rischio, ma non esaurisce la variabilità della tossicità.\n\nPer studiare il caso occorre disegnare due frecce successive: formazione della specie attiva e sua inattivazione. Ridurre la seconda non equivale a ridurre la prima. L'utilità e l'impiego del test vanno letti nella specifica formulazione, nel regime e nel contesto regolatorio. Qui non viene dedotta una prescrizione italiana universale da un documento di un'altra autorità, né viene proposta una correzione numerica della dose."
    },
    {
      "id": "pgx-13",
      "title": "Fluoropirimidine: distinguere DPYD, DPD e tipo di test",
      "refs": [
        "K",
        "R",
        "EMA-DPD",
        "EMA-URACIL"
      ],
      "text": "DPYD è il gene; DPD è l'enzima che partecipa al catabolismo delle fluoropirimidine. Una capacità ridotta può aumentare l'esposizione e il rischio di tossicità grave. Il genotipo cerca varianti definite, mentre una valutazione fenotipica indaga una caratteristica funzionale o un suo indicatore: i due approcci non misurano la stessa cosa.\n\nLa raccomandazione EMA del 2020 riguarda la valutazione prima di fluorouracile sistemico, capecitabina o tegafur; distingue deficit completo e parziale. Non va estesa indistintamente al fluorouracile topico o ad altri medicinali citati nella procedura. Il contesto della somministrazione fa parte della raccomandazione, non è un dettaglio da eliminare per semplificare.\n\nUna comunicazione EMA del 2024 richiama inoltre cautela nell'interpretare l'uracile ematico in presenza di compromissione renale moderata o grave. Il risultato di un test dipende anche dalle condizioni in cui viene ottenuto. Un pannello genetico negativo non esclude tutte le varianti né tutte le cause di tossicità: il risultato deve rimanere collegato alla copertura del metodo e alla sorveglianza clinica."
    },
    {
      "id": "pgx-14",
      "title": "Trasportatori: accesso al fegato, efflusso e bersaglio",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI",
        "CPIC-STAT"
      ],
      "text": "Un trasportatore può modificare l'accesso del farmaco a un compartimento senza essere il bersaglio terapeutico. Essere substrato di ABCB1, che codifica P-glicoproteina, significa poter essere trasportato da quel sistema; non significa che il beneficio terapeutico derivi dal bloccarlo. Nelle tabelle di interazione occorre distinguere substrato, inibitore e induttore, senza chiamarli tutti «farmaci che agiscono sul recettore».\n\nPer alcune statine, SLCO1B1 e il trasportatore epatico OATP1B1 aiutano a comprendere come una riduzione della captazione nel fegato possa aumentare l'esposizione sistemica. La linea guida CPIC del 2022 considera SLCO1B1, ABCG2 e CYP2C9 secondo la statina; non attribuisce a tutti e tre lo stesso ruolo per ogni prodotto.\n\nL'associazione con sintomi muscolari va interpretata insieme a molecola, esposizione e altri fattori di rischio. Un risultato non autorizza a dichiarare pericolosa l'intera classe o a rinunciare automaticamente al trattamento. La domanda meccanistica corretta è «quale passaggio di trasporto cambia, in quale organo e per quale substrato?». Solo dopo si collega quella variazione ai dati di sicurezza pertinenti."
    },
    {
      "id": "pgx-15",
      "title": "HLA e abacavir: una suscettibilità immunitaria specifica",
      "refs": [
        "R",
        "FI",
        "SFI",
        "FII-D",
        "EMA-ABA"
      ],
      "text": "HLA-B*57:01 identifica un allele di una molecola coinvolta nella presentazione antigenica. L'associazione con ipersensibilità ad abacavir riguarda una risposta immunitaria specifica e non una lentezza generale del metabolismo. È quindi un esempio utile per uscire dall'idea che tutta la farmacogenomica coincida con i citocromi epatici.\n\nLe informazioni EMA su Ziagen richiedono lo screening prima dell'inizio, indipendentemente dall'origine della persona, e indicano che i portatori non devono ricevere abacavir. Un risultato negativo non esclude ogni possibile reazione di ipersensibilità e non sostituisce la valutazione dei sintomi. Un precedente quadro di ipersensibilità al farmaco ha un significato clinico che non può essere cancellato da una lettura isolata del test.\n\nGli appunti del corso di Farmacologia collocano questo esempio nella terapia dell'HIV. Va mantenuta la distinzione tra patrimonio genetico dell'ospite, rischio immunologico e caratteristiche del virus. Non viene riproposto come spiegazione definitiva uno schema molecolare storico presente nelle slide: l'associazione clinicamente utile e i dettagli del meccanismo richiedono livelli di evidenza differenti."
    },
    {
      "id": "pgx-16",
      "title": "Siponimod: gene del metabolismo e recettore sono distinti",
      "refs": [
        "EMA-SIP",
        "FI",
        "SFI"
      ],
      "text": "Siponimod modula i recettori S1P1 e S1P5, mentre CYP2C9 contribuisce al suo metabolismo. Il test farmacogenetico non cerca quindi una variante del bersaglio S1P. Questo esempio riunisce farmacodinamica recettoriale e farmacocinetica senza confonderle: il farmaco è già attivo, e il genotipo contribuisce a interpretarne la disposizione.\n\nIl documento EMA di Mayzent consultato nella revisione del luglio 2026 riguarda adulti con sclerosi multipla secondariamente progressiva attiva. Prima dell'inizio richiede la determinazione del genotipo CYP2C9; il genotipo *3/*3 è controindicato. Queste informazioni appartengono a quel prodotto e a quella indicazione e non si estendono automaticamente agli altri modulatori S1P.\n\nConservare questo caso nel capitolo permette di collegarsi al percorso sui recettori S1P già presente nell'atlante. Una famiglia di bersagli comuni non implica la stessa bioattivazione, lo stesso metabolismo o la stessa necessità di un test. Il confronto deve partire dai documenti dei singoli prodotti, evitando di trasferire a siponimod proprietà apprese per fingolimod o per un altro componente della classe."
    },
    {
      "id": "pgx-17",
      "title": "Genoma germinale, tumore e patogeno: tre domande diverse",
      "refs": [
        "R",
        "FI",
        "SFI",
        "FII-D"
      ],
      "text": "Le varianti germinali appartengono al patrimonio ereditato della persona e possono influenzare, per esempio, metabolismo e suscettibilità immunitaria. Le alterazioni somatiche si sviluppano in una popolazione cellulare e possono caratterizzare un tumore. Il genoma di un patogeno appartiene invece all'agente infettivo. I tre livelli possono essere rilevanti nella stessa terapia, ma non descrivono lo stesso oggetto biologico.\n\nUn'alterazione tumorale può rendere una via particolarmente importante per la crescita o modificare la sensibilità a un farmaco. La sua presenza nel campione analizzato non dimostra che sia presente in tutte le cellule del paziente, né che sia stata ereditata. Anche sede e momento del prelievo contano, perché popolazioni cellulari differenti possono coesistere e cambiare sotto pressione selettiva.\n\nNelle infezioni, una resistenza del patogeno non equivale a una capacità metabolica particolare dell'ospite. Aderenza, esposizione e sensibilità dell'agente restano domande complementari. Prima di interpretare un referto bisogna quindi nominare esplicitamente il genoma studiato e la decisione che il test intende informare. Chiamare tutto «medicina personalizzata» senza questa distinzione rende meno chiari proprio i meccanismi che si vorrebbero spiegare."
    },
    {
      "id": "pgx-18",
      "title": "Bersagli, espressione e biologici: oltre la sequenza del DNA",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "La presenza di una variante non è l'unico modo in cui un bersaglio può cambiare. Quantità di proteina, localizzazione, stato di attivazione e circuiti compensatori contribuiscono alla sensibilità. Una misura dell'espressione proteica e un test di sequenza possono quindi dare informazioni diverse; nessuno dei due va presentato come traduzione automatica dell'altro.\n\nAnche per i biologici, la risposta dipende da esposizione, accessibilità del bersaglio, funzione del sistema e possibili risposte immunitarie contro il farmaco. Queste proteine vengono metabolizzate attraverso processi proteolitici: non essere un tipico substrato dei citocromi non equivale a non avere metabolismo. Associare una variante a una risposta osservata richiede inoltre di distinguere un effetto sul farmaco da un effetto sull'attività della malattia.\n\nIl collegamento con i capitoli sui recettori e sugli anticorpi serve a mantenere un ragionamento unico: riconoscimento, disponibilità del bersaglio e segnale a valle rimangono passaggi distinti. Una relazione biologicamente plausibile può orientare una ricerca, ma non basta da sola per scegliere un trattamento. Servono evidenze coerenti con il prodotto, la malattia e la popolazione in cui si intende usare l'informazione."
    },
    {
      "id": "pgx-19",
      "title": "Dall’associazione all’utilità: tre livelli di prova",
      "refs": [
        "R",
        "C",
        "SFI"
      ],
      "text": "La validità analitica riguarda quanto bene un metodo identifichi ciò che dichiara di misurare. La validità clinica riguarda la relazione tra quel risultato e un esito nel contesto studiato. L'utilità clinica chiede se usare il risultato per cambiare una decisione migliori gli esiti rispetto a un percorso alternativo. Un test tecnicamente accurato non dimostra, da solo, l'ultimo passaggio.\n\nUn'associazione può essere influenzata da dimensione del campione, popolazione, trattamenti concomitanti e definizione dell'esito. Una differenza di concentrazione non è automaticamente una differenza di beneficio clinico; un rischio relativo elevato può inoltre riguardare un evento raro. Per valutare un risultato bisogna conoscere anche frequenza dell'evento, alternative disponibili e conseguenze di risultati falsamente rassicuranti o allarmanti.\n\nLa riproducibilità tra studi e la plausibilità meccanistica rafforzano il quadro, ma non eliminano la necessità di distinguere i livelli di prova. Nello studio conviene chiedere quale domanda sia stata realmente testata: identificazione della variante, funzione della proteina, esposizione al farmaco, risposta o esito dopo una decisione guidata dal test. Evitare di saltare questi passaggi rende la teoria più utile anche quando l'evidenza rimane incompleta."
    },
    {
      "id": "pgx-20",
      "title": "Leggere una linea guida senza trasformarla in una regola universale",
      "refs": [
        "CPIC-TP",
        "CPIC-CLO",
        "CPIC-STAT",
        "R"
      ],
      "text": "Una raccomandazione farmacogenetica ha un perimetro: gene, farmaco, indicazione, esito considerato e versione del documento. Le linee guida CPIC spiegano principalmente come utilizzare risultati genetici disponibili; questa domanda va distinta dalla decisione se e quando eseguire il test. Le informazioni regolatorie di un medicinale possono invece prevedere condizioni specifiche per iniziare il trattamento.\n\nAnche gli aggiornamenti hanno livelli diversi. Una nuova edizione della linea guida, un aggiornamento online della funzione di un allele e una modifica del riassunto delle caratteristiche del prodotto non sono lo stesso evento. Per le statine, per esempio, la pubblicazione del 2022 va distinta dagli aggiornamenti online delle assegnazioni alleliche del 2025. Citare soltanto il nome del gruppo di esperti non permette di ricostruire quale versione sia stata usata.\n\nIl controllo pratico consiste nel leggere la raccomandazione insieme alle sue condizioni e alla fonte attuale. Un contenuto didattico può chiarire il meccanismo senza essere una revisione clinica indipendente. Quando testo storico, lezione e documento recente differiscono, si conserva il contributo concettuale della fonte didattica e si esplicita il limite, invece di combinare silenziosamente indicazioni incompatibili."
    },
    {
      "id": "pgx-21",
      "title": "Incertezza, popolazioni e comunicazione del risultato",
      "refs": [
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Le frequenze alleliche possono differire tra popolazioni, ma l'appartenenza dichiarata a un gruppo non identifica il genotipo individuale. Usare l'origine come sostituto del test rischia di perdere varianti rilevanti e di creare false certezze. Anche la rappresentazione diseguale delle popolazioni negli studi può limitare quanto bene un'associazione sia caratterizzata in contesti diversi.\n\nUn referto deve permettere di ricostruire il gene, le varianti o gli alleli rilevati, il metodo, la copertura e la traduzione funzionale adottata. La stessa informazione di sequenza può ricevere un'interpretazione aggiornata quando cambiano le conoscenze. La componente germinale è relativamente stabile, mentre la classificazione clinica e il contesto terapeutico possono richiedere una nuova valutazione.\n\nComunicare bene significa spiegare sia che cosa il risultato sostiene sia che cosa lascia aperto. «Nessuna variante nel pannello» non significa «nessun rischio», e «variante associata a rischio» non significa «evento inevitabile». La conservazione e l'uso del dato richiedono inoltre attenzione alla sua natura personale. Il valore della farmacogenomica cresce quando il risultato resta comprensibile, contestualizzato e integrato con gli altri dati clinici."
    },
    {
      "id": "pgx-22",
      "title": "Ricostruire un caso: dalla specie attiva alla decisione",
      "refs": [
        "K",
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Per affrontare un nuovo esempio, identifica anzitutto il farmaco e l'indicazione. Disegna poi le specie chimiche principali e segna quale produce l'effetto: sostanza somministrata, metabolita o entrambe. Colloca il gene nella mappa, distinguendo trasformazione, trasporto, bersaglio e risposta immunitaria. Questo passaggio impedisce di interpretare allo stesso modo un enzima di inattivazione e uno di bioattivazione.\n\nTraduci il risultato genetico soltanto con il sistema pertinente, mantenendo eventuali ambiguità. Aggiungi interazioni, funzione degli organi e condizioni che possono modificare attività o sensibilità. Formula una previsione qualitativa e verifica se i dati del prodotto la sostengono. Infine separa l'esistenza di un'associazione dalla raccomandazione per quel contesto: non tutte le ipotesi utili allo studio hanno già un impiego clinico definito.\n\nLe domande successive permettono di esercitare questi passaggi senza calcolare una terapia. La copertura del capitolo resta delimitata alle pagine e ai documenti dichiarati; non equivale alla lettura completa dei corsi o dei libri. I collegamenti al catalogo e agli altri capitoli consentono di approfondire il bersaglio e il destino del farmaco mantenendo visibili le parti ancora da sviluppare."
    }
  ],
  "checks": [
    {
      "question": "Perché la stessa riduzione enzimatica può aumentare o diminuire l’effetto?",
      "answer": "Dipende dalla specie attiva: ridurre la sua inattivazione può aumentarne l’esposizione; ridurre la formazione da un precursore può diminuirla. Il modello isola un solo passaggio."
    },
    {
      "question": "Una duplicazione di CYP2D6 dimostra sempre un fenotipo ultrarapido?",
      "answer": "No. Occorre conoscere quale allele è duplicato, la sua funzione e la struttura rilevata dal test. Numero di copie e numero di copie funzionanti non sono sinonimi."
    },
    {
      "question": "Un risultato normale esclude la fenoconversione?",
      "answer": "No. Un inibitore può modificare l’attività effettiva senza cambiare il DNA. La categoria genetica va interpretata insieme al contesto attuale."
    },
    {
      "question": "Una variante del bersaglio deve cambiare la concentrazione plasmatica?",
      "answer": "No. Può modificare la sensibilità farmacodinamica a esposizione simile. Aumentare l’esposizione non corregge necessariamente quel cambiamento."
    },
    {
      "question": "Perché nello schema delle tiopurine non basta TPMT?",
      "answer": "L’aggiornamento CPIC2025 pubblicato2026 considera anche NUDT15 e combinazioni funzionali. Sono passaggi diversi; il test non elimina il monitoraggio né le cause non genetiche di tossicità."
    },
    {
      "question": "Che differenza c’è tra DPYD e DPD?",
      "answer": "DPYD è il gene, DPD l’enzima. Un pannello di varianti e una valutazione fenotipica non misurano lo stesso oggetto e hanno limiti differenti."
    },
    {
      "question": "Essere substrato di ABCB1 significa che ABCB1 è il bersaglio terapeutico?",
      "answer": "No. Il trasportatore può modificare la distribuzione del farmaco senza mediare il beneficio terapeutico. Substrato, inibitore e bersaglio sono ruoli distinti."
    },
    {
      "question": "Il test per siponimod riguarda il recettore S1P?",
      "answer": "No. Il test richiesto dal documento di prodotto riguarda CYP2C9, coinvolto nel metabolismo; S1P1 e S1P5 appartengono alla farmacodinamica."
    },
    {
      "question": "Una variante tumorale è necessariamente ereditata?",
      "answer": "No. Può essere somatica e limitata a una popolazione cellulare. Occorre precisare quale campione e quale genoma sono stati analizzati."
    },
    {
      "question": "Una linea guida su come usare un genotipo dice sempre di eseguire il test a tutti?",
      "answer": "No. Interpretare un risultato disponibile e decidere quando richiedere il test sono domande diverse. Contano prodotto, indicazione, fonte e versione."
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012. Testo estraibile PDF90–93 (stampa70–73); controllo visivo90,92. Tabelle storiche non adottate come raccomandazioni attuali."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "8ª italiana2016 / originale2015. Testo PDF224–230; controllo visivo228. Lettura circoscritta, non del libro intero."
    },
    {
      "id": "C",
      "title": "Clementi e Fumagalli · Farmacologia generale e molecolare",
      "detail": "4ª2012, capitolo54. Testo PDF688–690; controllo visivo689."
    },
    {
      "id": "FI",
      "title": "Diapositive del corso di Farmacologia I",
      "detail": "AA2025–26. Testo estraibile PDF203–220; figure controllate nelle pagine204,208,211,213,215,217. Testo194–202 già letto nel lotto precedente, non ricontato. Altre figure non verificate."
    },
    {
      "id": "SFI",
      "title": "Appunti del corso di Farmacologia I · lezione 5",
      "detail": "13/10/2025, AA2025–26. Raccolta PDF104–114, pagine18–28 della lezione, stampa99–109. Controllo visivo111. PDF104 fuori dal tema; precedenti87–103 già registrate nel lotto anticorpi."
    },
    {
      "id": "FII-C",
      "title": "Appunti del corso di Farmacologia II · lezione 6",
      "detail": "06/11/2025, AA2025–26. Solo PDF13–14, equivalenti112–113 della raccolta; conteggiate una volta. Testo letto, figure non controllate. Attivazione degli antiaggreganti e distinzione PK/effetto."
    },
    {
      "id": "FII-D",
      "title": "Appunti del corso di Farmacologia II · lezione 15",
      "detail": "15/01/2026, AA2025–26. Solo PDF6, equivalente289 della raccolta; copie deduplicate. Testo letto, figure non controllate. Abacavir e distinzione ospite/virus."
    },
    {
      "id": "CPIC-OP",
      "title": "CPIC · CYP2D6 e oppioidi, 2021",
      "detail": "Crews et al., doi10.1002/cpt.2149. Consultati abstract, raccomandazioni codeina e passaggi su inibitori e limiti del test; non dichiarata lettura integrale. Accesso26/10/2026.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/"
    },
    {
      "id": "CPIC-BB",
      "title": "CPIC · Beta-bloccanti, 2024",
      "detail": "Duarte et al., doi10.1002/cpt.3351. Passaggi selezionati su CYP2D6 e metoprololo; non tutta la linea guida. Accesso26/10/2026.",
      "url": "https://files.cpicpgx.org/data/guideline/publication/beta_blockers/2024/38951961.pdf"
    },
    {
      "id": "CPIC-CLO",
      "title": "CPIC · CYP2C19 e clopidogrel, aggiornamento2022",
      "detail": "Lee et al., doi10.1002/cpt.2526. Abstract e passaggi selezionati sulle raccomandazioni e sul contesto neurovascolare; accesso completo non ottenuto in questa sessione. Accesso26/10/2026.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9287492/"
    },
    {
      "id": "CPIC-TP",
      "title": "CPIC · TPMT, NUDT15 e tiopurine, aggiornamento2025",
      "detail": "Maillard et al., pubblicato2026, doi10.1002/cpt.70209. Abstract e passaggi selezionati su funzione, fenotipi combinati, scopo e limiti. Non lettura integrale. Accesso26/10/2026.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12997511/"
    },
    {
      "id": "HPRA-IRI",
      "title": "HPRA · Irinotecan, riassunto delle caratteristiche del prodotto",
      "detail": "Documento09/01/2025, passaggi selezionati UGT1A1 e SN-38 in§5.2. Contesto regolatorio irlandese, non una raccomandazione italiana universale. Accesso26/10/2026.",
      "url": "https://assets.hpra.ie/products/Human/22106/Licence_PA0822-212-001_09012025155108.pdf"
    },
    {
      "id": "EMA-DPD",
      "title": "EMA · Fluoropirimidine e deficit di DPD",
      "detail": "Procedura2020: panoramica e informazioni per professionisti, distinguendo uso sistemico, topico e altri prodotti. Accesso26/10/2026.",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/fluorouracil-fluorouracil-related-substances-capecitabine-tegafur-flucytosine-containing-medicinal-products"
    },
    {
      "id": "EMA-URACIL",
      "title": "EMA · 5-fluorouracile, comunicazione24/10/2024",
      "detail": "Sintesi della comunicazione su funzione renale e interpretazione dell’uracile nel fenotipo DPD. Accesso26/10/2026.",
      "url": "https://www.ema.europa.eu/en/medicines/dhpc/5-fluorouracil"
    },
    {
      "id": "CPIC-STAT",
      "title": "CPIC · SLCO1B1, ABCG2, CYP2C9 e statine",
      "detail": "Cooper-DeHoff et al.,2022, doi10.1002/cpt.2557. Abstract, introduzione e passaggi selezionati delle tabelle2/5. Aggiornamenti allelici online settembre2025 distinti dalla pubblicazione. Accesso26/10/2026.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9035072/"
    },
    {
      "id": "EMA-ABA",
      "title": "EMA · Ziagen, abacavir",
      "detail": "Panoramica ufficiale e passaggi del foglio illustrativo, informazioni di prodotto aggiornate19/01/2026: screening HLA-B*57:01 e limiti del risultato negativo. Non lettura integrale del RCP. Accesso26/10/2026.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/ziagen"
    },
    {
      "id": "EMA-SIP",
      "title": "EMA · Mayzent, siponimod",
      "detail": "Informazioni di prodotto aggiornate30/07/2026: sezioni4.1,4.2 e passaggi4.4/5.2. Genotipo CYP2C9 distinto dal bersaglio S1P. Accesso26/10/2026.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/mayzent-epar-product-information_en.pdf"
    }
  ],
  "drugs": [
    "metoprololo",
    "clopidogrel",
    "siponimod"
  ],
  "targets": [
    "CYP2D6",
    "CYP2C19",
    "CYP2C9"
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL485",
      "label": "CODEINE"
    },
    {
      "id": "CHEMBL13",
      "label": "METOPROLOL"
    },
    {
      "id": "CHEMBL1771",
      "label": "CLOPIDOGREL"
    },
    {
      "id": "CHEMBL1542",
      "label": "AZATHIOPRINE"
    },
    {
      "id": "CHEMBL1200751",
      "label": "MERCAPTOPURINE"
    },
    {
      "id": "CHEMBL481",
      "label": "IRINOTECAN"
    },
    {
      "id": "CHEMBL185",
      "label": "FLUOROURACIL"
    },
    {
      "id": "CHEMBL1064",
      "label": "SIMVASTATIN"
    },
    {
      "id": "CHEMBL1380",
      "label": "ABACAVIR"
    },
    {
      "id": "CHEMBL2336071",
      "label": "SIPONIMOD"
    }
  ],
  "relatedExistingChapterIds": [
    "metabolismo-farmacogenetica",
    "modelli-pk",
    "recettori-e-legame",
    "anticorpi-biologici"
  ],
  "coverage": "Sette fonti didattiche consultate per intervalli: 46 pagine di testo estraibile, di cui una fuori tema, e 11 pagine controllate visivamente. Le pagine di slide prevalentemente grafiche restano incomplete dove non indicate come controllate. Documenti ufficiali consultati per passaggi selezionati. Nessun libro o corso dichiarato interamente letto; controllo editoriale mirato dell’integratore, non revisione clinica indipendente. Nessuna nuova identità, sintesi di farmaco o scheda farmacocinetica.",
  "wordCount": 3790
});
