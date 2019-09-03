import React from "react";
import PokemonIndexItem from "./pokemon_index_item"

export default class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="pokedex">
        {
          this.props.pokemon.map((poke) => {
            return (
              <PokemonIndexItem poke={poke} key={poke.id}/>
            );
          })
        }
      </ul>
    );
  }
}