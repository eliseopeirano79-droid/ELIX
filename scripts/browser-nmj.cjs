const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_NMJ_OUTPUT||'/tmp/elix-audit/nmj';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const slow=await browser.newContext({serviceWorkers:'block'}),sp=await slow.newPage();sp.on('pageerror',e=>errors.push(e.message));let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await sp.route('**/data/catalog.json',async r=>{const response=await r.fetch();await gate;await r.fulfill({response});});
  await sp.goto(base+'#/receptors/NACHR_MUSCLE');await sp.waitForSelector('elix-nmj-lab');await sp.locator('[data-nmj-stage="3"]').click();await sp.locator('[data-nmj-motion]').click();await sp.evaluate(()=>window.beforeCatalogLab=document.querySelector('elix-nmj-lab'));releaseCatalog();await sp.waitForFunction(()=>!window.beforeCatalogLab.isConnected);
  assert.equal(await sp.locator('elix-nmj-lab').getAttribute('data-state'),'capture-blocked');assert.equal(await sp.locator('[data-nmj-motion]').getAttribute('aria-pressed'),'true');assert.ok(await sp.locator('[data-nmj-motion]').evaluate(e=>document.activeElement===e));await sp.locator('[data-act="theme"]').click();assert.equal(await sp.locator('elix-nmj-lab').getAttribute('data-state'),'capture-blocked');await slow.close();
  const context=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await page.setViewportSize({width,height:1000});await page.goto(base+'#/receptors/NACHR_MUSCLE');await page.waitForSelector('.nj-lab');if(await page.locator('body').getAttribute('data-theme')!==theme)await page.locator('[data-act="theme"]').click();const lab=page.locator('elix-nmj-lab');
   assert.equal(await lab.locator('[data-nmj-subunit]').count(),5);
   for(let i=0;i<5;i++){
    await lab.locator(`[data-nmj-stage="${i}"]`).click();assert.equal(await lab.getAttribute('data-state'),['rest','conducting','blocked','capture-blocked','conducting'][i]);assert.equal(await lab.locator('.nj-sug').count(),i>=3?1:0);assert.equal(await lab.locator('[data-nmj-ring] .nj-roc').count(),[2,3].includes(i)?1:0);
    assert.ok(await lab.locator(`[data-nmj-stage="${i}"]`).evaluate(e=>document.activeElement===e));
    if(i>0){await lab.locator('[data-nmj-ach]').click();assert.equal(await lab.locator('.nl-ion').count(),0);await lab.locator('[data-nmj-ach]').click();}
   }
   await lab.locator('[data-nmj-motion]').click();assert.equal(await lab.locator('.nl-ion').evaluate(e=>getComputedStyle(e).animationName),'none');
   for(const selector of ['.nl-presets','.nl-controls','.nl-transport'])assert.ok(await lab.locator(selector).evaluate(e=>{const r=e.getBoundingClientRect(),p=e.closest('.nl-lab').getBoundingClientRect();return Math.abs((r.left+r.right-p.left-p.right)/2)<2}),selector+' centered');
   if(width<600)assert.ok(await lab.locator('[data-nmj-stage="4"]').evaluate(e=>{const r=e.getBoundingClientRect(),p=e.parentElement.getBoundingClientRect();return Math.abs((r.left+r.right-p.left-p.right)/2)<2}));
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));for(const b of await lab.locator('button').all())assert.ok(await b.evaluate(e=>e.scrollWidth<=e.clientWidth+1));
   assert.doesNotMatch(await page.locator('.content').innerText(),/undefined|NaN|\[object Object\]/);
   if([1440,390].includes(width)){await lab.locator('[data-nmj-stage="3"]').click();await lab.scrollIntoViewIfNeeded();await page.screenshot({path:out+`/capture-${width}-${theme}.png`,fullPage:true});}
   await lab.locator('[data-nmj-reset]').click();assert.equal(await lab.getAttribute('data-state'),'rest');assert.equal(await lab.locator('[data-nmj-motion]').getAttribute('aria-pressed'),'false');matrix.push({width,theme});
  }
  await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-nmj-stage="1"]').click();await page.locator('[data-nmj-motion]').click();assert.equal(await page.locator('.nl-ion').evaluate(e=>getComputedStyle(e).animationName),'nl-stream');await page.locator('[data-nmj-motion]').click();assert.equal(await page.locator('.nl-ion').evaluate(e=>getComputedStyle(e).animationName),'none');
  for(const [drug,id] of [['rocuronio','CHEMBL1201244'],['sugammadex','CHEMBL2111107']]){
   await page.goto(base+'#/receptors/NACHR_MUSCLE');await page.waitForSelector('.nj-lab');await page.locator(`.nj-drug-links a[href="#/molecule/${id}"]`).click();await page.waitForSelector(`[data-ev-section="${id}:mechanism"]`);await page.locator('[data-ev="expand-all"]').click();await page.waitForSelector('[data-pk-metric]');assert.equal(await page.locator('[data-pk-metric]').count(),6);
   if(drug==='sugammadex')assert.match(await page.locator('.content').innerText(),/non è un ligando del recettore nicotinico/);
   await page.locator('a[href="#/receptors/NACHR_MUSCLE"]').first().click();await page.waitForSelector('.nj-lab');
  }
  await page.goto(base+'#/textbook/parasimpatico-e-colinergici');await page.waitForSelector('.ex-reading');assert.match(await page.locator('.ex-reading').innerText(),/Lambert/);
  await page.goto(base+'#/receptors');await page.waitForSelector('.nj-gallery');await page.locator('.nj-gallery a').click();await page.waitForSelector('.nj-lab');await context.close();
  const offline=await browser.newContext(),tab=await offline.newPage();tab.on('pageerror',e=>errors.push(e.message));await tab.goto(base+'#/receptors/NACHR_MUSCLE');await tab.waitForSelector('.nj-lab');await tab.waitForFunction(()=>!!navigator.serviceWorker.controller);await offline.setOffline(true);await tab.reload();await tab.waitForSelector('.nj-lab');await tab.locator('[data-nmj-stage="3"]').click();assert.equal(await tab.locator('elix-nmj-lab').getAttribute('data-state'),'capture-blocked');
  for(const id of ['CHEMBL1201244','CHEMBL2111107']){await tab.goto(base+'#/molecule/'+id);await tab.reload();await tab.waitForSelector('[data-ev="expand-all"]');await tab.locator('[data-ev="expand-all"]').click();await tab.waitForSelector('[data-pk-metric]');assert.equal(await tab.locator('[data-pk-metric]').count(),6);}await offline.close();
  assert.deepEqual(errors,[]);const report={passed:true,base,matrix,allFiveScenes:true,achDependency:true,captureNotInstantRecovery:true,slowCatalogPreservesState:true,themePreservesState:true,focus:true,reducedMotion:true,animationPause:true,bidirectionalDrugLinks:2,contextualSugammadex:true,chapter:true,gallery:true,offline:true,offlineDrugProfiles:2,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
