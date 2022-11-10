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
};



const without = function(source, itemsToRemove) {
  const unique = source.filter(item => !itemsToRemove.includes(item));
  return unique;
};



const originalArray = [1, 2, 3];
const removeArray = [3];
const expectedArray = [1, 2];
assertArraysEqual(without(originalArray, removeArray), expectedArray); 