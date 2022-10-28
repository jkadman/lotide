/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*/
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};


  const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (result[letter]) {
      result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } 
    return result;
};

console.log(countLetters('Lighthouse in the house!'));
console.log(countLetters('LHL LHL'));
console.log(assertEqual(countLetters('LHL'), { L: 2 }))