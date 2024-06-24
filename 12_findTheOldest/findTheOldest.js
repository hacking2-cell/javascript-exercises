function findAge(yearOfBirth, yearOfDeath) {
    return yearOfDeath ? yearOfDeath - yearOfBirth : new Date().getFullYear() - yearOfBirth;
};
const findTheOldest = function(people) {
 return people.reduce((oldest, current) => {
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = findAge(current.yearOfBirth, current.yearOfDeath);
         return oldestAge > currentAge ? oldest : current;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
