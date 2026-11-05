export const THEORY_ANDROGENS = Object.freeze({
  "id": "androgeni-asse-gonadico",
  "volume": 10,
  "title": "Androgeni e GnRH: dal controllo endocrino ai bersagli dei farmaci",
  "lead": "La secrezione testicolare, il metabolismo nei tessuti e il recettore androgenico sono tre livelli distinti. Separarli rende comprensibili terapia sostitutiva, soppressione gonadica, iperplasia prostatica e trattamento endocrino del carcinoma prostatico.",
  "format": "extended",
  "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
  "reviewedAt": "2026-11-05",
  "readingManifest": "./data/androgeni-asse-gonadico-reading.json",
  "sections": [
    {
      "id": "asse",
      "title": "Due funzioni del testicolo, due vie che collaborano",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il testicolo produce ormoni e sostiene la formazione degli spermatozoi. Le due attività si influenzano, ma non sono intercambiabili: una concentrazione adeguata di testosterone nel sangue non dimostra che la spermatogenesi sia normale. Per seguire un intervento farmacologico occorre distinguere il segnale centrale, la cellula che lo riceve e l’esito che si intende modificare.\n\nIl GnRH ipotalamico stimola le cellule gonadotrope dell’ipofisi anteriore, che liberano LH e FSH. Nel testicolo, LH sostiene la steroidogenesi delle cellule di Leydig; FSH agisce sulle cellule di Sertoli, che organizzano il sostegno alle cellule germinali. Il testosterone prodotto localmente contribuisce al mantenimento dell’ambiente necessario alla spermatogenesi. Non è quindi sufficiente immaginare FSH come un comando isolato che fabbrica spermatozoi: servono cooperazione cellulare e integrità del tessuto.\n\nLe cellule di Sertoli producono anche inibina, che contribuisce soprattutto al controllo retroattivo di FSH. Gli steroidi sessuali partecipano invece alla regolazione di ipotalamo e ipofisi. Questi ritorni di informazione fanno dell’asse un circuito: quando cambia un livello periferico, può cambiare anche lo stimolo che lo ha generato. La proteina legante gli androgeni nell’ambiente tubulare, spesso indicata come ABP negli schemi didattici, non va confusa con un ormone ipofisario né considerata l’unico requisito della fertilità.\n\nLa distinzione fra Leydig e Sertoli aiuta a leggere una lesione testicolare, un deficit di stimolazione centrale o un effetto farmacologico. Prima di concludere che il sistema funziona troppo o troppo poco, bisogna precisare quale delle sue funzioni si sta osservando.",
      "formula": "GnRH → ipofisi → LH → Leydig → testosterone; FSH → Sertoli → sostegno alla spermatogenesi. Inibina e steroidi riportano informazioni al circuito. Schema originale qualitativo: le due vie cooperano."
    },
    {
      "id": "conversioni",
      "title": "Testosterone, DHT ed estradiolo: il tessuto modifica il segnale",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il testosterone non arriva a tutti i bersagli con lo stesso destino. Può legare direttamente il recettore androgenico, essere trasformato in diidrotestosterone, o DHT, dalla 5α-reduttasi, oppure essere aromatizzato a estradiolo. Il metabolismo locale è quindi parte della farmacodinamica: una trasformazione non equivale necessariamente all’inattivazione della molecola.\n\nIl DHT mantiene un’attività androgenica e assume particolare rilievo in tessuti come prostata e cute. L’estradiolo agisce attraverso recettori estrogenici e contribuisce, anche nell’uomo, alla fisiologia ossea e alla regolazione endocrina. Nello sviluppo, l’azione diretta del testosterone e quella mediata dal DHT contribuiscono a processi differenti; lo schema degli organi bersaglio serve a evidenziare queste prevalenze, senza assegnare ogni tessuto a un solo ormone in modo esclusivo.\n\nQuesto permette di prevedere una differenza essenziale: inibire la conversione in DHT lascia disponibile il testosterone, mentre interferire con la produzione dei precursori androgenici agisce più a monte. Bloccare il recettore androgenico interviene ancora altrove, sulla capacità della cellula di interpretare il ligando. Un effetto complessivamente antiandrogenico può dunque nascere da meccanismi diversi.\n\nAnche i nomi degli enzimi vanno tenuti separati. L’aromatasi, CYP19A1, collega androgeni ed estrogeni; CYP17A1 partecipa alla formazione dei precursori degli androgeni; la 5α-reduttasi converte testosterone in DHT. Confondere queste tre tappe porta a prevedere conseguenze sbagliate su testosterone, estradiolo e risposta tissutale.",
      "formula": "Testosterone → AR; testosterone —5α-reduttasi→ DHT → AR; testosterone —aromatasi/CYP19A1→ estradiolo → ER. CYP17A1 agisce più a monte nella steroidogenesi. Schema originale, senza scale quantitative."
    },
    {
      "id": "recettore",
      "title": "AR è un regolatore della risposta cellulare, non un dosaggio ematico",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il recettore androgenico, indicato con AR, appartiene ai recettori intracellulari che regolano l’espressione genica. Testosterone e DHT possono attivarlo. Il legame avvia modificazioni del complesso recettoriale e della sua interazione con il materiale genetico, con conseguenze sulla sintesi di proteine e sul comportamento della cellula. Il risultato non consiste semplicemente nell’accendere la stessa funzione in tutti gli organi.\n\nContano la disponibilità del ligando, la conversione locale, la quantità e lo stato del recettore e il contesto della cellula. Un tessuto può quindi rispondere diversamente da un altro pur essendo esposto alla stessa circolazione. L’azione sul muscolo, sulla prostata o sui caratteri sessuali non è una proprietà separabile soltanto modificando il nome commerciale di uno steroide.\n\nLa distinzione storica fra attività androgenica e anabolizzante descrive esiti diversi, non due recettori completamente indipendenti. I rapporti misurati in modelli animali non consentono di dedurre una separazione sicura nell’uomo fra crescita muscolare ed effetti endocrini. L’etichetta anabolizzante non cancella l’azione sull’asse gonadico.\n\nNel ragionamento farmacologico, una misura plasmatica e una risposta recettoriale rispondono dunque a domande differenti. La prima descrive una parte dell’esposizione; la seconda dipende anche da ciò che il tessuto fa del segnale. Questa distinzione tornerà utile quando si confronteranno soppressione della secrezione e antagonismo di AR."
    },
    {
      "id": "fertilita",
      "title": "Sostituire testosterone non equivale a ripristinare la fertilità",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "EAUH"
      ],
      "text": "Somministrare testosterone può compensare una carenza androgenica periferica e contemporaneamente ridurre lo stimolo gonadotropinico. Non è un paradosso se si segue il circuito: l’ormone esogeno partecipa al feedback negativo; la diminuzione di LH e FSH può compromettere il sostegno alla produzione intratesticolare e alla spermatogenesi. Il valore nel sangue non rappresenta automaticamente il microambiente dei tubuli seminiferi.\n\nNell’ipogonadismo primario, il problema risiede prevalentemente nel testicolo e le gonadotropine possono essere elevate per la riduzione del feedback. In quello secondario è insufficiente lo stimolo centrale: LH e FSH possono essere bassi oppure inappropriatamente normali rispetto al deficit. Una concentrazione dentro l’intervallo del laboratorio non è necessariamente una risposta adeguata al contesto.\n\nEAU richiede che la diagnosi associ quadro clinico e testosterone persistentemente basso, verificato con misurazioni appropriate; un singolo risultato o la sola età non bastano. Le linee guida distinguono inoltre la terapia sostitutiva dalla gestione della fertilità: il testosterone esogeno non è il trattamento per chi ricerca una gravidanza; nelle forme secondarie, le gonadotropine possono sostenere la funzione riproduttiva quando indicate. Valutazione della causa, desiderio riproduttivo e monitoraggio, compreso l’ematocrito, fanno parte della decisione.\n\nL’esempio insegna una regola generale: correggere un prodotto finale non significa ricostruire ogni funzione della ghiandola che normalmente lo produce. Quando una terapia modifica un feedback, benefici periferici e soppressione della funzione endogena possono coesistere.",
      "formula": "Testosterone esogeno → maggiore esposizione periferica + feedback negativo → possibile riduzione di LH/FSH e spermatogenesi. Correzione androgenica e obiettivo riproduttivo richiedono valutazioni distinte. Schema originale."
    },
    {
      "id": "esposizione",
      "title": "La preparazione determina l’esposizione, il recettore determina l’azione",
      "refs": [
        "KAT",
        "RAN"
      ],
      "text": "La farmacologia del testosterone richiede di separare la molecola attiva dalla preparazione che la rende disponibile. Il testosterone non modificato è soggetto a metabolismo importante; la via di somministrazione e la formulazione cambiano il profilo di assorbimento. Gli esteri usati in preparazioni di deposito liberano testosterone dopo idrolisi e possono prolungare l’apporto dell’ormone alla circolazione.\n\nNon si deve perciò attribuire a una preparazione di deposito la sola emivita della molecola libera. Quando il rilascio dal sito di somministrazione è lento, l’andamento osservato dipende anche da quel processo. Analogamente, una preparazione transdermica modifica il modo in cui il farmaco entra nell’organismo senza trasformare AR in un nuovo bersaglio. Il confronto corretto riguarda forma, via, assorbimento e indicazione della specifica preparazione.\n\nNel sangue una parte del testosterone è legata a SHBG e albumina. Il testosterone totale riunisce quote diverse e può cambiare anche quando cambiano le proteine leganti. Ciò non autorizza a trattare un valore isolato o a considerare ogni molecola legata definitivamente inattiva: legame e dissociazione fanno parte di un equilibrio.\n\nI manuali storici riportano dosaggi e disponibilità di prodotti che dipendono dall’epoca e dal Paese. Qui non vengono trasformati in uno schema terapeutico. Anche il rischio attribuito genericamente agli androgeni orali richiede di distinguere strutture e preparazioni: gli steroidi 17α-alchilati non sono sinonimi di ogni prodotto orale contenente un estere del testosterone. Una differenza chimica può modificare metabolismo e sicurezza senza eliminare gli effetti androgenici."
    },
    {
      "id": "gnrh",
      "title": "GnRH: un agonista può sopprimere l’asse se cambia il ritmo",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "EAUP",
        "ORG"
      ],
      "text": "Il GnRH è un peptide ipotalamico; il suo segnale fisiologico arriva all’ipofisi con un’organizzazione pulsatile. Il ritmo non è un dettaglio accessorio: l’attivazione intermittente e l’esposizione persistente possono produrre risposte differenti dello stesso sistema recettoriale. Per questo non basta classificare una sostanza come agonista e dedurne che manterrà indefinitamente elevate le gonadotropine.\n\nUn agonista del GnRH, come leuprorelina o goserelina, inizialmente stimola il sistema. Se l’esposizione persiste, la risposta ipofisaria si riduce per desensibilizzazione e regolazione dei recettori; diminuiscono poi lo stimolo gonadotropinico e la produzione testicolare di testosterone. L’agonista non diventa chimicamente un antagonista: cambia la risposta dell’organismo alla stimolazione continuata.\n\nUn antagonista, come degarelix o relugolix, impedisce invece direttamente l’attivazione del recettore ipofisario. Il RCP di relugolix descrive un calo delle gonadotropine e del testosterone senza il rialzo iniziale caratteristico degli agonisti. Un esito finale simile, la soppressione androgenica, non implica quindi la stessa sequenza temporale.\n\nIl rialzo iniziale del testosterone con un agonista è chiamato flare biochimico. Va distinto da un peggioramento clinico: EAU discute il rischio e la prevenzione nel contesto del singolo paziente, senza rendere automatica una complicanza in ogni caso. Il modello temporale spiega la differenza fra le classi; non prescrive da solo una combinazione preventiva o la scelta oncologica.\n\nLa soppressione prolungata può avere conseguenze su osso, funzione sessuale e altri sistemi. Il RCP di relugolix richiama densità ossea e valutazione cardiovascolare e del QT: l’assenza di flare non equivale all’assenza di rischi.",
      "formula": "Agonista persistente: stimolazione iniziale → adattamento ipofisario → soppressione. Antagonista: blocco recettoriale → soppressione senza stimolazione iniziale. Schema originale della sequenza, non curva clinica né confronto di efficacia."
    },
    {
      "id": "sintesi",
      "title": "Abiraterone: bloccare la sintesi coinvolge anche il surrene",
      "refs": [
        "CFI",
        "KAT",
        "ZYT"
      ],
      "text": "Ridurre il comando LH non elimina tutte le possibili fonti di androgeni. Il surrene produce precursori, e i tessuti possono trasformarli; nel contesto neoplastico può assumere rilievo anche la steroidogenesi locale. L’asse ipofisi–testicolo e la disponibilità androgenica complessiva non sono quindi la stessa cosa.\n\nAbiraterone acetato viene trasformato in abiraterone, che inibisce CYP17A1, enzima con attività 17α-idrossilasica e 17,20-liasica. Agisce sulla formazione dei precursori androgenici, non sulla conversione del testosterone in DHT e non occupando AR come bersaglio principale. Il RCP europeo descrive l’impiego in precise condizioni di carcinoma prostatico metastatico e l’associazione con prednisone o prednisolone; non è un trattamento generico per ogni aumento degli androgeni.\n\nIl blocco della steroidogenesi può favorire un eccesso mineralcorticoide, con ipertensione, ipokaliemia e ritenzione di liquidi. Il glucocorticoide associato riduce lo stimolo ACTH e contribuisce a contenere queste conseguenze. Il razionale dell’associazione comprende quindi un circuito di feedback ulteriore, quello ipofisi–surrene. Il controllo clinico include anche la funzione epatica.\n\nQuesto esempio collega bersaglio ed effetti sistemici: inibire un enzima condiviso da una rete biosintetica non cambia soltanto il prodotto finale che interessa al trattamento. Possono cambiare precursori, altri ormoni e stimoli compensatori. Per interpretare una combinazione farmacologica bisogna chiedersi sia quale segnale viene ridotto sia quale risposta compensatoria possa comparire.",
      "formula": "CYP17A1 inibito → minore sintesi androgenica; alterazione della steroidogenesi surrenalica → possibile eccesso mineralcorticoide. Glucocorticoide associato → minore stimolo ACTH. Schema originale del razionale, non protocollo terapeutico."
    },
    {
      "id": "blocco-ar",
      "title": "Bloccare AR non significa necessariamente abbassare il testosterone",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "XT"
      ],
      "text": "Gli antagonisti del recettore androgenico interferiscono con il segnale nella cellula bersaglio. Flutamide e bicalutamide sono esempi storici di antiandrogeni non steroidei. La loro azione non richiede di spiegare ogni effetto come una riduzione della sintesi testicolare: il ligando può essere presente mentre la risposta recettoriale è ostacolata.\n\nEnzalutamide è un inibitore della segnalazione di AR. Il suo RCP descrive l’interferenza con il legame degli androgeni, la traslocazione nucleare e l’associazione del recettore attivato al DNA. Un livello androgenico basso non esclude quindi che la via recettoriale resti un bersaglio rilevante. L’indicazione dipende dal quadro oncologico e dalle condizioni autorizzate, non dal solo valore del testosterone.\n\nOccorre separare anche bersaglio terapeutico e interazioni farmacocinetiche. Enzalutamide induce enzimi metabolizzanti e può ridurre l’esposizione e l’efficacia di altri medicinali; il RCP richiama inoltre il rischio di convulsioni. Questi aspetti non si deducono dalla sola dicitura antiandrogeno. Conoscere il recettore non sostituisce la conoscenza della molecola.\n\nAlcuni composti steroidei possiedono attività su più recettori e sul controllo centrale. Non è corretto trasferire una proprietà antiandrogenica a tutti i progestinici o presentare ogni farmaco della categoria come equivalente. La classificazione utile parte dal punto d’intervento effettivo e prosegue con le proprietà specifiche del composto."
    },
    {
      "id": "prostata-benigna",
      "title": "5α-reduttasi e prostata benigna: un bersaglio diverso da AR",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "EAUL",
        "FIN"
      ],
      "text": "Finasteride e dutasteride riducono la formazione di DHT a partire dal testosterone. Finasteride agisce soprattutto sulla 5α-reduttasi di tipo 2, dutasteride sui tipi 1 e 2. Sono inibitori enzimatici: descriverli come antagonisti diretti del recettore androgenico perderebbe il passaggio che spiega il loro effetto.\n\nNell’iperplasia prostatica benigna, la riduzione della componente androgenica della crescita richiede tempo. Le linee guida EAU collocano questi farmaci nei sintomi urinari associati ad aumentato rischio di progressione e raccomandano di spiegare la lenta insorgenza dell’effetto. Gli antagonisti α1, come tamsulosina, agiscono invece sul tono della muscolatura liscia. Ridurre il volume e ridurre il tono non sono lo stesso obiettivo, e una graduatoria assoluta fra le classi ignora tempi e caratteristiche del paziente.\n\nLa diminuzione del PSA durante terapia con un inibitore della 5α-reduttasi deve essere considerata nell’interpretazione del dato: non dimostra da sola l’assenza di una neoplasia. Gli effetti indesiderati possono riguardare libido, erezione ed eiaculazione. EMA ha inoltre confermato l’ideazione suicidaria come effetto indesiderato delle compresse di finasteride, con frequenza non nota; per dutasteride ha disposto un’avvertenza precauzionale senza stabilire lo stesso nesso causale.\n\nIl punto didattico è mantenere distinte patologia benigna e malattia neoplastica. Una comune dipendenza da segnali androgenici non rende intercambiabili finasteride, abiraterone ed enzalutamide. Il bersaglio biologico è una parte del ragionamento, che deve restare ancorato alla specifica condizione clinica."
    },
    {
      "id": "follicolo",
      "title": "DHT e follicolo: perché finasteride e minoxidil non sono equivalenti",
      "refs": [
        "CFI",
        "KAT",
        "RAN",
        "MIN",
        "AIF"
      ],
      "text": "Il follicolo pilifero mostra perché un segnale endocrino non abbia un effetto identico in ogni tessuto. Nei follicoli suscettibili del cuoio capelluto, la componente androgenica contribuisce alla miniaturizzazione: nel tempo il capello prodotto diventa più sottile e la fase di crescita si modifica. Il diagramma testosterone–DHT–AR aiuta a individuare il segnale coinvolto, ma non rende ogni perdita di capelli una conseguenza di un eccesso androgenico circolante. Bersaglio locale, sensibilità del tessuto e quadro clinico devono restare distinti.\n\nLa finasteride riduce la conversione del testosterone in DHT. La stessa tappa biochimica può essere rilevante sia nella prostata sia nel follicolo, mentre l’esito osservato cambia: crescita prostatica e produzione del capello non sono misure intercambiabili. L’inibizione enzimatica non equivale al blocco diretto di AR, né alla soppressione del comando ipofisario mediante farmaci del GnRH. Dal fatto che più interventi riducano una componente androgenica non segue che abbiano lo stesso impiego.\n\nNel follicolo, inoltre, il bersaglio molecolare e il risultato visibile appartengono a tempi diversi. Una variazione della disponibilità del ligando precede la valutazione della risposta del tessuto. Il numero e il diametro dei capelli, la distribuzione del diradamento e la percezione del risultato descrivono aspetti differenti: non possono essere sostituiti dalla sola misura di un ormone. Un confronto fra trattamenti deve specificare quale esito viene misurato e per quanto tempo, senza trasformare una freccia biochimica in una promessa di ricrescita.\n\nIl minoxidil topico è un utile termine di confronto: favorisce la crescita del capello, ma non è un inibitore della 5α-reduttasi né un antagonista di AR. Il RCP consultato descrive effetti sul diametro del fusto e sulla fase anagen, precisando che il meccanismo nell’alopecia non è completamente chiarito. Il risultato richiede tempo e il mantenimento del beneficio dipende dalla prosecuzione dell’uso. La via topica non elimina possibili effetti sistemici; irritazione e condizioni della cute contano. Questi dati riguardano una specifica formulazione autorizzata, non giustificano l’estensione automatica a preparazioni orali o ad altre cause di caduta.\n\nAnche la sicurezza della finasteride va letta per formulazione e indicazione. La nota AIFA distingue, nell’uso orale per alopecia, l’interruzione e il contatto medico in caso di alterazioni dell’umore dal contatto medico con valutazione dell’interruzione in caso di disfunzione sessuale. Per lo spray cutaneo non è stato stabilito lo stesso nesso causale con ideazione suicidaria: insufficienza di prove non significa rischio nullo. Il confronto farmacologico conserva così tre livelli separati: meccanismo, beneficio documentato e segnali di sicurezza.",
      "formula": "Finasteride → minore conversione testosterone–DHT → modifica del segnale androgenico locale. Minoxidil topico → promozione della crescita follicolare, con meccanismo non completamente chiarito. Esito sul capello condiviso ≠ bersaglio condiviso. Schema originale qualitativo, non confronto di efficacia né indicazione terapeutica."
    },
    {
      "id": "integrazione",
      "title": "Leggere una terapia endocrina come una sequenza di domande",
      "refs": [
        "CFI",
        "KAT",
        "EAUP",
        "XT"
      ],
      "text": "Per orientarsi fra questi farmaci è utile partire dal punto di intervento. Se cambia il recettore ipofisario del GnRH, si modifica il comando gonadotropinico. Se viene inibito CYP17A1, si ostacola la produzione di precursori androgenici. Se viene inibita la 5α-reduttasi, si riduce una conversione periferica. Se viene bloccato AR, si interferisce con la risposta della cellula al ligando. Sono domande diverse anche quando tutte le strategie vengono raccolte sotto l’etichetta di trattamento endocrino.\n\nLa seconda domanda riguarda il tempo. L’effetto iniziale di un agonista del GnRH è diverso dall’esito della stimolazione persistente; la modificazione della crescita prostatica non ha la stessa velocità del rilassamento muscolare. Un diagramma statico con una barra di inibizione può nascondere questa dimensione temporale.\n\nLa terza domanda riguarda la patologia. Nel carcinoma prostatico, resistenza alla castrazione non significa necessariamente assenza di segnalazione androgenica: la via di AR può continuare a sostenere la malattia. Le combinazioni dipendono da stadio, trattamenti precedenti e prove cliniche. Le mappe dei bersagli non sono algoritmi per scegliere una terapia.\n\nInfine, il prodotto finale misurato non esaurisce il funzionamento del sistema. Testosterone plasmatico, risposta tissutale, funzione sessuale, spermatogenesi e controllo della neoplasia sono esiti distinti. Il ragionamento farmacologico diventa più preciso quando ciascun farmaco viene collegato al bersaglio, al circuito, al tempo e all’esito realmente valutato.",
      "formula": "Quattro domande: dove interviene? → come evolve nel tempo? → in quale patologia? → quale esito è stato valutato? Schema originale per confrontare i meccanismi senza trasformarli in una prescrizione."
    },
    {
      "id": "lettura",
      "title": "Fonti, riconciliazione e limiti di questo capitolo",
      "refs": [
        "CFI",
        "KAT",
        "RAN"
      ],
      "text": "Il percorso documenta ventidue pagine locali esaminate: dieci del corso e dodici di Katzung e Rang & Dale. Diciotto sostengono passaggi del capitolo. L’ampliamento sul follicolo aggiunge cinque pagine del corso, delle quali tre utilizzate; i testi dei due libri sono riusati dalla lettura precedente, con rilettura mirata dei passaggi sulla 5α-reduttasi. Le nuove pagine sulla contraccezione sono state esaminate ma non integrate.\n\nTesto estraibile e immagini sono stati controllati separatamente. Nella pagina comparativa dei trattamenti per l’alopecia una riga è coperta: il contenuto nascosto non è stato letto. Le generalizzazioni della tabella su durata, risultato e danno epatico, oltre a prezzi e dosi storici, non sono trasferite. La riconciliazione usa i passaggi accessibili e distingue meccanismo da efficacia e sicurezza della singola formulazione.\n\nDue riquadri del corso riprendono materiale di Rang & Dale: sono contenuto condiviso, non conferme indipendenti. Le figure e le tabelle originali non vengono riprodotte; gli schemi del capitolo sono sintesi qualitative originali. Le parti ginecologiche, la bibliografia citata e gli altri libri o corsi non ricevono nuove attribuzioni di lettura.\n\nLe fonti ufficiali sono consultate nei limiti dichiarati nei riferimenti, senza lettura integrale delle linee guida o revisione indipendente degli studi. Questa è una sintesi didattica con controllo editoriale del solo integratore, non una revisione clinica indipendente. Contraccezione, endocrinologia ovarica e trattazione completa dell’oncologia prostatica restano fuori dal percorso; non sono forniti dosaggi o schemi prescrittivi."
    }
  ],
  "checks": [
    {
      "question": "Perché testosterone nel sangue e spermatogenesi non sono sinonimi?",
      "answer": "La spermatogenesi richiede l’ambiente intratesticolare e la cooperazione fra gonadotropine, cellule di Sertoli e androgeni locali."
    },
    {
      "question": "Quali cellule rispondono principalmente a LH e FSH nel testicolo?",
      "answer": "LH sostiene le cellule di Leydig; FSH agisce sulle cellule di Sertoli. Le due vie cooperano."
    },
    {
      "question": "CYP17A1, CYP19A1 e 5α-reduttasi svolgono la stessa funzione?",
      "answer": "No: formazione dei precursori androgenici, aromatizzazione a estrogeni e conversione del testosterone in DHT sono tappe diverse."
    },
    {
      "question": "Il DHT attiva un recettore completamente diverso da quello del testosterone?",
      "answer": "Entrambi possono attivare AR; distribuzione degli enzimi e contesto tissutale contribuiscono a differenziare la risposta."
    },
    {
      "question": "Perché un agonista del GnRH può ridurre il testosterone nel tempo?",
      "answer": "La stimolazione persistente riduce la risposta ipofisaria attraverso desensibilizzazione e regolazione recettoriale, dopo una stimolazione iniziale."
    },
    {
      "question": "Un antagonista del GnRH richiede la stessa fase iniziale di stimolazione?",
      "answer": "No: ostacola direttamente il segnale del recettore ipofisario, senza il rialzo iniziale caratteristico degli agonisti."
    },
    {
      "question": "Perché la durata di un deposito di testosterone non coincide con l’emivita della molecola libera?",
      "answer": "La preparazione controlla anche la velocità con cui il principio attivo viene reso disponibile: rilascio, assorbimento ed eliminazione sono processi distinti."
    },
    {
      "question": "Qual è la differenza fra abiraterone ed enzalutamide?",
      "answer": "Abiraterone inibisce la biosintesi androgenica tramite CYP17A1; enzalutamide interferisce con la segnalazione del recettore androgenico."
    },
    {
      "question": "Perché il glucocorticoide associato ad abiraterone ha un razionale endocrino?",
      "answer": "Riduce lo stimolo ACTH e contribuisce a contenere l’eccesso mineralcorticoide conseguente all’inibizione della steroidogenesi."
    },
    {
      "question": "Finasteride e tamsulosina agiscono sulla stessa componente del disturbo urinario?",
      "answer": "No: la prima riduce la formazione di DHT e modifica nel tempo la crescita prostatica; la seconda agisce sul tono della muscolatura liscia attraverso α1."
    },
    {
      "question": "Un effetto antiandrogenico richiede sempre una diminuzione del testosterone plasmatico?",
      "answer": "No: l’interferenza con AR può ridurre la risposta al ligando senza equivalere alla soppressione della sua produzione."
    },
    {
      "question": "Una figura che riunisce tutti i bersagli costituisce un protocollo oncologico?",
      "answer": "No. Bersaglio, sequenza temporale, stadio della malattia e prove sul trattamento devono essere distinti."
    },
    {
      "question": "Due farmaci studiati per il diradamento dei capelli devono agire sullo stesso bersaglio?",
      "answer": "No. Finasteride riduce la formazione di DHT; minoxidil topico favorisce la crescita follicolare attraverso un meccanismo non completamente chiarito, senza bloccare direttamente 5α-reduttasi o AR."
    },
    {
      "question": "La riduzione di un ligando dimostra immediatamente il beneficio visibile nel follicolo?",
      "answer": "No. La risposta del tessuto richiede una valutazione nel tempo e misure appropriate; il bersaglio molecolare non sostituisce l’esito clinico."
    }
  ],
  "references": [
    {
      "id": "CFI",
      "title": "Appunti e diapositive del corso di Farmacologia I · 2025–26",
      "detail": "Corso I PDF 756–765, etichette 754–763: dieci pagine esaminate nel testo accessibile e nelle immagini, integrate 757–763. Cinque nuove pagine 761–765; 764–765 sulla contraccezione escluse. Pagina 763 con una riga coperta non leggibile. Riquadri 756/759 condivisi con Rang 671/673, non conferme indipendenti."
    },
    {
      "id": "KAT",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana 2014 / XII americana 2012, capitolo 40, PDF 845–852, editoriali 825–832. Otto pagine lette e controllate visivamente; passaggi integrati da 845–851. Figura 40-6, tabelle 40-5 e 40-6 e strutture viste; nessuna riproduzione o validazione strutturale atomo per atomo. Bibliografia citata non letta per questo."
    },
    {
      "id": "RAN",
      "title": "Rang & Dale · Farmacologia",
      "detail": "VIII italiana 2016 / originale 2015, capitolo 35, PDF 671–674. Quattro pagine lette e controllate visivamente, figura 35.5 compresa. Numeri di pagina editoriale non identificati nella copia impaginata. Integrati solo passaggi su androgeni e GnRH, senza posologie o indicazioni ginecologiche storiche."
    },
    {
      "id": "EAUH",
      "title": "EAU · Male hypogonadism",
      "url": "https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/male-hypogonadism",
      "detail": "Consultazione 5 novembre 2026: §§3.1.1, 3.3.1, 3.3.5, 3.4.1 e 3.5.1, passaggi su diagnosi, asse e fertilità. Consultazione selettiva, non intera linea guida né studi primari."
    },
    {
      "id": "EAUP",
      "title": "EAU · Prostate cancer: hormonal therapy",
      "url": "https://uroweb.org/guidelines/prostate-cancer/chapter/treatment",
      "detail": "Consultazione 5 novembre 2026: §6.5.1, sottosezioni c–e su agonisti, antagonisti e via androgenica. Distinti flare biochimico e conseguenza clinica. Non letti tutti i percorsi per stadio né gli studi citati."
    },
    {
      "id": "EAUL",
      "title": "EAU · Male LUTS: trattamento farmacologico",
      "url": "https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management",
      "detail": "Consultazione 5 novembre 2026: passaggi §§5.2.1–5.2.2 e 5.2.7.a, bersagli, tempi, PSA e rischi. Nessuna lettura integrale della linea guida."
    },
    {
      "id": "ZYT",
      "title": "EMA · Zytiga, informazioni sul prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/zytiga-epar-product-information_en.pdf",
      "detail": "Consultazione 5 novembre 2026: §§4.1, passaggi 4.2/4.4 e meccanismo 5.1, PDF 2, 4 e 10. Inibizione CYP17, associazione glucocorticoide e rischio mineralcorticoide. Non intero RCP, figure o studi."
    },
    {
      "id": "ORG",
      "title": "EMA · Orgovyx, informazioni sul prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/orgovyx-epar-product-information_en.pdf",
      "detail": "Consultazione 5 novembre 2026: §4.1, passaggi 4.4 e meccanismo 5.1, PDF 2–4 e 17. Antagonismo GnRH, assenza di stimolo iniziale e rischi della soppressione. Non intero RCP."
    },
    {
      "id": "XT",
      "title": "EMA · Xtandi, informazioni sul prodotto",
      "url": "https://www.ema.europa.eu/en/documents/product-information/xtandi-epar-product-information_en.pdf",
      "detail": "Consultazione 5 novembre 2026: §4.1, passaggi 4.4/4.5 e meccanismo 5.1, PDF 2–4, 6 e 11. Segnalazione AR, induzione enzimatica e convulsioni. Non intero RCP né confronto completo delle indicazioni."
    },
    {
      "id": "FIN",
      "title": "EMA · Finasteride e dutasteride: revisione di sicurezza",
      "url": "https://www.ema.europa.eu/en/medicines/human/referrals/finasteride-dutasteride-containing-medicinal-products",
      "detail": "Pagina consultata 5 novembre 2026, riepilogo e informazioni per professionisti della revisione conclusa nel 2025. Distinta conferma per compresse di finasteride da precauzione per dutasteride; frequenza non nota."
    },
    {
      "id": "MIN",
      "title": "McNeil · Regaine for Men, schiuma cutanea: RCP britannico",
      "url": "https://www.medicines.org.uk/emc/product/5781/smpc",
      "detail": "Testo revisionato 15 giugno 2026, consultato 5 novembre 2026: §§4.1–4.4 e 5.1, passaggi su crescita, latenza, mantenimento e assorbimento. Una formulazione specifica; non intero RCP né studi primari."
    },
    {
      "id": "AIF",
      "title": "AIFA · Nota di sicurezza su finasteride e dutasteride",
      "url": "https://www.aifa.gov.it/documents/20142/2690608/NIIS_Finasteride_dutasteride_IT_16.09.2025.pdf",
      "detail": "Nota 16 settembre 2025, consultata 5 novembre 2026: testo PDF pp. 1–3, formulazioni e azioni in caso di sintomi. Nessuna nuova verifica visuale del PDF o revisione degli studi sottostanti."
    }
  ],
  "moleculeLinks": [
    {
      "id": "CHEMBL386630",
      "label": "TESTOSTERONE"
    },
    {
      "id": "CHEMBL1200335",
      "label": "TESTOSTERONE ENANTHATE"
    },
    {
      "id": "CHEMBL1201199",
      "label": "LEUPROLIDE"
    },
    {
      "id": "CHEMBL1201247",
      "label": "GOSERELIN"
    },
    {
      "id": "CHEMBL415606",
      "label": "DEGARELIX"
    },
    {
      "id": "CHEMBL1800159",
      "label": "RELUGOLIX"
    },
    {
      "id": "CHEMBL254328",
      "label": "ABIRATERONE"
    },
    {
      "id": "CHEMBL271227",
      "label": "ABIRATERONE ACETATE"
    },
    {
      "id": "CHEMBL1082407",
      "label": "ENZALUTAMIDE"
    },
    {
      "id": "CHEMBL409",
      "label": "BICALUTAMIDE"
    },
    {
      "id": "CHEMBL806",
      "label": "FLUTAMIDE"
    },
    {
      "id": "CHEMBL710",
      "label": "FINASTERIDE"
    },
    {
      "id": "CHEMBL1200969",
      "label": "DUTASTERIDE"
    },
    {
      "id": "CHEMBL802",
      "label": "MINOXIDIL"
    }
  ],
  "relatedExistingChapterIds": [
    "recettori-e-legame",
    "desensibilizzazione-tolleranza",
    "metabolismo-trasportatori",
    "modelli-pk"
  ],
  "coverage": "22 pagine locali esaminate cumulativamente, 18 con passaggi integrati. Cinque pagine nuove del corso; riga coperta a pagina 763 non leggibile. Libri riusati senza ricontare la lettura. Fonti ufficiali consultate selettivamente; nessuna lettura integrale di corsi o libri, nessuna revisione clinica indipendente.",
  "wordCount": 2819
});
