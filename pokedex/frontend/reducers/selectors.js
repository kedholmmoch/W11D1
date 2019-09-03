
export const selectAllPokemon = state => {
  return Object.values(state.entities.pokemon);
}

export const selectPokeItems = (state, id) => {
  let result = [];
  
}

window.selectAllPokemon = selectAllPokemon;