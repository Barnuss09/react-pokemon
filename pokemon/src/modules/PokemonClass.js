import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <Link to={`/pokemon/${state.id}`}>{state.name}</Link>
      <img src={state.img} alt="" />
    </div>
  );
};

export default PokemonClass;
