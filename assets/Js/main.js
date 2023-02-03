function pokeApi(url = "https://pokeapi.co/api/v2/pokemon") {
    document.querySelector("#cartaPokemon").innerHTML = ""
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
                                        let PS = (LangStats.name == "PS") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let AT = (LangStats.name == "Ataque") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let DF = (LangStats.name == "Defensa") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let EAT = (LangStats.name == "Ataque Especial") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let EDF = (LangStats.name == "Defensa Especial") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        let VEL = (LangStats.name == "Velocidad") ? `${LangStats.name}: ${StatsPokemon.base_stat}` : "";
                                        if (LangStats.language.name == "es" && LangStats.name == "PS") {
                                            // let allStats = [PS, AT, DF, EAT, EDF, VEL]
                                            document.querySelector("#cartaPokemon").innerHTML += `
                                            <div class="card bg-dark m-2" style="width: 17rem;">
                                                <img src="${dataPokemon2.sprites.other['official-artwork'].front_default}" class="card-img-top">
                                                    <div class="card-body d-flex justify-content-center align-items-center">
                                                        <h5 class="card-title text-white">${pokemon.name}</h5>
                                                    </div>
                                                <table class="table table-dark border-top d-flex justify-content-around">
                                                    <tbody>
                                                        <tr>
                                                            <td>${PS} / ${PS}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${PS} / ${PS}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>${PS} / ${PS}</td>
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
            paginacion(dataPokemon1.previous, dataPokemon1.next)
        })//1er dataPokemon1//
}//function//

function paginacion(previous, next) {
    let desacPrev = (previous == null) ? "disabled" : ""
    let desacNext = (next == null) ? "disabled" : ""
    document.getElementById("btnPaginacion").innerHTML = `
    <button class="btn btn-dark fs-4 rounded-5 ps-2" ${desacPrev} onclick="pokeApi('${previous}')"><img src="assets/img/pokeball.png" style="height: 2em; width: 2em;" class="me-2">Anterior</button>
    <button class="btn btn-dark fs-4 rounded-5 pe-2" ${desacNext} onclick="pokeApi('${next}')">Siguiente<img src="assets/img/pokeball.png" style="height: 2em; width: 2em;" class="ms-2"></button>`
}
pokeApi()

function busqueda() {
    let urlInicialBusqueda = "https://pokeapi.co/api/v2/pokemon"
    let busquedaUsuario = document.getElementById("inputBuscar").value
    let resultadoBusqueda = `${urlInicialBusqueda}/${busquedaUsuario}`
    pokeApi(resultadoBusqueda)
    console.log(resultadoBusqueda)
}