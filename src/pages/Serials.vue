<script setup>
import MoviesGrid from "@/components/Movies/MoviesGrid.vue";
import moviesService from "@/services/movies.js";
import { onMounted, ref, reactive } from "@vue/runtime-core";

const list = ref([]);

onMounted(async () => {
  list.value = await moviesService.getMovies("tv", "popular");
});
</script>

<template>
  <div class="Serials">
    <MoviesGrid :movies="list" title="Serials" />
  </div>
</template>
