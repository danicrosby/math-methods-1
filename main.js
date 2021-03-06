'use strict';
//In these first 6 questions, replace `null` with the answer

//1. create a string variable, it can contain anything
const newString = 'test';

//2. create a number variable, it can be any number
const newNum = 11;

//3. create a boolean variable
const newBool = true;

//4
const newSubtract = 10 - 5 === 5;

//5
const newMultiply = 10 * 4 === 40;

//6
const newModulo = 21 % 5 === 1;

// 7
function returnString(str) {
  return str
}

// 8
function add(x, y) {
  return x + y
}

// 9
function subtract(x, y) {
  return x -= y
}

// 10
function multiply(x, y) {
  return x * y
}

// 11
function divide(x, y) {
  return x / y
}

// 12
function areEqual(x, y) {
  return x == y
}

// 13
function areSameLength(str1, str2) {
  if (str1.length == str2.length) {
    return true
  } else {
    return false
  }
}

// 14
function lessThanNinety(num) {
  if (num < 90) {
    return true
  } else {
    return false
  }
}

// 15
function greaterThanFifty(num) {
  if (num > 50) {
    return true
  } else {
    return false
  }
}

// 16
function getRemainder(x, y) {
  return x % y
}

// 17
function isEven(num) {
  if (num %2 == 0) {
    return true
  } else {
    return false
  }
}

// 18
function isOdd(num) {
  if (num %2 != 0) {
    return true
  } else {
    return false
  }
}

// 19
function square(num) {
  return num * num
}

// 20
function cube(num) {
  return num * num * num
}

// 21
function raiseToPower(num, exponent) {
  return Math.pow(num, exponent)
}

// 22
function roundNumber(num) {
  return Math.round(num)
}

// 23
function roundUp(num) {
  return Math.ceil(num)
}

// 24
function addExclamationPoint(str) {
  return (`${str}!`)
}

// 25
function combineNames(firstName, lastName) {
  return (`${firstName} ${lastName}`)
}

// 26
function getGreeting(name) {
  return (`Hello ${name}!`)
}

//  27
function getRectangleArea(length, width) {
  return length * width
}

// 28
function getTriangleArea(base, height) {
  return base * height / 2
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
