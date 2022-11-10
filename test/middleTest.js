const { assert } = require('chai');
const _ = require('../index');

describe('#middle', () => {
  it('returns the middle integer in an odd group of numbers', () => {
    assert.strictEqual(_.middle([1, 2, 3, 4, 5]), 3);
  });
  it('returns the middle two integers in an even array of integers', () => {
    assert.deepEqual(_.middle([9, 5, 2, 87, 44, 32]), [2, 87])''
  });
});

