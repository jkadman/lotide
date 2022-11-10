const _ = require('./index');
// const eqArrays = require('./eqArrays')
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

//Modify our implementation to use eqArrays when there is an array value being encountered for a key, ensuring that our newly added array tests fully pass.
// Oct 30 - removed final else if statement : else if (object1.hasOwnProperty(key)) {...} in favour of else statement

const eqObjects = function(object1, object2) {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  let test;
  if ((arr1, arr2)); {
    if (arr1.length !== arr2.length) {
      return false;
    } for (let key of arr1) {
      if (Array.isArray(key) || Array.isArray(object2[key])) {
        return _.eqArrays(object1[key], object2[key]);
      } else {
        if (object1[key] !== object2[key])
        return false;
        } 
      }
return true;
  }
};

module.exports = eqObjects;

console.log(eqObjects({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]}))