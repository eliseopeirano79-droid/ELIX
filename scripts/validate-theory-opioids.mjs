import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_OPIOIDS as c} from '../elix-theory-opioids.js';
import {OPIOID_STATES,opioidState,opioidScene} from '../elix-opioid-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,56);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,56);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,11);
assert.equal(ELIX_CHAPTERS.find(x=>x.id==='oppioidi'),c);assert.equal(c.sections.length,34);assert.equal(c.checks.length,23);assert.equal(new Set(c.sections.map(s=>s.id)).size,34);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>6200);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,27);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r),'missing reference '+r));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.opioidLab).length,1);assert.ok(renderTheorySection(c.sections.find(s=>s.opioidLab),7).includes('<elix-opioid-explorer>'));
assert.equal(OPIOID_STATES.length,4);assert.equal(opioidState('unknown').id,'gio');
assert.equal(opioidState('terminale').transmitter,'glutammato e neuropeptidi');assert.equal(opioidState('terminale').releaseReduced,true);assert.equal(opioidState('terminale').outputDisinhibited,false);
assert.equal(opioidState('postsinapsi').excitabilityReduced,true);assert.equal(opioidState('postsinapsi').releaseReduced,false);
assert.equal(opioidState('disinibizione').transmitter,'GABA');assert.equal(opioidState('disinibizione').releaseReduced,true);assert.equal(opioidState('disinibizione').outputDisinhibited,true);
for(const s of OPIOID_STATES){const scene=opioidScene(s.id);assert.ok(scene.includes(s.action)&&scene.includes(s.meaning));assert.ok(!/\d+\s*(?:mg|%)/.test(scene),'no dose or quantitative response');}
const l=JSON.parse(read('data/oppioidi-reading.json')),r=JSON.parse(read('data/oppioidi-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,4);
assert.equal(l.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),116);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),116);
for(const s of l.sources){assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.equal(new Set(s.pdfPagesRead).size,s.pdfPagesRead.length);assert.ok(s.visuallyCheckedPdfPages.every(p=>s.pdfPagesRead.includes(p)));assert.ok(!s.path);}
assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.expandedExistingChapters,1);assert.equal(l.newChapters,0);assert.equal(l.officialSources.length,23);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-opioids.js')).digest('hex'));
for(const f of ['elix-theory-opioids.js','elix-opioid-explorer.js','elix-opioid.css','data/oppioidi-reading.json','data/oppioidi-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i.test(read(f)),'public provenance policy: '+f);}
console.log('Opioids PASS: 34 sections, '+c.wordCount+' body words, 23 checks, four qualitative states, 9 existing catalog links; bounded source ledger.');

const version=JSON.parse(read('release.json')).version;assert.ok(read('sw.js').includes("CACHE_PREFIX+'"+version+"'"));assert.ok(read('app.js').includes('Versione '+version));

assert.equal(l.newReadPdfPages,10);assert.equal(l.totalReadPdfPages,116);assert.equal(l.currentBatchVisualPages,10);assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),10);
for(const id of ['remifentanil','antagonismo-periferico','associazioni-naloxone','tolleranza-crociata'])assert.ok(c.sections.some(s=>s.id===id));

for(const id of ['ricompensa-apprendimento','stabilizzazione','leggere-dati'])assert.ok(c.sections.some(s=>s.id===id));

for(const id of ['oltre-mor','nav-selettivita'])assert.ok(c.sections.some(s=>s.id===id));

for(const id of ['sensibilizzazione-periferica','sensibilizzazione-centrale'])assert.ok(c.sections.some(s=>s.id===id));
