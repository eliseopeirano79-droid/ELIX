import assert from 'node:assert/strict';
import fs from 'node:fs';
import {neuroState,NEURO_LABS} from '../elix-neuro-visuals.js';
import {ELI_CLINICAL_BATCH} from '../eli-clinical-batch.js';
import {ADDITIONAL_TARGETS} from '../elix-targets.js';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {appendAllContentBatches} from '../elix-batch-registry.js';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p,import.meta.url)));
let states=0;
for(const gaba of [false,true])for(const benzodiazepine of [false,true]){const x=neuroState('GABAA',{gaba,benzodiazepine});assert.equal(x.flow,gaba,'BZD alone must not open GABA-A');assert.equal(x.code,gaba?(benzodiazepine?'potentiated':'open'):'closed');states++;}
for(let n=0;n<16;n++){const s=Object.fromEntries(['glutamate','coagonist','depolarized','ketamine'].map((k,i)=>[k,!!(n&1<<i)]));const x=neuroState('NMDAR',s);assert.equal(x.flow,s.glutamate&&s.coagonist&&s.depolarized&&!s.ketamine);if(s.glutamate&&s.coagonist)assert.equal(x.code,!s.depolarized?'magnesium':s.ketamine?'ketamine':'open');states++;}
assert.equal(neuroState('unknown',{}),null);
globalThis.document={addEventListener(){},getElementById(){return null}};
const {createReceptorAtlas}=await import('../receptors.js');const rx=createReceptorAtlas({drugs:[],refresh(){}});
const ed=read('data/editorial.json'),pk=read('data/pk-reviewed.json');appendAllContentBatches(ed,pk);
assert.equal(ed.drugs.length,89);assert.equal(pk.profiles.length,59);assert.equal(new Set(ed.drugs.map(d=>d.chembl)).size,89);
for(const [id,target] of [['diazepam','GABAA'],['lorazepam','GABAA'],['midazolam','GABAA'],['ketamina','NMDAR']]){
 assert.ok(ed.drugs.find(d=>d.id===id).targets.includes(target));
 assert.match(rx.route('receptors',target),new RegExp('#/drug/'+id));
 assert.ok(ELI_CLINICAL_BATCH.drugs.find(d=>d.id===id).references.length);
}
for(const [id,lab] of Object.entries(NEURO_LABS)){
 assert.ok(ADDITIONAL_TARGETS[id]);assert.match(rx.route('receptors',id),/elix-neuro-lab/);
 assert.ok(ELIX_CHAPTERS.find(c=>c.id===lab.chapter).targets.includes(id));
}
assert.equal(rx.search('GABA-A')[0].link,'#/receptors/GABAA');assert.equal(rx.search('NMDA')[0].link,'#/receptors/NMDAR');
const sw=fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8');for(const file of ['elix-neuro-visuals.js','elix-neuro.css'])assert.ok(sw.includes(file));
console.log('NEURO_PASS',JSON.stringify({truthTableStates:states,newTargets:2,linkedExistingDrugs:4,newIdentities:0,newSummaries:0,newPKProfiles:0}));
