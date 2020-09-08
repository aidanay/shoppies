<template>
  <div id="card" class="bg-gray-200 shadow">
    <div class="w-48 overflow-hidden border rounded">
      <img
        class="w-48 h-56 object-cover"
        :src="`${movie.Poster}`"
        :alt="`${movie.Title} Poster`"
      />
      <div id="movie-info" class="my-4">
        <h1
          id="movie-title"
          class="font-semibold text-lg mb-2 w-full text-center"
        >
          {{ movie.Title }}
        </h1>
        <h2 id="movie-release" class="text-center">
          Released: {{ movie.Year }}
        </h2>
      </div>
      <div id="button" class="flex bg-red-200">
        <button type="button" class="flex-1 py-2 bg-white border">Nominate</button>
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
  },
};
</script>

<style>
</style>