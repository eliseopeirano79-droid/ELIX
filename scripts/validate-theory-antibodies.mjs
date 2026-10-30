import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ANTIBODIES as c} from '../elix-theory-antibodies.js';
import {ANTIBODY_FORMATS,antibodyFormat,antibodyScene} from '../elix-antibody-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,58);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,13);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,22);assert.equal(c.checks.length,10);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3500);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name.toLowerCase()===m.label.toLowerCase()));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.antibodyLab).length,1);assert.ok(renderTheorySection(c.sections[7],7).includes('<elix-antibody-explorer>'));
assert.deepEqual(ANTIBODY_FORMATS.map(f=>f.id),['igg','fab','fusion','bispecific','adc']);
assert.equal(antibodyFormat('fab').fc,'Assente');assert.equal(antibodyFormat('fusion').recognition,'Domini recettoriali');assert.ok(antibodyFormat('bispecific').fc.includes('questo formato'));assert.equal(antibodyFormat('bad').id,'igg');
for(const f of ANTIBODY_FORMATS)assert.ok(antibodyScene(f.id).includes(f.title));
const l=JSON.parse(read('data/anticorpi-biologici-reading.json')),r=JSON.parse(read('data/anticorpi-biologici-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,7);
assert.equal(l.sources.reduce((n,s)=>n+s.extractedTextReadPages.length,0),93);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),9);
assert.ok(l.sources.every(s=>s.sourceUnchanged&&!s.allContentsRead));assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-antibodies.js')).digest('hex'));
for(const f of ['elix-theory-antibodies.js','elix-antibody-explorer.js','elix-antibody.css','data/anticorpi-biologici-reading.json','data/anticorpi-biologici-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!read(f).includes('/Users/'));}
console.log('Antibodies PASS: 22 sections, '+c.wordCount+' body words, 10 checks, five original formats; 7 existing catalog links; bounded source ledger.');
