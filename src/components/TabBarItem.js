import setStyles from 'utils/setStyles';

export default function TabBarItem (el) {
  const filePath = [ ...el.children ].filter(hasPathDataProp)[0].dataset.path,
        tabLabel = getFileNameFrom(filePath),
        wrapper  = document.createElement('div'),
        styles   = { cursor : 'pointer' };

  wrapper.textContent   = tabLabel;
  wrapper.dataset.tabId = el.id;
  wrapper.classList.add('file-info');

  setStyles(wrapper, styles);
  return wrapper;
}

function hasPathDataProp (el) {
  return el && el.dataset && el.dataset.path;
}

function getFileNameFrom (path) {
  return path.split('/')[path.split('/').length - 1];
}
