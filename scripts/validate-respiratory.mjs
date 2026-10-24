import assert from 'node:assert/strict';
import fs from 'node:fs';
import {RESPIRATORY_BATCH as batch} from '../elix-respiratory-batch.js';
import {appendAllContentBatches} from '../elix-batch-registry.js';
import {reviewedProfiles,PK_FIELDS} from '../elix-pk-reviewed.js';
import {buildCatalogCoverage} from '../elix-coverage-audit.js';
import {AIRWAY_PATHS,renderAirwayLab} from '../elix-respiratory-visuals.js';
import {ELIX_CHAPTERS} from '../elix-content.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
const ed=read('data/editorial.json'),pk=read('data/pk-reviewed.json'),catalog=read('data/catalog.json');
appendAllContentBatches(ed,pk);
assert.equal(new Set(ed.drugs.map(d=>d.chembl)).size,ed.drugs.length);
assert.equal(new Set(pk.sources.map(d=>d.id)).size,pk.sources.length);
const expected={formoterolo:'FORMOTEROL',tiotropio:'TIOTROPIUM',ipratropio:'IPRATROPIUM',montelukast:'MONTELUKAST'};
let fields=0,missing=0;
for(const d of batch.drugs){
 assert.equal(catalog.molecules.find(m=>m.id===d.chembl)?.name,expected[d.id]);
 const p=batch.profiles.find(p=>p.applicableMoleculeIds.includes(d.chembl));
 assert.ok(p&&p.sourceIds.every(id=>batch.sources.some(s=>s.id===id)));
 assert.ok(d.targets.every(t=>AIRWAY_PATHS[t]));
 for(const [key] of PK_FIELDS){const m=p.metrics[key];fields++;assert.ok(m.summary&&m.substance&&m.context&&m.measurementType&&m.sourceIds.length);if(m.dataStatus==='not-reported'){missing++;assert.equal(m.values.length,0);}}
 for(const salt of catalog.molecules.filter(m=>m.parent===d.chembl&&m.id!==d.chembl))assert.ok(!reviewedProfiles(salt,pk).some(x=>x.id===p.id),'Do not inherit product PK through chemical parent');
}
assert.equal(fields,24);assert.equal(missing,3);
const ipra=batch.profiles.find(p=>p.id==='resp-ipratropio');assert.equal(ipra.metrics.halfLife.values.length,0);assert.match(ipra.metrics.halfLife.detail,/radioattività totale/);
const tio=batch.profiles.find(p=>p.id==='resp-tiotropio');assert.equal(tio.metrics.bioavailability.values[0].value,33);assert.match(tio.metrics.halfLife.measurementType,/efficace/);
assert.equal(batch.profiles.find(p=>p.id==='resp-montelukast').metrics.halfLife.values.length,0);
assert.equal(batch.profiles.find(p=>p.id==='resp-formoterolo').metrics.bioavailability.values[0].denominator,'dose erogata');
const report=buildCatalogCoverage({catalog,editorial:ed,pk,index:read('data/verified/index.json')});
assert.deepEqual([report.counts.editorial,report.counts.profileContexts,report.counts.pkFields,report.counts.labelWithoutEditorial],[89,59,354,93]);
const chapter=ELIX_CHAPTERS.find(c=>c.id==='asma-e-broncodilatatori');assert.ok(chapter.sources.includes('gold-2026'));assert.ok(chapter.targets.includes('CYSLTR1'));
globalThis.document={addEventListener(){},getElementById(){return null}};
const {createReceptorAtlas}=await import('../receptors.js');const atlas=createReceptorAtlas({drugs:[],refresh(){}});
for(const id of Object.keys(AIRWAY_PATHS)){
 const html=atlas.route('receptors',id);assert.ok(html.includes(renderAirwayLab(id)));
 for(const d of batch.drugs.filter(d=>d.targets.includes(id)))assert.ok(html.includes('#/drug/'+d.id));
}
const sw=fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8');for(const file of ['elix-respiratory-visuals.js','elix-respiratory-batch.js','elix-respiratory.css'])assert.ok(sw.includes(file));
console.log('RESPIRATORY_PASS',JSON.stringify({newSummaries:4,newProfiles:4,fields,sourceGaps:missing,newTargets:2,interactivePaths:3,counts:report.counts}));
