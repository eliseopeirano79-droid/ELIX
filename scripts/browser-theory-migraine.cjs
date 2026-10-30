const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_MIGRAINE_OUTPUT||'/tmp/elix-audit/migraine';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.setDefaultTimeout(60000);p.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/emicrania');await p.waitForLoadState('networkidle');await p.waitForSelector('[data-section="moh"]');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),22);assert.equal(await p.locator('.ex-selfcheck details').count(),18);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
   for(const selector of ['.ex-reading','.ex-formula','[data-section="cgrp"]','[data-section="moh"]','[data-section="cgrp-complesso"]','[data-section="ligando-recettore"]','[data-section="selettivita-serotonina"]','[data-section="misura-biomarcatore"]','[data-section="via-tempo-risposta"]','[data-section="tollerabilita-rischio"]','[data-section="gravidanza-evidenze"]','[data-section="gepanti-prodotti"]','[data-section="cgrp-sorveglianza"]','[data-section="indicazione-accesso"]'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
   if([1440,390].includes(width)){
    await p.evaluate(()=>document.activeElement?.blur());
    for(const section of ['gepanti-prodotti','cgrp-sorveglianza','indicazione-accesso'])await p.locator('[data-section="'+section+'"]').screenshot({path:out+'/'+section+'-'+width+'-'+theme+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
    await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});
   }
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();
   await p.locator('[data-elix="chapter-jump"]').last().focus();await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-21');
   for(const [section,id] of [['moh','ICHD-MOH'],['cgrp','RIM-EMA'],['cgrp','ATO-EMA'],['cgrp-complesso','IUPHAR-CGRP'],['ligando-recettore','EREN-EMA'],['ligando-recettore','FREM-EMA'],['selettivita-serotonina','LAS-EMA'],['misura-biomarcatore','CGRP-ORMONI'],['via-tempo-risposta','SUM-SC-UK'],['tollerabilita-rischio','SUM-UK'],['gravidanza-evidenze','FDA-PLLR'],['gravidanza-evidenze','NICE'],['gepanti-prodotti','KAT-MIG'],['gepanti-prodotti','RAN-MIG'],['gepanti-prodotti','APP-MIG'],['cgrp-sorveglianza','ZAV-US'],['indicazione-accesso','AIFA-ATO'],['indicazione-accesso','AIFA-REG']]){await p.locator('[data-section="'+section+'"] [data-theory-source="'+id+'"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+id);}
   for(let i=0;i<18;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
   matrix.push({width,theme,sections:22,checks:18,keyboard:true,sourceFocus:true,noOverflow:true});
  }
  for(const id of ['CHEMBL128','CHEMBL2178422','CHEMBL3991065','CHEMBL27','CHEMBL220492','CHEMBL521','CHEMBL3833329','CHEMBL4297756','CHEMBL3039520']){
   await p.goto(base+'#/textbook/emicrania');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  for(const id of ['gpcr','fansi-cox','oppioidi','anticorpi-biologici','metabolismo-trasportatori']){
   await p.goto(base+'#/textbook/emicrania');await p.locator('.ex-theory-related a[href="#/textbook/'+id+'"]').click();await p.waitForURL(base+'#/textbook/'+id);await p.waitForSelector('.ex-reading');
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('emicrania');await p.locator('.ex-volume a[href="#/textbook/emicrania"]').click();await p.waitForSelector('[data-section="moh"]');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('emicrania');await p.locator('#global-results a[href="#/textbook/emicrania"]').click();await p.waitForSelector('[data-section="moh"]');await p.waitForSelector('#search-overlay',{state:'hidden'});assert.equal(await p.evaluate(()=>document.activeElement.id),'elix-main');
  const ledger=await p.evaluate(()=>fetch('./data/emicrania-reading.json').then(r=>r.json()));assert.deepEqual([ledger.newReadPdfPages,ledger.totalReadPdfPages,ledger.newChapters,ledger.expandedExistingChapters],[10,27,0,1]);await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/emicrania');await page.waitForSelector('[data-section="moh"]');await page.waitForFunction(()=>!!navigator.serviceWorker.controller,null,{timeout:90000});await off.setOffline(true);await page.reload();await page.waitForSelector('[data-section="moh"]');assert.equal(await page.locator('.ex-reading > section[data-section]').count(),22);
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/emicrania-reading.json').then(r=>r.json()),r=await fetch('./data/emicrania-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['emicrania',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:22,selfChecks:18,catalogLinks:9,relatedChapterLinks:5,bothSearches:true,sameRouteSearchSelectionVerified:true,offlineChapterAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
