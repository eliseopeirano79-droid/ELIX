import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_IBD as c} from '../elix-theory-ibd.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,58);assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,13);assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>2000);
assert.equal(c.sections.length,11);assert.equal(c.checks.length,10);assert.equal(new Set(c.sections.map(s=>s.id)).size,11);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,12);for(const s of c.sections){assert.ok(s.text.length>700);assert.ok(s.refs.length);for(const id of s.refs)assert.ok(refs.has(id),'unresolved source '+id);}
const molecules=JSON.parse(read('data/catalog.json')).molecules;for(const m of c.moleculeLinks)assert.ok(molecules.some(x=>x.id===m.id&&x.name===m.label));assert.equal(c.moleculeLinks.length,6);
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const ledger=JSON.parse(read('data/mici-reading.json')),review=JSON.parse(read('data/mici-review.json'));
assert.equal(ledger.fullCorpusRead,false);assert.equal(ledger.clinicalValidation,false);assert.deepEqual([ledger.newReadPdfPages,ledger.totalReadPdfPages,ledger.currentBatchVisualPages,ledger.newChapters,ledger.expandedExistingChapters],[13,15,13,1,0]);assert.equal(ledger.sources.length,4);
for(const [id,pages]of [['CFI',[544,545,546,547,548,549,550]],['KAT',[1278,1279,1280,1281]],['RAN',[592,593]],['APP',[283,284]]]){const s=ledger.sources.find(x=>x.id===id);assert.deepEqual(s.pdfPagesRead,pages);assert.deepEqual(s.visuallyCheckedPdfPages,pages);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);assert.ok(!s.path);}
assert.deepEqual(ledger.sources[0].reusedPreviouslyReadPages,[544,545]);assert.equal(ledger.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),13);assert.equal(ledger.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),15);
assert.equal(review.outcome,'pass');assert.equal(review.independentClinicalReview,false);assert.equal(review.moduleSha256,createHash('sha256').update(read('elix-theory-ibd.js')).digest('hex'));
for(const f of ['elix-theory-ibd.js','data/mici-reading.json','data/mici-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i.test(read(f)));}
console.log('IBD PASS: 11 sections, '+c.wordCount+' words, 10 checks, six existing identities; 13 new and two reused pages, bounded editorial coverage.');
