const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const o in object1) {
    if (Array.isArray(object1[o])){
      if(!eqArrays(object1[o],object2[o])) return false;
    } else if (object1[o] !== object2[o]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const message = eqObjects(actual,expected)?`✅✅✅ Assertion Passed [${inspect(actual)}] === [${inspect(expected)}]` : `🛑🛑🛑 Assertion Failed [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(message);
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });