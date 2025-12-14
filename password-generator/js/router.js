const DEFAULT_TAB = 'generator';

export function initRouter() {
  window.addEventListener('hashchange', updateView);
  updateView();
}

function updateView() {
  let route = location.hash.replace('#/', '');

  if (!route) route = DEFAULT_TAB;

  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.toggle('active', section.id === route);
  });

  document.querySelectorAll('.tab').forEach(tab => {
    const target = tab.getAttribute('href').replace('#/', '');
    tab.classList.toggle('active', target === route);
  });

  if (!document.getElementById(route)) {
    location.hash = `#/${DEFAULT_TAB}`;
  }
}
