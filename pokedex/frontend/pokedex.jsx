import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store"
import Root from "./components/root"
import { HashRouter, Route } from "react-router-dom";

import fetchAllPokemon from "./util/api_util"
import test from "./actions/pokemon_actions"
import test2 from "./reducers/selectors"

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});