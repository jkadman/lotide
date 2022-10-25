/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
*/
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
 }

const flatten = function(array) {
  let flattArr = [];
  if (Array.isArray(array)) {
  flattArr = array.flat();
  } 
  return flattArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, 3, 3, 1, 4, 5]), [1, 2, 3, 3, 1, 4, 5]);
console.log(flatten('bob', 'chris'));