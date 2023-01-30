function pokeApi(url = "https://pokeapi.co/api/v2/pokemon") {

    let consumoApi = fetch(url)
    consumoApi.then(res => res.json())
        .then(dataPokemon1 => {
            for (const pokemon of dataPokemon1.results) {
                fetch(pokemon.url)
                    .then(res2 => res2.json())
                    .then(dataPokemon2 => {
                        for (const StatsPokemon of dataPokemon2.stats) {
                            fetch(StatsPokemon.stat.url)
                                .then(res3 => res3.json())
                                .then(dataStats => {
                                    for (const LangStats of dataStats.names) {
                                        if(LangStats.language.name == "es"){
                                            // console.log(LangStats.name)
                                        }


/*                                         
                                        document.querySelector("#cartaPokemon").innerHTML += `
                                        <div class="card bg-dark" style="width: 18rem;">
                                            <img src="${dataPokemon2.sprites.other['official-artwork'].front_defwault}" class="card-img-top">
                                                <div class="card-body">
                                                    <h5 class="card-title text-white">${pokemon.name}</h5>
                                                </div>
                                            <table class="table table-dark border-top d-flex justify-content-around">
                                                <tbody>
                                                    <tr>
                                                        <td>PS</td>
                                                        <td>ATQ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>DF</td>
                                                        <td>E.ATQ</td>
                                                    </tr>
                                                    <tr>
                                                        <td>E.DF</td>
                                                        <td>VEL</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
` */



                                    } //3er ForOf//
                                })//3er dataStats//
                        }//2do ForOf//
                        // console.log(dataPokemon2.sprites.other['official-artwork'].front_default)
                    }) //2do dataPokemon2//
            }//1er ForOf//
        })//1er dataPokemon1//
}//function//
pokeApi()