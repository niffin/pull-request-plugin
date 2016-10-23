import TabBarItem from 'components/TabBarItem';
import setStyles from 'utils/setStyles';

export default function TabBar (tabs) {
  const tabBarItems = tabs.map(pullRequestEl => TabBarItem(pullRequestEl)),
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

  setStyles(wrapper, styles.tabBar);
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