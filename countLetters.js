const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (const s of string.split(" ").join("")) {
    result[s] = !result[s] ? 1 : result[s] + 1;
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));