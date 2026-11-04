const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const {THEORY_HISTAMINE:c}=await import('../elix-theory-histamine.js');
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_HISTAMINE_OUTPUT||'/tmp/elix-audit/histamine';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
 const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.setDefaultTimeout(60000);p.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
  await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/'+c.id);await p.waitForSelector('[data-section="agonismo"]');
  if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
  assert.equal(await p.locator('.ex-reading > section[data-section]').count(),15);assert.equal(await p.locator('.ex-selfcheck details').count(),15);
  assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  for(const selector of ['.ex-reading','.ex-formula'])assert.ok(await p.locator(selector).evaluateAll(es=>es.length>0&&es.every(e=>e.scrollWidth<=e.clientWidth+1)),selector+' overflow');
  if([1440,390].includes(width)){await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});}
  if(width===1440&&theme==='dark')await p.locator('[data-section="agonismo"]').screenshot({path:out+'/agonismo-desktop.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
  if(width===390&&theme==='light')await p.locator('[data-section="sintesi"]').screenshot({path:out+'/sintesi-mobile.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
  if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();
  await p.locator('[data-elix="chapter-jump"]').last().focus();await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-14');
  for(const r of c.references){const section=c.sections.find(s=>s.refs.includes(r.id));assert.ok(section);await p.locator('[data-section="'+section.id+'"] [data-theory-source="'+r.id+'"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+r.id);}
  for(let i=0;i<15;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
  matrix.push({width,theme,sections:15,checks:15,keyboard:true,sourceFocus:true,noOverflow:true});
 }
 for(const m of c.moleculeLinks){await p.goto(base+'#/textbook/'+c.id);await p.locator('.ex-theory-molecules a[href="#/molecule/'+m.id+'"]').click();await p.waitForURL(base+'#/molecule/'+m.id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));}
 for(const id of c.relatedExistingChapterIds){await p.goto(base+'#/textbook/'+c.id);await p.locator('.ex-theory-related a[href="#/textbook/'+id+'"]').click();await p.waitForURL(base+'#/textbook/'+id);await p.waitForSelector('.ex-reading');}
 await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('Istamina e anti-H1');await p.locator('.ex-volume a[href="#/textbook/'+c.id+'"]').click();await p.waitForSelector('[data-section="agonismo"]');
 await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('Istamina e anti-H1');await p.locator('#global-results a[href="#/textbook/'+c.id+'"]').click();await p.waitForSelector('#search-overlay',{state:'hidden'});assert.equal(await p.evaluate(()=>document.activeElement.id),'elix-main');await ctx.close();
 const off=await browser.newContext(),page=await off.newPage();page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/'+c.id);await page.waitForSelector('[data-section="agonismo"]');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('[data-section="agonismo"]');assert.equal(await page.locator('.ex-reading > section[data-section]').count(),15);
 assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/istamina-antistaminici-reading.json').then(r=>r.json()),r=await fetch('./data/istamina-antistaminici-review.json').then(r=>r.json());return [l.newReadPdfPages,l.totalReadPdfPages,l.fullCorpusRead,r.outcome]}),[16,17,false,'pass']);await off.close();assert.deepEqual(errors,[]);
 fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:15,selfChecks:15,catalogLinks:16,relatedChapterLinks:5,bothSearches:true,sameRouteSearchSelectionVerified:true,offlineChapterAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:8,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
