`use strict`;

function getData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage} (${response.status})`);
            } else {
                return response.json();
            }
        });
}

getData(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(r => {
        console.log(r.abilities[0].ability.url)
        return getData(r.abilities[0].ability.url)
    })
    .then(r => {
        r.effect_entries.forEach((item) => {
            if (item.language.name === `en`) {
                console.log(item.effect)
            }
        });
    })
    .catch(e => console.log(e));
