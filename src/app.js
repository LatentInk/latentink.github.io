const cards = [...document.querySelectorAll('.article-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('input[type=search]');
let category = 'All';
function filter() {
 let visible = 0;
 for (const card of cards) {
  card.hidden = !((category === 'All' || card.dataset.category === category) && card.dataset.search.includes(search.value.trim().toLowerCase()));
  if (!card.hidden) visible++;
 }
 document.querySelector('.empty').hidden = visible !== 0;
 document.querySelector('#result-status').textContent = `${visible} article${visible === 1 ? '' : 's'} found`;
}
for (const button of filters) button.addEventListener('click', () => {
 category = button.dataset.filter;
 for (const other of filters) { other.classList.toggle('active', other === button); other.setAttribute('aria-pressed', String(other === button)); }
 filter();
});
search?.addEventListener('input', filter);
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
