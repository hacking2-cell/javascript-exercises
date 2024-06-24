const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
  if (num1 > num2) {
    let holder = num1;
    num1 = num2;
    num2 = holder;
  }
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result += i;
  };
  return result;
};

/*
npm test sumAll.spec.js
-add 2 parameters to hold the given numbers
-if nums < 0 return ERROR
-if nums != 'number' return ERROR

-create 3 variables to switch the order of numbers in case the first
number is larger (the 3th variable is just a placeholder)
-create a loop from the first number to the second number
-inside the loop add the looping number to the sum (sum += [i])



*/

// Do not edit below this line
module.exports = sumAll;
