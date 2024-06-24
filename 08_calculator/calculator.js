const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  if (!array) return 0;
  if (array.length === 1) return array[0];
  let result = 0;
	for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(num, power) {
	let result = 1;
  for (let i = 0; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result;
};
// npm test calculator.spec.js

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
