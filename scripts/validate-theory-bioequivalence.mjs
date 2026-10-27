import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_BIOEQUIVALENCE as c} from '../elix-theory-bioequivalence.js';
import {beState,beX,beScene,BE_CASES} from '../elix-bioequivalence-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,55);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,55);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,9);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,24);assert.equal(c.checks.length,10);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3300);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.bioequivalenceLab).length,1);assert.ok(renderTheorySection(c.sections[10],10).includes('<elix-bioequivalence-explorer>'));
assert.deepEqual(BE_CASES.map(c=>beState(c.id).pass),[true,false,false,false,false]);
assert.deepEqual(beState('peak').rows.map(r=>r.pass),[true,false]);assert.deepEqual(beState('lower').rows.map(r=>r.pass),[false,true]);assert.deepEqual(beState('upper').rows.map(r=>r.pass),[false,true]);
for(const r of beState('imprecise').rows)assert.ok(Math.abs(r.mean-100)<1e-8);
assert.ok(Math.abs((beX(100)-beX(80))-(beX(125)-beX(100)))<1e-8,'reciprocal limits equally spaced on log axis');
for(const c of BE_CASES){const s=beState(c.id);for(const r of s.rows){assert.ok(r.mean>r.interval[0]&&r.mean<r.interval[1]);assert.ok(beX(r.interval[0])>0&&beX(r.interval[1])<360);}assert.ok(beScene(c.id).includes(s.reason));}
assert.equal(beState('unknown').id,'contained');
const l=JSON.parse(read('data/formulazioni-sali-bioequivalenza-reading.json')),r=JSON.parse(read('data/formulazioni-sali-bioequivalenza-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,5);
assert.equal(l.sources.reduce((n,s)=>n+s.extractedTextReadPages.length,0),48);assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),45);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),7);
for(const s of l.sources){assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.equal(new Set(s.extractedTextReadPages).size,s.extractedTextReadPages.length);assert.deepEqual(s.newlyReadTextPages,s.extractedTextReadPages.filter(p=>!s.previouslyFullyReadPages.includes(p)));}
assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.officialSources.length,6);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-bioequivalence.js')).digest('hex'));
for(const f of ['elix-theory-bioequivalence.js','elix-bioequivalence-explorer.js','elix-bioequivalence.css','data/formulazioni-sali-bioequivalenza-reading.json','data/formulazioni-sali-bioequivalenza-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!read(f).includes('/Users/'));}
console.log('Bioequivalence PASS: 24 sections, '+c.wordCount+' body words, 10 checks, five synthetic CI states, 5 existing catalog links; bounded source ledger.');
