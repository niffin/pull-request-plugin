/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _TabBar = __webpack_require__(2);

	var _TabBar2 = _interopRequireDefault(_TabBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	(function (window, document, undefined) {
	  // eslint-disable-line no-unused-vars
	  var diffs = [].concat(_toConsumableArray(document.querySelectorAll('.file.js-details-container')));
	  document.getElementById('files').before((0, _TabBar2.default)(diffs));
	})(window, document);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TabBar;

	var _TabBarItem = __webpack_require__(3);

	var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

	var _setStyles = __webpack_require__(4);

	var _setStyles2 = _interopRequireDefault(_setStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function TabBar(tabs) {
	  var tabBarItems = tabs.map(function (pullRequestEl) {
	    return (0, _TabBarItem2.default)(pullRequestEl);
	  }),
	      wrapper = document.createElement('div'),
	      styles = {
	    display: 'flex',
	    flexDirection: 'row',
	    justifyContent: 'space-between'
	  };

	  tabBarItems.forEach(function (tabBarItem) {
	    tabBarItem.addEventListener('click', onTabBarItemClick.bind(null, { tabs: tabs, tabBarItems: tabBarItems, tabBarItem: tabBarItem }));
	    wrapper.append(tabBarItem);
	  });

	  (0, _setStyles2.default)(wrapper, styles);
	  return wrapper;
	}

	function onTabBarItemClick(_ref) {
	  var tabs = _ref.tabs;
	  var tabBarItems = _ref.tabBarItems;
	  var tabBarItem = _ref.tabBarItem;

	  toggleTabs(tabs, tabBarItem.dataset.tabId);
	  setTabBarItemStatus(tabBarItems, tabBarItem.dataset.tabId);
	}

	function toggleTabs(tabs, selectedTabId) {
	  tabs.forEach(function (tab) {
	    tab.style.display = tab.id === selectedTabId ? 'block' : 'none';
	  });
	}

	function setTabBarItemStatus(tabBarItems, selectedTabId) {
	  tabBarItems.forEach(function (tabBarItem) {
	    tabBarItem.style.fontWeight = tabBarItem.dataset.tabId === selectedTabId ? 'bold' : 'normal';
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TabBarItem;

	var _setStyles = __webpack_require__(4);

	var _setStyles2 = _interopRequireDefault(_setStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function TabBarItem(el) {
	  var filePath = [].concat(_toConsumableArray(el.children)).filter(hasPathDataProp)[0].dataset.path,
	      tabLabel = getFileNameFrom(filePath),
	      wrapper = document.createElement('div'),
	      styles = { cursor: 'pointer' };

	  wrapper.textContent = tabLabel;
	  wrapper.dataset.tabId = el.id;
	  wrapper.classList.add('file-info');

	  (0, _setStyles2.default)(wrapper, styles);
	  return wrapper;
	}

	function hasPathDataProp(el) {
	  return el && el.dataset && el.dataset.path;
	}

	function getFileNameFrom(path) {
	  return path.split('/')[path.split('/').length - 1];
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setStyles;
	function setStyles(el, styles) {
	  Object.keys(styles).forEach(function (key) {
	    el.style[key] = styles[key];
	  });
	}

/***/ }
/******/ ]);