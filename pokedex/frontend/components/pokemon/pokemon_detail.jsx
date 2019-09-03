import React from "react"

export default class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestPoke();
  }

  componentDidUpdate() {
    this.props.requestPoke();
  }

  render() {
    const poke = this.props.poke
    console.log(poke)
    return (
      <div>
        {(poke && poke.moves) && <div>

          <h3>{poke.name}</h3>
          <ul>
            <li>Type: {poke.poke_type}</li>
            <li>Attack: {poke.attack}</li>
            <li>Defense: {poke.defense}</li>
            <li>Moves:
              <ul>
                {poke.moves.map((move, idx) => <li key={idx} >{move}</li>)}
              </ul>
            </li>
            <li>Items
              <ul>
                {poke.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </li>
          </ul>
        </div>}
      </div>
    );
  }
}