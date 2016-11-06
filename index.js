import TabBar from 'components/TabBar';

((window, document, undefined) => { // eslint-disable-line no-unused-vars
  const diffs = [ ...document.querySelectorAll('.file.js-details-container') ];
  document.getElementById('files').before(TabBar(diffs));
})(window, document);
