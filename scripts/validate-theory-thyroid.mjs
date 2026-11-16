import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_THYROID as c} from '../elix-theory-thyroid.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
const l=JSON.parse(read('data/terapia-tiroidea-reading.json')),r=JSON.parse(read('data/terapia-tiroidea-review.json'));
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(ELIX_CHAPTERS.length,65);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,65);
assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,22);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>=3000);
assert.equal(new Set(c.sections.map(s=>s.id)).size,c.sections.length);
const refs=new Set(c.references.map(r=>r.id));
for(const s of c.sections){assert.ok(s.text&&s.refs.length);for(const id of s.refs)assert.ok(refs.has(id));}
for(const ref of c.references){assert.ok(ref.title&&ref.detail);assert.ok(c.sections.some(s=>s.refs.includes(ref.id)));if(ref.url)assert.equal(new URL(ref.url).protocol,'https:');}
const molecules=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(molecules.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const seen=new Set();let pages=0,added=0,reused=0,integrated=0,newIntegrated=0;
for(const s of l.sources){
 assert.ok(!s.path&&!s.lecturer);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);assert.match(s.sha256,/^[a-f0-9]{64}$/);
 assert.deepEqual(s.pdfPagesRead,s.visuallyCheckedPdfPages);
 assert.deepEqual([...s.newlyReadTextPages,...s.reusedPreviouslyReadPages].sort((a,b)=>a-b),s.pdfPagesRead);
 assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);
 for(const p of s.pdfPagesRead){const key=s.sha256+':'+p;assert.ok(!seen.has(key));seen.add(key);}
 pages+=s.pdfPagesRead.length;added+=s.newlyReadTextPages.length;reused+=s.reusedPreviouslyReadPages.length;integrated+=s.integratedPdfPages.length;
 newIntegrated+=s.integratedPdfPages.filter(p=>s.newlyReadTextPages.includes(p)).length;
}
assert.deepEqual([pages,added,reused,integrated,newIntegrated],[12,10,2,11,9]);
assert.deepEqual([l.totalReadPdfPages,l.newReadPdfPages,l.reusedReadPdfPages,l.batchIntegratedPdfPages,l.newIntegratedPdfPages],[pages,added,reused,integrated,newIntegrated]);
assert.deepEqual(l.sources.find(s=>s.id==='KATZ').readButNotIntegratedPdfPages,[]);
assert.deepEqual(l.sources.find(s=>s.id==='CFI').readButNotIntegratedPdfPages,[]);
assert.equal(l.newMainCoursePages+l.newOtherSlidesPages+l.newAppuntiPages,l.newCourseReadPdfPages);
assert.equal(l.newCourseReadPdfPages+l.newBookReadPdfPages,added);
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newTargetProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,0,0,1]);
assert.equal(r.independentClinicalReview,false);assert.equal(r.clinicalValidation,false);assert.equal(r.outcome,'pass');
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-thyroid.js')).digest('hex'));
assert.ok(r.conflicts.some(x=>x.id==='half-life'&&x.status==='difference_preserved'));
for(const f of ['elix-theory-thyroid.js','data/terapia-tiroidea-reading.json','data/terapia-tiroidea-review.json']){
 assert.ok(read('sw.js').includes('./'+f));assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);
}
const p=JSON.parse(read('data/development-progress.json'));
assert.equal(p.counts.chapters,ELIX_CHAPTERS.length);assert.equal(p.counts.extendedChapters,ELIX_CHAPTERS.filter(x=>x.format==='extended').length);
if(p.batch===l.batch){assert.equal(p.changes.newChapters,0);assert.equal(p.changes.expandedChapters,1);assert.equal(p.changes.newSections+p.changes.expandedSections+p.changes.unchangedSections,c.sections.length);assert.equal(p.changes.newSelfChecks+14,c.checks.length);assert.equal(p.changes.newStaticOriginalSchemas+13,c.sections.filter(s=>s.formula).length);}
assert.deepEqual(l.sources.find(s=>s.id==='CFI').substantiveExtractedTextReadPages,[811,812,813,814,815]);
assert.deepEqual(l.sources.find(s=>s.id==='KATZ').reusedPreviouslyReadPages,[]);
assert.match(c.sections.find(s=>s.id==='deiodinasi').text,/D3.*inattivante/s);
assert.match(c.sections.find(s=>s.id==='follicolo-e-ioduro').text,/NIS.*simporto/s);
assert.equal(c.moleculeLinks.length,6);
assert.equal(c.checks.length,17);
const cumulativeRead=new Set(),cumulativeIntegrated=new Set();
for(const source of l.cumulativeSources){
 for(const page of source.pdfPagesRead)cumulativeRead.add(source.sha256+':'+page);
 for(const page of source.integratedPdfPages){assert.ok(source.pdfPagesRead.includes(page));cumulativeIntegrated.add(source.sha256+':'+page);}
}
assert.equal(cumulativeRead.size,39);assert.equal(cumulativeIntegrated.size,37);
assert.equal(l.chapterReviewedPdfPages,cumulativeRead.size);assert.equal(l.chapterIntegratedPdfPages,cumulativeIntegrated.size);
for(const key of seen)assert.ok(cumulativeRead.has(key));
assert.deepEqual(l.cumulativeSources.find(s=>s.id==='APP').pdfPagesRead,[333,334,335]);
assert.equal(l.sources.some(s=>s.id==='APP'),true);
assert.equal(l.sources.filter(s=>s.collectionAlias).reduce((n,s)=>n+Object.keys(s.collectionAlias.pages).length,0),0);
console.log('Thyroid PASS:16 sections;12 batch pages,10new/2reread;39 cumulative pages,37 integrated; no duplicate lecture counting.');
