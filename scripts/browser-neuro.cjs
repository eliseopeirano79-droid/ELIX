const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_NEURO_OUTPUT||'/tmp/elix-audit/neuro';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true}),errors=[],matrix=[];
 try{
  const context=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',r=>r.request().url().startsWith(new URL(base).origin)?r.continue():r.abort());
  for(const width of [1440,768,390,320])for(const theme of ['dark','light'])for(const id of ['GABAA','NMDAR']){
   await page.setViewportSize({width,height:960});await page.goto(base+'#/receptors/'+id);await page.waitForSelector('.nl-lab');
   if(await page.locator('body').getAttribute('data-theme')!==theme)await page.locator('[data-act="theme"]').click();
   const lab=page.locator('elix-neuro-lab');
   assert.equal(await lab.getAttribute('data-state'),'closed');assert.equal(await lab.locator('[data-subunit]').count(),id==='GABAA'?5:4);
   for(let i=0;i<4;i++){
    await lab.locator(`[data-nl-preset="${i}"]`).click();assert.equal(await lab.getAttribute('data-state'),(id==='GABAA'?['closed','open','potentiated','closed']:['closed','magnesium','open','ketamine'])[i]);
    assert.equal(await lab.locator(`[data-nl-preset="${i}"]`).evaluate(e=>document.activeElement===e),true);
   }
   if(id==='GABAA'){
    assert.equal(await lab.locator('.nl-ion').count(),0);await lab.locator('[data-nl-toggle="gaba"]').click();assert.equal(await lab.getAttribute('data-state'),'potentiated');await lab.locator('[data-nl-toggle="benzodiazepine"]').click();assert.equal(await lab.getAttribute('data-state'),'open');
   }else{
    await lab.locator('[data-nl-toggle="ketamine"]').click();assert.equal(await lab.getAttribute('data-state'),'open');
    await lab.locator('[data-nl-toggle="coagonist"]').click();assert.equal(await lab.getAttribute('data-state'),'closed');
    await lab.locator('[data-nl-toggle="coagonist"]').click();await lab.locator('[data-nl-toggle="depolarized"]').click();assert.equal(await lab.getAttribute('data-state'),'magnesium');
    await lab.locator('[data-nl-toggle="depolarized"]').click();
   }
   await lab.locator('[data-nl-motion]').click();assert.equal(await lab.locator('[data-nl-motion]').getAttribute('aria-pressed'),'true');assert.equal(await lab.locator('.nl-ion').first().evaluate(e=>getComputedStyle(e).animationName),'none','Reduced motion respected');
   for(const selector of ['.nl-presets','.nl-controls','.nl-transport'])assert.ok(await lab.locator(selector).evaluate(e=>{const r=e.getBoundingClientRect(),p=e.closest('.nl-lab').getBoundingClientRect();return Math.abs((r.left+r.right-p.left-p.right)/2)<2}),selector+' centered');
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Page overflow ${width}/${theme}/${id}`);
   for(const b of await lab.locator('button').all())assert.ok(await b.evaluate(e=>e.scrollWidth<=e.clientWidth+1),`Button label overflow ${width}/${theme}/${id}: ${await b.innerText()}`);
   await lab.locator('.nl-reading summary').last().click();assert.match(await lab.locator('.nl-reading').last().innerText(),/8ª edizione italiana/);
   if([1440,390].includes(width)){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+`/${id}-${width}-${theme}.png`,fullPage:true});}
   await lab.locator('[data-nl-reset]').click();assert.equal(await lab.getAttribute('data-state'),'closed');assert.equal(await lab.locator('[data-nl-motion]').getAttribute('aria-pressed'),'false');
   matrix.push({width,theme,id});
  }
  await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-nl-preset="2"]').click();await page.locator('[data-nl-motion]').click();assert.equal(await page.locator('.nl-ion').first().evaluate(e=>getComputedStyle(e).animationName),'nl-stream');await page.locator('[data-nl-motion]').click();assert.equal(await page.locator('.nl-ion').first().evaluate(e=>getComputedStyle(e).animationName),'none');
  await page.goto(base+'#/receptors');await page.waitForSelector('.nl-gallery');await page.locator('#rx-search').fill('GABA-A');assert.equal(await page.locator('#rx-results .rx-result').count(),1);await page.locator('#rx-results .rx-result').click();await page.waitForSelector('elix-neuro-lab[target="GABAA"]');
  for(const [drug,id,target] of [['diazepam','CHEMBL12','GABAA'],['lorazepam','CHEMBL580','GABAA'],['midazolam','CHEMBL655','GABAA'],['ketamina','CHEMBL742','NMDAR']]){
   await page.goto(base+'#/receptors/'+target);await page.waitForSelector('.nl-lab');await page.locator(`.rx-drugs a[href="#/drug/${drug}"]`).click();await page.waitForSelector('[data-ev-section]');assert.match(await page.locator('.content h1').innerText(),new RegExp(drug,'i'));
   assert.ok(await page.locator(`a[href="#/receptors/${target}"]`).count()>0);const adme=page.locator(`[data-ev-section="${id}:adme"]`);if(!await adme.evaluate(e=>e.open))await adme.locator('summary').click();await page.waitForSelector('[data-pk-metric]');assert.equal(await page.locator('[data-pk-metric]').count(),6);await page.locator(`a[href="#/receptors/${target}"]`).first().click();await page.waitForSelector('.nl-lab');
  }
  for(const chapter of ['benzodiazepine','canali-ionici']){await page.goto(base+'#/textbook/'+chapter);await page.waitForSelector('.ex-reading');assert.match(await page.locator('.ex-reading').innerText(),/Rang & Dale/);}
  await context.close();
  const offline=await browser.newContext(),tab=await offline.newPage();tab.on('pageerror',e=>errors.push(e.message));await tab.goto(base+'#/receptors/NMDAR');await tab.waitForSelector('.nl-lab');await tab.waitForFunction(()=>!!navigator.serviceWorker.controller);await offline.setOffline(true);
  for(const target of ['GABAA','NMDAR']){await tab.goto(base+'#/receptors/'+target);await tab.reload();await tab.waitForSelector('.nl-lab');await tab.locator('[data-nl-preset="2"]').click();assert.ok(['potentiated','open'].includes(await tab.locator('elix-neuro-lab').getAttribute('data-state')));}
  await offline.close();assert.deepEqual(errors,[]);const report={passed:true,base,matrix,allScenarios:true,keyboardFocus:true,reducedMotion:true,animationPause:true,bidirectionalDrugLinks:4,chapters:2,offline:true,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
