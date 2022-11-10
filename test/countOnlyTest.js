const { assert } = require('chai');
const _ = require('../index');


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

describe('#countOnly', () => {
  it('returns { Fang: 2, Jason: 1 } when given the variables firstNames and result1', () => {
    assert.deepEqual(_.countOnly(firstNames, result1), { Fang: 2, Jason: 1 });
  });
});
