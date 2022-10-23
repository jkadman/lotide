/*
Let's add one of the simpler array-handling functions to our Lotide project. In doing so we will get more comfortable with adding additional functions to Lotide while also writing test cases for them.

A commonly used function for arrays is to retrieve the first element from the array. This is often referred to as the "head" of the array.
*/

// create a function - done
// tell the function to return the first item of the array
// convert the item into a string

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};

const head = function(firstArr) {
  return firstArr[0];
}

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([8,6,7]), 5));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([8]), 5));
console.log(assertEqual(head([]), 5));
