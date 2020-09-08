<template>
  <div id="movie-container">
    <ul id="movies-list" class="flex overflow-x-auto scrolling-touch">
      <li
        id="movie-item"
        v-for="(item, index) in allMovies"
        :key="index"
        class="mx-2 rounded"
      >
        <!-- {{ item }} -->
        <Card :movie="item" :nominateOrNot="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Test",
  components: {
    Card,
  },
  computed: {
    allMovies() {
      return this.$store.getters.allMovies;
    },
  },
};
</script>

<style></style>
