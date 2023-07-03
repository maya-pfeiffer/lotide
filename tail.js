const tail = function(array) {
  let newArray = array.slice(1);
  return (newArray);
};
const assertEqual = function(tail, expected) {
  if (tail === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${tail} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${tail} !== ${expected}`);
  }
};

module.exports = tail;