const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [55, 78, 333] for [13, 55, 78, 333]", () => {
    assert.deepEqual(tail([13, 55, 78, 333]), [55, 78, 333]); 
  });
});
