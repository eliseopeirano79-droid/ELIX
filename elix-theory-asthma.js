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
      "id": "vago",
      "title": "Il circuito vagale e il blocco muscarinico",
      "refs": [
        "KAT",
        "RAN",
        "TIO"
      ],
      "text": "Le vie parasimpatiche rilasciano acetilcolina, che contribuisce al tono della muscolatura bronchiale. Gli stimoli irritativi possono attivare riflessi con una componente afferente sensoriale e una risposta efferente colinergica. Il recettore M₃ del muscolo liscio è un bersaglio importante dell’effetto broncocostrittore. Ridurre questo segnale e stimolare β₂ conducono entrambi al rilassamento, attraverso operazioni farmacologiche differenti.\n\nUn antimuscarinico impedisce all’acetilcolina di attivare il suo bersaglio; un agonista β₂ attiva invece una via che si oppone alla contrazione. Il primo intervento dipende dalla componente colinergica del tono presente. Non equivale a neutralizzare direttamente tutti i mediatori liberati durante un processo infiammatorio.\n\nTiotropio illustra anche la differenza fra affinità e permanenza sul recettore. Il documento di prodotto descrive affinità per più sottotipi muscarinici e una dissociazione lenta da M₃, più rapida da M₂. La durata non dimostra quindi un legame esclusivo a M₃. La formulazione inalatoria indirizza l’esposizione verso le vie aeree, senza rendere impossibili effetti anticolinergici sistemici. Ipratropio e tiotropio rimangono esempi distinti: stesso ambito recettoriale non significa identità di cinetica o di ruolo clinico."
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
        "GINA"
      ],
      "text": "La tradizionale divisione fra broncodilatatori e farmaci che controllano l’infiammazione organizza lo studio, ma i confini non sono sempre netti. Le xantine compaiono in entrambi gli insiemi perché la loro farmacologia comprende più effetti. I cromoni richiamano invece la prevenzione del rilascio di mediatori. Una classificazione per meccanismo descrive ciò che una sostanza può modificare, non l’ordine in cui oggi vada prescritta.\n\nOccorre evitare anche una precisione solo apparente. Attribuire tutte le xantine a un’inibizione selettiva della sola PDE2 non è una descrizione adeguata della classe. Una via dell’AMP ciclico disegnata accanto a un farmaco non dimostra che quello sia il suo unico bersaglio, né che la concentrazione necessaria sia sempre compatibile con l’impiego clinico.\n\nGINA segnala efficacia limitata e problemi di sicurezza per la teofillina nelle opzioni considerate. Le classi presenti in una lezione restano quindi utili per comprendere la storia della farmacologia, mentre la loro posizione terapeutica richiede un confronto separato con evidenze e documenti attuali."
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
        "GOLD"
      ],
      "text": "La BPCO comprende alterazioni delle vie aeree e degli alveoli con ostruzione persistente, spesso progressiva. GOLD richiede di interpretare la spirometria nel contesto clinico. L’etichetta irreversibile non significa che nessuna componente del tono bronchiale possa rispondere a un farmaco, né permette di classificare una persona dal solo sollievo percepito.\n\nPer l’inizio del mantenimento, GOLD 2026 distingue gruppi basati su sintomi e riacutizzazioni: broncodilatatore nel gruppo A, LABA + LAMA nei gruppi B ed E. Il follow-up valuta separatamente dispnea e riacutizzazioni. Il ruolo degli ICS dipende anche da eosinofili, riacutizzazioni e asma concomitante; la polmonite rientra fra i rischi da considerare.\n\nIl confronto chiarisce il principio: la presenza dello stesso recettore non impone lo stesso percorso terapeutico. Rilassare la muscolatura può essere utile in contesti differenti, mentre infiammazione, danno strutturale ed esiti da prevenire cambiano. I collegamenti ai farmaci aiutano a seguire il bersaglio; per la scelta clinica resta necessario conoscere la malattia e il documento di riferimento applicabile."
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
      "text": "Per ripercorrere il capitolo si può partire da una domanda concreta: quale componente dell’ostruzione sta modificando il farmaco? Se il percorso è β₂–AMP ciclico, il punto di arrivo immediato è il tono muscolare. Se il bersaglio è muscarinico, si sta riducendo una risposta all’acetilcolina. Se si interviene su CysLT₁, si limita una via specifica dei mediatori lipidici. Con il recettore glucocorticoide si modifica invece un programma cellulare più ampio.\n\nLa domanda successiva riguarda il tempo e l’esito. Una variazione del calibro, il controllo dell’iperreattività e la prevenzione di nuovi episodi non sono misure intercambiabili. Anche la via di somministrazione e la formulazione appartengono al ragionamento: condizionano l’esposizione senza cambiare il nome del bersaglio.\n\nLa lettura locale di questo ampliamento comprende corso I PDF 621–625, Katzung 400–403, Rang & Dale 541–545 e 549, appunti I 293–295. Sono diciotto pagine, sedici nuove e due rilette; la pagina di programma 621 serve all’inventario. La precedente selezione respiratoria resta distinta. Libri e corsi non sono stati letti integralmente; il controllo editoriale circoscritto non equivale a una revisione clinica indipendente."
    }
  ],
  "wordCount": 2297,
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
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 621–625, etichette 619–623. Testo disponibile e cinque rendering controllati; 621 è programma, 622 contiene elementi poco leggibili non trasferiti. 623 riprende una Perspective, non una sperimentazione clinica."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012; capitolo 20, PDF 400–403, editoriali 380–383. Quattro pagine e figure 20-1/20-2 controllate; indicazioni storiche e valori delle curve non trasferiti."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015, capitolo 28; PDF 541–545 e 549. Sei testi e rendering, due pagine rilette (545 e 549). Refuso agonisti/antagonisti nella figura 28.3 e confusione LTB4/cisteinilici riconciliati; scala terapeutica 2012 non trasferita."
    },
    {
      "id": "APP",
      "title": "Appunti e diapositive del corso di Farmacologia I · lezione 17",
      "detail": "25 novembre 2025, PDF 293–295, etichette 288–290, pagine 1–3 della lezione. Distinti PKA e AMPc; non adottate la selettività PDE2 delle xantine né l’origine meccanica universale della malattia."
    },
    {
      "id": "GINA",
      "title": "GINA · Strategy Report 2026",
      "detail": "Consultazione mirata del 4 novembre 2026: PDF 26, 79, 85–86, 98–100 (stampate 25, 78, 84–85, 97–99), testo e rendering. Definizione, trattamento con ICS, opzioni aggiuntive. Non revisione integrale della linea guida o verifica delle autorizzazioni italiane.",
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
      "detail": "§5.1 letto il 4 novembre 2026: antagonismo muscarinico e dissociazione. Confronto con AEMPS CIMA 69589 §§4.1, 4.4 e 5.1; refuso spagnolo sull’effetto dell’acetilcolina corretto mediante testo inglese. Non intero RCP.",
      "url": "https://www.medicines.org.uk/emc/product/407/smpc"
    },
    {
      "id": "BAG",
      "title": "Bagley et al. · Bronchoconstriction damages airway epithelia…",
      "detail": "Science 2024;384:66–73, DOI 10.1126/science.adk2758. Abstract, introduzione e passaggi sui campioni umani e discussione letti; figure, metodi completi e supplementi non revisionati. Distinto dalla Perspective DOI 10.1126/science.ado4514.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7619646/"
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
  "coverage": "Diciotto pagine locali controllate nel testo disponibile e nei rendering: sedici nuove e due rilette. Diciassette pagine sostengono la sintesi; una è programma. Precedenti letture respiratorie separate. Fonti ufficiali e articolo consultati selettivamente; nessun intero libro, corso o documento dichiarato letto. Controllo editoriale del solo integratore, non revisione clinica indipendente."
});
