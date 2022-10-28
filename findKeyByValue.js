const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`;
  }
};
/*
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
*/
// create function
// create loop to look over function
// if statement so that if a genre === value we return a show, or if a show is === value we return the genre


const findKeyByValue = function(object, value) {
  for (let genre in object) {
    if (genre) {
      if (genre === value) {
        return object[genre];
      }
    } if (object[genre]) {
      if (object[genre] === value) {
        return genre;
      }
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, 'Zim'));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));