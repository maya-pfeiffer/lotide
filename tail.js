let tail = function(array) {
  return array.slice(1);
};
const assertEqual = function(tail, expected) {
  if (tail === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: actual === expected`);
  } else {
    console.log(`😡😡😡 Assertion Failed: actual !== expected`);
  }
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);