

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🐵🐵🐵 Assertion Passed: ${actual} === ${expected}`
  } else {
    return `😆😆😆 Assertion Failed: ${actual} !== ${expected}`
  }
};

module.exports = assertEqual;

// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual('block', 'bloc'));
// console.log(assertEqual(4, 4));
// console.log(assertEqual(4, 9));
// console.log(assertEqual(4, '4'));