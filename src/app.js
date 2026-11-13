const cards = [...document.querySelectorAll('.article-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('input[type=search]');
const more = document.querySelector('.load-more');
let category = 'All';
let limit = 9;
function filter() {
 const query = search.value.trim().toLowerCase();
 const matches = cards.filter(card => (category === 'All' || card.dataset.category === category) && card.dataset.search.includes(query));
 const shown = new Set(matches.slice(0, limit));
 for (const card of cards) card.hidden = !shown.has(card);
 document.querySelector('.empty').hidden = matches.length !== 0;
 document.querySelector('#result-status').textContent = `${matches.length} articles found`;
 document.querySelector('.article-count').textContent = `Showing ${shown.size} of ${matches.length} articles`;
 more.hidden = shown.size >= matches.length;
}
for (const button of filters) button.addEventListener('click', () => {
 category = button.dataset.filter; limit = 9;
 for (const other of filters) { other.classList.toggle('active', other === button); other.setAttribute('aria-pressed', String(other === button)); }
 filter();
});
search?.addEventListener('input', () => { limit = 9; filter(); });
more?.addEventListener('click', () => {
 const previousVisible = new Set(cards.filter(card => !card.hidden));
 limit += 9; filter();
 const firstNew = cards.find(card => !card.hidden && !previousVisible.has(card));
 firstNew?.querySelector('h3 a').focus({preventScroll:true});
});
if (search) filter();
for (const pre of document.querySelectorAll('.post-body pre')) {
 const button = document.createElement('button'); button.type = 'button'; button.className = 'copy-prompt'; button.textContent = 'Copy prompt';
 button.setAttribute('aria-live', 'polite');
 button.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(pre.querySelector('code').textContent); button.textContent = 'Copied!'; }
  catch { button.textContent = 'Select text to copy'; }
  setTimeout(() => button.textContent = 'Copy prompt', 2500);
 });
 pre.append(button);
}
