import React, { Component } from "react";

export class PokemonClass extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.pokemonList.name}</h3>
      </div>
    );
  }
}

export default PokemonClass;
