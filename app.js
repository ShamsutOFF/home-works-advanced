`use strict`;

const wrapper = document.querySelector('.buttons-wrapper');
const buttonsQuantity = 5;

for (let i = 0; i < buttonsQuantity; i++) {
    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Нажми меня';
    button.setAttribute(`button-id`, `${i}`)
    wrapper.append(button);
}

wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        const button = event.target;
        const buttonId = button.getAttribute('button-id');
        button.textContent = 'Нажата!';
        for (let i = 0; i < buttonsQuantity; i++) {
            if (i !== Number(buttonId)) {
                const button = document.querySelector(`[button-id="${i}"]`);
                button.textContent = 'Нажми меня';
            }
        }
        const counter = document.querySelector('.counter');
        let counterValue = Number(counter.textContent);
        counter.textContent = String(++counterValue);
    }
});