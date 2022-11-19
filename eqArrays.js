const {assertEqual} = require("./assertEqual");
const eqArrays = function(arr1,arr2) {
  
  if(arr1.length !== arr2.length) return false;

  //recursive solution
  for (const i in arr1) {
    const value1 = arr1[i];
    const value2 = arr2[i];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      eqArrays(value1,value2);
      //if(!eqArrays(value1, value2)) return false;
      continue;
    } 
    if (value1 !== value2) {
      return false;
    }
  }
  return true;

  //my previous code
  // let i=0
  // while(i < arr1.length){
  //   if(arr1[i] !== arr2[i]){
  //     return false;
  //   }
  //   i++;
  // }

  //professional coding
  // for (const i in arr1) {
  //   const value1 = arr1[i];
  //   const value2 = arr2[i];

  //   if (value1 !== value2) {
  //     return false;
  //   }
  // }
  // return true;
};

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true) // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)// => false


module.exports = eqArrays;