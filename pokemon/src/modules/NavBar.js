import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  font-size: 20;
  background: yellow;
  padding: 10px;
  border-bottom: 5px solid black;
`;

export default function NavBar() {
  return (
    <div>
      <Header>
        <h1> Pokemon App </h1> <Link to="/"> Pokemons </Link> |
        <Link to="/types">Types</Link>
      </Header>
    </div>
  );
}
