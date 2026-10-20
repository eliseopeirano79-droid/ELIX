import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync('app.js','utf8');
const original=vm.runInNewContext(source.slice(source.indexOf('const DRUGS'),source.indexOf('const TARGETS'))+';DRUGS');
const catalog=JSON.parse(fs.readFileSync('data/catalog.json')).molecules;
const english=['BISOPROLOL','METOPROLOL','NEBIVOLOL','CARVEDILOL','PROPRANOLOL','ATENOLOL','RAMIPRIL','ENALAPRIL','LOSARTAN','VALSARTAN','AMLODIPINE','VERAPAMIL','DILTIAZEM','FUROSEMIDE','HYDROCHLOROTHIAZIDE','SPIRONOLACTONE','EPLERENONE','ATORVASTATIN','ASPIRIN','CLOPIDOGREL','APIXABAN','WARFARIN','DIGOXIN','AMIODARONE','NOREPINEPHRINE','DOBUTAMINE','NITROGLYCERIN','IVABRADINE','DAPAGLIFLOZIN','ALBUTEROL'];
original.forEach((d,i)=>{d.chembl=catalog.find(m=>m.name===english[i])?.id;d.review='Sintesi didattica Alpha 0.3; fonti ufficiali collegate, revisione integrale ancora da completare.';});
const additions=[
 ['eparina','Eparina non frazionata','HEPARIN','Anticoagulanti','Antitrombina → IIa e Xa','Potenzia l’inibizione dei fattori della coagulazione mediata dall’antitrombina. L’attività anticoagulante e la clearance dipendono dalla dose. La preparazione comprende catene polisaccaridiche eterogenee.','Terapia e profilassi di eventi tromboembolici e impieghi procedurali secondo prodotto e via.','Emorragia e trombocitopenia indotta da eparina (HIT); monitoraggio della coagulazione e delle piastrine secondo contesto. Non confondere unità di attività con massa.'],
 ['enoxaparina','Enoxaparina','ENOXAPARIN SODIUM','Anticoagulanti','Eparina a basso peso molecolare','Potenzia l’attività dell’antitrombina, con attività anti-Xa relativamente maggiore dell’attività anti-IIa. È una miscela di frammenti polisaccaridici, non una singola molecola a formula unica.','Profilassi e trattamento tromboembolico; indicazioni coronariche previste dal prodotto.','Emorragia, HIT e accumulo in insufficienza renale. Non intercambiabile unità per unità con eparina non frazionata o altre EBPM.'],
 ['fondaparinux','Fondaparinux','FONDAPARINUX','Anticoagulanti','Pentasaccaride sintetico','Si lega all’antitrombina e potenzia selettivamente l’inibizione del fattore Xa. La molecola è troppo corta per il ponte necessario all’inibizione della trombina mediata dall’eparina.','Prevenzione e trattamento del tromboembolismo in indicazioni e popolazioni specifiche.','Eliminazione renale e rischio emorragico: verificare limiti di funzione renale, peso e indicazione nel RCP.'],
 ['rivaroxaban','Rivaroxaban','RIVAROXABAN','Anticoagulanti','Inibitore diretto Xa','Inibisce direttamente il fattore Xa libero e associato al complesso protrombinasi, riducendo la generazione di trombina senza richiedere antitrombina.','Fibrillazione atriale e tromboembolismo; altre indicazioni dipendono da dose, associazioni e prodotto.','Sanguinamento e interazioni P-gp/CYP3A. L’assorbimento delle dosi da 15 e 20 mg richiede attenzione al pasto; non trasferire schemi tra indicazioni.'],
 ['edoxaban','Edoxaban','EDOXABAN','Anticoagulanti','Inibitore diretto Xa','Inibitore diretto del fattore Xa: riduce la generazione di trombina.','Prevenzione tromboembolica nella fibrillazione atriale e trattamento del TEV secondo scheda del prodotto.','Sanguinamento, interazioni P-gp e dipendenza dalla funzione renale. La label USA contiene una limitazione specifica per CrCl >95 mL/min nella fibrillazione atriale non valvolare; verificare la giurisdizione.'],
 ['dabigatran','Dabigatran etexilato','DABIGATRAN ETEXILATE','Anticoagulanti','Profarmaco → inibitore diretto IIa','Il profarmaco etexilato viene convertito a dabigatran, inibitore diretto della trombina. La formula visualizzata qui è del profarmaco, non del metabolita attivo.','Prevenzione e trattamento tromboembolico secondo indicazione, età e formulazione.','Sanguinamento, funzione renale e interazioni P-gp. Le formulazioni orali non sono intercambiabili mg per mg; aprire la capsula altera l’esposizione.'],
 ['empagliflozin','Empagliflozin','EMPAGLIFLOZIN','Gliflozine','Inibitore SGLT2','Inibisce il cotrasportatore sodio-glucosio SGLT2 nel tubulo prossimale, riducendo il riassorbimento di glucosio e sodio.','Diabete tipo 2, scompenso cardiaco e malattia renale cronica nelle popolazioni definite dal prodotto.','Chetoacidosi anche senza iperglicemia marcata, deplezione di volume e infezioni genitali; rivalutare nei contesti di digiuno, malattia acuta o chirurgia.']
];
for(const [id,name,en,family,subgroup,mechanism,clinical,critical] of additions){const m=catalog.find(x=>x.name===en);original.push({id,name,family,subgroup,mechanism,clinical,critical,chembl:m.id,atc:m.atc[0],targets:[],review:'Sintesi dalla label USA collegata; non è una monografia clinica esaustiva.'});}
// All values below were checked against the exact product-label snapshots.
// Never coerce non-equivalent definitions (e.g. effective, apparent or anti-Xa half-life).
const pk={
 bisoprololo:['9–12 h','≈80% (10 mg orale)','Non sintetizzato','Orale; emivita aumentata nella riduzione della funzione renale.'],
 metoprololo:['3–7 h','77% relativa alla formulazione convenzionale','Non sintetizzato','Succinato a rilascio prolungato; 77% NON è biodisponibilità assoluta.'],
 nebivololo:['≈12 h / 19 h','Non determinata nella label','≈98%','d-nebivololo: metabolizzatori CYP2D6 estensivi / lenti.'],
 carvedilolo:['7–10 h','25–35%','>98%','Compresse orali; primo passaggio epatico.'],
 propranololo:['≈10 h','Non sintetizzata','≈90%','Capsule a rilascio prolungato: emivita apparente della formulazione selezionata.'],
 atenololo:['6–7 h','Non sintetizzata','6–16%','Orale; emivita prolungata negli anziani e nell’insufficienza renale.'],
 amlodipina:['30–50 h','64–90%','≈93%','Orale; emivita terminale.'],
 apixaban:['≈12 h','≈50% (dosi ≤10 mg)','≈87%','Orale; emivita apparente; escrezione renale ≈27% della clearance totale.'],
 warfarin:['20–60 h (media ≈40)','Non sintetizzata','≈99%','Emivita EFFETTIVA; fase terminale dopo dose singola ≈1 settimana. Effetto dipendente anche dal turnover dei fattori.'],
 eparina:['0,5–2 h','Dipende dalla via','Legame multiplo','Plasmatica e dose-dipendente; preparazione non frazionata.'],
 enoxaparina:['4,5 h → ≈7 h','≈100% SC, su attività anti-Xa','Non sintetizzato','Emivita dell’ATTIVITÀ anti-Xa: dose singola → dosi ripetute. Non confrontabile direttamente con un’emivita di concentrazione.'],
 fondaparinux:['17–21 h','100% SC','≥94% con antitrombina','Eliminazione renale; valori del fondaparinux sodico.'],
 rivaroxaban:['5–9 h / 11–13 h','Dose e pasto dipendenti','92–95%','Adulti sani 20–45 anni / anziani 60–76 anni; 20 mg a digiuno ≈66%, il cibo aumenta l’esposizione.'],
 edoxaban:['10–14 h','62%','≈55%','Orale; clearance renale ≈50% del totale.'],
 dabigatran:['12–17 h','3–7% (capsula integra)','≈35%','Emivita del DABIGATRAN attivo in adulti sani; clearance renale ≈80% del totale dopo somministrazione EV.'],
 dapagliflozin:['≈12,9 h','78% (10 mg)','Non sintetizzato','Emivita terminale dopo singola dose orale da 10 mg.'],
 empagliflozin:['≈12,4 h','Non sintetizzata','86,2%','Emivita terminale apparente stimata nell’analisi farmacocinetica di popolazione.']
};
Object.assign(pk,{
 ramipril:['13–17 h (ramiprilato)','Non sintetizzata','Ramipril ≈73%; ramiprilato ≈56%','Concentrazioni terapeutiche del metabolita dopo dosi ripetute 5–10 mg; la fase terminale legata ad ACE supera 50 h.'],
 enalapril:['11 h (enalaprilato)','Non sintetizzata','Non sintetizzato','Emivita effettiva di accumulo del metabolita dopo dosi multiple di enalapril maleato.'],
 losartan:['≈2 h; metabolita 6–9 h','≈33%','Frazione libera 1,3%; metabolita 0,2%','Emivite terminali distinte per principio attivo e metabolita. Dati del prodotto orale.'],
 valsartan:['≈6 h','≈25% (10–35%)','≈95%','La label riporta emivita media dopo EV; biodisponibilità riferita alla formulazione orale. La sospensione ha esposizione diversa dalla compressa.'],
 verapamil:['2–5 h','EV: non applicabile al confronto orale','Non sintetizzato','Prodotto INIETTABILE: fase terminale, distinta dalla fase distributiva di ≈4 minuti.'],
 diltiazem:['5–8 h','≈40% nella farmacologia del prodotto','70–80%','Capsule a rilascio prolungato: emivita apparente; la stessa fonte distingue dati delle formulazioni convenzionali.'],
 furosemide:['≈2 h','Compresse ≈64%; soluzione ≈60%','Elevato, soprattutto albumina','Emivita terminale. Biodisponibilità misurata in uomini sani a digiuno rispetto alla dose EV.'],
 idroclorotiazide:['5,6–14,8 h','Non sintetizzata','Non sintetizzato','Intervallo osservato seguendo le concentrazioni per almeno 24 h; eliminazione renale senza metabolismo.'],
 spironolattone:['1,4 h; canrenone 16,5 h','Non sintetizzata','>90% (farmaco e metaboliti)','Metaboliti attivi: TMS 13,8 h e HTMS 15 h. Il dato del solo spironolattone non descrive la durata complessiva.'],
 eplerenone:['3–6 h','69% (compressa 100 mg)','≈50%','Metabolismo prevalentemente CYP3A4; emivita di eliminazione.'],
 atorvastatina:['≈14 h; attività 20–30 h','≈14% del farmaco parent','≥98%','L’emivita dell’attività inibitoria HMG-CoA reduttasi include il contributo dei metaboliti.'],
 clopidogrel:['≈6 h; metabolita ≈30 min','Non sintetizzata','Non sintetizzato','Farmaco parent dopo 75 mg orali. Il blocco irreversibile P2Y12 persiste oltre la breve emivita del metabolita attivo.'],
 digossina:['1,5–2 giorni','60–80% (compresse)','≈25%','Volontari con funzione renale normale; nei pazienti anurici la fonte riporta 3,5–5 giorni.'],
 amiodarone:['Media 58 giorni (15–142)','≈50%','Non sintetizzato','Fase terminale apparente dopo dose singola in 12 soggetti sani; farmacocinetica multicompartimentale e accumulo. Metabolita DEA: media 36 giorni nello stesso studio.'],
 noradrenalina:['≈2,4 min','EV: non applicabile al confronto orale','≈25%','Emivita media della noradrenalina nella label della soluzione endovenosa.'],
 dobutamina:['2 min','EV: non applicabile al confronto orale','Non sintetizzato','Emivita plasmatica nell’uomo; prodotto endovenoso in destrosio.'],
 nitroglicerina:['Media 2–3 min','≈40%, variabile (sublinguale)','Non sintetizzato','Nitroglicerina parent; metaboliti 1,2- e 1,3-dinitro con emivite rispettivamente 36 e 32 minuti.'],
 ivabradina:['≈6 h effettiva','≈40%','Non sintetizzato','Definizione di emivita EFFETTIVA nella label USA selezionata, distinta dalla distribuzione di 2 h.'],
 salbutamolo:['≈6 h','Non sintetizzata per aerosol','Non sintetizzato','Emivita terminale dopo aerosol inalatorio nello studio della label; nello studio pediatrico 4–11 anni è riportata separatamente una media di 166 minuti.']
});
for(const d of original)if(pk[d.id])d.comparison={halfLife:pk[d.id][0],bioavailability:pk[d.id][1],binding:pk[d.id][2],context:pk[d.id][3],sourceLabel:d.id,checked:'2026-10-20'};
const classes=[
 {id:'anticoagulanti',name:'Anticoagulanti',family:'Anticoagulanti',sections:[
 ['Dove agiscono','La classe comprende meccanismi diversi: eparine e fondaparinux richiedono antitrombina; apixaban, rivaroxaban ed edoxaban inibiscono direttamente Xa; dabigatran inibisce IIa; warfarin interferisce con la rigenerazione della vitamina K. Il bersaglio comune è la formazione di fibrina, ma cinetica, monitoraggio e indicazioni non sono sovrapponibili.'],
 ['Struttura e funzione','L’eparina non frazionata è una distribuzione di catene. Le EBPM sono miscele prodotte con processi specifici. Fondaparinux è un pentasaccaride definito: la sua formula non può essere usata come formula dell’eparina. I farmaci diretti orali sono strutture discrete; per dabigatran distinguere profarmaco etexilato e molecola attiva.'],
 ['Confronto clinico','La scelta dipende da indicazione, funzione renale, rischio emorragico, interazioni, aderenza e condizioni valvolari. Le linee guida ESC 2024 per la fibrillazione atriale preferiscono i DOAC ai VKA nei pazienti eleggibili, con eccezioni come protesi meccaniche e stenosi mitralica. La preferenza di classe non rende i singoli farmaci intercambiabili.'],
 ['Come leggere la tabella','I numeri sono legati alla formulazione e alla popolazione della fonte. L’emivita anti-Xa dell’enoxaparina e l’emivita effettiva del warfarin misurano fenomeni diversi. Un’emivita più breve non dimostra maggiore sicurezza o superiorità clinica.'],
 ['Sicurezza e monitoraggio','Il sanguinamento è un rischio comune. Eparine: attenzione alla HIT; warfarin: monitoraggio INR; farmaci diretti: funzione renale e interazioni. Le sezioni controindicazioni, avvertenze, popolazioni speciali e studi clinici sono disponibili nella label del prodotto collegato.']
 ],labels:['eparina','enoxaparina','fondaparinux','apixaban','rivaroxaban','edoxaban','dabigatran','warfarin'],references:[{title:'ESC 2024 — fibrillazione atriale',url:'https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/atrial-fibrillation/'}]},
 {id:'beta-bloccanti',name:'Beta-bloccanti',family:'Beta-bloccanti',sections:[
 ['Recettori e selettività','L’antagonismo β1 riduce la risposta cardiaca e reninica alle catecolamine. La selettività è relativa e dipende dall’esposizione. Propranololo blocca anche β2; carvedilolo aggiunge il blocco α1. Non estendere automaticamente a tutta la classe proprietà vascolari o indicazioni di un singolo composto.'],
 ['Perché la formulazione conta','Metoprololo succinato a rilascio prolungato e propranololo a rilascio prolungato sono le formulazioni delle label selezionate. La durata di rilascio, l’emivita plasmatica e la durata dell’effetto sono concetti distinti. Le formulazioni convenzionali possono presentare valori diversi.'],
 ['Variabilità e sicurezza','CYP2D6 contribuisce alla variabilità di metoprololo e nebivololo. L’eliminazione renale è rilevante per atenololo e bisoprololo. Bradicardia, disturbi di conduzione e broncospasmo richiedono attenzione al singolo farmaco e al paziente; il trattamento non va modificato sulla sola selettività nominale.']
 ],labels:['bisoprololo','metoprololo','nebivololo','carvedilolo','propranololo','atenololo'],references:[]},
 {id:'gliflozine',name:'Gliflozine · SGLT2',family:'Gliflozine',sections:[
 ['Dal rene agli esiti clinici','L’inibizione di SGLT2 nel tubulo prossimale riduce il riassorbimento di glucosio e sodio. Un meccanismo comune non autorizza a trasferire automaticamente risultati di un trial a tutti i farmaci, dosaggi o gruppi di pazienti. Le label collegano le indicazioni ai rispettivi studi.'],
 ['Popolazioni e rischi','Le indicazioni comprendono contesti diabetologici, cardiaci e renali, con criteri differenti per prodotto. Valutare funzione renale, stato volemico e circostanze che favoriscono chetoacidosi, inclusa quella euglicemica. Le indicazioni cardiorenali non equivalgono alla sola efficacia ipoglicemizzante.'],
 ['Confronto','Dapagliflozin ed empagliflozin hanno emivite terminali intorno alle 12 ore nelle rispettive fonti. Questo dato non prova equivalenza terapeutica; i confronti di esito richiedono studi comparabili o confronti diretti.']
 ],labels:['dapagliflozin','empagliflozin'],references:[]}
];
fs.writeFileSync('data/editorial.json',JSON.stringify({checked:'2026-10-20',drugs:original,classes},null,2));
if(original.some(x=>!x.chembl))throw new Error('Unmapped drug');
console.log(original.length+' teaching profiles, '+Object.keys(pk).length+' sourced PK rows, '+classes.length+' expanded classes');
