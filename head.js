/*
Let's add one of the simpler array-handling functions to our Lotide project. In doing so we will get more comfortable with adding additional functions to Lotide while also writing test cases for them.

A commonly used function for arrays is to retrieve the first element from the array. This is often referred to as the "head" of the array.
*/

// create a function - done
// tell the function to return the first item of the array
// convert the item into a string

// const assertEqual = require('./assertEqual');
const _ = require('./index')

const head = function(array) {
  return array[0];
};

module.exports = head;


