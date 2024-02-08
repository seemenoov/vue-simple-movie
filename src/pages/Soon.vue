<script setup>
import MoviesGrid from "@/components/Movies/MoviesGrid.vue";
import moviesService from "@/services/movies.js";
import { onMounted, ref, reactive } from "@vue/runtime-core";

const list = ref([]);

const fetchData = async () => {
  list.value = await moviesService.getMovies("movie", "upcoming");
};
onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="soon">
    <MoviesGrid :movies="list" title="Upcoming" />
  </div>
</template>
