<template>
  <div
    id="card"
    class="bg-white rounded border-l border-r border-t border-gray-400"
  >
    <div class="w-48 overflow-hidden rounded">
      <img
        class="w-48 h-56 object-fill"
        :src="`${movie.Poster}`"
        :alt="`${movie.Title} Poster`"
      />
      <div id="movie-info" class="my-4">
        <h1 id="movie-title" class="font-semibold text-lg w-full text-center">
          {{ movie.Title }}
        </h1>
        <h2 id="movie-release" class="text-center">
          Released: {{ movie.Year }}
        </h2>
      </div>

      <div id="button" class="">
        <div id="nominate-button-wrapper" v-show="nominateOrNot">
          <div
            id="nominate-button-clickable"
            v-if="!isDisabled && !movie.isNominated"
            class="flex"
          >
            <button
              :id="`nominate-button-${movie.imdbID}`"
              type="button"
              class="py-2 bg-blue-100 hover:bg-blue-200 border border-blue-400 rounded font-semibold text-blue-700 flex-auto"
              @click="nominateMovie"
            >
              Nominate
            </button>
          </div>
          <div id="nominate-button-unclickable" v-else class="flex">
            <button
              type="button"
              class="py-2 bg-blue-100 border border-blue-400 rounded font-semibold text-blue-700 opacity-50 cursor-not-allowed flex-auto"
            >
              Nominate
            </button>
          </div>
        </div>

        <div id="unnominate-button-wrapper">
          <div v-show="!nominateOrNot" class="flex">
            <button
              type="button"
              class="py-2 bg-red-100 hover:bg-red-200 border border-red-400 rounded font-semibold text-red-700 flex-auto"
              @click="unNominateMovie"
            >
              Un-Nominate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    movie: {
      type: Object,
      required: true,
    },
    nominateOrNot: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    nominateMovie() {
      this.$store.commit("addMovie", this.movie);
    },
    unNominateMovie() {
      this.$store.commit("removeMovie", this.movie.imdbID);
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
  },
};
</script>
