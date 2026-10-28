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
      "id": "formulazioni",
      "title": "Fentanyl: la via di somministrazione cambia la lettura del tempo",
      "refs": [
        "K",
        "FENT"
      ],
      "text": "La rapidità con cui un effetto compare dipende da quanto velocemente il farmaco raggiunge il sito d’azione. La durata dipende anche da distribuzione, rilascio dalla formulazione ed eliminazione. Per questo la sola parola fentanyl non basta a descrivere un profilo temporale: una preparazione iniettabile e un cerotto non consegnano il principio attivo nello stesso modo.\n\nPer Durogesic DTrans il documento britannico consultato segnala che la via transdermica è generalmente sconsigliata nei pazienti non già tolleranti agli oppioidi e che il rischio di ipoventilazione può essere grave. Dopo la rimozione del cerotto l’esposizione diminuisce gradualmente. L’aumento della temperatura cutanea e le fonti esterne di calore possono aumentare l’assorbimento e il rischio di tossicità.\n\nL’esempio mostra che una formulazione prolungata non è un modo universalmente più sicuro di utilizzare una molecola potente. Va compresa nel proprio contesto autorizzativo e nelle sue precauzioni. Qui non vengono proposte equivalenze tra prodotti né conversioni tra milligrammi, microgrammi e velocità di rilascio."
    },
    {
      "id": "respirazione",
      "title": "Respirazione e sedazione: effetti collegati, ma non sinonimi",
      "refs": [
        "K",
        "MOR",
        "BUP"
      ],
      "text": "Gli oppioidi possono ridurre l’attività dei sistemi che sostengono la ventilazione e la loro risposta all’aumento della CO₂. La depressione respiratoria riguarda dunque il controllo e l’efficacia della respirazione, non soltanto il grado di sonnolenza. Una persona può apparire sedata per molte cause; il rischio respiratorio richiede una valutazione specifica.\n\nIl medesimo bersaglio che contribuisce all’analgesia può intervenire in circuiti differenti. La presenza di dolore non impedisce al farmaco di agire sui sistemi respiratori o di ricompensa. Non esiste un interruttore che destini tutta la molecola al circuito doloroso finché il paziente soffre.\n\nLa contemporanea esposizione a benzodiazepine, alcol o altri depressori del sistema nervoso centrale può aumentare sedazione e depressione respiratoria. Il rischio non si risolve contando soltanto quanti farmaci appartengono alla stessa classe. Anche la tolleranza a un effetto non garantisce protezione completa da un altro, soprattutto quando cambiano esposizione, associazioni o condizioni della persona."
    },
    {
      "id": "intestino",
      "title": "Intestino, pupilla e altri distretti: seguire la funzione",
      "refs": [
        "K",
        "CFI"
      ],
      "text": "Nel sistema nervoso enterico l’attivazione oppioide modifica la coordinazione della motilità e delle secrezioni. La stipsi non va spiegata come una paralisi uniforme di ogni muscolo: possono ridursi le contrazioni propulsive mentre aumenta il tono in alcuni tratti e sfinteri. Il risultato riguarda il transito e può persistere anche quando altri effetti diventano meno evidenti con l’esposizione ripetuta.\n\nLa miosi, la nausea, il vomito, il prurito e la ritenzione urinaria illustrano altre sedi d’azione. Non ogni effetto deve essere ricondotto alla stessa catena; per esempio, le differenze fra molecole e il contributo di meccanismi diversi contano nell’interpretazione del prurito e delle risposte vascolari. Un elenco di effetti diventa più utile quando si collega ogni voce a una funzione e a un distretto.\n\nLa possibilità di limitare l’azione di un antagonista soprattutto alla periferia mostra l’importanza della distribuzione. Il progetto farmacologico è separare il blocco intestinale dall’analgesia centrale; non autorizza però a promettere assenza assoluta di astinenza o di effetti gastrointestinali per ogni prodotto. Le indicazioni e le precauzioni dei singoli antagonisti periferici richiedono un approfondimento dedicato."
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
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana 2014, XII americana 2012. PDF 631–646: testo disponibile letto; controllo visivo 631–638. Continuazione da 647 non inclusa."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII edizione italiana 2016. PDF 795–798: testo disponibile e immagini controllati, comprese tabelle 42.2–42.3. Paginazione editoriale non stabilita per questo PDF riformattato."
    },
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I",
      "detail": "Anno accademico 2025–26. PDF 89–110 e 465–475 consultati e controllati visivamente. Il primo intervallo riguarda i sistemi monoaminergici, il secondo gli oppioidi. La pagina 109 è parzialmente coperta. Resto del corso non dichiarato letto."
    },
    {
      "id": "SFI",
      "title": "Appunti del corso di Farmacologia I",
      "detail": "Anno accademico 2025–26, lezioni 13 e 15 dell’11 e 18 novembre 2025. PDF 244–252 e 272–277: testo disponibile letto; immagini controllate 247, 249, 252, 276, 277. Alcune figure di pagina 277 sono tagliate. Altre pagine e figure restano da verificare."
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
      "detail": "Linea guida USA 2022. Consultati abstract, campo di applicazione e passaggi selezionati sulla rivalutazione e sulla raccomandazione 5, il 28/10/2026. Adulti ambulatoriali; esclusi dolore da tumore, anemia falciforme, cure palliative e di fine vita. Non lettura integrale delle 95 pagine.",
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
      "detail": "Durogesic DTrans, prodotto transdermico britannico. Passaggi 4.2 e 4.4 nei contenuti indicizzati; precauzioni su calore, CYP3A4 e farmaci serotoninergici aperte direttamente il 28/10/2026. Data esatta di revisione non stabilita; nessuna tabella di conversione importata.",
      "url": "https://www.medicines.org.uk/emc/product/6939/smpc"
    },
    {
      "id": "IASP",
      "title": "IASP · Terminologia del dolore",
      "detail": "Definizioni di dolore, nocicezione, dolore nocicettivo, neuropatico e nociplastico consultate direttamente il 28/10/2026. Terminologia, non guida alla prescrizione; pagina non letta integralmente.",
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
      "detail": "Morfina solfato orale Hikma, documento USA. Sintesi e sezioni 12.1–12.2 aperte direttamente; passaggi 12.3 su metaboliti e funzione renale nei contenuti indicizzati, il 28/10/2026. Modifiche principali 12/2025; lettura selettiva, senza dosaggi o indicazioni pediatriche.",
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
      "detail": "CG173, dolore neuropatico dell’adulto in ambito non specialistico. Raccomandazioni 1.1.8, 1.1.10 e 1.1.12 consultate nei contenuti indicizzati il 27/10/2026; apertura diretta non disponibile. Ultimo aggiornamento indicato 22/09/2020; non revisione integrale.",
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
      "detail": "Risorsa CDC per professionisti del 09/04/2024: punti principali e trattamenti efficaci consultati nei contenuti indicizzati il 28/10/2026. Contesto USA; non revisione integrale né trasferimento dei regimi prescrittivi in Italia.",
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
  "wordCount": 3717
});
