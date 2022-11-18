const {assertArraysEqual} = require("./assertArraysEqual");
const takeUntil = function(array, callback) {
  //slice the element until callback returns truthy
  //for of loop
  let i=0;
  for (const element of array) {
    if(callback(element)){
      return array.slice(0,i)
    }
    i++;
  }
  return array;
  //for each
  //let i=array.length;
  // array.forEach((element,index) => {
  //   if(callback(element))i=index;
  // })
  // return array.slice(0,i);
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);