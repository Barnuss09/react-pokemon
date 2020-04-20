import React, { Component } from "react";
import axios from "axios";

export class PokemonClass extends Component {
  state = {
    name: String,
    img: String,
  };

  componentDidMount() {
    let urlString = this.props.pokemonList;
    axios.get(urlString).then((res) =>
      this.setState({
        name: res.data.name,
        img: res.data.sprites.front_default,
      })
    );
  }

  render() {
    console.log(this.state.img);
    return (
      <div>
        <p>{this.state.name}</p>
        <img src={this.state.img} alt="" />
      </div>
    );
  }
}

export default PokemonClass;
