`use strict`;

const user = {
    name: "John",
    birthday: `2012-01-01`
}
const user2 = {
    name: "Francesca",
    birthday: `2018-05-25`
}

function checkIs14YearsOld(user) {
    const userBirthday = new Date(user.birthday).getTime();
    const earInMs = 365 * 24 * 60 * 60 * 1000;
    return new Date().getTime() - userBirthday >= 14 * earInMs;
}

console.log(checkIs14YearsOld(user));
console.log(checkIs14YearsOld(user2));