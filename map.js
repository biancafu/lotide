const {assertArraysEqual} = require("./assertArraysEqual");

const map = function(array, callback) {
  //using for of
  // const results = [];
  // for (let item of array) {
  //   results.push(callback(item));
  // }
  // return results;

  //using forEach
  const results = [];
  array.forEach(element => results.push(callback(element)));
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,["g","c","t","m","t"]);