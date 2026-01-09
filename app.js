`use strict`;

// /*
// Постановка задачи: нужно выполнить GET-запрос на указанный URL для
// получения 30 продуктов, затем рассчитать среднюю цену продуктов и
// вывести результат в консоль.
//  */
//
// const request = new XMLHttpRequest();
// request.open(`GET`, `https://dummyjson.com/products/`);
// request.send();
//
// request.addEventListener(`load`, function () {
//     const {products} = JSON.parse(this.responseText);
//     // console.log(products);
//     const sum = products.reduce((acc, product) =>
//         acc += product.price, 0);
//     console.log(sum / products.length);
//     console.log(sum);
// })

/*
Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

После получения, получите информацию о первой его ablility по ссылке, которая приходит при первом запросе.
Там найдите описание на английском и выведите в консоль:
 */

const request = new XMLHttpRequest();
request.open(`GET`, `https://pokeapi.co/api/v2/pokemon/ditto`);
request.send();
request.addEventListener(`load`, function () {
    const pokemon = JSON.parse(this.responseText);
    const request2 = new XMLHttpRequest();

    request2.open(`GET`, pokemon.abilities[0].ability.url);
    request2.send();
    request2.addEventListener(`load`, function () {
       const ability = JSON.parse(this.responseText);
       ability.effect_entries.forEach((item) => {
           if (item.language.name === `en`) {
               console.log(item.effect)
           }
       });
    });
})
