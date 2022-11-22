const eqObjects = require("../eqObjects");
const assert = require("chai").assert;


describe("#eqObjects", () => {
  it("return true if object1 = { a: { z: 1 }, b: 2 } and object 2 = { a: { z: 1 }, b: 2 } have same properties", ()=>{
    assert.equal(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true);
  });
  it("return false since object 1 != object 2 (object 1 = { a: { y: 0, z: 1 }, b: 2 }, object 2 = { a: 1, b: 2 })", () => {
    assert.equal(eqObjects({ a: { y: 0, z: 1 }, b: 2 },  { a: 1, b: 2 }),false);
  });
})
