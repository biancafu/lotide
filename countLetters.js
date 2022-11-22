
const countLetters = function(string) {
  let result = {};
  const noSpace = string.split(" ").join("");
  for (const letter of noSpace) {
    //if result is undefined, assign it to 1. otherwise add 1
    // not good practice
    // result[s] = !result[s] ? 1 : result[s] + 1;

    //professional coding
    if (result[letter] === undefined) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));