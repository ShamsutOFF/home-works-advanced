`use strict`;

// 1. Базовый класс Персонажа
function Personage(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Personage.prototype.speak = function() {
    console.log(`Я ${this.name}, моя раса: ${this.race}, говорю на ${this.language}`);
};

// 2. Класс Орка
function Orc(name, language, weapon) {
    // Вызываем конструктор родителя для инициализации общих свойств
    Personage.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

// Наследуем прототип от Personage
Orc.prototype = Object.create(Personage.prototype);
// Исправляем конструктор (иначе будет Personage)
Orc.prototype.constructor = Orc;

// Добавляем метод удара
Orc.prototype.attack = function() {
    console.log(`${this.name} наносит удар ${this.weapon}!`);
};

// 3. Класс Эльфа
function Elf(name, language, spellType) {
    Personage.call(this, 'Эльф', name, language);
    this.spellType = spellType;
}

Elf.prototype = Object.create(Personage.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.castSpell = function() {
    console.log(`${this.name} создает заклинание "${this.spellType}"`);
};


// Тестируем
console.log('=== Тест базового персонажа ===');
const human = new Personage('Человек', 'Артур', 'Общий');
human.speak();

console.log('\n=== Тест Орка ===');
const orc = new Orc('Гром', 'Орочий', 'Топор');
orc.speak();      // Унаследованный метод
orc.attack();     // Свой метод

console.log('\n=== Тест Эльфа ===');
const elf = new Elf('Леголас', 'Эльфийский', 'Огненный шар');
elf.speak();      // Унаследованный метод
elf.castSpell();  // Свой метод

// Проверяем цепочку прототипов
console.log('\n=== Проверка наследования ===');
console.log('Орк наследует от Personage?', orc instanceof Personage); // true
console.log('Эльф наследует от Personage?', elf instanceof Personage); // true
console.log('Конструктор Орка:', orc.constructor.name); // Orc
console.log('Конструктор Эльфа:', elf.constructor.name); // Elf




// function Transport(type) {
//     this.type = type;
// }
//
// Transport.prototype.move = function() {
//     console.log(`${this.type} движется`);
// };
//
// // ТВОЯ ЗАДАЧА: реализовать наследование
// // 1. Создай Car (добавить свойство model, метод honk)
// // 2. Создай Truck (наследует от Car, добавить capacity, метод loadCargo)
//
// function Car(model) {
//     Transport.call(this, `Машина`)
//     this.model = model;
// }
//
// Car.prototype = Object.create(Transport.prototype);
// Car.prototype.constructor = Car;
//
// Car.prototype.honk = function() {
//     console.log(`${this.model} сигналит: Би-бип!`);
// };
//
// function Truck(capacity) {
//     Car.call(this, 'Камаз');
//     this.capacity = capacity;
// }
//
// Truck.prototype = Object.create(Car.prototype);
// Truck.prototype.constructor = Truck;
//
// Truck.prototype.loadCargo = function () {
//     console.log(`${this.model} вместимостью ${this.capacity} загрузился!`);
// }
// console.log('\n=== Проверка Машин ===');
// // Потом проверь:
// const bmw = new Car("BMW");
// bmw.move();  // "Автомобиль движется" (унаследовано)
// bmw.honk();  // "BMW сигналит: Би-бип!"
//
// const kamaz = new Truck(`25 тонн`);
// kamaz.move();
// kamaz.honk();
// kamaz.loadCargo();