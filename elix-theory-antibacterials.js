// Original educational synthesis; bounded provenance in the reading ledger.
export const THEORY_ANTIBACTERIALS = {
  "id": "antibiotico-resistenze",
  "volume": 12,
  "title": "Antibatterici: sensibilità, resistenza e stewardship",
  "lead": "Dal bersaglio alla scelta ragionata: patogeno, ospite, esposizione e sede dell’infezione. MIC, categorie S/I/R, sicurezza e microbiota collegano meccanismi e risultati clinici.",
  "sections": [
    {
      "id": "patogeno-ospite-farmaco",
      "title": "Tre relazioni da ricostruire prima di scegliere",
      "refs": [
        "DAB",
        "APP-II",
        "KATZ"
      ],
      "text": "La farmacologia antibatterica studia un sistema con tre protagonisti: il microrganismo, la persona che ospita l’infezione e il farmaco. Ogni relazione risponde a una domanda diversa. Il rapporto fra batterio e farmaco riguarda la sensibilità e i meccanismi di resistenza. Il rapporto fra ospite e batterio comprende sede dell’infezione, barriere e difese immunitarie. Il rapporto fra ospite e farmaco determina assorbimento, distribuzione, eliminazione e possibili danni. Una scelta coerente deve soddisfare contemporaneamente queste condizioni.\n\nConoscere il bersaglio molecolare è il primo passaggio, ma non conclude il ragionamento. Un bersaglio può essere presente e tuttavia poco accessibile; una concentrazione efficace in laboratorio può non essere raggiunta nella sede interessata; una buona attività microbiologica può accompagnarsi a un rischio inaccettabile per quella persona. La parola «attivo» deve quindi essere completata: attivo contro quale isolato, a quale esposizione e in quale contesto?\n\nSi considerino due infezioni attribuite alla stessa specie, una delle vie urinarie e una del sistema nervoso centrale. Il nome del batterio fornisce un’informazione comune, ma non rende equivalenti i due problemi farmacologici. Cambiano il compartimento da raggiungere, le barriere da attraversare e il significato clinico di un ritardo o di un’esposizione insufficiente. È un confronto di principi, non una proposta di trattamento.\n\nAnche il tempo modifica il sistema. All’inizio può essere disponibile soltanto una diagnosi probabile; successivamente arrivano identificazione, antibiogramma e andamento clinico. La terapia empirica e quella mirata corrispondono a livelli diversi di informazione. Rivalutare una scelta alla luce di nuovi dati è parte del trattamento, non il segno che la scelta iniziale fosse necessariamente irragionevole.",
      "formula": "Patogeno: sensibilità ↔ Farmaco: esposizione ↔ Ospite: sede, difese e sicurezza."
    },
    {
      "id": "selettivita-e-bersagli",
      "title": "Tossicità selettiva: sfruttare una differenza biologica",
      "refs": [
        "RANG",
        "APP-II",
        "EMA-DAP"
      ],
      "text": "Un antibatterico può interferire con una funzione essenziale del microrganismo sfruttando una differenza rispetto alle cellule umane. La differenza può essere qualitativa, quando una struttura o una via non esiste nell’ospite, oppure riguardare la sensibilità di strutture che svolgono funzioni simili. «Bersaglio» non significa necessariamente recettore: può trattarsi di un enzima, di una macchina molecolare o di un’organizzazione della membrana.\n\nIl peptidoglicano offre un esempio di struttura caratteristica dell’involucro batterico, assente nelle cellule umane. La sua costruzione sostiene la stabilità della cellula rispetto alle forze osmotiche. Il capitolo sui β-lattamici sviluppa il collegamento fra penicillin-binding proteins, costruzione della parete e azione di farmaci come amoxicillina. Il nome della classe individua un meccanismo comune, mentre spettro ed esposizione devono essere considerati per il singolo composto.\n\nUn secondo esempio riguarda i folati. L’uomo ricava il folato dall’alimentazione, mentre molti batteri dipendono dalla sintesi a partire da precursori. I sulfamidici, fra cui sulfametossazolo, interferiscono con una tappa di questa via sfruttando la somiglianza con il PABA. La selettività nasce qui dall’organizzazione del metabolismo: due cellule possono avere bisogno dello stesso prodotto e procurarselo attraverso percorsi differenti.\n\nLa membrana va distinta dalla parete. Per daptomicina, il riassunto delle caratteristiche del prodotto descrive un’interazione con la membrana batterica dipendente dal calcio, seguita da depolarizzazione e morte cellulare con lisi trascurabile. Definire questo processo semplicemente «inibizione della sintesi della membrana» perde il passaggio funzionale decisivo.\n\nLa tossicità selettiva descrive una possibilità terapeutica, non l’assenza di effetti indesiderati. La valutazione della sicurezza comprende effetti sull’ospite, reazioni immunologiche, interazioni ed effetti sulle comunità microbiche. Non si può dedurre un margine di dose illimitato dal solo fatto che il bersaglio principale sia batterico.",
      "formula": "Differenza biologica sfruttabile → azione preferenziale sul batterio; sicurezza nell’ospite da valutare separatamente."
    },
    {
      "id": "involucro-e-accesso",
      "title": "Gram, parete e membrane: il percorso fino al bersaglio",
      "refs": [
        "DAB-INV",
        "KATZ-INV",
        "RANG-INV"
      ],
      "text": "La colorazione di Gram è una prima descrizione del batterio, non un antibiogramma. La differenza osservata al microscopio richiama due organizzazioni tipiche dell’involucro cellulare. È utile studiarle come un percorso dall’ambiente esterno verso il bersaglio del farmaco: la presenza di un bersaglio non garantisce che una molecola riesca a raggiungerlo. Colore e forma, inoltre, sono informazioni diverse; non si deve identificare ogni cocco con un Gram positivo o ogni bacillo con un Gram negativo.\n\nNei Gram positivi lo spesso reticolo di peptidoglicano si trova all’esterno della membrana citoplasmatica. Gli acidi teicoici e lipoteicoici partecipano all’organizzazione dell’involucro; questi ultimi sono ancorati alla membrana. Peptidoglicano e membrana non sono due nomi per la stessa struttura: il primo contribuisce alla resistenza meccanica della cellula, mentre la seconda delimita il compartimento citoplasmatico. Questa distinzione permette di separare i farmaci che ostacolano la costruzione della parete da quelli che alterano direttamente la funzione della membrana.\n\nNei Gram negativi una membrana esterna si aggiunge alla membrana citoplasmatica. Fra le due si trova il compartimento periplasmatico, che comprende lo strato sottile di peptidoglicano e può contenere enzimi capaci di inattivare antibiotici. La membrana esterna presenta lipopolisaccaride sulla superficie rivolta all’ambiente, ma non è costituita soltanto da lipopolisaccaridi: comprende anche componenti lipidiche e proteiche. Descrivere tre semplici strati sovrapposti rischia di perdere la differenza fra una membrana, un compartimento e una rete strutturale.\n\nLe porine sono proteine che formano canali nella membrana esterna e consentono il passaggio di determinate molecole idrofile. Non rappresentano un’apertura indiscriminata per qualsiasi antibiotico. L’accessibilità dipende dal composto e dalle caratteristiche dell’involucro; la barriera esterna aiuta a spiegare perché due farmaci con un bersaglio simile possano avere spettri differenti. Lo spessore del peptidoglicano, preso isolatamente, non permette quindi di ordinare i batteri dal più al meno sensibile.\n\nPer un β-lattamico il percorso conduce alle penicillin-binding proteins, o PBP, coinvolte nella formazione dei legami del peptidoglicano. Nei Gram negativi questi bersagli sono accessibili dal lato periplasmatico: raggiungerli non richiede necessariamente l’ingresso del farmaco nel citoplasma. Una β-lattamasi presente nello stesso compartimento può inattivare la molecola prima dell’interazione utile. Barriera, enzima inattivante e bersaglio sono tre elementi distinti, non tre sinonimi di resistenza.\n\nAmoxicillina, già collegata a questo capitolo, serve a ritrovare il rapporto fra β-lattamico e PBP; daptomicina richiama invece l’azione sulla membrana descritta nella sezione sulla selettività. Il confronto chiarisce la posizione del bersaglio senza proporre un’alternativa terapeutica. Anche in una polmonite o in un’infezione urinaria, conoscere il Gram resta un passaggio iniziale da integrare con specie, sensibilità, sede ed esposizione.",
      "formula": "Gram positivo: parete spessa → membrana citoplasmatica. Gram negativo: membrana esterna → periplasma con peptidoglicano → membrana citoplasmatica. Schema qualitativo, non in scala."
    },
    {
      "id": "identita-sede-e-spettro",
      "title": "Identificare il patogeno senza perdere la sede dell’infezione",
      "refs": [
        "DAB",
        "APP-II",
        "KATZ",
        "EMA-DAP",
        "DAB-DRUG"
      ],
      "text": "L’identificazione del microrganismo restringe il campo delle ipotesi, ma un risultato microbiologico deve essere interpretato insieme alla provenienza del campione e al quadro clinico. Un microrganismo presente su una superficie o in un campione contaminato non ha automaticamente lo stesso significato di un isolato pertinente a un’infezione documentata. La qualità della raccolta e la domanda posta al laboratorio fanno parte della qualità dell’informazione ottenuta.\n\nIn assenza di identificazione, epidemiologia, sede e condizioni dell’ospite aiutano a formulare un’ipotesi eziologica. Dopo l’identificazione, la sensibilità dell’isolato aggiunge un livello ulteriore. Specie e ceppo non sono sinonimi: appartenere alla stessa specie non garantisce un identico comportamento verso tutti gli antibiotici. Per questo la conoscenza delle classi non sostituisce l’interpretazione microbiologica del caso.\n\nLo spettro indica l’insieme dei microrganismi sui quali un farmaco può esercitare attività. Ampio e ristretto sono descrizioni comparative, non graduatorie di potenza o qualità. La distinzione fra Gram positivi e Gram negativi è utile perché richiama differenze dell’involucro, compresa la membrana esterna dei Gram negativi, ma non esaurisce lo spettro. Un farmaco definito ad ampio spettro non copre ogni specie, né necessariamente con la stessa attività.\n\nLa classificazione in spettro ampio, medio o ristretto è una mappa introduttiva. Non basta contare se un farmaco agisca su qualche Gram positivo e qualche Gram negativo: due molecole che attraversano questa distinzione possono coprire insiemi differenti di specie. Per studiarle conviene chiedere quali gruppi rientrino nello spettro e quali restino esclusi, poi distinguere questa informazione dalla sensibilità del singolo isolato. Uno spettro ristretto non implica necessariamente attività su tutti i membri di una delle due categorie di Gram. Viceversa, la resistenza di un ceppo non riscrive da sola l’intero spettro della molecola: segnala un problema specifico da interpretare con metodo, esposizione e contesto.\n\nLa sede aggiunge un vincolo autonomo. Daptomicina costituisce un esempio concreto: l’informazione europea del prodotto ne descrive l’attività sui Gram positivi, ma ne esclude l’indicazione nella polmonite per inefficacia dimostrata negli studi clinici. Un risultato di sensibilità favorevole non permette quindi di trasferire automaticamente un medicinale a qualsiasi infezione sostenuta dal medesimo batterio.\n\nQuando si collega un farmaco a una patologia occorre mantenere distinti tre livelli: plausibilità del meccanismo, attività contro il microrganismo ed efficacia nel contesto clinico. Confonderli trasforma un’informazione corretta sul bersaglio in una conclusione terapeutica non dimostrata.",
      "formula": "Spettro della molecola → insieme di specie; sensibilità dell’isolato → risposta nel test; sede ed esposizione → pertinenza clinica."
    },
    {
      "id": "mic-effetto-misurato",
      "title": "MIC, crescita e uccisione misurano aspetti diversi",
      "refs": [
        "APP-II",
        "KATZ",
        "EMA-DAP",
        "DAB-DIAG",
        "DAB-DRUG"
      ],
      "text": "La concentrazione minima inibente, o MIC, è la più bassa concentrazione che impedisce la crescita visibile del microrganismo nelle condizioni definite dal test. Il risultato appartiene quindi a una coppia isolato–farmaco e a un metodo standardizzato. Non è una dose da somministrare e non descrive direttamente la quantità di farmaco presente nel sangue o nel tessuto infetto.\n\nIl termine «visibile» è importante. Non osservare crescita non equivale a dimostrare che ogni cellula sia stata uccisa. La concentrazione minima battericida, o MBC, riguarda invece un criterio di uccisione verificato con una procedura distinta. Nella pratica ordinaria la MIC è il riferimento più comune; ciò non autorizza a definire la MBC inesistente o priva di qualsiasi impiego. Il manuale distingue infatti la routine microbiologica dalle valutazioni particolari.\n\nIl principio delle diluizioni in serie chiarisce che cosa si osserva. Si confronta la crescita del medesimo isolato in condizioni controllate, in presenza di concentrazioni note e crescenti di antibiotico. Se la prova e i suoi controlli sono validi, la prima concentrazione della serie senza crescita visibile identifica la MIC nelle condizioni del test. Le provette sono una rappresentazione didattica: il formato del dispositivo non cambia la distinzione fra concentrazione saggiata e risposta osservata.\n\nL’assenza di torbidità, tuttavia, non dimostra da sola l’eliminazione dei batteri. Una valutazione distinta della sopravvivenza può mostrare che cellule non cresciute durante l’esposizione sono ancora vitali. Il confronto con una successiva subcoltura aiuta a capire il concetto di attività battericida, ma non autorizza a dedurre una MBC quantitativa da un disegno privo di criteri di lettura. Tempi, controlli ed endpoint appartengono al metodo specifico; uno schema non è un protocollo universale.\n\nBatteriostatico e battericida descrivono effetti osservati sulla crescita o sulla sopravvivenza. Non sono sinonimi rispettivamente di debole e forte. Anche l’equivalenza fra battericidia e lisi è scorretta: una cellula può morire senza una rottura rilevante, come illustra il meccanismo riportato per daptomicina. La mappa dei bersagli e la classificazione dell’effetto rispondono dunque a domande differenti.\n\nUn grafico del numero di batteri vitali nel tempo aggiunge una prospettiva diversa dalla MIC. Nel modello didattico, il controllo senza farmaco continua a crescere; dopo l’esposizione, una curva che si appiattisce rappresenta l’arresto dell’aumento della popolazione, mentre una curva discendente rappresenta una riduzione dei batteri vitali. Se l’asse verticale è logaritmico, distanze uguali corrispondono a rapporti uguali, non a sottrazioni uguali. La forma della curva aiuta a distinguere i fenomeni, ma non fornisce da sola una dose, un tempo di guarigione o un endpoint battericida validato. Anche il meccanismo va tenuto distinto dalla misura: descrivere il bersaglio non equivale ad avere documentato l’entità e la velocità dell’uccisione in una determinata prova.\n\nIl passaggio al paziente richiede informazioni aggiuntive. Una misura in vitro non rappresenta le difese immunitarie, l’accessibilità di un focolaio o l’andamento temporale delle concentrazioni. L’etichetta di attività non basta per stabilire la superiorità clinica di un trattamento o per decidere che il contributo dell’ospite sia diventato irrilevante.\n\nUn esercizio utile consiste nel leggere due risultati separatamente: «la crescita è inibita nel test» e «l’infezione si risolve nella persona». Il primo può sostenere il secondo, ma non lo contiene. Fra i due si collocano esposizione, sede, sicurezza, controllo del focolaio e prove cliniche.",
      "formula": "MIC → inibizione della crescita nel test. MBC → criterio di uccisione. Esito clinico → integrazione di più fattori."
    },
    {
      "id": "alone-e-mic",
      "title": "Dall’alone alla categoria: ciò che il test misura",
      "refs": [
        "EUCAST-DD",
        "EUCAST-MIC",
        "EUCAST-CORR"
      ],
      "text": "Una piastra con dischetti e zone prive di crescita mostra un risultato di diffusione in agar. Il dato letto è il diametro della zona di inibizione, espresso in millimetri. La MIC è invece una concentrazione: indica il limite di crescita osservato con un metodo che la determina. Una fotografia con un righello accanto agli aloni non diventa una misura diretta della MIC soltanto perché viene presentata sotto quel titolo.\n\nNella diffusione da dischetto il composto si distribuisce nell’agar e interagisce con il microrganismo durante il test. Il diametro finale dipende da condizioni definite, non soltanto dalla sensibilità biologica: contano anche inoculo, terreno, dischetto e modalità di esecuzione e lettura. EUCAST richiede una procedura standardizzata e controlli di qualità; l’immagine didattica di una piastra non contiene da sola le informazioni necessarie a produrre un referto.\n\nI criteri per interpretare i diametri sono calibrati rispetto ai breakpoint della MIC. Questa relazione consente di attribuire categorie di sensibilità quando il metodo e la combinazione microrganismo–farmaco sono appropriati. Non autorizza a trasformare qualsiasi diametro in un valore di concentrazione mediante una regola universale. I dati di correlazione riguardano combinazioni definite e vengono aggiornati quando cambiano conoscenze, agenti o criteri interpretativi.\n\nPer la determinazione della MIC, EUCAST distingue il metodo di riferimento in microdiluizione dai sistemi che devono essere valutati rispetto a quel riferimento. Il numero riportato deve quindi essere letto insieme al metodo utilizzato e ai suoi controlli. In entrambi i percorsi, misura e interpretazione restano passaggi separati: prima si ottiene un risultato, poi lo si confronta con criteri pertinenti.\n\nDue dischetti contenenti antibiotici diversi possono produrre aloni differenti. Scegliere il farmaco con l’alone maggiore, senza i relativi criteri, confonde una dimensione geometrica con una graduatoria terapeutica. Lo stesso errore si presenta quando si confrontano numeri di MIC di farmaci diversi senza considerare i rispettivi breakpoint e l’esposizione. L’antibiogramma fornisce informazioni da interpretare; non elimina i vincoli della sede e dell’ospite già discussi.",
      "formula": "Diffusione da dischetto → diametro in mm → criteri per quella combinazione. Determinazione della MIC → concentrazione → breakpoint pertinente. Nessuna conversione universale mm↔MIC."
    },
    {
      "id": "sir-esposizione",
      "title": "S, I e R: leggere la sensibilità insieme all’esposizione",
      "refs": [
        "APP-II",
        "KATZ",
        "EUCAST",
        "EUCAST-TABLES"
      ],
      "text": "EUCAST distingue S, sensibile con regime standard; I, sensibile con esposizione aumentata; R, resistente, con elevata probabilità di fallimento anche aumentando l’esposizione. I appartiene quindi alle categorie sensibili e non va sommata a R come se entrambe significassero resistenza. L’esposizione dipende da dose, intervallo, modalità di somministrazione, distribuzione ed eliminazione: non coincide soltanto con la quantità assunta.\n\nLa categoria traduce un risultato microbiologico nel contesto di condizioni di impiego definite. Non è una promessa individuale di guarigione. Rimane necessario verificare che il farmaco sia appropriato per la sede e che l’esposizione prevista sia compatibile con la situazione dell’ospite. Allo stesso modo, modificare il regime richiede valutazioni cliniche e informazioni specifiche del medicinale; la lettera I non è un invito ad aumentare autonomamente una dose.\n\nLa MIC e il breakpoint hanno ruoli diversi. La prima è il risultato della misura; il secondo è il criterio usato per interpretarla. Se cambia il criterio, può cambiare la categoria assegnata senza che sia cambiato il valore misurato. Per seguire nel tempo un risultato occorre quindi conoscere metodo, specie, farmaco e versione del riferimento.\n\nAlla consultazione del 27 novembre 2026, l’indice ufficiale EUCAST riporta tabelle cliniche versione 16.1, valide dal 24 giugno al 31 dicembre 2026. Qui è verificata la versione dell’indice; non sono riprodotti breakpoint numerici né dichiarata una lettura completa delle tabelle. Questo capitolo spiega il significato delle categorie e rinvia al riferimento aggiornato per la loro applicazione."
    },
    {
      "id": "ecoff-e-breakpoint",
      "title": "ECOFF e breakpoint clinico: due domande diverse",
      "refs": [
        "DAB-DIAG",
        "EUCAST-ECOFF",
        "EUCAST-SET",
        "EUCAST"
      ],
      "text": "Una MIC può essere confrontata con la distribuzione dei risultati di altri isolati della stessa specie oppure con un criterio orientato al trattamento. I due confronti hanno finalità diverse. Il primo descrive il fenotipo del microrganismo rispetto a una popolazione di riferimento; il secondo collega la misura microbiologica alla probabilità di successo con una determinata esposizione. Chiamarli entrambi semplicemente «soglia di resistenza» nasconde questa differenza.\n\nPer una specifica coppia specie–antibiotico, la popolazione wild type comprende gli isolati senza meccanismi acquisiti di resistenza rilevabili fenotipicamente. L’ECOFF, o valore soglia epidemiologico, delimita l’estremità superiore della sua distribuzione di MIC. Superare questo limite colloca il risultato nel gruppo non-wild type. La classificazione riguarda quel composto e quel metodo di misura: non equivale a una descrizione completa del batterio contro ogni antibiotico.\n\nNon è corretto sostituire questa valutazione con una regola universale secondo cui la resistenza biologica richiederebbe una concentrazione dieci volte maggiore di quella efficace sulla maggioranza dei ceppi. Una distribuzione non si riassume con quel moltiplicatore. Occorrono dati pertinenti alla specie, al composto e al metodo, con criteri definiti per stimare il limite della popolazione di riferimento.\n\nIl breakpoint clinico risponde invece alla domanda terapeutica. Nella sua definizione entrano distribuzioni delle MIC, meccanismi di resistenza, farmacocinetica e farmacodinamica, modalità di somministrazione, infezioni considerate ed esiti clinici. EUCAST descrive una valutazione integrata di questi elementi, non una formula capace di convertirli automaticamente in un’unica soglia. Anche il solo confronto fra MIC e concentrazione raggiungibile nel sangue è insufficiente: il ragionamento deve arrivare all’esposizione nella sede dell’infezione.\n\nSi considerino due risultati astratti. Il primo appartiene alla popolazione wild type; il secondo supera l’ECOFF. Da queste sole informazioni non si possono assegnare rispettivamente S e R: per entrambi serve il confronto con i criteri clinici pertinenti. Questa distinzione evita di trasformare un dato sulla popolazione batterica in una promessa di efficacia, oppure di confondere ogni scostamento fenotipico con il medesimo rischio terapeutico.\n\nAnche l’uso epidemiologico richiede attenzione. Il database EUCAST raccoglie distribuzioni provenienti da luoghi, periodi e selezioni differenti. La quota di valori elevati in quel materiale aggregato non rappresenta automaticamente la prevalenza locale della resistenza. Il riferimento per riconoscere un fenotipo e la misura della frequenza di quel fenotipo in una popolazione sono informazioni distinte.",
      "formula": "ECOFF → posizione rispetto alla popolazione wild type. Breakpoint clinico → categoria rispetto a un’esposizione terapeutica. WT/non-WT e S/I/R non sono etichette intercambiabili."
    },
    {
      "id": "referto-e-versione",
      "title": "Leggere il referto: isolato, metodo e data dei criteri",
      "refs": [
        "DAB-DIAG",
        "EUCAST-VERS",
        "EUCAST-TABLES",
        "EUCAST",
        "KATZ"
      ],
      "text": "Un referto microbiologico unisce informazioni di natura diversa: ciò che è stato isolato, il risultato di una prova e l’interpretazione applicata a quel risultato. Separare questi livelli permette di capire che cosa sia stato misurato e che cosa dipenda dai criteri adottati. La categoria attribuita a una coppia isolato–farmaco va inoltre distinta dalla diagnosi dell’infezione: la presenza del microrganismo deve essere interpretata nel quadro clinico.\n\nLa misura va letta con la sua unità e il metodo utilizzato. Il diametro di un alone e la MIC rimangono grandezze diverse, come discusso nelle sezioni precedenti. Una lettera riassuntiva aiuta la comunicazione, ma non sostituisce l’identità del microrganismo, quella dell’antibiotico e il contesto interpretativo. Questo è particolarmente importante quando si confrontano documenti di epoche differenti.\n\nUn referto storico non va riletto attribuendo retroattivamente alle sue lettere il significato odierno. Nel sistema EUCAST la ridefinizione del 2019 ha reso I una categoria di sensibilità associata a maggiore esposizione. Una legenda più vecchia che riporti «intermedio» deve essere riconosciuta come appartenente al proprio periodo e standard. Cambiare il nome della categoria senza riesaminare metodo, valori e criteri originari non costituisce una nuova interpretazione validata.\n\nLe tabelle EUCAST sono aggiornate periodicamente e possono ricevere correzioni o integrazioni durante l’anno. Di conseguenza, la versione dei criteri è parte dell’informazione necessaria a comprendere un risultato. In un esempio puramente logico, se la MIC di un isolato resta identica ma cambia il breakpoint applicabile, la categoria può cambiare senza che ciò dimostri una mutazione del microrganismo. Viceversa, due lettere uguali non provano che due misure quantitative siano identiche.\n\nIl passaggio conclusivo torna al quadro dell’infezione. La presenza di un isolato e la sua categoria di sensibilità vanno collegate alla qualità del campione, alla sede e alla plausibilità del suo ruolo eziologico. Leggere bene l’antibiogramma significa preservare queste informazioni lungo il ragionamento: il referto sostiene una scelta clinica, ma non la produce da solo.",
      "formula": "Isolato e campione → misura con metodo e unità → criteri identificati per standard e versione → interpretazione nel contesto dell’infezione."
    },
    {
      "id": "ospite-esposizione-sicurezza",
      "title": "L’ospite determina dove arriva il farmaco e quanto a lungo resta",
      "refs": [
        "DAB",
        "APP-II",
        "KATZ",
        "DAB-HOST",
        "EMA-DAP"
      ],
      "text": "Una dose è un ingresso nel sistema, mentre l’esposizione è il risultato del suo percorso nell’organismo. Assorbimento, distribuzione, metabolismo ed escrezione determinano quali concentrazioni si sviluppano e per quanto tempo. Due persone che ricevono lo stesso regime possono non avere lo stesso profilo di concentrazione, soprattutto se cambiano funzione renale, funzione epatica, assorbimento o terapie concomitanti.\n\nIl sito dell’infezione non coincide necessariamente con il plasma. La concentrazione circolante è un’informazione importante, ma l’effetto richiede che il farmaco raggiunga il compartimento rilevante in condizioni utili. La barriera da attraversare e le caratteristiche del tessuto possono modificare questo passaggio. Anche la disponibilità di una formulazione orale o endovenosa deve essere collegata al problema concreto che quella via consente di affrontare.\n\nLa funzione digerente rende concreto il tema dell’assorbimento. Per una somministrazione orale occorre che la dose raggiunga l’organismo in modo adeguato; cambiare via modifica questo passaggio, ma non risolve automaticamente gli ostacoli alla distribuzione nella sede d’infezione. La distinzione utile è fra ingresso del farmaco, concentrazione circolante e accesso al compartimento interessato. La via di somministrazione va interpretata attraverso queste tappe, non come un giudizio generale di maggiore o minore potenza.\n\nL’eliminazione mette in relazione efficacia e sicurezza. Se la rimozione del farmaco rallenta, l’esposizione può aumentare; questo non significa automaticamente maggiore beneficio, perché possono aumentare anche gli effetti indesiderati. Se l’esposizione è insufficiente, una sensibilità favorevole in laboratorio può non tradursi nell’effetto atteso. La valutazione farmacocinetica serve a riconoscere entrambe le possibilità, non soltanto a cercare concentrazioni maggiori.\n\nLe difese dell’ospite costituiscono un altro elemento. Immunodepressione, condizioni generali e integrità delle barriere influenzano il rapporto con il patogeno. L’azione farmacologica si inserisce in questo ambiente biologico e non lo sostituisce integralmente. È riduttivo pensare che un’attività battericida renda superflua ogni altra componente del controllo dell’infezione.\n\nInfine, il farmaco incontra anche gli altri trattamenti della persona. Le interazioni possono modificare l’esposizione o sommare effetti sullo stesso organo. La storia delle reazioni avverse, l’età e la gravidanza aggiungono vincoli specifici. Questi fattori spiegano perché un antibiogramma sia una parte essenziale della decisione senza costituire, da solo, una prescrizione.\n\nLa daptomicina offre un esempio già collegato al catalogo. Il RCP di Cubicin descrive un’eliminazione prevalentemente renale e richiama l’attenzione sul danno muscolare, sulla funzione renale e sui trattamenti concomitanti associati a miopatia, come le statine. Uno scarso coinvolgimento del citocromo P450 non equivale quindi ad assenza di interazioni: due medicinali possono condividere un rischio sullo stesso organo anche senza competere per quel sistema metabolico. L’esempio chiarisce il problema; le decisioni sul regime e sul monitoraggio restano specifiche del medicinale e del contesto.\n\nLa gravidanza introduce inoltre una questione di qualità delle prove. Per daptomicina il RCP segnala l’assenza di dati clinici sulle gravidanze e limita l’impiego alle situazioni di chiara necessità, dopo valutazione del beneficio rispetto al rischio possibile. Dati animali rassicuranti e mancanza di dati clinici non sono equivalenti a una sicurezza dimostrata nella persona. Una categoria microbiologica favorevole non può colmare questa lacuna.",
      "formula": "Regime somministrato → percorso farmacocinetico → esposizione alla sede; beneficio e rischio dipendono dal contesto."
    },
    {
      "id": "allergia-e-reazione-avversa",
      "title": "Allergia, reazione avversa e resistenza: riconoscere la differenza",
      "refs": [
        "DAB-HOST",
        "KATZ",
        "NICE-ALL",
        "CDC-ALL"
      ],
      "text": "La resistenza riguarda il rapporto fra microrganismo e antibatterico; l’allergia riguarda la risposta della persona al medicinale. Un isolato può risultare sensibile a un farmaco che presenta un rischio allergologico per l’ospite. Viceversa, l’assenza di allergia non dimostra che quel composto sia attivo contro il patogeno. Questi due giudizi occupano punti diversi del triangolo patogeno–ospite–farmaco e devono rimanere distinti anche nel linguaggio dello studio.\n\nAnche «reazione avversa» e «allergia» non sono sinonimi. La prima espressione comprende effetti indesiderati con meccanismi differenti; la seconda implica una risposta immunologica. Per le penicilline, CDC distingue reazioni immediate e reazioni ritardate, alcune delle quali possono essere gravi. Il solo intervallo temporale, tuttavia, non basta a formulare una diagnosi: occorre ricostruire il quadro e le altre possibili spiegazioni.\n\nLa qualità dell’informazione conta quanto l’etichetta. Scrivere soltanto «allergico» lascia senza risposta domande essenziali: quale medicinale, quale manifestazione, quale gravità e quando? NICE richiede una documentazione che mantenga questi elementi e distingua lo stato allergologico dalle altre reazioni avverse. Una descrizione precisa rende possibile una valutazione successiva; una parola generica può invece essere copiata nel tempo senza che il suo significato venga chiarito.\n\nUn disturbo gastrointestinale isolato non dimostra da solo un’allergia: NICE lo considera un elemento che la rende meno probabile. Questo orientamento non autorizza a cancellare una segnalazione senza valutarla. Dall’altro lato, CDC ricorda che un’etichetta inesatta di allergia alla penicillina può spostare la scelta verso alternative ad ampio spettro, con conseguenze sulla qualità della terapia e sulla stewardship. Evitare il rischio allergico e verificare la qualità della storia sono esigenze complementari.\n\nLa rivalutazione richiede un percorso appropriato al rischio. Non equivale a riprovare autonomamente il farmaco. In particolare, una storia di reazione ritardata grave richiede competenza specialistica e non va trattata come un semplice dubbio risolvibile con un’assunzione di prova. Il collegamento con amoxicillina, già presente nel catalogo, serve a riconoscere questa dimensione della scelta dei β-lattamici: il bersaglio batterico spiega l’azione, mentre la storia della persona contribuisce a stabilire se quell’azione possa essere impiegata in sicurezza.",
      "formula": "Resistenza → microrganismo e farmaco. Allergia → risposta immunologica dell’ospite. Reazione avversa → categoria più ampia da descrivere e valutare."
    },
    {
      "id": "formulazione-via-aderenza",
      "title": "Dal principio attivo al trattamento utilizzabile",
      "refs": [
        "DAB-DRUG",
        "APP-II",
        "KATZ",
        "UKHSA-IVOS",
        "DM-AMOX-FORM"
      ],
      "text": "Un antibiotico attivo in laboratorio deve anche poter essere somministrato in una forma adatta alla persona e alla situazione. La scelta della molecola e quella del medicinale concreto sono quindi passaggi collegati. Vie disponibili, formulazione, intervalli di somministrazione, accettabilità e conservazione determinano se il trattamento progettato è realmente utilizzabile. Questi aspetti si aggiungono a bersaglio, spettro ed esposizione; non li sostituiscono.\n\nLa via endovenosa e quella orale rispondono a condizioni diverse. La prima evita la fase di assorbimento gastrointestinale; per la seconda occorrono un’opzione appropriata e un assorbimento affidabile. Il passaggio dall’una all’altra non è una semplice conversione fra confezioni con lo stesso nome. I criteri UKHSA per adulti ospedalizzati considerano il miglioramento clinico, la funzione gastrointestinale, la possibilità di somministrare il medicinale in sicurezza, la biodisponibilità, le interazioni e l’aderenza. Sono un esempio di valutazione strutturata, non una regola applicabile automaticamente a ogni infezione.\n\nPer UKHSA, endocardite, meningite e focolai non drenati richiedono considerazioni specifiche. La possibilità di deglutire descrive dunque soltanto una condizione della somministrazione: resta da stabilire se il trattamento scelto sia adeguato alla sede e all’obiettivo clinico.\n\nLa formulazione introduce problemi ulteriori. Una sospensione deve mantenere le caratteristiche previste dopo la ricostituzione; le istruzioni di preparazione e conservazione appartengono al prodotto preciso. La scheda statunitense di amoxicillina in sospensione consultata distingue infatti il preparato ricostituito e ne specifica gestione e durata di conservazione. L’esempio non permette di trasferire tempi o temperature ad altre confezioni, concentrazioni o preparazioni. Il collegamento al capitolo sulle formulazioni aiuta a separare identità chimica e prestazione del medicinale.\n\nInfine, frequenza delle assunzioni, gusto e possibilità di seguire le istruzioni fanno parte dell’accettabilità del trattamento. Una semplificazione del regime va valutata attraverso farmacocinetica ed efficacia, senza dedurla dalla sola comodità. Anche il costo entra nel confronto fra opzioni appropriate: non rende adeguato un farmaco inattivo o inadatto alla sede. La domanda conclusiva è se quel trattamento possa essere assunto correttamente e produrre l’esposizione richiesta con rischi accettabili.",
      "formula": "Attività sul patogeno + esposizione alla sede + formulazione utilizzabile + assunzione corretta → trattamento valutabile nel contesto clinico."
    },
    {
      "id": "resistenza-e-microbiota",
      "title": "Resistenza e microbiota: il trattamento agisce su popolazioni",
      "refs": [
        "RANG",
        "APP-II",
        "WHO-AMR",
        "CDC-CDIFF"
      ],
      "text": "La resistenza riguarda il rapporto fra microrganismo e agente antimicrobico. Non è il corpo del paziente a diventare «resistente all’antibiotico» nel significato microbiologico del termine. Una specie può possedere caratteristiche che limitano naturalmente l’attività di un farmaco; un isolato può inoltre differire da altri della stessa specie. Il principio è già visibile nella necessità di distinguere identità del patogeno e sensibilità.\n\nLa resistenza intrinseca appartiene alle caratteristiche di base di un microrganismo, mentre quella acquisita implica un cambiamento rispetto alla sensibilità attesa. Le modalità molecolari e la diffusione dei determinanti di resistenza richiedono una trattazione dedicata: questa introduzione non sostituisce l’analisi di β-lattamasi, modificazioni dei bersagli, permeabilità ed efflusso. Il collegamento al capitolo sui β-lattamici permette di ritrovare un primo esempio concreto.\n\nL’esposizione modifica le condizioni di sopravvivenza delle popolazioni microbiche. WHO identifica uso inappropriato ed eccessivo degli antimicrobici fra i fattori che favoriscono l’emergere e la diffusione della resistenza. Il problema riguarda sia il trattamento dell’infezione presente sia le possibilità terapeutiche future. Prevenzione delle infezioni, diagnosi e accesso a cure appropriate partecipano alla stessa strategia.\n\nL’effetto ecologico non si limita al focolaio. Un antibiotico può ridurre anche componenti utili del microbiota intestinale. CDC collega questa alterazione alla possibilità che Clostridioides difficile proliferi e provochi infezione. Il rischio non implica che ogni diarrea durante una terapia sia causata da questo batterio: causa, esposizione e diagnosi restano distinte.\n\nPer studiare un antibiotico occorre dunque affiancare alla domanda «quale bersaglio colpisce?» quella «quali popolazioni espone?». Il beneficio cercato e gli effetti collaterali possono riguardare compartimenti e microrganismi differenti. Questo amplia la valutazione senza trasformarla in una regola secondo cui tutti i farmaci avrebbero gli stessi rischi."
    },
    {
      "id": "stewardship-rivalutazione",
      "title": "Stewardship: rendere la scelta verificabile e rivederla",
      "refs": [
        "KATZ",
        "CDC-ASP"
      ],
      "text": "La stewardship riunisce attività che migliorano l’uso degli antibiotici e rendono valutabili le decisioni. Il quadro CDC comprende responsabilità definite, competenze farmaceutiche, interventi sulle prescrizioni, monitoraggio e restituzione dei risultati. Il suo obiettivo è migliorare la cura e limitare i danni dell’uso inappropriato; non coincide con la semplice riduzione del numero di prescrizioni.\n\nSul piano del ragionamento clinico, il primo passaggio consiste nel chiarire quale problema si intende trattare e quali informazioni sostengono l’ipotesi infettiva. Il secondo collega il trattamento al patogeno probabile o documentato, alla sede e all’ospite. Il terzo stabilisce quali nuovi dati permetteranno di confermare, modificare o interrompere quella scelta secondo il contesto clinico e le indicazioni aggiornate.\n\nLa terapia empirica affronta un’incertezza iniziale. Quando diventano disponibili informazioni utili, può essere possibile restringere lo spettro, scegliere una modalità di somministrazione più appropriata o rivedere la necessità del trattamento. La direzione del cambiamento dipende dai dati; uno spettro più ampio non rappresenta automaticamente un progresso, così come restringere non è un obiettivo da perseguire ignorando l’efficacia.\n\nIl controllo del focolaio completa il quadro. Un ascesso, materiale estraneo infetto o tessuto necrotico possono richiedere interventi ulteriori: cambiare antibiotico non risolve necessariamente un ostacolo anatomico. Il manuale collega esplicitamente la scelta farmacologica alla valutazione di queste condizioni. Meccanismo, microbiologia e sede tornano così a essere parti dello stesso problema.\n\nPer ripassare, si può ricostruire una catena di domande: qual è l’infezione ipotizzata, quale informazione sul patogeno è disponibile, quale esposizione è necessaria e realizzabile, quali rischi presenta l’ospite e quale dato farà rivalutare la scelta? È uno schema per comprendere il processo. Dosi, durate e scelte per singole infezioni restano affidate alle fonti cliniche specifiche e aggiornate.",
      "formula": "Ipotesi motivata → scelta coerente → nuovi dati → rivalutazione di necessità, spettro, sede, esposizione e sicurezza."
    }
  ],
  "checks": [
    {
      "question": "Un bersaglio batterico assente nell’uomo rende il medicinale privo di rischi?",
      "answer": "No. La selettività del bersaglio e la sicurezza complessiva sono valutazioni distinte; contano esposizione, reazioni avverse, interazioni e microbiota."
    },
    {
      "question": "Perché due infezioni sostenute dalla stessa specie possono porre problemi farmacologici diversi?",
      "answer": "Sede, accessibilità del compartimento, sensibilità dell’isolato e condizioni dell’ospite possono differire. Il nome della specie non determina da solo una terapia."
    },
    {
      "question": "Se nella provetta non compare crescita, tutti i batteri sono certamente morti?",
      "answer": "No. La MIC riguarda l’inibizione della crescita visibile; l’uccisione richiede una valutazione distinta."
    },
    {
      "question": "Battericidia significa necessariamente lisi?",
      "answer": "No. Per daptomicina il documento EMA descrive morte batterica con lisi trascurabile."
    },
    {
      "question": "La categoria I di EUCAST va unita a R per contare gli isolati resistenti?",
      "answer": "No. I significa sensibile con esposizione aumentata; appartiene alle categorie sensibili."
    },
    {
      "question": "Una concentrazione plasmatica favorevole garantisce efficacia in ogni sede?",
      "answer": "No. Il compartimento dell’infezione, la disponibilità locale del farmaco e le prove cliniche rimangono determinanti."
    },
    {
      "question": "Ogni diarrea durante una terapia antibiotica dimostra infezione da C. difficile?",
      "answer": "No. L’esposizione può aumentare il rischio, ma la diagnosi richiede una valutazione distinta."
    },
    {
      "question": "Perché rivalutare una terapia empirica anche quando era inizialmente ragionevole?",
      "answer": "Identificazione, sensibilità e andamento clinico riducono o modificano l’incertezza iniziale e possono rendere appropriata una scelta diversa."
    },
    {
      "question": "Il peptidoglicano più spesso rende automaticamente un batterio meno sensibile a ogni antibiotico?",
      "answer": "No. Contano il bersaglio, l’accessibilità del composto e gli eventuali meccanismi di inattivazione. Nei Gram negativi la membrana esterna aggiunge una barriera pur in presenza di un peptidoglicano più sottile."
    },
    {
      "question": "Per raggiungere le PBP di un Gram negativo un β-lattamico deve necessariamente entrare nel citoplasma?",
      "answer": "No. Le PBP coinvolte nella costruzione della parete sono raggiungibili dal lato periplasmatico. Occorre distinguere attraversamento della membrana esterna e ingresso nel citoplasma."
    },
    {
      "question": "Il dischetto con l’alone maggiore identifica da solo l’antibiotico clinicamente migliore?",
      "answer": "No. Il diametro va interpretato con i criteri della specifica combinazione microrganismo–farmaco e del metodo. Non è una MIC diretta né una graduatoria di efficacia clinica."
    },
    {
      "question": "Una provetta senza crescita visibile dimostra da sola che tutti i batteri sono morti?",
      "answer": "No. La MIC riguarda l’inibizione della crescita nelle condizioni del test. La sopravvivenza e l’attività battericida richiedono una valutazione distinta."
    },
    {
      "question": "Un isolato wild type è necessariamente classificato S?",
      "answer": "No. Wild type e non-wild type descrivono il confronto con una popolazione di riferimento. Le categorie cliniche richiedono i breakpoint e l’esposizione pertinenti."
    },
    {
      "question": "La resistenza biologica si definisce sempre moltiplicando per dieci una MIC abituale?",
      "answer": "No. L’ECOFF riguarda la distribuzione della specifica coppia specie–farmaco secondo criteri definiti; non esiste quel moltiplicatore universale."
    },
    {
      "question": "Una diversa categoria in due referti prova da sola che il batterio abbia acquisito una mutazione?",
      "answer": "No. Occorre confrontare isolato, misura, metodo e versione dei criteri. Un cambiamento del breakpoint può modificare l’interpretazione anche a MIC invariata."
    },
    {
      "question": "Un antibiogramma favorevole esclude il rischio di allergia?",
      "answer": "No. La sensibilità descrive il rapporto isolato–farmaco; il rischio allergologico riguarda l’ospite e richiede informazioni distinte."
    },
    {
      "question": "La sola diarrea dopo un antibiotico dimostra un’allergia?",
      "answer": "No. Un disturbo gastrointestinale isolato non basta per la diagnosi; occorre valutare e documentare il quadro, senza cancellare autonomamente una segnalazione."
    },
    {
      "question": "Un farmaco poco metabolizzato dal CYP450 è privo di interazioni?",
      "answer": "No. Possono esserci modificazioni dell’eliminazione o rischi condivisi sullo stesso organo, come mostra l’attenzione alla miopatia con daptomicina e altri medicinali."
    },
    {
      "question": "L’assenza di dati clinici in gravidanza equivale a sicurezza dimostrata?",
      "answer": "No. È una lacuna delle prove; il giudizio richiede informazioni specifiche del medicinale e valutazione del beneficio rispetto al rischio."
    },
    {
      "question": "Due antibiotici attivi su alcuni Gram positivi e Gram negativi hanno necessariamente lo stesso spettro?",
      "answer": "No. La distinzione di Gram è una prima mappa: bisogna confrontare le specie comprese ed escluse e, separatamente, la sensibilità dell’isolato."
    },
    {
      "question": "In un grafico con asse verticale logaritmico, intervalli uguali indicano la stessa diminuzione assoluta di batteri?",
      "answer": "No. Indicano rapporti uguali. Inoltre, una curva schematica non stabilisce da sola un endpoint battericida quantitativo o un esito clinico."
    },
    {
      "question": "Poter deglutire basta per passare da un antibiotico endovenoso a uno orale?",
      "answer": "No. Occorrono una valutazione clinica, un’opzione appropriata, assorbimento affidabile, attenzione a sede, biodisponibilità, interazioni e aderenza. Alcune infezioni richiedono considerazioni specifiche."
    },
    {
      "question": "Le istruzioni di conservazione di una sospensione di amoxicillina valgono automaticamente per ogni preparazione dello stesso principio attivo?",
      "answer": "No. Preparazione e conservazione vanno riferite al prodotto preciso; l’identità della molecola non rende intercambiabili tutte le formulazioni."
    }
  ],
  "references": [
    {
      "id": "DAB",
      "title": "Diapositive del corso di Farmacologia II · AA2026–27",
      "detail": "PDF1–5 esaminati:1–2 metadati,3 figura con etichette parzialmente coperte,4–5 selezione della terapia e fattori del patogeno. Integrati4–5. La figura3 resta esclusa dalla copertura completa e non è riprodotta."
    },
    {
      "id": "APP-II",
      "title": "Appunti del corso di Farmacologia II · AA2024–25",
      "detail": "Lezione3,14ottobre2024,PDF21–24,stampa20–23: testo e figure esaminati. Semplificazioni su sicurezza,spettro,battericidia eS/I/R riconciliate; nessuna trascrizione pubblicata."
    },
    {
      "id": "KATZ",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX edizione italiana2014,da XII originale2012. Capitolo51,PDF1030–1032,stampa1010–1012. Tre pagine lette e ispezionate; esempi e regimi storici non trasferiti. Non intero capitolo o volume."
    },
    {
      "id": "RANG",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII edizione italiana2016,originale2015. Capitolo50,PDF933–935; numerazione di stampa assente nella copia. Testo e figura50.1 esaminati. Il periodo finale sul trimetoprim prosegue oltre il segmento e non viene usato per dettagli quantitativi."
    },
    {
      "id": "EMA-DAP",
      "title": "EMA · Cubicin, informazioni del prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/cubicin-epar-product-information_en.pdf",
      "detail": "Consultazione27novembre2026:selezioni4.4(pneumonia) e5.1(meccanismo). Non intero RCP; nessuna dose o nuovo profilo. Selezioni su eliminazione renale (§4.2), miopatia e funzione renale (§4.4), interazioni (§4.5) e gravidanza (§4.6) consultate il 28 novembre 2026. Nessun dosaggio o calendario di monitoraggio trasferito."
    },
    {
      "id": "EUCAST",
      "title": "EUCAST · Definizioni S,I eR",
      "url": "https://www.eucast.org/bacteria/clinical-breakpoints-and-interpretation/definition-of-s-i-and-r/",
      "detail": "Consultazione27novembre2026: definizioni ed esposizione. Nessun algoritmo prescrittivo. Riconsultate anche le sezioni wild type/ECOFF e terminologia il27novembre2026."
    },
    {
      "id": "EUCAST-TABLES",
      "title": "EUCAST · Indice delle tabelle cliniche",
      "url": "https://www.eucast.org/bacteria/clinical-breakpoints-and-interpretation/clinical-breakpoint-tables/",
      "detail": "Indice consultato27novembre2026:versione16.1,valida24giugno–31dicembre2026. Tabelle numeriche non lette integralmente né riprodotte."
    },
    {
      "id": "WHO-AMR",
      "title": "WHO · Antimicrobial resistance",
      "url": "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance",
      "detail": "Pagina16luglio2026,consultata27novembre2026: definizione e fattori di diffusione. Nessun dato epidemiologico numerico trasferito."
    },
    {
      "id": "CDC-CDIFF",
      "title": "CDC · C. difficile e microbiota",
      "url": "https://www.cdc.gov/c-diff/about/index.html",
      "detail": "Pagina13maggio2026,consultata27novembre2026: microbiota,rischio e distinzione dalla diagnosi. Nessun regime terapeutico."
    },
    {
      "id": "CDC-ASP",
      "title": "CDC · Hospital Antibiotic Stewardship",
      "url": "https://www.cdc.gov/antibiotic-use/hcp/core-elements/hospital.html",
      "detail": "Pagina16novembre2026,consultata27novembre2026. Quadro organizzativo2019 e priorità2022 distinti dalla data della pagina; selezioni introduttive e risorse,non intere linee guida."
    },
    {
      "id": "DAB-INV",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Involucro batterico",
      "detail": "PDF 6–10 esaminati. Testo e figure visibili di 6–9 controllati e integrati; pagina 10 parziale: foto di diffusione da dischetto, etichette e scala non interamente leggibili. Nessuna figura riprodotta o misura ricavata dalla fotografia."
    },
    {
      "id": "KATZ-INV",
      "title": "Katzung · Parete batterica e β-lattamici",
      "detail": "IX edizione italiana 2014, da XII originale 2012. Capitolo 43, PDF 907–909, stampa 887–889: testo visibile e figure controllati. Integrati i passaggi completi e la figura 43.3 di PDF 909 mediante sintesi originale. Fine pagina interrotta; prosecuzione non inferita. PDF 907–908 letti, non integrati."
    },
    {
      "id": "RANG-INV",
      "title": "Rang & Dale · Involucro e accesso al bersaglio",
      "detail": "VIII edizione italiana 2016, originale 2015. Capitolo 51, PDF 951–952. PDF 951 parziale: tabella raster non interamente verificata; escluso dall’integrazione. PDF 952 letto e controllato, integrato solo il passaggio sull’involucro. Numerazione tipografica assente nella resa ebook."
    },
    {
      "id": "EUCAST-DD",
      "title": "EUCAST · Disk diffusion method, versione 13.0",
      "url": "https://www.eucast.org/fileadmin/eucast/pdf/disk_test_documents/2025/Manual_v_13.0_EUCAST_Disk_Test_2025.pdf",
      "detail": "Gennaio 2025; indice corrente e selezioni del manuale consultati il 27 novembre 2026: PDF 5 (introduzione), 8 (§3.3), 15 (§8.5–8.6). Standardizzazione, diametro e calibrazione. Non intero manuale; nessun protocollo operativo o valore numerico trasferito."
    },
    {
      "id": "EUCAST-MIC",
      "title": "EUCAST · MIC determination",
      "url": "https://www.eucast.org/bacteria/methodology-and-instructions/mic-determination/",
      "detail": "Introduzione e sezioni sul metodo di riferimento e sui metodi commerciali consultate il 27 novembre 2026. Raccomandazione di settembre 2026 identificata nell’indice, ma documento collegato non letto."
    },
    {
      "id": "EUCAST-CORR",
      "title": "EUCAST · MIC:Zone diameter correlations",
      "url": "https://www.eucast.org/bacteria/development-of-clinical-breakpoints-and-ecoffs/mic-zone-diameter-correlations/",
      "detail": "Introduzione consultata il 27 novembre 2026: calibrazione dei criteri per diametro rispetto alla MIC. Dataset per specie e grafici collegati non letti; nessuna formula di conversione proposta."
    },
    {
      "id": "DAB-DIAG",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Misura e interpretazione",
      "detail": "PDF 11–15 esaminati: testo e figure di11,13–15 controllati e integrati mediante sintesi originale. PDF12 parziale per metadati oscurati nel referto storico: escluso dalla copertura completa e dall’integrazione; valori, dati personali e immagine non trasferiti. Definizioni sintetiche riconciliate con EUCAST corrente."
    },
    {
      "id": "EUCAST-ECOFF",
      "title": "EUCAST · Distribuzioni MIC ed ECOFF",
      "url": "https://mic.eucast.org/",
      "detail": "Introduzione, sezioni su ECOFF/TECOFF e limiti consultate il27novembre2026. Nessun dataset per specie o grafico estratto; nessuna prevalenza di resistenza calcolata."
    },
    {
      "id": "EUCAST-SET",
      "title": "EUCAST · Setting breakpoints",
      "url": "https://www.eucast.org/bacteria/development-of-clinical-breakpoints-and-ecoffs/setting-breakpoints/",
      "detail": "Introduzione sul processo di definizione dei breakpoint consultata il27novembre2026. Documenti SOP e articoli collegati non letti integralmente."
    },
    {
      "id": "EUCAST-VERS",
      "title": "EUCAST · About Clinical Breakpoint Tables",
      "url": "https://www.eucast.org/bacteria/development-of-clinical-breakpoints-and-ecoffs/about-clinical-breakpoints/",
      "detail": "Introduzione e paragrafo su aggiornamenti, correzioni e addenda consultati il27novembre2026. Esempi numerici della pagina non trasferiti come criteri clinici."
    },
    {
      "id": "DAB-HOST",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Fattori dell’ospite",
      "detail": "PDF 16–20 esaminati. PDF 18–20 leggibili; 18 e 20 ripetono lo stesso testo con enfasi grafica diversa e non aggiungono una sintesi distinta. Integrata pagina 19. PDF 16–17 parziali per sovrapposizioni sul grafico storico: esclusi dalla lettura completa e dall’integrazione; nessun valore o figura trasferiti."
    },
    {
      "id": "NICE-ALL",
      "title": "NICE · Drug allergy: diagnosis and management, CG183",
      "url": "https://www.nice.org.uk/guidance/cg183/chapter/Recommendations",
      "detail": "Raccomandazioni 1.1.2–1.1.3 e 1.2.1–1.2.6 consultate in estratti indicizzati ufficiali il 28 novembre 2026. Linea guida pubblicata nel 2014; accesso diretto alla pagina non riuscito (403). Nessuna lettura integrale o verifica indipendente dell’intero percorso dichiarata."
    },
    {
      "id": "CDC-ALL",
      "title": "CDC · Clinical Features of Penicillin Allergy",
      "url": "https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/index.html",
      "detail": "Pagina del 25 agosto 2025, consultata il 28 novembre 2026: etichette allergologiche, anamnesi, reazioni ritardate gravi e limiti della rivalutazione. Nessuna percentuale o procedura di test trasferita."
    },
    {
      "id": "DAB-DRUG",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Farmaco, spettro ed effetto",
      "detail": "PDF 21–25: testo visibile e grafico controllati. Integrati 21–23 e 25 mediante sintesi originale; 24 riprende definizioni già trattate. Pagina 25 priva di testo estraibile: etichette lette direttamente nell’immagine. Soglia numerica di pagina 23 non validata come universale e non trasferita; grafico 25 usato solo qualitativamente, senza riprodurlo."
    },
    {
      "id": "UKHSA-IVOS",
      "title": "UKHSA · Criteri di passaggio dalla via endovenosa alla via orale negli adulti",
      "url": "https://www.gov.uk/government/publications/antimicrobial-intravenous-to-oral-switch-criteria-for-early-switch/national-antimicrobial-intravenous-to-oral-switch-ivos-criteria-for-early-switch",
      "detail": "Pagina aggiornata il 25 ottobre 2024, consultata il 28 novembre 2026: sezioni su miglioramento clinico, via enterale e situazioni particolari. Ambito: adulti ospedalizzati. Nessun algoritmo operativo, soglia numerica o tempistica trasferiti; documenti collegati non letti integralmente."
    },
    {
      "id": "DM-AMOX-FORM",
      "title": "DailyMed · Amoxicillina in polvere per sospensione orale",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=756545f1-77af-49a0-a697-4cced31711d4",
      "detail": "Etichetta USA riconfezionata da Proficient Rx LP, revisione giugno 2022, consultata il 28 novembre 2026: selezione §2.5 sulla gestione della sospensione ricostituita. Esempio di istruzioni specifiche del prodotto; nessuna dose, concentrazione, temperatura o durata di conservazione trasferita come regola generale. Non intera scheda né aggiornamento delle indicazioni terapeutiche."
    }
  ],
  "drugs": [],
  "targets": [],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-28",
  "readingManifest": "./data/antibatterici-principi-reading.json",
  "coverage": "Copertura cumulativa circoscritta: 35 posizioni PDF con testo visibile letto (2 metadati), 6 parziali escluse, 41 ispezioni e 27 pagine con passaggi integrati. Questo lotto: 5 pagine lette e ispezionate; il testo di pagina 25 è stato letto nell’immagine, perché assente dall’estrazione. Integrate 21–23 e 25; 24 riprende concetti già trattati. Quattro pagine già lette ricontrollate nel testo. Nessun intero libro o corso letto; nessuna revisione clinica indipendente.",
  "moleculeLinks": [
    {
      "id": "CHEMBL1082",
      "label": "AMOXICILLIN"
    },
    {
      "id": "CHEMBL443",
      "label": "SULFAMETHOXAZOLE"
    },
    {
      "id": "CHEMBL387675",
      "label": "DAPTOMYCIN"
    }
  ],
  "relatedExistingChapterIds": [
    "antibiotici-beta-lattamici",
    "metabolismo-trasportatori",
    "formulazioni-sali-bioequivalenza"
  ],
  "wordCount": 4796
};
