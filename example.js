const assertEqual = function(actual, expected) {
  if (actual === undefined) {
    throw new Error("Assertion Failed: actual is undefined");
  }

  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(3, undefined);