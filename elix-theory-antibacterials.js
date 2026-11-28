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
      "id": "variabilita-pk-paziente",
      "title": "Perché la stessa dose può produrre esposizioni diverse",
      "refs": [
        "DAB-TDM",
        "APP-VAR",
        "KATZ",
        "ESICM-TDM"
      ],
      "text": "La relazione fra dose ed esposizione dipende sia dal medicinale sia dal paziente. Il regime descrive ciò che viene somministrato: quantità, via, intervallo e durata dell’infusione. La farmacocinetica descrive invece come l’organismo assorbe, distribuisce ed elimina quel farmaco. Cambiare l’intervallo modifica l’ingresso nel sistema; in un modello lineare non implica, di per sé, che siano cambiati la clearance o il volume di distribuzione. Confondere questi due livelli rende difficile capire perché una concentrazione risulti diversa da quella prevista.\n\nIl volume di distribuzione è un parametro apparente che collega la quantità presente nell’organismo alla concentrazione plasmatica; non è la misura diretta di uno spazio anatomico. La clearance esprime invece la capacità di rimuovere il farmaco dal plasma, come volume depurato per unità di tempo. Una variazione della distribuzione e una variazione dell’eliminazione possono entrambe modificare la curva, ma attraverso processi diversi. Il confronto con il capitolo sulla clearance aiuta a separare questi meccanismi prima di ragionare sull’esposizione antibatterica.\n\nNel paziente critico, permeabilità capillare e bilancio dei liquidi possono ampliare la distribuzione degli antibatterici idrofili, fra cui i beta-lattamici e gli aminoglicosidi. La funzione renale può ridursi oppure aumentare l’eliminazione: non esiste un’unica direzione del cambiamento valida per tutti i pazienti in terapia intensiva. Anche i trattamenti extracorporei introducono variabili ulteriori. Questi esempi spiegano l’incertezza dell’esposizione, senza fornire una regola automatica per correggere una dose.\n\nIl legame proteico richiede la stessa cautela. Una riduzione dell’albumina può aumentare la frazione libera di un farmaco molto legato, ma distribuzione ed eliminazione possono cambiare insieme. Una concentrazione totale più bassa non dimostra da sola una minore esposizione libera; una frazione libera maggiore non equivale automaticamente a un aumento proporzionale e persistente dell’effetto. Il riferimento deve rimanere il singolo farmaco e il tipo di misura.\n\nEtà, composizione corporea, funzione degli organi e interazioni sono quindi informazioni da interpretare, non formule universali. La frequenza con cui viene somministrata una preparazione non permette di dedurne da sola la categoria PK/PD. Per l’amoxicillina collegata al catalogo, per esempio, il ragionamento sul tempo sopra MIC deve restare distinto dalla scelta di un particolare prodotto o intervallo. Anche nello stesso paziente l’esposizione può cambiare nel corso della malattia: una valutazione iniziale non descrive necessariamente tutte le fasi successive.",
      "formula": "Regime → ingresso del farmaco; distribuzione → rapporto quantità/concentrazione; clearance → eliminazione. Paziente e momento clinico determinano il contesto."
    },
    {
      "id": "indici-pkpd-esposizione",
      "title": "Tre indici per collegare esposizione e sensibilità",
      "refs": [
        "DAB-PKPD",
        "APP-PKPD",
        "EMA-PKPD"
      ],
      "text": "La MIC descrive il risultato di una prova microbiologica; la concentrazione del farmaco nell’organismo cambia invece nel tempo. Per mettere in relazione queste informazioni si usano gli indici farmacocinetici e farmacodinamici, o PK/PD. Il grafico di partenza ha il tempo sull’asse orizzontale e la concentrazione sull’asse verticale. Una linea alla quota della MIC permette di confrontare l’esposizione con la sensibilità dell’isolato. Questo disegno descrive concentrazioni, mentre la curva di vitalità discussa prima descrive batteri: i due assi verticali non sono intercambiabili.\n\nCmax/MIC confronta il picco di concentrazione con la MIC. È un rapporto fra due concentrazioni espresse nelle stesse unità, non la loro differenza. Se si alza il picco mantenendo invariata la MIC, il rapporto aumenta; se aumenta la MIC a parità di picco, il rapporto diminuisce. L’indice mette a fuoco l’altezza dell’esposizione rispetto alla sensibilità, senza descrivere da solo quanto a lungo quella concentrazione persista.\n\nAUC/MIC mette invece in relazione la MIC con l’area sotto la curva concentrazione-tempo, calcolata in un intervallo dichiarato. L’AUC combina altezza e durata dell’esposizione: non coincide con la dose somministrata né con una quantità di farmaco espressa in milligrammi. Due curve possono avere un’area simile e picchi diversi. Cambiare l’intervallo dell’AUC cambia la domanda; per questo un valore non è interpretabile senza sapere a quale periodo si riferisce.\n\nIl tempo sopra la MIC considera la porzione dell’intervallo in cui la curva supera quella quota. La notazione percentuale richiede di dividere tale durata per l’intero intervallo fra le dosi. Un picco molto alto e breve può quindi accompagnarsi a poco tempo sopra MIC. Per i beta-lattamici, come l’amoxicillina già collegata al catalogo, questa prospettiva aiuta a comprendere perché la forma temporale dell’esposizione conti, oltre alla quantità somministrata.\n\nOccorre infine precisare se si utilizzino concentrazioni libere o totali. Il prefisso f indica la quota non legata alle proteine; un rapporto definito sulla quota libera non può essere confrontato automaticamente con un obiettivo ricavato dalla concentrazione totale. La guida EMA distingue inoltre l’indice dal suo obiettivo quantitativo: quest’ultimo richiede prove riferite a farmaco, microrganismo, modello e risposta considerata. Una tabella generale per classi non sostituisce questi elementi.",
      "formula": "Picco/MIC → altezza relativa; AUC nell’intervallo/MIC → esposizione integrata; %fT>MIC → frazione dell’intervallo con concentrazione libera sopra MIC."
    },
    {
      "id": "effetto-persistente-e-obiettivi",
      "title": "Persistenza dell’effetto e limiti degli obiettivi PK/PD",
      "refs": [
        "DAB-PKPD",
        "KATZ-AG",
        "APP-PKPD",
        "EMA-PKPD",
        "IDSA-VAN"
      ],
      "text": "Dire che un antibatterico ha un’attività concentrazione-dipendente descrive una relazione osservata fra esposizione ed effetto. Non significa che ogni aumento di dose produca un beneficio proporzionale, né che il picco debba essere il più alto possibile. L’esposizione incontra anche i limiti della tollerabilità, mentre distribuzione, funzione renale e sensibilità dell’isolato possono cambiare il risultato. Allo stesso modo, l’etichetta tempo-dipendente non rende automaticamente appropriata un’infusione continua per qualsiasi medicinale o infezione.\n\nGli aminoglicosidi collegano il ragionamento al bersaglio batterico. Interferiscono con la funzione della subunità ribosomiale 30S e con la produzione corretta delle proteine. Negli esperimenti, l’inibizione della ricrescita può persistere dopo che l’esposizione efficace è cessata: è l’effetto post-antibiotico. La diminuzione della concentrazione extracellulare e il recupero della popolazione batterica sono processi distinti. Questa persistenza farmacodinamica non va definita come una lenta eliminazione del farmaco dall’organismo, che è invece un fenomeno farmacocinetico.\n\nUn ragionamento utile consiste nell’immaginare la rimozione del farmaco da una coltura dopo un’esposizione controllata. Se la ricrescita riprende con ritardo rispetto al controllo, si descrive una persistenza dell’effetto; non si è dimostrato che il farmaco rimanga a lungo nel plasma di una persona. Il confronto chiarisce il concetto, ma non assegna una durata universale al fenomeno e non permette di ricavare da solo un intervallo terapeutico. Il regime deve essere valutato per il singolo farmaco e contesto.\n\nLa vancomicina mostra un altro limite delle classificazioni troppo rigide. Il consenso ASHP/IDSA/PIDS/SIDP del 2020, indicato come corrente sul sito IDSA alla consultazione, privilegia la valutazione dell’AUC per il monitoraggio nelle infezioni gravi da MRSA. Una concentrazione minima prima della dose successiva è un singolo punto della curva e non coincide con l’area. Le prove considerate derivano soprattutto da infezioni invasive, in particolare del sangue: non vanno estese automaticamente a infezioni lievi o ad altre specie. Qui non sono riportati dosaggi, soglie o algoritmi di monitoraggio.\n\nGli indici aiutano dunque a formulare una domanda verificabile sull’esposizione. L’obiettivo microbiologico, la sicurezza e l’esito clinico restano piani collegati ma distinti: raggiungere un valore previsto dal modello non garantisce, da solo, la guarigione.",
      "formula": "Eliminazione del farmaco → andamento della concentrazione; recupero del batterio → andamento dell’effetto. Indice PK/PD + obiettivo documentato + contesto clinico → interpretazione."
    },
    {
      "id": "tdm-misura-interpretazione",
      "title": "Monitoraggio terapeutico: dal campione a una decisione motivata",
      "refs": [
        "DAB-TDM",
        "SPS-TDM",
        "SSC-TDM",
        "EUCAST"
      ],
      "text": "Il monitoraggio terapeutico del farmaco, indicato con TDM, collega una misura di concentrazione a una domanda clinica. Il suo scopo è comprendere l’esposizione individuale e contribuire a una terapia efficace e tollerabile. Non coincide con la semplice disponibilità di un esame di laboratorio: il dato acquista significato quando viene interpretato insieme al farmaco, al regime effettivamente ricevuto e alle condizioni del paziente.\n\nLa prima domanda riguarda il campione: quale medicinale è stato misurato e quando, rispetto alle somministrazioni reali? Orari, eventuali omissioni e modalità di somministrazione devono essere documentati. Un risultato privo di questa storia può essere confrontato con il riferimento sbagliato. Il processo deve inoltre chiarire chi riceve il risultato, chi lo interpreta e come vengono attuate e ricontrollate le decisioni. Un numero corretto, lasciato senza seguito, non completa il monitoraggio.\n\nOccorre poi distinguere la misura dall’informazione che si vuole ricavare. Una concentrazione in un singolo istante non è l’intera curva e non coincide con l’AUC; per ricostruire l’esposizione servono metodi appropriati al farmaco e al contesto. Il monitoraggio non sostituisce neppure l’identificazione del patogeno, la valutazione della sede d’infezione o l’osservazione della risposta. Sono domande diverse che devono convergere nell’interpretazione.\n\nLa MIC appartiene alla prova microbiologica, mentre il TDM riguarda l’esposizione del paziente. Misurare il farmaco non modifica la MIC dell’isolato. Nella terminologia EUCAST, I significa sensibile con esposizione aumentata: non una generica sensibilità intermedia e non un’indicazione automatica al TDM. La categoria R non diventa sensibile per il solo fatto di aumentare arbitrariamente l’esposizione.\n\nLe indicazioni al monitoraggio dipendono dalle prove disponibili. La Surviving Sepsis Campaign 2026 suggerisce di considerarlo caso per caso in pazienti adulti selezionati con sepsi o shock settico, tenendo conto del contesto e delle risorse disponibili. La raccomandazione è condizionale e la certezza delle prove è molto bassa. Questo ambito non autorizza a estenderla indistintamente a ogni antibatterico, infezione o popolazione.\n\nRidurre tossicità e insuccessi costituisce dunque una finalità del TDM, non un risultato garantito da qualsiasi misurazione. Il ciclo si chiude verificando se il dato abbia chiarito la domanda iniziale e se la decisione resti appropriata mentre cambia il paziente. Qui il percorso è descritto per comprendere il ragionamento farmacologico; obiettivi numerici, tempi di prelievo e algoritmi richiedono riferimenti specifici.",
      "formula": "Domanda → somministrazioni documentate → campione interpretabile → confronto pertinente → decisione e rivalutazione. Concentrazione, MIC ed esito restano misure distinte."
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
      "id": "intento-della-terapia",
      "title": "Profilassi, terapia empirica e terapia mirata: domande diverse",
      "refs": [
        "DAB-INTENTO",
        "APP-DURATA",
        "KATZ",
        "NICE-PROF",
        "SSC-TEMPI"
      ],
      "text": "Lo scopo dell’impiego di un antibatterico e il suo bersaglio molecolare descrivono due aspetti diversi. Un beta-lattamico continua a interferire con la sintesi della parete batterica, ma il motivo per cui viene considerato può essere la prevenzione di una particolare infezione oppure il trattamento di un’infezione sospetta o documentata. Per comprendere la scelta occorre esplicitare la domanda clinica prima di confrontare spettro, sensibilità e concentrazioni. L’etichetta «antibiotico» non contiene già l’indicazione.\n\nLa profilassi mira a ridurre un rischio infettivo definito in una situazione per la quale esiste un’indicazione preventiva. Non è una copertura indistinta contro qualsiasi evento futuro. La profilassi chirurgica offre un esempio: NICE distingue le procedure nelle quali è indicata da quelle pulite, non protesiche e non complicate, nelle quali non è raccomandata di routine. Se è già presente una ferita infetta, la necessità di trattamento costituisce una questione ulteriore. Queste distinzioni chiariscono il fine dell’intervento senza trasformare una categoria didattica in una prescrizione.\n\nLa terapia empirica affronta invece un’infezione ritenuta possibile o probabile prima che siano disponibili tutte le informazioni sul microrganismo responsabile e sulla sua sensibilità. «Empirica» non significa casuale: il ragionamento combina sede, quadro clinico, condizioni dell’ospite ed epidemiologia pertinente. Lo spettro necessario dipende da questa ipotesi, non da una graduatoria astratta di antibiotici più potenti. Una sintomatologia compatibile con infezione non identifica da sola un batterio; l’incertezza diagnostica deve rimanere riconoscibile mentre si raccolgono nuove informazioni.\n\nLa terapia mirata utilizza dati microbiologici pertinenti per rendere più specifica la scelta. La pertinenza è essenziale: il risultato deve essere interpretato rispetto al campione, alla sede e alla malattia osservata. Anche una sensibilità in vitro favorevole deve incontrare un’esposizione adeguata e un contesto clinico compatibile. Per l’amoxicillina già collegata al catalogo, il bersaglio di parete resta lo stesso quando aumenta la conoscenza del patogeno; cambia la giustificazione della scelta, non il meccanismo della molecola. «Mirata» non significa che l’infezione sia già risolta.\n\nQueste categorie non formano una sequenza obbligatoria che ogni paziente debba attraversare. Una profilassi può concludersi senza che compaia un’infezione; una diagnosi alternativa può far venire meno la ragione di una terapia empirica. Viceversa, l’assenza di isolamento microbiologico non dimostra da sola l’assenza di infezione: qualità del campione, trattamenti precedenti e limiti dei metodi possono influire sul risultato. La rivalutazione ricostruisce il significato dei dati, anziché applicare automaticamente l’ultimo nome di una sequenza. Nella sepsi, le raccomandazioni SSC collegano esplicitamente i nuovi risultati alla rivalutazione diagnostica e alla de-escalation, conservando la distinzione fra indicazione, scelta del farmaco e risposta del paziente.",
      "formula": "Scopo preventivo → rischio definito; terapia empirica → ipotesi clinica esplicita; terapia mirata → dati pertinenti. Nessuna delle tre etichette dimostra da sola la guarigione."
    },
    {
      "id": "tempi-durata-terapia",
      "title": "Quando iniziare e quanto proseguire: urgenza, prove e rivalutazione",
      "refs": [
        "DAB-INTENTO",
        "APP-DURATA",
        "SSC-TEMPI",
        "SIS-DURATA",
        "LIU-TEMPI",
        "PITSTOP-2026"
      ],
      "text": "Il tempo dell’inizio e la durata complessiva rispondono a problemi differenti. Il primo riguarda il rischio di lasciare un’infezione pericolosa senza trattamento efficace; la seconda riguarda quanto a lungo mantenere un’esposizione utile nel quadro che evolve. Entrambi richiedono una diagnosi ragionata, ma non si ricavano dalla sola MIC o dalla scomparsa della febbre. Neppure la classificazione batteriostatica o battericida stabilisce, da sola, quanto debba durare una terapia.\n\nNella sepsi il contesto modifica l’urgenza. Le raccomandazioni SSC 2026 distinguono shock settico e sepsi probabile o definita dalle situazioni senza shock in cui l’infezione è soltanto possibile o poco probabile. La rapida valutazione delle alternative e la sorveglianza clinica fanno parte di queste distinzioni; non sono equivalenti a un rinvio indiscriminato. Il punto didattico è comprendere perché gravità e probabilità diagnostica entrino insieme nel ragionamento. Le finestre operative richiedono i percorsi clinici pertinenti e non sono riprodotte qui come un algoritmo universale.\n\nAnche la lettura delle prove sul tempo richiede attenzione. In uno studio osservazionale, «inizio del ritardo» può significare registrazione in pronto soccorso oppure comparsa di ipotensione: sono riferimenti diversi. Liu e collaboratori hanno osservato un’associazione fra ritardo dalla registrazione e mortalità ospedaliera in una coorte di pazienti con sepsi. Un’associazione aggiustata per fattori misurati non rende però ogni ora una perdita causale identica di sopravvivenza per ogni paziente. Occorre distinguere popolazione, confronto, punto di partenza dell’orologio ed esito.\n\nUna sperimentazione randomizzata pone una domanda più circoscritta. Nel PITSTOP-Antibiotics, pubblicato nel novembre 2026, la ceftriaxone preospedaliera è stata confrontata con placebo in adulti con sospetta infezione, febbre e ipotensione; le cure ospedaliere restavano disponibili in entrambi i gruppi. Non è stata dimostrata una riduzione della mortalità ospedaliera. Questo risultato riguarda quella strategia e quella popolazione: non dimostra che sia innocuo ritardare un trattamento efficace nello shock settico. Qui sono stati confrontati l’abstract e i punti essenziali dello studio, non svolta una revisione indipendente dell’intero dossier.\n\nLa durata richiede a sua volta un piano riferito alla sindrome infettiva, all’ospite, all’andamento clinico e al controllo della fonte. Il miglioramento iniziale non misura direttamente quanti batteri siano rimasti; non esiste una percentuale universale di eliminazione che trasformi automaticamente il benessere in guarigione. D’altra parte, prolungare sempre il trattamento non garantisce l’eradicazione. Le linee guida SIS sulle infezioni intra-addominali distinguono situazioni e popolazioni dopo un adeguato controllo della fonte: la presenza di un ascesso non implica da sola una durata indefinitamente lunga. La disponibilità di un farmaco attivo e il controllo del focolaio restano aspetti complementari.\n\nPer lo studio, la distinzione utile è quindi fra durata pianificata e rivalutazione motivata. Una decisione clinica di abbreviare, proseguire, modificare o interrompere il trattamento deve avere una ragione documentabile; non coincide con una modifica autonoma basata su un solo sintomo. Sintomi, dati microbiologici e andamento degli esami contribuiscono al quadro, senza diventare singolarmente un certificato di eradicazione. La stewardship collega questi passaggi, mantenendo espliciti obiettivo e criteri di riesame.",
      "formula": "Inizio: urgenza + probabilità di infezione. Prosecuzione: diagnosi + risposta + controllo della fonte. Una misura isolata non decide l’intero percorso."
    },
    {
      "id": "selezione-e-competizione",
      "title": "Selezione della resistenza: conta anche la competizione",
      "refs": [
        "DAB-SELEZIONE",
        "APP-RISPOSTA",
        "CDC-SELEZIONE",
        "GULLBERG-2011"
      ],
      "text": "L’emergere della resistenza contiene almeno due domande: come compare una caratteristica che modifica la risposta al farmaco e perché i batteri che la possiedono diventano più frequenti. Una mutazione o l’acquisizione di materiale genetico riguarda la prima domanda; la selezione riguarda la seconda. Separarle evita di descrivere il batterio come se decidesse di costruire una difesa perché gli serve. La presenza dell’antibiotico modifica le condizioni nelle quali varianti diverse sopravvivono e si moltiplicano.\n\nLa selezione può favorire una variante già presente senza trasformare ogni batterio sensibile in uno resistente. Se i concorrenti sono maggiormente ostacolati, i portatori della caratteristica vantaggiosa possono aumentare la propria quota nella popolazione. Quota e numero assoluto sono misure differenti: dire che i resistenti diventano più frequenti non significa, da solo, che il numero totale dei batteri stia crescendo. Analogamente, un cambiamento della composizione di una popolazione non è la prova che sia comparsa una nuova mutazione durante il trattamento. La frase didattica «le mutazioni sono selezionate» va quindi riferita al destino delle varianti, senza farne un’affermazione universale sull’assenza di effetti dell’esposizione sui processi che generano variabilità.\n\nAnche concentrazioni inferiori alla MIC possono modificare la competizione. Negli esperimenti di Gullberg e collaboratori, coppie di ceppi sensibili e resistenti venivano confrontate per osservare come cambiasse il loro rapporto. Una concentrazione che lasciava ancora crescere il ceppo sensibile poteva rallentarlo abbastanza da favorire il concorrente resistente. La MIC e la minima concentrazione selettiva, MSC, rispondono dunque a domande diverse: inibizione della crescita osservabile nella prova di sensibilità e bilancio competitivo fra ceppi nelle condizioni studiate. La MSC dipende anche dal costo biologico della resistenza. Non è un nuovo breakpoint clinico né una concentrazione da raggiungere nel paziente. Questi risultati sperimentali non definiscono una dose o una soglia universale di sicurezza.\n\nIl collegamento con i bersagli farmacologici completa il ragionamento. Una modifica delle proteine leganti le penicilline, PBP, può cambiare l’interazione con un beta-lattamico; altri meccanismi possono ridurre l’accesso del farmaco, espellerlo o inattivarlo. Il meccanismo spiega come cambia la risposta del batterio, mentre la selezione spiega come cambia la frequenza dei suoi portatori. Inoltre, la diffusione di materiale genetico fra batteri consente il passaggio di caratteristiche di resistenza anche a destinatari che non erano stati direttamente esposti all’antibiotico. Selezione, trasferimento e diffusione dei microrganismi possono quindi concorrere allo stesso problema, senza essere sinonimi. La stewardship deve considerare questa dimensione di popolazione insieme all’efficacia della terapia nel singolo paziente.",
      "formula": "Origine della variante → caratteristica del batterio. Selezione → cambiamento della sua frequenza. MIC → inibizione nel test; MSC → competizione nelle condizioni studiate."
    },
    {
      "id": "origine-e-trasmissione",
      "title": "Origine e trasmissione: classificare la resistenza senza confondere i livelli",
      "refs": [
        "DAB-GENETICA",
        "CDC-TRASFERIMENTO",
        "EUCAST-FENOTIPI"
      ],
      "text": "Per descrivere una resistenza occorre precisare quale domanda si sta ponendo. La distinzione fra intrinseca e acquisita riguarda il rapporto con le caratteristiche abituali del microrganismo; quella fra cromosomica ed extracromosomica riguarda la sede del materiale genetico; quella fra mutazione e acquisizione di DNA riguarda l’origine di una variazione. Il meccanismo biochimico, invece, spiega quale passaggio dell’azione antibatterica viene ostacolato. Sono coordinate complementari: chiamare una resistenza «cromosomica» non dice ancora quale farmaco coinvolga né quale proteina sia cambiata.\n\nNel linguaggio biologico, la resistenza intrinseca richiama proprietà normalmente associate a un gruppo batterico, come una barriera all’accesso del farmaco o l’assenza di un bersaglio utile. La resistenza acquisita indica una differenza comparsa in una popolazione rispetto al comportamento abituale: può dipendere da una mutazione oppure dall’acquisizione di materiale genetico. Queste categorie non descrivono due soli meccanismi. Una minore permeabilità, per esempio, può essere parte dell’organizzazione ordinaria dell’involucro oppure derivare da una modifica successiva. Per studiare il fenomeno bisogna quindi collegare il termine al microrganismo, all’antibiotico e alla caratteristica effettivamente osservata.\n\nPer l’interpretazione di laboratorio serve una terminologia più operativa. EUCAST ha sostituito il precedente documento sulla resistenza intrinseca con quelli sui fenotipi resistenti e sensibili attesi, organizzati per specie. Questi documenti aiutano a valutare la coerenza fra identificazione e risultato di sensibilità. Un risultato inatteso richiede verifica, anziché essere accettato come eccezione certa o corretto arbitrariamente. «Atteso» descrive il comportamento documentato della grande maggioranza degli isolati nella combinazione considerata; non identifica automaticamente un singolo gene. Il concetto biologico e lo strumento di validazione del referto vanno dunque tenuti distinti.\n\nLa trasmissione verticale accompagna il passaggio dell’informazione genetica alle cellule discendenti; quella orizzontale implica un passaggio fra batteri. Tre vie aiutano a orientarsi: nella coniugazione il trasferimento richiede contatto cellulare, nella trasformazione viene acquisito DNA presente nell’ambiente e nella trasduzione intervengono batteriofagi. I plasmidi possono veicolare geni di resistenza, mentre i trasposoni possono spostare sequenze fra plasmide e cromosoma. La posizione di un determinante non è quindi una descrizione completa della sua storia o della sua mobilità.\n\nNe deriva che «acquisita» non significa necessariamente «plasmidica», né «cromosomica» significa resistenza a un solo antibiotico. Uno stesso cambiamento può influire su più molecole; più determinanti possono inoltre coesistere nello stesso batterio. Le percentuali generiche attribuite alle due sedi genetiche nelle diapositive non vengono adottate come una distribuzione universale. Nel ragionamento su un’infezione è più utile distinguere la proprietà osservata, il suo possibile meccanismo e la modalità di diffusione. La selezione descritta nella sezione precedente può favorire i portatori di queste caratteristiche, ma non sostituisce la spiegazione di come esse siano nate o siano state trasferite.",
      "formula": "Caratteristica abituale o acquisita → origine biologica. Cromosoma o plasmide → sede genetica. Trasmissione verticale o orizzontale → diffusione. Fenotipo atteso → coerenza del risultato di laboratorio."
    },
    {
      "id": "meccanismi-di-resistenza",
      "title": "Dal gene al bersaglio: quattro modi di ostacolare l’antibiotico",
      "refs": [
        "DAB-GENETICA",
        "APP-MECCANISMI",
        "KATZ-INV",
        "FDA-AUGMENTIN-MECCANISMI",
        "ROPER-VANA",
        "ARTHUR-VANA"
      ],
      "text": "Il confronto fra antibiotico e batterio può essere seguito come una sequenza: il farmaco deve raggiungere una struttura pertinente, conservarsi in forma attiva e interagire con essa abbastanza da compromettere una funzione. La resistenza può interrompere passaggi differenti. Questa mappa rende più comprensibili le classificazioni delle diapositive e impedisce di chiamare ogni bersaglio «recettore»: una proteina enzimatica, un RNA ribosomiale e un precursore della parete sono entità diverse, pur potendo partecipare all’effetto farmacologico.\n\nIl primo ostacolo è un accesso ridotto. Nei Gram-negativi la membrana esterna e le porine contribuiscono a determinare quali molecole raggiungano lo spazio periplasmico o proseguano verso l’interno. Una variazione dell’ingresso può ridurre la quantità disponibile dove serve. Il secondo è l’efflusso: sistemi di trasporto allontanano il farmaco e possono abbassarne la concentrazione nel compartimento pertinente. Ingresso ed espulsione concorrono al bilancio locale, ma non sono lo stesso processo. Non si deve inoltre immaginare che tutti gli antibiotici debbano entrare nel citoplasma: i beta-lattamici agiscono sulle PBP associate alla membrana, coinvolte nella costruzione della parete.\n\nIl terzo meccanismo è l’inattivazione del farmaco. Le beta-lattamasi possono idrolizzare l’anello beta-lattamico, facendo perdere alla molecola l’attività utile prima che raggiunga il bersaglio. La distinzione fra PBP e beta-lattamasi è essenziale: le prime partecipano alla sintesi del peptidoglicano e sono bersagli dell’antibiotico; le seconde possono distruggerlo. Nell’associazione amoxicillina–acido clavulanico, l’amoxicillina agisce sulle PBP e il clavulanato inattiva alcune beta-lattamasi. Il documento FDA del 2026 specifica questa limitazione. L’immagine didattica del componente che si «sacrifica» non va intesa come una semplice precedenza nella degradazione: il punto è l’inattivazione dell’enzima. Da ciò non segue che l’associazione superi qualunque resistenza. Un bersaglio modificato o un accesso insufficiente pongono problemi diversi; anche le beta-lattamasi non sono tutte ugualmente sensibili allo stesso inibitore.\n\nIl quarto meccanismo modifica l’interazione con il bersaglio. PBP con minore affinità possono ridurre l’effetto di un beta-lattamico; modificazioni dell’RNA ribosomiale possono ostacolare il legame di altri antibiotici. L’esempio della vancomicina chiarisce perché non sia sufficiente parlare di «recettore alterato». La molecola riconosce una terminazione dei precursori del peptidoglicano. In sistemi di resistenza come quello associato a VanA, la produzione di precursori terminanti in D-alanina–D-lattato al posto di D-alanina–D-alanina riduce il riconoscimento da parte del farmaco. È una modifica del substrato della costruzione della parete, distinta dall’alterazione di una PBP. Gli studi su VanA documentano enzimi e determinanti genetici specifici: la formula «una serie di mutazioni» non basta a descrivere ogni caso e non esaurisce i diversi meccanismi di resistenza alla vancomicina.\n\nQuesti processi possono combinarsi nello stesso microrganismo. Riconoscerne uno aiuta a spiegare il fenotipo, ma non ricostruisce da solo tutte le sensibilità né determina automaticamente la terapia di un’infezione. Il collegamento con la patologia richiede ancora identificazione, sede, esposizione e condizioni dell’ospite. La mappa serve a formulare domande precise: il farmaco arriva, resta attivo, viene espulso oppure incontra una struttura diversa?",
      "formula": "Accesso ridotto → meno farmaco al bersaglio. Efflusso → maggiore allontanamento. Inattivazione → farmaco alterato. Modifica del bersaglio o del precursore → interazione meno efficace."
    },
    {
      "id": "resistenza-e-prevenzione",
      "title": "Prevenire la resistenza: uso, trasmissione e lettura dei dati",
      "refs": [
        "DAB-PREVENZIONE",
        "APP-II-PREVENZIONE",
        "WHO-ONEHEALTH",
        "SUN2012"
      ],
      "text": "La selezione di batteri resistenti e la loro diffusione sono processi collegati, sui quali si può intervenire in modi diversi. Ridurre un’esposizione antibiotica non necessaria limita una pressione selettiva evitabile; impedire il passaggio di un microrganismo fra persone limita la trasmissione anche quando la resistenza è già presente. Una prescrizione appropriata e una buona prevenzione delle infezioni rispondono dunque a problemi complementari. La comparsa di un’infezione resistente non dimostra, da sola, che il paziente abbia assunto male un antibiotico: il ceppo può essere stato acquisito già resistente.\n\nLa prospettiva One Health considera insieme salute umana, animale e ambiente. Ospedale, territorio, allevamenti, produzione alimentare e sistemi idrici non sono compartimenti senza contatti. Il coordinamento fra questi settori serve a ridurre infezioni, uso inappropriato e circolazione dei microrganismi. Nella sintesi WHO del 2026, prevenzione, igiene, vaccinazioni raccomandate, diagnosi e accesso a trattamenti efficaci concorrono allo stesso obiettivo. Una rappresentazione didattica dei collegamenti non permette però di attribuire una quota numerica del problema a ciascun settore: percentuali e quantità richiedono una fonte, un anno, un territorio e una definizione della misura.\n\nIl rapporto fra consumo e resistenza si può studiare anche nel tempo. Sun e colleghi analizzarono serie statunitensi del 1999–2007 e riscontrarono, per alcune classi, una correlazione fra prescrizioni e resistenza osservata con un ritardo di un mese. È un risultato riferito a serie aggregate e a specifiche coppie farmaco–microrganismo. Non stabilisce che dopo un mese di terapia ogni paziente, reparto o ambulatorio sviluppi inevitabilmente resistenza. Né una correlazione temporale, da sola, separa tutti i contributi di selezione, trasmissione e cambiamenti nella popolazione osservata.\n\nLa lettura di un grafico viene prima della conclusione. Una curva di variazione stagionale può assumere valori negativi perché rappresenta scostamenti da un riferimento: non significa che esistano prescrizioni o prevalenze negative. Due assi con unità diverse non consentono di confrontare direttamente le altezze delle curve. Per interpretare una percentuale di resistenza bisogna inoltre identificare quali isolati entrano nel denominatore, quali campioni sono stati raccolti e con quali criteri viene definita la resistenza. Questo controllo collega la sorveglianza alle sezioni su antibiogramma e versione dei criteri interpretativi, senza trasformare un andamento di popolazione nella prognosi del singolo malato.\n\nSul piano farmacologico, usare bene un antibatterico richiede di raccordare indicazione, attività sul patogeno ed esposizione nella sede interessata. La dose o il monitoraggio delle concentrazioni non correggono automaticamente una scelta priva di indicazione; il TDM mantiene gli scopi e i limiti già discussi nel capitolo. Ricerca di nuove molecole e modifiche strutturali possono ampliare le possibilità terapeutiche, ma non sostituiscono prevenzione e rivalutazione dell’uso. Il risultato da cercare è l’efficacia della cura appropriata insieme alla riduzione delle esposizioni e delle trasmissioni evitabili, non il semplice aumento o azzeramento del consumo.",
      "formula": "Serve trattare? → L’esposizione è appropriata? → Come si limita la diffusione? — Schema originale qualitativo: indicazione, farmacologia e prevenzione agiscono su passaggi differenti. Non è un algoritmo prescrittivo né una previsione numerica della resistenza."
    },
    {
      "id": "associazioni-antibatteriche",
      "title": "Associazioni: copertura, sinergia e barriera alla resistenza",
      "refs": [
        "DAB-ASSOCIAZIONI",
        "APP-II-ASSOCIAZIONI",
        "KATZ-ASSOCIAZIONI",
        "IDSA2026-ASSOCIAZIONI"
      ],
      "text": "Associare due antibatterici significa modificare più di una variabile: spettro, bersagli, distribuzione, interazioni e rischi. Il numero di farmaci non misura quindi la qualità della terapia. Prima di discutere un’associazione occorre definirne lo scopo. Aumentare la probabilità di coprire un patogeno ancora sconosciuto, trattare più patogeni documentati e ottenere un’interazione favorevole sullo stesso batterio sono obiettivi diversi. Anche un singolo agente può coprire più specie: la presenza di un’infezione polimicrobica non dimostra automaticamente la necessità di più antibiotici.\n\nLa sinergia riguarda l’effetto congiunto rispetto a un riferimento che descrive l’effetto atteso dei componenti; l’antagonismo indica un effetto inferiore a quello atteso. Una copertura più ampia non basta a dimostrare sinergia: può semplicemente aggiungere specie sensibili a uno dei due farmaci. Il risultato di una prova in vitro dipende da metodo, concentrazioni, microrganismo ed esito misurato. Un’interazione osservata sulla crescita o sulla sopravvivenza batterica non dimostra da sola un vantaggio clinico, perché nel paziente devono risultare adeguati anche accesso alla sede, esposizione e tollerabilità.\n\nI meccanismi aiutano a capire perché alcune combinazioni siano plausibili. Sulfametossazolo e trimetoprim interferiscono con passaggi successivi del metabolismo dei folati: i bersagli sono enzimi di una via biosintetica, non recettori umani. Un inibitore di β-lattamasi può invece proteggere il componente β-lattamico dall’inattivazione, purché agisca sull’enzima coinvolto; non ripristina necessariamente l’attività contro ogni meccanismo resistente. Un terzo modello è l’aumento dell’accesso di un farmaco quando un altro altera la parete. Sono spiegazioni farmacologiche: non autorizzano a ricavare un regime terapeutico dal solo diagramma del bersaglio.\n\nLa barriera alla resistenza riguarda quanto sia difficile per una popolazione acquisire o selezionare caratteristiche capaci di compromettere l’attività del trattamento. L’impiego di più componenti può contribuire a tale barriera in contesti specifici, ma non rende impossibile l’evoluzione della resistenza. Servono attività effettiva ed esposizione adeguata dei componenti rilevanti; la presenza di due nomi nella prescrizione non garantisce due ostacoli efficaci. Analogamente, una diversa distribuzione tissutale pone una domanda sulla copertura della sede: non dimostra che tutte le infezioni sistemiche richiedano farmaci destinati a compartimenti differenti. I ragionamenti sulle diverse fasi di un ciclo infettivo vanno verificati per il patogeno considerato, senza trasferire automaticamente schemi antivirali agli antibatterici.\n\nUn esempio dei limiti clinici viene dalla guida IDSA 2026 sulle infezioni da Pseudomonas aeruginosa con resistenza difficile da trattare. Quando è confermata la sensibilità a uno dei β-lattamici specificati nella guida, il gruppo non suggerisce di proseguire di routine l’associazione con un ulteriore antibiotico: manca un beneficio clinico dimostrato e aumentano i possibili eventi avversi. Mancano inoltre dati clinici che dimostrino in questo contesto la prevenzione della resistenza mediante l’associazione. Il caso illustra perché il razionale empirico iniziale debba essere rivalutato alla luce dei risultati microbiologici; non è una regola estendibile a ogni patogeno o sindrome.\n\nIl confronto finale include dunque benefici attesi, tossicità sovrapposte, interazioni, esposizione del microbiota e possibilità di semplificare quando cambiano le informazioni. Le associazioni si studiano collegando il bersaglio alla malattia e alla qualità delle prove, mantenendo separati plausibilità biologica, effetto di laboratorio e risultato clinico.",
      "formula": "Copertura più ampia ≠ sinergia dimostrata ≠ beneficio clinico garantito — Schema originale: ogni passaggio richiede prove pertinenti. Più componenti non assicurano una barriera assoluta alla resistenza né una migliore tollerabilità."
    },
    {
      "id": "risposta-insufficiente",
      "title": "Risposta insufficiente: ricostruire la causa prima di attribuirla alla resistenza",
      "refs": [
        "DAB-SELEZIONE",
        "APP-RISPOSTA",
        "KATZ-RISPOSTA",
        "EUCAST",
        "SSC-TEMPI"
      ],
      "text": "Un esito clinico sfavorevole e un risultato di resistenza in laboratorio non descrivono lo stesso evento. Il primo riguarda una persona e l’evoluzione della sua malattia; il secondo riguarda un microrganismo, un farmaco e un’interpretazione standardizzata della sensibilità. La resistenza può contribuire all’insuccesso, ma non è l’unica spiegazione. Per lo stesso motivo, un antibiogramma favorevole non certifica che ogni altro elemento necessario alla risposta sia presente. EUCAST parla di probabilità di successo in relazione all’esposizione, non di una garanzia individuale di guarigione.\n\nIl primo livello del ragionamento riguarda la diagnosi. Il quadro osservato è ancora compatibile con l’ipotesi iniziale? Il microrganismo identificato spiega la malattia in quella sede, oppure il risultato richiede un’interpretazione diversa? Una causa non infettiva può imitare parte delle manifestazioni attribuite a un’infezione. Nell’adulto con sospetta sepsi e infezione non confermata, SSC 2026 richiede una rivalutazione continua delle diagnosi alternative. Questa indicazione non autorizza a sospendere autonomamente un trattamento: chiarisce che modificare un antibiotico non corregge necessariamente un’ipotesi diagnostica errata.\n\nIl secondo livello collega il risultato microbiologico all’esposizione realmente ottenuta. Il farmaco deve essere somministrato, assorbito quando necessario e distribuito nella sede pertinente, secondo caratteristiche che dipendono dalla molecola e dal paziente. La prescrizione registrata non coincide automaticamente con l’esposizione raggiunta. Difficoltà di assunzione, problemi di somministrazione o variazioni farmacocinetiche possono interrompere questa relazione. Non basta perciò classificare il paziente come «poco aderente»: occorre comprendere quale passaggio abbia impedito l’impiego previsto. Il monitoraggio delle concentrazioni, quando appropriato, risponde a una domanda definita; non costituisce una verifica universale per qualsiasi antibiotico.\n\nIl terzo livello riguarda il focolaio e l’ospite. Un ascesso, un’ostruzione o materiale estraneo possono mantenere condizioni favorevoli alla persistenza dell’infezione, mentre un’alterazione delle difese può modificare la capacità di risposta. Nelle infezioni che richiedono controllo della fonte, l’attività del farmaco e la gestione del problema anatomico sono complementari. L’esempio di un’infezione associata a un’ostruzione aiuta a separare il bersaglio batterico dalla condizione che sostiene il focolaio: aumentare lo spettro non rimuove l’ostacolo anatomico. Le raccomandazioni SSC collegano esplicitamente la valutazione della fonte al percorso della sepsi.\n\nInfine, il quadro può cambiare nel tempo: un altro microrganismo può contribuire a una nuova infezione oppure può emergere una popolazione con diversa sensibilità. Il risultato iniziale rimane un dato riferito al campione e al momento in cui è stato ottenuto. La conclusione didattica non è ripetere indiscriminatamente esami o ampliare sempre la terapia, ma distinguere le ipotesi che una rivalutazione clinica deve risolvere. Diagnosi, microrganismo, esposizione, focolaio e difese dell’ospite formano una spiegazione articolata della risposta; nessuno di questi elementi, isolato, sostituisce gli altri.",
      "formula": "Risposta insufficiente → riesaminare diagnosi, pertinenza microbiologica, esposizione, focolaio e ospite. Esito clinico e categoria di sensibilità restano informazioni distinte."
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
    },
    {
      "question": "Una curva concentrazione-tempo e una curva del numero di batteri vitali mostrano la stessa grandezza?",
      "answer": "No. La prima descrive l’esposizione al farmaco; la seconda descrive la popolazione batterica. Gli indici PK/PD collegano esposizione e sensibilità, senza rendere equivalenti le due misure."
    },
    {
      "question": "Un picco più alto implica necessariamente un tempo sopra MIC più lungo?",
      "answer": "No. Una curva alta ma breve può superare la MIC per meno tempo di una curva più bassa e prolungata. Picco, area e durata descrivono aspetti diversi."
    },
    {
      "question": "L’effetto post-antibiotico coincide con una lenta eliminazione del farmaco?",
      "answer": "No. È una persistenza dell’effetto sulla ricrescita batterica dopo l’esposizione; l’eliminazione descrive invece la rimozione del farmaco dall’organismo."
    },
    {
      "question": "Un indice AUC/MIC e il suo obiettivo sono la stessa informazione?",
      "answer": "No. L’indice definisce il confronto; l’obiettivo specifica un valore associato a una risposta in un contesto documentato. Occorrono intervallo, tipo di concentrazione, farmaco, microrganismo e prove pertinenti."
    },
    {
      "question": "Cambiare l’intervallo fra le dosi significa necessariamente cambiare la clearance?",
      "answer": "No. L’intervallo modifica il regime di ingresso. Nel modello lineare, questo non modifica di per sé il parametro che descrive l’eliminazione."
    },
    {
      "question": "La malattia critica modifica sempre l’esposizione agli antibatterici nella stessa direzione?",
      "answer": "No. Distribuzione, funzione renale e altri fattori possono cambiare in modo diverso. Occorre riferire il ragionamento al farmaco, al paziente e al momento clinico."
    },
    {
      "question": "Una concentrazione senza l’orario del prelievo e delle somministrazioni è sufficiente per il TDM?",
      "answer": "No. La relazione temporale è necessaria per interpretare il dato; devono essere definiti anche il riferimento pertinente e la responsabilità di dare seguito al risultato."
    },
    {
      "question": "Il TDM modifica la MIC o rende automaticamente trattabile un isolato classificato R?",
      "answer": "No. Misura l’esposizione nel paziente e non cambia il risultato microbiologico. I e R restano categorie distinte; le indicazioni al monitoraggio dipendono dal contesto e dalle prove."
    },
    {
      "question": "Profilassi, terapia empirica e terapia mirata sono fasi obbligatorie della stessa sequenza?",
      "answer": "No. Descrivono scopi e livelli di informazione differenti. Il percorso dipende dal problema clinico; una profilassi può concludersi senza infezione e una diagnosi alternativa può modificare l’indicazione empirica."
    },
    {
      "question": "Una terapia mirata modifica il bersaglio molecolare dell’antibiotico?",
      "answer": "No. Cambia la giustificazione della scelta sulla base di informazioni pertinenti. Meccanismo, sensibilità, esposizione e risposta clinica rimangono piani distinti."
    },
    {
      "question": "Un’associazione fra ritardo e mortalità permette di attribuire a ogni ora la stessa perdita di sopravvivenza?",
      "answer": "No. Bisogna conoscere disegno dello studio, popolazione, riferimento temporale ed esito. Un’associazione osservazionale non dimostra un effetto causale uniforme per ogni paziente."
    },
    {
      "question": "La scomparsa della febbre o il prolungamento del trattamento garantiscono da soli l’eradicazione?",
      "answer": "No. La durata richiede un piano e una rivalutazione clinica riferiti a diagnosi, ospite, risposta e controllo della fonte; nessun singolo indicatore equivale a guarigione microbiologica."
    },
    {
      "question": "L’aumento della quota di batteri resistenti dimostra una nuova mutazione durante il trattamento?",
      "answer": "No. Può riflettere la selezione di varianti già presenti. Frequenza relativa, numero assoluto e comparsa di una variante sono informazioni differenti."
    },
    {
      "question": "Una concentrazione inferiore alla MIC è necessariamente priva di effetti selettivi?",
      "answer": "No. In condizioni sperimentali può modificare la competizione fra ceppi. La MSC descrive quel confronto e non è una soglia clinica o un obiettivo di dosaggio."
    },
    {
      "question": "Una risposta clinica insufficiente equivale a un antibiogramma resistente?",
      "answer": "No. Vanno distinti esito clinico, sensibilità, diagnosi, esposizione ottenuta, focolaio e condizioni dell’ospite. Un risultato favorevole non garantisce da solo il successo."
    },
    {
      "question": "Ampliare lo spettro risolve necessariamente un’infezione sostenuta da un’ostruzione?",
      "answer": "No. L’attività sul batterio e il controllo della fonte affrontano aspetti complementari. La modifica del farmaco non rimuove di per sé l’ostacolo anatomico."
    },
    {
      "question": "Una resistenza acquisita deve essere necessariamente plasmidica?",
      "answer": "No. Acquisita descrive una variazione rispetto alle caratteristiche abituali; cromosomica o plasmidica indica la sede genetica. Mutazione, trasferimento e meccanismo biochimico sono livelli distinti."
    },
    {
      "question": "Un fenotipo inatteso prova da solo la presenza di un nuovo gene di resistenza?",
      "answer": "No. EUCAST lo considera un motivo per verificare identificazione e risultato di sensibilità. Il fenotipo non identifica automaticamente un determinante genetico."
    },
    {
      "question": "PBP e beta-lattamasi svolgono lo stesso ruolo?",
      "answer": "No. Le PBP partecipano alla costruzione della parete e sono bersagli dei beta-lattamici; le beta-lattamasi possono inattivare il farmaco. Il clavulanato agisce soltanto su alcune di queste ultime."
    },
    {
      "question": "Il passaggio da D-Ala–D-Ala a D-Ala–D-Lac equivale alla modifica di una PBP?",
      "answer": "No. Nell’esempio associato a VanA cambia la terminazione del precursore riconosciuta dalla vancomicina. È distinto dal cambiamento di affinità di un enzima PBP."
    },
    {
      "question": "Una correlazione fra prescrizioni e resistenza con un ritardo di un mese dimostra che il singolo paziente svilupperà resistenza dopo un mese?",
      "answer": "No. Descrive una relazione fra serie aggregate in un determinato contesto. Non stabilisce un tempo inevitabile individuale né dimostra da sola tutti i passaggi causali."
    },
    {
      "question": "Perché prevenzione delle infezioni e uso appropriato degli antibiotici sono complementari?",
      "answer": "La prima limita infezioni e trasmissione, il secondo riduce esposizioni non necessarie e rende appropriata la cura. Un ceppo resistente può essere trasmesso anche a chi non ha assunto l’antibiotico."
    },
    {
      "question": "Due farmaci che coprono specie diverse sono necessariamente sinergici?",
      "answer": "No. L’ampliamento dello spettro riguarda la copertura; la sinergia confronta l’effetto congiunto sul microrganismo con un effetto atteso secondo il metodo usato. Nessuno dei due concetti garantisce da solo un beneficio clinico."
    },
    {
      "question": "Perché associare antibiotici non garantisce la prevenzione della resistenza?",
      "answer": "Il risultato dipende da patogeno, meccanismi, attività ed esposizione dei componenti e prove cliniche. Il razionale biologico deve essere verificato nel contesto; più farmaci possono anche aggiungere tossicità e interazioni."
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
    },
    {
      "id": "DAB-PKPD",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Relazioni PK/PD",
      "detail": "PDF 26–30: testo e figure visibili letti e confrontati. Pagina 26 contiene prevalentemente testo raster. Sintesi concettuale originale; nessuna tabella di obiettivi numerici, schema prescrittivo o immagine originale trasferiti. Generalizzazioni su classi ed effetto post-antibiotico riconciliate nei limiti dichiarati."
    },
    {
      "id": "KATZ-AG",
      "title": "Katzung · Farmacologia generale e clinica · Amminoglicosidi",
      "detail": "IX edizione italiana 2014, dalla XII originale 2012, capitolo 45: PDF 942–944, pagine di stampa 923–924 visibili su 943–944; 942 non reca numero visibile. Testo e figure 45.1–45.3 controllati. Integrati soltanto principi di 943–944; caso clinico, dosaggi e soglie storiche esclusi."
    },
    {
      "id": "APP-PKPD",
      "title": "Appunti del corso di Farmacologia II · AA 2024–25 · Lezione 3, 14 ottobre 2024",
      "detail": "PDF 26, pagina stampata 25: lettura completa di testo e immagini; riprende anche figure delle diapositive, non conteggiate come prove indipendenti. PDF 25, pagina stampata 24, ricontrollato nel testo. Nessuna trascrizione o indicazione posologica importata."
    },
    {
      "id": "EMA-PKPD",
      "title": "EMA · Uso di farmacocinetica e farmacodinamica nello sviluppo degli antimicrobici",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-use-pharmacokinetics-and-pharmacodynamics-development-antimicrobial-medicinal-products_en.pdf",
      "detail": "EMA/CHMP/594085/2015, 2016, efficace dal 1 febbraio 2017; indice EMA consultato il 28 novembre 2026: versione corrente. Selezioni §4.2.1 e §4.2.3, PDF 7 e 9: indice, obiettivo e concentrazione libera. Non intero documento; guida allo sviluppo, non protocollo terapeutico."
    },
    {
      "id": "IDSA-VAN",
      "title": "ASHP/IDSA/PIDS/SIDP · Monitoraggio della vancomicina nelle infezioni gravi da MRSA",
      "url": "https://www.idsociety.org/practice-guideline/vancomycin/",
      "detail": "Consenso 19 marzo 2020, indicato CURRENT sul sito IDSA consultato il 28 novembre 2026. Abstract e sintesi esecutiva: AUC, sicurezza e limiti di estrapolazione. Articolo integrale e tabelle collegate non letti; nessun dosaggio, soglia numerica o calendario di monitoraggio trasferiti."
    },
    {
      "id": "DAB-TDM",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Variabilità e TDM",
      "detail": "PDF 31–35 letti nel testo e nelle immagini; integrati 32–35. Pagina 31 riprende concetti già presenti. Nella 33 il testo estratto non coincide con la tabella visibile, controllata direttamente; citazione grafica del 2012 non verificata nell’originale. Nessun dosaggio o immagine trasferiti."
    },
    {
      "id": "APP-VAR",
      "title": "Appunti del corso di Farmacologia II · AA 2024–25 · Lezione 3, 14 ottobre 2024",
      "detail": "PDF 27–28, stampa 26–27, letti integralmente come pagine visibili. Integrata soltanto la variabilità farmacocinetica di PDF 27; figure ripetute non costituiscono prove indipendenti. Frequenza di somministrazione e categorie PK/PD non equiparate. PDF 28 escluso dal lotto sulla variabilità; suoi passaggi sono stati successivamente riconciliati nell’ampliamento su scopo e durata (APP-DURATA)."
    },
    {
      "id": "ESICM-TDM",
      "title": "ESICM / ESCMID / IATDMCT / ISAC · Monitoraggio degli antimicrobici nel paziente critico adulto",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7223855/",
      "detail": "Position paper 2020, DOI 10.1007/s00134-020-06050-1; letteratura ricercata prima di luglio 2019. Consultate selezioni su metodi, distribuzione, clearance e principi del TDM il 28 novembre 2026. Non intero articolo, tabelle o protocolli; ambito distinto dalle raccomandazioni SSC 2026."
    },
    {
      "id": "SPS-TDM",
      "title": "NHS Specialist Pharmacy Service · Gestione sicura del monitoraggio terapeutico",
      "url": "https://sps.nhs.uk/articles/safe-management-of-therapeutic-drug-monitoring/",
      "detail": "Pagina aggiornata il 17 ottobre 2024, consultata il 28 novembre 2026. Selezioni su decisioni, rischi, fattori contributivi e misure organizzative: documentazione, tempi e responsabilità. Nessun obiettivo o protocollo specifico di farmaco trasferito."
    },
    {
      "id": "SSC-TDM",
      "title": "SCCM / ESICM · Surviving Sepsis Campaign 2026",
      "url": "https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
      "detail": "Pagina ufficiale consultata il 28 novembre 2026: raccomandazione sul TDM in adulti selezionati con sepsi o shock settico, condizionale e con certezza molto bassa. Non letta l’intera linea guida o le tabelle di evidenza collegate; nessuna estensione automatica ad altre popolazioni."
    },
    {
      "id": "DAB-INTENTO",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Scopo e tempi della terapia",
      "detail": "PDF 36–40 letti integralmente come pagine visibili; integrati selettivamente 37–40. PDF 38 privo di testo estraibile, letto nell’immagine. Risparmio economico, sequenza automatica delle strategie e percentuali universali non trasferiti. La citazione temporale di PDF 39 è stata confrontata con gli abstract originali; nessuna figura riprodotta."
    },
    {
      "id": "APP-DURATA",
      "title": "Appunti del corso di Farmacologia II · AA 2024–25 · Lezione 3, 14 ottobre 2024",
      "detail": "PDF 29, stampa 28, letto nel testo e nelle immagini; PDF 28, stampa 27, già letto nel lotto precedente e ricontrollato nel testo. Integrati passaggi selezionati di entrambe le pagine su finalità e durata. Percentuali di eradicazione, garanzie di guarigione e dati epidemiologici non validati esclusi; figure ripetute non sono prove indipendenti."
    },
    {
      "id": "NICE-PROF",
      "title": "NICE · Surgical site infections: prevention and treatment, NG125",
      "url": "https://www.nice.org.uk/guidance/ng125/chapter/recommendations",
      "detail": "Raccomandazioni 1.2.12–1.2.17 consultate in estratti indicizzati ufficiali il 28 novembre 2026. Accesso diretto non riuscito (403): nessuna lettura integrale della pagina o del documento dichiarata. Usata solo la distinzione fra indicazione preventiva e trattamento; nessun regime o calendario trasferito."
    },
    {
      "id": "SSC-TEMPI",
      "title": "SCCM / ESICM · Surviving Sepsis Campaign 2026: avvio e rivalutazione",
      "url": "https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026",
      "detail": "Selezioni ufficiali su probabilità di infezione, shock, avvio, controllo della fonte, diagnosi alternativa, de-escalation e durata consultate il 28 novembre 2026. Certezza molto bassa per le raccomandazioni temporali citate; forza delle raccomandazioni distinta dalla certezza. Non intera linea guida, tabelle di evidenza o protocollo operativo."
    },
    {
      "id": "SIS-DURATA",
      "title": "Surgical Infection Society · Infezioni intra-addominali, aggiornamento 2024",
      "url": "https://journals.sagepub.com/doi/10.1089/sur.2024.137",
      "detail": "Abstract e selezioni della sezione Duration of Antimicrobial Therapy consultati il 28 novembre 2026. Ambito adulto, con distinzioni di popolazione e controllo della fonte. Nessuna durata numerica trasferita; non intera linea guida né revisione degli studi sottostanti."
    },
    {
      "id": "LIU-TEMPI",
      "title": "Liu e collaboratori · Tempi degli antibiotici e mortalità nella sepsi, 2017",
      "url": "https://pubmed.ncbi.nlm.nih.gov/28345952/",
      "detail": "Abstract e didascalia della figura 2 consultati il 28 novembre 2026. Coorte retrospettiva, tempo dalla registrazione in pronto soccorso, mortalità ospedaliera aggiustata. Articolo integrale, dati originali e figura originale non ispezionati indipendentemente; nessuna percentuale generalizzata."
    },
    {
      "id": "PITSTOP-2026",
      "title": "Scales e collaboratori · PITSTOP-Antibiotics, JAMA 2026",
      "url": "https://jamanetwork.com/journals/jama/fullarticle/2857281",
      "detail": "Pubblicato il 24 novembre 2026, DOI 10.1001/jama.2026.25627. Abstract, Key Points e introduzione consultati il 28 novembre 2026. Confronto preospedaliero randomizzato in adulti con sospetta infezione, febbre e ipotensione; non intero articolo, protocollo, figure o supplementi. Risultato non esteso a ogni strategia o popolazione con sepsi."
    },
    {
      "id": "DAB-SELEZIONE",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Selezione e risposta",
      "detail": "PDF 42–45 letti integralmente come pagine visibili; integrati 42, 43 e 45. PDF 41 solo parziale: grafico tagliato e dati epidemiologici esclusi. PDF 43 privo di testo estraibile, letto nell’immagine; schema ricondotto a Sandegren 2014 e al lavoro primario di Gullberg 2011. Nessuna figura riprodotta; ripetizioni negli appunti non contate come prove indipendenti."
    },
    {
      "id": "APP-RISPOSTA",
      "title": "Appunti del corso di Farmacologia II · AA 2024–25 · Lezione 3, 14 ottobre 2024",
      "detail": "PDF 30, stampa 29, letto e ispezionato integralmente; passaggi selezionati su cause di risposta insufficiente e meccanismi. PDF 29, stampa 28, già letto, ricontrollato solo nel testo senza nuova integrazione di pagina. Escluse equivalenze universali fra plasma e tessuti e fra disponibilità dell’antibiogramma e assenza di resistenza."
    },
    {
      "id": "KATZ-RISPOSTA",
      "title": "Katzung · Farmacologia generale e clinica · Risposta terapeutica",
      "detail": "IX edizione italiana 2014, dalla XII originale 2012, capitolo 51: PDF 1036, stampa 1016, letto nel testo e nella tabella 51.3. Integrata la distinzione delle possibili cause di insuccesso. Regola storica sulla durata dopo la febbre, prescrizioni di controlli indiscriminati e generalizzazioni di classe della tabella esclusi."
    },
    {
      "id": "CDC-SELEZIONE",
      "title": "CDC · About Antimicrobial Resistance",
      "url": "https://www.cdc.gov/antimicrobial-resistance/about/",
      "detail": "Pagina aggiornata il 25 ottobre 2026, sezioni sui meccanismi, selezione e diffusione genetica consultate il 28 novembre 2026. Usata per il quadro biologico; nessun dato epidemiologico trasferito e nessuna revisione dei documenti collegati dichiarata."
    },
    {
      "id": "GULLBERG-2011",
      "title": "Gullberg e collaboratori · Selection of Resistant Bacteria at Very Low Antibiotic Concentrations",
      "url": "https://journals.plos.org/plospathogens/article?id=10.1371/journal.ppat.1002158",
      "detail": "PLoS Pathogens 2011, DOI 10.1371/journal.ppat.1002158. Abstract, introduzione e risultati selezionati sulla competizione e sulla definizione di MSC consultati il 28 novembre 2026. Non intero articolo, supplementi o figure originali ispezionati indipendentemente; nessuna concentrazione sperimentale trasferita alla pratica clinica."
    },
    {
      "id": "DAB-GENETICA",
      "title": "Diapositive del corso di Farmacologia II · AA 2026–27 · Genetica e meccanismi della resistenza",
      "detail": "PDF 46–50: testo visibile e figure letti integralmente, con integrazione qualitativa. PDF 49–50 hanno soltanto il titolo nel testo estraibile: contenuti differenti letti direttamente nelle immagini. Escluse percentuali generiche, velocità enzimatiche e sovrapposizioni con antifungini; classificazioni genetiche e bersagli riconciliati. Nessuna figura riprodotta."
    },
    {
      "id": "APP-MECCANISMI",
      "title": "Appunti del corso di Farmacologia II · AA 2024–25 · Lezione 3, 14 ottobre 2024",
      "detail": "PDF 31, stampa 30, letto e ispezionato integralmente. Integrato il confronto fra inattivazione, efflusso e associazione con inibitore, correggendo la spiegazione del clavulanato. Figure ripetute non sono prove indipendenti. Percentuali epidemiologiche e affermazioni alimentari non verificate escluse."
    },
    {
      "id": "CDC-TRASFERIMENTO",
      "title": "CDC · How Antibiotic Resistance Moves Directly Germ to Germ",
      "url": "https://www.cdc.gov/antimicrobial-resistance/media/pdfs/How-AR-Moves-508.pdf",
      "detail": "Scheda di una pagina: testo e diagrammi consultati il 28 novembre 2026. Trasmissione verticale, elementi mobili e tre vie di trasferimento orizzontale; sintesi originale, senza riproduzione dei diagrammi."
    },
    {
      "id": "EUCAST-FENOTIPI",
      "title": "EUCAST · Expected Resistant Phenotypes, versione 1.2, gennaio 2023",
      "url": "https://www.eucast.org/fileadmin/eucast/pdf/expert_rules/Expected_Resistant_Phenotypes_v1.2_20230113.pdf",
      "detail": "Introduzione e definizioni delle pagine 1–2, con indice ufficiale corrente, consultati il 28 novembre 2026. Distinzione dalla precedente terminologia e verifica dei risultati inattesi; non revisione completa delle tabelle per specie, nessuna soglia numerica trasferita."
    },
    {
      "id": "FDA-AUGMENTIN-MECCANISMI",
      "title": "FDA · AUGMENTIN · Prescribing Information, luglio 2026",
      "url": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/050725s037lbl.pdf",
      "detail": "Sezione 12.4, paragrafi Mechanism of Action e Resistance, pagina 33, consultati il 28 novembre 2026. Distinti bersaglio PBP, inattivazione da beta-lattamasi e limite dell’inibitore. Nessun dosaggio, indicazione o algoritmo clinico trasferito; non intera scheda revisionata."
    },
    {
      "id": "ROPER-VANA",
      "title": "Roper e collaboratori · Struttura della ligasi VanA",
      "url": "https://pubmed.ncbi.nlm.nih.gov/10908650/",
      "detail": "PNAS 2000, DOI 10.1073/pnas.150116497. Abstract letto integralmente il 28 novembre 2026 per la biosintesi dei precursori alternativi. Non articolo completo, figure strutturali o dati sperimentali indipendentemente revisionati."
    },
    {
      "id": "ARTHUR-VANA",
      "title": "Arthur e collaboratori · D-lattato nei precursori degli enterococchi resistenti",
      "url": "https://journals.asm.org/doi/10.1128/aac.36.4.867",
      "detail": "Antimicrobial Agents and Chemotherapy 1992, 36:867–869. Abstract letto integralmente il 28 novembre 2026 sulla pagina dell’editore; determinante plasmidico e substrato di VanA. Non articolo completo né prova di efficacia clinica; il record PubMed non ha reso l’abstract."
    },
    {
      "id": "DAB-PREVENZIONE",
      "title": "Farmacologia II, materiale didattico 2026–27 — PDF 51–53",
      "detail": "Lettura completa del contenuto visibile e controllo delle figure; solo sintesi qualitativa. Quote e quantità non validate escluse."
    },
    {
      "id": "APP-II-PREVENZIONE",
      "title": "Farmacologia II, appunti 2024–25, lezione 3 — PDF 32, pagina 31",
      "detail": "Grafico già presente nelle slide: non costituisce prova indipendente. Corretto il passaggio da correlazione aggregata a inevitabilità individuale."
    },
    {
      "id": "WHO-ONEHEALTH",
      "url": "https://www.who.int/europe/news-room/questions-and-answers/item/understanding-antimicrobial-resistance-(amr)",
      "title": "WHO Europe — Understanding antimicrobial resistance, 15 settembre 2026",
      "detail": "Passaggi circoscritti su prevenzione, uso appropriato e One Health consultati il 28 novembre 2026; stime epidemiologiche non importate."
    },
    {
      "id": "SUN2012",
      "url": "https://pubmed.ncbi.nlm.nih.gov/22752512/",
      "title": "Sun, Klein, Laxminarayan — Seasonality and temporal correlation, 2012",
      "detail": "Abstract completo consultato il 28 novembre 2026. Serie statunitensi 1999–2007; DOI 10.1093/cid/cis509. Non letto l’articolo completo né verificati indipendentemente figure e dataset."
    },
    {
      "id": "DAB-ASSOCIAZIONI",
      "title": "Farmacologia II, materiale didattico 2026–27 — PDF 55",
      "detail": "Ragioni farmacologiche delle associazioni distinte da indicazioni e benefici dimostrati."
    },
    {
      "id": "APP-II-ASSOCIAZIONI",
      "title": "Farmacologia II, appunti 2024–25, lezione 3 — PDF 33, pagina 32",
      "detail": "Generalizzazioni sul successo delle associazioni non importate. Esempio antivirale e promessa di barriera assoluta esclusi."
    },
    {
      "id": "KATZ-ASSOCIAZIONI",
      "title": "Katzung, Farmacologia generale e clinica, IX ed. italiana 2014 / XII originale 2012 — cap. 51",
      "detail": "PDF 1039–1040, pagine 1019–1020: ragioni delle associazioni e meccanismi di sinergia. Tabelle, regimi e raccomandazioni storiche non adottati; continuazione 1041 non letta."
    },
    {
      "id": "IDSA2026-ASSOCIAZIONI",
      "url": "https://www.idsociety.org/practice-guideline/amr-guidance/",
      "title": "IDSA 2026 — AMR Guidance, quesito 4.6",
      "detail": "Versione pubblicata il 30 luglio 2026; quesito 4.6 e motivazione consultati il 28 novembre. Ambito DTR P. aeruginosa; non revisione completa della guida o dei suoi studi."
    }
  ],
  "drugs": [],
  "targets": [],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-28",
  "readingManifest": "./data/antibatterici-principi-reading.json",
  "coverage": "Copertura cumulativa circoscritta: 83 posizioni PDF lette integralmente come pagine visibili (2 metadati), 7 parziali escluse, 90 ispezioni e 65 pagine con passaggi integrati. Questo lotto: 9 nuove letture complete e ispezioni, 8 nuove integrazioni. Le figure ripetute fra slide e appunti non sono prove indipendenti. Nessun intero libro o corso letto; nessuna revisione clinica indipendente.",
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
    "formulazioni-sali-bioequivalenza",
    "clearance-biliare-renale"
  ],
  "wordCount": 9793
};
