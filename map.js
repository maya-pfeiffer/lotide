const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results3 = map(words, word => word.replace(/[aeiou]/gi, ''));

const results2 = map(words, word => word.toUpperCase());

const results1 = map(words, word => word.length);
console.log(results1, results2, results3);