const date = new Date();
const fullYear = date.getFullYear();

const findTheOldest = function (peopleArray) {

    const oldest = peopleArray.sort(function (a, b) {

        for (person of peopleArray) {
            if (person.hasOwnProperty('yearOfDeath') == false) {
                person.yearOfDeath = fullYear;
            }
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;

        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
