import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
  Object.freeze(state)

  let newState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_POKEMON:
      newState = action.pokemon;
      return newState;
    case RECEIVE_POKE:
      newState[action.poke.pokemon.id] = action.poke.pokemon;
      newState[action.poke.pokemon.id]["items"] = Object.keys(action.poke.items)
      return newState;
    default:
      return state;
  }
}

export default pokemonReducer;