`use strict`;

class Enemy {
    health = 100;

    constructor(health) {
        this.health = health;
    }

    receiveDamage(damage) {
        this.health -= damage;
        console.log(this.health);
    }
}

class Sword {
    #damage;

    constructor(damage) {
        this.#damage = damage;
    }

    strike(enemy) {
        enemy.receiveDamage(this.#damage);
    }
}

class Orc extends Enemy {
    constructor(health) {
        super(health);
    }

    receiveDamage(damage) {
        if (Math.random() > 0.5) {
            this.health -= damage;
        }
        console.log(this.health);
    }
}

const enemy = new Enemy(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);