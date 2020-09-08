import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMovies: [],
    nominatedMovies: [],
  },
  mutations: {
    // sync
    addAllMovies(state, payload) {
      state.allMovies.push(payload)
    },
    addMovie(state, payload) {
      state.nominatedMovies.push(payload)
    },
    removeMovie(state, id) {
      let index = state.nominatedMovies.findIndex((m) => m.imdbID === id)
      state.nominatedMovies.splice(index, 1)
    },
  },
  actions: {
    // async
  },
  modules: {},
  getters: {
    getNominatedMovies: (state) => state.nominatedMovies,
    allMovies: (state) => state.allMovies,
  },
})
