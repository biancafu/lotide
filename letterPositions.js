const eqArrays = require("./eqArrays");


function assertArraysEqual(arr1,arr2){
  const message = eqArrays(arr1,arr2)?`✅✅✅ Assertion Passed [${arr1}] === [${arr2}]` : `🛑🛑🛑 Assertion Failed [${arr1}] !== [${arr2}]`;
  console.log(message);
};

const letterPositions = function(sentence) {
  const results = {};
  let i=0;
  for (const s of sentence.split(" ").join("")) {
    if(!results[s]){
      results[s] = [i];
    }
    else{
      results[s].push(i);
    }
    i++;
  }
  return results;
};

const r = letterPositions("hello");
assertArraysEqual(r['h'],[0]);
assertArraysEqual(r['e'],[1]);
assertArraysEqual(r['l'],[2,3]);
assertArraysEqual(r['o'],[4]);

