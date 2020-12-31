<template>
  <div id="app">
    <div id="app-wrapper" class="mx-3 sm:mx-24 my-8 sm:my-10 lg:mx-40 xl:mx-64">
      <div id="heading" class="mb-4">
        <h1 class="text-2xl sm:text-3xl font-semibold text-center mb-2">
          🏆 The Oscars 🏆
        </h1>
      </div>
      <div
        id="searchbar-wrapper"
        class="bg-white border shadow rounded px-5 py-5"
      >
        <label for="searchbar" class="text-lg sm:text-xl font-semibold"
          >🎥 Movie Title</label
        >
        <div class="mt-2 flex flex-row">
          <button
            id="search-button"
            @click="searchMovies"
            class="text-base sm:text-l px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 font-semibold border border-green-400 rounded"
          >
            Search!
          </button>
          <input
            id="searchbar"
            type="text"
            v-model="search"
            class="flex-1 border border-gray-400 text-gray-700 rounded px-4 py-2 ml-2 w-1/2"
            placeholder="Type movie title here"
            @keyup="handle"
          />
        </div>
      </div>
      <div id="info" class="flex mt-5">
        <div
          id="results-wrapper"
          class="flex-1 bg-white border shadow rounded px-6 py-5 w-1/2"
        >
          <h1 class="text-lg sm:text-xl font-semibold">🎞️ Results</h1>
          <div id="results-wrapper">
            <div v-if="!allMoviesCount" class="flex">
              <div
                class="bg-yellow-100 text-base sm:text-lg border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 rounded relative mt-4"
                role="alert"
              >
                <span class="block sm:inline">No results yet.</span>
              </div>
            </div>
            <div v-else>
              <MovieComponent class="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="nominations-wrapper"
        class="flex-1 bg-white border shadow rounded px-6 py-5 mt-5"
      >
        <div class="">
          <h1 class="text-xl font-semibold">🏆 Nominations</h1>
        </div>
        <div v-show="isDisabled" class="flex">
          <div
            class="bg-yellow-100 text-base sm:text-lg border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 mt-4 rounded relative"
            role="alert"
          >
            <span class="block sm:inline text-center"
              >Reached max of 5 nominations.</span
            >
          </div>
        </div>
        <div v-if="!isEmpty" class="flex">
          <div
            class="bg-yellow-100 text-base sm:text-lg border border-yellow-400 text-yellow-700 mx-auto px-4 py-3 mt-4 rounded relative"
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
import MovieComponent from "@/components/MovieComponent";
import NominationComponent from "@/components/NominationComponent";
import axios from "axios";

export default {
  name: "App",
  components: {
    MovieComponent,
    NominationComponent,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    async searchMovies() {
      try {
        let searchTrimmed = this.search.trim()
        let url = `https://www.omdbapi.com/?s=${searchTrimmed}&apikey=${process.env.VUE_APP_API_KEY}`;
        let config = {
          headers: {
            Accept: "application/json",
          },
        };
        await axios.get(url, config).then((response) => {
          this.$store.commit("addAllMovies", response.data.Search);
        });

        this.search = "";
      } catch (error) {
        console.error(error);
      }
    },
    handle(e) {
      if (e.keyCode === 13) {
        this.searchMovies();
      }
    },
  },
  computed: {
    isDisabled() {
      let movies = this.$store.getters.getNominatedMovies;

      if (movies.length >= 5) {
        return true;
      } else {
        return false;
      }
    },
    isEmpty() {
      let movies = this.$store.getters.getNominatedMovies;

      if (movies.length >= 1) {
        return true;
      } else {
        return false;
      }
    },
    allMovies() {
      return this.$store.getters.allMovies;
    },
    allMoviesCount() {
      let moviesCount = this.$store.getters.allMovies.length;
      return moviesCount;
    },
  },
};
</script>

<style></style>
