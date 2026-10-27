const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_INTERACTIONS_OUTPUT||'/tmp/elix-audit/interactions';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await p.route('**/data/catalog.json',async route=>{await gate;await route.continue();});
  await p.goto(base+'#/textbook/metabolismo-trasportatori');await p.waitForSelector('elix-transport-explorer button');
  await p.locator('[data-transport-site-button="liver"]').click();await p.locator('[data-transport-state-button="inhibited"]').click();await p.locator('elix-transport-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-transport-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-transport-site-button="liver"]').getAttribute('aria-pressed'),'true');assert.equal(await p.locator('[data-transport-state-button="inhibited"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/metabolismo-trasportatori');await p.waitForSelector('elix-transport-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),24);assert.equal(await p.locator('.ex-selfcheck details').count(),10);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const site of ['gut','liver','kidney'])for(const state of ['reference','inhibited']){
    for(const selector of ['[data-transport-site-button="'+site+'"]','[data-transport-state-button="'+state+'"]']){await p.locator(selector).focus();await p.keyboard.press('Enter');assert.equal(await p.locator(selector).getAttribute('aria-pressed'),'true');}
    assert.equal(await p.locator('[data-transport-site-button][aria-pressed="true"]').count(),1);assert.equal(await p.locator('[data-transport-state-button][aria-pressed="true"]').count(),1);
    const trend=state==='inhibited'?'Può aumentare':'Condizione di confronto';assert.equal(await p.locator('.transport-explanation h4').textContent(),trend);assert.equal(await p.locator('.transport-scene').getAttribute('data-transport-site'),site);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.transport-lab','.transport-scene'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('.transport-controls button').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    matrix.push({width,theme,site,state,trend,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)&&state!=='reference')await p.locator('elix-transport-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+site+'-'+state+'.png',style:'.topbar{visibility:hidden!important}'});
   }
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-transport-site-button="kidney"]').getAttribute('aria-pressed'),'true');assert.equal(await p.locator('[data-transport-state-button="inhibited"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-23');
   await p.locator('#part-23 [data-theory-source="OZA-PRIOR"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-OZA-PRIOR');
   for(let i=0;i<10;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL8','CHEMBL175691','CHEMBL2095208','CHEMBL374478','CHEMBL1064','CHEMBL1487','CHEMBL914','CHEMBL1751']){
   await p.goto(base+'#/textbook/metabolismo-trasportatori');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  for(const route of ['drug/metoprololo','drug/clopidogrel','drug/eplerenone','drug/ozanimod','receptors/CYP2D6','receptors/CYP2C19','receptors/S1PR5']){
   await p.goto(base+'#/textbook/metabolismo-trasportatori');await p.locator('.ex-related a[href="#/'+route+'"]').click();await p.waitForURL(base+'#/'+route);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!/non trovato|non catalogato|non trovata/i.test(await p.locator('#elix-main').innerText()));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('chelazione');await p.locator('.ex-volume a[href="#/textbook/metabolismo-trasportatori"]').click();await p.waitForSelector('elix-transport-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('chelazione');await p.locator('#global-results a[href="#/textbook/metabolismo-trasportatori"]').click();await p.waitForSelector('elix-transport-explorer');await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/metabolismo-trasportatori');await page.waitForSelector('elix-transport-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-transport-explorer');await page.locator('[data-transport-site-button="liver"]').click();await page.locator('[data-transport-state-button="inhibited"]').click();assert.equal(await page.locator('.transport-explanation h4').textContent(),'Può aumentare');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/metabolismo-trasportatori-reading.json').then(r=>r.json()),r=await fetch('./data/metabolismo-trasportatori-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['metabolismo-trasportatori',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:24,selfChecks:10,catalogLinks:8,legacyAndTargetLinks:7,bothSearches:true,lateCatalogRefreshPreservesChoices:true,themePreservesChoices:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
