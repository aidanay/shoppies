<template>
  <div id="movie-container">
    <ul
      id="movies-list"
      class="flex overflow-x-auto scrolling-touch"
    >
      <li
        id="movie-item"
        v-for="item in moviesList.Search"
        :key="item"
        class="mx-2 rounded"
      >
      <Card :movie="item"/>
      <!--
        <div id="card">
          <div id="movie-poster">
            <img :src="`${item.Poster}`" class="w-32 h-40 rounded mr-10" />
          </div>
          <div id="movie-content">
            <h1 class="text-lg">{{ item.Title }}</h1>
            <h3 class="text-sm">Released: {{ item.Year }}</h3>
          </div>

          <button type="button" class="bg-yellow-200 border rounded px-4 py-2 hover:bg-yellow-400">Nominate</button>
        </div>
      -->
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "Movie",
  props: {
    moviesList: {
      type: Object,
      required: true,
    },
  },
  components: {
    Card,
  },
};
</script>

<style>
</style>