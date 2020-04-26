import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "./StyledLink";

const Header = styled.header`
  font-size: 20;
  background: ${(props) => props.theme.cardBackground};
  border-bottom: 5px solid black;
  padding: 10px;
  width: 100%;
`;

export default function NavBar() {
  return (
    <div>
      <Header>
        <h1> Pokemon App </h1>
        <Link to="/">
          <StyledLink>Pokemons</StyledLink>
        </Link>{" "}
        |{" "}
        <Link to="/types">
          <StyledLink>Types </StyledLink>
        </Link>
      </Header>
    </div>
  );
}
