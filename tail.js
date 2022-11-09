/*
Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

create function tail
create new array and push everything but arr[0] to new array
ensure that the original array is not modified and that the new array contains everything but the first element of the original array
*/

const assertEqual = require('./assertEqual');

const tail = function(restArr) {
  const remaining = restArr.slice(1);
  return remaining;
};

module.exports = tail;

