# Sviluppo continuativo ELIX

Procedere con un solo lotto alla volta. Riprendere il lavoro incompleto prima di aprirne un altro. Consultare `data/development-progress.json`, Git e l’ultimo risultato della chat; non sovrapporre modifiche a una consegna in corso.

## Consegna corrente

Lotto `axon-conduction-lab`, versione 0.20.0: laboratorio originale in quattro scenari sulla conduzione nell’assone, con mielina e canali K⁺ distinti. Fampridina/dalfampridina era già un’identità del catalogo; riceve una sintesi, un contesto PK UE orale a rilascio prolungato e sei campi documentati. La biodisponibilità assoluta resta esplicitamente non valutata. Il modello non predice recupero individuale o riparazione della mielina. Letture, riletture e limiti sono in `data/axon-reading.json`.

Il precedente lotto 0.19.0 è pubblicato e verificato al commit `649125735f49443a10e6aaea4ee7ef6f664ce603`; non ripeterlo.

Il checkpoint è preparato prima della pubblicazione. La ricevuta in `../../outputs/ELIX-latest-verification.json` prevale solo quando batch e versione coincidono e certifica deploy e verifica online conclusi. Se non coincide, completare gli elementi residui del checkpoint.

## Regole di completamento

- Conservare ELIX, grafica Isoelettrica, testata, firma e dati locali. Non modificare ISOELETTRICA né materiali sincronizzati o PDF originali.
- Registrare edizione e pagine effettivamente lette. Nessun libro è dichiarato letto integralmente. Pubblicare soltanto sintesi e disegni originali.
- Distinguere meccanismi, indicazioni autorizzate del prodotto e linee guida. Ogni dato farmacocinetico mantiene via, popolazione e riferimento.
- Verificare dati, collegamenti, controlli interattivi, desktop/mobile e temi. Pubblicare solo dopo i controlli pertinenti.
- Verificare commit remoto, deploy concluso e app online. Conservare il funzionamento dei vecchi indirizzi.
- Registrare i risultati reali e le lacune. Poi avviare il lotto successivo nel ciclo programmato; non avviare lavori duplicati.

## Coda dopo questo lotto

Solo dopo pubblicazione e verifica: Fingolimod CHEMBL314854: identità presente, sintesi propria e profilo PK assenti al 24/10/2026. Verificare il prodotto UE, fosforilazione al metabolita attivo e recettori S1P; distinguere sequestro linfocitario e controllo della malattia dal beneficio sintomatico della fampridina. Prima leggere un intervallo mirato e fonti attuali; non iniziare prima della consegna 0.20 verificata.
