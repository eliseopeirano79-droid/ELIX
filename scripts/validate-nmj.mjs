import assert from 'node:assert/strict';
import fs from 'node:fs';
import {NMJ_BATCH as batch} from '../elix-nmj-batch.js';
import {appendAllContentBatches} from '../elix-batch-registry.js';
import {reviewedProfiles,PK_FIELDS} from '../elix-pk-reviewed.js';
import {buildCatalogCoverage} from '../elix-coverage-audit.js';
import {nmjState} from '../elix-nmj-visuals.js';
import {renderBatchPharmacology} from '../elix-content-batches.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const ed=read('data/editorial.json'),pk=read('data/pk-reviewed.json'),catalog=read('data/catalog.json');appendAllContentBatches(ed,pk);
assert.equal(new Set(ed.drugs.map(d=>d.chembl)).size,ed.drugs.length);
assert.equal(new Set(pk.sources.map(s=>s.id)).size,pk.sources.length);
let fields=0,gaps=0,numeric=0;
for(const [id,name] of [['CHEMBL1201244','ROCURONIUM'],['CHEMBL2111107','SUGAMMADEX']]){
 assert.equal(catalog.molecules.find(m=>m.id===id)?.name,name);
 const d=batch.drugs.find(d=>d.chembl===id),p=batch.profiles.find(p=>p.applicableMoleculeIds.includes(id));assert.ok(d&&p);
 assert.ok(d.references.every(r=>batch.sources.some(s=>s.id===r.id)));
 for(const [key] of PK_FIELDS){const m=p.metrics[key];fields++;assert.ok(m.summary&&m.context&&m.substance&&m.measurementType);assert.deepEqual(m.sourceIds,[p.id]);if(m.values.length)numeric++;if(m.dataStatus==='not-reported'){gaps++;assert.equal(m.values.length,0);}}
 for(const salt of catalog.molecules.filter(m=>m.parent===id&&m.id!==id))assert.ok(!reviewedProfiles(salt,pk).some(x=>x.id===p.id));
}
assert.equal(fields,12);assert.equal(gaps,4);assert.equal(numeric,4);
const [roc,sug]=batch.profiles;
assert.equal(roc.metrics.halfLife.values[0].value,73);assert.equal(roc.metrics.halfLife.values[0].statistic,'mean');assert.deepEqual(roc.metrics.halfLife.values[0].confidenceInterval,[66,80]);assert.ok(!roc.metrics.halfLife.values[0].range);
assert.match(sug.population,/somma.*libero.*complesso/);assert.equal(sug.metrics.proteinBinding.values.length,0);
assert.equal(sug.metrics.excretion.values[0].denominator,'dose somministrata');assert.equal(sug.metrics.excretion.values[1].denominator,'recupero urinario');
assert.deepEqual(batch.drugs[1].targets,[]);assert.match(renderBatchPharmacology(batch.drugs[1],batch.sources),/collegamento funzionale/);
let states=0;for(let stage=0;stage<5;stage++)for(const ach of [false,true]){const x=nmjState(stage,ach);assert.equal(x.flow,ach&&stage!==2&&stage!==3);assert.equal(x.captured,stage>=3);states++;}
assert.equal(nmjState(3,true).code,'capture-blocked');assert.equal(nmjState(4,false).flow,false);
globalThis.document={addEventListener(){},getElementById(){return null}};const {createReceptorAtlas}=await import('../receptors.js');const rx=createReceptorAtlas({drugs:[],refresh(){}});
assert.match(rx.route('receptors','NACHR_MUSCLE'),/elix-nmj-lab/);assert.match(rx.route('receptors','NACHR_MUSCLE'),/#\/drug\/rocuronio/);assert.doesNotMatch(rx.route('receptors','NACHR_MUSCLE'),/#\/drug\/sugammadex/);
const report=buildCatalogCoverage({catalog,editorial:ed,pk,index:read('data/verified/index.json')});assert.deepEqual([report.counts.records,report.counts.editorial,report.counts.profileContexts,report.counts.pkFields,report.counts.labelWithoutEditorial],[4225,92,62,372,93]);
const manifest=read('data/nmj-reading.json');assert.deepEqual(manifest.books[0].pdfPages,[253,254,268,269,270,271]);assert.equal(manifest.officialSources[2].fullTextRead,false);
const sw=fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8');for(const f of ['elix-nmj-batch.js','elix-nmj-visuals.js','elix-nmj.css'])assert.ok(sw.includes(f));
console.log('NMJ_PASS',JSON.stringify({states,fields,gaps,numeric,newIdentities:0,newSummaries:2,newProfiles:2,counts:report.counts}));
