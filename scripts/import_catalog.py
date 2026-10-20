"""Reproducible import of public ChEMBL and EMA records; no clinical inference."""
import json, urllib.request, urllib.parse, time, re
from pathlib import Path
from datetime import date

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT.parent / 'evidence-cache'
CACHE.mkdir(exist_ok=True)
BASE = 'https://www.ebi.ac.uk'
def get(url):
    for attempt in range(4):
        try:
            req=urllib.request.Request(url,headers={'User-Agent':'PHARMA educational atlas/0.4'})
            return json.load(urllib.request.urlopen(req, timeout=90))
        except Exception:
            if attempt == 3: raise
            time.sleep(2 * (attempt+1))
def collect(endpoint, key, query=''):
    path=CACHE/(endpoint+'.json')
    if path.exists(): return json.loads(path.read_text())
    rows=[]; url=f'{BASE}/chembl/api/data/{endpoint}.json?limit=1000'+query
    while url:
        d=get(url); rows.extend(d[key]); print(endpoint,len(rows),d['page_meta']['total_count'],flush=True)
        nxt=d['page_meta']['next']; url=BASE+nxt if nxt else None
    path.write_text(json.dumps(rows));return rows
def norm(s):return re.sub(r'[^a-z0-9]','',s.lower())
def main():
    molecules=collect('molecule','molecules','&max_phase=4')
    mechanisms=collect('mechanism','mechanisms')
    atcs=collect('atc_class','atc')
    ema_url='https://www.ema.europa.eu/en/documents/report/medicines-output-medicines_json-report_en.json'
    ema=get(ema_url); (CACHE/'ema.json').write_text(json.dumps(ema))
    by_mol={}
    for m in mechanisms:
        by_mol.setdefault(m['molecule_chembl_id'],[]).append({
            'text':m['mechanism_of_action'],'action':m['action_type'],'target':m['target_chembl_id'],
            'references':[{ 'title':r['ref_type']+' '+r['ref_id'],'url':r['ref_url']} for r in m['mechanism_refs'] if r.get('ref_url')]})
    compact=[]
    for m in molecules:
        p=m['molecule_properties'] or {}; st=m['molecule_structures'] or {}; hierarchy=m['molecule_hierarchy'] or {}
        compact.append({'id':m['molecule_chembl_id'],'name':m['pref_name'] or m['molecule_chembl_id'],
            'aliases':sorted(set(x['molecule_synonym'] for x in m['molecule_synonyms'] if x.get('molecule_synonym'))),
            'atc':m['atc_classifications'],'type':m['molecule_type'],'formula':p.get('full_molformula'),
            'mass':p.get('full_mwt'),'smiles':st.get('canonical_smiles'),'inchiKey':st.get('standard_inchi_key'),
            'parent':hierarchy.get('parent_chembl_id'),'withdrawn':bool(m['withdrawn_flag']),
            'veterinary':bool(m['veterinary']),'polymer':bool(m['polymer_flag']),
            'firstApproval':m['first_approval'],'mechanisms':by_mol.get(m['molecule_chembl_id'],[])})
    classes={}
    for a in atcs:
        for level in [1,2,3,4]:
            classes[a['level'+str(level)]]=a['level'+str(level)+'_description']
    out={'meta':{'retrieved':str(date.today()),'source':'ChEMBL','version':get(BASE+'/chembl/api/data/status.json')['chembl_db_version'],
       'url':'https://www.ebi.ac.uk/chembl/','license':'CC BY-SA 3.0','licenseUrl':'https://creativecommons.org/licenses/by-sa/3.0/',
       'scope':'Records con max_phase=4, inclusi sali, biologici, uso veterinario e ritirati. Non tutti i farmaci esistenti, né prova di autorizzazione attuale in un Paese.'},
       'classes':classes,'molecules':compact}
    (ROOT/'data/catalog.json').write_text(json.dumps(out,ensure_ascii=False,separators=(',',':')))
    print('Saved',len(compact),'molecules; EMA keys',list(ema)[:10],flush=True)
if __name__=='__main__':main()
