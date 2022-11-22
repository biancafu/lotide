
const flatten = function(arr) {
  let result = [];
  for (const a of arr) {
    if(Array.isArray(a)){
      for(const e of a) {
        result.push(e);
      };
    } else if(arr.indexOf(a) === arr.length - 1) {
      result.push(a)
    } else {
      result.push(a);
    }
    
  }
  return result;
};

module.exports = flatten;