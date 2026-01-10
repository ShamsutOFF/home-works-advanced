`use strict`;

/*
Создать функцию race(), которая будет принимать массив Promise,
и возвращать первый успешно выполненный или отклоненный.
 */

async function race(promises) {
        return await Promise.race(promises);
}



// async function getProducts() {
//     try {
//         const res = await fetch('https://dummyjson.com/products');
//         const data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// getProducts().then(r => console.log('then'));
// console.log('hi')

// function getCoords() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 resolve(position);
//             },
//             (error) => {
//                 reject(error);
//             });
//     });
// }
//
// async function getMyCity() {
//     getCoords().then((position) => {
//         console.log(
//             `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
//         );
//         fetch(
//             `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`
//         )
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log(err)
//             });
//     })
// }
//
// getMyCity().then(r => {})