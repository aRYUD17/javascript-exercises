const add = function(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
};

const subtract = function(num1, num2) {
	return parseFloat(num1) - parseFloat(num2);
};

const sum = function(num) {
	return num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(num) {
    return num.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(num1, num2) {
    return num1 ** num2;
};

const factorial = function(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
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
