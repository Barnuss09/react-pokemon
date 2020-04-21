import React, { Component } from "react";
import axios from "axios";

export class PokemonDetails extends Component {
  state = {
    name: String,
    id: String,
    height: String,
    weight: String,
    img: String,
  };

  componentDidMount() {
    let urlString = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.name}`;
    axios.get(urlString).then((res) =>
      this.setState({
        name: res.data.name,
        img: res.data.sprites.front_default,
        height: res.data.height,
        weight: res.data.weight,
        id: res.data.id,
      })
    );
  }
  render() {
    return (
      <div>
        <img src={this.state.img} alt="" />
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Id: {this.state.id}</li>
          <li>Height: {this.state.height}</li>
          <li>Weight: {this.state.weight}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetails;
