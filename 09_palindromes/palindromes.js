/*
problem

write a fn that returns true if given string is a palindrome, else returns
false.

plan 
need to parse string with methods into an array of lowercase letters
  also remove any non-alphabetic chars


determine array length
check for evenness

loop over the array elements to check equality of first/last,
second-to-first/second-to-last/middle if odd number of elements.

first element index: 0
last element index: -1

2nd to first index: 1
2nd to last index: -2

3rd...: 2
...: -3

add i at end of loop to first index, subtract from last.

components

need helper fns
  buildArray
  isEven
  checkChar

pseudocode

function buildArray(string)
initialize empty array to store letters in
loop through string starting at first element
  check if letter
  if true:
    push lowercase version to empty array
  return array


checkChar(letter)
check if alpha

isEven(array)
if array.length %2 === 0 return true
else return false

fn isPalindrome(array)
if array.length is even


*/

function onlyLowercase(string) {
  let lowercase = [];
  for (let char of string) {
    if (char.toLowerCase() != char.toUpperCase()) {
      lowercase.push(char.toLowerCase());
    }
  }
  return lowercase.join('')
}


const palindromes = (string) => {
  const lowerString = onlyLowercase(string);
  const length = lowerString.length;
  let i = 0;
  for (i = 0; i < (length / 2); i++) {
    let firstIndex = lowerString[0 + i];
    let lastIndex = lowerString[length-(i+1)];
    if (firstIndex != lastIndex) {
      return false;
    } else continue;
  }
  return true;
}
// Do not edit below this line
module.exports = palindromes;
