import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <header>
        <h1>Pokemon App</h1>
        <Link to="/">Pokemons</Link> | <Link to="/types">Types</Link>
      </header>
    </div>
  );
}
