import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_COMPLEMENTARY} from '../elix-theory-complementary.js';
import {renderTheoryExtras,renderTheoryRelated,theoryReviewLabel} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
const ids=new Set(ELIX_CHAPTERS.map(c=>c.id));
assert.equal(ids.size,55);assert.equal(ELIX_CHAPTERS.length,55);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,8);
let words=0,sections=0,checks=0;
for(const c of THEORY_COMPLEMENTARY){
 assert.equal(ELIX_CHAPTERS.filter(x=>x.id===c.id).length,1);
 assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id===c.id).sections,c.sections);
 const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
 assert.equal(new Set(c.sections.map(s=>s.id)).size,c.sections.length);
 for(const s of c.sections){assert.ok(s.text.length>300);assert.ok(s.refs.length);s.refs.forEach(id=>assert.ok(refs.has(id),id));}
 for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
 const count=c.sections.map(s=>s.text).join(' ').split(/\s+/).length;assert.equal(c.wordCount,count);words+=count;sections+=c.sections.length;checks+=c.checks.length;
 for(const id of c.relatedExistingChapterIds||[])assert.ok(ids.has(id),'Unknown related chapter: '+id);
 assert.ok(renderTheoryRelated(c,ELIX_CHAPTERS).includes('#/textbook/'));
 assert.ok(!theoryReviewLabel(c).includes('_'));
 assert.ok(renderTheoryExtras(c).includes(c.readingManifest));assert.ok(!renderTheoryExtras(c).includes('theory-foundations-reading'));
 const ledger=JSON.parse(read(c.readingManifest));assert.equal(ledger.chapterId,c.id);assert.equal(ledger.fullCorpusRead,false);assert.equal(ledger.clinicalValidation,false);
 const review=JSON.parse(read(c.editorialReview.path));assert.equal(review.chapterId,c.id);assert.equal(review.outcome,'pass');assert.equal(review.chapterSha256,c.editorialReview.sourceChapterSha256);
 for(const f of [c.readingManifest,c.editorialReview.path]){assert.ok(!read(f).includes('/Users/'));assert.ok(read('sw.js').includes(f));}
}
assert.equal(words,8416);assert.equal(sections,47);assert.equal(checks,24);
assert.ok(!renderTheoryExtras({...THEORY_COMPLEMENTARY[0],readingManifest:'javascript:alert(1)'}).includes('data-reading-manifest'));
assert.ok(!renderTheoryExtras({...THEORY_COMPLEMENTARY[0],readingManifest:undefined}).includes('theory-foundations-reading'));
assert.ok(read('sw.js').includes('./elix-theory-complementary.js'));
console.log('Complementary theory PASS: 3 existing chapters expanded; 47 sections, 8416 body words, 24 self-checks; chapter-specific provenance and offline files.');
