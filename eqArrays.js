const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1,arr2) {
  let i=0
  //can set an extra if condition to filter out when length is diff, but i modified the while condition from && to || so even if the length is diff one will have value one will be unfedined resulting in false
  while(i < arr1.length || i < arr2.length){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    i++;
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
