import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const uiReducer = (state = {}, action) => {
  Object.freeze(state)

  let newState = Object.assign({}, state);

  switch (action.type) {
    // case RECEIVE_POKE:
    //   debugger;
    //   newState = action.poke.items;
    //   return newState;
    default:
      return state;
  }
}

export default uiReducer;