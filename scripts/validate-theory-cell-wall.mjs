import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_CELL_WALL as c} from '../elix-theory-cell-wall.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
const l=JSON.parse(read('data/cell-wall-reading.json')),r=JSON.parse(read('data/cell-wall-review.json'));
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(new Set(ELIX_CHAPTERS.map(x=>x.id)).size,67);
assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,26);
assert.equal(c.wordCount,c.sections.map(x=>x.text).join(' ').split(/\s+/).length);
assert.ok(c.wordCount>=2000);assert.equal(c.sections.length,14);
assert.equal(new Set(c.sections.map(x=>x.id )).size,14);assert.equal(c.checks.length,14);
for(const s of c.sections){assert.ok(s.text&&s.refs.length);for(const id of s.refs)assert.ok(c.references.some(r=>r.id===id));}
for(const ref of c.references){assert.ok(c.sections.some(s=>s.refs.includes(ref.id)));if(ref.url)assert.equal(new URL(ref.url).protocol,'https:');}
const catalog=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(catalog.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(id!==c.id&&ELIX_CHAPTERS.some(x=>x.id===id));
let full=0,integrated=0,newRead=0,newVisual=0;const seen=new Set();
for(const s of l.sources){
 assert.ok(!s.path&&!s.lecturer);assert.equal(s.allContentsRead,false);assert.equal(s.sourceUnchanged,true);assert.match(s.sha256,/^[a-f0-9]{64}$/);
 assert.deepEqual([...s.newlyReadTextPages,...s.reusedPreviouslyReadPages].sort((a,b)=>a-b),s.pdfPagesRead);
 assert.deepEqual([...s.integratedPdfPages,...s.readButNotIntegratedPdfPages].sort((a,b)=>a-b),s.pdfPagesRead);
 assert.ok(s.integratedPdfPages.every(p=>s.pdfPagesRead.includes(p)&&!s.metadataOnlyPages.includes(p)));
 for(const p of s.pdfPagesRead){const key=s.sha256+':'+p;assert.ok(!seen.has(key));seen.add(key);}
 full+=s.pdfPagesRead.length;integrated+=s.integratedPdfPages.length;newRead+=s.newlyReadTextPages.length;newVisual+=s.newlyVisuallyCheckedPdfPages.length;
}
assert.deepEqual([full,integrated,newRead,newVisual],[27,26,7,6]);
assert.deepEqual([l.totalReadPdfPages,l.chapterIntegratedPdfPages,l.newReadPdfPages,l.newVisualInspections],[full,integrated,newRead,newVisual]);
assert.equal(l.globalAntibacterialSourceUnion.fullyReadPositions,108);
assert.equal(l.sources.reduce((n,s)=>n+s.partiallyReadPdfPages.length,0),0);
assert.equal(l.newPartiallyReadPdfPages,0);
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(r.independentClinicalReview,false);
assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-cell-wall.js')).digest('hex'));
for(const f of ['elix-theory-cell-wall.js','data/cell-wall-reading.json','data/cell-wall-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.doesNotMatch(read(f),/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i);}
const p=JSON.parse(read('data/development-progress.json'));
assert.equal(p.counts.extendedChapters,26);assert.equal(p.counts.briefChapters,41);
if(p.batch===l.batch){assert.equal(p.changes.newChapters,0);assert.equal(p.changes.expandedChapters,1);}
console.log('Cell wall PASS: existing chapter expanded; 27 full source positions, 7 newly completed readings including 1 prior partial, 26 integrated, no independent clinical review claimed.');
