const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([6, 5, 4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
