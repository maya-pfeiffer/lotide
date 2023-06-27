let head = function(array) {
  return array[0];
};

const assertEqual = function(head, expected) {
  if (head === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${head} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${head} !== ${expected}`);
  }
};

assertEqual(head([6, 5, 4]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");