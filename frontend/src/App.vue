<template>
  <div id="app">
    <div id="app-wrapper" class="mx-24">
      <div id="heading" class="">
        <h1>The Shoppies</h1>
      </div>
      <div
        id="searchbar-wrapper"
        class="bg-white border shadow rounded px-5 py-5"
      >
        <label for="searchbar">Movie Title</label>
        <br />
        <input
          id="searchbar"
          type="text"
          v-model="search"
          class="border rounded"
        />
        <button
          id="search-button"
          @click="searchMovies"
          class="rounded-lg px-4 py-3 bg-white hover:bg-gray-200 text-gray-800 font-semibold leading-tight shadow-md"
        >
          Search!
        </button>
      </div>
      <div id="info" class="flex mt-5">
        <div
          id="results-wrapper"
          class="flex-1 bg-white border shadow rounded px-6 py-5 w-1/2"
        >
          <h1 class="text-xl">Results</h1>
          <div id="results-wrapper">
            <MovieComponent :moviesList="moviesList" class="mt-2" />
          </div>
        </div>
      </div>
      <div
        id="nominations-wrapper"
        class="flex-1 bg-white border shadow rounded px-6 py-5 mt-5"
      >
        <h1 class="text-xl">Nominations</h1>
        <ul class="flex justify-start mt-2">
          <li class="mx-2">
            <div class="border rounded bg-gray-200 w-32 h-40 mx-auto"></div>
          </li>
        </ul>
        <!--<NomianationComponent -->
      </div>
      <div id="test" class="mt-10">
        <Card />
      </div>
      <div class="p-10"></div>
    </div>
  </div>
</template>

<script>
import MovieComponent from "@/components/MovieComponent";
import Card from "@/components/Card";

export default {
  name: "App",
  components: {
    MovieComponent,
    Card,
  },
  data() {
    return {
      search: "",
      moviesList: [],
    };
  },
  methods: {
    searchMovies() {
      let url = `http://www.omdbapi.com/?s=${this.search}&apikey=4c2958ff`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.moviesList = data;
        });
    },
  },
};
</script>

<style>
</style>
