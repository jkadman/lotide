const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

/*
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

const findKey = function(object, callback) {
  for (let key in object) {
    console.log(key)
    let x = callback(key);
    console.log(x);
    if (object[key] === x) {
      return object(key);
    } else {
      return undefined;
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"