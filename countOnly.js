
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const name of allItems) {
    if (itemsToCount[name] === true) {
      if (results[name] === undefined) {
        results[name] = 0;
      }
      results[name]++;
    }
  }
  return results;
}

module.exports = countOnly;