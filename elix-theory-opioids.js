// Original educational synthesis; source intervals and limits are recorded separately.
export const THEORY_OPIOIDS=Object.freeze({
  "id": "oppioidi",
  "volume": 9,
  "title": "Oppioidi: dal recettore al controllo del dolore",
  "lead": "Trasmissione spinale, disinibizione, differenze fra molecole e adattamenti: collegare analgesia e rischi mantenendo distinti bersaglio, esposizione e contesto.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-28",
  "readingManifest": "./data/oppioidi-reading.json",
  "sections": [
    {
      "id": "dolore-nocicezione",
      "title": "Dolore e nocicezione: due livelli da collegare",
      "refs": [
        "IASP",
        "K",
        "SFI"
      ],
      "text": "Il dolore è un’esperienza della persona; la nocicezione è l’elaborazione nervosa di stimoli potenzialmente lesivi. Un segnale nocicettivo può produrre risposte riflesse senza descrivere da solo ciò che la persona prova. Viceversa, l’assenza di una lesione evidente non rende un dolore meno reale. Questa distinzione è il punto di partenza per capire perché un analgesico possa modificare il segnale, la sua modulazione e l’esperienza, senza rimuovere necessariamente la causa iniziale.\n\nI descrittori nocicettivo, neuropatico e nociplastico aiutano a formulare domande diverse. Il dolore nocicettivo deriva dall’attivazione dei nocicettori in relazione a un danno effettivo o minacciato di tessuti non nervosi. Quello neuropatico richiede una lesione o malattia del sistema somatosensoriale. Il termine nociplastico descrive una nocicezione alterata senza chiare evidenze del danno tissutale o della lesione somatosensoriale che spiegherebbero gli altri due meccanismi. Componenti differenti possono coesistere.\n\nPer studiare gli oppioidi occorre dunque separare il bersaglio farmacologico dal problema clinico. La presenza di recettori capaci di ridurre una trasmissione non dimostra che ogni dolore derivi da un difetto di quegli stessi recettori. Nemmeno la risposta a un farmaco identifica, da sola, l’origine del dolore."
    },
    {
      "id": "percorso",
      "title": "Dal tessuto al corno dorsale: dove si può modulare il segnale",
      "refs": [
        "K",
        "SFI"
      ],
      "text": "Una fibra sensitiva primaria raccoglie segnali dalla periferia e porta l’informazione al midollo spinale. Nel corno dorsale, le sue terminazioni comunicano con interneuroni e neuroni che partecipano alle vie ascendenti. Il glutammato e alcuni neuropeptidi, fra cui la sostanza P, contribuiscono alla trasmissione, con ruoli che dipendono dal tipo di terminazione e dall’attività. Non esiste un unico filo che trasporti intatto un valore numerico di dolore fino alla corteccia.\n\nA ogni passaggio intervengono proprietà di membrana, liberazione del trasmettitore e organizzazione dei circuiti. Ridurre l’ingresso di calcio in un terminale può diminuire l’esocitosi; aumentare una conduttanza al potassio in una cellula ricevente può renderla meno eccitabile. Sono interventi differenti che possono convergere sulla riduzione del trasferimento di informazione nocicettiva.\n\nLe vie discendenti aggiungono un controllo dall’alto verso il midollo. La persistenza del dolore non si spiega contando semplicemente più fibre ascendenti o meno fibre discendenti: contano attività, plasticità, contesto e patologia. Lo schema del circuito è utile proprio quando permette di precisare quale passaggio viene modificato."
    },
    {
      "id": "sensibilizzazione-periferica",
      "title": "Sensibilizzazione periferica: cambia la risposta allo stesso stimolo",
      "refs": [
        "R",
        "IASP"
      ],
      "text": "Una terminazione nocicettiva non è un sensore con una sensibilità immutabile. Il suo comportamento dipende sia dallo stimolo sia dallo stato del tessuto e dei canali di membrana. Attivazione e sensibilizzazione descrivono due passaggi differenti: un segnale può provocare una risposta, mentre un mediatore può rendere più facile o più intensa la risposta a un segnale successivo. Nel tessuto infiammato questi processi possono sovrapporsi.\n\nPer seguirli conviene partire dalla trasduzione, cioè dalla conversione dello stimolo in una variazione elettrica. TRPV1 è un canale cationico sensibile, fra l’altro, a capsaicina, calore e acidità; i canali ASIC rispondono ai protoni e i recettori P2X all’ATP. Aprire un canale cationico può depolarizzare la terminazione. I canali del sodio voltaggio-dipendenti intervengono poi nella generazione e propagazione dei potenziali d’azione: il canale che rileva uno stimolo e quello che sostiene l’impulso svolgono compiti differenti.\n\nAltri mediatori modificano la facilità con cui questo processo avviene. La bradichinina, attraverso B2 e vie intracellulari che comprendono PKC, può facilitare l’attività di TRPV1. Le prostaglandine possono aumentare la sensibilità della terminazione mediante i propri recettori e segnali intracellulari. Il fattore di crescita nervoso NGF, attraverso TrkA, può modificare funzionalità ed espressione di componenti del neurone. Si passa così da una modulazione relativamente rapida a cambiamenti che coinvolgono la produzione di proteine. Non tutti i mediatori agiscono attraverso lo stesso recettore o la stessa chinasi.\n\nIl punto comune è un diverso rapporto fra ingresso e risposta: uno stimolo può ora reclutare più attività o farlo a una soglia minore. Ciò aiuta a comprendere la dolorabilità di un tessuto infiammato, senza trasformare un valore sperimentale di temperatura in una soglia universale del dolore. Per collegare il meccanismo a un farmaco occorre specificare se si interviene sul mediatore, sulla trasduzione, sulla propagazione o sul rilascio sinaptico."
    },
    {
      "id": "sensibilizzazione-centrale",
      "title": "Dal wind-up ai segni clinici: distinguere fenomeno e meccanismo",
      "refs": [
        "R",
        "IASP"
      ],
      "text": "La prima sinapsi spinale può cambiare il modo in cui risponde a una sequenza di impulsi. Il glutammato liberato dall’afferente attiva recettori ionotropi: AMPA contribuisce alla componente eccitatoria rapida, mentre NMDA partecipa a risposte più prolungate e alla facilitazione dipendente dall’attività. I neuropeptidi, fra cui la sostanza P, aggiungono un’altra componente della comunicazione. Il corno dorsale elabora quindi sia l’arrivo di un impulso sia la storia recente degli ingressi.\n\nIn determinate condizioni sperimentali, una successione di stimoli delle fibre C produce risposte spinali progressivamente maggiori: è il wind-up. Il fenomeno mostra che ripetere un ingresso non significa necessariamente ottenere ogni volta un’uscita identica. Non va però usato come sinonimo di tutta la sensibilizzazione centrale: quest’ultima comprende un aumento della responsività di neuroni nocicettivi centrali e può coinvolgere cambiamenti di eccitabilità, trasmissione e modulazione. Nemmeno l’analogia con il potenziamento a lungo termine dimostra che ogni dolore persistente sia lo stesso fenomeno sinaptico.\n\nAllodinia e iperalgesia descrivono invece ciò che si osserva nella risposta dolorosa. Nell’allodinia uno stimolo normalmente non doloroso provoca dolore; nell’iperalgesia uno stimolo normalmente doloroso produce una risposta aumentata. Queste parole non identificano da sole la sede o la causa del cambiamento. Una componente periferica e una centrale possono contribuire allo stesso quadro; la presenza di allodinia non basta a dimostrare una lesione del sistema somatosensoriale e quindi a classificare automaticamente il dolore come neuropatico.\n\nLa distinzione evita un salto logico frequente: un tracciato neuronale amplificato, un’esperienza dolorosa e una diagnosi non sono tre misure intercambiabili. Negli esperimenti si confrontano ingressi e risposte nervose definiti; nella persona la sensibilizzazione viene inferita indirettamente nel contesto della valutazione. Il modello aiuta a comprendere come un oppioide possa ridurre il rilascio o l’eccitabilità spinale, ma non dimostra che eliminare un singolo segnale risolva necessariamente l’intera esperienza dolorosa."
    },
    {
      "id": "recettori",
      "title": "μ, δ, κ e NOP: una famiglia, funzioni distribuite",
      "refs": [
        "K",
        "R",
        "IUPHAR"
      ],
      "text": "I principali recettori oppioidi classici sono μ, δ e κ, indicati anche come MOR, DOR e KOR. Sono recettori a sette segmenti transmembrana accoppiati prevalentemente a proteine Gi/o. I rispettivi geni sono OPRM1, OPRD1 e OPRK1. Condividere una famiglia di trasduzione non significa occupare gli stessi neuroni o produrre gli stessi effetti di organismo.\n\nMOR è centrale per l’analgesia di molti farmaci usati clinicamente e contribuisce anche a effetti respiratori, intestinali e di rinforzo. DOR e KOR partecipano alla modulazione del dolore e ad altre risposte; le associazioni riportate nei modelli sperimentali non vanno trasformate in una tabella che predica rigidamente il comportamento di una persona.\n\nLe vecchie suddivisioni μ1 e μ2 non devono essere presentate come due geni separati, uno dedicato soltanto all’analgesia e l’altro soltanto alla depressione respiratoria. Anche sigma, presente in alcune classificazioni storiche, non appartiene alla famiglia dei recettori oppioidi GPCR. Distinguere nomenclatura storica, proteina identificata e funzione sperimentale evita errori che si propagherebbero poi alla lettura dei farmaci."
    },
    {
      "id": "peptidi",
      "title": "Peptidi endogeni e nocicettina: selettività non significa esclusività",
      "refs": [
        "K",
        "R",
        "IUPHAR-NOP"
      ],
      "text": "Encefaline, β-endorfina e dinorfine sono ligandi peptidici endogeni. Vengono prodotti attraverso precursori proteici e partecipano alla comunicazione fra cellule. Le loro preferenze recettoriali aiutano a distinguere sistemi, ma non corrispondono a un abbinamento esclusivo di una molecola con un solo recettore. Una freccia in una mappa didattica esprime una relazione selezionata, non tutte le interazioni possibili.\n\nNOP, codificato da OPRL1, è un membro correlato della famiglia e ha come ligando endogeno nocicettina/orfanina FQ. La sua farmacologia si distingue da quella dei recettori classici: il naloxone non lo antagonizza con la stessa affinità con cui agisce sui recettori oppioidi classici. Gli effetti sul dolore possono cambiare con sede e condizioni sperimentali; il nome del peptide non permette di dedurre un’unica azione sempre pronocicettiva.\n\nL’esistenza di questi sistemi endogeni non significa che il dolore cronico sia sempre una carenza di oppioidi naturali da sostituire. Un farmaco esogeno può raggiungere sedi e mantenere un’esposizione differenti rispetto al rilascio locale di un peptide. Questa differenza contribuisce a spiegare perché l’azione terapeutica e gli effetti indesiderati possano comparire insieme."
    },
    {
      "id": "gio",
      "title": "Gi/o: tre conseguenze da seguire separatamente",
      "refs": [
        "K",
        "R",
        "CFI"
      ],
      "text": "Quando un agonista stabilizza una conformazione attiva del recettore, questo favorisce l’attivazione della proteina G. Le subunità possono regolare effettori differenti. La componente Gαi riduce l’attività dell’adenilato ciclasi e quindi la produzione di cAMP; la componente Gβγ può modulare direttamente canali ionici. Non è necessario far passare ogni effetto sui canali attraverso una catena obbligatoria cAMP → canale.\n\nNei terminali presinaptici l’inibizione di canali del calcio voltaggio-dipendenti riduce il calcio disponibile per l’esocitosi. In altri compartimenti, l’apertura di canali del potassio regolati da proteine G favorisce una conduttanza che può iperpolarizzare la membrana e ridurre l’eccitabilità. L’effetto dipende dai canali espressi e dal loro stato: un GPCR non è esso stesso un poro per calcio o potassio.\n\nIl risultato cellulare tipico è inibitorio. Il risultato della rete, invece, dipende da quale cellula viene inibita. Se si riduce l’attività di un neurone che normalmente frena un altro neurone, quest’ultimo può diventare più attivo. La stessa logica molecolare può quindi generare conseguenze di circuito apparentemente opposte.",
      "formula": "Recettore Gi/o → adenilato ciclasi ↓; Ca²⁺ presinaptico ↓; conduttanza K⁺ ↑. Le vie procedono in parallelo, secondo il contesto cellulare."
    },
    {
      "id": "spinale",
      "title": "Analgesia spinale: meno rilascio e minore eccitabilità",
      "refs": [
        "K",
        "R"
      ],
      "text": "Nel corno dorsale un oppioide può agire sulla terminazione della fibra afferente e sulla cellula che riceve il segnale. Il versante presinaptico riguarda soprattutto la probabilità di liberazione del neurotrasmettitore: meno ingresso di calcio significa, in condizioni appropriate, meno fusione di vescicole. Il versante postsinaptico riguarda la facilità con cui la cellula risponde agli ingressi e genera attività elettrica.\n\nQuesta distinzione permette di interpretare il disegno della sinapsi senza confondere contenuto delle vescicole, quantità liberata e risposta della cellula ricevente. Un terminale può ancora contenere trasmettitore mentre ne libera meno. Una cellula postsinaptica può ricevere un segnale ma trovarsi in condizioni che rendono meno probabile il raggiungimento della soglia.\n\nL’analgesia non richiede di spegnere ogni neurone sensitivo. Rappresenta una modificazione della trasmissione e della sua elaborazione. Il modello spinale isola una componente importante, ma non esaurisce gli effetti sovraspinali, affettivi o periferici, né permette di prevedere quanta riduzione del dolore otterrà una determinata persona."
    },
    {
      "id": "disinibizione",
      "title": "Disinibizione: togliere un freno può rafforzare il controllo discendente",
      "refs": [
        "K",
        "R"
      ],
      "text": "Nei circuiti che comprendono la sostanza grigia periacqueduttale e strutture bulbari, gli oppioidi possono ridurre l’attività di interneuroni inibitori. Quando un interneurone GABAergico esercita un’inibizione tonica su un neurone di uscita, ridurne il rilascio di GABA può liberare quel neurone dal freno. Si parla di disinibizione, non di un improvviso cambiamento del recettore da Gi/o a Gs.\n\nIl neurone disinibito partecipa a reti che modulano la trasmissione spinale. Noradrenalina, serotonina e altri mediatori intervengono in queste reti con effetti dipendenti da recettore e sede. Perciò non ogni aumento di serotonina equivale automaticamente a maggiore analgesia, e un diagramma con una sola freccia discendente rappresenta soltanto una parte del sistema.\n\nLa disinibizione ricompare anche nello studio dei circuiti di ricompensa, ma non rende identiche le due reti. È una regola di organizzazione: inibire una cellula inibitoria può aumentare l’attività di una cellula a valle. Per sapere se il risultato riguarda modulazione del dolore, motivazione o un’altra funzione bisogna specificare l’anatomia e il circuito."
    },
    {
      "id": "esplora",
      "title": "Esplora il passaggio modificato",
      "refs": [
        "K",
        "R",
        "CFI"
      ],
      "text": "Il laboratorio propone quattro viste dello stesso ragionamento: il legame a un recettore Gi/o, la terminazione sensitiva nel corno dorsale, la cellula postsinaptica e la disinibizione di un circuito discendente. Cambiando vista si segue un passaggio diverso, senza attribuire a una sola cellula tutte le funzioni degli oppioidi.\n\nNella vista del terminale, la diminuzione del calcio riguarda il rilascio di trasmettitore. Nella vista postsinaptica, la maggiore conduttanza al potassio riguarda l’eccitabilità. Nella disinibizione, la diminuzione del GABA toglie un freno al neurone di uscita. Il colore segnala il processo selezionato; non misura un beneficio maggiore o una dose più efficace.\n\nLa domanda da portare da una vista all’altra è: quale cellula esprime il recettore e che cosa faceva prima di essere inibita? Le frecce sono qualitative e non rappresentano una previsione del dolore, della respirazione o della sicurezza clinica. Per leggere un farmaco reale occorre aggiungere distribuzione, esposizione e contesto d’uso.",
      "opioidLab": true
    },
    {
      "id": "affinita",
      "title": "Affinità, potenza ed efficacia: tre domande diverse",
      "refs": [
        "K",
        "R",
        "SFI"
      ],
      "text": "L’affinità descrive quanto favorevolmente un ligando si lega a un bersaglio nelle condizioni considerate. La potenza confronta la concentrazione o dose necessaria a ottenere un effetto definito. L’efficacia descrive la capacità di produrre una risposta nel sistema studiato. Una molecola può avere affinità elevata e, una volta legata, attivare il sistema meno di un’altra: è proprio ciò che rende istruttivo il caso degli agonisti parziali.\n\nUn agonista parziale non è quindi semplicemente un farmaco poco potente. Inoltre il massimo osservato dipende da densità recettoriale, riserva di recettori, efficienza di accoppiamento ed esito misurato. Un esperimento di attivazione recettoriale e una valutazione clinica dell’analgesia non hanno necessariamente lo stesso massimo di riferimento.\n\nPer questo la maggiore potenza del fentanyl rispetto alla morfina non dimostra che esista un livello universale di analgesia raggiungibile soltanto dal primo. Non permette nemmeno di ricavare un rapporto di sicurezza. Le dosi dei medicinali dipendono da vie, formulazioni, esposizione e paziente; una curva didattica non sostituisce una conversione clinica verificata."
    },
    {
      "id": "buprenorfina",
      "title": "Buprenorfina: alta affinità e agonismo parziale possono coesistere",
      "refs": [
        "R",
        "BUP"
      ],
      "text": "La buprenorfina illustra la differenza fra occupare e attivare. Ha alta affinità per MOR, si dissocia lentamente e si comporta da agonista parziale. In presenza di un agonista con maggiore efficacia può occupare recettori riducendo l’attivazione complessiva; ciò aiuta a comprendere il rischio di astinenza precipitata in alcune condizioni di inizio del trattamento. Non è una proprietà riassumibile con l’etichetta di oppioide debole.\n\nNel prodotto sublinguale consultato, destinato al trattamento della dipendenza da oppioidi, sono descritti effetti tetto per alcuni parametri studiati. Questo non garantisce assenza di depressione respiratoria. Sono riportati eventi fatali, in particolare in associazione con benzodiazepine o altri depressori, e rischi nelle persone non tolleranti. L’agonismo parziale non rende innocua un’esposizione accidentale.\n\nIl tempo di permanenza sul recettore e la concentrazione plasmatica sono grandezze diverse. La formulazione sublinguale non deve essere descritta con un’emivita universale attribuita a tutte le preparazioni di buprenorfina. Lo stesso principio attivo può essere impiegato in prodotti, vie e contesti differenti: i relativi schemi non sono intercambiabili."
    },
    {
      "id": "morfina",
      "title": "Morfina: il metabolismo non coincide sempre con l’inattivazione",
      "refs": [
        "K",
        "MOR"
      ],
      "text": "La morfina viene descritta clinicamente come agonista pieno, con preferenza relativa per MOR. L’assenza di un tetto analgesico convenzionale non equivale a una possibilità illimitata di aumentare l’esposizione: gli effetti indesiderati, soprattutto respiratori e sul sistema nervoso centrale, limitano l’impiego.\n\nLa glucuronazione produce principalmente M3G e M6G. M6G conserva attività analgesica, mentre M3G non ha un’attività analgesica significativa. In insufficienza renale possono accumularsi metaboliti e può modificarsi l’esposizione alla morfina. Il ragionamento farmacocinetico deve quindi considerare sia il composto iniziale sia ciò che viene formato e successivamente eliminato.\n\nQuesto esempio cambia il modo di leggere una scheda: un farmaco metabolizzato nel fegato non è automaticamente indipendente dalla funzione renale. Inoltre una concentrazione del solo progenitore non descrive sempre tutta la componente attiva. I rapporti fra formazione dei metaboliti, distribuzione ed eliminazione aiutano a spiegare perché la stessa identità chimica non produca un profilo temporale identico in tutte le persone."
    },
    {
      "id": "codeina",
      "title": "Codeina e tramadolo: il collegamento con CYP2D6",
      "refs": [
        "K",
        "CPIC-OP"
      ],
      "text": "Per la codeina, la conversione a morfina mediata da CYP2D6 contribuisce in modo importante all’effetto analgesico. Il tramadolo ha anche attività propria e viene trasformato in O-desmetiltramadolo, spesso chiamato M1, dotato di maggiore attività su MOR rispetto al progenitore. Non è quindi corretto ragionare sui due composti come se fossero semplici copie diluite della morfina.\n\nLa formazione di un metabolita dipende dall’attività enzimatica, che può essere influenzata da varianti genetiche e da altri medicinali. La linea guida CPIC distingue fenotipi metabolici e farmaci specifici: una minore o maggiore capacità di formazione non ha le stesse conseguenze per ogni substrato. Il genotipo non è una misura diretta del dolore o del rischio individuale.\n\nUna percentuale media di conversione non si traduce in una percentuale fissa di analgesia, tossicità o sicurezza. Il ragionamento corretto segue la specie attiva: quanto progenitore arriva, quanto metabolita si forma, quanto persiste e quali bersagli vengono attivati. Per interpretazioni prescrittive occorrono le raccomandazioni specifiche e il contesto clinico, trattati separatamente dalla mappa didattica."
    },
    {
      "id": "monoamine",
      "title": "Tramadolo e tapentadolo: non confondere due meccanismi misti",
      "refs": [
        "K",
        "CFI",
        "PALEXIA"
      ],
      "text": "Nel tramadolo l’azione oppioide, comprendente il contributo del metabolita M1, si accompagna a un’inibizione della ricaptazione di monoamine. Il tapentadolo combina invece un’azione diretta su MOR con l’inibizione della ricaptazione della noradrenalina; nel prodotto consultato l’attività non richiede un metabolita farmacologicamente attivo. Le due molecole non vanno appiattite in un’unica sequenza di attivazione.\n\nIl collegamento con i sistemi discendenti aiuta a comprendere perché un bersaglio monoaminergico possa contribuire all’analgesia. Non rende il tapentadolo un antidepressivo SNRI e non implica che tutti gli antidepressivi siano agonisti oppioidi. Un risultato di legame o trasporto ottenuto in vitro deve mantenere il proprio contesto sperimentale.\n\nL’associazione con medicinali serotoninergici richiede attenzione: per tapentadolo sono segnalati sindrome serotoninergica e rischio di convulsioni in contesti di interazione. La componente noradrenergica non permette di escludere questi rischi. Il confronto fra i due farmaci serve a riconoscere progenitore, metabolita e trasportatore; non costituisce una classifica di efficacia o un’indicazione a combinarli."
    },
    {
      "id": "leggere-dati",
      "title": "Leggere le tabelle sperimentali senza trasformarle in dosi",
      "refs": [
        "CFI",
        "R",
        "CPIC-OP",
        "PALEXIA"
      ],
      "text": "Le tabelle su tramadolo e tapentadolo riuniscono talvolta misure di legame recettoriale, inibizione del trasporto e variazioni di neurotrasmettitori in modelli animali. Prima di confrontare due numeri occorre identificare che cosa è stato misurato: un’affinità di legame, un effetto sul trasportatore o una risposta nell’organismo. Le unità possono apparire simili anche quando la domanda sperimentale è diversa.\n\nUn valore di Ki più basso può indicare maggiore affinità nel saggio di legame considerato; non misura direttamente l’analgesia e non stabilisce una dose clinicamente equivalente. Anche specie, preparazione sperimentale e condizioni del saggio modificano il significato del confronto. Un aumento della noradrenalina extracellulare misurato in un animale non è la percentuale di miglioramento del dolore attesa in una persona. Le sigle vanno lette nella legenda: dato non determinato e attività non rilevata nelle condizioni del saggio sono informazioni differenti.\n\nVa poi identificata la specie chimica studiata. Per il tramadolo, progenitore, enantiomeri e metabolita M1 non sono intercambiabili nella lettura dei bersagli; la formazione del metabolita introduce inoltre il contributo di CYP2D6. Per tapentadolo si ragiona sul composto attivo e sulla combinazione di azione MOR e noradrenergica. Il passaggio alla clinica aggiunge esposizione, distribuzione, esiti e sicurezza: la tabella aiuta a formulare un’ipotesi, mentre efficacia comparativa e raccomandazioni richiedono evidenze riferite a un contesto definito."
    },
    {
      "id": "via-neurassiale",
      "title": "Via neurassiale: distribuzione nel liquor e rischio tardivo",
      "refs": [
        "K",
        "R",
        "MOR-NEUR"
      ],
      "text": "La via di somministrazione modifica anche il compartimento dal quale il farmaco raggiunge i recettori. Con la somministrazione intratecale il punto di ingresso è il liquido cerebrospinale; con quella epidurale il farmaco si trova inizialmente fuori dalla dura madre e deve distribuirsi verso i siti d’azione. Le due vie non sono sinonimi. Sono differenti anche dalla somministrazione sistemica, nella quale il principio attivo raggiunge il sistema nervoso a partire dal sangue.\n\nIl collegamento con la sezione sull’analgesia spinale è diretto: i recettori oppioidi presenti sui terminali afferenti e sui neuroni del corno dorsale possono modulare il trasferimento del segnale nocicettivo. Avvicinare il farmaco a questi siti cambia le condizioni di accesso. Non cambia però l’identità del recettore e non crea un compartimento chiuso, separato dal resto del sistema nervoso. La selettività anatomica dell’esposizione va distinta dalla selettività molecolare del ligando.\n\nPer la morfina neurassiale, il documento USA di Duramorph descrive depressione respiratoria sia precoce sia ritardata. La circolazione del liquor può portare il farmaco anche verso il tronco encefalico. La sequenza didattica è quindi: ingresso in un compartimento, distribuzione nel tempo, raggiungimento di circuiti differenti. L’analgesia iniziale o l’assenza immediata di marcata sedazione non dimostrano che ogni effetto successivo sia già escluso.\n\nIl prodotto consultato richiede personale esperto e osservazione in un ambiente attrezzato. Anche la formulazione conta: Duramorph è presentato come soluzione senza conservanti, ma questa caratteristica non rende qualsiasi soluzione iniettabile adatta alla via neurassiale. Il principio generale è leggere insieme principio attivo, eccipienti, via autorizzata e contesto assistenziale. Questi passaggi spiegano perché l’impiego vicino al midollo non possa essere descritto come una garanzia generale di minore rischio respiratorio."
    },
    {
      "id": "formulazioni",
      "title": "Fentanyl: la via di somministrazione cambia la lettura del tempo",
      "refs": [
        "K",
        "R",
        "FENT"
      ],
      "text": "La rapidità con cui un effetto compare dipende da quanto velocemente il farmaco raggiunge il sito d’azione. La durata dipende anche da distribuzione, rilascio dalla formulazione ed eliminazione. Per questo la sola parola fentanyl non basta a descrivere un profilo temporale: una preparazione iniettabile e un cerotto non consegnano il principio attivo nello stesso modo.\n\nNel sistema transdermico il percorso comprende più passaggi: uscita dalla matrice, attraversamento della cute e ingresso nella circolazione. Si forma anche un deposito cutaneo dal quale il fentanyl può continuare a essere assorbito dopo la rimozione. Togliere il sistema interrompe una sorgente di rilascio, ma non elimina istantaneamente il farmaco già presente nella cute e nell’organismo. Per comprendere la discesa delle concentrazioni occorre quindi seguire insieme l’ingresso residuo e l’eliminazione.\n\nQuesto distingue due domande spesso confuse: quanto rapidamente viene eliminata una molecola già in circolo e quanto a lungo continua ad arrivarne una nuova quantità. La curva osservata dopo una formulazione prolungata contiene entrambe le informazioni. Un singolo valore di emivita, trasferito senza considerare via e formulazione, può nascondere proprio il passaggio che determina la persistenza dell’esposizione.\n\nPer Durogesic DTrans il documento britannico consultato segnala che la via transdermica è generalmente sconsigliata nei pazienti non già tolleranti agli oppioidi. Il prodotto è controindicato nel dolore acuto o postoperatorio: non è intercambiabile con una preparazione progettata per un rapido intervento. L’aumento della temperatura cutanea e le fonti esterne di calore possono aumentare l’assorbimento e il rischio di tossicità. Il calore modifica l’esposizione, non rende il recettore più selettivo per il circuito doloroso.\n\nL’esempio mostra che una formulazione prolungata non è un modo universalmente più sicuro di utilizzare una molecola potente. Va compresa nel proprio contesto autorizzativo e nelle sue precauzioni. Qui non vengono proposte equivalenze tra prodotti né conversioni tra milligrammi, microgrammi e velocità di rilascio."
    },
    {
      "id": "remifentanil",
      "title": "Remifentanil: quando la durata dipende dall’idrolisi",
      "refs": [
        "K",
        "REMI"
      ],
      "text": "Il remifentanil permette di separare un’altra volta bersaglio e tempo. È un agonista μ, ma la rapidità con cui termina l’effetto dipende anche dalla sua inattivazione: il legame estere viene idrolizzato da esterasi aspecifiche presenti nel sangue e nei tessuti. Non si tratta della colinesterasi plasmatica. Confondere questi enzimi porterebbe a trasferire al remifentanil spiegazioni farmacocinetiche appartenenti ad altri farmaci.\n\nLa concentrazione nel sito d’azione e quella plasmatica restano grandezze distinte. La rapida riduzione dell’esposizione al composto attivo può rendere breve anche l’analgesia dopo l’interruzione. Nel contesto anestesiologico ciò richiede di prevedere come verrà assicurato il controllo del dolore successivo: una rapida scomparsa non costituisce, da sola, un vantaggio per ogni obiettivo terapeutico.\n\nBreve durata non significa innocuità durante l’esposizione. Sono possibili depressione respiratoria e altri effetti oppioidi, e l’impiego richiede un ambiente con monitoraggio e capacità di assistenza. Il confronto con il fentanyl transdermico chiarisce la regola: condividere un bersaglio non permette di trasferire da un prodotto all’altro tempi, vie o modalità d’uso. Qui interessa il rapporto fra struttura, metabolismo ed effetto, senza ricavare schemi di somministrazione."
    },
    {
      "id": "respirazione",
      "title": "Respirazione e sedazione: effetti collegati, ma non sinonimi",
      "refs": [
        "K",
        "R",
        "MOR",
        "BUP"
      ],
      "text": "Gli oppioidi possono ridurre l’attività dei sistemi che sostengono la ventilazione e la loro risposta all’aumento della CO₂. La depressione respiratoria riguarda dunque il controllo e l’efficacia della respirazione, non soltanto il grado di sonnolenza. Una persona può apparire sedata per molte cause; il rischio respiratorio richiede una valutazione specifica.\n\nPer seguire il meccanismo occorre distinguere la generazione del ritmo respiratorio dalla risposta che adegua la ventilazione alle necessità dell’organismo. Entrambe dipendono da reti neuronali del tronco encefalico. Il complesso pre-Bötzinger, richiamato dal testo, è un nodo della generazione del ritmo, non un unico comando isolato che spieghi ogni effetto. Ridurre l’eccitabilità e la trasmissione nei circuiti respiratori può compromettere frequenza, regolarità e ventilazione complessiva: applicare lo schema Gi/o significa chiedersi quale rete viene inibita, non limitarsi a riconoscere il recettore.\n\nNormalmente un aumento della CO₂ contribuisce a stimolare la ventilazione. La morfina attenua questa risposta; la ritenzione di CO₂ può inoltre aggravare la sedazione. Ne deriva un’interazione fra controllo respiratorio e stato di coscienza, non un’equivalenza fra i due. Anche la pupilla fornisce un’informazione diversa: la miosi è compatibile con un effetto oppioide, ma non è specifica e può mancare, anche nelle intossicazioni complicate da ipossia. Il diametro pupillare non misura la ventilazione.\n\nIl medesimo bersaglio che contribuisce all’analgesia può intervenire in circuiti differenti. La presenza di dolore non impedisce al farmaco di agire sui sistemi respiratori o di ricompensa. Non esiste un interruttore che destini tutta la molecola al circuito doloroso finché il paziente soffre.\n\nLa contemporanea esposizione a benzodiazepine, alcol o altri depressori del sistema nervoso centrale può aumentare sedazione e depressione respiratoria. Il rischio non si risolve contando soltanto quanti farmaci appartengono alla stessa classe. Anche la tolleranza a un effetto non garantisce protezione completa da un altro, soprattutto quando cambiano esposizione, associazioni o condizioni della persona."
    },
    {
      "id": "prurito-meccanismi",
      "title": "Prurito: distinguere mediatori periferici e circuiti spinali",
      "refs": [
        "R",
        "MOR",
        "MC-HUMAN",
        "ITCH-SPINAL"
      ],
      "text": "Un effetto indesiderato non identifica da solo un meccanismo. Il prurito associato agli oppioidi permette di collegare farmacologia recettoriale, sede di esposizione e funzione della rete. Nella documentazione della morfina, prurito e arrossamento compaiono fra le manifestazioni associate al rilascio di istamina e/o alla vasodilatazione periferica. Questo descrive una possibilità, non dimostra che ogni episodio abbia la stessa origine.\n\nUn esperimento su mastociti umani isolati ha osservato che la morfina stimolava il rilascio di istamina e triptasi nelle cellule cutanee, senza la stessa risposta nelle preparazioni polmonari e cardiache esaminate. Lo studio collega questa eterogeneità all’espressione e alla funzione del recettore MRGPRX2, distinto dai recettori oppioidi classici. Il risultato mostra perché il tessuto e il tipo cellulare contano. Le concentrazioni sperimentali non diventano dosi terapeutiche, né il comportamento di cellule isolate consente di prevedere il sintomo in una singola persona.\n\nEsiste anche un livello neuronale. Uno studio sulla morfina somministrata per via neurassiale ha identificato, nel topo, un meccanismo di disinibizione che coinvolge neuroni spinali della dinorfina; in quel modello il prurito dipendeva dai neuroni e non dai mastociti. È un’applicazione dello stesso principio discusso nel laboratorio: inibire un elemento che frena una via può aumentare l’uscita della rete. La somiglianza del principio non rende identici il circuito del prurito e quello discendente del dolore.\n\nI due livelli non vanno fusi in una spiegazione universale. Molecola, via di somministrazione e distretto modificano le domande da porre. Dal solo prurito non si può concludere né che esista un’allergia immunologica né che una reazione sia innocua. Gli studi meccanicistici aiutano a interpretare la diversità degli effetti; non stabiliscono da soli la scelta di un trattamento o l’efficacia degli antistaminici in ogni situazione."
    },
    {
      "id": "intestino",
      "title": "Intestino, pupilla e altri distretti: seguire la funzione",
      "refs": [
        "K",
        "CFI"
      ],
      "text": "Nel sistema nervoso enterico l’attivazione oppioide modifica la coordinazione della motilità e delle secrezioni. La stipsi non va spiegata come una paralisi uniforme di ogni muscolo: possono ridursi le contrazioni propulsive mentre aumenta il tono in alcuni tratti e sfinteri. Il risultato riguarda il transito e può persistere anche quando altri effetti diventano meno evidenti con l’esposizione ripetuta.\n\nLa miosi, la nausea, il vomito, il prurito e la ritenzione urinaria illustrano altre sedi d’azione. Non ogni effetto deve essere ricondotto alla stessa catena; per esempio, le differenze fra molecole e il contributo di meccanismi diversi contano nell’interpretazione del prurito e delle risposte vascolari. Un elenco di effetti diventa più utile quando si collega ogni voce a una funzione e a un distretto.\n\nLa possibilità di limitare l’azione di un antagonista soprattutto alla periferia mostra l’importanza della distribuzione. Il progetto farmacologico è separare il blocco intestinale dall’analgesia centrale; non autorizza però a promettere assenza assoluta di astinenza o di effetti gastrointestinali per ogni prodotto. Le due sezioni successive distinguono distribuzione periferica e primo passaggio, collegando il meccanismo alle precauzioni dei prodotti consultati."
    },
    {
      "id": "antagonismo-periferico",
      "title": "Antagonismo periferico: cambiare dove arriva il farmaco",
      "refs": [
        "CFI",
        "NALOPEG",
        "NALDE"
      ],
      "text": "Gli antagonisti dei recettori μ ad azione prevalentemente periferica, spesso indicati come PAMORA, mirano a contrastare gli effetti intestinali degli oppioidi limitando l’antagonismo centrale. Il naloxegol deriva dal naloxone mediante aggiunta di una catena di polietilenglicole; la permeabilità passiva ridotta e il trasporto di efflusso tramite P-glicoproteina contribuiscono alla scarsa penetrazione nel sistema nervoso centrale. La naldemedina deriva invece dal naltrexone: una catena laterale ne modifica dimensioni e proprietà polari, mentre interviene anche la P-glicoproteina.\n\nLa selettività funzionale riguarda quindi soprattutto il compartimento raggiunto. Non significa che il farmaco riconosca un recettore intestinale completamente diverso da quello cerebrale. Questo è un esempio concreto di come distribuzione e trasporto possano separare parzialmente due effetti che coinvolgono la stessa famiglia recettoriale.\n\nLa separazione non è assoluta. I documenti dei prodotti consultati richiamano possibili sintomi d’astinenza e particolare cautela quando la barriera ematoencefalica è compromessa. Un’ostruzione gastrointestinale nota o sospetta costituisce una controindicazione; sono descritti anche rischi di perforazione in determinate condizioni. Dolore addominale e diarrea non vanno interpretati automaticamente come prova di efficacia. Il meccanismo aiuta a capire il trattamento della stipsi da oppioidi, ma non rende intercambiabili i prodotti né consente di usarli senza valutarne indicazione, interazioni e precauzioni."
    },
    {
      "id": "associazioni-naloxone",
      "title": "Due associazioni con naloxone, due obiettivi differenti",
      "refs": [
        "CFI",
        "OXYNAL",
        "SUBOX"
      ],
      "text": "Nell’associazione orale a rilascio prolungato ossicodone/naloxone, l’ossicodone fornisce l’azione analgesica mentre il naloxone contrasta gli effetti oppioidi sull’intestino. Dopo assunzione orale il naloxone subisce un marcato metabolismo di primo passaggio, che ne limita la disponibilità sistemica. Il principio di separazione è diverso da quello dei PAMORA: non si attribuisce al naloxone una proprietà intrinseca di esclusione dal cervello.\n\nQuesta spiegazione dipende dalle condizioni farmacocinetiche. Il documento britannico del prodotto consultato controindica l’associazione nell’insufficienza epatica moderata o grave; la presenza dell’antagonista non elimina i rischi dell’agonista, compresa la depressione respiratoria. Non è quindi un antidoto incorporato capace di garantire protezione dal sovradosaggio.\n\nBuprenorfina/naloxone ha un altro impiego: il trattamento del disturbo da uso di oppioidi all’interno di un percorso di assistenza. La buprenorfina è l’agonista parziale e il naloxone è l’antagonista; quest’ultimo contribuisce a scoraggiare l’uso del prodotto per una via inappropriata. La formulazione e la via previste sono parte del suo funzionamento. Ritrovare lo stesso antagonista in entrambe le associazioni non autorizza a scambiare indicazioni o modalità d’impiego: prima si identifica quale problema risolve ciascun componente, poi si considera come viene reso disponibile."
    },
    {
      "id": "metadone",
      "title": "Metadone: accumulo e sicurezza non si leggono dalla sola analgesia",
      "refs": [
        "K",
        "METH"
      ],
      "text": "Il metadone è un agonista oppioide impiegato in contesti clinici differenti. La sua eliminazione relativamente lenta e variabile rende importante distinguere la durata dell’analgesia dall’andamento dell’accumulo. Ripetere la somministrazione prima che sia stata eliminata l’esposizione precedente può aumentare la quantità presente nell’organismo, anche quando l’effetto soggettivo sembra meno evidente.\n\nIl documento britannico consultato richiama il rischio di depressione respiratoria e di prolungamento del QT, comprese torsioni di punta. Alterazioni elettrolitiche, patologie e associazioni farmacologiche possono modificare il rischio. La sicurezza cardiaca non si deduce dal fatto che il bersaglio principale venga descritto come recettoriale.\n\nL’esempio collega tre capitoli della farmacologia: agonismo, farmacocinetica delle dosi ripetute e interazioni. Non permette di stabilire una preferenza universale rispetto alla buprenorfina, né di trasferire automaticamente un regime usato nel disturbo da uso di oppioidi alla terapia del dolore. Indicazione, formulazione e obiettivo del trattamento restano parte dell’identità del medicinale utilizzato."
    },
    {
      "id": "tolleranza",
      "title": "Tolleranza: adattamenti di recettore, cellula e rete",
      "refs": [
        "K",
        "R",
        "CFI"
      ],
      "text": "La tolleranza è una riduzione della risposta osservata dopo esposizione ripetuta, a condizioni comparabili. Può coinvolgere desensibilizzazione recettoriale, modificazioni del traffico di membrana, adattamenti intracellulari e cambiamenti di circuito. L’internalizzazione non è semplicemente la scomparsa definitiva del recettore: può essere seguita da riciclo e risensibilizzazione oppure da altri destini.\n\nNon tutti gli effetti sviluppano tolleranza allo stesso modo o con lo stesso andamento. Analgesia, sedazione, respirazione, pupilla e funzione intestinale non possono essere rappresentate da un unico numero. Neppure l’aumento del dolore dimostra da solo che il recettore sia diventato meno sensibile: possono cambiare patologia, esposizione, aderenza e altri fattori.\n\nLa tolleranza crociata fra oppioidi può essere incompleta. Questo contribuisce alla complessità del passaggio fra molecole e impedisce di considerare una tabella di equivalenza come una garanzia individuale. La rotazione non consiste semplicemente nel lasciare riposare una serie di recettori e usarne un’altra. In questo capitolo si studia il principio, senza costruire conversioni o istruzioni di aumento della dose."
    },
    {
      "id": "tolleranza-crociata",
      "title": "Tolleranza crociata: perché un’equivalenza non è una sostituzione",
      "refs": [
        "CFI",
        "K",
        "CDC2022"
      ],
      "text": "La tolleranza acquisita durante l’esposizione a un oppioide può estendersi solo in parte alla risposta a un altro. Questo non richiede di immaginare recettori completamente separati per ogni molecola: proprietà del ligando, adattamenti cellulari e farmacocinetica contribuiscono a risposte differenti. Le ipotesi sui sottotipi e sulle varianti recettoriali non forniscono, da sole, una previsione affidabile della risposta individuale alla rotazione.\n\nLe quantità espresse in equivalenti di morfina sono stime convenzionali, utili entro finalità e limiti definiti. La guida CDC2022 avverte di non usarle per calcolare direttamente la dose di un nuovo oppioide quando si cambia trattamento: tolleranza crociata incompleta e variabilità farmacocinetica possono rendere rischiosa una sostituzione apparentemente equivalente. Le tabelle storiche non diventano istruzioni attuali solo perché riportano un numero preciso.\n\nIl passaggio fra molecole richiede pertanto una valutazione clinica specifica, con attenzione a formulazione, via, esposizione residua e andamento degli effetti. Il metadone rende evidente la difficoltà di separare analgesia, accumulo e depressione respiratoria. Per lo studio, la domanda utile è quale proprietà cambia nel passaggio; il capitolo non propone fattori di conversione, percentuali di riduzione o un calcolatore prescrittivo."
    },
    {
      "id": "iperalgesia",
      "title": "Tolleranza e iperalgesia indotta da oppioidi non sono la stessa cosa",
      "refs": [
        "K"
      ],
      "text": "Nella tolleranza diminuisce un effetto farmacologico rispetto a quello atteso a parità di condizioni. Nell’iperalgesia indotta da oppioidi l’esposizione può contribuire a un aumento della sensibilità dolorosa attraverso adattamenti pronocicettivi. I fenomeni possono intrecciarsi, ma non descrivono lo stesso passaggio causale.\n\nUna crescita del dolore durante un trattamento ha molte spiegazioni possibili. La malattia può progredire, può cambiare il tipo di dolore, l’esposizione può essere insufficiente o variabile, oppure possono comparire processi di sensibilizzazione. Nessuna di queste possibilità si identifica guardando soltanto la dose prescritta o una singola intensità riferita.\n\nIl valore didattico della distinzione è evitare un automatismo: meno sollievo non significa necessariamente che la soluzione sia aumentare l’agonista. Serve rivalutare il contesto. Il modello recettoriale spiega una parte della risposta, mentre la valutazione clinica deve ricostruire il decorso e le alternative. Non viene proposta una prova di aumento o riduzione autonoma della terapia per distinguere i due fenomeni."
    },
    {
      "id": "dipendenza",
      "title": "Dipendenza fisica, astinenza e disturbo da uso: separare i concetti",
      "refs": [
        "K",
        "OUD",
        "RECOVERY"
      ],
      "text": "La dipendenza fisica è un adattamento alla presenza del farmaco. Una sua riduzione rapida, sospensione o antagonizzazione può far emergere una sindrome d’astinenza. È un fenomeno fisiologico distinto dalla tolleranza, anche se spesso i due si accompagnano. Non si spiega interamente dicendo che l’organismo smette di produrre peptidi endogeni: intervengono adattamenti cellulari e di rete.\n\nIl disturbo da uso di oppioidi riguarda invece un insieme di comportamenti e conseguenze, con compromissione del controllo e persistenza dell’uso nonostante il danno. La sola presenza di tolleranza o dipendenza fisica durante una terapia non basta a identificarlo. Né l’astinenza, da sola, riassume motivazione, apprendimento, stress e contesto sociale che possono concorrere al disturbo.\n\nÈ una condizione trattabile e il recupero è possibile. Le risorse CDC consultate sostengono l’accesso a trattamenti efficaci e segnalano che la sola disintossicazione, senza un percorso adeguato, non costituisce un trattamento sufficiente del disturbo. Parlare di un destino inevitabile o di una condizione non gestibile clinicamente sarebbe quindi scorretto. Una spiegazione farmacologica deve mantenere precisione e rispetto per la persona."
    },
    {
      "id": "ricompensa-apprendimento",
      "title": "Ricompensa e apprendimento: dal segnale al comportamento",
      "refs": [
        "CFI",
        "K",
        "NIH-REC"
      ],
      "text": "Nei circuiti mesolimbici, proiezioni dopaminergiche dell’area tegmentale ventrale raggiungono il nucleo accumbens e partecipano a reti connesse con regioni corticali e limbiche. Gli oppioidi possono aumentare la trasmissione dopaminergica anche attraverso la riduzione di un controllo GABAergico. Ricompare la disinibizione già incontrata nelle vie del dolore, ma cambiano le cellule, le connessioni e la funzione della rete. Un recettore Gi/o non diventa eccitatorio perché il risultato finale è un aumento del segnale dopaminergico.\n\nLa dopamina contribuisce a motivazione, apprendimento e rinforzo: un comportamento diventa più probabile quando le sue conseguenze ne favoriscono la ripetizione. Questo processo non coincide con la sola intensità del piacere. Luoghi, persone e situazioni associati all’assunzione possono acquistare valore di richiamo; incontrarli nuovamente può riattivare il desiderio anche quando l’effetto immediato della sostanza è terminato. Memoria del contesto, valutazione emotiva e controllo dell’azione dipendono da reti distribuite: ridurli a un unico centro del piacere perde questa organizzazione.\n\nUn comportamento può essere rinforzato dall’ottenere un effetto gratificante oppure dall’attenuare uno stato spiacevole. Il secondo caso aiuta a comprendere il ruolo del sollievo dall’astinenza, ma non esaurisce il disturbo da uso. Apprendimento, stress, vulnerabilità biologica e condizioni sociali interagiscono; una singola esposizione o una modificazione recettoriale non determinano da sole l’esito della persona. Per studiare il circuito bisogna quindi tenere distinti evento acuto, adattamento e comportamento persistente."
    },
    {
      "id": "stabilizzazione",
      "title": "Trattamento del disturbo da uso: stabilizzare ha un significato preciso",
      "refs": [
        "CFI",
        "OUD",
        "SUBOX",
        "BUP",
        "METH"
      ],
      "text": "Nel disturbo da uso di oppioidi, impiegare un agonista in un percorso terapeutico può ridurre craving e astinenza e favorire una maggiore stabilità. Il metadone agisce come agonista pieno di MOR; la buprenorfina come agonista parziale ad alta affinità. Il razionale comprende un’esposizione controllata e un’azione sufficientemente persistente, insieme alla valutazione clinica. Non consiste nel riprodurre continuamente un picco euforizzante. Una curva didattica dello stato soggettivo non è una curva di concentrazione plasmatica.\n\nLa scelta del medicinale non si risolve confrontando due emivite o dichiarando una molecola sempre più sicura dell’altra. Contano tolleranza, interazioni, patologie, formulazione e possibilità di seguire il trattamento. La lenta dissociazione della buprenorfina non elimina il rischio respiratorio; l’accumulo del metadone richiede una lettura distinta dalla durata dell’analgesia. Il naltrexone segue una strategia diversa, antagonista: il suo avvio richiede condizioni appropriate per evitare astinenza precipitata. Questi principi spiegano perché i trattamenti non siano sostituibili attraverso un semplice rapporto fra dosi.\n\nIl risultato da perseguire è il recupero della salute e del funzionamento della persona. Nelle indicazioni CDC, i farmaci per il disturbo da uso sono associati a minore rischio di sovradosaggio e mortalità; la sola gestione dell’astinenza non è un trattamento sufficiente. Il supporto psicologico e sociale fa parte del percorso, ma la sua indisponibilità non dovrebbe ritardare l’accesso ai medicinali efficaci. Questa spiegazione chiarisce il razionale: scelta, avvio, durata e sospensione richiedono un piano individuale, senza ricavare un calendario di riduzione dalle tabelle del corso."
    },
    {
      "id": "antagonisti",
      "title": "Naloxone e naltrexone: stesso principio di blocco, contesti differenti",
      "refs": [
        "K",
        "R",
        "NARCAN",
        "OUD"
      ],
      "text": "Un antagonista può occupare il recettore senza produrre l’attivazione dell’agonista che contrasta. Il risultato dipende da concentrazioni, affinità, accesso al sito e tempi. Bloccare rapidamente un segnale in una persona fisicamente dipendente può precipitare astinenza; questo è distinto dalla capacità dell’antagonista di ridurre un effetto respiratorio pericoloso.\n\nPer il naloxone nasale, il documento consultato prevede il trattamento immediato di un sovradosaggio noto o sospetto. Il sospetto clinico può dunque giustificare l’intervento d’emergenza senza attendere l’identificazione tossicologica della sostanza. Il farmaco non sostituisce l’assistenza urgente e il supporto della respirazione. Gli effetti oppioidi possono ricomparire quando l’antagonista si esaurisce prima dell’agonista; alcune situazioni, compresa l’esposizione a buprenorfina, possono richiedere una gestione più complessa.\n\nIl naltrexone trova impiego in percorsi programmati per il disturbo da uso, secondo condizioni specifiche. Non deve essere presentato come un sostituto intercambiabile del naloxone nell’emergenza. Il collegamento fra le due molecole riguarda il bersaglio antagonizzato; tempi, formulazioni e obiettivi del trattamento restano differenti."
    },
    {
      "id": "oltre-mor",
      "title": "Oltre MOR: bersagli diversi lungo la stessa via del dolore",
      "refs": [
        "CFI",
        "PREG-UK",
        "NICE173"
      ],
      "text": "La riduzione della trasmissione nocicettiva non identifica da sola un meccanismo oppioide. Lungo la stessa via si possono modificare la generazione del potenziale d’azione, la liberazione di trasmettitore o la modulazione discendente. Il punto utile del confronto è riconoscere quale proteina viene raggiunta e in quale cellula: una diminuzione del segnale finale può derivare da interventi molecolari differenti.\n\nGabapentin e pregabalin ne offrono un esempio. Sono analoghi strutturali del GABA, ma il nome e la somiglianza chimica non li rendono agonisti dei suoi recettori. Si legano alla subunità ausiliaria α2δ dei canali del calcio voltaggio-dipendenti; nel modello didattico questo si collega alla riduzione del rilascio di trasmettitori eccitatori. Non riproducono la sequenza MOR → Gi/o descritta nel laboratorio. Inoltre α2δ non è il poro attraverso cui passa il calcio: distinguere subunità ausiliaria, canale e recettore evita di trattarli come sinonimi.\n\nAltri farmaci richiamati nel dolore neuropatico intervengono sulle monoamine o sui canali del sodio. Per gli antidepressivi il collegamento passa attraverso la modulazione della trasmissione e dei circuiti discendenti; per alcuni antiepilettici attraverso l’eccitabilità di membrana. La condivisione di un bersaglio non rende tutti i membri di una classe intercambiabili: NICE CG173 distingue, per esempio, la nevralgia del trigemino dagli altri contesti neuropatici e separa le scelte iniziali dagli impieghi che richiedono un parere specialistico.\n\nMeccanismi diversi non garantiscono che i rischi di un’associazione si annullino. Il documento britannico del pregabalin consultato segnala depressione respiratoria e cautela con oppioidi o altri depressori del sistema nervoso centrale. La complementarità di una mappa farmacologica è dunque un’ipotesi da collegare a efficacia, tollerabilità e caratteristiche della persona, non un invito a sommare medicinali."
    },
    {
      "id": "ziconotide-calcio",
      "title": "Ziconotide: raggiungere il canale senza passare da MOR",
      "refs": [
        "CFI",
        "R",
        "K",
        "ZICO-EMA"
      ],
      "text": "Nel terminale afferente, l’ingresso di calcio collega l’arrivo del potenziale d’azione alla liberazione dei trasmettitori. È un punto di controllo comune, ma si può raggiungere attraverso proteine diverse. Un oppioide attiva un recettore accoppiato a Gi/o e modifica la funzione dei canali attraverso la segnalazione intracellulare; ziconotide interagisce invece con canali del calcio di tipo N. Il risultato presinaptico può convergere, mentre il primo bersaglio molecolare resta differente.\n\nIl documento europeo di Prialt descrive una riduzione della corrente di calcio nelle afferenze nocicettive che terminano negli strati superficiali del corno dorsale, con minore rilascio di trasmettitori, compresa la sostanza P. Ziconotide non interagisce con i recettori oppioidi. Non va quindi collocato nella stessa casella di un agonista MOR né in quella dei ligandi della subunità ausiliaria α2δ: recettore, canale e subunità sono livelli distinti della mappa.\n\nLo schema della sinapsi va letto in ordine causale. Il canale di tipo N, indicato anche come CaV2.2, è sul versante presinaptico: limitarne la corrente riduce il segnale di calcio che favorisce l’esocitosi. Se viene liberato meno glutammato, il neurone successivo riceve una minore stimolazione dei propri recettori AMPA e NMDA. Questo effetto a valle non rende ziconotide un antagonista diretto di quei recettori. Una figura può mostrare insieme bersaglio del farmaco e conseguenze della sua azione; per interpretarli occorre seguire la freccia dal canale al rilascio e soltanto dopo alla risposta postsinaptica.\n\nLa via intratecale e il bersaglio spinale collegano questo esempio alla sezione sulla distribuzione neurassiale. Nel prodotto europeo l’indicazione riguarda adulti con dolore cronico severo che richiede analgesia intratecale; il trattamento richiede medici esperti e valutazione neuropsichiatrica. Le avvertenze comprendono alterazioni cognitive e psichiatriche e i rischi infettivi della somministrazione intratecale. La natura non oppioide non equivale dunque ad assenza di rischi.\n\nAnche il rapporto fra tempo, esposizione e risposta merita un passaggio separato. Il documento europeo descrive una finestra terapeutica ristretta: analgesia ed effetti indesiderati possono comparire a esposizioni vicine, e l’effetto massimo può essere ritardato. Non presenta una relazione dose-concentrazione-risposta abbastanza definita da trasformare il disegno della sinapsi in un calcolo del beneficio individuale. La concentrazione nel liquor e quella nel plasma descrivono inoltre compartimenti diversi: una bassa esposizione plasmatica durante l’infusione intratecale non esclude effetti cognitivi o psichiatrici. La distribuzione anatomica e l’andamento nel tempo completano quindi la spiegazione molecolare.\n\nPer confrontare questi farmaci è utile disegnare due percorsi separati fino al rilascio vescicolare, indicando prima la proteina raggiunta e poi il segnale modificato. Una destinazione cellulare comune non permette di dedurre equivalenza delle dosi, sostituibilità o superiorità clinica."
    },
    {
      "id": "nav-selettivita",
      "title": "NaV1.8: dal bersaglio periferico al limite dell’indicazione",
      "refs": [
        "CFI",
        "SUZ-USA"
      ],
      "text": "I canali del sodio contribuiscono alla generazione e propagazione dei potenziali d’azione. Le diverse isoforme hanno distribuzioni e proprietà differenti: intervenire su un canale presente nei neuroni sensitivi periferici può modificare il segnale prima che raggiunga midollo ed encefalo. Questo percorso è distinto dall’attivazione di MOR e aiuta a capire perché un analgesico possa agire senza essere un oppioide.\n\nLa suzetrigina, inizialmente studiata come VX-548, blocca selettivamente NaV1.8 rispetto alle altre isoforme considerate. Il documento USA di Journavx descrive NaV1.8 nei neuroni sensitivi periferici, compresi quelli dei gangli delle radici dorsali. La selettività è una proprietà relativa del confronto sperimentale: non significa che il medicinale non possa avere effetti indesiderati, né trasforma il rapporto fra potenze sui canali in un rapporto fra dosi analgesiche. Anche un dato genetico su NaV1.7 non dimostra, da solo, l’efficacia clinica di un farmaco diretto a NaV1.8.\n\nNel prodotto USA consultato l’indicazione riguarda il dolore acuto moderato o severo dell’adulto, incluso quello postoperatorio; l’impiego nel dolore acuto non è stato studiato oltre quattordici giorni. Non se ne ricava un’indicazione generale al dolore neuropatico cronico. Le interazioni legate a CYP3A e le precauzioni nella compromissione epatica restano rilevanti anche per un bersaglio periferico. Il documento statunitense non stabilisce l’autorizzazione in Italia: il passaggio da meccanismo a impiego richiede sempre prodotto, popolazione, durata ed esiti verificati."
    },
    {
      "id": "lidocaina-accesso-stato",
      "title": "Lidocaina: raggiungere il canale e modificarne la disponibilità",
      "refs": [
        "CFI",
        "HILLE-NA",
        "HILLE-PH"
      ],
      "text": "La lidocaina permette di separare due domande: come arriva una molecola al suo sito d’azione e che cosa accade quando lo occupa. I canali del sodio voltaggio-dipendenti sostengono la generazione e la propagazione dell’impulso. Ridurre la corrente disponibile ostacola questo processo; non richiede di attivare MOR e non coincide con la sequenza iniziale di eccitazione di TRPV1 descritta per la capsaicina.\n\nLa lidocaina è una base debole: forma neutra e protonata coesistono in proporzioni che dipendono dall’ambiente. La forma neutra attraversa più facilmente la componente lipidica della membrana; dall’interno, la forma carica può raggiungere il sito nel canale. Questa distinzione aiuta a seguire il percorso, ma non significa che una sola forma sia sempre attiva e l’altra priva di effetto. Il modello sperimentale classico comprende vie di accesso con proprietà differenti e dipende anche dalle caratteristiche dell’anestetico considerato.\n\nUn canale aperto, un canale inattivato e un canale bloccato non sono la stessa condizione. Nel modello di Hille, l’accesso attraverso il versante interno è influenzato dall’apertura del canale, mentre il legame del farmaco favorisce condizioni in cui la conduzione non è disponibile. Non basta quindi immaginare la lidocaina come una sostanza che mantiene il poro aperto: accesso al sito e possibilità di far passare sodio vanno distinti. Anche la sequenza degli impulsi e il tempo concesso al recupero influenzano il blocco osservato.\n\nGli esperimenti storici su singole fibre mieliniche mostrano inoltre che abbassare il pH esterno può rallentare l’azione di anestetici amminici come la lidocaina. È una dimostrazione del rapporto fra ionizzazione, permeazione e cinetica, non una formula per prevedere l’efficacia in ogni tessuto. Un esperimento controlla condizioni che nella persona dipendono anche da distribuzione e formulazione; non autorizza modifiche del pH o della preparazione del medicinale.\n\nNella mappa dell’analgesia, questo esempio occupa dunque il livello della propagazione elettrica. Va confrontato con la trasduzione dello stimolo e con il rilascio sinaptico, senza confondere la vicinanza anatomica dei bersagli con l’identità del loro meccanismo."
    },
    {
      "id": "capsaicina-trpv1",
      "title": "Capsaicina e TRPV1: attivazione iniziale e risposta nel tempo",
      "refs": [
        "R",
        "CAPS-EMA",
        "NICE173"
      ],
      "text": "Un farmaco può ridurre il dolore anche attraverso una sequenza che comincia con l’attivazione di un sensore nocicettivo. La capsaicina è un agonista di TRPV1, un recettore-canale dei nocicettori cutanei. Il passaggio iniziale favorisce l’attivazione della terminazione e può produrre bruciore: questo non è il blocco immediato della conduzione che si immagina per un anestetico locale. Per capire l’esito successivo bisogna aggiungere il tempo alla mappa del bersaglio.\n\nNel documento europeo di Qutenza, all’esposizione segue una riduzione della sensibilità dei nocicettori a diversi stimoli. Il documento descrive modifiche reversibili, compresa la riduzione della densità delle terminazioni epidermiche. La parola desensibilizzazione riassume quindi un cambiamento funzionale della terminazione; non dimostra che ogni passaggio sia identico alla regolazione di un recettore MOR o che il canale sia stato semplicemente antagonizzato.\n\nQutenza è un cerotto per il dolore neuropatico periferico dell’adulto, applicato da personale sanitario. Dolore locale, ustioni e alterazioni della sensibilità richiedono attenzione: azione periferica e somministrazione cutanea non significano innocuità. NICE CG173 distingue inoltre la crema dal cerotto e, nell’assistenza non specialistica, non raccomanda di iniziare quest’ultimo senza indicazione specialistica. Condividere il principio attivo non rende equivalenti formulazioni e contesti.\n\nQuesto esempio completa il confronto con gli oppioidi: cambiano il bersaglio, la sede e l’ordine degli eventi. Nel circuito spinale si può ridurre il rilascio di trasmettitori; nella terminazione periferica si può modificare la risposta agli stimoli nel tempo. Per studiare una strategia analgesica servono entrambe le domande: che cosa accade alla cellula e in quale situazione è stato dimostrato un beneficio."
    },
    {
      "id": "topico-prodotto-contesto",
      "title": "Azione topica: distinguere sede, formulazione e indicazione",
      "refs": [
        "CFI",
        "LIDO-TOP",
        "CAPS-EMA"
      ],
      "text": "La parola topico descrive dove viene applicato un prodotto; non identifica da sola una proteina bersaglio né la durata della risposta. Un cerotto di lidocaina e uno di capsaicina possono interessare una regione cutanea dolorosa attraverso sequenze diverse: nel primo caso si interviene sull’eccitabilità neuronale, nel secondo si parte dall’attivazione di TRPV1 e da una successiva modificazione della risposta delle terminazioni. La forma farmaceutica comune non li rende equivalenti.\n\nNel documento britannico di Versatis consultato, l’indicazione è il sollievo sintomatico della nevralgia posterpetica dell’adulto. La descrizione del prodotto distingue l’azione farmacologica della lidocaina dalla protezione meccanica offerta dall’idrogel alla zona ipersensibile. Questo secondo contributo ricorda che una formulazione non è soltanto un contenitore del principio attivo. L’indicazione europea di Qutenza riguarda invece il dolore neuropatico periferico dell’adulto: il documento EMA attuale non mantiene la limitazione ai soli adulti non diabetici riportata in alcuni materiali storici.\n\nLa sede cutanea non elimina il problema dell’esposizione. Per il cerotto di lidocaina sono descritte reazioni locali, come irritazione e prurito; il documento richiede inoltre cautela con altri anestetici locali o antiaritmici di classe I, perché effetti sistemici additivi non sono esclusi. Non se ne ricava una raccomandazione generale per ogni dolore neuropatico né un’equivalenza con formulazioni iniettabili. Per studiare un trattamento servono insieme bersaglio, prodotto, popolazione e risultato atteso; tabelle di concentrazioni o percentuali, isolate da questi elementi, non bastano a scegliere o confrontare una terapia."
    },
    {
      "id": "contesto",
      "title": "Il contesto del dolore cambia il significato della raccomandazione",
      "refs": [
        "NICE193",
        "NICE173",
        "CDC2022"
      ],
      "text": "Una raccomandazione non è completa senza la popolazione e il problema a cui si riferisce. NICE NG193 riguarda, in questo passaggio, il dolore cronico primario nelle persone da sedici anni: raccomanda di non iniziare oppioidi per quel contesto. Non è una regola automaticamente trasferibile al dolore oncologico o a ogni dolore cronico secondario.\n\nPer il dolore neuropatico dell’adulto in ambito non specialistico, NICE CG173 descrive un percorso diverso: comprende opzioni iniziali come amitriptilina, duloxetina, gabapentin o pregabalin, con specifiche eccezioni, e limita il tramadolo al soccorso acuto da considerare. Non sostiene una prima linea universale di tutti gli SSRI né l’avvio generalizzato di oppioidi a lungo termine.\n\nLa guida CDC2022 riguarda adulti seguiti in ambito ambulatoriale ed esclude dal proprio campo dolore da tumore, anemia falciforme e cure palliative o di fine vita. Richiama obiettivi funzionali, rivalutazione di benefici e rischi ed evita l’interruzione brusca di una terapia già in corso salvo situazioni di pericolo imminente. Per studiare le linee guida occorre preservare queste differenze di campo, anziché combinare frasi di documenti diversi in un unico algoritmo."
    },
    {
      "id": "ragionamento",
      "title": "Dalla molecola al problema: una sequenza di domande",
      "refs": [
        "K",
        "R"
      ],
      "text": "Per leggere un caso farmacologico si può partire dall’identità del medicinale: quale principio attivo, quale via e quale formulazione sono coinvolti? La seconda domanda riguarda l’esposizione: il composto agisce direttamente, richiede un metabolita, può accumularsi o incontra un’interazione? Solo dopo si collega il bersaglio al circuito e agli effetti osservati.\n\nUn esempio è la differenza fra minore liberazione di glutammato nel corno dorsale e minore liberazione di GABA in un interneurone inibitorio. In entrambi i casi il terminale è inibito; nel primo si attenua una trasmissione eccitatoria, nel secondo si può disinibire la cellula a valle. La funzione del circuito dà il significato alla stessa modifica cellulare.\n\nUn altro esempio è la persistenza degli effetti dopo un intervento: rimuovere una formulazione o somministrare un antagonista non implica che ogni molecola agonista sia stata eliminata. Distribuzione e tempi restano decisivi. Queste domande collegano recettori, farmaci e problemi clinici senza trasformare lo schema in una prescrizione. Le sezioni successive del percorso approfondiscono legame, tolleranza, metaboliti, interazioni e farmacogenomica."
    }
  ],
  "checks": [
    {
      "question": "Perché inibire una cellula può aumentare l’attività del circuito?",
      "answer": "Se la cellula inibita esercitava un freno su un’altra cellula, ridurre quel freno disinibisce la seconda. Occorre identificare entrambe le cellule e la funzione della rete."
    },
    {
      "question": "Diminuire il cAMP è l’unica strada con cui un oppioide modifica i canali?",
      "answer": "No. Gαi regola l’adenilato ciclasi; Gβγ può modulare direttamente canali del calcio e del potassio. Il contesto determina quali vie sono disponibili."
    },
    {
      "question": "Un agonista parziale deve avere bassa affinità?",
      "answer": "No. La buprenorfina mostra che alta affinità e minore efficacia nel sistema considerato possono coesistere. Legame e attivazione rispondono a domande differenti."
    },
    {
      "question": "Maggiore potenza significa maggiore analgesia massima e maggiore sicurezza?",
      "answer": "No. La potenza riguarda la quantità necessaria per un effetto definito; il massimo e i rischi dipendono da sistema, esito ed esposizione."
    },
    {
      "question": "Perché la funzione renale conta per un farmaco metabolizzato nel fegato?",
      "answer": "Perché i metaboliti possono richiedere eliminazione renale e conservare attività. La morfina e M6G illustrano la necessità di seguire più specie chimiche."
    },
    {
      "question": "Una conversione media di codeina permette di prevedere un rapporto fisso di efficacia?",
      "answer": "No. Formazione del metabolita, attività di CYP2D6, eliminazione e altri fattori impediscono di convertire una percentuale metabolica in una percentuale di beneficio o sicurezza."
    },
    {
      "question": "Tramadolo e tapentadolo sono entrambi copie di un SNRI?",
      "answer": "No. Sono oppioidi con profili misti differenti. Per il tramadolo conta M1; per tapentadolo il prodotto consultato descrive azione diretta MOR e ricaptazione noradrenergica."
    },
    {
      "question": "La presenza di dolore protegge automaticamente dalla depressione respiratoria?",
      "answer": "No. I circuiti respiratori possono essere raggiunti anche durante l’analgesia. Il dolore non devia tutta l’esposizione verso un unico sistema."
    },
    {
      "question": "Un aumento del dolore dimostra tolleranza?",
      "answer": "No. Progressione della patologia, esposizione variabile, sensibilizzazione e altri fattori devono essere distinti. L’iperalgesia indotta da oppioidi è un concetto diverso dalla tolleranza."
    },
    {
      "question": "Dipendenza fisica e disturbo da uso sono sinonimi?",
      "answer": "No. La prima descrive un adattamento con possibile astinenza; il secondo richiede una valutazione di controllo dell’uso, comportamenti e conseguenze. La sola tolleranza non basta."
    },
    {
      "question": "Perché il miglioramento dopo naloxone non chiude la valutazione?",
      "answer": "L’azione dell’agonista può persistere oltre quella dell’antagonista. Occorrono assistenza e sorveglianza; una risposta iniziale non garantisce che la depressione respiratoria non ricompaia."
    },
    {
      "question": "La raccomandazione sul dolore cronico primario vale per ogni dolore oncologico?",
      "answer": "No. Popolazione, causa e contesto delimitano il campo della linea guida. Trasferirla fuori da quel campo ne cambia il significato."
    },
    {
      "question": "Perché l’antagonismo periferico non implica un recettore intestinale esclusivo?",
      "answer": "La separazione dipende soprattutto da accesso ai compartimenti, permeabilità e trasportatori. Naloxegol e naldemedina limitano la penetrazione centrale; non garantiscono assenza assoluta di astinenza o di rischi gastrointestinali."
    },
    {
      "question": "Perché le due associazioni con naloxone non hanno lo stesso scopo?",
      "answer": "Nell’ossicodone/naloxone orale il primo passaggio limita l’esposizione sistemica all’antagonista e favorisce l’azione intestinale. Buprenorfina/naloxone appartiene invece al trattamento del disturbo da uso, con un diverso ruolo della formulazione e della via."
    },
    {
      "question": "Una tabella di equivalenza basta per passare da un oppioide a un altro?",
      "answer": "No. La tolleranza crociata può essere incompleta e cambiano farmacocinetica, via ed esposizione residua. Gli equivalenti di morfina non sono una prescrizione di sostituzione."
    },
    {
      "question": "La breve durata del remifentanil dipende dalla colinesterasi plasmatica?",
      "answer": "No. L’idrolisi coinvolge esterasi aspecifiche del sangue e dei tessuti. La rapida cessazione dell’effetto non elimina il rischio respiratorio durante l’esposizione e non assicura analgesia successiva."
    },
    {
      "question": "Perché un richiamo ambientale può suscitare desiderio dopo la fine dell’effetto farmacologico?",
      "answer": "L’esperienza può associare contesto e conseguenze dell’assunzione. I segnali appresi possono riattivare motivazione e ricerca della sostanza; questo processo non coincide con l’occupazione recettoriale del momento."
    },
    {
      "question": "Il mantenimento con un agonista ha come obiettivo un’euforia continua?",
      "answer": "No. Il razionale è ridurre craving e astinenza e favorire stabilità, salute e funzionamento all’interno di un percorso individuale. Una curva soggettiva non misura la concentrazione plasmatica."
    },
    {
      "question": "Due valori di Ki permettono di calcolare dosi analgesiche equivalenti?",
      "answer": "No. Devono essere contestualizzati per bersaglio, saggio, specie e composto misurato. Affinità, esposizione, efficacia clinica e sicurezza sono livelli diversi."
    },
    {
      "question": "Pregabalin e un agonista MOR riducono il rilascio seguendo lo stesso meccanismo?",
      "answer": "No. Il pregabalin si lega alla subunità ausiliaria α2δ di canali del calcio; MOR è un recettore accoppiato a Gi/o. Una convergenza sul rilascio non rende identici i bersagli né garantisce la sicurezza dell’associazione."
    },
    {
      "question": "La selettività per NaV1.8 dimostra un beneficio in ogni dolore cronico?",
      "answer": "No. È una proprietà del bersaglio. L’indicazione e le prove devono essere lette per popolazione e durata: il prodotto USA consultato riguarda dolore acuto nell’adulto. Non dimostra una raccomandazione universale o l’assenza di rischi."
    },
    {
      "question": "Un mediatore deve provocare da solo una scarica per aumentare la risposta nocicettiva?",
      "answer": "No. Può sensibilizzare la terminazione e modificare la risposta a uno stimolo successivo. Attivazione, sensibilizzazione, propagazione dell’impulso e rilascio sinaptico sono passaggi distinti."
    },
    {
      "question": "Allodinia significa automaticamente dolore neuropatico o prova diretta di sensibilizzazione centrale?",
      "answer": "No. Descrive dolore provocato da uno stimolo normalmente non doloroso. Il segno non identifica da solo un meccanismo; il dolore neuropatico richiede una lesione o malattia del sistema somatosensoriale."
    },
    {
      "question": "Una pupilla piccola dimostra da sola una depressione respiratoria da oppioidi?",
      "answer": "No. La miosi non è specifica e può mancare anche in un’intossicazione. Pupilla, sedazione e ventilazione descrivono funzioni diverse; il rischio respiratorio non si deduce da un solo segno."
    },
    {
      "question": "Il prurito dopo un oppioide si spiega sempre con il rilascio di istamina?",
      "answer": "No. Esistono contributi periferici e meccanismi neuronali distinti. Gli esperimenti su mastociti umani isolati e sui circuiti spinali animali rispondono a domande diverse; non permettono di diagnosticare una reazione individuale o di scegliere automaticamente un trattamento."
    },
    {
      "question": "Perché l’esposizione al fentanyl non si azzera subito quando viene rimosso un cerotto?",
      "answer": "Perché una parte del farmaco è già nella cute e nell’organismo. Il deposito cutaneo può continuare ad alimentare l’assorbimento, mentre procede l’eliminazione. Interrompere il rilascio dalla formulazione non equivale a eliminare tutta l’esposizione."
    },
    {
      "question": "La somministrazione neurassiale limita necessariamente l’effetto della morfina al corno dorsale?",
      "answer": "No. La distribuzione nel liquor può coinvolgere altri circuiti, compresi quelli respiratori. Epidurale e intratecale sono vie differenti; accesso vicino al bersaglio, selettività recettoriale e sicurezza restano concetti distinti."
    },
    {
      "question": "Una riduzione del rilascio di trasmettitori identifica necessariamente un’azione sui recettori oppioidi?",
      "answer": "No. Ziconotide raggiunge i canali del calcio di tipo N; un agonista MOR agisce attraverso un recettore e Gi/o. L’esito presinaptico può convergere senza rendere uguali bersaglio, rischi o impiego."
    },
    {
      "question": "Perché la capsaicina può provocare inizialmente bruciore pur essendo impiegata in una strategia analgesica?",
      "answer": "L’attivazione iniziale di TRPV1 e la successiva riduzione della risposta delle terminazioni sono fasi diverse. Non è un semplice antagonismo del canale, e non consente di equiparare crema, cerotto e altri prodotti."
    },
    {
      "question": "Perché l’accesso della lidocaina a un canale aperto non significa che il farmaco lo mantenga conduttivo?",
      "answer": "L’apertura può facilitare una via di accesso al sito, mentre il legame riduce la disponibilità alla conduzione. Accesso, inattivazione e blocco descrivono passaggi differenti, influenzati dallo stato del canale e dal tempo."
    },
    {
      "question": "Due analgesici in cerotto condividono necessariamente meccanismo e indicazione?",
      "answer": "No. La lidocaina modifica l’eccitabilità attraverso i canali del sodio; la capsaicina avvia una risposta tramite TRPV1. Sede cutanea, principio attivo e indicazione del singolo prodotto vanno valutati separatamente."
    },
    {
      "question": "Se ziconotide riduce la stimolazione postsinaptica di AMPA e NMDA, sta antagonizzando direttamente questi recettori?",
      "answer": "No. Il bersaglio descritto è il canale del calcio di tipo N presinaptico. La riduzione del calcio disponibile per l’esocitosi riduce il rilascio di trasmettitore e quindi la stimolazione a valle: conseguenza di circuito e legame diretto non sono sinonimi."
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana 2014, XII americana 2012. Capitolo31, PDF 631–654 (pagine editoriali 611–634): testo disponibile letto e rendering controllati cumulativamente. Bibliografia 653–654 letta come elenco, senza lettura degli articoli citati. Indicazioni storiche riconciliate solo per i passaggi integrati; resto del libro non dichiarato letto."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII edizione italiana2016 / originale2015. Capitolo42, PDF785–813: testo disponibile e pagine controllati; figure42.1–42.7 e tabelle42.1–42.4 nei lotti precedenti. Cinque nuove pagine809–813, inclusi bibliografia e note1–15; nessuna nuova figura raster. Bibliografia distinta dagli articoli non letti. Paginazione editoriale non ricostruita; resto del libro non letto."
    },
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I",
      "detail": "Anno accademico 2025–26. Per questo capitolo: PDF 89–110 e 465–513, testo disponibile e pagine controllati. Le nuove pagine 511–513 riguardano ziconotide; pannelli parzialmente coperti in 512–513 non ricostruiti. Conservate le lacune precedenti e l’unità non validata della pagina 508. Da 514 inizia l’emicrania, fuori da questo capitolo; corso e articoli citati non letti integralmente."
    },
    {
      "id": "SFI",
      "title": "Appunti del corso di Farmacologia I",
      "detail": "Anno accademico 2025–26, lezioni 13 e 15 dell’11 e 18 novembre 2025. PDF 244–252 e 272–277: testo disponibile letto e tutti i 15 rendering controllati cumulativamente. Figure o etichette tagliate o coperte in 244,245,273,275,277; controllo della pagina non equivale al recupero delle parti mancanti. Altre pagine del corso restano da leggere."
    },
    {
      "id": "BUP",
      "title": "Buprenorfina sublinguale · documento del prodotto britannico",
      "detail": "Prodotto britannico sublinguale da 2 mg: sezioni selezionate 4.1, 4.2, 4.4, 5.1 e 5.2; 4.4 e 5.2 aperte direttamente. Testo revisionato il 15/10/2026, emc aggiornato il 21/10/2026. Consultazione 28/10/2026; non lettura integrale né trasposizione a tutte le formulazioni.",
      "url": "https://www.medicines.org.uk/emc/product/102691/smpc"
    },
    {
      "id": "CDC2022",
      "title": "CDC · Linea guida sulla prescrizione di oppioidi, 2022",
      "detail": "Linea guida USA 2022. Consultati abstract, campo di applicazione e passaggi selezionati sulla rivalutazione e sulla raccomandazione 5, il 28/10/2026. Adulti ambulatoriali; esclusi dolore da tumore, anemia falciforme, cure palliative e di fine vita. Non lettura integrale delle 95 pagine. In questo ampliamento rilette anche le cautele della tabella sugli equivalenti di morfina e sul cambio di oppioide; nessun fattore di conversione trasferito.",
      "url": "https://www.cdc.gov/mmwr/volumes/71/rr/rr7103a1.htm"
    },
    {
      "id": "CPIC-OP",
      "title": "CPIC · CYP2D6, OPRM1, COMT e oppioidi selezionati",
      "detail": "Linea guida 2021, DOI 10.1002/cpt.2149. Abstract, passaggio sul tramadolo e tabelle 2–3 consultati nei contenuti indicizzati il 27/10/2026; accesso diretto non disponibile. Ripresa del precedente controllo sulla codeina; non verifica di tutti gli aggiornamenti delle tabelle alleliche.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8249478/"
    },
    {
      "id": "FENT",
      "title": "Durogesic DTrans · documento del prodotto britannico",
      "detail": "Durogesic DTrans, documento britannico: sezioni selezionate 4.3–4.4 e 5.2 ricontrollate direttamente il 28/10/2026. Deposito cutaneo, assorbimento dopo rimozione, calore e limiti d’impiego; emc aggiornato19/09/2025. Nessuna dose, conversione o autorizzazione italiana trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/6939/smpc"
    },
    {
      "id": "IASP",
      "title": "IASP · Terminologia del dolore",
      "detail": "Definizioni di dolore, nocicezione, dolore nocicettivo, neuropatico e nociplastico; allodinia, iperalgesia e sensibilizzazione periferica/centrale consultate direttamente il 28/10/2026. Terminologia, non guida alla prescrizione; pagina non letta integralmente.",
      "url": "https://www.iasp-pain.org/resources/terminology/"
    },
    {
      "id": "IUPHAR",
      "title": "IUPHAR · Tabella dei recettori",
      "detail": "Tabella didattica: righe MOR/OPRM1, DOR/OPRD1 e KOR/OPRK1 consultate nei contenuti indicizzati il 27/10/2026. Apertura diretta non riuscita; nessuna revisione integrale della banca dati.",
      "url": "https://pharmacologyeducation.org/receptors/"
    },
    {
      "id": "IUPHAR-NOP",
      "title": "IUPHAR/BPS · Recettori oppioidi e NOP",
      "detail": "Introduzione alla famiglia e passaggi su NOP consultati nei contenuti indicizzati il 27/10/2026. Nessun accesso oltre la richiesta di autenticazione della banca dati principale; revisione limitata a questi passaggi.",
      "url": "https://www.guidetoimmunopharmacology.org/GRAC/FamilyIntroductionForward?familyId=50"
    },
    {
      "id": "METH",
      "title": "Metadone · documento del prodotto britannico",
      "detail": "Metadone da 5 mg, prodotto britannico. Passaggi selezionati 4.4–4.5 nei contenuti indicizzati; avvertenze sul QT aperte direttamente il 28/10/2026. Data esatta di revisione non stabilita. Nessun dosaggio, valore farmacocinetico o protocollo ECG importato.",
      "url": "https://www.medicines.org.uk/emc/product/11838/smpc"
    },
    {
      "id": "MOR",
      "title": "Morfina solfato · documento del prodotto USA",
      "detail": "Morfina solfato orale Hikma, documento USA. Sintesi, avvertenze 5.2 e 12.2 su respirazione, pupilla e mediatori periferici ricontrollate direttamente il 28/10/2026. Precedenti consultazioni 12.1 e passaggi 12.3 su metaboliti conservate; modifiche principali 12/2025. Lettura selettiva, senza dosaggi né indicazioni pediatriche.",
      "url": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=3c847554-3b4b-4d24-a145-2ef7e9b83699&type=display"
    },
    {
      "id": "NARCAN",
      "title": "Narcan nasale · documento del prodotto USA",
      "detail": "Naloxone nasale, documento USA revisionato 12/2022. Sintesi e sezione 1 aperte direttamente; passaggi 2.1–2.3 e 5.1–5.3 nei contenuti indicizzati il 28/10/2026. Consultazione selettiva: emergenza, ricomparsa degli effetti e astinenza; nessun dosaggio importato.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=724df050-5332-4d0a-9a5f-17bf08a547e1&type=display"
    },
    {
      "id": "NICE173",
      "title": "NICE CG173 · Dolore neuropatico nell’adulto",
      "detail": "CG173: raccomandazioni1.1.8–1.1.14 nei contenuti ufficiali indicizzati il28/10/2026; apertura diretta403. Ricontrollata1.1.12: cerotto di capsaicina da non iniziare in ambito non specialistico senza indicazione specialistica, distinto dalla crema. Non lettura integrale.",
      "url": "https://www.nice.org.uk/guidance/cg173/chapter/Recommendations"
    },
    {
      "id": "NICE193",
      "title": "NICE NG193 · Dolore cronico primario",
      "detail": "NG193: raccomandazioni selezionate 1.2.7 e 1.2.9–1.2.11 nei contenuti indicizzati il 28/10/2026. Dolore cronico primario da 16 anni; non estese a tutto il dolore cronico né al dolore oncologico.",
      "url": "https://www.nice.org.uk/guidance/ng193/chapter/recommendations"
    },
    {
      "id": "OUD",
      "title": "CDC · Trattamento del disturbo da uso di oppioidi",
      "detail": "Risorsa CDC per professionisti del 09/04/2024: testo principale, meccanismi dei medicinali e ruolo del supporto psicosociale aperti e letti direttamente il 28/10/2026. Contesto USA; nessuna lettura integrale dei documenti collegati né trasferimento delle regole prescrittive in Italia.",
      "url": "https://www.cdc.gov/overdose-prevention/hcp/clinical-care/opioid-use-disorder-treating.html"
    },
    {
      "id": "PALEXIA",
      "title": "Palexia · documento del prodotto britannico",
      "detail": "Palexia da 50 mg, compresse rivestite, prodotto britannico. Passaggi 4.1, 4.5 e 5.1 aperti direttamente il 27/10/2026. emc aggiornato il 12/01/2026; meccanismo e rischi di interazione, senza trasferire dosaggi o autorizzazioni italiane.",
      "url": "https://www.medicines.org.uk/emc/product/5159/smpc"
    },
    {
      "id": "RECOVERY",
      "title": "CDC · Disturbo da uso di oppioidi e recupero",
      "detail": "Risorsa CDC del 12/08/2024: introduzione e obiettivi di recupero consultati nei contenuti indicizzati il 28/10/2026. Condizione trattabile; non revisione integrale del trattamento.",
      "url": "https://www.cdc.gov/overdose-prevention/treatment/opioid-use-disorder.html"
    },
    {
      "id": "OXYNAL",
      "title": "Ossicodone/naloxone · documento del prodotto britannico",
      "detail": "Oxycodone/naloxone KRKA, rilascio prolungato: passaggi selezionati 4.1–4.4 e 5.1–5.2 consultati il 28/10/2026. emc aggiornato il 06/01/2026. Primo passaggio, funzione epatica e rischi; nessuna dose o conversione importata.",
      "url": "https://www.medicines.org.uk/emc/product/101781/smpc"
    },
    {
      "id": "NALDE",
      "title": "Rizmoic · documento del prodotto britannico",
      "detail": "Naldemedina: passaggi selezionati 4.3–4.5 e 5.1–5.2 aperti direttamente il 28/10/2026. Distribuzione, trasportatori e precauzioni; data esatta di revisione non stabilita. Non lettura integrale né RCP italiano.",
      "url": "https://www.medicines.org.uk/emc/product/10816/smpc"
    },
    {
      "id": "NALOPEG",
      "title": "Moventig · documento del prodotto britannico",
      "detail": "Naloxegol: passaggi selezionati 4.1, 4.3–4.4 e 5.1 aperti direttamente il 28/10/2026. emc aggiornato il 22/01/2025. Meccanismo e precauzioni; nessuno schema di trattamento importato.",
      "url": "https://www.medicines.org.uk/emc/product/6892/smpc"
    },
    {
      "id": "SUBOX",
      "title": "EMA · Suboxone",
      "detail": "Panoramica pubblica EMA: composizione, meccanismo e contesto di trattamento consultati direttamente il 28/10/2026; pagina e documenti aggiornati il 25/09/2026. Il documento completo di prodotto non è stato letto in questo intervallo.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/suboxone"
    },
    {
      "id": "REMI",
      "title": "Remifentanil · documento del prodotto USA",
      "detail": "DailyMed: passaggi selezionati 12.1–12.3 e avvertenze sulla respirazione e sulla rapida cessazione dell’analgesia consultati direttamente il 28/10/2026. Data esatta di revisione non stabilita; nessuna dose o procedura anestesiologica importata.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=39284dec-b9bc-4fc8-b2d3-f1ef1323e5d4"
    },
    {
      "id": "NIH-REC",
      "title": "NIH · Apprendimento e trattamento delle dipendenze",
      "detail": "Research in Context, 24/03/2026. Sezione Drugs and the brain e panoramica dei medicinali lette direttamente il 28/10/2026. Fonte istituzionale di orientamento; studi citati e restanti approfondimenti terapeutici non revisionati integralmente.",
      "url": "https://beta.nih.gov/news-events/nih-research-matters/treating-addiction"
    },
    {
      "id": "PREG-UK",
      "title": "Pregabalin · documento del prodotto britannico",
      "detail": "Brown & Burk, 50 mg, capsule: passaggi selezionati 4.1, 4.4, 4.5 e 5.1 letti direttamente il 28/10/2026; emc aggiornato 07/09/2026. Consultazione di meccanismo e precauzioni, non lettura integrale né RCP italiano.",
      "url": "https://www.medicines.org.uk/emc/product/15627/smpc"
    },
    {
      "id": "SUZ-USA",
      "title": "Journavx · documento del prodotto USA",
      "detail": "Vertex: indicazione, durata studiata, precauzioni e meccanismo consultati direttamente il 28/10/2026. DailyMed aggiornato 02/10/2026; testo revisionato 01/2026. Lettura selettiva, senza dosaggi o autorizzazioni italiane.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f0976da4-1d20-4517-945c-b60ed2f41c12"
    },
    {
      "id": "MC-HUMAN",
      "title": "Mastociti umani e MRGPRX2 · studio sperimentale",
      "detail": "Varricchi et al., Frontiers in Cellular Neuroscience 2019;13:299, DOI 10.3389/fncel.2019.00299. Abstract PubMed letto direttamente il 28/10/2026: cellule umane isolate da tessuti differenti. Articolo completo e figure non letti; non linea guida clinica.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/31333418/"
    },
    {
      "id": "ITCH-SPINAL",
      "title": "Morfina e prurito spinale · studio sperimentale",
      "detail": "Nguyen et al., Science Translational Medicine 2021;13:eabc3774, DOI 10.1126/scitranslmed.abc3774. Abstract PubMed letto direttamente il 28/10/2026: modelli animali di esposizione neurassiale. Articolo completo e figure non letti; non raccomandazione terapeutica.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/33536279/"
    },
    {
      "id": "MOR-NEUR",
      "title": "Duramorph · morfina neurassiale, documento USA",
      "detail": "Hikma: sintesi, avvertenze 5.1 e 5.3, formulazione e passaggi 12.1–12.3 consultati direttamente il 28/10/2026. Modifiche principali 12/2025. Lettura selettiva su compartimenti e rischio respiratorio; non protocollo anestesiologico né RCP italiano.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ebb18761-e5c4-4238-bb84-f9549f500210"
    },
    {
      "id": "ZICO-EMA",
      "title": "EMA · Prialt, ziconotide",
      "detail": "Documento europeo in inglese: passaggi selezionati 4.1–4.5 e 5.1 ricontrollati il 28/10/2026, PDF 2–6 e 10–11. Distinti bersaglio presinaptico, conseguenze postsinaptiche, compartimenti e tempo di risposta. Non lettura integrale delle 62 pagine né revisione delle linee guida; nessuna dose o procedura trasferita.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/prialt-epar-product-information_en.pdf"
    },
    {
      "id": "CAPS-EMA",
      "title": "EMA · Qutenza, capsaicina",
      "detail": "PDF europeo: passaggi 4.1–4.4 e 5.1 letti nel lotto precedente del 28/10/2026. Indicazione e sintesi degli studi ricontrollate nella pagina EPAR il 28/10/2026; nessuna nuova lettura del PDF in questo lotto. Scheda prodotto aggiornata 05/05/2026. Nessuna lettura integrale.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/qutenza"
    },
    {
      "id": "LIDO-TOP",
      "title": "Versatis · lidocaina cutanea, documento britannico",
      "detail": "SmPC emc disponibile il 28/10/2026, aggiornato 10/09/2021. Letti passaggi selezionati 4.1, 4.3–4.5, 4.8–4.9 e meccanismo in 5.1. Non RCP italiano né revisione integrale; nessuna dose o procedura trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/290/smpc"
    },
    {
      "id": "HILLE-NA",
      "title": "Accesso degli anestetici locali ai canali del sodio · studio sperimentale",
      "detail": "Hille, J Gen Physiol 1977;69:497–515, DOI 10.1085/jgp.69.4.497. Abstract letto su PMC il 28/10/2026: modello del nodo di Ranvier. Testo integrale e figure non esaminati; non evidenza di efficacia clinica.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2215053/"
    },
    {
      "id": "HILLE-PH",
      "title": "pH e velocità del blocco dei canali del sodio · studio sperimentale",
      "detail": "Hille, J Gen Physiol 1977;69:475–496, DOI 10.1085/jgp.69.4.475. Abstract PubMed letto il 28/10/2026: singole fibre mieliniche in voltage clamp. Testo integrale e figure non esaminati; non istruzione per modificare preparazioni.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/16078/"
    }
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL70",
      "label": "MORPHINE"
    },
    {
      "id": "CHEMBL485",
      "label": "CODEINE"
    },
    {
      "id": "CHEMBL80",
      "label": "NALOXONE"
    },
    {
      "id": "CHEMBL596",
      "label": "FENTANYL"
    },
    {
      "id": "CHEMBL19019",
      "label": "NALTREXONE"
    },
    {
      "id": "CHEMBL651",
      "label": "METHADONE"
    },
    {
      "id": "CHEMBL511142",
      "label": "BUPRENORPHINE"
    },
    {
      "id": "CHEMBL1201776",
      "label": "TAPENTADOL"
    },
    {
      "id": "CHEMBL1237044",
      "label": "TRAMADOL"
    },
    {
      "id": "CHEMBL4594214",
      "label": "ZICONOTIDE"
    },
    {
      "id": "CHEMBL294199",
      "label": "CAPSAICIN"
    },
    {
      "id": "CHEMBL79",
      "label": "LIDOCAINE"
    }
  ],
  "drugs": [],
  "targets": [],
  "relatedExistingChapterIds": [
    "recettori-e-legame",
    "dose-risposta",
    "gpcr",
    "desensibilizzazione-tolleranza",
    "pro-farmaci-metaboliti-attivi",
    "farmacogenomica",
    "metabolismo-trasportatori",
    "antidepressivi"
  ],
  "coverage": "Sintesi originale da intervalli delimitati dei libri e da appunti e diapositive del corso di Farmacologia. Lettura integrale di libri e corsi non completata. Fonti ufficiali consultate per passaggi selezionati; documenti USA e britannici non equivalgono all’RCP italiano. Revisione clinica indipendente non eseguita.",
  "wordCount": 8287
});
