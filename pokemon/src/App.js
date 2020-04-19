import React, { Component } from "react";
import "./App.css";
import PokemonList from "./modules/PokemonList";
import axios from "axios";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ data: res.data.results }));
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="App">
        <PokemonList pokemons={this.state.data} />
      </div>
    );
  }
}

export default App;
