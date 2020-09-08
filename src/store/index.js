import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMovies: [],
    nominatedMovies: [],
  },
  mutations: {
    addAllMovies(state, payload) {
      const moviesArr = []
      for (let i = 0; i < payload.length; i++) {
        moviesArr.push(payload[i])
      }

      let newArr = moviesArr.map((e) => ({ ...e, isNominated: false }))

      state.allMovies = newArr
    },
    addMovie(state, payload) {
      payload.isNominated = true
      state.nominatedMovies.push(payload)
    },
    removeMovie(state, id) {
      let index = state.nominatedMovies.findIndex((m) => m.imdbID === id)
      state.nominatedMovies[index].isNominated = false
      state.nominatedMovies.splice(index, 1)
    },
  },
  getters: {
    getNominatedMovies: (state) => state.nominatedMovies,
    allMovies: (state) => state.allMovies,
  },
})
