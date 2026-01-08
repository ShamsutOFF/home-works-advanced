`use strict`;

/*
Спроектируйте класс Billing со свойством amount и методом calculateTotal для расчёта счёта. Сделайте разный calculateTotal для разных типов:

fixBilling - где нужно вернуть amount как результат
hourBilling - который считает amount * число часов
itemBilling где считается amount * число элементов
Соблюдайте принцип открытости / закрытости!
 */

class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {    }
}

class fixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    }
}

class hourBilling extends Billing {
    calculateTotal(hours) {
        return this.amount * hours;
    }
}

class itemBilling extends Billing {
    calculateTotal(items) {
        return this.amount * items;
    }
}

