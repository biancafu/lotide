const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;


const obj = {
  a : 1,
  b : 2,
  c : 3
};
describe("#findKeyByValue", () => {
  it("return undefined if no key was found", () => {
    assert.equal(findKeyByValue(obj, 4), undefined);
  });
  it("return \"a\" if we call findKeyByValue({a:1, b:2, c:3},1)", () => {
    assert.equal(findKeyByValue(obj, 1), "a");
  });
})

