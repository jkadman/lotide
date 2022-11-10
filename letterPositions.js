const _ = require('./index');

/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.
*/
// construct function
// turn string into an array as it easier to access the indices
// create empty object to store results in and make accessing the values easier
// loop through the array
//print the results: this is a multi part process to figure this out: first just return the indices of the letters (indexOf), then figure out how to create an array for
// each letter that shows the indices of that letter(not sure how to do this -- another function?)

const letterPositions = function(sentence) {
  let results = {};
  let newArr = Array.from(sentence);
  for (let i = 0; i < newArr.length; i++) {
    let letter = newArr[i];
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;


