# Sviluppo continuativo ELIX

Un solo lotto e un solo integratore alla volta. Questa chat integra e pubblica. Non riattivare vecchi checkout o aggiornatori, né assegnare capitoli già consegnati.

## Denominazioni pubbliche delle fonti

Per esplicita richiesta dell’utente del 27/10/2026 usare «appunti e diapositive del corso di Farmacologia». Si possono precisare I o II, anno accademico, lezione, data e pagine. Non citare i nomi dei docenti o denominazioni informali dei materiali nell’app, nelle note delle figure e nei registri pubblici. La corrispondenza con le fonti originali resta nei registri privati esterni alla pubblicazione. I titoli e gli autori dei libri e delle fonti ufficiali restano distinti.

## Lotto corrente

`theory-antidepressivi`, versione 0.35.0: un nuovo capitolo esteso di 24 sezioni e 3.489 parole, dieci domande ragionate, nove collegamenti a identità già presenti e un laboratorio originale con sei viste qualitative della sinapsi. Nessuna nuova identità, sintesi di farmaco o scheda farmacocinetica. I 55 capitoli precedenti rimangono identici; il totale passa a 56, di cui dieci estesi e 46 ancora sintetici.

La 0.34.1 è pubblicata e verificata al commit `83f7f727dacb9b76b8e1e7308219c19c84adce11`. La PR 27 ha risolto il limite di tempo dei controlli automatici senza cambiare l’app o ridurre i test; tutti i controlli e il deploy sono conclusi con successo.

Lettura del lotto corrente: 58 nuove pagine di testo estraibile in cinque file, quattro pagine già lette riutilizzate senza ricontarle e 14 pagine controllate visivamente. Fonti e conflitti sono delimitati in `data/antidepressivi-reading.json`; nove fonti ufficiali confrontate selettivamente. Restano incompleti libri, corsi e revisione clinica indipendente. La provenienza originale dei materiali del corso resta privata.

Controlli locali conclusi: 38 validatori, 48 configurazioni del nuovo laboratorio, 248 dei capitoli precedenti e 16 di branding; aggiornamento reale 0.34.1 → 0.35.0, tastiera, ricerca, navigazione e offline. Schermate desktop/mobile ispezionate, con dimensioni simulate in Chromium.

Questo checkpoint precede la pubblicazione. La ricevuta `../../outputs/ELIX-latest-verification.json` prevale per batch/versione coincidenti quando attesta deploy e verifiche online conclusi. Prove in `../../outputs/ELIX-antidepressants-2026-10-27/`. Prima di iniziare altro, completare i controlli e la pubblicazione di questo lotto.

## Regole

- Conservare ELIX, stile Isoelettrica, testata, logo trasparente, firma, dati locali e accessi /PHARMA/ e /eli/. Non modificare ISOELETTRICA, fonti originali o sincronizzate.
- Distinguere inventario, estrazione, lettura del testo, figure e revisione; deduplicare file e pagine prima di contare copertura.
- Sintesi e visualizzazioni originali: nessun PDF, trascrizione o figura della fonte pubblicati.
- Verificare dati, navigazione, desktop/mobile, temi, tastiera, offline e aggiornamento; poi CI, commit, deploy e contenuti online. Ricevuta soltanto dopo i controlli successivi al deploy.
- Nessun nuovo incarico ad altre chat o altra automazione; stato delle chat pertinenti in sola lettura se necessario.

## Prossimo intervallo

Dopo la verifica online del lotto corrente, completare l’inquadramento della depressione e dei circuiti con Rang & Dale PDF 869–874 e Clementi/Fumagalli PDF 321–325, deduplicando prima i registri. Queste pagine non sono ancora lette in questo lotto. Integrare solo informazioni sostenute, senza dichiarare completo il corso. Farmaci mancanti e altri laboratori restano nel backlog, subordinati alla teoria.
