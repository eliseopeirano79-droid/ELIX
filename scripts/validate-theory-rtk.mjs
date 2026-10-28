import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_RTK as c} from '../elix-theory-rtk.js';
import {RTK_MODES,rtkState} from '../elix-rtk-explorer.js';
import {renderTheorySection,renderTheoryExtras} from '../elix-theory-reader.js';
const read=f=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
assert.equal(ELIX_CHAPTERS.length,57);assert.equal(ELIX_CHAPTERS.filter(x=>x.id===c.id).length,1);assert.equal(ELIX_CHAPTERS.filter(x=>x.format==='extended').length,12);
assert.equal(c.sections.length,18);assert.equal(c.checks.length,8);assert.equal(c.wordCount,c.sections.map(s=>s.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>3000);
const refs=new Set(c.references.map(r=>r.id));assert.equal(refs.size,c.references.length);
for(const s of c.sections){assert.ok(s.text.length>700);assert.ok(s.refs.length);s.refs.forEach(id=>assert.ok(refs.has(id),id));}
assert.equal(c.sections.filter(s=>s.rtkLab).length,1);assert.ok(renderTheorySection(c.sections.find(s=>s.rtkLab),15).includes('<elix-rtk-explorer>'));
const known=JSON.parse(read('data/catalog.json')).molecules;
for(const m of c.moleculeLinks)assert.ok(known.some(x=>x.id===m.id&&x.name.toLowerCase()===m.label.toLowerCase()));
assert.ok(!renderTheoryExtras({...c,moleculeLinks:[{id:'javascript:alert(1)',label:'bad'}]}).includes('#/molecule/javascript'));
const ledger=JSON.parse(read('data/tirosinchinasi-reading.json'));assert.equal(ledger.fullCorpusRead,false);assert.equal(ledger.clinicalValidation,false);assert.equal(ledger.sources.length,5);assert.ok(ledger.sources.every(s=>!s.allContentsRead&&s.sourceUnchanged));
const review=JSON.parse(read('data/tirosinchinasi-review.json'));assert.equal(review.outcome,'pass');assert.equal(review.independentClinicalReview,false);assert.equal(review.moduleSha256,createHash('sha256').update(read('elix-theory-rtk.js')).digest('hex'));
for(const file of ['elix-theory-rtk.js','elix-rtk-explorer.js','elix-rtk.css','data/tirosinchinasi-reading.json','data/tirosinchinasi-review.json']){assert.ok(read('sw.js').includes('./'+file));assert.ok(!read(file).includes('/Users/'));}
const expected={rest:[false,false,false],ligand:[true,true,true],external:[false,false,false],kinase:[false,false,false],bypass:[false,true,true]};
for(const m of RTK_MODES){const s=rtkState(m.id);assert.deepEqual([s.receptor,s.ras,s.mapk],expected[m.id]);}
assert.equal(rtkState('invalid').id,'rest');
console.log('RTK theory PASS: 18 sections, '+c.wordCount+' body words, 8 checks, 5 qualitative scenarios; existing catalog links and bounded provenance.');
