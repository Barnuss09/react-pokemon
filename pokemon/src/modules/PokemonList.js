import React, { Component } from "react";

export class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <div>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.url} alt={pokemon.name + " picture"}></img>
      </div>
    ));
  }
}

export default PokemonList;
