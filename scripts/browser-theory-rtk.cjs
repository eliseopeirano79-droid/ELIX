const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_RTK_OUTPUT||'/tmp/elix-audit/rtk';fs.mkdirSync(out,{recursive:true});
 const expected={rest:['Non attivo','Non attivo','Non attivo'],ligand:['Attivo','Attivo','Attivo'],external:['Non attivo','Non attivo','Non attivo'],kinase:['Non attivo','Non attivo','Non attivo'],bypass:['Non attivo','Attivo','Attivo']};
 const browser=await chromium.launch(),errors=[],matrix=[];
 try{
  const ctx=await browser.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
  for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
   await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/tirosinchinasi');await p.reload();await p.waitForSelector('elix-rtk-explorer button');
   if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
   assert.equal(await p.locator('.ex-reading > section[data-section]').count(),18);assert.equal(await p.locator('.ex-selfcheck details').count(),8);
   assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
   for(const [mode,status]of Object.entries(expected)){
    const btn=p.locator('[data-rtk-mode="'+mode+'"]');await btn.focus();await p.keyboard.press('Enter');assert.equal(await btn.getAttribute('aria-pressed'),'true');
    assert.equal(await p.locator('[data-rtk-mode][aria-pressed="true"]').count(),1);assert.deepEqual(await p.locator('[data-rtk-state] dd').allTextContents(),status);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'document overflow '+width);
    assert.ok(await p.locator('.ex-reading').evaluate(e=>e.scrollWidth<=e.clientWidth+1),'reading overflow '+width);
    assert.ok(await p.locator('.rtk-lab').evaluate(e=>e.scrollWidth<=e.clientWidth+1),'model overflow '+width);
    for(const rect of await p.locator('[data-rtk-mode]').evaluateAll(bs=>bs.map(b=>({height:b.getBoundingClientRect().height,overflow:b.scrollWidth>b.clientWidth+1})))){assert.ok(rect.height>=44);assert.equal(rect.overflow,false);}
    matrix.push({width,theme,mode,status,keyboard:true,noOverflow:true});
   }
   if([1440,390].includes(width)){
    await p.locator('[data-rtk-mode="bypass"]').blur();await p.locator('elix-rtk-explorer').screenshot({path:out+'/model-'+width+'-'+theme+'.png',style:'.topbar{visibility:hidden!important}'});
    await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/chapter-'+width+'-'+theme+'.png'});
   }
   if(width<=780)await p.locator('.ex-toc summary').click();
   await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-17');
   await p.locator('#part-17 [data-theory-source="FDA-KRAS"]').click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-FDA-KRAS');
   for(let i=0;i<8;i++){await p.locator('.ex-selfcheck summary').nth(i).focus();await p.keyboard.press('Enter');assert.ok(await p.locator('.ex-selfcheck details').nth(i).getAttribute('open')!==null);}
  }
  for(const id of ['CHEMBL941','CHEMBL939','CHEMBL3353410','CHEMBL1201585']){
   await p.goto(base+'#/textbook/tirosinchinasi');await p.locator('.ex-theory-molecules a[href="#/molecule/'+id+'"]').click();await p.waitForURL(base+'#/molecule/'+id);await p.waitForFunction(()=>document.querySelector('#elix-main')?.innerText.length>200);assert.ok(!(await p.locator('#elix-main').innerText()).includes('Molecola non trovata'));
  }
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('trans-fosforilazione');await p.locator('.ex-volume a[href="#/textbook/tirosinchinasi"]').click();await p.waitForSelector('elix-rtk-explorer');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill('trans-fosforilazione');await p.locator('#global-results a[href="#/textbook/tirosinchinasi"]').click();await p.waitForSelector('elix-rtk-explorer');
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('');assert.equal(await p.locator('.ex-chapter-status').filter({hasText:'Stesura estesa'}).count(),8);await ctx.close();
  const off=await browser.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/tirosinchinasi');await page.waitForSelector('elix-rtk-explorer');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);await page.reload();await page.waitForSelector('elix-rtk-explorer');await page.locator('[data-rtk-mode="bypass"]').click();assert.deepEqual(await page.locator('[data-rtk-state] dd').allTextContents(),expected.bypass);
  assert.deepEqual(await page.evaluate(async()=>{const l=await fetch('./data/tirosinchinasi-reading.json').then(r=>r.json()),r=await fetch('./data/tirosinchinasi-review.json').then(r=>r.json());return [l.chapterId,l.fullCorpusRead,r.outcome]}),['tirosinchinasi',false,'pass']);await off.close();
  assert.deepEqual(errors,[]);const report={passed:true,base,configurations:matrix.length,matrix,chapterSections:18,selfChecks:8,existingMoleculeLinks:4,search:true,globalSearch:true,offlineChapterModelAndRecords:true,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,errors}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
