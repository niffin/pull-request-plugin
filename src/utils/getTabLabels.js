export function getTabLabels (filePaths) {
  const fileNames = filePaths.map(getFileNameFrom);

  return fileNames.map((name, index) => {
    if (hasDupe(fileNames, name)) {
      return addParentFolder(filePaths, index, name);
    }

    return name;
  });
}

function getFileNameFrom (path) {
  return path.split('/')[path.split('/').length - 1];
}

export function hasDupe (array, value) {
  return array.filter(item => item === value).length > 1;
}

export function addParentFolder (paths, index, name) {
  const path = paths[index].split('/'),
        distanceFromEnd = name.split('/').length;

  return path[(path.length - 1) - distanceFromEnd] + '/' + name;
}
