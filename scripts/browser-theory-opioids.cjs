const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_OP_OUTPUT||'/tmp/elix-audit/opioids';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await p.route('**/data/catalog.json',async route=>{await gate;await route.continue();});
  await p.goto(base+'#/textbook/oppioidi');await p.waitForSelector('elix-opioid-explorer button');
  await p.locator('[data-op-button="disinibizione"]').click();await p.locator('elix-opioid-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-opioid-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-op-button="disinibizione"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/oppioidi');await p.waitForSelector('elix-opioid-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),34);assert.equal(await p.locator('.ex-selfcheck details').count(),23);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const state of ['gio','terminale','postsinapsi','disinibizione']){
    const selector='[data-op-button="'+state+'"]';await p.locator(selector).focus();await p.keyboard.press('Enter');assert.equal(await p.locator(selector).getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('[data-op-button][aria-pressed="true"]').count(),1);
    const result={gio:'Tre vie in parallelo',terminale:'Meno calcio, meno rilascio',postsinapsi:'Una cellula meno eccitabile',disinibizione:'Inibire il freno'}[state];assert.equal(await p.locator('.op-explanation h4').textContent(),result);assert.equal(await p.locator('.op-scene').getAttribute('data-op-state'),state);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.op-lab','.op-scene'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('.op-controls button').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    const fits=await p.locator('.op-scene svg').evaluate(e=>[...e.querySelectorAll('text')].every(t=>{const b=t.getBBox();return b.x>=0&&b.x+b.width<=360}));assert.ok(fits,'SVG text fits');
    matrix.push({width,theme,state,result,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)&&['gio','terminale','postsinapsi','disinibizione'].includes(state))await p.locator('elix-opioid-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+state+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
   }
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-op-button="disinibizione"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   for(const id of ['buprenorfina','morfina','antagonisti','contesto','ragionamento','remifentanil','antagonismo-periferico','associazioni-naloxone','tolleranza-crociata']){const section=p.locator('[data-section="'+id+'"]');assert.equal(await section.count(),1);assert.ok(await section.evaluate(e=>e.scrollWidth<=e.clientWidth+1));}
   await p.evaluate(()=>document.activeElement?.blur());
   if([1440,390].includes(width))for(const id of ['sensibilizzazione-periferica','sensibilizzazione-centrale'])await p.locator('[data-section="'+id+'"]').screenshot({path:out+'/'+id+'-'+width+'-'+theme+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
   if([1440,390].includes(width)){await p.locator('[data-section="respirazione"]').screenshot({path:out+'/stress-'+width+'-'+theme+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});await p.locator('[data-section="dipendenza"]').screenshot({path:out+'/net-'+width+'-'+theme+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-33');
   await p.locator('[data-section="codeina"] [data-theory-source="CPIC-OP"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-CPIC-OP');
   await p.locator('#part-33 [data-theory-source="K"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-K');
   for(let i=0;i<23;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL70','CHEMBL485','CHEMBL80','CHEMBL596','CHEMBL19019','CHEMBL651','CHEMBL511142','CHEMBL1201776','CHEMBL1237044']){
   await p.goto(base+'#/textbook/oppioidi');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('oppioidi');await p.locator('.ex-volume a[href="#/textbook/oppioidi"]').click();await p.waitForSelector('elix-opioid-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('oppioidi');await p.locator('#global-results a[href="#/textbook/oppioidi"]').click();await p.waitForSelector('#search-overlay',{state:'hidden'});assert.equal(await p.evaluate(()=>document.activeElement.id),'elix-main');await p.waitForSelector('elix-opioid-explorer');for(const id of ['R','IASP']){await p.locator('[data-section="sensibilizzazione-centrale"] [data-theory-source="'+id+'"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+id);}const newResult=await p.evaluate(async()=>{const m=await fetch('./data/oppioidi-reading.json').then(r=>r.json());return [m.newReadPdfPages,m.visualPages,m.newChapters,m.expandedExistingChapters]});assert.deepEqual(newResult,[10,116,0,1]);await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/oppioidi');await page.waitForSelector('elix-opioid-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-opioid-explorer');await page.locator('[data-op-button="postsinapsi"]').click();assert.equal(await page.locator('.op-explanation h4').textContent(),'Una cellula meno eccitabile');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/oppioidi-reading.json').then(r=>r.json()),r=await fetch('./data/oppioidi-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['oppioidi',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:34,selfChecks:23,catalogLinks:9,newSourceNavigation:2,sameRouteSearchClosesAndFocusesContent:true,bothSearches:true,lateCatalogRefreshPreservesChoices:true,themePreservesChoices:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
