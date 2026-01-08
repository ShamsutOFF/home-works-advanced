`use strict`;

class Personage {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(
            `Я ${this.name}, моя раса: ${this.race}, говорю на ${this.language}`
        );
    }
}

class Orc extends Personage {
    constructor(name, language, weapon) {
        super('Орк', name, language);
        this.weapon = weapon;
    }

    attack() {
        console.log(
            `${this.name} наносит удар ${this.weapon}!`
        );
    }
    speak() {
        console.log(
            `Я могучий Окр ${this.name}, и я говорю на ${this.language}`
        );
    }
}

class Elf extends Personage {
    constructor(name, language, spellType) {
        super('Эльф', name, language);
        this.spellType = spellType;
    }

    castSpell() {
        console.log(
            `${this.name} создает заклинание "${this.spellType}"`
        );
    }
    speak() {
        console.log(
            `Я великий маг и чародей, гордый Эльф ${this.name}, и я говорю на ${this.language}`
        );
    }
}

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