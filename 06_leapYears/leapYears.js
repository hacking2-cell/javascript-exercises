const leapYears = function(year) {
    return (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0));
};
/*
npm test leapYears.spec.js
-add one parameter for the years
-if divisible for 4 = leap
-if divisible by 100 = no leap unless divisible by 400
*/

// Do not edit below this line
module.exports = leapYears;
