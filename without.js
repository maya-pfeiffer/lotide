const without = function(source, itemsToRemove) {
  let finalArray = [];
  Array.from(source).map(function(number) {
    if (!itemsToRemove.includes(number)) {
      finalArray.push(number);
    }
  });
  return finalArray;
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

  
assertArraysEqual(without([1, 2, 3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])