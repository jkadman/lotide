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

 /*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
 */
// construct function
// turn string into an array as it easier to access the indices 
// create empty object to store results in and make accessing the values easier
// loop through the array
//print the results: this is a multi part process to figure this out: first just return the indices of the letters (indexOf), then figure out how to create an array for 
// each letter that shows the indices of that letter(not sure how to do this -- another function?)

const letterPositions = function(sentence) {
  const results = {};
  let newArr = Array.from(string)
  for (let letter of string) {
    results = string[letter];
  }
  return results;
};

let string = 'hello';
let newArr = Array.from(string);
//console.log(newArr);
for (let letter of string) {
  console.log(newArr.indexOf(letter));
}

assertArraysEqual()