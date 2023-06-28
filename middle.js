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

  const assertArraysEqual = function(array1, array2) {
    if(array1.length !== array2.length) {
      console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
    } 
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] !== array2[i]) {
        console.log(`😡😡😡 Assertion Failed: ${array1} !== ${array2}`);
      }
    }
    console.log(`🎉🎉🎉 Assertion Passed: ${array1} === ${array2}`);
    };
  

const middle = function(array) {
  let length = array.length;
  let middleIndex = Math.floor(length/2);
 if(length % 2 === 0) {
  return [array[middleIndex - 1], array[middleIndex]];
 } else {
  return [array[middleIndex]];
 }
}
assertArraysEqual(middle([true, false, false, true, false]), [false])