import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = (props) => {
  const [state, setState] = useState({
    name: String,
    id: String,
    height: String,
    weight: String,
    img: String,
  });

  useEffect(() => {
    let urlString = `https://pokeapi.co/api/v2/pokemon/${props.match.params.name}`;
    axios.get(urlString).then((res) =>
      setState({
        name: res.data.name,
        img: res.data.sprites.front_default,
        height: res.data.height,
        weight: res.data.weight,
        id: res.data.id,
      })
    );
  }, []);

  return (
    <div>
      <img src={state.img} alt="" />
      <ul>
        <li>Name: {state.name}</li>
        <li>Id: {state.id}</li>
        <li>Height: {state.height}</li>
        <li>Weight: {state.weight}</li>
      </ul>
    </div>
  );
};

export default PokemonDetails;
