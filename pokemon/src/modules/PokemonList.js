import React from "react";
import PokemonClass from "./PokemonClass";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 30% 30% 30%;
`;

const PokemonList = (props) => {
  return (
    <React.Fragment>
      <Grid>
        {props.pokemons.map((pokemonList) => (
          <PokemonClass key={pokemonList.name} pokemonList={pokemonList.url} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default PokemonList;
