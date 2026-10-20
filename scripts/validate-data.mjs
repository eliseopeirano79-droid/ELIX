import fs from 'node:fs';
import assert from 'node:assert/strict';
const read=n=>JSON.parse(fs.readFileSync(`data/${n}.json`,'utf8'));
const catalog=read('catalog'), registry=read('registry'), ed=read('editorial'), labels=read('labels-index'), news=read('news');
const ids=new Set(catalog.molecules.map(m=>m.id));
assert.equal(ids.size,catalog.molecules.length,'Duplicate chemical identities');
assert(catalog.molecules.length>4000,'Incomplete catalogue import');
assert.equal(catalog.meta.license,'CC BY-SA 3.0');
const cutoff=new Date().toISOString().slice(0,10);
const validDate=d=>/^\d{4}-\d{2}-\d{2}$/.test(d)&&d<=cutoff;
assert(validDate(news.lastReviewed));
assert(news.windowStart<=news.windowEnd&&news.windowEnd<=news.lastReviewed);
assert.equal(new Set(news.items.map(n=>n.id)).size,news.items.length,'Duplicate news');
assert.equal(new Set(news.items.filter(n=>n.doi).map(n=>n.doi)).size,news.items.filter(n=>n.doi).length,'Duplicate DOI');
for(const n of news.items){
 for(const k of ['id','date','kind','publisher','title','summary','result','limitations','url','access','reviewed'])assert(n[k],`${n.id}: missing ${k}`);
 assert(validDate(n.date)&&validDate(n.reviewed)&&n.date<=n.reviewed);
 assert(new URL(n.url).protocol==='https:');
}
for(const d of ed.drugs){
 assert(ids.has(d.chembl),`Unknown editorial identity: ${d.id}`);
 if(d.comparison){assert(labels[d.comparison.sourceLabel],`Missing PK source: ${d.id}`);assert(validDate(d.comparison.checked));}
}
for(const [id,l] of Object.entries(labels)){
 const data=read('labels/'+id);assert.equal(l.setId,data.meta.setId);assert.equal(l.effectiveDate,data.meta.effectiveDate);
 assert(data.meta.substance.length===1,`Combination label: ${id}`);
 assert(/\d{8}/.test(l.effectiveDate));assert(l.effectiveDate<=cutoff.replaceAll('-',''));
 assert(Object.keys(data.sections).length>2);
}
const known={'eparina':/0\.5 to 2/,'enoxaparina':/4\.5 hours/,'apixaban':/12 hours/,'dabigatran':/12 to 17/,'edoxaban':/10 to 14/,'rivaroxaban':/5 to 9/,'propranololo':/10 hours/};
for(const [id,re] of Object.entries(known))assert(re.test(JSON.stringify(read('labels/'+id).sections)),`PK source changed, review ${id}`);
for(const [id,r] of Object.entries(registry.records)){
 for(const c of ['IT','EU','US'])for(const p of r[c])assert(p.id&&p.ingredient&&p.status&&/^https:\/\//.test(p.url),`Untraceable ${c} product ${id}`);
}
const heparin=catalog.molecules.find(m=>m.name==='HEPARIN');assert.equal(heparin.formula,null,'Do not assign a unique formula to heparin');
assert.equal(catalog.molecules.find(m=>m.name==='APIXABAN').formula,'C25H25N5O4');
assert(registry.records['CHEMBL231779'].IT.some(p=>p.ingredient==='APIXABAN'&&p.status==='Autorizzata'));
assert(registry.records['CHEMBL231779'].EU.some(p=>p.status==='Authorised'));
console.log(`PASS: ${ids.size} identities, ${ed.drugs.length} teaching profiles, ${Object.keys(labels).length} versioned labels, ${news.items.length} traceable news items.`);

// Exercise all new route renderers against real data; no browser or clinical validity implied.
globalThis.document={addEventListener(){}};
globalThis.fetch=async url=>({ok:true,json:async()=>JSON.parse(fs.readFileSync(new URL(url),'utf8'))});
const {createEvidenceAtlas}=await import('../evidence-atlas.js');
let signal;const ready=new Promise(r=>signal=r);
const app=createEvidenceAtlas({refresh:()=>signal(),legacyDrugs:ed.drugs});await ready;
for(const [p,id] of [['atlas'],['classes'],['compare'],['news'],['coverage'],...ed.classes.map(c=>['class',c.id]),...catalog.molecules.map(m=>['molecule',m.id])]){
 const html=app.route(p,id);assert(html&&html.includes('<'),'Empty route '+p+'/'+id);
 assert(!html.includes('NaN'),'Invalid value '+p+'/'+id);
 assert(!html.includes('</option '),'Malformed selector option '+p+'/'+id);
}
assert(app.route('molecule','missing').includes('Molecola non trovata'));
console.log('PASS: all molecule routes, class summaries, comparison, coverage, news and unknown identity render.');
