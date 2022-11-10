const assert = require('chai').assert;
const _ = require('../index')

describe('#tail', () => {
  it("returns 2, 3, 4 for [1, 2, 3, 4]", () => {
    assert.deepEqual(_.tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('returns not equal when comparing [] to [5]', () => {
    assert.notDeepEqual(_.tail([]), [5]);
  });
  it("returns ['Lighthouse', 'Labs'] for {'Hello, 'Lighthouse', Labs]", () => {
    assert.deepEqual(_.tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
