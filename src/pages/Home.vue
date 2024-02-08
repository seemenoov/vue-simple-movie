<script setup>
import MoviesGrid from "@/components/Movies/MoviesGrid.vue";
import moviesService from "@/services/movies.js";
import { onMounted, ref, reactive } from "@vue/runtime-core";
const movies = ref([]);

const fetchData = async () => {
  movies.value = await moviesService.getMovies();
  console.log(movies.value);
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <MoviesGrid :filter="12" :movies="movies" title="Popular" />
</template>
