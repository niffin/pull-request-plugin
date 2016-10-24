import { getTabLabels } from 'components/TabBar';


describe('getTabLabels', function () {
  it('will return only the file names if they are all unique', function () {
    const paths = [ 'a', 'b', 'c' ];

    expect(getTabLabels(paths)).toBe(paths);
  });
});
