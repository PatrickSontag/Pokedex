import React from "react";

const pokemonAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({id, name, type, base_experience}) {

    let pokemonImage = `${pokemonAPI}${id}.png`

    return (
        <div>
            <div>{name}</div>
            <img>{pokemonImage}</img>
            <div>{id}</div>
            <div>{type}</div>
            <div>{base_experience}</div>
        </div>
    );
}

export default Pokecard;