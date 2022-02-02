const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  let sumArray = arguments[0];
  if(sumArray.length === 0) {
    return 0;
  }
  const reducer = (previous , current) => previous + current;
  return sumArray.reduce(reducer);
};

const multiply = function() {
  let multiplyArray = arguments[0];
  if(multiplyArray.length === 0) {
    return 0;
  }
  const reducer = (previous , current) => previous * current;
  return multiplyArray.reduce(reducer);
};

const power = function() {
	return Math.pow(arguments[0] , arguments[1]);
};

const factorial = function() {
	if(arguments[0] === 0) {
    return 1;
  }
  let total = 1;
  for(i=1; i<=arguments[0]; i++) {
    total *= i;
  }
  return total;
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
