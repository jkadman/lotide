const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};
/*
Need to compare items in the array allItems with the object itemsToCount.
Return a new object where the items in allItems align in truthiness to itemsToCount
so create object result{} that will store the items that match
*/
// create if statement that checks if items  in allItems are true in itemsToCount
// Think I need a loop to iterate through all items in all items
// Need to account for how I am going to count each item in allItems
// If itemsToCount === true, item in allItems + 1
// finally push to results item in allItems as key, and the amount of times item is found in allItems
// const countOnly = function(allItems, itemsToCount) {
//   let results = {};
//   for (let item in allItems) {
//   if (allItems[item] === item) /*&& itemsToCount.item === true)*/ {
//     //results = results.item += 1;
//     results = {a: 1, b: 2};
//   }
//  }
//  return results;
// }
const countOnly = function(allItems, itemsToCount) {
    let results = {};
    let count = 0;
    for (let item in allItems) {
    if (allItems[item] && (itemsToCount[allItems[item]] === true)) {
        allItems.forEach(element => {
          results[element] = count += 1;
          });
    } 
  }
   return results;
}
  
//What is actually happening in this challenge, is we are looking at the key of the array which is a number and anaylizing the associated value with that key
const test = ['Jason', 'bob', 'fred', 'leah', 'susan', 'sarah', 'Jason'];
const test2 = {'Jason': true, 3: true, 'leah': true, 'susan': true, 4: false};
// // const test = [1, 1, 2, 3, 3, 4, 5];
// // const answer = countOnly(test, {1: true, 2: true, 3: false, 4:true});
// const answer = {1: true, 2: true, 3: false, 4:true};
console.log(countOnly(test, test2));

