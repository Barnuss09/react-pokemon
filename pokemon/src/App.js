import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import PokemonList from "./modules/PokemonList";
import axios from "axios";
import TypeList from "./modules/TypeList";
import NavBar from "./modules/NavBar";
import PokemonDetails from "./modules/PokemonDetails";

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
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <PokemonList pokemons={this.state.pokemondata} />
              </React.Fragment>
            )}
          />
          <Route
            path="/types"
            render={(props) => (
              <TypeList
                key={this.state.typedata.name}
                types={this.state.typedata}
              />
            )}
          />
          <Route path="/pokemon/:name" component={PokemonDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
