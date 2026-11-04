// Sintesi didattica originale; intervalli e limiti nei registri collegati.
export const THEORY_RA = Object.freeze({
  "id": "artrite-reumatoide",
  "volume": 9,
  "title": "Artrite reumatoide: dalla sinovia ai DMARD",
  "lead": "Cellule, citochine e danno articolare spiegano perché i farmaci modificanti la malattia hanno bersagli diversi. Un percorso dalla rete sinoviale a metotrexato, biologici e JAK-inibitori, con distinzione fra meccanismo, indicazione e strategia clinica.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-04",
  "readingManifest": "./data/artrite-reumatoide-reading.json",
  "sections": [
    {
      "id": "sinovia",
      "title": "La sinovia come rete di cellule e segnali",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Nell’artrite reumatoide l’infiammazione interessa la membrana sinoviale e può sostenere un danno progressivo di cartilagine e osso. La malattia ha anche una dimensione sistemica: il bersaglio terapeutico non si esaurisce nel punto in cui il paziente sente dolore. Per orientarsi fra i farmaci è utile distinguere le cellule che alimentano il segnale, i mediatori che lo trasmettono e le strutture che subiscono il danno.\n\nLinfociti T e B, macrofagi e cellule dendritiche partecipano a comunicazioni reciproche. Il TNF e altre citochine attivano ulteriormente cellule immunitarie e cellule del tessuto. I fibroblasti sinoviali contribuiscono alla produzione di mediatori ed enzimi che degradano la matrice; l’asse RANKL–RANK favorisce la formazione e l’attività degli osteoclasti, collegando la risposta infiammatoria al riassorbimento osseo.\n\nQuesto circuito contiene più punti di amplificazione. Inibire una citochina può attenuare conseguenze prodotte da cellule diverse, mentre modificare una popolazione cellulare può cambiare più mediatori contemporaneamente. La presenza di molte frecce in una mappa, però, non assegna a tutti i bersagli lo stesso peso clinico. Un collegamento biologicamente plausibile deve essere distinto dall’efficacia dimostrata di un medicinale in una popolazione definita.",
      "formula": "Cellule immunitarie ↔ citochine ↔ fibroblasti sinoviali · RANKL → RANK sugli osteoclasti → riassorbimento osseo · Mappa funzionale originale: non rappresenta tutte le vie della malattia."
    },
    {
      "id": "obiettivi",
      "title": "Sollievo, attività infiammatoria e danno strutturale",
      "refs": [
        "KAT",
        "RAN",
        "EULAR-N"
      ],
      "text": "Dolore, attività della malattia e danno articolare sono collegati, ma non sono misure intercambiabili. Un analgesico può migliorare il sintomo senza modificare il processo che alimenta la sinovite. Viceversa, il controllo dell’infiammazione non cancella automaticamente un danno già stabilito. Per interpretare un esito occorre quindi chiedere che cosa sia stato misurato e in quale intervallo.\n\nI FANS riducono la produzione di prostanoidi attraverso l’inibizione delle cicloossigenasi e contribuiscono al controllo dei sintomi. I DMARD, farmaci antireumatici modificanti la malattia, sono invece impiegati per intervenire sul decorso. Il termine descrive un obiettivo terapeutico condiviso da molecole molto diverse, non un unico recettore.\n\nLa vecchia immagine di una scala che attende il fallimento dei FANS prima di affrontare la malattia non descrive l’impostazione corrente. EULAR richiama l’avvio della terapia con DMARD al momento della diagnosi. La rapidità del sollievo non è dunque il criterio sufficiente per stabilire se la strategia protegga le articolazioni nel tempo. Anche nelle domande d’esame è utile mantenere separati il beneficio sintomatico, la funzione e la progressione strutturale."
    },
    {
      "id": "classi",
      "title": "Tre famiglie di DMARD e un ruolo distinto per i glucocorticoidi",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "EULAR"
      ],
      "text": "I DMARD sintetici convenzionali, indicati come csDMARD, comprendono metotrexato, leflunomide, sulfasalazina e idrossiclorochina. Hanno strutture e meccanismi differenti: la parola convenzionale non significa che agiscano tutti nello stesso modo, né che siano semplici analgesici. La sulfasalazina, in particolare, non va classificata come un FANS.\n\nI DMARD biologici, bDMARD, comprendono anticorpi e altre proteine terapeutiche. Adalimumab è un anticorpo; etanercept e abatacept sono proteine di fusione. Il termine biologico non è quindi sinonimo di anticorpo monoclonale. I DMARD sintetici mirati, tsDMARD, comprendono gli inibitori di JAK impiegati nell’artrite: sono piccole molecole che raggiungono un bersaglio intracellulare.\n\nI glucocorticoidi vanno considerati separatamente da questa tassonomia. Possono avere un ruolo temporaneo di accompagnamento nella strategia iniziale, mentre i DMARD sviluppano il loro effetto. Classificarli come csDMARD oscurerebbe sia questa funzione sia il problema dell’esposizione prolungata. La distinzione fra famiglie non costituisce una graduatoria automatica di efficacia o sicurezza; aiuta a riconoscere struttura, sede d’azione e tipo di informazione necessario per confrontare i trattamenti.",
      "formula": "csDMARD: piccole molecole convenzionali · bDMARD: proteine terapeutiche, inclusi anticorpi e fusioni · tsDMARD: piccole molecole mirate, qui inibitori JAK · Glucocorticoidi: categoria separata, possibile accompagnamento breve."
    },
    {
      "id": "metotrexato",
      "title": "Metotrexato: perché il modello oncologico non basta",
      "refs": [
        "KAT",
        "RAN",
        "MTX"
      ],
      "text": "Il metotrexato è noto come antagonista del metabolismo dei folati, ma spiegare il suo impiego antinfiammatorio soltanto con l’inibizione della proliferazione cellulare è riduttivo. Alle esposizioni utilizzate nelle malattie infiammatorie vengono chiamati in causa più passaggi, compresi processi che aumentano la disponibilità di adenosina e modificano la risposta delle cellule immunitarie. Il contributo relativo dei diversi meccanismi non va presentato come definitivamente risolto.\n\nKatzung descrive, fra i passaggi proposti, l’inibizione dell’AICAR trasformilasi e il legame con il metabolismo delle purine. I derivati poliglutammati intracellulari aiutano inoltre a comprendere perché la permanenza del farmaco nel plasma non esaurisca la durata delle sue azioni. La differenza fra concentrazione circolante, accumulo cellulare e risposta clinica è un esempio concreto dei limiti di un modello basato sulla sola emivita plasmatica.\n\nC’è una distinzione pratica essenziale: per le malattie infiammatorie il metotrexato si usa una volta alla settimana, secondo la prescrizione. La confusione con un’assunzione quotidiana ha causato tossicità grave, anche fatale, ed è oggetto di specifiche misure EMA. La frequenza di somministrazione non può essere trasferita dai regimi oncologici. Controlli clinici e di laboratorio accompagnano il trattamento; questa spiegazione del meccanismo non definisce una dose individuale."
    },
    {
      "id": "convenzionali",
      "title": "Leflunomide, sulfasalazina e idrossiclorochina: evitare un meccanismo unico",
      "refs": [
        "KAT",
        "RAN"
      ],
      "text": "La leflunomide viene trasformata nel metabolita attivo teriflunomide. L’inibizione della diidroorotato deidrogenasi, DHODH, riduce la sintesi de novo delle pirimidine, importante per cellule che devono aumentare la propria attività proliferativa. Questo bersaglio metabolico è diverso da una citochina o dal suo recettore: la convergenza sul controllo della risposta immunitaria non rende identici i passaggi molecolari.\n\nLa sulfasalazina viene scissa in sulfapiridina e 5-aminosalicilato. Il confronto con le malattie infiammatorie intestinali è istruttivo: la spiegazione dell’attività locale del 5-aminosalicilato nel colon non può essere trasferita automaticamente all’artrite. Katzung attribuisce particolare rilievo alla componente sulfapiridinica nell’effetto antireumatico, mentre le descrizioni dei testi non esauriscono un meccanismo complesso. Non ne deriva che la mesalazina sia un sostituto antireumatico della sulfasalazina.\n\nAnche l’idrossiclorochina ha azioni immunomodulanti che non si lasciano ridurre a un singolo interruttore. Questi esempi servono a studiare le differenze fra farmaci convenzionali, non a suggerire che siano intercambiabili. La scelta dipende dal quadro clinico e dai limiti del singolo medicinale; vecchie percentuali di risposta o schemi di monitoraggio riportati nei manuali storici non sono riproposti come istruzioni correnti."
    },
    {
      "id": "tnf",
      "title": "Il TNF come nodo di amplificazione",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il TNF è prodotto in contesti infiammatori e agisce attraverso recettori di superficie. Nel tessuto sinoviale collega cellule immunitarie e componenti stromali, favorendo ulteriori segnali infiammatori. Neutralizzarlo significa ridurre l’accesso del mediatore ai suoi recettori; non equivale a eliminare tutte le cellule che lo producono.\n\nI recettori del TNF e le JAK appartengono a sistemi diversi. La rappresentazione di un insieme di vie nella stessa figura non autorizza a farle convergere tutte in un unico meccanismo intracellulare. Per il TNF sono rilevanti complessi di segnalazione che coinvolgono, fra le altre vie, NF-κB. Confondere il nome del fattore trascrizionale o attribuire a ogni citochina la stessa cascata impedisce di capire perché esistano farmaci con bersagli distinti.\n\nDal punto di vista didattico, il punto decisivo è la differenza fra intervenire sul messaggero e intervenire sulla risposta della cellula. Un anticorpo anti-TNF opera sul primo livello. Un inibitore di una chinasi intracellulare opera sul secondo, ma soltanto per le vie che utilizzano quella chinasi. Le conseguenze possono sovrapporsi in parte senza rendere i due farmaci equivalenti."
    },
    {
      "id": "formati",
      "title": "Anti-TNF: anticorpo, frammento e recettore di fusione",
      "refs": [
        "KAT",
        "ETN",
        "CZP"
      ],
      "text": "Infliximab e adalimumab riconoscono TNF mediante un anticorpo, con diversa origine delle componenti della proteina. Etanercept impiega invece la porzione extracellulare del recettore p75 del TNF collegata a una regione Fc. È quindi un recettore di fusione che intercetta il mediatore, non un anticorpo diretto contro il recettore cellulare del TNF.\n\nCertolizumab pegol è un frammento anticorpale Fab’ legato a polietilenglicole. Non possiede una regione Fc; l’informazione di prodotto descrive l’assenza delle corrispondenti attività di fissazione del complemento e citotossicità cellulare anticorpo-dipendente nei sistemi in vitro considerati. Questo descrive un comportamento sperimentale preciso e non dimostra assenza di rischi clinici.\n\nLa regione Fc può contribuire a funzioni effettrici e alla permanenza di una proteina nell’organismo, ma il suo significato dipende dalla costruzione del medicinale. La stessa sigla non basta a prevedere identici effetti per rituximab, abatacept ed etanercept. Analogamente, appartenere alla famiglia anti-TNF non estende automaticamente a ogni componente le indicazioni delle altre molecole: patologia, territorio regolatorio e formulazione devono essere verificati separatamente."
    },
    {
      "id": "il6",
      "title": "IL-6: il recettore e il significato dei biomarcatori",
      "refs": [
        "CFI",
        "KAT",
        "FII-S",
        "IL6"
      ],
      "text": "Tocilizumab riconosce il recettore dell’IL-6 nelle forme solubile e associata alla membrana. Sarilumab appartiene anch’esso alla famiglia degli antagonisti del recettore IL-6. Chiamarli genericamente anti-interleuchine perde una distinzione utile: il bersaglio diretto è il recettore, mentre la citochina è il segnale di cui viene impedita la trasmissione.\n\nL’IL-6 contribuisce alla risposta epatica di fase acuta. Il blocco del suo recettore può quindi ridurre rapidamente proteina C reattiva e altri indicatori infiammatori. Questa relazione rende comprensibile il cambiamento di un esame, ma richiede anche cautela nella sua interpretazione. Il valore di laboratorio riflette una via modificata dal trattamento; non è una misura indipendente da quel trattamento.\n\nLe informazioni EMA sul tocilizumab richiamano il rischio che i segni di infiammazione risultino attenuati durante un’infezione. Una PCR bassa non può essere usata da sola per escluderla. È un esempio di come la farmacodinamica possa cambiare contemporaneamente la malattia e il modo in cui la osserviamo: quadro clinico e dati di laboratorio devono essere letti insieme."
    },
    {
      "id": "costimolazione",
      "title": "Abatacept e il secondo segnale del linfocita T",
      "refs": [
        "CFI",
        "KAT",
        "FII-S",
        "FII-A",
        "ABAT"
      ],
      "text": "Il riconoscimento dell’antigene da parte del recettore T è un passaggio dell’attivazione linfocitaria. Nel modello della costimolazione, l’interazione fra CD80/CD86 sulla cellula presentante l’antigene e CD28 sul linfocita T fornisce un ulteriore segnale. Distinguere questi livelli aiuta a capire perché interrompere un contatto di membrana possa modificare una risposta immunitaria più ampia.\n\nAbatacept unisce la porzione extracellulare di CTLA-4 a una regione Fc modificata. Legandosi a CD80 e CD86 limita la costimolazione attraverso CD28. Non è dunque un anticorpo che elimina i linfociti T e non va descritto come un anti-CD28. Anche la somiglianza grafica con altre proteine di fusione non basta: etanercept intercetta TNF, abatacept interferisce con una comunicazione fra cellule.\n\nNell’artrite reumatoide adulta, l’indicazione europea di Orencia consultata comprende l’impiego con metotrexato nei contesti specificati. Il meccanismo, da solo, non autorizza una monoterapia universale o un uso in qualunque malattia autoimmune. Il confronto con belatacept può chiarire l’ingegneria proteica, ma le sue modifiche strutturali e il suo contesto d’impiego non devono essere trasferiti ad abatacept.",
      "formula": "Cellula presentante: CD80/CD86 → CD28 sul linfocita T · Abatacept si lega a CD80/CD86 → minore costimolazione · Il riconoscimento antigene–TCR è un passaggio distinto."
    },
    {
      "id": "linfociti-b",
      "title": "Rituximab: modificare la componente B",
      "refs": [
        "CFI",
        "KAT",
        "RTX"
      ],
      "text": "I linfociti B partecipano alla risposta immunitaria attraverso più funzioni, fra cui presentazione dell’antigene e produzione di mediatori; la loro differenziazione conduce anche a cellule che producono anticorpi. Nell’artrite reumatoide, autoanticorpi e immunocomplessi si inseriscono in una rete che coinvolge altre cellule, inclusi i macrofagi. Ridurre la componente B può quindi avere conseguenze che superano un singolo titolo anticorpale.\n\nRituximab riconosce CD20 e favorisce la deplezione delle cellule che esprimono questo bersaglio. Le informazioni di prodotto distinguono i linfociti B CD20-positivi dalle cellule staminali e dalle plasmacellule normali, che non esprimono CD20. Il trattamento non va perciò raccontato come cancellazione immediata di ogni anticorpo circolante.\n\nQuesta distinzione fra bersaglio, popolazione cellulare ed esito aiuta anche a leggere il tempo di risposta: un cambiamento cellulare e un miglioramento clinico non sono lo stesso evento. La presenza di un meccanismo utilizzabile in oncologia e in malattie immunitarie non rende intercambiabili formulazioni, schemi o indicazioni. Nel capitolo il collegamento a rituximab serve a riconoscere il bersaglio e i limiti del modello, senza costruire un protocollo di somministrazione."
    },
    {
      "id": "jak",
      "title": "JAK: interrompere segnali intracellulari selezionati",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "JAK",
        "UST"
      ],
      "text": "Le JAK sono chinasi coinvolte nella trasduzione di segnali di diversi recettori per citochine. L’attivazione delle STAT collega questi eventi a risposte trascrizionali. Tofacitinib, baricitinib e upadacitinib rappresentano esempi di piccole molecole mirate a questo livello. La selettività relativa e l’esposizione contribuiscono al profilo farmacologico; la parola selettivo non significa che un solo effetto biologico venga modificato.\n\nNon tutte le citochine utilizzano JAK–STAT. Né tutti i farmaci che riducono una risposta mediata da citochine inibiscono direttamente una JAK. Ustekinumab, per esempio, lega la subunità p40 condivisa da IL-12 e IL-23: agisce sul segnale extracellulare. La sua presenza in una figura accanto a tofacitinib non lo trasforma in un inibitore JAK. L’IL-12 comprende p35 e p40; l’IL-23 comprende p19 e p40.\n\nLa mappa molecolare va poi separata dall’elenco delle indicazioni: l’EPAR europeo di Stelara consultato non include l’artrite reumatoide. Non basta riconoscere un mediatore nella patogenesi per proporre il relativo farmaco come trattamento della malattia. Questo è un criterio generale per leggere le mappe dei bersagli senza trasformarle in algoritmi prescrittivi."
    },
    {
      "id": "il1",
      "title": "Anakinra: antagonista del recettore, non recettore esca",
      "refs": [
        "KAT",
        "FII-S",
        "FII-A",
        "ANA"
      ],
      "text": "Anakinra riproduce l’attività dell’antagonista naturale del recettore dell’IL-1. Occupa il recettore e ostacola l’azione del mediatore. La distinzione da un recettore solubile è sostanziale: nel primo caso il farmaco compete per un sito sulla cellula; nel secondo una proteina intercetta il messaggero prima che raggiunga il recettore cellulare.\n\nPer ricordare la differenza, si possono confrontare anakinra ed etanercept. Entrambi sono proteine e interferiscono con segnali infiammatori, ma il primo è un antagonista recettoriale dell’IL-1, mentre il secondo contiene una porzione del recettore del TNF. La forma generica disegnata come una proteina non rivela da sola quale partner venga riconosciuto.\n\nL’autorizzazione europea di Kineret comprende l’artrite reumatoide adulta con metotrexato dopo risposta insufficiente al solo metotrexato. L’esistenza di un’indicazione non stabilisce però che il farmaco abbia lo stesso ruolo di tutte le altre opzioni in un percorso raccomandato. Autorizzazione, evidenza comparativa e collocazione nelle linee guida rispondono a domande diverse."
    },
    {
      "id": "strategia",
      "title": "Leggere il percorso attuale e riconoscere gli algoritmi storici",
      "refs": [
        "EULAR",
        "EULAR-N"
      ],
      "text": "Il treat-to-target organizza il trattamento intorno a un obiettivo clinico verificabile e a rivalutazioni che possono portare a modificare la strategia. Nell’aggiornamento EULAR 2025, pubblicato nel 2026, il metotrexato è la base iniziale, idealmente accompagnata da glucocorticoidi per un periodo breve. Una risposta insufficiente a 3–6 mesi conduce all’aggiunta di un bDMARD; i JAK-inibitori possono essere considerati dopo un’attenta valutazione dei rischi.\n\nUna modifica rispetto agli algoritmi precedenti riguarda il bivio basato sui fattori prognostici sfavorevoli dopo il fallimento della strategia iniziale: EULAR lo ha rimosso. Ricopiare una diapositiva priva di data manterrebbe quindi una decisione ormai superata. Per interpretare un algoritmo bisogna identificarne versione, popolazione e passaggi, non soltanto memorizzare le frecce.\n\nIn remissione sostenuta, la prosecuzione della terapia rimane centrale; una riduzione può essere valutata, ma la sospensione espone a riacutizzazione. Il controllo ottenuto durante il trattamento non dimostra che il processo di malattia sia definitivamente scomparso. Qui sono confrontati abstract e comunicazione EULAR, non l’intera linea guida o tutte le sue basi sperimentali."
    },
    {
      "id": "rischi",
      "title": "Il bersaglio aiuta a capire i rischi, senza quantificarli da solo",
      "refs": [
        "JAK",
        "IL6",
        "RTX",
        "MTX"
      ],
      "text": "Interferire con una risposta immunitaria può modificare anche la difesa dalle infezioni. Il rischio concreto dipende dal medicinale, dalle condizioni della persona e dagli altri trattamenti; non può essere dedotto soltanto dalla parola immunosoppressore. Anche i controlli richiesti devono essere riferiti al prodotto e al contesto, senza trasformare una tabella di classe in un calendario universale.\n\nPer i JAK-inibitori nelle malattie infiammatorie, EMA ha introdotto restrizioni dopo la valutazione di eventi cardiovascolari maggiori, tumori, tromboembolia, infezioni gravi e mortalità. Nei pazienti di almeno 65 anni, fumatori attuali o di lunga durata nel passato, oppure con aumentato rischio cardiovascolare o oncologico, l’impiego è previsto soltanto se mancano alternative adeguate. Sono richieste cautele anche in presenza di altri fattori di rischio tromboembolico. Queste misure non riguardano indistintamente ogni farmaco che inibisce una chinasi.\n\nIl confronto fra gruppi osservato negli studi non fornisce automaticamente una probabilità personale. Analogamente, un meccanismo più circoscritto non dimostra da solo maggiore sicurezza. L’esempio della PCR durante tocilizumab mostra perché sorveglianza, storia clinica e interpretazione degli esami debbano accompagnare la conoscenza del bersaglio."
    },
    {
      "id": "copertura",
      "title": "Come usare questo capitolo e i collegamenti",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "FII-S",
        "FII-A"
      ],
      "text": "Il percorso parte dalla sinovia e arriva ai farmaci passando per quattro domande: quale componente sostiene il circuito, quale bersaglio viene riconosciuto, quale conseguenza biologica è plausibile e quale impiego è effettivamente documentato. Le domande finali permettono di verificare soprattutto gli errori di collegamento fra questi livelli.\n\nIl confronto comprende intervalli precisi di Katzung, Rang & Dale e appunti e diapositive del corso di Farmacologia I e II. Sono state lette venti nuove pagine fisiche e riconsultate cinque già registrate; ciò non equivale a venticinque prove indipendenti. Alcune figure sono ripetute, altre hanno parti coperte; una tabella del manuale rimane troppo ridotta per dichiararne controllata ogni cella. Non sono riprodotti testi, figure o tabelle originali.\n\nI riferimenti regolatori e le raccomandazioni sono stati consultati nei passaggi dichiarati. La sintesi non è una revisione clinica indipendente e non definisce dosi o scelte individuali. I collegamenti aprono identità farmacologiche già presenti nell’atlante: un collegamento nuovo non equivale a una nuova scheda revisionata o a un nuovo profilo farmacocinetico. Altri intervalli dei corsi e dei libri restano da riconciliare."
    }
  ],
  "checks": [
    {
      "question": "Un miglioramento del dolore prova da solo la protezione dal danno articolare?",
      "answer": "No. Sollievo sintomatico, attività infiammatoria, funzione e progressione strutturale sono esiti distinti."
    },
    {
      "question": "La sigla DMARD identifica un unico meccanismo?",
      "answer": "No. Indica un obiettivo terapeutico condiviso da famiglie con bersagli e strutture differenti."
    },
    {
      "question": "Tutti i biologici sono anticorpi monoclonali?",
      "answer": "No. Etanercept e abatacept sono proteine di fusione; anakinra è un antagonista recettoriale ricombinante."
    },
    {
      "question": "La frequenza del metotrexato nell’artrite può essere ricavata da un regime oncologico?",
      "answer": "No. Nelle malattie infiammatorie l’uso è settimanale secondo prescrizione; l’errore quotidiano può provocare tossicità grave, anche fatale."
    },
    {
      "question": "Il ruolo del 5-aminosalicilato nel colon dimostra che mesalazina e sulfasalazina sono equivalenti nell’artrite?",
      "answer": "No. Scissione del profarmaco, componenti attive e sede dell’effetto devono essere interpretati nel contesto della malattia."
    },
    {
      "question": "Etanercept blocca il recettore cellulare del TNF come un anticorpo anti-recettore?",
      "answer": "No. Contiene una porzione del recettore che intercetta il TNF prima dell’interazione con i recettori cellulari."
    },
    {
      "question": "L’assenza di Fc in certolizumab dimostra assenza di rischi clinici?",
      "answer": "No. Descrive una proprietà strutturale con conseguenze sperimentali specifiche, non una garanzia di sicurezza."
    },
    {
      "question": "Una PCR bassa durante tocilizumab esclude un’infezione?",
      "answer": "No. Il blocco di IL6R può attenuare la fase acuta: il dato va letto insieme al quadro clinico."
    },
    {
      "question": "Quale contatto modifica direttamente abatacept?",
      "answer": "Si lega a CD80/CD86, limitando la costimolazione attraverso CD28. Non è un anti-CD28 né un farmaco che elimina direttamente tutti i linfociti T."
    },
    {
      "question": "Rituximab elimina immediatamente tutte le plasmacellule e gli anticorpi?",
      "answer": "No. Il bersaglio CD20 non è espresso dalle plasmacellule normali; deplezione B e andamento clinico sono livelli distinti."
    },
    {
      "question": "Ustekinumab è un inibitore diretto delle JAK e una terapia RA autorizzata nell’UE?",
      "answer": "No. Lega p40 extracellulare; la RA non compare nelle indicazioni europee consultate."
    },
    {
      "question": "Anakinra intercetta IL1 come un recettore solubile?",
      "answer": "No. È un antagonista che occupa il recettore per IL1, impedendo l’azione del mediatore."
    },
    {
      "question": "La presenza di fattori prognostici sfavorevoli rimane il bivio obbligatorio dopo il fallimento iniziale nell’aggiornamento EULAR 2025?",
      "answer": "No. Quel passaggio è stato rimosso: un algoritmo storico va datato e confrontato con la versione corrente."
    },
    {
      "question": "La selettività molecolare garantisce da sola una maggiore sicurezza?",
      "answer": "No. Il bilancio clinico richiede dati su eventi, popolazione ed esposizione; per i JAK-inibitori valgono specifiche restrizioni EMA."
    },
    {
      "question": "I collegamenti ai farmaci rappresentano nuove schede farmacologiche revisionate?",
      "answer": "No. Aprono identità già esistenti; questo lotto aggiunge un capitolo teorico e non nuovi profili."
    }
  ],
  "relatedExistingChapterIds": [
    "fansi-cox",
    "anticorpi-biologici",
    "tirosinchinasi",
    "malattie-infiammatorie-intestinali",
    "metabolismo-trasportatori"
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL34259",
      "label": "METHOTREXATE"
    },
    {
      "id": "CHEMBL960",
      "label": "LEFLUNOMIDE"
    },
    {
      "id": "CHEMBL421",
      "label": "SULFASALAZINE"
    },
    {
      "id": "CHEMBL1535",
      "label": "HYDROXYCHLOROQUINE"
    },
    {
      "id": "CHEMBL1201580",
      "label": "ADALIMUMAB"
    },
    {
      "id": "CHEMBL1201581",
      "label": "INFLIXIMAB"
    },
    {
      "id": "CHEMBL1201572",
      "label": "ETANERCEPT"
    },
    {
      "id": "CHEMBL1201831",
      "label": "CERTOLIZUMAB PEGOL"
    },
    {
      "id": "CHEMBL1201833",
      "label": "GOLIMUMAB"
    },
    {
      "id": "CHEMBL1237022",
      "label": "TOCILIZUMAB"
    },
    {
      "id": "CHEMBL2108730",
      "label": "SARILUMAB"
    },
    {
      "id": "CHEMBL1201823",
      "label": "ABATACEPT"
    },
    {
      "id": "CHEMBL1201576",
      "label": "RITUXIMAB"
    },
    {
      "id": "CHEMBL1201570",
      "label": "ANAKINRA"
    },
    {
      "id": "CHEMBL221959",
      "label": "TOFACITINIB"
    },
    {
      "id": "CHEMBL2105759",
      "label": "BARICITINIB"
    },
    {
      "id": "CHEMBL3622821",
      "label": "UPADACITINIB"
    },
    {
      "id": "CHEMBL1201835",
      "label": "USTEKINUMAB"
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 591–595, etichette 589–593: testo disponibile e cinque rendering letti il 04/11/2026. Parti coperte a 591; algoritmo senza anno a 593 confrontato con EULAR 2025. Articoli delle figure non letti integralmente."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012, capitolo 36: PDF 743–752, editoriali 723–732. Testo e rendering, inclusa figura 36-4, letti il 04/11/2026. Dosi, percentuali e raccomandazioni storiche non trasferite; incongruenza nel paragrafo della ciclosporina esclusa."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015, capitolo 26: PDF 511–514, paginazione editoriale non ricostruita. Testo e rendering letti il 04/11/2026, figura 26.4 controllata. Tabella 26.2 ridotta: non tutte le celle verificate. Tassonomia e gerarchia storiche riconciliate."
    },
    {
      "id": "APP",
      "title": "Appunti e diapositive del corso di Farmacologia I · 20/11/2025",
      "detail": "AA 2025–26, lezione 16: PDF 287–288, etichette 282–283, pagine di lezione 5–6. Nuova 288, rilette entrambe il 04/11/2026; solo passaggi artrite integrati. Figure ripetute, non prove indipendenti."
    },
    {
      "id": "FII-S",
      "title": "Appunti e diapositive del corso di Farmacologia II · 2025–26",
      "detail": "Materiale sulle terapie immunitarie, PDF 34 e 36: già lette in precedenza, rilette nel testo e nei rendering il 04/11/2026. Corretta distinzione fra antagonista IL1R e recettore solubile; CTLA4-Ig distinto da TNFR-Fc."
    },
    {
      "id": "FII-A",
      "title": "Appunti e diapositive del corso di Farmacologia II · 27/10/2025",
      "detail": "Lezione del 27/10/2025, PDF 15–16: già lette, riconsultate il 04/11/2026. Nomi e figure riconciliati con gli altri materiali e EMA; non intera lezione o corso."
    },
    {
      "id": "EULAR",
      "title": "EULAR · Artrite reumatoide, aggiornamento 2025",
      "detail": "Pubblicato nel 2026, DOI 10.1016/j.ard.2026.01.023. Abstract letto il 04/11/2026; testo completo non accessibile (403; copia istituzionale 403/451). Non intera linea guida né revisioni sistematiche associate.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/41826212/"
    },
    {
      "id": "EULAR-N",
      "title": "EULAR · Presentazione dell’aggiornamento, 13/03/2026",
      "detail": "Comunicato ufficiale di due pagine letto il 04/11/2026: avvio alla diagnosi, rimozione della stratificazione prognostica dopo fallimento iniziale e remissione. Non sostituisce la lettura completa delle raccomandazioni.",
      "url": "https://www.eular.org/document/download/1406/ec021a77-cdf3-4de3-ae72-57c1757db549/1325"
    },
    {
      "id": "MTX",
      "title": "EMA · Prevenzione degli errori di frequenza con metotrexato",
      "detail": "Comunicazione del 22/08/2019, corpo e indicazioni per pazienti/professionisti riletti il 04/11/2026: frequenza settimanale nelle malattie infiammatorie, distinta dai regimi oncologici.",
      "url": "https://www.ema.europa.eu/en/news/new-measures-avoid-potentially-fatal-dosing-errors-methotrexate-inflammatory-diseases"
    },
    {
      "id": "ABAT",
      "title": "EMA · Orencia",
      "detail": "EPAR corrente, passaggi su meccanismo e indicazione RA adulta con MTX; estratto indicizzato di 5.1 dello SmPC (PDF 13) su CTLA4-Fc/CD80/CD86 letto il 04/11/2026. Non fascicolo completo.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/orencia"
    },
    {
      "id": "IL6",
      "title": "EMA · RoActemra, informazioni di prodotto",
      "detail": "Letti estratti indicizzati ufficiali di 5.1 su IL6R solubile e di membrana e di 4.4 (PDF 43) su infezioni, PCR e fase acuta il 04/11/2026. Non documento completo; nessuna dose trasferita.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/roactemra-epar-product-information_en.pdf"
    },
    {
      "id": "RTX",
      "title": "EMA · MabThera, informazioni di prodotto",
      "detail": "Passaggi indicizzati di 5.1 su CD20 e popolazioni B (PDF 69, meccanismo, senza trasferire formulazione sottocutanea alla RA) e di 4.4–4.5 letti il 04/11/2026. EPAR consultato per meccanismo, formulazioni e rischi. Non intero documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/mabthera-epar-product-information_en.pdf"
    },
    {
      "id": "JAK",
      "title": "EMA · Riesame degli inibitori JAK",
      "detail": "Passaggi per professionisti e sintesi delle misure lette il 04/11/2026: restrizioni nelle malattie infiammatorie, rischio cardiovascolare, oncologico e tromboembolico. Non lettura integrale degli studi sottostanti.",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/janus-kinase-inhibitors-jaki"
    },
    {
      "id": "UST",
      "title": "EMA · Stelara",
      "detail": "EPAR e passaggi indicizzati delle indicazioni e del meccanismo nelle informazioni di prodotto consultati il 04/11/2026: p40 extracellulare, nessuna indicazione RA nell’elenco europeo. Composizione p35/p40 confrontata anche con la discussione scientifica iniziale EMA; non fascicolo completo.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/stelara"
    },
    {
      "id": "ANA",
      "title": "EMA · Kineret",
      "detail": "EPAR: indicazione RA con metotrexato, meccanismo e principali limiti letti il 04/11/2026. Anakinra è un antagonista del recettore dell’IL1, non un recettore esca. Non documento completo.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/kineret"
    },
    {
      "id": "ETN",
      "title": "EMA · Enbrel, informazioni di prodotto",
      "detail": "Estratto ufficiale indicizzato del meccanismo in 5.1 e sintesi EPAR letti il 04/11/2026: TNFR-Fc distinto da anticorpo. Non studi completi né tutte le indicazioni.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/enbrel-epar-product-information_en.pdf"
    },
    {
      "id": "CZP",
      "title": "EMA · Cimzia, informazioni di prodotto",
      "detail": "Estratto ufficiale indicizzato di 5.1, PDF 14, e EPAR corrente letti il 04/11/2026: frammento PEG, assenza Fc e limiti delle osservazioni in vitro. Non intero documento.",
      "url": "https://www.ema.europa.eu/en/documents/product-information/cimzia-epar-product-information_en.pdf"
    }
  ],
  "coverage": "Primo capitolo dedicato alla RA: 20 nuove pagine e cinque rilette di sei fonti. Testo disponibile e rendering controllati con limiti dichiarati; confronto selettivo EMA/EULAR, non revisione clinica indipendente.",
  "wordCount": 2555
});
