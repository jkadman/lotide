const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
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

 const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  if ((arr1, arr2)); {
    if (arr1.length !== arr2.length) {
      return false;
    } for (let key of arr1) {
      if (Array.isArray(key) || Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key])
        return false;
        } 
      }
return true;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

console.log(assertObjectsEqual(ab, cd)) // => false

const abc = { a: "1", b: "2", c: "3" };
console.log((assertObjectsEqual(ab, abc))); // => false

const yz = [];
const zy = [1];
console.log((assertObjectsEqual(yz, zy)));

const kl = [];
const lk = [];
console.log((assertObjectsEqual(kl, lk)));