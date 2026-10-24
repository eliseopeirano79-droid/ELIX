import assert from 'node:assert/strict';
import fs from 'node:fs';
import {NEURO_DRUG_BATCH as batch} from '../elix-neuro-drugs.js';
import {appendAllContentBatches} from '../elix-batch-registry.js';
import {reviewedProfiles,PK_FIELDS} from '../elix-pk-reviewed.js';
import {buildCatalogCoverage} from '../elix-coverage-audit.js';
import {neuroState} from '../elix-neuro-visuals.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const ed=read('data/editorial.json'),pk=read('data/pk-reviewed.json'),catalog=read('data/catalog.json');appendAllContentBatches(ed,pk);
assert.equal(new Set(ed.drugs.map(d=>d.chembl)).size,ed.drugs.length);
assert.equal(new Set(pk.sources.map(s=>s.id)).size,pk.sources.length);
let fields=0,gaps=0,numeric=0;
for(const [id,name] of [['CHEMBL407','FLUMAZENIL'],['CHEMBL807','MEMANTINE']]){
 assert.equal(catalog.molecules.find(m=>m.id===id)?.name,name);
 const d=batch.drugs.find(d=>d.chembl===id),p=batch.profiles.find(p=>p.applicableMoleculeIds.includes(id));
 assert.ok(d&&p);assert.ok(d.references.every(r=>batch.sources.some(s=>s.id===r.id)));
 for(const [key] of PK_FIELDS){const m=p.metrics[key];fields++;assert.ok(m.summary&&m.context&&m.substance&&m.measurementType);assert.deepEqual(m.sourceIds,[p.id]);if(m.values.length)numeric++;if(m.dataStatus==='not-reported'){gaps++;assert.equal(m.values.length,0);}}
 for(const salt of catalog.molecules.filter(m=>m.parent===id&&m.id!==id))assert.ok(!reviewedProfiles(salt,pk).some(x=>x.id===p.id));
}
assert.equal(fields,12);assert.equal(gaps,1);assert.equal(numeric,8);
const [flu,mem]=batch.profiles;
assert.deepEqual(flu.metrics.halfLife.values[0].range,[40,80]);assert.equal(flu.metrics.halfLife.values[0].unit,'min');
assert.match(flu.metrics.excretion.substance,/Radioattività/);assert.equal(flu.metrics.bioavailability.values.length,0);
assert.equal(mem.metrics.metabolism.values[0].denominator,'materiale circolante correlato alla memantina');
assert.equal(mem.metrics.excretion.values[1].denominator,'materiale recuperato');assert.equal(mem.metrics.excretion.values[1].relation,'>');
let states=0;
for(let n=0;n<8;n++){const s=Object.fromEntries(['gaba','benzodiazepine','flumazenil'].map((k,i)=>[k,!!(n&1<<i)]));const x=neuroState('GABAA',s);assert.equal(x.flow,s.gaba);assert.equal(x.code==='potentiated',s.gaba&&s.benzodiazepine&&!s.flumazenil);states++;}
for(let n=0;n<32;n++){const s=Object.fromEntries(['glutamate','coagonist','depolarized','ketamine','memantine'].map((k,i)=>[k,!!(n&1<<i)]));const x=neuroState('NMDAR',s);assert.equal(x.flow,s.glutamate&&s.coagonist&&s.depolarized&&!s.ketamine&&!s.memantine);states++;}
const report=buildCatalogCoverage({catalog,editorial:ed,pk,index:read('data/verified/index.json')});
assert.deepEqual([report.counts.records,report.counts.editorial,report.counts.profileContexts,report.counts.pkFields,report.counts.labelWithoutEditorial],[4225,95,65,390,93]);
console.log('NEURO_DRUGS_PASS',JSON.stringify({newIdentities:0,newSummaries:2,newProfiles:2,fields,gaps,numeric,states,counts:report.counts}));
