/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
*/
/*
const countLetters = function(string) {
  let result = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (result.hasOwnProperty(letter)) {
      result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  } 
    return result;
}; */
  
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

//console.log(countLetters('Lighthouse'));
console.log(countLetters('LHL'));
