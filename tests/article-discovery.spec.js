import {test,expect} from '@playwright/test';
test('article recommendations are latest-first, exclude current post, and work responsively',async({page})=>{
 await page.goto('/blog/');
 const all=await page.locator('.article-card h3 a').evaluateAll(nodes=>nodes.map(n=>({url:n.href,title:n.textContent})));
 for(const index of [0,7,44]){
  const current=all[index];
  await page.goto(current.url);
  const expected=all.filter(a=>a.url!==current.url);
  const recent=page.locator('.recent-posts li a');
  await expect(recent).toHaveCount(5);
  expect(await recent.evaluateAll(nodes=>nodes.map(n=>n.href))).toEqual(expected.slice(0,5).map(a=>a.url));
  const latest=page.locator('.latest-card h3 a');
  await expect(latest).toHaveCount(3);
  expect(await latest.evaluateAll(nodes=>nodes.map(n=>n.href))).toEqual(expected.slice(0,3).map(a=>a.url));
 }
 await page.goto('/articles/avatar-videos-for-business/');
 for(const width of [320,390,768,1024,1440]){
  await page.setViewportSize({width,height:1000});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),String(width)).toBe(true);
  const article=await page.locator('.article-layout>.post').boundingBox();
  const sidebar=await page.locator('.article-layout>.blog-sidebar').boundingBox();
  if(width>900)expect(sidebar.x).toBeGreaterThan(article.x+article.width);
  else expect(sidebar.y).toBeGreaterThanOrEqual(article.y+article.height);
  if(width===390||width===1440)await page.screenshot({path:`/workspace/article-discovery-${width}.png`,fullPage:true});
 }
 const target=await page.locator('.latest-card h3 a').first().getAttribute('href');
 await page.locator('.latest-card h3 a').first().click();
 await expect(page).toHaveURL(new RegExp(target+'$'));
});
