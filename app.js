`use strict`;

// class User {
//     #login;
//     #_password;
//
//     constructor(login, password) {
//         this.#login = login;
//         this.#password = password;
//     }
//
//     set #password(pass) {
//         this.#_password = pass.split('').reverse().join('');
//     }
//
//     get #password() {
//         return this.#_password.split('').reverse().join('');
//     }
//
//     get login() {
//         return this.#login;
//     }
//
//     checkPassword(pass) {
//         return pass === this.#password;
//     }
//
//     changePassword(oldPass, newPass) {
//         if (this.checkPassword(oldPass)) {
//             this.#password = newPass;
//         }
//     }
// }
//
// user = new User('admin', 'qwerty');

/*
Создайте класс Car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе).

Сделайте для него возможность менять пробег через get и set.
Добавьте метод info, который выводит в консоль марку, модели и пробег.
 */

class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        if (mileage > 0) {
            this.#mileage = mileage;
        }
    }

    set mileage(mileage) {
        if (mileage > 0) {
            this.#mileage = mileage;
        }
    }

    get mileage() {
        if (this.#mileage > 0) {
            return this.#mileage;
        }
    }

    info() {
        if (this.#mileage > 0) {
            console.log(`Марка: ${this.#brand}, модель: ${this.#model}, пробег: ${this.#mileage}`);
        }
    }
}

// Проверка
const car = new Car('BMW', 'X5', 10000);
console.log(car);
car.info();
car.mileage = 25000;
console.log(car.mileage);
car.info();