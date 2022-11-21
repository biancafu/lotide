const {tail} = require('../tail');
const assert = require('chai').assert;

describe("#tail", ()=>{
  it("return [Lighthouse, Labs] from [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("return [2,3] from [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });
});