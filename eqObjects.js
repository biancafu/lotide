const eqArrays = require("./eqArrays");
const {assertEqual} = require("./assertEqual");


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //recursion
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key])) {
      //recursive case -> if the value of object is an object, call itself again
      eqObjects(object1[key], object2[key]);
    } else {
      //base case -> if value is its property then we compare
      if (object1[key] !== object2 [key]) {
        return false;
      }
      return true;
    }
  }



  // if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  // for (const o in object1) {
  //   if (Array.isArray(object1[o])){
  //     if(!eqArrays(object1[o],object2[o])) return false;
  //   } else if (object1[o] !== object2[o]) {
  //     return false;
  //   }
  // }
  // return true;
};

// => true
const result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
assertEqual(result,true);
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2),false); // => false