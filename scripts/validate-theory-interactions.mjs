import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_INTERACTIONS as c} from '../elix-theory-interactions.js';
import {transportState,transportScene} from '../elix-transport-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,58);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,13);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,24);assert.equal(c.checks.length,10);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3200);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>(s.id.startsWith('ozanimod-')?250:600));assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.transportLab).length,1);assert.ok(renderTheorySection(c.sections[12],12).includes('<elix-transport-explorer>'));
for(const site of ['gut','liver','kidney'])for(const state of ['reference','inhibited']){
 const s=transportState(site,state);assert.equal(s.id,site);assert.equal(s.state,state);assert.equal(s.inhibited,state==='inhibited');assert.equal(s.trend,state==='inhibited'?'Può aumentare':'Condizione di confronto');assert.ok(transportScene(site,state).includes(s.destination));
}
assert.equal(transportState('liver','inhibited').destination,'L’ingresso nell’epatocita può diminuire.');
assert.equal(transportState('gut','inhibited').to,'Lume intestinale');
assert.ok(transportScene('kidney','inhibited').includes('non una singola proteina'));
assert.equal(transportState('invalid','invalid').state,'reference');
const l=JSON.parse(read('data/metabolismo-trasportatori-reading.json')),r=JSON.parse(read('data/metabolismo-trasportatori-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,7);
assert.equal(l.sources.reduce((n,s)=>n+s.extractedTextReadPages.length,0),84);assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),69);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),9);
for(const s of l.sources){assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.equal(new Set(s.extractedTextReadPages).size,s.extractedTextReadPages.length);assert.deepEqual(s.newlyReadTextPages,s.extractedTextReadPages.filter(p=>!s.previouslyFullyReadPages.includes(p)));}
assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.officialSources.length,6);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-interactions.js')).digest('hex'));
for(const f of ['elix-theory-interactions.js','elix-transport-explorer.js','elix-transport.css','data/metabolismo-trasportatori-reading.json','data/metabolismo-trasportatori-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!read(f).includes('/Users/'));}
console.log('Interactions PASS: 24 sections, '+c.wordCount+' body words, 10 checks, six compartment states, 8 existing catalog links; bounded source ledger.');
