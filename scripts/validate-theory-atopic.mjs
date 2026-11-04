import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ATOPIC as c} from '../elix-theory-atopic.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,61);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,61);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,16);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);
assert.equal(c.sections.length,15);assert.equal(new Set(c.sections.map(s=>s.id)).size,15);assert.ok(c.checks.every(x=>x.question&&x.answer));
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);for(const s of c.sections){assert.ok(s.refs.length);for(const r of s.refs)assert.ok(refs.has(r),'unresolved source '+r);}
const catalog=JSON.parse(read('data/catalog.json')).molecules;assert.equal(new Set(c.moleculeLinks.map(x=>x.id)).size,15);for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label));for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/dermatite-atopica-reading.json')),r=JSON.parse(read('data/dermatite-atopica-review.json'));
assert.deepEqual([l.fullCorpusRead,l.clinicalValidation,l.newIdentities,l.newDrugSummaries,l.newPKProfiles,l.newChapters,l.expandedExistingChapters],[false,false,0,0,0,1,0]);
assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),17);assert.equal(l.sources.reduce((n,s)=>n+s.reusedPreviouslyReadPages.length,0),7);assert.equal(l.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),24);assert.equal(l.sources.reduce((n,s)=>n+s.integratedPdfPages.length,0),23);
for(const s of l.sources){assert.ok(!s.path);assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.deepEqual(s.pdfPagesRead,s.visuallyCheckedPdfPages);assert.ok(s.newlyReadTextPages.every(p=>!s.reusedPreviouslyReadPages.includes(p)));assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);}
assert.equal(r.independentClinicalReview,false);assert.equal(r.outcome,'pass');assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-atopic.js')).digest('hex'));
for(const f of ['elix-theory-atopic.js','data/dermatite-atopica-reading.json','data/dermatite-atopica-review.json']){assert.ok(read('sw.js').includes('./'+f),'missing offline asset '+f);assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);}
console.log('Atopic PASS: chapter, source traceability, deduplicated coverage, existing links and offline assets.');
