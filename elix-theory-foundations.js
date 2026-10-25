// Original educational prose. Source coverage: data/theory-foundations-reading.json.
export const THEORY_FOUNDATIONS = {
  "id": "recettori-e-legame",
  "volume": 2,
  "title": "Recettori, affinità ed efficacia",
  "lead": "Dal legame alla risposta: una spiegazione progressiva di occupazione, potenza, agonismo e antagonismo.",
  "format": "extended",
  "reviewStatus": "Stesura estesa · verifica delle fonti indicata sotto · revisione specialistica non completata",
  "sections": [
    {
      "id": "dal-bersaglio-alla-risposta",
      "title": "1. Dal bersaglio alla risposta",
      "text": "La farmacodinamica studia come una sostanza modifica le funzioni di un sistema biologico. Per costruire una spiegazione utile bisogna seguire una catena: il farmaco raggiunge il sito d’azione, interagisce con un bersaglio, modifica un processo cellulare e produce una risposta misurabile. Ogni passaggio può limitare il successivo. Sapere che una molecola si lega bene non dimostra, da solo, che produca un grande effetto o un beneficio clinico.\n\nUn recettore riconosce segnali e contribuisce a trasformarli in una risposta. Non tutti i bersagli farmacologici sono però recettori di segnalazione: esistono enzimi, trasportatori e proteine strutturali. Alcuni effetti dipendono inoltre da proprietà chimico-fisiche e non richiedono l’attivazione di un recettore. Conviene quindi distinguere il termine generale “bersaglio” dalla famiglia specifica alla quale appartiene.\n\nAnche quando il bersaglio è identico, due tessuti possono rispondere in modo diverso. Cambiano il numero dei recettori, i sistemi ai quali sono collegati e la funzione della cellula. La selettività descrive una preferenza relativa nelle condizioni considerate, non una barriera che impedisce qualsiasi interazione con altri bersagli. Per studiare un farmaco occorre collegare il livello molecolare al contesto biologico senza saltare direttamente dal legame alla terapia.",
      "refs": [
        "K",
        "S"
      ]
    },
    {
      "id": "concentrazione-libera",
      "title": "2. La dose non è la concentrazione libera",
      "text": "La dose è una quantità somministrata; la concentrazione è una quantità per volume. Assorbimento, distribuzione ed eliminazione contribuiscono a stabilire quale concentrazione si trovi nei diversi compartimenti e come cambi nel tempo. Una stessa dose non garantisce la stessa esposizione in due persone. Questa prima parte del percorso appartiene alla farmacocinetica e condiziona ciò che la farmacodinamica potrà produrre.\n\nNelle equazioni di legame [L] indica il ligando libero disponibile per il sito, non automaticamente il totale misurato nel plasma o la quantità aggiunta alla provetta. Se una parte del ligando si lega ad altre componenti, il totale e la quota disponibile possono differire. Usare la concentrazione aggiunta come stima di quella libera richiede che la sottrazione dovuta al legame sia trascurabile, oppure che sia stata corretta nel modello.\n\nQuesto chiarisce perché un valore ottenuto su un recettore isolato non si possa convertire direttamente in milligrammi da somministrare. Nel modello seguente lavoreremo con concentrazioni libere e rapporti adimensionali. Non introdurremo un farmaco reale: lo scopo è capire una relazione, mantenendo separati esperimento, organismo e decisione clinica.",
      "refs": [
        "K",
        "T02"
      ]
    },
    {
      "id": "equilibrio-affinita",
      "title": "3. Equilibrio, affinità e velocità di scambio",
      "text": "Nel modello più semplice il ligando L e il recettore libero R formano reversibilmente un complesso LR: L + R ⇄ LR. Il complesso può dissociarsi e riformarsi. All’equilibrio le velocità complessive delle due reazioni sono uguali: la quantità media di complesso è stabile, ma le singole molecole continuano a scambiarsi. Equilibrio non significa immobilità.\n\nLe costanti cinetiche k_on e k_off descrivono rispettivamente associazione e dissociazione. Per questa reazione elementare, Kd = [L][R]/[LR] = k_off/k_on. Il numeratore del rapporto cinetico è la dissociazione. Kd ha le dimensioni di una concentrazione; a parità di bersaglio e condizioni, un valore minore indica maggiore affinità. È una proprietà dell’interazione descritta, non un voto alla qualità terapeutica della molecola.\n\nDue ligandi possono avere la stessa Kd e velocità di scambio differenti. Se k_on e k_off aumentano entrambe dello stesso fattore, il rapporto non cambia. Non è quindi possibile ricavare dalla sola affinità né il tempo necessario per raggiungere l’equilibrio né la durata dell’effetto nell’organismo. Quest’ultima dipende anche dall’esposizione, dalla trasduzione e dal ricambio dei componenti biologici.",
      "refs": [
        "T02",
        "S"
      ],
      "formula": "Kd = [L][R] / [LR] = k_off / k_on"
    },
    {
      "id": "occupazione",
      "title": "4. Quanti siti sono occupati?",
      "text": "Indichiamo con R_tot la somma dei siti liberi e dei siti legati. L’occupazione frazionaria θ è [LR]/R_tot: vale zero se nessun sito è occupato e si avvicina a uno quando il ligando occupa quasi tutti i siti. Per una popolazione omogenea di siti indipendenti, con legame reversibile 1:1 all’equilibrio e senza competitori, si ottiene θ = [L]/(Kd + [L]). Le due concentrazioni devono essere espresse nella stessa unità.\n\nPonendo [L] = Kd, il denominatore diventa 2Kd e l’occupazione è 0,5. Questo è il significato operativo della metà occupazione nel modello. Con [L] pari a nove volte Kd, l’occupazione è invece 9/10, cioè il 90%. Per passare dal 50% al 90% serve quindi una concentrazione nove volte maggiore, non un incremento del 40%. Avvicinandosi alla saturazione, grandi aumenti di concentrazione producono incrementi sempre più piccoli dell’occupazione.\n\nLa formula non va estesa automaticamente a siti cooperativi, popolazioni differenti, competizione, legame irreversibile o osservazioni prima dell’equilibrio. Il laboratorio mostra soltanto questa situazione ideale. I simboli rappresentano una popolazione media, non una fotografia delle singole molecole; soprattutto, una percentuale di occupazione non è ancora una percentuale di risposta.",
      "refs": [
        "K",
        "T02"
      ],
      "formula": "θ = [L] / (Kd + [L])",
      "lab": true
    },
    {
      "id": "capacita-legame",
      "title": "5. Bmax: capacità di legame, non affinità",
      "text": "In un saggio di binding si misura il ligando legato e si cerca di distinguere la componente specifica dal legame non specifico. Bmax esprime la capacità massima di legame specifico nelle condizioni del preparato. Nel modello a un sito, B = Bmax × [L]/(Kd + [L]). La stessa frazione di occupazione può quindi corrispondere a quantità legate diverse se cambia il numero dei siti disponibili.\n\nImmagina due preparati con la stessa Kd: il secondo contiene il doppio dei siti del primo. Alla stessa concentrazione libera entrambi hanno la stessa occupazione percentuale, ma il secondo lega una quantità doppia di ligando. Non è diventato più affine. Separare capacità e affinità permette di interpretare una modifica del numero dei recettori senza confonderla con una modifica del riconoscimento molecolare.\n\nLa curva di legame appare iperbolica con la concentrazione su un asse lineare e assume un andamento sigmoide quando quell’asse è logaritmico. Il cambio di scala rende leggibili intervalli molto ampi, ma non modifica i dati. Prima di confrontare due curve bisogna controllare assi, unità, normalizzazione e quale misura rappresenti il valore massimo.",
      "refs": [
        "K",
        "T02"
      ]
    },
    {
      "id": "efficacia-riserva",
      "title": "6. Dall’occupazione all’effetto: efficacia e riserva",
      "text": "Dopo il legame deve avvenire una trasformazione funzionale. Nei recettori accoppiati a proteine G intervengono proteine G ed effettori; in altri sistemi cambiano la conduzione ionica o l’attività di enzimi e programmi cellulari. L’efficacia del ligando riguarda la sua capacità di promuovere una risposta attraverso il recettore. Il massimo osservato, Emax, dipende anche dal sistema sperimentale e dall’evento scelto come lettura.\n\nIl numero di complessi ligando-recettore e la risposta non devono crescere in proporzione diretta. Una cascata può amplificare il segnale, mentre un componente a valle può diventare il fattore limitante. Se l’effetto massimo è raggiunto senza occupare tutti i recettori, si parla di riserva recettoriale. Non è necessariamente un gruppo separato di recettori “di scorta”: è una proprietà del rapporto fra occupazione e risposta in quel sistema.\n\nUn esperimento aiuta a riconoscerla. Riducendo una parte dei recettori disponibili, può essere ancora possibile raggiungere lo stesso massimo aumentando la concentrazione dell’agonista. Se la riduzione prosegue, la riserva si esaurisce e il massimo scende. Perciò una perdita di recettori non comporta sempre e immediatamente una riduzione proporzionale dell’Emax. La riserva può differire tra tessuti, risposte e agonisti.",
      "refs": [
        "K",
        "T02"
      ]
    },
    {
      "id": "potenza",
      "title": "7. EC50, potenza ed Emax",
      "text": "EC50 è la concentrazione che produce metà dell’effetto massimo dell’agonista nel saggio considerato. Per una risposta descritta dal modello Emax semplice, al netto del basale, E = Emax × C/(EC50 + C). La forma matematica ricorda quella del legame, ma la grandezza misurata è diversa: qui osserviamo una risposta, non contiamo i siti occupati. EC50 e Kd possono quindi essere differenti.\n\nA parità di preparato, endpoint e condizioni, una EC50 minore indica maggiore potenza. L’efficacia massima osservata riguarda invece l’altezza del massimo. Un composto A può raggiungere metà del proprio massimo a una concentrazione dieci volte inferiore a B, ma fermarsi a un massimo più basso. Dire soltanto che A è “più forte” nasconde entrambe le informazioni. Bisogna specificare se si sta parlando di concentrazione necessaria o ampiezza della risposta.\n\nLa potenza non dimostra maggiore sicurezza. Per valutare effetti indesiderati occorrono altre misure e altri endpoint, mentre nell’organismo entra in gioco anche l’esposizione. Neppure un confronto fra EC50 provenienti da tessuti o protocolli diversi permette automaticamente di ordinare i farmaci. Prima viene la descrizione del saggio, poi il confronto dei numeri.",
      "refs": [
        "K",
        "S"
      ],
      "formula": "E = Emax × C / (EC50 + C) · risposta al netto del basale"
    },
    {
      "id": "agonisti",
      "title": "8. Agonista pieno, parziale, inverso",
      "text": "Un agonista pieno raggiunge il massimo di riferimento del sistema. Un agonista parziale produce un massimo inferiore nelle stesse condizioni, anche quando l’occupazione diventa elevata. Non va definito semplicemente come un ligando poco affine: può legarsi molto bene e tuttavia promuovere un’attivazione meno efficace. Inoltre, la risposta osservata dipende dall’accoppiamento; la classificazione funzionale richiede sempre il contesto del saggio.\n\nSe un agonista parziale compete per gli stessi siti con un agonista pieno, può ridurne la risposta. Da solo attiva il sistema; in presenza dell’agonista più efficace sostituisce parte dei complessi che avrebbero prodotto una stimolazione maggiore. I due comportamenti sono compatibili. Per prevedere la direzione del cambiamento servono concentrazioni, affinità e attività dei ligandi, oltre alle caratteristiche del tessuto.\n\nUn recettore può avere attività costitutiva anche senza agonista. Un agonista inverso riduce questa attività basale, mentre un antagonista neutro non la modifica direttamente nel modello ideale ma ostacola l’azione di altri ligandi. L’effetto “opposto” dell’agonista inverso riguarda il segnale costitutivo del recettore: non significa che ogni conseguenza nell’organismo sia semplicemente il contrario di quella dell’agonista.",
      "refs": [
        "K",
        "S",
        "SL"
      ]
    },
    {
      "id": "competizione",
      "title": "9. Antagonismo competitivo reversibile",
      "text": "Nel modello competitivo classico agonista e antagonista si escludono reciprocamente dallo stesso sito. L’antagonista non produce la risposta agonistica, ma la sua presenza modifica la frazione di recettori accessibili all’agonista. A una concentrazione fissa di antagonista, aumentando l’agonista si può recuperare il massimo, se l’equilibrio è raggiunto e l’intervallo di concentrazioni esplorabile è sufficiente.\n\nIn queste condizioni la curva concentrazione-risposta dell’agonista si sposta verso destra, idealmente in modo parallelo, senza cambiare Emax. Il rapporto fra le concentrazioni necessarie a produrre lo stesso effetto con e senza antagonista è DR = 1 + [I]/K_B. Qui [I] è la concentrazione libera dell’antagonista e K_B la sua costante di dissociazione nel modello; la notazione evita di confonderla con l’EC50 dell’agonista.\n\nSe [I] è uguale a K_B, DR vale due: per lo stesso effetto occorre il doppio della concentrazione di agonista. È un risultato sperimentale ideale, non un invito a raddoppiare una dose nel paziente. La possibilità teorica di superare un blocco non garantisce che farlo sia possibile o sicuro nell’organismo. Anche una sola curva incompleta non basta a dimostrare il meccanismo di un antagonista.",
      "refs": [
        "K",
        "S"
      ],
      "formula": "DR = C_con antagonista / C_senza antagonista = 1 + [I]/K_B"
    },
    {
      "id": "meccanismi-antagonismo",
      "title": "10. Irreversibilità, allosteria e altri antagonismi",
      "text": "Conviene descrivere separatamente tre aspetti: dove si lega una sostanza, quanto reversibile è il legame e quale cambiamento funzionale produce. “Allosterico” indica un sito diverso da quello ortosterico; “irreversibile” riguarda la persistenza del legame; la riduzione del massimo riguarda invece una curva di risposta. Non sono tre modi equivalenti per dire la stessa cosa.\n\nUn antagonista irreversibile può rendere indisponibili recettori per un tempo che non segue semplicemente la concentrazione libera del farmaco. Il massimo può diminuire, ma una riserva recettoriale può inizialmente conservarlo. Un modulatore allosterico può modificare il riconoscimento del ligando o la trasmissione del segnale; l’effetto può essere positivo o negativo e dipende dal sistema. Non ogni modulazione allosterica è quindi un blocco irreversibile.\n\nL’antagonismo può anche avvenire senza competizione su un recettore comune. Due sostanze possono interagire chimicamente riducendo la disponibilità di una di esse; due vie distinte possono produrre effetti fisiologici opposti; una modificazione farmacocinetica può ridurre l’esposizione. Riconoscere il livello al quale nasce l’interazione evita di applicare una formula recettoriale a un fenomeno di eliminazione o a una risposta dell’intero organismo.",
      "refs": [
        "K",
        "S"
      ]
    },
    {
      "id": "numeri-saggi",
      "title": "11. Ki, IC50 e domande da fare a un dato",
      "text": "Il catalogo di una molecola può riportare numeri provenienti da binding, saggi enzimatici o risposte cellulari. Non basta che condividano l’unità nanomolare per renderli confrontabili. Ki è una costante di inibizione stimata secondo un modello; nel binding competitivo può descrivere l’affinità del competitore. IC50 è invece una concentrazione associata al criterio di inibizione del saggio e dipende dal protocollo.\n\nNel binding con tracciante, l’IC50 del competitore corrisponde alla riduzione del 50% del legame specifico del tracciante rispetto al controllo. Cambiando la concentrazione del tracciante può cambiare il valore misurato anche se l’affinità del competitore non cambia. Una conversione da IC50 a Ki richiede ipotesi appropriate: non si ottiene rinominando la colonna. Nei saggi funzionali occorre anche sapere se il 50% si riferisca alla risposta di controllo o al massimo di inibizione ottenibile.\n\nPer leggere una scheda chiedi quindi: qual è il bersaglio, quale specie o preparato è stato usato, quale evento è misurato, quanto è durato l’esperimento e quale modello è stato applicato? Se queste informazioni mancano, il numero conserva un’incertezza interpretativa. Un valore molto preciso nella scrittura non rende preciso il suo significato biologico.",
      "refs": [
        "T02",
        "IUPHAR"
      ]
    },
    {
      "id": "dal-modello-alla-clinica",
      "title": "12. Dalle curve alla sicurezza: ciò che manca",
      "text": "Una curva graduata descrive una risposta continua di un preparato, come l’ampiezza di un segnale. Una curva quantale descrive invece la quota di soggetti che raggiunge un endpoint definito. Nell’uso quantale, ED50 è la dose alla quale il 50% della popolazione soddisfa quel criterio: non significa che ogni soggetto abbia ottenuto metà del proprio effetto massimo. L’endpoint e la popolazione fanno parte della definizione.\n\nAnche TD50 e LD50 vanno separati: il primo indica una tossicità specificata nel 50% della popolazione sperimentale, il secondo la letalità. Un indice terapeutico espresso come rapporto TD50/ED50, o storicamente LD50/ED50, non coincide con un intervallo di concentrazioni individuale e non garantisce assenza di rischio. La forma e la sovrapposizione delle distribuzioni, il tipo di tossicità e la variabilità restano essenziali.\n\nInfine, la risposta può cambiare nel tempo. Riduzione dell’accoppiamento, cambiamenti del numero di recettori e adattamenti fisiologici sono meccanismi distinti dalla riduzione dell’esposizione. Una risposta minore dopo somministrazioni ripetute non dimostra da sola quale meccanismo sia intervenuto. Questi fenomeni saranno sviluppati in unità dedicate: da questo capitolo non si ricavano schemi di terapia, aumenti di dose o strategie di sospensione.",
      "refs": [
        "K",
        "S"
      ]
    },
    {
      "id": "lettura-critica",
      "title": "13. Integrare una lezione significa anche verificarla",
      "text": "Le lezioni e le sbobine aiutano a riconoscere il filo del corso, ma una trascrizione può contenere inversioni di termini o esempi troppo semplificati. Nella pagina 69 stampata della sbobina di farmacodinamica, la frase sul rapporto cinetico di Kd inverte l’ordine delle costanti; la formula illustrata nella stessa pagina mostra invece dissociazione divisa per associazione. Qui è mantenuta la relazione corretta, distinguendo testo e figura anziché ripetere l’errore.\n\nUn secondo esempio riguarda anakinra. La descrizione come recettore-esca non è corretta: l’EMA lo descrive come una copia dell’antagonista umano del recettore dell’interleuchina 1, che si lega ai recettori ostacolando l’azione della citochina. È un esempio utile per separare un antagonista recettoriale da una proteina che sequestra il ligando. Questo richiamo riguarda il meccanismo, non introduce indicazioni o dosaggi.\n\nIl capitolo è una stesura estesa originale, con intervalli di lettura dichiarati. Non equivale alla lettura completa di Katzung, Rang & Dale, Clementi–Fumagalli o dei corsi. Restano da riconciliare le altre lezioni, i materiali Collino e D’Avolio e le parti non ancora consultate. Le fonti storiche sostengono i concetti di base; raccomandazioni e impieghi clinici richiedono verifiche ufficiali specifiche e attuali.",
      "refs": [
        "S",
        "EMA"
      ]
    }
  ],
  "targets": [
    "ADRB2",
    "CHRM3"
  ],
  "coverage": "Copre il modello di legame 1:1, affinità e cinetica, capacità di legame, efficacia e riserva, agonismo e antagonismo. Restano da sviluppare modelli avanzati, desensibilizzazione e adattamenti, e il confronto completo con gli altri materiali del corso.",
  "references": [
    {
      "id": "K",
      "title": "Katzung · Farmacologia generale e clinica",
      "detail": "IX italiana, Piccin 2014, sulla XII americana 2012. Letto il testo delle pagine PDF 35–42 (stampate 15–22); per il capitolo utilizzate 36–42. Formule e figura 2-3 controllate visivamente nelle PDF 37 e 40. Esempi terapeutici storici non trasferiti come raccomandazioni. Inoltre PDF 54–55 lette integralmente e controllate come immagini per curve quantali, TD50 e LD50. La PDF 54 riporta visivamente 32 e la 55 riporta 35: si mantengono i localizzatori PDF, senza assumere un offset uniforme."
    },
    {
      "id": "S",
      "title": "Farmacologia I · Sbobina della lezione di Loredana Serpe",
      "detail": "Corso 2025–26, lezione di farmacodinamica del 10/10/2025. PDF collettivo “Farmacologia I Definitivo”, pagine PDF 67–86, stampate 62–81: testo letto integralmente in questo intervallo. PDF 74 controllata anche come immagine. Sintesi critica: non validazione dell’intero documento."
    },
    {
      "id": "SL",
      "title": "Farmacologia I · Slide Serpe",
      "detail": "Raccolta 2025–26: PDF 125–126 e 130, numerazione delle slide 123–124 e 128. Testo estratto letto; figure non ispezionate in questo lotto."
    },
    {
      "id": "T02",
      "title": "Recupero del modulo originale T02 · fonti e letture precedenti",
      "detail": "Contenuto del 20/10/2026 e revisione editoriale verificati per hash. Clementi–Fumagalli, 4ª ed. 2012: PDF 71–73,75–77,81 (stampate 49–51,53–55,59); Rang & Dale, 8ª italiana 2016: PDF 37–39,43–44,51–53. Sono letture documentate nel precedente audit, non nuove letture integrali di questi libri. Definizioni Ki/IC50 originariamente confrontate con IUPHAR; la revisione è editoriale, non clinica."
    },
    {
      "id": "EMA",
      "title": "EMA · Kineret, meccanismo di anakinra",
      "url": "https://www.ema.europa.eu/en/medicines/human/EPAR/kineret",
      "detail": "Sezione “How does Kineret work?” consultata il 25/10/2026 per la sola distinzione tra antagonista recettoriale e recettore-esca. Nessuna dichiarazione di lettura integrale del RCP."
    },
    {
      "id": "IUPHAR",
      "title": "IUPHAR Pharmacology Education Project · Glossario",
      "url": "https://pharmacologyeducation.org/glossary/",
      "detail": "Voci IC50, KB, Kd, Ki e indice terapeutico ricontrollate il 25/10/2026; solo terminologia dei saggi. Nessuna dichiarazione di lettura integrale del sito."
    }
  ],
  "checks": [
    {
      "question": "Con Kd = 8 nM e ligando libero = 8 nM, quanta occupazione e quanto effetto?",
      "answer": "Nel modello 1:1 all’equilibrio, l’occupazione è 8/(8+8) = 50%. L’effetto non è determinabile da questi dati: mancano efficacia e accoppiamento."
    },
    {
      "question": "A ha EC50 minore di B, ma Emax inferiore: quale dei due è più potente?",
      "answer": "A è più potente nel medesimo saggio, mentre B raggiunge un massimo maggiore. Nessuna delle due osservazioni dimostra quale sia più sicuro nel paziente."
    },
    {
      "question": "Il massimo resta invariato dopo aver ridotto i recettori disponibili: è impossibile?",
      "answer": "No. Una riserva recettoriale può permettere di raggiungere ancora il massimo, eventualmente con concentrazioni maggiori. Riduzioni ulteriori possono far diminuire Emax."
    },
    {
      "question": "Un agonista parziale può ridurre la risposta a un agonista pieno?",
      "answer": "Sì, quando compete per gli stessi siti e sostituisce complessi più efficaci. Il suo effetto da solo e quello in associazione dipendono dal contesto e dalle concentrazioni."
    }
  ],
  "wordCount": 2356
};
