import { getTabLabels, addParentFolder, hasDupe } from 'utils/getTabLabels';


describe('getTabLabels', function () {
  it('will return only the file names if they are all unique', function () {
    const paths = [ 'path/to/a', 'path/to/b', 'path/to/c' ];

    expect(getTabLabels(paths)).toEqual(['a', 'b', 'c']);
  });

  it('will return the file name and the parent directory if there are duplicate file names', function () {
    const paths = [ 'path/to/a/foo', 'path/to/b/foo', 'path/to/c/bar' ];

    expect(getTabLabels(paths)).toEqual(['a/foo', 'b/foo', 'bar']);
  });
});


describe('addParentFolder', function () {
  it('will add the parent folder to the passed in file path', function () {
    const paths = [ 'path/to/foo' ],
          index = 0,
          name  = 'foo';

    expect(addParentFolder(paths, index, name)).toEqual('to/foo');
  });
});

describe('hasDupe', function () {
  it('will return true if a value exists more than once in the array', function () {
    const array = [ 'foo', 'bar', 'foo' ];

    expect(hasDupe(array, 'foo')).toBe(true);
  });

  it('will return false if a value exists only once in the array', function () {
    const array = [ 'foo', 'bar', 'foo' ];

    expect(hasDupe(array, 'bar')).toBe(false);
  });
});
