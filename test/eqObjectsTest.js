const _ = require('../index');
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects')


describe('#eqObjects', () => {
  it('returns true when { c: "1", d: ["2", 3] } is compared to { d: ["2", 3], c: "1" }', () => {
    assert.deepEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it('returns true when { a: "1", b: "2" } is compared to { b: "2", a: "1" }', () => {
    assert.deepEqual(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true)
  })
  it('returns false when { c: "1", d: ["2", 3] } is compared to { c: "1", d: ["2", 3, 4] }', () => {
    assert.notDeepEqual(_.eqObjects( { c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), true);
  })
});
