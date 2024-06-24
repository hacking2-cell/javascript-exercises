const convertToCelsius = function(fahren) {
  const calc = (fahren - 32) / 1.8;
  const result = Math.round(calc * 10) / 10;
  return result;
};

const convertToFahrenheit = function(celsius) {
  const calc = (celsius * 1.8) + 32;
  const result = Math.round(calc * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
