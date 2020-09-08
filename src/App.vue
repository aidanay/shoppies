<template>
  <div id="app">
    <div id="app-wrapper" class="mx-24 my-10">
      <div id="heading" class="">
        <h1 class="text-3xl font-semibold text-center mb-2">The Shoppies</h1>
      </div>
      <div id="searchbar-wrapper" class="bg-white border shadow rounded px-5 py-5">
        <label for="searchbar" class="text-xl font-semibold">Movie Title</label>
        <div class="mt-2 flex flex-row">
          <button
            id="search-button"
            @click="searchMovies"
            class="px-4 py-2 bg-green-200 hover:bg-green-300 text-black font-semibold border rounded"
          >
            Search!
          </button>
          <input
            id="searchbar"
            type="text"
            v-model="search"
            class="flex-1 border rounded px-4 py-2 ml-2 w-1/2"
            placeholder="Type movie title here"
          />
        </div>
      </div>
      <div id="info" class="flex mt-5">
        <div id="results-wrapper" class="flex-1 bg-white border shadow rounded px-6 py-5 w-1/2">
          <h1 class="text-xl font-semibold">Results</h1>
          <div id="results-wrapper">
            <div v-if="JSON.stringify(moviesList) === '{}'" class="flex">
              <div
                class="bg-yellow-100 text-xl border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 rounded relative mb-4 "
                role="alert"
              >
                <span class="block sm:inline">No results yet.</span>
              </div>
            </div>
            <div v-else>
              <MovieComponent :moviesList="moviesList" class="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div id="nominations-wrapper" class="flex-1 bg-white border shadow rounded px-6 py-5 mt-5">
        <div class="flex">
          <h1 class="text-xl font-semibold">Nominations</h1>
          <div
            v-show="isDisabled"
            class="bg-yellow-100 text-xl border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 rounded relative"
            role="alert"
          >
            <span class="block sm:inline">Reached maximum number of nominations.</span>
          </div>
        </div>
        <div v-if="!isEmpty" class="flex">
          <div
            class="bg-yellow-100 text-xl border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <span class="block sm:inline">No nominations yet.</span>
          </div>
        </div>
        <div v-else>
          <NominationComponent class="mt-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComponent from '@/components/MovieComponent'
import NominationComponent from '@/components/NominationComponent'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    MovieComponent,
    NominationComponent,
  },
  data() {
    return {
      search: '',
      moviesList: {},
    }
  },
  methods: {
    async searchMovies() {
      try {
        let url = `https://www.omdbapi.com/?s=${this.search}&apikey=4c2958ff`
        let config = {
          headers: {
            Accept: 'application/json',
          },
        }
        await axios.get(url, config).then((response) => {
          this.moviesList = response.data
        })
      } catch (error) {
        console.error(error)
      }
    },
  },
  computed: {
    isDisabled() {
      let movies = this.$store.getters.getNominatedMovies

      if (movies.length >= 5) {
        return true
      } else {
        return false
      }
    },
    isEmpty() {
      let movies = this.$store.getters.getNominatedMovies

      if (movies.length === 1) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style></style>
