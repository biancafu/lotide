const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

const r = letterPositions("hello");
assert.deepEqual(r['h'],[0]);
assert.deepEqual(r['e'],[1]);
assert.deepEqual(r['l'],[2,3]);
assert.deepEqual(r['o'],[4]);

describe("#letterPositions", () => {
  it("return an object as result", () => {
    assert.equal(typeof r, "object");
  })
  it("return {h : [0], e : [1], l :[2, 3], o : [4]} with \"hello\" as input", () => {
    assert.deepEqual(r, {h : [0], e : [1], l :[2, 3], o : [4]});
  })
})