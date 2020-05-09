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
  const [currentTheme, setTheme] = useState(defaultTheme);

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

  console.log(currentTheme);

  if (loadPokemon && loadType) {
    return (
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <button
              onClick={(e) =>
                setTheme(
                  currentTheme.background === defaultTheme.background
                    ? {
                        background: blackandwhiteTheme.background,
                        cardBackground: blackandwhiteTheme.cardBackground,
                      }
                    : {
                        background: defaultTheme.background,
                        cardBackground: defaultTheme.cardBackground,
                      }
                )
              }
            >
              Toggle theme
            </button>
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
