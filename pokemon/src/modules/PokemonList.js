import React, { Component } from "react";
import PokemonClass from "./PokemonClass";

export class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemonList) => (
      <div>
        <PokemonClass key={pokemonList.name} pokemonList={pokemonList} />
      </div>
    ));
  }
}

export default PokemonList;
