const takeUntil = (array, callback) => {
  let newArray = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    newArray.push(item);
  }
  return newArray;
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

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

const assertArraysEqual = function(actual, expected) {
  if(!eqArrays(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  } 
  console.log(`🎉🎉🎉Assertion Passed: ${actual} !== ${expected}`);
  };

  assertArraysEqual((results2), [ 'I\'ve', 'been', 'to', 'Hollywood' ])