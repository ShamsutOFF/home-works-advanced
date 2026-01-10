`use strict`;

function getCoords() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            (error) => {
                reject(error);
            });
    });
}

getCoords()
    .then((position) => {
        document.getElementById(`coords`).innerHTML =
            (`Ваша позиция: Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`)
    });