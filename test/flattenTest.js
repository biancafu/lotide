const flatten = require("../flatten");
const assert = require("chai").assert;


describe ("#flatten", () => {
  it("return [1, 2, 3, 4, 5, 6] when input is [1, 2, [3, 4], 5, [6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
  });
  it("return [] when input empty array", () => {
    assert.deepEqual(flatten([]),[]);
  });
  it("return [1,2,3] when input array = [1,2,3]", () => {
    assert.deepEqual(flatten([1, 2, 3]),[1, 2, 3]);
  });
})