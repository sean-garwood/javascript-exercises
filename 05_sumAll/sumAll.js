const sumAll = function(num1, num2) {
  let sum = 0;
  if (num1 > num2) {
    for (num2; num2 <= num1; num2++) {//start at num1, go 
      sum += num2;
    } return sum;
  } else {
    for (num1; num1 <= num2; num1++) {//start at num1, go 
      sum += num1;
    } return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;