<template>
  <div id="card" class="bg-gray-200 rounded border">
    <div class="w-48 overflow-hidden  rounded">
      <img class="w-48 h-56 object-fill" :src="`${movie.Poster}`" :alt="`${movie.Title} Poster`" />
      <div id="movie-info" class="my-4">
        <h1 id="movie-title" class="font-semibold text-lg w-full text-center">
          {{ movie.Title }}
        </h1>
        <h2 id="movie-release" class="text-center">Released: {{ movie.Year }}</h2>
      </div>
      <div id="button" class="">
        <div v-show="nominateOrNot" class="flex">
          <button
            v-show="!isDisabled"
            id="nominateBtn"
            type="button"
            class="py-2 bg-white border-blue-200 font-semibold bg-blue-200 hover:bg-blue-300 flex-auto"
            @click="nominateMovie"
          >
            Nominate
          </button>
          <button
            v-show="isDisabled"
            type="button"
            class="py-2 bg-white border font-semibold bg-blue-200 opacity-50 cursor-not-allowed flex-auto"
          >
            Nominate
          </button>
        </div>
        <div v-show="!nominateOrNot" class="flex">
          <button
            type="button"
            class="py-2 border-red-200 font-semibold bg-red-200 hover:bg-red-300 flex-auto"
            @click="unNominateMovie"
          >
            Un-Nominate
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
  data() {
    return {}
  },
  methods: {
    nominateMovie() {
      this.$store.commit('addMovie', this.movie)
    },
    unNominateMovie() {
      this.$store.commit('removeMovie', this.movie.Title)
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
  },
}
</script>

<style></style>
