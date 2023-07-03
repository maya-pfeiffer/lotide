const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual(middle([1, 2, 3]), [2]));
  });
  it("returns [6, 7] for [2, 4, 6, 7, 8, 9]", () => {
    assert.deepEqual(assertArraysEqual(middle([2, 4, 6, 7, 8, 9]), [6, 7])); 
  });
});

//assertArraysEqual(middle([true, false, false, true, false]), [false])