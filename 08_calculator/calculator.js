const add = function(num0, num1) {
	return num0 + num1;
};

const subtract = function(num0, num1) {
	return num0 - num1;
};

const sum = function(array) {
  let sumTotal = 0;
  for (let i = 0; i < array.length; i++){
    sumTotal += array[i];
  }
  // return sumTotal;
  // return array.reduce ((sumTotal, current) => sumTotal + current, 0)
};

const multiply = function(array) {
  let mulTotal = 1;
  for (let i = 0; i < array.length; i++){
    mulTotal = mulTotal * array[i];
  }
  return mulTotal;

};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(number) {
  if (number < 0) return "Error";
  if (number === 0 || number === 1) return 1
  return number * factorial(number -1)
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
