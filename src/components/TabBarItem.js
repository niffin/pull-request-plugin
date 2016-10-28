import setStyles from 'utils/setStyles';

export default function TabBarItem (el, tabLabel) {
  const wrapper  = document.createElement('div'),
        styles   = { cursor : 'pointer' };

  wrapper.textContent   = tabLabel;
  wrapper.dataset.tabId = el.id;
  wrapper.classList.add('file-info');

  setStyles(wrapper, styles);
  return wrapper;
}
