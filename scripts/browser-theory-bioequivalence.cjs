const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_BE_OUTPUT||'/tmp/elix-audit/bioequivalence';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await p.route('**/data/catalog.json',async route=>{await gate;await route.continue();});
  await p.goto(base+'#/textbook/formulazioni-sali-bioequivalenza');await p.waitForSelector('elix-bioequivalence-explorer button');
  await p.locator('[data-be-button="peak"]').click();await p.locator('elix-bioequivalence-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-bioequivalence-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-be-button="peak"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/formulazioni-sali-bioequivalenza');await p.waitForSelector('elix-bioequivalence-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),24);assert.equal(await p.locator('.ex-selfcheck details').count(),10);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const state of ['contained','imprecise','peak','lower','upper']){
    const selector='[data-be-button="'+state+'"]';await p.locator(selector).focus();await p.keyboard.press('Enter');assert.equal(await p.locator(selector).getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('[data-be-button][aria-pressed="true"]').count(),1);
    const result=state==='contained'?'Criterio soddisfatto':'Criterio non soddisfatto';assert.equal(await p.locator('.be-explanation h4').textContent(),result);assert.equal(await p.locator('.be-scene').getAttribute('data-be-case'),state);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.be-lab','.be-scene'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('.be-controls button').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    const fits=await p.locator('.be-scene svg').evaluate(e=>[...e.querySelectorAll('text')].every(t=>{const b=t.getBBox();return b.x>=0&&b.x+b.width<=360}));assert.ok(fits,'SVG text fits');
    matrix.push({width,theme,state,result,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)&&['contained','peak'].includes(state))await p.locator('elix-bioequivalence-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+state+'.png',style:'.topbar{visibility:hidden!important}'});
   }
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-be-button="upper"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-23');
   await p.locator('#part-23 [data-theory-source="SFI"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-SFI');
   for(let i=0;i<10;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL13','CHEMBL2062335','CHEMBL2356097','CHEMBL723','CHEMBL1751']){
   await p.goto(base+'#/textbook/formulazioni-sali-bioequivalenza');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  for(const route of ['drug/metoprololo','drug/eparina','drug/enoxaparina']){
   await p.goto(base+'#/textbook/formulazioni-sali-bioequivalenza');await p.locator('.ex-related a[href="#/'+route+'"]').click();await p.waitForURL(base+'#/'+route);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!/non trovato|non catalogato|non trovata/i.test(await p.locator('#elix-main').innerText()));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('biowaiver');await p.locator('.ex-volume a[href="#/textbook/formulazioni-sali-bioequivalenza"]').click();await p.waitForSelector('elix-bioequivalence-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('biowaiver');await p.locator('#global-results a[href="#/textbook/formulazioni-sali-bioequivalenza"]').click();await p.waitForSelector('elix-bioequivalence-explorer');await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/formulazioni-sali-bioequivalenza');await page.waitForSelector('elix-bioequivalence-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-bioequivalence-explorer');await page.locator('[data-be-button="imprecise"]').click();assert.equal(await page.locator('.be-explanation h4').textContent(),'Criterio non soddisfatto');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/formulazioni-sali-bioequivalenza-reading.json').then(r=>r.json()),r=await fetch('./data/formulazioni-sali-bioequivalenza-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['formulazioni-sali-bioequivalenza',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:24,selfChecks:10,catalogLinks:5,legacyLinks:3,bothSearches:true,lateCatalogRefreshPreservesChoices:true,themePreservesChoices:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
