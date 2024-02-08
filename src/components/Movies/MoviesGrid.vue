<script setup>
import { computed } from "@vue/runtime-core";
import MovieItem from "./MovieItem.vue";

const props = defineProps({
  title: String,
  movies: Array,
  filter: {
    type: Number,
    default: 20,
  },
});

const filteredArray = computed(() => {
  if (props.filter === props.movies.length) return props.movies;

  const slices = props.movies.length - props.filter;

  return props.movies.slice(0, -slices);
});
</script>

<template>
  <div class="movies">
    <div class="container">
      <div class="movies__panel">
        <h1 class="movies__title">
          {{ title }}
        </h1>
      </div>
      <ul class="movies__list">
        <li v-for="movie in filteredArray" :key="movie.id">
          <MovieItem v-bind="movie" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "./MoviesGrid.scss";
</style>
