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
  for (let i =0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
 }

 const without = function(source, itemsToRemove) {
  let unique = [];
  for (let sources of source) {
    if (sources !== itemsToRemove) {
      unique.push(sources);
    }
  }
  return unique;
 }

 /*
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
-- a for loop and if statement that move through both source and itemsToRemove
-- check for match
-- need to push items to a new array that will be printed.
-- 
 */