`use strict`;

function checkIs14YearsOld(birthdayString) {
    const userBirthday = new Date(birthdayString);
    const today = new Date();
    return today.getFullYear() - userBirthday.getFullYear() >= 14 &&
        today.getMonth() >= userBirthday.getMonth() &&
        today.getDate() >= userBirthday.getDate();
}

console.log(checkIs14YearsOld(`2012-01-01`));
console.log(checkIs14YearsOld(`2018-05-25`));