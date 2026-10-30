// Sintesi didattica originale; copertura e limiti nei registri collegati.
export const THEORY_MIGRAINE = Object.freeze({
  "id": "emicrania",
  "volume": 9,
  "title": "Emicrania: circuiti, bersagli e uso dei farmaci",
  "lead": "Il dolore emicranico nasce in un sistema nervoso che integra segnali meningei, sensibilità sensoriale e modulazione centrale. Collegare questo circuito ai bersagli dei farmaci aiuta a distinguere trattamento dell’attacco, prevenzione e cefalea da uso eccessivo di medicinali.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-30",
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
      "id": "cgrp-complesso",
      "title": "Un recettore composto da più elementi",
      "refs": [
        "CFI",
        "IUPHAR-CGRP"
      ],
      "text": "Il CGRP è il messaggero; il recettore è il sistema che lo riconosce e trasforma il legame in una risposta cellulare. Nel recettore CGRP canonico, la proteina CLR si associa a RAMP1. CLR appartiene ai GPCR di classe B; RAMP1 è una proteina accessoria che contribuisce alla presentazione e alle proprietà farmacologiche del complesso.\n\nLa trasduzione preferenziale attraverso Gs aumenta la produzione di cAMP; questo descrive un passaggio intracellulare, non un aumento obbligatorio del dolore in qualsiasi tessuto. Per interpretare l’effetto occorre conoscere anche la cellula che esprime il complesso e la funzione che quel segnale regola.\n\nL’associazione con proteine diverse cambia l’identità funzionale del recettore. Per esempio, il complesso formato dal recettore della calcitonina e RAMP1 è chiamato AMY1 ed è distinto da CLR/RAMP1. La presenza della stessa proteina accessoria non rende equivalenti i due sistemi. Questo aiuta a leggere le schede dei gepanti: il nome del mediatore, la composizione del bersaglio e il profilo di legame del farmaco sono tre informazioni da mantenere separate."
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
      "id": "selettivita-serotonina",
      "title": "5-HT1B/1D e 5-HT1F: distinguere il profilo della molecola",
      "refs": [
        "CFI",
        "LAS-EMA"
      ],
      "text": "La mappa delle vie serotoninergiche contiene più recettori, ma non rappresenta una scheda di selettività valida per ogni farmaco. La descrizione dei triptani come agonisti 5-HT1B/1D serve a riconoscerne una proprietà farmacologica importante; una figura che aggiunge 5-HT1F non dimostra che tutte le molecole agiscano allo stesso modo su ciascun sottotipo.\n\nLasmiditan offre un confronto utile: è un agonista con elevata selettività per 5-HT1F e penetra nel sistema nervoso centrale. Le informazioni EMA collegano il beneficio presumibile alla riduzione del rilascio di neuropeptidi e alla modulazione delle vie dolorose, mantenendo incerto il meccanismo terapeutico preciso. L’assenza di vasocostrizione osservata nei preparati vascolari umani studiati ex vivo è un risultato sperimentale; non dimostra sicurezza universale né autorizza a ignorare altri effetti.\n\nIl documento lo indica per il trattamento acuto della fase dolorosa nell’adulto. Segnala effetti centrali e compromissione della guida: occorre evitare guida e attività che richiedono elevata attenzione per almeno otto ore dopo ogni assunzione, anche se ci si sente bene. Richiama inoltre la sindrome serotoninergica. Cambiare sottotipo recettoriale modifica il profilo farmacologico, non elimina la necessità di valutare il singolo prodotto."
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
      "id": "via-tempo-risposta",
      "title": "Dalla formulazione alla risposta: quattro grandezze da separare",
      "refs": [
        "CFI",
        "SUM-SC-UK"
      ],
      "text": "La farmacocinetica aiuta a capire perché lo stesso bersaglio non produca una risposta identica con qualsiasi prodotto. Bisogna però separare quattro domande: quanta sostanza raggiunge la circolazione, quando si osserva il massimo della concentrazione, quando compare un beneficio e quanto a lungo quel beneficio persiste. Sono domande collegate, ma non equivalenti.\n\nLa biodisponibilità descrive la frazione della dose che arriva immodificata alla circolazione sistemica. Il tempo al picco, Tmax, individua invece il massimo osservato nella curva concentrazione-tempo: non è il momento in cui ogni persona comincerà a stare meglio. L’esordio clinico richiede un esito definito, come l’attenuazione del dolore, mentre la sua completa scomparsa è un esito diverso. Anche l’emivita di eliminazione descrive il declino della concentrazione in determinate condizioni, non un cronometro della durata del sollievo.\n\nLa via di somministrazione modifica l’ingresso del farmaco nell’organismo. Una compressa deve liberare il principio attivo e consentirne l’assorbimento; una somministrazione sottocutanea segue un percorso diverso. Nel documento britannico del sumatriptan iniettabile, risposta clinica e picco plasmatico sono descritti separatamente; la via può essere utile quando nausea e vomito rendono problematico il trattamento orale. Questo esempio riguarda un prodotto preciso e non autorizza a sostituire automaticamente formulazioni o dosi.\n\nPer confrontare due righe di una tabella occorre quindi chiedere se si riferiscano alla stessa via, allo stesso esito e alle stesse condizioni di osservazione. Una maggiore biodisponibilità non dimostra da sola maggiore efficacia, così come un’emivita più lunga non garantisce assenza di recidiva del dolore. Il ritorno della cefalea dopo una risposta iniziale va inoltre distinto dalla mancata risposta: confonderli cancella un’informazione essenziale sull’attacco e sul risultato del trattamento. La farmacocinetica spiega una parte della variabilità; non sostituisce il confronto clinico."
    },
    {
      "id": "tollerabilita-rischio",
      "title": "Tollerabilità e rischio cardiovascolare rispondono a domande diverse",
      "refs": [
        "CFI",
        "SUM-UK"
      ],
      "text": "Le sensazioni di calore, le parestesie, la sonnolenza o la stanchezza riportate con i triptani descrivono esperienze del paziente. Una lista di questi eventi non basta però a rappresentare il rischio: frequenza, intensità, contesto e conseguenze sono dimensioni differenti. Un evento frequente ma transitorio e un evento raro ma grave non diventano confrontabili semplicemente contando quante voci occupano nella tabella.\n\nIl collegamento ai recettori aiuta a tenere insieme beneficio e limite della classe. La modulazione trigeminale è parte del razionale terapeutico; l’azione vascolare contribuisce a spiegare perché anamnesi e condizioni cardiovascolari siano rilevanti. Una formulazione più rapida o una molecola con un diverso profilo farmacocinetico non dimostrano, da sole, una maggiore sicurezza cardiovascolare. Quest’ultima richiede dati clinici e condizioni d’impiego specifiche.\n\nNel documento britannico delle compresse di sumatriptan, l’ipertensione moderata o grave e quella lieve non controllata sono controindicazioni; per la forma lieve controllata è prevista cautela. La distinzione impedisce di trasformare la parola «ipertensione» in un’unica regola indistinta. Il dolore o la costrizione toracica non devono essere automaticamente considerati innocui: se suggeriscono ischemia, il documento richiede di evitare ulteriori dosi e procedere a valutazione.\n\nAnche le interazioni richiedono categorie precise. Per quel prodotto, l’associazione con altri triptani, derivati dell’ergot o inibitori delle monoamino-ossidasi è controindicata; il possibile impiego insieme a SSRI o SNRI richiede invece un giudizio clinico e sorveglianza appropriata. Non tutte le combinazioni serotoninergiche sono dunque descritte con la stessa regola. Questi esempi insegnano a leggere la differenza fra controindicazione e precauzione: non costituiscono una lista completa né un piano per cambiare medicinali. Per applicarli servono le informazioni aggiornate del prodotto e il contesto individuale."
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
      "id": "gepanti-prodotti",
      "title": "Gepanti: distinguere il bersaglio dalla storia dei singoli prodotti",
      "refs": [
        "CFI",
        "KAT-MIG",
        "RAN-MIG",
        "APP-MIG",
        "ATO-EMA",
        "ZAV-US"
      ],
      "text": "Il successo di un bersaglio terapeutico non implica che ogni molecola sviluppata per quel bersaglio abbia lo stesso destino. Le edizioni di Katzung e Rang & Dale qui confrontate descrivono una fase iniziale degli antagonisti del CGRP; Rang & Dale richiama l’interruzione dello sviluppo di telcagepant per tossicità epatica. È un dato storico relativo a quel composto: non permette di attribuire automaticamente lo stesso rischio a tutti i gepanti successivi, né di escluderlo per semplice appartenenza a una nuova generazione.\n\nPer orientarsi occorre mantenere tre coordinate: la molecola, il prodotto con la sua formulazione e l’indicazione vigente nel territorio considerato. La classificazione didattica in trattamento acuto, misto e preventivo è utile soltanto se queste coordinate sono aggiornate. Per esempio, nelle informazioni EMA consultate il 30 ottobre 2026 atogepant comprende anche l’impiego acuto: uno schema storico che lo collochi esclusivamente nella prevenzione non descrive più integralmente quel documento europeo.\n\nLa via nasale è invece una proprietà di un prodotto specifico, non della classe. Zavegepant, nello spray nasale statunitense Zavzpret, è indicato per l’attacco nell’adulto e non per la prevenzione. La sua presenza accanto ai gepanti orali non dimostra una maggiore efficacia dell’intera classe né un assorbimento migliore in qualsiasi circostanza. Il confronto richiede dati sul prodotto e sull’esito misurato.\n\nQuesta distinzione permette di leggere insieme fonti di epoche diverse senza trasformarle in un elenco contraddittorio. Il meccanismo aiuta a riconoscere la famiglia; lo sviluppo clinico decide quali proprietà siano dimostrate per una molecola; le informazioni aggiornate delimitano l’uso del prodotto. Nessuno di questi passaggi può essere sostituito dal solo nome del recettore."
    },
    {
      "id": "cgrp-sorveglianza",
      "title": "Blocco del CGRP: il razionale vascolare non esaurisce la sicurezza",
      "refs": [
        "CFI",
        "APP-MIG",
        "RAN-MIG",
        "ZAV-US",
        "ATO-EMA"
      ],
      "text": "Agire sul recettore del CGRP e stimolare i recettori serotoninergici dei triptani sono interventi diversi. Il razionale dei gepanti consente di affrontare la segnalazione trigeminovascolare senza riprodurre l’agonismo 5-HT1B/1D. Da questa differenza non discende però una garanzia generale per ogni persona con malattia cardiovascolare. Il modello spiega un punto d’intervento; la sicurezza va osservata nelle persone e aggiornata durante l’impiego.\n\nLe informazioni statunitensi correnti di zavegepant riportano avvertenze per comparsa o peggioramento dell’ipertensione e del fenomeno di Raynaud, sulla base di segnalazioni successive alla commercializzazione di antagonisti del CGRP. Richiamano il controllo della pressione e la valutazione dei sintomi vascolari. Questo dato impedisce di tradurre «non è un triptano» in «non richiede attenzione vascolare». Una segnalazione, d’altra parte, non fornisce da sola una frequenza confrontabile con quella di un altro medicinale.\n\nAnche l’esposizione al farmaco merita un ragionamento distinto. Per atogepant, le informazioni EMA descrivono aumenti dell’esposizione con potenti inibitori di CYP3A4 o dei trasportatori OATP e prevedono modifiche delle condizioni d’impiego. Il collegamento con il capitolo su metabolismo e trasportatori chiarisce perché la selettività recettoriale non protegga dalle interazioni farmacocinetiche.\n\nIl profilo finale riunisce dunque bersaglio, esposizione, effetti osservati e caratteristiche della persona. Né una vecchia esperienza sfavorevole con un composto sperimentale né un meccanismo favorevole possono sostituire questo insieme. Le avvertenze del prodotto statunitense restano identificate come tali: non diventano automaticamente un RCP europeo o una graduatoria di sicurezza fra gepanti."
    },
    {
      "id": "indicazione-accesso",
      "title": "Indicazione autorizzata, rimborso e scelta clinica",
      "refs": [
        "CFI",
        "ATO-EMA",
        "AIFA-ATO",
        "AIFA-REG"
      ],
      "text": "La frequenza dell’emicrania compare in documenti che rispondono a domande differenti. Una classificazione diagnostica descrive il disturbo; l’indicazione autorizzata definisce un impiego del medicinale; le condizioni di rimborso stabiliscono quando il servizio sanitario ne sostiene il costo. La stessa unità, per esempio i giorni mensili, non rende intercambiabili queste regole.\n\nIl confronto storico di Aquipta è istruttivo. L’indicazione europea per la profilassi considera adulti con almeno quattro giorni mensili di emicrania. La comunicazione AIFA del 7 ottobre 2024 sull’attivazione del registro descrive invece condizioni di rimborso più circoscritte: almeno otto giorni mensili di emicrania disabilitante nei tre mesi precedenti, una soglia di disabilità e precedenti trattamenti preventivi insufficienti, non tollerati o controindicati. Il numero otto, letto isolatamente in una notizia, perde quindi parte del suo significato.\n\nQueste soglie non sono due definizioni concorrenti della stessa malattia. Sono criteri applicati a scopi diversi, e vanno letti con data, indicazione e requisiti completi. Inoltre, l’estensione di un’autorizzazione non dimostra automaticamente che siano cambiate anche le condizioni italiane di rimborso.\n\nPer una decisione reale servono il documento di prodotto, le disposizioni nazionali e le schede applicabili al momento della prescrizione. La pagina AIFA dei registri è aggiornata nel tempo; l’esempio del 2024 qui discusso non certifica l’eleggibilità attuale di una persona. Il confronto insegna a separare evidenza farmacologica e condizioni di accesso, conservando entrambe senza ricavare un piano terapeutico da una singola soglia."
    },
    {
      "id": "ligando-recettore",
      "title": "Intercettare il messaggero o bloccare il suo recettore",
      "refs": [
        "CFI",
        "EREN-EMA",
        "FREM-EMA",
        "GAL-EMA",
        "EPT-UK"
      ],
      "text": "Un intervento sulla via del CGRP può avvenire in punti diversi. Se un anticorpo lega il peptide, riduce la possibilità che il messaggero raggiunga i recettori. Se lega il recettore, ostacola invece l’interazione su quel bersaglio. In entrambi i casi si può ridurre la segnalazione, ma l’oggetto riconosciuto dall’anticorpo cambia.\n\nErenumab illustra il secondo caso: si lega al recettore CGRP e compete con il legame del peptide. Fremanezumab illustra il primo: riconosce il ligando CGRP, nelle forme alfa e beta, impedendone il legame al recettore. I documenti EMA consultati collocano entrambi nella profilassi dell’emicrania nell’adulto con almeno quattro giorni mensili di emicrania. Questi esempi chiariscono la posizione dell’intervento, senza dimostrare una superiorità clinica dell’una sull’altra strategia.\n\nUna conseguenza del modello è che non serve distruggere la cellula per ridurne una comunicazione: questi anticorpi sono presentati come strumenti che interferiscono con una via di segnalazione. Il collegamento con il capitolo sugli anticorpi aiuta a separare riconoscimento del bersaglio e possibili funzioni della porzione Fc, che non devono essere attribuite indistintamente a tutti i prodotti.\n\nLa selettività non equivale ad assenza di rischi. Le informazioni dei due prodotti richiamano reazioni di ipersensibilità e limiti dei dati in alcune patologie cardiovascolari maggiori; per erenumab è descritta anche stipsi, talvolta con complicanze serie. La differenza di bersaglio va quindi letta insieme alla sicurezza e alle condizioni studiate, non trasformata da sola in una regola di scelta.\n\nGalcanezumab ed eptinezumab completano il confronto: entrambi legano il peptide CGRP, mentre erenumab riconosce il recettore. Galcanezumab è un anticorpo umanizzato IgG4 somministrato per via sottocutanea; eptinezumab è un IgG1 che lega le forme alfa e beta del peptide e viene somministrato mediante infusione endovenosa. La via endovenosa descrive l’ingresso nell’organismo, non trasforma un’indicazione preventiva in trattamento dell’attacco. Per eptinezumab il documento qui consultato è britannico: non certifica le condizioni italiane di impiego o accesso.\n\nAnche i tempi della sorveglianza appartengono al singolo prodotto. Le informazioni europee di galcanezumab descrivono possibili reazioni di ipersensibilità ritardate; quelle britanniche di eptinezumab richiamano reazioni gravi anche durante l’infusione. Condividere un bersaglio non rende identici formulazione, modalità di somministrazione o profilo delle reazioni. Nessuna di queste differenze dimostra, da sola, una superiorità complessiva."
    },
    {
      "id": "misura-biomarcatore",
      "title": "Misurare CGRP non equivale a diagnosticare un attacco",
      "refs": [
        "CFI",
        "CGRP-ORMONI"
      ],
      "text": "La concentrazione di un mediatore in un campione e la sua azione in un circuito sono misure diverse. Prima di interpretare un grafico bisogna identificare il compartimento raccolto, il momento del prelievo e il metodo analitico. Plasma e liquido lacrimale non sono campioni intercambiabili; neppure una stessa unità sull’asse renderebbe automaticamente confrontabili due misure ottenute in condizioni differenti.\n\nUno studio del 2023, consultato qui attraverso il suo abstract, ha confrontato gruppi di partecipanti con e senza emicrania episodica in diversi contesti ormonali. Nel gruppo con ciclo regolare, durante le mestruazioni sono state osservate concentrazioni più alte di CGRP nelle partecipanti con emicrania. Il confronto suggerisce una relazione da approfondire; non è una sperimentazione che assegna un intervento ormonale e ne misura l’effetto sulla malattia.\n\nLa distribuzione dei valori è altrettanto importante della differenza fra gruppi. Due gruppi possono differire e avere comunque un’ampia sovrapposizione individuale. Per costruire un test diagnostico servirebbero una domanda clinica definita, prestazioni misurate rispetto a un riferimento e una verifica in altre persone: questi passaggi non sono dimostrati dal semplice confronto illustrato.\n\nPerciò il grafico aiuta a formulare ipotesi biologiche, ma non fornisce qui una soglia per diagnosticare emicrania, scegliere un anticorpo o modificare una terapia ormonale. Il passaggio dalla plausibilità del mediatore alla decisione clinica richiede evidenze ulteriori."
    },
    {
      "id": "prevenzione",
      "title": "Prevenire: famiglie diverse e sicurezza specifica",
      "refs": [
        "CFI",
        "NICE",
        "TOP-EMA",
        "KAT-MIG",
        "RAN-MIG",
        "EHF-2022",
        "AAN-2026"
      ],
      "text": "La prevenzione dell’emicrania comprende farmaci provenienti da famiglie farmacologiche diverse. Nelle diapositive compaiono, fra gli altri, beta-bloccanti e antiepilettici: l’origine della classe non descrive da sola la ragione del beneficio nell’emicrania. Un’indicazione può essere sostenuta da studi clinici anche quando il contributo esatto dei diversi effetti molecolari non è interamente chiarito.\n\nLe raccomandazioni NICE consultate discutono propranololo, topiramato e amitriptilina considerando benefici, rischi, comorbilità e preferenze. Questo non costituisce una graduatoria da applicare automaticamente in Italia né dimostra che tutte le opzioni siano intercambiabili. Autorizzazione, raccomandazione e condizioni di accesso sono informazioni differenti.\n\nIl topiramato mostra perché una lista di nomi sia insufficiente. Le misure europee vietano il suo impiego nella prevenzione dell’emicrania durante la gravidanza e prevedono specifiche condizioni del programma di prevenzione della gravidanza per chi può iniziarne una. Non si trasferiscono alla profilassi emicranica le eccezioni previste per altre indicazioni. La lezione generale è valutare la sicurezza del singolo farmaco nel contesto pertinente: appartenere a una classe efficace non elimina rischi specifici, e una sintesi didattica non può sostituire questa valutazione.\n\nUna seconda distinzione riguarda il posto dei farmaci nel percorso di cura. L’algoritmo storico riportato nelle diapositive è una proposta datata: le sue frecce non possono diventare una sequenza obbligatoria senza confrontarle con raccomandazioni e condizioni di accesso aggiornate. Nel consenso EHF del 2022 gli anticorpi diretti contro la via del CGRP entrano fra le opzioni di prima linea; questa posizione non coincide con una garanzia di rimborso né con l’obbligo di preferirli per ogni persona.\n\nLe raccomandazioni AAN/AHS del 2026 richiedono una scelta condivisa che consideri storia clinica, controindicazioni, preferenze, tollerabilità e costi. Non identificano un farmaco chiaramente superiore a tutti gli altri nel ridurre la frequenza. Il grado di fiducia nell’evidenza va distinto dall’entità del beneficio: una base di studi meno solida non dimostra automaticamente inefficacia.\n\nQuesta distinzione aiuta anche a leggere le tabelle del corso. Una colonna sull’efficacia, una sui rischi e una sui costi rispondono a domande diverse; non si possono sommare i segni grafici come punti di una classifica. Analogamente una previsione di vendite descrive un mercato, non l’efficacia comparativa. Per interpretare una tabella servono popolazione, esito, confronto, periodo e origine dei prezzi; se mancano, il quadro resta un orientamento storico."
    },
    {
      "id": "valutare-prevenzione",
      "title": "Valutare la prevenzione: tempo, esiti e tollerabilità",
      "refs": [
        "CFI",
        "GAL-EMA",
        "EPT-UK",
        "EHF-2022",
        "AAN-2026"
      ],
      "formula": "Situazione iniziale → esposizione documentata → esiti e tollerabilità → rivalutazione",
      "text": "Una terapia preventiva si valuta su un andamento nel tempo. Una settimana particolarmente favorevole o sfavorevole, isolata dal resto, non descrive necessariamente la risposta. Lo schema proposto qui organizza la lettura dei risultati: chiarire la situazione iniziale, documentare il trattamento effettivamente ricevuto, confrontare gli esiti e riesaminare il rapporto fra beneficio e oneri. È una mappa didattica della valutazione, non un calendario per modificare autonomamente una terapia.\n\nLe raccomandazioni AAN/AHS del 2026 considerano frequenza, gravità, sintomi associati, qualità di vita e consumo di farmaci per l’attacco; suggeriscono strumenti coerenti, come diario e scale validate. Riduzione dei giorni con emicrania e recupero delle attività quotidiane sono esiti collegati, ma non equivalenti. La stessa variazione numerica può avere significati diversi in persone con condizioni iniziali e obiettivi differenti.\n\nLa finestra di osservazione dipende anche dal documento e dal trattamento. Il consenso EHF 2022 propone una prima valutazione degli anticorpi dopo almeno tre mesi consecutivi. Le informazioni EMA di galcanezumab chiedono di valutarne il beneficio entro tre mesi e poi periodicamente; lo SmPC britannico di eptinezumab colloca a sei mesi la valutazione del beneficio complessivo e della prosecuzione. Queste indicazioni hanno formulazioni e scopi distinti: non vanno fuse in una scadenza universale valida per tutta la classe.\n\nInfine, attendere una finestra utile per giudicare l’efficacia non significa attendere per valutare un effetto indesiderato. La sorveglianza accompagna il trattamento. Un’interruzione per scarsa tollerabilità e un’assenza di beneficio dopo esposizione adeguata non sono lo stesso risultato; prima di parlare di fallimento occorre ricostruire durata, regolarità e condizioni del confronto. La domanda conclusiva è quale beneficio rilevante sia stato ottenuto e a quale costo per quella persona, non soltanto se un numero abbia superato una soglia."
    },
    {
      "id": "gravidanza-evidenze",
      "title": "Gravidanza: leggere le evidenze oltre le vecchie lettere",
      "refs": [
        "CFI",
        "FDA-PLLR",
        "SUM-UK",
        "NICE"
      ],
      "text": "Una vecchia categoria alfabetica non riassume adeguatamente ciò che si sa sull’impiego di un farmaco in gravidanza. Il sistema statunitense PLLR, entrato in vigore nel 2015 con un’adozione graduale, ha sostituito le categorie A, B, C, D e X nella documentazione dei medicinali soggetti alla regola con informazioni articolate su rischio, considerazioni cliniche e dati disponibili. La presenza di una lettera in materiale didattico storico va quindi riconosciuta come tale, non presentata come una valutazione regolatoria corrente.\n\nIl punto non è soltanto cambiare etichetta. Occorre distinguere un segnale di danno dall’assenza di segnali osservati e dalla scarsità di informazioni. I dati su esposizioni reali possono essere rassicuranti senza dimostrare rischio nullo; periodo della gravidanza, esito considerato e qualità della raccolta delle informazioni limitano ciò che si può concludere. Anche il rischio della condizione non trattata entra nel ragionamento, senza trasformare questa considerazione in una giustificazione automatica per qualsiasi terapia.\n\nPer sumatriptan, lo SmPC britannico descrive dati osservazionali iniziali senza un segnale di aumento delle malformazioni, ma insufficienti per conclusioni definitive, e subordina l’impiego al bilancio fra benefici materni e possibili rischi fetali. NICE, nel contesto britannico, considera il triptano un’opzione da discutere quando necessario per il trattamento acuto in gravidanza; per una prevenzione necessaria chiede consiglio specialistico. Questo confronto non sostiene né un divieto assoluto di tutta la classe né una dichiarazione generale di sicurezza.\n\nTrattare un attacco e impostare una prevenzione restano decisioni diverse, come mostra anche il caso del topiramato discusso nella sezione sulla profilassi. Non si trasferisce a un altro farmaco, a un’altra indicazione o all’allattamento una conclusione ottenuta in un contesto specifico. La sintesi didattica serve a riconoscere quali informazioni mancano e quali domande porre; le fonti statunitensi e britanniche qui confrontate non sostituiscono il RCP applicabile in Italia."
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
    },
    {
      "question": "Perché RAMP1 non basta da sola a identificare il recettore CGRP?",
      "answer": "La composizione del complesso conta: CLR/RAMP1 identifica il recettore CGRP canonico, mentre il recettore della calcitonina associato a RAMP1 forma AMY1."
    },
    {
      "question": "Erenumab e fremanezumab legano lo stesso oggetto?",
      "answer": "No. Il primo riconosce il recettore CGRP; il secondo il peptide CGRP. Il punto d’intervento non stabilisce da solo quale trattamento sia preferibile."
    },
    {
      "question": "Un risultato ex vivo senza vasocostrizione basta a concludere che un farmaco sia privo di rischi?",
      "answer": "No. Descrive l’esito misurato in quel preparato. Effetti centrali e altre avvertenze richiedono una valutazione separata."
    },
    {
      "question": "Una differenza media di CGRP fra gruppi costituisce già un test per la singola persona?",
      "answer": "No. Servono prestazioni diagnostiche definite e validate; associazione biologica e utilità clinica sono domande differenti."
    },
    {
      "question": "Tmax ed esordio del sollievo indicano lo stesso momento?",
      "answer": "No. Il primo descrive il picco della concentrazione; il secondo richiede un esito clinico definito. Anche emivita e durata del beneficio vanno distinte."
    },
    {
      "question": "Un profilo farmacocinetico più rapido dimostra una maggiore sicurezza cardiovascolare?",
      "answer": "No. È una proprietà dell’esposizione, non la prova di minori eventi clinici. Controindicazioni e precauzioni restano da valutare per il prodotto e la persona."
    },
    {
      "question": "L’assenza di un segnale osservato in gravidanza equivale a rischio nullo?",
      "answer": "No. Numerosità, periodo di esposizione, esiti e qualità delle informazioni delimitano la conclusione. Il giudizio richiede il bilancio fra benefici e rischi nel contesto pertinente."
    },
    {
      "question": "Uno schema che definisce atogepant esclusivamente preventivo vale senza indicare territorio e data?",
      "answer": "No. Le indicazioni possono evolvere: il documento EMA consultato nel 2026 comprende anche il trattamento acuto nell’adulto. La classe non sostituisce le informazioni del prodotto."
    },
    {
      "question": "Il diverso bersaglio rispetto ai triptani basta a escludere problemi vascolari con un gepante?",
      "answer": "No. Il razionale farmacologico non esaurisce la sicurezza osservata; il documento statunitense di zavegepant riporta avvertenze su ipertensione e fenomeno di Raynaud."
    },
    {
      "question": "Una soglia riportata in una disposizione di rimborso può essere usata da sola per diagnosticare l’emicrania?",
      "answer": "No. Diagnosi, indicazione autorizzata ed eleggibilità al rimborso rispondono a domande diverse. Data, territorio e requisiti completi devono rimanere distinti."
    },
    {
      "question": "Un anticorpo somministrato per infusione è necessariamente un trattamento dell’attacco emicranico?",
      "answer": "No. La via di somministrazione e l’indicazione sono dimensioni diverse. Eptinezumab è qui descritto nel suo impiego preventivo, secondo il documento britannico consultato."
    },
    {
      "question": "Una maggiore fiducia nell’evidenza dimostra sempre un beneficio maggiore rispetto a ogni alternativa?",
      "answer": "No. Solidità della stima ed entità dell’effetto sono concetti distinti; una graduatoria terapeutica richiede anche confronti pertinenti, sicurezza, tollerabilità e contesto."
    },
    {
      "question": "La finestra per valutare il beneficio autorizza a rimandare l’esame di una reazione avversa?",
      "answer": "No. La sorveglianza accompagna il trattamento. Interruzione per intolleranza e inefficacia dopo esposizione adeguata devono essere distinte."
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
    },
    {
      "id": "CHEMBL3833329",
      "label": "ERENUMAB"
    },
    {
      "id": "CHEMBL4297756",
      "label": "FREMANEZUMAB"
    },
    {
      "id": "CHEMBL3039520",
      "label": "LASMIDITAN"
    },
    {
      "id": "CHEMBL3707328",
      "label": "GALCANEZUMAB"
    },
    {
      "id": "CHEMBL3833320",
      "label": "EPTINEZUMAB"
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I · 2025–26",
      "detail": "Diapositive del corso di Farmacologia I, AA 2025–26: PDF 514–540, etichette 512–538. Nuove PDF 536–540 lette nel testo disponibile e nei rendering il 30/10/2026. PDF 536–540, etichette 534–538: algoritmo storico 2020, notizie 2018–2023, tabella e previsioni di mercato, tabelle comparative. Testo delle immagini letto nei rendering. Articoli citati non letti; edizione delle tabelle 539–540 non identificata, margine destro della 540 ritagliato. Nessuna figura, dose, valore di vendita o classifica importata."
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
      "detail": "Raccomandazioni 1.3.10–1.3.33 e 1.3.42–1.3.48 lette nella pagina corrente il 28/10/2026. Contesto britannico; nessun protocollo, dosaggio o criterio di rimborso italiano derivato. Il 30/10/2026 ricontrollate 1.3.32–1.3.33 negli estratti indicizzati del documento ufficiale corrente (PDF pp. 17–18); accesso diretto alla pagina e al PDF non riuscito (403)."
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
      "detail": "Consultazione selettiva il 28/10/2026: indicazioni 4.1 (PDF 2), avvertenze 4.4 (PDF 4) e meccanismo iniziale di 5.1 (PDF 6). Documento corrente con trattamento acuto e profilassi; affinità recettoriale distinta dal meccanismo clinico preciso. Ricontrollate il 30/10/2026 le sezioni 4.1–4.5 (PDF 2–4); indicazione acuta e interazioni confermate. Nessuna dose trasferita."
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
      "detail": "Documento aggiornato il 17/06/2026, consultato il 28/10/2026: indicazione e precauzioni/controindicazioni selezionate in 4.1, 4.3–4.4. Non un RCP italiano. Nuova lettura selettiva il 30/10/2026: 4.2–4.6 e parte di 4.8, per distinguere controindicazioni, precauzioni e limiti dei dati in gravidanza. Non intero documento."
    },
    {
      "id": "NIH",
      "title": "NIH/NINDS · Migraine",
      "url": "https://health.nih.gov/health-topics-a-z/migraine",
      "detail": "Quadro generale, fasi, diagnosi e diario letti il 28/10/2026; la sintesi per il pubblico non sostituisce i criteri ICHD o le informazioni dei singoli prodotti."
    },
    {
      "id": "IUPHAR-CGRP",
      "title": "IUPHAR Review 25 · Famiglia calcitonina/CGRP",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5740251/",
      "detail": "Revisione 2017–2018: letti abstract e passaggi selezionati di introduzione e farmacologia su CLR/RAMP1, AMY1, Gs/cAMP e selettività il 28/10/2026. Non intero articolo o figure originali; non usata per indicazioni cliniche attuali."
    },
    {
      "id": "EREN-EMA",
      "title": "EMA · Aimovig, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/aimovig-epar-product-information_en.pdf",
      "detail": "Letti il 28/10/2026: 4.1 (PDF 2), 4.4 (3–4), 4.7 (5) e parte iniziale di 5.1 (7), prima degli studi clinici. Non intero documento."
    },
    {
      "id": "FREM-EMA",
      "title": "EMA · Ajovy, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/ajovy-epar-product-information_en.pdf",
      "detail": "Letti il 28/10/2026: 4.1 (PDF 2), 4.4 (3–4), 4.7 (4) e meccanismo in 5.1 (5–6). Non intero documento."
    },
    {
      "id": "LAS-EMA",
      "title": "EMA · Rayvow, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/rayvow-epar-product-information_en.pdf",
      "detail": "Letti il 28/10/2026: 4.1 (PDF 2), 4.4 (3–4), 4.7 (5–6) e parte iniziale di 5.1 (8), prima degli studi clinici. Non intero documento."
    },
    {
      "id": "CGRP-ORMONI",
      "title": "Neurology 2023 · CGRP e contesti ormonali nell’emicrania",
      "url": "https://pubmed.ncbi.nlm.nih.gov/36813730/",
      "detail": "PMID 36813730, DOI 10.1212/WNL.0000000000207114. Abstract letto il 28/10/2026; non articolo completo. Discordanze di pannelli e unità nelle diapositive: nessun valore numerico o soglia trasferito."
    },
    {
      "id": "SUM-SC-UK",
      "title": "Sumatriptan sottocutaneo · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/607/smpc",
      "detail": "Consultazione selettiva il 30/10/2026: risposta clinica e rilevanza della via alla fine di 5.1; farmacocinetica in 5.2. Documento aggiornato il 15/09/2025. Nessun valore quantitativo o dose trasferito; non RCP italiano."
    },
    {
      "id": "FDA-PLLR",
      "title": "FDA · Pregnancy and Lactation Labeling Resources",
      "url": "https://www.fda.gov/drugs/labeling-information-drug-products/pregnancy-and-lactation-labeling-resources",
      "detail": "Testo introduttivo su categorie, contenuti delle sezioni e decorrenza del PLLR letto il 30/10/2026. Non lettura del testo integrale della norma o delle presentazioni collegate."
    },
    {
      "id": "KAT-MIG",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana 2014 / XII americana 2012, capitolo 16: PDF 337–338, editoriali 317–318. Testo disponibile e rendering letti il 30/10/2026, incluso riquadro, figura 16-3 e tabella 16-5. La 337 inizia a frase in corso, la 338 termina con frase che prosegue fuori dall’intervallo. Stato sperimentale trattato come storico; studio 1991 citato non letto, nessuna dose o figura trasferita."
    },
    {
      "id": "RAN-MIG",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII edizione italiana 2016 / originale 2015, capitolo 15: PDF 317–319, paginazione editoriale non ricostruita. Testo, figura 15.3, tabella 15.3 e riquadri controllati il 30/10/2026; annotazioni manoscritte distinte dal testo editoriale. Frase finale della 319 prosegue nella 320 non letta. Non intero capitolo né articoli citati; nessuna figura riprodotta."
    },
    {
      "id": "APP-MIG",
      "title": "Appunti del corso di Farmacologia I · 2025–26",
      "detail": "Appunti del corso di Farmacologia I, AA 2025–26: PDF 280–282, etichette 275–277 e pagine di lezione 9–11. Testo disponibile e rendering letti il 30/10/2026. Parti sovrapposte nella 281 non ricostruite. Figure ripetute dalle diapositive riconosciute; criteri storici di uso eccessivo distinti da ICHD-3. Nessuna dose o figura trasferita."
    },
    {
      "id": "ZAV-US",
      "title": "Zavzpret · Informazioni di prescrizione statunitensi",
      "url": "https://labeling.pfizer.com/ShowLabeling.aspx?id=19471",
      "detail": "Documento Pfizer, revisione agosto 2025, consultato il 30/10/2026: sintesi, sezioni 1–5 e premessa di 6.1. Indicazione acuta, formulazione nasale e avvertenze vascolari; non intero documento, non RCP europeo. Nessuna dose trasferita."
    },
    {
      "id": "AIFA-ATO",
      "title": "AIFA · Attivazione del registro Aquipta, 2024",
      "url": "https://www.aifa.gov.it/-/attivazione-web-e-pubblicazione-schede-di-monitoraggio-registro-aquipta",
      "detail": "Comunicazione del 07/10/2024 letta il 30/10/2026. Esempio datato delle condizioni di rimborso; non consultate le schede cliniche complete né verificata l’eleggibilità corrente."
    },
    {
      "id": "AIFA-REG",
      "title": "AIFA · Elenco dei registri di monitoraggio",
      "url": "https://www.aifa.gov.it/it/registri-e-piani-terapeutici1",
      "detail": "Pagina indice letta il 30/10/2026: elenco attivi datato 28/10/2026. CSV non letto: formato non supportato dal lettore e accesso diretto 403. Non dichiarata verificata la riga Aquipta del registro corrente."
    },
    {
      "id": "GAL-EMA",
      "title": "EMA · Emgality, informazioni di prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/emgality-epar-product-information_en.pdf",
      "detail": "Letti il 30/10/2026: sezioni 4.1–4.5 (PDF 2–3), meccanismo e introduzione a studi/esiti in 5.1 (PDF 6). Non intero documento di 61 pagine, tabelle degli studi o figure."
    },
    {
      "id": "EPT-UK",
      "title": "Vyepti · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/13243/smpc",
      "detail": "Documento aggiornato il 04/08/2026; lette il 30/10/2026 le sezioni 4.1–4.5 e il meccanismo iniziale di 5.1. Non intero documento né RCP italiano. Accesso diretto al documento EMA non riuscito (429)."
    },
    {
      "id": "EHF-2022",
      "title": "European Headache Federation · Linea guida CGRP, 2022",
      "url": "https://link.springer.com/article/10.1186/s10194-022-01431-x",
      "detail": "Aggiornamento dell’11/06/2022. Letti il 30/10/2026 abstract, distinzione fra GRADE e consenso, quesiti di consenso 1 e 3. Non intero articolo, figure o studi inclusi."
    },
    {
      "id": "AAN-2026",
      "title": "AAN/AHS · Prevenzione farmacologica dell’emicrania, 2026",
      "url": "https://headachejournal.onlinelibrary.wiley.com/doi/10.1111/head.70199",
      "detail": "Pubblicazione online 31/08/2026, DOI 10.1111/head.70199. Letti il 30/10/2026 abstract e raccomandazioni 1–3 e 14–16 con relativi razionali. Non intera linea guida, revisione sistematica associata o appendici; ricerca bibliografica dichiarata fino al 06/06/2024."
    }
  ],
  "coverage": "Capitolo esteso; 35 pagine cumulative di quattro fonti, otto nuove in questo lotto: cinque diapositive, una pagina di ciascun libro e una degli appunti. Testo disponibile e rendering letti, figure ripetute riconosciute. Riconciliazione parziale di meccanismi, prodotti, prevenzione e valutazione degli esiti. Libri e corsi incompleti; rimborso italiano corrente non verificato. Documenti di prodotto e linee guida consultati per passaggi selezionati, non revisione clinica indipendente.",
  "wordCount": 4956
});
