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
  let arrayOfString = string.split();
  let reversed = arrayOfString.reverse();//reverse the array
  return reversed.toString();
};

// Do not edit below this line
module.exports = reverseString;
