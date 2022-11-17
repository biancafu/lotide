const eqArrays = function(arr1,arr2) {
  let i=0
  while(i < arr1.length || i < arr2.length){
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
}

const without = function (source,itemToRemove){
  result=[];
  for (const s of source) {
    if(itemToRemove.indexOf(s) === -1) {
      result.push(s);
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);