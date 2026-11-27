import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ANTIBACTERIALS as c} from '../elix-theory-antibacterials.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
const l=JSON.parse(read('data/antibatterici-principi-reading.json')),r=JSON.parse(read('data/antibatterici-principi-review.json'));
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(ELIX_CHAPTERS.length,67);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,67);
assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,25);
assert.equal(c.wordCount,c.sections.map(x=>x.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>=2000);
assert.equal(new Set(c.sections.map(x=>x.id)).size,10);assert.equal(c.checks.length,11);
for(const s of c.sections){assert.ok(s.text&&s.refs.length);for(const id of s.refs)assert.ok(c.references.some(r=>r.id===id));}
for(const ref of c.references){assert.ok(c.sections.some(s=>s.refs.includes(ref.id)));if(ref.url)assert.equal(new URL(ref.url).protocol,'https:');}
const catalog=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
let full=0,visual=0,integrated=0,meta=0;const seen=new Set();
for(const s of l.sources){
 assert.ok(!s.path&&!s.lecturer);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);assert.match(s.sha256,/^[a-f0-9]{64}$/);
 assert.deepEqual([...s.pdfPagesRead,...s.partiallyReadPdfPages].sort((a,b)=>a-b),s.visuallyCheckedPdfPages);
 assert.ok(s.partiallyReadPdfPages.every(p=>!s.pdfPagesRead.includes(p)&&!s.integratedPdfPages.includes(p)));
 assert.ok(s.integratedPdfPages.every(p=>s.pdfPagesRead.includes(p)&&!s.metadataOnlyPages.includes(p)));
 assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);
 for(const p of s.pdfPagesRead){const key=s.sha256+':'+p;assert.ok(!seen.has(key));seen.add(key);}
 full+=s.pdfPagesRead.length;visual+=s.visuallyCheckedPdfPages.length;integrated+=s.integratedPdfPages.length;meta+=s.metadataOnlyPages.length;
}
assert.deepEqual([full,visual,integrated,meta],[23,26,18,2]);
assert.deepEqual([l.totalReadPdfPages,l.chapterReviewedPdfPages,l.chapterIntegratedPdfPages,l.metadataOnlyPdfPages],[full,visual,integrated,meta]);
assert.deepEqual(l.sources.find(x=>x.id==='DAB').partiallyReadPdfPages,[3,10]);
assert.deepEqual(l.sources.find(x=>x.id==='DAB').integratedPdfPages,[4,5,6,7,8,9]);
assert.deepEqual([l.newReadPdfPages,l.reusedReadPdfPages,l.newPartiallyReadPdfPages,l.newVisualInspections,l.newIntegratedPdfPages],[9,14,2,11,6]);
assert.deepEqual(l.sources.find(x=>x.id==='RANG').partiallyReadPdfPages,[951]);
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(r.independentClinicalReview,false);
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-antibacterials.js')).digest('hex'));
assert.ok(r.conflicts.some(x=>x.id==='dab3-obscured-labels'&&x.status==='unresolved_source_limit'));
for(const f of ['elix-theory-antibacterials.js','data/antibatterici-principi-reading.json','data/antibatterici-principi-review.json']){
 assert.ok(read('sw.js').includes('./'+f));assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);
}
const p=JSON.parse(read('data/development-progress.json'));
assert.equal(p.counts.extendedChapters,25);assert.equal(p.counts.briefChapters,42);
if(p.batch===l.batch){assert.equal(p.changes.newIdentities,0);assert.equal(p.changes.newChapters,0);assert.equal(p.changes.expandedChapters,1);}
console.log('Antibacterial principles PASS: 23 full visible texts (2 metadata), 3 partial excluded; 18 integrated; no clinical validation claimed.');
