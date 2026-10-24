const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const {LEMS_BATCH:batch}=await import('../elix-lems-batch.js');
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_LEMS_DRUGS_OUTPUT||'/tmp/elix-audit/lems-drugs';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const context=await browser.newContext({serviceWorkers:'block'}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,768,390,320])for(const theme of ['dark','light'])for(const drug of batch.drugs){
   const profile=batch.profiles.find(p=>p.applicableMoleculeIds.includes(drug.chembl));
   await page.setViewportSize({width,height:1000});await page.goto(base+'#/molecule/'+drug.chembl);await page.waitForSelector(`[data-pk-context="${profile.id}"]`);
   if(await page.locator('body').getAttribute('data-theme')!==theme)await page.locator('[data-act="theme"]').click();
   await page.locator('[data-ev="expand-all"]').click();await page.waitForSelector(`[data-reviewed-pk="${profile.id}"]`);
   assert.equal(await page.locator('.ev-heading h1').innerText(),drug.name);assert.equal(await page.locator('[data-pk-metric]').count(),6);
   for(const [field,m] of Object.entries(profile.metrics))assert.equal(await page.locator(`[data-pk-metric="${field}"] .ev-pk-value`).innerText(),m.summary);
   const synthesis=page.locator(`[data-batch-pharmacology="${drug.id}"]`);assert.equal(await synthesis.count(),1);
   for(const ref of drug.references){const source=batch.sources.find(s=>s.id===ref.id);assert.equal(await synthesis.locator(`a[href="${source.url}"]`).count(),1);}
   assert.doesNotMatch(await page.locator('.content').innerText(),/undefined|NaN|\[object Object\]/);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),drug.id+' overflow '+width);
   if([1440,390].includes(width)){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+`/${drug.id}-${width}-${theme}.png`,fullPage:true});}
   matrix.push({drug:drug.id,width,theme,fields:6});
  }
  for(const [query,id] of [['Amifampridina','CHEMBL354077'],['Amifampridine','CHEMBL354077']]){
   await page.goto(base+'#/home');await page.waitForSelector('.eli-coverage dd');await page.locator('[data-act="search-open"]').click();await page.locator('#global-search').fill(query);await page.waitForSelector(`a[href="#/molecule/${id}"]`);await page.locator(`a[href="#/molecule/${id}"]`).first().click();await page.waitForSelector(`[data-ev-section="${id}:mechanism"]`);
  }
  assert.deepEqual(errors,[]);const report={passed:true,base,matrix,bilingualSearch:true,sourceLinks:true,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
