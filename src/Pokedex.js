import React from "react";
import Pokecard from "./Pokecard";
import pokemonList from "./pokemon"

function Pokedex() {
    return (
        <div className="pokedex-container">
            <div className="pokedex">
                {pokemonList.pokemon.map(p => (
                    <Pokecard 
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;
