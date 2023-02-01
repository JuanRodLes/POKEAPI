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
                                        
                            if (LangStats.language.name == "es") {
                                        let PS = (LangStats.name == "PS") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let AT = (LangStats.name == "Ataque") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let DF = (LangStats.name == "Defensa") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let EAT = (LangStats.name == "Ataque Especial") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let EDF = (LangStats.name == "Defensa Especial") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let VEL = (LangStats.name == "Velocidad") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let allStats = PS+AT+DF+EAT+EDF+VEL
                                        let arrayStats = [PS,AT,DF,EAT,EDF,VEL]
                                    
                                            document.querySelector("#cartaPokemon").innerHTML += `
                                            <div class="card bg-dark m-2" style="width: 17rem;">
                                                <img src="${dataPokemon2.sprites.other['official-artwork'].front_default}" class="card-img-top">
                                                    <div class="card-body d-flex justify-content-center align-items-center">
                                                        <h5 class="card-title text-white">${pokemon.name}</h5>
                                                    </div>
                                                <table class="table table-dark border-top d-flex justify-content-around">
                                                    <tbody>
                                                        <tr>
                                                            <td>${arrayStats[0]} / </td>
                                                            <td>${arrayStats[1]}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${arrayStats[2]} / </td>
                                                            <td>${arrayStats[3]}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${arrayStats[4]} / </td>
                                                            <td>${arrayStats[5]}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>`
                                        }//condicional//
                                    } //3er ForOf//
                                })//3er dataStats//
                        }//2do ForOf//
                    }) //2do dataPokemon2//
            }//1er ForOf//
        })//1er dataPokemon1//
        paginacion(dataPokemon1.previous, dataPokemon1.next)
}//function//

function paginacion( url_prev, url_next) {
    let desacPrev = (url_prev == null) ? "disabled" : "";
    let desacNext = (url_next == null) ? "disabled" : "";
    document.querySelector("#btnPaginacion").innerHTML = `
    <button class="btn btn-dark fs-2" ${desacPrev} onclick="pokeApi('${url_prev}')">Anterior</button>
    <button class="btn btn-dark fs-2" ${desacNext} onclick="pokeApi('${url_next}')">Siguiente</button>
    `
}
pokeApi()