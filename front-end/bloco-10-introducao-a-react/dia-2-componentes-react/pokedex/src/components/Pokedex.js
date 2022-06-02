import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data.js"
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    return(
      <div className="pokedex">
        {pokemons.map(item => <Pokemon pokemonInfo={item} key={item.id}/>)}
      </div>
    )
  }
}

export default Pokedex;