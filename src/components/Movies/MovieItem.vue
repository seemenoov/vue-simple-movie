<script setup>
import { computed } from "@vue/runtime-core";
const props = defineProps({
  id: Number,
  original_title: String,
  vote_average: Number,
  release_date: String,
  poster_path: String,
  first_air_date: String,
  name: String,
});

const ratings = computed(() => props.vote_average.toFixed(1));
const release = computed(() => {
  return new Date(props.release_date || props.first_air_date).getFullYear();
});
const isMovie = computed(() => {
  return props.first_air_date ? "tv" : "movie";
});
</script>

<template>
  <div class="movie-item">
    <router-link class="movie-item__link" :to="`/details/${id}`">
      <div class="movie-item__poster">
        <img
          v-if="poster_path"
          :src="`https://image.tmdb.org/t/p/w500${poster_path}`"
          :alt="original_title || name"
        />
      </div>
    </router-link>
    <h3 class="movie-item__caption">
      {{ original_title || name }}
    </h3>
    <div class="movie-item__info">
      <div class="movie-item__rating">
        {{ ratings }}
      </div>
      <div class="movie-item__date" v-if="release">
        {{ release }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./MovieItem.scss";
</style>
