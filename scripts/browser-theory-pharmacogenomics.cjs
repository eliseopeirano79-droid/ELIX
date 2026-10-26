const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_PGX_OUTPUT||'/tmp/elix-audit/pharmacogenomics';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await p.route('**/data/catalog.json',async route=>{await gate;await route.continue();});
  await p.goto(base+'#/textbook/farmacogenomica');await p.waitForSelector('elix-pgx-explorer button');
  await p.locator('[data-pgx-role-button="activation"]').click();await p.locator('[data-pgx-activity-button="low"]').click();await p.locator('elix-pgx-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-pgx-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-pgx-role-button="activation"]').getAttribute('aria-pressed'),'true');assert.equal(await p.locator('[data-pgx-activity-button="low"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/farmacogenomica');await p.waitForSelector('elix-pgx-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),22);assert.equal(await p.locator('.ex-selfcheck details').count(),10);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const role of ['inactivation','activation'])for(const activity of ['low','reference','high']){
    for(const selector of ['[data-pgx-role-button="'+role+'"]','[data-pgx-activity-button="'+activity+'"]']){await p.locator(selector).focus();await p.keyboard.press('Enter');assert.equal(await p.locator(selector).getAttribute('aria-pressed'),'true');}
    assert.equal(await p.locator('[data-pgx-role-button][aria-pressed="true"]').count(),1);assert.equal(await p.locator('[data-pgx-activity-button][aria-pressed="true"]').count(),1);
    const trend=activity==='reference'?'Condizione di confronto':(role==='activation')===(activity==='high')?'Può aumentare':'Può diminuire';assert.equal(await p.locator('.pgx-explanation h4').textContent(),trend);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.pgx-lab','.pgx-scene'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('.pgx-controls button').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    for(const h of await p.locator('[data-pgx-activity-button]').evaluateAll(bs=>bs.map(b=>{const r=document.createRange();r.selectNodeContents(b);return r.getBoundingClientRect().height;})))assert.ok(h<24,'single-word activity label wrapped');
    matrix.push({width,theme,role,activity,trend,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)&&activity!=='reference')await p.locator('elix-pgx-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+role+'-'+activity+'.png',style:'.topbar{visibility:hidden!important}'});
   }
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-pgx-role-button="activation"]').getAttribute('aria-pressed'),'true');assert.equal(await p.locator('[data-pgx-activity-button="high"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-21');
   await p.locator('#part-21 [data-theory-source="SFI"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-SFI');
   for(let i=0;i<10;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL485','CHEMBL13','CHEMBL1771','CHEMBL1542','CHEMBL1200751','CHEMBL481','CHEMBL185','CHEMBL1064','CHEMBL1380','CHEMBL2336071']){
   await p.goto(base+'#/textbook/farmacogenomica');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  for(const route of ['drug/metoprololo','drug/clopidogrel','drug/siponimod','receptors/CYP2D6','receptors/CYP2C19','receptors/CYP2C9']){
   await p.goto(base+'#/textbook/farmacogenomica');await p.locator('.ex-related a[href="#/'+route+'"]').click();await p.waitForURL(base+'#/'+route);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!/non trovato|non catalogato|non trovata/i.test(await p.locator('#elix-main').innerText()));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('fenoconversione');await p.locator('.ex-volume a[href="#/textbook/farmacogenomica"]').click();await p.waitForSelector('elix-pgx-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('fenoconversione');await p.locator('#global-results a[href="#/textbook/farmacogenomica"]').click();await p.waitForSelector('elix-pgx-explorer');await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/farmacogenomica');await page.waitForSelector('elix-pgx-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-pgx-explorer');await page.locator('[data-pgx-role-button="activation"]').click();await page.locator('[data-pgx-activity-button="low"]').click();assert.equal(await page.locator('.pgx-explanation h4').textContent(),'Può diminuire');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/farmacogenomica-reading.json').then(r=>r.json()),r=await fetch('./data/farmacogenomica-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['farmacogenomica',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:22,selfChecks:10,catalogLinks:10,legacyAndTargetLinks:6,bothSearches:true,lateCatalogRefreshPreservesChoices:true,themePreservesChoices:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
