# Sviluppo continuativo ELIX

Un solo lotto e un solo integratore alla volta. Questa chat integra e pubblica. Non riattivare vecchi checkout o aggiornatori, né assegnare capitoli già consegnati.

## Denominazioni pubbliche delle fonti

Per richiesta dell’utente usare «appunti e diapositive del corso di Farmacologia». Si possono precisare I o II, anno accademico, lezione, data e pagine. Nomi dei docenti e denominazioni informali dei materiali restano fuori dall’app e dai registri pubblici. La corrispondenza con gli originali resta nei registri privati. Titoli e autori dei libri e fonti ufficiali rimangono distinti.

## Lotto corrente

theory-course-666-670, candidato 0.74.0: due sezioni aggiunte e una ampliata nel capitolo asma; copertura aggiornata. Ora 32 sezioni, 8968 parole, 32 domande, 17 schemi originali e 27 riferimenti. Approfonditi IL-5/IL-5Rα, Fc e ADCC, IL-4Rα condivisa dai recettori I/II, interpretazione dei biomarcatori e dei rischi.

Un capitolo esistente ampliato; nessun nuovo capitolo, identità, sintesi farmacologica, profilo PK o laboratorio. Totale 61 capitoli, 17 estesi e 44 sintetici. Altri 60 capitoli invariati; ventotto altre sezioni e trenta domande precedenti del capitolo asma conservate.

La 0.73.0 è pubblicata e verificata al commit 646e3d26989956902525307f1cf59d45a5d8af27. Per batch e versione coincidenti la ricevuta successiva al deploy prevale sul checkpoint preparato prima della pubblicazione.

Cinque pagine nuove: corso I PDF 666–670, etichette 664–668. Due prevalentemente testuali e tre prevalentemente figurative (668–670). Riletti Katzung IX italiana 2014/XII americana 2012 PDF 415/editoriale 395; Rang & Dale VIII italiana 2016/originale 2015 PDF 539/542; appunti I lezione 17 del 25 novembre 2025 PDF 302, etichetta 297, pagina 10/15. Testi disponibili e testo incorporato nelle immagini letti; nove rendering controllati.

Sette pagine sostengono il lotto: corso 666–669, Katzung 415, Rang 542, appunti 302. Corso 670 e Rang 539 letti ma non integrati. Quattro nuove pagine integrate, tre precedentemente integrate riutilizzate. Copertura con hash: 88 controllate e 74 integrate. Rang 539 era già letta nel registro respiratorio storico, ma non ancora rappresentata nella catena con hash del capitolo: entra ora fra le pagine controllate, senza diventare una nuova lettura. Il registro storico non viene sommato automaticamente.

Deduplicazione in 97 registri nominati più registro respiratorio storico. Localizzazione automatica di termini in Rang 541–545, non lettura integrale dell’intervallo. Figure 28.1/28.2 di Rang controllate; articolo Cockcroft 1983 citato, originale non letto. OCR di Katzung IL-1 risolto in IL-5 tramite rendering. Nessuna modifica degli originali.

Corso 666: figura 25.4 senza volume/edizione identificati e schema sinistro senza attribuzione. Corso 667: diagramma recettoriale senza articolo identificato; ritaglio giornalistico del 4 luglio 2024 sulla BPCO letto ma non integrato. Tabelle JAMA del 1 ottobre 2025 e Lancet volume 395 del 1 febbraio 2020 riconosciute nelle pagine 668/669: articoli primari non letti. Figura JAMA 2017 negli appunti già presente nel corso 663, non conferma indipendente. Schema NAEPP 2020 della pagina 670 letto senza integrazione o attribuzione a GINA. Nessuna figura ripubblicata.

Distinti ligando e subunità recettoriale, neutralizzazione del segnale e deplezione cellulare. Esiti clinici separati dalla conta ematica. Ipotesi di rischio non trasferite come reazioni avverse accertate; nessun confronto numerico di sicurezza. Non adottati dupilumab per artrite reumatoide, immunogenicità come spiegazione universale, algoritmi storici, dosi, età o soglie universali.

Documenti ufficiali consultati selettivamente il 5 novembre 2026: GINA 2026, testo PDF 164–166/editoriali 163–165 nella copia ufficiale archiviata con hash; apertura web limitata dalla dimensione. Integrati soltanto anti-IL5/5R e anti-IL4R, esiti e biomarcatori. EMA Nucala §4.1 PDF 2–3, §5.1 meccanismo/farmacodinamica PDF 12. EMA Fasenra §4.1 PDF 2, §5.1 meccanismo/farmacodinamica PDF 7–8. EMA Dupixent presentazione 300 mg: §4.1 asma/poliposi/BPCO PDF 2–3; §4.4 riacutizzazioni, corticosteroidi, ipersensibilità, condizioni eosinofile, elminti e disturbi oculari PDF 8–9; §5.1 meccanismo/farmacodinamica PDF 16–17. Indicazione BPCO controllata ma non integrata. Date di revisione non dedotte. Figure ufficiali non controllate, documenti non letti integralmente, fuori dal conteggio locale. Nessuna nuova lettura GOLD, Farmacologia II o manuale molecolare; nessuna verifica delle autorizzazioni italiane o revisione clinica indipendente.

Controlli locali: 45 validatori, otto configurazioni desktop/tablet/mobile in due temi, fonti, tastiera, ricerche, collegamenti e offline. Aggiornamento reale 0.73.0→0.74.0 con dati salvati conservati; sei schermate ispezionate. Quattro originali verificati mediante hash. Chromium con dimensioni simulate, non dispositivi fisici.

Questo checkpoint precede CI, deploy e riscontro online. Prove in ../../outputs/ELIX-course-666-670-2026-11-05/. ../../outputs/ELIX-latest-verification.json va aggiornata soltanto dopo il deploy verificato.

## Regole

- Conservare ELIX, stile Isoelettrica, testata, logo trasparente, firma, dati locali e accessi /PHARMA/ e /eli/. Non modificare ISOELETTRICA, fonti originali o sincronizzate.
- Distinguere inventario, estrazione, lettura del testo, figure e revisione; deduplicare file e pagine prima di contare copertura.
- Sintesi e visualizzazioni originali: nessun PDF, trascrizione o figura della fonte pubblicati.
- Verificare dati, navigazione, desktop/mobile, temi, tastiera, offline e aggiornamento; poi CI, commit, deploy e contenuti online. Ricevuta soltanto dopo i controlli successivi al deploy.
- Nessun nuovo incarico ad altre chat o automazione; stato delle chat pertinenti in sola lettura se necessario.

## Prossimo intervallo

Completare prima CI, deploy e riscontro online del lotto 666–670. Al ciclo successivo deduplicare un solo intervallo PDF 671–675; teoria respiratoria prioritaria, farmaci, profili e laboratori nel backlog.
