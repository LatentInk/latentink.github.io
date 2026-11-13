import {test,expect} from '@playwright/test';
test('search and topic filters combine, and reset',async({page})=>{
 await page.goto('/tech-blade/');
 await expect(page.locator('.article-card:visible')).toHaveCount(4);
 await page.getByRole('button',{name:'Coding',exact:true}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(1);
 await page.getByRole('searchbox').fill('writing');
 await expect(page.getByText('No articles found.')).toBeVisible();
 await page.getByRole('button',{name:/All articles/}).click();
 await expect(page.locator('.article-card:visible')).toHaveCount(1);
 await page.getByRole('searchbox').fill('');
 await expect(page.locator('.article-card:visible')).toHaveCount(4);
});
test('all internal links and assets resolve, and prompts copy',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);
 await page.goto('/tech-blade/');
 const links=await page.locator('a[href^="/tech-blade/"],link[href^="/tech-blade/"],script[src]').evaluateAll(nodes=>[...new Set(nodes.map(n=>n.href||n.src))]);
 for(const link of links)expect((await page.request.get(link)).status(),link).toBe(200);
 const articles=await page.locator('h3 a').evaluateAll(nodes=>nodes.map(n=>n.href));
 for(const link of articles){
  await page.goto(link);await expect(page.locator('h1')).toBeVisible();
  await page.getByRole('button',{name:'Copy prompt',exact:true}).click();
  await expect(page.getByRole('button',{name:'Copied!'})).toBeVisible();
  expect(await page.evaluate(()=>navigator.clipboard.readText())).toContain('[');
 }
});
test('mobile and desktop fit the viewport',async({page})=>{
 for(const width of [390,1440]){
  await page.setViewportSize({width,height:1000});await page.goto('/tech-blade/');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:`/workspace/tech-blade-${width}.png`,fullPage:true});
  await page.locator('h3 a').first().click();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 }
});
