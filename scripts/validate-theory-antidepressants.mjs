import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ANTIDEPRESSANTS as c} from '../elix-theory-antidepressants.js';
import {AD_STATES,antidepressantState,antidepressantScene} from '../elix-antidepressant-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,56);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,56);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,10);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,24);assert.equal(c.checks.length,10);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3300);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.antidepressantLab).length,1);assert.ok(renderTheorySection(c.sections[4],4).includes('<elix-antidepressant-explorer>'));
assert.equal(AD_STATES.length,6);assert.equal(antidepressantState('unknown').id,'base');
const state=antidepressantState;
assert.equal(state('base').uptakeBlocked,false);assert.equal(state('sert').transporter,'SERT');assert.equal(state('net').system,'noradrenergico');assert.equal(state('net').transporter,'NET');
assert.equal(state('mao').maoBlocked,true);assert.equal(state('mao').uptakeBlocked,false,'MAO inhibition must not block uptake');
assert.equal(state('alpha2').feedbackBlocked,true);assert.equal(state('alpha2').system,'noradrenergico');assert.equal(state('alpha2').uptakeBlocked,false,'alpha2 block is not transporter inhibition');
assert.equal(state('sari').uptakeBlocked,true);assert.equal(state('sari').receptorBlocked,true);assert.equal(state('sari').maoBlocked,false);
for(const s of AD_STATES){const scene=antidepressantScene(s.id);assert.ok(scene.includes(s.action));assert.ok(scene.includes(s.meaning));assert.equal(scene.includes('data-ad-feedback='),s.system==='noradrenergico');assert.ok(!/\d+\s*(?:mg|%)/.test(scene),'no dose or quantitative response');}
const l=JSON.parse(read('data/antidepressivi-reading.json')),r=JSON.parse(read('data/antidepressivi-review.json'));
assert.equal(l.fullCorpusRead,false);assert.equal(l.clinicalValidation,false);assert.equal(l.sources.length,5);
assert.equal(l.sources.reduce((n,s)=>n+s.newlyReadTextPages.length,0),58);assert.equal(l.sources.reduce((n,s)=>n+(s.usedPriorReadingPages||[]).length,0),4);assert.equal(l.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),14);
for(const s of l.sources){assert.equal(s.sourceUnchanged,true);assert.equal(s.allContentsRead,false);assert.equal(new Set(s.extractedTextReadPages).size,s.extractedTextReadPages.length);assert.deepEqual(s.newlyReadTextPages,s.extractedTextReadPages.filter(p=>!s.previouslyFullyReadPages.includes(p)));assert.ok(s.visuallyCheckedPdfPages.every(p=>s.extractedTextReadPages.includes(p)));assert.ok(!s.path);}
assert.equal(l.newIdentities,0);assert.equal(l.newDrugSummaries,0);assert.equal(l.newPKProfiles,0);assert.equal(l.officialSources.length,9);
assert.equal(r.outcome,'pass');assert.equal(r.independentClinicalReview,false);assert.equal(r.moduleSha256,createHash('sha256').update(read('elix-theory-antidepressants.js')).digest('hex'));
for(const f of ['elix-theory-antidepressants.js','elix-antidepressant-explorer.js','elix-antidepressant.css','data/antidepressivi-reading.json','data/antidepressivi-review.json']){assert.ok(read('sw.js').includes('./'+f));assert.ok(!read(f).includes('/Users/'));}
console.log('Antidepressants PASS: 24 sections, '+c.wordCount+' body words, 10 checks, six qualitative states, 9 existing catalog links; bounded source ledger.');
