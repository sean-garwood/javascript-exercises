const sumAll = function(num1, num2) {
  if (num1 > num2) {
    if (num1 % 2 === 0) {
      return ((num2 + num1) * num1 / 2);
    } else {
      return ((num2 + num1) * Math.floor(num1 / 2) + (Math.ceil(num1 / 2)));
    }
  } else {
    if (num2 % 2 === 0) {
      return ((num1 + num2) * num2 / 2);
    } else {
      return ((num1 + num2) * Math.floor(num2 / 2) + (Math.ceil(num2 / 2)));
    }
  }
};

// Do not edit below this line
module.exports = sumAll;

/* Gaussian method: check for evenness:

if highest arg even:
  sum args, multiply by highest arg, divide by two.
if highest arg odd:
  sum args, multiply by highest arg, divide by two, add one.

todo:

-add error handling
-add sort function that sorts two args from large to small (into an array?)
*/