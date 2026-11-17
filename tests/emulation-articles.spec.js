import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';
const articles=JSON.parse(await readFile(new URL('./fixtures/emulation-articles.json',import.meta.url),'utf8'));
test('emulation collection preserves requested titles, includes credits, and fits phones',async({page})=>{
 test.setTimeout(60000);
 await page.goto('/blog/?topic=Emulation#articles');
 await expect(page.getByRole('button',{name:'Emulation',exact:true})).toHaveAttribute('aria-pressed','true');
 await expect(page.locator('.article-card[data-category="Emulation"]')).toHaveCount(10);
 for(const a of articles){
  const res=await page.goto(`/articles/${a.slug}/`);expect(res.status()).toBe(200);
  await expect(page.locator('h1')).toHaveText(a.title);
  await expect(page.locator('.post-body')).toContainText('Sources and contributor credits');
  await expect(page.locator('.post-body')).toContainText('not a hands-on benchmark');
  expect(await page.locator('.post-body a[href^="https://github.com/"]').count()).toBeGreaterThan(1);
  await page.setViewportSize({width:320,height:800});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),a.slug).toBe(true);
  expect(await page.locator('.post-body').evaluate(el=>el.textContent.split(/\s+/).length)).toBeGreaterThan(450);
  const table=page.locator('.table-scroll').first();
  if(await table.count())expect(await table.evaluate(el=>el.scrollWidth>el.clientWidth)).toBe(true);
 }
 await page.goto('/articles/dimensity-9400-chromebooks-proton-reality-check/');
 await expect(page.locator('.post-body')).toContainText('Premise check');
 await expect(page.locator('.post-body')).toContainText('Kompanio Ultra 910');
 await page.goto('/articles/mediatek-emulation-tier-list-2026/');
 await expect(page.locator('.post-body')).toContainText('editorial judgments');
 await expect(page.locator('.post-body')).toContainText('not measured hardware scores');
 await page.screenshot({path:'/workspace/emulation-tier-list-mobile.png',fullPage:true});
});
