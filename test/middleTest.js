const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

assertArraysEqual(middle([true, false, false, true, false]), [false])