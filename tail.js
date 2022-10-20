/*
Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

create function tail
create new array and push everything by arr[0] to new array
ensure that the original array is not modified and that the new array contains everything but the first element of the original array

*/

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
}; */
let bob = [1, 2, 3, 4];
let friend = [1];

const tail = function(restArr) {
  const remaining = restArr.slice(1);
  return remaining;
};

console.log(bob);
console.log((tail(bob)));
console.log(tail(friend));
console.log(tail([]));