`use strict`;

function timer() {
    setInterval(() => {
        const date = new Date();
        const newYear = new Date(date.getFullYear() + 1, 0, 1, 0, 0, 0);
        const timeLeft = newYear - date;
        document.querySelector('.timer').innerHTML =
            new Date(timeLeft).getMonth() + ` месяцев, ` +
            new Date(timeLeft).getDate() + ` дней, ` +
            new Date(timeLeft).getHours() + ` часов, ` +
            new Date(timeLeft).getMinutes() + ` минут, ` +
            new Date(timeLeft).getSeconds() + ` секунд`;
    }, 1000);
}

timer();