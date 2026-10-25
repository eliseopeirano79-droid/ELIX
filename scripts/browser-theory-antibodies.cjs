const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_ANTIBODIES_OUTPUT||'/tmp/elix-audit/antibodies';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 const expected={igg:'Presente',fab:'Assente',fusion:'Presente',bispecific:'Assente in questo formato',adc:'Presente nel modello'};
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  // Exercise the real late-catalog refresh rather than only replacing a component in isolation.
  let releaseCatalog;const catalogGate=new Promise(resolve=>releaseCatalog=resolve);
  await p.route('**/data/catalog.json',async route=>{await catalogGate;await route.continue();});
  await p.goto(base+'#/textbook/anticorpi-biologici');await p.waitForSelector('elix-antibody-explorer button');await p.locator('[data-antibody-format="fab"]').click();await p.locator('elix-antibody-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-antibody-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-antibody-format="fab"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/anticorpi-biologici');await p.waitForSelector('elix-antibody-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),22);assert.equal(await p.locator('.ex-selfcheck details').count(),10);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const [mode,fc]of Object.entries(expected)){
    const b=p.locator('[data-antibody-format="'+mode+'"]');await b.focus();await p.keyboard.press('Enter');assert.equal(await b.getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('[data-antibody-format][aria-pressed="true"]').count(),1);assert.equal(await p.locator('.ab-explanation dd').nth(1).textContent(),fc);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.ab-lab','.ab-layout'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('[data-antibody-format]').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    matrix.push({width,theme,mode,fc,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)){await b.blur();await p.locator('elix-antibody-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+mode+'.png',style:'.topbar{visibility:hidden!important}'});}
   }
   // Theme changes recreate the app shell; the selected format must remain selected.
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-antibody-format="adc"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-21');
   await p.locator('#part-21 [data-theory-source="SFI"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-SFI');
   for(let i=0;i<10;i++){await p.locator('.ex-selfcheck summary').nth(i).focus();if(await p.locator('.ex-selfcheck details').nth(i).getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await p.locator('.ex-selfcheck details').nth(i).getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL1201580','CHEMBL1201572','CHEMBL1201831','CHEMBL1201570','CHEMBL1237022','CHEMBL1742992','CHEMBL1743082']){
   await p.goto(base+'#/textbook/anticorpi-biologici');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('microeterogeneità');await p.locator('.ex-volume a[href="#/textbook/anticorpi-biologici"]').click();await p.waitForSelector('elix-antibody-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('microeterogeneità');await p.locator('#global-results a[href="#/textbook/anticorpi-biologici"]').click();await p.waitForSelector('elix-antibody-explorer');await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/anticorpi-biologici');await page.waitForSelector('elix-antibody-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-antibody-explorer');await page.locator('[data-antibody-format="fab"]').click();assert.equal(await page.locator('.ab-explanation dd').nth(1).textContent(),'Assente');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/anticorpi-biologici-reading.json').then(r=>r.json()),r=await fetch('./data/anticorpi-biologici-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['anticorpi-biologici',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:22,selfChecks:10,catalogLinks:7,bothSearches:true,lateCatalogRefreshPreservesFormat:true,themePreservesFormat:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
