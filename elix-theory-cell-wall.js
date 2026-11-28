// Original educational synthesis; bounded provenance in the reading ledger.
export const THEORY_CELL_WALL = {
  "id": "antibiotici-beta-lattamici",
  "volume": 12,
  "title": "Antibatterici β-lattamici e parete cellulare",
  "lead": "Come si costruisce il peptidoglicano e dove si interrompe la sequenza: precursori citoplasmatici, trasporto di membrana, PBP e reticolazione. Il confronto fra β-lattamici, glicopeptidi, fosfomicina e cicloserina collega bersagli, accesso ed esposizione.",
  "sections": [
    {
      "id": "peptidoglicano",
      "title": "Peptidoglicano come bersaglio",
      "refs": [
        "KATZ-PARETE",
        "DAB-PARETE",
        "MONTEIRO"
      ],
      "text": "Le penicillin-binding proteins catalizzano reazioni nella sintesi della parete batterica. I β-lattamici possono inattivare queste proteine e ostacolare la reticolazione del peptidoglicano, con conseguenze importanti nei batteri in crescita.\n\nIl peptidoglicano è una rete che avvolge la cellula batterica e contribuisce a mantenerne forma e resistenza meccanica. Il nome richiama le sue due componenti: catene di zuccheri e brevi sequenze peptidiche. Gli zuccheri N-acetilglucosamina, abbreviata NAG o GlcNAc, e acido N-acetilmuramico, NAM o MurNAc, si alternano lungo le catene. Ai residui di NAM sono legati i peptidi che consentono di collegare fra loro catene vicine.\n\nOccorre distinguere il singolo precursore dalla rete matura. Il precursore pentapeptidico porta una terminazione D-Ala–D-Ala; durante la transpeptidazione classica viene liberata l’alanina terminale e si forma il collegamento con un altro peptide. Perciò non si deve cercare necessariamente un pentapeptide intatto in ogni unità della parete già assemblata. La reazione modifica proprio la struttura che ha riconosciuto.\n\nNei disegni didattici può comparire un ponte di cinque glicine. È una caratteristica utile per studiare Staphylococcus aureus, ma non una formula universale del peptidoglicano. Composizione dei peptidi e collegamenti variano fra specie. Anche una figura corretta diventa fuorviante se il suo esempio viene attribuito indistintamente a tutti i batteri.\n\nUn danno alla costruzione della rete può compromettere la capacità di sopportare le forze osmotiche. Il collegamento fra sintesi della parete, crescita batterica e lisi è quindi un rapporto funzionale: non basta immaginare il farmaco come una sostanza che perfora immediatamente qualsiasi cellula.",
      "formula": "Catena di zuccheri NAG–NAM + peptidi collegati fra catene → rete di peptidoglicano. Il ponte pentaglicinico è un esempio specifico."
    },
    {
      "id": "selettivita-parete",
      "title": "Selettività antibatterica",
      "refs": [
        "KATZ-PARETE",
        "RANG-ACCESSO",
        "DM-IMIPENEM"
      ],
      "text": "Le cellule umane non producono peptidoglicano, circostanza che contribuisce alla selettività dei farmaci. Ciò non significa assenza di tossicità: reazioni di ipersensibilità e altri eventi avversi sono possibili.\n\nLa selettività e l’accesso al bersaglio sono problemi diversi. Nei Gram positivi il peptidoglicano forma uno strato spesso all’esterno della membrana citoplasmatica. Nei Gram negativi si trova nel periplasma, fra membrana citoplasmatica e membrana esterna. Quest’ultima può ostacolare l’ingresso di un antibiotico anche quando il bersaglio che esso dovrebbe colpire è presente.\n\nUna PBP è una proteina con attività enzimatica, non un recettore di segnalazione dell’ospite. Una β-lattamasi è invece un enzima che può inattivare il farmaco. Le due proteine non vanno confuse perché entrambe interagiscono con un β-lattamico: una partecipa alla costruzione della parete, l’altra può impedire che il farmaco raggiunga efficacemente il suo obiettivo.\n\nAnche la posizione della reazione cambia il percorso richiesto alla molecola. Fosfomicina deve raggiungere un enzima citoplasmatico; i β-lattamici agiscono su PBP accessibili dal lato esterno della membrana citoplasmatica, periplasmatico nei Gram negativi. Non esiste quindi un unico requisito di penetrazione valido per tutti gli inibitori della parete.\n\nLa scheda di imipenem/cilastatina richiama inoltre reazioni di ipersensibilità ed eventi neurologici. L’assenza del peptidoglicano nelle cellule umane spiega una parte della selettività, ma non permette di dedurre la sicurezza di un medicinale dalla sola collocazione del bersaglio."
    },
    {
      "id": "precursori-citoplasmatici",
      "title": "Preparare i precursori: fosfomicina e cicloserina",
      "refs": [
        "DAB-PARETE",
        "KATZ-ALTRI",
        "EMA-FOS-MOA",
        "DCS"
      ],
      "text": "La costruzione inizia nel citoplasma con precursori attivati, prima che il materiale venga esposto sulla superficie esterna della membrana. Le sigle UDP-GlcNAc e UDP-MurNAc indicano zuccheri associati a un nucleotide; non descrivono ancora una catena di peptidoglicano. La successione delle reazioni prepara sia la componente zuccherina sia il peptide necessario alla successiva reticolazione.\n\nMurA catalizza il trasferimento di un gruppo enolpiruvile dal fosfoenolpiruvato all’UDP-N-acetilglucosamina, in una tappa iniziale della via che conduce al precursore del NAM. Fosfomicina interferisce con questa reazione. Il blocco è dunque a monte dell’assemblaggio della parete: non è una PBP inibita e non è un legame crociato già formato che viene tagliato. Questo spiega perché un farmaco possa essere classificato come attivo sulla parete pur avendo il proprio bersaglio nel citoplasma.\n\nUn’altra preparazione necessaria riguarda la D-alanina. L’alanina racemasi permette la conversione fra L-alanina e D-alanina; la D-alanil-D-alanina ligasi unisce due residui di D-alanina. Il dipeptide ottenuto partecipa alla formazione del precursore pentapeptidico. Racemizzazione e formazione del dipeptide sono due reazioni differenti e richiedono enzimi differenti.\n\nLa cicloserina, analogo della D-alanina, interferisce con entrambi questi enzimi. Limitarsi alla freccia che indica l’alanina racemasi in uno schema non restituisce l’intero meccanismo. Il confronto con fosfomicina permette di separare due punti di vulnerabilità: preparazione dello zucchero muramico e preparazione della terminazione peptidica.\n\nQuesta organizzazione aiuta anche a leggere la resistenza. Se un farmaco deve entrare nel citoplasma, la sua disponibilità intracellulare è parte del problema; riconoscere il bersaglio biochimico non dimostra che ogni batterio sensibile in teoria sia raggiungibile dal farmaco. Le proprietà di ingresso e il bersaglio vanno studiati insieme, mantenendo distinta la successiva scelta clinica.",
      "formula": "Precursore zuccherino: MurA ← fosfomicina. Terminazione peptidica: alanina racemasi e D-Ala–D-Ala ligasi ← cicloserina. Schema dei bersagli, non delle dosi."
    },
    {
      "id": "trasporto-e-riciclo",
      "title": "Lipidi I e II: trasferire un precursore attraverso la membrana",
      "refs": [
        "DAB-PARETE",
        "APP-PARETE",
        "KATZ-ALTRI"
      ],
      "text": "Il materiale preparato nel citoplasma deve arrivare sul lato della membrana dove avviene l’assemblaggio della parete. La membrana lipidica separa questi ambienti: un precursore idrofilo associato a UDP non può essere trattato come se fosse già disponibile all’esterno. Interviene un trasportatore lipidico, il bactoprenolo, indicato anche come undecaprenile per la sua catena a 55 atomi di carbonio.\n\nNella rappresentazione essenziale, il trasportatore nella forma monofosfato riceve il gruppo MurNAc-pentapeptide. Si forma il lipide I, nel quale il precursore è ancorato al trasportatore attraverso un ponte pirofosfato. L’aggiunta di GlcNAc produce il lipide II: ora sono presenti entrambi gli zuccheri dell’unità disaccaridica, oltre al peptide. Lipide I e lipide II non sono due nomi alternativi dello stesso intermedio.\n\nL’unità legata al lipide II viene resa disponibile sul lato esterno della membrana citoplasmatica e incorporata nel polimero. «Esterno» va riferito a questa membrana: nei Gram negativi il processo si svolge nel compartimento periplasmatico, non necessariamente oltre l’intero involucro batterico. La distinzione evita di rappresentare il precursore come una sostanza secreta liberamente nell’ambiente.\n\nDopo il trasferimento dell’unità, il trasportatore deve essere recuperato per un altro ciclo. La defosforilazione del bactoprenolo pirofosfato permette il ritorno a una forma utilizzabile. Bacitracina interferisce con questo riciclo. Il risultato è un ostacolo alla fornitura di nuove unità di parete, anche se il farmaco non blocca direttamente la transpeptidasi.\n\nLa logica del ciclo è più utile della memorizzazione di una sequenza di frecce: preparare il materiale, caricarlo, trasferirlo e recuperare il vettore sono funzioni distinte. Un blocco del recupero può limitare i cicli successivi; non occorre che l’antibiotico colpisca tutte le reazioni della via per comprometterne il funzionamento.",
      "formula": "Precursore citoplasmatico → lipide I → lipide II → unità incorporata nella parete. Trasportatore liberato → riciclo → nuovo caricamento; bacitracina ostacola il riciclo."
    },
    {
      "id": "assemblaggio-parete",
      "title": "Allungare le catene e collegarle: due reazioni distinte",
      "refs": [
        "DAB-PARETE",
        "APP-PARETE",
        "KATZ-PARETE"
      ],
      "text": "Quando il precursore è disponibile sul lato esterno della membrana, restano due compiti: costruire le catene zuccherine e collegare le componenti peptidiche di unità vicine. Il primo viene descritto come transglicosilazione, il secondo come transpeptidazione. Confondere i due termini rende difficile capire perché farmaci diversi, pur ostacolando la stessa struttura finale, riconoscano oggetti molecolari differenti.\n\nLa transglicosilazione forma legami fra unità zuccherine, allungando la componente glicano del polimero. La transpeptidazione forma invece collegamenti fra peptidi. Nella reazione classica che interessa le PBP bersaglio dei β-lattamici, il riconoscimento della terminazione D-Ala–D-Ala si accompagna alla liberazione dell’alanina terminale e alla formazione del legame crociato. La rete acquista così connessioni fra catene, non soltanto una maggiore lunghezza.\n\nIl termine PBP comprende proteine con funzioni differenti nel metabolismo della parete. Non è corretto trasformare la numerazione di una tabella riferita a un batterio in una graduatoria universale di importanza o in un elenco di bersagli identici per tutti gli antibiotici. La specie, la singola PBP e l’affinità del composto devono essere riconosciute prima di generalizzare.\n\nL’effetto sulla crescita dipende anche dal ruolo delle reazioni interferite. Una cellula che sta costruendo e rimodellando la propria parete ha esigenze diverse da una struttura inerte. Il modello della sintesi chiarisce quindi perché la crescita sia rilevante per l’azione dei β-lattamici, senza trasformare questa relazione in una misura universale della velocità di uccisione.\n\nNel ripasso conviene chiedersi sempre quale legame si sta formando e quale componente viene riconosciuta dal farmaco. «Parete» indica il sistema su cui ricade l’effetto; «transpeptidasi», «precursore» e «trasportatore lipidico» precisano il livello del meccanismo.",
      "formula": "Transglicosilazione → allungamento delle catene zuccherine. Transpeptidazione → collegamenti fra peptidi di catene vicine."
    },
    {
      "id": "pbp-e-substrato",
      "title": "β-lattamici e vancomicina: enzima o substrato?",
      "refs": [
        "KATZ-PARETE",
        "KATZ-VANCO",
        "APP-PARETE"
      ],
      "text": "I β-lattamici interferiscono con le PBP coinvolte nella transpeptidazione. La relazione con il substrato D-Ala–D-Ala aiuta a comprendere il riconoscimento, ma l’effetto non si esaurisce nell’immagine di una molecola che occupa provvisoriamente una tasca. Si forma un legame covalente con il sito attivo della PBP, che ostacola la prosecuzione della reazione enzimatica.\n\nLa vancomicina segue una strategia diversa: riconosce la terminazione D-Ala–D-Ala del precursore del peptidoglicano. Qui l’oggetto legato è il substrato da utilizzare per costruire la parete, non la PBP. Il legame rende meno accessibile il materiale e ostacola le successive reazioni di assemblaggio, comprese polimerizzazione e reticolazione. Per questo è più preciso descrivere prima il riconoscimento del precursore e poi la conseguenza sulla sintesi.\n\nLa differenza suggerisce anche come interpretare alcuni meccanismi di resistenza. Una PBP con affinità ridotta per un β-lattamico e un precursore con una terminazione modificata rappresentano soluzioni biologiche differenti. Nel secondo caso, la sostituzione D-Ala–D-Lac può ridurre il legame della vancomicina; non si tratta della trasformazione di una PBP in un recettore alternativo. Questo è un esempio di meccanismo, non una descrizione esaustiva di tutte le resistenze ai glicopeptidi.\n\nLo stesso esito finale, una parete costruita in modo insufficiente, non implica dunque identità di bersaglio, accesso o spettro. Un confronto ragionato fra amoxicillina e vancomicina parte da questa distinzione e prosegue con le proprietà delle singole molecole. La classificazione «attivi sulla parete» consente di affiancarle nello studio, ma non le rende sostituibili in una terapia.",
      "formula": "β-lattamico → PBP, bersaglio enzimatico. Vancomicina → terminazione del precursore, substrato della via. Esito comune sulla parete, riconoscimento differente."
    },
    {
      "id": "famiglie-e-associazioni",
      "title": "Classi chimiche e associazioni: riconoscere il ruolo di ogni componente",
      "refs": [
        "DAB-PARETE",
        "APP-PARETE",
        "KATZ-VANCO",
        "DM-IMIPENEM"
      ],
      "text": "Penicilline, cefalosporine, carbapenemi e monobattami sono quattro famiglie di antibatterici β-lattamici. Condividono l’anello che dà nome alla classe, ma differiscono per altre parti della struttura e per proprietà farmacologiche e microbiologiche. La classificazione chimica e la collocazione nella via della parete rispondono quindi a domande diverse: quale struttura caratterizza il composto e quale processo viene interferito?\n\nAmoxicillina e imipenem sono esempi utili per ritrovare, rispettivamente, una penicillina e un carbapeneme già presenti nel catalogo. La parentela chimica non autorizza a trasferire da una molecola all’altra spettro, sensibilità alle β-lattamasi, distribuzione o indicazioni. Analogamente, glicopeptidi e fosfomicina appartengono al gruppo funzionale degli inibitori della parete senza diventare per questo β-lattamici.\n\nUn’associazione richiede inoltre di identificare la funzione di ciascun componente. In imipenem/cilastatina, il primo è l’antibatterico che interferisce con la sintesi della parete; la seconda inibisce la deidropeptidasi renale I dell’ospite, limitando il metabolismo renale di imipenem. Il nome associato non indica due carbapenemi e non dimostra che la cilastatina neutralizzi una β-lattamasi batterica.\n\nIl confronto con le associazioni che contengono un inibitore delle β-lattamasi deve dunque partire dal luogo e dall’enzima interessati. Proteggere un antibiotico da una via metabolica dell’ospite e proteggerlo da un meccanismo batterico di inattivazione sono due finalità differenti. La parola «inibitore» è incompleta finché non viene specificato che cosa venga inibito.",
      "formula": "Imipenem → sintesi della parete batterica. Cilastatina → deidropeptidasi renale dell’ospite → minore metabolismo renale di imipenem."
    },
    {
      "id": "esposizione-parete",
      "title": "PK/PD e concentrazioni",
      "refs": [
        "EMA-PKPD",
        "EUCAST"
      ],
      "text": "Per numerosi β-lattamici conta il tempo durante il quale la frazione libera rimane sopra MIC del patogeno (fT>MIC). Questo non è lo stesso indice PK/PD che guida tutte le classi di antibiotici.\n\nIl simbolo f indica la frazione libera, mentre T richiama il tempo di esposizione. Una concentrazione misurata in un singolo istante non descrive da sola per quanto tempo il farmaco sia rimasto sopra la MIC. Anche la concentrazione totale e quella libera rispondono a domande diverse: il legame alle proteine va considerato quando si interpreta l’esposizione farmacologicamente pertinente.\n\nUn indice PK/PD non coincide con il suo obiettivo quantitativo. Il primo descrive quale relazione si studia fra concentrazione, tempo ed effetto; il secondo richiede un valore, un modello e un contesto. Non segue dalla sigla fT>MIC una percentuale universale valida per ogni β-lattamico, patogeno, sede o paziente. La guida EMA sullo sviluppo degli antimicrobici mantiene distinta la scelta dell’indice dalla definizione dell’obiettivo.\n\nLe categorie EUCAST comprendono una sensibilità associata al regime standard e una sensibilità che richiede esposizione aumentata. Esposizione non significa soltanto quantità somministrata: comprende modalità e tempi di somministrazione, distribuzione ed escrezione. Questa distinzione collega microbiologia e farmacocinetica senza ricavare una prescrizione da un singolo numero.\n\nIl capitolo generale sugli antibatterici sviluppa questi concetti; qui servono a completare il percorso dal bersaglio all’effetto. Conoscere la PBP non sostituisce la valutazione di come il composto raggiunga e mantenga un’esposizione pertinente nella sede dell’infezione."
    },
    {
      "id": "resistenza-parete",
      "title": "Resistenza",
      "refs": [
        "KATZ-PARETE",
        "KATZ-VANCO",
        "RANG-ACCESSO",
        "EUCAST"
      ],
      "text": "β-lattamasi, modifica delle PBP, variazioni di permeabilità ed efflusso possono ridurre sensibilità. La MIC ha significato solo in relazione a specie, metodo e breakpoint pertinenti; non equivale da sola a una dose prescrivibile.\n\nQuesti meccanismi possono essere ordinati lungo il percorso del farmaco. Una barriera di ingresso limita l’accesso; un sistema di efflusso può ridurre la disponibilità locale; un enzima inattivante modifica la molecola; un bersaglio alterato riduce l’interazione utile. Il fatto che due isolati presentino ridotta sensibilità non dimostra che condividano lo stesso meccanismo.\n\nPer un β-lattamico, distinguere PBP e β-lattamasi è essenziale. Inibire una β-lattamasi può proteggere il farmaco da un determinato processo di inattivazione, ma non implica la correzione di una PBP poco affine o di ogni problema di permeabilità. La presenza della parola «inibitore» nel nome di un’associazione non equivale quindi a una garanzia di sensibilità.\n\nPer vancomicina, la modificazione della terminazione del precursore mette in evidenza un’altra possibilità: la cellula può conservare la costruzione della parete cambiando un elemento riconosciuto dall’antibiotico. Lo studio del bersaglio deve comprendere la struttura effettivamente riconosciuta, non soltanto il nome generale della via biosintetica.\n\nLe proprietà dell’involucro spiegano infine perché lo spessore della parete non sia una graduatoria di sensibilità. Una rete più sottile nei Gram negativi si accompagna a una membrana esterna che può limitare l’accesso. Quantità di peptidoglicano, presenza del bersaglio e sensibilità del singolo isolato sono informazioni collegate, ma non intercambiabili."
    },
    {
      "id": "meccanismo-e-patologie",
      "title": "Dal meccanismo alle patologie: mantenere distinte le domande",
      "refs": [
        "EMA-FOS-USO",
        "DM-IMIPENEM"
      ],
      "text": "Le infezioni urinarie, polmonari e del sistema nervoso centrale consentono di mettere alla prova il ragionamento senza trasformare la classificazione in una lista di prescrizioni. Il batterio può possedere la stessa via di sintesi della parete in sedi differenti, mentre cambiano il compartimento da raggiungere, la formulazione utilizzabile e le prove cliniche pertinenti.\n\nLa revisione europea della fosfomicina del 2020 distingue gli impieghi delle preparazioni orali da quelli endovenosi. Fra gli impieghi orali compare la cistite acuta non complicata in donne e adolescenti; per la via endovenosa l’ambito riguarda determinate infezioni gravi quando altri trattamenti non sono adatti. L’esempio mostra perché il nome del principio attivo e il bersaglio MurA non bastino a rendere equivalenti vie di somministrazione e situazioni cliniche. Non è una revisione completa delle indicazioni attuali di ogni prodotto nazionale.\n\nAnche un dato di distribuzione deve essere interpretato con cautela. La scheda statunitense consultata di imipenem/cilastatina non ne indica l’impiego nella meningite, perché sicurezza ed efficacia non sono state stabilite. Rilevare un farmaco nel liquor e disporre di un’indicazione clinica sono due livelli di evidenza differenti: non si può dedurre il secondo dal primo.\n\nPer collegare una scheda di molecola a un capitolo di patologia, la sequenza utile è quindi: identificare il bersaglio, verificare l’attività sul patogeno, considerare sede ed esposizione, poi controllare indicazioni, sicurezza e raccomandazioni specifiche. Questo capitolo sviluppa i primi collegamenti farmacologici; le fonti cliniche sono state confrontate soltanto nei passaggi dichiarati e la sintesi non costituisce una revisione clinica indipendente."
    }
  ],
  "drugs": [],
  "targets": [],
  "review": "Sintesi originale a scopo didattico; indicazioni e dati quantitativi richiedono consultazione della fonte versionata.",
  "checks": [
    {
      "question": "NAG e NAM sono i peptidi della parete?",
      "answer": "No. Sono gli zuccheri alternati delle catene; al NAM sono legati i peptidi che partecipano ai collegamenti fra catene."
    },
    {
      "question": "Il ponte di cinque glicine descrive ogni batterio?",
      "answer": "No. È un esempio caratteristico di S. aureus; la composizione del peptidoglicano varia fra specie."
    },
    {
      "question": "Quale differenza separa fosfomicina e cicloserina?",
      "answer": "Fosfomicina interferisce con MurA nella preparazione del precursore zuccherino; cicloserina con alanina racemasi e D-Ala–D-Ala ligasi nella preparazione della componente peptidica."
    },
    {
      "question": "Perché il riciclo del trasportatore lipidico è importante?",
      "answer": "Permette altri cicli di caricamento e trasferimento dei precursori. Bacitracina può ostacolarlo senza bloccare direttamente la transpeptidasi."
    },
    {
      "question": "Transglicosilazione e transpeptidazione costruiscono lo stesso legame?",
      "answer": "No. La prima allunga le catene zuccherine; la seconda collega le componenti peptidiche."
    },
    {
      "question": "Vancomicina e β-lattamici riconoscono entrambi una PBP?",
      "answer": "No. I β-lattamici interferiscono con le PBP; vancomicina lega la terminazione D-Ala–D-Ala del precursore."
    },
    {
      "question": "Cilastatina è un secondo carbapeneme o un inibitore delle β-lattamasi?",
      "answer": "Nessuno dei due. Inibisce la deidropeptidasi renale dell’ospite, limitando il metabolismo renale di imipenem."
    },
    {
      "question": "Il bersaglio e la MIC permettono da soli di scegliere un trattamento?",
      "answer": "No. Occorrono anche sede, esposizione, formulazione, condizioni dell’ospite e prove cliniche pertinenti. Un indice PK/PD non è una dose."
    }
  ],
  "references": [
    {
      "id": "DAB-PARETE",
      "title": "Farmacologia II · Diapositive AA 2026–27",
      "detail": "PDF 56–60: tutte le pagine visibili lette; 56 è solo titolo, 57–60 integrati. Testi incorporati nelle immagini controllati; 59 e 60 condividono la base del diagramma ma hanno annotazioni differenti. Nessuna figura riprodotta."
    },
    {
      "id": "APP-PARETE",
      "title": "Farmacologia II · Appunti AA 2024–25, lezione 3 del 14 ottobre 2024",
      "detail": "PDF 34–35, stampa 33–34: testo e figure ispezionati. Schemi ripetuti delle slide non sono prove indipendenti. Numeri delle PBP, raccomandazioni empiriche e graduatorie di potenza non generalizzati."
    },
    {
      "id": "KATZ-PARETE",
      "title": "Katzung · Farmacologia generale e clinica, IX italiana 2014 / XII originale 2012",
      "detail": "Capitolo 43, PDF 909, stampa 889, già letto e ispezionato nel lotto 6–10, ricontrollato nel testo. Usato solo il meccanismo completo prima della frase interrotta; PDF 910 non letto."
    },
    {
      "id": "KATZ-VANCO",
      "title": "Katzung · Capitolo 43, carbapenemi e glicopeptidi",
      "detail": "PDF 921, stampa 901: intera pagina visibile letta e controllata. Integrati cilastatina e riconoscimento del precursore; regimi, soglie e raccomandazioni storiche esclusi. Continuazione PDF 922 non letta."
    },
    {
      "id": "KATZ-ALTRI",
      "title": "Katzung · Capitolo 43, altri inibitori della parete",
      "detail": "PDF 924–925, stampa 904–905: testo e figure/tabelle visibili letti; sintesi selettiva dei meccanismi di fosfomicina, bacitracina e cicloserina. Dosi, garanzie di sicurezza e indicazioni storiche non importate."
    },
    {
      "id": "RANG-ACCESSO",
      "title": "Rang & Dale · Farmacologia, VIII italiana 2016 / originale 2015",
      "detail": "PDF ebook 952, senza pagina a stampa attribuita: già letto e ispezionato, ora ricontrollato nel testo. Integrato solo l’accesso attraverso l’involucro; parte sui sulfamidici esclusa."
    },
    {
      "id": "MONTEIRO",
      "title": "Monteiro e collaboratori · Pentaglicina e integrità di S. aureus, 2019",
      "url": "https://pubmed.ncbi.nlm.nih.gov/30899062/",
      "detail": "Abstract completo consultato il 28 novembre 2026; DOI 10.1038/s41598-019-41461-1. Non intero articolo, figure o dati indipendentemente revisionati."
    },
    {
      "id": "EMA-FOS-MOA",
      "title": "EMA · Fosfomicina, assessment report del 26 marzo 2020",
      "url": "https://www.ema.europa.eu/en/documents/referral/fosfomycin-article-31-referral-assessment-report_en.pdf",
      "detail": "Introduzione, PDF 3: meccanismo MurA consultato il 28 novembre 2026. Non intera relazione di 75 pagine."
    },
    {
      "id": "DCS",
      "title": "de Chiara e collaboratori · D-cicloserina e alanina racemasi, 2020",
      "url": "https://pubmed.ncbi.nlm.nih.gov/32203411/",
      "detail": "Abstract completo consultato il 28 novembre 2026; DOI 10.1038/s41589-020-0498-9. Due bersagli distinti; nessuna irreversibilità universale inferita. Non articolo completo o indicazioni terapeutiche."
    },
    {
      "id": "DM-IMIPENEM",
      "title": "DailyMed · Imipenem/cilastatin, WG Critical Care",
      "url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=46f54df9-5afe-430c-aa19-0d84c2044b0b",
      "detail": "Scheda aggiornata il 16 gennaio 2025, consultata il 28 novembre 2026: meccanismo, metabolismo, limiti d’uso e avvertenze selezionate. Non revisione integrale."
    },
    {
      "id": "EMA-FOS-USO",
      "title": "EMA · Referral dei medicinali contenenti fosfomicina, 2020",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/fosfomycin-containing-medicinal-products",
      "detail": "Passaggi su formulazioni e ambiti d’impiego consultati il 28 novembre 2026. Distinta la decisione del 2020 dai singoli prodotti nazionali attuali; nessun regime trasferito."
    },
    {
      "id": "EUCAST",
      "title": "EUCAST · Definizioni S, I e R",
      "url": "https://www.eucast.org/bacteria/clinical-breakpoints-and-interpretation/definition-of-s-i-and-r/",
      "detail": "Definizioni ed esposizione riconsultate il 28 novembre 2026; nessuna tabella numerica o algoritmo terapeutico."
    },
    {
      "id": "EMA-PKPD",
      "title": "EMA · Uso di farmacocinetica e farmacodinamica nello sviluppo degli antimicrobici",
      "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/guideline-use-pharmacokinetics-and-pharmacodynamics-development-antimicrobial-medicinal-products_en.pdf",
      "detail": "EMA/CHMP/594085/2015, 2016, efficace dal 1 febbraio 2017; indice EMA consultato il 28 novembre 2026: versione corrente. Selezioni §4.2.1 e §4.2.3, PDF 7 e 9: indice, obiettivo e concentrazione libera. Non intero documento; guida allo sviluppo, non protocollo terapeutico."
    }
  ],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-28",
  "readingManifest": "./data/cell-wall-reading.json",
  "coverage": "Intervallo circoscritto: 12 posizioni PDF complete (10 nuove e 2 già lette), di cui una pagina di solo titolo; 11 con passaggi integrati. Testo e figure distinti; nessun intero libro o corso letto. Riconciliazione complessiva e revisione clinica indipendente aperte.",
  "moleculeLinks": [
    {
      "id": "CHEMBL1082",
      "label": "AMOXICILLIN"
    },
    {
      "id": "CHEMBL262777",
      "label": "VANCOMYCIN"
    },
    {
      "id": "CHEMBL1757",
      "label": "FOSFOMYCIN"
    },
    {
      "id": "CHEMBL771",
      "label": "CYCLOSERINE"
    },
    {
      "id": "CHEMBL43708",
      "label": "IMIPENEM"
    },
    {
      "id": "CHEMBL766",
      "label": "CILASTATIN"
    }
  ],
  "relatedExistingChapterIds": [
    "antibiotico-resistenze",
    "formulazioni-sali-bioequivalenza",
    "clearance-biliare-renale"
  ],
  "wordCount": 2436
};
