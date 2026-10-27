// Original educational synthesis; bounded provenance in the reading ledger.
export const THEORY_BIOEQUIVALENCE = Object.freeze({
  "id": "formulazioni-sali-bioequivalenza",
  "volume": 3,
  "title": "Sali, formulazioni e bioequivalenza",
  "lead": "Dalla struttura chimica alla curva plasmatica: capire che cosa cambia fra preparazioni, come si dimostra una prestazione comparabile e perché media, intervallo e contesto non possono essere separati.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-27",
  "readingManifest": "./data/formulazioni-sali-bioequivalenza-reading.json",
  "sections": [
    {
      "id": "tre-identita",
      "title": "Molecola, preparazione e medicinale: tre domande diverse",
      "refs": [
        "R",
        "FI"
      ],
      "text": "Il nome di un principio attivo non descrive da solo ciò che viene somministrato. La molecola identifica una specie chimica; la preparazione stabilisce come quella specie è presentata e liberata; il medicinale comprende un prodotto con caratteristiche, indicazioni e istruzioni autorizzate. Confondere questi livelli porta a trattare come identiche compresse che condividono il nome della sostanza ma hanno vie o modalità di rilascio differenti.\n\nIl percorso da ricostruire è concreto: quantità contenuta, liberazione dalla forma farmaceutica, dissoluzione, attraversamento delle membrane, ingresso nella circolazione e arrivo al bersaglio. Ogni passaggio pone una domanda diversa. Un’analisi chimica della compressa non misura l’esposizione plasmatica; una curva plasmatica non descrive, da sola, l’intera risposta clinica.\n\nLa bioequivalenza si colloca fra questi livelli: studia la prestazione di prodotti definiti in condizioni definite. Per capirla bisogna prima sapere quali elementi sono confrontabili e quali differenze richiedono ulteriori prove."
    },
    {
      "id": "sali-massa",
      "title": "Un sale cambia la massa dichiarata: leggere la specie di riferimento",
      "refs": [
        "FI",
        "EMA-GEN"
      ],
      "text": "La formazione di un sale associa la specie ionizzata a un controione. Può essere utile per ottenere proprietà di stabilità o lavorabilità adatte alla preparazione. La massa del sale comprende componenti che non coincidono con la sola porzione farmacologicamente attiva: due numeri in milligrammi sono confrontabili soltanto dopo aver identificato a quale specie si riferiscono.\n\nIn un esempio puramente chimico, un sale con una sola unità della base per formula contiene una frazione massica della base pari al rapporto fra le rispettive masse molari. La conversione deve però considerare stechiometria, eventuale acqua di cristallizzazione e modo in cui il prodotto dichiara la quantità. Non è una regola per sostituire medicinali.\n\nNell’atlante metoprololo, tartrato e succinato hanno identità collegate ma distinte. Il collegamento aiuta a riconoscere la famiglia; non dimostra che due confezioni abbiano la stessa dose dichiarata, lo stesso rilascio o istruzioni intercambiabili. Per questi aspetti occorre il documento del prodotto preciso."
    },
    {
      "id": "stereoisomeri",
      "title": "La stessa formula può presentarsi al bersaglio in modo diverso",
      "refs": [
        "K"
      ],
      "text": "Gli enantiomeri sono immagini speculari non sovrapponibili. Un ambiente biologico chirale può riconoscerli diversamente: la disposizione spaziale dei gruppi che interagiscono con una proteina conta quanto la loro presenza. Per questo la stessa formula molecolare non garantisce la stessa affinità, attività o destinazione metabolica.\n\nL’esempio didattico del carvedilolo in Katzung mostra che la stereoselettività dipende dal bersaglio: una differenza marcata nell’interazione con i recettori beta non implica una differenza identica per ogni altro recettore. Anche enzimi e trasportatori possono distinguere gli enantiomeri. Due forme potrebbero quindi differire sia nella farmacodinamica sia nella farmacocinetica.\n\nUna miscela racemica contiene entrambi gli enantiomeri in proporzione equimolare; un singolo enantiomero non è semplicemente la stessa preparazione con metà della dose. La superiorità clinica dell’una o dell’altra forma richiede evidenze proprie. Le considerazioni storiche del testo sulla disponibilità commerciale degli isomeri non sono usate come descrizione del mercato attuale."
    },
    {
      "id": "dissoluzione",
      "title": "Dalla particella alla soluzione, poi alla membrana",
      "refs": [
        "R"
      ],
      "text": "Una compressa può disgregarsi senza che tutto il principio attivo sia già disciolto. La dissoluzione porta le molecole in soluzione; la permeazione le trasferisce attraverso una barriera. Se il primo passaggio è lento, una membrana molto permeabile non basta a rendere rapido l’assorbimento: manca il materiale disciolto disponibile per attraversarla.\n\nDimensioni delle particelle, superficie esposta, ambiente acquoso e caratteristiche della preparazione possono modificare questo passaggio. La stessa quantità totale di sostanza può quindi produrre profili diversi. La figura storica sulla digossina riportata da Rang & Dale illustra proprio perché il contenuto chimico non esaurisca la prestazione di una formulazione. Non è una prova contro gli equivalenti oggi autorizzati.\n\nIl ragionamento è quello di una sequenza di processi: accelerare una tappa cambia poco se la tappa limitante è un’altra. Per interpretare una differenza bisogna localizzarla, evitando di attribuire automaticamente ogni variazione di concentrazione al recettore o al metabolismo."
    },
    {
      "id": "eccipienti",
      "title": "Gli eccipienti svolgono funzioni: non sono una categoria indistinta",
      "refs": [
        "FI",
        "M9"
      ],
      "text": "Un eccipiente può contribuire a rendere stabile, comprimibile, disperdibile o accettabile una preparazione. Non essere il principio attivo terapeutico non significa essere irrilevante in qualunque quantità o contesto. Due prodotti possono differire nella composizione senza differire in modo clinicamente significativo nella prestazione; questa conclusione, però, deriva dalla valutazione del prodotto.\n\nICH M9 considera la possibilità che gli eccipienti influenzino assorbimento, motilità, solubilità o permeabilità. La valutazione dipende da sostanza, quantità e meccanismo, con condizioni più restrittive in alcune classi biofarmaceutiche.\n\nÈ utile separare due problemi. Una sensibilità individuale a un componente riguarda la tollerabilità di quella preparazione; una modifica dell’assorbimento riguarda la prestazione biofarmaceutica. Il primo problema non dimostra che tutti i generici siano meno efficaci; il secondo non si risolve guardando soltanto colore e forma della compressa. L’elenco degli eccipienti e le avvertenze del prodotto servono a identificare la differenza concreta."
    },
    {
      "id": "rilascio",
      "title": "Rilascio immediato, prolungato e ritardato",
      "refs": [
        "R"
      ],
      "text": "Rilascio immediato non significa assorbimento istantaneo: la sostanza deve ancora dissolversi, raggiungere la sede di assorbimento e attraversare le membrane. Una formulazione a rilascio prolungato distribuisce invece la liberazione nel tempo; una a rilascio ritardato rinvia l’inizio della liberazione. Le due strategie non sono sinonimi.\n\nLa modificazione del rilascio può cambiare il picco, il momento in cui compare e l’oscillazione delle concentrazioni. L’area complessiva potrebbe rimanere simile oppure cambiare, secondo la quantità effettivamente disponibile. Ne segue che una stessa AUC non rende automaticamente sovrapponibili tutti gli aspetti temporali dell’esposizione.\n\nLa formulazione è quindi parte dell’informazione farmacologica. Il nome del principio attivo e la sua emivita non bastano a ricostruire l’intervallo di somministrazione o a decidere se una preparazione possa essere divisa o frantumata. Queste manipolazioni richiedono istruzioni specifiche: il modello teorico non le autorizza."
    },
    {
      "id": "biodisponibilita",
      "title": "Biodisponibilità assoluta e relativa",
      "refs": [
        "R",
        "C"
      ],
      "text": "La biodisponibilità sistemica riguarda l’arrivo della specie considerata nella circolazione generale. Per confrontare una somministrazione extravascolare con quella endovenosa, in condizioni di cinetica lineare e clearance confrontabile, si può rapportare l’AUC normalizzata per la dose. La normalizzazione è indispensabile quando le dosi differiscono.\n\nIl confronto fra due preparazioni extravascolari fornisce invece una biodisponibilità relativa. Se entrambe lasciano arrivare soltanto una frazione della dose, un rapporto vicino a uno non significa che la biodisponibilità assoluta sia del 100%. Significa che, nelle condizioni appropriate del confronto, le esposizioni sono vicine.\n\nLa quantità assorbita dall’intestino e quella arrivata nel sangue sistemico possono differire per il metabolismo presistemico. Quando si interpreta un’AUC bisogna dunque mantenere costanti, o considerare esplicitamente, dose, specie misurata e processi di eliminazione. La formula è un modello di bilancio, non un modo per dedurre tutto da una sola misura.",
      "formula": "F assoluta = (AUC extravascolare / dose extravascolare) ÷ (AUC endovenosa / dose endovenosa) · ipotesi: cinetica lineare e clearance confrontabile"
    },
    {
      "id": "parametri",
      "title": "AUC, Cmax e Tmax rispondono a domande differenti",
      "refs": [
        "R",
        "C",
        "M13A"
      ],
      "text": "L’AUC riassume l’esposizione nel tratto di curva considerato. Cmax è la concentrazione massima osservata; Tmax è il tempo al quale si osserva quel massimo. Una curva stretta e alta e una curva più larga e bassa possono avere la stessa area. Per descriverle non basta un solo numero.\n\nLa Cmax osservata dipende anche dalla distribuzione dei prelievi: un campionamento troppo diradato può perdere il picco. Analogamente, l’area misurata fino all’ultimo campione e quella estrapolata fino all’infinito non sono la stessa grandezza. Prima di confrontare due valori occorre leggere quale intervallo e quale metodo li hanno prodotti.\n\nNel confronto ordinario a dose singola di ICH M13A, AUC fino all’ultimo campione e Cmax sono parametri primari. Tmax non riceve automaticamente gli stessi limiti: quando l’esposizione precoce è clinicamente rilevante possono servire parametri aggiuntivi. La vecchia formulazione che applica indistintamente 80–125 a ogni parametro è quindi fuorviante."
    },
    {
      "id": "ponte",
      "title": "Perché studiare l’esposizione può sostenere l’equivalenza",
      "refs": [
        "K",
        "C",
        "EMA-GEN"
      ],
      "text": "Per un medicinale di riferimento sono già disponibili conoscenze sull’attività della sostanza. Lo sviluppo di un equivalente collega il nuovo prodotto a quelle evidenze attraverso requisiti di qualità e comparabilità. L’assenza della ripetizione di tutti gli studi dell’originatore non significa assenza di valutazione.\n\nIl ragionamento farmacologico è un ponte: se il principio attivo e il contesto di confronto sono appropriati, dimostrare una prestazione biofarmaceutica comparabile permette di utilizzare conoscenze già acquisite. Il ponte deve essere adeguato alla domanda. Non basta confrontare il nome commerciale, né si può trasferire lo stesso ragionamento senza adattamenti a ogni via o sistema di rilascio.\n\nLa qualità della fabbricazione resta un requisito. La decisione di autorizzazione riguarda un medicinale definito, non una sostanza astratta o qualunque preparato che ne porti il nome. Questo evita due errori opposti: pretendere che ogni equivalente riparta da zero e pensare che non debba dimostrare nulla."
    },
    {
      "id": "disegno",
      "title": "Il confronto incrociato separa prodotto e persona",
      "refs": [
        "SFI",
        "C"
      ],
      "text": "In uno studio incrociato ogni partecipante riceve i prodotti in periodi differenti. Il confronto sfrutta il fatto che molte caratteristiche della persona restano relativamente stabili fra i periodi. La sequenza viene assegnata secondo il disegno dello studio, non scegliendo sistematicamente prima il riferimento per tutti.\n\nFra le somministrazioni occorre evitare che il trattamento precedente condizioni quello successivo: il washout serve a limitare il trascinamento. Anche alimentazione, tempi dei prelievi e modalità di assunzione possono influenzare il risultato. Standardizzare le condizioni riduce il rischio di attribuire al prodotto ciò che dipende dal contesto.\n\nIl disegno incrociato non è sempre praticabile. Persistenza prolungata, sicurezza e caratteristiche della popolazione possono richiedere soluzioni diverse. Inoltre, la variabilità entro la stessa persona non scompare: è proprio parte dell’incertezza che l’analisi deve stimare. Un confronto ben controllato non equivale a sostenere che tutte le persone avranno la stessa concentrazione."
    },
    {
      "id": "criterio",
      "title": "Il criterio ordinario riguarda un intervallo, non solo una media",
      "refs": [
        "M13A",
        "FI"
      ],
      "text": "Nel caso ordinario trattato da ICH M13A, l’intero intervallo di confidenza al 90% del rapporto fra medie geometriche test/riferimento deve rientrare in 80,00–125,00% per i parametri primari. L’analisi utilizza dati trasformati in logaritmi. Il laboratorio qui sotto rappresenta soltanto questo criterio semplificato per AUC e Cmax.\n\nIl punto centrale mostra una stima; la barra mostra la precisione con cui viene stimata. Una media vicina al riferimento con una barra molto ampia non risolve la domanda di equivalenza. È come misurare una lunghezza con un righello troppo impreciso: un valore centrale plausibile non elimina l’incertezza ai suoi lati.\n\nLa conclusione va espressa correttamente. Se una barra supera il limite, il criterio del modello non è soddisfatto. Questo risultato non quantifica da solo una perdita di efficacia o un danno clinico. Né un solo grafico riassume tutte le verifiche necessarie per autorizzare un prodotto.",
      "bioequivalenceLab": true
    },
    {
      "id": "rapporti",
      "title": "Perché 80 e 125: ragionare sui rapporti",
      "refs": [
        "MATH"
      ],
      "text": "Il rapporto dipende dall’ordine del confronto. Se il test ha un valore pari a 0,80 volte quello del riferimento, invertendo il confronto si ottiene 1/0,80 = 1,25. I due estremi sono reciproci; su una scala logaritmica hanno uguale distanza dal valore uno. Non sono una fascia aritmetica simmetrica di più o meno venti punti intorno a cento.\n\nLa media geometrica deriva dal prodotto dei valori, o equivalentemente dalla media dei loro logaritmi riportata sulla scala originale. Per capire la differenza, consideriamo due rapporti ipotetici: 0,80 e 1,25. La loro media aritmetica è 1,025, mentre la media geometrica è uno, perché il prodotto è uno.\n\nQuesto esempio serve a comprendere una trasformazione matematica; non ricostruisce l’analisi di uno studio reale. Nel modello interattivo anche i limiti sintetici sono costruiti simmetricamente sulla scala logaritmica, così il punto e la barra sono coerenti con la rappresentazione scelta."
    },
    {
      "id": "incertezza",
      "title": "Equivalenza e assenza di differenza non coincidono",
      "refs": [
        "C",
        "MATH"
      ],
      "text": "Una domanda di differenza chiede se i dati siano compatibili con un valore nullo o con un rapporto pari a uno. Una domanda di equivalenza chiede invece se l’incertezza sia abbastanza contenuta entro limiti prestabiliti. Uno studio poco preciso può non dimostrare una differenza e, contemporaneamente, non dimostrare l’equivalenza.\n\nNel caso ipotetico «Media vicina, studio impreciso» il centro della barra è 100%, ma gli estremi escono dalla regione accettata. Nel caso «Intervalli contenuti», invece, una stima può essere leggermente diversa da 100% e soddisfare comunque il criterio. Non è necessario che ogni punto centrale cada esattamente su cento.\n\nL’ampiezza di un intervallo dipende dalla variabilità, dalle osservazioni disponibili e dal modello statistico. Non rappresenta la percentuale di compresse difettose né la distribuzione delle risposte di tutti i pazienti. Per leggere il grafico occorre distinguere il valore stimato, la sua precisione e il fenomeno biologico al quale si riferisce."
    },
    {
      "id": "due-parametri",
      "title": "Due parametri: un risultato favorevole non compensa l’altro",
      "refs": [
        "MATH",
        "R"
      ],
      "text": "Supponiamo che un prodotto ipotetico dia un’AUC molto simile al riferimento ma un picco sensibilmente diverso. Le informazioni non si contraddicono: possono descrivere un ingresso distribuito diversamente nel tempo. Il laboratorio permette di vedere perché una conclusione basata soltanto sull’area perderebbe questa differenza.\n\nOgni riga del grafico ha quindi il proprio intervallo. Nel caso «AUC sì, picco no», la riga dell’area soddisfa il criterio illustrato mentre quella della Cmax supera il limite superiore. Il risultato complessivo del modello resta negativo; non si fa la media dei due giudizi.\n\nI numeri sono inventati e non descrivono prodotti in commercio. La funzione didattica è allenare una lettura ordinata: identificare il parametro, guardare entrambi gli estremi, poi formulare la conclusione consentita. Non è un confronto terapeutico fra marche e non fornisce una dose alternativa."
    },
    {
      "id": "ventipercento",
      "title": "Il 20% non è una licenza a mettere meno farmaco",
      "refs": [
        "FI",
        "SFI",
        "EMA-GEN"
      ],
      "text": "La quantità dichiarata nella preparazione e la comparazione dell’esposizione sono controlli diversi. Interpretare i limiti della bioequivalenza come permesso di riempire una compressa con il venti per cento di principio attivo in meno confonde questi due livelli. Il generico contiene la stessa quantità di principio attivo prevista per il confronto con il riferimento; la qualità del prodotto viene valutata separatamente.\n\nNeppure il limite superiore significa che ogni persona riceverà sistematicamente il venticinque per cento di esposizione in più. Il criterio illustrato riguarda l’incertezza di una stima di studio, non un intervallo assegnato a ogni singolo paziente.\n\nLe espressioni abbreviate delle lezioni sono utili solo se si ricostruisce che cosa stanno abbreviando. «Differenza massima del 20%» perde sia la reciprocità dei limiti sia il ruolo dell’intervallo di confidenza. Nel ripasso conviene sostituirla con una frase che nomini esplicitamente parametro, rapporto e intervallo."
    },
    {
      "id": "condizioni",
      "title": "Pasto, sede di azione e formulazione delimitano il confronto",
      "refs": [
        "R",
        "FI"
      ],
      "text": "Il pasto può modificare svuotamento gastrico, condizioni del lume e incontro fra formulazione e mucosa. Una conclusione ottenuta in un certo contesto alimentare non è una descrizione universale del comportamento di ogni preparazione. Lo stesso vale per una sostanza la cui azione è soprattutto locale: l’esposizione plasmatica può non rappresentare adeguatamente ciò che avviene nella sede bersaglio.\n\nRang & Dale usa l’intestino per mostrare questa distinzione: un farmaco poco assorbito non è necessariamente poco utile quando il bersaglio si trova nel lume. Al contrario, per raggiungere un bersaglio sistemico l’ingresso nella circolazione assume un significato diverso. La domanda da porre è dove debba agire la specie attiva.\n\nPerciò il laboratorio non include medicinali inalatori, topici, a rilascio modificato o ad azione locale. Non perché non possano essere confrontati, ma perché servono criteri e prove adeguati alle loro caratteristiche. L’ambito del modello fa parte della sua spiegazione."
    },
    {
      "id": "eccezioni",
      "title": "Indice terapeutico ristretto e alta variabilità richiedono regole proprie",
      "refs": [
        "EMA-IMPLEMENT"
      ],
      "text": "Le indicazioni europee di attuazione di M13A precisano che le parti pertinenti della precedente linea guida EMA continuano ad applicarsi agli argomenti non coperti, fra cui medicinali a indice terapeutico ristretto, studi replicati con farmaci altamente variabili e disegni complessi. Vanno considerate anche le indicazioni specifiche del prodotto.\n\nIl motivo farmacologico è comprensibile: se il margine fra esposizione utile ed esposizione problematica è piccolo, oppure la variabilità rende inadeguato un disegno semplice, una sola regola generale non basta. Ma questa spiegazione non consente di scegliere autonomamente limiti più larghi o più stretti.\n\nNessun interruttore del laboratorio trasforma un caso ordinario in un caso speciale. Non viene proposta una lista di intere classi da considerare automaticamente a indice terapeutico ristretto. La categoria e il metodo di valutazione devono essere documentati per il contesto interessato; non si deducono dal fatto che una terapia sia cronica o importante."
    },
    {
      "id": "biowaiver",
      "title": "Biowaiver: dimostrare attraverso un percorso appropriato",
      "refs": [
        "M9"
      ],
      "text": "Un biowaiver basato sul sistema BCS sostituisce lo studio di bioequivalenza in vivo con un insieme di prove ammesse in condizioni definite. ICH M9 riguarda determinate forme orali a rilascio immediato con azione sistemica, sostanze di classe I o III e requisiti di dissoluzione e composizione. Esclude dal proprio ambito i medicinali a indice terapeutico ristretto.\n\nIl ragionamento collega due proprietà della sostanza: quanto facilmente si scioglie e quanto facilmente attraversa la barriera intestinale. Le classi I e III condividono elevata solubilità, ma differiscono per permeabilità; questa differenza aiuta a capire perché gli eccipienti non possano essere valutati indiscriminatamente nello stesso modo.\n\nDire «stesso principio attivo, stessi eccipienti» non è una prova sufficiente di ammissibilità. Il biowaiver è una giustificazione scientifica e regolatoria documentata. Non significa assenza di controlli, e il suo schema non si trasferisce automaticamente a una formulazione modificata o a una via differente."
    },
    {
      "id": "confronti-indiretti",
      "title": "Due confronti con il riferimento non sono uno studio diretto A–B",
      "refs": [
        "FI",
        "SFI",
        "MATH"
      ],
      "text": "Dal fatto che A sia stato confrontato con R e B sia stato confrontato con R non si ricava automaticamente un intervallo di confidenza misurato per A contro B. I partecipanti, la variabilità e le stime dei due studi possono differire. Disegnare due barre ai lati opposti del riferimento non produce un nuovo studio clinico.\n\nLa figura didattica sul «bio-creep» nelle slide mostra un problema di ragionamento sui confronti indiretti, ma non misura una frequenza reale di fallimenti terapeutici. La mancata identità matematica fra stime non dimostra che i medicinali equivalenti autorizzati siano sistematicamente non sostituibili.\n\nIl punto utile per lo studio è separare la comparazione statistica, l’autorizzazione del prodotto e la gestione della sostituzione. Un cambio di confezione può richiedere chiarezza sulle istruzioni e sui componenti; una decisione clinica richiede il contesto del paziente. Nessuna di queste domande si risolve inventando una percentuale di rischio a partire dagli estremi di un disegno."
    },
    {
      "id": "trasparenza",
      "title": "Autorizzazione, prezzo di riferimento e informazione al paziente",
      "refs": [
        "AIFA-LIST",
        "FI"
      ],
      "text": "Le liste di trasparenza AIFA riportano medicinali e prezzi di riferimento secondo criteri di inclusione specifici. Sono uno strumento relativo alla rimborsabilità e alla dispensazione, non un inventario universale di qualunque medicinale autorizzato né una graduatoria di efficacia proporzionale al prezzo.\n\nPer leggere una voce occorre mantenere insieme principio attivo, quantità, forma, via e confezione. Due prezzi affiancati fuori dal loro raggruppamento possono suggerire un confronto che l’elenco non sta facendo. Anche una ricerca nell’atlante per famiglia chimica ha uno scopo diverso dall’identificazione della confezione dispensata.\n\nL’informazione al paziente è parte della continuità della terapia: riconoscere un nuovo aspetto della compressa o una nuova confezione evita equivoci e duplicazioni. Questo principio comunicativo non dimostra né nega l’equivalenza. Aiuta a usare correttamente una decisione fondata sui prodotti autorizzati e sulle istruzioni pertinenti."
    },
    {
      "id": "biosimilari",
      "title": "Perché il biosimilare non è il generico di una piccola molecola",
      "refs": [
        "FI"
      ],
      "text": "Per un biologico la comparabilità comprende caratteristiche strutturali, attività funzionale e variabilità del processo produttivo. Il solo rapporto fra due AUC non riassume questa valutazione. Il termine biosimilare richiama un insieme di evidenze rispetto a un riferimento, non una richiesta di identità assoluta in ogni microcaratteristica.\n\nLa distinzione evita di trattare come intercambiabili i percorsi di sviluppo delle piccole molecole e delle proteine complesse. Non implica che il biosimilare sia meno efficace: descrive il tipo di dimostrazione necessario. Anche l’importanza dei dati clinici va letta nel contesto della totalità delle evidenze e delle indicazioni regolatorie aggiornate.\n\nIl capitolo «Anticorpi monoclonali e farmaci biologici», collegato più avanti, approfondisce struttura, Fc, produzione e comparabilità. Qui basta riconoscere il confine: il grafico AUC/Cmax è un esercizio di bioequivalenza ordinaria e non un valutatore di biosimilarità."
    },
    {
      "id": "switch",
      "title": "Biosimilari: aggiornare le indicazioni delle lezioni",
      "refs": [
        "AIFA-BIO"
      ],
      "text": "Il Terzo Position Paper AIFA, pubblicato il 29 aprile 2026, considera intercambiabili i biosimilari approvati nell’UE e i rispettivi originatori sia nei pazienti mai trattati sia in quelli già in cura. Le frasi delle vecchie lezioni che suggeriscono un divieto generale di cambio nel paziente stabile non descrivono questa posizione aggiornata.\n\nIl documento raccomanda lo switch informato: nel contesto degli accordi quadro regionali il farmacista acquisisce l’assenso del medico prescrittore, assicura tracciabilità e adeguata informazione al paziente. Restano la responsabilità prescrittiva e l’attuazione regionale.\n\nIntercambiabilità scientifica e procedura concreta di sostituzione sono quindi concetti collegati ma distinti. Non si trasforma una valutazione scientifica in un’autorizzazione al cambio autonomo della terapia, né si mantiene una regola ormai superata soltanto perché compare in una slide. Questa sezione riassume il documento ufficiale; non valuta il trattamento di una persona."
    },
    {
      "id": "caso-integrato",
      "title": "Un caso ragionato: prima identificare, poi confrontare",
      "refs": [
        "MATH",
        "R"
      ],
      "text": "Immaginiamo due confezioni con nomi simili. La prima domanda non è se il prezzo sia uguale: bisogna identificare sostanza, quantità dichiarata, sale, forma, via e tipo di rilascio. Se uno di questi elementi cambia, la differenza deve essere compresa prima di confrontare le curve.\n\nSupponiamo poi di avere due studi ipotetici della stessa tipologia. Il primo riporta soltanto una media dell’AUC pari al riferimento; il secondo riporta AUC e Cmax con intervalli precisi. Il secondo consente una valutazione più informativa. La presenza di più informazioni non rende automaticamente il prodotto migliore: rende più definita la conclusione che possiamo trarre dai dati.\n\nInfine si controlla l’ambito: criterio ordinario o caso speciale, esposizione sistemica o locale, formulazione immediata o modificata. L’ordine del ragionamento evita di partire da un numero apparentemente rassicurante e attribuirgli un significato che il confronto non supporta."
    },
    {
      "id": "limiti-fonti",
      "title": "Che cosa è stato riconciliato e che cosa resta aperto",
      "refs": [
        "K",
        "R",
        "C",
        "FI",
        "SFI"
      ],
      "text": "Questo capitolo collega chimica, formulazione e valutazione dell’esposizione attraverso una sintesi originale. I passaggi selezionati dei libri e del corso sono stati confrontati con documenti EMA, ICH e AIFA: corretti il significato dei limiti numerici, le semplificazioni sul biowaiver e le vecchie indicazioni sul cambio fra biologici.\n\nSono state lette 48 pagine di testo estraibile, comprese tre riletture; sette pagine sono state controllate anche visivamente. Quattro pagine nuove degli appunti riguardano invece l’inizio della lezione sugli antidepressivi e restano fuori da questo capitolo. Non viene dichiarata la lettura integrale di Katzung, degli altri libri o di Farmaco I e II.\n\nI collegamenti ai farmaci aprono identità e schede già presenti; non costituiscono nuovi profili clinici o nuove autorizzazioni di equivalenza. La verifica editoriale e il modello matematico servono allo studio. Una revisione clinica indipendente non è stata effettuata, e gli esempi sintetici non sostituiscono una valutazione regolatoria."
    }
  ],
  "checks": [
    {
      "question": "Una stessa massa del sale equivale sempre alla stessa massa di base?",
      "answer": "No. Occorre identificare specie, stechiometria e modalità di dichiarazione della quantità. Una conversione chimica non dimostra l’intercambiabilità di due preparazioni."
    },
    {
      "question": "Un enantiomero meno attivo su un bersaglio è inattivo su tutti?",
      "answer": "No. La stereoselettività dipende dalla proteina considerata e può interessare anche enzimi e trasportatori."
    },
    {
      "question": "Due curve con la stessa AUC devono avere lo stesso picco?",
      "answer": "No. Un ingresso più lento può distribuire la stessa esposizione su un tempo maggiore; area, picco e tempo del picco rispondono a domande differenti."
    },
    {
      "question": "Se la biodisponibilità relativa è vicina a uno, quella assoluta è del 100%?",
      "answer": "No. Due preparazioni possono avere esposizioni simili pur rendendo disponibile sistemicamente soltanto una parte della dose."
    },
    {
      "question": "Una stima del 100% con intervallo molto ampio dimostra equivalenza?",
      "answer": "No. Nel modello conta l’intero intervallo. La vicinanza del punto centrale non elimina l’incertezza."
    },
    {
      "question": "Perché 80 e 125 non significano più o meno 20%?",
      "answer": "Sono estremi reciproci: 1/0,80 = 1,25. La simmetria riguarda la scala logaritmica dei rapporti, non una distanza aritmetica uguale da cento."
    },
    {
      "question": "Nel modello AUC soddisfatta e Cmax non soddisfatta danno esito favorevole?",
      "answer": "No. Entrambi i parametri devono soddisfare il criterio illustrato; un esito favorevole non compensa l’altro."
    },
    {
      "question": "Un biowaiver significa che basta dichiarare ingredienti uguali?",
      "answer": "No. Servono ammissibilità e prove secondo il percorso applicabile, incluse caratteristiche della sostanza, dissoluzione e composizione."
    },
    {
      "question": "Due confronti A–R e B–R forniscono automaticamente l’intervallo di A–B?",
      "answer": "No. Non sono uno studio diretto. Ma questa osservazione statistica non dimostra un divieto generale di sostituzione dei medicinali autorizzati."
    },
    {
      "question": "La posizione AIFA 2026 esclude tutti i pazienti già in terapia dal cambio di biosimilare?",
      "answer": "No. Include anche i pazienti già trattati e distingue l’intercambiabilità dalla procedura di switch informato con assenso del prescrittore, tracciabilità e informazione."
    }
  ],
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012. PDF 26–27 (stampa 6–7): stereoselettività; PDF 106 (stampa 86): contesto storico dei generici. Figura 1-2 e tabella controllate a PDF 26. Dati di mercato e disponibilità storici non trasferiti come attuali."
    },
    {
      "id": "R",
      "title": "Rang & Dale · Farmacologia",
      "detail": "8ª italiana 2016 / originale 2015. PDF 179–180: formulazione, assorbimento e biodisponibilità. Figura 8.10 controllata, non riprodotta; criterio statistico aggiornato con M13A."
    },
    {
      "id": "C",
      "title": "Clementi e Fumagalli · Farmacologia generale e molecolare",
      "detail": "4ª edizione 2012. PDF 606–608: sviluppo, farmacocinetica clinica, formulazioni e confronto. La formula abbreviata ±20% è stata corretta."
    },
    {
      "id": "FI",
      "title": "Diapositive del corso di Farmacologia I",
      "detail": "AA 2025–26, PDF 265–297, numerazione slide 263–295. Controllo visivo PDF 273, 276, 283, 293; le altre figure non sono dichiarate controllate. Semplificazioni e indicazioni storiche riconciliate nel registro."
    },
    {
      "id": "SFI",
      "title": "Appunti del corso di Farmacologia I · lezioni 6 e 7",
      "detail": "Lezione 6 del corso di Farmacologia, data stampata 10/10/2025, raccolta PDF 128–130, stampa 123–125: generici e biosimilari. Data discordante con la lezione 5, non corretta per supposizione. PDF 131–134, lezione 7 del corso di Farmacologia del 22/10/2025, letti ma fuori tema; antidepressivi non integrati qui."
    },
    {
      "id": "M13A",
      "title": "EMA / ICH M13A · Bioequivalenza",
      "detail": "Versione Step 5 del 2024, efficace UE 25/01/2025. Consultati ambito e passaggi 2.1.8.3, 2.2.2.2, 2.2.3.1, 2.2.4 il 27/10/2026; non lettura integrale del documento.",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/ich-m13a-guideline-bioequivalence-immediaterelease-solid-oral-dosage-forms-step-5_en.pdf"
    },
    {
      "id": "EMA-IMPLEMENT",
      "title": "EMA · Attuazione europea di M13A",
      "detail": "Documento EMA/531548/2024, pubblicato 26/02/2025. Passaggio Implementation, pagina 3, consultato 27/10/2026: permanenza delle disposizioni non sostituite.",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/considerations-regarding-implementation-ich-m13a-bioequivalence-immediate-release-solid-oral-dosage-forms_en.pdf"
    },
    {
      "id": "EMA-GEN",
      "title": "EMA · Domande e risposte sui generici",
      "detail": "Documento informativo 22/11/2012, definizione, composizione e valutazione consultate 27/10/2026. La data di accesso non è una nuova revisione; dettagli statistici da M13A.",
      "url": "https://www.ema.europa.eu/en/documents/other/questions-and-answers-generic-medicines_en.pdf"
    },
    {
      "id": "M9",
      "title": "EMA / ICH M9 · Biowaiver basato sul BCS",
      "detail": "Step 5, efficace 30/07/2020. Passaggi 1.1–2, 3 e 3.1, PDF 4–7, consultati selettivamente il 27/10/2026; non revisione dell’intero documento.",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/ich-m9-biopharmaceutics-classification-system-based-biowaivers-step-5_en.pdf"
    },
    {
      "id": "AIFA-LIST",
      "title": "AIFA · Liste di trasparenza",
      "detail": "Pagina e criteri generali consultati 27/10/2026; elenco disponibile datato 15/10/2026. Non è stata riletta ogni confezione dell’elenco.",
      "url": "https://www.aifa.gov.it/liste-di-trasparenza"
    },
    {
      "id": "AIFA-BIO",
      "title": "AIFA · Terzo Position Paper sui biosimilari",
      "detail": "Comunicato ufficiale 29/04/2026, sezioni intercambiabilità e switch informato consultate 27/10/2026; non lettura integrale dell’allegato in questo lotto.",
      "url": "https://www.aifa.gov.it/-/aifa-pubblica-terzo-position-paper-farmaci-biosimilari-focus-intercambiabilita-switch-informato-sostenibilita-del-ssn"
    },
    {
      "id": "MATH",
      "title": "ELIX · Esempi matematici originali",
      "detail": "Rapporti reciproci, medie geometriche, precisione e cinque intervalli sintetici. Nessun dato sperimentale o prodotto commerciale rappresentato; ambito limitato al criterio ordinario spiegato nel testo."
    }
  ],
  "drugs": [
    "metoprololo",
    "eparina",
    "enoxaparina"
  ],
  "targets": [],
  "relatedExistingChapterIds": [
    "modelli-pk",
    "metabolismo-trasportatori",
    "anticorpi-biologici",
    "recettori-e-legame"
  ],
  "coverage": "Letture mirate: 48 pagine di testo estraibile, 45 nuove e tre riletture; sette controlli visivi. Quattro pagine sugli antidepressivi lette ma non integrate in questo capitolo. Nessun libro o corso interamente letto, nessuna revisione clinica indipendente.",
  "wordCount": 3413,
  "moleculeLinks": [
    {
      "id": "CHEMBL13",
      "label": "METOPROLOL"
    },
    {
      "id": "CHEMBL2062335",
      "label": "METOPROLOL TARTRATE"
    },
    {
      "id": "CHEMBL2356097",
      "label": "METOPROLOL SUCCINATE"
    },
    {
      "id": "CHEMBL723",
      "label": "CARVEDILOL"
    },
    {
      "id": "CHEMBL1751",
      "label": "DIGOXIN"
    }
  ]
});
