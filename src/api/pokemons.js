import axios from 'axios';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon';

export default {
  fetchPokemon(name) {
    return axios
      .get(`${POKEAPI_URL}/${name}`)
      .then(response => (response))
      .catch(error => console.log(error));
  }
};
