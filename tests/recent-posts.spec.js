import {test,expect} from '@playwright/test';
test('blog and homepage list latest posts first with a working recent posts sidebar',async({page})=>{
 for(const route of ['/','/blog/']){
  const response=await page.goto(route);expect(response.status()).toBe(200);
  const newest=await page.locator('.article-card').evaluateAll(nodes=>nodes.slice(0,10).map(n=>n.dataset.category));
  expect(newest).toEqual(Array(10).fill('Emulation'));
  const dates=await page.locator('.article-card').evaluateAll(nodes=>nodes.map(n=>n.dataset.date));
  expect(dates).toEqual([...dates].sort().reverse());
  expect(dates.slice(0,10)).toEqual(Array(10).fill('2026-11-17'));
  expect(dates[10]).toBe('2026-11-16');
 }
 const mainLinks=await page.locator('.article-card h3 a').evaluateAll(nodes=>nodes.slice(0,5).map(n=>n.href));
 const sidebarLinks=await page.locator('.recent-posts li a').evaluateAll(nodes=>nodes.map(n=>n.href));
 expect(sidebarLinks).toEqual(mainLinks);
 await expect(page.locator('.recent-posts time')).toHaveCount(5);
 await page.locator('.recent-posts li a').first().click();
 await expect(page.locator('h1')).toBeVisible();
 await page.getByRole('link',{name:'Back to the blog',exact:false}).click();
 await expect(page).toHaveURL(/\/blog\/$/);
 await page.getByRole('searchbox').fill('avatar');
 await expect(page.locator('.article-card:visible')).toHaveCount(1);
 for(const width of [320,390,768,1440]){
  await page.setViewportSize({width,height:1000});await page.goto('/blog/');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),String(width)).toBe(true);
  if(width===390||width===1440)await page.screenshot({path:`/workspace/blog-recent-${width}.png`,fullPage:true});
 }
});
