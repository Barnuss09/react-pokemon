import React, { Component } from "react";
import "./App.css";
import PokemonList from "./modules/PokemonList";
import axios from "axios";
import TypeList from "./modules/TypeList";
import Pokemon from "./modules/Pokemon";
import PokemonClass from "./modules/PokemonClass";

class App extends Component {
  state = {
    pokemondata: [],
    typedata: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemondata: res.data.results }));

    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ typedata: res.data.results }));
  }

  render() {
    return (
      <div className="App">
        <PokemonList pokemons={this.state.pokemondata} />
        <TypeList types={this.state.typedata} />
      </div>
    );
  }
}

export default App;
