const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly: inputting firstNames = [Karl, Salima, Agouhanna,  Fang,  Kavith,  Jason,  Salima,  Fang,  Joe], with itemsToCount = { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
  it("return an object as output", () => {
    assert.equal(typeof result1,"object");
  });
  it("return 1 as output if we call result1[Jason]", () => {
    assert.equal(result1["Jason"],1);
  });
  it("return 1 as output if we call result1[Jason]", () => {
    assert.equal(result1["Karima"],undefined);
  });
  
})
