// Sintesi didattica originale; copertura circoscritta nei registri collegati.
export const THEORY_ASTHMA = Object.freeze({
  "id": "asma-e-broncodilatatori",
  "volume": 11,
  "title": "Asma: dai circuiti bronchiali ai bersagli dei farmaci",
  "lead": "Muscolatura, epitelio e infiammazione spiegano perché broncodilatazione e controllo della malattia siano obiettivi collegati ma distinti.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-04",
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
        "CFI"
      ],
      "text": "L’iperreattività bronchiale indica una risposta eccessiva a stimoli che in altre condizioni provocano una variazione minore del calibro. Non identifica un unico mediatore. Allergeni, infezioni virali, aria fredda, esercizio e sostanze irritanti possono coinvolgere percorsi diversi, che convergono sulla muscolatura, sulle secrezioni e sull’ambiente della parete bronchiale.\n\nL’epitelio partecipa a questo ambiente: costituisce una barriera, comunica con cellule immunitarie e nervi e viene esposto alle forze generate dalla contrazione. Il danno epiteliale può facilitare ulteriori risposte, mentre l’infiammazione può aumentare la sensibilità del sistema. È più utile immaginare una rete di retroazioni che una sequenza obbligatoria nella quale ogni episodio comincia nello stesso modo.\n\nPer interpretare un farmaco bisogna quindi specificare quale anello modifica. Un antagonista di un mediatore limita quel segnale; un broncodilatatore può opporsi alla risposta contrattile condivisa da più stimoli. Nessuna delle due osservazioni dimostra che la causa della malattia sia stata eliminata. Anche un miglioramento immediato della respirazione lascia aperta la domanda sul rischio di nuovi episodi e sulle modificazioni che si accumulano nel tempo."
    },
    {
      "id": "allergia",
      "title": "L’asse allergene–IgE–mastocita è un modello, non tutta l’asma",
      "refs": [
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "Nel modello di asma allergico, la sensibilizzazione prepara una risposta specifica. Le IgE associate ai recettori ad alta affinità dei mastociti permettono di riconoscere nuovamente l’allergene; l’attivazione libera mediatori capaci di modificare rapidamente tono bronchiale, permeabilità e secrezioni. Fra questi compaiono istamina, prostaglandine e leucotrieni cisteinilici. La presenza di più segnali spiega perché neutralizzarne uno non riproduca necessariamente l’effetto di un intervento sull’intera risposta.\n\nI linfociti T helper di tipo 2 e le loro citochine contribuiscono a organizzare questa rete. IL-4 e IL-13 partecipano alla risposta associata alle IgE; IL-5 sostiene la componente eosinofila. Gli eosinofili reclutati possono a loro volta rilasciare sostanze che alterano l’epitelio e mantengono la reattività. Lo schema rende leggibili diversi bersagli farmacologici senza ridurre tutte le cellule a un’unica catena lineare.\n\nNon tutti i pazienti hanno però una malattia guidata dallo stesso circuito allergico. Un sintomo dopo esercizio o infezione non prova un’allergia specifica, e un’allergia documentata non descrive da sola ogni meccanismo attivo nelle vie aeree. Nel ragionamento farmacologico, un biomarcatore va collegato alla domanda a cui può rispondere, senza trasformarlo in un’etichetta universale."
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
      "id": "leucotrieni",
      "title": "Leucotrieni: bloccare un recettore non blocca ogni mediatore",
      "refs": [
        "KAT",
        "RAN",
        "MON"
      ],
      "text": "I leucotrieni derivano dal metabolismo dell’acido arachidonico, ma non costituiscono una famiglia funzionalmente indistinta. Per il broncospasmo sono particolarmente rilevanti i leucotrieni cisteinilici, come LTC₄ e LTD₄. Confonderli con LTB₄ cancella differenze fra ligandi, recettori e attività sulle cellule infiammatorie. La correzione è essenziale quando una tabella o una frase usa semplicemente la parola leucotriene.\n\nMontelukast antagonizza CysLT₁ e limita risposte a mediatori di questa via. Non è un antagonista muscarinico, non è un agonista β₂ e non sopprime la produzione di tutti gli eicosanoidi. La presenza di un beneficio funzionale non rende intercambiabili questi meccanismi.\n\nIl documento di prodotto esclude l’uso del montelukast orale come trattamento dell’attacco acuto e segnala possibili eventi neuropsichiatrici. L’informazione sulla sicurezza va mantenuta accanto al bersaglio: la via orale o l’assenza di un corticosteroide non dimostrano automaticamente un trattamento più adatto o privo di rischi. Indicazioni, formulazione e contesto del singolo medicinale richiedono una valutazione separata.",
      "formula": "β₂: attivare una via rilassante. M₃: impedire il segnale dell’acetilcolina. CysLT₁: limitare una via dei leucotrieni. Tre interventi distinti; la convergenza sull’organo non prova equivalenza clinica. Schema originale."
    },
    {
      "id": "corticosteroidi",
      "title": "Glucocorticoidi: modificare il programma infiammatorio",
      "refs": [
        "RAN",
        "KAT",
        "CFI"
      ],
      "text": "I glucocorticoidi agiscono attraverso un recettore intracellulare che regola l’espressione di numerosi geni. Nel tessuto bronchiale il risultato interessa produzione di citochine, reclutamento e attività delle cellule infiammatorie e permeabilità microvascolare. L’effetto va quindi ricostruito a livello di rete cellulare, oltre che di singolo recettore.\n\nRidurre l’infiammazione può diminuire edema e iperreattività. Non significa che il corticosteroide sia un rilassante diretto del muscolo liscio con lo stesso profilo temporale di un agonista β₂. La distinzione rimane importante anche quando entrambi i principi attivi sono contenuti nello stesso inalatore: l’associazione riunisce funzioni complementari, senza trasformarle in un unico meccanismo.\n\nLa via inalatoria permette di portare il farmaco vicino alla sede di interesse. Tuttavia, la quantità erogata dal dispositivo, quella che raggiunge le vie aeree e quella assorbita nell’organismo non coincidono necessariamente. Per questo l’aggettivo locale non va interpretato come assenza assoluta di esposizione sistemica. Anche il confronto fra molecole richiede attenzione alla formulazione e alla tecnica d’uso, oltre che alla potenza recettoriale: un nome di classe non sostituisce le caratteristiche del prodotto."
    },
    {
      "id": "classi",
      "title": "Dalla classificazione storica alla domanda farmacologica",
      "refs": [
        "CFI",
        "APP",
        "RAN",
        "GINA",
        "KAT"
      ],
      "text": "La tradizionale divisione fra broncodilatatori e farmaci che controllano l’infiammazione organizza lo studio, ma i confini non sono sempre netti. Le xantine compaiono in entrambi gli insiemi perché la loro farmacologia comprende più effetti. I cromoni richiamano invece la prevenzione del rilascio di mediatori. Una classificazione per meccanismo descrive ciò che una sostanza può modificare, non l’ordine in cui oggi vada prescritta.\n\nOccorre evitare anche una precisione solo apparente. Attribuire tutte le xantine a un’inibizione selettiva della sola PDE2 non è una descrizione adeguata della classe. Una via dell’AMP ciclico disegnata accanto a un farmaco non dimostra che quello sia il suo unico bersaglio, né che la concentrazione necessaria sia sempre compatibile con l’impiego clinico.\n\nGINA segnala efficacia limitata e problemi di sicurezza per la teofillina nelle opzioni considerate. Le classi presenti in una lezione restano quindi utili per comprendere la storia della farmacologia, mentre la loro posizione terapeutica richiede un confronto separato con evidenze e documenti attuali.\n\nLa teofillina mostra perché conti anche il punto in cui si interviene. Stimolare β₂ aumenta la sintesi di AMPc; inibire una fosfodiesterasi ne limita la degradazione. Le due operazioni possono convergere sullo stesso messaggero senza essere farmacologicamente identiche. Le xantine interagiscono anche con i recettori dell’adenosina, e i manuali discutono più meccanismi possibili. Un’inibizione osservata a una concentrazione sperimentale elevata non prova che sia il meccanismo dominante all’esposizione clinica. Anche per questo lo schema dell’AMPc è una mappa dei bersagli, non una giustificazione per sostituire un agonista inalatorio con una xantina."
    },
    {
      "id": "obiettivi",
      "title": "Dai bersagli agli obiettivi: sintomi, rischio e tollerabilità",
      "refs": [
        "CFI",
        "FOR",
        "SAL"
      ],
      "text": "Una classificazione per bersaglio risponde alla domanda su che cosa modifica il farmaco. Una classificazione per obiettivo chiede invece quale risultato si vuole ottenere: attenuare i sintomi presenti, prevenire riacutizzazioni o limitare gli effetti indesiderati. Queste domande attraversano le stesse classi, ma non producono elenchi sovrapponibili. Un broncodilatatore può avere effetti immediati e contribuire a un trattamento di mantenimento; un’associazione può riunire attività che hanno tempi diversi.\n\nPer questo le categorie tradizionali di farmaco di fondo e farmaco al bisogno richiedono un contesto. Il documento di budesonide–formoterolo contempla impieghi diversi della specifica associazione, mentre quello del salmeterolo ne descrive l’uso regolare e complementare ai corticosteroidi nell’asma. Non basta spostare una classe da una colonna all’altra: occorre verificare quale componente, quale preparazione e quale esito siano stati studiati.\n\nIl controllo successivo completa il ragionamento. Se il risultato atteso non compare, il problema può riguardare la diagnosi, l’esposizione effettiva al farmaco, la tecnica inalatoria, l’aderenza o altri fattori che mantengono i sintomi. Aumentare l’intensità del trattamento senza distinguere questi passaggi confonderebbe un segnale di risposta insufficiente con la dimostrazione di un bersaglio sbagliato. La rivalutazione confronta beneficio e tollerabilità nel tempo: il sollievo percepito è un dato utile, ma non riassume da solo il rischio futuro."
    },
    {
      "id": "clinica",
      "title": "Perché sollievo e prevenzione devono essere letti insieme",
      "refs": [
        "GINA",
        "APP",
        "KAT"
      ],
      "text": "GINA 2026 privilegia negli adulti e adolescenti ICS-formoterolo come sollievo antinfiammatorio, con mantenimento quando indicato. ICS significa corticosteroide inalatorio: formoterolo da solo non rappresenta questa strategia. L’uso di solo SABA come trattamento dell’asma è superato. Età, dispositivo e autorizzazioni restano specifici.\n\nIl significato farmacologico è più generale della sigla. La componente che rilassa il muscolo può migliorare un esito immediato; quella antinfiammatoria interviene su processi che sostengono la vulnerabilità delle vie aeree. Se una persona sente meno costrizione, non ne deriva che tutti questi processi siano già controllati. Per leggere una combinazione bisogna mantenere visibili entrambi gli obiettivi.\n\nAnche le parole rapido e prolungato rispondono a domande diverse. La prima riguarda quando compare l’effetto, la seconda quanto persiste. Non si può scegliere un farmaco di sollievo soltanto perché dura a lungo, né dedurre che tutte le associazioni con un broncodilatatore siano adatte allo stesso uso. La valutazione clinica riguarda il prodotto e il percorso complessivo, non la sola casella di una classificazione."
    },
    {
      "id": "biologici",
      "title": "Bersagli immunologici e selezione del contesto",
      "refs": [
        "GINA",
        "KAT",
        "RAN"
      ],
      "text": "I biologici rendono espliciti alcuni nodi della rete: IgE, IL-5 o il suo recettore, IL-4Rα e TSLP. GINA li colloca nell’asma grave dopo ottimizzazione della terapia e valutazione specialistica. La scelta dipende dal contesto; non sono broncodilatatori di soccorso.\n\nPer comprenderne il razionale, si può risalire dal bersaglio alla fase che contribuisce a mantenere la malattia. Interferire con IgE modifica una componente della risposta allergica; intervenire sull’asse di IL-5 riguarda soprattutto la biologia degli eosinofili. Sono punti differenti della rete e non sostituiscono reciprocamente tutte le loro funzioni. Il collegamento fra biomarcatore e bersaglio è una ragione da verificare, non una garanzia automatica di risposta.\n\nQuesta parte del capitolo offre una mappa per leggere i profili già presenti nell’atlante. Non confronta indipendentemente tutti gli studi dei biologici, non stabilisce superiorità fra molecole e non trasferisce soglie di accesso da un paese all’altro. Il passaggio dal meccanismo alla selezione del paziente richiede informazioni che un diagramma recettoriale, da solo, non contiene."
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
      "id": "bpco",
      "title": "Asma e BPCO: stessi bersagli, problemi clinici differenti",
      "refs": [
        "CFI",
        "RAN",
        "GOLD",
        "GINA"
      ],
      "text": "La BPCO comprende alterazioni delle vie aeree e degli alveoli con ostruzione persistente, spesso progressiva. GOLD richiede di interpretare la spirometria nel contesto clinico. L’etichetta irreversibile non significa che nessuna componente del tono bronchiale possa rispondere a un farmaco, né permette di classificare una persona dal solo sollievo percepito.\n\nPer l’inizio del mantenimento, GOLD 2026 distingue gruppi basati su sintomi e riacutizzazioni: broncodilatatore nel gruppo A, LABA + LAMA nei gruppi B ed E. Il follow-up valuta separatamente dispnea e riacutizzazioni. Il ruolo degli ICS dipende anche da eosinofili, riacutizzazioni e asma concomitante; la polmonite rientra fra i rischi da considerare.\n\nIl confronto chiarisce il principio: la presenza dello stesso recettore non impone lo stesso percorso terapeutico. Rilassare la muscolatura può essere utile in contesti differenti, mentre infiammazione, danno strutturale ed esiti da prevenire cambiano. I collegamenti ai farmaci aiutano a seguire il bersaglio; per la scelta clinica resta necessario conoscere la malattia e il documento di riferimento applicabile.\n\nIl vecchio termine ACOS non identifica una terza malattia uniforme. GINA preferisce asma+BPCO come descrizione di caratteristiche coesistenti; in presenza di asma la terapia deve contenere ICS. Una scala storica di sovrapposizione non sostituisce l’inquadramento individuale."
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
      "text": "Per ripercorrere il capitolo si può partire da una domanda concreta: quale componente dell’ostruzione sta modificando il farmaco? Se il percorso è β₂–AMP ciclico, il punto di arrivo immediato è il tono muscolare. Se il bersaglio è muscarinico, si sta riducendo una risposta all’acetilcolina. Se si interviene su CysLT₁, si limita una via specifica dei mediatori lipidici. Con il recettore glucocorticoide si modifica invece un programma cellulare più ampio.\n\nLa domanda successiva riguarda il tempo e l’esito. Una variazione del calibro, il controllo dell’iperreattività e la prevenzione di nuovi episodi non sono misure intercambiabili. Anche la via di somministrazione e la formulazione appartengono al ragionamento: condizionano l’esposizione senza cambiare il nome del bersaglio.\n\nLa copertura cresce per intervalli identificati nelle fonti e nei registri collegati. Il lotto più recente comprende corso I PDF 641–645, Katzung 409–410, Rang & Dale 548 e appunti I 298–299: dieci pagine controllate, sei nuove e quattro rilette, con tutti i rendering. Sette sostengono l’ampliamento; corso 644–645 e appunti 299 non aggiungono passaggi. La copertura cumulativa identificata mediante hash comprende 50 pagine controllate e 43 con passaggi integrati. La selezione respiratoria storica resta distinta; nessun intero libro o corso dichiarato letto e nessuna revisione clinica indipendente."
    }
  ],
  "wordCount": 4904,
  "checks": [
    {
      "question": "Perché broncodilatazione non equivale a controllo completo della malattia?",
      "answer": "La contrazione è una componente dell’ostruzione; edema, muco, infiammazione e rimodellamento richiedono un ragionamento distinto."
    },
    {
      "question": "Iperreattività significa allergia specifica?",
      "answer": "No. Una risposta bronchiale eccessiva può essere provocata da stimoli differenti; il circuito allergico è un modello importante ma non universale."
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
      "question": "Un bersaglio immunologico promettente dimostra quale biologico scegliere?",
      "answer": "No. Occorre collegarlo al contesto e agli esiti clinici; un diagramma recettoriale non sostituisce la selezione specialistica."
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
      "question": "Quali elementi vanno collegati prima di giudicare un farmaco respiratorio?",
      "answer": "Componente dell’ostruzione, bersaglio, esposizione, tempo dell’effetto e risultato clinico; la lettura dichiarata resta circoscritta."
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
      "question": "Meno sintomi provano che la malattia e il rischio futuro siano controllati?",
      "answer": "No. Sollievo, prevenzione delle riacutizzazioni e tollerabilità sono obiettivi collegati ma distinti. Vanno valutati insieme, considerando anche esposizione, tecnica inalatoria e aderenza."
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
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 621–625, etichette 619–623. Testo disponibile e cinque rendering controllati; 621 è programma, 622 contiene elementi poco leggibili non trasferiti. 623 riprende una Perspective, non una sperimentazione clinica. Ampliamento: PDF 626–630, etichette 624–628, testo e rendering; categorie storiche riconciliate. La figura 629 ripete Katzung 404, non è prova indipendente. Lotto successivo: PDF 631–635, etichette 629–633; quattro testi disponibili e tabella immagine 634 letti, cinque rendering controllati. 633 non aggiunge contenuto; figure 631/633–635 duplicate negli appunti 295–296. Nuovo intervallo PDF 636–640, etichette 634–638: quattro testi e uno schema immagine, cinque rendering. 637–639 integrati; 636/640 senza nuovo passaggio. Grafici e schemi duplicati negli appunti riconosciuti. PDF 641–645, etichette 639–643: cinque pagine del corso, dieci complessive nel lotto con i confronti; 641–643 integrati, 644–645 già trattati. Recuperato il riferimento Ruffin 1977, distinto dalla lettura del suo testo integrale."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012; capitolo 20, PDF 400–403, editoriali 380–383. Quattro pagine e figure 20-1/20-2 controllate; indicazioni storiche e valori delle curve non trasferiti. Ampliamento: PDF 404–406, editoriali 384–386; testo e figure controllati. 404 e 406 integrati; strutture e dettagli storici di 405 non trasferiti. Rilettura PDF 404–406: ora anche 405 sostiene il confronto teorico tra struttura e vie, senza riprodurre formule o indicazioni storiche; 406 non aggiunge nuovi passaggi. Riletto PDF 406 e letti PDF 409–410, editoriali 389–390: tolleranza e circuito muscarinico. Indicazioni e rassicurazioni storiche riconciliate con documenti attuali; dosi non trasferite. PDF 409–410 riletti: componente vagale, secrezione e variabilità funzionale."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015, capitolo 28; PDF 541–545 e 549. Sei testi e rendering, due pagine rilette (545 e 549). Refuso agonisti/antagonisti nella figura 28.3 e confusione LTB4/cisteinilici riconciliati; scala terapeutica 2012 non trasferita. Ampliamento: PDF 546–547 lette e controllate; tempi e xantine. Regole storiche di impiego e unità di concentrazione problematiche non trasferite. Rilettura PDF 546 per assorbimento sistemico ed effetti avversi; nessuna attribuzione di tutti gli effetti cardiaci al solo β1. PDF 548: rilettura del testo già registrato nella selezione respiratoria storica, con primo controllo visivo esplicito; distinti M2 presinaptico e M3 muscolare. PDF 548 riletto con rendering: ipotesi sul feedback M2 distinta da dimostrazione sperimentale."
    },
    {
      "id": "APP",
      "title": "Appunti e diapositive del corso di Farmacologia I · lezione 17",
      "detail": "25 novembre 2025, PDF 293–295, etichette 288–290, pagine 1–3 della lezione. Distinti PKA e AMPc; non adottate la selettività PDE2 delle xantine né l’origine meccanica universale della malattia. Ampliamento: PDF 296–297, etichette 291–292, pagine 4–5 della lezione. 296 integrata; 297 letta, non integrata, con lacune sulla tolleranza registrate. Rilette PDF 295–296, etichette 290–291: distretti, selettività, struttura e vie; figure duplicate nel corso, non conferme indipendenti. PDF 297–298, etichette 292–293: 297 riletta, 298 nuova. Grafico storico e circuito muscarinico confrontati con corso 637/639; spiegazioni assolute della tolleranza non adottate. PDF 298–299, etichette 293–294: 298 riletta e integrata, 299 nuova ma fuori dall’ampliamento. Riferimento del grafico ora rintracciato nel corso: Ruffin 1977."
    },
    {
      "id": "GINA",
      "title": "GINA · Strategy Report 2026",
      "detail": "Consultazione mirata del 4 novembre 2026: PDF 26, 79, 85–86, 98–100 (stampate 25, 78, 84–85, 97–99), testo e rendering. Definizione, trattamento con ICS, opzioni aggiuntive. Non revisione integrale della linea guida o verifica delle autorizzazioni italiane. Ampliamento: PDF 142–144, stampate 141–143, testo e rendering su asma+BPCO; non nuova entità uniforme. Nuova lettura selettiva: PDF 249, stampata 248, testo e rendering; SABA e impiego breve di ipratropio.",
      "url": "https://ginasthma.org/2026-gina-strategy-report/"
    },
    {
      "id": "GOLD",
      "title": "GOLD · Pocket Guide 2026, versione 1.1",
      "detail": "PDF 6–7 e 30–32, stampate 3–4 e 27–29: testo disponibile e figure 3.8–3.10 controllati il 4 novembre 2026. Selezione di mantenimento, non protocollo completo della BPCO.",
      "url": "https://goldcopd.org/2026-gold-report-and-pocket-guide/"
    },
    {
      "id": "MON",
      "title": "Organon · Singulair, SmPC pubblicato su emc",
      "detail": "Versione pagina 15 settembre 2026; §§4.4 e 5.1 letti il 4 novembre 2026. CysLT1, attacco acuto ed eventi neuropsichiatrici; documento britannico, non intero RCP o disponibilità italiana.",
      "url": "https://www.medicines.org.uk/emc/medicine/17718/SPC"
    },
    {
      "id": "TIO",
      "title": "Boehringer Ingelheim · Spiriva Respimat, SmPC su emc",
      "detail": "§5.1 letto il 4 novembre 2026: antagonismo muscarinico e dissociazione. Confronto con AEMPS CIMA 69589 §§4.1, 4.4 e 5.1; refuso spagnolo sull’effetto dell’acetilcolina corretto mediante testo inglese. Non intero RCP. Consultati inoltre §§4.1, 4.4 e passaggi di 5.2 su assorbimento, distribuzione ed eliminazione: mantenimento aggiuntivo, esposizione sistemica e precauzioni. Pagina aggiornata 11 dicembre 2024. Riconfermati selettivamente §§4.1 e 5.1 il 4 novembre 2026: indicazione di mantenimento e selettività cinetica.",
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
      "detail": "Consultati il 4 novembre 2026 §§4.1, passaggi di 4.2 su mantenimento/sollievo e 5.1 meccanismi: formoterolo rapido e prolungato, attività complementari. Documento britannico, non intero RCP o verifica italiana.",
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
    }
  ],
  "relatedExistingChapterIds": [
    "gpcr",
    "recettori-e-legame",
    "desensibilizzazione-tolleranza",
    "istamina-antistaminici",
    "anticorpi-biologici"
  ],
  "drugs": [
    "salbutamolo",
    "formoterolo",
    "tiotropio",
    "ipratropio",
    "montelukast"
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
  "coverage": "Copertura cumulativa con hash: 50 pagine locali distinte controllate, 43 integrate. Ultimo lotto: sei nuove letture e quattro riletture; sette pagine sostengono l’ampliamento. Ruffin 1977 solo abstract; documenti ufficiali consultati selettivamente. Nessun intero libro o corso letto; nessuna revisione clinica indipendente."
});
