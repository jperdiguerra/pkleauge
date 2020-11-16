<template>
  <div>
    <div v-if="imageSource">
      <img :src="imageSource" @click="showData">
      <div>{{ `Slot ${index + 1}` }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonItem",
  data() {
    return {};
  },
  props: {
    index: Number,
    pokemon: Object
  },
  computed: {
    imageSource() {
      return this.pokemon.sprites ? this.pokemon.sprites.front_default : null;
    },
    slotText() {
      return `Slot ${this.index + 1}`;
    }
  },
  methods: {
    showData() {
      this.$emit('show-data', this.index);
    }
  }
}
</script>

<style scoped>
img {
  cursor: pointer;
}
</style>
