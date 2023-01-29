const findTheOldest = function (people) {
  for (let person of people) {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = new Date().getFullYear();
    } else continue;
  }
  people.sort((a, b) => {
    if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth) {
      return 1;
    } else return -1;
  });
  return people[0];
}
module.exports = findTheOldest;
