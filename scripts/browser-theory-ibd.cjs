const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_IBD_OUTPUT||'/tmp/elix-audit/ibd';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.setDefaultTimeout(60000);p.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/malattie-infiammatorie-intestinali');await p.waitForLoadState('networkidle');await p.waitForSelector('[data-section="biosimilari-confronto"]');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),33);assert.equal(await p.locator('.ex-selfcheck details').count(),32);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
   for(const selector of ['.ex-reading','.ex-formula','[data-section="profarmaci"]','[data-section="evidenze"]','[data-section="biosimilari-confronto"]'])assert.ok(await p.locator(selector).evaluateAll(elements=>elements.length>0 && elements.every(e=>e.scrollWidth<=e.clientWidth+1)),selector+' overflow');
   if([1440,390].includes(width)){
    await p.evaluate(()=>document.activeElement?.blur());
    for(const section of ['tnf-segnale','biosimilari-confronto'])await p.locator('[data-section="'+section+'"]').screenshot({path:out+'/'+section+'-'+width+'-'+theme+'.png',style:'.topbar,.elix-skip{visibility:hidden!important}'});
    await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});
   }
   if(!await p.locator('[data-elix="chapter-jump"]').last().isVisible())await p.locator('.ex-toc summary').click();
   await p.locator('[data-elix="chapter-jump"]').last().focus();await p.keyboard.press('Enter');assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-32');
   for(const [section,id] of [['malattie','NIH-IBS'],['bersagli','CFI'],['profarmaci','APP'],['formulazioni','KAT'],['evidenze','BSG'],['evidenze','ECCO-UC'],['tollerabilita','SAS-UK'],['tollerabilita','MES-UK'],['microbiota-e-limiti','AGA-FMT'],['recettore-glucocorticoidi','GR-NCBI'],['budesonide-primo-passaggio','BUD-CR-UK'],['budesonide-formulazioni','BUD-MMX-UK'],['steroidi-induzione','ACG-UC'],['steroidi-induzione','ACG-CD'],['steroidi-rischi','ESE-HPA'],['tiopurine-metabolismo','CPIC'],['tiopurine-tempo','AZA-UK'],['calcineurina-il2','FII-S'],['calcineurina-il2','FII-A'],['ciclosporina-contesto','CSA-UK'],['metotrexato-meccanismo','MTX-UK'],['metotrexato-contesto','AGA-CD'],['metotrexato-settimana','EMA-MTX'],['tnf-segnale','EMA-HUM'],['anti-tnf-formati','FDA-CIM'],['anti-tnf-indicazioni','EMA-REM'],['anti-tnf-indicazioni','EMA-SIM'],['anti-tnf-indicazioni','EMA-CIM'],['anti-tnf-indicazioni','EMA-ENB'],['anti-tnf-immunogenicita','HUM-UK'],['anti-tnf-sicurezza','IFX-UK'],['biosimilari-confronto','EMA-BIO'],['biosimilari-confronto','EMA-RMS']]){await p.locator('[data-section="'+section+'"] [data-theory-source="'+id+'"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+id);}
   for(let i=0;i<32;i++){const q=p.locator('.ex-selfcheck details').nth(i);await q.locator('summary').focus();if(await q.getAttribute('open')!==null)await p.keyboard.press('Enter');await p.keyboard.press('Enter');assert.notEqual(await q.getAttribute('open'),null);}
   matrix.push({width,theme,sections:33,checks:32,keyboard:true,sourceFocus:true,noOverflow:true});
  }
  for(const id of ['CHEMBL704','CHEMBL421','CHEMBL425','CHEMBL1201346','CHEMBL1370','CHEMBL1201581','CHEMBL635','CHEMBL131','CHEMBL1542','CHEMBL1200751','CHEMBL160','CHEMBL34259','CHEMBL1201580','CHEMBL1201833','CHEMBL1201831','CHEMBL1201572']){
   await p.goto(base+'#/textbook/malattie-infiammatorie-intestinali');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  for(const id of ['pro-farmaci-metaboliti-attivi','formulazioni-sali-bioequivalenza','anticorpi-biologici','farmacogenomica','first-pass-avanzato']){
   await p.goto(base+'#/textbook/malattie-infiammatorie-intestinali');await p.locator('.ex-theory-related a[href="#/textbook/'+id+'"]').click();await p.waitForURL(base+'#/textbook/'+id);await p.waitForSelector('.ex-reading');
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('anti-TNF');await p.locator('.ex-volume a[href="#/textbook/malattie-infiammatorie-intestinali"]').click();await p.waitForSelector('[data-section="biosimilari-confronto"]');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('anti-TNF');await p.locator('#global-results a[href="#/textbook/malattie-infiammatorie-intestinali"]').click();await p.waitForSelector('[data-section="biosimilari-confronto"]');await p.waitForSelector('#search-overlay',{state:'hidden'});assert.equal(await p.evaluate(()=>document.activeElement.id),'elix-main');
  const ledger=await p.evaluate(()=>fetch('./data/mici-reading.json').then(r=>r.json()));assert.deepEqual([ledger.newReadPdfPages,ledger.totalReadPdfPages,ledger.newChapters,ledger.expandedExistingChapters],[11,51,0,1]);await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.setDefaultTimeout(90000);page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/malattie-infiammatorie-intestinali');await page.waitForSelector('[data-section="biosimilari-confronto"]');await page.waitForFunction(()=>!!navigator.serviceWorker.controller,null,{timeout:90000});await off.setOffline(true);await page.reload();await page.waitForSelector('[data-section="biosimilari-confronto"]');assert.equal(await page.locator('.ex-reading > section[data-section]').count(),33);
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/mici-reading.json').then(r=>r.json()),r=await fetch('./data/mici-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['malattie-infiammatorie-intestinali',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/report.json',JSON.stringify({passed:true,base,configurations:matrix.length,matrix,sections:33,selfChecks:32,catalogLinks:16,relatedChapterLinks:5,bothSearches:true,sameRouteSearchSelectionVerified:true,offlineChapterAndRecords:true,errors},null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
