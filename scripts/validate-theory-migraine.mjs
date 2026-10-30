import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_MIGRAINE as c} from '../elix-theory-migraine.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,57);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,57);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,12);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id==='emicrania'),c);assert.equal(c.sections.length,16);assert.equal(c.checks.length,12);assert.equal(new Set(c.sections.map(s=>s.id)).size,16);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>2700);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,19);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r),'missing reference '+r));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;assert.equal(c.moleculeLinks.length,9);
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/emicrania-reading.json')),r=JSON.parse(read('data/emicrania-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,1);
const s=l.sources[0];assert.deepEqual(s.pdfPagesRead,[514,515,516,517,518,519,520,521,522,523,524,525]);assert.deepEqual(s.visuallyCheckedPdfPages,s.pdfPagesRead);assert.deepEqual(s.newlyReadTextPages,[521,522,523,524,525]);assert.deepEqual(s.reusedPreviouslyReadPages,[514,515,516,517,518,519,520]);assert.ok(!s.path);assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);
assert.equal(l.newReadPdfPages,5);assert.equal(l.totalReadPdfPages,12);assert.equal(l.currentBatchVisualPages,5);assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.expandedExistingChapters,1);assert.equal(l.newChapters,0);assert.equal(l.officialSources.length,16);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-migraine.js')).digest('hex'));
for(const f of ['elix-theory-migraine.js','data/emicrania-reading.json','data/emicrania-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i.test(read(f)),'public provenance policy: '+f);}
assert.ok(c.sections.find(s=>s.id==='moh').text.includes('non è necessario dimostrare'));assert.ok(c.sections.find(s=>s.id==='cgrp').text.includes('forma episodica'));assert.ok(c.coverage.includes('non revisione clinica indipendente'));
const version=JSON.parse(read('release.json')).version;assert.ok(read('sw.js').includes("CACHE_PREFIX+'"+version+"'"));assert.ok(read('app.js').includes('Versione '+version));
console.log('Migraine PASS: 16 sections, '+c.wordCount+' body words, 12 checks, 9 existing catalog links; five new and seven reused pages.');

assert.equal(l.researchSources.length,2);
for(const id of ["cgrp-complesso","ligando-recettore","selettivita-serotonina","misura-biomarcatore"])assert.ok(c.sections.some(s=>s.id===id));
