import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_UTEROTONICS as c} from '../elix-theory-uterotonics.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
const l=JSON.parse(read('data/utero-ossitocina-prostaglandine-reading.json')),r=JSON.parse(read('data/utero-ossitocina-prostaglandine-review.json'));
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(ELIX_CHAPTERS.length,67);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,67);
assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,24);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>=2000);
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
assert.deepEqual([pages,added,reused,integrated,newIntegrated],[14,12,2,12,10]);
assert.deepEqual([l.totalReadPdfPages,l.newReadPdfPages,l.reusedReadPdfPages,l.chapterIntegratedPdfPages,l.newIntegratedPdfPages],[pages,added,reused,integrated,newIntegrated]);
assert.deepEqual(l.sources.find(s=>s.id==='KATZ').readButNotIntegratedPdfPages,[386]);
assert.deepEqual(l.sources.find(s=>s.id==='APP').readButNotIntegratedPdfPages,[333]);
assert.equal(l.newMainCoursePages+l.newOtherSlidesPages+l.newAppuntiPages,l.newCourseReadPdfPages);
assert.equal(l.newCourseReadPdfPages+l.newBookReadPdfPages,added);
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newTargetProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,0,1,0]);
assert.equal(r.independentClinicalReview,false);assert.equal(r.clinicalValidation,false);assert.equal(r.outcome,'pass');
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-uterotonics.js')).digest('hex'));
assert.ok(r.conflicts.some(x=>x.id==='sequential-intervals'&&x.status==='difference_preserved'));
for(const f of ['elix-theory-uterotonics.js','data/utero-ossitocina-prostaglandine-reading.json','data/utero-ossitocina-prostaglandine-review.json']){
 assert.ok(read('sw.js').includes('./'+f));assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);
}
const p=JSON.parse(read('data/development-progress.json'));
assert.equal(p.counts.chapters,ELIX_CHAPTERS.length);assert.equal(p.counts.extendedChapters,ELIX_CHAPTERS.filter(x=>x.format==='extended').length);
if(p.batch===l.batch){assert.equal(p.changes.newChapters,1);assert.equal(p.changes.expandedChapters,0);assert.equal(p.changes.newSections,c.sections.length);assert.equal(p.changes.newSelfChecks,c.checks.length);assert.equal(p.changes.newStaticOriginalSchemas,c.sections.filter(s=>s.formula).length);}
console.log('Uterotonics PASS: 12 new and 2 reused source pages,12 integrated; new theory chapter,existing identities,specific-product boundaries and offline records.');
