"""Selected US product-label snapshots, with product/route/version preserved."""
import json,time,re,urllib.request,urllib.parse
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1];CACHE=ROOT.parent/'evidence-cache'; OUT=ROOT/'data/labels'; OUT.mkdir(exist_ok=True)
NAMES={'bisoprololo':'BISOPROLOL','metoprololo':'METOPROLOL SUCCINATE','nebivololo':'NEBIVOLOL','carvedilolo':'CARVEDILOL','propranololo':'PROPRANOLOL HYDROCHLORIDE','atenololo':'ATENOLOL','ramipril':'RAMIPRIL','enalapril':'ENALAPRIL','losartan':'LOSARTAN','valsartan':'VALSARTAN','amlodipina':'AMLODIPINE','verapamil':'VERAPAMIL','diltiazem':'DILTIAZEM','furosemide':'FUROSEMIDE','idroclorotiazide':'HYDROCHLOROTHIAZIDE','spironolattone':'SPIRONOLACTONE','eplerenone':'EPLERENONE','atorvastatina':'ATORVASTATIN','asa':'ASPIRIN','clopidogrel':'CLOPIDOGREL','apixaban':'APIXABAN','warfarin':'WARFARIN','digossina':'DIGOXIN','amiodarone':'AMIODARONE','noradrenalina':'NOREPINEPHRINE','dobutamina':'DOBUTAMINE','nitroglicerina':'NITROGLYCERIN','ivabradina':'IVABRADINE','dapagliflozin':'DAPAGLIFLOZIN','salbutamolo':'ALBUTEROL','eparina':'HEPARIN SODIUM','enoxaparina':'ENOXAPARIN SODIUM','fondaparinux':'FONDAPARINUX','rivaroxaban':'RIVAROXABAN','edoxaban':'EDOXABAN','dabigatran':'DABIGATRAN ETEXILATE','empagliflozin':'EMPAGLIFLOZIN'}
FIELDS=['description','mechanism_of_action','pharmacodynamics','pharmacokinetics','clinical_pharmacology','indications_and_usage','contraindications','boxed_warning','warnings_and_cautions','warnings','adverse_reactions','drug_interactions','use_in_specific_populations','pregnancy','pediatric_use','geriatric_use','clinical_studies','dosage_and_administration']
index={}
for key,name in NAMES.items():
    p=CACHE/('label-'+key+'.json')
    query='openfda.generic_name:"'+name+'"'
    url='https://api.fda.gov/drug/label.json?'+urllib.parse.urlencode({'search':query,'sort':'effective_time:desc','limit':20})
    try:
        if p.exists():d=json.loads(p.read_text())
        else:
            d=json.load(urllib.request.urlopen(url,timeout=60));p.write_text(json.dumps(d));time.sleep(.3)
        candidates=[r for r in d['results'] if len(r.get('openfda',{}).get('substance_name',[]))==1 and (r.get('pharmacokinetics') or r.get('clinical_pharmacology'))]
        if not candidates:raise ValueError('No single-substance label with pharmacology')
        r=candidates[0]; of=r['openfda']; fields={f:r[f] for f in FIELDS if r.get(f)}
        meta={'id':key,'query':name,'setId':r['set_id'],'effectiveDate':r['effective_time'],'retrieved':'2026-10-20','apiUpdated':d['meta']['last_updated'],
          'brand':of.get('brand_name'),'generic':of.get('generic_name'),'substance':of.get('substance_name'),'manufacturer':of.get('manufacturer_name'),
          'route':of.get('route'),'applications':of.get('application_number'),'url':'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid='+r['set_id'],
          'apiUrl':url,'selection':'Label USA monocomponente più recente tra i primi 20 risultati della ricerca indicata, con farmacologia disponibile. Non sostituisce RCP italiano; formulazione specifica.'}
        (OUT/(key+'.json')).write_text(json.dumps({'meta':meta,'sections':fields},ensure_ascii=False,separators=(',',':')))
        index[key]=meta
        print(key,r['effective_time'],of.get('generic_name'),of.get('route'),flush=True)
    except Exception as e:print('GAP',key,str(e),flush=True)
(ROOT/'data/labels-index.json').write_text(json.dumps(index,ensure_ascii=False,separators=(',',':')))
