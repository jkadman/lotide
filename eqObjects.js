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
  if (arr1.length !== arr2.length) {
    return false;
  } else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
 }
};

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if (arr1.length !== arr2.length) {
    return false;
  } for (let key of arr1) {
    if (object1.hasOwnProperty(key)) {
      if (object1[key] !== object2[key])
      return false;
      } 
    };
return true;
};
  
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
const foo = {a: '3',b: '9', c: '5' }
const foo2 = {a: '3',b: '9', c: '5' }
const boo = {a: '3', b: '6', t: '9', g: '3'}
const boo2 = {a: '3', b: '6', t: '9', g: '3'}
const fli = {}
const fli2 = {};

console.log(eqObjects(foo, foo2))
console.log(eqObjects(boo, boo2))
console.log(eqObjects(foo, boo))
console.log(eqObjects(foo2, boo2))
console.log(eqObjects(foo, fli))
console.log(eqObjects(fli2, fli))

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba));

//console.log(assertEqual(eqObjects(ab, ba))); // => true

//const abc = { a: "1", b: "2", c: "3" };
//console.log(assertEqual(eqObjects(ab, abc))); // => false