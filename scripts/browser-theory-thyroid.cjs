const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const {THEORY_THYROID:c}=await import('../elix-theory-thyroid.js');
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_THYROID_OUTPUT||'/tmp/elix-audit/thyroid';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(process.env.ELIX_BROWSER_CHANNEL?{channel:process.env.ELIX_BROWSER_CHANNEL}:{}),errors=[],matrix=[];
 try{
 const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.setDefaultTimeout(60000);p.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
  await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/'+c.id);await p.waitForSelector('[data-section="asse-e-feedback"]');await p.waitForLoadState('networkidle');
  if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
  assert.equal(await p.locator('.ex-reading > section[data-section]').count(),c.sections.length);assert.equal(await p.locator('.ex-selfcheck details').count(),c.checks.length);
  assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  for(const selector of ['.ex-reading','.ex-formula'])assert.ok(await p.locator(selector).evaluateAll(es=>es.length>0&&es.every(e=>e.scrollWidth<=e.clientWidth+1)),selector+' overflow');
  if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
  if((width===1440&&theme==='dark')||(width===390&&theme==='light'))for(const id of ['deiodinasi','farmaci-e-obiettivi','esposizione-e-laboratorio']){
   const section=p.locator('[data-section="'+id+'"]');await section.scrollIntoViewIfNeeded();
   await section.screenshot({path:out+'/'+id+'-'+(width===1440?'desktop':'mobile')+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
  }
  if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();
  await p.locator('[data-elix="chapter-jump"]').last().focus();await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-'+(c.sections.length-1));
  for(const r of c.references){const section=c.sections.find(s=>s.refs.includes(r.id));assert.ok(section);await p.locator('[data-section="'+section.id+'"] [data-theory-source="'+r.id+'"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+r.id);}
  for(let i=0;i<c.checks.length;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  matrix.push({width,theme,sections:c.sections.length,checks:c.checks.length,keyboard:true,sourceFocus:true,noOverflow:true});
 }
 for(const m of c.moleculeLinks){await p.goto(base+'#/textbook/'+c.id);await p.locator('.ex-theory-molecules a[href="#/molecule/'+m.id+'"]').click();await p.waitForURL(base+'#/molecule/'+m.id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));}
 for(const id of c.relatedExistingChapterIds){await p.goto(base+'#/textbook/'+c.id);await p.locator('.ex-theory-related a[href="#/textbook/'+id+'"]').click();await p.waitForURL(base+'#/textbook/'+id);await p.waitForSelector('.ex-reading');}
 await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('Ormoni tiroidei');await p.locator('.ex-volume a[href="#/textbook/'+c.id+'"]').click();await p.waitForSelector('[data-section="asse-e-feedback"]');
 await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('Ormoni tiroidei');await p.locator('#global-results a[href="#/textbook/'+c.id+'"]').click();await p.waitForSelector('#search-overlay',{state:'hidden'});assert.equal(await p.evaluate(()=>document.activeElement.id),'elix-main');await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('primo passaggio');await p.locator('#global-results a[href="#/textbook/first-pass-avanzato"]').click();await p.waitForSelector('.ex-reading');await p.waitForURL(base+'#/textbook/first-pass-avanzato');await ctx.close();
 const off=await browser.newContext(),page=await off.newPage();page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/'+c.id);await page.waitForSelector('[data-section="asse-e-feedback"]');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('[data-section="asse-e-feedback"]');assert.equal(await page.locator('.ex-reading > section[data-section]').count(),c.sections.length);
 assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/terapia-tiroidea-reading.json').then(r=>r.json()),r=await fetch('./data/terapia-tiroidea-review.json').then(r=>r.json());return [l.newReadPdfPages,l.totalReadPdfPages,l.fullCorpusRead,r.outcome]}),[18,19,false,'pass']);await off.close();assert.deepEqual(errors,[]);
 fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:c.sections.length,selfChecks:c.checks.length,catalogLinks:c.moleculeLinks.length,relatedChapterLinks:c.relatedExistingChapterIds.length,bothSearches:true,firstPassTitleSearch:true,sameRouteSearchSelectionVerified:true,offlineChapterAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:8,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
