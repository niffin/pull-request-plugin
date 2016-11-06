export function getTabLabels (paths) {
  const reversedPaths = paths.map(p => p.split('/').reverse().join('/'));
  const splitReversedPaths = reversedPaths.map(p => p.split('/'));

  const indexTilUnique = splitReversedPaths.map(path => {
  return path.reduce((acc, fragment, i) => {
    if (typeof acc === 'string') {
        return acc;
      } else if (splitReversedPaths
        .filter(exceptFor(path))
        .some(hasSameValueInIndex(i, fragment))) {
        acc += 1;
      } else {
        return String(acc);
      }
      
      return acc;
    }, 0);
  });

  return reversedPaths.map((path, i) => {
    const splitPath     = path.split('/'),
        isSingleElement = splitPath.length === 1,
        isIndexZero     = indexTilUnique[i] == 0;
  
    return isSingleElement || isIndexZero ? splitPath[0] : splitPath.slice(0, Number(indexTilUnique[i]) + 1).reverse().join('/');
  });
}

function exceptFor (itemToFilterOut) {
  return element => element !== itemToFilterOut;
}

function hasSameValueInIndex (i, value) {
  return array => array[i] === value;
}
