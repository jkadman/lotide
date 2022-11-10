# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install jkadman/lotide`

**Require it:**

`const _ = require('jkadman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countOnly`: Given an array of elements and an object of which elements are truthy, will return an object with only the truthy elements and the amount of times those   elements appear in the array 
* `eqObjects`: Give two objects with the same key value pairs (in any order), will return true if they are equal or not
* `flatten`: will flatten a multi-dimensional array to a one dimensional array
* `head`: will remove and push to a new array the first element of an array
* `tail`: will remove and push to a new array all elements but the first of an array
* `letterPositions`: will return the index of each letter in a string
* `findKeyByValue`: when given an object, can find a key for a value or a value for a key
* `eqArrays`: when given two equal arrays, will assert those arrays equal (requires exact match of elements)
* `middle`: will return the middle element of an odd array of integers or two middle elements of an even array of integers