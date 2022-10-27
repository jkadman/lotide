/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*/

const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (string[letter] !== ' ') {
      //result = string[letter];
      result[letter] = result[letter] += 1;
    }
  }
  return result;
}

console.log(countLetters('LHL'));