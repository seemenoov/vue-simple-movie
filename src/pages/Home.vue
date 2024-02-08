<script setup>
import MoviesGrid from "@/components/Movies/MoviesGrid.vue";
import moviesService from "@/services/movies.js";
import { onMounted, ref, reactive } from "@vue/runtime-core";

const list = ref([]);
const listInfo = [
  "Popular Movies",
  "Top Rated Movies",
  "Upcoming Movies",
  "Serials",
];

const fetchData = async () => {
  list.value = await Promise.all([
    moviesService.getMovies("movie", "popular"),
    moviesService.getMovies("movie", "top_rated"),
    moviesService.getMovies("movie", "upcoming"),
    moviesService.getMovies("tv", "popular"),
  ]);
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="home">
    <div class="home__featured" v-for="(item, index) in list" :key="index">
      <MoviesGrid :filter="12" :movies="item" :title="listInfo[index]" />
    </div>
  </div>
</template>
