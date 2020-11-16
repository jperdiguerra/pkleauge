import api from '../../api/pokemons';

const state = {
  pokemon: {}
};

const getters = {
  getPokemon: state => state.pokemon
};

const actions = {
  async fetchPokemon({ commit }, name) {
    const response = await api.fetchPokemon(name);
    let pokemon = response ? response.data : {};
    commit('setPokemon', pokemon);
  }
};

const mutations = {
  setPokemon: (state, pokemon) => {
    state.pokemon = pokemon;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
