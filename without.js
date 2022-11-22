const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemToRemove){
  let results = [];
  for (const s of source) {
    if(itemToRemove.indexOf(s) === -1) {
      results.push(s);
    }
  }
  return results;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);