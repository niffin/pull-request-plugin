function TabBarItem (el) {
	const filePath = [ ...el.children ].filter(hasPathDataProp)[0].dataset.path,
				tabLabel = getFileNameFrom(filePath),
				wrapper  = document.createElement('div');

	wrapper.textContent   = tabLabel;
	wrapper.dataset.tabId = el.id;
	wrapper.classList.add('file-info');

	setStyles(wrapper, styles.tabItem);
	return wrapper;
}

function TabBar (tabs) {
	const tabBarItems = tabs.map(pullRequestEl => TabBarItem(pullRequestEl)),
				wrapper     = document.createElement('div');

	tabBarItems.forEach(tabBarItem => {
		tabBarItem.addEventListener('click', onTabBarItemClick.bind(null, { tabs, tabBarItems, tabBarItem }));
		wrapper.append(tabBarItem);
	})

	setStyles(wrapper, styles.tabBar)
	return wrapper;
}

function onTabBarItemClick ({ tabs, tabBarItems, tabBarItem }) {
	toggleTabs(tabs, tabBarItem.dataset.tabId)
	setTabBarItemStatus(tabBarItems, tabBarItem.dataset.tabId)
}

function toggleTabs (tabs, selectedTabId) {
	tabs.forEach(tab => {
		tab.style.display = tab.id === selectedTabId ? 'block' : 'none';
	})
}

function setTabBarItemStatus (tabBarItems, selectedTabId) {
	console.log(tabBarItems, selectedTabId)
	tabBarItems.forEach(tabBarItem => {
		tabBarItem.style.fontWeight = tabBarItem.dataset.tabId === selectedTabId ? 'bold' : 'normal';
	})
}

function hasPathDataProp (el) {
	return el && el.dataset && el.dataset.path;
}

function getFileNameFrom (path) {
	return path.split('/')[path.split('/').length - 1];
}

function setStyles (el, styles) {
	Object.keys(styles).forEach(key => {
		el.style[key] = styles[key];
	})
}

const styles = {
	tabBar : {
		display        : 'flex',
		flexDirection  : 'row',
		justifyContent : 'space-between'
	},
	tabItem : {
		cursor : 'pointer'
	}
}

const diffs = [ ...document.querySelectorAll('.file.js-details-container') ];
document.getElementById('files').before(TabBar(diffs));
