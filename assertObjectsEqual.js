const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      }
      for (let i= 0; i , object1[key]; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
    
  } else {
  if (object1[key] !== object2[key]) {
    return false;
}
  }
}
return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(!eqObjects(actual, expected)) {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } 
  console.log(`🎉🎉🎉 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
}

let result = {colour: "blue", number: 1};
let answer = {colour: "red", number: 1};
assertObjectsEqual(result, answer);



