const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`;
  }
};
/*
Implement the function in order to pass the assertions written so far.
  objects are considered to be equal when: 
    They have the same number of keys
    The value for each key in one object is the same as the value for that same key in the other object
*/
// establish base function
// want to test the length of both objects, if they aren't the same the test is pointless
//want to iterate through object1
// want to iterate through object2
//if statement: each value key pair is the same, assertion passed, otherwise fail


const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length === arr2.length) {
    for (let key of arr1) {
      for (let key2 of arr2) {
        if (key === key2) {
          console.log('assertion passed');
        } else {
          console.log('assertion failed');
        }
      }
    }
  } else {
    console.log('poo')
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

//console.log(assertEqual(eqObjects(ab, ba))); // => true

//const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc))); // => false