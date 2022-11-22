
const letterPositions = function(sentence) {
  const results = {};
  let i=0;
  for (const s of sentence.split(" ").join("")) {
    if(!results[s]){
      results[s] = [i];
    }
    else{
      results[s].push(i);
    }
    i++;
  }
  return results;
};

module.exports = letterPositions;