// Original, source-traced prose. Editorial review is not clinical validation.
export const THEORY_COMPLEMENTARY = [
  {
    "id": "modelli-pk",
    "existingChapterId": "modelli-pk",
    "relatedExistingChapterIds": [
      "assorbimento-distribuzione",
      "first-pass-avanzato",
      "clearance-biliare-renale",
      "farmacocinetica-stato-stazionario",
      "vie-somministrazione-biopharm"
    ],
    "volume": 3,
    "title": "Farmacocinetica: dal sito di somministrazione alla concentrazione nel tempo",
    "lead": "Seguire il farmaco significa collegare ciò che viene somministrato a ciò che raggiunge il circolo, si distribuisce e rimane nel tempo. Questo capitolo costruisce il percorso dai processi ADME ai modelli quantitativi, distinguendo esposizione e risposta. Le equazioni hanno ipotesi e unità esplicite e non contengono dosaggi di medicinali. Le fonti sono sezioni realmente consultate di due edizioni storiche, utilizzate per i fondamenti e non come linee guida cliniche correnti.",
    "format": "extended",
    "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
    "createdOn": "2026-10-25",
    "sections": [
      {
        "id": "pk-01",
        "title": "La domanda farmacocinetica: dove arriva il farmaco e per quanto tempo?",
        "text": "Una quantità somministrata non dice, da sola, quale concentrazione raggiungerà un tessuto. Tra il gesto della somministrazione e l'incontro con il bersaglio si interpongono ingresso nell'organismo, passaggi tra compartimenti e processi di eliminazione. La farmacocinetica descrive quantitativamente questa storia nel tempo. La farmacodinamica affronta un'altra relazione: che cosa accade quando una certa concentrazione incontra un sistema biologico. Le due prospettive si collegano, ma la stessa concentrazione plasmatica non garantisce sempre lo stesso effetto.\n\nL'acronimo ADME riassume assorbimento, distribuzione, metabolismo ed escrezione. È una mappa di processi che possono svolgersi contemporaneamente: mentre una parte della sostanza continua a entrare, un'altra può già distribuirsi o essere eliminata. Rappresentarli come quattro stanze attraversate una sola volta sarebbe fuorviante.\n\nPer seguire il ragionamento useremo A per la quantità di principio attivo nell'organismo, Cp per la sua concentrazione plasmatica, D per la quantità somministrata e t per il tempo. Quantità e concentrazione hanno dimensioni diverse. Il primo passaggio è capire come il farmaco entra nel sistema che vogliamo osservare.",
        "refs": [
          "K-BASE",
          "R-BASE"
        ]
      },
      {
        "id": "pk-02",
        "title": "Vie di somministrazione e barriere: ingressi differenti nello stesso organismo",
        "text": "Assorbire significa trasferire il farmaco dal sito di somministrazione alla circolazione sistemica. Una somministrazione endovenosa introduce direttamente la sostanza nel circolo e non richiede questa fase; una somministrazione orale, intramuscolare o sottocutanea richiede invece un trasferimento dal sito iniziale. Le differenze non riguardano soltanto la comodità: cambiano le barriere attraversate e la velocità con cui la sostanza diventa disponibile.\n\nNella via orale il principio attivo deve essere liberato dalla formulazione, diventare disponibile nei liquidi gastrointestinali e attraversare la mucosa. Il passaggio dipende dalle caratteristiche della molecola, dalla permeabilità delle barriere e dall'eventuale intervento di trasportatori. Non basta una regola come «più lipofilo significa sempre meglio assorbito»: dissoluzione in ambiente acquoso e attraversamento della membrana sono problemi distinti. Anche flusso locale e formulazione contribuiscono all'andamento dell'ingresso.\n\nLe vie mucosali e transdermiche possono evitare una parte del percorso presistemico tipico della via orale, ma non rendono automaticamente completo o istantaneo l'ingresso. Inoltre, applicazione locale e distribuzione sistemica non si escludono necessariamente. Per confrontare due vie occorre perciò separare due domande: quanto farmaco arriva nel circolo e con quale velocità vi arriva. La biodisponibilità risponde alla prima.",
        "refs": [
          "R-BARR",
          "K-F"
        ]
      },
      {
        "id": "pk-03",
        "title": "Biodisponibilità e primo passaggio: assorbito non significa già sistemico",
        "text": "La biodisponibilità sistemica F è la frazione della quantità somministrata che raggiunge la circolazione sistemica come principio attivo immodificato. È adimensionale: esprimerla come frazione oppure come percentuale richiede attenzione, perché nelle equazioni si usa la frazione. Per la somministrazione endovenosa si assume F uguale a uno. Una F minore può dipendere da assorbimento incompleto, perdita presistemica o entrambi.\n\nDopo l'assorbimento intestinale, il sangue portale raggiunge il fegato prima della circolazione sistemica. Una parte del farmaco può essere metabolizzata nell'intestino o estratta dal fegato durante questo percorso. Questo effetto di primo passaggio spiega perché anche una sostanza che attraversa efficacemente la mucosa possa avere una disponibilità sistemica limitata. «Non assorbito» e «assorbito ma eliminato prima dell'arrivo sistemico» non sono quindi sinonimi.\n\nLa distinzione riguarda anche ciò che si misura: la scomparsa del composto originario non significa necessariamente scomparsa di ogni attività biologica, perché possono formarsi metaboliti con proprietà proprie. Qui F e le curve riguardano il composto originario, salvo indicazione diversa. Se F cambia, può cambiare l'esposizione sistemica; ciò non permette però di dedurre automaticamente la distribuzione, la clearance o la velocità dell'effetto.",
        "refs": [
          "K-F",
          "R-DIST"
        ]
      },
      {
        "id": "pk-04",
        "title": "Velocità ed entità dell'ingresso: Cmax e Tmax non sostituiscono F",
        "text": "Una curva concentrazione-tempo contiene informazioni diverse. Cmax indica il picco osservato; Tmax il tempo al quale quel picco viene raggiunto. Dopo una somministrazione extravascolare, la salita della curva riflette il risultato dell'ingresso e dei processi che nel frattempo sottraggono farmaco al plasma. Il picco non è semplicemente il momento in cui il farmaco «inizia a funzionare» e non prova, da solo, che ogni processo di assorbimento sia terminato.\n\nNel modello lineare, rallentare l'ingresso mantenendo uguali la quantità che arriva nel circolo e la clearance può rendere il picco più basso e più tardivo senza ridurre l'esposizione totale. Una formulazione a rilascio prolungato modifica dunque il profilo temporale; non significa necessariamente che «si assorba meno». Al contrario, una minore quantità biodisponibile può ridurre l'esposizione anche se l'ingresso della quota disponibile è rapido.\n\nQuesta separazione impedisce un errore frequente: giudicare equivalenti due andamenti soltanto perché hanno un picco simile, oppure giudicarli diversi nell'esposizione soltanto perché i picchi differiscono. La forma della curva e la sua area rispondono a domande complementari. Per comprendere quest'ultima dobbiamo considerare la concentrazione lungo tutto il tempo di osservazione.",
        "refs": [
          "K-F",
          "R-BASE",
          "R-ABS"
        ]
      },
      {
        "id": "pk-05",
        "title": "AUC: integrare l'esposizione senza confonderla con una quantità",
        "text": "L'area sotto la curva concentrazione-tempo, AUC, riassume l'esposizione plasmatica nel periodo considerato. Se la concentrazione è espressa in quantità per volume, la sua area ha unità di quantità per volume moltiplicate per tempo. Non è quindi una quantità di farmaco e non è una percentuale. Inoltre AUC osservata fino a un certo istante e AUC estesa fino all'eliminazione completa rappresentano intervalli differenti.\n\nCon eliminazione lineare e clearance costante, dopo una somministrazione endovenosa l'AUC completa è la quantità introdotta divisa per la clearance. Per una via extravascolare la quantità che entra sistemicamente è F moltiplicata per D: il numeratore va corretto di conseguenza. Queste relazioni non richiedono di identificare ogni organo con un compartimento separato, ma richiedono che le ipotesi sull'eliminazione siano rispettate.\n\nConfrontare aree ottenute con quantità somministrate differenti richiede di normalizzarle per quelle quantità. Se la clearance è comparabile tra le condizioni, il rapporto delle aree normalizzate rispetto alla via endovenosa permette di ricavare F. Una variazione di AUC può però riflettere una variazione dell'ingresso oppure dell'eliminazione. Da una sola area non si distingue quale processo sia cambiato, e la proporzionalità non va estesa senza verifica alla cinetica saturabile.",
        "refs": [
          "R-AUC",
          "R-ABS",
          "K-F"
        ],
        "formula": "AUC(0,infinito) = integrale di Cp(t) rispetto a t, da 0 a infinito. In cinetica lineare con CL costante: AUC_EV = D_EV / CL; AUC_nonEV = F * D_nonEV / CL."
      },
      {
        "id": "pk-06",
        "title": "Distribuzione e frazione libera: il plasma è una finestra, non tutto l'organismo",
        "text": "Dopo l'ingresso nel circolo, le molecole si ripartiscono tra plasma, liquidi extracellulari, cellule e altri spazi. La distribuzione dipende dalla perfusione dei tessuti, dalla permeabilità delle barriere e dalle interazioni con proteine e componenti tissutali. Per molti farmaci a piccola molecola è la quota non legata alle proteine plasmatiche a essere immediatamente disponibile per attraversare le barriere e raggiungere i bersagli. Il legame proteico è un equilibrio dinamico, non un deposito definitivamente inattivo.\n\nLa concentrazione plasmatica totale comprende quota libera e quota legata. La frazione libera è il rapporto tra concentrazione libera e totale nella stessa matrice. Se cambia il legame, lo stesso valore totale può corrispondere a una concentrazione libera differente. Al tempo stesso, da uno spiazzamento proteico non segue automaticamente una tossicità persistente: distribuzione ed eliminazione possono modificarsi mentre il sistema si riassesta. Una misura isolata non racconta l'intera dinamica.\n\nUn'ulteriore distinzione riguarda il luogo del bersaglio. Una barriera selettiva può separarlo dal plasma; inoltre nei diversi tessuti il farmaco può equilibrarsi con velocità diverse. Perciò una concentrazione plasmatica non va trattata come la concentrazione uniforme di tutto il corpo. Il volume apparente di distribuzione serve proprio a collegare la quantità complessiva a questa misura parziale.",
        "refs": [
          "R-PROT",
          "R-DIST",
          "K-VAR"
        ]
      },
      {
        "id": "pk-07",
        "title": "Volume apparente di distribuzione: un rapporto, non un serbatoio anatomico",
        "text": "Il volume apparente di distribuzione Vd mette in relazione la quantità del composto nell'organismo con la sua concentrazione plasmatica. Se molta sostanza è presente nei tessuti mentre nel plasma se ne misura poca, il rapporto può essere molto grande, anche maggiore dei volumi fisici corporei. Non è comparso uno spazio anatomico aggiuntivo: è la distribuzione non uniforme a produrre un grande volume apparente.\n\nQuesto parametro dipende dalla concentrazione scelta al denominatore. Un volume definito rispetto alla concentrazione plasmatica totale non si può combinare senza controllo con una concentrazione libera o ematica. Il legame ai tessuti tende a sottrarre farmaco al plasma; quello alle proteine plasmatiche contribuisce invece a trattenerlo nel compartimento vascolare. Alterazioni della composizione corporea o dei liquidi possono quindi modificare il valore apparente.\n\nNel modello a un compartimento, una quantità introdotta istantaneamente produce una concentrazione iniziale pari alla quantità divisa per Vd. Nell'organismo reale la distribuzione non è istantanea: un prelievo molto precoce può rappresentare soprattutto il compartimento centrale. Un Vd calcolato per una particolare fase non è necessariamente adatto a ogni istante della curva. Questa cautela sarà essenziale quando distingueremo il carico dal mantenimento.",
        "refs": [
          "K-VD",
          "K-VAR",
          "R-FIRST"
        ],
        "formula": "Vd = A / Cp. A = quantità nell'organismo; Cp = concentrazione plasmatica coerente con la definizione usata per Vd. Unità: quantità / (quantità/volume) = volume."
      },
      {
        "id": "pk-08",
        "title": "Metabolismo ed escrezione: due modi diversi di perdere il composto originario",
        "text": "L'eliminazione comprende la trasformazione chimica del farmaco e la sua escrezione. Il metabolismo cambia l'identità della molecola; l'escrezione allontana dall'organismo il composto o i suoi metaboliti. Una trasformazione può favorire l'escrezione, ma non ogni molecola deve essere prima metabolizzata per essere eliminata. Né è corretto tradurre sempre «metabolizzato» con «privo di attività»: la farmacocinetica del composto originario e quella dei prodotti possono essere differenti.\n\nIl rene combina filtrazione glomerulare, secrezione tubulare e riassorbimento. Il legame proteico limita la quota immediatamente filtrabile; i trasportatori possono contribuire alla secrezione e la permeabilità del tubulo influisce sul ritorno della sostanza al sangue. Il destino renale non si deduce quindi dalla sola filtrazione.\n\nAnche il passaggio nella bile non coincide sempre con un allontanamento definitivo. Una sostanza immessa nell'intestino può essere nuovamente assorbita, realizzando un ricircolo enteroepatico. Questi percorsi spiegano perché una curva reale possa discostarsi da una discesa semplice. Per sintetizzare la capacità complessiva di eliminazione, senza confonderla con la quantità eliminata in un dato momento, introduciamo la clearance.",
        "refs": [
          "R-ELIM",
          "K-CL"
        ]
      },
      {
        "id": "pk-09",
        "title": "Clearance: capacità di eliminazione e velocità effettiva non sono la stessa cosa",
        "text": "La clearance CL esprime il rapporto tra velocità di eliminazione e concentrazione di riferimento. Ha le dimensioni di un volume per tempo: rappresenta un volume equivalente depurato dalla sostanza, non il volume di urina prodotto e non una quantità eliminata per ora. Quest'ultima è la velocità di eliminazione e si ottiene moltiplicando la clearance per la concentrazione.\n\nSe CL rimane costante, una concentrazione maggiore comporta una maggiore quantità eliminata per unità di tempo. Il sistema può avere la stessa capacità di eliminazione in due momenti, pur eliminando quantità differenti perché differisce la concentrazione disponibile. Confondere clearance e velocità porta a descrivere erroneamente come «rallentamento del rene» ogni riduzione della quantità escreta durante la discesa della curva.\n\nI contributi delle diverse vie possono essere sommati quando sono espressi rispetto alla stessa concentrazione e con definizioni compatibili. La componente epatica dipende, secondo il farmaco e il contesto, dal flusso che porta la sostanza all'organo e dalla capacità di estrarla o trasformarla. Una variazione del legame proteico può inoltre modificare l'interpretazione di una clearance calcolata sulla concentrazione totale. Stabilire che un valore sia costante è dunque un'ipotesi del modello da confrontare con i dati.",
        "refs": [
          "K-CL",
          "R-CL"
        ],
        "formula": "CL = R_elim / Cp; quindi R_elim = CL * Cp. R_elim è una quantità/tempo; CL è un volume/tempo. Le concentrazioni di riferimento devono essere coerenti."
      },
      {
        "id": "pk-10",
        "title": "Eliminazione di primo ordine: una frazione costante produce una discesa esponenziale",
        "text": "In una descrizione di primo ordine, la velocità di eliminazione è proporzionale alla concentrazione. Se il farmaco è rappresentabile con un unico compartimento ben miscelato, con volume e clearance costanti e senza nuovo ingresso, la concentrazione diminuisce esponenzialmente. In intervalli uguali viene eliminata la stessa frazione di ciò che rimane, non la stessa quantità assoluta.\n\nLa costante k collega questa discesa al rapporto tra clearance e volume. Una grande clearance rispetto al volume corrisponde a una diminuzione più rapida; un volume maggiore, a parità di clearance, distribuisce la quantità in uno spazio apparente più ampio e rallenta il declino della concentrazione. Le unità forniscono un controllo immediato: volume per tempo diviso volume dà l'inverso di un tempo.\n\nUn andamento esponenziale appare curvo quando la concentrazione è in scala lineare e rettilineo quando il suo logaritmo è riportato contro il tempo. Cambiare asse non cambia il processo. Una linea retta semilogaritmica può aiutare a riconoscere una fase, ma non dimostra da sola che l'intero organismo sia un unico compartimento: una curva più complessa può avere una fase terminale approssimativamente lineare.",
        "refs": [
          "K-CL",
          "R-FIRST"
        ],
        "formula": "Modello monocompartimentale senza nuovo ingresso: k = CL / Vd; Cp(t) = Cp(0) * exp(-k * t). k ha unità tempo^-1; il prodotto k*t è adimensionale."
      },
      {
        "id": "pk-11",
        "title": "Emivita: il risultato congiunto di volume e clearance",
        "text": "L'emivita è il tempo necessario perché la concentrazione si dimezzi nella fase e nelle condizioni considerate. Nel modello appena costruito non dipende dalla concentrazione iniziale: dopo una emivita rimane metà, dopo due un quarto e dopo tre un ottavo. Il decadimento si avvicina progressivamente a zero; non esiste un istante matematico in cui l'ultima molecola debba scomparire.\n\nPoiché l'emivita dipende sia da Vd sia da CL, una sua variazione non identifica da sola il meccanismo. Può aumentare perché diminuisce la clearance, perché aumenta il volume apparente o per una combinazione di cambiamenti. Analogamente, modifiche opposte dei due parametri possono compensarsi. Interpretare una lunga emivita come prova automatica di ridotta funzionalità renale sarebbe quindi scorretto.\n\nÈ inoltre necessario distinguere l'emivita di una fase plasmatica dalla durata dell'effetto. Il raggiungimento dei bersagli può essere ritardato rispetto al plasma e la risposta può persistere per processi biologici successivi. Nei modelli con più compartimenti anche la fase terminale riflette scambi tra compartimenti: la semplice formula con un volume scelto arbitrariamente non basta. Prima di usare un'emivita occorre domandarsi da quale fase della curva sia stata ricavata.",
        "refs": [
          "K-HALF",
          "K-VAR",
          "K-DELAY",
          "R-FIRST"
        ],
        "formula": "Nel modello monocompartimentale lineare: t_half = ln(2) / k = ln(2) * Vd / CL; ln(2) ≈ 0,693. Dopo n emivite senza ingresso, Cp/Cp(0) = (1/2)^n."
      },
      {
        "id": "pk-12",
        "title": "Saturazione: quando raddoppiare l'ingresso non raddoppia semplicemente la concentrazione",
        "text": "Le relazioni lineari valgono soltanto nel perimetro in cui i parametri possono essere considerati costanti. Un enzima o un trasportatore ha una capacità limitata: aumentando la concentrazione, la velocità di un processo saturabile si avvicina a un massimo. Nella rappresentazione di Michaelis-Menten, Km indica la concentrazione alla quale quella via raggiunge metà della sua velocità massima.\n\nQuando la concentrazione è molto inferiore a Km, la relazione è approssimativamente proporzionale alla concentrazione. Quando è molto maggiore, la velocità si avvicina a Vmax e cambia poco nonostante ulteriori aumenti. In quest'ultima regione si parla di comportamento approssimativamente di ordine zero: viene rimossa una quantità quasi costante per tempo. Non significa che l'intero decorso del farmaco debba seguire sempre lo stesso ordine.\n\nSe l'ingresso cresce vicino al limite di capacità, piccoli cambiamenti possono produrre aumenti sproporzionati dell'esposizione. La clearance effettiva non rimane costante e non si può usare indiscriminatamente una sola emivita. Nel modello ideale con un'unica via saturabile, un ingresso superiore alla capacità massima non permette uno stato stazionario finito. Nell'organismo possono contribuire altre vie: anche questa previsione va letta come proprietà di un modello dichiarato.",
        "refs": [
          "K-CL",
          "R-SAT"
        ],
        "formula": "Esempio di singola via saturabile: R_elim = Vmax * Cp / (Km + Cp). Vmax è quantità/tempo; Km e Cp sono concentrazioni. Questo schema non descrive necessariamente tutte le vie di eliminazione insieme."
      },
      {
        "id": "pk-13",
        "title": "Infusione e stato stazionario: concentrazione stabile con scambio continuo",
        "text": "Se l'ingresso nel circolo continua a velocità costante, all'inizio l'eliminazione è piccola perché la concentrazione è bassa. La quantità nell'organismo aumenta, la concentrazione sale e cresce anche l'eliminazione. Con clearance costante il sistema si avvicina al punto in cui ingresso e uscita si bilanciano: lo stato stazionario, o steady state. Le molecole continuano a entrare e uscire; «stazionario» non significa assenza di movimento.\n\nIl livello finale dipende dal rapporto tra velocità d'ingresso sistemico e clearance. Nel modello monocompartimentale, il tempo relativo di avvicinamento dipende invece da k e quindi dall'emivita. Dopo una emivita si raggiunge metà della distanza tra il valore iniziale e quello finale; partendo da zero, dopo due si raggiunge il 75% del plateau. Dopo quattro e cinque emivite i valori teorici sono circa il 94% e il 97%.\n\nIl plateau esatto è un limite asintotico: «quattro o cinque emivite» è una convenzione pratica di vicinanza, non una soglia universale né il tempo obbligato dell'effetto massimo. Aumentare l'ingresso aumenta il plateau nel modello lineare, ma non accorcia il tempo necessario a raggiungerne la stessa percentuale. Questa distinzione prepara la lettura delle somministrazioni ripetute.",
        "refs": [
          "R-CL",
          "K-HALF",
          "R-FIRST"
        ],
        "formula": "Per ingresso sistemico costante Rin e CL costante: Css = Rin / CL. Nel modello monocompartimentale, partendo da zero: Cp(t) = Css * (1 - exp(-k * t))."
      },
      {
        "id": "pk-14",
        "title": "Somministrazioni ripetute: accumulo, picchi e valli",
        "text": "Quando un nuovo ingresso si aggiunge a sostanza ancora presente, si verifica accumulo. Nel sistema lineare le risposte ai singoli ingressi possono sovrapporsi: ogni contributo continua a diminuire mentre arrivano quelli successivi. L'accumulo non implica una crescita illimitata; con ingresso ripetibile e capacità di eliminazione stabile si raggiunge un andamento periodico in cui ogni intervallo assomiglia al precedente.\n\nA differenza dell'infusione, durante uno steady state periodico la concentrazione non deve essere piatta. Si alternano picchi e valli. La quantità eliminata nell'intero intervallo bilancia quella che entra sistemicamente nello stesso intervallo, anche se ingresso e uscita non coincidono in ogni istante. La concentrazione media riassume questo bilancio, ma può nascondere oscillazioni importanti.\n\nA parità di quantità media biodisponibile per tempo e di clearance, distribuire l'ingresso in porzioni più piccole e frequenti tende a ridurre le oscillazioni nel modello semplice. Anche un assorbimento più lento può attenuarle. Non segue che ogni formulazione produca lo stesso picco, né che cambiare frequenza lasci invariata la media se cambia anche la quantità totale per tempo. La relazione tra intervallo ed emivita aiuta a comprendere quanto residuo sia presente quando avviene l'ingresso successivo.",
        "refs": [
          "K-ACC",
          "K-MAINT",
          "R-REPEAT",
          "R-ABS"
        ],
        "formula": "Con F e CL costanti e cinetica lineare: Cmedia_ss = F * D / (CL * tau). D è la quantità per somministrazione; tau è l'intervallo. La media non è il picco né il minimo."
      },
      {
        "id": "pk-15",
        "title": "Carico e mantenimento: costruire una quantità, poi sostituire ciò che viene perso",
        "text": "Il carico e il mantenimento rispondono a problemi differenti. Il primo riguarda la quantità da portare nell'organismo per avvicinarsi a una concentrazione scelta; il secondo riguarda la quantità per tempo necessaria a compensare l'eliminazione. Nel modello più semplice il volume collega quantità e concentrazione, mentre la clearance collega concentrazione e velocità di eliminazione. Le dimensioni distinguono già i due ragionamenti.\n\nUna quantità di carico può avvicinare prima il sistema a un livello desiderato, ma non cambia la clearance o l'emivita e non sostituisce il bilancio degli ingressi successivi. Se nel corpo è già presente sostanza, il quantitativo necessario per una variazione non coincide con quello richiesto partendo da zero. Inoltre una distribuzione lenta può rendere transitoriamente elevata la concentrazione nel compartimento centrale, anche se il calcolo basato sul volume finale appare coerente.\n\nNel mantenimento, per passare dall'ingresso sistemico alla quantità nominalmente somministrata occorre considerare F. Con somministrazioni ripetute la concentrazione di riferimento può essere una media, non il picco. Le formule non stabiliscono quale concentrazione scegliere, come somministrare la sostanza o quale risultato clinico attendersi: mostrano soltanto come volume, clearance, biodisponibilità e intervallo entrano in due problemi dimensionalmente distinti.",
        "refs": [
          "K-VD",
          "K-MAINT",
          "R-REPEAT"
        ],
        "formula": "Relazioni ideali, non prescrittive: A_target = Vd * C_target; Rin_mantenimento = CL * C_target. Se F è nota e stabile: Rnominale = Rin_mantenimento / F; D_mantenimento = Rnominale * tau."
      },
      {
        "id": "pk-16",
        "title": "Modelli, variabilità e interpretazione: sapere quando fermare la semplificazione",
        "text": "Un compartimento farmacocinetico è una rappresentazione matematica di uno spazio che si comporta come sufficientemente omogeneo, non necessariamente un organo anatomico. Se la distribuzione è lenta rispetto all'osservazione, una curva può richiedere almeno un compartimento centrale e uno periferico. La discesa iniziale può riflettere soprattutto redistribuzione, mentre quella successiva comprende l'interazione tra eliminazione e ritorno dai tessuti. Interpretare tutta la discesa come farmaco già uscito dall'organismo confonde distribuzione ed eliminazione.\n\nLa scelta del modello dipende dalla domanda e dai dati disponibili. Aggiungere parametri senza campioni che permettano di stimarli non garantisce una spiegazione migliore. Anche il momento del prelievo conta: un campione durante l'assorbimento, uno durante la distribuzione e uno prima di un nuovo ingresso non sono intercambiabili. La concentrazione plasmatica va inoltre collegata con cautela a quella vicino al bersaglio e ai tempi della risposta.\n\nLe persone differiscono per maturazione degli organi, composizione corporea, disponibilità di proteine leganti e funzione renale, epatica o circolatoria. Edema e variazioni dei liquidi possono modificare la distribuzione; variazioni della capacità di eliminazione possono alterare la clearance. Non basta quindi moltiplicare tutti i parametri dell'adulto per il peso di un bambino, né attribuire a ogni anziano la stessa modifica. La farmacocinetica di popolazione descrive questa variabilità, ma non cancella la necessità di dati individuali pertinenti.\n\nQuesto capitolo costruisce un linguaggio per leggere curve e modelli. Non sviluppa algoritmi per gravidanza, dialisi, insufficienze d'organo o medicinali specifici: tali applicazioni richiedono fonti dedicate e aggiornate. Ogni futura simulazione dovrà rendere visibili ingresso, matrice misurata, parametri, compartimenti e ipotesi, così che l'animazione mostri il ragionamento e i suoi limiti.",
        "refs": [
          "K-VAR",
          "K-DELAY",
          "R-MULTI",
          "R-LIMIT"
        ]
      }
    ],
    "references": [
      {
        "id": "K-BASE",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF60–63: dose/concentrazione/effetto e parametri. Le tabelle PDF61–62 non sono validate o riutilizzate come dati clinici."
      },
      {
        "id": "K-VD",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF63, stampata43 verificata visivamente: volume apparente, formula1 e figura3-2; nessuna figura copiata."
      },
      {
        "id": "K-CL",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF64–65, stampate44–45 viste: clearance, additività con concentrazioni coerenti, primo ordine, saturazione e flusso; formule2–5."
      },
      {
        "id": "K-HALF",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF65, stampata45 vista: emivita, formula6, accumulo e figura3-3. Non trasferita l’equivalenza storica tra avvicinamento al plateau e massimo effetto."
      },
      {
        "id": "K-ACC",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF65–66, stampate45–46 viste: accumulo e fattore7. Nessuna estensione universale della formula monocompartimentale."
      },
      {
        "id": "K-F",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF66–69: biodisponibilità, primo passaggio, velocità e vie. Stampate46–47 di PDF66–67 viste;48–49 da intestazioni estratte. Formule8a–8b controllate ma non importate; escluse istruzioni procedurali e dosi degli esempi."
      },
      {
        "id": "K-DELAY",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF70–71, stampate50–51 da intestazioni estratte: effetti immediati, ritardati e cumulativi; nessuna raccomandazione clinica ricavata dagli esempi."
      },
      {
        "id": "K-MAINT",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF71–73: mantenimento, F e carico. PDF72–73, stampate52–53, formule9–12 controllate visivamente. Nessuna dose o concentrazione terapeutica di un medicinale reale trasferita."
      },
      {
        "id": "K-VAR",
        "title": "Katzung, Masters, Trevor - Farmacologia generale e clinica, IX ed. italiana Piccin2014 sulla XII americana2012, cap.3 (N.H.G. Holford)",
        "detail": "PDF74–75, stampate54–55 da intestazioni estratte: volume, funzione d’organo, emivita e legame proteico. Non trasferite generalizzazioni cliniche storiche."
      },
      {
        "id": "R-BASE",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF204–205: parametri, Cmax/Tmax e modello. Pagine stampate non verificate nel file reimpaginato."
      },
      {
        "id": "R-BARR",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.8, PDF166–167: ADME, trasferimenti e barriere. Testo letto; figure non utilizzate per ricavare misure. Pagine stampate non verificate."
      },
      {
        "id": "R-PROT",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.8, PDF174–176: legame proteico, quota libera, saturazione e limiti delle inferenze da spiazzamento. Pagine stampate non verificate."
      },
      {
        "id": "R-DIST",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.8, PDF183–184: assorbimento/F, compartimenti e barriere della distribuzione. Usati solo principi generali; nessuna terapia storica trasferita. Pagine stampate non verificate."
      },
      {
        "id": "R-ELIM",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.9, PDF190 e199–201: metabolismo/escrezione, ricircolo enteroepatico, filtrazione, secrezione, riassorbimento. Tabelle di farmaci e raccomandazioni non importate. Pagine stampate non verificate."
      },
      {
        "id": "R-CL",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF206: CLtot e bilancio all’infusione; formule10.1–10.3 viste. Pagine stampate non verificate."
      },
      {
        "id": "R-AUC",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF207: CL=Q/AUC dopo bolo EV, formula10.4 vista; PDF216 nota4: definizione e unità AUC. Relazione extravascolare derivata editorialmente usando F. Pagine stampate non verificate."
      },
      {
        "id": "R-FIRST",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF207–209: compartimento unico, C0, esponenziale e CL/Vd; formule10.5–10.7 viste. La scrittura ambigua ln(2/kel) in PDF209 non è riprodotta: usata ln(2)/kel, coerente con0.693/kel e KatzungPDF65. Pagine stampate non verificate."
      },
      {
        "id": "R-REPEAT",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF209–210: avvicinamento al plateau e ingressi ripetuti, confrontati a quantità media per tempo invariata. Dati di farmaci delle figure non importati. Pagine stampate non verificate."
      },
      {
        "id": "R-ABS",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF210–211: velocità d’assorbimento, picco e area; PDF211 anche vista. Pagine stampate non verificate."
      },
      {
        "id": "R-MULTI",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF211–212: limiti del compartimento unico e secondo compartimento; nessuna stima ricavata dalle figure. Pagine stampate non verificate."
      },
      {
        "id": "R-SAT",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF213–214: saturazione, perdita di proporzionalità, capacità e vie ulteriori. Pagine stampate non verificate."
      },
      {
        "id": "R-LIMIT",
        "title": "Rang & Dale - Farmacologia, 8ª ed. italiana Edra2016, originale2015",
        "detail": "Cap.10, PDF214–216: popolazione, campioni sparsi, plasma/bersaglio/risposta e bibliografia. Le opere secondarie elencate non sono state aperte. Pagine stampate non verificate."
      }
    ],
    "checks": [
      {
        "question": "Due formulazioni forniscono la stessa quantità sistemica, ma una entra più lentamente. Un picco più basso dimostra minore biodisponibilità?",
        "answer": "No. Nel modello lineare, con quantità sistemica e clearance uguali, un ingresso lento può ridurre Cmax e ritardare Tmax senza modificare l’AUC. Per concludere su F servono esposizione normalizzata e clearance comparabile."
      },
      {
        "question": "A quantità somministrata invariata, l’AUC raddoppia. Possiamo concludere che sia raddoppiato l’assorbimento?",
        "answer": "Non senza altri dati: AUC=F*D/CL può aumentare per variazione di F o CL. Dopo ingresso endovenoso, con F=1 e D invariata, un’AUC doppia corrisponde a CL dimezzata se l’eliminazione rimane lineare."
      },
      {
        "question": "Un Vd maggiore del volume fisico corporeo dimostra che il modello è errato?",
        "answer": "Non necessariamente. Una bassa concentrazione plasmatica rispetto alla quantità presente nei tessuti può produrre un grande volume apparente. Vanno comunque controllati matrice, fase di campionamento e modello."
      },
      {
        "question": "La concentrazione totale diminuisce dopo un cambiamento del legame proteico. È provato che diminuisca anche quella libera al bersaglio?",
        "answer": "No. Frazione libera, distribuzione ed eliminazione possono cambiare insieme. Una misura totale non sostituisce la quota libera e non dimostra automaticamente perdita di efficacia o tossicità; conta anche il tempo del riassestamento."
      },
      {
        "question": "Nel modello monocompartimentale Vd raddoppia e CL resta uguale. Che cosa accade a emivita e plateau di un’infusione invariata?",
        "answer": "L’emivita raddoppia perché t_half=ln(2)*Vd/CL; Css=Rin/CL rimane invariata. Aumenta il tempo per raggiungere la stessa percentuale del plateau. Il confronto assume parametri costanti e medesimo ingresso sistemico."
      },
      {
        "question": "Dopo quattro emivite di infusione partendo da zero è raggiunto esattamente lo steady state?",
        "answer": "No: nel modello semplice si raggiunge 1−(1/2)^4=15/16, cioè 93,75%. Una vicinanza pratica non è uguaglianza matematica e non dimostra il raggiungimento dell’effetto clinico massimo."
      },
      {
        "question": "Lo steady state con somministrazioni ripetute richiede una concentrazione perfettamente piatta?",
        "answer": "No. Può essere un profilo periodico con picchi e valli riproducibili. Il bilancio è sull’intero intervallo: quantità sistemica entrata ed eliminata si compensano, mentre la media può nascondere oscillazioni diverse."
      },
      {
        "question": "Perché il carico non risolve il mantenimento, e perché la saturazione modifica il ragionamento?",
        "answer": "Il carico riguarda una quantità collegata a Vd; il mantenimento una velocità collegata a CL e F. Un ingresso iniziale non sostituisce la sostanza eliminata in seguito. Nella saturazione CL non è costante e la semplice proporzione tra ingresso e concentrazione non è generale."
      }
    ],
    "coverage": "Temi sviluppati: ADME e PK/PD, assorbimento e vie, F/primo passaggio, Cmax/Tmax e velocità, AUC in cinetica lineare, distribuzione e frazione libera, Vd apparente e matrice, metabolismo/escrezione/ricircolo, CL e velocità, primo ordine, t1/2, saturazione, infusione/plateau asintotico, ripetizione/accumulo/profilo periodico, carico/mantenimento concettuali, modelli, campioni, variabilità. Letture mirate documentate nel registro; questo capitolo non esaurisce il relativo ambito né la teoria dell’intera farmacologia.",
    "editorialReview": {
      "outcome": "pass",
      "path": "./data/modelli-pk-review.json",
      "sourceChapterSha256": "33db05cd7e00271481d37fe10ff63ac5df727af159a1d1817d63df4142814ab9",
      "scope": "Revisione editoriale mirata; non validazione clinica specialistica"
    },
    "coverageDetail": {
      "scope": "Fondamenti discorsivi PK e modelli; sostituzione proposta per ID esistente. Collegamenti relativi soltanto proposti.",
      "mainTextWordCount": 3081,
      "countingRule": "Lead e testo delle sezioni; esclusi titoli, formule, domande e riferimenti.",
      "sectionCount": 16,
      "reasonedQuestionCount": 8,
      "includedTopics": [
        "ADME e PK/PD",
        "assorbimento e vie",
        "F/primo passaggio",
        "Cmax/Tmax e velocità",
        "AUC in cinetica lineare",
        "distribuzione e frazione libera",
        "Vd apparente e matrice",
        "metabolismo/escrezione/ricircolo",
        "CL e velocità",
        "primo ordine",
        "t1/2",
        "saturazione",
        "infusione/plateau asintotico",
        "ripetizione/accumulo/profilo periodico",
        "carico/mantenimento concettuali",
        "modelli, campioni, variabilità"
      ],
      "outOfScopeAndGaps": [
        "Nessuna posologia, concentrazione terapeutica o parametro di un medicinale reale proposto.",
        "Nessuna linea guida corrente o fonte regolatoria integrata.",
        "Nessun algoritmo per gravidanza, dialisi, insufficienze d’organo o pediatria: variabilità trattata solo nei principi.",
        "Non sviluppati PBPK, stima statistica NONMEM, formule multicompartmentali complete o flip-flop dell’assorbimento.",
        "Molecolare2012 non usato in questo capitolo; nessuna nuova lettura attribuita.",
        "Nessuna figura copiata o nuova figura/animazione dichiarata implementata."
      ],
      "authorChecks": [
        "Riferimenti granulari per ogni sezione.",
        "Formule principali viste; derivazioni editoriali distinte.",
        "Revisione indipendente ancora da ricevere."
      ],
      "clinicalValidation": false,
      "published": false,
      "integrationStatus": "proposta_da_integrare_dall_integratore; checkout_non_modificati"
    },
    "authorReviewStatus": "bozza_fontata_da_revisionare",
    "readingManifest": "./data/modelli-pk-reading.json",
    "wordCount": 3011
  },
  {
    "id": "gpcr",
    "volume": 4,
    "existingChapterId": "gpcr",
    "relatedExistingChapterIds": [
      "canali-ionici",
      "tirosinchinasi",
      "recettori-e-legame"
    ],
    "title": "Famiglie recettoriali e segnalazione",
    "lead": "Un recettore cambia il comportamento della cellula attraverso proteine, lipidi, ioni e regolatori dell’espressione genica. Questo capitolo collega le principali architetture recettoriali a circuiti fondamentali di trasduzione, dai canali ionotropici alle proteine G, dalle chinasi ai recettori nucleari. Il percorso amplia il capitolo GPCR esistente e si collega ai capitoli su canali, tirosin-chinasi e legame. Non ripete il trattamento quantitativo di affinità o antagonismo e rinvia la desensibilizzazione al capitolo dedicato. Le edizioni librarie servono come fonti dei meccanismi, senza trasferirne indicazioni terapeutiche storiche.",
    "format": "extended",
    "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
    "createdOn": "2026-10-25",
    "wordCount": 2866,
    "wordCountScope": "lead e testo delle sezioni; esclusi titoli, domande e bibliografia",
    "sections": [
      {
        "id": "segnale-risposta",
        "title": "1. Il segnale viene interpretato dalla cellula",
        "text": "Il riconoscimento di un mediatore è soltanto l’inizio della comunicazione cellulare. Per comprendere un recettore occorre seguire che cosa cambia dopo il legame: l’apertura di un poro, l’attivazione di un enzima, l’assemblaggio di un complesso o la regolazione della trascrizione. Questi eventi traducono un incontro molecolare in una variazione della funzione cellulare. La trasduzione del segnale è proprio questo collegamento, e non coincide con la sola presenza di un ligando sul suo bersaglio.\n\nConviene distinguere il recettore, che riconosce il mediatore, dal trasduttore che trasferisce l’informazione e dall’effettore che genera un cambiamento misurabile. In una via GPCR, per esempio, la proteina G è un trasduttore e l’adenilato ciclasi è un effettore iniziale; il cAMP prodotto può poi regolare altre proteine. La parola effettore dipende quindi dal livello osservato: un enzima può essere l’uscita di un passaggio e l’ingresso del successivo.\n\nLa cellula non riceve questi messaggi separatamente. Può integrare segnali contemporanei, cambiare l’attività di proteine già presenti e modificare l’espressione di nuovi geni. Leggere una via significa ricostruire una sequenza causale dentro un sistema, mantenendo distinta l’interazione iniziale dalla risposta finale.",
        "refs": [
          "R-arch",
          "M-integrazione"
        ]
      },
      {
        "id": "architetture",
        "title": "2. Le famiglie recettoriali offrono soluzioni diverse",
        "text": "L’architettura del recettore aiuta a prevedere la prima tappa del segnale. Nei recettori ionotropici, riconoscimento del ligando e poro ionico appartengono allo stesso complesso. Nei GPCR, una proteina con sette segmenti transmembrana comunica con proteine G sul versante citoplasmatico. Nei recettori ad attività chinasica, il dominio intracellulare possiede una funzione enzimatica; altri recettori di membrana, come quelli di alcune famiglie citochiniche, dipendono invece da chinasi associate. I recettori nucleari regolano programmi trascrizionali attraverso interazioni con DNA e proteine della cromatina.\n\nÈ una classificazione operativa, non una lista di compartimenti isolati. Un GPCR può contribuire a una risposta trascrizionale; un recettore per un fattore di crescita può modificare rapidamente enzimi citoplasmatici. La sede del recettore e la sede dell’esito non devono coincidere. Anche la velocità della risposta dipende dai passaggi necessari, non soltanto dal nome della famiglia.\n\nInfine, bersaglio farmacologico e recettore non sono sinonimi. Un enzima, un trasportatore o una proteina strutturale può essere modulato senza ricevere il ruolo di recettore per un mediatore. Non bisogna inventare una cascata recettoriale per descrivere ogni farmaco: a volte il cambiamento iniziale è un trasporto bloccato o una reazione enzimatica modificata.",
        "refs": [
          "R-arch",
          "R-famiglie"
        ]
      },
      {
        "id": "ionotropici",
        "title": "3. I recettori-canale trasformano il legame in corrente",
        "text": "Un recettore ionotropico comprende un poro selettivo e un meccanismo di apertura regolato dal ligando. Quando il complesso cambia conformazione, aumenta o diminuisce la probabilità che il canale sia aperto. Gli ioni attraversano il poro secondo le condizioni elettrochimiche della membrana. Non vengono creati dal recettore e non sono pompati automaticamente contro gradiente. Per interpretare la corrente occorre conoscere quali ioni passano, il potenziale di membrana e i gradienti presenti.\n\nLa struttura varia fra famiglie: i recettori della famiglia cys-loop sono pentamerici, quelli ionotropici del glutammato sono tetramerici e i P2X sono trimerici. Perciò un unico disegno con una sola molecola di ligando e un solo sito non descrive tutti i recettori-canale. Cambiano subunità, siti di riconoscimento, selettività e regole di apertura.\n\nL’accoppiamento diretto permette risposte sinaptiche rapide senza una necessaria cascata di secondi messaggeri fra il ligando e il poro. Questo non esclude regolazioni aggiuntive. La stessa proteina può essere modulata da altri siti, da modificazioni intracellulari o dalla composizione delle subunità. Occorre inoltre distinguere il legame che controlla l’apertura da un blocco del poro: entrambi possono cambiare la corrente, ma intervengono in punti diversi del meccanismo.",
        "refs": [
          "R-ionotropici",
          "R-arch"
        ]
      },
      {
        "id": "ciclo-gpcr",
        "title": "4. Il ciclo GDP-GTP delle proteine G",
        "text": "Il GPCR attraversa la membrana con sette eliche, ma non è un canale aperto fra esterno e citoplasma. La sua conformazione permette di controllare una proteina G eterotrimerica, composta da Gα e dal complesso Gβγ. Nella descrizione canonica dello stato di riposo, Gα lega GDP. Il recettore attivato favorisce il rilascio del GDP e il legame del GTP disponibile nella cellula: uno scambio di nucleotide, non la fosforilazione del GDP da parte del recettore.\n\nIl passaggio a Gα-GTP modifica le interazioni fra i componenti. Gα e Gβγ possono così regolare specifici effettori. Nello schema classico sono raffigurati separati; il punto funzionale essenziale è che entrambi possono trasferire informazione e che Gβγ non è un semplice supporto inerte. Non si deve confondere questa proteina G a tre subunità con le piccole GTPasi monomeriche, come Ras, incontrate più avanti.\n\nGα possiede attività GTPasica: l’idrolisi del GTP riporta il nucleotide legato a GDP e permette il ritorno del sistema verso lo stato iniziale. Le proteine RGS possono accelerare questo spegnimento. Il ciclo è quindi limitato anche da meccanismi intracellulari, mentre un recettore attivo può promuovere più eventi di attivazione. Questa successione fornisce già una prima possibilità di amplificazione del segnale.",
        "refs": [
          "R-G",
          "M-chemochine"
        ]
      },
      {
        "id": "gs-camp",
        "title": "5. Gs, adenilato ciclasi e cAMP",
        "text": "Nel collegamento canonico Gs-adenilato ciclasi, Gαs attivata stimola la produzione di cAMP a partire da ATP. Il cAMP è un secondo messaggero: l’informazione extracellulare viene trasformata in una variazione di una molecola intracellulare. Un bersaglio importante è la proteina chinasi A, o PKA, che modifica l’attività di proteine mediante fosforilazione. Il passaggio successivo dipende da quali substrati sono disponibili nella cellula.\n\nLa produzione non basta per conoscere il livello di cAMP. Le fosfodiesterasi lo idrolizzano e ne limitano persistenza e distribuzione. Una variazione della concentrazione può quindi derivare da sintesi maggiore, degradazione minore o cambiamenti di entrambe. Bloccare la degradazione non equivale ad attivare direttamente il recettore: la catena causale e le condizioni di funzionamento rimangono diverse.\n\nPKA non esaurisce tutti i bersagli del cAMP. Esistono anche canali regolati direttamente dal nucleotide ciclico. Inoltre le proteine AKAP organizzano complessi che avvicinano PKA, substrati e sistemi di produzione o rimozione del messaggero. Una misura media di cAMP non descrive necessariamente quello che raggiunge un particolare substrato. Il segnale dipende da dove viene prodotto e da quali proteine incontra, non soltanto dalla sua quantità complessiva.",
        "refs": [
          "R-camp",
          "M-akap"
        ]
      },
      {
        "id": "gi-betagamma",
        "title": "6. Gi e Gβγ: il segnale si divide in più rami",
        "text": "Nel collegamento Gi-adenilato ciclasi, Gαi può ridurre l’attività dell’enzima e la produzione di cAMP. La lettera i descrive questo rapporto con un effettore; non significa che l’intera cellula venga genericamente spenta. Una cellula può contemporaneamente ridurre un segnale e attivarne un altro. Serve quindi specificare quale ramo è inibito e quale funzione viene misurata.\n\nGβγ rende evidente questa distinzione. Nei sistemi descritti per Gi/o, il complesso può regolare direttamente alcuni canali, senza richiedere che tutto passi per una variazione del cAMP. L’attivazione di canali GIRK del potassio e la modulazione di determinati canali del calcio sono esempi di questo controllo. Nel terminale nervoso, ridurre l’ingresso di calcio può ridurre il rilascio del trasmettitore; la conclusione dipende però dal canale e dal contesto sinaptico considerati.\n\nUn singolo GPCR può perciò produrre una risposta ramificata: Gα modifica un enzima e Gβγ controlla altre proteine. L’assenza di una variazione evidente del cAMP non dimostra che il recettore non abbia segnalato. Per ricostruire il meccanismo bisogna distinguere il trasduttore attivato dall’indicatore scelto per osservarlo, e ricordare che ogni indicatore intercetta soltanto una parte della rete.",
        "refs": [
          "R-camp",
          "R-betagamma"
        ]
      },
      {
        "id": "gq-plc",
        "title": "7. Gq, PLCβ e la separazione fra IP3 e DAG",
        "text": "Un’altra connessione fondamentale unisce Gαq alla fosfolipasi Cβ, o PLCβ. L’enzima idrolizza il fosfatidilinositolo 4,5-bisfosfato, PIP2, nel foglietto citoplasmatico della membrana. Ne derivano due secondi messaggeri con comportamenti spaziali diversi: l’inositolo 1,4,5-trisfosfato, IP3, e il diacilglicerolo, DAG. Distinguere il loro destino è essenziale per comprendere la via.\n\nIP3 è idrofilo e può diffondere nel citosol. Si lega a recettori-canale presenti sulla membrana del reticolo endoplasmatico, favorendo il rilascio del calcio immagazzinato verso il citosol. Il recettore per IP3 non è quindi il GPCR iniziale: è un secondo dispositivo, localizzato su una membrana intracellulare. Un aumento del calcio citosolico non richiede sempre un ingresso immediato dall’esterno; può iniziare con la mobilizzazione di un deposito.\n\nDAG rimane invece nella membrana e partecipa all’attivazione di isoforme della proteina chinasi C. Alcune richiedono anche calcio: non tutte le PKC hanno identiche condizioni di attivazione. IP3 e DAG vengono poi metabolizzati, mentre i fosfoinositidi sono ricostituiti. La via non è un semplice flusso in una sola direzione. Inoltre PLCβ e PLCγ non sono intercambiabili: gli stessi prodotti possono essere generati attraverso sistemi di attivazione differenti, compreso il reclutamento di PLCγ da parte di recettori tirosin-chinasici.",
        "refs": [
          "R-plc",
          "M-plc"
        ]
      },
      {
        "id": "calcio-contesto",
        "title": "8. Il calcio è un segnale organizzato nello spazio",
        "text": "La concentrazione del calcio libero nel citosol è mantenuta molto più bassa rispetto a quella extracellulare e a determinati depositi intracellulari. Un canale aperto può quindi generare un cambiamento locale rilevante. Tuttavia calcio libero e calcio totale non sono la stessa misura: proteine tampone e organelli condizionano quanta parte dello ione rimane disponibile e dove può agire.\n\nIl profilo del segnale nasce dall’equilibrio fra ingresso attraverso la membrana plasmatica, rilascio dai depositi, estrusione verso l’esterno e ricaptazione negli organelli. Il ritorno verso il livello basale è un processo attivo della cellula, non la semplice scomparsa spontanea del calcio. Frequenza, durata e posizione degli aumenti contribuiscono all’informazione trasmessa. Un segnale vicino a un terminale presinaptico può controllare l’esocitosi, mentre altre distribuzioni partecipano a contrazione, metabolismo o regolazione della trascrizione.\n\nNon è dunque corretto tradurre ogni aumento di Ca2+ nella stessa risposta. Anche il cAMP mostra questa dipendenza dal contesto: nel cuore PKA può aumentare la disponibilità funzionale dei canali del calcio, mentre nella muscolatura liscia può intervenire sulla chinasi della catena leggera della miosina favorendo il rilasciamento. Il secondo messaggero è condiviso; i substrati e l’organizzazione cellulare cambiano il significato dell’evento.",
        "refs": [
          "M-calcio",
          "M-calcio-spazio",
          "R-camp"
        ]
      },
      {
        "id": "rtk",
        "title": "9. I recettori tirosin-chinasici costruiscono piattaforme di segnale",
        "text": "I recettori tirosin-chinasici, o RTK, comprendono un dominio extracellulare, un tratto transmembrana e una regione intracellulare con attività chinasica. Il ligando favorisce una disposizione attiva dei recettori, spesso mediante dimerizzazione o riorganizzazione di complessi già presenti. I domini intracellulari possono fosforilare residui tirosinici, creando siti riconoscibili da altre proteine. Non è soltanto un interruttore acceso: è l’assemblaggio di una piattaforma con più uscite.\n\nDomini di riconoscimento come SH2 permettono ad adattatori ed enzimi di associarsi a specifiche sequenze fosforilate. Un adattatore collega componenti senza dover svolgere esso stesso la reazione finale. La selezione dei partner dipende dal recettore, dai siti disponibili e dalle proteine espresse. Per questo due RTK non sono obbligati a produrre lo stesso insieme di segnali, pur condividendo l’attività tirosin-chinasica.\n\nDa tali piattaforme possono partire il ramo Ras-MAPK, quello PI3K-AKT o l’attivazione di PLCγ. Quest’ultimo ritrova IP3, DAG e calcio già incontrati per Gq, ma con un ingresso diverso. La presenza di un prodotto comune non autorizza a disegnare la stessa sequenza a monte. Occorre inoltre separare gli RTK dai recettori che usano chinasi citoplasmatiche associate: condividere una fosforilazione come risultato non significa possedere la stessa architettura.",
        "refs": [
          "R-rtk",
          "R-chinasi",
          "M-plc"
        ]
      },
      {
        "id": "ras-mapk",
        "title": "10. Ras, Raf, MEK ed ERK: una cascata con più esiti",
        "text": "Nel ramo classico attivato da fattori di crescita, le proteine adattatrici collegano il recettore a un fattore di scambio come SOS. Questo favorisce il passaggio di Ras dallo stato legato a GDP a quello legato a GTP. Ras è una piccola GTPasi monomerica, diversa dall’eterotrimero dei GPCR. Condividere la logica del nucleotide guaninico non significa occupare la stessa posizione nella rete.\n\nRas-GTP può promuovere l’attivazione di Raf; seguono MEK ed ERK attraverso passaggi di fosforilazione. ERK può agire su substrati citoplasmatici e su regolatori della trascrizione. Nomi e ordine servono a identificare una sequenza precisa, mentre la parola MAPK comprende anche altre famiglie, fra cui JNK: non è il nome esclusivo di una sola catena lineare.\n\nLa cascata consente amplificazione e coordinamento, ma il suo esito non si riassume nella parola proliferazione. Anche differenziamento e altre modificazioni cellulari dipendono da durata, localizzazione e segnali concomitanti. Il confronto fra risposte a fattori diversi nelle cellule PC12 mostra perché la sola attivazione di un nodo condiviso non basta a predire il destino cellulare. Per il ragionamento farmacologico è quindi necessario identificare il nodo direttamente modulato e distinguere l’effetto biochimico immediato dalle conseguenze che richiedono l’intera organizzazione della cellula.",
        "refs": [
          "M-mapk",
          "R-chinasi",
          "M-integrazione"
        ]
      },
      {
        "id": "pi3k-akt",
        "title": "11. PI3K e AKT: un lipide di membrana organizza gli incontri",
        "text": "La fosfatidilinositolo 3-chinasi, PI3K, aggiunge un gruppo fosfato alla posizione 3 di determinati fosfoinositidi. Nel circuito qui considerato, PIP2 viene convertito in PIP3. Non si tratta della scissione operata da PLC: PIP3 rimane un componente lipidico della membrana e contribuisce a reclutare proteine che possiedono domini capaci di riconoscerlo. La membrana diventa così una sede organizzata di assemblaggio.\n\nFra i componenti coinvolti vi sono AKT, detta anche proteina chinasi B, e sistemi che ne permettono l’attivazione mediante fosforilazione. La produzione del lipide non coincide quindi automaticamente con la piena attivazione di tutti i bersagli a valle. AKT è uno snodo che può regolare metabolismo, sopravvivenza e sintesi proteica attraverso diversi substrati. Il collegamento con mTOR amplia ulteriormente la rete: mTOR opera in complessi distinti, non come un’unica freccia universale.\n\nQuesto ramo può ricevere ingressi da RTK e, in contesti appropriati, anche da GPCR o altri sistemi. Il punto di convergenza non cancella le differenze fra gli ingressi. Analogamente, intervenire su un nodo non equivale a conoscere già l’intera risposta: rami paralleli e ritorni di controllo possono modificarla. La spiegazione del meccanismo deve dunque indicare quali passaggi sono direttamente documentati e quali conseguenze dipendono dal particolare sistema sperimentale.",
        "refs": [
          "R-chinasi",
          "M-akt"
        ]
      },
      {
        "id": "jak-stat",
        "title": "12. JAK-STAT: una chinasi associata collega membrana e nucleo",
        "text": "I recettori delle famiglie citochiniche ematopoietiniche di classe I e II non possiedono un dominio chinasico intrinseco. Si associano a chinasi della famiglia JAK. Il legame del ligando favorisce una disposizione del complesso che permette l’attivazione delle chinasi e la fosforilazione di componenti recettoriali. Per alcuni recettori il complesso può essere già assemblato: disegnare sempre due monomeri separati che si uniscono è una semplificazione, non una regola universale.\n\nLe fosfotirosine offrono siti di reclutamento per le proteine STAT, trasduttori del segnale e fattori di trascrizione. La loro fosforilazione favorisce la formazione di complessi attivi, spesso raffigurati come dimeri, che raggiungono il nucleo e regolano l’espressione dei geni bersaglio. Rispetto a una lunga sequenza di secondi messaggeri, il collegamento membrana-nucleo appare più diretto; resta però dipendente da componenti specifici e da meccanismi regolatori.\n\nNon tutte le citochine usano questo schema. La classificazione comprende anche recettori delle famiglie di IL-1 e TNF, recettori ad attività tirosin-chinasica e recettori per chemochine accoppiati a proteine G. Il nome generale del mediatore non identifica quindi il meccanismo. Per descrivere una citochina bisogna indicare la famiglia recettoriale e le catene che compongono il complesso, evitando di applicare JAK-STAT a tutto il sistema immunitario.",
        "refs": [
          "M-citochine",
          "R-jak",
          "M-chemochine"
        ]
      },
      {
        "id": "nucleari",
        "title": "13. I recettori nucleari regolano programmi trascrizionali",
        "text": "I recettori nucleari sono fattori di trascrizione regolati da ligandi. Possiedono regioni dedicate al riconoscimento del ligando, all’interazione con il DNA e all’associazione con altre proteine. Alcuni possono passare fra citoplasma e nucleo; altri sono già presenti nel compartimento nucleare. La denominazione della famiglia non impone dunque che ogni recettore debba iniziare nel citoplasma e traslocare nello stesso modo.\n\nIl controllo dell’espressione genica richiede più del contatto con una sequenza di DNA. Coattivatori, corepressori e complessi che modificano o rimodellano la cromatina contribuiscono a determinare quali geni vengono regolati. La conformazione del recettore influenza quali partner possono associarsi. Ligando, recettore, disponibilità dei coregolatori e contesto della cromatina cooperano nel produrre l’esito: un elenco di geni identico per tutte le cellule sarebbe fuorviante.\n\nLa regolazione può aumentare oppure ridurre l’espressione di specifici geni e può coinvolgere anche interazioni con altri fattori trascrizionali. Le conseguenze che richiedono nuove proteine hanno tempi diversi da un cambiamento immediato della corrente ionica, ma non va trasformata questa differenza in un cronometro universale. Sono descritti anche effetti non genomici. Qui il centro del capitolo è la logica trascrizionale; le altre azioni richiedono una trattazione dedicata e non possono essere ricostruite attribuendo ogni effetto rapido allo stesso percorso nucleare.",
        "refs": [
          "R-nucleari",
          "M-nucleari"
        ]
      },
      {
        "id": "no-cgmp",
        "title": "14. NO e cGMP: un ingresso diverso nei nucleotidi ciclici",
        "text": "La guanilato ciclasi offre un confronto utile con l’adenilato ciclasi. La forma solubile sensibile all’ossido nitrico, NO, è una proteina contenente eme: il legame del NO favorisce la sintesi di cGMP da GTP. Il riconoscimento non richiede quindi di passare attraverso un GPCR sulla membrana plasmatica. Il circuito collega un mediatore diverso alla produzione di un secondo messaggero intracellulare.\n\nIl cGMP può regolare la proteina chinasi G, PKG, canali e fosfodiesterasi. Le PDE contribuiscono anche alla sua degradazione. La somiglianza delle sigle con cAMP e PKA non rende intercambiabili molecole, enzimi o risposte. Nella muscolatura liscia vascolare il circuito NO-cGMP partecipa al rilasciamento; la spiegazione riguarda un meccanismo cellulare, non stabilisce indicazioni o dosi di un trattamento.\n\nVa distinta la guanilato ciclasi solubile dai recettori guanilato-ciclasi di membrana, come quelli attivati da peptidi natriuretici. Le due architetture possono convergere sul cGMP pur riconoscendo segnali diversi. Anche qui, il messaggero comune non permette di risalire da solo al recettore responsabile. Questo paragrafo integra i libri con le specifiche pagine Reactome citate, senza estendere quella ricognizione a tutti gli effetti del NO.",
        "refs": [
          "RT-NO",
          "RT-NObinding",
          "RT-cgmp",
          "R-chinasi"
        ]
      },
      {
        "id": "rete-spaziotempo",
        "title": "15. Specificità, amplificazione e controllo emergono dalla rete",
        "text": "Le vie appena descritte condividono molti componenti, ma non perdono per questo ogni specificità. Essa emerge dalla combinazione di recettori espressi, proteine trasduttrici, isoforme enzimatiche, substrati, compartimenti e durata degli eventi. Le AKAP e altre proteine organizzatrici possono avvicinare partner selezionati; i microdomini di calcio limitano un segnale a una porzione della cellula. Un valore medio dell’intera cellula può quindi nascondere differenze decisive.\n\nL’amplificazione compare quando un componente attivato promuove molte reazioni successive. Non implica una crescita illimitata: idrolisi del GTP, degradazione dei messaggeri, fosfatasi e circuiti di feedback limitano o ridistribuiscono l’attività. Un feedback negativo è un ritorno attraverso cui un evento a valle riduce un passaggio precedente; non è semplicemente la presenza di un antagonista. Le vie possono anche influenzarsi reciprocamente, per esempio condividendo chinasi o modificando i rispettivi componenti.\n\nPer ricostruire un meccanismo, chiedi quindi dove avviene ogni tappa, quale trasformazione rappresenta la freccia e quale prova collega il passaggio alla risposta. La desensibilizzazione e il traffico dei recettori aggiungono un altro livello, trattato nel capitolo dedicato. Questo quadro introduce famiglie e circuiti fondamentali, non costituisce l’atlante completo di tutte le vie né attesta animazioni già realizzate. Offre una base per approfondire ciascuna via senza trasformare una sequenza didattica in una previsione clinica.",
        "refs": [
          "M-akap",
          "M-calcio-spazio",
          "M-integrazione",
          "R-G",
          "R-chinasi"
        ]
      }
    ],
    "references": [
      {
        "id": "R-arch",
        "title": "Rang & Dale. Farmacologia, 8ª edizione italiana, 2016",
        "detail": "Capitolo 3, Tipi di bersaglio, recettori, canali, enzimi e trasportatori; pagine PDF 58-60. Testo letto; numerazione stampata non assunta."
      },
      {
        "id": "R-famiglie",
        "title": "Rang & Dale, capitolo 3: superfamiglie recettoriali",
        "detail": "Pagina PDF 62, figura 3.3 e classificazione dei quattro tipi. Testo e didascalia letti; non riutilizzata la figura."
      },
      {
        "id": "R-ionotropici",
        "title": "Rang & Dale, capitolo 3: recettori ionotropici",
        "detail": "Pagine PDF 64-65 e67, struttura, poro, selettività, meccanismo a cancello e differenze fra cys-loop, glutammato e P2X. Testo letto; nessuna composizione embrionale del recettore nicotinico estesa a tutte le forme adulte."
      },
      {
        "id": "R-G",
        "title": "Rang & Dale, capitolo 3: proteine G e loro ruolo",
        "detail": "Pagine PDF 69-71; ciclo GDP/GTP, attività GTPasica, RGS, amplificazione. PDF 70 e figura 3.9 anche renderizzate e viste."
      },
      {
        "id": "R-camp",
        "title": "Rang & Dale, capitolo 3: sistema adenilato ciclasi/cAMP",
        "detail": "Pagine PDF 72-73, sezioni sistema adenilato ciclasi/cAMP e differenze dei substrati in cuore e muscolatura liscia. Escluse le indicazioni e le attribuzioni cliniche/farmacologiche problematiche presenti nel testo storico."
      },
      {
        "id": "R-betagamma",
        "title": "Rang & Dale, capitolo 3: canali ionici come bersaglio delle proteine G",
        "detail": "Pagina PDF 77, controllo di canali del K+ e del Ca2+ attraverso Gβγ di Gi/o. Testo letto."
      },
      {
        "id": "R-plc",
        "title": "Rang & Dale, capitolo 3: sistema fosfolipasi C/inositolo fosfato",
        "detail": "Pagine PDF 75-76, scissione PIP2, IP3, DAG, reticolo e PKC. Testo e didascalie letti; incrocio con Molecolare PDF 162-163."
      },
      {
        "id": "R-rtk",
        "title": "Rang & Dale, capitolo 3: recettori accoppiati a chinasi",
        "detail": "Pagine PDF 81-82, attività chinasica intrinseca/associata, dimerizzazione, fosfotirosine e SH2. PDF 82 e figura 3.17 viste. Non trasferita l’inclusione anomala di Toll-like nel paragrafo RTK di PDF 81."
      },
      {
        "id": "R-chinasi",
        "title": "Rang & Dale, capitolo 3: cascate chinasiche e convergenza",
        "detail": "Pagina PDF 83 letta integralmente in un secondo passaggio, compresi Ras/MAPK, PI3K/PIP3, recettore guanilato-ciclasi e integrazione delle vie."
      },
      {
        "id": "R-jak",
        "title": "Rang & Dale, capitolo 3: JAK-STAT",
        "detail": "Pagine PDF 82-83, figura 3.17B vista e testo del ramo JAK-STAT letto; confronto con Molecolare PDF 183 per associazione delle chinasi e classificazione."
      },
      {
        "id": "R-nucleari",
        "title": "Rang & Dale, capitolo 3: recettori nucleari",
        "detail": "Pagine PDF 84-86, struttura, localizzazione, trascrizione e coregolatori. Escluse percentuali di farmaci, classificazioni contestabili e descrizioni non necessarie dei dimeri permissivi/non permissivi."
      },
      {
        "id": "M-integrazione",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 11, pagine PDF 133-136: assemblaggio, cross talk, risposte nelle PC12, integrazione e feedback. Letto il testo; non importato il dettaglio del modello storico TSC/mTOR come rete universale."
      },
      {
        "id": "M-akap",
        "title": "Farmacologia generale e molecolare, capitolo 13: compartimentazione del cAMP",
        "detail": "Pagina PDF 162, stampa 141 verificata sul corpo: AKAP, complessi cAMP-PKA e bersagli diversi dalla PKA. Pagina renderizzata e vista."
      },
      {
        "id": "M-plc",
        "title": "Farmacologia generale e molecolare, capitolo 13: idrolisi dei fosfoinositidi",
        "detail": "Pagine PDF 162-163; figura 13.4 PDF 162 vista. Foglietto interno, PLCβ/PLCγ, IP3/DAG e dipendenza dal calcio di alcune PKC. stampa 141 confermata solo per PDF 162; nessun offset globale applicato."
      },
      {
        "id": "M-calcio",
        "title": "Farmacologia generale e molecolare, capitolo 9: omeostasi del calcio",
        "detail": "Pagine PDF 117-118 lette: calcio libero/totale, flussi contrapposti, tamponi e microterritori; non trasferiti valori numerici come costanti universali."
      },
      {
        "id": "M-calcio-spazio",
        "title": "Farmacologia generale e molecolare, capitolo 9: segnali locali del calcio",
        "detail": "Pagine PDF 118 e123 lette: localizzazione, esocitosi, spine dendritiche, cooperazione fra canali e depositi. Non dichiarata lettura integrale del capitolo."
      },
      {
        "id": "M-mapk",
        "title": "Farmacologia generale e molecolare, capitolo 10: attivazione di ERK",
        "detail": "Pagina PDF 127 letta, didascalia figura 10.2: Grb2/SOS/Ras/Raf/MEK/ERK, substrati citosolici/nucleari; testo successivo sulle JNK. Nessuna figura riprodotta."
      },
      {
        "id": "M-akt",
        "title": "Farmacologia generale e molecolare, capitolo 11: PI3K-AKT",
        "detail": "Pagine PDF 134-136 lette: AKT/PKB, PIP3, PDK1, substrati e complessi mTOR. Usato soltanto il quadro meccanicistico di base; dettagli storici e prospettive terapeutiche esclusi."
      },
      {
        "id": "M-citochine",
        "title": "Farmacologia generale e molecolare, capitolo 15: famiglie dei recettori per citochine",
        "detail": "Pagina PDF 183, stampa 162 verificata visivamente, tabella 15.1 e testo JAK/STAT: recettori di classe I e II, attività chinasica associata, catene e reclutamento di STAT."
      },
      {
        "id": "M-chemochine",
        "title": "Farmacologia generale e molecolare, capitolo 15: recettori per chemochine",
        "detail": "Pagina PDF 186 letta: recettori convenzionali a proteine G, fattore di scambio GDP/GTP e segnali di migrazione. La parte di desensibilizzazione è stata letta ma non sviluppata in questo capitolo."
      },
      {
        "id": "M-nucleari",
        "title": "Farmacologia generale e molecolare, capitolo 20: regolazione trascrizionale",
        "detail": "Pagine PDF 244-245 lette: HRE, coregolatori, modificazioni della cromatina e repressione; testo/didascalie, senza riproduzione dei disegni."
      },
      {
        "id": "RT-NO",
        "title": "Reactome: Nitric oxide stimulates guanylate cyclase",
        "detail": "R-HSA-392154, Homo sapiens, sommario e lista eventi aperti e letti il 25 ottobre 2026. Integrazione mirata NO/cGMP, non importazione della banca dati.",
        "url": "https://reactome.org/content/detail/R-HSA-392154"
      },
      {
        "id": "RT-NObinding",
        "title": "Reactome: NO binds to Guanylate Cyclase",
        "detail": "R-HSA-392143, reazione di legame, citosol, pagina aperta e letta il 25 ottobre 2026; eme, sGC e bersagli cGMP. Conservata l’indicazione della fonte: evento umano inferito anche da Rattus norvegicus.",
        "url": "https://reactome.org/content/detail/R-HSA-392143"
      },
      {
        "id": "RT-cgmp",
        "title": "Reactome: cGMP effects",
        "detail": "R-HSA-418457, sommario ed eventi aperti e letti il 25 ottobre 2026: PKG, PDE e muscolatura liscia. Non trasferite implicazioni terapeutiche o generalizzazioni dell’intero sistema piastrinico.",
        "url": "https://reactome.org/content/detail/R-HSA-418457"
      }
    ],
    "checks": [
      {
        "question": "Due mediatori producono lo stesso aumento medio di cAMP: devono generare la stessa risposta cellulare?",
        "answer": "No. La misura media non identifica i microdomini raggiunti né i substrati disponibili. AKAP, PDE, proteine effettrici e contesto cellulare possono differire. Occorre confrontare anche sede e durata del segnale, non soltanto il livello complessivo.",
        "refs": [
          "R-camp",
          "M-akap"
        ]
      },
      {
        "question": "Un GPCR favorisce lo scambio GDP-GTP: sta fosforilando il GDP già legato a Gα?",
        "answer": "No. Il recettore favorisce il rilascio del GDP e il legame di un’altra molecola, GTP, presente nella cellula. La successiva idrolisi del GTP da parte di Gα è un evento distinto che contribuisce allo spegnimento.",
        "refs": [
          "R-G",
          "M-chemochine"
        ]
      },
      {
        "question": "Dopo l’attivazione di un recettore Gi/o cambia la corrente di potassio, ma non si rileva una riduzione del cAMP. Il dato esclude la segnalazione?",
        "answer": "No. Gβγ può controllare direttamente canali come i GIRK, senza imporre che ogni effetto sia letto attraverso il cAMP. Il dato richiede di identificare il ramo e il canale, e non prova da solo quale componente abbia causato la corrente.",
        "refs": [
          "R-betagamma"
        ]
      },
      {
        "question": "Una risposta a Gq inizia mentre l’ingresso di calcio extracellulare è fortemente limitato. È incompatibile con la via PLC?",
        "answer": "Non necessariamente. IP3 può favorire il rilascio di calcio già accumulato nel reticolo. Bisogna distinguere disponibilità del deposito, rilascio e ingresso dall’esterno; il comportamento successivo può dipendere dalla ricarica e da altri flussi.",
        "refs": [
          "M-plc",
          "M-calcio"
        ]
      },
      {
        "question": "PLC e PI3K agiscono entrambe su PIP2. Perché non vanno rappresentate con la stessa trasformazione?",
        "answer": "PLC lo scinde in IP3 e DAG; PI3K aggiunge un fosfato e, nel circuito considerato, genera PIP3. Cambiano prodotti e localizzazione: IP3 diffonde nel citosol, mentre il PIP3 organizza interazioni nella membrana.",
        "refs": [
          "M-plc",
          "R-chinasi"
        ]
      },
      {
        "question": "Un recettore attiva JAK-STAT: significa che il suo dominio intracellulare possiede attività tirosin-chinasica?",
        "answer": "No. Nei recettori citochinici di classe I e II qui descritti la funzione chinasica è fornita dalle JAK associate. È una distinzione dagli RTK. Inoltre JAK-STAT non è il meccanismo di tutti i recettori per citochine.",
        "refs": [
          "M-citochine",
          "R-jak"
        ]
      },
      {
        "question": "Una cellula mostra attivazione di ERK: possiamo concludere che prolifera?",
        "answer": "No. ERK partecipa a più risposte; l’esito dipende da durata, posizione e rete concomitante. Il testo sulle PC12 illustra risposte differenziative e proliferative differenti a valle di segnali che condividono componenti. Serve misurare l’esito, non dedurlo dal solo nodo.",
        "refs": [
          "M-mapk",
          "M-integrazione"
        ]
      },
      {
        "question": "Aumenta il cGMP: possiamo identificarne con certezza l’origine nella guanilato ciclasi solubile attivata da NO?",
        "answer": "No. Anche recettori guanilato-ciclasi di membrana possono produrre cGMP in risposta ad altri ligandi. La convergenza sul secondo messaggero non identifica da sola l’ingresso responsabile.",
        "refs": [
          "RT-NO",
          "R-chinasi"
        ]
      }
    ],
    "coverage": "Temi sviluppati: architetture e famiglie di bersagli, recettori ionotropici, ciclo GPCR/proteine G, Gs-AC-cAMP-PKA, Gi e Gβγ, Gq-PLCβ-IP3-DAG, calcio e contesto tissutale, RTK-RAS-RAF-MEK-ERK, PI3K-PIP3-AKT, recettori citochinici JAK-STAT, recettori nucleari, NO-sGC-cGMP, compartimenti,amplificazione,feedback e cross talk. Letture mirate documentate nel registro; questo capitolo non esaurisce il relativo ambito né la teoria dell’intera farmacologia.",
    "editorialReview": {
      "outcome": "pass",
      "path": "./data/gpcr-review.json",
      "sourceChapterSha256": "a4986855fea6b8e1a8b920125cf518f64544c3d07552faddaf56351e18265173",
      "scope": "Revisione editoriale mirata; non validazione clinica specialistica"
    },
    "coverageDetail": {
      "status": "fondamenti_estesi_non_atlante_completo",
      "included": [
        "architetture e famiglie di bersagli",
        "recettori ionotropici",
        "ciclo GPCR/proteine G",
        "Gs-AC-cAMP-PKA",
        "Gi e Gβγ",
        "Gq-PLCβ-IP3-DAG",
        "calcio e contesto tissutale",
        "RTK-RAS-RAF-MEK-ERK",
        "PI3K-PIP3-AKT",
        "recettori citochinici JAK-STAT",
        "recettori nucleari",
        "NO-sGC-cGMP",
        "compartimenti,amplificazione,feedback e cross talk"
      ],
      "notClaimed": [
        "copertura di tutte le vie e di tutti i sottotipi",
        "lettura integrale dei capitoli o dei libri",
        "animazioni realizzate o testate",
        "modello quantitativo o previsione clinica",
        "posologie,indicazioni o linee guida aggiornate",
        "validazione clinica professionale"
      ],
      "deferred": [
        "desensibilizzazione e traffico in trattazione dedicata",
        "dettaglio G12/13-Rho",
        "Wnt,Hedgehog,Notch,TGFβ,complemento e altre vie specifiche",
        "mappe complete delle isoforme e dei complessi",
        "farmacologia clinica dei singoli distretti"
      ],
      "integrationIntent": "Ampliamento del capitolo gpcr esistente; nessun nuovo capitolo duplicato e nessuna modifica al checkout app."
    },
    "authorReviewStatus": "bozza_fontata_da_revisionare",
    "readingManifest": "./data/gpcr-reading.json"
  },
  {
    "id": "desensibilizzazione-tolleranza",
    "existingChapterId": "desensibilizzazione-tolleranza",
    "relatedExistingChapterIds": [
      "farmacogenomica",
      "metabolismo-farmacogenetica",
      "metabolismo-trasportatori",
      "sicurezza-farmaco",
      "popolazioni-speciali"
    ],
    "volume": 2,
    "title": "La risposta cambia: adattamento, variabilità e interazioni",
    "lead": "La risposta farmacologica dipende dalla storia dell'esposizione, dalle caratteristiche dell'organismo e dalle sostanze concomitanti. Seguire questi cambiamenti permette di distinguere l'adattamento dei recettori dalle modificazioni dell'esposizione e di comprendere perché un meccanismo plausibile non basti, da solo, a prevedere un esito clinico.",
    "format": "extended",
    "reviewStatus": "revisione_editoriale_mirata_eseguita_non_validazione_clinica",
    "sections": [
      {
        "id": "risposta-storia",
        "title": "La risposta dipende anche dalla storia del sistema",
        "text": "Un farmaco incontra un organismo che cambia. Due esposizioni apparentemente uguali possono produrre effetti diversi perché sono cambiati i recettori, la trasmissione del segnale, l'eliminazione della sostanza o le condizioni del tessuto. La risposta osservata racconta quindi sia la presenza del farmaco sia la storia del sistema biologico.\n\nPer interpretare un effetto che diminuisce occorre distinguere almeno due possibilità. Può arrivare meno sostanza attiva al bersaglio, oppure il bersaglio e le strutture che lo seguono possono rispondere meno alla stessa esposizione. Il primo caso riguarda prevalentemente la farmacocinetica; il secondo la farmacodinamica. Nella realtà i due processi possono coesistere.\n\nQuesta distinzione evita di chiamare tolleranza qualsiasi perdita di efficacia. Un cambiamento della malattia, una diversa esposizione o un'interazione possono produrre un risultato simile senza lo stesso adattamento cellulare. L'effetto finale, da solo, non identifica il meccanismo.",
        "refs": [
          "rang-adattamento",
          "rang-variabilita"
        ]
      },
      {
        "id": "omologa-eterologa",
        "title": "Desensibilizzazione omologa ed eterologa",
        "text": "La desensibilizzazione è una riduzione della capacità di rispondere a una stimolazione. Un recettore può continuare a riconoscere il ligando e tuttavia trasmettere meno efficacemente il segnale. La diminuzione della risposta non richiede necessariamente che il farmaco si stacchi o che il recettore scompaia.\n\nSi parla di desensibilizzazione omologa quando la riduzione interessa soprattutto il recettore attivato dall'agonista. Il sistema limita così una via che è stata sollecitata. Nella desensibilizzazione eterologa, invece, diminuisce anche la risposta di altri recettori: ciò può avvenire perché condividono proteine di segnalazione o perché una chinasi modifica più recettori.\n\nLa differenza si dimostra confrontando risposte a stimoli distinti, non osservando soltanto un calo nel tempo. Se una cellula risponde meno a due agonisti, non è ancora provato che entrambi i recettori siano diminuiti: potrebbe essersi modificato un passaggio comune a valle. L'unità da studiare è quindi l'intero sistema recettore-segnalazione, con il suo contesto cellulare.",
        "refs": [
          "mol-desensibilizzazione",
          "rang-gpcr"
        ]
      },
      {
        "id": "grk-arrestine",
        "title": "GRK e arrestine: limitare e riorganizzare il segnale",
        "text": "Nei recettori accoppiati a proteine G, un meccanismo importante coinvolge le GRK, chinasi che riconoscono e fosforilano recettori attivati. La fosforilazione favorisce il reclutamento delle arrestine. Queste possono ostacolare l'interazione del recettore con la proteina G, riducendo ulteriori cicli di attivazione: il recettore legato al ligando diventa meno efficiente nel sostenere quella particolare risposta.\n\nLe chinasi dipendenti da secondi messaggeri, come PKA e PKC, possono modificare recettori e altri componenti della segnalazione. Poiché il loro raggio d'azione non coincide necessariamente con il solo recettore inizialmente stimolato, possono contribuire alla desensibilizzazione eterologa.\n\nLe arrestine, però, non sono soltanto un interruttore che spegne. Agiscono anche come adattatori e possono organizzare complessi di segnalazione. Una riduzione della risposta misurata attraverso una proteina G non dimostra quindi che ogni segnale proveniente dal recettore sia terminato. Occorre dichiarare quale via e quale risposta vengono osservate.",
        "refs": [
          "rang-gpcr",
          "mol-gpcr-traffico"
        ]
      },
      {
        "id": "traffico-recettoriale",
        "title": "Internalizzazione, riciclo e recupero della sensibilità",
        "text": "Il recettore può essere rimosso dalla superficie mediante endocitosi. Nei modelli classici di molti GPCR, le arrestine favoriscono il collegamento con il macchinario endocitico e con le fossette rivestite di clatrina. Il recettore raggiunge così compartimenti intracellulari nei quali il suo destino viene ulteriormente regolato.\n\nUna possibilità è il riciclo: il recettore viene rielaborato, può essere defosforilato e torna alla membrana in una condizione capace di rispondere nuovamente. Un'altra possibilità è l'invio ai lisosomi e la degradazione. Internalizzare non equivale dunque a distruggere; la stessa rimozione dalla superficie può precedere un recupero funzionale oppure una diminuzione più persistente della disponibilità recettoriale.\n\nIl numero sulla membrana dipende da un equilibrio dinamico fra inserimento e rimozione. Inoltre, alcune piattaforme recettoriali possono sostenere segnali anche dopo l'ingresso in compartimenti intracellulari. Per descrivere il processo bisogna separare tre osservazioni: localizzazione del recettore, quantità totale e capacità di attivare una determinata via.",
        "refs": [
          "rang-gpcr",
          "mol-gpcr-traffico"
        ]
      },
      {
        "id": "down-upregulation",
        "title": "Down-regulation e up-regulation non spiegano tutto",
        "text": "La down-regulation indica una diminuzione della disponibilità o dell'espressione recettoriale; è opportuno precisare se si misura il numero in superficie oppure il contenuto cellulare complessivo. Un recettore internalizzato ma ancora presente non è equivalente a una molecola già degradata. La desensibilizzazione può precedere entrambi gli eventi attraverso il semplice disaccoppiamento funzionale.\n\nL'up-regulation descrive un aumento dei recettori. In alcuni sistemi un blocco protratto o la riduzione dello stimolo favoriscono adattamenti che rendono maggiore la risposta successiva. Non è però una legge universale secondo cui ogni antagonista aumenta sempre tutti i recettori e ogni agonista li riduce.\n\nIl risultato dipende dal recettore, dal tessuto, dalla durata e dalla regolazione della sintesi e del traffico. Anche l'efficienza delle proteine a valle può cambiare. Una cellula con più recettori non deve quindi essere automaticamente definita più sensibile: l'aumento numerico acquista significato soltanto insieme alla misura della funzione.",
        "refs": [
          "mol-desensibilizzazione",
          "mol-traffico-generale",
          "rang-adattamento"
        ]
      },
      {
        "id": "tolleranza-tachifilassi",
        "title": "Tolleranza e tachifilassi: fenomeno e velocità",
        "text": "La tolleranza è una diminuzione della risposta dopo esposizioni ripetute o protratte. Il termine descrive un fenomeno, non un unico meccanismo: possono contribuire una minore esposizione, un adattamento dei recettori e modificazioni dei circuiti o delle risposte fisiologiche che contrastano l'effetto iniziale.\n\nLa tachifilassi indica una perdita di risposta che si sviluppa rapidamente durante stimolazioni ravvicinate. La distinzione temporale dalla tolleranza è convenzionale e non offre un confine valido per ogni sostanza. Fra i meccanismi possibili vi sono rapidi cambiamenti recettoriali e, per sostanze che liberano mediatori, l'esaurimento dei depositi disponibili.\n\nÈ essenziale indicare a quale effetto si riferisce la tolleranza. Uno stesso farmaco produce più risposte, e l'adattamento può interessarle in misura diversa. Una minore percezione di un effetto non dimostra una protezione equivalente da tutti gli effetti indesiderati. Per questo la tolleranza non deve essere trasformata nell'idea generica che l'organismo sia diventato resistente alla sostanza.\n\nUn esperimento può separare esposizione e risposta misurando la concentrazione e confrontando un medesimo stimolo prima e dopo il trattamento. Se la risposta diminuisce a concentrazioni comparabili, emerge una componente farmacodinamica; se diminuisce anche l'esposizione, occorre ricostruire quanto ciascun processo contribuisca al cambiamento.",
        "refs": [
          "rang-adattamento",
          "mol-adattamento"
        ]
      },
      {
        "id": "sensibilizzazione",
        "title": "Sensibilizzazione e potenziamento sono concetti distinti",
        "text": "L'esposizione ripetuta può anche aumentare una risposta: si parla allora di sensibilizzazione, talvolta denominata tolleranza inversa. Il fenomeno può coinvolgere recettori, espressione genica e organizzazione dei circuiti. Non richiede che ogni effetto della sostanza aumenti nello stesso modo e non coincide necessariamente con un semplice incremento del numero dei recettori.\n\nUn potenziamento osservato durante l'associazione di due sostanze è un problema diverso. Può derivare dalla convergenza di due meccanismi, da un aumento dell'esposizione o da entrambi. Per attribuirlo alla sensibilizzazione bisogna dimostrare che una precedente esposizione ha modificato la risposta successiva.\n\nAnche la parola sinergia richiede cautela: non basta che l'effetto combinato sia maggiore di quello di ciascuna sostanza isolata. Occorre un riferimento di additività adeguato alla misura studiata. Sensibilizzazione, up-regulation e sinergia possono incontrarsi nello stesso esperimento, ma non sono sinonimi e non si dimostrano con la stessa osservazione.",
        "refs": [
          "mol-adattamento",
          "mol-interazioni-pd"
        ]
      },
      {
        "id": "dipendenza-rebound",
        "title": "Dipendenza fisica, sospensione e disturbo da uso",
        "text": "La dipendenza fisica è un adattamento in seguito al quale una brusca riduzione dell'esposizione può far comparire una sindrome di astinenza. Può svilupparsi anche durante un uso terapeutico conforme alla prescrizione. Descrive una condizione biologica, senza esprimere un giudizio sulla persona o sulle ragioni per cui assume il farmaco.\n\nLa tolleranza riguarda invece la riduzione di una risposta durante l'esposizione. I due fenomeni possono coesistere, ma non si implicano necessariamente. Il disturbo da uso di sostanze riguarda un quadro più ampio, nel quale assumono rilievo perdita di controllo e persistenza dell'uso nonostante conseguenze dannose. La sola presenza di tolleranza o astinenza non basta a identificarlo.\n\nDopo l'interruzione possono inoltre ricomparire la malattia iniziale oppure un effetto di rimbalzo, cioè una risposta transitoriamente più intensa rispetto alla condizione precedente. Distinguere recidiva, rimbalzo e astinenza richiede informazioni sull'andamento temporale e sul quadro complessivo. La sola parola dipendenza non risolve questa distinzione.\n\nAnche il motivo della ripresa dell'assunzione richiede attenzione: cercare di evitare sintomi da sospensione non dimostra, da solo, la presenza di uso compulsivo. La terminologia deve descrivere precisamente ciò che è osservato, mantenendo separati l'adattamento biologico e la valutazione della condotta nel suo contesto.",
        "refs": [
          "mol-adattamento",
          "fda-dipendenza",
          "nih-disturbo-uso"
        ]
      },
      {
        "id": "eta-organi",
        "title": "Età e funzione degli organi modificano il contesto",
        "text": "La variabilità esiste sia fra persone sia nella stessa persona nel tempo. Età, composizione corporea, funzione renale ed epatica e malattia possono cambiare l'esposizione o la sensibilità. Due individui con la stessa concentrazione misurata possono quindi avere risposte diverse, mentre due risposte simili possono derivare da concentrazioni differenti.\n\nNel neonato maturazione metabolica ed eliminazione renale non coincidono con quelle dell'adulto. Nell'anziano possono cambiare distribuzione, eliminazione, riserva funzionale e risposta dei tessuti. Queste tendenze non autorizzano a considerare tutti i bambini o tutti gli anziani come gruppi uniformi: la variabilità individuale rimane importante.\n\nLa compromissione renale può ridurre l'eliminazione di sostanze o metaboliti pertinenti, ma può anche alterare il contesto fisiologico nel quale agiscono. La malattia epatica può modificare metabolismo, flussi e legame alle proteine. Non esiste perciò una sola proprietà, come l'età anagrafica, capace di sostituire la valutazione dei processi realmente coinvolti per quello specifico farmaco.",
        "refs": [
          "rang-variabilita",
          "mol-genetica-base"
        ]
      },
      {
        "id": "genotipo-fenotipo",
        "title": "Dal genotipo al fenotipo: un passaggio da spiegare",
        "text": "Il genotipo descrive le varianti genetiche possedute; il fenotipo descrive una caratteristica funzionale osservata o inferita, come l'attività di un enzima. Una variante può cambiare la sequenza della proteina, la sua quantità, la stabilità o il modo in cui viene prodotta. Anche delezioni e variazioni del numero di copie possono essere rilevanti.\n\nLa traduzione dal risultato genetico alla funzione richiede evidenze sulla variante e sul sistema considerato. Una copia aggiuntiva non equivale automaticamente a più attività se non si conosce la funzionalità della copia stessa. Analogamente, un allele segnalato da un test non riassume tutte le altre variabili che contribuiscono alla risposta.\n\nL'attività effettiva può essere modificata anche da malattia o sostanze concomitanti. Un genotipo compatibile con una certa capacità metabolica non garantisce che tale capacità rimanga invariata in presenza di un inibitore. La previsione farmacogenetica deve quindi essere letta insieme al contesto, distinguendo il dato genetico dal comportamento funzionale del momento.\n\nAnche le categorie funzionali, come attività ridotta o aumentata, devono essere riferite al gene e alla trasformazione considerati. Non descrivono una persona che metabolizza universalmente tutti i medicinali più lentamente o più rapidamente. La stessa persona può avere capacità diverse per vie e substrati differenti.",
        "refs": [
          "mol-genetica-base",
          "katz-inibizione",
          "fda-genetica"
        ]
      },
      {
        "id": "geni-bersaglio-trasporto",
        "title": "Enzima, trasportatore e bersaglio: tre sedi diverse",
        "text": "Una variante in un enzima metabolizzante può modificare la velocità con cui il farmaco originario viene trasformato. Se quel passaggio inattiva una sostanza attiva, una minore attività enzimatica può aumentarne l'esposizione; se serve ad attivare un profarmaco, può ridurre la formazione della specie responsabile dell'effetto. Il significato dipende dalla via, non dall'etichetta metabolizzatore lento presa isolatamente.\n\nUna variante in un trasportatore può cambiare ingresso, uscita o accesso a un tessuto. Una variante del bersaglio, invece, può modificare riconoscimento del farmaco, trasduzione o quantità di proteina disponibile. Nel primo caso cambia soprattutto dove arriva la sostanza; nel secondo può cambiare come il tessuto risponde alla sostanza arrivata.\n\nLe associazioni genetiche non hanno tutte lo stesso livello di utilizzabilità clinica. La tabella FDA distingue evidenze con conseguenze gestionali, possibili effetti su sicurezza o risposta e dati limitati alla farmacocinetica. La presenza di un'associazione non implica automaticamente che sia raccomandato un test prima di ogni prescrizione.",
        "refs": [
          "mol-genetica-trasportatori",
          "mol-genetica-bersagli",
          "mol-profarmaci",
          "fda-genetica"
        ]
      },
      {
        "id": "interazioni-pk-pd",
        "title": "Interazioni farmacocinetiche e farmacodinamiche",
        "text": "Un'interazione si verifica quando una sostanza modifica la risposta a un'altra. Nelle interazioni farmacocinetiche cambia il percorso che determina l'esposizione: assorbimento, distribuzione, metabolismo o escrezione. Nelle interazioni farmacodinamiche cambia la risposta risultante, anche senza una variazione necessaria della concentrazione del secondo farmaco.\n\nLa distinzione è meccanicistica. Due sostanze possono convergere sulla stessa funzione attraverso recettori diversi; un'altra associazione può invece aumentare l'effetto perché una sostanza ostacola l'eliminazione dell'altra. Uno stesso abbinamento può coinvolgere contemporaneamente entrambi i livelli.\n\nDire che due farmaci interagiscono non quantifica ancora l'entità o la rilevanza dell'interazione. Servono informazioni su esposizione, sedi interessate e risposta considerata. Anche alimenti, prodotti erboristici e altre sostanze possono modificare questi processi: naturale e farmacologicamente inattivo non sono categorie equivalenti. La classificazione individua la domanda da approfondire, ma non sostituisce i dati sulla specifica associazione.\n\nUn'associazione può così produrre due cambiamenti collegati: una sostanza aumenta la quantità disponibile dell'altra e, nello stesso tempo, entrambe modificano una funzione comune. Separare i due contributi aiuta a comprendere il fenomeno, ma non autorizza a sommare automaticamente percentuali ricavate da esperimenti diversi.",
        "refs": [
          "rang-interazioni",
          "mol-interazioni-pd"
        ]
      },
      {
        "id": "inibizione-tempo",
        "title": "L'inibizione enzimatica ha una propria storia temporale",
        "text": "Un inibitore riduce l'attività di un enzima. Se l'enzima contribuisce a eliminare una sostanza attiva, l'inibizione può aumentarne l'esposizione. L'importanza dipende però da quanto quella via contribuisce al destino complessivo del farmaco, dalle concentrazioni dell'inibitore e dalla presenza di percorsi alternativi.\n\nL'inibizione reversibile segue la disponibilità dell'inibitore nella sede pertinente. Può comparire rapidamente, ma la variazione della concentrazione del farmaco interessato richiede comunque il proprio tempo. Nell'inattivazione dipendente dal meccanismo, invece, l'enzima viene compromesso durante il processo metabolico: il recupero può richiedere la formazione di nuove molecole enzimatiche e non coincide necessariamente con la sola scomparsa dell'inibitore dal sangue.\n\nNon basta dunque condividere un CYP per prevedere un'interazione clinicamente importante. Le tabelle FDA separano sistemi sperimentali e dati clinici e richiamano la dipendenza dalle condizioni del saggio. Un risultato in vitro è un'evidenza sul meccanismo, non una misura già completa dell'effetto nell'organismo.",
        "refs": [
          "katz-inibizione",
          "mol-interazioni-metaboliche",
          "fda-interazioni"
        ]
      },
      {
        "id": "induzione-profarmaci",
        "title": "Induzione, sospensione e destino dei profarmaci",
        "text": "L'induzione aumenta la capacità di un sistema metabolico, spesso modificando espressione genica e quantità di enzima. Richiede quindi tempi di sintesi e turnover proteico: l'effetto tende a svilupparsi e a regredire gradualmente. La sua durata non si deduce soltanto dalla presenza del farmaco induttore nel plasma.\n\nSe la trasformazione rende inattiva una sostanza, l'induzione può ridurne l'esposizione e l'effetto. Se produce un metabolita attivo o tossico, può invece favorire quella componente. Anche per un profarmaco il risultato complessivo dipende sia dalla formazione sia dall'eliminazione delle specie attive: accelerare un passaggio non permette da solo di prevedere tutta la risposta.\n\nLa rimozione dell'induttore costituisce un nuovo cambiamento del sistema. Durante il ritorno dell'attività enzimatica verso la situazione precedente può cambiare nuovamente l'esposizione dell'altro farmaco. Perciò iniziare e interrompere una sostanza sono entrambi eventi farmacologicamente rilevanti. Non esiste una durata standard di induzione o inibizione applicabile a tutte le coppie.",
        "refs": [
          "rang-induzione",
          "mol-interazioni-metaboliche",
          "mol-profarmaci"
        ]
      },
      {
        "id": "trasportatori",
        "title": "Il trasporto determina anche l'esposizione locale",
        "text": "I trasportatori contribuiscono a decidere quali sostanze entrano in una cellula, quali ne escono e quali raggiungono un compartimento. Possono operare nell'intestino, nel fegato, nel rene e nelle barriere tissutali. Un'interazione di trasporto può quindi interessare assorbimento, distribuzione o eliminazione senza coincidere con un'interazione enzimatica.\n\nInibire un trasportatore di efflusso può favorire l'accumulo nella cellula interessata; ostacolare un trasportatore di ingresso può invece ridurre l'accesso a una sede, anche quando aumenta la quantità che rimane nel sangue. La direzione dell'effetto dipende dall'orientamento e dalla funzione del trasportatore in quello specifico tessuto.\n\nMetabolismo e trasporto possono inoltre cooperare: modificare l'accesso a una cellula modifica anche la disponibilità della sostanza per gli enzimi presenti al suo interno. Per capire una concentrazione plasmatica occorre quindi collegarla alla concentrazione nella sede pertinente, senza assumere che le due cambino sempre nella stessa direzione o nella stessa proporzione.\n\nLa localizzazione è parte del meccanismo. Una proteina che espelle una sostanza verso il lume intestinale non ha lo stesso significato di una proteina che ne permette l'ingresso nell'epatocita. Il nome del trasportatore deve quindi essere accompagnato dalla membrana, dalla direzione del flusso e dalla sede osservata.",
        "refs": [
          "mol-genetica-trasportatori",
          "mol-interazioni-escrezione",
          "fda-interazioni"
        ]
      },
      {
        "id": "convergenza-rischio",
        "title": "Convergenza degli effetti e limiti delle previsioni",
        "text": "La convergenza farmacodinamica spiega perché più sostanze che deprimono funzioni del sistema nervoso centrale possano aumentare sedazione, compromissione psicomotoria e, in determinate associazioni, depressione respiratoria. Non è necessario che agiscano tutte sullo stesso recettore. Una concomitante interazione farmacocinetica può aggiungere un aumento dell'esposizione.\n\nUn altro esempio riguarda la ripolarizzazione cardiaca. Più interferenze sulla funzione elettrica, esposizioni aumentate e condizioni come alterazioni del potassio possono concorrere al rischio. Il prolungamento del QT è un segnale rilevante, ma non coincide automaticamente con la comparsa di un'aritmia e non consente una previsione individuale deterministica.\n\nIl passaggio dal meccanismo all'esito richiede quindi dati ulteriori. Mostrare una via condivisa spiega una possibilità; documentare concentrazioni, risposta e condizioni consente di stimarne la rilevanza. Nella lettura scientifica vanno mantenuti distinti il fenomeno osservato, il meccanismo proposto e ciò che resta da dimostrare. Questa distinzione vale per una singola interazione come per un'animazione che rappresenta l'intero organismo.",
        "refs": [
          "rang-interazioni",
          "mol-interazioni-pd",
          "fda-dipendenza",
          "fda-qt"
        ]
      }
    ],
    "references": [
      {
        "id": "mol-traffico-generale",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 6: PDF 94, stampata 72, passaggio sul turnover e sull’inserimento/rimozione dei recettori; lettura del passaggio estratto."
      },
      {
        "id": "mol-desensibilizzazione",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 6, Modulazione delle risposte recettoriali ai farmaci: PDF 95, stampata 73; pagina verificata anche visivamente."
      },
      {
        "id": "mol-gpcr-traffico",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 13: PDF 157 per GRK/arrestine; PDF 164–166, stampate 143–145, traffico, riciclo/degradazione e segnalazione. Figura 13.5, PDF 165, stampata 144, controllata visivamente."
      },
      {
        "id": "mol-adattamento",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 7: PDF 99–100, stampate 77–78, tolleranza, sensibilizzazione e cessazione. Impiegati i principi di adattamento; non trasferite indicazioni cliniche o diagnostiche storiche."
      },
      {
        "id": "rang-adattamento",
        "title": "Rang & Dale, Farmacologia, 8ª ed. italiana, 2016",
        "detail": "Capitolo 2, Desensibilizzazione e tolleranza: PDF 49–51, modificazioni recettoriali, traslocazione, deplezione dei mediatori e adattamento fisiologico. Figura 2.12 e didascalia lette nell’estrazione; non visionata come immagine. PDF reimpaginato: numeri di pagina stampata non direttamente verificabili."
      },
      {
        "id": "rang-gpcr",
        "title": "Rang & Dale, Farmacologia, 8ª ed. italiana, 2016",
        "detail": "Capitolo 3, Desensibilizzazione dei GPCR: PDF 78–79, GRK, PKA/PKC, arrestine, clatrina, riciclo e degradazione. Figura 3.16 e didascalia lette nell’estrazione; non conteggiate come immagine visionata."
      },
      {
        "id": "rang-variabilita",
        "title": "Rang & Dale, Farmacologia, 8ª ed. italiana, 2016",
        "detail": "Capitolo 11: PDF 219–222, Variabilità individuale, Età e Malattia. Figure 11.1 e 11.2, PDF 220–221, controllate visivamente; impiegati i concetti, non le stime numeriche o gli esempi terapeutici storici."
      },
      {
        "id": "mol-genetica-base",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 54: PDF 688–690, stampate 695–697, varianti, quantità/funzione proteica e CNV. Non trasferite frequenze alleliche, conteggi genomici o raccomandazioni storiche."
      },
      {
        "id": "mol-genetica-trasportatori",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 54: PDF 695, stampata 702, trasportatori e localizzazione nelle barriere. Impiegata la distinzione funzionale; non trasferite associazioni cliniche specifiche o tabelle di substrati."
      },
      {
        "id": "mol-genetica-bersagli",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 54: PDF 696, stampata 703, varianti dei bersagli e conseguenze su riconoscimento, segnalazione e disponibilità recettoriale; omesse conclusioni terapeutiche storiche."
      },
      {
        "id": "mol-profarmaci",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 54: PDF 692, stampata 699, testo e figure 54.2/54.3 letti visivamente. Distinzione fra eliminazione di sostanza attiva e bioattivazione; nessuna dose importata."
      },
      {
        "id": "rang-interazioni",
        "title": "Rang & Dale, Farmacologia, 8ª ed. italiana, 2016",
        "detail": "Capitolo 11: PDF 222–223, Interazioni farmacologiche, distinzione PK/PD, contesto elettrolitico e sedazione. Non riprodotti elenchi di associazioni."
      },
      {
        "id": "rang-induzione",
        "title": "Rang & Dale, Farmacologia, 8ª ed. italiana, 2016",
        "detail": "Capitolo 9: PDF 196–197, lentezza di insorgenza e recupero dell’induzione e ruolo dei metaboliti. Figura 9.5 letta nella didascalia, non visionata come immagine."
      },
      {
        "id": "katz-inibizione",
        "title": "Katzung, Farmacologia generale e clinica, IX ed. italiana 2014 sulla XII americana 2012",
        "detail": "Capitolo 4, Inibizione enzimatica: PDF 85, stampata 65, verificata anche visivamente; distinzione inibizione reversibile/inattivazione, senza elenchi storici."
      },
      {
        "id": "mol-interazioni-metaboliche",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 55: PDF 703–704, stampate 710–711; figure 55.2/55.3 controllate visivamente. Usati i principi; tabelle 55.4/55.5 non adottate come cataloghi attuali."
      },
      {
        "id": "mol-interazioni-escrezione",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 55: PDF 705, stampata 712, Interazioni in fase di escrezione; distinzione del trasporto rispetto al metabolismo."
      },
      {
        "id": "mol-interazioni-pd",
        "title": "Clementi e Fumagalli, Farmacologia generale e molecolare, 4ª ed., 2012",
        "detail": "Capitolo 55: PDF 705–706, stampate 712–713, interazioni PD, additività, sinergia, alimenti e prodotti erboristici; nessuna tabella prescrittiva importata."
      },
      {
        "id": "fda-genetica",
        "title": "FDA, Table of Pharmacogenetic Associations",
        "detail": "Consultata il 25/10/2026: About the Table e distinzione fra sezioni 1, 2 e 3; associazione genetica, evidenze su esiti e limiti alla raccomandazione automatica di test. Nessun dosaggio trasferito.",
        "url": "https://www.fda.gov/medical-devices/precision-medicine/table-pharmacogenetic-associations"
      },
      {
        "id": "fda-interazioni",
        "title": "FDA, Drug Development and Drug Interactions: Table of Substrates, Inhibitors and Inducers",
        "detail": "Consultata il 25/10/2026: evidenze in vitro/cliniche e nota della tabella 1-2 sulla dipendenza dalle condizioni del saggio. Non catalogo completo delle interazioni.",
        "url": "https://www.fda.gov/drugs/drug-interactions-labeling/drug-development-and-drug-interactions-table-substrates-inhibitors-and-inducers"
      },
      {
        "id": "fda-dipendenza",
        "title": "FDA, aggiornamento Boxed Warning della classe delle benzodiazepine, comunicazione 23/09/2020",
        "detail": "Pagina ufficiale aperta il 25/10/2026: definizione di physical dependence e rischio da associazione di depressori del SNC. Documento datato esplicitamente, senza schemi di trattamento/sospensione trasferiti.",
        "url": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class"
      },
      {
        "id": "fda-qt",
        "title": "FDA, ICH E14/S7B Questions and Answers, guidance finale agosto 2022",
        "detail": "Pagina FDA e allegato ufficiale aperti il 25/10/2026: Q16, passaggi nelle pagine PDF 18–19 (stampate 14–15), distinzione fra QT e rischio di torsade, esposizione, comorbilità e ipokaliemia. Letti questi passaggi, non l’intero documento; nessuno schema terapeutico trasferito.",
        "url": "https://www.fda.gov/media/161198/download"
      },
      {
        "id": "nih-disturbo-uso",
        "title": "NIH Health — Substance Use Disorders",
        "detail": "Pagina ufficiale aperta il 25/10/2026: definizione iniziale, Overview e Diagnosis; uso compulsivo o persistente nonostante danni e difficoltà a interrompere nel quadro di una valutazione complessiva. Nessun criterio diagnostico automatico, schema terapeutico o materiale di prevenzione trasferito.",
        "url": "https://health.nih.gov/health-topics-a-z/substance-use-disorder"
      }
    ],
    "checks": [
      {
        "question": "Dopo esposizione a un agonista la risposta diminuisce, ma il numero di recettori in membrana non cambia. Il dato esclude la desensibilizzazione?",
        "answer": "No. Può essersi ridotto l’accoppiamento alla via misurata senza perdita numerica dei recettori. Servono misure funzionali e dei componenti della segnalazione; il conteggio recettoriale da solo non identifica né esclude il fenomeno."
      },
      {
        "question": "Un recettore internalizzato deve essere considerato distrutto e completamente silente?",
        "answer": "No. Può essere riciclato o degradato; alcune piattaforme intracellulari possono sostenere segnali. Localizzazione, quantità totale e funzione sono osservazioni distinte da verificare."
      },
      {
        "question": "La risposta a due agonisti diversi diminuisce dopo stimolazione del primo. È dimostrata la perdita di entrambi i recettori?",
        "answer": "No. È compatibile anche con desensibilizzazione eterologa attraverso un componente condiviso. Occorre confrontare recettori e vie a valle, senza attribuire il risultato soltanto al loro numero."
      },
      {
        "question": "Una persona sviluppa astinenza dopo un uso terapeutico prolungato. Questo basta a diagnosticare un disturbo da uso di sostanze?",
        "answer": "No. L’astinenza può esprimere dipendenza fisica durante un uso conforme alla prescrizione. Il disturbo da uso richiede una valutazione del quadro comportamentale e clinico; tolleranza e dipendenza fisica non equivalgono da sole a quel disturbo."
      },
      {
        "question": "Una ridotta attività metabolica aumenta sempre l’effetto del farmaco?",
        "answer": "No. Può aumentare l’esposizione a una sostanza attiva eliminata da quella via, oppure ridurre la formazione della specie attiva di un profarmaco. Occorre ricostruire formazione ed eliminazione delle specie pertinenti."
      },
      {
        "question": "Perché eliminare un induttore può modificare la risposta all’altro farmaco anche successivamente?",
        "answer": "L’attività enzimatica torna verso il livello precedente secondo sintesi e turnover delle proteine, non soltanto secondo la scomparsa dell’induttore. Anche la sospensione modifica il sistema che determina l’esposizione."
      },
      {
        "question": "Un trasportatore di ingresso epatico viene inibito e la concentrazione plasmatica aumenta. Aumenta necessariamente anche la concentrazione nell’epatocita?",
        "answer": "No. La minore captazione può mantenere più sostanza nel sangue e ridurne l’ingresso nella cellula. La direzione dell’esposizione locale dipende dalla sede e dalla funzione del trasportatore."
      },
      {
        "question": "Due sostanze convergono sulla ripolarizzazione o sulla sedazione. Il meccanismo basta a prevedere l’esito individuale?",
        "answer": "No. Indica un possibile contributo al rischio; rilevanza ed esito dipendono da esposizioni, condizioni fisiologiche, altre interferenze e dati clinici. Una via condivisa non offre da sola una previsione deterministica."
      }
    ],
    "coverage": "Temi sviluppati: desensibilizzazione omologa/eterologa, GRK/arrestine, internalizzazione/riciclo/degradazione, down/up-regulation, tolleranza/tachifilassi, sensibilizzazione e potenziamento, dipendenza fisica/astinenza/rimbalzo/disturbo da uso, variabilità ed età/rene/fegato, genotipo-fenotipo, enzimi/trasportatori/bersagli, interazioni PK/PD, inibizione e induzione: tempi e profarmaci, trasportatori ed esposizione locale, convergenza su sedazione e ripolarizzazione, distinzione fra meccanismo, dato ed esito. Letture mirate documentate nel registro; questo capitolo non esaurisce il relativo ambito né la teoria dell’intera farmacologia.",
    "editorialReview": {
      "outcome": "pass",
      "path": "./data/desensibilizzazione-tolleranza-review.json",
      "sourceChapterSha256": "2e60aeeef7064d1a6357da3bff89fbc134be15ed48d700667059282e268acc40",
      "scope": "Revisione editoriale mirata; non validazione clinica specialistica"
    },
    "coverageDetail": {
      "type": "ampliamento_capitolo_esistente",
      "completedTopics": [
        "desensibilizzazione omologa/eterologa",
        "GRK/arrestine",
        "internalizzazione/riciclo/degradazione",
        "down/up-regulation",
        "tolleranza/tachifilassi",
        "sensibilizzazione e potenziamento",
        "dipendenza fisica/astinenza/rimbalzo/disturbo da uso",
        "variabilità ed età/rene/fegato",
        "genotipo-fenotipo, enzimi/trasportatori/bersagli",
        "interazioni PK/PD",
        "inibizione e induzione: tempi e profarmaci",
        "trasportatori ed esposizione locale",
        "convergenza su sedazione e ripolarizzazione",
        "distinzione fra meccanismo, dato ed esito"
      ],
      "excluded": [
        "dosi e schemi terapeutici",
        "prescrizione individuale",
        "equazioni PK o di affinità",
        "catalogo esaustivo delle interazioni",
        "tabelle storiche trasferite come attuali",
        "algoritmi farmacogenetici clinici"
      ],
      "sourceScope": "Letture mirate, non integrali, dichiarate in reading.json. Testo originale con principi da manuali e precisazioni ufficiali datate.",
      "remainingWork": [
        "revisione editoriale mirata e controllo incrociato delle fonti",
        "integrazione nell’app e controllo resa citazioni",
        "approfondimenti farmaco-specifici con fonti attuali dedicate"
      ],
      "wordCounts": {
        "lead": 42,
        "sections": 2543,
        "checks": 354
      },
      "clinicalReview": "Revisione clinica specialistica non eseguita né implicata dal controllo di un secondo agente."
    },
    "authorReviewStatus": "fonti_lette_revisione_editoriale_mirata_pendente",
    "readingManifest": "./data/desensibilizzazione-tolleranza-reading.json",
    "wordCount": 2539
  }
];
