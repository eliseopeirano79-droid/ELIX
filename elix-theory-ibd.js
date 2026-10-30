// Sintesi didattica originale; copertura e limiti nei registri collegati.
export const THEORY_IBD = Object.freeze({
  "id": "malattie-infiammatorie-intestinali",
  "volume": 11,
  "title": "Malattie infiammatorie intestinali: barriera, aminosalicilati e glucocorticoidi",
  "lead": "Dalla barriera intestinale al recettore dei glucocorticoidi: collegare sede di malattia, rilascio del farmaco, primo passaggio e obiettivo terapeutico.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-10-30",
  "readingManifest": "./data/mici-reading.json",
  "sections": [
    {
      "id": "malattie",
      "title": "Crohn e colite ulcerosa: la sede cambia la domanda farmacologica",
      "refs": [
        "CFI",
        "APP",
        "NIH-CD",
        "NIH-UC",
        "NIH-IBS"
      ],
      "text": "Le malattie infiammatorie croniche intestinali, spesso indicate con MICI o IBD, comprendono la malattia di Crohn e la colite ulcerosa. La loro denominazione rimanda a un processo infiammatorio persistente o ricorrente, non semplicemente alla presenza di diarrea. Disturbi con sintomi simili possono avere meccanismi diversi: la sindrome dell’intestino irritabile non è un’altra forma di MICI e non implica lo stesso danno infiammatorio visibile.\n\nLa colite ulcerosa interessa il rivestimento interno del colon, compreso il retto. Il quadro tipico è continuo, con estensione variabile; ridurla a una malattia del solo sigma fa perdere questa variabilità. Il Crohn può coinvolgere qualunque tratto dalla bocca all’ano, spesso ileo e colon, con aree interessate separate da tratti relativamente risparmiati. L’infiammazione può estendersi attraverso la parete intestinale. Queste descrizioni orientano lo studio, ma non sostituiscono i criteri diagnostici né impongono che ogni caso abbia tutti i reperti tipici.\n\nPer il farmacologo, la sede è una domanda concreta: dove deve arrivare il principio attivo? Un trattamento che espone soprattutto la mucosa rettale e un trattamento che raggiunge un segmento più prossimale non distribuiscono il farmaco nello stesso modo. La profondità del processo, la sua estensione e il bersaglio biologico sono altrettanto importanti: due malattie associate a infiammazione non diventano per questo intercambiabili nelle prove di efficacia."
    },
    {
      "id": "barriera",
      "title": "Barriera, microbiota e immunità formano un circuito",
      "refs": [
        "CFI",
        "APP"
      ],
      "text": "La superficie intestinale separa un ambiente ricco di microrganismi dal compartimento interno, mantenendo al tempo stesso scambi essenziali. L’epitelio, le sue connessioni, il muco e le cellule immunitarie partecipano a questa funzione. Parlare di barriera non significa quindi immaginare soltanto una parete impermeabile: è un sistema regolato che riconosce segnali, limita il passaggio di componenti luminali e risponde al danno.\n\nNelle MICI, alterazioni della barriera, risposta immunitaria e composizione del microbiota possono alimentarsi reciprocamente. Una maggiore esposizione a componenti microbiche favorisce segnali infiammatori; l’infiammazione può a sua volta danneggiare l’epitelio e modificare l’ambiente in cui vivono i microrganismi. La disbiosi descrive un’alterazione di questo ecosistema, ma non identifica da sola un unico microrganismo responsabile o una sequenza causale identica in tutti.\n\nUn circuito di amplificazione spiega perché intervenire su un passaggio possa ridurre l’attività complessiva senza eliminare tutte le condizioni che la sostengono. Spiega anche perché un modello utile alla comprensione non sia una prova terapeutica. Se un diagramma collega microbiota e infiammazione, non ne consegue che qualunque intervento capace di modificare il microbiota migliori necessariamente la malattia. Occorre distinguere plausibilità biologica, osservazione sperimentale ed esito clinico.",
      "formula": "Barriera alterata ↔ segnali microbici ↔ risposta immunitaria → mediatori e reclutamento → danno di barriera.\nSchema qualitativo originale: le frecce descrivono interazioni, non una causa unica o una sequenza obbligatoria."
    },
    {
      "id": "bersagli",
      "title": "Dal mediatore al bersaglio: non tutto è un recettore",
      "refs": [
        "CFI",
        "KAT",
        "APP"
      ],
      "text": "L’attivazione di cellule immunitarie porta alla produzione di citochine e di altri mediatori; il reclutamento di nuove cellule mantiene la risposta nel tessuto. In questo percorso si incontrano bersagli di natura diversa. Una citochina è un messaggero, il suo recettore è il sistema che la riconosce, una molecola di adesione contribuisce al contatto e al passaggio delle cellule fra sangue e tessuto. Confondere queste funzioni rende difficile capire perché due farmaci possano modulare la stessa malattia attraverso passaggi differenti.\n\nIl TNF offre un esempio di mediatore solubile o associato alla membrana che può essere intercettato da anticorpi. Le integrine e i loro ligandi appartengono invece al sistema che regola il traffico cellulare. L’asse α4β7–MAdCAM-1 mostrato nel materiale del corso aiuta a visualizzare il collegamento con il distretto intestinale; non è una descrizione completa di tutti i processi di migrazione.\n\nGli aminosalicilati introducono un terzo tipo di ragionamento: la loro attività non si riassume nell’occupazione di un unico recettore selettivo. Si considerano effetti su più componenti della risposta locale. Il capitolo sugli anticorpi approfondisce la distinzione fra riconoscimento del bersaglio e conseguenze funzionali; qui la mappa serve a collocare le classi, senza ordinare i farmaci per una presunta potenza universale."
    },
    {
      "id": "obiettivi",
      "title": "Induzione e mantenimento osservano tempi diversi",
      "refs": [
        "KAT",
        "RAN",
        "APP",
        "BSG"
      ],
      "text": "Indurre la remissione significa cercare di controllare una fase attiva; mantenere la remissione significa conservarne il risultato nel tempo. Sono domande diverse, che richiedono osservazioni su periodi differenti. Un farmaco capace di modificare rapidamente i sintomi non ha automaticamente dimostrato di prevenire le ricadute, e un trattamento di mantenimento non va giudicato soltanto sulla risposta nelle prime ore.\n\nLe piramidi didattiche aiutano a ricordare le classi, ma non rappresentano un percorso obbligatorio nel quale ogni persona debba fallire tutti i gradini precedenti. BSG 2025 considera l’impiego precoce di terapie avanzate nel Crohn, soprattutto con attività moderata o grave, e distingue i corticosteroidi per l’induzione dal loro mancato ruolo nel mantenimento. Questo corregge la lettura della piramide come regola universale, senza trasformare una raccomandazione di popolazione in una scelta individuale.\n\nAnche la risposta ha più dimensioni. La riduzione di un sintomo, l’andamento dei segni di infiammazione e la tollerabilità non descrivono lo stesso fenomeno. Per leggere una prova bisogna sapere quale obiettivo fosse stato stabilito, in quale malattia e con quale trattamento precedente. La semplice etichetta “antinfiammatorio” non contiene queste informazioni. Le strategie per le forme severe e la sequenza delle terapie avanzate richiedono un approfondimento distinto da questa introduzione."
    },
    {
      "id": "cinque-asa",
      "title": "5-ASA: una molecola attiva, più ipotesi di azione",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "MES-UK"
      ],
      "text": "Mesalazina e acido 5-aminosalicilico, abbreviato 5-ASA, indicano la stessa molecola attiva; mesalamine è un’altra denominazione usata nelle fonti e nel catalogo. Il gruppo amminico in posizione 5 la distingue dall’acido salicilico. La parentela chimica con i salicilati non autorizza però a trattarla come un comune analgesico antinfiammatorio destinato a produrre un effetto sistemico.\n\nIl meccanismo terapeutico complessivo non è definito in modo univoco. Le fonti discutono la modulazione di mediatori derivati dall’acido arachidonico, della produzione di citochine, delle funzioni leucocitarie e delle specie reattive dell’ossigeno. Questi passaggi possono concorrere alla riduzione della risposta infiammatoria nella mucosa. Non vanno sommati come se ciascuno fosse stato dimostrato necessario e sufficiente nell’essere umano.\n\nLa distinzione fra risultato sperimentale e spiegazione clinica è centrale: osservare un effetto su una via in laboratorio non misura automaticamente quanto quella via contribuisca al beneficio del paziente. Anche lo SmPC consultato mantiene incerto il meccanismo antinfiammatorio. Per studiare la classe è quindi più utile collegare azione prevalentemente locale, disponibilità nella sede di malattia ed evidenza d’impiego, evitando di inventare un “recettore del 5-ASA” che risolva tutta la farmacologia."
    },
    {
      "id": "profarmaci",
      "title": "Il legame azoico trasforma il microbiota in un attivatore",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "La sulfasalazina unisce il 5-ASA alla sulfapiridina attraverso un legame azoico. La struttura limita l’assorbimento prossimale rispetto al 5-ASA libero e permette a una quota rilevante di raggiungere il colon. Qui le azoreduttasi batteriche scindono il legame, liberando i due componenti. L’attivazione è dunque anche una questione di sede: il farmaco sfrutta una capacità metabolica dei microrganismi intestinali.\n\nLa sulfapiridina non è soltanto un nome da cancellare dopo la scissione. Viene assorbita e contribuisce al profilo sistemico di tollerabilità. Per comprendere la sulfasalazina bisogna seguire separatamente composto iniziale, 5-ASA e componente veicolante: condividono una somministrazione, ma non hanno lo stesso destino. Nell’olsalazina il legame unisce due unità di 5-ASA; nella balsalazide collega il 5-ASA a un diverso veicolo. Il principio dell’attivazione locale rimane riconoscibile, mentre cambiano i prodotti liberati.\n\nNon tutti gli aminosalicilati vanno chiamati profarmaci nello stesso senso. Una preparazione che contiene già mesalazina attiva e ne controlla il rilascio non richiede la stessa trasformazione chimica di un azo-composto. Questa distinzione collega il capitolo alla teoria dei profarmaci: liberare un principio attivo da un legame covalente e liberarlo da un rivestimento farmaceutico sono eventi diversi."
    },
    {
      "id": "formulazioni",
      "title": "La formulazione decide dove il farmaco diventa disponibile",
      "refs": [
        "CFI",
        "KAT",
        "APP"
      ],
      "text": "Un principio attivo che deve agire nella mucosa intestinale pone un problema diverso da quello di una molecola che deve raggiungere soprattutto il sangue. Se il 5-ASA viene reso disponibile troppo presto e assorbito nel tratto prossimale, una parte della quantità somministrata non raggiunge le sedi distali nella forma desiderata. La formulazione è perciò parte del ragionamento farmacologico, non un dettaglio accessorio della confezione.\n\nRivestimenti sensibili al pH, sistemi a rilascio prolungato e matrici modificano il luogo e il tempo in cui la mesalazina entra in contatto con la mucosa. Non esiste una singola mappa valida per ogni prodotto: composizione, transito intestinale e condizioni locali influenzano il rilascio. Le forme rettali avvicinano invece il farmaco direttamente al tratto distale, con una distribuzione che dipende anche dalla preparazione utilizzata.\n\nOccorre tenere separati identità molecolare, formulazione e via di somministrazione. Due prodotti possono contenere lo stesso principio attivo senza rendere identica l’esposizione lungo l’intestino. Questo non dimostra automaticamente una differenza di efficacia clinica né permette di dichiararli non equivalenti: richiede dati appropriati alla specifica domanda. Il collegamento al capitolo su formulazioni e bioequivalenza serve proprio a evitare che un disegno del rilascio venga trasformato in una regola autonoma di sostituzione del medicinale.\n\nLe mappe del corso rendono visibile questa distinzione: un sistema può iniziare a liberare 5-ASA nel tenue e proseguire verso il colon, mentre gli azo-composti dipendono soprattutto dalla scissione colica. Supposte e clisteri hanno a loro volta un diverso campo di distribuzione distale. Sono schemi di localizzazione, non misure della concentrazione raggiunta: non permettono di calcolare quanto principio attivo attraversi ciascun segmento né di confrontare quantitativamente i prodotti."
    },
    {
      "id": "assorbimento",
      "title": "Azione locale non significa assorbimento nullo",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "MES-UK"
      ],
      "text": "Una parte del 5-ASA può attraversare la mucosa ed essere metabolizzata. La frase assoluta “non viene assorbito”, presente in alcuni materiali, contrasta sia con la farmacocinetica descritta nel libro sia con la documentazione del prodotto consultato. Il punto da conservare è la prevalenza dell’azione locale, non l’assenza di ogni esposizione sistemica.\n\nLa N-acetilazione nella mucosa intestinale e nel fegato porta alla formazione di N-acetil-5-ASA, un metabolita privo della stessa attività antinfiammatoria. L’eliminazione comprende una componente renale, soprattutto del metabolita, e una componente fecale. La quota assorbita dipende dalla preparazione e dalla sede di rilascio: percentuali ottenute in uno specifico studio non diventano costanti universali della molecola.\n\nQuesto permette di distinguere due domande: quanto farmaco attivo raggiunge la mucosa interessata, e a quali sostanze viene esposto il resto dell’organismo? Una concentrazione plasmatica più alta non è necessariamente un indicatore di migliore azione intestinale. Al contrario, l’esposizione sistemica può essere rilevante per la sicurezza. Lo stesso ragionamento vale per la sulfasalazina: la trasformazione nel colon non elimina l’assorbimento dei prodotti liberati e non rende superflua la valutazione della loro eliminazione."
    },
    {
      "id": "evidenze",
      "title": "Colite ulcerosa e Crohn non condividono automaticamente le indicazioni",
      "refs": [
        "KAT",
        "RAN",
        "BSG",
        "ECCO-UC",
        "SAS-UK",
        "ACG-CD"
      ],
      "text": "Il fatto che due malattie utilizzino vie infiammatorie parzialmente sovrapposte non basta a trasferire un risultato terapeutico dall’una all’altra. BSG 2025 raccomanda i 5-ASA nell’induzione e nel mantenimento della colite ulcerosa lieve o moderata; non ne suggerisce l’impiego per induzione e mantenimento nel Crohn. Le formulazioni più ampie presenti nei libri storici vanno quindi lette nel loro contesto temporale.\n\nECCO 2026 distingue inoltre l’estensione della colite: raccomanda il 5-ASA rettale per l’induzione nella proctosigmoidite attiva e suggerisce, in quadri con questa estensione o più estesi, l’associazione orale e rettale rispetto alla sola via orale. La forza e la certezza di queste raccomandazioni differiscono. Non ne deriva che una via sia sempre superiore all’altra: cambia la domanda clinica e cambia il tessuto da esporre.\n\nUna scheda di prodotto e una linea guida svolgono funzioni diverse. Lo SmPC britannico di Salazopyrin conserva l’indicazione nel Crohn attivo, mentre la raccomandazione BSG sulla classe è sfavorevole. Registrare la differenza è più corretto che cancellare una delle fonti. Un’indicazione autorizzata non equivale a una preferenza terapeutica attuale; una linea guida non riscrive automaticamente l’autorizzazione. Le condizioni italiane del singolo medicinale richiedono il relativo RCP.\n\nIl confronto non è completamente uniforme fra società: la sintesi ufficiale ACG 2025 contempla sulfasalazina in alcuni casi di Crohn colico lieve. È un’eccezione circoscritta, distinta dalla raccomandazione BSG sulla classe; non estende alla mesalazina un beneficio generale nel Crohn."
    },
    {
      "id": "tollerabilita",
      "title": "Esposizione, acetilazione e reazioni avverse",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP",
        "SAS-UK",
        "MES-UK"
      ],
      "text": "Dopo la scissione della sulfasalazina, la sulfapiridina assorbita viene metabolizzata anche attraverso acetilazione. Negli acetilatori lenti l’esposizione può essere maggiore e alcuni effetti indesiderati più probabili. Il dato collega metabolismo e tollerabilità, ma non consente di prevedere ogni reazione nel singolo individuo. Inoltre, il metabolismo della sulfapiridina non va confuso con la N-acetilazione della mesalazina: un nome simile del processo non implica una dipendenza identica dal fenotipo.\n\nNausea, disturbi gastrointestinali e cefalea possono accompagnare l’esposizione; le reazioni di ipersensibilità seguono un problema diverso. Un grafico didattico che accosta dose, beneficio e tossicità non dimostra che tutte le reazioni siano proporzionali alla dose o che esista una soglia universalmente sicura. Non è corretto ricavare da quel disegno una strategia di gestione delle reazioni avverse.\n\nLa documentazione corrente segnala per la mesalazina danno renale, compresa nefrite interstiziale, e richiede controlli prima e durante il trattamento. Per la sulfasalazina richiama anche sorveglianza ematologica ed epatica e gravi reazioni di ipersensibilità. Un peggioramento della diarrea non identifica da solo una riacutizzazione: anche un’intolleranza può modificare il quadro. La valutazione richiede il contesto clinico; la migliore tollerabilità media di alcune formulazioni non significa assenza di rischi.\n\nSeparare il 5-ASA dalla sulfapiridina elimina quella specifica componente dell’esposizione, ma non tutte le reazioni della classe. Katzung descrive per l’olsalazina anche diarrea secretoria: un composto progettato per migliorare la tollerabilità può introdurre un limite diverso. La progettazione di un profarmaco modifica quindi il bilancio degli effetti; non produce una categoria di medicinali privi di tossicità."
    },
    {
      "id": "recettore-glucocorticoidi",
      "title": "Il recettore dei glucocorticoidi modifica il programma infiammatorio",
      "refs": [
        "KAT",
        "GR-NCBI"
      ],
      "text": "I glucocorticoidi permettono di collegare un bersaglio molecolare riconoscibile a una risposta distribuita su molte cellule. Il loro recettore, indicato con GR e codificato dal gene NR3C1, appartiene ai recettori intracellulari che regolano la trascrizione. Il legame del farmaco può modificare l’espressione dei geni attraverso elementi regolatori del DNA e attraverso l’interazione con altri fattori di trascrizione. Non è quindi il semplice blocco di un canale o l’intercettazione di una sola citochina.\n\nNel tessuto infiammato questa regolazione si traduce in cambiamenti nella produzione dei mediatori e nei segnali che sostengono il reclutamento e l’attivazione cellulare. Katzung collega l’azione intestinale a citochine, chemochine e molecole di adesione. La riduzione dell’amplificazione infiammatoria emerge da più passaggi coordinati: ricordare soltanto una citochina rende la spiegazione troppo stretta. D’altra parte, una descrizione molecolare ampia non prova che ogni via contribuisca nella stessa misura in ogni malattia.\n\nIl confronto con il 5-ASA chiarisce due livelli diversi di conoscenza. Per i glucocorticoidi è identificato un recettore centrale nella farmacologia della classe; per gli aminosalicilati il meccanismo terapeutico complessivo resta meno univoco. In entrambi i casi bisogna poi verificare distribuzione, risposta del tessuto ed esito clinico. Conoscere il bersaglio non basta a decidere se una formulazione raggiunga la sede corretta o se sia adatta a un trattamento prolungato."
    },
    {
      "id": "sistemico-locale",
      "title": "Sistemico e locale descrivono l’esposizione, non due recettori diversi",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "APP"
      ],
      "text": "Prednisone e prednisolone rappresentano esempi di glucocorticoidi utilizzati per ottenere un’azione sistemica; la budesonide permette di studiare come formulazione e metabolismo possano favorire un’azione intestinale con minore esposizione del resto dell’organismo. Il bersaglio di classe rimane riconoscibile. A cambiare sono la quantità che arriva ai tessuti, il tempo di permanenza e il rapporto fra concentrazione locale ed esposizione sistemica.\n\nLa parola “topico” può trarre in inganno se viene identificata automaticamente con la sola via rettale. Un medicinale assunto per bocca può essere progettato per liberare il principio attivo vicino alla mucosa intestinale da trattare. Viceversa, una preparazione rettale non garantisce assorbimento nullo. Via di ingresso, sede di rilascio, sede d’azione e destino dopo l’assorbimento sono quattro domande collegate, ma distinte.\n\nLe tabelle del corso accostano molecole, forme farmaceutiche e quantità. Per usarle correttamente occorre riconoscerne il carattere didattico e storico: la presenza di una voce non dimostra che quella presentazione sia oggi disponibile o indicata in Italia. Inoltre, confrontare direttamente i milligrammi di molecole diverse ignora affinità, potenza, rilascio e metabolismo. Il collegamento alle identità di prednisone e prednisolone serve a riconoscere i composti; non trasforma la tabella in una prescrizione o in una regola di equivalenza."
    },
    {
      "id": "budesonide-primo-passaggio",
      "title": "Budesonide: assorbimento e biodisponibilità non sono sinonimi",
      "refs": [
        "CFI",
        "KAT",
        "BUD-CR-UK"
      ],
      "text": "Il caso della budesonide corregge un equivoco ricorrente: una bassa biodisponibilità sistemica non significa necessariamente che poco farmaco attraversi la mucosa. Dopo il rilascio dalla preparazione, la molecola può agire nel tessuto intestinale ed essere assorbita. Una parte importante viene poi metabolizzata prima che il principio attivo raggiunga la circolazione sistemica. Il primo passaggio separa quindi la quantità assorbita da quella che rimane disponibile nel sangue come farmaco attivo.\n\nKatzung descrive un’intensa estrazione epatica e un metabolismo che coinvolge CYP3A4; la documentazione del prodotto conferma un’esposizione sistemica limitata, ma non nulla. Questo passaggio non va confuso con una barriera che impedisca a tutte le molecole di entrare nell’organismo. La tabella del corso attribuisce alla budesonide sia assorbimento sia primo passaggio elevati: letta come sequenza, non contiene la contraddizione che sembra emergere se si usa “assorbimento” al posto di “biodisponibilità”.\n\nIl modello ha una conseguenza generale. L’esposizione dipende da più passaggi in serie: modificare il rilascio può cambiare dove arriva il farmaco; modificare il metabolismo può cambiare quanto ne resta dopo l’assorbimento. Per capire un risultato farmacocinetico occorre localizzare il passaggio modificato. La sola etichetta di farmaco ad azione locale non permette di dedurre una percentuale fissa di biodisponibilità valida per ogni preparazione, condizione intestinale e persona.",
      "formula": "Rilascio nella sede prevista → contatto con la mucosa e azione locale → assorbimento → metabolismo di primo passaggio → esposizione sistemica residua.\nSchema qualitativo originale: nessuna percentuale universale; assorbimento ≠ biodisponibilità sistemica."
    },
    {
      "id": "budesonide-formulazioni",
      "title": "Stessa budesonide, differenti territori di rilascio",
      "refs": [
        "KAT",
        "BUD-CR-UK",
        "BUD-MMX-UK"
      ],
      "text": "Il nome della molecola non descrive da solo la destinazione della dose. Una preparazione di budesonide con rilascio controllato verso ileo e colon prossimale e una preparazione progettata per distribuire il principio attivo nel colon rispondono a problemi anatomici differenti. La formulazione non cambia la diagnosi del paziente: cerca di rendere disponibile il farmaco in un territorio che deve essere coerente con la malattia da trattare.\n\nNella documentazione britannica consultata, Entocort CR comprende l’induzione nel Crohn lieve o moderato ileale o del colon ascendente. Cortiment utilizza un rivestimento gastroresistente e matrici che prolungano il rilascio nel colon; comprende l’induzione della colite ulcerosa lieve o moderata quando il 5-ASA non basta. Sono esempi di prodotti specifici, non indicazioni trasferibili a qualunque confezione contenente budesonide. La disponibilità e le condizioni italiane richiedono il relativo RCP.\n\nQuesta distinzione si collega alla geografia del 5-ASA già discussa: in entrambi i casi la sede del rilascio conta, ma non rende uguali meccanismo, metabolismo o prove cliniche. Il confronto utile mantiene separate tre informazioni: quale molecola, quale sistema di rilascio e quale condizione clinica. Una somiglianza nel nome commerciale o nella quantità dichiarata non basta per proporre una sostituzione. Le mappe anatomiche aiutano a formulare la domanda; la risposta richiede i dati della preparazione e dell’indicazione specifica."
    },
    {
      "id": "steroidi-induzione",
      "title": "Controllare la fase attiva non dimostra un ruolo nel mantenimento",
      "refs": [
        "KAT",
        "RAN",
        "ACG-UC",
        "ACG-CD",
        "BUD-CR-UK"
      ],
      "text": "I glucocorticoidi rendono particolarmente importante la distinzione fra induzione e mantenimento. Il controllo della fase attiva risponde alla necessità di ridurre l’infiammazione presente; il mantenimento deve invece prevenire nuove ricadute con un rapporto fra beneficio e rischio sostenibile nel tempo. Un risultato favorevole nella prima fase non autorizza a prolungare indefinitamente lo stesso trattamento, perché cambiano sia l’obiettivo sia l’esposizione cumulativa.\n\nLa sintesi ACG 2025 sulla colite ulcerosa distingue l’impiego nell’induzione dalla raccomandazione contro il mantenimento con corticosteroidi sistemici, budesonide MMX o corticosteroidi topici. Per il Crohn, la sintesi ACG riserva i corticosteroidi all’induzione e colloca la budesonide nelle forme ileocecali lievi o moderate, senza attribuirle un ruolo di mantenimento. Il punto non è che tutti i trattamenti debbano seguire lo stesso ordine, ma che la fase terapeutica sia esplicitata.\n\nAnche questa regola va riferita alla malattia discussa: lo SmPC di Entocort include un uso di mantenimento nella colite microscopica, condizione distinta dalle due MICI qui considerate. L’esempio mostra perché “steroidi intestinali” sia un’etichetta troppo ampia per ricavare indicazioni. Se per conservare il controllo di Crohn o colite ulcerosa sono necessari cicli ripetuti o un’esposizione prolungata, la domanda riguarda la strategia complessiva di controllo della malattia. Le alternative e la loro sequenza richiedono una valutazione dedicata, oltre questo intervallo didattico."
    },
    {
      "id": "steroidi-rischi",
      "title": "Minore esposizione sistemica lascia rischi e interazioni da valutare",
      "refs": [
        "KAT",
        "BUD-CR-UK",
        "BUD-MMX-UK",
        "ESE-HPA"
      ],
      "text": "Un metabolismo presistemico intenso riduce l’esposizione, ma lascia una quota di farmaco attivo capace di produrre effetti al di fuori dell’intestino. Per la budesonide restano possibili effetti sistemici dei glucocorticoidi, compresa la soppressione dell’asse ipotalamo–ipofisi–surrene. Il rischio dipende dall’esposizione e dal contesto: “locale” non significa automaticamente innocuo, così come un rischio di classe non significa che ogni preparazione abbia lo stesso profilo.\n\nIl collegamento a CYP3A4 rende comprensibili alcune interazioni. Farmaci che ne inibiscono l’attività possono aumentare l’esposizione alla budesonide; una ridotta funzione epatica può limitarne l’eliminazione. La formulazione continua a svolgere il proprio ruolo di rilascio, ma cambia il destino della molecola dopo l’assorbimento. Le schede di prodotto richiamano queste condizioni perché possono ridurre il vantaggio atteso dal primo passaggio. Non è possibile ricavare dal solo schema una correzione individuale della dose.\n\nUn secondo problema riguarda la fine del trattamento. La guida congiunta ESE ed Endocrine Society del 2024 distingue durata, dose, potenza, via e suscettibilità individuale nel valutare il rischio di insufficienza surrenalica. Non tutti i cicli richiedono lo stesso percorso di sospensione. Nelle esposizioni prolungate, riduzione del glucocorticoide, controllo della malattia e recupero dell’asse endocrino vanno considerati insieme. Una ricomparsa di sintomi può riflettere attività intestinale, sindrome da sospensione o insufficienza surrenalica: la somiglianza dei disturbi non ne rende identica la causa. Il capitolo spiega i problemi da distinguere, senza proporre un calendario autonomo di riduzione."
    },
    {
      "id": "microbiota-e-limiti",
      "title": "Dal modello biologico alla prova terapeutica",
      "refs": [
        "CFI",
        "APP",
        "AGA-FMT"
      ],
      "text": "Il microbiota compare due volte in questo capitolo, con significati distinti. Come componente dell’ecosistema intestinale partecipa alle interazioni con barriera e immunità. Come fonte di enzimi può scindere il legame azoico di un medicinale. Il secondo fenomeno è un meccanismo di attivazione farmacologica; non dimostra che il farmaco curi la malattia “normalizzando” l’intera comunità microbica.\n\nAnalogamente, associare disbiosi e infiammazione non autorizza a raccomandare genericamente probiotici, integratori o trasferimento di microbiota. AGA 2024 suggerisce contro il trapianto convenzionale di microbiota fecale per trattare colite ulcerosa o Crohn al di fuori degli studi clinici; distingue questo uso dalla prevenzione delle recidive di infezione da C. difficile in pazienti selezionati. Il nome dell’intervento non basta: conta la condizione che si vuole trattare.\n\nLa lettura svolta copre un’introduzione alle MICI, agli aminosalicilati e ai glucocorticoidi. Immunosoppressori, terapie biologiche e piccole molecole richiedono ulteriori intervalli di lettura e una valutazione dedicata di indicazioni, rischi e confronti. I collegamenti presenti permettono di ripassare i principi molecolari e consultare identità già catalogate; non attestano che ogni scheda sia stata riesaminata in questo lotto. Questa sintesi resta un capitolo didattico con revisione editoriale mirata, non una revisione clinica indipendente."
    }
  ],
  "checks": [
    {
      "question": "La diarrea basta a identificare una MICI?",
      "answer": "No. Il sintomo non distingue da solo infiammazione, infezione, intolleranza o altri disturbi; la sindrome dell’intestino irritabile non è una forma di MICI."
    },
    {
      "question": "Perché la sede della malattia conta per il 5-ASA?",
      "answer": "L’azione è prevalentemente locale: formulazione e via determinano quali segmenti vengono esposti, senza sostituire la prova di efficacia."
    },
    {
      "question": "Tutti gli aminosalicilati sono profarmaci?",
      "answer": "No. Gli azo-composti richiedono scissione chimica; la mesalazina è già attiva e può essere contenuta in una formulazione che ne controlla il rilascio."
    },
    {
      "question": "Che cosa libera la scissione della sulfasalazina?",
      "answer": "5-ASA e sulfapiridina, con distribuzione e metabolismo da considerare separatamente."
    },
    {
      "question": "Azione locale significa che il 5-ASA non viene assorbito?",
      "answer": "No. Una quota può essere assorbita e acetilata; l’esposizione sistemica conserva rilevanza per la sicurezza."
    },
    {
      "question": "Una maggiore concentrazione plasmatica dimostra un migliore effetto sulla mucosa?",
      "answer": "Non necessariamente. Il luogo dell’esposizione terapeutica e quello della misura devono essere distinti."
    },
    {
      "question": "Si può trasferire automaticamente al Crohn il beneficio documentato nella colite ulcerosa?",
      "answer": "No. L’evidenza e le raccomandazioni sono specifiche per malattia, obiettivo e popolazione."
    },
    {
      "question": "Una piramide impone a ogni paziente di attraversare tutti i gradini?",
      "answer": "No. È una rappresentazione didattica che non sostituisce la selezione della strategia in base a quadro e prove attuali."
    },
    {
      "question": "Il grafico dose-tossicità esclude reazioni di ipersensibilità a dosi basse?",
      "answer": "No. Una curva qualitativa non dimostra una soglia sicura per tutte le reazioni."
    },
    {
      "question": "Il ruolo della disbiosi prova l’utilità di ogni intervento sul microbiota?",
      "answer": "No. Un collegamento biologico non sostituisce studi clinici riferiti a un intervento e a una condizione definiti."
    },
    {
      "question": "Qual è il bersaglio recettoriale dei glucocorticoidi?",
      "answer": "GR, codificato da NR3C1: un recettore intracellulare che regola trascrizione e interazioni con altri fattori, con conseguenze su più segnali infiammatori."
    },
    {
      "question": "Un farmaco orale può esercitare un’azione prevalentemente locale intestinale?",
      "answer": "Sì. La via orale non equivale a un obiettivo sistemico: sede di rilascio, contatto con la mucosa e destino dopo l’assorbimento vanno distinti."
    },
    {
      "question": "Perché la budesonide può essere assorbita e avere bassa biodisponibilità?",
      "answer": "Il primo passaggio elimina una parte importante del farmaco prima che raggiunga la circolazione sistemica. La quota assorbita e quella disponibile sistemicamente non coincidono."
    },
    {
      "question": "Le formulazioni di budesonide sono intercambiabili in base al solo principio attivo?",
      "answer": "No: territorio di rilascio e indicazione differiscono. Servono dati del prodotto e della condizione clinica; il nome della molecola non basta."
    },
    {
      "question": "L’efficacia nell’induzione giustifica il mantenimento steroideo di Crohn o colite ulcerosa?",
      "answer": "No. Le sintesi ACG 2025 distinguono queste fasi e non attribuiscono agli steroidi un ruolo di mantenimento nelle due malattie. La colite microscopica è una condizione distinta."
    },
    {
      "question": "Un primo passaggio intenso esclude interazioni o soppressione surrenalica?",
      "answer": "No. Resta esposizione sistemica; inibizione di CYP3A4, funzione epatica ed esposizione prolungata possono modificarne il rischio. La sospensione richiede un ragionamento contestuale, non una regola universale."
    }
  ],
  "relatedExistingChapterIds": [
    "pro-farmaci-metaboliti-attivi",
    "formulazioni-sali-bioequivalenza",
    "anticorpi-biologici",
    "farmacogenomica",
    "first-pass-avanzato"
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL704",
      "label": "MESALAMINE"
    },
    {
      "id": "CHEMBL421",
      "label": "SULFASALAZINE"
    },
    {
      "id": "CHEMBL425",
      "label": "OLSALAZINE"
    },
    {
      "id": "CHEMBL1201346",
      "label": "BALSALAZIDE"
    },
    {
      "id": "CHEMBL1370",
      "label": "BUDESONIDE"
    },
    {
      "id": "CHEMBL1201581",
      "label": "INFLIXIMAB"
    },
    {
      "id": "CHEMBL635",
      "label": "PREDNISONE"
    },
    {
      "id": "CHEMBL131",
      "label": "PREDNISOLONE"
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 544–555, etichette 542–553. Nuove 551–555; 544–550 riutilizzate. Testo disponibile e rendering controllati; 552–553 lette visivamente perché quasi prive di testo estraibile. Figure ripetute e tabelle storiche non sono nuove prove indipendenti; edizione delle tabelle 554–555 non identificata."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012, capitolo 62, PDF 1278–1282, editoriali 1258–1262. Nuova 1282, riutilizzate 1278–1281. Testo e rendering controllati; parte sulle purine letta ma non integrata. Non intero capitolo; 1283 non letta."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015. PDF 592–593 riutilizzate. Letta anche 594, esclusa dalla sintesi perché su altri argomenti e bibliografia. Paginazione editoriale non identificata. Testo e rendering controllati; articoli citati non letti negli originali."
    },
    {
      "id": "APP",
      "title": "Appunti del corso di Farmacologia I · 2025–26",
      "detail": "Lezione 16 del 20/11/2025, PDF 283–285, etichette 278–280, pagine di lezione 1–3. Nuova 285 letta e controllata ma non integrata: terapie successive da riconciliare. Riutilizzate 283–284; figure ripetute e ritagliate, nessuna riproduzione."
    },
    {
      "id": "MES-UK",
      "title": "Salofalk 500 mg · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/5785/smpc",
      "detail": "Aggiornamento 23/02/2026; lettura mirata 4.1, 4.3–4.4, 4.8, 5.1–5.2 il 30/10/2026. Non RCP italiano."
    },
    {
      "id": "SAS-UK",
      "title": "Salazopyrin · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/3838/smpc",
      "detail": "Aggiornamento 01/09/2025; lettura mirata 4.1, 4.3–4.4, 4.8, 5.1–5.2 il 30/10/2026. Non RCP italiano."
    },
    {
      "id": "BSG",
      "title": "BSG 2025 · Linee guida sulle MICI nell’adulto",
      "url": "https://gut.bmj.com/content/74/Suppl_2/s1",
      "detail": "DOI 10.1136/gutjnl-2024-334395. Estratti indicizzati ufficiali su 5-ASA, obiettivi e strategia nel Crohn letti il 30/10/2026; pagina diretta 403. Non documento completo. Ricontrollati gli estratti ufficiali su corticosteroidi e budesonide il 30/10/2026; nessuna lettura integrale."
    },
    {
      "id": "ECCO-UC",
      "title": "ECCO 2026 · Terapia medica della colite ulcerosa",
      "url": "https://academic.oup.com/ecco-jcc/article/20/7/jjag066/8726617",
      "detail": "DOI 10.1093/ecco-jcc/jjag066. Raccomandazioni 3–4 negli estratti indicizzati ufficiali, lette il 30/10/2026; accesso diretto non disponibile. Non linea guida completa."
    },
    {
      "id": "AGA-FMT",
      "title": "AGA 2024 · Terapie basate sul microbiota fecale",
      "url": "https://gastro.org/clinical-guidance/fecal-microbiota-based-therapies-for-select-gastrointestinal-diseases/",
      "detail": "Raccomandazioni per colite ulcerosa, Crohn e infezione ricorrente negli estratti ufficiali, lette il 30/10/2026; accesso diretto 403. Non revisione completa."
    },
    {
      "id": "NIH-CD",
      "title": "NIDDK · Malattia di Crohn",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/crohns-disease/definition-facts",
      "detail": "Definizione e distribuzione anatomica negli estratti ufficiali consultati il 30/10/2026."
    },
    {
      "id": "NIH-UC",
      "title": "NIDDK · Colite ulcerosa",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/ulcerative-colitis",
      "detail": "Definizione negli estratti ufficiali consultati il 30/10/2026."
    },
    {
      "id": "NIH-IBS",
      "title": "NIDDK · Sindrome dell’intestino irritabile",
      "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/irritable-bowel-syndrome/definition-facts",
      "detail": "Distinzione dal danno infiammatorio visibile negli estratti ufficiali consultati il 30/10/2026."
    },
    {
      "id": "BUD-CR-UK",
      "title": "Entocort CR · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/872/smpc",
      "detail": "Aggiornamento 05/02/2024. Lettura selettiva 4.1–4.2, 4.4, passaggi 5.1 e 5.2 il 30/10/2026. Non RCP italiano."
    },
    {
      "id": "BUD-MMX-UK",
      "title": "Cortiment · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/1895/smpc",
      "detail": "Aggiornamento 30/12/2020. Lettura selettiva 4.1–4.2, 4.4–4.5, meccanismo e formulazione in 5.1, 5.2 il 30/10/2026. Non RCP italiano."
    },
    {
      "id": "ACG-UC",
      "title": "ACG 2025 · Sintesi ufficiale sulla colite ulcerosa",
      "url": "https://gi.org/journals-publications/ebgi/alkazzi_aug2025/",
      "detail": "Consultate selettivamente le raccomandazioni 20–22 e 28–38 nella sintesi il 30/10/2026; integrate qui 20–22 sui corticosteroidi. Non intera linea guida."
    },
    {
      "id": "ACG-CD",
      "title": "ACG 2025 · Sintesi ufficiale sulla malattia di Crohn",
      "url": "https://gi.org/journals-publications/ebgi/zhai_dalal_sep2025/",
      "detail": "Sintesi del 17/09/2025; letti i passaggi sulle forme lievi/moderate e moderate/severe il 30/10/2026. Non intera linea guida."
    },
    {
      "id": "ESE-HPA",
      "title": "ESE / Endocrine Society 2024 · Insufficienza surrenalica da glucocorticoidi",
      "url": "https://www.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency",
      "detail": "Pagina ufficiale 13/05/2024: Essential Points e raccomandazioni R2.1–R2.7 consultati il 30/10/2026. Non intero documento né schema individuale di sospensione."
    },
    {
      "id": "GR-NCBI",
      "title": "NCBI Gene · NR3C1",
      "url": "https://www.ncbi.nlm.nih.gov/gene/2908",
      "detail": "Solo riepilogo ufficiale indicizzato del gene letto il 30/10/2026; pagina diretta bloccata da verifica automatica. Non lettura completa della scheda."
    }
  ],
  "coverage": "Ampliamento del capitolo: otto nuove pagine lette e controllate, sei pertinenti integrate e due escluse; quindici pagine precedenti riutilizzate. Copertura cumulativa: 23 pagine lette, 21 pertinenti alla sintesi, di quattro fonti. Fonti ufficiali consultate selettivamente; nessuna lettura integrale di libri o corsi, nessuna revisione clinica indipendente. Figure originali non riprodotte.",
  "wordCount": 3539
});
