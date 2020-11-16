<template>
  <div>
    <h5>Pokemon Data</h5>
    <div class="data">
      <div>
        <b>Name:</b> {{ pokemon.name }}
      </div>
      <div>
        <b>Nickname:</b>
        <input :value="pokemon.nickname" @input="debounceNickname" placeholder="nickname">
      </div>
      <div>
        <b>Favorite color:</b>
        <input :value="pokemon.favoriteColor" @input="debounceColor" placeholder="fav color">
      </div>
      <div>
        <b>Select moves to use (choose 3):</b>
        <button v-if="disabledMovesList" @click="clear">Reset moves</button>
        <div v-for="(move, index) in pokemon.moves" :key="index">
          <input type="checkbox"
            name="moves"
            :value="move.move.name"
            :id="move.move.name"
            :disabled="disabledMovesList"
            v-model="moves"
            @change="check"
          >
          <label :for="move.move.name">
            {{ move.move.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "PokemonData",
  data() {
    return {
      moves: []
    };
  },
  props: {
    pokemon: Object
  },
  computed: {
    disabledMovesList() {
      return this.moves.length > 2;
    }
  },
  methods: {
    debounceNickname: _.debounce(function(e) {
      this.$emit('add-nickname', e.target.value);        
    }, 500),
    debounceColor: _.debounce(function(e) {
      this.$emit('add-fav-color', e.target.value);
    }, 500),
    check() {
      this.$emit('update-move-list', this.moves);
    },
    clear() {
      this.moves = [];
      this.$emit('update-move-list', this.moves);
    }
  },
  watch: {
    pokemon(newVal) {
      let nval = newVal.movesList ? newVal.movesList : [];
      this.moves = nval;
    }
  }
}
</script>

<style scoped>
label {
  margin-left: 10px;
}

button {
  background-color: cadetblue;
  color: white;
  width: 120px;
  border: 1px solid black;
  margin: 5px;
}

.data {
  text-align: left;
}
</style>
