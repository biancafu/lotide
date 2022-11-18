const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  
  if(arr1.length !== arr2.length){
    return false;
  }

  //my previous code
  // let i=0
  // while(i < arr1.length){
  //   if(arr1[i] !== arr2[i]){
  //     return false;
  //   }
  //   i++;
  // }

  //professional coding
  for (const i in arr1) {
    const value1 = arr1[i];
    const value2 = arr2[i];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;