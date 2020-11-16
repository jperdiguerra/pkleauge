<template>
  <div>
    <h5>Pokemon Lineup</h5>
    <div class="lineup-container">
      <PokemonItem
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :index="index"
        :pokemon="pokemon"
        @show-data="showData"
      ></PokemonItem>
    </div>
  </div>
</template>

<script>
import PokemonItem from './PokemonItem';

export default {
  name: "PokemonList",
  components: {
    PokemonItem
  },
  data() {
    return {};
  },
  props: {
    pokemons: Array
  },
  methods: {
    showData(index) {
      this.$emit('show-data', index);
    }
  }
}
</script>

<style scoped>
.lineup-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
