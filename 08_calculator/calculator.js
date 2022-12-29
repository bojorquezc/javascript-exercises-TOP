const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let arr = array;
  return arr.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(array) {
  let arr = array;
  return arr.reduce((product, current) => product * current, 1);
};

const power = function(a, b) {
  return a**b;
	
};

const factorial = function(a) {
  fact = a;
  if (a == 0) {
    return 1;
  } else {
    for (let i = 1; i < a; i++) {
      fact *= i;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
