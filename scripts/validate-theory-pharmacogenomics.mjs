import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_PHARMACOGENOMICS as c} from '../elix-theory-pharmacogenomics.js';
import {pgxState,pgxScene} from '../elix-pgx-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,57);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,57);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,12);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,22);assert.equal(c.checks.length,10);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3500);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.pgxLab).length,1);assert.ok(renderTheorySection(c.sections[6],6).includes('<elix-pgx-explorer>'));
// Changing a pathway from inactivation to activation reverses the active-species trend.
for(const activity of ['low','reference','high']){
 const inactive=pgxState('inactivation',activity),active=pgxState('activation',activity);
 assert.equal(active.direction,activity==='reference'?0:-inactive.direction);
 assert.equal(active.direction,({low:-1,reference:0,high:1})[activity]);
 assert.ok(pgxScene('activation',activity).includes(active.trend));assert.ok(pgxScene('inactivation',activity).includes(inactive.trend));
}
assert.equal(pgxState('invalid','invalid').activity,'reference');
const l=JSON.parse(read('data/farmacogenomica-reading.json')),r=JSON.parse(read('data/farmacogenomica-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,7);
assert.equal(l.sources.reduce((n,s)=>n+s.extractedTextReadPages.length,0),46);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),11);
assert.ok(l.sources.every(s=>s.sourceUnchanged&&!s.allContentsRead));assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-pharmacogenomics.js')).digest('hex'));
for(const f of ['elix-theory-pharmacogenomics.js','elix-pgx-explorer.js','elix-pgx.css','data/farmacogenomica-reading.json','data/farmacogenomica-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!read(f).includes('/Users/'));}
console.log('Pharmacogenomics PASS: 22 sections, '+c.wordCount+' body words, 10 checks, six qualitative states, 10 existing catalog links; bounded source ledger.');
