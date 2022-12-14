/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/

const _ = require('./index')

const flatten = function(array) {
  let flattArr = [];
  if (Array.isArray(array)) {
  flattArr = array.flat();
  } 
  return flattArr;
};

module.exports = flatten;


