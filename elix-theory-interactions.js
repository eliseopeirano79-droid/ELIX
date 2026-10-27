// Original educational synthesis; bounded source provenance in the reading ledger.
export const THEORY_INTERACTIONS = Object.freeze({
  "id": "metabolismo-trasportatori",
  "volume": 3,
  "title": "CYP, trasportatori e interazioni farmacocinetiche",
  "lead": "Seguire una molecola dall’intestino al tessuto e all’eliminazione permette di capire le interazioni. Enzimi, trasportatori e tempi di esposizione spiegano perché la stessa interferenza possa avere conseguenze diverse secondo la specie attiva, la via e il compartimento osservato.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-26",
  "readingManifest": "./data/metabolismo-trasportatori-reading.json",
  "sections": [
    {
      "id": "ricostruire-percorso",
      "title": "Prima del bersaglio: ricostruire il percorso",
      "refs": [
        "C",
        "SFI"
      ],
      "text": "Una molecola può riconoscere perfettamente il proprio bersaglio e raggiungerlo in quantità insufficiente, oppure accumularsi abbastanza da produrre effetti eccessivi. Le interazioni farmacocinetiche modificano questo percorso: un’altra sostanza cambia l’assorbimento, la distribuzione, la trasformazione o l’escrezione del farmaco considerato. Il punto di partenza non è quindi una lista di coppie da memorizzare, ma una domanda: quale passaggio è stato modificato e quale specie chimica ne risente?\n\nConviene distinguere la sostanza che provoca l’interazione dalla sostanza di cui cambia l’esposizione. Questi ruoli sono relativi al meccanismo esaminato: uno stesso medicinale può modificarne un altro ed essere, contemporaneamente, modificato da un terzo. Anche metaboliti, alimenti e preparati vegetali possono partecipare.\n\nL’interazione non coincide necessariamente con una reazione avversa. Può essere sfruttata intenzionalmente, risultare trascurabile nelle condizioni studiate o compromettere efficacia e sicurezza. La descrizione del meccanismo viene prima della valutazione della sua rilevanza; nessuna delle due sostituisce l’altra."
    },
    {
      "id": "tre-livelli",
      "title": "Preparazione, esposizione e risposta sono livelli distinti",
      "refs": [
        "C",
        "SFI"
      ],
      "text": "Una precipitazione nella sacca di infusione è un’incompatibilità farmaceutica: il problema esiste prima che la preparazione raggiunga l’organismo. Una riduzione dell’assorbimento dopo ingestione riguarda invece la farmacocinetica. La convergenza di due sostanze sullo stesso processo fisiologico può cambiare la risposta senza modificare le loro concentrazioni: questa è un’interazione farmacodinamica.\n\nLa distinzione dipende dal luogo e dal passaggio interessato, non soltanto dalla natura chimica dell’evento. Un complesso formato nel lume intestinale può impedire l’ingresso del farmaco e va quindi interpretato come un problema di esposizione. Una reazione nella soluzione da somministrare richiede una verifica di compatibilità della preparazione, specifica per concentrazione, diluente, contenitore e condizioni d’impiego.\n\nNella pratica più livelli possono coesistere. Un aumento della concentrazione e una maggiore sensibilità del tessuto possono concorrere allo stesso effetto. Classificare serve a scomporre il problema; non obbliga a scegliere un solo meccanismo quando le evidenze ne indicano diversi."
    },
    {
      "id": "misurare-esposizione",
      "title": "AUC, picco e tempo: che cosa è realmente cambiato?",
      "refs": [
        "R",
        "C"
      ],
      "text": "La concentrazione plasmatica varia nel tempo. Il picco descrive un massimo osservato, il tempo del picco informa sulla rapidità dell’arrivo e l’area sotto la curva, AUC, riassume l’esposizione nell’intervallo considerato. Queste grandezze non sono sinonimi: una curva più lenta può avere un picco inferiore senza una riduzione proporzionale dell’area complessiva.\n\nPer un farmaco con cinetica lineare, la stessa dose e la stessa via, l’AUC aumenta se cresce la biodisponibilità o se diminuisce la clearance. Da un’AUC aumentata, però, non si ricava automaticamente quale delle due sia cambiata. Per una somministrazione orale possono essere modificati contemporaneamente l’ingresso e l’eliminazione; servono informazioni ulteriori per attribuire il risultato.\n\nOccorre inoltre identificare ciò che il laboratorio misura: parentale o metabolita, concentrazione totale o libera, plasma o compartimento bersaglio. Un cambiamento di esposizione è un dato farmacocinetico. Per tradurlo in efficacia o tossicità servono la relazione esposizione–risposta, la durata del cambiamento e il contesto biologico."
    },
    {
      "id": "chelazione",
      "title": "Quando il farmaco rimane nel lume: complessi e adsorbimento",
      "refs": [
        "FI",
        "C",
        "CIPRO"
      ],
      "text": "Prima dell’assorbimento due sostanze possono incontrarsi direttamente. Alcuni cationi multivalenti formano complessi con determinati farmaci; resine e materiali adsorbenti possono trattenere altre molecole. La quantità disponibile per attraversare la mucosa diminuisce anche se il bersaglio farmacologico, gli enzimi epatici e il rene funzionano come prima.\n\nUn esempio verificabile è la ciprofloxacina orale con prodotti contenenti magnesio, alluminio, ferro o zinco: l’informazione statunitense di CIPRO distingue esplicitamente queste interferenze. Le istruzioni del prodotto prevedono intervalli differenti a seconda dell’ordine di assunzione. Non esiste quindi una regola universale secondo cui separare qualsiasi coppia di due ore risolva ogni interazione.\n\nIl ragionamento utile è riconoscere una possibile interazione nel lume e cercare la formulazione e il prodotto interessati. Non si trasferisce lo stesso intervallo a tutti gli antibiotici, a tutti gli integratori o a tutte le vie di somministrazione. La scheda del prodotto resta necessaria per la gestione concreta."
    },
    {
      "id": "ph-dissoluzione",
      "title": "pH gastrico: dissoluzione e ionizzazione non sono la stessa cosa",
      "refs": [
        "FI",
        "C",
        "EDURANT"
      ],
      "text": "Un farmaco orale deve liberarsi dalla formulazione e dissolversi prima di attraversare una membrana. Il pH può modificare sia la solubilità sia la proporzione delle forme ionizzate. Questi effetti possono andare in direzioni diverse: dedurre l’assorbimento soltanto dalla frase «la forma non ionizzata attraversa meglio» trascura quanto farmaco è effettivamente disciolto e dove può essere assorbito.\n\nL’aumento del pH gastrico può ridurre l’esposizione a specifiche formulazioni. Nel riassunto britannico delle caratteristiche di Edurant compresse, rilpivirina orale e inibitori di pompa protonica non devono essere associati perché l’aumento del pH riduce l’assorbimento. Questo esempio documenta un meccanismo preciso; non autorizza a estendere la stessa interazione a ogni formulazione di rilpivirina o a ogni antivirale.\n\nAntiacidi contenenti metalli e farmaci che sopprimono la secrezione acida non sono intercambiabili come spiegazione. Una curva di ciprofloxacina dopo un antiacido, da sola, non separa chelazione e modificazione del pH. Identificare il componente e il processo evita una falsa generalizzazione."
    },
    {
      "id": "transito",
      "title": "Svuotamento gastrico, motilità e integrità della mucosa",
      "refs": [
        "FI",
        "C"
      ],
      "text": "Lo stomaco può funzionare come un serbatoio che regola l’arrivo del farmaco nell’intestino. Rallentarne lo svuotamento modifica spesso il tempo dell’assorbimento; non implica necessariamente una minore quantità assorbita. L’effetto dipende da stabilità della molecola, formulazione, sede di assorbimento e durata del contatto con la mucosa.\n\nAnche una modificazione della motilità intestinale può produrre risultati differenti. Un transito rapido può ridurre il tempo disponibile, mentre un transito rallentato può favorire l’assorbimento di alcune sostanze ma aumentarne la degradazione o ritardarne l’arrivo in altri casi. Il segno dell’effetto non si ricava soltanto dal nome «procinetico» o «oppioide».\n\nUna mucosa danneggiata aggiunge un problema distinto: cambia la superficie funzionale e possono essere alterate le condizioni che permettono il passaggio. Per interpretare l’interazione si confrontano picco, tempo del picco e AUC nelle condizioni pertinenti. Non basta constatare che la curva è spostata nel tempo per concludere che la terapia sia diventata inefficace."
    },
    {
      "id": "primo-passaggio",
      "title": "Assorbito non significa interamente disponibile nel sangue",
      "refs": [
        "K",
        "R",
        "COL"
      ],
      "text": "La biodisponibilità sistemica riguarda la quota che raggiunge la circolazione generale come specie considerata. Una molecola può essere ben assorbita dalla mucosa e venire trasformata nell’enterocita o nel fegato prima di arrivare al sangue sistemico. Il metabolismo presistemico spiega quindi perché assorbimento intestinale e biodisponibilità non siano la stessa quantità.\n\nQuesta distinzione è particolarmente utile quando si studiano le statine. Il fegato è contemporaneamente un organo di ingresso, un luogo di metabolismo e il tessuto in cui si trova un bersaglio terapeutico. Un’esposizione plasmatica relativamente bassa non dimostra, da sola, che poco farmaco sia arrivato all’epatocita. Non tutte le statine condividono però le stesse vie o gli stessi metaboliti: la proprietà di classe non sostituisce quella della singola molecola.\n\nL’inibizione di un processo intestinale può modificare soprattutto l’esposizione dopo assunzione orale. Un risultato ottenuto per questa via non va automaticamente trasferito a una somministrazione che evita l’intestino. Formulazione, via e specie misurata sono parte del risultato, non dettagli accessori."
    },
    {
      "id": "cyp-ruoli",
      "title": "Un CYP è una via, non un’etichetta unica del farmaco",
      "refs": [
        "K",
        "C"
      ],
      "text": "I citocromi P450 catalizzano molte reazioni ossidative, ma il metabolismo dei farmaci comprende anche altri enzimi e reazioni. Fase I e fase II descrivono tipi di trasformazione, non due tappe obbligatorie che ogni molecola deve attraversare in ordine. L’idrolisi, per esempio, non deve essere attribuita automaticamente a un CYP; la coniugazione non garantisce sempre la perdita dell’attività.\n\nUna sostanza è substrato di una via se viene trasformata attraverso quella via. È inibitore se ne riduce l’attività nelle condizioni considerate; è induttore se ne aumenta la capacità, tipicamente modificando l’espressione delle proteine. Essere substrato non dimostra di essere un inibitore clinicamente rilevante. La semplice condivisione dell’enzima non prova che due medicinali debbano interferire in misura importante.\n\nLe tabelle sono un punto di partenza da leggere con le loro definizioni. Le categorie regolatorie hanno definizioni e un ambito preciso, come discusso nella sezione successiva."
    },
    {
      "id": "vie-parallele",
      "title": "Quanto conta la via modificata rispetto alle alternative?",
      "refs": [
        "K",
        "C"
      ],
      "text": "La rilevanza di una via metabolica dipende dalla quota di eliminazione che sostiene. Se quasi tutta la rimozione di una specie attiva passa da un solo enzima, ridurne fortemente l’attività può produrre un cambiamento importante. Se restano vie alternative efficienti, lo stesso intervento può avere un effetto più contenuto.\n\nIl principio resta valido anche quando entrano in gioco trasportatori ed escrezione renale. Un farmaco non è un tubo collegato a un solo CYP: è una rete di ingressi, trasformazioni e uscite. La quota che percorre ciascuna via può cambiare con esposizione, funzione d’organo e interferenze concomitanti. Il bilancio finale non si ottiene sommando indiscriminatamente le frecce presenti in una tabella.\n\nPer questo la forza di un inibitore, misurata con un substrato di riferimento, non equivale a un moltiplicatore fisso per ogni altro substrato. Né una riduzione parziale dell’attività enzimatica implica la stessa riduzione della clearance totale. Prima di prevedere la direzione occorre capire quale processo limita davvero l’eliminazione della specie osservata."
    },
    {
      "id": "inibizione",
      "title": "Inibizione reversibile e inattivazione: due modi di fermare una via",
      "refs": [
        "K",
        "C"
      ],
      "text": "Un inibitore reversibile riduce l’attività dell’enzima attraverso un’interazione che può venir meno quando la sua concentrazione diminuisce. L’effetto dipende dalle concentrazioni nel sito pertinente e dal meccanismo di inibizione. Il risultato può comparire relativamente presto, senza attendere la produzione di nuove proteine.\n\nIn altri casi il processo metabolico porta all’inattivazione dell’enzima. Il recupero richiede allora anche il ricambio della proteina funzionale: la scomparsa dell’inibitore dal plasma non coincide necessariamente con il ripristino immediato della capacità metabolica. È una ragione per cui il tempo dopo una sospensione può essere ancora farmacologicamente importante.\n\nSe la via inattiva il farmaco già attivo, una riduzione della sua attività può aumentarne l’esposizione. Se invece forma una specie necessaria all’effetto, può ridurne la produzione. Vanno quindi nominate entrambe le sostanze e la reazione interessata. «Inibizione» descrive ciò che accade alla via; non predice, da sola, se l’effetto terapeutico aumenterà o diminuirà."
    },
    {
      "id": "induzione",
      "title": "Induzione e sospensione: il sistema conserva una storia",
      "refs": [
        "FI",
        "K",
        "C"
      ],
      "text": "L’induzione modifica la capacità dell’organismo di trasformare o trasportare una sostanza. Molti induttori agiscono attraverso programmi di espressione genica: aumentano la quantità di enzimi o trasportatori disponibili. Non si tratta semplicemente di una molecola che accelera istantaneamente un’altra molecola già presente.\n\nL’effetto si costruisce e si attenua nel tempo. Contano l’esposizione all’induttore, la produzione delle proteine, il loro turnover e la cinetica del farmaco che subisce l’interazione. La sospensione può perciò far aumentare progressivamente l’esposizione a un substrato che prima veniva eliminato più rapidamente. La cronologia completa comprende inizio, durata, modifiche e fine dell’associazione.\n\nL’autoinduzione è il caso in cui una sostanza favorisce una via coinvolta nel proprio metabolismo. Anche qui non si deduce una variazione posologica universale. Inoltre, più metabolismo non significa sempre meno attività: possono aumentare formazione di metaboliti attivi o tossici e contemporaneamente la loro eliminazione. Occorre seguire le specie nel loro insieme, senza trasformare un principio generale in una previsione individuale."
    },
    {
      "id": "classificazioni",
      "title": "Forte, moderato, debole: leggere il confronto che definisce la categoria",
      "refs": [
        "FDA-CYP"
      ],
      "text": "Le categorie di forza delle interazioni metaboliche descrivono risultati misurati con substrati di riferimento. Nella tabella FDA un inibitore forte aumenta almeno di cinque volte l’AUC di un substrato sensibile della via; uno moderato la aumenta da due a meno di cinque volte. La classificazione riguarda quel tipo di confronto e non è una misura universale della pericolosità della sostanza.\n\nPer gli induttori il confronto considera la diminuzione dell’esposizione: la categoria forte corrisponde a una riduzione di almeno l’ottanta per cento dell’AUC del substrato sensibile. Il significato clinico resta legato al farmaco coinvolto, al suo margine terapeutico e alle condizioni d’uso.\n\nSi devono leggere anche le note: dose, via, preparazione e associazione possono cambiare la classificazione osservata. Un estratto vegetale o un succo non possiede necessariamente una composizione costante. Questa terminologia aiuta a ordinare le evidenze; non permette di calcolare automaticamente la dose di un altro medicinale."
    },
    {
      "id": "trasporto-sede",
      "title": "Trasportatori: la sede decide il significato della freccia",
      "refs": [
        "R",
        "FI",
        "C"
      ],
      "text": "Un enzima trasforma una sostanza; un trasportatore ne favorisce il passaggio attraverso una membrana. Il trasporto può sostenere ingresso o efflusso, e il suo significato dipende dall’orientamento della proteina e dal compartimento in cui si trova. Dire soltanto «il trasportatore è inibito» lascia quindi incompleta la spiegazione.\n\nNell’intestino, una proteina di efflusso può rimandare il substrato verso il lume e limitarne l’ingresso netto. Nell’epatocita, un trasportatore di captazione può favorire l’arrivo dal sangue a un sito di metabolismo o azione. Nel tubulo renale, sistemi posti sui due versanti della cellula possono contribuire al passaggio dal sangue all’urina. Inibire uno di questi processi non produce lo stesso risultato in tutti i compartimenti.\n\nIl modello interattivo isola tre percorsi. Mantiene idealmente invariati gli altri processi e mostra una direzione possibile, non un valore misurato. Serve a localizzare la barriera e a distinguere ciò che rimane nel sangue da ciò che raggiunge una cellula o viene eliminato.",
      "transportLab": true
    },
    {
      "id": "intestino-efflusso",
      "title": "Intestino: ingresso, efflusso e metabolismo lavorano insieme",
      "refs": [
        "R",
        "FI"
      ],
      "text": "L’enterocita non è una parete inerte. Una sostanza può entrarvi, essere trasformata, essere trasferita verso il sangue o essere riportata nel lume. L’esposizione sistemica dipende dal bilancio tra questi processi. Una proteina di efflusso come P-gp può ridurre l’ingresso netto di determinati substrati; inibirla può favorire l’assorbimento, se quel processo ne limita effettivamente il passaggio.\n\nL’interazione può però coinvolgere anche enzimi intestinali. Quando una sostanza modifica sia un trasportatore sia una via metabolica, una variazione dell’AUC non identifica da sola il contributo di ciascuno. Non è corretto assegnare tutto il cambiamento al primo meccanismo noto.\n\nAnche la stessa proteina può avere funzioni differenti secondo la sede. La presenza di P-gp nell’intestino, nei sistemi di eliminazione e in alcune barriere non rende equivalenti gli effetti della sua modulazione. Un dato di esposizione plasmatica non dimostra automaticamente una variazione proporzionale in ogni tessuto, soprattutto quando l’accesso è regolato da una barriera specifica."
    },
    {
      "id": "fegato-uptake",
      "title": "Fegato: più farmaco nel plasma può significare meno ingresso cellulare",
      "refs": [
        "R",
        "COL"
      ],
      "text": "La captazione epatica trasferisce sostanze dal sangue all’epatocita. Alcuni trasportatori, fra cui membri della famiglia OATP, contribuiscono a questo passaggio per specifici substrati. Se la captazione viene limitata, il farmaco può rimanere maggiormente nel sangue mentre diminuisce l’ingresso nella cellula. Una concentrazione plasmatica maggiore non prova quindi una maggiore disponibilità nello stesso tessuto.\n\nQuesto è un punto essenziale per le molecole il cui bersaglio si trova nel fegato. Occorre distinguere esposizione sistemica, concentrazione intracellulare e risposta terapeutica. Le differenze farmacocinetiche fra statine ricordate nel corso vanno comprese come proprietà di ciascuna molecola; non permettono di trattare tutte le statine come un unico substrato di CYP3A.\n\nDopo la captazione, metabolismo ed efflusso biliare costituiscono altri passaggi. Se ne cambia più di uno, il risultato può essere meno intuitivo. La rappresentazione a compartimenti aiuta proprio a evitare un errore frequente: equiparare sempre «più nel plasma» a «più nel sito d’azione»."
    },
    {
      "id": "rene",
      "title": "Rene: filtrazione, secrezione e riassorbimento",
      "refs": [
        "R",
        "FI",
        "C"
      ],
      "text": "L’escrezione renale risulta da processi diversi. La filtrazione glomerulare introduce nel filtrato la quota accessibile al filtro, mentre il legame alle proteine ne limita il passaggio diretto. La secrezione tubulare aggiunge sostanza al lume attraverso sistemi di trasporto. Il riassorbimento la riporta verso il sangue. Il volume di urina, da solo, non descrive quanto farmaco venga eliminato.\n\nL’inibizione di una via secretoria può ridurre la clearance renale di un substrato. Il contributo dipende da quanto quella via conti rispetto a filtrazione, altre vie di trasporto e metabolismo. Condividere un trasportatore segnala una possibilità da esaminare, non garantisce una competizione clinicamente rilevante a qualsiasi concentrazione.\n\nPer alcuni acidi e basi deboli il pH del fluido tubulare modifica la ionizzazione e quindi il riassorbimento passivo. Il principio richiede però caratteristiche chimiche e cinetiche compatibili; non vale allo stesso modo per tutti i farmaci. La figura spiega un processo fisiologico e non propone modificazioni del pH urinario o procedure per trattare un’intossicazione."
    },
    {
      "id": "legame-proteico",
      "title": "Spiazzamento: frazione libera e concentrazione libera non coincidono",
      "refs": [
        "C",
        "R"
      ],
      "text": "La frazione libera indica quale proporzione del farmaco plasmatico non è legata alle proteine. La concentrazione libera indica invece quanta sostanza non legata è presente per unità di volume. Se cambia la frazione libera ma contemporaneamente cambia la concentrazione totale, le due grandezze non aumentano necessariamente nello stesso modo.\n\nUno spiazzamento può rendere inizialmente disponibile più sostanza non legata. Questa può distribuirsi nei tessuti ed essere eliminata, modificando l’equilibrio successivo. Non basta quindi osservare un elevato legame proteico per prevedere un aumento persistente dell’esposizione libera o della tossicità. Servono informazioni su distribuzione, clearance, durata e altri meccanismi concomitanti.\n\nLe associazioni possono intervenire contemporaneamente su legame, metabolismo, escrezione e risposta del tessuto. Attribuire un evento al solo spiazzamento senza verificare questi passaggi semplifica troppo la causalità. Un livello totale apparentemente basso o invariato deve essere interpretato nel contesto: non è automaticamente una misura della quantità farmacologicamente disponibile."
    },
    {
      "id": "microbiota",
      "title": "Microbiota e ricircolo: un’ipotesi non basta a provare un fallimento",
      "refs": [
        "FI",
        "C",
        "CDC"
      ],
      "text": "I microrganismi intestinali possono trasformare alcune sostanze o deconiugare metaboliti riversati nella bile. La sostanza liberata può essere riassorbita e contribuire al ricircolo enteroepatico. Cambiare il microbiota può quindi modificare un passaggio farmacocinetico, ma l’entità e il significato dipendono dalla molecola, dall’esposizione e dal contributo effettivo di quel processo.\n\nUn esempio richiede una correzione rispetto a una generalizzazione frequente nelle fonti didattiche: non tutti gli antibiotici ad ampio spettro riducono l’efficacia dei contraccettivi ormonali combinati. Le raccomandazioni CDC 2024 indicano che la maggior parte non ne modifica l’efficacia e distinguono rifampicina e rifabutina, per le quali la riduzione dell’efficacia è un problema specifico.\n\nLa possibilità di interferire con il microbiota non dimostra dunque, da sola, una perdita di protezione contraccettiva. Non si trasferisce un meccanismo plausibile in una regola clinica di classe. Questo confronto riguarda contraccettivi combinati e fonti statunitensi: non sostituisce la valutazione della formulazione e delle circostanze individuali."
    },
    {
      "id": "pompelmo",
      "title": "Pompelmo e preparati vegetali: stesso alimento, vie differenti",
      "refs": [
        "K",
        "FDA-GRAPE"
      ],
      "text": "Il pompelmo illustra perché «naturale» non significhi farmacologicamente inattivo. Componenti del succo possono interferire con il metabolismo intestinale: riducendo l’attività di CYP3A, può arrivare nel sangue più farmaco immodificato per alcuni substrati orali. L’entità varia con prodotto, quantità, preparazione e caratteristiche individuali; non esiste un incremento percentuale unico applicabile a tutte le statine o a tutti i medicinali.\n\nIl verso dell’interazione non è sempre un aumento. La FDA descrive per fexofenadina una riduzione dell’ingresso legata a trasportatori intestinali. Lo stesso alimento può quindi incontrare farmaci che dipendono da passaggi differenti e produrre direzioni diverse dell’esposizione.\n\nAnche i preparati di iperico richiedono attenzione alla composizione e alla via coinvolta. L’attività di induzione dipende anche dalla preparazione. Per ricostruire le esposizioni è utile distinguere principio attivo, alimento, estratto e integratore, evitando di sostituire il nome generico della pianta alla caratterizzazione del prodotto realmente utilizzato."
    },
    {
      "id": "booster",
      "title": "Il potenziatore farmacocinetico modifica l’ospite, non il bersaglio virale",
      "refs": [
        "DAV",
        "EMA-TYBOST"
      ],
      "text": "Un’interazione farmacocinetica può essere ricercata deliberatamente. Cobicistat, nell’impiego descritto dall’EMA per Tybost, inibisce CYP3A e rallenta la trasformazione di specifici antiretrovirali, atazanavir o darunavir. Aumenta così l’esposizione al medicinale associato; non tratta direttamente HIV attraverso un proprio blocco della replicazione virale.\n\nQuesta distinzione separa il bersaglio dell’inibitore metabolico da quello dell’antivirale. Nel corso il concetto di booster introduce un punto utile, ma la metafora del farmaco «metabolizzato prima» o espulso «al posto» dell’altro è insufficiente: gli enzimi non seguono una coda prestabilita. È necessario descrivere l’inibizione della via e le evidenze dell’associazione specifica.\n\nModificare una via dell’ospite può influenzare anche altri medicinali. Il beneficio cercato per l’antiretrovirale non elimina la possibilità di ulteriori interazioni. Non ne consegue che ogni inibitore sia utilizzabile come booster, né che ritonavir e cobicistat siano intercambiabili in qualsiasi regime. Il modello spiega il principio; la scelta delle associazioni richiede il contesto clinico e regolatorio."
    },
    {
      "id": "tempi-evidenze",
      "title": "Dalla plausibilità alla rilevanza: ricostruire la sequenza",
      "refs": [
        "C",
        "K"
      ],
      "text": "Una buona spiegazione collega il cambiamento del trattamento al cambiamento di esposizione e poi all’esito osservato. La cronologia deve essere compatibile con il meccanismo: l’inibizione reversibile, l’inattivazione enzimatica e l’induzione non condividono necessariamente gli stessi tempi. Anche l’emivita del substrato e la persistenza dei metaboliti possono ritardare il nuovo equilibrio.\n\nUn dato in vitro dimostra un fenomeno nelle condizioni sperimentali; non dimostra automaticamente che le concentrazioni necessarie si raggiungano nell’organismo. Uno studio farmacocinetico in persone aggiunge informazioni sull’esposizione, ma può non misurare direttamente il beneficio o il danno clinico. Segnalazioni, studi e informazioni di prodotto rispondono a domande diverse e vanno letti come tali.\n\nLa riconciliazione delle terapie comprende anche sospensioni recenti, cambi di formulazione, prodotti da banco e preparati vegetali. Funzione renale ed epatica, malattia e variabilità individuale modificano il contesto. Un controllo delle interazioni sostiene questo ragionamento; un avviso automatico, da solo, non attribuisce causalità e non decide una terapia."
    },
    {
      "title": "Metabolita attivo non significa necessariamente profarmaco",
      "text": "Un farmaco può essere già attivo e generare altre sostanze attive, oppure richiedere una trasformazione per acquisire l’attività. Ozanimod appartiene al primo caso: il parentale e i principali metaboliti CC112273 e CC1084037 condividono attività S1P₁/S1P₅. Non basta sapere che esiste un metabolita attivo per classificare una sostanza come profarmaco.",
      "id": "ozanimod-1",
      "refs": [
        "OZA-PRIOR"
      ]
    },
    {
      "title": "Formazione ed eliminazione possono cambiare in modi differenti",
      "text": "L’effetto di un’interazione dipende dal passaggio coinvolto: formare un metabolita attivo è diverso dall’eliminarlo. Il RCP di ozanimod sconsiglia MAO-inibitori e induttori CYP2C8, ma richiede cautela con forti inibitori CYP2C8. Le vie multiple impediscono di ridurre tutta la molecola a una sola coppia farmaco–enzima.",
      "id": "ozanimod-2",
      "refs": [
        "OZA-PRIOR"
      ]
    },
    {
      "title": "L’emivita richiede il nome della sostanza e del modello",
      "text": "Il RCP riporta circa 21 ore per l’emivita plasmatica media di ozanimod e circa 11 giorni per l’emivita efficace di CC112273, stimata da modello in SM recidivante e molto variabile. Non sono due stime intercambiabili della stessa quantità: la persistenza del metabolita aiuta a capire perché il parentale da solo non descrive tutta l’esposizione attiva, senza predire il recupero clinico.",
      "id": "ozanimod-3",
      "refs": [
        "OZA-PRIOR"
      ]
    }
  ],
  "checks": [
    {
      "question": "Due farmaci sono substrati dello stesso CYP: è dimostrata un’interazione clinicamente importante?",
      "answer": "No. Servono concentrazioni, capacità di inibire la via, quota di eliminazione coinvolta ed evidenze pertinenti. Condividere il nome di un enzima non quantifica l’interazione."
    },
    {
      "question": "Il picco si riduce e compare più tardi: è necessariamente diminuita l’AUC?",
      "answer": "No. Può essere cambiata soprattutto la velocità di assorbimento. Occorre osservare l’intera curva nell’intervallo appropriato."
    },
    {
      "question": "Perché la spiegazione di ciprofloxacina con un antiacido non può essere ridotta sempre al pH?",
      "answer": "L’antiacido può contenere cationi che formano complessi nel lume. Il componente e il meccanismo vanno distinti dalla semplice soppressione acida."
    },
    {
      "question": "Perché la sospensione di un induttore può ancora modificare l’esposizione nei giorni successivi?",
      "answer": "La capacità metabolica dipende anche dal ricambio degli enzimi e dal tempo necessario al substrato per raggiungere un nuovo equilibrio. Non segue soltanto la concentrazione dell’induttore."
    },
    {
      "question": "Inibire una captazione epatica aumenta necessariamente il farmaco nell’epatocita?",
      "answer": "No. Può aumentare la permanenza nel sangue e ridurre l’ingresso nella cellula. Il plasma e il sito d’azione sono compartimenti distinti."
    },
    {
      "question": "Se aumenta la frazione libera, la concentrazione libera resta sicuramente aumentata?",
      "answer": "No. Distribuzione ed eliminazione possono modificare la concentrazione totale e quella libera. La proporzione non basta a prevedere il nuovo equilibrio."
    },
    {
      "question": "Ogni antibiotico ad ampio spettro riduce l’efficacia della contraccezione combinata?",
      "answer": "No. La generalizzazione non è sostenuta dai criteri CDC 2024. Rifampicina/rifabutina sono distinte dalla maggior parte degli antibiotici ad ampio spettro; il contesto del prodotto resta necessario."
    },
    {
      "question": "Cobicistat esercita il potenziamento perché viene sempre metabolizzato prima dell’antivirale?",
      "answer": "No. Il meccanismo pertinente è l’inibizione di CYP3A; non una coda temporale obbligata fra substrati. Cobicistat e l’antivirale intervengono su bersagli differenti."
    },
    {
      "question": "Perché il pompelmo può produrre direzioni opposte dell’esposizione?",
      "answer": "Per alcuni farmaci prevale l’inibizione del metabolismo intestinale; per altri l’interferenza con trasportatori che sostengono l’assorbimento. La via coinvolta deve essere identificata."
    },
    {
      "question": "Un aumento dell’AUC dimostra da solo la causa di un evento clinico?",
      "answer": "No. Documenta un cambiamento di esposizione nelle condizioni misurate. Causalità ed esito richiedono cronologia, relazione esposizione–risposta e valutazione delle spiegazioni alternative."
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012. Testo PDF 79–80, 90–91 e 94–95; 90–91 già lette e rilette. PDF 94 controllata visivamente; altre figure non ricontrollate. Tabelle storiche non importate come elenco clinico attuale."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "8ª italiana 2016. Testo PDF 174–175, 183–184, 197–199 e 210–211; soltanto 198 nuova lettura, le altre rilette rispetto ai registri precedenti. Assorbimento, legame, compartimenti, metabolismo ed esposizione; figure non ricontrollate in questo lotto."
    },
    {
      "id": "C",
      "title": "Clementi e Fumagalli · Farmacologia generale e molecolare",
      "detail": "4ª, 2012, capitolo 55, PDF 700–707. 703–706 già lette e rilette; nuove 700–702 e 707. Immagini 702 e 704 controllate; numerazione stampata 709 e 711. Tabelle con errori o contenuti storici escluse come elenco attuale."
    },
    {
      "id": "FI",
      "title": "Farmaco I · Slide di Loredana Serpe",
      "detail": "AA 2025–26, testo estraibile PDF 221–261; 239 già letta. Controllate visivamente 230,234,238,243,244. Le altre figure restano non verificate; nessuna lettura integrale del corso."
    },
    {
      "id": "SFI",
      "title": "Farmaco I · Sbobina della lezione 6 di Loredana Serpe",
      "detail": "Raccolta PDF 115–130, pagine interne 1–16 e stampate 110–125; 115 controllata visivamente. Data stampata 10/10/2025, cronologia discordante con la lezione 5: conservata senza correzioni congetturali.128–130 comprendono equivalenti e biosimilari, fuori dall’ampliamento presente."
    },
    {
      "id": "COL",
      "title": "Farmaco II · Collino, lezione 8 del 14/11/2025",
      "detail": "Testo PDF 2–3, equivalenti a raccolta 132–133, contati una volta. Differenze farmacocinetiche delle statine; tabelle non controllate visivamente e raccomandazioni cliniche non trasferite."
    },
    {
      "id": "DAV",
      "title": "Farmaco II · D’Avolio, lezione 15 del 15/01/2026",
      "detail": "Testo PDF 3–4, equivalenti a raccolta 286–287, contati una volta. Concetto di potenziamento metabolico riconciliato con EMA. Affermazioni su TAF/TDF, altri antivirali e intervalli long-acting escluse: richiedono revisione dedicata."
    },
    {
      "id": "FDA-CYP",
      "title": "FDA · Esempi di interazioni con CYP e trasportatori",
      "detail": "Consultati introduzione, definizioni delle tabelle 2–3 e note sui prodotti variabili il 26/10/2026. Elenco non esaustivo; non costituisce un calcolatore clinico.",
      "url": "https://www.fda.gov/drugs/drug-interactions-labeling/healthcare-professionals-fdas-examples-drugs-interact-cyp-enzymes-and-transporter-systems"
    },
    {
      "id": "CIPRO",
      "title": "CIPRO · Informazione di prodotto USA, Bayer/DailyMed",
      "detail": "Versione 32, aggiornata 02/03/2026. Consultata §2.4 sui cationi multivalenti e sulla formulazione orale; non l’intero documento. Contesto USA, accesso 26/10/2026.",
      "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=888dc7f9-ad9c-4c00-8d50-8ddfd9bd27c0&version=32"
    },
    {
      "id": "EDURANT",
      "title": "Edurant 25 mg compresse · RCP britannico Janssen-Cilag",
      "detail": "emc, aggiornato 13/04/2026. Consultati §4.3 e passaggi §4.5 su inibitori di pompa e pH gastrico. Il PDF EMA non era recuperabile; non dichiarato letto. Accesso 26/10/2026.",
      "url": "https://www.medicines.org.uk/emc/product/4968/smpc"
    },
    {
      "id": "CDC",
      "title": "CDC · U.S. Medical Eligibility Criteria 2024",
      "detail": "Appendice D, contraccettivi ormonali combinati: passaggi su antibiotici ad ampio spettro e rifampicina/rifabutina. Consultati 26/10/2026, non l’intera linea guida; nessuna posologia trasferita.",
      "url": "https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html"
    },
    {
      "id": "FDA-GRAPE",
      "title": "FDA · Pompelmo e medicinali",
      "detail": "Pagina consultata 26/10/2026: meccanismi intestinali, variabilità, esempio fexofenadina e limiti delle generalizzazioni di classe.",
      "url": "https://www.fda.gov/consumers/consumer-updates/grapefruit-juice-and-some-drugs-dont-mix"
    },
    {
      "id": "EMA-TYBOST",
      "title": "EMA · Tybost, cobicistat",
      "detail": "Panoramica ufficiale: meccanismo, finalità del potenziamento e limiti, consultati 26/10/2026. Pagina aggiornata 14/02/2023; accesso odierno non equivale a nuova revisione del documento.",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/tybost"
    },
    {
      "id": "OZA-PRIOR",
      "title": "Caso ozanimod · Contenuto già pubblicato",
      "detail": "Conservate le tre sezioni del lotto precedente e i relativi dati. Sintesi selettiva: Rang & Dale, 8ª ed. italiana 2016, PDF 195–196, e Serpe 2025–26, PDF 239, per principi generali. Caso ozanimod: RCP EMA Zeposia, file 03/03/2026, sezioni selezionate consultate 24/10/2026. Letture e limiti in data/ozanimod-reading.json; non revisione clinica indipendente. Nessuna nuova lettura del RCP di ozanimod dichiarata in questo lotto."
    }
  ],
  "drugs": [
    "clopidogrel",
    "metoprololo",
    "eplerenone",
    "ozanimod"
  ],
  "targets": [
    "CYP2C19",
    "CYP2D6",
    "S1PR5"
  ],
  "relatedExistingChapterIds": [
    "modelli-pk",
    "farmacogenomica",
    "sicurezza-farmaco",
    "desensibilizzazione-tolleranza"
  ],
  "coverage": "Letture mirate e deduplicate, non interi libri o corsi: 84 pagine di testo estraibile consultate, di cui 69 nuove rispetto ai registri; 9 pagine controllate visivamente. Tre sezioni preesistenti su ozanimod conservate. Meccanismi e confronti selettivi, non catalogo esaustivo delle interazioni o istruzioni per modificare terapie. Revisione clinica indipendente non effettuata.",
  "wordCount": 3301,
  "moleculeLinks": [
    {
      "id": "CHEMBL8",
      "label": "CIPROFLOXACIN"
    },
    {
      "id": "CHEMBL175691",
      "label": "RILPIVIRINE"
    },
    {
      "id": "CHEMBL2095208",
      "label": "COBICISTAT"
    },
    {
      "id": "CHEMBL374478",
      "label": "RIFAMPIN"
    },
    {
      "id": "CHEMBL1064",
      "label": "SIMVASTATIN"
    },
    {
      "id": "CHEMBL1487",
      "label": "ATORVASTATIN"
    },
    {
      "id": "CHEMBL914",
      "label": "FEXOFENADINE"
    },
    {
      "id": "CHEMBL1751",
      "label": "DIGOXIN"
    }
  ]
});
