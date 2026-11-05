import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ASTHMA as c} from '../elix-theory-asthma.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,61);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,61);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,17);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);
assert.equal(c.sections.length,34);assert.equal(new Set(c.sections.map(s=>s.id)).size,34);assert.equal(c.checks.length,34);assert.ok(c.checks.every(x=>x.question&&x.answer));
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);for(const s of c.sections){assert.ok(s.refs.length);for(const r of s.refs)assert.ok(refs.has(r),'unresolved source '+r);}assert.ok(c.references.every(r=>c.sections.some(s=>s.refs.includes(r.id))));
const catalog=JSON.parse(read('data/catalog.json')).molecules;assert.equal(new Set(c.moleculeLinks.map(x=>x.id)).size,10);for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label));for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/asma-e-broncodilatatori-reading.json')),r=JSON.parse(read('data/asma-e-broncodilatatori-review.json'));
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,0,1]);
assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length+(s.newlyReadImagePages||[]).length,0),6);assert.equal(l.sources.reduce((n,s)=>n+s.reusedPreviouslyReadPages.length,0),2);assert.equal(l.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),8);assert.equal(l.sources.reduce((n,s)=>n+s.integratedPdfPages.length,0),8);
for(const s of l.sources){assert.ok(!s.path);assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.deepEqual(s.pdfPagesRead,s.visuallyCheckedPdfPages);assert.ok(s.newlyReadTextPages.every(p=>!s.reusedPreviouslyReadPages.includes(p)));assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);}
assert.equal(r.independentClinicalReview,false);assert.equal(r.outcome,'pass');assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-asthma.js')).digest('hex'));
for(const f of ['elix-theory-asthma.js','data/asma-e-broncodilatatori-reading.json','data/asma-e-broncodilatatori-review.json']){assert.ok(read('sw.js').includes('./'+f),'missing offline asset '+f);assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);}
assert.ok(c.sources.includes('gina-2026')&&c.sources.includes('gold-2026'));assert.deepEqual(c.targets,['ADRB2','CHRM3','CYSLTR1']);
console.log('Asthma PASS: existing chapter, bounded deduplicated coverage, source links and offline assets.');

assert.equal(l.chapterSourcePdfPages,80);assert.equal(l.chapterReviewedPdfPages,94);assert.equal(l.previousCoverage.chapterSourcePdfPages,74);

const seenRead=new Set(),seenIntegrated=new Set();
for(let p=l;p;p=p.previousCoverage)for(const s of p.sources||[]){for(const n of s.pdfPagesRead)seenRead.add(s.sha256+":"+n);for(const n of s.integratedPdfPages)seenIntegrated.add(s.sha256+":"+n);}
assert.equal(seenRead.size,l.chapterReviewedPdfPages);assert.equal(seenIntegrated.size,l.chapterSourcePdfPages);
