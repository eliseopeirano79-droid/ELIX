# Sviluppo continuativo ELIX

Procedere con un solo lotto alla volta. Riprendere il lavoro incompleto prima di aprirne un altro. Consultare `data/development-progress.json`, Git e l'ultimo risultato della chat; non sovrapporre modifiche a una consegna in corso.

## Consegna corrente

Lotto `acetylcholinesterase-lab`, versione 0.18.0: un laboratorio originale in cinque scenari distingue degradazione di ACh, inibizione dell’enzima e antagonismo muscarinico. Neostigmina e piridostigmina erano già identità nel catalogo; ricevono due sintesi, due contesti PK e dodici campi (nove documentati, tre lacune esplicite). Le vie parenterale e orale mantengono i propri riferimenti. Letture e limiti sono in `data/ache-reading.json`.

Il precedente lotto 0.17.0 è pubblicato e verificato al commit `314767aab52517c6d1b250e6041d284e2d0f5dc6`; non ripeterlo.

Il checkpoint è preparato prima della pubblicazione. La ricevuta in `../../outputs/ELIX-latest-verification.json` prevale solo quando batch e versione coincidono e certifica deploy e verifica online conclusi. Se non coincide, completare gli elementi residui del checkpoint.

## Regole di completamento

- Conservare ELIX, grafica Isoelettrica, testata, firma e dati locali. Non modificare ISOELETTRICA né materiali sincronizzati o PDF originali.
- Registrare edizione e pagine effettivamente lette. Nessun libro è dichiarato letto integralmente. Pubblicare soltanto sintesi e disegni originali.
- Distinguere meccanismi, indicazioni autorizzate del prodotto e linee guida. Ogni dato farmacocinetico mantiene via, popolazione e riferimento.
- Verificare dati, collegamenti, controlli interattivi, desktop/mobile e temi. Pubblicare solo dopo i controlli pertinenti.
- Verificare commit remoto, deploy concluso e app online. Conservare il funzionamento dei vecchi indirizzi.
- Registrare i risultati reali e le lacune. Poi avviare il lotto successivo nel ciclo programmato; non avviare lavori duplicati.

## Coda dopo questo lotto

Solo dopo pubblicazione e verifica: Amifampridina CHEMBL354077 e trasmissione presinaptica nella sindrome di Lambert–Eaton: identità presente, sintesi propria e profilo PK assenti al 24/10/2026. Verificare prodotto e linee guida attuali, distinguere rilascio di ACh, degradazione del trasmettitore e bersagli postsinaptici; leggere un intervallo mirato e sviluppare una visualizzazione originale. Il sale CHEMBL3301611 è distinto: evitare doppioni e trasferimenti PK automatici.
