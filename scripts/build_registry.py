"""Conservative, auditable identity matching. Absence is never non-authorisation."""
import csv,json,re,collections,html
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; CACHE=ROOT.parent/'evidence-cache'
def norm(s): return re.sub('[^a-z0-9]','',s.lower())
def dump(name,obj): (ROOT/'data'/name).write_text(json.dumps(obj,ensure_ascii=False,separators=(',',':')))
catalog=json.loads((ROOT/'data/catalog.json').read_text()); ms=catalog['molecules']
it_atc={r['CODICE_ATC']:r['DESCRIZIONE'] for r in csv.DictReader((CACHE/'atc.csv').open(encoding='utf-8-sig'),delimiter=';')}
atc_parents=collections.defaultdict(set)
for m in ms:
    for atc in m['atc']:atc_parents[atc].add(m['parent'] or m['id'])
alias=collections.defaultdict(set)
for m in ms:
    parent=m['parent'] or m['id']
    m.pop('italianName',None)
    for name in [m['name']]+m['aliases']:alias[norm(name)].add(parent)
    names=[it_atc[a] for a in m['atc'] if a in it_atc and len(atc_parents[a])==1 and len(a)==7 and 'ASSOCIAZION' not in it_atc[a]]
    if names:
        m['atcItalianLabel']=names[0].capitalize()
        # ATC translation is a retrieval alias, not a chemical equivalence proof.
        # ATC labels are search terms only: a class label can name a salt or prodrug.
        # Do not use these translations to establish chemical equivalence.
# Explicit reviewed Italian INN spellings; salt suffixes are not stripped generically.
reviewed={'BISOPROLOL':['bisoprololo','bisoprololo fumarato'],'METOPROLOL':['metoprololo','metoprololo tartrato','metoprololo succinato'],'NEBIVOLOL':['nebivololo','nebivololo cloridrato'],'CARVEDILOL':['carvedilolo'],'PROPRANOLOL':['propranololo','propranololo cloridrato'],'ATENOLOL':['atenololo'],'ENALAPRIL':['enalapril maleato'],'LOSARTAN':['losartan potassico'],'AMLODIPINE':['amlodipina','amlodipina besilato'],'VERAPAMIL':['verapamil cloridrato'],'DILTIAZEM':['diltiazem cloridrato'],'HYDROCHLOROTHIAZIDE':['idroclorotiazide'],'SPIRONOLACTONE':['spironolattone'],'ATORVASTATIN':['atorvastatina','atorvastatina calcio'],'ASPIRIN':['acido acetilsalicilico'],'CLOPIDOGREL':['clopidogrel idrogenosolfato','clopidogrel bisolfato'],'WARFARIN':['warfarin sodico'],'DIGOXIN':['digossina'],'AMIODARONE':['amiodarone cloridrato'],'NOREPINEPHRINE':['noradrenalina','noradrenalina tartrato'],'DOBUTAMINE':['dobutamina','dobutamina cloridrato'],'NITROGLYCERIN':['nitroglicerina'],'IVABRADINE':['ivabradina','ivabradina cloridrato'],'ALBUTEROL':['salbutamolo','salbutamolo solfato'],'HEPARIN':['eparina'],'HEPARIN SODIUM':['eparina sodica'],'HEPARIN CALCIUM':['eparina calcica'],'ENOXAPARIN SODIUM':['enoxaparina sodica'],'FONDAPARINUX':['fondaparinux sodico'],'DABIGATRAN ETEXILATE':['dabigatran etexilato','dabigatran etexilato mesilato'],'EDOXABAN':['edoxaban tosilato']}
for en,names in reviewed.items():
    m=next((m for m in ms if m['name']==en),None)
    if m:
        for name in names:alias[norm(name)].add(m['parent'] or m['id'])
def match(name):
    candidates=alias.get(norm(name),set())
    return next(iter(candidates)) if len(candidates)==1 else None
