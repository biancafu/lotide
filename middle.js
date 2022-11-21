const eqArrays = require("./eqArrays");

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

 
module.exports = middle;