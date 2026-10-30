import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_MIGRAINE as c} from '../elix-theory-migraine.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,58);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,13);
assert.deepEqual(ELIX_CHAPTERS.find(x=>x.id==='emicrania'),c);assert.equal(c.sections.length,24);assert.equal(c.checks.length,23);assert.equal(new Set(c.sections.map(s=>s.id)).size,24);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>5300);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,33);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r),'missing reference '+r));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;assert.equal(c.moleculeLinks.length,11);
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
const l=JSON.parse(read('data/emicrania-reading.json')),r=JSON.parse(read('data/emicrania-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,4);
const s=l.sources[0];assert.deepEqual(s.pdfPagesRead,[514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541]);assert.deepEqual(s.visuallyCheckedPdfPages,s.pdfPagesRead);assert.deepEqual(s.newlyReadTextPages,[541]);assert.deepEqual(s.reusedPreviouslyReadPages,[514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540]);assert.ok(!s.path);assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);
assert.equal(l.newReadPdfPages,4);assert.equal(l.totalReadPdfPages,39);assert.equal(l.currentBatchVisualPages,4);assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.expandedExistingChapters,1);assert.equal(l.newChapters,0);assert.equal(l.officialSources.length,26);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-migraine.js')).digest('hex'));
for(const f of ['elix-theory-migraine.js','data/emicrania-reading.json','data/emicrania-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!/\/Users\/|Collino|D['’]Avolio|Serpe|sbobin/i.test(read(f)),'public provenance policy: '+f);}
assert.ok(c.sections.find(s=>s.id==='moh').text.includes('non è necessario dimostrare'));assert.ok(c.sections.find(s=>s.id==='cgrp').text.includes('forma episodica'));assert.ok(c.coverage.includes('non revisione clinica indipendente'));
const version=JSON.parse(read('release.json')).version;assert.ok(read('sw.js').includes("CACHE_PREFIX+'"+version+"'"));assert.ok(read('app.js').includes('Versione '+version));
console.log('Migraine PASS: 24 sections, '+c.wordCount+' body words, 23 checks, 11 existing catalog links; four new and thirty-five reused chapter pages; eight inspected in the batch.');

assert.equal(l.researchSources.length,3);
for(const id of ["cgrp-complesso","ligando-recettore","selettivita-serotonina","misura-biomarcatore"])assert.ok(c.sections.some(s=>s.id===id));

for(const id of ["via-tempo-risposta","tollerabilita-rischio","gravidanza-evidenze"])assert.ok(c.sections.some(s=>s.id===id));

for(const [id,pages] of [["KAT",[337,338,339]],["RAN",[317,318,319,320]],["APP",[279,280,281,282]]]){const source=l.sources.find(s=>s.id===id);assert.deepEqual(source.pdfPagesRead,pages);assert.deepEqual(source.visuallyCheckedPdfPages,pages);assert.equal(source.allContentsRead,false);assert.equal(source.sourceUnchanged,true);assert.ok(!source.path);}
assert.equal(l.sources.reduce((n,s)=>n+s.pdfPagesRead.length,0),l.totalReadPdfPages);
for(const id of ["gepanti-prodotti","cgrp-sorveglianza","indicazione-accesso"])assert.ok(c.sections.some(s=>s.id===id));

assert.ok(c.sections.some(s=>s.id==="valutare-prevenzione"));

assert.ok(c.sections.some(s=>s.id==="combinazioni-evidenze"));
assert.equal(l.batchPageInspection.totalPagesInspected,8);assert.equal(l.batchPageInspection.newPagesRelevantToChapter,4);assert.deepEqual(l.batchPageInspection.deferredPages.pdfPages,[544,545]);assert.equal(l.batchPageInspection.deferredPages.integrated,false);assert.deepEqual(l.batchPageInspection.nonContentPages.blankPdfPages,[542]);assert.deepEqual(l.batchPageInspection.nonContentPages.outlinePdfPages,[543]);
