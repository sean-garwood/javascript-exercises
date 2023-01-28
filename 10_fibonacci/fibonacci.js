/*

problem
grab the nth+1 element of an array

*/

const fibonacci = (nthMember) => {
  let fibArray = [1, 1];
  for (let i = 1, i < nthMember; i++)
    fibArray = fibArray.push(fibArray[i-1] + fibArray[i])
  return fibArray[nthMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
