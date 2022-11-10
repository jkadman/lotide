// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');
const _ = require('./index');

 const middle = function(array) {
  let midpoint = [];
  let mid = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return midpoint;
  } else if (array.length % 2 !== 0) {
    midpoint = array[mid]
  } else {
    midpoint = [array[mid - 1], array[mid]];
  }
  return midpoint;
 }

 module.exports = middle;


 /*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned

Need an if statement to account for: array is < 3, array.length % 2 !== 0, array.length % 2 === 0
how to find middle: odd : (length - 1) / 2; even: var mid = array.length / 2, midpoint = [array[var]. array[var - 1]]

 */

