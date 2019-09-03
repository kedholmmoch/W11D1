import { RECEIVE_POKE } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state)

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POKE:
      newState = action.poke.items;
      return newState;
    default:
      return state;
  }
}

export default itemsReducer;