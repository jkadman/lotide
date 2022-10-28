let object1 = {};
object1.property1 = 42;
object1.banana = 3;
let array = ['property1', 'banana1']
for (let arr of array) {
  console.log(array)
  console.log(arr)
//console.log(object1.hasOwnProperty('property1'))
if (object1.hasOwnProperty(arr)) {
//if (array[0] === object1.hasOwnProperty('property1')) {
  console.log(true)
} else {
  console.log(false);
}
}

// const eqObjects = function(object1) {
//   let arr1 = Object.keys(object1);
//   for (let key of arr1) {
//     console.log(key)
//     if (object1.hasOwnProperty(key)) {
//       if (key )
//        return true;
//       } 
//       return false;
//   } 
// };

// const ab = { d: "1"};
// console.log(eqObjects(ab));