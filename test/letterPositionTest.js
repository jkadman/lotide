const _ = require('../index');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns { H: [0], e: [1], l: [2, 3], o: [4] } for "hello"', () => {
    assert.deepEqual(_.letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
});

