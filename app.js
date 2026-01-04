`use strict`;

//Сделать с помощью Set уникализацию массива объектов:

let users = [
    {id: 1, name: `Вася`},
    {id: 2, name: `Петя`},
    {id: 1, name: `Вася`},
]

let uniqueUsers = [...new Set(
    users.map((user) => JSON.stringify(user))
)]
    .map((user) => JSON.parse(user));
console.log(uniqueUsers)