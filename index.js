const diffs  = [ ...document.querySelectorAll('.file.js-details-container') ];
document.getElementById('files').before(TabBar(diffs));

function TabBarItem (el) {
	const filePath = [ ...el.children ].filter(hasPathDataProp)[0].dataset.path
				tabLabel = filePath.split('/')[filePath.split('/').length - 1],
				wrapper  = document.createElement('div');

	wrapper.textContent = tabLabel;
	wrapper.classList.add('file-info');

	return wrapper;
}

function hasPathDataProp (el) {
	return el && el.dataset && el.dataset.path;
}

function TabBar (tabs) {
	const tabBarItems = tabs.map(pullRequestEl => TabBarItem(pullRequestEl)),
				wrapper     = document.createElement('div')

	tabBarItems.forEach(tabItem => wrapper.append(tabItem))

	return wrapper;
}
