import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class PokemonClass extends Component {
  state = {
    name: String,
    img: String,
    id: String,
  };

  componentDidMount() {
    let urlString = this.props.pokemonList;
    axios.get(urlString).then((res) =>
      this.setState({
        name: res.data.name,
        img: res.data.sprites.front_default,
        id: res.data.id,
      })
    );
  }

  render() {
    return (
      <div>
        <Link to={`/pokemon/${this.state.id}`}>{this.state.name}</Link>
        <img src={this.state.img} alt="" />
      </div>
    );
  }
}

export default PokemonClass;
