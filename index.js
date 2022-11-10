const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const flatten = require('./flatten');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');

module.exports = {
  countOnly,
  eqObjects,
  flatten,
  head,
  tail,
  letterPositions,
  findKeyByValue,
  middle,
  eqArrays
};