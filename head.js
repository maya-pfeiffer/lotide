function head(array){
    return array[0];
  }

const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: actual === expected`);
  } else {
    console.log(`😡😡😡 Assertion Failed: actual !== expected`);
  }
};

assertEqual(head([]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");