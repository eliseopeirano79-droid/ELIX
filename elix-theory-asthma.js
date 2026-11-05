// Sintesi didattica originale; copertura circoscritta nei registri collegati.
export const THEORY_ASTHMA = Object.freeze({
  "id": "asma-e-broncodilatatori",
  "volume": 11,
  "title": "Asma: dai circuiti bronchiali ai bersagli dei farmaci",
  "lead": "Muscolatura, epitelio e infiammazione spiegano perché broncodilatazione e controllo della malattia siano obiettivi collegati ma distinti.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-05",
  "readingManifest": "./data/asma-e-broncodilatatori-reading.json",
  "sections": [
    {
      "id": "ostruzione",
      "title": "Il bronco si restringe per più ragioni",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "GINA"
      ],
      "text": "L’asma mette in relazione due livelli: ciò che restringe il lume delle vie aeree e ciò che rende quel restringimento più probabile. La contrazione della muscolatura liscia riduce il calibro, ma anche edema della parete e accumulo di muco ostacolano il passaggio dell’aria. Il rimodellamento può modificare nel tempo la struttura bronchiale. Una via aerea ostruita non è quindi soltanto un muscolo contratto.\n\nGINA descrive una malattia eterogenea, con sintomi e flusso espiratorio variabili; l’ostruzione può diventare persistente. La diagnosi richiede un inquadramento clinico e funzionale, non il solo riscontro di infiammazione.\n\nQuesta distinzione serve già alla farmacologia. Se una molecola rilassa il muscolo, può attenuare una componente dell’ostruzione senza rimuovere nello stesso momento edema, secrezioni e alterazioni della parete. Viceversa, ridurre l’attività infiammatoria modifica la probabilità e l’intensità delle risposte successive, ma non equivale necessariamente a far cessare rapidamente una contrazione già in corso. Calibro, reattività e struttura sono variabili collegate, con tempi diversi.",
      "formula": "Lume ridotto ← contrazione muscolare + edema + muco + modificazioni della parete. Schema qualitativo originale: i contributi interagiscono e non sono percentuali additive misurate."
    },
    {
      "id": "iperreattivita",
      "title": "Iperreattività: conta anche la risposta allo stimolo",
      "refs": [
        "KAT",
        "RAN",
        "CFI",
        "GINA"
      ],
      "text": "L’iperreattività bronchiale indica una risposta eccessiva a stimoli che in altre condizioni provocano una variazione minore del calibro. Non identifica un unico mediatore. Allergeni, infezioni virali, aria fredda, esercizio e sostanze irritanti possono coinvolgere percorsi diversi, che convergono sulla muscolatura, sulle secrezioni e sull’ambiente della parete bronchiale.\n\nL’epitelio partecipa a questo ambiente: costituisce una barriera, comunica con cellule immunitarie e nervi e viene esposto alle forze generate dalla contrazione. Il danno epiteliale può facilitare ulteriori risposte, mentre l’infiammazione può aumentare la sensibilità del sistema. È più utile immaginare una rete di retroazioni che una sequenza obbligatoria nella quale ogni episodio comincia nello stesso modo.\n\nPer interpretare un farmaco bisogna quindi specificare quale anello modifica. Un antagonista di un mediatore limita quel segnale; un broncodilatatore può opporsi alla risposta contrattile condivisa da più stimoli. Nessuna delle due osservazioni dimostra che la causa della malattia sia stata eliminata. Anche un miglioramento immediato della respirazione lascia aperta la domanda sul rischio di nuovi episodi e sulle modificazioni che si accumulano nel tempo.\n\nQuesta distinzione si ritrova nei test funzionali. Nella prova con broncodilatatore si osserva quanto il flusso espiratorio cambia dopo aver favorito il rilassamento del muscolo; nella provocazione bronchiale si misura invece la risposta a uno stimolo capace di restringere le vie aeree. Le due prove interrogano il sistema in direzioni diverse. Una risposta al broncodilatatore non misura direttamente la quantità di infiammazione, mentre una risposta eccessiva alla provocazione non identifica da sola la causa di quella sensibilità.\n\nIl contributo del corso distingue stimoli diretti e indiretti. La metacolina agisce sul muscolo liscio attraverso la via muscarinica, collegandosi al circuito contrattile descritto nel capitolo. Stimoli indiretti, come il mannitolo, coinvolgono il rilascio di mediatori da cellule delle vie aeree, fra cui i mastociti, prima della contrazione. Il punto di ingresso cambia, anche se la lettura finale riguarda il flusso. La distinzione aiuta a capire perché un test che intercetta più facilmente una risposta anomala possa essere meno specifico per l’asma: nessun risultato sostituisce il contesto clinico.\n\nConta anche lo stato del sistema al momento della misura. GINA ricorda che la risposta al broncodilatatore può non essere evidente fra gli episodi o dopo l’uso recente di un agonista β₂; il trattamento con ICS può ridurre la variabilità del flusso. Un singolo risultato negativo, quindi, non è una dimostrazione universale di assenza di asma. All’opposto, iperreattività alla metacolina può comparire anche in altre condizioni. Nell’esempio didattico di una misura normale durante trattamento e di sintomi variabili in altri momenti, la domanda corretta è come riconciliare storia, terapia e prove oggettive. Non ne discende un invito a sospendere farmaci o a provocare sintomi autonomamente: tempi e condizioni dei test appartengono alla valutazione clinica.",
      "formula": "Broncodilatatore → risposta al rilassamento. Stimolo diretto → muscolo; stimolo indiretto → mediatori → muscolo. Flusso misurato + momento + trattamento + storia clinica → interpretazione. Test positivo ≠ causa identificata; singolo test negativo ≠ esclusione universale. Schema didattico originale."
    },
    {
      "id": "allergia",
      "title": "L’asse allergene–IgE–mastocita è un modello, non tutta l’asma",
      "refs": [
        "KAT",
        "RAN",
        "APP",
        "CFI",
        "GINA"
      ],
      "text": "Nel modello di asma allergico, la sensibilizzazione prepara una risposta specifica. Le IgE associate ai recettori ad alta affinità dei mastociti permettono di riconoscere nuovamente l’allergene; l’attivazione libera mediatori capaci di modificare rapidamente tono bronchiale, permeabilità e secrezioni. Fra questi compaiono istamina, prostaglandine e leucotrieni cisteinilici. La presenza di più segnali spiega perché neutralizzarne uno non riproduca necessariamente l’effetto di un intervento sull’intera risposta.\n\nI linfociti T helper di tipo 2 e le loro citochine contribuiscono a organizzare questa rete. IL-4 e IL-13 partecipano alla risposta associata alle IgE; IL-5 sostiene la componente eosinofila. Gli eosinofili reclutati possono a loro volta rilasciare sostanze che alterano l’epitelio e mantengono la reattività. Lo schema rende leggibili diversi bersagli farmacologici senza ridurre tutte le cellule a un’unica catena lineare.\n\nNon tutti i pazienti hanno però una malattia guidata dallo stesso circuito allergico. Un sintomo dopo esercizio o infezione non prova un’allergia specifica, e un’allergia documentata non descrive da sola ogni meccanismo attivo nelle vie aeree. Nel ragionamento farmacologico, un biomarcatore va collegato alla domanda a cui può rispondere, senza trasformarlo in un’etichetta universale.\n\nIl passaggio dal modello allergico all’infiammazione di tipo 2 richiede un ulteriore livello. La sigla Th2 identifica una popolazione di linfociti T; tipo 2 descrive invece un programma immunitario al quale possono contribuire anche cellule linfoidi innate, le ILC2. Queste ultime offrono una via di partecipazione alla risposta eosinofila che non richiede di ricondurre ogni evento allo stesso riconoscimento allergene–IgE. Non si tratta di due malattie necessariamente separate: nello stesso tessuto possono cooperare componenti innate e adattative.\n\nL’epitelio collega l’ambiente a questa rete. Oltre alla funzione di barriera, può liberare segnali come TSLP, IL-33 e IL-25 in risposta a stimoli dannosi. Questi mediatori, spesso chiamati alarmini, comunicano con più popolazioni immunitarie. Il risultato non è soltanto un aumento di cellule: cambiano i segnali diretti verso muscolo, ghiandole e rivestimento delle vie aeree. Nel modello illustrato dal contributo del corso, IL-13 si collega anche al programma secretorio dell’epitelio; muco e contrazione diventano così due conseguenze distinguibili di una rete condivisa.\n\nQuesta convergenza spiega il valore e il limite della mappa dei bersagli. Omalizumab interviene sulle IgE; gli interventi sull’asse IL-5 riguardano soprattutto la risposta eosinofila; il blocco di IL-4Rα interferisce con segnali condivisi da IL-4 e IL-13. Il salbutamolo agisce invece sulla risposta contrattile attraverso β₂. Una riduzione del broncospasmo non rivela quale via immunitaria lo abbia favorito, e l’assenza di un’allergia documentata non dimostra l’assenza di ogni componente di tipo 2. La mappa orienta lo studio dei farmaci, mentre la selezione clinica richiede le condizioni specifiche discusse nelle sezioni successive.",
      "formula": "Allergene e risposta adattativa / stimoli epiteliali e risposta innata → circuiti tipo 2 parzialmente convergenti → eosinofili, muco e reattività bronchiale. Th2 indica una cellula; tipo 2 un programma. Il bersaglio del farmaco identifica il punto di intervento, non l’intera malattia. Schema didattico originale."
    },
    {
      "id": "fasi",
      "title": "Risposta precoce e tardiva: distinguere i tempi degli eventi",
      "refs": [
        "KAT",
        "RAN"
      ],
      "text": "I modelli sperimentali con esposizione all’allergene possono mostrare una prima riduzione del flusso espiratorio e una seconda fase dopo un intervallo. La fase precoce mette in evidenza mediatori già disponibili o prodotti rapidamente, con una componente contrattile importante. La fase tardiva richiama il reclutamento e l’attivazione di cellule infiammatorie, l’edema e l’aumento della reattività.\n\nQuesta rappresentazione aiuta a capire perché farmaci diversi modifichino parti diverse della risposta. Non autorizza a predire per ogni paziente due attacchi separati da un numero fisso di ore. Le curve dei manuali descrivono particolari condizioni sperimentali; nella malattia reale esposizioni, trattamenti e processi infiammatori possono sovrapporsi.\n\nUna riduzione del broncospasmo nella fase iniziale non è inoltre una misura completa del controllo della fase successiva. Per confrontare due interventi bisogna chiedere quale esito venga osservato: il flusso dopo uno stimolo, la persistenza dei sintomi, l’iperreattività o le riacutizzazioni. La distinzione fra meccanismo, tempo ed esito evita di usare un singolo grafico come prova di equivalenza terapeutica."
    },
    {
      "id": "beta2",
      "title": "β₂–Gs–AMP ciclico: opporsi alla contrazione",
      "refs": [
        "APP",
        "RAN",
        "KAT"
      ],
      "text": "L’agonista β₂ si lega a un recettore di membrana accoppiato prevalentemente a Gs. L’attivazione dell’adenilato ciclasi aumenta l’AMP ciclico, che modifica l’attività di effettori intracellulari, fra cui la protein-chinasi A. Nel muscolo liscio bronchiale questo sistema favorisce il rilassamento. Il secondo messaggero è l’AMP ciclico; PKA è una chinasi che traduce il segnale in modificazioni funzionali.\n\nIl punto decisivo è che l’agonista β₂ non deve occupare il recettore di ogni sostanza broncocostrittrice. Può contrastare funzionalmente una contrazione originata da più mediatori agendo su un percorso distinto. Questo è un esempio di antagonismo fisiologico: due segnali producono effetti opposti sul tessuto senza contendersi necessariamente lo stesso sito di legame.\n\nLa selettività per β₂ non significa esclusività per il bronco. La famiglia recettoriale è presente in altri tessuti e l’esposizione dipende anche dalla via di somministrazione. La denominazione del bersaglio non basta dunque a prevedere l’intero profilo di una molecola. Durata d’azione, rapidità d’insorgenza, dose effettivamente inalata e presenza di altri principi attivi vanno tenute distinte prima di passare dal modello recettoriale all’impiego del prodotto.",
      "formula": "Agonista β₂ → Gs → adenilato ciclasi → AMPc → effettori, inclusa PKA → rilassamento. AMPc è il messaggero; PKA è una chinasi. Schema originale del percorso prevalente, non elenco completo degli effettori."
    },
    {
      "id": "effettori",
      "title": "Dal segnale al muscolo: calcio, miosina e canali",
      "refs": [
        "CFI",
        "KAT",
        "KUME",
        "SAL"
      ],
      "text": "Per comprendere il rilassamento bisogna guardare anche al sistema che genera forza. Nel muscolo liscio, il calcio citosolico si lega alla calmodulina; il complesso attiva la chinasi delle catene leggere della miosina, MLCK. La fosforilazione della miosina favorisce l’interazione contrattile con l’actina. Una fosfatasi compie l’operazione opposta. Il tono dipende quindi sia dal segnale del calcio sia dalla regolazione dell’apparato contrattile: ridurre la disponibilità del segnale e ridurne l’effetto sulla contrazione sono operazioni distinte.\n\nLa via β₂–AMPc può intervenire a più livelli di questa rete. Gli schemi didattici richiamano la regolazione dei segnali che mobilizzano calcio, dell’attività contrattile e dei canali del potassio. L’apertura di canali KCa può favorire l’iperpolarizzazione. L’abstract sperimentale di Kume e collaboratori documenta una regolazione dei canali attraverso PKA e azioni di Gs non dipendenti dalla formazione di AMPc. Non ne deriva che ogni broncodilatazione richieda tutti questi passaggi, né che il contributo di ciascuno sia uguale in ogni preparazione o paziente.\n\nAnche l’effetto su un’altra cellula va tenuto distinto. Un agonista β₂ può ridurre il rilascio di mediatori mastocitari in determinate condizioni sperimentali; il documento del salmeterolo separa questa attività dall’effetto antinfiammatorio dei corticosteroidi. Il disegno di una freccia verso il mastocita non dimostra quindi che il broncodilatatore possa sostituire la terapia che controlla l’infiammazione. Il percorso recettoriale spiega una possibilità biologica; la sua rilevanza va misurata sul tessuto e sull’esito considerato."
    },
    {
      "id": "distretti",
      "title": "Muscolo, nervi ed epitelio: separare gli effetti",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "RHO",
        "HAAS"
      ],
      "text": "Il recettore β₂ compare in più componenti delle vie aeree, ma il suo significato funzionale cambia con la cellula. Nel muscolo liscio, l’agonista modifica direttamente il sistema che genera la contrazione. Se invece modifica il rilascio di un neurotrasmettitore o di un mediatore, cambia uno degli stimoli che raggiungono il muscolo. Questi effetti indiretti possono affiancare il rilassamento, senza coincidere con esso. La presenza dello stesso recettore non impone una risposta identica in tutti i distretti.\n\nLa trasmissione colinergica offre un esempio di come leggere una prova. Nell’esperimento su bronchi umani isolati descritto da Rhoden e collaboratori, alcuni agonisti inibivano la contrazione evocata dalla stimolazione elettrica dei nervi a concentrazioni inferiori a quelle richieste contro acetilcolina aggiunta dall’esterno. Questo confronto suggeriva un’azione a monte del muscolo, compatibile con una modulazione presinaptica. L’esito misurato era però la forza di contrazione: non una quantificazione diretta dell’acetilcolina liberata.\n\nUn altro abstract, di de Haas e collaboratori, descrive una preparazione diversa: trachea di cavia privata dell’epitelio, con misura diretta del neurotrasmettitore. In quelle condizioni il fenoterolo aumentava il rilascio di acetilcolina. I due risultati non consentono di attribuire a ogni agonista β₂ un’inibizione nervosa universale. Specie, integrità del tessuto, molecola, concentrazione e misura scelta delimitano l’interpretazione. Il dato animale non stabilisce da solo che il farmaco peggiori l’asma nell’uomo, così come la preparazione umana isolata non quantifica il contributo di questa via nel paziente.\n\nL’epitelio introduce un terzo esito: l’aumento dell’attività ciliare può favorire il trasporto del muco. Muovere secrezioni e allargare il lume sono processi distinti; nessuno dei due dimostra, da solo, la risoluzione dell’infiammazione. Per studiare un broncodilatatore conviene quindi precisare ogni volta cellula bersaglio, risposta osservata e scala della misura: recettore, tessuto o beneficio clinico."
    },
    {
      "id": "selettivita",
      "title": "Selettività recettoriale ed esposizione: perché inalato non significa solo locale",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "VEN"
      ],
      "text": "Definire un agonista selettivo per β₂ significa descrivere una preferenza relativa per un sottotipo recettoriale nelle condizioni del confronto. Non significa che riconosca un recettore esclusivo del bronco, né che non possa produrre effetti altrove. I rapporti di selettività riportati nelle tabelle sperimentali dipendono da ciò che viene misurato: legame o risposta funzionale, sistema biologico e concentrazioni. Prima di confrontare due numeri occorre verificare che esprimano la stessa proprietà. Una graduatoria di questi rapporti non è, da sola, una graduatoria di sicurezza nei pazienti.\n\nLa concentrazione raggiunta aggiunge una seconda dimensione. La preferenza per un bersaglio si confronta con l’esposizione effettiva dei diversi tessuti: aumentando l’esposizione possono emergere risposte meno evidenti a concentrazioni inferiori. Inoltre, un effetto indesiderato può derivare dallo stesso sottotipo recettoriale utile nel bronco, espresso in un altro distretto. Non ogni effetto sistemico dimostra quindi la perdita completa della selettività o l’attivazione esclusiva di β₁. Il collegamento con i capitoli su recettori e legame aiuta a distinguere affinità, attivazione ed effetto d’organo.\n\nLa via inalatoria favorisce l’esposizione delle vie aeree ma non sigilla il farmaco nel polmone. La scheda del salbutamolo distingue una quota depositata nelle vie respiratorie, assorbibile nei tessuti e nel circolo, e una quota deglutita, assorbita dall’intestino e soggetta a primo passaggio. Dispositivo, aerosol e modalità d’uso influenzano la deposizione; una percentuale descritta per una preparazione non si trasferisce automaticamente a ogni inalatore.\n\nQuesta distinzione spiega perché occorra considerare insieme beneficio bronchiale e tollerabilità. Tremore, palpitazioni, tachicardia e ipokaliemia sono possibili effetti riportati nel documento del salbutamolo; non compaiono inevitabilmente in ogni utilizzatore. La sola etichetta β₂-selettivo non li esclude. Il ragionamento farmacologico comprende dunque tre domande collegate: quale recettore viene attivato, dove arriva la molecola e quale risposta produce quel tessuto. Dose erogata, quantità depositata e quantità che raggiunge il circolo restano grandezze diverse.",
      "formula": "Preferenza per un recettore + esposizione dei tessuti → risposte locali e sistemiche. Selettività β₂ ≠ esclusività bronchiale; inalazione ≠ assenza di assorbimento. Schema concettuale originale, senza rapporti numerici o equivalenze di dose."
    },
    {
      "id": "tempi",
      "title": "Rapido e prolungato: due proprietà indipendenti",
      "refs": [
        "KAT",
        "RAN",
        "APP",
        "FOR",
        "SAL",
        "CFI",
        "VEN"
      ],
      "text": "Le sigle SABA e LABA distinguono agonisti β₂ secondo la durata d’azione: breve nel primo caso, lunga nel secondo. Non ordinano necessariamente la velocità con cui compare la broncodilatazione. Il formoterolo è un esempio decisivo: appartiene ai LABA e può iniziare ad agire rapidamente. La scheda del prodotto budesonide–formoterolo descrive un’insorgenza entro pochi minuti e una persistenza di almeno dodici ore dopo una dose. Lungo non significa dunque lento.\n\nPer spiegare queste differenze, i manuali considerano la distribuzione della molecola vicino al recettore, la sua interazione con la membrana e le caratteristiche del legame. La lipofilia può favorire la permanenza locale, ma non è un unico numero dal quale ricavare automaticamente sia l’inizio sia la fine dell’effetto. Raggiungere il bersaglio, restare disponibile nelle sue vicinanze e attivarlo sono eventi collegati, non sinonimi. Inoltre, la concentrazione nel plasma non descrive necessariamente quella presente nel compartimento bronchiale dopo inalazione.\n\nIl confronto con salmeterolo impedisce un’altra scorciatoia. Anche questo agonista dura a lungo, ma il suo documento di prodotto esclude il trattamento dei sintomi acuti. I due LABA non diventano quindi intercambiabili in ogni strategia. Nelle associazioni, il nome del broncodilatatore va letto insieme al corticosteroide, al dispositivo e alle indicazioni della preparazione: la rapidità della singola molecola non autorizza da sola qualsiasi uso della combinazione. I riferimenti qui consultati sono britannici; non costituiscono una verifica delle autorizzazioni italiane.\n\nAnche la struttura chimica chiarisce soltanto una parte del tempo d’azione. Salbutamolo e terbutalina non possiedono il gruppo catecolico dell’adrenalina e non ne condividono la stessa degradazione da parte della catecolo-O-metiltransferasi. Questo non li rende resistenti a ogni eliminazione: per il salbutamolo, il documento di prodotto descrive coniugazione a solfato ed escrezione renale. Stabilità metabolica, permanenza vicino al bersaglio e durata della risposta bronchiale sono quindi aspetti distinti. Cambiare la via di somministrazione modifica il percorso verso il bersaglio; non rende automaticamente una formulazione orale equivalente a quella inalatoria.",
      "formula": "Inizio dell’effetto: quando compare la broncodilatazione. Durata: quanto persiste nell’esito osservato. Formoterolo: rapido e prolungato; salmeterolo: prolungato, non destinato al sollievo acuto. Due assi temporali distinti; schema originale, senza dosi o equivalenze fra prodotti."
    },
    {
      "id": "adattamento",
      "title": "Tolleranza: distinguere recettori, risposta e controllo della malattia",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "TAY",
        "GINA"
      ],
      "text": "La stimolazione ripetuta di un recettore può modificare la risposta successiva. Desensibilizzazione indica una riduzione della risposta allo stimolo; down-regulation descrive una diminuzione dei recettori disponibili. Le due condizioni possono associarsi, ma non sono sinonimi. Un recettore presente può trasmettere meno efficacemente il segnale, mentre la sua disponibilità può cambiare attraverso processi di internalizzazione e regolazione dell’espressione. Il capitolo sugli adattamenti recettoriali permette di approfondire questi passaggi. Non serve ipotizzare un esaurimento permanente dell’AMP ciclico per spiegare ogni perdita di risposta.\n\nNel bronco bisogna poi specificare quale risposta viene misurata. La capacità di dilatare una via aerea già contratta, la protezione dalla contrazione provocata da uno stimolo e la frequenza delle riacutizzazioni sono esiti differenti. Una protezione che diminuisce non implica che ogni broncodilatazione sia scomparsa. Allo stesso modo, un peggioramento della malattia non identifica automaticamente il meccanismo molecolare responsabile. Infiammazione, esposizione agli stimoli e modalità del trattamento partecipano a una scala più ampia di quella del singolo recettore.\n\nIl grafico storico discusso nei materiali del corso offre un esempio utile. Nello studio di Taylor del 1993, l’impiego regolare di fenoterolo si associava a esiti peggiori nel confronto con placebo. L’abstract riporta però che la risposta broncodilatatrice era mantenuta. Il numero di persone ancora senza riacutizzazione nel tempo non è quindi una misura diretta della sensibilità o della quantità dei recettori β₂. È un risultato clinico da interpretare nel disegno di quel confronto storico, non una dimostrazione che ogni strategia contenente un β₂-agonista produca lo stesso esito.\n\nI corticosteroidi possono influenzare anche la regolazione del sistema β₂, ma nell’asma il loro ruolo centrale è il controllo dell’infiammazione. Non sono una garanzia di annullamento di ogni adattamento recettoriale. GINA descrive conseguenze sfavorevoli dell’uso regolare o eccessivo dei SABA: questo richiamo va collegato alla strategia antinfiammatoria e alla rivalutazione del controllo, evitando di ridurre il problema al semplice consumo di recettori. La durata del trattamento, da sola, non prova irreversibilità e non giustifica il rinvio di una terapia necessaria.",
      "formula": "Tre livelli da collegare: disponibilità/accoppiamento del recettore → risposta del tessuto → esiti della malattia. Ogni freccia richiede prove; il numero di riacutizzazioni non misura direttamente il numero dei recettori. Schema originale, senza ricostruzione del grafico della fonte."
    },
    {
      "id": "sicurezza",
      "title": "Effetti sistemici: leggere il contesto oltre il nome del recettore",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "VEN"
      ],
      "text": "Gli effetti utili e indesiderati vanno collegati alla distribuzione dei bersagli e all’esposizione. Un β₂-agonista può influenzare il muscolo scheletrico e il metabolismo, oltre al bronco. Tremore e spostamento del potassio verso le cellule non richiedono di attribuire ogni risposta al solo β₁. Il rischio individuale non si ricava dalla sola etichetta di selettività: contano intensità dell’esposizione, condizioni di partenza e trattamenti associati.\n\nIl documento del salbutamolo richiede cautela nelle cardiopatie importanti; non stabilisce una controindicazione generale per ogni cardiopatia. Tachicardia e palpitazioni vanno distinte da un’aritmia documentata. L’ipokaliemia può diventare più rilevante in presenza di ipossia e di altri farmaci che la favoriscono: la stessa risposta metabolica può quindi assumere un peso diverso secondo il contesto.\n\nUn’apparente perdita di efficacia richiede anche di identificare il sintomo osservato. La scheda segnala la possibilità di acidosi lattica con esposizioni elevate a SABA: una respirazione ancora rapida, anche dopo miglioramento del broncospasmo, non dimostra da sola che serva più broncodilatatore. Questo è un esempio di diagnosi differenziale da affrontare clinicamente, non un criterio per modificare autonomamente la terapia. Un bisogno crescente di sollievo o una risposta insufficiente richiedono una rivalutazione del controllo della malattia."
    },
    {
      "id": "vago",
      "title": "Il circuito vagale e il blocco muscarinico",
      "refs": [
        "KAT",
        "RAN",
        "TIO",
        "CFI",
        "APP",
        "GINA"
      ],
      "text": "Le vie parasimpatiche rilasciano acetilcolina, che contribuisce al tono della muscolatura bronchiale. Gli stimoli irritativi possono attivare riflessi con una componente afferente sensoriale e una risposta efferente colinergica. Il recettore M₃ del muscolo liscio è un bersaglio importante dell’effetto broncocostrittore. Ridurre questo segnale e stimolare β₂ conducono entrambi al rilassamento, attraverso operazioni farmacologiche differenti.\n\nUn antimuscarinico impedisce all’acetilcolina di attivare il suo bersaglio; un agonista β₂ attiva invece una via che si oppone alla contrazione. Il primo intervento dipende dalla componente colinergica del tono presente. Non equivale a neutralizzare direttamente tutti i mediatori liberati durante un processo infiammatorio.\n\nLa mappa muscarinica va letta per sede, non soltanto per sigla. M₁ contribuisce a modulare la trasmissione colinergica a livello gangliare; M₂ presinaptico regola la quantità di acetilcolina rilasciata; M₃ partecipa alla contrazione del muscolo e alla risposta secretoria delle ghiandole delle vie aeree. Agire sul segnale in ingresso, sul suo freno o sulla cellula che esegue la risposta produce conseguenze diverse, pur coinvolgendo la stessa famiglia recettoriale. Queste funzioni non implicano che ogni sottotipo sia presente in un’unica sede.\n\nAnche la secrezione merita una distinzione. Ridurre la componente ghiandolare indotta dall’acetilcolina non equivale a eliminare tutto il muco già presente né a spegnere il processo infiammatorio che ne favorisce l’accumulo. La risposta all’antimuscarinico dipende dalla componente colinergica effettivamente coinvolta: l’etichetta asma, da sola, non ne quantifica il contributo nel singolo episodio. Uno schema dei recettori aiuta quindi a formulare un’ipotesi fisiologica, mentre la sua rilevanza clinica richiede misure appropriate.\n\nTiotropio illustra anche la differenza fra affinità e permanenza sul recettore. Il documento di prodotto descrive affinità per più sottotipi muscarinici e una dissociazione lenta da M₃, più rapida da M₂. La durata non dimostra quindi un legame esclusivo a M₃. La formulazione inalatoria indirizza l’esposizione verso le vie aeree, senza rendere impossibili effetti anticolinergici sistemici. Ipratropio e tiotropio rimangono esempi distinti: stesso ambito recettoriale non significa identità di cinetica o di ruolo clinico.\n\nNel circuito nervoso, M₂ presinaptico contribuisce a frenare il rilascio di acetilcolina. Un antagonista che blocca anche questo sottotipo può quindi interferire con un freno fisiologico mentre ostacola M₃ sul muscolo. Questa possibilità aiuta a leggere il circuito, ma non consente di spiegare tutta l’efficacia clinica di ipratropio con un unico recettore. La risposta dipende anche da quanta parte dell’ostruzione è sostenuta dal tono vagale e da come il farmaco raggiunge il bersaglio.\n\nLa struttura ammonica quaternaria limita il passaggio attraverso alcune membrane e favorisce un’azione prevalentemente periferica. Non equivale ad assorbimento nullo: per tiotropio restano rilevanti effetti anticolinergici, esposizione oculare, disturbi urinari e funzione renale. Un minore accesso al sistema nervoso centrale non esclude effetti in altri organi. Anche il ruolo terapeutico va specificato: GINA colloca ipratropio come possibile aggiunta di breve durata nelle riacutizzazioni gravi; il documento di tiotropio descrive invece un trattamento aggiuntivo di mantenimento nell’asma. Nessuna delle due descrizioni autorizza a sostituire liberamente le molecole o a rimpiazzare il trattamento antinfiammatorio."
    },
    {
      "id": "confronto",
      "title": "Confrontare broncodilatatori: che cosa dimostra una curva",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "RUF",
        "GINA"
      ],
      "text": "Due farmaci possono migliorare lo stesso parametro attraverso bersagli differenti. Per confrontarli bisogna definire quale risposta si misura, quando la si misura e in quale popolazione. Il FEV₁ è il volume espirato nel primo secondo di un’espirazione forzata; una sua variazione dopo inalazione descrive una risposta funzionale delle vie aeree. Non è una misura diretta del numero di recettori occupati, della quantità di acetilcolina liberata o dell’infiammazione residua.\n\nIl confronto storico di Ruffin del 1977, ripreso nel corso, studiava salbutamolo e ipratropio in 25 persone con asma, con singola somministrazione, doppio cieco e disegno crossover. L’abstract descrive una broncodilatazione maggiore con salbutamolo nelle prime tre ore, mentre tra quattro e otto ore la differenza non risultava significativa. Questo risultato rende evidente l’importanza della finestra temporale: non autorizza a ordinare tutte le molecole delle due classi secondo una superiorità universale. Una differenza non significativa, inoltre, non costituisce da sola una dimostrazione di equivalenza.\n\nLa possibilità che il blocco M₂ aumenti il rilascio di acetilcolina è un’ipotesi meccanicistica distinta. Per attribuirle la differenza tra le curve occorrerebbe un esperimento capace di separarla dalle altre spiegazioni, come il contributo vagale iniziale, l’esposizione locale e la cinetica della risposta. Il confronto funzionale fra due medicinali, da solo, non compie questa separazione.\n\nLa domanda terapeutica è ancora più ampia: interessa il sollievo immediato, il mantenimento del controllo o la prevenzione delle riacutizzazioni? Un risultato dopo singola somministrazione risponde a una domanda limitata e non sostituisce le prove sulle strategie nel tempo. Nell’asma il confronto tra broncodilatatori va perciò collegato al controllo dell’infiammazione e al ruolo specifico di ciascuna preparazione, già discusso nelle sezioni precedenti. La complementarità dei meccanismi offre una spiegazione farmacologica delle associazioni; la scelta clinica richiede evidenze sulla situazione nella quale vengono impiegate.",
      "formula": "Bersaglio e sede → ipotesi sul meccanismo. FEV₁ nel tempo → risposta funzionale osservata. Sintomi e riacutizzazioni nel tempo → controllo della malattia. Collegare i livelli senza sostituire una misura con l’altra; schema originale, senza riprodurre la curva della fonte."
    },
    {
      "id": "sintesileucotrieni",
      "title": "Dalla sintesi al recettore: due punti diversi della via dei leucotrieni",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "ZIL"
      ],
      "text": "La parola antileucotriene descrive un risultato generale, ma nasconde bersagli differenti. Il percorso parte dai fosfolipidi di membrana, dai quali può essere liberato acido arachidonico. La via della 5-lipossigenasi porta alla formazione di intermedi da cui derivano sia LTB₄ sia i leucotrieni cisteinilici LTC₄, LTD₄ e LTE₄. Mastociti, eosinofili e altre cellule infiammatorie possono contribuire a questa produzione. La stessa origine biochimica non rende identici tutti i prodotti: cambiano recettori e risposte cellulari.\n\nZileuton interviene sulla 5-lipossigenasi, prima che i mediatori raggiungano i loro recettori. Il documento di prodotto lo identifica come inibitore della sintesi e descrive una riduzione della formazione di LTB₄ e dei cisteinilici. Montelukast e zafirlukast agiscono invece sul riconoscimento del mediatore da parte di CysLT₁. Il ligando può essere ancora prodotto, ma una delle vie con cui esercita i suoi effetti viene ostacolata. Un antagonista CysLT₁ non diventa per questo un inibitore della sintesi di LTB₄ o un antagonista di tutti i recettori dei leucotrieni.\n\nQuesta distinzione aiuta anche a leggere gli esperimenti. Una riduzione del mediatore misurato in un campione e una minore risposta del tessuto al mediatore aggiunto dall’esterno sono risultati diversi: possono indicare, rispettivamente, un intervento sulla produzione o sulla risposta. Per attribuire il bersaglio servono comunque controlli appropriati, perché il solo miglioramento del calibro bronchiale non localizza il punto d’azione.\n\nIntervenire più a monte non dimostra automaticamente un vantaggio clinico maggiore. Occorre conoscere esposizione, vie ancora attive ed effetti indesiderati della molecola. La distinzione fra enzima e recettore resta valida anche quando una classificazione terapeutica raccoglie tutti questi farmaci sotto la stessa voce.",
      "formula": "Acido arachidonico → 5-lipossigenasi → leucotrieni → recettori → risposte. Zileuton: riduce la formazione dei mediatori. Montelukast: antagonizza CysLT₁. Sintesi, riconoscimento e risposta sono livelli diversi. Schema originale."
    },
    {
      "id": "leucotrieni",
      "title": "Leucotrieni: bloccare un recettore non blocca ogni mediatore",
      "refs": [
        "KAT",
        "RAN",
        "MON",
        "CFI",
        "APP"
      ],
      "text": "I leucotrieni derivano dal metabolismo dell’acido arachidonico, ma non costituiscono una famiglia funzionalmente indistinta. Per il broncospasmo sono particolarmente rilevanti i leucotrieni cisteinilici, come LTC₄ e LTD₄. Confonderli con LTB₄ cancella differenze fra ligandi, recettori e attività sulle cellule infiammatorie. La correzione è essenziale quando una tabella o una frase usa semplicemente la parola leucotriene.\n\nMontelukast antagonizza CysLT₁ e limita risposte a mediatori di questa via. Non è un antagonista muscarinico, non è un agonista β₂ e non sopprime la produzione di tutti gli eicosanoidi. La presenza di un beneficio funzionale non rende intercambiabili questi meccanismi.\n\nIl documento di prodotto esclude l’uso del montelukast orale come trattamento dell’attacco acuto e segnala possibili eventi neuropsichiatrici. L’informazione sulla sicurezza va mantenuta accanto al bersaglio: la via orale o l’assenza di un corticosteroide non dimostrano automaticamente un trattamento più adatto o privo di rischi. Indicazioni, formulazione e contesto del singolo medicinale richiedono una valutazione separata.\n\nCysLT₁ collega il mediatore a più compartimenti. Sul muscolo liscio, limitare il segnale contrattile può ridurre una componente del broncospasmo; sulle cellule immunitarie, la stessa via partecipa a reclutamento e attivazione. Secrezione di muco e permeabilità vascolare completano il quadro delle risposte associate ai cisteinilici. Le espressioni azione diretta e indiretta diventano però ambigue se non si precisa il riferimento: possono distinguere muscolo e cellule infiammatorie, oppure enzima e recettore. Sono due confronti differenti. Ridurre gli eosinofili nell’escreato, infine, non significa controllare ogni circuito dell’infiammazione cronica: occorre distinguere il cambiamento di un indicatore dal risultato complessivo sulla malattia.",
      "formula": "β₂: attivare una via rilassante. M₃: impedire il segnale dell’acetilcolina. CysLT₁: limitare una via dei leucotrieni. Tre interventi distinti; la convergenza sull’organo non prova equivalenza clinica. Schema originale."
    },
    {
      "id": "ruololeucotrieni",
      "title": "Antileucotrieni: dal razionale alla misura del beneficio e del rischio",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "RAN",
        "GINA",
        "MON",
        "ZIL"
      ],
      "text": "La via orale può semplificare alcune difficoltà pratiche della somministrazione, ma non misura l’efficacia antinfiammatoria né sostituisce il confronto fra esiti. GINA 2026 considera gli antagonisti dei leucotrieni meno efficaci dei corticosteroidi inalatori, soprattutto nella prevenzione delle riacutizzazioni. Una buona risposta individuale e una differenza media fra trattamenti possono coesistere: la prima non cancella la seconda. Per questo una graduatoria generica di seconda o terza linea dice meno di una descrizione precisa dell’obiettivo e del contesto.\n\nIl montelukast può contribuire al controllo dell’asma in indicazioni definite, ma il documento britannico ne esclude l’impiego orale per risolvere l’attacco acuto. La distinzione non contraddice l’osservazione sperimentale di un effetto sul calibro bronchiale: una variazione funzionale non dimostra da sola l’idoneità al soccorso. Anche una minore risposta a uno stimolo non autorizza a considerarsi protetti contro qualsiasi esposizione; il documento conserva le precauzioni per aspirina e FANS nei soggetti sensibili.\n\nLa tollerabilità richiede una lettura più ampia di cefalea e disturbi gastrointestinali. Per montelukast sono segnalati eventi neuropsichiatrici, comprendenti alterazioni del sonno, del comportamento e dell’umore. Per zileuton il documento statunitense richiama in particolare il danno epatico e il controllo della funzione del fegato, oltre a eventi neuropsichiatrici. Questi profili non si possono ricavare dalla sola selettività del bersaglio né trasferire automaticamente, con la stessa frequenza, a ogni farmaco della classe.\n\nIl ragionamento farmacologico deve quindi unire tre domande: quale segnale viene modificato, quale beneficio è stato misurato e quale rischio accompagna l’esposizione? La risposta serve a comprendere il trattamento; non costituisce uno schema per sostituire o sospendere una terapia.",
      "formula": "Bersaglio → effetto sul tessuto → esito clinico → bilancio beneficio/rischio. Un miglioramento del flusso non dimostra controllo completo dell’infiammazione, equivalenza agli ICS o idoneità al trattamento dell’attacco. Schema originale."
    },
    {
      "id": "corticosteroidi",
      "title": "Glucocorticoidi: modificare il programma infiammatorio",
      "refs": [
        "RAN",
        "KAT",
        "CFI",
        "APP"
      ],
      "text": "I glucocorticoidi agiscono attraverso un recettore intracellulare che regola l’espressione di numerosi geni. Nel tessuto bronchiale il risultato interessa produzione di citochine, reclutamento e attività delle cellule infiammatorie e permeabilità microvascolare. L’effetto va quindi ricostruito a livello di rete cellulare, oltre che di singolo recettore.\n\nRidurre l’infiammazione può diminuire edema e iperreattività. Non significa che il corticosteroide sia un rilassante diretto del muscolo liscio con lo stesso profilo temporale di un agonista β₂. La distinzione rimane importante anche quando entrambi i principi attivi sono contenuti nello stesso inalatore: l’associazione riunisce funzioni complementari, senza trasformarle in un unico meccanismo.\n\nLa via inalatoria permette di portare il farmaco vicino alla sede di interesse. Tuttavia, la quantità erogata dal dispositivo, quella che raggiunge le vie aeree e quella assorbita nell’organismo non coincidono necessariamente. Per questo l’aggettivo locale non va interpretato come assenza assoluta di esposizione sistemica. Anche il confronto fra molecole richiede attenzione alla formulazione e alla tecnica d’uso, oltre che alla potenza recettoriale: un nome di classe non sostituisce le caratteristiche del prodotto.\n\nIl recettore glucocorticoide collega il riconoscimento della molecola alla regolazione della trascrizione. Dopo il legame, il complesso può raggiungere il nucleo e interagire con elementi di risposta nel DNA, chiamati GRE. Cambia così la produzione di proteine che sostengono o limitano la risposta infiammatoria. Parlare di regolazione genica non significa spegnere indiscriminatamente ogni funzione della cellula: il risultato dipende dal tipo cellulare, dai geni accessibili e dai segnali che sono già attivi.\n\nNelle vie aeree si possono seguire alcune conseguenze concrete. Una minore produzione di citochine che sostengono gli eosinofili ne modifica reclutamento e attività; una riduzione della permeabilità vascolare limita la componente edematosa. Anche epitelio e cellule immunitarie partecipano alla risposta. Questi cambiamenti possono ridurre la facilità con cui un nuovo stimolo restringe il bronco, pur senza esercitare direttamente la stessa azione dell’agonista sul muscolo.\n\nLe vie dei mediatori lipidici richiedono una precisazione. La regolazione di COX-2 e l’induzione di proteine come annessina-1 compaiono nei modelli dell’azione antinfiammatoria. Rang & Dale avverte però che il possibile collegamento annessina–fosfolipasi A₂ non dimostra da solo quale contributo abbia all’efficacia terapeutica nell’asma. Analogamente, modificare citochine associate alla risposta allergica non equivale a neutralizzare direttamente le IgE già presenti. È il livello della prova a stabilire quanto peso attribuire a ogni freccia dello schema.\n\nIl controllo durante il trattamento va infine distinto dalla scomparsa della predisposizione. Il miglioramento di sintomi e reattività non dimostra una guarigione definitiva o l’arresto di ogni processo strutturale. L’effetto farmacologico modifica una rete attiva; la sua durata e la sua entità vanno valutate con misure cliniche e funzionali.\n\nAnche il numero delle cellule presenti nella mucosa dipende da più processi: arrivo dal sangue, permanenza, sopravvivenza e rimozione. Modificando citochine e segnali di adesione, il corticosteroide può ridurre il reclutamento degli eosinofili e favorirne la scomparsa dal tessuto. La diminuzione dei mastociti presenti nella mucosa va distinta dall’inibizione istantanea della liberazione di ogni loro mediatore. Questa dinamica aiuta a capire perché il rimodellamento della risposta cellulare abbia tempi diversi dal rilassamento del muscolo, senza assegnare a tutte le persone una stessa durata del beneficio.",
      "formula": "Glucocorticoide → recettore intracellulare → regolazione della trascrizione → cambiamenti di mediatori e risposte cellulari → controllo dell’infiammazione. I passaggi hanno tempi differenti; una via biochimica proposta non ne quantifica il contributo clinico. Schema originale."
    },
    {
      "id": "cooperazione",
      "title": "Corticosteroide e agonista β₂: cooperazione fra segnali diversi",
      "refs": [
        "CFI",
        "APP",
        "RAN",
        "KAT",
        "GINA",
        "BUD"
      ],
      "text": "L’associazione fra corticosteroide e agonista β₂ si comprende distinguendo la disponibilità del recettore dalla sua attivazione. I materiali didattici mostrano che i glucocorticoidi possono aumentare l’espressione dei recettori β₂ e favorire la risposta alla stimolazione adrenergica. Il corticosteroide agisce sul programma cellulare che rende disponibile il bersaglio; l’agonista occupa quel bersaglio e avvia il segnale che favorisce il rilassamento. Aumentare il numero di recettori non equivale quindi a stimolarli direttamente.\n\nQuesto collegamento offre un razionale per la complementarità, ma non basta a spiegare ogni beneficio della combinazione. Il corticosteroide riduce anche processi infiammatori che mantengono l’iperreattività, mentre il broncodilatatore interviene sul tono. Le due componenti possono migliorare aspetti differenti della stessa malattia. La loro associazione non va ridotta a un espediente per produrre più recettori né descritta come una garanzia che la tolleranza scompaia. Desensibilizzazione, numero dei recettori e protezione da uno stimolo rimangono variabili distinte, già incontrate nel capitolo sugli adattamenti.\n\nAnche il tempo va riferito a un esito preciso. L’avvio di una risposta molecolare, un primo miglioramento funzionale e il controllo dell’iperreattività non coincidono. La scheda della budesonide inalatoria descrive un beneficio che si sviluppa nel tempo e ne esclude l’impiego isolato per il sollievo rapido. Nelle combinazioni utilizzate come sollievo antinfiammatorio è il broncodilatatore appropriato a fornire la componente rapida: la presenza dello steroide non rende intercambiabili tutti gli inalatori.\n\nPer questo la divisione fra farmaco di fondo e farmaco sintomatico va letta come distinzione di obiettivi. GINA comprende anche ICS-formoterolo al bisogno senza mantenimento quotidiano negli adulti e adolescenti ai livelli iniziali del percorso preferito. La protezione antinfiammatoria può essere collegata al sollievo; il regime concreto dipende comunque dalla strategia, dall’età e dal prodotto."
    },
    {
      "id": "esposizioneics",
      "title": "Dove arriva lo steroide: deposizione, primo passaggio e rischi",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "RAN",
        "BUD",
        "GINA"
      ],
      "text": "L’inalazione distribuisce la dose fra compartimenti differenti. Una parte raggiunge le vie respiratorie, una parte resta nel dispositivo o nel distretto orofaringeo e una parte viene deglutita. La frazione respiratoria può agire localmente e passare nel sangue attraverso il polmone; quella deglutita può essere assorbita dall’intestino e attraversare il fegato prima di raggiungere il circolo sistemico. Questi due percorsi spiegano perché un intenso primo passaggio possa ridurre il contributo intestinale senza annullare quello polmonare.\n\nBudesonide offre un esempio: il documento di prodotto descrive un’estesa biotrasformazione epatica e il coinvolgimento di CYP3A. Se il metabolismo viene inibito, l’esposizione sistemica può aumentare anche quando la via è inalatoria. Ritenzione polmonare, potenza recettoriale e metabolismo contribuiscono insieme al profilo della preparazione; non si può ricavare una dose equivalente dal solo nome della molecola o confrontare direttamente la quantità erogata con una dose orale.\n\nLa deposizione locale ha conseguenze proprie. Candidosi orofaringea e alterazioni della voce sono effetti riconosciuti; una generica lesione della bocca non identifica automaticamente un’infezione da Candida. GINA indica il risciacquo con eliminazione dell’acqua dopo l’uso degli ICS e, per gli inalatori pressurizzati compatibili, l’impiego dello spaziatore. Lo spaziatore modifica l’aerosol prima dell’inalazione, mentre il risciacquo agisce sul residuo nella bocca: svolgono funzioni differenti e non sono accessori intercambiabili per qualsiasi dispositivo.\n\nL’esposizione sistemica spiega invece rischi come soppressione surrenalica ed effetti sulla crescita, soprattutto in particolari condizioni di dose, durata e suscettibilità. Il documento della budesonide ne richiede la considerazione anche con terapia inalatoria. Questo non rende identici i rischi della via orale e inalatoria: mostra perché la valutazione debba collegare beneficio bronchiale, esposizione complessiva e caratteristiche della persona, senza promettere un’azione esclusivamente locale.\n\nLo spaziatore rende visibile il ruolo della fisica dell’aerosol. Nella camera si può depositare una parte delle particelle che altrimenti raggiungerebbero il distretto orofaringeo; cambia così la distribuzione del farmaco fra dispositivo, bocca e polmone. Le immagini didattiche confrontano condizioni specifiche: le percentuali mostrate non sono costanti valide per ogni inalatore o tecnica. GINA collega lo spaziatore per pMDI a una migliore distribuzione polmonare e a minori effetti locali degli ICS. Rimangono necessari compatibilità del dispositivo e controllo della tecnica.\n\nLa distanza fra dose prescritta ed esposizione effettiva può essere studiata anche attraverso il monitoraggio dell’inalatore. Un contatore registra erogazioni; un sensore può aggiungere informazioni sul momento d’uso e, secondo il sistema, sul gesto inspiratorio. Questi dati descrivono passaggi dell’assunzione, mentre la deposizione dipende dall’interazione fra aerosol, dispositivo e tecnica. Registrare un’attivazione non misura direttamente la quantità che ha raggiunto il polmone, la concentrazione nella cellula o l’attivazione del recettore dei glucocorticoidi. Il dato digitale va quindi collocato nel percorso fisico e farmacologico già descritto.\n\nIl suo valore emerge quando aiuta a riconoscere un ostacolo concreto. Un’interruzione nell’uso e una difficoltà tecnica possono produrre entrambe un’esposizione insufficiente, ma richiedono spiegazioni differenti. Il confronto dei dati con il gesto osservato e con l’esperienza della persona permette di distinguere questi problemi. Il feedback è parte dell’intervento: raccogliere informazioni senza renderle comprensibili o utilizzabili non equivale a correggere la somministrazione.\n\nPer valutare questi strumenti occorre poi separare il processo dall’esito. Più assunzioni registrate possono documentare un miglioramento dell’aderenza, mentre meno riacutizzazioni o una migliore qualità di vita documentano un beneficio clinico. GINA riporta risultati favorevoli per alcuni interventi digitali, ma anche incertezze su diversi esiti e contesti; l’aumento dell’aderenza non si traduce necessariamente in tutti i benefici attesi. La tecnologia aiuta a ricostruire l’esposizione e a discuterla, senza diventare una misura universale dell’efficacia del farmaco.",
      "formula": "Quota respiratoria → azione nelle vie aeree + possibile assorbimento sistemico. Quota deglutita → intestino → primo passaggio epatico → quota residua in circolo. Primo passaggio elevato ≠ assenza di esposizione polmonare sistemica. Schema originale, senza percentuali o equivalenze di dose."
    },
    {
      "id": "cromoni",
      "title": "Cromoni: prevenire il rilascio dei mediatori non significa rilassare il bronco",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "CRO"
      ],
      "text": "Cromoglicato e nedocromil aiutano a distinguere tre passaggi che una semplice misura del calibro bronchiale può confondere: produzione o liberazione del mediatore, riconoscimento del mediatore da parte del recettore e contrazione del muscolo. Ridurre la quantità di istamina liberata da una cellula non equivale a bloccare il recettore dell’istamina; entrambe le azioni, a loro volta, sono diverse dall’attivazione del segnale β₂ che favorisce il rilassamento. La sede nella sequenza causale conta quanto il risultato finale osservato.\n\nIl termine stabilizzatore mastocitario descrive la capacità, osservata in determinati sistemi sperimentali, di limitare la degranulazione e il rilascio dei mediatori dopo uno stimolo. Non identifica da solo un unico recettore né fornisce una spiegazione completa dell’effetto nell’asma. Katzung richiama l’attività anche su cellule diverse dai mastociti e l’inibizione di risposte tardive dopo che la fase precoce si è già verificata. Rang & Dale osserva che una maggiore potenza sperimentale contro il rilascio di istamina non si traduce necessariamente in maggiore efficacia nella malattia. I due argomenti convergono su un limite: il modello è utile, ma non esaurisce la rete biologica.\n\nNe deriva una cautela anche per la ricerca. Se una risposta diminuisce dopo un cromone, non si può attribuirla automaticamente ed esclusivamente ai mastociti. Occorre separare il tipo di cellula studiato, lo stimolo applicato, il momento della somministrazione e l’esito misurato. Gli effetti proposti sulle fibre sensitive e sulle citochine rimangono elementi da interpretare nel rispettivo modello; non diventano tutti meccanismi clinici dimostrati con lo stesso grado di certezza.\n\nLa label statunitense del cromoglicato inalatorio lo colloca nella prevenzione e ne esclude attività broncodilatatrice o antistaminica intrinseca. Non è un trattamento dello stato asmatico. L’inalazione può causare tosse o broncospasmo e sono segnalate reazioni anafilattiche rare: una limitata esposizione sistemica non equivale ad assenza di rischio. La descrizione storica dell’uso pediatrico non basta, infine, a stabilire una preferenza terapeutica attuale o la disponibilità di una formulazione in Italia.",
      "formula": "Stimolo → cellula effettrice → rilascio del mediatore → recettore sul tessuto → risposta. Limitare il rilascio, antagonizzare un recettore e favorire il rilassamento muscolare sono interventi differenti. Schema originale."
    },
    {
      "id": "classi",
      "title": "Dalla classificazione storica alla domanda farmacologica",
      "refs": [
        "CFI",
        "APP",
        "RAN",
        "GINA",
        "KAT",
        "DAX",
        "ENS"
      ],
      "text": "La tradizionale divisione fra broncodilatatori e farmaci che controllano l’infiammazione organizza lo studio, ma i confini non sono sempre netti. Le xantine compaiono in entrambi gli insiemi perché la loro farmacologia comprende più effetti. I cromoni richiamano invece la prevenzione del rilascio di mediatori. Una classificazione per meccanismo descrive ciò che una sostanza può modificare, non l’ordine in cui oggi vada prescritta.\n\nOccorre evitare anche una precisione solo apparente. Attribuire tutte le xantine a un’inibizione selettiva della sola PDE2 non è una descrizione adeguata della classe. Una via dell’AMP ciclico disegnata accanto a un farmaco non dimostra che quello sia il suo unico bersaglio, né che la concentrazione necessaria sia sempre compatibile con l’impiego clinico.\n\nGINA segnala efficacia limitata e problemi di sicurezza per la teofillina nelle opzioni considerate. Le classi presenti in una lezione restano quindi utili per comprendere la storia della farmacologia, mentre la loro posizione terapeutica richiede un confronto separato con evidenze e documenti attuali.\n\nLa teofillina mostra perché conti anche il punto in cui si interviene. Stimolare β₂ aumenta la sintesi di AMPc; inibire una fosfodiesterasi ne limita la degradazione. Le due operazioni possono convergere sullo stesso messaggero senza essere farmacologicamente identiche. Le xantine interagiscono anche con i recettori dell’adenosina, e i manuali discutono più meccanismi possibili. Un’inibizione osservata a una concentrazione sperimentale elevata non prova che sia il meccanismo dominante all’esposizione clinica. Anche per questo lo schema dell’AMPc è una mappa dei bersagli, non una giustificazione per sostituire un agonista inalatorio con una xantina.\n\nIl nome fosfodiesterasi identifica una famiglia di enzimi, non un unico interruttore bronchiale. PDE4 idrolizza AMPc; PDE3 agisce prevalentemente su AMPc e può idrolizzare anche GMPc. Il risultato dell’inibizione dipende dagli enzimi espressi nella cellula e dai sistemi che rispondono ai nucleotidi ciclici. Nella muscolatura liscia interessa la regolazione del tono; nelle cellule infiammatorie interessa anche la produzione di mediatori. Selettività per una famiglia enzimatica, distribuzione nei tessuti e via di somministrazione sono quindi tre proprietà diverse. Nessuna, presa da sola, dimostra che un farmaco agisca soltanto nel polmone."
    },
    {
      "id": "xantine",
      "title": "Teofillina: meccanismi multipli e margine terapeutico",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "THEO",
        "GINA"
      ],
      "text": "La teofillina è una metilxantina; l’aminofillina ne è un complesso con etilendiammina che facilita la solubilità. La formulazione modifica la possibilità di somministrazione, ma non crea una molecola selettiva per il bronco. I manuali discutono inibizione delle fosfodiesterasi, antagonismo dei recettori dell’adenosina e possibili effetti sulla regolazione dell’espressione genica. Il contributo relativo di questi meccanismi dipende dal sistema studiato e dalla concentrazione: non è corretto trasformare un singolo schema in una spiegazione esclusiva.\n\nLa stessa ampiezza farmacologica aiuta a comprendere il problema della sicurezza. Il segnale dei nucleotidi ciclici e quello adenosinico operano anche fuori dalle vie aeree. Disturbi gastrointestinali, stimolazione del sistema nervoso e alterazioni cardiache possono quindi accompagnare l’effetto bronchiale; nella tossicità grave sono particolarmente rilevanti aritmie e convulsioni. La vicinanza fra esposizioni utili e pericolose rende insufficiente ragionare soltanto in termini di quantità somministrata.\n\nA parità di dose, una riduzione della clearance può aumentare l’esposizione. Malattia epatica, alcune condizioni cardiache, febbre e farmaci concomitanti possono modificare l’eliminazione; anche un cambiamento nell’abitudine al fumo cambia il contesto metabolico. Il monitoraggio delle concentrazioni, quando richiesto, serve a collegare dose, esposizione ed effetti. Non è una garanzia assoluta di sicurezza e non sostituisce la valutazione delle interazioni o dei sintomi.\n\nLa posizione terapeutica va separata da questa spiegazione del meccanismo. GINA 2026 non raccomanda la teofillina orale e sconsiglia aminofillina e teofillina endovenose nelle riacutizzazioni asmatiche. Una loro presenza nei manuali storici, o in un’indicazione autorizzata di prodotto, non equivale a una raccomandazione nella strategia attuale. Anche l’ipotesi di potenziare il segnale di un agonista β₂ deve essere giudicata sul rapporto fra benefici e rischi della combinazione, non sulla sola convergenza sull’AMPc.",
      "formula": "Dose → esposizione, modulata da assorbimento e clearance → effetti bronchiali e sistemici. Cambiare la clearance può cambiare il rischio anche a dose invariata. Schema qualitativo originale: nessuna soglia di sicurezza o istruzione di dosaggio."
    },
    {
      "id": "pde",
      "title": "Roflumilast ed ensifentrina: selettività, via ed esito",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "DAX",
        "ENS"
      ],
      "text": "Lo sviluppo degli inibitori delle PDE tenta di separare meglio i contributi utili da quelli indesiderati. Roflumilast ed ensifentrina illustrano due scelte differenti: il primo agisce su PDE4 ed è somministrato per via orale; la seconda inibisce PDE3 e PDE4 ed è somministrata per inalazione. Parlare di selettività richiede di precisare la famiglia enzimatica e l’esposizione nei tessuti, senza supporre che tutti i suoi effetti appartengano alla stessa categoria clinica.\n\nRoflumilast aumenta il segnale dell’AMPc nelle cellule che esprimono PDE4, comprese cellule strutturali e infiammatorie. Il suo ruolo nella BPCO è soprattutto antinfiammatorio. L’indicazione europea riguarda il mantenimento aggiuntivo ai broncodilatatori in adulti con BPCO grave, bronchite cronica e precedenti riacutizzazioni frequenti. Non è un trattamento di soccorso del broncospasmo. La selettività enzimatica non elimina diarrea, nausea, perdita di peso o possibili disturbi psichiatrici; inoltre esposizione e tollerabilità possono risentire delle interazioni metaboliche.\n\nPer ensifentrina, l’inibizione di PDE3 e PDE4 offre una base farmacologica per collegare il tono della muscolatura alle risposte infiammatorie. Il documento statunitense di Ohtuvayre, aggiornato a ottobre 2026, indica il mantenimento della BPCO negli adulti e distingue questo impiego dal sollievo dei sintomi acuti. La via inalatoria porta il farmaco alle vie aeree, ma non rende nullo il rischio: il documento segnala, tra le avvertenze, broncospasmo paradosso ed eventi psichiatrici.\n\nOccorre infine distinguere il livello della prova. Uno schema che mostra cellule immunitarie, epitelio e muscolo descrive processi potenzialmente modificabili. Il miglioramento del FEV₁ osservato negli studi è invece un esito funzionale. Nessuno dei due, isolatamente, dimostra che gli alveoli danneggiati vengano riparati o che il farmaco prevenga necessariamente la loro distruzione. L’effetto su mediatori o trasporto ionico non autorizza neppure a trasferire l’indicazione ad altre malattie respiratorie. Il confronto fra le due molecole serve a comprendere bersaglio, via e obiettivo; non stabilisce una graduatoria universale né la disponibilità di una preparazione in Italia.",
      "formula": "Roflumilast: PDE4 → modulazione di risposte infiammatorie → mantenimento aggiuntivo in uno specifico contesto di BPCO. Ensifentrina: PDE3/4 + inalazione → effetti cellulari e risposta funzionale → mantenimento BPCO nel documento USA. Selettività ≠ esclusività d’organo; mantenimento ≠ soccorso. Schema originale, non algoritmo prescrittivo."
    },
    {
      "id": "obiettivi",
      "title": "Dai bersagli agli obiettivi: sintomi, rischio e tollerabilità",
      "refs": [
        "CFI",
        "FOR",
        "SAL",
        "GINA"
      ],
      "text": "Una classificazione per bersaglio risponde alla domanda su che cosa modifica il farmaco. Una classificazione per obiettivo chiede invece quale risultato si vuole ottenere: attenuare i sintomi presenti, prevenire riacutizzazioni o limitare gli effetti indesiderati. Queste domande attraversano le stesse classi, ma non producono elenchi sovrapponibili. Un broncodilatatore può avere effetti immediati e contribuire a un trattamento di mantenimento; un’associazione può riunire attività che hanno tempi diversi.\n\nPer questo le categorie tradizionali di farmaco di fondo e farmaco al bisogno richiedono un contesto. Il documento di budesonide–formoterolo contempla impieghi diversi della specifica associazione, mentre quello del salmeterolo ne descrive l’uso regolare e complementare ai corticosteroidi nell’asma. Non basta spostare una classe da una colonna all’altra: occorre verificare quale componente, quale preparazione e quale esito siano stati studiati.\n\nIl controllo successivo completa il ragionamento. Se il risultato atteso non compare, il problema può riguardare la diagnosi, l’esposizione effettiva al farmaco, la tecnica inalatoria, l’aderenza o altri fattori che mantengono i sintomi. Aumentare l’intensità del trattamento senza distinguere questi passaggi confonderebbe un segnale di risposta insufficiente con la dimostrazione di un bersaglio sbagliato. La rivalutazione confronta beneficio e tollerabilità nel tempo: il sollievo percepito è un dato utile, ma non riassume da solo il rischio futuro.\n\nIl sintomo da migliorare va inoltre ricondotto al processo che lo genera. Una tosse può accompagnare l’asma, ma può anche dipendere da patologie delle alte vie aeree, reflusso o altri fattori; la dispnea può avere contributi cardiaci, meccanici o legati al decondizionamento. L’ostruzione laringea inducibile può imitare manifestazioni respiratorie dell’asma e può coesistere con essa. Una diagnosi alternativa e una comorbidità hanno dunque significati differenti: nel primo caso si riconsidera quale malattia spieghi il quadro, nel secondo si riconoscono più processi nello stesso paziente.\n\nQuesto cambia il modo di leggere un apparente fallimento farmacologico. Se parte del disturbo nasce in un altro distretto, la sua persistenza non dimostra che il recettore β₂ bronchiale sia insensibile; se l’inalazione è inefficace, una prescrizione corretta non garantisce l’esposizione prevista. GINA propone di ricostruire diagnosi, tecnica, aderenza, esposizioni e comorbidità prima di attribuire il mancato controllo alla sola intensità dell’infiammazione. L’aderenza comprende anche ostacoli pratici e timori sugli effetti indesiderati, non soltanto la memoria dell’assunzione. La mappa dei bersagli resta utile proprio perché permette di chiedere quale componente sia raggiunta dal farmaco e quale richieda un’altra spiegazione.\n\nPer interpretare questa rivalutazione occorre distinguere controllo, gravità e fenotipo. Il controllo descrive quanto la malattia è contenuta nelle condizioni attuali: comprende i sintomi e, separatamente, il rischio di esiti sfavorevoli. Dormire meglio o usare meno il farmaco di sollievo non esaurisce quindi la valutazione. La gravità, nella definizione retrospettiva di GINA, riguarda invece quanto trattamento è necessario per mantenere il controllo dopo un periodo di cura ottimizzata. Non coincide con l’intensità dei sintomi in una singola visita né con il numero di medicinali semplicemente prescritti.\n\nSi può comprendere la differenza attraverso due situazioni didattiche. Sintomi frequenti con un inalatore usato in modo inefficace non dimostrano ancora che la malattia resista al trattamento: al bersaglio potrebbe arrivare un’esposizione diversa da quella prevista. Viceversa, pochi sintomi durante una terapia intensa non dimostrano che quella terapia fosse superflua. Il risultato osservato appartiene al sistema malattia–trattamento, non alla malattia isolata. GINA distingue perciò l’asma grave dalle difficoltà dovute a fattori modificabili. Nella definizione di asma grave il controllo resta insufficiente nonostante una terapia ottimizzata con ICS ad alte dosi e LABA, oppure si mantiene solo grazie a quel livello di trattamento. L’esempio serve a leggere il dato, senza proporre riduzioni o aumenti autonomi della terapia.\n\nIl fenotipo risponde a un’altra domanda: quali caratteristiche riconoscibili presenta la malattia? Una componente allergica o eosinofilica aiuta a mettere in relazione il quadro con IgE, IL-5 e gli altri bersagli immunologici. Questi indizi orientano il ragionamento sulla risposta possibile; non sono una scala unica della gravità. Un valore di eosinofili non sostituisce la storia del controllo, così come il sollievo dopo stimolazione di β₂ non identifica da solo il programma infiammatorio dominante. Nel contributo del 2023 incluso nel corso, biomarcatori e gravità sono accostati: nella sintesi vanno mantenuti distinti, insieme alla selezione specifica per ciascun biologico già discussa nel capitolo.",
      "formula": "Sintomo persistente → distinguere processo responsabile, comorbidità ed esposizione effettiva. Controllo → sintomi e rischio; gravità → trattamento necessario dopo ottimizzazione; fenotipo → caratteristiche biologiche. Una prescrizione, una risposta a β₂ e una conta di eosinofili rispondono a domande diverse. Schema didattico originale."
    },
    {
      "id": "clinica",
      "title": "Perché sollievo e prevenzione devono essere letti insieme",
      "refs": [
        "GINA",
        "APP",
        "KAT",
        "CFI",
        "RAN"
      ],
      "text": "GINA 2026 privilegia negli adulti e adolescenti ICS-formoterolo come sollievo antinfiammatorio, con mantenimento quando indicato. ICS significa corticosteroide inalatorio: formoterolo da solo non rappresenta questa strategia. L’uso di solo SABA come trattamento dell’asma è superato. Età, dispositivo e autorizzazioni restano specifici.\n\nIl significato farmacologico è più generale della sigla. La componente che rilassa il muscolo può migliorare un esito immediato; quella antinfiammatoria interviene su processi che sostengono la vulnerabilità delle vie aeree. Se una persona sente meno costrizione, non ne deriva che tutti questi processi siano già controllati. Per leggere una combinazione bisogna mantenere visibili entrambi gli obiettivi.\n\nAnche le parole rapido e prolungato rispondono a domande diverse. La prima riguarda quando compare l’effetto, la seconda quanto persiste. Non si può scegliere un farmaco di sollievo soltanto perché dura a lungo, né dedurre che tutte le associazioni con un broncodilatatore siano adatte allo stesso uso. La valutazione clinica riguarda il prodotto e il percorso complessivo, non la sola casella di una classificazione.\n\nI corticosteroidi sistemici possono essere necessari nelle riacutizzazioni per accelerarne la risoluzione e limitare le ricadute; questo ruolo non li rende broncodilatatori immediati. GINA distingue inoltre l’indicazione dalla via: quando praticabile, la somministrazione orale può essere efficace quanto quella endovenosa. Una tabella che colloca lo steroide fra i farmaci della fase acuta non ne dimostra quindi un’azione istantanea né impone sempre la via endovenosa.\n\nPer i corticosteroidi orali, indicati dalla sigla OCS, la durata del trattamento cambia la domanda clinica. Un ciclo per una riacutizzazione e un mantenimento prolungato non sono lo stesso impiego. GINA riserva il mantenimento con OCS all’ultima risorsa, pur riconoscendone l’uso quando necessario nelle riacutizzazioni moderate o gravi. Ridurre l’esposizione evitabile richiede controllo della malattia e rivalutazione del trattamento: non significa negare il farmaco in ogni episodio acuto.\n\nAnche una survey sulle prescrizioni va letta per ciò che misura. La quota di persone che riferisce una prescrizione, la durata di un ciclo e l’esposizione continuativa descrivono fenomeni diversi. Una percentuale elevata nel campione non dimostra da sola che ogni prescrizione sia inappropriata, né misura direttamente il rischio causato dal farmaco. La segnalazione di un possibile uso eccessivo invita a ricostruire indicazione, ripetizione e durata; non sostituisce questo passaggio con un giudizio sul singolo trattamento."
    },
    {
      "id": "airmart",
      "title": "AIR e MART: la funzione del farmaco e il ritmo del trattamento",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "GINA"
      ],
      "text": "La stessa associazione può comparire in posizioni diverse di uno schema terapeutico perché nome della molecola, funzione e frequenza di impiego descrivono cose differenti. Il nome identifica i principi attivi; la funzione chiarisce quale bisogno coprono; la frequenza distingue una somministrazione programmata da una legata ai sintomi. Separare questi tre livelli evita di leggere un diagramma a gradini come una semplice graduatoria di potenza.\n\nAIR indica il sollievo antinfiammatorio: combina un corticosteroide inalatorio con un broncodilatatore rapido. Nel regime AIR-only il trattamento è al bisogno, senza una quota di mantenimento quotidiana. MART indica invece un regime con ICS-formoterolo usato sia regolarmente sia al bisogno. La differenza è quindi la presenza di una componente programmata, non l’aggiunta di un nuovo recettore. Non tutte le associazioni ICS-LABA possono svolgere questo ruolo: le combinazioni con un LABA diverso dal formoterolo non sono intercambiabili con MART. Anche ICS-SABA può fornire sollievo antinfiammatorio, ma questa proprietà non lo rende un regime MART.\n\nIl collegamento con la farmacologia parte da due bersagli già incontrati. L’attivazione di β₂ modifica rapidamente il tono del muscolo; il recettore glucocorticoide partecipa al controllo del programma infiammatorio. Legare le due componenti nella stessa somministrazione permette di affiancare il controllo del sintomo a un intervento sull’infiammazione. La rapidità del formoterolo aiuta a comprendere il razionale, ma la validità del regime richiede prove cliniche: non si ricava dalla sola durata d’azione né dal fatto che due sostanze possano essere miscelate.\n\nUna frase che propone formoterolo da solo al bisogno perde dunque una parte essenziale del ragionamento. Togliere ICS cambia il trattamento e il suo obiettivo, anche se il nome del broncodilatatore rimane lo stesso. Analogamente, chiamare fondo ogni farmaco antinfiammatorio può oscurare il fatto che una componente antinfiammatoria sia presente anche nel sollievo. La terminologia deve seguire ciò che viene realmente somministrato.\n\nPer interpretare lo schema si può immaginare una linea del tempo: nel mantenimento compaiono assunzioni programmate; nel sollievo compaiono assunzioni in risposta al bisogno; in MART sono presenti entrambe con la stessa associazione appropriata. Questa rappresentazione chiarisce la struttura del regime, senza stabilire per una persona quantità, intervalli o cambi di terapia. Età, preparazione e percorso clinico restano necessari per passare dal modello alla prescrizione.",
      "formula": "Molecole → quali bersagli? Funzione → sollievo e/o controllo dell’infiammazione? Frequenza → programmata e/o al bisogno? AIR-only: sollievo antinfiammatorio senza mantenimento. MART: ICS-formoterolo programmato + stessa associazione al bisogno. Schema originale, non calendario terapeutico."
    },
    {
      "id": "associazionifisse",
      "title": "Due principi attivi non identificano da soli un medicinale",
      "refs": [
        "CFI",
        "APP",
        "AIFA"
      ],
      "text": "Salbutamolo e ipratropio intervengono su due vie che convergono sul tono bronchiale: il primo stimola β₂, il secondo limita la risposta muscarinica all’acetilcolina. Questo razionale spiega perché possano essere considerati insieme, ma non stabilisce automaticamente come debbano essere preparati o somministrati. Un’associazione fissa incorpora un rapporto prestabilito fra componenti; due medicinali separati permettono di modificarne le quantità in modo distinto.\n\nIl comunicato AIFA del 5 luglio 2023 riguarda una specifica combinazione fissa di salbutamolo e ipratropio: ne restringe l’indicazione al broncospasmo nella BPCO adulta quando occorre terapia regolare con entrambi i componenti, escludendone l’impiego indicato in bambini e adolescenti. La motivazione comprende eventi indesiderati, anche gravi, legati a errori terapeutici soprattutto pediatrici. Il testo distingue espressamente questa associazione dai medicinali monocomponente, utilizzabili separatamente quando appropriato per consentire l’adattamento delle dosi. La restrizione non significa quindi che ogni impiego pediatrico di salbutamolo o ipratropio sia vietato.\n\nLa distinzione è utile anche fuori da questo esempio. Modificare il volume di una preparazione fissa cambia contemporaneamente entrambe le componenti; con prodotti separati le variazioni possono essere indipendenti. Questa differenza di flessibilità non prova che una soluzione sia sempre migliore: introduce una variabile che il ragionamento basato soltanto sui recettori non contiene. Alla complementarità farmacodinamica si aggiungono caratteristiche della preparazione, possibilità di errore e popolazione per cui il prodotto è stato valutato.\n\nPer leggere correttamente una limitazione bisogna quindi conservare il suo oggetto: quale preparazione, per quale indicazione e in quale popolazione. Un titolo giornalistico che nomina soltanto i principi attivi può perdere questi confini. La data del comunicato va conservata insieme al contenuto; per una decisione terapeutica concreta occorre la scheda vigente del medicinale pertinente. Qui il caso serve a collegare bersaglio, formulazione e sicurezza, senza trasformare una notizia del 2023 in un protocollo pediatrico completo.",
      "formula": "β₂ e recettori muscarinici → razionale dei due componenti. Associazione fissa → rapporto prestabilito. Monocomponenti → quantità regolabili separatamente. Indicazione e popolazione autorizzata appartengono al medicinale specifico. Schema originale, senza dosi."
    },
    {
      "id": "antiige",
      "title": "Anti-IgE: dal ligando libero alla disponibilità del recettore",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "RAN",
        "OMA"
      ],
      "text": "Nella componente allergica dell’asma bisogna distinguere chi produce l’anticorpo da chi risponde al suo legame. Le cellule della linea B, attraverso la differenziazione in plasmacellule, producono IgE. Mastociti e basofili possono esprimere FcεRI, il recettore ad alta affinità che trattiene IgE sulla superficie. Quando un allergene mette in relazione molecole di IgE appropriate già legate alla cellula, il raggruppamento dei recettori può avviare i segnali che portano alla liberazione dei mediatori. Produzione anticorpale e degranulazione appartengono quindi a cellule e momenti distinti.\n\nOmalizumab riconosce le IgE libere e limita la loro possibilità di legarsi a FcεRI. Il bersaglio immediato è il ligando: descriverlo come semplice antagonista del recettore mastocitario perderebbe questa distinzione. Katzung sottolinea inoltre che l’anticorpo non attiva le IgE già legate alle cellule come farebbe il collegamento da parte dell’allergene. Il ragionamento riguarda la modalità di riconoscimento molecolare; non dimostra che qualsiasi anticorpo diretto contro IgE avrebbe lo stesso comportamento.\n\nAlla diminuzione delle IgE libere può seguire una minore espressione di FcεRI sulle cellule effettrici. Si modifica così anche la capacità della cellula di raccogliere il segnale allergico. La riduzione del recettore è una conseguenza del cambiamento del sistema, non la prova che omalizumab occupi direttamente il sito di legame del recettore. Questo collegamento fra quantità di ligando e disponibilità recettoriale aiuta a comprendere perché l’effetto non si riduca alla neutralizzazione istantanea di una singola molecola.\n\nIgE libere e totali, però, non sono intercambiabili: durante il trattamento le totali possono aumentare per la permanenza dei complessi con omalizumab, mentre le libere diminuiscono. Un numero maggiore non prova quindi, da solo, un’intensificazione del segnale allergico.\n\nPer interpretare una misura occorre sapere quale frazione viene rilevata, in quale momento e con quale domanda clinica. La stessa logica vale per il beneficio: una minore risposta a uno stimolo sperimentale, una variazione del flusso e una riduzione delle riacutizzazioni sono esiti diversi. Il razionale molecolare collega questi livelli, ma non permette di sostituire automaticamente la misura di uno con quella degli altri.",
      "formula": "IgE libera → legame a FcεRI → cellula sensibilizzata → risposta all’allergene. Omalizumab limita le IgE disponibili; la successiva riduzione di FcεRI modifica la sensibilità della cellula. Legame al ligando e regolazione del recettore sono livelli distinti. Schema originale."
    },
    {
      "id": "asseil5",
      "title": "Asse IL-5: neutralizzare il segnale o ridurre la cellula effettrice",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "RAN",
        "MEP",
        "BEN",
        "GINA"
      ],
      "text": "L’eosinofilo non è soltanto un numero nell’emocromo. Nel contesto infiammatorio delle vie aeree può liberare mediatori lipidici e proteine dei granuli che contribuiscono al danno tissutale e all’iperreattività. La sua presenza dipende da processi distinti: differenziamento, disponibilità nel sangue, reclutamento, attivazione e permanenza nei tessuti. Il modello descritto da Rang & Dale collega le citochine dei linfociti Th2 a questa sequenza; la figura degli appunti comprende anche le cellule linfoidi innate di tipo 2. Non si deve quindi ridurre IL-5 a una sostanza prodotta esclusivamente dagli eosinofili.\n\nIL-5 sostiene crescita, differenziamento e sopravvivenza eosinofila. Mepolizumab e reslizumab riconoscono la citochina: riducono il segnale disponibile per il recettore. Benralizumab riconosce invece IL-5Rα sulla cellula. La differenza non riguarda soltanto il nome del bersaglio: separa il ligando extracellulare dalla struttura con cui la cellula lo riconosce. Nelle figure che mostrano più subunità, il bersaglio dell’anticorpo deve essere attribuito alla subunità α, senza estenderlo automaticamente all’intero complesso.\n\nIl documento europeo di benralizumab aggiunge un secondo livello. La regione Fc afucosilata favorisce il riconoscimento da parte di FcγRIII su cellule effettrici, fra cui le cellule NK. Ne deriva citotossicità cellulare dipendente da anticorpi, o ADCC, con apoptosi di eosinofili e basofili. L’anticorpo collega dunque una cellula che esprime il bersaglio a un meccanismo effettore immunitario. Chiamarlo soltanto antagonista di IL-5 cancellerebbe sia la sede del legame sia questa funzione della regione Fc.\n\nI due interventi possono convergere sulla diminuzione degli eosinofili, ma non sono identici. Neutralizzare un fattore di crescita modifica la disponibilità di un segnale; favorire l’eliminazione della cellula modifica direttamente la popolazione effettrice. Questo confronto è farmacologico e non dimostra che la deplezione più profonda produca automaticamente il beneficio clinico maggiore. Anche il risultato di una conta ematica deve essere tenuto distinto da ciò che accade nel tessuto bronchiale e dalla frequenza delle riacutizzazioni.\n\nGINA considera la storia delle riacutizzazioni e il profilo eosinofilico nella selezione per questi trattamenti, con criteri che variano per prodotto e contesto locale. I risultati vanno letti per esito: riacutizzazioni, funzione respiratoria, sintomi e necessità di corticosteroidi non sono misure equivalenti. Il capitolo storico di Katzung collocava gli anticorpi contro queste citochine fra le prospettive future; conserva valore per comprendere il razionale, mentre la disponibilità clinica va verificata nei documenti attuali.",
      "formula": "IL-5 libera → IL-5R sulla cellula → sostegno alla risposta eosinofila. Mepolizumab/reslizumab: legame al ligando. Benralizumab: legame a IL-5Rα + reclutamento di cellule effettrici tramite Fc → ADCC. Cambiamento della conta e beneficio clinico richiedono misure distinte. Schema originale."
    },
    {
      "id": "asseil4r",
      "title": "IL-4Rα: una subunità condivisa collega segnali diversi",
      "refs": [
        "CFI",
        "APP",
        "RAN",
        "DUP",
        "GINA"
      ],
      "text": "Un anticorpo diretto contro una sola struttura può interferire con più citochine quando queste utilizzano una componente recettoriale comune. È il caso di dupilumab: il bersaglio è IL-4Rα, non una coppia di siti che neutralizzano separatamente IL-4 e IL-13. La distinzione consente di leggere una figura recettoriale partendo dai componenti del complesso, anziché contare soltanto i nomi dei mediatori posti a monte.\n\nIl recettore di tipo I comprende IL-4Rα e la catena γ comune e trasmette il segnale di IL-4. Quello di tipo II associa IL-4Rα a IL-13Rα1 e partecipa alla risposta sia a IL-4 sia a IL-13. Interferire con la subunità condivisa limita quindi entrambe le vie, pur lasciando distinguibili i due complessi. Tipo I e tipo II indicano qui architetture recettoriali; non sono una classificazione della gravità dell’asma.\n\nQueste vie partecipano a un programma infiammatorio più ampio della sola attivazione di una cellula. Il modello del manuale collega IL-4 e IL-13 alla risposta delle cellule B e alla componente IgE, oltre che alle interazioni cellulari che sostengono l’infiammazione. Per studiare il farmaco è utile seguire tre domande: quale cellula espone il complesso, quale segnale riceve e quale risposta cambia nel tessuto. La presenza della stessa subunità in sistemi differenti spiega perché un bersaglio possa essere studiato in più patologie; non dimostra da sola un’indicazione terapeutica per ciascuna di esse.\n\nIl confronto con l’asse IL-5 rende concreta questa distinzione. Il blocco di IL-4Rα non è progettato come eliminazione degli eosinofili tramite ADCC e non va interpretato usando la deplezione ematica come unico risultato atteso. GINA descrive la possibilità di eosinofilia ematica transitoria durante il trattamento. Il dato non permette, isolatamente, di concludere né che ogni componente infiammatoria sia aumentata né che il farmaco abbia fallito. Serve collegare la misura al momento, al compartimento e agli esiti osservati.\n\nLa distinzione non autorizza a ignorare un quadro sintomatico: il documento europeo segnala condizioni eosinofile sistemiche, comprese polmonite eosinofila e vasculite compatibile con EGPA, e richiede attenzione alla presentazione clinica. Una conta isolata e una sindrome con interessamento d’organo non sono la stessa osservazione.\n\nNel percorso didattico, asma e rinosinusite con poliposi mostrano come la medesima rete possa attraversare distretti diversi. La continuità biologica aiuta a formulare il razionale; i criteri di selezione e la verifica della risposta restano specifici. Per questo lo schema molecolare va affiancato alla storia della malattia, senza trasformarlo in un algoritmo di prescrizione.",
      "formula": "IL-4 → recettore I (IL-4Rα + γc). IL-4 oppure IL-13 → recettore II (IL-4Rα + IL-13Rα1). Dupilumab agisce sulla subunità IL-4Rα condivisa: un bersaglio, due vie di segnalazione. Schema originale."
    },
    {
      "id": "biologici",
      "title": "Bersagli immunologici e selezione del contesto",
      "refs": [
        "GINA",
        "KAT",
        "RAN",
        "CFI",
        "APP",
        "OMA",
        "BEN",
        "DUP"
      ],
      "text": "I biologici rendono espliciti alcuni nodi della rete: IgE, IL-5 o il suo recettore, IL-4Rα e TSLP. GINA li colloca nell’asma grave dopo ottimizzazione della terapia e valutazione specialistica. La scelta dipende dal contesto; non sono broncodilatatori di soccorso.\n\nPer comprenderne il razionale, si può risalire dal bersaglio alla fase che contribuisce a mantenere la malattia. Interferire con IgE modifica una componente della risposta allergica; intervenire sull’asse di IL-5 riguarda soprattutto la biologia degli eosinofili. Sono punti differenti della rete e non sostituiscono reciprocamente tutte le loro funzioni. Il collegamento fra biomarcatore e bersaglio è una ragione da verificare, non una garanzia automatica di risposta.\n\nQuesta parte del capitolo offre una mappa per leggere i profili già presenti nell’atlante. Non confronta indipendentemente tutti gli studi dei biologici, non stabilisce superiorità fra molecole e non trasferisce soglie di accesso da un paese all’altro. Il passaggio dal meccanismo alla selezione del paziente richiede informazioni che un diagramma recettoriale, da solo, non contiene.\n\nPrima di attribuire il mancato controllo alla necessità di un nuovo bersaglio, GINA richiede di ottimizzare il trattamento: tecnica inalatoria, aderenza e comorbilità possono cambiare l’interpretazione del quadro. Il profilo infiammatorio va letto insieme alla storia delle riacutizzazioni e ai criteri locali di accesso. La presenza di IgE o eosinofili, isolata dal contesto, non è una prescrizione.\n\nLeggere il biomarcatore richiede anche di sapere quando e durante quale trattamento è stato misurato. La conta degli eosinofili e il FeNO, cioè la frazione di ossido nitrico nell’aria espirata, osservano aspetti differenti della risposta. Nel modello del corso, IL-5 sostiene soprattutto la componente eosinofila e IL-13 si collega all’aumento del FeNO. Nessuna delle due misure è una lettura diretta dell’occupazione di un recettore, né identifica da sola tutte le cellule coinvolte.\n\nIl trattamento entra nella misura: una riduzione dopo corticosteroidi può riflettere una risposta farmacologica, anziché l’assenza originaria del circuito. GINA evidenzia la soppressione dei biomarcatori da corticosteroidi orali e la variabilità nel tempo; una singola conta eosinofila bassa non esclude l’asma di tipo 2. All’opposto, un FeNO elevato nonostante una prescrizione di ICS richiede di considerare l’esposizione effettiva, compresa l’aderenza, prima di attribuire il risultato a refrattarietà biologica.\n\nUn esempio didattico chiarisce l’errore: confrontare un valore precedente alla terapia con uno successivo come se entrambi descrivessero la malattia senza trattamento confonde il processo patologico con l’intervento che lo modifica. Il contesto temporale aiuta a interpretare il dato; non autorizza a sospendere autonomamente farmaci per ottenere una misura diversa. Anche i criteri usati per cercare un’infiammazione residua restano distinti dai requisiti di accesso a uno specifico biologico.\n\nNel documento europeo di omalizumab, asma allergico e orticaria cronica spontanea hanno criteri ed età differenti; non sono un’unica indicazione pediatrica. La rivalutazione della risposta serve a verificare il beneficio, senza garantirlo entro una data. Umanizzato non significa privo di rischio allergico: è possibile anafilassi anche dopo trattamento prolungato. L’avvio non autorizza la sospensione brusca dei corticosteroidi.\n\nQueste precisazioni impediscono due scorciatoie: considerare ogni biologico adatto a qualsiasi infiammazione oppure attribuire tutti gli eventi indesiderati a un’unica proprietà della classe. Bersaglio, malattia, formulazione e condizioni studiate devono restare riconoscibili. La mappa farmacologica permette di formulare domande migliori; la verifica di efficacia e sicurezza resta specifica per il prodotto e per l’indicazione.\n\nAnche una tabella dei rischi richiede di distinguere ciò che registra. Una variazione farmacodinamica prevista, un evento osservato durante uno studio, una reazione avversa riconosciuta e un rischio ipotizzato non sono categorie intercambiabili. La tabella storica del corso separa osservazioni e ipotesi: riunirle in un unico elenco perderebbe il grado di evidenza. L’immunogenicità, inoltre, non può essere assunta come spiegazione universale di ogni evento comparso durante un trattamento con anticorpi.\n\nLa deplezione eosinofila descrive un effetto di benralizumab; da sola non dimostra un danno clinico. Viceversa, una conta apparentemente favorevole non esclude reazioni di altra natura. Per confrontare la sicurezza servono popolazioni, durata dell’osservazione, definizioni degli eventi e confronti appropriati. Accostare percentuali ricavate da studi diversi non costruisce una graduatoria affidabile dei farmaci. La lettura critica delle tabelle completa così quella dei recettori: entrambe richiedono di sapere che cosa viene effettivamente misurato.\n\nIl beneficio di un biologico va perciò descritto su più dimensioni. Ridurre le riacutizzazioni, migliorare i sintomi, modificare la funzione respiratoria e diminuire il bisogno di corticosteroidi sistemici sono risultati collegati, ma possono cambiare in misura diversa. Un marcatore che si modifica nella direzione prevista documenta un aspetto della risposta biologica; il giudizio sul trattamento richiede anche ciò che accade alla persona nel tempo. Il confronto utile mantiene riconoscibili situazione iniziale, periodo osservato, terapie concomitanti ed effetti indesiderati.\n\nLa presenza di più patologie rende questa lettura ancora più importante. Asma, poliposi nasale e dermatite atopica possono condividere parte della rete di tipo 2, pur producendo disturbi in organi differenti. GINA considera le comorbidità nella scelta del biologico e nella rivalutazione, insieme a requisiti locali, modalità di somministrazione e preferenze della persona. Un miglioramento cutaneo e uno respiratorio vanno documentati separatamente: la risposta in un distretto non certifica quella nell’altro. Anche il carico del trattamento conta, perché frequenza delle somministrazioni, accessibilità e tollerabilità influenzano la possibilità di mantenerlo. Questa valutazione collega bersaglio ed esiti senza trasformare una via immunologica condivisa in un’automatica intercambiabilità fra medicinali.",
      "formula": "Misura osservata ← attività biologica + compartimento e momento + trattamento effettivamente assunto. Valore basso dopo terapia ≠ prova di assenza iniziale della via; valore alto con una prescrizione ≠ prova di esposizione adeguata o refrattarietà. Schema didattico originale."
    },
    {
      "id": "meccanica",
      "title": "Il danno meccanico dell’epitelio: leggere una ricerca senza trasformarla in terapia",
      "refs": [
        "CFI",
        "APP",
        "BAG"
      ],
      "text": "Un lavoro sperimentale di Bagley e collaboratori, pubblicato su Science nel 2024, ha studiato come la broncocostrizione possa comprimere l’epitelio, favorire estrusione cellulare e danno della barriera. Le prove d’intervento provengono soprattutto da modelli murini; campioni di resezione umana mostrano alterazioni compatibili, ma non costituiscono uno studio terapeutico nei pazienti.\n\nLa distinzione cambia l’interpretazione della figura proposta a lezione. Il lavoro aiuta a formulare un circuito di amplificazione tra meccanica, barriera e infiammazione. Non dimostra che ogni asma cominci necessariamente dalla contrazione, né che l’infiammazione immunologica sia irrilevante.\n\nGli inibitori sperimentali dell’estrusione, incluso il gadolinio studiato dagli autori, non diventano per questo terapie approvate dell’asma. Gli stessi autori indicano la necessità di verificare la sicurezza nelle vie aeree umane. La Perspective ripresa nel materiale didattico e l’articolo sperimentale sono documenti distinti: la prima commenta la ricerca, il secondo ne presenta i dati. Nessuna immagine o curva della fonte è riprodotta qui."
    },
    {
      "id": "bpcostoria",
      "title": "BPCO: esposizioni, sviluppo polmonare e contesto del bersaglio",
      "refs": [
        "CFI",
        "WHO",
        "KAT",
        "RAN"
      ],
      "text": "La BPCO si riconosce nel presente, ma la storia del polmone comincia molto prima della comparsa di un’ostruzione persistente. La stessa limitazione del flusso può essere il punto di arrivo di percorsi differenti. Per comprendere il contesto in cui agisce un farmaco occorre quindi affiancare al modello di muscolo, parete bronchiale e alveoli la storia dello sviluppo e delle esposizioni.\n\nIl fumo di tabacco è un fattore centrale, ma non esaurisce questa storia. Polveri e fumi professionali, esposizione passiva e combustibili usati in ambienti domestici possono contribuire al rischio. L’insieme delle esposizioni nel corso della vita viene descritto come esposoma. Il concetto invita a ricostruire durata, periodo e combinazioni delle esposizioni; non assegna a ogni fattore lo stesso peso e non costituisce un punteggio con cui prevedere il destino di una persona.\n\nAnche lo sviluppo iniziale conta. La scheda WHO richiama crescita intrauterina insufficiente, prematurità e infezioni respiratorie infantili frequenti o gravi fra le condizioni che possono impedire il raggiungimento della massima crescita polmonare. Un polmone che parte da una funzione inferiore non ha necessariamente seguito lo stesso percorso di uno che perde più funzione successivamente. La misura ottenuta oggi descrive lo stato osservato; da sola non ricostruisce come vi si sia arrivati.\n\nRischio, diagnosi ed effetto del farmaco restano tre domande distinte. L’assenza di fumo non esclude tutte le possibili origini della BPCO, mentre una storia di esposizione non dimostra da sola la malattia. La spirometria va interpretata con sintomi e contesto clinico. Neppure il sollievo dopo un broncodilatatore identifica quale esposizione abbia contribuito al danno o quale fase della vita sia stata determinante.\n\nQuesto percorso torna ai bersagli già studiati: formoterolo e tiotropio possono modificare componenti del tono attraverso vie diverse, ma la risposta immediata non misura il recupero dello sviluppo polmonare né la cancellazione delle esposizioni passate. Agire sul bersaglio, ridurre un’esposizione e valutare gli esiti nel tempo sono interventi e osservazioni con significati propri. Mantenerli distinti aiuta a comprendere perché persone con sintomi simili possano avere storie, limiti funzionali e bisogni differenti.",
      "formula": "Sviluppo e suscettibilità + esposizioni nel tempo → storia del polmone. Struttura, tono e funzione attuali → ciò che si osserva oggi. Modulazione del bersaglio → componente modificabile dal farmaco. Rischio ≠ diagnosi; risposta immediata ≠ ricostruzione della storia. Schema didattico originale."
    },
    {
      "id": "bpco",
      "title": "Asma e BPCO: stessi bersagli, problemi clinici differenti",
      "refs": [
        "CFI",
        "RAN",
        "GOLD",
        "GINA",
        "KAT"
      ],
      "text": "La BPCO comprende alterazioni delle vie aeree e degli alveoli con ostruzione persistente, spesso progressiva. GOLD richiede di interpretare la spirometria nel contesto clinico. L’etichetta irreversibile non significa che nessuna componente del tono bronchiale possa rispondere a un farmaco, né permette di classificare una persona dal solo sollievo percepito.\n\nPer l’inizio del mantenimento, GOLD 2026 distingue gruppi basati su sintomi e riacutizzazioni: broncodilatatore nel gruppo A, LABA + LAMA nei gruppi B ed E. Il follow-up valuta separatamente dispnea e riacutizzazioni. Il ruolo degli ICS dipende anche da eosinofili, riacutizzazioni e asma concomitante; la polmonite rientra fra i rischi da considerare.\n\nIl confronto chiarisce il principio: la presenza dello stesso recettore non impone lo stesso percorso terapeutico. Rilassare la muscolatura può essere utile in contesti differenti, mentre infiammazione, danno strutturale ed esiti da prevenire cambiano. I collegamenti ai farmaci aiutano a seguire il bersaglio; per la scelta clinica resta necessario conoscere la malattia e il documento di riferimento applicabile.\n\nIl vecchio termine ACOS non identifica una terza malattia uniforme. GINA preferisce asma+BPCO come descrizione di caratteristiche coesistenti; in presenza di asma la terapia deve contenere ICS. Una scala storica di sovrapposizione non sostituisce l’inquadramento individuale.\n\nPer capire perché un broncodilatatore possa aiutare senza normalizzare il polmone, conviene separare tre componenti dell’ostruzione. Nelle piccole vie aeree, l’infiammazione e il rimodellamento possono ispessire e restringere la parete; nel parenchima, la distruzione delle strutture alveolari modifica il ritorno elastico e il sostegno delle vie aeree; sulla muscolatura bronchiale rimane una componente di tono modificabile. Questi processi possono coesistere in proporzioni diverse. Il farmaco che rilassa il muscolo non ricostruisce le strutture distrutte, ma può migliorare la componente su cui il suo bersaglio esercita un controllo.\n\nIl confronto fra formoterolo e tiotropio rende concreta questa distinzione. Il primo interviene sulla segnalazione β₂ già descritta, il secondo contrasta la componente muscarinica del tono. Due vie differenti possono quindi contribuire alla broncodilatazione nello stesso polmone. La complementarità dei bersagli non implica che la combinazione corregga ogni causa di dispnea, né che un miglioramento funzionale dimostri la scomparsa dell’infiammazione o dell’enfisema.\n\nAnche il profilo infiammatorio va letto come una distribuzione, non come un’etichetta esclusiva. Nei manuali la BPCO è associata a macrofagi, neutrofili e linfociti T, mentre l’asma viene spesso introdotta attraverso il circuito eosinofilo. La distinzione aiuta a costruire il modello, ma non autorizza a escludere una componente eosinofila dalla BPCO o a considerare tutte le asme identiche. È proprio questa eterogeneità a rendere necessario collegare il bersaglio farmacologico al contesto della malattia."
    },
    {
      "id": "bpcopiccolevie",
      "title": "Piccole vie aeree: epitelio, muco e difese che non funzionano insieme",
      "refs": [
        "CFI",
        "NHLBI",
        "KAT",
        "RAN"
      ],
      "text": "Le piccole vie aeree sono un punto di incontro fra flusso d’aria, materiale inalato e difese del polmone. Per comprenderne il danno nella BPCO non basta immaginare un tubo che si restringe. La superficie interna è un tessuto attivo: le cellule ciliate trasportano materiale verso l’esterno, le cellule club contribuiscono alle secrezioni protettive e alla difesa innata, mentre le cellule basali partecipano al rinnovo dell’epitelio. Il risultato dipende dall’organizzazione di queste funzioni, non soltanto dal numero di cellule presenti.\n\nL’esposizione persistente a irritanti può cambiare questa organizzazione. Nel modello descritto dal corso, la riprogrammazione delle cellule basali favorisce un epitelio con più cellule produttrici di muco e metaplasia squamosa, mentre si riducono o funzionano peggio componenti ciliate e club. La secrezione aumenta proprio mentre il sistema che dovrebbe rimuoverla perde efficienza. Muco accumulato e clearance mucociliare ridotta sono quindi due problemi collegati, ma distinti: fluidificare una secrezione non equivale a ripristinare il trasporto ciliare.\n\nAnche la barriera immunologica può perdere efficacia. Le IgA secretorie contribuiscono alla protezione del lume; il loro trasporto attraverso l’epitelio dipende da un recettore per le immunoglobuline polimeriche. Nelle alterazioni descritte dalla fonte, la riduzione di questo sistema si associa a minore protezione locale, invasione batterica e richiamo di cellule infiammatorie. Il microbiota delle vie aeree può modificarsi: disbiosi indica un’alterazione della comunità microbica e delle sue relazioni con l’ospite, non identifica da sola un’infezione da trattare.\n\nQui compare un apparente paradosso: più cellule infiammatorie non significano necessariamente una difesa più efficace. I macrofagi possono persistere nel tessuto e produrre mediatori, pur eliminando meno efficacemente batteri e cellule morte. L’accumulo di materiale mantiene lo stimolo infiammatorio; neutrofili e macrofagi possono inoltre liberare proteasi che modificano la matrice extracellulare. Quantità delle cellule, capacità di rimozione e danno prodotto sono dimensioni diverse della stessa risposta.\n\nIl rimodellamento interessa anche il sostegno meccanico. La matrice della parete può perdere componenti elastiche e acquisire un’organizzazione anomala del collagene; nel parenchima, la distruzione alveolare riduce superficie e connessioni che contribuiscono alla stabilità delle vie aeree. Malattia delle piccole vie ed enfisema possono coesistere senza avanzare in modo identico. La descrizione generale NHLBI distingue infatti danno degli spazi aerei e componente bronchitica con infiammazione e muco, presenti in proporzioni variabili.\n\nIl collegamento ai farmaci diventa più preciso quando si conserva questa mappa. Formoterolo e tiotropio modulano vie differenti del tono bronchiale; l’acetilcisteina agisce su proprietà del materiale secreto secondo il meccanismo già discusso. Nessuno di questi passaggi dimostra, da solo, il ripristino delle ciglia, della barriera immunologica o dell’architettura alveolare. La presenza di muco non rende automaticamente equivalenti i farmaci mucoattivi, né trasferisce alla BPCO risultati ottenuti in altre malattie.\n\nLa domanda utile è dunque quale componente sia raggiunta e quale funzione resti da recuperare. Un miglioramento del flusso può accompagnarsi a secrezioni persistenti; una secrezione meno viscosa può continuare a essere rimossa male. Questi esempi non predicono la risposta individuale, ma spiegano perché bersaglio molecolare, organizzazione del tessuto ed esito clinico debbano essere letti insieme.",
      "formula": "Epitelio → produzione e trasporto delle secrezioni + barriera locale. Cellule immunitarie → eliminazione del materiale + possibile danno. Matrice e alveoli → sostegno meccanico. Farmaco → componente raggiungibile dal suo meccanismo. Più infiammazione ≠ difesa più efficace; muco meno viscoso ≠ clearance ripristinata. Schema originale."
    },
    {
      "id": "bpcofenotipi",
      "title": "Fenotipo, meccanismo e riacutizzazione: leggere livelli diversi della BPCO",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il termine fenotipo descrive caratteristiche osservabili: sintomi, funzione respiratoria, immagini e andamento degli episodi acuti. Endotipo indica invece un meccanismo biologico che contribuisce a produrre quelle caratteristiche. La distinzione impedisce di trattare un’immagine o un valore di laboratorio come se contenesse già l’intera spiegazione della malattia. Manifestazioni simili possono nascere da combinazioni differenti di danno epiteliale, alterazioni della matrice, infiammazione e tono muscolare.\n\nL’imaging rende visibile una parte di questa eterogeneità. Gli studi discussi nel corso distinguono alterazioni delle vie aeree e del parenchima e suggeriscono che il danno delle piccole vie possa essere riconoscibile prima di un enfisema evidente. È un contributo alla comprensione della struttura, non una sequenza obbligatoria per ogni persona. La spirometria osserva invece una prestazione funzionale complessiva: non conta direttamente i bronchioli, non identifica tutte le cellule presenti e non ricostruisce da sola la distribuzione del danno.\n\nUna riacutizzazione aggiunge una dimensione temporale: il peggioramento acuto si sviluppa su un polmone che possiede già una propria struttura e una storia di esposizioni. Infezioni, risposta immunitaria e ambiente locale possono contribuire in combinazioni diverse. Nei gruppi di ricerca descritti dal Seminar emergono profili associati a segnali proinfiammatori, risposte interferoniche, infiammazione di tipo 2 oppure livelli bassi dei marcatori misurati. Questi raggruppamenti aiutano a formulare ipotesi; non costituiscono quattro diagnosi assegnabili a una persona con un singolo prelievo.\n\nAnche «pochi marcatori» richiede una lettura precisa. Significa che, nel compartimento e nel momento studiati, gli indicatori scelti sono poco rappresentati; non dimostra l’assenza di ogni processo patologico. Un dato nel sangue e uno nelle vie aeree non sono intercambiabili. La componente eosinofila richiama la rete di tipo 2 già incontrata nell’asma, ma può affiancarsi a processi differenti e a danno strutturale: non trasforma tutta la BPCO in una malattia eosinofila uniforme.\n\nQuesto ragionamento ritorna ai bersagli senza sostituire le prove cliniche. Osservare un mediatore suggerisce una possibile via da studiare; dimostrare che una molecola lo modifica documenta un effetto farmacodinamico; stabilire un beneficio richiede esiti osservati nella popolazione e nelle condizioni appropriate. Il sollievo ottenuto modulando il tono bronchiale e la prevenzione di un nuovo episodio rispondono a domande diverse. Collegarli è necessario; considerarli equivalenti cancella proprio l’eterogeneità che il capitolo cerca di spiegare.",
      "formula": "Fenotipo: che cosa si osserva? Endotipo: quale meccanismo contribuisce? Compartimento e tempo: dove e quando si misura? Trattamento: quale bersaglio modifica? Esito: che cosa cambia per la persona? Le risposte si collegano, senza sostituirsi. Schema didattico originale."
    },
    {
      "id": "dispositivobersaglio",
      "title": "Dall’inalatore al recettore: il dispositivo condiziona l’esposizione",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "FOR",
        "TIO"
      ],
      "text": "Prima che un farmaco inalatorio interagisca con il proprio bersaglio, la formulazione deve essere emessa dal dispositivo, entrare con l’aria e depositarsi nelle vie respiratorie. Questa sequenza distingue la quantità prevista dal prodotto dall’esposizione effettivamente ottenuta. Un’inalazione registrata o una dose erogata documentano passaggi necessari, ma non misurano direttamente quanto principio attivo raggiunga ogni regione del polmone. Il problema riguarda il sistema formato da molecola, formulazione, dispositivo e persona.\n\nDue esempi rendono concreta la differenza. Nel documento di Symbicort Turbohaler, la polvere è trasportata dal flusso inspiratorio e l’istruzione descrive un’inspirazione energica e profonda. Per Spiriva Respimat, il dispositivo genera uno spray e il documento descrive invece un’inspirazione lenta e profonda coordinata con l’erogazione. Il confronto riguarda questi prodotti e chiarisce perché non esista un unico gesto da trasferire indistintamente a ogni inalatore. Non sostituisce le istruzioni complete e la dimostrazione del dispositivo specifico.\n\nIl principio farmacologico rimane distinto dal principio di erogazione. Formoterolo agisce sulla via β₂, tiotropio limita la risposta muscarinica e budesonide modifica programmi cellulari attraverso il recettore glucocorticoide. Il modo di produrre e inalare l’aerosol condiziona l’accesso a questi bersagli, senza trasformare un agonista adrenergico in un antagonista muscarinico. Affinità ed efficacia intrinseca appartengono alla relazione tra molecola e bersaglio; la deposizione appartiene al percorso che rende possibile quella relazione nel tessuto.\n\nLa pagina del corso sulla BPCO collega il basso flusso inspiratorio alla valutazione delle modalità di erogazione, compresa la nebulizzazione. Il nesso utile allo studio è fisico: una difficoltà nell’utilizzare un dispositivo può limitare l’esposizione anche quando il bersaglio molecolare è pertinente. Da questa osservazione non segue una superiorità universale della nebulizzazione, né l’equivalenza tra formulazioni. Un diverso sistema di erogazione non rende automaticamente più potente la molecola; i suoi effetti sugli esiti richiedono prove riferite al prodotto e alle condizioni studiate.\n\nSi possono quindi distinguere tre domande. Il farmaco è stato assunto con continuità? Il dispositivo è stato utilizzato nel modo previsto? La componente della malattia su cui agisce il bersaglio spiega l’esito che si vuole modificare? La prima riguarda l’aderenza, la seconda l’erogazione effettiva, la terza l’appropriatezza del ragionamento farmacologico. Le risposte possono influenzarsi, ma un dato favorevole su una dimensione non risolve automaticamente le altre.\n\nConsideriamo, come esempio concettuale, una persona ancora limitata nello sforzo: il sintomo persistente non permette da solo di scegliere fra esposizione insufficiente, risposta parziale del tono bronchiale e altri determinanti della limitazione. Tornare alla catena dispositivo–esposizione–bersaglio aiuta a formulare domande verificabili prima di attribuire tutto alla farmacodinamica. Il capitolo descrive questa catena; non propone sostituzioni, equivalenze di dose o una scelta individuale dell’inalatore.",
      "formula": "Prodotto e dispositivo → aerosol emesso → inalazione e deposizione → esposizione locale → interazione con il bersaglio → esito osservato. Aderenza, tecnica e meccanismo rispondono a domande diverse. Un cambio di dispositivo non dimostra un aumento della potenza molecolare. Schema originale."
    },
    {
      "id": "bpcoobiettivi",
      "title": "BPCO: dispnea e riacutizzazioni sono due obiettivi distinti",
      "refs": [
        "CFI",
        "APP",
        "KAT",
        "GOLD",
        "NHLBIPR"
      ],
      "text": "Una domanda come «la terapia funziona?» è incompleta finché non si precisa quale esito si sta osservando. La dispnea e la limitazione nelle attività descrivono il peso quotidiano della malattia; le riacutizzazioni descrivono episodi di peggioramento e il rischio di nuovi eventi. Le due dimensioni possono muoversi insieme, ma non sono sinonimi. Una persona può respirare meglio durante le attività abituali e continuare ad avere episodi acuti; un’altra può avere pochi episodi e rimanere molto limitata nello sforzo.\n\nIl ragionamento farmacologico deve conservare questa differenza. Un aumento del calibro bronchiale può contribuire al sollievo senza esaurire la prevenzione delle riacutizzazioni. Per contro, ridurre la frequenza degli episodi non dimostra automaticamente un beneficio della stessa grandezza sulla dispnea di ogni giorno. Confrontare due trattamenti richiede quindi di mantenere distinti funzione respiratoria, sintomi, eventi e tempo di osservazione. Non basta contare quanti principi attivi contiene l’inalatore.\n\nGOLD 2026 separa l’avvio del mantenimento dalla rivalutazione di una terapia già in corso. Nel follow-up distingue dispnea persistente e riacutizzazioni; per la prima considera anche dispositivo, interventi non farmacologici e altre cause di affanno. Tecnica inalatoria e aderenza vanno controllate prima di attribuire l’insuccesso al farmaco. Questo non corrisponde a una scala obbligatoria in cui tutti iniziano con un LABA e aggiungono sempre gli stessi medicinali nello stesso ordine.\n\nUn esempio didattico aiuta a leggere lo schema: se il problema osservato è la fatica nel camminare, la domanda riguarda ciò che limita l’attività e quanto del trattamento raggiunge il bersaglio; se il problema sono nuovi episodi acuti, la domanda riguarda il rischio che persiste nel tempo. Le informazioni raccolte possono sovrapporsi, ma la conclusione deve rispondere all’obiettivo dichiarato. Il principio organizza lo studio e il confronto delle prove; non assegna a un caso individuale una sequenza terapeutica.\n\nLa limitazione nell’attività comprende inoltre una componente che il recettore bronchiale non riassume. La riabilitazione polmonare integra esercizio, educazione e sostegno in un programma supervisionato e adattato alla persona. La descrizione NHLBI include il lavoro sulla resistenza dei muscoli, la gestione delle attività quotidiane e l’uso dei medicinali. Questi elementi spiegano perché la riabilitazione possa affiancare il trattamento farmacologico: interviene sulle capacità necessarie per usare la funzione disponibile nella vita di ogni giorno.\n\nPer capire la complementarità si possono confrontare due passaggi. La broncodilatazione modifica una componente del carico respiratorio attraverso il tono delle vie aeree; l’allenamento e l’educazione lavorano anche sulla capacità di sostenere e organizzare un’attività. Un miglioramento in uno dei due passaggi non documenta automaticamente lo stesso miglioramento nell’altro. Né una maggiore distanza percorsa né una migliore tolleranza dello sforzo dimostrano, da sole, che il tessuto alveolare danneggiato sia stato ricostruito.\n\nAnche le misure vanno mantenute distinte: una prova funzionale valuta una prestazione in condizioni definite, mentre le attività quotidiane dipendono anche da abitudini, ostacoli e contesto. Il risultato va letto rispetto alla domanda iniziale. «Respira meglio», «sostiene più attività» e «ha meno riacutizzazioni» sono informazioni complementari, da documentare separatamente. La descrizione non stabilisce un programma di esercizi, criteri di accesso o frequenze applicabili a tutti.",
      "formula": "Prima: quale trattamento è già in corso? Poi: quale esito resta insoddisfacente? Sintomi e attività → beneficio quotidiano. Episodi di peggioramento → prevenzione di nuovi eventi. Bersaglio, uso effettivo e contesto spiegano l’esito. Schema originale di ragionamento, non algoritmo prescrittivo."
    },
    {
      "id": "bpcoeosinofili",
      "title": "Eosinofili e corticosteroidi: interpretare la probabilità di risposta",
      "refs": [
        "CFI",
        "RAN",
        "GOLD"
      ],
      "text": "Il recettore glucocorticoide può essere presente senza che tutte le componenti di una malattia rispondano allo stesso modo alla sua attivazione. Nel confronto storico dei manuali, la minore risposta steroidea della BPCO è collegata anche alla regolazione della cromatina: l’acetilazione degli istoni può rendere più accessibili programmi trascrizionali infiammatori, mentre le deacetilasi, indicate come HDAC, partecipano alla loro repressione. Il recettore attivato dai glucocorticoidi può reclutare questi sistemi. Stress ossidativo e ridotta attività di alcune HDAC sono stati proposti fra i meccanismi della risposta attenuata.\n\nQuesta spiegazione fornisce un ponte fra ambiente cellulare e farmacodinamica, ma non è un test capace di decidere il trattamento di una persona. Il testo storico che descrive gli steroidi come generalmente inefficaci nella BPCO non può diventare una regola assoluta. Un modello molecolare spiega una possibilità biologica; per conoscere il beneficio clinico servono popolazioni studiate, esiti misurati e caratteristiche che distinguano le risposte.\n\nGOLD 2026 considera gli eosinofili ematici insieme alla storia delle riacutizzazioni nel valutare l’aggiunta di ICS. Il conteggio rappresenta un continuo e può fluttuare: i valori di riferimento orientano la stima del beneficio, senza costituire interruttori biologici. Una storia di polmoniti pesa contro l’impiego; asma concomitante o pregressa modifica la valutazione. Aggiungere ICS e sospenderli sono inoltre decisioni diverse, con informazioni e rischi propri.\n\nIl biomarcatore aiuta quindi a interrogare la risposta attesa a un trattamento; non misura direttamente quanti recettori glucocorticoidi siano occupati e non sostituisce la diagnosi. Non equivale neppure a una misura completa dell’infiammazione nel polmone. Un valore nel sangue, la struttura delle vie aeree e la storia clinica appartengono a livelli differenti del ragionamento e acquistano significato quando vengono messi in relazione.\n\nPer lo studio è utile conservare tre passaggi: il meccanismo rende plausibile l’effetto, il biomarcatore aiuta a distinguere probabilità di risposta, gli esiti clinici mostrano se il beneficio si realizza. Confondere i passaggi porta sia a estendere gli ICS a ogni dispnea sia a escluderli da ogni BPCO. Entrambe le generalizzazioni perdono la variabilità che il modello dovrebbe spiegare.",
      "formula": "Recettore e cromatina → plausibilità del meccanismo. Eosinofili nel sangue → informazione sulla risposta attesa, insieme al contesto. Riacutizzazioni e rischi → bilancio clinico. Nessun singolo livello sostituisce gli altri. Schema originale, senza soglie o dosi."
    },
    {
      "id": "tosse",
      "title": "Tosse: un riflesso protettivo e un sintomo da interpretare",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "EMACODE",
        "NICECOUGH"
      ],
      "text": "La tosse appartiene ai sistemi di difesa delle vie respiratorie: un’espirazione energica può contribuire a espellere materiale che il trasporto mucociliare non ha rimosso. È però anche un sintomo, e la sua presenza non identifica da sola la causa. Infiammazione delle vie aeree, asma, esposizione a irritanti e alcuni farmaci possono partecipare alla sua comparsa. La stessa manifestazione osservabile può quindi derivare da processi differenti, con bersagli farmacologici differenti.\n\nIl riflesso richiede una componente sensitiva, l’integrazione del segnale nei circuiti nervosi e una risposta motoria coordinata. L’espressione tradizionale «centro della tosse» indica in modo sintetico questa integrazione; non significa che ogni tosse secca nasca da una lesione o da uno stimolo esclusivamente centrale. Anche un segnale che parte dalle vie respiratorie può produrre tosse senza espettorato. Distinguere tosse secca e produttiva descrive ciò che accade alle secrezioni, ma non sostituisce la ricerca della causa.\n\nQuesta separazione chiarisce tre obiettivi diversi. Rilassare il muscolo bronchiale modifica una componente dell’ostruzione; controllare l’infiammazione interviene su un processo che può alimentare il sintomo; attenuare il riflesso riduce una risposta dell’organismo. Il beneficio su uno di questi livelli non dimostra automaticamente un beneficio sugli altri. Per esempio, meno colpi di tosse dopo un sedativo non prova che l’asma sia controllata o che l’infezione responsabile sia risolta. Se la tosse contribuisce all’eliminazione delle secrezioni, sopprimerla pone inoltre una domanda sulla capacità residua di rimuoverle.\n\nLa codeina collega questa materia al capitolo sugli oppioidi, dove sono già discussi recettori μ, metabolismo e variabilità individuale. La conversione in morfina è rilevante anche per comprendere i rischi respiratori. Il comunicato EMA per tosse e raffreddore controindica la codeina sotto i 12 anni e non la raccomanda fra 12 e 18 anni in presenza di funzione respiratoria compromessa. Il farmaco è inoltre controindicato durante l’allattamento e nei metabolizzatori ultrarapidi noti. Una percentuale media di conversione non permette di prevedere la sicurezza del singolo individuo.\n\nIl fatto che un composto possa deprimere il riflesso non garantisce un beneficio utile in ogni tipo di tosse. NICE NG120, nel contesto della tosse acuta, descrive prove limitate per i sedativi da banco ed esclude la codeina dalle opzioni considerate; segnala anche i limiti in presenza di tosse persistente o secrezioni eccessive. Queste indicazioni vanno mantenute nel loro contesto: non sono una regola unica per tosse acuta, malattia respiratoria cronica e palliazione. Per studiare il trattamento occorre nominare sia il processo su cui agisce il farmaco sia l’esito che ci si aspetta di modificare.",
      "formula": "Stimolo nelle vie respiratorie → segnale sensitivo → integrazione nervosa → risposta motoria. Causa della tosse, intensità del riflesso e rimozione delle secrezioni sono tre domande collegate. Ridurre il sintomo non misura da solo il controllo della malattia. Schema didattico originale."
    },
    {
      "id": "destrometorfano",
      "title": "Destrometorfano: distinguere struttura, bersagli ed esposizione",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "DXM",
        "NICEEVID"
      ],
      "text": "Il destrometorfano mostra perché una famiglia chimica non può sostituire la descrizione farmacologica. La struttura di tipo morfinanico e la relazione stereochimica con altri composti non implicano che tutte le molecole condividano gli stessi effetti. La disposizione tridimensionale modifica il modo in cui una molecola interagisce con proteine e recettori. Nel caso del destrometorfano, l’impiego antitussivo non coincide con l’attività analgesica tipica degli agonisti μ. Classificarlo semplicemente insieme alla morfina, senza precisare questa differenza, nasconde proprio la proprietà che occorre spiegare.\n\nL’azione sul riflesso della tosse è centrale. Il quadro discusso nei manuali e nel corso comprende interazioni con sistemi diversi, fra cui sigma-1, trasmissione serotoninergica e segnalazione glutammatergica tramite NMDA. Queste informazioni descrivono un profilo complesso; non consentono di assegnare a un solo bersaglio l’intero effetto antitussivo. Anche le affinità riportate per un recettore vanno lette insieme al sistema sperimentale, alla concentrazione raggiunta e alla molecola effettivamente studiata. Il numero più piccolo in una tabella di affinità non stabilisce da solo quale effetto dominerà nell’organismo.\n\nIl metabolismo aggiunge un secondo livello. CYP2D6 trasforma il destrometorfano in destrorfano, anch’esso attivo: composto somministrato e metabolita contribuiscono quindi al quadro farmacologico. Una ridotta attività dell’enzima o la sua inibizione può aumentare e prolungare l’esposizione al composto originario. Non è corretto trasferire automaticamente a questo sistema la regola intuitiva «meno metabolismo, meno effetto», né dedurre dalla sola formazione del metabolita il risultato complessivo. Per farlo servirebbero le esposizioni delle diverse specie e la loro attività sui singoli bersagli.\n\nLo SmPC britannico di Robitussin Dry Cough segnala sonnolenza, vertigini e disturbi gastrointestinali, oltre a dipendenza e abuso. Richiama inoltre il rischio serotoninergico con farmaci come gli SSRI, gli IMAO e gli inibitori di CYP2D6. Nel sovradosaggio grave può comparire depressione respiratoria. La mancanza di impiego analgesico, quindi, non autorizza a dichiarare assenza di effetti sul sistema nervoso o sicurezza automatica in pediatria. Le restrizioni restano specifiche del medicinale e della giurisdizione; questo confronto non sostituisce la verifica del prodotto italiano.\n\nInfine, la plausibilità del meccanismo va separata dalla misura del beneficio. La sintesi delle prove di NICE NG120 descrive risultati discordanti per il destrometorfano negli adulti con tosse acuta e un significato clinico del beneficio incerto. Non basta dunque affermare che il farmaco «agisce sul centro della tosse»: occorre chiedere in quale popolazione, rispetto a quale confronto e su quale esito sia stato studiato. Frequenza degli episodi, intensità percepita e impatto sul riposo sono misure diverse. La tabella dei bersagli aiuta a formulare domande sul meccanismo; il confronto clinico serve a verificare quali di quelle possibilità si traducano in un beneficio osservabile.",
      "formula": "Struttura tridimensionale → interazioni con più proteine. CYP2D6 → rapporto fra destrometorfano e destrorfano. Esposizione e contesto → effetti e rischi. Prove cliniche → beneficio misurato sulla tosse. Quattro livelli da collegare senza renderli equivalenti. Schema originale, senza dosi o confronti di potenza."
    },
    {
      "id": "secrezioni",
      "title": "Secrezioni bronchiali: produzione, proprietà e rimozione",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "NAC",
        "AIFAMUC",
        "NICECOUGH",
        "NICEEVID"
      ],
      "text": "Il muco aggiunge al ragionamento sull’ostruzione una componente diversa dal tono della muscolatura liscia. Per comprenderla bisogna separare quanto materiale viene secreto, quali proprietà possiede e quanto efficacemente viene allontanato. Una secrezione più fluida può essere più facilmente mobilizzabile, ma la sua rimozione richiede un apparato di trasporto funzionante. La parola «fluidificante» descrive quindi un effetto sul materiale; da sola non descrive l’intero risultato nelle vie respiratorie.\n\nIl trasporto mucociliare e la tosse contribuiscono a spostare le secrezioni verso l’esterno. Il primo dipende dall’attività dell’epitelio ciliato e dal materiale su cui le ciglia lavorano; la seconda aggiunge una forza espulsiva. Se la capacità di espettorare è ridotta, mobilizzare una quantità maggiore di secrezioni può lasciare materiale nelle vie aeree. La domanda farmacologica non è soltanto «quanto diminuisce la viscosità?», ma anche «che cosa succede al materiale reso mobilizzabile?». Questo passaggio collega la chimica del muco alla funzione respiratoria.\n\nLa distinzione aiuta a collocare i recettori già incontrati. Il circuito colinergico influenza sia il muscolo bronchiale sia la secrezione; un antagonista muscarinico interviene sulla risposta delle cellule all’acetilcolina. Un agente che modifica il materiale già presente nel lume agisce invece in un altro punto del processo. Non basta che due farmaci siano usati in ambito respiratorio per attribuire loro lo stesso bersaglio o lo stesso esito. Bronco più aperto, secrezione diversa e migliore eliminazione sono risultati collegati, che devono essere valutati separatamente.\n\nGli espettoranti, fra cui la guaifenesina riportata da Katzung, sono descritti nel corso attraverso l’aumento della componente acquosa delle secrezioni. Il riflesso dalla mucosa gastrica alle ghiandole bronchiali è un modello proposto per spiegarne l’azione. Il modello non misura però l’entità del sollievo né stabilisce che ogni tosse produttiva tragga beneficio. NICE NG120 riporta prove limitate per la guaifenesina nella tosse acuta dai 12 anni; nella sintesi degli studi, la variazione della consistenza dell’espettorato non coincide sempre con una riduzione della tosse. La classificazione come espettorante va dunque distinta dalla dimostrazione di efficacia nel singolo contesto.\n\nIl problema della rimozione è particolarmente evidente nella prima infanzia. La nota AIFA del novembre 2010 controindica i mucolitici orali e rettali considerati sotto i due anni per il rischio di peggiorare l’ostruzione, in presenza di capacità di drenaggio limitata. Il provvedimento esclude espressamente l’uso antidotico dell’acetilcisteina. La soglia di tre anni riportata nella comunicazione ministeriale del 2011 presente nel corso riguarda invece gli integratori: ambito e prodotto devono restare riconoscibili.\n\nAnche al di fuori di questa fascia d’età, «superare il limite» non equivale a essere candidati a qualunque preparazione. Lo SmPC britannico della specifica acetilcisteina consultata prevede limiti propri e richiama il rischio di accumulo delle secrezioni quando il riflesso della tosse viene ridotto da antitussivi. Il ragionamento da conservare è la coerenza fra l’effetto desiderato sul muco e la capacità di eliminarlo; la verifica clinica richiede poi indicazione, formulazione e popolazione appropriate.",
      "formula": "Produzione → proprietà del secreto → trasporto mucociliare e tosse → eliminazione. Il farmaco può modificare un passaggio senza correggere gli altri. Meno viscoso non significa già rimosso. Schema didattico originale."
    },
    {
      "id": "mucolitici",
      "title": "Acetilcisteina e dornase: riconoscere il substrato del farmaco",
      "refs": [
        "CFI",
        "APP",
        "NAC",
        "NACBONDS",
        "DORNASE",
        "NICECF",
        "NICECOUGH"
      ],
      "text": "Il termine mucoattivo raccoglie interventi diversi sulle secrezioni. Per distinguere acetilcisteina e dornase alfa è utile chiedere quale struttura molecolare venga modificata. Un bersaglio farmacologico può essere anche un componente extracellulare del materiale da rimuovere: non occorre che sia sempre un recettore di membrana con una cascata di secondi messaggeri. Questa prospettiva amplia il confronto con agonisti β₂ e antagonisti muscarinici senza confonderne gli effetti.\n\nL’acetilcisteina possiede un gruppo tiolico, cioè un gruppo contenente zolfo nella forma –SH. Il suo effetto mucolitico è ricondotto alla riduzione di legami disolfuro nella rete delle mucoproteine: modificando questi collegamenti, cambia l’organizzazione del materiale e può diminuirne la viscosità. La descrizione chimica spiega perché il farmaco venga studiato sul muco, ma non permette di dedurre automaticamente la dose efficace, il beneficio clinico o l’equivalenza fra somministrazione orale e inalatoria.\n\nLa molecola partecipa anche a processi differenti dalla mucolisi. La sua trasformazione in cisteina si collega alla disponibilità di un precursore del glutatione. È quindi necessario distinguere effetto locale sulle secrezioni, metabolismo e impiego antidotico nel sovradosaggio di paracetamolo. La stessa identità chimica può essere utilizzata con obiettivi e formulazioni diversi; una regola riferita a un impiego non può essere trasferita senza verifica a un altro. Anche l’assorbimento va distinto dalla quota di composto originario disponibile sistemicamente: lo SmPC consultato descrive un importante primo passaggio e l’eliminazione soprattutto di metaboliti, non una semplice escrezione urinaria della molecola invariata.\n\nLa dornase alfa è invece una desossiribonucleasi umana ricombinante. Il substrato rilevante è il DNA extracellulare presente nelle secrezioni purulente, anche in seguito alla degenerazione dei leucociti. Le lunghe catene di DNA contribuiscono alle proprietà viscoelastiche di questo materiale. Idrolizzarle modifica una componente diversa dai legami disolfuro delle mucoproteine: «ridurre la viscosità» è un risultato descrittivo comune, ottenuto attraverso operazioni molecolari differenti.\n\nNella fibrosi cistica la dornase viene somministrata per inalazione, per raggiungere le secrezioni delle vie aeree. Il confronto con un farmaco orale non va costruito usando soltanto le concentrazioni nel sangue: una bassa esposizione sistemica può accompagnarsi a un’azione nel compartimento raggiunto dall’aerosol. Non significa assenza di limiti o intercambiabilità dei dispositivi. Lo SmPC britannico delimita la popolazione studiata e mantiene la fisioterapia respiratoria nella cura complessiva; il farmaco non sostituisce automaticamente le altre componenti della rimozione delle secrezioni.\n\nÈ inoltre scorretto trasformare una posizione terapeutica favorevole in esclusività. NICE NG78 indica dornase come prima scelta mucoattiva nella fibrosi cistica con malattia polmonare clinicamente evidente, ma contempla altre opzioni, fra cui soluzione salina ipertonica e, in condizioni definite, mannitolo. Questa distinzione corregge l’affermazione di «unico agente efficace» presente nei materiali del corso. Non autorizza però a estendere i risultati della fibrosi cistica a tutte le malattie accompagnate da espettorato.\n\nIl contesto resta decisivo anche per l’acetilcisteina. NICE NG120 non raccomanda di offrire mucolitici per la tosse acuta associata a infezione delle alte vie respiratorie o bronchite acuta. Una trasformazione chimica plausibile del muco non costituisce, da sola, una raccomandazione d’uso. Il percorso completo richiede substrato, accesso al compartimento, capacità di rimozione ed esito clinico misurato: ciascun passaggio risponde a una domanda diversa.",
      "formula": "Acetilcisteina → gruppo –SH → legami disolfuro delle mucoproteine. Dornase → attività DNasi → DNA extracellulare. Poi: raggiungimento del compartimento → modificazione delle secrezioni → rimozione → beneficio da verificare nella malattia studiata. Confronto originale, senza equivalenze di potenza o dose."
    },
    {
      "id": "lettura",
      "title": "Come collegare recettore, molecola e patologia",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "Per ripercorrere il capitolo si può partire da una domanda concreta: quale componente dell’ostruzione sta modificando il farmaco? Se il percorso è β₂–AMP ciclico, il punto di arrivo immediato è il tono muscolare. Se il bersaglio è muscarinico, si sta riducendo una risposta all’acetilcolina. Se si interviene su CysLT₁, si limita una via specifica dei mediatori lipidici. Con il recettore glucocorticoide si modifica invece un programma cellulare più ampio.\n\nLa domanda successiva riguarda il tempo e l’esito. Una variazione del calibro, il controllo dell’iperreattività e la prevenzione di nuovi episodi non sono misure intercambiabili. Anche la via di somministrazione e la formulazione appartengono al ragionamento: condizionano l’esposizione senza cambiare il nome del bersaglio.\n\nLa copertura delle fonti procede per intervalli documentati. Il lotto PDF 721–725 aggiunge cinque pagine controllate nel testo e nelle immagini, due integrate per erogazione inalatoria e obiettivi funzionali. Il registro cumulativo distingue 152 pagine controllate da 114 integrate. Del Seminar sulla BPCO sono state lette le editoriali 2227–2238, incluse le tre figure: il testo narrativo è stato raggiunto fino alla conclusione, mentre la bibliografia è ancora incompleta. La copia del precedente articolo sull’asma è stata completata. Nessuna lettura delle citazioni attribuisce lettura agli studi primari o alle appendici. I confronti ufficiali restano limitati alle sezioni dichiarate nelle fonti: non costituiscono una revisione clinica indipendente."
    }
  ],
  "wordCount": 15898,
  "checks": [
    {
      "question": "Perché broncodilatazione non equivale a controllo completo della malattia?",
      "answer": "La contrazione è una componente dell’ostruzione; edema, muco, infiammazione e rimodellamento richiedono un ragionamento distinto."
    },
    {
      "question": "Infiammazione di tipo 2 e risposta allergica IgE-mediata coincidono sempre?",
      "answer": "No. Th2 e cellule linfoidi innate ILC2 possono contribuire a circuiti tipo 2 parzialmente convergenti. I segnali epiteliali collegano stimoli differenti alla rete; l’assenza di allergia documentata non esclude ogni componente tipo 2."
    },
    {
      "question": "Perché un anti-H1 non spegne tutta la risposta allergica bronchiale?",
      "answer": "L’istamina è uno di più mediatori. Leucotrieni, prostaglandine, citochine e circuiti nervosi coinvolgono altri bersagli."
    },
    {
      "question": "Le curve precoce e tardiva predicono due attacchi in ogni paziente?",
      "answer": "No. Descrivono modelli sperimentali e aiutano a distinguere tempi e meccanismi, senza definire una sequenza obbligatoria."
    },
    {
      "question": "Qual è il secondo messaggero nella via β₂ e quale ruolo ha PKA?",
      "answer": "L’AMP ciclico è il secondo messaggero; PKA è una chinasi effettore. Un agonista β₂ può opporsi alla contrazione senza competere sul recettore del broncocostrittore."
    },
    {
      "question": "La lunga azione del tiotropio dimostra un legame esclusivo a M₃?",
      "answer": "No. Affinità, velocità di dissociazione e distribuzione sono proprietà diverse; la permanenza su M₃ contribuisce alla durata."
    },
    {
      "question": "Montelukast inibisce la sintesi di tutti i leucotrieni?",
      "answer": "No. Antagonizza CysLT₁. Bersaglio, fase del processo e profilo di sicurezza sono distinti da quelli degli agonisti β₂ e degli antimuscarinici."
    },
    {
      "question": "Un corticosteroide inalatorio è un rilassante diretto del bronco?",
      "answer": "Il suo ruolo principale riguarda programmi infiammatori cellulari; non va assimilato al profilo temporale di un broncodilatatore diretto."
    },
    {
      "question": "La posizione di una classe nella tabella della lezione ne stabilisce l’impiego attuale?",
      "answer": "No. La classificazione organizza i meccanismi; priorità terapeutiche e rischi richiedono documenti attuali."
    },
    {
      "question": "Formoterolo da solo rappresenta la strategia ICS-formoterolo?",
      "answer": "No. La sigla include il corticosteroide inalatorio. La combinazione va interpretata insieme a formulazione, età e indicazioni."
    },
    {
      "question": "Un valore basso dopo corticosteroidi dimostra che il circuito infiammatorio fosse assente?",
      "answer": "No. La terapia può modificare il biomarcatore. Eosinofili e FeNO vanno interpretati rispetto a momento, compartimento ed esposizione effettiva; una misura isolata non stabilisce un’indicazione a biologici e non autorizza sospensioni autonome."
    },
    {
      "question": "Il lavoro sul danno meccanico dimostra una terapia con gadolinio nei pazienti?",
      "answer": "No. Le prove di intervento sono soprattutto murine; i campioni umani non costituiscono uno studio terapeutico."
    },
    {
      "question": "Stessi recettori significano stesso trattamento per asma e BPCO?",
      "answer": "No. Il bersaglio può essere condiviso mentre malattia, infiammazione, struttura ed esiti da prevenire differiscono."
    },
    {
      "question": "Perché provocazione bronchiale e risposta al broncodilatatore non identificano da sole la causa della malattia?",
      "answer": "Interrogano la risposta del sistema a stimoli diversi, con il flusso come esito funzionale. La positività non è specifica di un’unica causa e una prova negativa va letta rispetto a storia, momento e trattamento. Non sono misure dirette dell’infiammazione né istruzioni per sospendere farmaci."
    },
    {
      "question": "Perché aumentare AMPc e ridurne la degradazione non sono lo stesso intervento?",
      "answer": "L’agonista β₂ stimola la produzione attraverso Gs e adenilato ciclasi; l’inibizione delle fosfodiesterasi ne limita la degradazione. La convergenza sul messaggero non elimina differenze di bersagli, esposizione o ruolo clinico."
    },
    {
      "question": "Un agonista a lunga durata deve necessariamente iniziare lentamente?",
      "answer": "No. Inizio e durata sono proprietà distinte: il formoterolo è rapido e prolungato. Salmeterolo è prolungato ma non destinato al sollievo acuto; la sigla LABA non rende i prodotti intercambiabili."
    },
    {
      "question": "Un sintomo persistente durante terapia dimostra insensibilità del bersaglio o asma grave?",
      "answer": "No. Occorre distinguere diagnosi, processi concomitanti ed esposizione effettiva al farmaco. Una comorbidità può mantenere il sintomo, mentre tecnica o aderenza possono limitare il trattamento. Controllo, gravità dopo ottimizzazione e fenotipo restano dimensioni differenti."
    },
    {
      "question": "Una minore contrazione dopo stimolazione dei nervi dimostra direttamente che viene rilasciata meno acetilcolina?",
      "answer": "No. È una misura funzionale che può suggerire una modulazione della trasmissione, ma va distinta dalla misura diretta del neurotrasmettitore. Specie, preparazione, molecola e condizioni sperimentali delimitano l’interpretazione."
    },
    {
      "question": "Perché un agonista β₂-selettivo inalatorio può avere effetti sistemici?",
      "answer": "La selettività è relativa e il recettore non è esclusivo del bronco. Parte della dose può raggiungere il circolo dopo assorbimento polmonare o intestinale; bersaglio, esposizione e risposta del tessuto concorrono all’effetto."
    },
    {
      "question": "Un grafico delle persone senza riacutizzazione dimostra direttamente la down-regulation dei recettori β₂?",
      "answer": "No. Descrive un esito clinico, distinto da numero dei recettori, accoppiamento e risposta broncodilatatrice. Nel confronto storico citato, l’abstract riporta risposta broncodilatatrice mantenuta: il meccanismo non si deduce dal solo grafico."
    },
    {
      "question": "Perché una struttura ammonica quaternaria non garantisce assenza di effetti sistemici?",
      "answer": "La limitata permeabilità non equivale ad assorbimento nullo. L’esposizione periferica, la via di eliminazione e gli organi raggiunti restano rilevanti; un minore accesso al sistema nervoso centrale non esclude effetti anticolinergici altrove."
    },
    {
      "question": "Perché una diversa curva di FEV₁ dopo salbutamolo e ipratropio non dimostra che la causa sia il blocco M₂?",
      "answer": "Il FEV₁ descrive una risposta funzionale complessiva. La curva non separa il ruolo del feedback M₂ da contributo vagale, esposizione e cinetica. Occorrono prove specifiche del meccanismo; inoltre una risposta dopo singola somministrazione non misura il controllo della malattia nel tempo."
    },
    {
      "question": "Perché la stessa dose di teofillina può diventare più rischiosa senza essere aumentata?",
      "answer": "L’esposizione dipende anche dalla clearance, che può cambiare con malattie, fumo e interazioni. Una riduzione dell’eliminazione può aumentare le concentrazioni e gli effetti sistemici; il margine terapeutico è ristretto. Il monitoraggio non sostituisce la valutazione clinica."
    },
    {
      "question": "Perché selettività PDE4 e somministrazione inalatoria non significano assenza di rischi?",
      "answer": "La selettività riguarda un bersaglio, la via riguarda come il farmaco raggiunge i tessuti. Le PDE non sono esclusive del bronco e l’inalazione non esclude effetti indesiderati. Roflumilast ed ensifentrina hanno avvertenze proprie; un effetto cellulare o un miglioramento del FEV₁ non dimostra riparazione alveolare."
    },
    {
      "question": "Perché aumentare l’espressione dei recettori β₂ non equivale a produrre una broncodilatazione immediata?",
      "answer": "Il corticosteroide regola il programma cellulare e la disponibilità del recettore; l’agonista β₂ attiva il recettore e il segnale di rilassamento. Tempi ed esiti differiscono. La cooperazione non dimostra che ogni forma di tolleranza venga abolita."
    },
    {
      "question": "Perché un forte primo passaggio epatico non elimina gli effetti sistemici di un corticosteroide inalato?",
      "answer": "Il primo passaggio limita soprattutto il contributo della quota deglutita e assorbita dall’intestino. La quota depositata nel polmone può raggiungere il sangue senza quel passaggio iniziale. Contano anche dose, durata, metabolismo e interazioni; deposizione orofaringea e rischi sistemici sono problemi distinti."
    },
    {
      "question": "Perché bloccare CysLT₁ non equivale a inibire la 5-lipossigenasi?",
      "answer": "La 5-lipossigenasi partecipa alla formazione dei leucotrieni: zileuton agisce sulla sintesi. Montelukast antagonizza CysLT₁ e limita una via di risposta a mediatori già prodotti. Non blocca per questo ogni recettore o la sintesi di LTB₄."
    },
    {
      "question": "Una riduzione degli eosinofili e un miglioramento del flusso dimostrano equivalenza agli ICS?",
      "answer": "No. Sono indicatori differenti dal controllo di tutta la rete infiammatoria e dalla prevenzione delle riacutizzazioni. GINA considera gli antagonisti dei leucotrieni meno efficaci degli ICS soprattutto per le riacutizzazioni; vanno inoltre considerati i rischi specifici, inclusi gli eventi neuropsichiatrici."
    },
    {
      "question": "Perché una risposta ridotta da un cromone non identifica da sola un meccanismo mastocitario esclusivo?",
      "answer": "I manuali descrivono effetti anche su altre cellule e limiti della corrispondenza fra inibizione del rilascio di istamina ed efficacia nell’asma. Servono controlli sul sistema studiato, sullo stimolo e sul tempo della risposta; il risultato finale non identifica da solo il bersaglio."
    },
    {
      "question": "In che senso omalizumab modifica un recettore senza esserne un antagonista diretto?",
      "answer": "Il bersaglio immediato è l’IgE libera, la cui disponibilità per FcεRI diminuisce. La successiva riduzione dell’espressione del recettore modifica la risposta della cellula, ma non equivale all’occupazione diretta di FcεRI da parte del farmaco."
    },
    {
      "question": "Perché benralizumab non è descritto completamente come semplice antagonista di IL-5?",
      "answer": "Riconosce IL-5Rα sulla cellula, mentre mepolizumab e reslizumab legano la citochina. La sua regione Fc favorisce inoltre il reclutamento di cellule effettrici e l’ADCC: il meccanismo comprende la riduzione della popolazione eosinofila, distinta dalla sola neutralizzazione del ligando."
    },
    {
      "question": "Come può dupilumab interferire con IL-4 e IL-13 attraverso un unico bersaglio?",
      "answer": "IL-4Rα è condivisa da due complessi: il tipo I risponde a IL-4 e il tipo II partecipa al segnale di IL-4 e IL-13. Interferire con la subunità comune limita entrambe le vie senza equivalere alla neutralizzazione diretta delle due citochine."
    },
    {
      "question": "Che cosa distingue AIR-only da MART, se entrambi possono usare ICS-formoterolo?",
      "answer": "AIR-only impiega il sollievo antinfiammatorio senza mantenimento quotidiano; MART associa una quota programmata e l’uso al bisogno della stessa associazione appropriata. La distinzione riguarda il regime. Formoterolo isolato e altre combinazioni ICS-LABA non sono sostituti automatici."
    },
    {
      "question": "Perché una restrizione su salbutamolo/ipratropio in associazione fissa non vieta automaticamente ogni uso dei due principi attivi?",
      "answer": "La restrizione riguarda una preparazione, un’indicazione e una popolazione definite. Nei prodotti separati le quantità possono essere adattate indipendentemente. Bersagli complementari, rapporto fisso e autorizzazione del medicinale sono livelli differenti da verificare."
    },
    {
      "question": "Perché meno dispnea non dimostra automaticamente che il rischio di riacutizzazioni sia risolto?",
      "answer": "Sintomi quotidiani e nuovi episodi acuti sono esiti differenti. Il beneficio va collegato all’obiettivo, al tempo osservato e al trattamento effettivamente assunto. Il follow-up non coincide con una scala universale di aggiunta di farmaci."
    },
    {
      "question": "Un valore di eosinofili stabilisce da solo la necessità di ICS nella BPCO?",
      "answer": "No. È un biomarcatore da interpretare come continuo insieme alla storia delle riacutizzazioni, al contesto di asma e ai rischi, fra cui la polmonite. Non misura l’occupazione del recettore e non sostituisce diagnosi o valutazione del beneficio."
    },
    {
      "question": "La tosse secca dimostra un’origine esclusivamente centrale e richiede sempre un sedativo?",
      "answer": "No. Descrive l’assenza di espettorato, non la sede della causa. Riflesso, processo responsabile e gestione delle secrezioni vanno distinti; ridurre la tosse non dimostra il controllo dell’asma o di un’infezione."
    },
    {
      "question": "Perché inibire CYP2D6 non significa automaticamente ridurre tutti gli effetti del destrometorfano?",
      "answer": "Il composto originario e il destrorfano sono attivi. L’inibizione modifica il loro rapporto e può aumentare o prolungare l’esposizione al destrometorfano, con rischi di interazione. Il profilo dei bersagli non dimostra da solo il beneficio clinico sulla tosse."
    },
    {
      "question": "Perché rendere il muco meno viscoso non garantisce che venga eliminato?",
      "answer": "La modifica del materiale non sostituisce trasporto mucociliare e tosse efficaci. Se la capacità di rimozione è limitata, le secrezioni mobilizzate possono accumularsi. Produzione, proprietà e rimozione vanno valutate separatamente."
    },
    {
      "question": "Acetilcisteina e dornase alfa agiscono sullo stesso substrato?",
      "answer": "No. Il gruppo tiolico dell’acetilcisteina è collegato alla riduzione di legami disolfuro delle mucoproteine; la dornase idrolizza DNA extracellulare. Un risultato descrittivo simile sulle secrezioni non rende intercambiabili meccanismi, vie o indicazioni."
    },
    {
      "question": "Un inalatore che registra tutte le erogazioni dimostra che il bersaglio polmonare abbia ricevuto l’esposizione prevista?",
      "answer": "No. Il registro documenta un passaggio dell’uso; deposizione, tecnica e distribuzione restano determinanti. Il dato può aiutare a riconoscere ostacoli, mentre aderenza ed esiti clinici devono essere valutati separatamente."
    },
    {
      "question": "Come si interpreta una risposta diversa di asma e dermatite durante un biologico?",
      "answer": "I distretti possono condividere parte della rete immunologica ma hanno esiti propri. Sintomi, riacutizzazioni, funzione, carico terapeutico e sicurezza vanno documentati nel tempo; un beneficio cutaneo non dimostra automaticamente quello respiratorio."
    },
    {
      "question": "Una storia di esposizione e una risposta al broncodilatatore ricostruiscono l’origine della BPCO?",
      "answer": "No. Le esposizioni contribuiscono al rischio, la funzione attuale va interpretata nel contesto clinico e la risposta al farmaco descrive una componente modificabile. Nessuna delle tre informazioni, isolatamente, ricostruisce lo sviluppo polmonare o dimostra tutte le cause della malattia."
    },
    {
      "question": "Perché una maggiore presenza di cellule infiammatorie può accompagnarsi a difese locali meno efficienti nella BPCO?",
      "answer": "Il numero di cellule non misura la loro capacità di eliminare batteri e materiale. Difetti della barriera, delle ciglia e della fagocitosi possono coesistere con richiamo cellulare e produzione di proteasi. La risposta può quindi alimentare il danno senza ristabilire una rimozione efficace."
    },
    {
      "question": "Un fenotipo radiologico o una conta eosinofila identificano da soli l’endotipo e il trattamento della BPCO?",
      "answer": "No. Immagini e biomarcatori descrivono componenti diverse, misurate in un compartimento e in un momento. Devono essere collegati alla funzione, alla storia e agli esiti clinici; non ricostruiscono isolatamente tutti i meccanismi né dimostrano il beneficio di un trattamento."
    },
    {
      "question": "Perché una tecnica inalatoria valida per un prodotto non può essere trasferita automaticamente a un altro dispositivo?",
      "answer": "Il dispositivo e la formulazione determinano come viene generato e trasportato l’aerosol. Nell’esempio discusso, Turbohaler e Respimat prevedono gesti inspiratori diversi. La tecnica condiziona l’esposizione; non cambia il bersaglio né dimostra una differente potenza intrinseca della molecola."
    },
    {
      "question": "Perché un miglioramento della tolleranza allo sforzo non dimostra da solo né rigenerazione alveolare né riduzione delle riacutizzazioni?",
      "answer": "Lo sforzo dipende da più componenti, tra cui carico respiratorio, capacità muscolare e gestione dell’attività. Il suo miglioramento documenta quell’esito nelle condizioni osservate. Struttura alveolare e frequenza degli episodi acuti richiedono valutazioni proprie; broncodilatazione e riabilitazione possono contribuire attraverso passaggi diversi."
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 621–625, etichette 619–623. Testo disponibile e cinque rendering controllati; 621 è programma, 622 contiene elementi poco leggibili non trasferiti. 623 riprende una Perspective, non una sperimentazione clinica. Ampliamento: PDF 626–630, etichette 624–628, testo e rendering; categorie storiche riconciliate. La figura 629 ripete Katzung 404, non è prova indipendente. Lotto successivo: PDF 631–635, etichette 629–633; quattro testi disponibili e tabella immagine 634 letti, cinque rendering controllati. 633 non aggiunge contenuto; figure 631/633–635 duplicate negli appunti 295–296. Nuovo intervallo PDF 636–640, etichette 634–638: quattro testi e uno schema immagine, cinque rendering. 637–639 integrati; 636/640 senza nuovo passaggio. Grafici e schemi duplicati negli appunti riconosciuti. PDF 641–645, etichette 639–643: cinque pagine del corso, dieci complessive nel lotto con i confronti; 641–643 integrati, 644–645 già trattati. Recuperato il riferimento Ruffin 1977, distinto dalla lettura del suo testo integrale. PDF 646–650, etichette 644–648: metilxantine, PDE4 e PDE3/4 integrate da 646–649; corticosteroidi 650 letti ma non aggiunti. PDF 651–655, etichette 649–653: testi e tabella immagine 653 letti, cinque rendering. Nota inferiore 653 tagliata, non ricostruita; 652 letta ma non integrata. Tabelle di dosi e prodotti non trasferite. PDF 656–660, etichette 654–658: testi e tabella immagine 658 letti, cinque rendering. 658 non integrata; origine primaria della tabella non identificata. Figure 657/659 ripetute negli appunti 301; Newman 2004 solo riferimento riconosciuto, non articolo letto. PDF 661–665, etichette 659–663: testi disponibili e cinque rendering controllati; 663/665 prevalentemente figurative. 662 non integrata. JAMA/NEJM riconosciuti come riferimenti nelle slide, originali non letti; figura Nature Reviews Immunology con attribuzione incompleta ed etichetta coperta. PDF 666–670, etichette 664–668: cinque rendering e testi disponibili controllati; 668–670 prevalentemente figurative. 670 non integrata. Tabelle JAMA 2025 e Lancet 2020 riconosciute, articoli primari non letti; attribuzioni delle figure 666/667 incomplete. PDF 671–675, etichette 669–673: cinque testi disponibili e rendering controllati. JAMA 2022 su GINA 2021, NEJM 2023 e Frontiers 2025 distinti dalle linee guida attuali; originali non letti. Omissione di ICS corretta; restrizione del prodotto distinta dai principi attivi; percentuali della survey non trasferite. PDF 676–680, etichette 674–678: testo disponibile e cinque rendering controllati. Integrate selettivamente 676–677 (JAMA 2025/GOLD 2025 e figura Lancet 2022), confrontate con GOLD 2026; articoli primari non letti. 678 duplicata negli appunti 303; 679–680 sugli antitussivi non integrate. PDF 681–685, etichette 679–683: nove pagine pertinenti complessive nel lotto con i confronti, testi disponibili e rendering controllati. Integrate 682–684 sugli antitussivi; 681 già coperta negli oppioidi e 685 mucolitici non integrate. Ki, diagrammi delle fonti e rassicurazioni assolute non trasferiti. Lotto 686–690: PDF 686–690, etichette 684–688, nuovi; 685, etichetta 683, riletta. Tutto il testo disponibile e sei rendering controllati. 685: tabella ripetuta negli appunti 292; titolo orale incompatibile con dornase inalatoria, eliminazione immodificata della NAC e unico mucoattivo efficace nella fibrosi cistica non adottati. 686: comunicazione del Ministero della Salute del 7 ottobre 2011 sugli integratori; distinta la soglia storica di tre anni per integratori dalla controindicazione AIFA sotto due anni dei medicinali mucolitici orali/rettali. Nessuna estensione all’uso antidotico. 687: dornase come DNasi umana ricombinante inalatoria; struttura proteica e immagini del muco controllate, non riprodotte né trattate come prova clinica. 688: espettoranti e modello del riflesso gastropolmonare; riconosciuta figura duplicata negli appunti 292. Beneficio clinico non dedotto dal disegno o dal meccanismo proposto. 689–690: prime due pagine del contributo Asthma in Adults di Giselle Mosnaim, NEJM 2023;389:1023–1031, DOI 10.1056/NEJMcp2304871, riprodotte nel corso. Lette e controllate, non integrate: obiettivi e AIR/MART già trattati. Non dichiarata lettura dell’articolo intero o dei suoi studi, non trasferiti algoritmi e stime storiche. Lotto 691–695: PDF 691–695, etichette 689–693, pagine 1025–1029 del contributo Asthma in Adults di Giselle Mosnaim (NEJM 2023;389:1023–1031). Cinque nuove letture complete del testo disponibile e dei rendering, inclusi figura 1, legenda, tabella 1 e note. Integrate solo 691 e 695 per distinguere controllo, gravità e fenotipo, con GINA 2026. Tre pagine non integrate; articolo, appendice e studi primari non letti integralmente. Nessun algoritmo, dose o soglia storica trasferiti. Lotto 696–700: PDF 696–700, etichette 694–698; cinque nuove letture del testo e dei rendering. 696–697: NEJM 2023, editoriali 1030–1031, conclusione e bibliografia non integrate; copia del corso 689–697 letta cumulativamente, nessuna appendice o lavoro citato letto per questo. 698–700: Porsbjerg, Melén, Lehtimäki e Shaw, Asthma, Lancet 2023;401:858–873, DOI 10.1016/S0140-6736(22)02125-0, sole editoriali 858–860 lette. Integrate 699–700 per circuito tipo 2, epitelio e biomarcatori; figura 1 e legenda controllate, non riprodotte. Stime, ipotesi e refusi del riquadro ricerca e della legenda non trasferiti; articolo non completo. Lotto 701–705: PDF 701–705, etichette 699–703, editoriali Lancet 861–865. Cinque testi e rendering controllati, incluse figure 2–4 e Panel 1; integrate solo 701–703 per test funzionali e interpretazione dei sintomi. 704–705 non integrate: AIR/MART già trattati, equivalenze, soglie e regimi storici non adottati. Seminar ancora parziale; nessuna lettura attribuita agli studi citati o alle appendici. Lotto 706–710: PDF 706–710, etichette 704–708, editoriali Lancet 866–870. Cinque testi e rendering controllati, inclusi Panel 2 e 3 e figura 5 con tabella e legenda. Integrate solo 706, 708 e 709 per monitoraggio inalatorio ed esiti dei biologici; 707 e 710 non integrate. Soglie, algoritmi, previsioni ambientali e protocolli acuti non adottati. Copia del Seminar letta cumulativamente fino alla pagina 870, bibliografia incompleta; studi citati e appendici non letti. Lotto 711–715: cinque testi e rendering controllati. PDF 711–713, etichette 709–711, editoriali 871–873: bibliografia 38–148 non integrata; copia Asthma Lancet 2023 PDF 698–713 completata cumulativamente, studi citati e appendici non letti. PDF 714–715, etichette 712–713, editoriali 2227–2228: Christenson, Smith, Bafadhel e Putcha, Chronic obstructive pulmonary disease, Lancet 2022;399:2227–2242, DOI 10.1016/S0140-6736(22)00470-6. Integrati soltanto sviluppo, esposizioni e contesto del bersaglio; figura 1 e legenda controllate, non riprodotte. Resto dell’articolo non letto; stime storiche, vaping e definizione anagrafica di early COPD non trasferiti. Lotto 716–720: editoriali 2229–2233 del medesimo Seminar COPD, etichette del corso 714–718. Cinque testi e rendering completi controllati; 717–719 integrati per epitelio, difese, matrice e distinzione fra fenotipo e meccanismo. Figura 2 e legenda controllate, non riprodotte. 716 e 720 non integrate; punteggi genetici, numeri, criteri terapeutici e conclusioni storiche anti-IL-5 non trasferiti allo stato corrente. Copertura cumulativa COPD limitata alle editoriali 2227–2233; articolo, appendici e studi citati non letti integralmente. Lotto 721–725: editoriali 2234–2238 del medesimo Seminar COPD, etichette del corso 719–723. Cinque testi e rendering completi controllati, figura 3 e legenda lette e non riprodotte. 721–722 integrate selettivamente per dispositivo, esposizione e obiettivi funzionali; 723–725 non integrate. COVID, algoritmo ABCD, soglie e trattamenti storici non trasferiti. Copertura cumulativa COPD PDF 714–725, editoriali 2227–2238: testo narrativo e conclusione raggiunti, bibliografia letta fino al riferimento 109 ma ancora incompleta; studi citati e appendici non letti."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012; capitolo 20, PDF 400–403, editoriali 380–383. Quattro pagine e figure 20-1/20-2 controllate; indicazioni storiche e valori delle curve non trasferiti. Ampliamento: PDF 404–406, editoriali 384–386; testo e figure controllati. 404 e 406 integrati; strutture e dettagli storici di 405 non trasferiti. Rilettura PDF 404–406: ora anche 405 sostiene il confronto teorico tra struttura e vie, senza riprodurre formule o indicazioni storiche; 406 non aggiunge nuovi passaggi. Riletto PDF 406 e letti PDF 409–410, editoriali 389–390: tolleranza e circuito muscarinico. Indicazioni e rassicurazioni storiche riconciliate con documenti attuali; dosi non trasferite. PDF 409–410 riletti: componente vagale, secrezione e variabilità funzionale. PDF 407–409, editoriali 387–389: meccanismi, effetti sistemici e variabilità della clearance; 407–408 nuove letture, 409 riletta. Indicazioni storiche riconciliate. PDF 411–412, editoriali 391–392: testi e rendering controllati; 411 integrata, 412 fuori dall’ampliamento. Dosi, equivalenze e indicazioni storiche di sospensione non trasferite. PDF 413–414, editoriali 393–394: testi e rendering controllati. Sintesi 5-LO e antagonismo distinti; confronto storico con ICS e rassicurazioni sulla sicurezza riconciliati, dosi e strutture non trasferite. PDF 413–415, editoriali 393–395: due riletture e una nuova pagina, testi e rendering controllati. Integrati limiti del modello dei cromoni e ragionamento anti-IgE; non trasferiti percentuali, dosi, disponibilità o rassicurazioni storiche. PDF 415/editoriale 395 riletta: prospettive storiche sulle citochine riconciliate con le informazioni attuali; OCR IL-1 corretto in IL-5 mediante rendering. PDF 415/editoriale 395 riletta per sintomi attuali e rischio futuro; algoritmo SABA isolato storico non adottato. PDF 418–419, editoriali 398–399: testo e rendering controllati. Integrata solo 418 per BPCO e broncodilatazione; indicazioni storiche non generalizzate. PDF 650, editoriale 630, capitolo 31: riletta e controllata visivamente, già registrata per oppioidi. Primo uso selettivo respiratorio; antitosse distinta da analgesia, dosi e rassicurazioni storiche non adottate. Lotto 686–690: PDF 1305, editoriale 1285, capitolo 63, tabella 63-2; IX italiana 2014 / XII americana 2012: nuova lettura integrale e controllo della tabella. Integrata solo classificazione della guaifenesina come espettorante; efficacia e sicurezza generalizzate confrontate con NICE. Dosi, marche, norme e altri argomenti della tabella non adottati come attuali."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015, capitolo 28; PDF 541–545 e 549. Sei testi e rendering, due pagine rilette (545 e 549). Refuso agonisti/antagonisti nella figura 28.3 e confusione LTB4/cisteinilici riconciliati; scala terapeutica 2012 non trasferita. Ampliamento: PDF 546–547 lette e controllate; tempi e xantine. Regole storiche di impiego e unità di concentrazione problematiche non trasferite. Rilettura PDF 546 per assorbimento sistemico ed effetti avversi; nessuna attribuzione di tutti gli effetti cardiaci al solo β1. PDF 548: rilettura del testo già registrato nella selezione respiratoria storica, con primo controllo visivo esplicito; distinti M2 presinaptico e M3 muscolare. PDF 548 riletto con rendering: ipotesi sul feedback M2 distinta da dimostrazione sperimentale. PDF 547 riletto con rendering: meccanismi multipli e margine terapeutico; non trasferite le unità numeriche della pagina. PDF 549–550: 549 riletta e integrata sui corticosteroidi, 550 letta ma non integrata; due rendering. Limite esplicito del manuale sul contributo terapeutico di annessina-1 conservato. PDF 548 riletta e 551 nuova: testi e rendering controllati; 551 non integrata. Distinti indicatore eosinofilico e controllo complessivo dell’infiammazione. PDF 550 riletta e controllata visivamente: integrati cromoni e limiti interpretativi. Protocolli storici di asma acuta e anafilassi non trasferiti. PDF 539/542 rilette e controllate visivamente: integrata 542 per rete Th2–citochine–eosinofili; 539 non integrata. Figure 28.1/28.2 controllate, articoli citati non letti. PDF 550 riletta per distinzione fra crisi e mantenimento con steroidi; indicazioni acute storiche non trasferite. PDF 551 riletta e 552 nuova: testo e rendering controllati; integrate per struttura polmonare e razionale HDAC, senza adottare inefficacia steroidea assoluta o terapia acuta storica. PDF 553, capitolo 28: testo e rendering controllati, riflesso protettivo e cause distinti. Non adottate indicazioni universali per tosse, PPI o folcodina. Lotto 686–690: PDF 548, capitolo 28, VIII italiana 2016 / originale 2015: rilettura completa e controllo del riquadro, pagina già registrata. Pagina editoriale non ricostruita. Usato selettivamente per distinguere modulazione muscarinica della secrezione da azione sul materiale già secreto. Nessuna nuova indicazione antitussiva dell’ipratropio né generalizzazione di sicurezza dei farmaci descritti."
    },
    {
      "id": "APP",
      "title": "Appunti e diapositive del corso di Farmacologia I · lezioni 16 e 17",
      "detail": "25 novembre 2025, PDF 293–295, etichette 288–290, pagine 1–3 della lezione. Distinti PKA e AMPc; non adottate la selettività PDE2 delle xantine né l’origine meccanica universale della malattia. Ampliamento: PDF 296–297, etichette 291–292, pagine 4–5 della lezione. 296 integrata; 297 letta, non integrata, con lacune sulla tolleranza registrate. Rilette PDF 295–296, etichette 290–291: distretti, selettività, struttura e vie; figure duplicate nel corso, non conferme indipendenti. PDF 297–298, etichette 292–293: 297 riletta, 298 nuova. Grafico storico e circuito muscarinico confrontati con corso 637/639; spiegazioni assolute della tolleranza non adottate. PDF 298–299, etichette 293–294: 298 riletta e integrata, 299 nuova ma fuori dall’ampliamento. Riferimento del grafico ora rintracciato nel corso: Ruffin 1977. PDF 299, etichetta 294, lezione 17 del 25 novembre 2025: riletta e ora integrata; duplicati e generalizzazioni sulle PDE riconciliati. PDF 300–301, etichette 295–296, pagine 8–9 della lezione 17: testo e figure controllati; integrati i passaggi sui corticosteroidi. Tabelle duplicate riconosciute; primo passaggio, tolleranza e spaziatore riconciliati. PDF 301–302, etichette 296–297, pagine 9–10 della lezione 17: 301 riletta e integrata, 302 nuova non integrata. Figure duplicate e ambiguità diretta/indiretta riconciliate. PDF 302, etichetta 297, pagina 10/15 della lezione 17: riletta e integrata solo la via IgE. Distinte cellule produttrici ed effettrici; figura duplicata nel corso 663. Altri bersagli e algoritmi non ampliati. PDF 302 riletta: ampliata la riconciliazione ai rami IL-5 e IL-4/IL-13. Indicazione impropria e spiegazione universale dei rischi non adottate. PDF 303, etichetta 298, pagina 11/15: testo disponibile e rendering controllati. NAEPP 2020 duplicata nel corso 670; diagramma BPCO non integrato, attribuzione incompleta. Restrizione dell’associazione fissa riconciliata con AIFA. PDF 303 riletta per BPCO: sequenza obbligatoria LABA/LAMA/ICS non adottata. Tabella duplicata nel corso 678; roflumilast distinto dalle xantine. Lezione 16 del 20 novembre 2025, PDF 291–292, etichette 286–287: testo e figure letti; integrati solo passaggi antitussivi riconciliati. Tabelle duplicate nel corso 679/685. Pagine endocrine 304–305 escluse dai contatori del capitolo. Lotto 686–690: PDF 292, etichetta 287, pagina 10/10 della lezione 16 del 20 novembre 2025, AA 2025–26: rilettura completa e controllo di testo, tabella e figura. Passaggi 3.3–3.4 su mucolitici ed espettoranti riconciliati; tabella duplicata nel corso 685, immagine nella 688. Non conferme indipendenti. Dornase inalatoria distinta dall’intestazione orale; unico mucoattivo efficace e PK della NAC non adottati. Antitussivi già integrati, non riscritti."
    },
    {
      "id": "GINA",
      "title": "GINA · Strategy Report 2026",
      "detail": "Consultazione mirata del 4 novembre 2026: PDF 26, 79, 85–86, 98–100 (stampate 25, 78, 84–85, 97–99), testo e rendering. Definizione, trattamento con ICS, opzioni aggiuntive. Non revisione integrale della linea guida o verifica delle autorizzazioni italiane. Ampliamento: PDF 142–144, stampate 141–143, testo e rendering su asma+BPCO; non nuova entità uniforme. Nuova lettura selettiva: PDF 249, stampata 248, testo e rendering; SABA e impiego breve di ipratropio. Nuovi passaggi consultati il 4 novembre 2026: PDF 101/editoriale 100 sui broncodilatatori orali e PDF 190/editoriale 189 su aminofillina/teofillina nelle riacutizzazioni. Lettura selettiva, non intere pagine o rapporto completo. Consultazione selettiva del 4 novembre 2026: PDF 61/editoriale 60 sui rischi degli inalatori, 79/78 su ICS-containing e 188/187 sui corticosteroidi sistemici; anche testo 189/188 letto senza integrazione. Figure non controllate in questo lotto. Consultazione del 5 novembre 2026: testo PDF 98/editoriale 97 e 118/117 letto, integrate solo parti su LTRA e spaziatori. Figure non controllate. La lista sotto LTRA comprende zileuton: classificazione farmacologica riconciliata con label e manuale, come inibitore della 5-LO. Consultazione del 5 novembre 2026: testo PDF 163/editoriale 162 letto, integrate solo selezione e ottimizzazione prima dei biologici; figure non controllate. Consultazione del 5 novembre 2026: testo PDF 164–166/editoriali 163–165 letto nella copia ufficiale archiviata; apertura web limitata dalla dimensione. Integrate solo distinzioni anti-IL5/5R e anti-IL4R, esiti e biomarcatori; figure non controllate. Consultazione del 5 novembre 2026: testo PDF 75/77/172, editoriali 74/76/171, nella copia ufficiale archiviata; definizioni AIR/MART e OCS. Figure non controllate. Consultazione del 5 novembre 2026: testo PDF 40 e 49–50, editoriali 39 e 48–49, letto per controllo e gravità. Figure non revisionate. Download ufficiale corrente identico per hash alla copia archiviata; non lettura dell’intero rapporto. Consultazione mirata del 5 novembre 2026: testo PDF 63 e 161, editoriali 62 e 160; alarmini, biomarcatori e loro interpretazione durante terapia. Figure non controllate. Soglie e istruzioni temporali per test non trasferite. Consultazione mirata del 5 novembre 2026: testo PDF 35, 157–158, editoriali 34, 156–157; test diagnostici, comorbidità e fattori modificabili. Figure non revisionate; nessuna soglia, procedura di provocazione o modifica terapeutica trasferita. Nuovo confronto mirato del 5 novembre 2026: testo PDF 123, 163 e 168, editoriali 122, 162 e 167, su monitoraggio digitale, scelta e risposta ai biologici. Figure non revisionate; nessun algoritmo, intervallo obbligatorio o procedura di modifica terapeutica trasferiti.",
      "url": "https://ginasthma.org/2026-gina-strategy-report/"
    },
    {
      "id": "GOLD",
      "title": "GOLD · Pocket Guide 2026, versione 1.1",
      "detail": "PDF 6–7 e 30–32, stampate 3–4 e 27–29: testo disponibile e figure 3.8–3.10 controllati il 4 novembre 2026. Selezione di mantenimento, non protocollo completo della BPCO. Consultazione del 5 novembre 2026: PDF 30–34, editoriali 27–31, testo incorporato e figure 3.8–3.13 letti nei rendering della copia ufficiale archiviata con hash; 3.11 non integrata. Confronto circoscritto, non lettura dell’intero documento.",
      "url": "https://goldcopd.org/2026-gold-report-and-pocket-guide/"
    },
    {
      "id": "MON",
      "title": "Organon · Singulair, SmPC pubblicato su emc",
      "detail": "Versione pagina 15 settembre 2026; §§4.4 e 5.1 letti il 4 novembre 2026. CysLT1, attacco acuto ed eventi neuropsichiatrici; documento britannico, non intero RCP o disponibilità italiana. Riletti il 5 novembre 2026 §§ 4.1, 4.4, 4.8 e 5.1 (meccanismo e farmacodinamica); documento non letto integralmente. Indicazioni e rischi mantenuti specifici del prodotto.",
      "url": "https://www.medicines.org.uk/emc/medicine/17718/SPC"
    },
    {
      "id": "TIO",
      "title": "Boehringer Ingelheim · Spiriva Respimat, SmPC su emc",
      "detail": "§5.1 letto il 4 novembre 2026: antagonismo muscarinico e dissociazione. Confronto con AEMPS CIMA 69589 §§4.1, 4.4 e 5.1; refuso spagnolo sull’effetto dell’acetilcolina corretto mediante testo inglese. Non intero RCP. Consultati inoltre §§4.1, 4.4 e passaggi di 5.2 su assorbimento, distribuzione ed eliminazione: mantenimento aggiuntivo, esposizione sistemica e precauzioni. Pagina aggiornata 11 dicembre 2024. Riconfermati selettivamente §§4.1 e 5.1 il 4 novembre 2026: indicazione di mantenimento e selettività cinetica. Il 5 novembre 2026 consultati selettivamente §2 (definizione di dose erogata) e §4.2, Method of administration e Daily use/PRESS: generazione dello spray e coordinazione dell’inspirazione. Revisione del testo dicembre 2024; nessuna dose o istruzione completa trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/407/smpc"
    },
    {
      "id": "BAG",
      "title": "Bagley et al. · Bronchoconstriction damages airway epithelia…",
      "detail": "Science 2024;384:66–73, DOI 10.1126/science.adk2758. Abstract, introduzione e passaggi sui campioni umani e discussione letti; figure, metodi completi e supplementi non revisionati. Distinto dalla Perspective DOI 10.1126/science.ado4514.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7619646/"
    },
    {
      "id": "FOR",
      "title": "AstraZeneca · Symbicort Turbohaler 200/6, SmPC su emc",
      "detail": "Consultati il 4 novembre 2026 §§4.1, passaggi di 4.2 su mantenimento/sollievo e 5.1 meccanismi: formoterolo rapido e prolungato, attività complementari. Documento britannico, non intero RCP o verifica italiana. Il 5 novembre 2026 consultati §4.2 Instructions for correct use e descrizione del dispositivo in §6.5: polvere trasportata dal flusso inspiratorio e gesto specifico. Revisione del testo 21 marzo 2023; non intero RCP, nessuna dose o istruzione completa trasferita.",
      "url": "https://www.medicines.org.uk/emc/product/1327/smpc"
    },
    {
      "id": "SAL",
      "title": "GSK · Serevent Accuhaler, SmPC su emc",
      "detail": "Pagina aggiornata 8 settembre 2023, consultata il 4 novembre 2026: §§4.1, 4.2, 4.4 e passaggi farmacodinamici di 5.1. Impiego regolare, esclusione del sollievo acuto e distinzione dall’effetto dei corticosteroidi. Documento britannico, non intero RCP.",
      "url": "https://www.medicines.org.uk/emc/product/848/smpc"
    },
    {
      "id": "KUME",
      "title": "Kume et al. · Regolazione dei canali KCa nel muscolo delle vie aeree",
      "detail": "J Clin Invest. 1994;93:371–379, DOI 10.1172/JCI116969. Letto l’abstract il 4 novembre 2026: percorsi PKA e Gs. Non letti integralmente articolo, metodi o figure; nessuna quantificazione del contributo clinico.",
      "url": "https://www.jci.org/articles/view/116969"
    },
    {
      "id": "VEN",
      "title": "GSK · Ventolin Evohaler 100 micrograms, SmPC su emc",
      "detail": "Pagina aggiornata il 16 settembre 2026; consultati il 4 novembre 2026 §§4.1, 4.8, 5.1 e 5.2. Preferenza β2, effetti sistemici e assorbimento dopo inalazione. Documento britannico consultato selettivamente, non intero RCP o verifica delle autorizzazioni italiane. Ulteriore consultazione §§4.3–4.4 e 4.9; riletti 4.8 e 5.2. Distinte precauzioni, controindicazioni e possibile causa metabolica della tachipnea.",
      "url": "https://www.medicines.org.uk/emc/product/850/smpc"
    },
    {
      "id": "RHO",
      "title": "Rhoden et al. · Modulazione colinergica nei bronchi umani isolati",
      "detail": "J Appl Physiol. 1988;65:700–705, DOI 10.1152/jappl.1988.65.2.700. Letto l’abstract il 4 novembre 2026: contrazione da stimolo elettrico e acetilcolina esogena. Non letti metodi completi o figure; misura funzionale distinta dal rilascio diretto.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/2844715/"
    },
    {
      "id": "HAAS",
      "title": "de Haas et al. · Recettori presinaptici nella trachea di cavia",
      "detail": "Am J Physiol. 1999;276:L420–L425, DOI 10.1152/ajplung.1999.276.3.L420. Letto l’abstract il 4 novembre 2026: preparazione priva di epitelio e misura diretta del neurotrasmettitore. Non intero articolo, non prova di un esito clinico nell’uomo.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/10070105/"
    },
    {
      "id": "TAY",
      "title": "Taylor et al. · Fenoterolo regolare e controllo dell’asma",
      "detail": "Thorax. 1993;48:134–138, DOI 10.1136/thx.48.2.134. Letto soltanto l’abstract il 4 novembre 2026; non metodi completi o figure originali. Esito clinico distinto da misura recettoriale.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/8493626/"
    },
    {
      "id": "RUF",
      "title": "Ruffin et al. · Confronto tra ipratropio e salbutamolo",
      "detail": "J Allergy Clin Immunol. 1977;59:136–141; DOI 10.1016/0091-6749(77)90215-9. Letto l’abstract completo il 4 novembre 2026, non il testo integrale o le figure originali. Confronto funzionale storico, senza inferire causalità recettoriale.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/137922/"
    },
    {
      "id": "DAX",
      "title": "EMA · Daxas, informazione di prodotto",
      "detail": "Consultazione selettiva il 4 novembre 2026: 4.1 (PDF 2), 4.4 (PDF 3–4), 4.5 primo paragrafo (PDF 4), 5.1 meccanismo e farmacodinamica (PDF 8). Documento non letto integralmente; figure non valutate. Indicazioni riferite alla giurisdizione del documento, senza verifica italiana.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/daxas-epar-product-information_en.pdf"
    },
    {
      "id": "ENS",
      "title": "NLM DailyMed · Ohtuvayre, label USA revisionata ottobre 2026",
      "detail": "Consultazione selettiva il 4 novembre 2026: 1, 5.1–5.3, 12.1, 14: disegno dei due studi e endpoint primario FEV1. Documento non letto integralmente; figure non valutate. Indicazioni riferite alla giurisdizione del documento, senza verifica italiana.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6433c98-41a0-4f99-8f7f-d0e9db6e3f40"
    },
    {
      "id": "THEO",
      "title": "Ennogen · Uniphyllin, SmPC britannico aggiornato 7 agosto 2026",
      "detail": "Consultazione selettiva il 4 novembre 2026: 4.1, 4.2: monitoraggio e fumo, 4.4, 4.5: fattori che aumentano/riducono clearance. Documento non letto integralmente; figure non valutate. Indicazioni riferite alla giurisdizione del documento, senza verifica italiana.",
      "url": "https://www.medicines.org.uk/emc/product/100850/smpc"
    },
    {
      "id": "BUD",
      "title": "AstraZeneca · Pulmicort Turbohaler 200, SmPC britannico aggiornato 21 novembre 2022",
      "detail": "Consultazione selettiva il 4 novembre 2026: 4.1, 4.4, 4.5, 4.8, 5.1, 5.2: assorbimento e biotrasformazione. Documento e figure non revisionati integralmente; fonte britannica, non verifica italiana.",
      "url": "https://www.medicines.org.uk/emc/product/1385/smpc"
    },
    {
      "id": "ZIL",
      "title": "DailyMed · Zileuton a rilascio prolungato, Rising Pharma",
      "detail": "Label USA aggiornata il 15 maggio 2024. Consultati il 5 novembre 2026 §§ 1, 5.1, 5.2, 12.1: sintesi 5-LO, esclusione dell’attacco acuto, rischio epatico e neuropsichiatrico. Non intero documento o verifica italiana; figure non controllate.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fd382540-b390-4e86-a94a-988ea89c93a8"
    },
    {
      "id": "CRO",
      "title": "DailyMed · Cromolyn sodium inhalation solution, Ritedose, aggiornato il 10 dicembre 2025",
      "detail": "Consultazione selettiva del 5 novembre 2026: Clinical Pharmacology; Indications and Usage; Warnings; Precautions: General e Information for Patients; Adverse Reactions. Documento non letto integralmente; figure non controllate. Nessuna verifica delle autorizzazioni italiane.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0209cd6c-5c43-0b93-e063-6294a90ac964"
    },
    {
      "id": "OMA",
      "title": "EMA · Xolair, informazioni di prodotto UE, presentazioni preriempite 150/300 mg",
      "detail": "Consultazione selettiva del 5 novembre 2026: 4.1, PDF 22–23; 4.2: durata, monitoraggio e IgE, PDF 25; 4.4: General e Allergic reactions type I, PDF 27; 5.1: meccanismo e farmacodinamica, PDF 33–34. Documento non letto integralmente; figure non controllate. Nessuna verifica delle autorizzazioni italiane.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/xolair-epar-product-information_en.pdf"
    },
    {
      "id": "MEP",
      "title": "EMA · Nucala, informazioni di prodotto UE",
      "detail": "Consultazione selettiva del 5 novembre 2026: 4.1, PDF 2–3; 5.1: meccanismo e farmacodinamica, PDF 12. Documento non letto integralmente, figure non controllate; nessuna verifica delle autorizzazioni italiane.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/nucala-epar-product-information_en.pdf"
    },
    {
      "id": "BEN",
      "title": "EMA · Fasenra, informazioni di prodotto UE",
      "detail": "Consultazione selettiva del 5 novembre 2026: 4.1, PDF 2; 5.1: meccanismo e farmacodinamica, PDF 7–8. Documento non letto integralmente, figure non controllate; nessuna verifica delle autorizzazioni italiane.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/fasenra-epar-product-information_en.pdf"
    },
    {
      "id": "DUP",
      "title": "EMA · Dupixent, informazioni di prodotto UE, presentazione 300 mg",
      "detail": "Consultazione selettiva del 5 novembre 2026: 4.1: asma, poliposi e BPCO, PDF 2–3; 4.4: riacutizzazioni, corticosteroidi, ipersensibilità, condizioni eosinofile, elminti e disturbi oculari, PDF 8–9; 5.1: meccanismo e farmacodinamica, PDF 16–17. Documento non letto integralmente, figure non controllate; nessuna verifica delle autorizzazioni italiane.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/dupixent-epar-product-information_en.pdf"
    },
    {
      "id": "AIFA",
      "title": "AIFA · comunicato di sicurezza del 5 luglio 2023",
      "url": "https://www.aifa.gov.it/-/modifica-di-indicazioni-e-popolazione-autorizzata-dei-medicinali-a-base-dell-associazione-fissa-fdc",
      "detail": "Comunicato integralmente riletto il 5 novembre 2026; specifica associazione fissa distinta dai principi attivi separati. Nessuna verifica integrale degli RCP italiani vigenti."
    },
    {
      "id": "EMACODE",
      "title": "EMA/249413/2015, comunicato del 24 aprile 2015",
      "url": "https://www.ema.europa.eu/en/news/codeine-not-be-used-children-below-12-years-cough-cold",
      "detail": "Consultazione del 5 novembre 2026: Comunicato completo in HTML, incluse informazioni per operatori e pazienti. Restrizioni per tosse/raffreddore: controindicazione sotto 12 anni, non raccomandazione 12–18 con funzione respiratoria compromessa; controindicazione in allattamento e metabolizzatori ultrarapidi noti. Lettura selettiva salvo il comunicato EMA; studi primari e figure non revisionati."
    },
    {
      "id": "DXM",
      "title": "Haleon, Robitussin Dry Cough Medicine, SmPC UK; revisione 26 novembre 2024, emc 29 novembre 2024",
      "url": "https://www.medicines.org.uk/emc/product/11927/smpc",
      "detail": "Consultazione del 5 novembre 2026: 4.1–4.5, 4.7–4.9, 5.1–5.2. Azione centrale senza analgesia; destrorfano attivo e metabolismo CYP2D6 variabile; interazioni serotoninergiche, sedazione, abuso e rischi da sovraesposizione. Limiti del prodotto britannico, non verifica di tutti gli RCP italiani. Lettura selettiva salvo il comunicato EMA; studi primari e figure non revisionati."
    },
    {
      "id": "NICECOUGH",
      "title": "NICE NG120, 7 febbraio 2019, Recommendations",
      "url": "https://www.nice.org.uk/guidance/ng120/chapter/Recommendations",
      "detail": "Consultazione del 5 novembre 2026: 1.2.1–1.2.2. Beneficio limitato dei sedativi da banco nel contesto della tosse acuta; codeina esclusa, limiti per tosse persistente e secrezioni eccessive. Lettura selettiva salvo il comunicato EMA; studi primari e figure non revisionati. Nuova consultazione del 5 novembre 2026: 1.1.7 e 1.2.1. Non offrire mucolitici per tosse acuta da infezione delle alte vie o bronchite acuta; prove limitate per guaifenesina dai 12 anni."
    },
    {
      "id": "NICEEVID",
      "title": "NICE NG120, Summary of the evidence",
      "url": "https://www.nice.org.uk/guidance/ng120/chapter/Summary-of-the-evidence",
      "detail": "Consultazione del 5 novembre 2026: Over-the-counter cough suppressants: Codeine/Dextromethorphan; committee discussion: Cough suppressant medicines. Evidenze miste per destrometorfano nella tosse acuta; studi e revisioni citati non letti in originale. Riferimenti storici alla folcodina non utilizzati per indicazioni attuali. Lettura selettiva salvo il comunicato EMA; studi primari e figure non revisionati. Nuova consultazione del 5 novembre 2026: Over-the-counter expectorants; Mucolytics e Committee discussion on mucolytics. Risultati eterogenei; variazione delle secrezioni e sollievo clinico non equivalenti. Studi e revisioni citati non letti in originale."
    },
    {
      "id": "AIFAMUC",
      "title": "AIFA, Nota informativa sui mucolitici orali e rettali, novembre 2010",
      "url": "https://www.aifa.gov.it/documents/20142/516919/nii_mucolitici_aifa_versione_definitiva_17.11.2010_.pdf",
      "detail": "Consultato il 5 novembre 2026. Testo completo delle due pagine. Controindicazione sotto due anni per gli impieghi mucolitici orali/rettali considerati; l’uso antidotico della NAC è esplicitamente escluso. Lettura circoscritta; nessuna revisione clinica indipendente."
    },
    {
      "id": "NAC",
      "title": "Sovereign Medical, Acetylcysteine 200 mg, SmPC UK; revisione 4 marzo 2025, emc 28 marzo 2025",
      "url": "https://www.medicines.org.uk/emc/product/13029/smpc",
      "detail": "Consultato il 5 novembre 2026. 4.1–4.5, 5.1–5.2. Rischio di ritenzione delle secrezioni, broncospasmo, interazione con antitussivi; assorbimento distinto da biodisponibilità e metabolismo. La formulazione è destinata a oltre 12 anni: la soglia generale di due anni non è un’autorizzazione di ogni prodotto sopra tale età. Lettura circoscritta; nessuna revisione clinica indipendente."
    },
    {
      "id": "NACBONDS",
      "title": "Hospira, Acetylcysteine solution, etichetta USA su DailyMed; aggiornamento 22 maggio 2026",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5558a5f5-e821-473b-7d8a-5d33d09f0586",
      "detail": "Consultato il 5 novembre 2026. Description, Clinical Pharmacology e Warnings della sezione mucolitica. Gruppo sulfidrilico e legami disolfuro; formulazione inalatoria per mucolisi, orale per antidoto. Non trasferite indicazioni USA a prodotti italiani. Lettura circoscritta; nessuna revisione clinica indipendente."
    },
    {
      "id": "DORNASE",
      "title": "Roche, Pulmozyme, SmPC UK; revisione 21 aprile 2017, emc 26 aprile 2017",
      "url": "https://www.medicines.org.uk/emc/product/1112/smpc",
      "detail": "Consultato il 5 novembre 2026. 4.1–4.2 e 5.1–5.2. DNasi sul DNA extracellulare nelle secrezioni; inalazione e bassa esposizione sistemica. Soglie del prodotto e risultati degli studi non generalizzati; studi originali e tabelle non revisionati graficamente. Lettura circoscritta; nessuna revisione clinica indipendente."
    },
    {
      "id": "NICECF",
      "title": "NICE NG78, Cystic fibrosis: diagnosis and management",
      "url": "https://www.nice.org.uk/guidance/ng78/chapter/Recommendations",
      "detail": "Consultato il 5 novembre 2026. 1.6.17–1.6.21. Dornase prima scelta mucoattiva; ulteriori opzioni secondo risposta e tollerabilità. Prima scelta non equivale a unico agente efficace. Lettura circoscritta; nessuna revisione clinica indipendente."
    },
    {
      "id": "WHO",
      "title": "WHO · Chronic obstructive pulmonary disease (COPD), 10 giugno 2026",
      "url": "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)",
      "detail": "Consultazione mirata del 5 novembre 2026: Overview e Causes. Esposizioni e fattori che ostacolano lo sviluppo polmonare; fattore di rischio distinto da diagnosi nel contesto clinico. Nessuna nuova raccomandazione terapeutica o revisione clinica indipendente; immagini e riferimenti esterni non revisionati."
    },
    {
      "id": "NHLBI",
      "title": "NHLBI · COPD: What Is COPD?, aggiornamento 8 novembre 2024",
      "url": "https://www.nhlbi.nih.gov/health/copd",
      "detail": "Consultazione del 5 novembre 2026 limitata al testo introduttivo e alla distinzione enfisema/bronchite cronica: danno delle vie e degli spazi aerei, muco e proporzioni variabili. Video, immagini, statistiche e pagine terapeutiche non utilizzati. Nessuna revisione clinica indipendente."
    },
    {
      "id": "NHLBIPR",
      "title": "NHLBI · Pulmonary Rehabilitation, aggiornamento 24 marzo 2022",
      "url": "https://www.nhlbi.nih.gov/health/pulmonary-rehabilitation",
      "detail": "Consultazione del 5 novembre 2026: introduzione, benefici e componenti del programma, con esercizio, educazione e sostegno. Integrazione limitata alla complementarità e agli obiettivi funzionali; nessun protocollo di esercizio, criterio di accesso o frequenza prescritti. Infografica non consultata; non revisione clinica indipendente."
    }
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL714",
      "label": "ALBUTEROL"
    },
    {
      "id": "CHEMBL787",
      "label": "MONTELUKAST"
    },
    {
      "id": "CHEMBL1370",
      "label": "BUDESONIDE"
    },
    {
      "id": "CHEMBL1201589",
      "label": "OMALIZUMAB"
    },
    {
      "id": "CHEMBL1256786",
      "label": "FORMOTEROL"
    },
    {
      "id": "CHEMBL1355736",
      "label": "THEOPHYLLINE"
    },
    {
      "id": "CHEMBL1621597",
      "label": "IPRATROPIUM"
    },
    {
      "id": "CHEMBL1900528",
      "label": "TIOTROPIUM"
    },
    {
      "id": "CHEMBL2108429",
      "label": "MEPOLIZUMAB"
    },
    {
      "id": "CHEMBL2108675",
      "label": "DUPILUMAB"
    },
    {
      "id": "CHEMBL485",
      "label": "CODEINE"
    },
    {
      "id": "CHEMBL52440",
      "label": "DEXTROMETHORPHAN"
    },
    {
      "id": "CHEMBL600",
      "label": "ACETYLCYSTEINE"
    },
    {
      "id": "CHEMBL980",
      "label": "GUAIFENESIN"
    },
    {
      "id": "CHEMBL1201431",
      "label": "DORNASE ALFA"
    }
  ],
  "relatedExistingChapterIds": [
    "gpcr",
    "recettori-e-legame",
    "desensibilizzazione-tolleranza",
    "istamina-antistaminici",
    "anticorpi-biologici",
    "oppioidi"
  ],
  "drugs": [
    "salbutamolo",
    "formoterolo",
    "tiotropio",
    "ipratropio",
    "montelukast",
    "codeina",
    "destrometorfano",
    "acetilcisteina",
    "guaifenesina",
    "dornase alfa"
  ],
  "targets": [
    "ADRB2",
    "CHRM3",
    "CYSLTR1"
  ],
  "sources": [
    "gina-2026",
    "gold-2026"
  ],
  "coverage": "Copertura cumulativa con hash: 127 pagine locali distinte controllate, 101 integrate. Ultimo lotto: 5 nuove letture del corso I; 2 integrate selettivamente e 3 non integrate. Fonti ufficiali nei passaggi dichiarati. Nessun intero libro o corso letto; revisione clinica indipendente incompleta."
});
