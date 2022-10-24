const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }  
  for (let i =0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  }
  return true;
 }
/*
 const without = function(source, itemsToRemove) {
  let unique = [];
  for (let i = 0; i <source.length; i++) {
    itemsToRemove[i].forEach((element !== source[i]) => unique.push(source[i]))
    //unique.push(source[i]);
    /*
    if (source[i] !== itemsToRemove[i]) {
      unique.push(source[i]);
    } 
  }
  console.log(source);
  return unique;
 } */
 
 /* const without = function(source, itemsToRemove) {
  let unique = [];
  for (let i = 0; i <source.length; i++) {
    let same = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
    if (source[i] === itemsToRemove[j]) {
      same = true;
      //break;
    } 
  }
  if (!same) {
    unique.push(source[i]);
  }
  }
  return unique;
} */

const without2 = function(source, itemsToRemove) {
  const unique = source.filter(item => !itemsToRemove.includes(item))
  return unique;
}

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// console.log(without([1, 2, 3], [1, 2]))
// console.log(without([1, '2', 3], [1, 3]))
// console.log(without([1], [1, 2, '5']))
// console.log(without([1, 2, 3], [3, 2, 1]))
console.log(without2([1, 2, 3], [1, 1, 3])) 
// console.log(without2([1], [1])) 
// 
const words = ["hello", "world", "lighthouse"];
console.log(without2(words, ["lighthouse"])); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);


 /*
This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
-- a for loop and if statement that move through both source and itemsToRemove
-- check for match
-- need to push items to a new array that will be printed.
-- 
 */