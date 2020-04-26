import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "./Background";
import StyledLink from "./StyledLink";

const Card = styled.div`
  padding: 2px 5px;
  background: yellow;
  border: 1px solid black;
  width: auto;
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
        <Card>
          <div>
            <Link to={`/pokemon/${state.id}`}>
              <StyledLink>{state.name}</StyledLink>
            </Link>
            <img src={state.img} alt="" />
          </div>
        </Card>
      </Background>
    </div>
  );
};

export default PokemonClass;
