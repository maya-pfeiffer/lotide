const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  } 
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }return true;
  }


const assertEqual = function(eqArrays, expected) {
  if (eqArrays === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${eqArrays} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${eqArrays} !== ${expected}`);
  }
};

module.exports = eqArrays;