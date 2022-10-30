/*
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
*/

// need an array to push the results to
// need to loop through the array 
// need an if statement where if the call back is triggered, the loop stops
// return new array

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
 } 

const takeUntil = function(array, callback) {
  let newArr = [];
  for (arr of array) {
    let x = callback(arr);
    if (!x) {
      newArr.push(arr);
    } else {
      return newArr;
    }
  } 
  return newArr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2 ]);

console.log('---');

const data1Fail = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1Fail = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1Fail, [1, 2, 5, 7, 2, 4, 6 ]);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,["I've", 'been', 'to', 'Hollywood'] );

console.log('---');

const data2Fail = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2Fail = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,["I've", 'been', 'to', 'Hollywood', 'been'] );