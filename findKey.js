const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  let keys = Object.keys(object)
  for (let key of keys) {
    if(callback(object[key])) {
      return object[key];
    }
  }
  return undefined;
};

const months = {
  first: "January",
  second: "February",
  third: "March",
  fourth: "April",
  fifth: "May",
  sixth: "June"
}
const result1 = findKey(months, value => value === months["fourth"]);

const result2 = findKey(months, key => key === "July");

const result3 = findKey(months, key => key.length > 5);

console.log(result1, result2, result3);