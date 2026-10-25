const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_RESPIRATORY_OUTPUT||'/tmp/elix-audit/respiratory';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({headless:true}),errors=[],matrix=[];
 try{
  const context=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',r=>r.request().url().startsWith(new URL(base).origin)?r.continue():r.abort());
  for(const width of [1440,768,390,320])for(const theme of ['dark','light'])for(const id of ['ADRB2','CHRM3','CYSLTR1']){
   await page.setViewportSize({width,height:960});await page.goto(base+'#/receptors/'+id);await page.waitForSelector('.aw-lab');
   if(await page.locator('body').getAttribute('data-theme')!==theme)await page.locator('[data-act="theme"]').click();
   assert.equal(await page.locator('.aw-step-count').innerText(),'PASSAGGIO 1 / 4');
   await page.locator('[data-aw="phase"][data-phase="3"]').click();assert.match(await page.locator('.aw-outcome').innerText(),id==='ADRB2'?/ridotto/:/aumentato/);
   await page.locator('[data-aw="mode"][data-mode="drug"]').click();assert.equal(await page.locator('.aw-step-count').innerText(),'PASSAGGIO 1 / 4');
   for(let n=0;n<3;n++)await page.locator('[data-aw="next"]').click();assert.match(await page.locator('.aw-outcome').innerText(),/ridotto/);
   assert.equal(await page.locator('[data-aw="next"]').isDisabled(),true);assert.equal(await page.locator('.aw-block').count(),id==='ADRB2'?0:1);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Overflow ${width}/${theme}/${id}`);
   for(const selector of ['.aw-mode','.aw-transport']){const centered=await page.locator(selector).evaluate(e=>{const r=e.getBoundingClientRect(),p=e.closest('.aw-lab').getBoundingClientRect();return Math.abs((r.left+r.right-p.left-p.right)/2)<2});assert.ok(centered,selector+' centered');}
   await page.locator('.aw-reading summary').first().click();assert.match(await page.locator('.aw-diseases').innerText(),/GINA 2026/);assert.match(await page.locator('.aw-diseases').innerText(),/GOLD 2026/);
   if([1440,390].includes(width)&&id==='CHRM3'){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:out+`/M3-${width}-${theme}.png`,fullPage:true});}
   matrix.push({width,theme,id});
  }
  await page.goto(base+'#/receptors/CHRM3');await page.waitForSelector('[data-aw="play"]');
  await page.locator('[data-aw-speed]').selectOption('3600');await page.locator('[data-aw="play"]').click();await page.waitForFunction(()=>document.querySelector('.aw-step-count')?.textContent.includes('2 / 4'),{},{timeout:8000});
  assert.equal(await page.locator('[data-aw="play"]').evaluate(e=>document.activeElement===e),true,'Playback retains keyboard focus');
  await page.locator('[data-aw="play"]').click();const stopped=await page.locator('.aw-step-count').innerText();await page.waitForTimeout(3800);assert.equal(await page.locator('.aw-step-count').innerText(),stopped);
  await page.locator('[data-aw="reset"]').click();assert.match(await page.locator('.aw-step-count').innerText(),/1 \/ 4/);
  await page.locator('[data-aw="play"]').click();await page.goto(base+'#/home');await page.waitForSelector('.eli-coverage dd');await page.waitForTimeout(2000);assert.equal(await page.locator('elix-airway-lab').count(),0);
  assert.deepEqual(await page.locator('.eli-coverage dd').allTextContents(),['4.225','96','66','93']);
  for(const [name,id,target] of [['Formoterolo','CHEMBL1256786','ADRB2'],['Tiotropio','CHEMBL1900528','CHRM3'],['Ipratropio','CHEMBL1621597','CHRM3'],['Montelukast','CHEMBL787','CYSLTR1']]){
   await page.goto(base+'#/molecule/'+id);await page.waitForSelector('[data-ev-section]');assert.match(await page.locator('.content h1').innerText(),new RegExp(name,'i'));
   for(const key of ['mechanism','adme','dosage']){const detail=page.locator(`[data-ev-section="${id}:${key}"]`);if(!await detail.evaluate(e=>e.open))await detail.locator('summary').click();}
   await page.waitForSelector('[data-batch-pharmacology]');assert.equal(await page.locator('[data-pk-metric]').count(),6);assert.ok(await page.locator(`a[href="#/receptors/${target}"]`).count()>0);
   assert.ok(await page.locator('a[href*="medicines.org.uk/emc/product/"]').count()>0);assert.doesNotMatch(await page.locator('body').innerText(),/Documento di prodotto non collegato/);
  }
  await page.goto(base+'#/textbook/asma-e-broncodilatatori');await page.waitForSelector('.ex-reading');assert.match(await page.locator('.ex-reading').innerText(),/GOLD 2026/);assert.ok(await page.locator('.ex-guides a[href*="ginasthma"]').count());
  await context.close();
  const offline=await browser.newContext(),tab=await offline.newPage();tab.on('pageerror',e=>errors.push(e.message));await tab.goto(base+'#/receptors/CHRM3');await tab.waitForSelector('.aw-lab');await tab.waitForFunction(()=>!!navigator.serviceWorker.controller);await offline.setOffline(true);await tab.reload();await tab.waitForSelector('.aw-lab');await tab.locator('[data-aw="mode"][data-mode="drug"]').click();await tab.locator('[data-aw="phase"][data-phase="3"]').click();assert.match(await tab.locator('.aw-outcome').innerText(),/ridotto/);await offline.close();
  assert.deepEqual(errors,[]);const report={passed:true,base,matrix,playPauseReset:true,keyboardFocus:true,sourceLinks:true,drugProfiles:4,offline:true,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
