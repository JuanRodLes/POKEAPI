function pokeApi(url = "https://pokeapi.co/api/v2/pokemon") {

    let consumoApi = fetch(url)
    consumoApi.then(res => res.json())
        .then(data1 => {
            for (const pokemon of data1.results) {
                fetch(pokemon.url)
                    .then(res2 => res2.json())
                    .then(dataPokimon2 => {
                        console.log(dataPokimon2.sprites.other['official-artwork'].front_default)
                    }) //2do data//
            }//ForOf//
        })//1er data//
}//function//
pokeApi()