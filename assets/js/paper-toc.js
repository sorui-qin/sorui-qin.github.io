const toc = document.querySelector('.paper-toc');
const list = document.querySelector('#paper-toc-list');
const headings = [...document.querySelectorAll('.reading-content h1, .reading-content h2')];

if (headings[0]?.tagName === 'H1') headings.shift();

for (const heading of headings) {
  if (!heading.id) continue;
  const item = document.createElement('li');
  const link = document.createElement('a');
  if (heading.tagName === 'H2') item.className = 'toc-subsection';
  link.href = `#${encodeURIComponent(heading.id)}`;
  link.textContent = heading.textContent;
  item.appendChild(link);
  list.appendChild(item);
}

if (list.children.length) {
  toc.hidden = false;
  if (window.matchMedia('(max-width: 900px)').matches) toc.querySelector('details').open = false;
}
