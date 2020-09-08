<template>
  <div id="card" class="bg-gray-200">
    <div class="w-48 overflow-hidden border rounded">
      <img class="w-48 h-56 object-fill" :src="`${movie.Poster}`" :alt="`${movie.Title} Poster`" />
      <div id="movie-info" class="my-4">
        <h1 id="movie-title" class="font-semibold text-lg mb-2 w-full text-center">
          {{ movie.Title }}
        </h1>
        <h2 id="movie-release" class="text-center">Released: {{ movie.Year }}</h2>
      </div>
      <div id="button" class="flex bg-red-200">
        <button
          v-if="nominateOrNot"
          type="button"
          class="flex-1 py-2 bg-white border hover:bg-gray-100"
          @click="nominateMovie"
        >
          Nominate
        </button>
        <button
          v-else
          type="button"
          class="flex-1 py-2 bg-white border hover:bg-gray-100"
          @click="unNominateMovie"
        >
          Un-Nominate
        </button>
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
  methods: {
    nominateMovie() {
      this.$store.commit('addMovie', this.movie)
    },
    unNominateMovie() {
      this.$store.commit('removeMovie', this.movie.Title)
    },
  },
}
</script>

<style></style>
