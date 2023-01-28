const add = (a, b) => a + b;

const subtract = (a, b) => a - b; 

const sum = (...args) => {
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}; 

const multiply = (arrayOfFactors) => {
  let product = 1;
  for (let factor of arrayOfFactors) {
    product *= factor;
  }
  return product;
};

const power = (a, b) => a ** b;

const factorial = a => {
  if (a === 0) {
    return 1;
  }
  let factorial = 1;
  let factors = []
  for (let i = a; i > 1; i--) {
    factors.push(i);
  }
  for (let factor of factors) {
   factorial *= factor;
  }
  return factorial;
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
