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

let small = [1, 2];
let odd = [1, 2, 3, 4, 5];
let even = [1, 2, 3, 4, 5, 6];
let test1 = [10, 45, 30, 29, 44, 56, 46];
let test2 = [9, 5, 2, 87, 44, 32];
const test3 = [45, 9, 67, 23, 21, 29, 80, 3, 77]
console.log(middle(test1))
console.log(middle(test2))
console.log(middle([small]));
console.log(middle(odd));
console.log(middle(even));
console.log(middle(test3))
// assertArraysEqual(middle(small), [1, 2]);
// // assertArraysEqual(middle([small]), [1, 2]);
//  assertArraysEqual(middle(odd), 3);
// assertArraysEqual(middle(even), [3, 4]);
// assertArraysEqual(middle(even), [7, 4]);

 /*
Implement middle which will take in an array and return the middle-most element(s) of the given array.
For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned

Need an if statement to account for: array is < 3, array.length % 2 !== 0, array.length % 2 === 0
how to find middle: odd : (length - 1) / 2; even: var mid = array.length / 2, midpoint = [array[var]. array[var - 1]]

 */