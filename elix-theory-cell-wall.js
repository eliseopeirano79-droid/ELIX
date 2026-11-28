// Original educational synthesis; bounded provenance in the reading ledger.
export const THEORY_CELL_WALL = {
  "id": "antibiotici-beta-lattamici",
  "volume": 12,
  "title": "Antibatterici β-lattamici e parete cellulare",
  "lead": "Come si costruisce il peptidoglicano e dove si interrompe la sequenza: precursori citoplasmatici, trasporto di membrana, PBP e reticolazione. Il confronto fra β-lattamici, glicopeptidi, fosfomicina e cicloserina collega bersagli, accesso ed esposizione. Strutture, farmacocinetica delle penicilline e ipersensibilità distinguono proprietà di famiglia e singolo medicinale. Distribuzione, misure nei compartimenti e limiti degli impieghi di classe completano il raccordo con le patologie.",
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
      "id": "pbp-funzioni",
      "title": "PBP diverse, funzioni diverse: leggere il bersaglio nel suo contesto",
      "refs": [
        "DAB-PBP",
        "APP-PARETE",
        "TAGUCHI",
        "DM-IMIPENEM",
        "EUCAST"
      ],
      "text": "La suddivisione della sintesi in tre fasi orienta nello spazio: preparazione nel citoplasma, trasferimento attraverso la membrana e assemblaggio sul suo lato esterno. Non è però una classificazione degli enzimi in tre categorie equivalenti. Nella fase finale collaborano proteine con attività differenti; attribuire a tutte le PBP ogni reazione di assemblaggio cancellerebbe proprio le distinzioni necessarie per capire il bersaglio.\n\nLe PBP di classe A possiedono un dominio che polimerizza la componente zuccherina e un dominio transpeptidasico. Le PBP di classe B hanno attività transpeptidasica e lavorano con proteine della famiglia SEDS, che forniscono l’attività di polimerizzazione. Lo studio sperimentale di Taguchi e collaboratori identifica FtsW come polimerasi del peptidoglicano settale, funzionale in complesso con la propria PBP di classe B. La stessa macchina può dunque riunire attività distribuite su proteine diverse: una PBP non deve necessariamente possedere entrambe le attività per partecipare alla costruzione della parete.\n\nAllungamento della cellula e formazione del setto richiedono una costruzione coordinata nello spazio. Interferire con l’organizzazione della parete laterale può alterare la forma; interferire con la divisione può impedire la separazione corretta delle cellule. Questi esiti morfologici aiutano a comprendere la funzione, ma non sono una scala universale della potenza dell’antibiotico. Numeri, abbondanza e denominazioni delle PBP vanno sempre riferiti alla specie e al sistema studiato.\n\nAnche l’affinità del farmaco deve essere descritta in modo specifico. La scheda di imipenem distingue il profilo di legame alle PBP di Escherichia coli da quello di Pseudomonas aeruginosa: non propone un’unica PBP bersaglio valida per tutti i batteri. Il collegamento con la scheda della molecola è utile proprio per passare dalla famiglia chimica al singolo composto.\n\nInfine, riconoscere una PBP in una cellula non equivale a dimostrare la sensibilità clinica dell’isolato. Contano l’interazione con il farmaco, la funzione che rimane disponibile, l’accesso e l’esposizione. Le categorie dell’antibiogramma richiedono il loro contesto interpretativo; non possono essere assegnate contando le PBP in una figura.",
      "formula": "Funzione enzimatica → ruolo nella crescita o nella divisione → interazione con il farmaco. La sigla PBP, da sola, non definisce né tutte le attività né la sensibilità."
    },
    {
      "id": "lisi-e-rimodellamento",
      "title": "Dall’inibizione alla morte: rimodellamento della parete e autolisi",
      "refs": [
        "DAB-PBP",
        "APP-PARETE",
        "KATZ-LISI",
        "RANG-LISI",
        "CHO"
      ],
      "text": "Una parete batterica in crescita non è un involucro già completato al quale si aggiungono soltanto nuove unità. Deve essere costruita e rimodellata in modo coordinato. Enzimi capaci di tagliare legami del peptidoglicano partecipano a questo rinnovamento; quando la loro attività contribuisce alla distruzione della cellula, viene richiamato il concetto di autolisi. Il taglio della parete non è quindi, in ogni situazione, un evento anomalo: il problema è il rapporto fra costruzione, riorganizzazione e integrità della rete.\n\nL’inibizione delle PBP transpeptidasiche ostacola la corretta reticolazione. Se la costruzione della parete diventa insufficiente rispetto alle esigenze della crescita e al rimodellamento, la rete può perdere integrità e la cellula può andare incontro a lisi. Il β-lattamico non va descritto come un enzima che digerisce direttamente il peptidoglicano: il primo evento farmacologico riguarda il bersaglio, mentre il danno cellulare deriva dalle conseguenze del suo blocco.\n\nKatzung distingue l’inibizione della transpeptidazione dalla spiegazione completa della morte batterica, richiamando autolisine e morfogenesi. Una formulazione storica presente in Rang attribuisce invece l’esito finale all’inattivazione di un inibitore degli enzimi autolitici. Questa seconda descrizione non va elevata a regola unica per tutte le specie e tutti i β-lattamici. Il coinvolgimento del rimodellamento è un principio utile; la sequenza regolatoria precisa richiede prove riferite al sistema studiato.\n\nGli esperimenti descritti da Cho e collaboratori aggiungono un esempio di conseguenza del blocco: la produzione di materiale di parete non adeguatamente assemblato può alimentare un ciclo improduttivo di sintesi e degradazione, consumando risorse cellulari e contribuendo all’attività letale. È un modello sperimentale che amplia il ragionamento oltre il semplice arresto di un enzima, non una spiegazione clinica universale o un nuovo bersaglio terapeutico già validato.\n\nPer interpretare un esperimento occorre infine separare tre osservazioni: arresto della crescita, perdita di vitalità e lisi. La morfologia e la torbidità della coltura non misurano da sole tutte e tre. L’assenza di una lisi evidente non dimostra automaticamente che il farmaco sia inattivo, né permette di attribuire una resistenza. Il capitolo generale sugli antibatterici approfondisce la distinzione fra MIC e uccisione; qui il punto è seguire il passaggio dal bersaglio alla risposta cellulare senza confondere il meccanismo con la misura dell’effetto.",
      "formula": "PBP inibite → reticolazione compromessa → squilibrio nella costruzione e nel rimodellamento → danno cellulare. Crescita, vitalità e lisi restano osservazioni distinte."
    },
    {
      "id": "famiglie-e-associazioni",
      "title": "Classi chimiche e associazioni: riconoscere il ruolo di ogni componente",
      "refs": [
        "DAB-PARETE",
        "APP-PARETE",
        "KATZ-VANCO",
        "DM-IMIPENEM",
        "DAB-STRUTTURA-PK",
        "RANG-PK",
        "ZAV-SMPC"
      ],
      "text": "Penicilline, cefalosporine, carbapenemi e monobattami sono quattro famiglie di antibatterici β-lattamici. Condividono l’anello che dà nome alla classe, ma differiscono per altre parti della struttura e per proprietà farmacologiche e microbiologiche. La classificazione chimica e la collocazione nella via della parete rispondono quindi a domande diverse: quale struttura caratterizza il composto e quale processo viene interferito?\n\nAmoxicillina e imipenem sono esempi utili per ritrovare, rispettivamente, una penicillina e un carbapeneme già presenti nel catalogo. La parentela chimica non autorizza a trasferire da una molecola all’altra spettro, sensibilità alle β-lattamasi, distribuzione o indicazioni. Analogamente, glicopeptidi e fosfomicina appartengono al gruppo funzionale degli inibitori della parete senza diventare per questo β-lattamici.\n\nUn’associazione richiede inoltre di identificare la funzione di ciascun componente. In imipenem/cilastatina, il primo è l’antibatterico che interferisce con la sintesi della parete; la seconda inibisce la deidropeptidasi renale I dell’ospite, limitando il metabolismo renale di imipenem. Il nome associato non indica due carbapenemi e non dimostra che la cilastatina neutralizzi una β-lattamasi batterica.\n\nIl confronto con le associazioni che contengono un inibitore delle β-lattamasi deve dunque partire dal luogo e dall’enzima interessati. Proteggere un antibiotico da una via metabolica dell’ospite e proteggerlo da un meccanismo batterico di inattivazione sono due finalità differenti. La parola «inibitore» è incompleta finché non viene specificato che cosa venga inibito.\n\nL’anello β-lattamico è un’ammide ciclica a quattro atomi. Nelle penicilline è fuso a un anello tiazolidinico a cinque termini; nelle cefalosporine a un anello diidrotiazinico a sei. I carbapenemi hanno un diverso sistema biciclico, mentre nei monobattami l’anello β-lattamico non è fuso a un secondo anello. Queste differenze descrivono l’architettura di base, non una graduatoria automatica di efficacia.\n\nAnche le catene laterali contano: modificare i sostituenti può cambiare stabilità chimica, interazione con proteine e accesso al bersaglio. Due molecole con lo stesso nucleo possono quindi comportarsi diversamente. L’apertura dell’anello da parte di una β-lattamasi e una trasformazione della catena laterale sono reazioni distinte; nel disegno bisogna riconoscere quale legame viene interessato.\n\nInfine, «inibitore delle β-lattamasi» è una definizione funzionale, non una quinta famiglia strutturale omogenea. Clavulanato possiede un anello β-lattamico; avibactam, associato a ceftazidima, è invece un inibitore non β-lattamico. La sua scheda descrive un’attività su determinati gruppi enzimatici, senza coprire tutte le β-lattamasi. Né la presenza dell’inibitore né la parentela chimica dimostrano, da sole, che un’associazione superi ogni resistenza.",
      "formula": "Imipenem → sintesi della parete batterica. Cilastatina → deidropeptidasi renale dell’ospite → minore metabolismo renale di imipenem."
    },
    {
      "id": "penicilline-farmacocinetica",
      "title": "Penicilline: dalla formulazione alla concentrazione nel sito d’infezione",
      "refs": [
        "DAB-STRUTTURA-PK",
        "KATZ-PK",
        "RANG-PK",
        "APP-PK",
        "AMOX-SMPC",
        "EMA-PKPD"
      ],
      "text": "Conoscere la PBP bersaglio chiarisce che cosa può fare una penicillina quando arriva al batterio. La farmacocinetica chiarisce invece quanta molecola raggiunge i diversi compartimenti e per quanto tempo rimane disponibile. L’anello comune non assegna a tutte le penicilline la stessa biodisponibilità, lo stesso legame proteico o la stessa emivita: questi dati appartengono a un composto e a condizioni di misurazione definite.\n\nL’assorbimento orale dipende anche dalla stabilità nell’ambiente gastrointestinale. Una molecola può essere attiva sul batterio in laboratorio e risultare poco adatta a quella via di somministrazione. Inoltre, il comportamento della sostanza e quello della preparazione farmaceutica vanno distinti. Una formulazione che rilascia lentamente il principio attivo può prolungarne l’ingresso nel sangue senza rendere necessariamente più lenta l’eliminazione della molecola già assorbita. Durata dell’assorbimento ed emivita di eliminazione non sono sinonimi.\n\nAmoxicillina offre un esempio concreto: la scheda delle capsule consultata descrive un buon assorbimento orale, non ridotto dall’assunzione contemporanea di cibo. Descrive anche un’eliminazione prevalentemente renale e una clearance che diminuisce al ridursi della funzione renale. Queste proprietà aiutano a collegare esposizione e condizioni dell’ospite; non autorizzano a estendere automaticamente le stesse istruzioni alle altre penicilline o ad altre formulazioni.\n\nLa distribuzione aggiunge un’altra distinzione. Trovare il farmaco nel plasma non dimostra una concentrazione efficace in ogni sede. La stessa scheda di amoxicillina segnala una distribuzione non adeguata nel liquido cerebrospinale: «ampiamente distribuito» non equivale dunque a «adatto a qualsiasi infezione». Il confronto fra infezione urinaria, polmonare e meningea richiede di considerare il compartimento interessato, oltre alla sensibilità del microrganismo.\n\nIl legame alle proteine plasmatiche distingue infine concentrazione totale e quota libera. Nel ragionamento PK/PD sui β-lattamici è quest’ultima a essere confrontata con la MIC nel tempo. Una percentuale di legame, isolata dal resto della farmacocinetica, non basta a prevedere l’efficacia. Per leggere correttamente una tabella occorre quindi identificare molecola, formulazione, via, popolazione studiata e parametro: una fascia numerica attribuita all’intera famiglia non sostituisce il dato pertinente.",
      "formula": "Formulazione e via → assorbimento; distribuzione e legame proteico → esposizione nei compartimenti; eliminazione → andamento nel tempo. Nessuno di questi passaggi è determinato dal solo anello β-lattamico."
    },
    {
      "id": "distribuzione-volume-esposizione",
      "title": "Distribuzione dei β-lattamici: volume apparente e forma della curva",
      "refs": [
        "DAB-DISTRIBUZIONE",
        "KATZ-DISTRIBUZIONE",
        "PK-ELIX"
      ],
      "text": "La distribuzione risponde a una domanda diversa dall’eliminazione: dove si trova il farmaco già entrato nell’organismo? Per molte penicilline la polarità favorisce una distribuzione prevalentemente extracellulare e limita l’accumulo nelle cellule. Ciò aiuta a leggere gli schemi con sangue, interstizio e spazio intracellulare, ma non autorizza a trattare le membrane come barriere assolute. Per raggiungere la parete batterica contano sia il passaggio nei compartimenti dell’ospite sia l’accesso al batterio: attraversare una cellula umana e attraversare la membrana esterna di un Gram-negativo sono problemi distinti.\n\nIl volume apparente di distribuzione, V, è il rapporto fra quantità di farmaco nell’organismo e concentrazione plasmatica. Non è una misura anatomica e non dice in quale organo si trovi la molecola. Una concentrazione plasmatica relativamente bassa può accompagnare una maggiore distribuzione fuori dal plasma; da questo dato, però, non si ricava automaticamente la concentrazione libera nel focolaio infettivo. Anche la categoria «lipofilo» descrive una tendenza fisicochimica, non garantisce attività contro un patogeno intracellulare né impone un’eliminazione epatica.\n\nPer capire perché «volume maggiore» non significhi sempre «esposizione minore», si può usare un modello dichiaratamente semplice: dose endovenosa istantanea, un solo compartimento, distribuzione immediata ed eliminazione lineare con clearance costante. La concentrazione iniziale è D/V, mentre l’area plasmatica totale sotto la curva è D/CL. A parità di dose e clearance, aumentare V abbassa la concentrazione iniziale e rallenta il decadimento, senza ridurre quell’area. È una conseguenza del modello, non il risultato di uno studio su una penicillina e non una proposta di dose.\n\nNella realtà, distribuzione, legame proteico e clearance possono cambiare insieme; inoltre una somministrazione orale o un’infusione introducono un ingresso nel tempo. Per questo bisogna specificare se si sta discutendo un picco, un’area plasmatica, una concentrazione tissutale o il tempo libero sopra MIC. Due curve con la stessa area possono trascorrere tempi differenti sopra la MIC. Il collegamento con le PBP rimane quindi temporale e locale: l’area da sola non sostituisce l’indice PK/PD pertinente né dimostra un’esposizione adeguata nel sito d’infezione.",
      "formula": "Modello monocompartimentale, bolo EV, CL costante: Cp(t) = (D/V) × exp[−(CL/V)t]; AUC₀–∞ = D/CL. V maggiore, con D e CL invariati: picco iniziale minore e decadimento più lento; area invariata."
    },
    {
      "id": "compartimenti-rapporti-penetrazione",
      "title": "Leggere la penetrazione: plasma, interstizio, cellule e liquidi biologici",
      "refs": [
        "DAB-DISTRIBUZIONE",
        "KATZ-DISTRIBUZIONE",
        "APP-DISTRIBUZIONE",
        "AMOX-SMPC"
      ],
      "text": "Dire che un antibiotico «penetra nel tessuto» lascia aperte molte domande. Una misura nel plasma, nel liquido interstiziale, nelle cellule o nel liquido che riveste l’epitelio polmonare non descrive lo stesso compartimento. Quest’ultimo è indicato come ELF, epithelial lining fluid: non coincide con la concentrazione dentro i macrofagi. Anche una misura complessiva del tessuto può mescolare spazi differenti. Prima di collegare il dato a una polmonite bisogna quindi chiarire quale sede è stata campionata e dove si trova il patogeno.\n\nUn rapporto tra concentrazione in un liquido biologico e concentrazione sierica è un confronto fra due misure, non una percentuale della dose che ha raggiunto quella sede. Il rapporto può dipendere dal momento del prelievo, dal ritardo della distribuzione e dal confronto fra quantità libera o totale. Un rapporto di concentrazioni misurato in un istante non equivale neppure al rapporto fra le rispettive aree sotto le curve. Senza queste informazioni, una tabella non consente di classificare gli antibiotici dal «migliore» al «peggiore».\n\nLiquor, bile, latte e umor acqueo aggiungono condizioni specifiche. Per il liquor, lo stato delle meningi può modificare la penetrazione: il dato ottenuto con infiammazione non va trasferito a meningi integre. Per il latte, rilevare una molecola non basta a definire beneficio o rischio per il lattante; la scheda del prodotto richiede una valutazione distinta. Per la bile, una concentrazione elevata non prova da sola che quella sia la principale via di eliminazione dell’intera dose. Concentrazione, quantità eliminata e sicurezza rispondono a domande diverse.\n\nL’amoxicillina offre un controllo concreto: lo SmPC UK consultato descrive la presenza in più tessuti e liquidi, ma segnala una distribuzione non adeguata nel liquido cerebrospinale. Questa informazione specifica impedisce di trasformare la generica diffusione delle penicilline nei liquidi corporei in una garanzia per il sistema nervoso centrale. I valori delle vecchie tabelle restano contesto didattico; per valutare un impiego servono preparazione, popolazione, metodo di misura, sensibilità del patogeno e prove cliniche riferite alla stessa situazione.",
      "formula": "Dato di penetrazione → identificare matrice, quota libera/totale, tempo e stato della barriera → confrontare l’esposizione pertinente al bersaglio. Un rapporto liquido/siero non è una quota della dose né una prova di efficacia."
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
        "EUCAST",
        "DAB-STRUTTURA-PK",
        "KATZ-PK"
      ],
      "text": "β-lattamasi, modifica delle PBP, variazioni di permeabilità ed efflusso possono ridurre sensibilità. La MIC ha significato solo in relazione a specie, metodo e breakpoint pertinenti; non equivale da sola a una dose prescrivibile.\n\nQuesti meccanismi possono essere ordinati lungo il percorso del farmaco. Una barriera di ingresso limita l’accesso; un sistema di efflusso può ridurre la disponibilità locale; un enzima inattivante modifica la molecola; un bersaglio alterato riduce l’interazione utile. Il fatto che due isolati presentino ridotta sensibilità non dimostra che condividano lo stesso meccanismo.\n\nPer un β-lattamico, distinguere PBP e β-lattamasi è essenziale. Inibire una β-lattamasi può proteggere il farmaco da un determinato processo di inattivazione, ma non implica la correzione di una PBP poco affine o di ogni problema di permeabilità. La presenza della parola «inibitore» nel nome di un’associazione non equivale quindi a una garanzia di sensibilità.\n\nPer vancomicina, la modificazione della terminazione del precursore mette in evidenza un’altra possibilità: la cellula può conservare la costruzione della parete cambiando un elemento riconosciuto dall’antibiotico. Lo studio del bersaglio deve comprendere la struttura effettivamente riconosciuta, non soltanto il nome generale della via biosintetica.\n\nLe proprietà dell’involucro spiegano infine perché lo spessore della parete non sia una graduatoria di sensibilità. Una rete più sottile nei Gram negativi si accompagna a una membrana esterna che può limitare l’accesso. Quantità di peptidoglicano, presenza del bersaglio e sensibilità del singolo isolato sono informazioni collegate, ma non intercambiabili."
    },
    {
      "id": "ipersensibilita-beta-lattamici",
      "title": "Ipersensibilità: distinguere struttura chimica, reazione e anamnesi",
      "refs": [
        "DAB-STRUTTURA-PK",
        "RANG-PK",
        "CDC-ALLERGIA",
        "CDC-CROSS"
      ],
      "text": "La selettività per la parete batterica non impedisce reazioni immunitarie nell’ospite. I prodotti derivati dalle penicilline possono legarsi a proteine dell’organismo e formare strutture riconoscibili dal sistema immunitario. Il bersaglio antibatterico e il determinante antigenico appartengono quindi a due livelli diversi: spiegare l’interazione con una PBP non spiega da solo l’ipersensibilità.\n\nLa parola «allergia» deve essere collegata a una storia precisa. Il CDC distingue reazioni immediate, anche mediate da IgE, da reazioni ritardate che possono interessare cute o organi. Un disturbo gastrointestinale isolato, una familiarità o un’eruzione comparsa durante un’infezione non dimostrano automaticamente un’allergia alla penicillina. Sono essenziali il medicinale assunto, il tempo trascorso prima dei sintomi e la natura della reazione.\n\nLa parentela strutturale rende pertinente il problema della reattività crociata, ma non consente di assegnare un unico rischio a tutti i β-lattamici. Le indicazioni CDC distinguono situazioni e composti: una precedente reazione non si interpreta soltanto leggendo il nome della famiglia. La valutazione non può essere sostituita né da un divieto indiscriminato né da una rassicurazione basata sul solo cambio di antibiotico.\n\nL’eventuale verifica dell’etichetta di allergia è un percorso clinico. Le reazioni ritardate gravi richiedono una gestione specialistica e non rientrano nei normali percorsi di provocazione orale. Il punto didattico è separare evento avverso, sospetto immunologico e diagnosi documentata; questo schema non è un protocollo per scegliere o provare un farmaco.",
      "formula": "Evento riferito → identificare farmaco, tempi e manifestazioni → valutazione clinica pertinente. Etichetta di allergia, intolleranza e reattività crociata non sono sinonimi."
    },
    {
      "id": "meccanismo-e-patologie",
      "title": "Dal meccanismo alle patologie: mantenere distinte le domande",
      "refs": [
        "EMA-FOS-USO",
        "DM-IMIPENEM",
        "DAB-DISTRIBUZIONE",
        "APP-DISTRIBUZIONE",
        "CDC-GONORREA",
        "NIH-SIFILIDE",
        "AMOX-SMPC"
      ],
      "text": "Le infezioni urinarie, polmonari e del sistema nervoso centrale consentono di mettere alla prova il ragionamento senza trasformare la classificazione in una lista di prescrizioni. Il batterio può possedere la stessa via di sintesi della parete in sedi differenti, mentre cambiano il compartimento da raggiungere, la formulazione utilizzabile e le prove cliniche pertinenti.\n\nLa revisione europea della fosfomicina del 2020 distingue gli impieghi delle preparazioni orali da quelli endovenosi. Fra gli impieghi orali compare la cistite acuta non complicata in donne e adolescenti; per la via endovenosa l’ambito riguarda determinate infezioni gravi quando altri trattamenti non sono adatti. L’esempio mostra perché il nome del principio attivo e il bersaglio MurA non bastino a rendere equivalenti vie di somministrazione e situazioni cliniche. Non è una revisione completa delle indicazioni attuali di ogni prodotto nazionale.\n\nAnche un dato di distribuzione deve essere interpretato con cautela. La scheda statunitense consultata di imipenem/cilastatina non ne indica l’impiego nella meningite, perché sicurezza ed efficacia non sono state stabilite. Rilevare un farmaco nel liquor e disporre di un’indicazione clinica sono due livelli di evidenza differenti: non si può dedurre il secondo dal primo.\n\nPer collegare una scheda di molecola a un capitolo di patologia, la sequenza utile è quindi: identificare il bersaglio, verificare l’attività sul patogeno, considerare sede ed esposizione, poi controllare indicazioni, sicurezza e raccomandazioni specifiche. Questo capitolo sviluppa i primi collegamenti farmacologici; le fonti cliniche sono state confrontate soltanto nei passaggi dichiarati e la sintesi non costituisce una revisione clinica indipendente.\n\nAnche gli elenchi storici di impiego delle penicilline richiedono questa distinzione. La gonorrea è un esempio netto: i CDC non raccomandano penicillina per i ceppi circolanti negli Stati Uniti, per insufficiente sensibilità. La pagina clinica CDC indica ceftriaxone per la gonorrea non complicata; il fatto che entrambi appartengano ai β-lattamici non li rende intercambiabili. Qui il confronto serve a correggere l’attribuzione generica alla classe, senza introdurre uno schema terapeutico.\n\nPer la sifilide, le raccomandazioni NIH consultate per adulti e adolescenti con HIV sottolineano invece la scelta della preparazione di penicillina in rapporto a stadio e sedi interessate, compreso il sistema nervoso centrale. Per Staphylococcus aureus, lo SmPC dell’amoxicillina distingue la resistenza dovuta a penicillinasi e quella associata alla meticillino-resistenza: il solo nome della specie non predice sensibilità ad amoxicillina, e resistenza e virulenza non sono sinonimi. Infine, l’etichetta «polmonite pneumococcica» identifica agente e sede, ma non rende equivalenti tutte le penicilline. In ciascun esempio occorre tornare dal nome della classe al composto, alla formulazione e al contesto clinico."
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
    },
    {
      "question": "Ogni PBP polimerizza gli zuccheri e collega i peptidi?",
      "answer": "No. Le PBP di classe A possiedono entrambe le attività; le PBP di classe B hanno attività transpeptidasica e collaborano con polimerasi SEDS. Il complesso e la singola proteina non sono la stessa cosa."
    },
    {
      "question": "La stessa numerazione delle PBP permette di confrontare direttamente specie diverse?",
      "answer": "No. Numero, quantità, funzione e affinità vanno riferiti alla specie e al sistema studiato; una tabella non assegna automaticamente la sensibilità."
    },
    {
      "question": "La mancata lisi visibile dimostra resistenza a un β-lattamico?",
      "answer": "No. Crescita, vitalità e lisi richiedono osservazioni distinte. Il bersaglio e la morfologia non sostituiscono una prova di sensibilità interpretata correttamente."
    },
    {
      "question": "Tutti gli inibitori delle β-lattamasi hanno un anello β-lattamico?",
      "answer": "No. La definizione indica la funzione: clavulanato possiede l’anello, avibactam no. La copertura dipende dalle β-lattamasi interessate."
    },
    {
      "question": "Una formulazione a rilascio lento prolunga necessariamente l’emivita di eliminazione?",
      "answer": "No. Può prolungare l’ingresso del farmaco nel sangue. Assorbimento ed eliminazione sono processi distinti."
    },
    {
      "question": "La dicitura «allergia alla penicillina» descrive da sola il rischio di un altro β-lattamico?",
      "answer": "No. Occorrono medicinale, tempi, manifestazioni e valutazione clinica; un’etichetta non equivale a una diagnosi né a un rischio uniforme per tutta la classe."
    },
    {
      "question": "Un aumento del volume apparente riduce necessariamente l’AUC plasmatica?",
      "answer": "No. Nel modello lineare a dose EV e clearance invariate, AUC = D/CL: il volume modifica picco e andamento, mentre l’area resta uguale. Non è una regola di adeguamento della dose."
    },
    {
      "question": "Un rapporto liquor/siero del farmaco rappresenta la percentuale della dose entrata nel liquor?",
      "answer": "No. Confronta concentrazioni in matrici definite, con tempi e condizioni di misura da specificare. Non misura la quota della dose né dimostra efficacia."
    },
    {
      "question": "Perché il nome «penicilline» non basta per collegare un trattamento a una patologia?",
      "answer": "Perché sensibilità del patogeno, molecola, formulazione e accesso alla sede cambiano. La gonorrea e la sifilide mostrano problemi diversi; un elenco storico non equivale a una raccomandazione attuale."
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
      "detail": "IX italiana 2014 / XII originale 2012. PDF 909, stampa 889: lettura completa già registrata e testo ricontrollato; la continuazione PDF 910 è ora letta, come documentato in KATZ-LISI. Nessuna nuova lettura conteggiata per 909."
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
    },
    {
      "id": "DAB-PBP",
      "title": "Farmacologia II · Diapositive AA 2026–27, PBP e risposta cellulare",
      "detail": "PDF 61–65: testo completo e figure controllati. La tabella di 64 e gli schemi di 63 ricompaiono negli appunti PDF 35: non sono prove indipendenti. Quantità delle PBP e attribuzioni enzimatiche della tabella non generalizzate; l’ipotesi con punto interrogativo in 65 non trasformata in certezza."
    },
    {
      "id": "KATZ-LISI",
      "title": "Katzung · Capitolo 43, transpeptidazione, autolisine e resistenza",
      "detail": "IX italiana 2014 / XII originale 2012. PDF 910, stampa 890, letto integralmente e figura 43-4 controllata; completa il passaggio avviato in PDF 909, ricontrollato senza ricontarlo. Sintesi limitata al meccanismo; continuazione PDF 911 ora letta, documentata in KATZ-PK."
    },
    {
      "id": "RANG-LISI",
      "title": "Rang & Dale · Capitolo 51, meccanismo dei β-lattamici",
      "detail": "VIII italiana 2016 / originale 2015. PDF ebook 956–957 letti integralmente, figura 51.3 e testi controllati; nessuna pagina a stampa attribuita. Ipotesi storica sull’autolisi discussa con limiti. Regimi clinici, superiorità dell’esposizione intermittente, frequenze di rischio e generalizzazioni PK non trasferiti."
    },
    {
      "id": "TAGUCHI",
      "title": "Taguchi e collaboratori · FtsW e PBP di classe B, 2019",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6430707/",
      "detail": "DOI 10.1038/s41564-018-0345-x. Abstract e primo paragrafo introduttivo letti il 28 novembre 2026: classi A/B e polimerizzazione tramite FtsW. Non lettura integrale di metodi, risultati o figure; nessuna validazione clinica."
    },
    {
      "id": "CHO",
      "title": "Cho, Uehara e Bernhardt · Conseguenze del blocco delle PBP, 2014",
      "url": "https://pubmed.ncbi.nlm.nih.gov/25480295/",
      "detail": "DOI 10.1016/j.cell.2014.11.017. Abstract completo letto il 28 novembre 2026; modello sperimentale di sintesi e degradazione improduttiva. Non articolo o figure integralmente revisionati; accesso diretto PMC non riuscito."
    },
    {
      "id": "DAB-STRUTTURA-PK",
      "title": "Farmacologia II · Diapositive AA 2026–27, strutture e penicilline",
      "detail": "PDF 66–70: testo visibile e figure letti. PDF 66 contiene grafici, non solo il titolo estratto; gli schemi ripetuti non sono prove indipendenti. Intervalli PK di classe e allergia crociata generalizzata non trasferiti; nessuna verifica stereochimica indipendente."
    },
    {
      "id": "KATZ-PK",
      "title": "Katzung · Capitolo 43, resistenza e inizio della farmacocinetica",
      "detail": "IX italiana 2014 / XII originale 2012. PDF 911, stampa 891: testo completo e figura 43-5 controllati; PDF 909 ricontrollato. La legenda «β-lattamasi» al punto 5 contrasta con la didascalia «antibiotici β-lattamici»: non trasferita. Continuazione PDF 912 ora letta, documentata in KATZ-DISTRIBUZIONE."
    },
    {
      "id": "RANG-PK",
      "title": "Rang & Dale · Capitolo 51, strutture, farmacocinetica e ipersensibilità",
      "detail": "VIII italiana 2016 / originale 2015. PDF ebook 956–957 e figura 51.3 ricontrollati, senza nuova lettura conteggiata. Integrati concetti qualitativi; esclusi usi storici, frequenze, valori PK di classe e garanzie universali sulle β-lattamasi. Testi delle note 4/5 assenti non ricostruiti."
    },
    {
      "id": "APP-PK",
      "title": "Farmacologia II · Appunti AA 2024–25, lezione 3 del 14 ottobre 2024",
      "detail": "PDF 36, stampa 35: completata la precedente lettura parziale, inclusi diapositiva, tabella inferiore e note. Integrata soltanto la variabilità fra composti; valori numerici discordanti e ambiguità di formulazione non trasferiti. La diapositiva ripete PDF 70 del corso."
    },
    {
      "id": "AMOX-SMPC",
      "title": "Amoxicillin 500 mg hard capsules · Sandoz, SmPC UK",
      "url": "https://www.medicines.org.uk/emc/product/15728/smpc",
      "detail": "Testo revisionato il 13 marzo 2026, pubblicato su emc il 26 marzo; consultato il 28 novembre 2026. Selezioni §4.3–4.4 e §5.2; non revisione integrale né indicazione nazionale italiana. Nessuna dose o soglia microbiologica importata. Ricontrollati §4.6, §5.1 (meccanismi, senza breakpoint) e §5.2 per distribuzione e limiti di sensibilità."
    },
    {
      "id": "ZAV-SMPC",
      "title": "Zavicefta · Pfizer, SmPC UK",
      "url": "https://www.medicines.org.uk/emc/product/2465/smpc",
      "detail": "emc aggiornato il 26 agosto 2025, consultato il 28 novembre 2026. §5.1: ceftazidima e avibactam, natura non β-lattamica dell’inibitore e limiti enzimatici. Nessuna indicazione o posologia trasferita; PDF EMA non accessibile in questo controllo."
    },
    {
      "id": "CDC-ALLERGIA",
      "title": "CDC · Clinical Features of Penicillin Allergy",
      "url": "https://www.cdc.gov/antibiotic-use/hcp/clinical-signs/",
      "detail": "Pagina aggiornata il 25 agosto 2025, letta il 28 novembre 2026: etichetta, anamnesi e distinzione delle reazioni. Nessun percorso diagnostico autonomo."
    },
    {
      "id": "CDC-CROSS",
      "title": "CDC · STI Treatment Guidelines, Penicillin Allergy",
      "url": "https://www.cdc.gov/std/treatment-guidelines/penicillin-allergy.htm",
      "detail": "Guida 2021, passaggio sulla reattività crociata consultato il 28 novembre 2026. Usato per evitare un rischio uniforme di classe; nessuna percentuale, prescrizione o algoritmo trasferito."
    },
    {
      "id": "DAB-DISTRIBUZIONE",
      "title": "Farmacologia II · Diapositive antibatterici AA 2026–27",
      "detail": "PDF 71–75: testo visibile, schemi e tabelle letti e ispezionati. PDF 73–74 riproducono tabelle attribuite a Rossi, Cuomo, Riccardi, Farmacologia III edizione: opera originale non consultata. Nessuna tabella o figura riprodotta; valori quantitativi e indicazioni di classe non trasferiti."
    },
    {
      "id": "KATZ-DISTRIBUZIONE",
      "title": "Katzung · Capitolo 43, distribuzione ed eliminazione delle penicilline",
      "detail": "IX italiana 2014 / XII originale 2012. PDF 912, stampa 892: pagina completa letta e controllata, con continuazione della frase in PDF 911. Integrati soltanto concetti di distribuzione e differenze fra composti; dosi, soglie, equivalenze tissutali e regimi storici esclusi."
    },
    {
      "id": "APP-DISTRIBUZIONE",
      "title": "Farmacologia II · Appunti AA 2024–25, lezione 3 del 14 ottobre 2024",
      "detail": "PDF 37, stampa 36: testo, due tabelle e diapositiva inferiore letti; tabella posologica ingrandita per la lettura. Tabella di penetrazione ripetuta in PDF 74 del corso. La tabella posologica cita Katzung XIII edizione 2015, distinta dal libro IX italiano consultato. Posologie e generalizzazioni inesatte non integrate."
    },
    {
      "id": "PK-ELIX",
      "title": "ELIX · Modelli farmacocinetici",
      "detail": "Raccordo con il capitolo già verificato e il suo registro: V apparente, clearance e AUC in cinetica lineare. Derivazione editoriale del modello monocompartimentale; nessuna nuova lettura di libro conteggiata per questo riuso."
    },
    {
      "id": "CDC-GONORREA",
      "title": "CDC · Gonococcal Infections e Clinical Treatment of Gonorrhea",
      "url": "https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm",
      "detail": "Guida 2021: passaggio sulla sensibilità insufficiente a penicillina letto direttamente il 28 novembre 2026. Confrontata la pagina Clinical Treatment of Gonorrhea dell’11 luglio 2024, che rimanda alla guida. Ambito USA; nessuna dose o algoritmo trasferito."
    },
    {
      "id": "NIH-SIFILIDE",
      "title": "NIH · Syphilis, adulti e adolescenti con HIV",
      "url": "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/syphilis",
      "detail": "Aggiornamento 27 maggio 2026, revisione 18 novembre 2026; consultato il 28 novembre. Selezione General Considerations for Treating Syphilis: preparazione, stadio e sedi. Guida non letta integralmente; nessuna posologia o estensione automatica ad altre popolazioni."
    }
  ],
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-28",
  "readingManifest": "./data/cell-wall-reading.json",
  "coverage": "Intervallo circoscritto: 34 posizioni PDF complete, 7 nuove letture e ispezioni in questo lotto e 27 già registrate; 33 con passaggi integrati e una di solo titolo. Le tabelle ripetute non sono evidenze indipendenti. Nessun intero libro o corso letto; riconciliazione complessiva e revisione clinica indipendente aperte.",
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
    "clearance-biliare-renale",
    "modelli-pk"
  ],
  "wordCount": 4639
};
