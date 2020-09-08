<template>
  <div id="movie-container">
    <ul id="movies-list" class="flex overflow-x-auto scrolling-touch">
      <li id="movie-item" v-for="(item, index) in moviesList.Search" :key="index" class="mx-2 rounded">
        <Card :movie="item" :nominateOrNot="true" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Movie',
  components: {
    Card,
  },
  props: {
    moviesList: {
      type: Object,
    },
  },
  methods: {
    nominateMovie() {
      this.$store.commit('addMovie', this.item)
    },
  },
}
</script>

<style></style>
