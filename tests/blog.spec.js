import {test,expect} from '@playwright/test';
test('all 45 articles are discoverable through load more and search',async({page})=>{
 await page.goto('/');
 await expect(page.locator('.article-card')).toHaveCount(45);
 await expect(page.locator('.article-card:visible')).toHaveCount(9);
 await page.getByRole('button',{name:/Load more articles/}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(18);
 while(await page.getByRole('button',{name:/Load more articles/}).isVisible()) await page.getByRole('button',{name:/Load more articles/}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(45);
 await expect(page.getByRole('button',{name:/Load more articles/})).toBeHidden();
 await page.getByRole('searchbox').fill('roadmap');
 await expect(page.locator('.article-card:visible')).toHaveCount(0);
 await page.getByRole('searchbox').fill('your next AI workflow');
 await expect(page.locator('.article-card:visible')).toHaveCount(1);
 await page.getByRole('searchbox').fill('');
 await page.getByRole('button',{name:'Updates',exact:true}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(4);
 await page.getByRole('searchbox').fill('no-such-article');
 await expect(page.getByText('No articles found.')).toBeVisible();
 await page.getByRole('searchbox').fill('');
 await page.getByRole('button',{name:/All articles/}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(9);
});
test('all article pages, images, prompts, sources, and metadata are valid',async({page,context})=>{
 test.setTimeout(60000);
 await context.grantPermissions(['clipboard-read','clipboard-write']);
 await page.goto('/');
 const articles=await page.locator('h3 a').evaluateAll(nodes=>nodes.map(n=>n.href));
 const imagePositions=new Set();
 for(const [i,link] of articles.entries()){
  const response=await page.goto(link);expect(response.status()).toBe(200);
  await expect(page.locator('h1')).toBeVisible();
  const isOriginal=await page.locator('.post-body').getByRole('heading',{name:'Sources and further reading',exact:true}).count();
  expect(await page.locator('.post-body a[href^="https://"]').count()).toBeGreaterThan(0);
  const canonical=await page.locator('link[rel=canonical]').getAttribute('href');
  expect(canonical).toBe(link.replace('http://127.0.0.1:8013','https://latentink.github.io'));
  const image=page.locator('.post-cover');
  const bg=await image.evaluate(el=>getComputedStyle(el).backgroundImage);
  expect(bg).toContain('/assets/covers.png');
  imagePositions.add(await image.evaluate(el=>getComputedStyle(el).backgroundPosition));
  if(isOriginal){
  await page.getByRole('button',{name:'Copy prompt',exact:true}).click();
  await expect(page.getByRole('button',{name:'Copied!'})).toBeVisible();
  expect(await page.evaluate(()=>navigator.clipboard.readText())).toContain('[');
  }
  await page.getByText('In this article',{exact:true}).click();
  const anchors=await page.locator('.toc a').evaluateAll(nodes=>nodes.map(n=>n.hash.slice(1)));
  for(const id of anchors)expect(await page.locator(`[id="${id}"]`).count()).toBe(1);
  const resources=await page.locator('a[href^="/"],link[href^="/"],script[src^="/"]').evaluateAll(nodes=>[...new Set(nodes.map(n=>n.href||n.src))]);
  for(const resource of resources)expect((await page.request.get(resource)).status(),resource).toBe(200);
 }
 expect(imagePositions.size).toBe(30);
 expect((await page.request.get('/assets/covers.png')).status()).toBe(200);
 const feed=await (await page.request.get('/feed.xml')).text();expect((feed.match(/<item>/g)||[]).length).toBe(45);
 const sitemap=await (await page.request.get('/sitemap.xml')).text();expect((sitemap.match(/<loc>/g)||[]).length).toBe(48);
 expect(feed+sitemap).not.toMatch(/mannusharma23|tech-blade/);
});
test('mobile layouts fit at 320, 390, 768, and desktop widths',async({page})=>{
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});await page.goto('/');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`home ${width}`).toBe(true);
  if(width===390||width===1440)await page.screenshot({path:`/workspace/latentink-${width}.png`,fullPage:true});
  await page.locator('h3 a').first().click();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`article ${width}`).toBe(true);
  if(width===390)await page.screenshot({path:'/workspace/latentink-article-mobile.png',fullPage:true});
 }
});
test('articles remain readable and discoverable without JavaScript',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();
 await page.goto('http://127.0.0.1:8013/');
 await expect(page.locator('.article-card:visible')).toHaveCount(45);
 await page.locator('h3 a').first().click();await expect(page.locator('.post-body')).toBeVisible();
 await context.close();
});
test('about, 404, and robots use the root site identity',async({page})=>{
 await page.goto('/about/');await expect(page.locator('main')).toContainText('AI assistance');
 await page.goto('/404.html');await page.getByRole('link',{name:/Back to the journal/}).click();
 await expect(page.locator('h1')).toHaveText('Fresh AI.Clear thinking.');
 expect(await (await page.request.get('/robots.txt')).text()).toContain('https://latentink.github.io/sitemap.xml');
});
