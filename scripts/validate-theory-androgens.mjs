import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ANDROGENS as c} from '../elix-theory-androgens.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,62);
assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,62);
assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,18);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);
assert.equal(new Set(c.sections.map(s=>s.id)).size,c.sections.length);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.refs.length);for(const r of s.refs)assert.ok(refs.has(r),'unresolved source '+r);}
assert.ok(c.checks.every(x=>x.question&&x.answer));
const catalog=JSON.parse(read('data/catalog.json')).molecules;
assert.equal(new Set(c.moleculeLinks.map(x=>x.id)).size,c.moleculeLinks.length);
for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/androgeni-asse-gonadico-reading.json')),r=JSON.parse(read('data/androgeni-asse-gonadico-review.json'));
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,1,0]);
let pages=0,integrated=0,extracted=0,imageText=0;const seen=new Set();
for(const s of l.sources){
 assert.ok(!s.path);assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);
 assert.deepEqual(s.pdfPagesRead,s.visuallyCheckedPdfPages);
 assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);
 for(const p of s.pdfPagesRead){const key=s.sha256+':'+p;assert.ok(!seen.has(key),'duplicate source page '+key);seen.add(key);}
 assert.deepEqual([...s.newlyReadTextPages,...s.reusedPreviouslyReadPages].sort((a,b)=>a-b),s.pdfPagesRead);
 assert.ok(s.substantiveExtractedTextReadPages.every(p=>s.pdfPagesRead.includes(p)));
 assert.ok(s.imageTextReadPages.every(p=>s.pdfPagesRead.includes(p)));
 pages+=s.pdfPagesRead.length;integrated+=s.integratedPdfPages.length;extracted+=s.substantiveExtractedTextReadPages.length;imageText+=s.imageTextReadPages.length;
}
assert.deepEqual([pages,integrated,extracted,imageText],[17,15,12,5]);
assert.equal(l.totalReadPdfPages,pages);assert.equal(l.chapterReviewedPdfPages,pages);
assert.equal(l.chapterSourcePdfPages,integrated);assert.equal(l.newCourseReadPdfPages+l.newBookReadPdfPages,pages);
assert.equal(l.deduplication.independentConfirmationsFromSharedBoxes,0);
assert.equal(r.independentClinicalReview,false);assert.equal(r.outcome,'pass');
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-androgens.js')).digest('hex'));
for(const f of ['elix-theory-androgens.js','data/androgeni-asse-gonadico-reading.json','data/androgeni-asse-gonadico-review.json']){
 assert.ok(read('sw.js').includes('./'+f),'missing offline asset '+f);
 assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);
}
assert.deepEqual([c.sections.length,c.checks.length,c.sections.filter(s=>s.formula).length],[11,12,6]);
console.log('Androgens PASS: unique chapter and links, source-page accounting, bounded review and offline records.');

