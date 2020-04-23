import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "./Background";

const StyledLink = styled.a`
  color: black;
  padding: 0px;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const PokemonClass = (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    let urlString = props.pokemonList;
    axios.get(urlString).then((res) =>
      setState({
        name: res.data.name,
        img: res.data.sprites.front_default,
        id: res.data.id,
      })
    );
  });

  return (
    <div>
      <Background>
        <Link to={`/pokemon/${state.id}`}>
          <StyledLink>{state.name}</StyledLink>
        </Link>
        <img src={state.img} alt="" />
      </Background>
    </div>
  );
};

export default PokemonClass;
