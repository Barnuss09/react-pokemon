import React, { useState, useEffect } from "react";
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

const App = () => {
  const [pokemondata, setPokemondata] = useState([]);
  const [typedata, setTypedata] = useState([]);
  const [loadPokemon, setLoadPokemon] = useState(false);
  const [loadType, setLoadType] = useState(false);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemondata(res.data.results);
      setLoadPokemon(true);
    });

    axios.get("https://pokeapi.co/api/v2/type").then((res) => {
      setTypedata(res.data.results);
      setLoadType(true);
    });
  }, []);

  if (loadPokemon && loadType) {
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
                      key={pokemondata.name}
                      pokemons={pokemondata}
                    />
                  </React.Fragment>
                )}
              />
              <Route
                path="/types"
                render={(props) => (
                  <TypeList key={typedata.name} types={typedata} />
                )}
              />
              <Route path="/pokemon/:name" component={PokemonDetails} />
            </Background>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  } else {
    return "Loading..";
  }
};

export default App;
