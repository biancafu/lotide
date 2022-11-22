const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArray", () => {
  it("return true if call eqArrays([[2, 3], [4]], [[2, 3], [4]])", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]),true); 
  });
  it("return false if call eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]),false); 
  });
  it("return false if call eqArrays([[2, 3], [4]], [[2, 3], 4])", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]),false); 
  });
})