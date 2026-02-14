const findTheOldest = function(people) {
    return people.reduce((juaraTertua, orangSaatIni) => {
        const tahunSekarang = new Date().getFullYear();

        const umurJuara = (juaraTertua.yearOfDeath || tahunSekarang) - juaraTertua.yearOfBirth;
        const umurSaatIni = (orangSaatIni.yearOfDeath || tahunSekarang) - orangSaatIni.yearOfBirth;

        return umurSaatIni > umurJuara ? orangSaatIni : juaraTertua;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
