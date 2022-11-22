
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //recursion
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (const key in object1) {
    if (typeof object1[key] === 'object' && !Array.isArray(object1[key]) && (typeof object2[key] === 'object' && !Array.isArray(object2[key]))) {
      //recursive case -> if the value of object is an object, call itself again
      if(!eqObjects(object1[key], object2[key])){
        return false;
      }
    } else {
      //base case -> if value is its property then we compare
      if (object1[key] !== object2 [key]) {
        return false;
      }
    }
  }
  return true;

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

module.exports = eqObjects;