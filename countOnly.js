const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};

const countOnly = function(allItems, itemsToCount) {
    let results = {};
    for (let item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
            results[item] += 1
          } else {
            results[item] = 1;
          }
          
    } 
  }
   return results;
}
  

const test = ['Jason', 'bob', 'fred', 'leah', 'susan', 'sarah', 'Jason'];
const test2 = {'Jason': true, 3: true, 'leah': true, 'susan': true, 4: false};
console.log(countOnly(test, test2));

// const firstNames = [
  // "Karl",
  // "Salima",
  // "Agouhanna",
  // "Fang",
  // "Kavith",
  // "Jason",
  // "Salima",
  // "Fang",
  // "Joe"
// ];
// 
// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
// 