import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_IBD as c} from '../elix-theory-ibd.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,58);assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,13);assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>9800);
assert.equal(c.sections.length,47);assert.equal(c.checks.length,46);assert.equal(new Set(c.sections.map(s=>s.id )).size,47);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,50);for(const s of c.sections){assert.ok(s.text.length>700);assert.ok(s.refs.length);for(const id of s.refs)assert.ok(refs.has(id),'unresolved source '+id);}
const molecules=JSON.parse(read('data/catalog.json')).molecules;for(const m of c.moleculeLinks)assert.ok(molecules.some(x=>x.id===m.id&&x.name===m.label));assert.equal(c.moleculeLinks.length,26);
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const ledger=JSON.parse(read('data/mici-reading.json')),review=JSON.parse(read('data/mici-review.json'));
assert.equal(ledger.fullCorpusRead,false);assert.equal(ledger.clinicalValidation,false);assert.deepEqual([ledger.newReadPdfPages,ledger.totalReadPdfPages,ledger.currentBatchVisualPages,ledger.newChapters,ledger.expandedExistingChapters],[6,70,6,0,1]);assert.equal(ledger.sources.length,6);
for(const [id,pages]of [['CFI',[544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580]],['KAT',[1278,1279,1280,1281,1282,1283,1284,1285,1286]],['RAN',[592,593,594]],['APP',[283,284,285,286,287]],['FII-S',[17,18,28,29,30,33,34,36]],['FII-A',[7,8,11,12,13,14,15,16]]]){const s=ledger.sources.find(x=>x.id===id);assert.deepEqual(s.pdfPagesRead,pages);assert.deepEqual(s.visuallyCheckedPdfPages,pages);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);assert.ok(!s.path);}
assert.deepEqual(ledger.sources[0].reusedPreviouslyReadPages,[544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575]);assert.equal(ledger.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),6);assert.equal(ledger.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),70);
assert.equal(review.outcome,'pass');assert.equal(review.independentClinicalReview,false);assert.equal(review.moduleSha256,createHash('sha256').update(read('elix-theory-ibd.js')).digest('hex'));
for(const f of ['elix-theory-ibd.js','data/mici-reading.json','data/mici-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i.test(read(f)));}
assert.equal(ledger.newIntegratedPdfPages,5);assert.equal(ledger.chapterSourcePdfPages,65);assert.equal(ledger.sources.reduce((n,s)=>n+s.integratedPdfPages.length,0),65);
assert.deepEqual(ledger.sources.find(s=>s.id==='RAN').readButNotIntegratedPdfPages,[594]);assert.deepEqual(ledger.sources.find(s=>s.id==='APP').readButNotIntegratedPdfPages,[]);
assert.equal(c.relatedExistingChapterIds.length,7);
assert.equal(ledger.previouslyReadNewlyIntegratedPdfPages,1);
console.log('IBD PASS: 47 sections, '+c.wordCount+' words, 46 checks, twenty-six existing identities; 6 new pages read, 5 integrated, one reused page newly integrated.');
assert.deepEqual(ledger.sources.find(s=>s.id==='CFI').readButNotIntegratedPdfPages,[566,567,568,580]);
