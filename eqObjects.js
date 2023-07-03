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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const shirtObject = { color: ["red", "blue"], size: "medium"};

const anotherShirtObject= { size: "medium", color: ["red", "green"]};

let result = eqObjects(shirtObject, anotherShirtObject)
assertEqual(eqObjects(shirtObject, anotherShirtObject), false);



