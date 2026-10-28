import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_ANTIDEPRESSANTS as c} from '../elix-theory-antidepressants.js';
import {AD_STATES,antidepressantState,antidepressantScene} from '../elix-antidepressant-explorer.js';
import {renderTheorySection} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,57);assert.equal(new Set(ELIX_CHAPTERS.map(c=>c.id)).size,57);assert.equal(ELIX_CHAPTERS.filter(c=>c.format==='extended').length,12);
assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);assert.equal(c.sections.length,29);assert.equal(c.checks.length,14);
assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>4500);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>600);assert.ok(s.refs.length);s.refs.forEach(r=>assert.ok(refs.has(r)));}
for(const r of c.references)if(r.url)assert.equal(new URL(r.url).protocol,'https:');
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name===m.label));
for(const id of c.relatedExistingChapterIds)assert.ok(ELIX_CHAPTERS.some(x=>x.id===id));
assert.equal(c.sections.filter(s=>s.antidepressantLab).length,1);assert.ok(renderTheorySection(c.sections.find(s=>s.antidepressantLab),4).includes('<elix-antidepressant-explorer>'));
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
console.log('Antidepressants PASS: 29 sections, '+c.wordCount+' body words, 14 checks, six qualitative states, 9 existing catalog links; bounded source ledger.');

const extension=JSON.parse(read('data/depression-circuits-reading.json'));
assert.equal(c.readingManifest,'./data/depression-circuits-reading.json');assert.equal(extension.newTextPages,11);assert.equal(extension.expandedExistingChapters,1);assert.equal(extension.newChapters,0);assert.equal(extension.fullCorpusRead,false);
for(const source of extension.sources){const previous=l.sources.find(s=>s.sha256===source.sha256);assert.ok(previous);assert.ok(source.extractedTextReadPages.every(p=>!previous.extractedTextReadPages.includes(p)));assert.equal(source.sourceUnchanged,true);assert.ok(!source.path);}
assert.equal(extension.sources.reduce((n,s)=>n+s.extractedTextReadPages.length,0),11);assert.equal(extension.sources.reduce((n,s)=>n+s.visuallyCheckedPdfPages.length,0),5);assert.equal(extension.reusedCourseMaterial.newTextPages,0);assert.ok(read('sw.js').includes('./data/depression-circuits-reading.json'));
assert.ok(c.sections.find(s=>s.id==='genotipo-bersaglio').refs.includes('CPIC'));assert.ok(c.sections.find(s=>s.id==='net-regioni').refs.includes('NETSTUDIO'));
