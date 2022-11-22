
const countLetters = function(string) {
  let results = {};
  const noSpace = string.split(" ").join("");
  for (const letter of noSpace) {
    //if result is undefined, assign it to 1. otherwise add 1
    // not good practice
    // result[s] = !result[s] ? 1 : result[s] + 1;

    //professional coding
    if (results[letter] === undefined) {
      results[letter] = 0;
    }
    results[letter]++;
  }
  return results;
};

console.log(countLetters("lighthouse in the house"));