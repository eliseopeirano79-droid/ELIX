import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_CONTRACEPTION as c} from '../elix-theory-contraception.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,63);assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,63);
assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,19);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);
assert.equal(new Set(c.sections.map(s=>s.id)).size,c.sections.length);
assert.deepEqual([c.sections.length,c.checks.length,c.sections.filter(s=>s.formula).length],[17,22,13]);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,23);
for(const s of c.sections){assert.ok(s.refs.length);for(const r of s.refs)assert.ok(refs.has(r),'unresolved source '+r);}
for(const r of c.references){assert.ok(r.title&&r.detail);assert.ok(c.sections.some(s=>s.refs.includes(r.id)));}
const catalog=JSON.parse(read('data/catalog.json')).molecules;
assert.equal(new Set(c.moleculeLinks.map(m=>m.id )).size,14);
for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label),'invalid molecule '+m.id);
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/contraccezione-ormonale-reading.json')),r=JSON.parse(read('data/contraccezione-ormonale-review.json'));
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newTargetProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,0,0,1]);
const previous={"CFI": [766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780], "KATZ": [831, 832, 833, 835, 836, 837, 838], "RANG": [667, 669, 675, 676], "APP": [307, 325, 326, 327, 328, 329], "SFI": [486], "DAB": [374], "DAV": [117]};
const added={"CFI": [781, 782, 783, 784, 785], "KATZ": [839, 840, 841], "APP": [330], "RANG": [677, 678]};
const excluded={"CFI": [784, 785], "KATZ": [838, 839, 840], "RANG": [677]};
const expected=Object.fromEntries(Object.entries(previous).map(([id,pages])=>[id,[...pages,...(added[id]||[])].sort((a,b)=>a-b)]));
const seen=new Set();let pages=0,newPages=0,reusedPages=0;
for(const s of l.sources){
 assert.ok(!s.path&&!s.lecturer);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);
 assert.deepEqual(s.pdfPagesRead,expected[s.id]);assert.deepEqual(s.pdfPagesRead,s.visuallyCheckedPdfPages);
 assert.deepEqual(s.integratedPdfPages,s.pdfPagesRead.filter(p=>!(excluded[s.id]||[]).includes(p)));assert.deepEqual(s.readButNotIntegratedPdfPages,excluded[s.id]||[]);
 assert.deepEqual(s.newlyReadTextPages,added[s.id]||[]);assert.deepEqual(s.reusedPreviouslyReadPages,previous[s.id]);
 assert.deepEqual([...s.newlyReadTextPages,...s.reusedPreviouslyReadPages].sort((a,b)=>a-b),s.pdfPagesRead);
 newPages+=s.newlyReadTextPages.length;reusedPages+=s.reusedPreviouslyReadPages.length;
 for(const p of s.pdfPagesRead){const k=s.sha256+':'+p;assert.ok(!seen.has(k));seen.add(k);}
 pages+=s.pdfPagesRead.length;
}
assert.equal(pages,46);assert.equal(newPages,11);assert.equal(reusedPages,35);assert.equal(l.newReadPdfPages,newPages);assert.equal(l.reusedReadPdfPages,reusedPages);assert.equal(l.totalReadPdfPages,pages);assert.equal(l.chapterSourcePdfPages,40);assert.equal(l.chapterIntegratedPdfPages,40);assert.equal(l.newIntegratedPdfPages,6);
assert.equal(l.newCourseReadPdfPages+l.newBookReadPdfPages,newPages);
assert.equal(l.newMainCoursePages+l.newOtherSlidesPages+l.newAppuntiPages,l.newCourseReadPdfPages);
assert.deepEqual(l.sources.find(s=>s.id==='APP').partiallyOccludedPdfPages,[326,329]);
assert.deepEqual(l.sources.find(s=>s.id==='CFI').partiallyOccludedPdfPages,[775,780]);
assert.ok(!l.sources.find(s=>s.id==='APP').pdfPagesRead.includes(293),'header-only page counted as read');
assert.equal(l.deduplication.independentConfirmationsFromSharedFigures,0);
assert.equal(r.independentClinicalReview,false);assert.equal(r.clinicalValidation,false);assert.equal(r.outcome,'pass');
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-contraception.js')).digest('hex'));
for(const f of ['elix-theory-contraception.js','data/contraccezione-ormonale-reading.json','data/contraccezione-ormonale-review.json']){
 assert.ok(read('sw.js').includes('./'+f),'missing offline record '+f);
 assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);
}
assert.equal(JSON.parse(read('data/development-progress.json')).changes.newChapters,0);
assert.equal(JSON.parse(read('data/development-progress.json')).changes.expandedChapters,1);
console.log('Contraception PASS: 11 new + 35 reused source pages, 40 integrated and 6 read-only, expanded chapter, 14 existing identities, reference links, partial-page limits and offline records.');
