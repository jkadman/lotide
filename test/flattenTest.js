const { assert } = require('chai');
const _ = require('../index');

describe('#flatten', () => {
  it('returns [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it('returns [1, 2, 3, 3, 1, 4, 5] when given [1, 2, 3, 3, 1, 4, 5]', () => {
    assert.deepEqual(_.flatten([1, 2, 3, 3, 1, 4, 5]), [1, 2, 3, 3, 1, 4, 5]);
  });
});

