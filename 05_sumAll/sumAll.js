const sumAll = function(num1, num2) {
  if (num2 % 2 === 0) {
    return ((num1 + num2) * num2 / 2);
  } else {
   return ((num1 + num2) * num2 / 2 + 1);
  }
};

// Do not edit below this line
module.exports = sumAll;

/* Gaussian method: check for evenness:

if highest arg even:
  sum args, multiply by highest arg, divide by two.
if highest arg odd:
  sum args, multiply by highest arg, divide by two, add one.
*/