import { connect } from "react-redux";
import { requestPoke, requestAllPokemon } from "../../actions/pokemon_actions"
import PokemonDetail from "./pokemon_detail"

const mapStateToProps = (state, ownProps) => {
  return {
    // piece of state that container subscribes to
    poke: state.entities.pokemon[ownProps.match.params.id]
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  requestPoke: () => dispatch(requestPoke(ownProps.match.params.id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)