reg=collections.defaultdict(lambda:{'IT':[],'EU':[],'US':[]})
itcounts=collections.defaultdict(collections.Counter);seen=collections.defaultdict(set)
it_total=0
for r in csv.DictReader((CACHE/'confezioni_fornitura.csv').open(encoding='utf-8-sig'),delimiter=';'):
    it_total+=1; parent=match(r['PA_ASSOCIATI'])
    if not parent:continue
    itcounts[parent][r['STATO_AMMINISTRATIVO']]+=1
    key=(r['COD_FARMACO'],r['STATO_AMMINISTRATIVO'])
    if key in seen[parent]:continue
    seen[parent].add(key)
    reg[parent]['IT'].append({'name':r['DENOMINAZIONE'],'ingredient':r['PA_ASSOCIATI'],'status':r['STATO_AMMINISTRATIVO'],
       'id':r['CODICE_AIC'],'form':r['DESCRIZIONE'],'supply':r['FORNITURA'],'url':r['LINK_RCP'],'atc':r['CODICE_ATC']})
ema=json.loads((CACHE/'ema.json').read_text())
for r in ema['data']:
    if r['category']!='Human':continue
    parent=match(r['active_substance']) or match(r['international_non_proprietary_name_common_name'])
    if not parent:continue
    reg[parent]['EU'].append({'name':r['name_of_medicine'],'ingredient':r['active_substance'] or r['international_non_proprietary_name_common_name'],'status':r['medicine_status'] or 'Non specificato nella fonte',
      'opinion':r['opinion_status'],'id':r['ema_product_number'],'updated':r['last_updated_date'],'url':r['medicine_url'],
      'indication':html.unescape(re.sub('<[^>]*>',' ',r['therapeutic_indication']))})
fda=json.loads((CACHE/'drugsfda.json').read_text())
for r in fda['results']:
    products=r.get('products',[])
    # Only single-ingredient products are matched. Mixtures are deliberately not inferred.
    per_application={}
    for p in products:
        ing=p.get('active_ingredients',[])
        if len(ing)!=1:continue
        parent=match(ing[0]['name'])
        if not parent:continue
        per_application.setdefault((parent,p.get('marketing_status','Unknown')),p)
    for (parent,status),p in per_application.items():
        reg[parent]['US'].append({'name':p['brand_name'],'ingredient':p['active_ingredients'][0]['name'],
          'status':status,'id':r['application_number'],'form':p.get('dosage_form'),'route':p.get('route'),
          'url':'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo='+re.sub('[^0-9]','',r['application_number'])})
for parent,r in reg.items():
    r['ITcounts']=dict(itcounts[parent])
    for country in ['IT','EU','US']:
        r[country+'total']=len(r[country]);r[country+'statuses']=dict(collections.Counter(x['status'] for x in r[country]))
        r[country]=sorted(r[country],key=lambda x:(x['status'] not in ['Autorizzata','Authorised','Prescription','Over-the-counter'],x['name']))[:12]
dump('registry.json',{'meta':{'retrieved':'2026-10-20','emaUpdated':ema['meta']['timestamp'],'fdaUpdated':fda['meta'].get('last_updated','2026-10-16'),
  'aifaRows':it_total,'emaRows':len(ema['data']),'fdaApplications':len(fda['results']),
  'aifaUrl':'https://drive.aifa.gov.it/farmaci/confezioni_fornitura.csv',
  'emaUrl':'https://www.ema.europa.eu/en/medicines/download-medicine-data','fdaUrl':'https://open.fda.gov/apis/drug/drugsfda/',
  'matching':'Nomi/sinonimi normalizzati esatti e non ambigui; base e sali raggruppati secondo parent ChEMBL. Solo prodotti monocomponente. Nomi italiani aggiunti solo tramite mappature esplicite delle schede iniziali; le descrizioni ATC sono usate per la ricerca, non per provare identita chimica. Non abbinato non significa non autorizzato. EMA copre le procedure centralizzate, non tutte le autorizzazioni nazionali UE.'},'records':reg})
catalog['classes'].update({k:v.capitalize() for k,v in it_atc.items() if len(k)<7})
dump('catalog.json',catalog)
print('Registry matched families',len(reg),'IT',sum(bool(x['IT']) for x in reg.values()),'EU',sum(bool(x['EU']) for x in reg.values()),'US',sum(bool(x['US']) for x in reg.values()))
