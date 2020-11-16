import Vuex from 'vuex';
import Vue from 'vue';
import pokemon from './modules/pokemons';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon
  }
});
