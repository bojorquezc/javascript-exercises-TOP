const convertToCelsius = function(fahrTemp) {
  let celsiusTemp = 0;
  let roundCelsiusTemp = 0;
  celsiusTemp = (fahrTemp - 32) * (5/9);
  roundCelsiusTemp = Math.round(celsiusTemp * 10) / 10;
  return roundCelsiusTemp;
};


const convertToFahrenheit = function(celsTemp) {
  let fahrenheitTemp = 0;
  let roundFahrenheitTemp = 0;
  fahrenheitTemp = ((celsTemp * (9/5)) + 32);
  roundFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
