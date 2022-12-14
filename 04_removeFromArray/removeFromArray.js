const removeFromArray = function(array = [], ...args) {
  for (let i of arguments) {
    const index = array.indexOf(i); //search for element
    if (index > -1) { //only perform operation if the array is non-empty
      array.splice(index, 1);
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;

/*
i can edit wherever i please...

take an array and return another array that has infinitely many of the original
array's elements removed.

the parameters of this function need to be an array with a default of empty, 
and indices for the item(s) to remove.

removeFromArray = function(array = [], ...args)
for each i in args:
find i in the array using indexOf()
remove i from the array using splice()
return modified array
*/