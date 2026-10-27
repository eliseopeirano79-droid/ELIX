const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_AD_OUTPUT||'/tmp/elix-audit/antidepressants';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  let releaseCatalog;const gate=new Promise(r=>releaseCatalog=r);
  await p.route('**/data/catalog.json',async route=>{await gate;await route.continue();});
  await p.goto(base+'#/textbook/antidepressivi');await p.waitForSelector('elix-antidepressant-explorer button');
  await p.locator('[data-ad-button="sari"]').click();await p.locator('elix-antidepressant-explorer').evaluate(e=>e.dataset.beforeCatalog='true');releaseCatalog();
  await p.waitForFunction(()=>{const e=document.querySelector('elix-antidepressant-explorer');return e&&!e.dataset.beforeCatalog;});
  assert.equal(await p.locator('[data-ad-button="sari"]').getAttribute('aria-pressed'),'true');await p.unroute('**/data/catalog.json');
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/antidepressivi');await p.waitForSelector('elix-antidepressant-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),29);assert.equal(await p.locator('.ex-selfcheck details').count(),14);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const state of ['base','sert','net','mao','alpha2','sari']){
    const selector='[data-ad-button="'+state+'"]';await p.locator(selector).focus();await p.keyboard.press('Enter');assert.equal(await p.locator(selector).getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('[data-ad-button][aria-pressed="true"]').count(),1);
    const result={base:'Seguire il trasmettitore',sert:'Ridurre il rientro',net:'Un altro trasportatore',mao:'Agire dentro la cellula',alpha2:'Togliere un freno',sari:'Due azioni distinte'}[state];assert.equal(await p.locator('.ad-explanation h4').textContent(),result);assert.equal(await p.locator('.ad-scene').getAttribute('data-ad-state'),state);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    for(const selector of ['.ex-reading','.ad-lab','.ad-scene'])assert.ok(await p.locator(selector).evaluate(e=>e.scrollWidth<=e.clientWidth+1),selector+' overflow');
    for(const rect of await p.locator('.ad-controls button').evaluateAll(bs=>bs.map(b=>({h:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.h>=44);assert.equal(rect.overflow,false);}
    const fits=await p.locator('.ad-scene svg').evaluate(e=>[...e.querySelectorAll('text')].every(t=>{const b=t.getBBox();return b.x>=0&&b.x+b.width<=360}));assert.ok(fits,'SVG text fits');
    matrix.push({width,theme,state,result,keyboard:true,noOverflow:true});
    if([1440,390].includes(width)&&['base','sari','alpha2'].includes(state))await p.locator('elix-antidepressant-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'-'+state+'.png',style:'.topbar{visibility:hidden!important}'});
   }
   await p.locator('[data-act="theme"]').click();assert.equal(await p.locator('[data-ad-button="sari"]').getAttribute('aria-pressed'),'true');await p.locator('[data-act="theme"]').click();
   for(const id of ['stress-asse','deposito-ricaptazione','net-regioni','modelli-prova','genotipo-bersaglio']){const section=p.locator('[data-section="'+id+'"]');assert.equal(await section.count(),1);assert.ok(await section.evaluate(e=>e.scrollWidth<=e.clientWidth+1));}
   if([1440,390].includes(width)){await p.locator('[data-section="stress-asse"]').screenshot({path:out+'/stress-'+width+'-'+theme+'.png',style:'.topbar{visibility:hidden!important}'});await p.locator('[data-section="net-regioni"]').screenshot({path:out+'/net-'+width+'-'+theme+'.png',style:'.topbar{visibility:hidden!important}'});await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-28');
   await p.locator('[data-section="genotipo-bersaglio"] [data-theory-source="CPIC"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-CPIC');
   await p.locator('#part-28 [data-theory-source="K"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-K');
   for(let i=0;i<14;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  }
  for(const id of ['CHEMBL41','CHEMBL809','CHEMBL1175','CHEMBL637','CHEMBL629','CHEMBL654','CHEMBL621','CHEMBL894','CHEMBL3989843']){
   await p.goto(base+'#/textbook/antidepressivi');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('antidepressivi');await p.locator('.ex-volume a[href="#/textbook/antidepressivi"]').click();await p.waitForSelector('elix-antidepressant-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('antidepressivi');await p.locator('#global-results a[href="#/textbook/antidepressivi"]').click();await p.waitForSelector('elix-antidepressant-explorer');const newResult=await p.evaluate(async()=>{const m=await fetch('./data/depression-circuits-reading.json').then(r=>r.json());return [m.newTextPages,m.rereadTextPages,m.newChapters,m.expandedExistingChapters]});assert.deepEqual(newResult,[11,2,0,1]);await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/antidepressivi');await page.waitForSelector('elix-antidepressant-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-antidepressant-explorer');await page.locator('[data-ad-button="mao"]').click();assert.equal(await page.locator('.ad-explanation h4').textContent(),'Agire dentro la cellula');
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/depression-circuits-reading.json').then(r=>r.json()),r=await fetch('./data/antidepressivi-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['antidepressivi',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:29,selfChecks:14,catalogLinks:9,bothSearches:true,lateCatalogRefreshPreservesChoices:true,themePreservesChoices:true,offlineChapterModelAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
