// Sintesi didattica originale; copertura e limiti nei registri collegati.
export const THEORY_IBD = Object.freeze({
  "id": "malattie-infiammatorie-intestinali",
  "volume": 11,
  "title": "Malattie infiammatorie intestinali: barriera e controllo farmacologico dell’infiammazione",
  "lead": "Aminosalicilati, glucocorticoidi, immunomodulatori e anti-TNF: bersagli, vie di somministrazione, esposizione e monitoraggio.",
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
      "id": "tiopurine-metabolismo",
      "title": "Tiopurine: dal profarmaco ai nucleotidi intracellulari",
      "refs": [
        "CFI",
        "KAT",
        "FII-S",
        "FII-A",
        "CPIC"
      ],
      "text": "Azatioprina e mercaptopurina appartengono agli antimetaboliti purinici. L’azatioprina fornisce mercaptopurina, che attraversa una rete di trasformazioni intracellulari: alcuni prodotti interferiscono con la sintesi delle purine, altri diventano nucleotidi tioguaninici capaci di partecipare ai processi degli acidi nucleici. Dire che il farmaco “si sostituisce a una purina” è un primo orientamento; per capire effetto e tossicità bisogna seguire l’attivazione metabolica, senza attribuire al composto iniziale ogni azione dei suoi derivati.\n\nLe vie non costituiscono una catena unica. La xantina ossidasi contribuisce al catabolismo della mercaptopurina; TPMT interviene nella metilazione, ma non tutti i prodotti metilati sono farmacologicamente inerti. La mappa del corso e il confronto con CPIC aiutano a distinguere una via che riduce il substrato disponibile per i nucleotidi attivi da metaboliti metilati che possono a loro volta avere attività. Un disegno con due frecce, “attivazione” e “inattivazione”, resta quindi una semplificazione.\n\nLa proliferazione dei linfociti richiede sintesi di nuovi componenti cellulari. Alterare queste disponibilità può contenere la risposta immunitaria, coinvolgendo cellule T e B; non rende però il farmaco esclusivo della mucosa intestinale. L’esposizione di altre cellule, soprattutto di quelle in proliferazione, spiega perché l’effetto desiderato e la tossicità ematologica debbano essere studiati insieme. Il collegamento ai profarmaci riguarda una trasformazione chimica reale, diversa dal semplice rilascio di una formulazione."
    },
    {
      "id": "tiopurine-tempo",
      "title": "La latenza separa controllo dell’attività e mantenimento",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "FII-A",
        "AZA-UK",
        "ACG-UC"
      ],
      "text": "L’eliminazione dal plasma del composto iniziale e la durata dei processi intracellulari non coincidono. Anche la comparsa di un beneficio clinico richiede un tempo diverso da quello necessario per rilevare il farmaco nel sangue. Le tiopurine sono un esempio utile: seguire soltanto l’emivita della mercaptopurina non permette di prevedere quando cambierà l’andamento di una malattia infiammatoria.\n\nIl materiale del corso propone una latenza breve in settimane, mentre il Katzung descrive tempi più lunghi. Lo SmPC dell’azatioprina consultato indica che la risposta può richiedere settimane o mesi. La sintesi didattica deve conservare questa variabilità, senza trasformare un numero della diapositiva in una scadenza entro cui giudicare autonomamente successo o fallimento. In particolare, un trattamento lento non diventa una soluzione immediata per una riacutizzazione soltanto perché è definito immunosoppressore.\n\nNella colite ulcerosa moderata o grave, ACG 2025 esclude la monoterapia con tiopurine dall’induzione e ne distingue l’eventuale ruolo nel mantenimento dopo una remissione indotta dai corticosteroidi. L’obiettivo di risparmiare corticosteroidi significa sostenere il controllo della malattia riducendone l’esposizione prolungata; non equivale a una sostituzione automatica durante una crisi. Inoltre, indicazione autorizzata, raccomandazione di una società scientifica e scelta del singolo paziente sono livelli differenti. L’impiego degli immunomodulatori accanto alle terapie avanzate richiede un confronto specifico e non è deducibile dalla sola latenza."
    },
    {
      "id": "tiopurine-controlli",
      "title": "TPMT, NUDT15 e interazioni: il metabolismo cambia il rischio",
      "refs": [
        "KAT",
        "CFI",
        "CPIC",
        "AZA-UK"
      ],
      "text": "Una stessa quantità somministrata non garantisce la stessa esposizione ai metaboliti attivi. Varianti che riducono la funzione di TPMT o di NUDT15 possono aumentare la suscettibilità alla mielotossicità delle tiopurine. I due sistemi hanno compiti diversi: TPMT interviene nella metilazione; NUDT15 limita la disponibilità di nucleotidi tioguaninici trifosfato per l’incorporazione negli acidi nucleici. La loro ridotta attività non va quindi descritta come un generico “fegato lento”.\n\nL’aggiornamento CPIC denominato 2025, pubblicato nel 2026, considera anche le combinazioni dei due geni. Il suo scopo è aiutare a interpretare un risultato genetico per l’impiego delle tiopurine; non stabilisce da solo se ordinare il test né sostituisce l’intero percorso clinico. Qui il collegamento alla farmacogenomica serve a comprendere il nesso variante–funzione–esposizione–rischio, senza fornire una tabella di dosi individuali.\n\nEsiste anche una modifica acquisita del metabolismo: l’allopurinolo inibisce la xantina ossidasi e può aumentare la tossicità dell’associazione con azatioprina o mercaptopurina. Eventuali associazioni intenzionali appartengono a protocolli specialistici con adattamento e controllo, non alla normale aggiunta di un farmaco indipendente. Né una previsione genetica favorevole né l’assenza di questa interazione eliminano il bisogno di controllare emocromo e funzione epatica. Non tutte le reazioni, per esempio l’ipersensibilità, sono spiegate dallo stesso meccanismo metabolico."
    },
    {
      "id": "calcineurina-il2",
      "title": "Ciclosporina: bloccare un segnale prima della produzione di IL-2",
      "refs": [
        "CFI",
        "APP",
        "FII-S",
        "FII-A"
      ],
      "text": "L’attivazione del recettore delle cellule T avvia segnali intracellulari nei quali partecipa il calcio. La calcineurina è una fosfatasi dipendente da calcio e calmodulina: rimuove gruppi fosfato da componenti della famiglia NFAT, favorendone il passaggio al nucleo. NFAT contribuisce alla trascrizione di geni della risposta immunitaria, fra cui quello dell’interleuchina-2. La sequenza collega un riconoscimento alla superficie cellulare con un cambiamento nella produzione di mediatori.\n\nLa ciclosporina si lega alla ciclofillina, una proteina intracellulare della famiglia delle immunofilline. È il complesso farmaco–proteina a inibire la calcineurina. NFAT resta meno disponibile per il programma trascrizionale e si riduce la produzione di IL-2. Il farmaco agisce quindi prima della secrezione del mediatore: non è un anticorpo che neutralizza IL-2 già presente e non è un antagonista diretto del suo recettore. Il termine “proteina plasmatica” presente in una diapositiva non descrive la sede di questo passaggio, che è intracellulare.\n\nTacrolimus offre un confronto di meccanismo: si lega a FKBP, ma il complesso converge anch’esso sulla calcineurina. Il complesso sirolimus–FKBP interviene invece su mTOR, a valle di segnali di crescita. Condividere una proteina legante non impone dunque lo stesso bersaglio finale. Questa distinzione chiarisce la mappa; non trasferisce fra i tre farmaci indicazioni o equivalenze terapeutiche.",
      "formula": "TCR → segnale Ca²⁺/calmodulina → calcineurina → NFAT defosforilato → nucleo → produzione di IL-2.\nCiclosporina + ciclofillina ⊣ calcineurina.\nSchema originale e qualitativo: rappresenta un asse selezionato, non tutti i segnali della cellula T."
    },
    {
      "id": "ciclosporina-contesto",
      "title": "Un bersaglio selettivo non elimina la tossicità sistemica",
      "refs": [
        "CFI",
        "APP",
        "FII-S",
        "FII-A",
        "CSA-UK",
        "ACG-UC"
      ],
      "text": "La selettività per un passaggio della risposta linfocitaria non coincide con una distribuzione esclusiva nelle cellule che si desidera controllare. La ciclosporina conserva un profilo di esposizione sistemica e una tossicità renale caratteristica. Il confronto fra meccanismo e rischio impedisce di ordinare gli immunosoppressori con una sola scala, dalla molecola “aspecifica e pericolosa” a quella “selettiva e sicura”.\n\nLo SmPC consultato richiede attenzione a funzione renale, pressione arteriosa e interazioni. Il monitoraggio della concentrazione, interpretato secondo il contesto, non sostituisce la valutazione clinica e gli altri esami; non esiste qui un valore bersaglio universale da applicare a ogni indicazione. Il materiale del corso richiama CYP3A4: una variazione dell’esposizione dovuta ad altri medicinali può spostare il bilancio fra effetto e tossicità. Anche infezioni e complicanze dell’immunosoppressione restano rilevanti; la selettività molecolare non ne dimostra l’assenza.\n\nNelle MICI il contesto è particolarmente importante. ACG 2025 colloca la ciclosporina fra le opzioni di salvataggio della colite ulcerosa acuta grave che non risponde adeguatamente ai corticosteroidi endovenosi, in ambiente specialistico. Un impiego di salvataggio richiede poi una strategia per mantenere la remissione: non equivale a scegliere la ciclosporina come mantenimento indefinito. Questa collocazione non va estesa a qualunque Crohn o colite soltanto perché un elenco storico riunisce tutti i farmaci sotto la voce MICI."
    },
    {
      "id": "metotrexato-meccanismo",
      "title": "Metotrexato: l’antifolato e la risposta antinfiammatoria",
      "refs": [
        "CFI",
        "KAT",
        "APP",
        "FII-S",
        "FII-A",
        "MTX-UK"
      ],
      "text": "Il metotrexato è un antimetabolita legato alla via dei folati. L’inibizione della diidrofolato reduttasi interferisce con la disponibilità di folati ridotti necessari a processi biosintetici, fra cui quelli che sostengono la produzione di nucleotidi. Questo rende comprensibile l’attività antiproliferativa, ma descrivere ogni effetto antinfiammatorio come semplice blocco della sintesi del DNA lascia fuori parte del problema.\n\nIl Katzung distingue il contesto delle alte esposizioni antineoplastiche da quello delle basse dosi nelle malattie infiammatorie. Nella cellula si formano derivati poliglutammati e si modificano più passaggi metabolici; fra i meccanismi proposti rientra l’aumento della disponibilità extracellulare di adenosina, un segnale che può modulare la risposta infiammatoria. La figura del corso mostra infatti un ramo relativo all’adenosina oltre alla via dei folati. Una didascalia centrata su un solo enzima non esaurisce lo schema.\n\nIl peso relativo dei diversi meccanismi nell’efficacia clinica resta incompletamente definito, come riconosce lo SmPC. Non occorre scegliere una spiegazione unica per rendere ordinato il capitolo: occorre distinguere ciò che il farmaco fa sul piano biochimico da quanto ciascun passaggio contribuisce al risultato nell’essere umano. Anche “bassa dose” è un’espressione riferita al contesto; non indica che le cellule ematopoietiche o le mucose siano protette da ogni effetto avverso."
    },
    {
      "id": "metotrexato-contesto",
      "title": "Malattia, via e raccomandazione cambiano il confronto",
      "refs": [
        "KAT",
        "RAN",
        "ACG-UC",
        "AGA-CD",
        "BSG",
        "MTX-UK"
      ],
      "text": "Il nome metotrexato non identifica da solo una strategia per tutte le MICI. La via di somministrazione, la popolazione studiata, il trattamento precedente e l’obiettivo sono parte della domanda. Trasferire un risultato ottenuto per via parenterale alla via orale, o dal Crohn alla colite ulcerosa, richiede prove ulteriori: la stessa molecola non rende identici né l’esposizione né il contesto clinico.\n\nLe fonti attuali consultate mostrano anche differenze reali. AGA 2025 suggerisce il metotrexato sottocutaneo o intramuscolare in monoterapia rispetto a nessun trattamento in adulti ambulatoriali con Crohn moderato o grave. BSG 2025 non ne suggerisce la monoterapia per induzione e mantenimento nello stesso ampio ambito di malattia. Questa divergenza va conservata, non appianata scegliendo il documento che meglio conferma un elenco del corso. Le raccomandazioni dipendono da valutazione delle prove, alternative e contesto; il capitolo non risolve il disaccordo con un algoritmo individuale.\n\nPer la colite ulcerosa, ACG 2025 distingue invece il mancato ruolo del metotrexato in monoterapia per indurre remissione e nel mantenimento. Sul piano della sicurezza restano possibili disturbi gastrointestinali, mielosoppressione e danno epatico o polmonare anche nell’uso antinfiammatorio: l’idea che le basse dosi escludano nausea o tossicità midollare è fuorviante. Funzione renale, interazioni e monitoraggio contribuiscono alla valutazione dell’esposizione e del rischio, senza rendere una sintesi didattica una prescrizione."
    },
    {
      "id": "metotrexato-settimana",
      "title": "La frequenza di assunzione è parte essenziale della sicurezza",
      "refs": [
        "CFI",
        "EMA-MTX",
        "MTX-UK"
      ],
      "text": "Un errore di intervallo può trasformare radicalmente l’esposizione anche quando il nome del medicinale e la quantità della singola somministrazione sono corretti. Il metotrexato impiegato nelle malattie infiammatorie segue una somministrazione settimanale; confondere “una volta alla settimana” con “una volta al giorno” può produrre un sovradosaggio grave. Non è un dettaglio amministrativo della ricetta: è parte della farmacologia del trattamento.\n\nLa comunicazione EMA del 2019, richiamata nelle diapositive, nasce da errori con conseguenze anche fatali. Le misure comprendono indicazioni visibili, materiali educativi e una verifica della comprensione del calendario. Il punto didattico è rendere espliciti frequenza e giorno concordato, evitando istruzioni ambigue nei passaggi fra prescrizione, dispensazione e uso. La frequenza non va ricostruita per analogia con altri farmaci assunti quotidianamente.\n\nI protocolli oncologici possono avere calendari diversi: questa variabilità non autorizza a importarne la frequenza nell’uso antinfiammatorio, né consente di descrivere tutti i trattamenti oncologici come quotidiani. Un calendario coerente con l’indicazione riduce una specifica fonte di errore ma non annulla gli altri rischi del metotrexato. Per lo studio bisogna perciò tenere insieme molecola, via, intervallo e contesto, anziché memorizzare il solo nome della classe."
    },
    {
      "id": "imids-bersagli",
      "title": "Malattie immunomediate: collegare organi e meccanismi",
      "refs": [
        "CFI",
        "APP"
      ],
      "text": "L’espressione malattie infiammatorie immunomediate, spesso abbreviata in IMID, riunisce condizioni nelle quali una risposta immunitaria disregolata contribuisce al danno. Il raggruppamento permette di riconoscere connessioni fra intestino, cute e articolazioni: Crohn, colite ulcerosa, psoriasi e alcune artriti possono condividere mediatori pur conservando caratteristiche proprie. Un bersaglio comune può quindi suggerire una domanda di ricerca attraverso più malattie, senza cancellare la diagnosi riferita all’organo.\n\nLa mappa anatomica e quella molecolare rispondono a domande complementari. La prima descrive dove si trova il processo e quali conseguenze produce; la seconda aiuta a spiegare come viene sostenuto. Uno stesso organo può ospitare processi diversi, mentre un mediatore può partecipare a processi in organi differenti. Non è necessario sostituire una classificazione con l’altra: collegarle rende più preciso il ragionamento farmacologico.\n\nNegli schemi del corso, TNF, IL-6 e gli assi IL-12/23 e IL-17 compaiono in reti parzialmente sovrapposte. Questa rappresentazione non assegna a ciascuna malattia una sola citochina responsabile. La presenza di un mediatore in due reti non prova che bloccarlo produca lo stesso beneficio in entrambe. Il passaggio dal diagramma al farmaco richiede una seconda verifica: quale molecola, in quale popolazione e con quali esiti è stata studiata?"
    },
    {
      "id": "tnf-segnale",
      "title": "TNF: intercettare il messaggero prima del recettore",
      "refs": [
        "CFI",
        "KAT",
        "FII-S",
        "EMA-HUM"
      ],
      "text": "Il TNF-α può essere presente come proteina associata alla membrana oppure in forma solubile. Cellule immunitarie, fra cui i macrofagi, contribuiscono alla sua produzione; il circuito non appartiene però a una sola popolazione cellulare. Il segnale raggiunge cellule che esprimono recettori per il TNF, principalmente TNFR1, detto anche p55, e TNFR2, detto anche p75. Forma del ligando, recettore e contesto cellulare influenzano le conseguenze del riconoscimento.\n\nL’attivazione dei recettori può sostenere programmi trascrizionali, fra cui quelli che coinvolgono NF-κB, favorendo produzione di altri mediatori e molecole di adesione. Si comprende così perché neutralizzare TNF possa attenuare più componenti dell’infiammazione: il bersaglio immediato è uno, ma gli effetti a valle attraversano una rete. Non significa spegnere ogni via infiammatoria o eliminare necessariamente la causa iniziale della malattia.\n\nGli anticorpi anti-TNF riconoscono il ligando, non occupano semplicemente il sito del recettore come farebbe un antagonista recettoriale classico. Anche la forma transmembrana può essere riconosciuta. Legame, neutralizzazione del segnale e possibili conseguenze sulla cellula che espone il TNF sono livelli distinti, da non condensare nell’espressione “blocco dell’immunità”. Il confronto con la ciclosporina chiarisce la differenza: quella modifica un segnale intracellulare; questi farmaci intercettano una proteina accessibile all’esterno della cellula.",
      "formula": "TNF solubile o di membrana → TNFR1 / TNFR2 → segnali intracellulari → mediatori e adesione cellulare.\nAnti-TNF → riconoscimento del TNF → minore disponibilità del segnale per i recettori.\nSchema qualitativo originale: non rappresenta tutte le vie né predice la risposta del singolo paziente."
    },
    {
      "id": "anti-tnf-formati",
      "title": "Stesso bersaglio, architetture biologiche differenti",
      "refs": [
        "CFI",
        "KAT",
        "FII-A",
        "FDA-CIM",
        "EMA-ENB"
      ],
      "text": "Infliximab è un anticorpo monoclonale chimerico: combina regioni variabili di origine murina con regioni costanti umane. Adalimumab e golimumab sono anticorpi completamente umani. Queste denominazioni descrivono l’architettura della molecola; adalimumab non è semplicemente infliximab al quale sia stata sostituita una porzione. Sono prodotti distinti, con caratteristiche di riconoscimento, sviluppo e valutazione proprie.\n\nCertolizumab pegol offre un confronto diverso: contiene un frammento Fab’ umanizzato coniugato a polietilenglicole, o PEG, ed è privo della regione Fc. Un frammento capace di riconoscere l’antigene non deve avere necessariamente la forma completa a Y per neutralizzare una citochina. La coniugazione a PEG modifica il comportamento della molecola nell’organismo, contribuendo a rallentarne l’eliminazione; non serve a trasformarla in un anticorpo completo.\n\nEtanercept è invece una proteina di fusione fra la porzione extracellulare del recettore TNFR2 e una regione Fc di IgG1. Il riconoscimento del TNF deriva dunque da una parte del suo recettore fisiologico, non dalle regioni variabili di un anticorpo anti-TNF. Mettere queste strutture accanto è utile per separare funzione e formato: intercettare lo stesso mediatore può essere ottenuto con progetti molecolari differenti. Non dimostra equivalenza terapeutica nelle MICI, né autorizza a ordinare i prodotti dal più grande al più tossico."
    },
    {
      "id": "anti-tnf-fc",
      "title": "Riconoscimento, funzioni effettrici e permanenza",
      "refs": [
        "KAT",
        "FII-A",
        "FDA-CIM"
      ],
      "text": "In un anticorpo completo, la porzione che riconosce l’antigene e la regione Fc svolgono compiti diversi. La prima determina il contatto con il bersaglio; la seconda può interagire con sistemi effettori e con meccanismi che influenzano il destino della proteina. Quando un anticorpo si lega a un antigene esposto su una cellula, alcune conseguenze possono quindi dipendere anche dal formato della molecola e dal contesto del legame.\n\nLa regione Fc può partecipare al riciclo mediato dal recettore neonatale FcRn, che protegge una quota di proteina dalla degradazione intracellulare. Questo ruolo nella permanenza è distinto dalle interazioni con recettori Fc delle cellule effettrici o con il complemento. “Avere Fc” non significa automaticamente distruggere qualunque cellula incontrata; “essere più piccolo” non significa automaticamente essere più sicuro.\n\nIl confronto con certolizumab rende concreta la distinzione: la neutralizzazione del TNF è conservata senza Fc, mentre il prodotto non esercita in vitro le funzioni di fissazione del complemento e citotossicità cellulare anticorpo-dipendente proprie di altri formati. Un risultato in vitro descrive quel sistema sperimentale e non misura da solo l’efficacia clinica o la sicurezza complessiva. È quindi scorretto dedurre che ogni anti-TNF debba provocare citotossicità per funzionare, oppure che l’assenza di Fc elimini i rischi collegati alla neutralizzazione del TNF."
    },
    {
      "id": "anti-tnf-indicazioni",
      "title": "Indicazione autorizzata e raccomandazione vanno lette separatamente",
      "refs": [
        "EMA-REM",
        "EMA-HUM",
        "EMA-SIM",
        "EMA-CIM",
        "EMA-ENB",
        "FDA-CIM",
        "ACG-UC",
        "ACG-CD"
      ],
      "text": "Il nome della classe non è una licenza valida per tutte le malattie. Nelle informazioni europee consultate, infliximab e adalimumab comprendono sia Crohn sia colite ulcerosa fra le indicazioni, entro condizioni e popolazioni definite. Golimumab comprende la colite ulcerosa, non il Crohn. Etanercept, pur intercettando TNF, non ha un’indicazione europea per le MICI: qui è collegato come confronto strutturale, non come alternativa intestinale.\n\nCertolizumab pegol illustra la necessità di distinguere le giurisdizioni. Il documento statunitense include il Crohn moderatamente o gravemente attivo nell’adulto dopo risposta insufficiente alla terapia convenzionale; l’elenco europeo di Cimzia non comprende il Crohn. Una tabella didattica storica o un manuale con riferimenti statunitensi non possono essere trasferiti alla pratica europea senza questa verifica.\n\nL’autorizzazione stabilisce le condizioni d’uso del prodotto; una linea guida valuta anche il suo posto nella strategia terapeutica. La sintesi ACG 2025 sulla colite ulcerosa include infliximab, adalimumab e golimumab nell’induzione delle forme moderate-gravi e nel mantenimento dopo risposta all’induzione. La sintesi sul Crohn considera gli anti-TNF fra le terapie avanzate. Questi passaggi non costituiscono un confronto completo fra tutti i farmaci oggi disponibili. La scelta dipende da malattia, attività, trattamenti precedenti e obiettivo; non da una sequenza universale ricavata dall’anno di introduzione del prodotto."
    },
    {
      "id": "anti-tnf-immunogenicita",
      "title": "Anticorpi antifarmaco: una risposta contro la terapia",
      "refs": [
        "FII-S",
        "FII-A",
        "HUM-UK",
        "IFX-UK",
        "ACG-UC"
      ],
      "text": "Una proteina terapeutica può diventare il bersaglio di una risposta immunitaria. Gli anticorpi antifarmaco possono interferire con il riconoscimento del bersaglio oppure modificarne l’eliminazione, riducendo l’esposizione utile. Non ogni anticorpo rilevato ha lo stesso effetto funzionale e non ogni perdita di risposta è dovuta a immunogenicità. Occorre distinguere la molecola misurata, la sua concentrazione e l’attività della malattia.\n\nLa sequenza completamente umana non esclude il fenomeno: le informazioni di adalimumab documentano anticorpi antifarmaco associati a maggiore clearance e minore efficacia. Le percentuali di immunogenicità ottenute con prodotti e metodi analitici diversi non sono direttamente confrontabili. Non si può quindi trasformare la distinzione chimerico/umano in una graduatoria automatica di sicurezza o attribuire tutti i rischi di classe alla componente murina.\n\nPerdita di risposta dopo un beneficio iniziale e mancata risposta fin dall’inizio pongono domande differenti. Nel primo caso si può interrogare anche l’esposizione: arriva ancora una quantità adeguata di farmaco? Nel secondo è necessario considerare se il meccanismo scelto sia sufficiente per controllare quel processo. ACG 2025 suggerisce, nella colite ulcerosa con perdita di risposta agli anti-TNF, una valutazione delle concentrazioni e, nel contesto appropriato, degli anticorpi antifarmaco. Questo ragionamento non fornisce soglie universali né consente di dedurre autonomamente un cambio di dose o trattamento."
    },
    {
      "id": "anti-tnf-sicurezza",
      "title": "Rischio infettivo e reazioni alla somministrazione sono problemi diversi",
      "refs": [
        "CFI",
        "FII-A",
        "IFX-UK",
        "HUM-UK"
      ],
      "text": "Il TNF partecipa anche alla difesa dell’ospite. Ridurre la sua attività può controllare l’infiammazione patologica ma compromettere alcune risposte contro i microrganismi: il rischio infettivo non dipende soltanto dal fatto che il medicinale sia una proteina estranea. Per infliximab, le informazioni di prodotto richiamano infezioni gravi, valutazione della tubercolosi anche latente e ricerca dell’infezione da virus dell’epatite B prima del trattamento, per il rischio di riattivazione. Sono elementi di una valutazione clinica, non un protocollo completo ricavabile da questo capitolo.\n\nUn secondo problema riguarda la somministrazione. Reazioni durante o dopo l’infusione e reazioni nella sede di iniezione descrivono eventi osservati in rapporto a una via e a un momento. Non provano tutte lo stesso meccanismo immunologico, e una reazione acuta non dimostra da sola la presenza di anticorpi antifarmaco. Via endovenosa e sottocutanea vanno quindi considerate separatamente quando si confrontano prodotti e tollerabilità.\n\nIl terzo livello è il contesto: attività della malattia, comorbilità, terapie associate e storia delle esposizioni contribuiscono al rapporto beneficio-rischio. Dire che un anticorpo è completamente umano o che un frammento è privo di Fc non risolve questi problemi. Le categorie strutturali aiutano a formulare ipotesi; frequenza, gravità e gestione degli eventi richiedono dati del prodotto e valutazione specifica. Le precauzioni qui richiamate sono selettive, non un elenco esaustivo delle controindicazioni."
    },
    {
      "id": "biosimilari-confronto",
      "title": "Biosimilari e vie di somministrazione: due confronti distinti",
      "refs": [
        "APP",
        "EMA-BIO",
        "EMA-RMS"
      ],
      "text": "Un biosimilare viene sviluppato e valutato rispetto a un medicinale biologico di riferimento già autorizzato. La comparabilità riguarda struttura e attività biologica, insieme alle evidenze necessarie su efficacia, sicurezza e immunogenicità. Non è la semplice identità chimica usata per descrivere molti generici di piccole molecole: le proteine sono prodotti complessi e possono presentare una microeterogeneità controllata.\n\nIl termine biosimilare non significa “più umanizzato”, “più piccolo” o “più sicuro”. La conclusione regolatoria riguarda un’elevata similarità e l’assenza di differenze clinicamente rilevanti rispetto al riferimento nell’ambito valutato. Non attribuisce una superiorità intrinseca a ogni prodotto successivo. Un confronto corretto parte dal riferimento preciso e dai dati richiesti per dimostrare comparabilità, non dall’idea che una copia più recente debba correggere tutti i limiti della precedente.\n\nLa formulazione costituisce un’altra dimensione. Remsima, a base di infliximab e biosimilare di Remicade, dispone di presentazioni per infusione endovenosa e per iniezione sottocutanea. La possibilità della seconda via dipende dalla specifica autorizzazione e dal regime previsto; non deriva automaticamente dalla parola biosimilare e non significa che tutte le forme endovenose siano state sostituite. Separare identità del principio attivo, relazione con il riferimento, formulazione e via permette di leggere correttamente un aggiornamento terapeutico senza confondere quattro informazioni diverse."
    },
    {
      "id": "anti-tnf-esposizione",
      "title": "Via di somministrazione: leggere picchi, minimi ed esposizione",
      "refs": [
        "CFI",
        "RMS-SC-UK"
      ],
      "text": "La stessa proteina può raggiungere il circolo con andamenti diversi. L’infusione endovenosa introduce infliximab direttamente nel compartimento vascolare; l’iniezione sottocutanea richiede un processo di assorbimento. Il profilo concentrazione-tempo dipende quindi sia dalla via sia dalla quantità e dalla frequenza delle somministrazioni. Confrontare le due vie senza precisare il regime significa attribuire alla sola formulazione effetti che appartengono anche al calendario terapeutico.\n\nTre letture della curva rispondono a domande differenti. Cmax indica il massimo osservato, Ctrough la concentrazione al termine dell’intervallo, prima della dose successiva, e AUC l’esposizione integrata nel tempo considerato. Un picco più alto non implica necessariamente una maggiore esposizione sull’intero intervallo. Analogamente, una curva meno oscillante non dimostra da sola maggiore efficacia: la forma del grafico descrive il comportamento farmacocinetico, mentre il beneficio deve essere misurato clinicamente.\n\nIl confronto riportato nelle diapositive mostra questo principio per due regimi di infliximab. Le informazioni aggiornate di Remsima sottocutaneo riportano minimi a regime più elevati rispetto allo specifico schema endovenoso confrontato, insieme a una biodisponibilità sottocutanea inferiore all’unità. Non sono risultati contraddittori: biodisponibilità, dose e intervallo contribuiscono insieme all’esposizione. Non se ne ricava una conversione automatica milligrammo per milligrammo, né l’equivalenza di ogni possibile schema. La figura del corso rimane un confronto circoscritto, non una previsione per il singolo paziente.",
      "formula": "Via + formulazione + dose + intervallo → andamento delle concentrazioni.\nCmax: picco · Ctrough: minimo prima della dose · AUC: esposizione nel tempo.\nSchema qualitativo originale, senza valori clinici o conversioni di dose."
    },
    {
      "id": "anti-tnf-tdm",
      "title": "Monitoraggio farmacologico: dare un contesto al campione",
      "refs": [
        "CFI",
        "ACG-UC",
        "RMS-SC-UK"
      ],
      "text": "Un valore di concentrazione acquista significato quando si conoscono il prodotto, la via, il momento dell’ultima somministrazione e quello del prelievo. Un campione raccolto dopo un’infusione non risponde alla stessa domanda di un campione raccolto prima della dose successiva. Anche con oscillazioni più contenute, il tempo trascorso resta un’informazione da registrare: un profilo più regolare non rende automaticamente equivalenti tutti i prelievi.\n\nIl monitoraggio terapeutico dei farmaci, o TDM, collega la misura a una domanda clinica. Nella perdita di risposta può aiutare a interrogare l’esposizione e, quando pertinente, l’immunogenicità. Va distinto dalla misurazione programmata in una persona che mantiene la remissione. La sintesi ACG 2025 sulla colite ulcerosa suggerisce concentrazioni e, se il farmaco è insufficiente, anticorpi antifarmaco nella perdita di risposta agli anti-TNF; segnala invece prove insufficienti a favore del monitoraggio proattivo in tutti i pazienti non selezionati in remissione.\n\nIl ragionamento procede su due assi: attività infiammatoria ed esposizione. Se il farmaco è poco presente, la domanda riguarda anche il suo arrivo e la sua permanenza; se è presente in quantità adeguata ma l’infiammazione persiste, diventa centrale la sufficienza del meccanismo scelto. Un sintomo isolato non stabilisce nessuna delle due condizioni. Questa distinzione spiega l’utilità del dato senza trasformarlo in una decisione automatica: obiettivo, metodo analitico, formulazione e quadro clinico impediscono di applicare una soglia universale a ogni situazione.",
      "formula": "Domanda clinica → prodotto e calendario → momento del prelievo → concentrazione e anticorpi, se pertinenti → interpretazione con l’attività di malattia.\nUna misura isolata non è un algoritmo di modifica della terapia."
    },
    {
      "id": "anti-tnf-riesposizione",
      "title": "Continuità e riesposizione: la storia terapeutica conta",
      "refs": [
        "KAT",
        "IFX-UK"
      ],
      "text": "Induzione e mantenimento non differiscono soltanto per il numero di dosi. Dopo il controllo iniziale, la continuità del trattamento cerca di conservare il beneficio nel tempo. Per una proteina terapeutica conta anche la storia immunologica dell’esposizione: un periodo senza farmaco può modificare il contesto nel quale avviene una nuova somministrazione. La ripresa dopo una lunga interruzione non va interpretata come una semplice prima dose in un organismo mai esposto.\n\nKatzung richiama reazioni precoci e ritardate e il rapporto fra anticorpi antifarmaco, durata della risposta e somministrazione episodica. Le informazioni di infliximab confermano che reazioni durante o poco dopo l’infusione e ipersensibilità ritardata sono fenomeni temporalmente distinti; intervalli prolungati senza il medicinale possono aumentare il rischio della seconda. Febbre, rash e dolori muscolari o articolari dopo una riesposizione appartengono a un quadro che richiede valutazione, non alla prova automatica di una riacutizzazione intestinale.\n\nL’associazione con un immunomodulatore può ridurre la formazione di anticorpi contro infliximab, ma questa osservazione non equivale a raccomandare sempre una combinazione. Il vantaggio sull’immunogenicità deve essere confrontato con i rischi delle terapie associate e con le caratteristiche della malattia. Anche le percentuali storiche di risposta o reazione dipendono da popolazione, schema e metodo di misura: non descrivono indistintamente tutti gli anti-TNF attuali. Il concetto da conservare è la necessità di ricostruire esposizioni, interruzioni e reazioni precedenti prima di interpretare un evento o una perdita di beneficio."
    },
    {
      "id": "microbiota-e-limiti",
      "title": "Dal modello biologico alla prova terapeutica",
      "refs": [
        "CFI",
        "APP",
        "AGA-FMT"
      ],
      "text": "Il microbiota compare due volte in questo capitolo, con significati distinti. Come componente dell’ecosistema intestinale partecipa alle interazioni con barriera e immunità. Come fonte di enzimi può scindere il legame azoico di un medicinale. Il secondo fenomeno è un meccanismo di attivazione farmacologica; non dimostra che il farmaco curi la malattia “normalizzando” l’intera comunità microbica.\n\nAnalogamente, associare disbiosi e infiammazione non autorizza a raccomandare genericamente probiotici, integratori o trasferimento di microbiota. AGA 2024 suggerisce contro il trapianto convenzionale di microbiota fecale per trattare colite ulcerosa o Crohn al di fuori degli studi clinici; distingue questo uso dalla prevenzione delle recidive di infezione da C. difficile in pazienti selezionati. Il nome dell’intervento non basta: conta la condizione che si vuole trattare.\n\nLa lettura svolta copre MICI, aminosalicilati, glucocorticoidi, immunomodulatori e un confronto mirato degli anti-TNF e dei biosimilari. Gli altri assi delle terapie avanzate e le ulteriori piccole molecole richiedono nuovi intervalli e una valutazione dedicata di indicazioni, rischi e confronti. I collegamenti presenti permettono di ripassare i principi molecolari e consultare identità già catalogate; non attestano che ogni scheda sia stata riesaminata in questo lotto. Questa sintesi resta un capitolo didattico con revisione editoriale mirata, non una revisione clinica indipendente."
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
    },
    {
      "question": "Perché azatioprina e mercaptopurina vanno seguite oltre il composto iniziale?",
      "answer": "L’attivazione genera metaboliti intracellulari con effetti e persistenza diversi; catabolismo, metilazione e sintesi dei nucleotidi influenzano il risultato."
    },
    {
      "question": "La latenza delle tiopurine è una scadenza fissa?",
      "answer": "No. La risposta può richiedere settimane o mesi; non va dedotta dalla sola emivita plasmatica né usata per una decisione autonoma."
    },
    {
      "question": "Un risultato TPMT/NUDT15 favorevole elimina il monitoraggio?",
      "answer": "No. La genetica spiega una parte della variabilità; interazioni, tossicità ematologica ed epatica e reazioni non previste dai test richiedono controllo."
    },
    {
      "question": "La ciclosporina neutralizza IL-2 già secreta?",
      "answer": "No. Il complesso con ciclofillina inibisce la calcineurina, limitando l’attivazione di NFAT e la produzione di IL-2."
    },
    {
      "question": "La selettività del bersaglio garantisce sicurezza renale?",
      "answer": "No. La ciclosporina può essere nefrotossica; concentrazione, funzione renale, pressione e interazioni vanno interpretate insieme."
    },
    {
      "question": "La sola inibizione della DHFR spiega tutta l’azione antinfiammatoria del metotrexato?",
      "answer": "No. Sono coinvolti più passaggi, inclusa la modulazione dell’adenosina; il contributo clinico relativo non è completamente definito."
    },
    {
      "question": "Le raccomandazioni sul metotrexato sono identiche fra MICI e linee guida?",
      "answer": "No. Malattia, via e obiettivo contano; AGA e BSG 2025 differiscono sulla monoterapia parenterale nel Crohn. Non si ricava una regola universale."
    },
    {
      "question": "Perché scambiare frequenza settimanale e quotidiana è pericoloso?",
      "answer": "Nell’uso antinfiammatorio del metotrexato può determinare sovradosaggio grave o fatale. I calendari oncologici non vanno trasferiti fra indicazioni."
    },
    {
      "question": "Una citochina condivisa rende due malattie intercambiabili?",
      "answer": "No. La mappa molecolare integra quella anatomica; efficacia e indicazioni devono essere dimostrate nella condizione specifica."
    },
    {
      "question": "Gli anticorpi anti-TNF sono antagonisti del recettore TNFR?",
      "answer": "Riconoscono il TNF, cioè il ligando; riducono la possibilità che il messaggero attivi i suoi recettori."
    },
    {
      "question": "Adalimumab è infliximab semplicemente umanizzato?",
      "answer": "No. Sono anticorpi distinti: adalimumab è completamente umano, infliximab è chimerico. Il formato non determina una graduatoria universale di sicurezza."
    },
    {
      "question": "Certolizumab deve avere Fc per neutralizzare TNF?",
      "answer": "No. È un frammento Fab’ umanizzato con PEG, privo di Fc, ma capace di neutralizzare TNF. Le funzioni effettrici in vitro non coincidono con la prova di efficacia clinica."
    },
    {
      "question": "La voce anti-TNF basta per attribuire un’indicazione nelle MICI?",
      "answer": "No. Etanercept non ha un’indicazione europea nelle MICI; certolizumab ha un’indicazione statunitense nel Crohn che non compare in quella europea. Molecola e giurisdizione contano."
    },
    {
      "question": "Completamente umano significa assenza di anticorpi antifarmaco?",
      "answer": "No. Anche adalimumab può indurli; possono modificare clearance o attività. Non ogni perdita di risposta dipende da immunogenicità."
    },
    {
      "question": "Una reazione da infusione e un’infezione sono lo stesso rischio?",
      "answer": "No. Tempo e via della somministrazione, immunogenicità e riduzione delle difese dell’ospite descrivono fenomeni distinti, da valutare nel contesto."
    },
    {
      "question": "Un biosimilare è necessariamente più sicuro e sottocutaneo?",
      "answer": "No. La biosimilarità riguarda comparabilità con un riferimento. Formulazione e via dipendono dall’autorizzazione specifica; Remsima comprende presentazioni endovenose e sottocutanee."
    },
    {
      "question": "Una concentrazione minima più alta implica una maggiore biodisponibilità?",
      "answer": "No. Il minimo dipende anche da dose, intervallo e assorbimento: può essere più alto con uno specifico regime sottocutaneo pur con biodisponibilità inferiore a quella endovenosa."
    },
    {
      "question": "Perché un profilo meno oscillante non rende irrilevante il momento del prelievo?",
      "answer": "Il risultato resta riferito a prodotto, regime e tempo dalla dose. Il monitoraggio richiede una domanda clinica; la perdita di risposta e la remissione stabile non hanno la stessa indicazione alla misurazione."
    },
    {
      "question": "Perché la ripresa di infliximab dopo una lunga pausa non equivale necessariamente alla prima esposizione?",
      "answer": "L’organismo può avere già sviluppato una risposta immunitaria al prodotto. La storia di esposizione e delle reazioni contribuisce a interpretare il rischio di ipersensibilità, anche ritardata."
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
    },
    {
      "id": "CHEMBL1542",
      "label": "AZATHIOPRINE"
    },
    {
      "id": "CHEMBL1200751",
      "label": "MERCAPTOPURINE"
    },
    {
      "id": "CHEMBL160",
      "label": "CYCLOSPORINE"
    },
    {
      "id": "CHEMBL34259",
      "label": "METHOTREXATE"
    },
    {
      "id": "CHEMBL1201580",
      "label": "ADALIMUMAB"
    },
    {
      "id": "CHEMBL1201833",
      "label": "GOLIMUMAB"
    },
    {
      "id": "CHEMBL1201831",
      "label": "CERTOLIZUMAB PEGOL"
    },
    {
      "id": "CHEMBL1201572",
      "label": "ETANERCEPT"
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Diapositive del corso di Farmacologia I · 2025–26",
      "detail": "PDF 544–570, etichette 542–568. Nuove 566–570 lette nel testo e nei rendering: 567–570 prevalentemente grafiche. Solo 569 alimenta nuove sezioni; 566–568 riprendono confronti strutturali e biosimilari già trattati, 570 è una mappa di altri bersagli rinviata. Tabelle storiche non trasferite come dati attuali; figure non ripubblicate."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012, capitolo 62, PDF 1278–1285, editoriali 1258–1265. Nuova 1285 letta integralmente nel testo e nel rendering; integrati continuità, immunogenicità e reazioni. Percentuali, dosi e raccomandazioni storiche non assunte come attuali. Continuazione 1286 non letta."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015. PDF 592–593 riutilizzate. Letta anche 594, esclusa dalla sintesi perché su altri argomenti e bibliografia. Paginazione editoriale non identificata. Testo e rendering controllati; articoli citati non letti negli originali."
    },
    {
      "id": "APP",
      "title": "Appunti del corso di Farmacologia I · 2025–26",
      "detail": "Appunti e diapositive del corso di Farmacologia I, AA 2025–26: lezione 16 del 20/11/2025, PDF 283–286, etichette 278–281. Pagine 285–286 rilette senza ricontarle; della 286 integrato il solo confronto sui biosimilari. Altri bersagli e piccola figura anti-integrine restano esclusi; figura non verificata in ogni etichetta."
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
      "detail": "DOI 10.1136/gutjnl-2024-334395. Estratti indicizzati ufficiali su 5-ASA, obiettivi e strategia nel Crohn letti il 30/10/2026; pagina diretta 403. Non documento completo. Ricontrollati gli estratti ufficiali su corticosteroidi e budesonide il 30/10/2026; nessuna lettura integrale. Consultati anche estratti indicizzati su tiopurine e metotrexato il 30/10/2026; divergenza con AGA sul Crohn registrata."
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
      "detail": "Sintesi ufficiale: lettura selettiva precedente 20–22 e 28–38; ricontrollati 23, mantenimento e 51–54 nel lotto corrente il 30/10/2026. Non linea guida completa. Ricontrollati nel lotto 561–565 i passaggi anti-TNF 28–29, 42 e 44 e i concetti di posizionamento 28–29. Nel lotto 566–570 letti raccomandazione 44 e concetti chiave 28–29, 31 e 36 su risposta, concentrazioni, vie e monitoraggio proattivo."
    },
    {
      "id": "ACG-CD",
      "title": "ACG 2025 · Sintesi ufficiale sulla malattia di Crohn",
      "url": "https://gi.org/journals-publications/ebgi/zhai_dalal_sep2025/",
      "detail": "Sintesi del 17/09/2025; letti i passaggi sulle forme lievi/moderate e moderate/severe il 30/10/2026. Non intera linea guida. Ricontrollato il passaggio sulle terapie avanzate e sulle presentazioni sottocutanee nel lotto 561–565."
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
    },
    {
      "id": "FII-S",
      "title": "Appunti e diapositive del corso di Farmacologia II · diapositive 2025–26",
      "detail": "Appunti e diapositive del corso di Farmacologia II 2025–26: PDF 17–18, 28–30, 33 e 36 di 59. Nuove 33 e 36 lette e controllate visivamente. Integrati i soli passaggi anti-TNF e proteina di fusione; disegno CTLA4-Fc non interpretato come struttura di etanercept."
    },
    {
      "id": "FII-A",
      "title": "Appunti e diapositive del corso di Farmacologia II · appunti 2025–26",
      "detail": "Appunti e diapositive del corso di Farmacologia II, lezione 1 del 27/10/2025: PDF 7–8 e 11–16 di 26. Nuove 14–16 lette interamente nel testo disponibile e controllate nel rendering; integrati soltanto anti-TNF, immunogenicità, reazioni e proteine di fusione. Figure su altri bersagli esaminate nel contesto, escluse dalla sintesi. Pagine equivalenti 15–17 della raccolta compilata non ricontate."
    },
    {
      "id": "AZA-UK",
      "title": "Azatioprina · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/11143/smpc",
      "detail": "Lettura selettiva 4.1–4.2 e 4.4 su latenza, metabolismo, TPMT/NUDT15, interazione con allopurinolo e monitoraggio, 30/10/2026; non RCP italiano."
    },
    {
      "id": "CSA-UK",
      "title": "Neoral · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/5300/smpc",
      "detail": "Aggiornamento 11/03/2026. Passaggi selettivi 4.4 su rischio renale, pressione, concentrazioni e infezioni; riepilogo 5.1. Consultazione 30/10/2026; non RCP italiano."
    },
    {
      "id": "MTX-UK",
      "title": "Metoject PEN · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/11353/smpc",
      "detail": "Aggiornamento 09/10/2024. Passaggi mirati 4.8, 5.1–5.2 e avvertenze selezionate, 30/10/2026. Non intero documento né RCP italiano."
    },
    {
      "id": "CPIC",
      "title": "CPIC · Tiopurine, TPMT e NUDT15 · aggiornamento 2025",
      "url": "https://files.cpicpgx.org/data/guideline/publication/thiopurines/2026/41618934.pdf",
      "detail": "Pubblicato nel 2026, DOI 10.1002/cpt.70209. Letti abstract, ambito e passaggi biochimici PDF 1–2 il 30/10/2026. Tabelle posologiche, supplementi e figure non sottoposti a revisione completa."
    },
    {
      "id": "EMA-MTX",
      "title": "EMA · Prevenzione degli errori con metotrexato",
      "url": "https://www.ema.europa.eu/en/news/new-measures-avoid-potentially-fatal-dosing-errors-methotrexate-inflammatory-diseases",
      "detail": "Comunicazione 22/08/2019; confronto anche con il comunicato PRAC 12/07/2019 delle diapositive. Estratti ufficiali indicizzati letti il 30/10/2026; accesso diretto 429. Nessuna lettura integrale del fascicolo."
    },
    {
      "id": "AGA-CD",
      "title": "AGA 2025 · Gestione farmacologica del Crohn moderato-grave",
      "url": "https://gastro.org/clinical-guidance/pharmacological-management-of-moderate-to-severe-crohns-disease/",
      "detail": "DOI 10.1053/j.gastro.2025.09.038; raccomandazione 7 sul metotrexato parenterale negli estratti ufficiali letti il 30/10/2026. Accesso diretto 403; non intero documento."
    },
    {
      "id": "EMA-REM",
      "title": "EMA · Remicade",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/remicade",
      "detail": "Indicazioni e rischi nell’overview ufficiale indicizzata; pagina diretta 429. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-HUM",
      "title": "EMA · Humira",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/humira",
      "detail": "Indicazioni nell’overview indicizzata; meccanismo nei passaggi indicizzati delle informazioni di prodotto, sezione 5.1. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-SIM",
      "title": "EMA · Simponi",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/simponi",
      "detail": "Overview, elenco delle indicazioni e meccanismo. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-CIM",
      "title": "EMA · Cimzia",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/cimzia",
      "detail": "Overview, elenco europeo delle indicazioni e funzione del PEG; distinta dalla scheda storica di rifiuto per Crohn. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-ENB",
      "title": "EMA · Enbrel",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/enbrel",
      "detail": "Overview e indicazioni europee negli estratti ufficiali indicizzati. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "FDA-CIM",
      "title": "DailyMed · Cimzia, informazioni statunitensi",
      "url": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b4c2c9dc-a0bb-4d64-a667-a67ebe88392d",
      "detail": "Passaggi 1.1 e 12.1 letti; confronto con descrizione strutturale dei materiali didattici. Indicazione statunitense distinta da quella europea. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "IFX-UK",
      "title": "Remicade · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/3831/smpc",
      "detail": "Estratti ufficiali selettivi 4.1, 4.4–4.5 e immunogenicità: infezioni, tubercolosi, HBV e reazioni. Non RCP italiano. Consultazione selettiva 30/10/2026. Nel lotto 566–570 letti direttamente 4.4 e passaggi 4.8 su reazioni, intervalli senza trattamento e immunogenicità; aggiornamento 30/07/2025."
    },
    {
      "id": "HUM-UK",
      "title": "Humira · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/9678/smpc",
      "detail": "Estratti ufficiali 4.5, immunogenicità in 5.1 e farmacocinetica: anticorpi antifarmaco, clearance e limiti dei confronti fra saggi. Aggiornato 16/02/2026. Non RCP italiano. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-BIO",
      "title": "EMA · Biosimilari",
      "url": "https://www.ema.europa.eu/en/human-regulatory-overview/biosimilar-medicines-overview",
      "detail": "Definizione di biologico e biosimilare, comparabilità di struttura, attività, efficacia, sicurezza e immunogenicità. Non revisione completa delle regole di sostituibilità. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "EMA-RMS",
      "title": "EMA · Remsima",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/remsima",
      "detail": "Overview ufficiale indicizzata: riferimento Remicade, comparabilità e presentazioni endovenose e sottocutanee. Non intero fascicolo regolatorio. Consultazione selettiva 30/10/2026."
    },
    {
      "id": "RMS-SC-UK",
      "title": "Remsima sottocutaneo · SmPC britannico",
      "url": "https://www.medicines.org.uk/emc/product/11101/smpc",
      "detail": "Aggiornamento 27/07/2026. Sezione 5.2, assorbimento, biodisponibilità e confronto dei minimi per i regimi specificati, letta il 30/10/2026. Non RCP italiano né revisione completa del fascicolo."
    }
  ],
  "coverage": "Sei nuove pagine esaminate: testo completo disponibile e controllo dei rendering; quattro sono prevalentemente grafiche. Due pagine contribuiscono ai nuovi passaggi, tre riprendono confronti già trattati e una resta fuori dalla sintesi. Totale cumulativo 57 pagine lette e 52 con passaggi integrati, da sei fonti; le pagine ripetute non costituiscono prove indipendenti. Nessuna nuova lettura di appunti I o materiali II in questo lotto: la riconciliazione precedente resta nel registro. Fonti ufficiali consultate selettivamente. Nessuna lettura integrale di libri o corsi, né revisione clinica indipendente.",
  "wordCount": 7443
});
