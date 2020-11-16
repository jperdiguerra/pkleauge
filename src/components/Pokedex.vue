<template>
  <div class="pokedex">
    <input v-model="pokemonName" @input="debounceInput" placeholder="Search Pokemon">
    <PokedexItem v-if="pokemonFound" :pokemon="getPokemon"></PokedexItem>
    <div v-if="pokemonFound" class="slots">
      Add to slot:
      <div class="slots-row">
        <div><button @click="onClick(1)">1</button></div>
        <div><button @click="onClick(2)">2</button></div>
        <div><button @click="onClick(3)">3</button></div>
      </div>
      <div class="slots-row">
        <div><button @click="onClick(4)">4</button></div>
        <div><button @click="onClick(5)">5</button></div>
        <div><button @click="onClick(6)">6</button></div>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PokedexItem from './PokedexItem';
import _ from 'lodash';

export default {
  name: "Pokedex",
  components: {
    PokedexItem
  },
  data() {
    return {
      pokemonName: ''
    };
  },
  props: {
  },
  computed: {
    ...mapGetters(['getPokemon']),
    pokemonFound() {
      return this.getPokemon && this.getPokemon.name;
    }
  },
  methods: {
    ...mapActions(['fetchPokemon']),
    debounceInput: _.debounce(function() {
      if(this.pokemonName.length > 0) {
        this.fetchPokemon(this.pokemonName.toLowerCase());
      }
    }, 500),
    onClick(slot) {
      this.$emit('add-to-slot', slot);
    }
  }
}
</script>

<style scoped>
button {
  background-color: green;
  color: white;
  width: 50px;
  border: 1px solid black;
  margin: 5px;
}
.pokedex {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.slots {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.slots-row {
  display: flex;
}
</style>
