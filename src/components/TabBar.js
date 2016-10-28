import TabBarItem from 'components/TabBarItem';
import setStyles from 'utils/setStyles';
import { getTabLabels } from 'utils/getTabLabels';

export default function TabBar (tabs) {
  const filePaths   = tabs.map(tab => [ ...tab.children ].filter(hasPathDataProp)[0].dataset.path),
        tabLabels   = getTabLabels(filePaths),
        tabBarItems = tabs.map((pullRequestEl, index) => {
          return TabBarItem(pullRequestEl, tabLabels[index]);
        }),
        wrapper     = document.createElement('div'),
        styles      = {
          display        : 'flex',
          flexDirection  : 'row',
          justifyContent : 'space-between'
        };

  tabBarItems.forEach(tabBarItem => {
    tabBarItem.addEventListener('click', onTabBarItemClick.bind(null, { tabs, tabBarItems, tabBarItem }));
    wrapper.append(tabBarItem);
  });

  setStyles(wrapper, styles);
  return wrapper;
}

function onTabBarItemClick ({ tabs, tabBarItems, tabBarItem }) {
  toggleTabs(tabs, tabBarItem.dataset.tabId);
  setTabBarItemStatus(tabBarItems, tabBarItem.dataset.tabId);
}

function toggleTabs (tabs, selectedTabId) {
  tabs.forEach(tab => {
    tab.style.display = tab.id === selectedTabId ? 'block' : 'none';
  });
}

function setTabBarItemStatus (tabBarItems, selectedTabId) {
  tabBarItems.forEach(tabBarItem => {
    tabBarItem.style.fontWeight = tabBarItem.dataset.tabId === selectedTabId ? 'bold' : 'normal';
  });
}

function hasPathDataProp (el) {
  return el && el.dataset && el.dataset.path;
}
