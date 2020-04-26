import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import PokemonList from "./modules/PokemonList";
import axios from "axios";
import TypeList from "./modules/TypeList";
import NavBar from "./modules/NavBar";
import PokemonDetails from "./modules/PokemonDetails";
import Background from "./modules/Background";
import { ThemeProvider } from "styled-components";

const defaultTheme = {
  background: "#ffec59",
  cardBackground: "yellow",
};

const blackandwhiteTheme = {
  background: "LightGray",
  cardBackground: "grey",
};

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
      <ThemeProvider theme={blackandwhiteTheme}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Background>
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <PokemonList
                      key={this.state.pokemondata.name}
                      pokemons={this.state.pokemondata}
                    />
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
            </Background>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
