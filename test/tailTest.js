const tail = require('../tail')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe('#tail', () => {
  it("returns 2, 3, 4 for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('returns not equal when comparing [] to [5]', () => {
    assert.notDeepEqual(tail([]), [5]);
  });
  it("returns ['Lighthouse', 'Labs'] for {'Hello, 'Lighthouse', Labs]", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});
