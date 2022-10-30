const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};



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

/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/



const findKey = function(object, callback) {
  for (let key in object) {
    //console.log(key)
    //console.log(object[key])
    let x = callback(object[key]);
    if (x) {
      return key
    } /*else {
      return undefined; 
    } */
    // undefined or null won't run through eqObjects but findkey does return undefined.
  }
}

console.log(assertObjectsEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma')) // => "noma"

console.log(assertObjectsEqual(findKey({
  Jenny : { role: 'player' },
  Jeremy: { role:'player' },
  Emma:   { role: 'GM' },
  Gary:   { role: 'player' }
}, y => y.role === 'GM'), ''));

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'karl') // => "noma"

// console.log(findKey({
//   Jenny : { role: 'player' },
//   Jeremy: { role:'player' },
//   Emma:   { role: 'GM' },
//   Gary:   { role: 'player' }
// }, y => y.role === 'GM'), 'GM');