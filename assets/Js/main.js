function pokeApi(url = "https://pokeapi.co/api/v2/pokemon") {

    let consumoApi = fetch(url)
    consumoApi.then(res => res.json())
        .then(data1 => {
            for (const pokemon of data1.results) {
                fetch(pokemon.url)
                    .then(res2 => res2.json())
                    .then(data2 => {debugger
                        for (const IStats of data2) {
                            fetch(IStats.stats[0].stat.url)
                                .then(res3 => res3.json())
                                .then(data3 => {
                                    for (const ILang of data3) {
                                        fetch(ILang.names[5].name)
                                        .then(res4 => res4.json())
                                        .then(data4 => {
                                            console.log(data4)
                                            
                                        })//4to data//
                                    }//3er ForOf//
                                })//3er data//
                        }//2do ForOf//
                        // console.log(dataPokimon2.sprites.other['official-artwork'].front_default) //camino para la img
                    }) //2do data//
            }//1er ForOf//
        })//1er data//
}//function//
pokeApi()



