<template>
  <div class="pokemon">
    <img v-if="imageSource" :src="imageSource">
    <div>Name: {{ pokemonName }}</div>
    <div>
      Stats:
      <div v-for="stat in stats" :key="stat.stat.name">
        {{ `${stat.stat.name} : ${stat.base_stat}` }}
      </div>
    </div>
    <div>
      Abilities:
      <div v-for="ability in abilities" :key="ability.ability.name">
        {{ `> ${ability.ability.name}` }}
      </div>
    </div>
    <div>
      Moves:
      <div v-for="move in moves" :key="move.move.name">
        {{ `> ${move.move.name}` }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokedexItem",
  props: {
    pokemon: Object
  },
  computed: {
    pokemonName() {
      return this.pokemon.name;
    },
    imageSource() {
      return this.pokemon.sprites ? this.pokemon.sprites.front_default : null;
    },
    stats() {
      return this.pokemon.stats ? this.pokemon.stats : [];
    },
    abilities() {
      return this.pokemon.abilities ? this.pokemon.abilities : [];
    },
    moves() {
      // let's just show the first 3 moves
      if (this.pokemon.moves) {
        let pokeMoves = this.pokemon.moves;
        return pokeMoves.length > 3 ? pokeMoves.slice(0, 3) : pokeMoves;
      } else {
        return [];  
      }
    }
  }
}
</script>

<style scoped>
img {
  height: 96px;
  width: 96px;
}

.pokemon {
  display: flex;
}
</style>
