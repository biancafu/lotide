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

const letterPositions = function(sentence) {
  const results = {};
  let i=0;
  for (const s of sentence.split(" ").join("")) {
    results[s] = !results[s] ? [i] : results[s].push(i);
    i++;
  }
  return results;
};

const r = letterPositions("hello");
console.log(assertArraysEqual(r['h'],[0]));
console.log(assertArraysEqual(r['e'],[1]));
console.log(assertArraysEqual(r['l'],[2,3]));
console.log(assertArraysEqual(r['o'],[4]));

