const eqArrays = require("./eqArrays");


function assertArraysEqual(arr1,arr2){
  const message = eqArrays(arr1,arr2)?`✅✅✅ Assertion Passed [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed [${arr1}] !== [${arr2}]`;
  console.log(message);
}

const flatten = function(arr) {
  result = [];
  for (const a of arr) {
    if(Array.isArray(a)){
      for(const e of a) {
        result.push(e);
      };
    } else if(arr.indexOf(a) === arr.length - 1) {
      result.push(a)
    } else {
      result.push(a);
    }
    
  }
  return result;
};
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);