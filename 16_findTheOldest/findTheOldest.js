const findTheOldest = function(arr) {
    const getAge = ({yearOfDeath, yearOfBirth}) => yearOfDeath - yearOfBirth;
    const oldestPerson = arr.reduce((acc, next) => (getAge(acc) > getAge(next)) ? acc : next);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
