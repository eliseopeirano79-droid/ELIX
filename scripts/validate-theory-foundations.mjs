import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ELIX_CHAPTERS} from '../elix-content.js';
import {THEORY_FOUNDATIONS as c} from '../elix-theory-foundations.js';
import {bindingFraction,renderTheorySection,renderTheoryExtras} from '../elix-theory-reader.js';
assert.equal(ELIX_CHAPTERS.length,58);assert.equal(ELIX_CHAPTERS.filter(x=>x.id===c.id).length,1);assert.equal(ELIX_CHAPTERS.find(x=>x.id===c.id),c);
assert.equal(c.sections.length,13);assert.equal(c.wordCount,c.sections.map(x=>x.text).join(' ').split(/\s+/).length);assert.ok(c.wordCount>2000);
const ids=new Set(c.references.map(x=>x.id));assert.equal(ids.size,c.references.length);assert.equal(new Set(c.sections.map(x=>x.id)).size,c.sections.length);
for(const s of c.sections){assert.ok(s.text.split('\n\n').length>=3);assert.ok(s.refs.length);for(const id of s.refs)assert.ok(ids.has(id));}
assert.equal(bindingFraction(0),0);assert.equal(bindingFraction(1),0.5);assert.equal(bindingFraction(9),0.9);assert.ok(bindingFraction(10)<1);
assert.match(renderTheorySection({title:'<script>',text:'a\n\nb',refs:['K']},0),/&lt;script&gt;/);assert.ok(!renderTheorySection({title:'<script>',text:'a'},0).includes('<script>'));assert.match(renderTheoryExtras(c),/revisione|audit/);
const r=JSON.parse(readFileSync(new URL('../data/theory-foundations-reading.json',import.meta.url)));
assert.equal(r.fullCorpusRead,false);assert.equal(r.sources.find(x=>x.id==='S').textPagesRead.length,20);assert.equal(r.sources.find(x=>x.id==='K').textPagesRead.length,10);
for(const f of ['elix-theory-foundations.js','elix-theory-reader.js','data/theory-foundations-reading.json'])assert.ok(readFileSync(new URL('../sw.js',import.meta.url),'utf8').includes(f));
console.log('Theory foundations: PASS · existing chapter expanded ·13sections ·'+c.wordCount+'words ·4selfchecks · binding model · provenance');
