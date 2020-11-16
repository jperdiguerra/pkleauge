<template>
  <div id="app" class="container">
    <div class="col-lineup">
      <PokemonList class="lineup" 
        :pokemons="pokemons"
        @show-data="onShowData"
      ></PokemonList>
      <PokemonData class="data" 
        v-if="selectedPokemon.name"
        :pokemon="selectedPokemon"
        @add-nickname="addNickname"
        @add-fav-color="addFavColor"
        @update-move-list="updateMoveslist"
      ></PokemonData>
    </div>
    <Pokedex class="col-pokedex" @add-to-slot="onAddToSlot"></Pokedex>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import Pokedex from './components/Pokedex';
import PokemonList from './components/PokemonList';
import PokemonData from './components/PokemonData';

export default {
  name: 'App',
  data() {
    return {
      pokemons: [{}, {}, {}, {}, {}, {}],
      selectedPokemon: {}
    };
  },
  components: {
    Pokedex,
    PokemonList,
    PokemonData
  },
  computed: {
    ...mapGetters(['getPokemon'])
  },
  methods: {
    onAddToSlot(slot) {
      let idx = slot - 1;
      this.selectedPokemon = {};
      Vue.set(this.pokemons, idx, this.getPokemon);
    },
    onShowData(index) {
      this.selectedPokemon = this.pokemons[index];
    },
    addNickname(nickname) {
      this.selectedPokemon.nickname = nickname;
    },
    addFavColor(color) {
      this.selectedPokemon.favoriteColor = color;
    },
    updateMoveslist(moves) {
      this.selectedPokemon.movesList = moves;
    }
  },
  created() {
    
  },
  watch: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  margin-top: 30px;
  border: solid 1px black;
  display: flex;
}

.col-pokedex {
  width: 70%;
}

.col-lineup {
  width: 30%;
}

.lineup {
  padding: 20px;
}

.data {
  padding: 20px;
}
</style>
