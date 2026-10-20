# PHARMA — Interactive Pharmacology Atlas · Alpha 0.3

**App made by Eliseo Peirano · 2026.**

Questa versione parte direttamente dalla Alpha 0.2 e preserva atlante, laboratory pathway, ADME, quiz e casi. Il restyling è stato sviluppato dopo aver consultato il repository ISOELETTRICA (branch `main`, `index.html`, `app.js`, `atlas-theme.css`; 20 ottobre 2026): https://github.com/eliseopeirano79-droid/Isoelettrica

## Aprire

- **Sito:** https://eliseopeirano79-droid.github.io/PHARMA/
- **Progetto PWA:** esegui `python3 -m http.server 8080` nella cartella del progetto, quindi apri http://localhost:8080. Installazione su HTTPS o localhost, non file://.
- **Origine:** pacchetto originale `PHARMA-Alpha03-pronta-per-Dock-e-GitHub-Pages.zip`. La versione standalone e i checkpoint precedenti sono allegati separati della conversazione originaria, non inclusi in questo repository.

## Modifiche Alpha 0.3

- Nuova interfaccia con barra di navigazione orizzontale, breadcrumbs, pannelli coerenti, temi salvia/petrolio e verde/grigio; titoli editoriali e impostazioni responsive in stile ISOELETTRICA.
- Comando chiaro/scuro sempre accessibile nell'intestazione, etichetta accessibile, preferenza persistente nel browser. Prima apertura rispetta le preferenze di sistema quando nessuna scelta è salvata.
- Firma **App made by Eliseo Peirano · 2026** in piè di pagina, intestazione larga e menu mobile.
- Non sono state sostituite le schede, le regole del caso clinico o il motore della curva PK/PD.

## Stato scientifico

- 30 principi attivi redatti manualmente (demo), 3 modelli recettoriali qualitativi, 5 casi di cui un caso ramificato, 10 quiz. Non validati clinicamente.
- Il percorso propranololo → β1/β2 → decisione nel caso con asma rimane didattico, con monitoraggio qualitativo e debrief.
- AIFA/EMA non sincronizzate; classi, condizioni di prescrizione, AIC, Note, confezioni, RCP e FI **non importati**.
- La fonte USA DailyMed è separata dai riferimenti italiani.
- Le animazioni delle cascate non sono modelli fisiologici quantitativi. Il simulatore PK/PD usa parametri ipotetici, non dati clinici.

## Fonti disponibili nel prodotto

- https://www.guidetopharmacology.org/ (bersagli, riferimento generale)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4718210/ (β-adrenorecettori)
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1791ef4d-b609-41c8-b4ef-15bff752ddd7 (propranololo, etichetta USA)
- https://medicinali.aifa.gov.it/ (AIFA, consultazione esterna; non importata)
- https://plm-portal.ema.europa.eu/Guidance/article/KA-02917/en-us (EMA, annuncio API beta; non integrata)
- https://reactome.org/license (licenze pathway, nessuna figura copiata)

## Verifica

`VERIFICA-INTERAZIONI.json` e `VERIFICA-PUBBLICAZIONE.json` conservano i risultati storici inclusi nel pacchetto originale; non attestano la successiva pubblicazione HTTPS.

## Distribuzione e aggiornamenti dal Dock

Vedi `COME_PUBBLICARE.txt`. Il service worker usa strategia network-first, così le versioni pubblicate sono preferite alle copie offline; i risultati di quiz e preferenze del tema restano nel browser utilizzato.
