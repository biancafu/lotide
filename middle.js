const eqArrays = function(arr1,arr2) {
  let i=0
  while(i < arr1.length && i < arr2.length){
    if(arr1[i] !== arr2[i]){
      return false;
    }
    i++;
  }
  return true;
};


function assertArraysEqual(arr1,arr2){
  const message = eqArrays(arr1,arr2)?`✅✅✅ Assertion Passed [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed [${arr1}] !== [${arr2}]`;
  console.log(message);
};

const middle = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  }
  const midIndex = Math.floor(arr.length/2);
  if(arr.length % 2 !== 0) {
    return [arr[midIndex]];
  } else {
    return [arr[midIndex-1],arr[midIndex]];
  }
};
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2])
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]) // => [3, 4]