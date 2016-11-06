import { getTabLabels } from 'utils/getTabLabels';

describe('getTabLabels', function () {
  it('will return only the file names if they are all unique', function () {
    const paths = ['path/to/a', 'path/to/b', 'path/to/c'];
    expect(getTabLabels(paths)).toEqual(['a', 'b', 'c']);
  });

  it('will return the file name and the parent directory if there are duplicate file names', function () {
    const paths = [
      'path/to/a/foo', 
      'path/to/b/foo', 
      'path/to/c/bar', 
      'foo/bar/foo/baz', 
      'foo/foo/foo/baz',
      'bat'
    ];
    expect(getTabLabels(paths)).toEqual(['a/foo', 'b/foo', 'bar', 'bar/foo/baz', 'foo/foo/baz', 'bat']);
  });
});
