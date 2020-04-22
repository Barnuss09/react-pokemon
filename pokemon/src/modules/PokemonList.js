import React, { Component } from "react";
import PokemonClass from "./PokemonClass";

const PokemonList = (props) => {
  return props.pokemons.map((pokemonList) => (
    <React.Fragment>
      <PokemonClass key={pokemonList.name} pokemonList={pokemonList.url} />
    </React.Fragment>
  ));
};

export default PokemonList;
