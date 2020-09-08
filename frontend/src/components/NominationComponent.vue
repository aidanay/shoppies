<template>
  <div id="nomination-container">
    <ul id="movies-list" class="flex overflow-x-auto scrolling-touch">
      <li id="movie-item" v-for="(item, index) in nominatedMovies" :key="index" class="mx-2 rounded">
        <Card :movie="item" :nominateOrNot="false" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'NominationComponent',
  components: { Card },
  computed: {
    nominatedMovies() {
      return this.$store.getters.getNominatedMovies
    },

  },
}
</script>

<style></style>
