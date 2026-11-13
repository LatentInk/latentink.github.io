import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';
const articles=JSON.parse(await readFile(new URL('./fixtures/uploaded-articles.json',import.meta.url),'utf8'));
for(const article of articles){
 test(`uploaded article preserves content and anchor: ${article.slug}`,async({page})=>{
  await page.goto(`/articles/${article.slug}/`);
  await expect(page.locator('h1')).toHaveText(article.title);
  const body=page.locator('.post-body');
  await expect(body).not.toContainText('Anchor:');
  const link=body.getByRole('link',{name:article.anchor,exact:true});
  await expect(link).toHaveCount(1);
  await expect(link).toHaveAttribute('href',article.url);
  const actual=(await body.textContent()).replace(/\s+/g,' ').trim();
  const expected=article.paragraphs.join(' ').replace(/\s+/g,' ').trim();
  expect(actual).toBe(expected);
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 });
}
