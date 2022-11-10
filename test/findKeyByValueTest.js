const { assert } = require('chai');
const _ = require('../index');

describe('#findKeyByValue', () => {
  it('returns the key sci_fi, when given the value "The Expanse"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
  });
  it('returns the key "The Wire", when given the value "Drama"', () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
});

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};