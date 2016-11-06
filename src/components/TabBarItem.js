import setStyles from 'utils/setStyles';

export default function TabBarItem (el, tabLabel, path) {
  const wrapper  = document.createElement('div'),
        styles   = { cursor : 'pointer' };

  wrapper.textContent   = tabLabel;
  wrapper.dataset.tabId = el.id;
  wrapper.setAttribute('aria-label', path);
  wrapper.classList.add('file-info', 'tooltipped', 'tooltipped-n');

  setStyles(wrapper, styles);
  return wrapper;
}
