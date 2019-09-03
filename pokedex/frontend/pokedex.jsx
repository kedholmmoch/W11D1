import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"

import fetchAllPokemon from "./util/api_util"
import test from "./actions/pokemon_actions"

document.addEventListener('DOMContentLoaded', () => {

  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});