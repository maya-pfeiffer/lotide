# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @maya.pfeiffer/lotide`

**Require it:**

`const _ = require('@maya.pfeiffer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares two arrays and returns an assertion to indicate       whether they are identical or not.
* `assertEqual`: Compares two values and returns an assertion to indicate       whether they are identical or not.
* `assertObjectsEqual`: Compares two objects and returns an assertion to indicate    whether they are identical or not.
* `countLetters`: Returns an object indicating how many instances of each letter there is in a string.
* `countOnly`: Returns an object indicating how amny times a element appears in an array.
* `eqArrays`: Compares two arrays to see if they are identical.
* `eqObjects`: Compares two objects to see if they are identical.
* `findKey`: Returns the associated key of a value from an object.
* `findKeyByValue`: Returns the associated key of a value from an object.
* `head`: Returns the head of an array.
* `index`: Contains an exportable object that holds six functions (head, tail, middle, eqArrays, assertEqual, assertArraysEqual).
* `letterPositions`: Returns an object with a list of indexes for the location of each character in a string.
* `map`: Returns an array with the same action performed on each element.
* `middle`: Returns the middle value(s) of an array.
* `tail`: Returns the tail of an array.
* `takeUntil`: Returns an array of elements until it reaches the inidcated stop element.
* `without`: Returns an array with the indicated elements removed.