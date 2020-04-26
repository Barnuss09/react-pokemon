import React from "react";
import PokemonClass from "./PokemonClass";
import styled from "styled-components";

const Grid = styled.div`
  background: #ffec59;
  position: relative;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: minmax(50px, auto);
  grid-auto-flow: dense;
  grid-gap: 10px;
  margin: 5%px;
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
