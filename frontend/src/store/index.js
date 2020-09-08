import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nominatedMovies: [],
  },
  mutations: {
    // sync
    addMovie(state, payload) {
      state.nominatedMovies.push(payload)
    },
  },
  actions: {
    // async
  },
  modules: {},
  getters: {
    getNominatedMovies: (state) => state.nominatedMovies,
  },
})
