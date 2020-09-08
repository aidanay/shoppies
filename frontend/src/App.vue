<template>
  <div id="app">
    <div id="app-wrapper" class="mx-24">
      <div id="heading" class="mt-10">
        <h1 class="text-3xl font-semibold text-center">The Shoppies</h1>
      </div>
      <div id="searchbar-wrapper" class="bg-white border shadow rounded px-5 py-5">
        <label for="searchbar" class="text-xl">Movie Title</label>
        <div class="mt-2 flex flex-row">
          <button
            id="search-button"
            @click="searchMovies"
            class="px-4 py-2 bg-white hover:bg-gray-200 text-gray-800 font-semibold border rounded"
          >
            Search!
          </button>
          <input id="searchbar" type="text" v-model="search" class="flex-1 border rounded px-4 py-2 w-1/2" placeholder="Type movie title here" />
        </div>
      </div>
      <div id="info" class="flex mt-5">
        <div id="results-wrapper" class="flex-1 bg-white border shadow rounded px-6 py-5 w-1/2">
          <h1 class="text-xl font-semibold">Results</h1>
          <div id="results-wrapper">
            <MovieComponent :moviesList="moviesList" class="mt-4" />
          </div>
        </div>
      </div>
      <div id="nominations-wrapper" class="flex-1 bg-white border shadow rounded px-6 py-5 mt-5">
        <h1 class="text-xl font-semibold">Nominations</h1>
        <NominationComponent class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieComponent from '@/components/MovieComponent'
import NominationComponent from '@/components/NominationComponent'

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
    searchMovies() {
      let url = `http://www.omdbapi.com/?s=${this.search}&apikey=4c2958ff`
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.moviesList = data
        })
    },
  },
}
</script>

<style></style>
