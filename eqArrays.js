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
} 

module.exports = eqArrays;



//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5])))
// console.log(eqArrays([1, 2, '3'], [1, 2, 3, 5]))

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
// console.log(assertEqual(eqArrays([], [1, 2, 3])))