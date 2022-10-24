/*
Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
Convert the array given to a string and then compare the strings.  But then a number will be converted to a string and be logged true which is false.
want a for loop to iterate through the array -- not needed
  want to extract elements from the array
want an if statment to compare results
*/
/* previous code: unsatisfied with the answer, found a nice solution on free code camp.
// how could I refine this function?  I could make a function within this one that looked at the arrays and given and turned every element of the array into a new variable
// with a name similar to num1, num2 ...  (at least I think I could do that)  
 const eqArrays = function(arr1, arr2) {
  let [num1] = arr1;
  let [num2] = arr2;
  console.log(num1);
  console.log(num2);
  if /*(num1 === num4 && num2 === num5 && num3 === num6) (num1 === num2) {
    return true;
  } else {
    return false;
  }
} */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
  for (let i =0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
 }
}




console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 5]))
console.log(eqArrays([1, 2, '3'], [1, 2, 3, 5]))

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
