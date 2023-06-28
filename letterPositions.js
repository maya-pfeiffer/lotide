const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
    }
    index++
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  } 
  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }return true;
  };

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