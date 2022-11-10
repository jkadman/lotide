const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🐵🐵🐵 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😆😆😆 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  let newArr1 = arr1.flat();
  let newArr2 = arr2.flat();
  if (newArr1.length !== newArr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (newArr1[i] !== newArr2[i]) {
      return false;
    }
  }
  return true;
}; 

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results = (callback(item));
  }
  return results;
};


// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't', 'y']);

// Check to see if the words in the array are strings:
const test1 = ['fear', 'bring', 'leah', 'push', 'bear'];
const test1Results = map(test1, entry => {if (typeof entry === 'string') {console.log(`${entry} is a string!`)}})
assertArraysEqual([test1Results], [ 'fear is a string!', ' bring is a string!', ' leah is a string!', ' push is a string!', ' bear is a string!' ]);

// Check to see if numbers in array are even:
const test2 = [2, 5, 8, 14, 20, 19];
const test2Results = map(test2, num => {if (num % 2 === 0) {console.log(`${num} is prime!`)}});
assertArraysEqual([test2Results], ['2 is prime!', '8 is prime!', '14 is prime!', '20 is prime!']);

// multiple the numbers in the array by itself
const test3 = [2, 6, 7, 3, 1];
const test3Results = map(test3, integer => console.log((integer * integer)));
assertArraysEqual([test3Results], ['4', ' 36', ' 49', ' 9', ' 1']);