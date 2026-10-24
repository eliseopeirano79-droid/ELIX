# Sviluppo continuativo ELIX

Procedere con un solo lotto alla volta. Riprendere il lavoro incompleto prima di aprirne un altro. Consultare `data/development-progress.json`, Git e l'ultimo risultato della chat; non sovrapporre modifiche a una consegna in corso.

## Consegna corrente

Lotto `neuro-drug-profiles`, versione 0.16.0: flumazenil e memantina erano già identità nel catalogo; ora ricevono due sintesi proprie, due contesti farmacocinetici di prodotto e dodici campi strutturati. I laboratori GABA-A e NMDA e due capitoli esistenti includono confronti dedicati. Letture precise e limiti sono in `data/neuro-drugs-reading.json`.

Il precedente lotto dei canali 0.15.1 è pubblicato e verificato al commit `56756b9180c3489ac6971e097533d14cadc2c645`; la correzione del reset durante il caricamento lento è verificata. Non ripetere quella consegna.

Il checkpoint è preparato prima della pubblicazione. La ricevuta in `../../outputs/ELIX-latest-verification.json` prevale solo quando batch e versione coincidono e certifica deploy e verifica online conclusi. Se non coincide, completare gli elementi residui del checkpoint.

## Regole di completamento

- Conservare ELIX, grafica Isoelettrica, testata, firma e dati locali. Non modificare ISOELETTRICA né materiali sincronizzati o PDF originali.
- Registrare edizione e pagine effettivamente lette. Nessun libro è dichiarato letto integralmente. Pubblicare soltanto sintesi e disegni originali.
- Distinguere meccanismi, indicazioni autorizzate del prodotto e linee guida. Ogni dato farmacocinetico mantiene via, popolazione e riferimento.
- Verificare dati, collegamenti, controlli interattivi, desktop/mobile e temi. Pubblicare solo dopo i controlli pertinenti.
- Verificare commit remoto, deploy concluso e app online. Conservare il funzionamento dei vecchi indirizzi.
- Registrare i risultati reali e le lacune. Poi avviare il lotto successivo nel ciclo programmato; non avviare lavori duplicati.

## Coda dopo questo lotto

Solo dopo pubblicazione e verifica: recettore nicotinico neuromuscolare e rocuronio / sugammadex. Il 24/10/2026 le identità CHEMBL1201244 e CHEMBL2111107 sono presenti, prive di sintesi propria e profilo PK. Verificare i prodotti ufficiali e leggere un intervallo pertinente dei testi. Distinguere il blocco del recettore dalla cattura del bloccante da parte di sugammadex. Non assegnare a sugammadex un antagonismo nicotinico diretto.
