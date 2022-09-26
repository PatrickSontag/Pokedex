import React from "react";

const pokemonAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({id, name, type, base_experience}) {

    let pokemonImage = `${pokemonAPI}${id}.png`

    return (
        <div className="pokecard">
            <div className="name">{name}</div>
            <img src={pokemonImage} alt={name}></img>
            <div>ID: {id}</div>
            <div>Type: {type}</div>
            <div>XP: {base_experience}</div>
        </div>
    );
}

export default Pokecard;