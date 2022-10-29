const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  let newArr1 = arr1.flat();
  let newArr2 = arr2.flat();
  if (newArr1.length !== newArr2.length) {
    return false;
  }  
  for (let i = 0; i < arr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false;
    } 
  }
  return true;
 } 

console.log(assertArraysEqual([1, 2, 3], [1, [2, 3]])) // => true

 //assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false
// assertArraysEqual([1, 2, 3], [1, 2, 3, 5])
// assertArraysEqual([1, 2, '3'], [1, 2, 3, 5])

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

//console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => should PASS 
// assertArraysEqual([], [3, 2, 1])