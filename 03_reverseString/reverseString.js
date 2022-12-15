/* need to:
1. cast the string to an array
2. use reverse() to reverse the elements
3. rejoin everything into a string.

reverse string function will take a string as an argument
declare new variable, store array of string into it.
reverse the array
cast array to string
return value
*/

const reverseString = function(string) {
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
