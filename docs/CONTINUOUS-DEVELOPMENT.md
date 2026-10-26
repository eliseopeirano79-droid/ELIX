# Sviluppo continuativo ELIX

Un solo lotto e un solo integratore alla volta. Questa chat integra e pubblica. Non riattivare vecchi checkout o aggiornatori, né assegnare capitoli già consegnati.

## Lotto corrente

`theory-farmacogenomica`, versione 0.32.0: ampliamento del capitolo esistente in 22 sezioni, 3786 parole di corpo e 10 domande ragionate. Modello originale a sei stati: inattivazione o bioattivazione, con attività ridotta, di riferimento o aumentata. Dieci collegamenti a identità esistenti; nessuna nuova identità, sintesi di farmaco o PK. Corretto anche l'indice fisso: introduzioni lunghe non devono rendere irraggiungibili le ultime voci.

Testo estraibile letto: Katzung IX italiana2014/XII americana2012 PDF90–93; Rang & Dale8ª italiana2016 PDF224–230; Clementi/Fumagalli4ª2012 PDF688–690; slide Farmaco I Serpe2025–26 PDF203–220; sbobina Farmaco I lezione5 Serpe13/10/2025 raccoltaPDF104–114 (104 fuori tema); Farmaco II Collino lezione6 del06/11/2025 PDF13–14 e D'Avolio lezione15 del15/01/2026 PDF6, deduplicate rispetto alla raccolta. Totale46pagine di testo estraibile; soltanto11pagine controllate visivamente, elencate nel registro. Altre figure e corsi interi non dichiarati letti.

Riconciliati genotipo/fenotipo, fenoconversione, specie attiva, trasportatori, HLA, genoma germinale/somatico/patogeno. Aggiornamento CPIC tiopurine2025 pubblicato2026 distinto dalle fonti storiche; contesti EMA di DPD, abacavir e siponimod conservati. Fonti ufficiali consultate per passaggi selezionati, non integralmente. Controllo editoriale dell'integratore, non revisione clinica indipendente. Sette capitoli estesi su55.

La0.31.1 è pubblicata e verificata al commit `49fafbe5721a9f92b536f9fe98bd70ca0b5f5cd1`, PR22. Sono preservati i sei capitoli precedenti: recettori-e-legame, modelli-pk, gpcr, desensibilizzazione-tolleranza, tirosinchinasi e anticorpi-biologici.

Controlli locali0.32.0:35validatori,48combinazioni del nuovo capitolo,112dei precedenti,16branding; navigazione, ricerca, tastiera, link, offline e aggiornamento reale0.31.1→0.32.0 con dati salvati conservati. Questo checkpoint precede la pubblicazione. La ricevuta `../../outputs/ELIX-latest-verification.json` prevale per batch/versione coincidenti quando attesta deploy e verifiche online conclusi. Prove in `../../outputs/ELIX-pharmacogenomics-2026-10-26/`.

## Regole

- Conservare ELIX, stile Isoelettrica, testata, logo trasparente, firma, dati locali e accessi /PHARMA/ e /eli/. Non modificare ISOELETTRICA, fonti originali o sincronizzate.
- Distinguere inventario, estrazione, lettura del testo, figure e revisione; deduplicare file e pagine prima di contare copertura.
- Sintesi e visualizzazioni originali: nessun PDF, trascrizione o figura della fonte pubblicati.
- Verificare dati, navigazione, desktop/mobile, temi, tastiera, offline e aggiornamento; poi CI, commit, deploy e contenuti online. Ricevuta soltanto dopo i controlli successivi al deploy.
- Nessun nuovo incarico ad altre chat o altra automazione; stato delle chat pertinenti in sola lettura se necessario.

## Prossimo intervallo

Dopo la ricevuta0.32.0, riconciliare i registri prima di riprendere il testo di Farmaco I successivo a PDF114: intervallo candidato115–124, da deduplicare rispetto alle letture già svolte. Identificare argomento e intervalli corrispondenti di libri e slide prima di ampliare un solo capitolo esistente. Non rifare l'inventario Farmaco II già concluso. Collino, D'Avolio e Serpe non sono interamente letti. Visualizzazioni aggiuntive, farmaci mancanti e tolterodina restano nel backlog, subordinati alla teoria.
