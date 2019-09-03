

export const fetchAllPokemon = () => (
  $.ajax({
    url: "/api/pokemon",
    method: "GET", 
  })
)

export const fetchPoke = (id) => (
  $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'GET'
  })
);

window.fetchAllPokemon = fetchAllPokemon;