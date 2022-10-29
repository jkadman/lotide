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

//Modify our implementation to use eqArrays when there is an array value being encountered for a key, ensuring that our newly added array tests fully pass.


const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if ((arr1, arr2)); {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let key of arr1) {
    if (Array.isArray(arr1) || Array.isArray(arr2)) {
      eqArrays(arr1, arr2);
    } else if (object1.hasOwnProperty(key)) {
      if (object1[key] !== object2[key])
      return false;
      } 
    };
return true;
}
}
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false



 const ab = { a: "1", b: "2" };
 const ba = { b: "2", a: "1" };
 console.log(eqObjects(ab, ba));

console.log((eqObjects(ab, ba))); // => true
console.log(eqObjects(ab, cd))

//const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc))); // => false