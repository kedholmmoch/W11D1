import React from "react";
import { Link } from "react-router-dom";

export default class PokemonIndexItem extends React.Component {
  render() {
    const poke = this.props.poke
    return (
      <li>
        <Link to={`/pokemon/${poke.id}`}>{poke.name}</Link>
        <img src={poke.image_url} alt={poke.name} />
      </li>
    );
  }
}