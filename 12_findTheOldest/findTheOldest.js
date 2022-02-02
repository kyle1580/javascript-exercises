const findTheOldest = function() {
    const people = arguments[0];
    people.forEach(person => {
        if("yearOfDeath" in person) {

        } else {
            person.yearOfDeath = 2022;
        }
    });
    const oldest = people.sort(function(a , b) {
        last = a.yearOfDeath - a.yearOfBirth;
        next = b.yearOfDeath - b.yearOfBirth;
        return last > next ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
