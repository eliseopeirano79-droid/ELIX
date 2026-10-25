const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const base=process.env.ELIX_BASE_URL||'http://127.0.0.1:8765/',out=process.env.ELIX_COMPLEMENTARY_OUTPUT||'/tmp/elix-audit/complementary';fs.mkdirSync(out,{recursive:true});
 const chapters=[['modelli-pk',16,'serbatoio anatomico'],['gpcr',15,'AKAP'],['desensibilizzazione-tolleranza',16,'tachifilassi']];
 const b=await chromium.launch(),errors=[],matrix=[];
 try{
 const ctx=await b.newContext({serviceWorkers:'block',reducedMotion:'reduce'}),p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
 for(const [id,n] of chapters)for(const width of [1440,768,390,320])for(const theme of ['dark','light']){
  await p.setViewportSize({width,height:1000});await p.goto(base+'#/textbook/'+id);await p.reload();await p.waitForSelector('.ex-reading [data-reading-manifest]');
  if(await p.locator('body').getAttribute('data-theme')!==theme)await p.locator('[data-act="theme"]').click();
  assert.equal(await p.locator('.ex-reading > section[data-section]').count(),n);assert.equal(await p.locator('.ex-selfcheck details').count(),8);
  assert.ok((await p.locator('.ex-reading-meta').textContent()).includes('revisione clinica non completata'));
  assert.equal(await p.locator('[data-reading-manifest]').getAttribute('href'),'./data/'+id+'-reading.json');
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),id+' '+width+' '+theme+' document overflow');assert.ok(await p.locator('.ex-reading').evaluate(e=>e.scrollWidth<=e.clientWidth+1),id+' '+width+' '+theme+' article overflow');
  if(width<=780)await p.locator('.ex-toc summary').click();
  await p.locator('[data-elix="chapter-jump"]').last().click();assert.equal(await p.evaluate(()=>document.activeElement.parentElement.id),'part-'+(n-1));
  const source=p.locator('#part-'+(n-1)+' [data-theory-source]').first(),ref=await source.getAttribute('data-theory-source');await source.click();assert.equal(await p.evaluate(()=>document.activeElement.id),'source-'+ref);assert.ok(p.url().endsWith('#/textbook/'+id));
  for(let i=0;i<8;i++){const q=p.locator('.ex-selfcheck summary').nth(i);await q.focus();await p.keyboard.press('Enter');assert.ok(await p.locator('.ex-selfcheck details').nth(i).getAttribute('open')!==null);}
  if([1440,390].includes(width)){if(width<=780)await p.locator('.ex-toc').evaluate(e=>e.open=false);await p.evaluate(()=>scrollTo(0,0));await p.screenshot({path:out+'/'+id+'-'+width+'-'+theme+'.png'});}
  const related=p.locator('.ex-theory-related a').first(),href=await related.getAttribute('href'),title=(await related.textContent()).replace(/ →$/,'');await related.click();await p.waitForURL(base+href);await p.waitForFunction(title=>document.querySelector('.ex-reading > h2')?.textContent===title,title,{timeout:10000});
  matrix.push({id,width,theme,sections:n,selfChecks:8,sourceJump:true,relatedLink:true,noOverflow:true});
 }
 for(const [id,,term]of chapters){
  await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill(term);await p.locator('.ex-volume a[href="#/textbook/'+id+'"]').click();await p.waitForSelector('.ex-reading');
  await p.locator('[data-act="search-open"]').click();await p.locator('#global-search').fill(term);await p.locator('#global-results a[href="#/textbook/'+id+'"]').click();await p.waitForSelector('.ex-reading');
 }
 await p.goto(base+'#/textbook');await p.locator('#ex-book-search').fill('');assert.equal(await p.locator('.ex-chapter-status').filter({hasText:'Stesura estesa'}).count(),4);await ctx.close();
 const off=await b.newContext(),page=await off.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'#/textbook/modelli-pk');await page.waitForSelector('.ex-reading');await page.waitForFunction(()=>!!navigator.serviceWorker.controller);await off.setOffline(true);
 for(const [id,n]of chapters){await page.goto(base+'#/textbook/'+id);await page.reload();await page.waitForSelector('[data-reading-manifest]');assert.equal(await page.locator('.ex-reading > section[data-section]').count(),n);const result=await page.evaluate(async id=>{const l=await fetch('./data/'+id+'-reading.json').then(x=>x.json()),r=await fetch('./data/'+id+'-review.json').then(x=>x.json());return[l.chapterId,l.fullCorpusRead,r.outcome]},id);assert.deepEqual(result,[id,false,'pass']);}
 await off.close();assert.deepEqual(errors,[]);const report={passed:true,base,matrix,search:true,globalSearch:true,offlineChaptersAndRecords:true,errors};fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({passed:true,configurations:matrix.length,offline:true,globalSearch:true,errors}));
 }finally{await b.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
